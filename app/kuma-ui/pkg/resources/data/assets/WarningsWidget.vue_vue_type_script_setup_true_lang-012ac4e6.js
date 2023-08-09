import{d as u,o as a,e as r,t,g as n,q as s,F as _,s as d,h as m,w as y,a as g,i as P,b as D,R as f}from"./index-fd0688ab.js";import{D as h,z as O,F as C,G as N}from"./RouteView.vue_vue_type_script_setup_true_lang-b0370148.js";const b=u({__name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}},setup(e){return(o,l)=>(a(),r("span",null,t(e.payload),1))}}),E=u({__name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,l)=>(a(),r("span",null,[n(`
    Envoy (`),s("strong",null,t(e.payload.envoy),1),n(") is unsupported by the current version of Kuma DP ("),s("strong",null,t(e.payload.kumaDp),1),n(") [Requirements: "),s("strong",null,t(e.payload.requirements),1),n(`].
  `)]))}}),I=u({__name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}},setup(e){return(o,l)=>(a(),r("span",null,[n(`
    Unsupported version of Kuma DP (`),s("strong",null,t(e.payload.kumaDp),1),n(`)
  `)]))}}),A=u({__name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,l)=>(a(),r("span",null,[n(`
    There is mismatch between versions of Zone Control Plane (`),s("strong",null,t(e.payload.zoneCpVersion),1),n(") and the Global Control Plane ("),s("strong",null,t(e.payload.globalCpVersion),1),n(`)
  `)]))}}),V=u({__name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}},setup(e){return(o,l)=>(a(),r("span",null,[n(`
    There is a mismatch between versions of Kuma DP (`),s("strong",null,t(e.payload.kumaDp),1),n(`) and the Zone Control Plane.
  `)]))}}),k={class:"stack"},x=u({__name:"WarningsWidget",props:{warnings:{type:Array,required:!0}},setup(e){const o=e;function l(c=""){switch(c){case N:return E;case C:return I;case O:return V;case h:return A;default:return b}}return(c,v)=>(a(),r("div",k,[(a(!0),r(_,null,d(o.warnings,(p,i)=>(a(),r("div",{key:`${p.kind}/${i}`},[m(D(f),{appearance:"warning"},{alertMessage:y(()=>[(a(),g(P(l(p.kind)),{payload:p.payload},null,8,["payload"]))]),_:2},1024)]))),128))]))}});export{x as _};
