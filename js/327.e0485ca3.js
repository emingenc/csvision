"use strict";(self["webpackChunkquick_csv_fix"]=self["webpackChunkquick_csv_fix"]||[]).push([[327],{2793:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7280),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__),quasar_src_utils_export_file_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2841),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8825),components_Uploader_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4733),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3673),vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1959);function wrapCsvValue(e,t){let s=void 0!==t?t(e):e;return s=void 0===s||null===s?"":String(s),s=s.split('"').join('""'),`"${s}"`}const __WEBPACK_DEFAULT_EXPORT__={components:{Uploader:components_Uploader_vue__WEBPACK_IMPORTED_MODULE_3__.Z},setup(){const e=(0,vue__WEBPACK_IMPORTED_MODULE_4__.f3)("csvStore");(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__.Z)();let t=e.state.visibleColumns?[...e.state.visibleColumns]:[],s=(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(t),o=(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)("");return{store:e,options:s,column:o,filter:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(""),filterFn(e,o){o(""!==e?()=>{const o=e.toLowerCase();s.value=t.filter((e=>e.toLowerCase().indexOf(o)>-1))}:()=>{s.value=t})}}},methods:{filterMethod(rows,terms,cols){try{let result=rows.filter((row=>terms.includes(">")||terms.includes("<")?eval(`${row[this.column]}${terms}`):String(row[this.column]).toLowerCase().includes(terms)));return this.store.state.filteredRows=result,this.store.methods.Visiualise(),result}catch(error){return this.store.state.filteredRows=rows,this.store.methods.Visiualise(),rows}},exportTable(){let e=this.$refs.csvtable.filteredSortedRows,t=Object.keys(e[0]);t=this.$refs.csvtable.columns.filter((e=>this.store.state.visibleColumns.includes(e.name)));const s=[t.map((e=>wrapCsvValue(e.label)))].concat(e.map((e=>t.map((t=>wrapCsvValue("function"===typeof t.field?t.field(e):e[void 0===t.field?t.name:t.field],t.format))).join(",")))).join("\r\n"),o=(0,quasar_src_utils_export_file_js__WEBPACK_IMPORTED_MODULE_2__.Z)(this.store.state.fileName,s,"text/csv");!0!==o&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}},4733:(e,t,s)=>{s.d(t,{Z:()=>d});var o=s(3673),l=s(2323);function r(e,t,s,r,i,a){const n=(0,o.up)("q-icon"),_=(0,o.up)("q-file");return(0,o.wg)(),(0,o.j4)(_,{accept:"csv","label-color":(r.filesCsv,""),"icon-color":r.filesCsv?"":"white","bg-color":(r.filesCsv,""),rounded:!r.filesCsv,outlined:!r.filesCsv,style:(0,l.j5)(r.filesCsv?"max-width:300px":"max-width:400px"),modelValue:r.filesCsv,"onUpdate:modelValue":t[0]||(t[0]=e=>r.filesCsv=e),dense:!!r.filesCsv,clearable:"",icon:"home",label:"  Upload csv",multiple:"",filter:r.checkFileType,onRejected:r.onRejected},(0,o.Nv)({_:2},[r.filesCsv?void 0:{name:"prepend",fn:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"upload"})]))}]),1032,["label-color","icon-color","bg-color","rounded","outlined","style","modelValue","dense","filter","onRejected"])}s(7280),s(71);var i=s(8825),a=s(1959);const n={setup(){const e=(0,i.Z)(),t=(0,o.f3)("csvStore");return{store:t,filesMaxSize:(0,a.iH)(null),filesCsv:(0,a.iH)(null),checkFileSize(e){return e.filter((e=>e.size<2048))},checkFileType(e){return e.filter((e=>"text/csv"===e.type))},onRejected(t){e.notify({type:"negative",message:`${t.length} file(s) did not pass validation constraints`})}}},watch:{filesCsv(e){e&&e[0].text().then((t=>{this.store.state.fileName=e[0].name;const s=t.split("\n"),o=s[0].split(","),l=[];for(var r=0;r<o.length;r++)o[r]&&l.push({name:o[r],label:o[r],field:o[r],sortable:!0});this.store.state.columnsCsv=l,this.store.state.visibleColumns=[...l],this.store.state.visibleColumns=this.store.state.visibleColumns.map((e=>e.name)),this.store.state.xaxis=this.store.state.visibleColumns[0],this.store.state.filterColumnName=this.store.state.visibleColumns[0],this.store.state.yaxis=this.store.state.visibleColumns[this.store.state.visibleColumns.length-1];const i=[];for(r=1;r<s.length;r++){let e=new Object;for(var a=0;a<s[r].length;a++){let t=o[a],l=s[r].split(",")[a];isNaN(l)||(l=Number(l)),t&&(e[t]=l)}0===Object.keys(e).length||i.push(e)}this.store.state.rowsCsv=i}))}}};var _=s(4974),c=s(4554),u=s(7518),p=s.n(u);n.render=r;const d=n;p()(n,"components",{QFile:_.Z,QIcon:c.Z})},5327:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var o=s(3673);function l(e,t,s,l,r,i){const a=(0,o.up)("Uploader"),n=(0,o.up)("Dashboard"),_=(0,o.up)("Table"),c=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(c,{class:"flex justify-around q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(a,{key:0,class:"fixed-center"})),e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(n,{key:1})):(0,o.kq)("",!0),e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(_,{key:2})):(0,o.kq)("",!0)])])),_:1})}var r=s(4733);s(7280),s(5363);const i={class:"q-pa-md "},a={class:"flex justify-between"},n={key:0,class:"text-primary"},_=(0,o.Uk)(" change view: "),c=(0,o.Uk)(" No results ");function u(e,t,s,l,r,u){const p=(0,o.up)("Uploader"),d=(0,o.up)("q-btn"),m=(0,o.up)("q-select"),v=(0,o.up)("q-item-section"),f=(0,o.up)("q-item"),w=(0,o.up)("q-icon"),b=(0,o.up)("q-input"),h=(0,o.up)("q-badge"),C=(0,o.up)("q-td"),g=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",a,[(0,o.Wm)(p),l.store.state.columnsCsv?((0,o.wg)(),(0,o.iD)("div",n,[_,(0,o.Wm)(d,{color:"primary",flat:"",label:this.store.state.grid?"grid":"table","no-caps":"",onClick:t[0]||(t[0]=e=>this.store.state.grid=!this.store.state.grid)},null,8,["label"])])):(0,o.kq)("",!0),l.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(d,{key:1,color:"primary",flat:"","icon-right":"archive",class:"",label:"Export","no-caps":"",onClick:u.exportTable},null,8,["onClick"])):(0,o.kq)("",!0)]),l.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(g,{key:0,ref:"csvtable",dense:e.$q.screen.lt.md,grid:this.store.state.grid,"card-class":this.store.state.grid?"bg-primary text-white":"",title:l.store.state.fileName.replace(".csv",""),columns:l.store.state.columnsCsv,rows:l.store.state.rowsCsv,"row-key":l.store.state.columnsCsv[0].name,filter:l.filter,"filter-method":u.filterMethod,pagination:l.store.state.initialPagination,"onUpdate:pagination":t[4]||(t[4]=e=>l.store.state.initialPagination=e),"visible-columns":l.store.state.visibleColumns},(0,o.Nv)({"body-cell":(0,o.w5)((e=>[(0,o.Wm)(C,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"blue",label:e.value},null,8,["label"])])),_:2},1032,["props"])])),_:2},[l.store.state.columnsCsv?{name:"top-right",fn:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:l.store.state.visibleColumns,"onUpdate:modelValue":t[1]||(t[1]=e=>l.store.state.visibleColumns=e),multiple:"",outlined:"",dense:"","options-dense":"","display-value":"Visible "+e.$q.lang.table.columns,"emit-value":"","map-options":"",options:l.store.state.columnsCsv,"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-pr-xl"},null,8,["modelValue","display-value","options"]),(0,o.Wm)(m,{class:"q-pl-xl q-pt-sm","label-color":"primary",filled:"",modelValue:l.column,"onUpdate:modelValue":t[2]||(t[2]=e=>l.column=e),"use-input":"","input-debounce":"0",label:"Filter for",options:l.options,onFilter:l.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"text-primary"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"]),(0,o.Wm)(b,{borderless:"",dense:"",debounce:"300",modelValue:l.filter,"onUpdate:modelValue":t[3]||(t[3]=e=>l.filter=e),placeholder:"Filter"},{append:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"filter_list"})])),_:1},8,["modelValue"])]))}:void 0]),1032,["dense","grid","card-class","title","columns","rows","row-key","filter","filter-method","pagination","visible-columns"])):(0,o.kq)("",!0)])}var p=s(2793),d=s(4607),m=s(9178),v=s(4788),f=s(3414),w=s(2035),b=s(4689),h=s(4554),C=s(3884),g=s(9721),E=s(7518),x=s.n(E);p.Z.render=u;const q=p.Z;x()(p.Z,"components",{QBtn:d.Z,QTable:m.Z,QSelect:v.Z,QItem:f.Z,QItemSection:w.Z,QInput:b.Z,QIcon:h.Z,QTd:C.Z,QBadge:g.Z});const k={class:"flex flex-center "},P={key:0,class:"row "};function D(e,t,s,l,r,i){const a=(0,o.up)("BarChart"),n=(0,o.up)("PieChart");return(0,o.wg)(),(0,o.iD)("div",k,[e.store.state.dashboard?((0,o.wg)(),(0,o.iD)("div",P,[(0,o.Wm)(a),(0,o._)("div",null,[(0,o.Wm)(n)])])):(0,o.kq)("",!0)])}function y(e,t,s,l,r,i){const a=(0,o.up)("apexchart"),n=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(n,{class:"flex flex-center q-pa-md width"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(a,{key:0,width:"1000",type:"bar",options:e.options,series:e.series},null,8,["options","series"])):(0,o.kq)("",!0)])])),_:1})}var O=s(1959);const j=(0,o.aZ)({setup(){const e=(0,o.f3)("csvStore");return{store:e,options:(0,O.Fl)((()=>({chart:{id:"barchart"},xaxis:{categories:e.state.xaxisData}}))),series:(0,O.Fl)((()=>[{name:e.state.yaxis,data:e.state.yaxisData}]))}}});var M=s(4379);j.render=y;const U=j;function W(e,t,s,l,r,i){const a=(0,o.up)("apexchart"),n=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(n,{class:"flex flex-center q-pa-md width"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(a,{key:0,width:"700",type:"donut",options:e.options,series:this.store.state.yaxisData},null,8,["options","series"])):(0,o.kq)("",!0)])])),_:1})}x()(j,"components",{QPage:M.Z});const T=(0,o.aZ)({setup(){const e=(0,o.f3)("csvStore"),t=(0,O.Fl)((()=>({labels:e.state.xaxisData,plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}}})));return{store:e,options:t}}});T.render=W;const Z=T;x()(T,"components",{QPage:M.Z});const R=(0,o.aZ)({name:"PageIndex",components:{BarChart:U,PieChart:Z},setup(){const e=(0,o.f3)("csvStore");return{store:e}}});R.render=D;const B=R,I=(0,o.aZ)({name:"PageIndex",components:{Uploader:r.Z,Table:q,Dashboard:B},setup(){const e=(0,o.f3)("csvStore");return{store:e}}});I.render=l;const A=I;x()(I,"components",{QPage:M.Z})}}]);