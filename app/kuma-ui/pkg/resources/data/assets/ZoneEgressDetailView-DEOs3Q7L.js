import{d as h,a as r,o,b as c,w as e,e as a,m as d,a5 as l,f as t,t as n,q as u,a1 as b,c as m,F as k}from"./index-UmH8j8ci.js";import{S as y}from"./StatusBadge-Cpcdk_fe.js";import{_ as V}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-CLJTp9fH.js";import"./AccordionList-B5eXKvf6.js";const w={class:"stack"},z={class:"columns"},C={key:0,"data-testid":"zone-egress-subscriptions"},D=h({__name:"ZoneEgressDetailView",props:{data:{}},setup(_){const s=_;return(x,E)=>{const p=r("KCard"),g=r("AppView"),f=r("RouteView");return o(),c(f,{name:"zone-egress-detail-view"},{default:e(({t:i})=>[a(g,null,{default:e(()=>[d("div",w,[a(p,null,{default:e(()=>[d("div",z,[a(l,null,{title:e(()=>[t(n(i("http.api.property.status")),1)]),body:e(()=>[a(y,{status:s.data.state},null,8,["status"])]),_:2},1024),t(),s.data.namespace.length>0?(o(),c(l,{key:0},{title:e(()=>[t(`
                Namespace
              `)]),body:e(()=>[t(n(s.data.namespace),1)]),_:1})):u("",!0),t(),a(l,null,{title:e(()=>[t(n(i("http.api.property.address")),1)]),body:e(()=>[s.data.zoneEgress.socketAddress.length>0?(o(),c(b,{key:0,text:s.data.zoneEgress.socketAddress},null,8,["text"])):(o(),m(k,{key:1},[t(n(i("common.detail.none")),1)],64))]),_:2},1024)])]),_:2},1024),t(),s.data.zoneEgressInsight.subscriptions.length>0?(o(),m("div",C,[d("h2",null,n(i("zone-egresses.routes.item.subscriptions.title")),1),t(),a(p,{class:"mt-4"},{default:e(()=>[a(V,{subscriptions:s.data.zoneEgressInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):u("",!0)])]),_:2},1024)]),_:1})}}});export{D as default};
