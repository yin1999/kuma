import{d as _,u as d,r as i,v as u,o as r,j as c,b as l,g}from"./index-f9d036ef.js";import{_ as k}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-5a05c09d.js";import{_ as w}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-25a754bd.js";import{E}from"./ErrorBlock-b812cfe0.js";import{_ as z}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-90dcbead.js";import{u as h}from"./store-ba47d389.js";import{u as y}from"./index-accaf01e.js";import"./AccordionList-33bf8c88.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-7ae31aca.js";import"./EnvoyData-11f6c368.js";import"./kongponents.es-186331d0.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-976cc725.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-dfe48f41.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-17a8f1eb.js";import"./TabsWidget-aa4c3028.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const B={class:"zone-details"},$={key:3,class:"kcard-border"},H=_({__name:"ZoneEgressDetailView",setup(b){const p=y(),e=d(),f=h(),o=i(null),t=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-egress-detail-view"&&n()}),u(()=>e.params.name,function(){e.name==="zone-egress-detail-view"&&n()}),v();function v(){f.dispatch("updatePageTitle",e.params.zoneEgress),n()}async function n(){t.value=!0,a.value=null;const m=e.params.zoneEgress;try{o.value=await p.getZoneEgressOverview({name:m})}catch(s){o.value=null,s instanceof Error?a.value=s:console.error(s)}finally{t.value=!1}}return(m,s)=>(r(),c("div",B,[t.value?(r(),l(z,{key:0})):a.value!==null?(r(),l(E,{key:1,error:a.value},null,8,["error"])):o.value===null?(r(),l(w,{key:2})):(r(),c("div",$,[g(k,{"zone-egress-overview":o.value},null,8,["zone-egress-overview"])]))]))}});export{H as default};