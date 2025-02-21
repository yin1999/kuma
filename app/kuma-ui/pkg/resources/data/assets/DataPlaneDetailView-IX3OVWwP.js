import{d as tt,J as et,M as at,r as m,o as s,m as y,w as t,b as o,p as R,$ as nt,c as u,F as c,v,e as a,s as w,t as d,q as C,U as _,S as ot,T as q,K as st,C as it,_ as dt}from"./index-CU8xvgkY.js";import{S as rt}from"./SummaryView-CnYQnAYk.js";import{T as lt}from"./TagList-DSw_mSUr.js";import{C as O,a as V,b as B}from"./ConnectionTraffic-ChhFBMtm.js";const pt={"data-testid":"dataplane-mtls"},ut={class:"columns"},mt={key:0,"data-testid":"dataplane-subscriptions"},yt=tt({__name:"DataPlaneDetailView",props:{data:{},mesh:{}},setup(L){const A=et(),i=L,M=at(()=>i.data.warnings.concat(...i.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[],...i.data.dataplaneInsight.mTLS?[]:[{kind:"DPP_NO_MTLS"}]));return(ct,e)=>{const j=m("XI18n"),N=m("XNotification"),$=m("XIcon"),D=m("DataCollection"),X=m("XLayout"),T=m("XAction"),S=m("XBadge"),F=m("XCopyButton"),G=m("XAboutCard"),E=m("XEmptyState"),J=m("XInputSwitch"),K=m("XProgress"),h=m("XCard"),U=m("RouterView"),H=m("AppView"),Q=m("DataSource"),W=m("RouteView");return s(),y(W,{params:{inactive:Boolean,mesh:"",proxy:"",proxyType:"",subscription:""},name:"data-plane-detail-view"},{default:t(({route:g,t:r,can:P,me:x,uri:Y})=>[o(Q,{src:Y(R(nt),"/connections/stats/for/:proxyType/:name/:mesh/:socketAddress",{proxyType:{ingresses:"zone-ingress",egresses:"zone-egress"}[g.params.proxyType]??"dataplane",name:g.params.proxy,mesh:g.params.mesh||"*",socketAddress:i.data.dataplane.networking.inboundAddress})},{default:t(({data:k,error:z,refresh:Z})=>[o(H,{notifications:!0},{default:t(()=>[(s(!0),u(c,null,v(M.value,n=>(s(),y(N,{key:n.kind,"data-testid":`warning-${n.kind}`,uri:`${n.kind}.${i.data.id}`},{default:t(()=>[o(j,{path:`common.warnings.${n.kind}`,params:n.payload},null,8,["path","params"])]),_:2},1032,["data-testid","uri"]))),128)),e[47]||(e[47]=a()),z?(s(),y(N,{key:0,uri:`warning-stats-loading.${i.data.id}`},{default:t(()=>[e[0]||(e[0]=a(`
          The below view is not enhanced with runtime stats (Error loading stats: `)),w("strong",null,d(z.toString()),1),e[1]||(e[1]=a(`)
        `))]),_:2},1032,["uri"])):C("",!0),e[48]||(e[48]=a()),o(X,{type:"stack","data-testid":"dataplane-details"},{default:t(()=>[o(G,{title:r("data-planes.routes.item.about.title"),created:i.data.creationTime,modified:i.data.modificationTime},{default:t(()=>[o(_,{layout:"horizontal"},{title:t(()=>[a(d(r("http.api.property.status")),1)]),body:t(()=>[o(X,{type:"separated"},{default:t(()=>[o(ot,{status:i.data.status},null,8,["status"]),e[2]||(e[2]=a()),i.data.dataplaneType==="standard"?(s(),y(D,{key:0,items:i.data.dataplane.networking.inbounds,predicate:n=>n.state!=="Ready",empty:!1},{default:t(({items:n})=>[o($,{name:"info"},{default:t(()=>[w("ul",null,[(s(!0),u(c,null,v(n,p=>(s(),u("li",{key:`${p.service}:${p.port}`},d(r("data-planes.routes.item.unhealthy_inbound",{service:p.service,port:p.port})),1))),128))])]),_:2},1024)]),_:2},1032,["items","predicate"])):C("",!0)]),_:2},1024)]),_:2},1024),e[9]||(e[9]=a()),P("use zones")&&i.data.zone?(s(),y(_,{key:0,layout:"horizontal"},{title:t(()=>[a(d(r("http.api.property.zone")),1)]),body:t(()=>[o(S,{appearance:"decorative"},{default:t(()=>[o(T,{to:{name:"zone-cp-detail-view",params:{zone:i.data.zone}}},{default:t(()=>[a(d(i.data.zone),1)]),_:1},8,["to"])]),_:1})]),_:2},1024)):C("",!0),e[10]||(e[10]=a()),o(_,{layout:"horizontal"},{title:t(()=>[a(d(r("http.api.proptery.type")),1)]),body:t(()=>[o(S,{appearance:"decorative"},{default:t(()=>[a(d(r(`data-planes.type.${i.data.dataplaneType}`)),1)]),_:2},1024)]),_:2},1024),e[11]||(e[11]=a()),i.data.namespace.length>0?(s(),y(_,{key:1,layout:"horizontal"},{title:t(()=>[a(d(r("http.api.property.namespace")),1)]),body:t(()=>[o(S,{appearance:"decorative"},{default:t(()=>[a(d(i.data.namespace),1)]),_:1})]),_:2},1024)):C("",!0),e[12]||(e[12]=a()),o(_,{layout:"horizontal"},{title:t(()=>[a(d(r("http.api.property.address")),1)]),body:t(()=>[o(F,{variant:"badge",format:"default",text:`${i.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024),e[13]||(e[13]=a()),i.data.dataplane.networking.gateway?(s(),y(_,{key:2,layout:"horizontal"},{title:t(()=>[a(d(r("http.api.property.tags")),1)]),body:t(()=>[o(lt,{tags:i.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]),_:2},1032,["title","created","modified"]),e[43]||(e[43]=a()),o(h,{class:"traffic","data-testid":"dataplane-traffic"},{default:t(()=>[o(X,{type:"columns"},{default:t(()=>[o(O,null,{title:t(()=>[o(X,{type:"separated"},{default:t(()=>[o($,{name:"inbound"}),e[14]||(e[14]=a()),e[15]||(e[15]=w("span",null,"Inbounds",-1))]),_:1})]),default:t(()=>[e[17]||(e[17]=a()),(s(!0),u(c,null,v([i.data.dataplane.networking.type==="gateway"?Object.entries((k==null?void 0:k.inbounds)??{}).reduce((n,[p,l])=>{var b;const f=p.split("_").at(-1);return f===(((b=i.data.dataplane.networking.admin)==null?void 0:b.port)??"9901")?n:n.concat([{...i.data.dataplane.networking.inbounds[0],name:p,port:Number(f),protocol:["http","tcp"].find(I=>typeof l[I]<"u")??"tcp",addressPort:`${i.data.dataplane.networking.inbounds[0].address}:${f}`}])},[]):i.data.dataplane.networking.inbounds],n=>(s(),y(V,{key:n,type:"inbound","data-testid":"dataplane-inbounds"},{default:t(()=>[o(D,{type:"inbounds",items:n,predicate:p=>p.port!==49151},q({default:t(({items:p})=>[o(X,{type:"stack",size:"small"},{default:t(()=>[(s(!0),u(c,null,v(p,l=>(s(),u(c,{key:`${l.name}`},[(s(!0),u(c,null,v([k==null?void 0:k.inbounds[l.name]],f=>(s(),y(B,{key:f,"data-testid":"dataplane-inbound",protocol:l.protocol,service:P("use service-insights",i.mesh)?l.tags["kuma.io/service"]:"","port-name":l.portName,traffic:typeof z>"u"?f:{name:"",protocol:l.protocol,port:`${l.port}`}},{default:t(()=>[o(T,{"data-action":"",to:{name:(b=>b.includes("bound")?b.replace("-outbound-","-inbound-"):"data-plane-connection-inbound-summary-overview-view")(String(R(A).name)),params:{connection:l.name},query:{inactive:g.params.inactive}}},{default:t(()=>[a(d(l.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","port-name","traffic"]))),128))],64))),128))]),_:2},1024)]),_:2},[i.data.dataplaneType==="delegated"?{name:"empty",fn:t(()=>[o(E,null,{default:t(()=>[w("p",null,`
                            This proxy is a delegated gateway therefore `+d(r("common.product.name"))+` does not have any visibility into inbounds for this gateway.
                          `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"])]),_:2},1024))),128))]),_:2},1024),e[27]||(e[27]=a()),o(O,null,q({title:t(()=>[o(X,{type:"separated"},{default:t(()=>[o($,{name:"outbound"}),e[21]||(e[21]=a()),e[22]||(e[22]=w("span",null,"Outbounds",-1))]),_:1})]),default:t(()=>[e[25]||(e[25]=a()),e[26]||(e[26]=a()),typeof z>"u"?(s(),u(c,{key:0},[typeof k>"u"?(s(),y(K,{key:0})):(s(),u(c,{key:1},[o(V,{type:"passthrough"},{default:t(()=>[o(B,{protocol:"passthrough",traffic:k.passthrough},{default:t(()=>e[23]||(e[23]=[a(`
                        Non mesh traffic
                      `)])),_:2},1032,["traffic"])]),_:2},1024),e[24]||(e[24]=a()),(s(),u(c,null,v(["upstream"],n=>o(D,{key:n,type:"outbounds",predicate:g.params.inactive?void 0:([p,l])=>{var f,b;return((typeof l.tcp<"u"?(f=l.tcp)==null?void 0:f[`${n}_cx_rx_bytes_total`]:(b=l.http)==null?void 0:b[`${n}_rq_total`])??0)>0},items:Object.entries(k.outbounds)},{default:t(({items:p})=>[p.length>0?(s(),y(V,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:t(()=>[(s(),u(c,null,v([/-([a-f0-9]){16}$/],l=>o(X,{key:l,type:"stack",size:"small"},{default:t(()=>[(s(!0),u(c,null,v(p,([f,b])=>(s(),y(B,{key:`${f}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(I=>typeof b[I]<"u")??"tcp",traffic:b,service:b.$resourceMeta.type===""?f.replace(l,""):void 0,direction:n},{default:t(()=>[o(T,{"data-action":"",to:{name:(I=>I.includes("bound")?I.replace("-inbound-","-outbound-"):"data-plane-connection-outbound-summary-overview-view")(String(R(A).name)),params:{connection:f},query:{inactive:g.params.inactive}}},{default:t(()=>[a(d(f),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))]),_:2},1024)),64))]),_:2},1024)):C("",!0)]),_:2},1032,["predicate","items"])),64))],64))],64)):(s(),y(E,{key:1}))]),_:2},[k?{name:"actions",fn:t(()=>[o(J,{checked:g.params.inactive,"data-testid":"dataplane-outbounds-inactive-toggle",onChange:n=>g.update({inactive:n})},{label:t(()=>e[18]||(e[18]=[a(`
                      Show inactive
                    `)])),_:2},1032,["checked","onChange"]),e[20]||(e[20]=a()),o(T,{action:"refresh",appearance:"primary",onClick:Z},{default:t(()=>e[19]||(e[19]=[a(`
                    Refresh
                  `)])),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024),e[44]||(e[44]=a()),o(U,null,{default:t(n=>[n.route.name!==g.name?(s(),y(rt,{key:0,width:"670px",onClose:function(){g.replace({name:"data-plane-detail-view",params:{mesh:g.params.mesh,proxy:g.params.proxy},query:{inactive:g.params.inactive?null:void 0}})}},{default:t(()=>[(s(),y(st(n.Component),{data:g.params.subscription.length>0?i.data.dataplaneInsight.subscriptions:n.route.name.includes("-inbound-")?i.data.dataplane.networking.inbounds:(k==null?void 0:k.outbounds)||{},networking:i.data.dataplane.networking},null,8,["data","networking"]))]),_:2},1032,["onClose"])):C("",!0)]),_:2},1024),e[45]||(e[45]=a()),w("div",pt,[i.data.dataplaneInsight.mTLS?(s(!0),u(c,{key:0},v([i.data.dataplaneInsight.mTLS],n=>(s(),y(h,{key:n},{title:t(()=>[w("h2",null,d(r("data-planes.routes.item.mtls.title")),1)]),default:t(()=>[e[37]||(e[37]=a()),w("div",ut,[o(_,null,{title:t(()=>[a(d(r("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:t(()=>[a(d(r("common.formats.datetime",{value:Date.parse(n.certificateExpirationTime)})),1)]),_:2},1024),e[33]||(e[33]=a()),o(_,null,{title:t(()=>[a(d(r("data-planes.routes.item.mtls.generation_time.title")),1)]),body:t(()=>[a(d(r("common.formats.datetime",{value:Date.parse(n.lastCertificateRegeneration)})),1)]),_:2},1024),e[34]||(e[34]=a()),o(_,null,{title:t(()=>[a(d(r("data-planes.routes.item.mtls.regenerations.title")),1)]),body:t(()=>[a(d(r("common.formats.integer",{value:n.certificateRegenerations})),1)]),_:2},1024),e[35]||(e[35]=a()),o(_,null,{title:t(()=>[a(d(r("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:t(()=>[a(d(n.issuedBackend),1)]),_:2},1024),e[36]||(e[36]=a()),o(_,null,{title:t(()=>[a(d(r("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:t(()=>[w("ul",null,[(s(!0),u(c,null,v(n.supportedBackends,p=>(s(),u("li",{key:p},d(p),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):C("",!0)]),e[46]||(e[46]=a()),i.data.dataplaneInsight.subscriptions.length>0?(s(),u("div",mt,[o(h,null,{title:t(()=>[w("h2",null,d(r("data-planes.routes.item.subscriptions.title")),1)]),default:t(()=>[e[42]||(e[42]=a()),o(it,{headers:[{...x.get("headers.instanceId"),label:r("http.api.property.instanceId"),key:"instanceId"},{...x.get("headers.version"),label:r("http.api.property.version"),key:"version"},{...x.get("headers.connected"),label:r("http.api.property.connected"),key:"connected"},{...x.get("headers.disconnected"),label:r("http.api.property.disconnected"),key:"disconnected"},{...x.get("headers.responses"),label:r("http.api.property.responses"),key:"responses"}],"is-selected-row":n=>n.id===g.params.subscription,items:i.data.dataplaneInsight.subscriptions.map((n,p,l)=>l[l.length-(p+1)]),onResize:x.set},{instanceId:t(({row:n})=>[o(T,{"data-action":"",to:{name:"data-plane-subscription-summary-view",params:{subscription:n.id}}},{default:t(()=>[a(d(n.controlPlaneInstanceId),1)]),_:2},1032,["to"])]),version:t(({row:n})=>{var p,l;return[a(d(((l=(p=n.version)==null?void 0:p.kumaDp)==null?void 0:l.version)??"-"),1)]}),connected:t(({row:n})=>[a(d(r("common.formats.datetime",{value:Date.parse(n.connectTime??"")})),1)]),disconnected:t(({row:n})=>[n.disconnectTime?(s(),u(c,{key:0},[a(d(r("common.formats.datetime",{value:Date.parse(n.disconnectTime)})),1)],64)):C("",!0)]),responses:t(({row:n})=>{var p;return[(s(!0),u(c,null,v([((p=n.status)==null?void 0:p.total)??{}],l=>(s(),u(c,null,[a(d(l.responsesSent)+"/"+d(l.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"])]),_:2},1024)])):C("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}}),vt=dt(yt,[["__scopeId","data-v-61f5a42e"]]);export{vt as default};
