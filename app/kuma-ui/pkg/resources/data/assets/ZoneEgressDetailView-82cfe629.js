import{d as _,u as d,r as i,v as u,j as c,e as l,g,o as r}from"./index-47d6e59e.js";import{_ as k}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-b77cd364.js";import{_ as w}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-d7cc37a6.js";import{E}from"./ErrorBlock-b3a844df.js";import{_ as z}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-51795c0c.js";import{u as h}from"./store-776eaf7b.js";import{u as y}from"./index-24c07176.js";import"./AccordionList-8280ebc0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./EnvoyData-a6244216.js";import"./kongponents.es-276be423.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-5500cd34.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-93579ba8.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-c4b8b5fa.js";import"./TabsWidget-1a548cec.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const B={class:"zone-details"},$={key:3,class:"kcard-border"},G=_({__name:"ZoneEgressDetailView",setup(x){const p=y(),e=d(),f=h(),o=i(null),t=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-egress-detail-view"&&n()}),u(()=>e.params.name,function(){e.name==="zone-egress-detail-view"&&n()}),v();function v(){f.dispatch("updatePageTitle",e.params.zoneEgress),n()}async function n(){t.value=!0,a.value=null;const m=e.params.zoneEgress;try{o.value=await p.getZoneEgressOverview({name:m})}catch(s){o.value=null,s instanceof Error?a.value=s:console.error(s)}finally{t.value=!1}}return(m,s)=>(r(),c("div",B,[t.value?(r(),l(z,{key:0})):a.value!==null?(r(),l(E,{key:1,error:a.value},null,8,["error"])):o.value===null?(r(),l(w,{key:2})):(r(),c("div",$,[g(k,{"zone-egress-overview":o.value},null,8,["zone-egress-overview"])]))]))}});export{G as default};