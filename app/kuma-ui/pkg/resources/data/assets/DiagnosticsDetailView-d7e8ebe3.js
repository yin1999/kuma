import{_ as g}from"./CodeBlock.vue_vue_type_style_index_0_lang-3e29b75c.js";import{E as f}from"./ErrorBlock-a3710a04.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5b5238ed.js";import{d as x,a as t,o as s,b as i,w as a,e as n,p as C,f as b}from"./index-e9fbefd3.js";import"./index-fce48c05.js";import"./TextWithCopyButton-0bfc7306.js";import"./CopyButton-6f1494f2.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-060e8475.js";const N=x({__name:"DiagnosticsDetailView",setup(R){return(k,y)=>{const l=t("RouteTitle"),p=t("KCard"),m=t("AppView"),u=t("DataSource"),_=t("RouteView");return s(),i(_,{name:"diagnostics",params:{codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:r})=>[n(u,{src:"/config"},{default:a(({data:c,error:d})=>[n(m,{breadcrumbs:[{to:{name:"diagnostics"},text:r("diagnostics.routes.item.breadcrumbs")}]},{title:a(()=>[C("h1",null,[n(l,{title:r("diagnostics.routes.item.title")},null,8,["title"])])]),default:a(()=>[b(),n(p,null,{default:a(()=>[d?(s(),i(f,{key:0,error:d},null,8,["error"])):c===void 0?(s(),i(h,{key:1})):(s(),i(g,{key:2,id:"code-block-diagnostics","data-testid":"code-block-diagnostics",language:"json",code:JSON.stringify(c,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1024)]),_:2},1032,["breadcrumbs"])]),_:2},1024)]),_:1})}}});export{N as default};