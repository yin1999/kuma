package client_test

import (
	"context"
	"fmt"
	"sync"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	mesh_proto "github.com/kumahq/kuma/api/mesh/v1alpha1"
	"github.com/kumahq/kuma/api/system/v1alpha1"
	kuma_cp "github.com/kumahq/kuma/pkg/config/app/kuma-cp"
	config_core "github.com/kumahq/kuma/pkg/config/core"
	"github.com/kumahq/kuma/pkg/core"
	config_manager "github.com/kumahq/kuma/pkg/core/config/manager"
	hostnamegenerator_api "github.com/kumahq/kuma/pkg/core/resources/apis/hostnamegenerator/api/v1alpha1"
	"github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	"github.com/kumahq/kuma/pkg/core/resources/apis/system"
	"github.com/kumahq/kuma/pkg/core/resources/manager"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/registry"
	"github.com/kumahq/kuma/pkg/core/resources/store"
	core_runtime "github.com/kumahq/kuma/pkg/core/runtime"
	kds_context "github.com/kumahq/kuma/pkg/kds/context"
	client_v2 "github.com/kumahq/kuma/pkg/kds/v2/client"
	sync_store_v2 "github.com/kumahq/kuma/pkg/kds/v2/store"
	core_metrics "github.com/kumahq/kuma/pkg/metrics"
	"github.com/kumahq/kuma/pkg/plugins/resources/memory"
	"github.com/kumahq/kuma/pkg/test/grpc"
	"github.com/kumahq/kuma/pkg/test/kds/samples"
	"github.com/kumahq/kuma/pkg/test/kds/setup"
)

var _ = Describe("Zone Delta Sync", func() {
	zoneName := "zone-1"

	runtimeInfo := core_runtime.NewRuntimeInfo("zone-inst", config_core.Zone)
	ingressFunc := func(zone string) *mesh_proto.ZoneIngress {
		return &mesh_proto.ZoneIngress{
			Zone: zone,
			Networking: &mesh_proto.ZoneIngress_Networking{
				Address: "192.168.0.1",
				Port:    1212,
			},
			AvailableServices: []*mesh_proto.ZoneIngress_AvailableService{
				{
					Tags: map[string]string{
						mesh_proto.ServiceTag: "backend",
						mesh_proto.ZoneTag:    fmt.Sprintf("not-%s", zone),
					},
				},
			},
		}
	}

	var zoneStore store.ResourceStore
	var zoneSyncer sync_store_v2.ResourceSyncer
	var globalStore store.ResourceStore
	var closeFunc func()

	BeforeEach(func() {
		globalStore = memory.NewStore()
		wg := &sync.WaitGroup{}

		cfg := kuma_cp.DefaultConfig()
		cfg.Multizone.Zone.Name = "global"

		kdsCtx := kds_context.DefaultContext(context.Background(), manager.NewResourceManager(globalStore), cfg)
		srv, err := setup.NewKdsServerBuilder(globalStore).
			WithTypes(kdsCtx.TypesSentByGlobal).
			WithKdsContext(kdsCtx).
			Delta()
		Expect(err).ToNot(HaveOccurred())
		serverStream := grpc.NewMockDeltaServerStream()
		wg.Add(1)
		go func() {
			defer func() {
				wg.Done()
				GinkgoRecover()
			}()
			Expect(srv.GlobalToZoneSync(serverStream)).ToNot(HaveOccurred())
		}()

		stop := make(chan struct{})
		clientStream := serverStream.ClientStream(stop)

		zoneStore = memory.NewStore()
		metrics, err := core_metrics.NewMetrics("")
		Expect(err).ToNot(HaveOccurred())
		zoneSyncer, err = sync_store_v2.NewResourceSyncer(core.Log.WithName("kds-syncer"), zoneStore, store.NoTransactions{}, metrics, context.Background())
		Expect(err).ToNot(HaveOccurred())

		wg.Add(1)
		go func() {
			defer wg.Done()
			policySync := client_v2.NewKDSSyncClient(
				core.Log.WithName("kds-sink"),
				kdsCtx.TypesSentByGlobal,
				client_v2.NewDeltaKDSStream(clientStream, zoneName, runtimeInfo, ""),
				sync_store_v2.ZoneSyncCallback(context.Background(), zoneSyncer, false, nil, "kuma-system"), 0,
			)
			_ = policySync.Receive()
		}()
		closeFunc = func() {
			defer GinkgoRecover()
			Expect(clientStream.CloseSend()).To(Succeed())
			close(stop)
			wg.Wait()
		}
	})

	AfterEach(func() {
		closeFunc()
	})

	It("should sync policies from global store to the local", func() {
		err := globalStore.Create(context.Background(), &mesh.MeshResource{Spec: samples.Mesh1},
			store.CreateByKey("mesh-1", model.NoMesh),
			store.CreateWithLabels(map[string]string{"foo": "bar"}),
		)
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			actual := mesh.MeshResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(WithTransform(func([]*mesh.MeshResource) []string {
				var out []string
				for _, item := range actual.Items {
					out = append(out, item.Meta.GetName())
				}
				return out
			}, ConsistOf("mesh-1")))
		}, "5s", "100ms").Should(Succeed())

		actual := mesh.MeshResourceList{}
		err = zoneStore.List(context.Background(), &actual)
		Expect(err).ToNot(HaveOccurred())

		Expect(actual.Items[0].Spec).To(Equal(samples.Mesh1))
		Expect(actual.Items[0].Meta.GetLabels()).To(Equal(map[string]string{
			mesh_proto.ResourceOriginLabel: string(mesh_proto.GlobalResourceOrigin),
			"foo":                          "bar",
		}))
	})

	It("should sync policies update and remove from global store to the local", func() {
		// when create Mesh resource
		err := globalStore.Create(context.Background(), &mesh.MeshResource{Spec: samples.Mesh1},
			store.CreateByKey("mesh-1", model.NoMesh),
			store.CreateWithLabels(map[string]string{"foo": "bar"}),
		)
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			actual := mesh.MeshResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(WithTransform(func([]*mesh.MeshResource) []string {
				var out []string
				for _, item := range actual.Items {
					out = append(out, item.Meta.GetName())
				}
				return out
			}, ConsistOf("mesh-1")))
		}, "5s", "100ms").Should(Succeed())

		// then zone store should have mesh resource
		actual := mesh.MeshResourceList{}
		err = zoneStore.List(context.Background(), &actual)
		Expect(err).ToNot(HaveOccurred())

		Expect(actual.Items[0].Spec).To(Equal(samples.Mesh1))
		Expect(actual.Items[0].Meta.GetLabels()).To(Equal(map[string]string{
			mesh_proto.ResourceOriginLabel: string(mesh_proto.GlobalResourceOrigin),
			"foo":                          "bar",
		}))

		// get mesh
		mesh1 := mesh.NewMeshResource()
		err = zoneStore.Get(context.Background(), mesh1, store.GetByKey("mesh-1", model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		// when update mesh
		mesh1.Spec = &mesh_proto.Mesh{}
		err = globalStore.Update(context.Background(), mesh1, store.UpdateWithLabels(map[string]string{"foo": "barbar", "newlabel": "newvalue"}))
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			actual := mesh.MeshResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(HaveLen(1))
			// then zone store should have updated mesh
			g.Expect(actual.Items[0].GetSpec().(*mesh_proto.Mesh).Mtls).To(BeNil())
			g.Expect(actual.Items[0].GetMeta().GetLabels()).To(Equal(map[string]string{
				mesh_proto.ResourceOriginLabel: string(mesh_proto.GlobalResourceOrigin),
				"foo":                          "barbar",
				"newlabel":                     "newvalue",
			}))
		}, "5s", "100ms").Should(Succeed())

		// when delete Mesh resource
		err = globalStore.Delete(context.Background(), mesh.NewMeshResource(), store.DeleteByKey("mesh-1", model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			actual := mesh.MeshResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(BeEmpty())
		}, "5s", "100ms").Should(Succeed())
	})
	labelFn := func(zoneName string) map[string]string {
		return map[string]string{
			mesh_proto.ZoneTag:             zoneName,
			mesh_proto.ResourceOriginLabel: string(mesh_proto.ZoneResourceOrigin),
		}
	}

	It("should sync ingresses", func() {
		// create Ingress for current zone, shouldn't be synced
		err := globalStore.Create(context.Background(), &mesh.ZoneIngressResource{Spec: ingressFunc(zoneName)}, store.CreateByKey("dp-1", model.NoMesh), store.CreateWithLabels(labelFn(zoneName)))
		Expect(err).ToNot(HaveOccurred())
		err = globalStore.Create(context.Background(), &mesh.ZoneIngressResource{Spec: ingressFunc("another-zone-1")}, store.CreateByKey("dp-2", model.NoMesh), store.CreateWithLabels(labelFn("another-zone-1")))
		Expect(err).ToNot(HaveOccurred())
		err = globalStore.Create(context.Background(), &mesh.ZoneIngressResource{Spec: ingressFunc("another-zone-2")}, store.CreateByKey("dp-3", model.NoMesh), store.CreateWithLabels(labelFn("another-zone-2")))
		Expect(err).ToNot(HaveOccurred())

		Eventually(func() int {
			actual := mesh.ZoneIngressResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			Expect(err).ToNot(HaveOccurred())
			return len(actual.Items)
		}, "5s", "100ms").Should(Equal(2))

		actual := mesh.ZoneIngressResourceList{}
		err = zoneStore.List(context.Background(), &actual)
		Expect(err).ToNot(HaveOccurred())
	})

	It("should have up to date list of consumed types", func() {
		excludeTypes := map[model.ResourceType]bool{
			mesh.DataplaneInsightType:  true,
			mesh.DataplaneOverviewType: true,
			mesh.ServiceOverviewType:   true,
			mesh.DataplaneType:         true,
		}

		// take all mesh-scoped types and exclude types that won't be synced
		actualConsumedTypes := registry.Global().ObjectTypes(model.HasScope(model.ScopeMesh), model.TypeFilterFn(func(descriptor model.ResourceTypeDescriptor) bool {
			return !excludeTypes[descriptor.Name]
		}))

		// plus the global-scope types
		extraTypes := []model.ResourceType{
			mesh.MeshType,
			mesh.ZoneIngressType,
			system.ConfigType,
			system.GlobalSecretType,
			hostnamegenerator_api.HostnameGeneratorType,
		}

		actualConsumedTypes = append(actualConsumedTypes, extraTypes...)
		Expect(actualConsumedTypes).To(ConsistOf(registry.Global().ObjectTypes(model.SentFromGlobalToZone())))
	})

	It("should not delete predefined ConfigMaps in the Zone cluster", func() {
		// create kuma-cluster-id ConfigMap in Global
		err := globalStore.Create(context.Background(), &system.ConfigResource{Spec: &v1alpha1.Config{Config: "cluster-id"}},
			store.CreateByKey(config_manager.ClusterIdConfigKey, model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		// create kuma-cp-leader ConfigMap in Zone
		err = zoneStore.Create(context.Background(), &system.ConfigResource{Spec: &v1alpha1.Config{Config: "leader"}},
			store.CreateByKey("kuma-cp-leader", model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		// create kuma-control-plane-config ConfigMap in Zone
		err = zoneStore.Create(context.Background(), &system.ConfigResource{Spec: &v1alpha1.Config{Config: "kuma-cp config"}},
			store.CreateByKey("kuma-control-plane-config", model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		Eventually(func(g Gomega) {
			actual := system.ConfigResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(WithTransform(func([]*system.ConfigResource) []string {
				var out []string
				for _, item := range actual.Items {
					out = append(out, item.Meta.GetName())
				}
				return out
			}, ConsistOf("kuma-cluster-id", "kuma-cp-leader", "kuma-control-plane-config")))
		}, "5s", "100ms").Should(Succeed())

		actual := system.ConfigResourceList{}
		err = zoneStore.List(context.Background(), &actual)
		Expect(err).ToNot(HaveOccurred())

		actualNames := []string{}
		for _, a := range actual.Items {
			actualNames = append(actualNames, a.GetMeta().GetName())
		}
		expectedNames := []string{
			"kuma-cp-leader",
			"kuma-control-plane-config",
			"kuma-cluster-id",
		}
		Expect(actualNames).To(ConsistOf(expectedNames))
	})

	It("should override zone resources that moved to global by user during the federation process", func() {
		// given zone with "mesh-1"
		Expect(zoneStore.Create(context.Background(), &mesh.MeshResource{Spec: samples.Mesh1}, store.CreateByKey("mesh-1", model.NoMesh))).To(Succeed())
		// when user manually exports "mesh-1" to global
		Expect(globalStore.Create(context.Background(), &mesh.MeshResource{Spec: samples.Mesh1}, store.CreateByKey("mesh-1", model.NoMesh))).To(Succeed())
		// then it's synced back to zone with "kuma.io/origin" label
		Eventually(func(g Gomega) {
			actual := mesh.MeshResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(HaveLen(1))
			g.Expect(actual.Items[0].GetMeta().GetLabels()).To(Equal(map[string]string{
				mesh_proto.ResourceOriginLabel: string(mesh_proto.GlobalResourceOrigin),
			}))
		}, "5s", "100ms").Should(Succeed())
	})

	It("should not override zone resources that conflict with global for secret", func() {
		// given global with 3 secrets
		Expect(globalStore.Create(context.Background(), &mesh.MeshResource{Spec: samples.Mesh1}, store.CreateByKey("mesh-1", model.NoMesh))).To(Succeed())
		Expect(globalStore.Create(context.Background(), &system.SecretResource{Spec: samples.Secret}, store.CreateByKey("secret-global", "mesh-1"))).To(Succeed())
		Expect(globalStore.Create(context.Background(), &system.SecretResource{Spec: samples.Secret}, store.CreateByKey("secret", "mesh-1"))).To(Succeed())

		// given zone with 2 secrets (including "secret" that is also in global)
		Expect(zoneStore.Create(context.Background(), &system.SecretResource{Spec: samples.Secret2}, store.CreateByKey("secret", "mesh-1"))).To(Succeed())
		Expect(zoneStore.Create(context.Background(), &system.SecretResource{Spec: samples.Secret}, store.CreateByKey("secret-zone", "mesh-1"))).To(Succeed())

		// then the zone should have 3 secrets and "secret" should not be overridden
		Eventually(func(g Gomega) {
			actual := system.SecretResourceList{}
			err := zoneStore.List(context.Background(), &actual)
			g.Expect(err).ToNot(HaveOccurred())
			g.Expect(actual.Items).To(WithTransform(func([]*system.SecretResource) []string {
				var out []string
				for _, item := range actual.Items {
					out = append(out, item.Meta.GetName())
				}
				return out
			}, ConsistOf("secret", "secret-global", "secret-zone")))
			for _, item := range actual.Items {
				if item.GetMeta().GetName() == "secret" {
					g.Expect(item.GetSpec()).To(Equal(samples.Secret2), "secret should not be overridden")
				}
			}
		}, "5s", "100ms").Should(Succeed())
	})
})
