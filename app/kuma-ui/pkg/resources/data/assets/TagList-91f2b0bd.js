import{d as y,ai as b,i as g,j as k,o as r,c,F as h,z as x,k as l,w as i,a2 as L,e as T,y as _,g as w,u as d,_ as B,H as j}from"./index-e096fb01.js";function z(o){return Object.entries(o??{}).map(([s,a])=>({label:s,value:a}))}const C={class:"tag-list"},q=y({__name:"TagList",props:{tags:{type:Object,required:!0}},setup(o){const s=o,a=b(),p=g(),m=k(()=>(Array.isArray(s.tags)?s.tags:z(s.tags)).map(n=>{const{label:t,value:u}=n,f=v(n);return{label:t,value:u,route:f}}));function v(e){if(e.value!=="*")try{switch(e.label){case"kuma.io/zone":return a.resolve({name:"zones",query:{ns:e.value}});case"kuma.io/service":return a.resolve({name:"service-detail-view",params:{mesh:p.state.selectedMesh,service:e.value}});default:return}}catch{return}}return(e,n)=>(r(),c("span",C,[(r(!0),c(h,null,x(d(m),(t,u)=>(r(),l(d(B),{key:u,class:"tag-badge"},{default:i(()=>[(r(),l(L(t.route?"router-link":"span"),{to:t.route},{default:i(()=>[T(_(t.label)+":",1),w("b",null,_(t.value),1)]),_:2},1032,["to"]))]),_:2},1024))),128))]))}});const D=j(q,[["__scopeId","data-v-4a30834d"]]);export{D as T};