import{d as x,r as z,o as l,e as I,h as t,g as c,p as A,m as E,q as i,a as u,w as e,F as D,v as B,b as s,n as L,t as N,X as T,f as K,L as F,s as f,$ as R,E as q,x as M,H as U}from"./index-67d086f6.js";import{_ as h,A as X}from"./DataSource.vue_vue_type_script_setup_true_lang-7de82cfa.js";import{f as P,g as H,z as W,h as j,A as G,_ as J}from"./RouteView.vue_vue_type_script_setup_true_lang-79b8501d.js";import{_ as O}from"./RouteTitle.vue_vue_type_script_setup_true_lang-3c572c51.js";import{_ as Q}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-1c88e13f.js";import{E as Y}from"./ErrorBlock-306e0caf.js";const Z=o=>(A("data-v-f8f48ec6"),o=o(),E(),o),ee=["href"],ae=Z(()=>i("span",{class:"visually-hidden"},"Documentation",-1)),te=x({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(o){const p=o;return(y,v)=>{const b=z("KIcon");return l(),I("a",{class:"docs-link",href:p.href,target:"_blank"},[t(b,{icon:"book",color:"currentColor",size:"16","hide-title":""}),c(),ae],8,ee)}}});const oe=P(te,[["__scopeId","data-v-f8f48ec6"]]),se=o=>(A("data-v-3219c3c8"),o=o(),E(),o),ne={class:"stack"},le=se(()=>i("strong",null,"Warning",-1)),ce=["href"],ie=x({__name:"PolicyListView",props:{page:{},size:{}},setup(o){const p=o,{t:y}=H(),v=W();return(b,re)=>{const S=z("RouterLink");return l(),u(J,{name:"policies-list-view"},{default:e(({route:r})=>[t(h,{src:"/*/policy-types"},{default:e(({data:d,error:k})=>[k?(l(),u(Y,{key:0,error:k},null,8,["error"])):d===void 0?(l(),u(j,{key:1})):d.policies.length===0?(l(),u(Q,{key:2})):(l(!0),I(D,{key:3},B([d.policies.find(n=>n.path===r.params.policyPath)??d.policies[0]],n=>(l(),u(h,{key:n.path,src:`/${r.params.mesh}/policy-type/${n.path}?page=${p.page}&size=${p.size}`},{default:e(({data:m,error:V})=>[t(G,null,{title:e(()=>[i("h2",null,[c(`
                  Policies: `),t(O,{title:s(y)("policies.routes.items.title",{name:n.name}),render:!0},null,8,["title"])])]),default:e(()=>[c(),i("div",{class:L(["relative",n.path])},[t(s(N),null,{body:e(()=>[i("div",ne,[n.isExperimental?(l(),u(s(T),{key:0,appearance:"warning"},{alertMessage:e(()=>[i("p",null,[le,c(` This policy is experimental. If you encountered any problem please open an
                            `),i("a",{href:s(v)("KUMA_FEEDBACK_URL"),target:"_blank",rel:"noopener noreferrer"},"issue",8,ce)])]),_:1})):K("",!0),c(),t(h,{src:`/${r.params.mesh}/insights`},{default:e(({data:_})=>[t(X,{class:"policy-collection","data-testid":"policy-collection","empty-state-title":"No Data","empty-state-message":`There are no ${n.name} policies present.`,headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":p.page,"page-size":p.size,total:m==null?void 0:m.total,items:m==null?void 0:m.items,error:V,onChange:r.update},{toolbar:e(()=>[t(s(F),{label:"Policies",items:d.policies.map(a=>({label:a.name,value:a.path,selected:a.path===r.params.policyPath})),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:a=>r.replace({name:"policies-list-view",params:{...r.params,policyPath:a.value}})},{"item-template":e(({item:a})=>{var w,g,$,C;return[i("span",{class:L({"policy-type-empty":!((g=(w=_==null?void 0:_.policies)==null?void 0:w[a.label])!=null&&g.total)})},f(a.label)+" ("+f(((C=($=_==null?void 0:_.policies)==null?void 0:$[a.label])==null?void 0:C.total)||"0")+`)
                                `,3)]}),_:2},1032,["items","onSelected"]),c(),t(oe,{href:s(y)("policies.href.docs",{name:n.name.toLowerCase()}),"data-testid":"policy-documentation-link"},null,8,["href"])]),name:e(({row:a})=>[t(S,{to:{name:"policy-detail-view",params:{policy:a.name}}},{default:e(()=>[c(f(a.name),1)]),_:2},1032,["to"])]),type:e(({row:a})=>[c(f(a.type),1)]),actions:e(({row:a})=>[t(s(R),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[t(s(q),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[t(s(M),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[t(s(U),{item:{to:{name:"policy-detail-view",params:{policy:a.name}},label:s(y)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-message","page-number","page-size","total","items","error","onChange"])]),_:2},1032,["src"])])]),_:2},1024)],2)]),_:2},1024)]),_:2},1032,["src"]))),128))]),_:2},1024)]),_:1})}}});const fe=P(ie,[["__scopeId","data-v-3219c3c8"]]);export{fe as default};
