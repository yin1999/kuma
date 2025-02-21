import{d as X,r as s,o as r,m,w as t,b as o,e as d,p as b,au as R,C as I,t as p,c as y,F as z,S as B,K as D,q as k}from"./index-CU8xvgkY.js";import{S as T}from"./SummaryView-CnYQnAYk.js";const E=X({__name:"ZoneIngressListView",props:{data:{}},setup(L){return(N,l)=>{const w=s("RouteTitle"),f=s("XI18n"),u=s("XAction"),_=s("XCopyButton"),A=s("XActionGroup"),g=s("RouterView"),C=s("DataCollection"),v=s("DataLoader"),x=s("XCard"),h=s("AppView"),S=s("RouteView");return r(),m(S,{name:"zone-ingress-list-view",params:{zone:"",proxy:""}},{default:t(({route:a,t:c,me:i,uri:V})=>[o(w,{render:!1,title:c("zone-ingresses.routes.items.title")},null,8,["title"]),l[6]||(l[6]=d()),o(h,{docs:c("zone-ingresses.href.docs")},{default:t(()=>[o(f,{path:"zone-ingresses.routes.items.intro","default-path":"common.i18n.ignore-error"}),l[5]||(l[5]=d()),o(x,null,{default:t(()=>[o(v,{src:V(b(R),"/zone-cps/:name/ingresses",{name:a.params.zone},{page:1,size:100})},{loadable:t(({data:n})=>[o(C,{type:"zone-ingresses",items:(n==null?void 0:n.items)??[void 0],total:n==null?void 0:n.total,onChange:a.update},{default:t(()=>[o(I,{class:"zone-ingress-collection","data-testid":"zone-ingress-collection",headers:[{...i.get("headers.name"),label:"Name",key:"name"},{...i.get("headers.socketAddress"),label:"Address",key:"socketAddress"},{...i.get("headers.advertisedSocketAddress"),label:"Advertised address",key:"advertisedSocketAddress"},{...i.get("headers.status"),label:"Status",key:"status"},{...i.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:n==null?void 0:n.items,"is-selected-row":e=>e.name===a.params.proxy,onResize:i.set},{name:t(({row:e})=>[o(u,{"data-action":"",to:{name:"zone-ingress-summary-view",params:{zone:a.params.zone,proxy:e.id,proxyType:"ingresses"},query:{page:1,size:100}}},{default:t(()=>[d(p(e.name),1)]),_:2},1032,["to"])]),socketAddress:t(({row:e})=>[e.zoneIngress.socketAddress.length>0?(r(),m(_,{key:0,text:e.zoneIngress.socketAddress},null,8,["text"])):(r(),y(z,{key:1},[d(p(c("common.collection.none")),1)],64))]),advertisedSocketAddress:t(({row:e})=>[e.zoneIngress.advertisedSocketAddress.length>0?(r(),m(_,{key:0,text:e.zoneIngress.advertisedSocketAddress},null,8,["text"])):(r(),y(z,{key:1},[d(p(c("common.collection.none")),1)],64))]),status:t(({row:e})=>[o(B,{status:e.state},null,8,["status"])]),actions:t(({row:e})=>[o(A,null,{default:t(()=>[o(u,{to:{name:"zone-ingress-detail-view",params:{proxy:e.id,proxyType:"ingresses"}}},{default:t(()=>[d(p(c("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),l[4]||(l[4]=d()),a.child()?(r(),m(g,{key:0},{default:t(({Component:e})=>[o(T,{onClose:q=>a.replace({name:"zone-ingress-list-view",params:{zone:a.params.zone},query:{page:1,size:100}})},{default:t(()=>[typeof n<"u"?(r(),m(D(e),{key:0,items:n.items},null,8,["items"])):k("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):k("",!0)]),_:2},1032,["items","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{E as default};
