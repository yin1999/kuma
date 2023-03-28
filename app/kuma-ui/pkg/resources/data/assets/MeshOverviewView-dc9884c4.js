import{d as L,i as N,j as _,n as S,o as s,c as l,a as d,u as c,G as w,e as n,H as A,l as z,m as G,r as k,J as H,K as E,L as J,w as C,g as u,F as b,z as D,y as h,k as T,_ as $,x}from"./index-a2028f71.js";import{C as W}from"./ContentWrapper-df2729cf.js";import{_ as q}from"./LabelList.vue_vue_type_style_index_0_lang-ef71f8a3.js";import{M as Q}from"./MeshResources-d2ca290c.js";import{_ as U}from"./YamlView.vue_vue_type_script_setup_true_lang-4ae4e109.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-eae22a5f.js";import"./ErrorBlock-cc8ef692.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-d1caf019.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d95cec58.js";import"./toYaml-4e00099e.js";const X={class:"chart-box-list"},Y=L({__name:"MeshCharts",setup(K){const r=N(),f=_(()=>r.getters.getChart("services",{title:"Services",showTotal:!0})),v=_(()=>r.getters.getChart("dataplanes",{title:"DP Proxies",showTotal:!0,isStatusChart:!0})),g=_(()=>r.getters.getChart("kumaDPVersions",{title:"Kuma DP",subtitle:"versions"})),y=_(()=>r.getters.getChart("envoyVersions",{title:"Envoy",subtitle:"versions"}));S(()=>r.state.selectedMesh,function(){p()}),p();function p(){r.dispatch("fetchMeshInsights",r.state.selectedMesh),r.dispatch("fetchServices",r.state.selectedMesh)}return(o,B)=>(s(),l("div",X,[d(w,{data:c(f)},null,8,["data"]),n(),d(w,{data:c(v)},null,8,["data"]),n(),d(w,{data:c(g)},null,8,["data"]),n(),d(w,{data:c(y)},null,8,["data"])]))}});const Z=A(Y,[["__scopeId","data-v-0f054518"]]),ee={key:0},te={key:1},ae={key:1},se={class:"policy-counts"},ne={key:0},oe={key:0,class:"mt-4"},le=L({__name:"MeshOverviewView",setup(K){const r=z(),f=G(),v=N(),g=k(!0),y=k(!1),p=k(!1),o=k(null),B=k(null),V=_(()=>o.value!==null?H(o.value):null),O=_(()=>{if(o.value===null)return null;const{name:t,type:a,creationTime:m,modificationTime:e}=o.value;return{name:t,type:a,created:E(m),modified:E(e),"Data Plane Proxies":v.state.meshInsight.dataplanes.total}}),R=_(()=>{var I;if(o.value===null)return null;const t=M(o.value,"mtls"),a=M(o.value,"logging"),m=M(o.value,"metrics"),e=M(o.value,"tracing"),i=!!((I=o.value.routing)!=null&&I.localityAwareLoadBalancing);return{mtls:t,logging:a,metrics:m,tracing:e,localityAwareLoadBalancing:i}}),F=_(()=>v.state.sidebar.insights.mesh.policies.total),j=_(()=>v.state.policyTypes.map(t=>{var a;return{...t,length:((a=v.state.meshInsight.policies[t.name])==null?void 0:a.total)??0}}));S(()=>f.params.mesh,function(){f.name==="single-mesh-overview"&&(g.value=!0,p.value=!1,y.value=!1,P())}),P();async function P(){g.value=!0,p.value=!1;const t=f.params.mesh;try{o.value=await r.getMesh({name:t}),B.value=await r.getMeshInsights({name:t})}catch(a){y.value=!0,p.value=!0,console.error(a)}finally{g.value=!1}}function M(t,a){if(t===null||t[a]===void 0)return!1;const m=t[a].enabledBackend??t[a].defaultBackend??t[a].backends[0].name,e=t[a].backends.find(i=>i.name===m);return`${e.type} / ${e.name}`}return(t,a)=>{const m=J("router-link");return s(),l(b,null,[d(Z,{class:"mt-24"}),n(),d(W,{class:"mt-8"},{content:C(()=>[o.value!==null?(s(),l("div",ee,[d(q,{"has-error":y.value,"is-loading":g.value,"is-empty":p.value},{default:C(()=>[u("div",null,[u("ul",null,[(s(!0),l(b,null,D(c(O),(e,i)=>(s(),l("li",{key:i},[u("h4",null,h(i),1),n(),typeof e=="boolean"?(s(),T(c($),{key:0,appearance:e?"success":"danger"},{default:C(()=>[n(h(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(s(),l("p",te,h(e),1))]))),128))])]),n(),u("div",null,[u("ul",null,[(s(!0),l(b,null,D(c(R),(e,i)=>(s(),l("li",{key:i},[u("h4",null,h(i),1),n(),typeof e=="boolean"?(s(),T(c($),{key:0,appearance:e?"success":"danger"},{default:C(()=>[n(h(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(s(),l("p",ae,h(e),1))]))),128))])]),n(),u("div",null,[u("ul",se,[u("li",null,[u("h4",null,`
                  Policies (`+h(c(F))+`)
                `,1),n(),u("ul",null,[(s(!0),l(b,null,D(c(j),(e,i)=>(s(),l(b,{key:i},[e.length!==0?(s(),l("li",ne,[d(m,{to:{name:"policy",params:{policyPath:e.path}}},{default:C(()=>[n(h(e.name)+": "+h(e.length),1)]),_:2},1032,["to"])])):x("",!0)],64))),128))])])])])]),_:1},8,["has-error","is-loading","is-empty"])])):x("",!0)]),_:1}),n(),c(V)!==null?(s(),l("div",oe,[d(U,{id:"code-block-mesh",content:c(V)},null,8,["content"])])):x("",!0),n(),d(Q,{class:"mt-6"})],64)}}});const ge=A(le,[["__scopeId","data-v-d6142749"]]);export{ge as default};
