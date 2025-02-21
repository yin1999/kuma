import{d as L,r as o,o as i,m,w as s,b as n,e as r,p as N,aq as S,C as q,t as c,c as g,F as w,v as K,K as T,q as F}from"./index-CU8xvgkY.js";import{S as G}from"./SummaryView-CnYQnAYk.js";const j=L({__name:"MeshServiceListView",setup(E){return(M,u)=>{const y=o("RouteTitle"),d=o("XAction"),f=o("XCopyButton"),z=o("XBadge"),C=o("KumaPort"),k=o("XLayout"),b=o("XActionGroup"),X=o("RouterView"),V=o("DataCollection"),x=o("DataLoader"),A=o("XCard"),P=o("AppView"),R=o("RouteView");return i(),m(R,{name:"mesh-service-list-view",params:{page:1,size:Number,mesh:"",service:""}},{default:s(({route:a,t:_,can:B,uri:D,me:p})=>[n(y,{render:!1,title:_("services.routes.mesh-service-list-view.title")},null,8,["title"]),u[7]||(u[7]=r()),n(P,{docs:_("services.mesh-service.href.docs")},{default:s(()=>[n(A,null,{default:s(()=>[n(x,{src:D(N(S),"/meshes/:mesh/mesh-services",{mesh:a.params.mesh},{page:a.params.page,size:a.params.size})},{loadable:s(({data:t})=>[n(V,{type:"services",items:(t==null?void 0:t.items)??[void 0],page:a.params.page,"page-size":a.params.size,total:t==null?void 0:t.total,onChange:a.update},{default:s(()=>[n(q,{"data-testid":"service-collection",headers:[{...p.get("headers.name"),label:"Name",key:"name"},{...p.get("headers.namespace"),label:"Namespace",key:"namespace"},...B("use zones")?[{...p.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...p.get("headers.state"),label:"State",key:"state"},{...p.get("headers.status"),label:"DP proxies (connected / healthy / total)",key:"status"},{...p.get("headers.ports"),label:"Ports",key:"ports"},{...p.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":e=>e.name===a.params.service,onResize:p.set},{name:s(({row:e})=>[n(f,{text:e.name},{default:s(()=>[n(d,{"data-action":"",to:{name:"mesh-service-summary-view",params:{mesh:e.mesh,service:e.id},query:{page:a.params.page,size:a.params.size}}},{default:s(()=>[r(c(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),namespace:s(({row:e})=>[r(c(e.namespace),1)]),zone:s(({row:e})=>[e.zone?(i(),m(d,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:s(()=>[r(c(e.zone),1)]),_:2},1032,["to"])):(i(),g(w,{key:1},[r(c(_("common.detail.none")),1)],64))]),state:s(({row:e})=>[n(z,{appearance:e.spec.state==="Available"?"success":"danger"},{default:s(()=>[r(c(e.spec.state),1)]),_:2},1032,["appearance"])]),status:s(({row:e})=>{var l,h,v;return[r(c((l=e.status.dataplaneProxies)==null?void 0:l.connected)+" / "+c((h=e.status.dataplaneProxies)==null?void 0:h.healthy)+" / "+c((v=e.status.dataplaneProxies)==null?void 0:v.total),1)]}),ports:s(({row:e})=>[n(k,{type:"separated",truncate:""},{default:s(()=>[(i(!0),g(w,null,K(e.spec.ports,l=>(i(),m(C,{key:l.port,port:{...l,targetPort:void 0}},null,8,["port"]))),128))]),_:2},1024)]),actions:s(({row:e})=>[n(b,null,{default:s(()=>[n(d,{to:{name:"mesh-service-detail-view",params:{mesh:e.mesh,service:e.id}}},{default:s(()=>[r(c(_("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),u[6]||(u[6]=r()),t!=null&&t.items&&a.params.service?(i(),m(X,{key:0},{default:s(e=>[n(G,{onClose:l=>a.replace({name:"mesh-service-list-view",params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size}})},{default:s(()=>[(i(),m(T(e.Component),{items:t==null?void 0:t.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):F("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{j as default};
