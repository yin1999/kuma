import{d as D,l as F,M as L,D as u,H as P,ag as h,a as V,o as i,b as g,R as C,w as l,e as T,ab as j,f as r,t as d,p as m,c as S,F as w,q as N,N as E,S as H,G as K,r as $,ah as U,ai as W,_ as X}from"./index-C4O4X_t8.js";const G={key:0,class:"app-collection-toolbar"},A=5,J=D({__name:"AppCollection",props:{isSelectedRow:{type:[Function,null],default:null},total:{default:0},pageNumber:{default:0},pageSize:{default:30},items:{},headers:{},error:{default:void 0},emptyStateTitle:{default:void 0},emptyStateMessage:{default:void 0},emptyStateCtaTo:{default:void 0},emptyStateCtaText:{default:void 0}},emits:["change"],setup(x,{emit:M}){const{t:R}=F(),e=x,z=M,q=L(),v=u(e.items),b=u(0),f=u(0),y=u(e.pageNumber),_=u(e.pageSize),I=P(()=>{const t=e.headers.filter(n=>["details","warnings","actions"].includes(n.key));if(t.length>4)return"initial";const a=100-t.length*A,o=e.headers.length-t.length;return`calc(${a}% / ${o})`});h(()=>e.items,(t,a)=>{t!==a&&(b.value++,v.value=e.items)}),h(()=>e.pageNumber,function(){e.pageNumber!==y.value&&f.value++}),h(()=>e.headers,function(){f.value++});function O(t){if(!t)return{};const a={};return e.isSelectedRow!==null&&e.isSelectedRow(t)&&(a.class="is-selected"),a}const B=t=>{const a=t.target.closest("tr");if(a){const o=["td:first-child a","[data-action]"].reduce((n,s)=>n===null?a.querySelector(s):n,null);o!==null&&o.closest("tr, li")===a&&o.click()}};return(t,a)=>{var n;const o=V("XAction");return i(),g(m(W),{key:f.value,class:"app-collection",style:U(`--column-width: ${I.value}; --special-column-width: ${A}%;`),"has-error":typeof e.error<"u","pagination-total-items":e.total,"initial-fetcher-params":{page:e.pageNumber,pageSize:e.pageSize},headers:e.headers,"fetcher-cache-key":String(b.value),fetcher:({page:s,pageSize:c,query:k})=>{const p={};return y.value!==s&&(p.page=s),_.value!==c&&(p.size=c),y.value=s,_.value=c,Object.keys(p).length>0&&z("change",p),{data:v.value}},"cell-attrs":({headerKey:s})=>({class:`${s}-column`}),"row-attrs":O,"disable-sorting":"","disable-pagination":e.pageNumber===0,"hide-pagination-when-optional":"","onRow:click":B},C({_:2},[((n=e.items)==null?void 0:n.length)===0?{name:"empty-state",fn:l(()=>[T(j,null,C({title:l(()=>[r(d(e.emptyStateTitle??m(R)("common.emptyState.title")),1)]),default:l(()=>[r(),e.emptyStateMessage?(i(),S(w,{key:0},[r(d(e.emptyStateMessage),1)],64)):N("",!0),r()]),_:2},[e.emptyStateCtaTo?{name:"action",fn:l(()=>[typeof e.emptyStateCtaTo=="string"?(i(),g(o,{key:0,type:"docs",href:e.emptyStateCtaTo},{default:l(()=>[r(d(e.emptyStateCtaText),1)]),_:1},8,["href"])):(i(),g(m(E),{key:1,appearance:"primary",to:e.emptyStateCtaTo},{default:l(()=>[T(m(H)),r(" "+d(e.emptyStateCtaText),1)]),_:1},8,["to"]))]),key:"0"}:void 0]),1024)]),key:"0"}:void 0,K(Object.keys(m(q)),s=>({name:s,fn:l(({row:c,rowValue:k})=>[s==="toolbar"?(i(),S("div",G,[$(t.$slots,"toolbar",{},void 0,!0)])):(i(),S(w,{key:1},[(e.items??[]).length>0?$(t.$slots,s,{key:0,row:c,rowValue:k},void 0,!0):N("",!0)],64))])}))]),1032,["style","has-error","pagination-total-items","initial-fetcher-params","headers","fetcher-cache-key","fetcher","cell-attrs","disable-pagination"])}}}),Y=X(J,[["__scopeId","data-v-11b03fb4"]]);export{Y as A};