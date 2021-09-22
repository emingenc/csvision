(()=>{"use strict";var e={5658:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var s=r(8277);const l=(0,a.aZ)({name:"App",setup(){(0,a.JJ)("csvStore",s.Z)}});l.render=i;const u=l;var c=r(7083),d=r(9582);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(416)]).then(r.bind(r,416)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(361)]).then(r.bind(r,5361))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],p=f,v=(0,c.BC)((function(){const e=d.r5,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("")});return t}));async function h(e,t){const r="function"===typeof v?await v({}):v,o=e(u);return o.use(n.Z,t),{app:o,router:r}}var b=r(6417);const m={config:{notify:{}},plugins:{Notify:b.Z}},g="";async function y({app:e,router:t},r){let o=!1;const n=e=>{o=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:n,urlPath:a,publicPath:g})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}h(o.ri,m).then((e=>Promise.all([Promise.resolve().then(r.bind(r,8853)),Promise.resolve().then(r.bind(r,8181))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},8181:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(7083),n=r(2585),a=r.n(n);const i=(0,o.xr)((async({app:e})=>{e.use(a())}))},8853:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083),n=r(3640);const a=(0,o.xr)((async({router:e,app:t})=>{t.use(n.ZP,{config:{id:"UA-207380093-2"}},e)}))},8277:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(1959),n=r(3673);const a="csvState",i={columnsCsv:null,rowsCsv:null,filteredRows:null,fileNme:null,grid:!1,visibleColumns:null,initialPagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:50},xaxis:null,xaxisData:null,yaxis:null,yaxisData:null,dashboard:!1,visibleCharts:["barChart","treeMap","pieChart"]},s=()=>null!==localStorage.getItem(a)?JSON.parse(localStorage.getItem(a)):i,l=(0,o.qj)(s()),u={Visiualise(){l.yaxisData=c.getRowData(l.yaxis),l.xaxisData=c.getRowData(l.xaxis)}},c={getRowData:e=>{if(l.filteredRows){let t=l.filteredRows.map((t=>t[e]));return t}if(l.rowsCsv){let t=l.rowsCsv.map((t=>t[e]));return t}return""}};(0,n.YP)((()=>l),(()=>{localStorage.setItem(a,JSON.stringify(l))}),{deep:!0});const d={state:l,methods:u,getters:c}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{193:"c5fd768f",361:"542b6834",416:"be94fd20"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"49e67f73"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quick-csv-fix:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,u=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return r.O(c)},o=self["webpackChunkquick_csv_fix"]=self["webpackChunkquick_csv_fix"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(5658)));o=r.O(o)})();