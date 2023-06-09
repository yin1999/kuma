import{e as A}from"./kongponents.es-b1b03bc6.js";import{L as S}from"./LoadingBox-fee8605b.js";import{O as T,a as F,b as I}from"./OnboardingPage-1b8e8ee0.js";import{u as N,g as E,f as L,e as R,_ as $}from"./RouteView.vue_vue_type_script_setup_true_lang-0a949fda.js";import{_ as C}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d6bffc34.js";import{S as H}from"./StatusBadge-25083b63.js";import{d as M,r as b,m as w,Q as V,R as z,o as n,c as y,w as a,a as s,u as x,b as u,x as K,e as o,t as c,f as d,F as Q}from"./index-d7a51e8c.js";const U={key:0,class:"status-loading-box mb-4"},W={key:1},j={class:"mb-4"},q=M({__name:"DataplanesOverview",setup(G){const m=N(),{t:k}=E(),D=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=b({total:0,data:[]}),l=b(null),B=w(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),p=w(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);V(function(){f()}),_();function f(){l.value!==null&&window.clearTimeout(l.value)}async function _(){let i=!1;const r=[];try{const{items:t}=await m.getAllDataplanes({size:10});if(Array.isArray(t))for(const O of t){const{name:v,mesh:g}=O,P=await m.getDataplaneOverviewFromMesh({mesh:g,name:v}),h=z(P.dataplaneInsight);h==="offline"&&(i=!0),r.push({status:h,name:v,mesh:g})}}catch(t){console.error(t)}e.value.data=r,e.value.total=e.value.data.length,i&&(f(),l.value=window.setTimeout(_,1e3))}return(i,r)=>(n(),y(R,null,{default:a(()=>[s(C,{title:x(k)("onboarding.routes.dataplanes-overview.title")},null,8,["title"]),u(),s(L,null,{default:a(()=>[s(T,null,{header:a(()=>[s(F,null,K({title:a(()=>[o("p",null,c(B.value),1)]),_:2},[p.value!==null?{name:"description",fn:a(()=>[o("p",null,c(p.value),1)]),key:"0"}:void 0]),1024)]),content:a(()=>[e.value.data.length===0?(n(),d("div",U,[s(S)])):(n(),d("div",W,[o("p",j,[o("b",null,"Found "+c(e.value.data.length)+" DPPs:",1)]),u(),s(x(A),{class:"mb-4",fetcher:()=>e.value,headers:D,"disable-pagination":""},{status:a(({rowValue:t})=>[t?(n(),y(H,{key:0,status:t},null,8,["status"])):(n(),d(Q,{key:1},[u(`
                  —
                `)],64))]),_:1},8,["fetcher"])]))]),navigation:a(()=>[s(I,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1})]),_:1})]),_:1}))}});const se=$(q,[["__scopeId","data-v-4588fbe4"]]);export{se as default};