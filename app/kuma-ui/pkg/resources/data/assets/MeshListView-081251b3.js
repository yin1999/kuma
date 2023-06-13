import{d as D,q as T,r as s,s as A,o as E,c as N,w as v,a as u,u as m,b as V,e as h,J as b}from"./index-95f89edf.js";import{g as M,u as S,f as L,e as q}from"./RouteView.vue_vue_type_script_setup_true_lang-9e79b18b.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9b936e20.js";import{D as B}from"./DataOverview-8519bc1d.js";import{Q as P}from"./QueryParameter-70743f73.js";import"./kongponents.es-0bcabadf.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-2f6e2ce9.js";import"./ErrorBlock-a4644cb1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-188a0103.js";import"./TagList-72e06e77.js";import"./StatusBadge-0bd793b3.js";const R={class:"kcard-stack"},$={class:"kcard-border"},j=D({__name:"MeshListView",props:{selectedMeshName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(g){const c=g,{t:r}=M(),y=S(),w={title:r("common.emptyState.title"),message:r("common.emptyState.message",{type:"Meshes"})},d=T(),l=s(!0),n=s(null),o=s({headers:[{label:"Name",key:"entity"}],data:[]}),f=s(null),p=s(c.offset);A(()=>d.params.mesh,function(){d.name==="mesh-list-view"&&i(0)}),x();function x(){i(c.offset)}async function i(e){p.value=e,P.set("offset",e>0?e:null),l.value=!0,n.value=null;const a=b;try{const{items:t,next:_}=await y.getAllMeshes({size:a,offset:e});f.value=_,o.value.data=k(t??[])}catch(t){o.value.data=[],t instanceof Error?n.value=t:console.error(t)}finally{l.value=!1}}function k(e){return e.map(a=>{const{name:t}=a;return{entity:a,detailViewRoute:{name:"mesh-detail-view",params:{mesh:t}}}})}return(e,a)=>(E(),N(q,null,{default:v(()=>[u(z,{title:m(r)("meshes.routes.items.title")},null,8,["title"]),V(),u(L,{breadcrumbs:[{to:{name:"mesh-list-view"},text:m(r)("meshes.routes.items.breadcrumbs")}]},{default:v(()=>[h("div",R,[h("div",$,[u(B,{"page-size":m(b),"is-loading":l.value,error:n.value,"empty-state":w,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:f.value,"page-offset":p.value,onLoadData:i},null,8,["page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])])])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{j as default};