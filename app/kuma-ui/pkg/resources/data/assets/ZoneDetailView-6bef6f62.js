import{d as k,u as z,q as l,s as p,o as a,a as s,w as _,h as c,b as f,g as b,k as h,e as y}from"./index-a4a530d1.js";import{_ as $}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-0689c124.js";import{j as x,k as B,g,_ as E}from"./RouteView.vue_vue_type_script_setup_true_lang-8e6a23b5.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f4fc2caf.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ddebee78.js";import{E as A}from"./ErrorBlock-cc9ab0db.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-2c479ce1.js";import"./kongponents.es-f7b55123.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-15a6fd20.js";import"./DefinitionListItem-f18ea925.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-6986223f.js";import"./TabsWidget-a42020cd.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-4f241d23.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-385921c7.js";const D={class:"zone-details"},O={key:3,class:"kcard-border","data-testid":"detail-view-details"},U=k({__name:"ZoneDetailView",setup(Z){const d=x(),e=z(),{t:m}=B(),t=l(null),n=l(!0),o=l(null);p(()=>e.params.mesh,function(){e.name==="zone-cp-detail-view"&&i()}),p(()=>e.params.name,function(){e.name==="zone-cp-detail-view"&&i()}),v();function v(){i()}async function i(){n.value=!0,o.value=null;const u=e.params.zone;try{t.value=await d.getZoneOverview({name:u})}catch(r){t.value=null,r instanceof Error?o.value=r:console.error(r)}finally{n.value=!1}}return(u,r)=>(a(),s(E,null,{default:_(({route:w})=>[c(V,{title:f(m)("zone-cps.routes.item.title",{name:w.params.zone})},null,8,["title"]),b(),c(g,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:f(m)("zone-cps.routes.item.breadcrumbs")}]},{default:_(()=>[h("div",D,[n.value?(a(),s(C,{key:0})):o.value!==null?(a(),s(A,{key:1,error:o.value},null,8,["error"])):t.value===null?(a(),s(N,{key:2})):(a(),y("div",O,[c($,{"zone-overview":t.value},null,8,["zone-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{U as default};
