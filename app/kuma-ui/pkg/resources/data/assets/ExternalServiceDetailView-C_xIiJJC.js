import{_ as E}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-CsUbsfgu.js";import{d as w,a as i,o,b as n,w as e,e as r,X as V,ab as R,c as S,m as p,a5 as h,f as c,t as m,a1 as $,q as f}from"./index-DzXsKW1h.js";import{T as b}from"./TagList-BIbzDl-h.js";import"./CodeBlock-CqYy31tT.js";import"./toYaml-DB9FPXFY.js";const B={key:2,class:"stack"},D={class:"columns"},L=w({__name:"ExternalServiceDetailView",setup(F){return(M,N)=>{const x=i("KCard"),_=i("DataSource"),v=i("AppView"),C=i("RouteView");return o(),n(C,{name:"external-service-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:a,t:l})=>[r(v,null,{default:e(()=>[r(_,{src:`/meshes/${a.params.mesh}/external-services/${a.params.service}`},{default:e(({data:t,error:u})=>[u?(o(),n(V,{key:0,error:u},null,8,["error"])):t===void 0?(o(),n(R,{key:1})):(o(),S("div",B,[r(x,{"data-testid":"external-service-details"},{default:e(()=>[p("div",D,[r(h,null,{title:e(()=>[c(m(l("http.api.property.address")),1)]),body:e(()=>[r($,{text:t.networking.address},null,8,["text"])]),_:2},1024),c(),t.tags?(o(),n(h,{key:0},{title:e(()=>[c(m(l("http.api.property.tags")),1)]),body:e(()=>[r(b,{tags:t.tags},null,8,["tags"])]),_:2},1024)):f("",!0)])]),_:2},1024),c(),p("div",null,[p("h3",null,m(l("external-services.detail.config")),1),c(),r(E,{class:"mt-4","data-testid":"external-service-config",resource:t.config,"is-searchable":"",query:a.params.codeSearch,"is-filter-mode":a.params.codeFilter,"is-reg-exp-mode":a.params.codeRegExp,onQueryChange:s=>a.update({codeSearch:s}),onFilterModeChange:s=>a.update({codeFilter:s}),onRegExpModeChange:s=>a.update({codeRegExp:s})},{default:e(({copy:s,copying:y})=>[y?(o(),n(_,{key:0,src:`/meshes/${t.mesh}/external-services/${t.name}/as/kubernetes?no-store`,onChange:d=>{s(g=>g(d))},onError:d=>{s((g,k)=>k(d))}},null,8,["src","onChange","onError"])):f("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])]))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{L as default};