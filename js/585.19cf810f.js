"use strict";(self["webpackChunkquick_csv_fix"]=self["webpackChunkquick_csv_fix"]||[]).push([[585],{8585:(e,t,l)=>{l.r(t),l.d(t,{default:()=>O});var i=l(3673);const a=(0,i.Uk)(" CSVision "),o={class:"fill"},n=(0,i.Uk)(" Links ");function s(e,t,l,s,u,r){const c=(0,i.up)("q-btn"),d=(0,i.up)("q-toolbar-title"),m=(0,i.up)("VisionBar"),p=(0,i.up)("q-toolbar"),w=(0,i.up)("q-header"),f=(0,i.up)("q-item-label"),b=(0,i.up)("EssentialLink"),h=(0,i.up)("q-list"),k=(0,i.up)("q-drawer"),g=(0,i.up)("router-view"),x=(0,i.up)("q-page-container"),q=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.j4)(q,{view:"lHh Lpr lFf"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{elevated:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[a])),_:1}),(0,i._)("div",o,[e.store.state.columnsCsv?((0,i.wg)(),(0,i.j4)(m,{key:0})):(0,i.kq)("",!0)])])),_:1})])),_:1}),(0,i.Wm)(k,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),bordered:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{header:""},{default:(0,i.w5)((()=>[n])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.essentialLinks,(e=>((0,i.wg)(),(0,i.j4)(b,(0,i.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g)])),_:1})])),_:1})}var u=l(2323);function r(e,t,l,a,o,n){const s=(0,i.up)("q-icon"),r=(0,i.up)("q-item-section"),c=(0,i.up)("q-item-label"),d=(0,i.up)("q-item");return(0,i.wg)(),(0,i.j4)(d,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,i.w5)((()=>[e.icon?((0,i.wg)(),(0,i.j4)(r,{key:0,avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,u.zw)(e.title),1)])),_:1}),(0,i.Wm)(c,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,u.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const c=(0,i.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var d=l(3414),m=l(2035),p=l(4554),w=l(2350),f=l(7518),b=l.n(f);c.render=r;const h=c;b()(c,"components",{QItem:d.Z,QItemSection:m.Z,QIcon:p.Z,QItemLabel:w.Z});const k={class:"q-pt-xl  row flex justify-around bg-primary  fill"},g={class:"q-ml-md q-pr-xl  q-mb-lg row text-white text-caption"},x={key:0,class:"row"},q=(0,i.Uk)(" No results "),v=(0,i.Uk)(" No results "),_={key:1,class:"text-white q-pb-md"};function y(e,t,l,a,o,n){const s=(0,i.up)("q-checkbox"),u=(0,i.up)("q-item-section"),r=(0,i.up)("q-item"),c=(0,i.up)("q-select");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",g,[(0,i.Wm)(s,{modelValue:a.store.state.dashboard,"onUpdate:modelValue":t[0]||(t[0]=e=>a.store.state.dashboard=e),label:"Dashboard"},null,8,["modelValue"])]),a.store.state.dashboard?((0,i.wg)(),(0,i.iD)("div",x,[(0,i.Wm)(c,{class:"q-ml-xl q-pb-lg","label-color":"white",filled:"",modelValue:a.xaxis,"onUpdate:modelValue":t[1]||(t[1]=e=>a.xaxis=e),"use-input":"","input-debounce":"0",label:"Labels",options:a.options,onFilter:a.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"text-white"},{default:(0,i.w5)((()=>[q])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"]),(0,i.Wm)(c,{class:"q-ml-xl q-pb-lg","label-color":"white",filled:"",modelValue:a.yaxis,"onUpdate:modelValue":t[2]||(t[2]=e=>a.yaxis=e),"use-input":"","input-debounce":"0",label:"Values",options:a.options,onFilter:a.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"text-grey"},{default:(0,i.w5)((()=>[v])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"])])):((0,i.wg)(),(0,i.iD)("div",_," You can check the box to see the CSVision dashboard. "))])}l(71);var W=l(1959);const V={setup(){const e=(0,i.f3)("csvStore");let t=e.state.visibleColumns?[...e.state.visibleColumns]:[],l=(0,W.iH)(t),a=(0,W.iH)(e.state.xaxis),o=(0,W.iH)(e.state.yaxis);return{store:e,options:l,xaxis:a,yaxis:o,filterFn(e,i){i(""!==e?()=>{const i=e.toLowerCase();l.value=t.filter((e=>e.toLowerCase().indexOf(i)>-1))}:()=>{l.value=t})}}},methods:{},watch:{xaxis(e){this.store.state.xaxis=e,this.store.methods.Visiualise()},yaxis(e){this.store.state.yaxis=e,this.store.methods.Visiualise()}}};var Z=l(1420),L=l(4788);V.render=y;const Q=V;b()(V,"components",{QCheckbox:Z.Z,QSelect:L.Z,QItem:d.Z,QItemSection:m.Z});l(8277);const C=[{title:"Github",caption:"github.com/emingenc/csvision",icon:"code",link:"https://github.com/emingenc/csvision"},{title:"Discord ",caption:"",icon:"chat",link:"https://discord.gg/mMWGmBWE"},{title:"Personel website",caption:"emingenc.github.io",icon:"public",link:"https://emingenc.github.io"}],D=(0,i.aZ)({name:"MainLayout",components:{EssentialLink:h,VisionBar:Q},setup(){const e=(0,W.iH)(!1),t=(0,i.f3)("csvStore");return{store:t,essentialLinks:C,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var S=l(4267),U=l(3812),F=l(9570),H=l(4607),I=l(3747),j=l(2428),B=l(7011),E=l(2652);D.render=s;const O=D;b()(D,"components",{QLayout:S.Z,QHeader:U.Z,QToolbar:F.Z,QBtn:H.Z,QToolbarTitle:I.Z,QDrawer:j.Z,QList:B.Z,QItemLabel:w.Z,QPageContainer:E.Z})}}]);