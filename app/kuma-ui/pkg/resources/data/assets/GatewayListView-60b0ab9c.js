import{d as m,o as y,a as _,w as t,h as s,q as d,b as r,g as o,t as f,L as w,s as h}from"./index-67d086f6.js";import{g as b,A as v,_ as z,f as q}from"./RouteView.vue_vue_type_script_setup_true_lang-79b8501d.js";import{_ as $}from"./DataSource.vue_vue_type_script_setup_true_lang-7de82cfa.js";import{_ as C}from"./RouteTitle.vue_vue_type_script_setup_true_lang-3c572c51.js";import{D as S,K as V}from"./KFilterBar-6c4dbcb2.js";import"./StatusBadge-e7a0ad4b.js";import"./notEmpty-7f452b20.js";const x=m({__name:"GatewayListView",props:{page:{},size:{},search:{},query:{},mesh:{},gatewayType:{}},setup(n){const a=n,{t:p}=b();return(c,T)=>(y(),_(z,{name:"gateways-list-view"},{default:t(({route:i})=>[s($,{src:`/${i.params.mesh}/gateways/of/${a.gatewayType}?page=${a.page}&size=${c.size}&search=${a.search}`},{default:t(({data:l,error:u})=>[s(v,null,{title:t(()=>[d("h2",null,[s(C,{title:r(p)("gateways.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[o(),s(r(f),null,{body:t(()=>[s(S,{"data-testid":"gateway-collection",class:"gateway-collection","page-number":a.page,"page-size":a.size,total:l==null?void 0:l.total,items:l==null?void 0:l.items,error:u,gateways:!0,onChange:({page:e,size:g})=>{i.update({page:String(e),size:String(g)})}},{toolbar:t(()=>[s(V,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:a.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:e=>i.update({query:e.query,s:e.query.length>0?JSON.stringify(e.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),o(),s(r(w),{label:"Type","overlay-label":!0,items:[{label:"All",value:"all"},{label:"Builtin",value:"builtin"},{label:"Delegated",value:"delegated"}].map(e=>({...e,selected:e.value===a.gatewayType})),appearance:"select",onSelected:e=>i.update({gatewayType:String(e.value)})},{"item-template":t(({item:e})=>[o(h(e.label),1)]),_:2},1032,["items","onSelected"])]),_:2},1032,["page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1}))}});const G=q(x,[["__scopeId","data-v-213877cf"]]);export{G as default};
