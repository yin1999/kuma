import{d as v,r as B,j as k,o as t,c as n,k as c,F as T,R as u,x as E,e as f,g as d,a as p,Q as S,z as q,w as m,u as l,b as w,ak as V,af as x,ag as N,N as $,O as C,H as L}from"./index-a2028f71.js";import{E as I}from"./ErrorBlock-cc8ef692.js";import{_ as O}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-d1caf019.js";import{Q as _}from"./QueryParameter-70743f73.js";const W=a=>($("data-v-df3a0851"),a=a(),C(),a),H={class:"tab-container","data-testid":"tab-container"},Q={key:0,class:"tab__header"},z={class:"tab__content-container"},A={class:"flex items-center with-warnings"},F=W(()=>d("span",null,"Warnings",-1)),j=v({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(a,{emit:b}){const o=a,s=B(""),g=k(()=>o.tabs.map(e=>e.hash.replace("#","")));function h(){const e=_.get("tab");e!==null?s.value=`#${e}`:o.initialTabOverride!==null&&(s.value=`#${o.initialTabOverride}`)}h();function y(e){_.set("tab",e.substring(1)),x.logger.info(N.TABS_TAB_CHANGE,{data:{newActiveTabHash:e}}),b("on-tab-change",e)}return(e,i)=>(t(),n("div",H,[a.isLoading?(t(),c(O,{key:0})):a.error!==null?(t(),c(I,{key:1,error:a.error},null,8,["error"])):(t(),n(T,{key:2},[e.$slots.tabHeader?(t(),n("header",Q,[u(e.$slots,"tabHeader",{},void 0,!0)])):E("",!0),f(),d("div",z,[p(l(V),{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=r=>s.value=r),tabs:a.tabs,onChanged:y},S({"warnings-anchor":m(()=>[d("span",A,[p(l(w),{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),f(),F])]),_:2},[q(l(g),r=>({name:r,fn:m(()=>[u(e.$slots,r,{},void 0,!0)])}))]),1032,["modelValue","tabs"])])],64))]))}});const U=L(j,[["__scopeId","data-v-df3a0851"]]);export{U as T};
