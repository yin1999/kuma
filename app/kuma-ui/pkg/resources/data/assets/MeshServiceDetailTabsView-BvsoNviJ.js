import{d as D,r as e,o as c,m as p,w as t,b as a,p as T,aq as R,c as X,q as y,e as i,T as B,v as S,t as k,K as A}from"./index-CU8xvgkY.js";const L={key:0},$=D({__name:"MeshServiceDetailTabsView",setup(N){return(g,n)=>{const _=e("RouteTitle"),d=e("XCopyButton"),u=e("XAction"),v=e("XTabs"),h=e("RouterView"),f=e("DataLoader"),w=e("AppView"),b=e("DataSource"),V=e("RouteView");return c(),p(V,{name:"mesh-service-detail-tabs-view",params:{mesh:"",service:""}},{default:t(({route:s,t:r,uri:x})=>[a(b,{src:x(T(R),"/meshes/:mesh/mesh-service/:name",{mesh:s.params.mesh,name:s.params.service})},{default:t(({data:m,error:C})=>[a(w,{docs:r("services.mesh-service.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:s.params.mesh}},text:s.params.mesh},{to:{name:"mesh-service-list-view",params:{mesh:s.params.mesh}},text:r("services.routes.mesh-service-list-view.title")}]},{title:t(()=>[m?(c(),X("h1",L,[a(d,{text:s.params.service},{default:t(()=>[a(_,{title:r("services.routes.item.title",{name:m.name})},null,8,["title"])]),_:2},1032,["text"])])):y("",!0)]),default:t(()=>[n[1]||(n[1]=i()),a(f,{data:[m],errors:[C]},{default:t(()=>{var l;return[a(v,{selected:(l=s.child())==null?void 0:l.name},B({_:2},[S(s.children,({name:o})=>({name:`${o}-tab`,fn:t(()=>[a(u,{to:{name:o}},{default:t(()=>[i(k(r(`services.routes.item.navigation.${o}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),n[0]||(n[0]=i()),a(h,null,{default:t(o=>[(c(),p(A(o.Component),{data:m},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{$ as default};
