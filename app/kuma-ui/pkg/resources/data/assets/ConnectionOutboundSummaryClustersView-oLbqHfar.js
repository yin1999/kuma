import{d as C,a as n,o as f,b as g,w as o,e as t,m as c,f as r,a4 as x,p as R}from"./index-3GvIUHS9.js";import{C as w}from"./CodeBlock-6NtnMcdz.js";const E=C({__name:"ConnectionOutboundSummaryClustersView",setup(y){return(V,v)=>{const p=n("RouteTitle"),i=n("KButton"),l=n("DataCollection"),d=n("DataLoader"),m=n("AppView"),u=n("RouteView");return f(),g(u,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",service:""},name:"connection-outbound-summary-clusters-view"},{default:o(({route:e})=>[t(m,null,{title:o(()=>[c("h3",null,[t(p,{title:"Clusters"})])]),default:o(()=>[r(),c("div",null,[t(d,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`},{default:o(({data:_,refresh:h})=>[t(l,{items:_.split(`
`),predicate:s=>s.startsWith(`${e.params.service}::`)},{default:o(({items:s})=>[t(w,{language:"json",code:s.map(a=>a.replace(`${e.params.service}::`,"")).join(`
`),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":o(()=>[t(i,{appearance:"primary",onClick:h},{default:o(()=>[t(R(x)),r(`

                  Refresh
                `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["items","predicate"])]),_:2},1032,["src"])])]),_:2},1024)]),_:1})}}});export{E as default};
