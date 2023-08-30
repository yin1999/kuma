import{i as E,w as L,E as $,p as x,q as I,K as N,f as B,A,o as T,s as S,t as O,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-64a2b575.js";import{d as w,u as K,r as U,o as a,e as f,h as i,w as o,F as z,s as q,n as F,b as e,g as s,t as n,q as r,H as R,a as p,Y as b,f as v,R as Y,E as G,v as H,I as X}from"./index-e262a3eb.js";import{P as Z}from"./PolicyTypeTag-f93b7d4b.js";import{n as j}from"./notEmpty-7f452b20.js";import{_ as J}from"./RouteTitle.vue_vue_type_script_setup_true_lang-3bfddf35.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-506bff80.js";const M={class:"policy-list-content"},Q={class:"policy-count"},W={class:"policy-list"},D={class:"stack"},ee={class:"description"},te={class:"description-content"},oe={class:"description-actions"},se={class:"visually-hidden"},ae={key:0},ie=w({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{}},emits:["change"],setup(P,{emit:d}){const t=P,{t:l}=E(),g=K();return(u,y)=>{const h=U("RouterLink");return a(),f("div",M,[i(e(R),{class:"policy-type-list","data-testid":"policy-type-list"},{body:o(()=>[(a(!0),f(z,null,q(t.policyTypes,(m,_)=>{var c,k,C;return a(),f("div",{key:_,class:F(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":m.path===t.currentPolicyType.path}])},[i(h,{class:"policy-type-link",to:{name:"policies-list-view",params:{mesh:e(g).params.mesh,policyPath:m.path}},"data-testid":`policy-type-link-${m.name}`},{default:o(()=>[s(n(m.name),1)]),_:2},1032,["to","data-testid"]),s(),r("div",Q,n(((C=(k=(c=t.meshInsight)==null?void 0:c.policies)==null?void 0:k[m.name])==null?void 0:C.total)??0),1)],2)}),128))]),_:1}),s(),r("div",W,[r("div",D,[i(e(R),null,{body:o(()=>[r("div",ee,[r("div",te,[r("h3",null,[i(Z,{"policy-type":t.currentPolicyType.name},{default:o(()=>[s(n(e(l)("policies.collection.title",{name:t.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),s(),r("p",null,n(e(l)("policies.collection.description")),1)]),s(),r("div",oe,[t.currentPolicyType.isExperimental?(a(),p(e(b),{key:0,appearance:"warning"},{default:o(()=>[s(n(e(l)("policies.collection.beta")),1)]),_:1})):v("",!0),s(),t.currentPolicyType.isInbound?(a(),p(e(b),{key:1,appearance:"neutral"},{default:o(()=>[s(n(e(l)("policies.collection.inbound")),1)]),_:1})):v("",!0),s(),t.currentPolicyType.isOutbound?(a(),p(e(b),{key:2,appearance:"neutral"},{default:o(()=>[s(n(e(l)("policies.collection.outbound")),1)]),_:1})):v("",!0),s(),i(L,{href:e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:o(()=>[r("span",se,n(e(l)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),s(),i(e(R),null,{body:o(()=>{var m,_;return[t.policyError!==void 0?(a(),p($,{key:0,error:t.policyError},null,8,["error"])):(a(),p(x,{key:1,class:"policy-collection","data-testid":"policy-collection","empty-state-message":e(l)("common.emptyState.message",{type:`${t.currentPolicyType.name} policies`}),"empty-state-cta-to":e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"empty-state-cta-text":e(l)("common.documentation"),headers:[{label:"Name",key:"name"},t.currentPolicyType.isTargetRefBased?{label:"Target ref",key:"targetRef"}:void 0,{label:"Actions",key:"actions",hideLabel:!0}].filter(e(j)),"page-number":t.pageNumber,"page-size":t.pageSize,total:(m=t.policyCollection)==null?void 0:m.total,items:(_=t.policyCollection)==null?void 0:_.items,error:t.policyError,onChange:y[0]||(y[0]=c=>d("change",c))},{name:o(({rowValue:c})=>[i(h,{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:c}}},{default:o(()=>[s(n(c),1)]),_:2},1032,["to"])]),targetRef:o(({row:c})=>[t.currentPolicyType.isTargetRefBased?(a(),p(e(b),{key:0,appearance:"neutral"},{default:o(()=>[s(n(c.spec.targetRef.kind),1),c.spec.targetRef.name?(a(),f("span",ae,[s(":"),r("b",null,n(c.spec.targetRef.name),1)])):v("",!0)]),_:2},1024)):(a(),f(z,{key:1},[s(n(e(l)("common.detail.none")),1)],64))]),actions:o(({row:c})=>[i(e(Y),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:o(()=>[i(e(G),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:o(()=>[i(e(H),{color:e(I),icon:"more",size:e(N)},null,8,["color","size"])]),_:1})]),items:o(()=>[i(e(X),{item:{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:c.name}},label:e(l)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error"]))]}),_:1})])])])}}});const ce=B(ie,[["__scopeId","data-v-4f05fbc6"]]),de=w({__name:"PolicyListView",props:{page:{},size:{}},setup(P){const d=P,{t}=E();return(l,g)=>(a(),p(V,{name:"policies-list-view"},{default:o(({route:u})=>[i(A,null,{title:o(()=>[r("h2",null,[i(J,{title:e(t)("policies.routes.items.title"),render:!0},null,8,["title"])])]),default:o(()=>[s(),i(T,{src:"/*/policy-types"},{default:o(({data:y,error:h})=>[h?(a(),p($,{key:0,error:h},null,8,["error"])):y===void 0?(a(),p(S,{key:1})):y.policies.length===0?(a(),p(O,{key:2})):(a(),p(T,{key:3,src:`/meshes/${u.params.mesh}/policy-path/${u.params.policyPath}?page=${d.page}&size=${d.size}`},{default:o(({data:m,error:_})=>[i(T,{src:`/mesh-insights/${u.params.mesh}`},{default:o(({data:c})=>[i(ce,{"page-number":d.page,"page-size":d.size,"current-policy-type":y.policies.find(k=>k.path===u.params.policyPath)??y.policies[0],"policy-types":y.policies,"mesh-insight":c,"policy-collection":m,"policy-error":_,onChange:u.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","onChange"])]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:1}))}});export{de as default};
