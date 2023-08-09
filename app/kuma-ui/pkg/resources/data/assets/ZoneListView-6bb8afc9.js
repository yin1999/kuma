import{d as R,j as N,o as i,a as c,w as t,z as T,g as a,b as e,R as F,f as S,a4 as O,r as W,h as s,B as K,q as h,G,t as l,e as A,F as B,W as P,v as $,V as U,D,H as I}from"./index-fd0688ab.js";import{_ as j}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-19b58ec0.js";import{A as H}from"./AppCollection-6e1ecaca.js";import{B as J,g as Y,m as Q,e as X,A as ee,p as te,S as oe,_ as ne,n as ae,f as se}from"./RouteView.vue_vue_type_script_setup_true_lang-b0370148.js";import{_ as ie}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0a897f5f.js";const le=R({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(C,{emit:d}){const r=C,o=N(!1);async function w(){o.value=!1;try{await r.deleteFunction(),d("delete")}catch{o.value=!0}}return(p,m)=>(i(),c(e(O),{"action-button-text":r.actionButtonText,"confirmation-text":r.confirmationText,"is-visible":r.isVisible,"modal-id":r.modalId,title:r.title,type:"danger","data-testid":"delete-resource-modal",onCanceled:m[0]||(m[0]=_=>d("cancel")),onProceed:w},{"body-content":t(()=>[T(p.$slots,"body-content"),a(),o.value?(i(),c(e(F),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:t(()=>[T(p.$slots,"error")]),_:3})):S("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),re=R({__name:"ZoneListView",props:{page:{type:Number,required:!0},size:{type:Number,required:!0}},setup(C){const d=C,r=J(),{t:o}=Y(),w=Q(),p=X(),m=N(!1),_=N("");function Z(b){return b.map(g=>{var M;const{name:y}=g,V={name:"zone-cp-detail-view",params:{zone:y}};let u="",v="kubernetes",k=!0;(((M=g.zoneInsight)==null?void 0:M.subscriptions)??[]).forEach(f=>{if(f.version&&f.version.kumaCp){u=f.version.kumaCp.version;const{kumaCpGlobalCompatible:L=!0}=f.version.kumaCp;k=L}f.config&&(v=JSON.parse(f.config).environment)});const z=ae(g.zoneInsight);return{detailViewRoute:V,name:y,status:z,zoneCpVersion:u,type:v,warnings:!k}})}async function q(){await w.deleteZone({name:_.value})}function x(){m.value=!m.value}function E(b){x(),_.value=b}return(b,g)=>{const y=W("RouterLink");return i(),c(ne,{name:"zone-cp-list-view"},{default:t(({route:V})=>[s(ee,null,K({title:t(()=>[h("h1",null,[s(ie,{title:e(o)("zone-cps.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[a(),a(),e(p).getters["config/getMulticlusterStatus"]===!1?(i(),c(j,{key:0})):(i(),c(te,{key:1,src:`/zone-cps?size=${d.size}&page=${d.page}`},{default:t(({data:u,error:v,refresh:k})=>[s(e(G),null,{body:t(()=>[s(H,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":d.page,"page-size":d.size,total:u==null?void 0:u.total,items:u?Z(u.items):void 0,error:v,onChange:V.update},{name:t(({row:n,rowValue:z})=>[s(y,{to:n.detailViewRoute,"data-testid":"detail-view-link"},{default:t(()=>[a(l(z),1)]),_:2},1032,["to"])]),zoneCpVersion:t(({rowValue:n})=>[a(l(n||e(o)("common.collection.none")),1)]),type:t(({rowValue:n})=>[a(l(n||e(o)("common.collection.none")),1)]),status:t(({rowValue:n})=>[n?(i(),c(oe,{key:0,status:n},null,8,["status"])):(i(),A(B,{key:1},[a(l(e(o)("common.collection.none")),1)],64))]),warnings:t(({rowValue:n})=>[n?(i(),c(e(P),{key:0,label:e(o)("zone-cps.list.version_mismatch")},{default:t(()=>[s(e($),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"20","hide-title":""})]),_:1},8,["label"])):(i(),A(B,{key:1},[a(l(e(o)("common.collection.none")),1)],64))]),actions:t(({row:n})=>[s(e(U),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[s(e(D),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[s(e($),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:t(()=>[s(e(I),{item:{to:n.detailViewRoute,label:e(o)("common.collection.actions.view")}},null,8,["item"]),a(),e(r)("KUMA_ZONE_CREATION_FLOW")==="enabled"?(i(),c(e(I),{key:0,"has-divider":"","is-dangerous":"","data-testid":"dropdown-delete-item",onClick:z=>E(n.name)},{default:t(()=>[a(l(e(o)("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):S("",!0)]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","onChange"])]),_:2},1024),a(),m.value?(i(),c(le,{key:0,"confirmation-text":_.value,"delete-function":q,"is-visible":m.value,"modal-id":"delete-zone-modal","action-button-text":e(o)("zones.delete.confirmModal.proceedText"),title:e(o)("zones.delete.confirmModal.title"),onCancel:x,onDelete:()=>{x(),k()}},{"body-content":t(()=>[h("p",null,l(e(o)("zones.delete.confirmModal.text1",{zoneName:_.value})),1),a(),h("p",null,l(e(o)("zones.delete.confirmModal.text2")),1)]),error:t(()=>[a(l(e(o)("zones.delete.confirmModal.errorText")),1)]),_:2},1032,["confirmation-text","is-visible","action-button-text","title","onDelete"])):S("",!0)]),_:2},1032,["src"]))]),_:2},[e(r)("KUMA_ZONE_CREATION_FLOW")==="enabled"&&e(p).getters["config/getMulticlusterStatus"]?{name:"actions",fn:t(()=>[s(e(D),{appearance:"creation",icon:"plus",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:t(()=>[a(l(e(o)("zones.index.create")),1)]),_:1})]),key:"0"}:void 0]),1024)]),_:1})}}});const fe=se(re,[["__scopeId","data-v-553cdc7d"]]);export{fe as default};
