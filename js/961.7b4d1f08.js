"use strict";(self["webpackChunkquick_csv_fix"]=self["webpackChunkquick_csv_fix"]||[]).push([[961],{2793:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7280),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__),quasar_src_utils_export_file_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2841),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8825),components_Uploader_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4733),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3673),vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1959);function wrapCsvValue(e,t){let s=void 0!==t?t(e):e;return s=void 0===s||null===s?"":String(s),s=s.split('"').join('""'),`"${s}"`}const __WEBPACK_DEFAULT_EXPORT__={components:{Uploader:components_Uploader_vue__WEBPACK_IMPORTED_MODULE_3__.Z},setup(){const e=(0,vue__WEBPACK_IMPORTED_MODULE_4__.f3)("csvStore");(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__.Z)();let t=e.state.visibleColumns?[...e.state.visibleColumns]:[],s=(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(t),o=e.state.filterColumnName;return{store:e,options:s,column:o,filter:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(""),filterFn(e,o){o(""!==e?()=>{const o=e.toLowerCase();s.value=t.filter((e=>e.toLowerCase().indexOf(o)>-1))}:()=>{s.value=t})}}},methods:{filterMethod(rows,terms,cols){try{let result=rows.filter((row=>terms.includes(">")||terms.includes("<")?eval(`${row[this.column]}${terms}`):String(row[this.column]).toLowerCase().includes(terms)));return this.store.state.filteredRows=result,result}catch(error){return this.store.state.filteredRows=rows,rows}},exportTable(){let e=this.$refs.csvtable.filteredSortedRows,t=Object.keys(e[0]);t=this.$refs.csvtable.columns.filter((e=>this.store.state.visibleColumns.includes(e.name)));const s=[t.map((e=>wrapCsvValue(e.label)))].concat(e.map((e=>t.map((t=>wrapCsvValue("function"===typeof t.field?t.field(e):e[void 0===t.field?t.name:t.field],t.format))).join(",")))).join("\r\n"),o=(0,quasar_src_utils_export_file_js__WEBPACK_IMPORTED_MODULE_2__.Z)(this.store.state.fileName,s,"text/csv");!0!==o&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}},4733:(e,t,s)=>{s.d(t,{Z:()=>d});var o=s(3673),l=s(2323);function i(e,t,s,i,a,r){const n=(0,o.up)("q-icon"),_=(0,o.up)("q-file");return(0,o.wg)(),(0,o.j4)(_,{accept:"csv","label-color":(i.filesCsv,""),"icon-color":i.filesCsv?"":"white","bg-color":(i.filesCsv,""),rounded:!i.filesCsv,outlined:!i.filesCsv,style:(0,l.j5)(i.filesCsv?"max-width:300px":"max-width:400px"),modelValue:i.filesCsv,"onUpdate:modelValue":t[0]||(t[0]=e=>i.filesCsv=e),dense:!!i.filesCsv,clearable:"",icon:"home",label:"  Upload csv",multiple:"",filter:i.checkFileType,onRejected:i.onRejected},(0,o.Nv)({_:2},[i.filesCsv?void 0:{name:"prepend",fn:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"upload"})]))}]),1032,["label-color","icon-color","bg-color","rounded","outlined","style","modelValue","dense","filter","onRejected"])}s(7280),s(71);var a=s(8825),r=s(1959);const n={setup(){const e=(0,a.Z)(),t=(0,o.f3)("csvStore");return{store:t,filesMaxSize:(0,r.iH)(null),filesCsv:(0,r.iH)(null),checkFileSize(e){return e.filter((e=>e.size<2048))},checkFileType(e){return e.filter((e=>"text/csv"===e.type))},onRejected(t){e.notify({type:"negative",message:`${t.length} file(s) did not pass validation constraints`})}}},watch:{filesCsv(e){e&&e[0].text().then((t=>{this.store.state.fileName=e[0].name;const s=t.split("\n"),o=s[0].split(","),l=[];for(var i=0;i<o.length;i++)o[i]&&l.push({name:o[i],label:o[i],field:o[i],sortable:!0});this.store.state.columnsCsv=l,this.store.state.visibleColumns=[...l],this.store.state.visibleColumns=this.store.state.visibleColumns.map((e=>e.name)),this.store.state.xaxis=this.store.state.visibleColumns[0],this.store.state.filterColumnName=this.store.state.visibleColumns[0],this.store.state.yaxis=this.store.state.visibleColumns[this.store.state.visibleColumns.length-1];const a=[];for(i=1;i<s.length;i++){let e=new Object;for(var r=0;r<s[i].length;r++){let t=o[r],l=s[i].split(",")[r];isNaN(l)||(l=Number(l)),t&&(e[t]=l)}0===Object.keys(e).length||a.push(e)}this.store.state.rowsCsv=a}))}}};var _=s(4974),u=s(4554),c=s(7518),p=s.n(c);n.render=i;const d=n;p()(n,"components",{QFile:_.Z,QIcon:u.Z})},7961:(e,t,s)=>{s.r(t),s.d(t,{default:()=>z});var o=s(3673);function l(e,t,s,l,i,a){const r=(0,o.up)("Uploader"),n=(0,o.up)("Dashboard"),_=(0,o.up)("Table"),u=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(u,{class:"flex flex-center q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(r,{key:0})),e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(n,{key:1})):(0,o.kq)("",!0),e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(_,{key:2})):(0,o.kq)("",!0)])])),_:1})}var i=s(4733);s(7280),s(5363);const a={class:"q-pa-md "},r={class:"flex flex-center justify-between"},n={key:0,class:"text-primary"},_=(0,o.Uk)(" change view: "),u=(0,o.Uk)(" No results ");function c(e,t,s,l,i,c){const p=(0,o.up)("Uploader"),d=(0,o.up)("q-btn"),m=(0,o.up)("q-select"),f=(0,o.up)("q-item-section"),v=(0,o.up)("q-item"),h=(0,o.up)("q-icon"),w=(0,o.up)("q-input"),b=(0,o.up)("q-badge"),x=(0,o.up)("q-td"),C=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o.Wm)(p),l.store.state.columnsCsv?((0,o.wg)(),(0,o.iD)("div",n,[_,(0,o.Wm)(d,{color:"primary",flat:"",label:this.store.state.grid?"grid":"table","no-caps":"",onClick:t[0]||(t[0]=e=>this.store.state.grid=!this.store.state.grid)},null,8,["label"])])):(0,o.kq)("",!0),l.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(d,{key:1,color:"primary",flat:"","icon-right":"archive",class:"",label:"Export","no-caps":"",onClick:c.exportTable},null,8,["onClick"])):(0,o.kq)("",!0)]),l.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(C,{key:0,ref:"csvtable",dense:e.$q.screen.lt.md,grid:this.store.state.grid,"card-class":this.store.state.grid?"bg-primary text-white":"",title:l.store.state.fileName.replace(".csv",""),columns:l.store.state.columnsCsv,rows:l.store.state.rowsCsv,"row-key":l.store.state.columnsCsv[0].name,filter:l.filter,"filter-method":c.filterMethod,pagination:l.store.state.initialPagination,"onUpdate:pagination":t[4]||(t[4]=e=>l.store.state.initialPagination=e),"visible-columns":l.store.state.visibleColumns},(0,o.Nv)({"body-cell":(0,o.w5)((e=>[(0,o.Wm)(x,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{color:"blue",label:e.value},null,8,["label"])])),_:2},1032,["props"])])),_:2},[l.store.state.columnsCsv?{name:"top-right",fn:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:l.store.state.visibleColumns,"onUpdate:modelValue":t[1]||(t[1]=e=>l.store.state.visibleColumns=e),multiple:"",outlined:"",dense:"","options-dense":"","display-value":"Visible "+e.$q.lang.table.columns,"emit-value":"","map-options":"",options:l.store.state.columnsCsv,"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-pr-xl"},null,8,["modelValue","display-value","options"]),(0,o.Wm)(m,{class:"q-pl-xl q-pt-sm","label-color":"primary",filled:"",modelValue:l.column,"onUpdate:modelValue":t[2]||(t[2]=e=>l.column=e),"use-input":"","input-debounce":"0",label:"Filter for",options:l.options,onFilter:l.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"text-primary"},{default:(0,o.w5)((()=>[u])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"]),(0,o.Wm)(w,{borderless:"",dense:"",debounce:"300",modelValue:l.filter,"onUpdate:modelValue":t[3]||(t[3]=e=>l.filter=e),placeholder:"Filter"},{append:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"filter_list"})])),_:1},8,["modelValue"])]))}:void 0]),1032,["dense","grid","card-class","title","columns","rows","row-key","filter","filter-method","pagination","visible-columns"])):(0,o.kq)("",!0)])}var p=s(2793),d=s(4607),m=s(9178),f=s(4788),v=s(3414),h=s(2035),w=s(4689),b=s(4554),x=s(3884),C=s(9721),g=s(7518),q=s.n(g);p.Z.render=c;const y=p.Z;q()(p.Z,"components",{QBtn:d.Z,QTable:m.Z,QSelect:f.Z,QItem:v.Z,QItemSection:h.Z,QInput:w.Z,QIcon:b.Z,QTd:x.Z,QBadge:C.Z});const E={class:"flex flex-center "},k={key:0,class:"row "};function D(e,t,s,l,i,a){const r=(0,o.up)("VisionBar"),n=(0,o.up)("BarChart"),_=(0,o.up)("PieChart");return(0,o.wg)(),(0,o.iD)("div",E,[(0,o.Wm)(r),e.store.state.dashboard?((0,o.wg)(),(0,o.iD)("div",k,[(0,o.Wm)(n),(0,o._)("div",null,[(0,o.Wm)(_)])])):(0,o.kq)("",!0)])}function P(e,t,s,l,i,a){const r=(0,o.up)("apexchart"),n=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(n,{class:"flex flex-center q-pa-md width"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(r,{key:0,width:"1000",type:"bar",options:e.options,series:e.series},null,8,["options","series"])):(0,o.kq)("",!0)])])),_:1})}const O=(0,o.aZ)({setup(){const e=(0,o.f3)("csvStore"),t=e.getters.getRowData(e.state.xaxis),s=e.getters.getRowData(e.state.yaxis),l=e.state.yaxis,i=e.state.xaxis,a=()=>({chart:{id:"vuechart-example"},xaxis:{categories:t}}),r=()=>[{name:l,data:s}];return{store:e,yaxisSelected:l,xaxisSelected:i,options:a(),series:r()}},watch:{yaxisSelected(){this.options=this.options(),this.series=this.series()}}});var j=s(4379);O.render=P;const W=O;function U(e,t,s,l,i,a){const r=(0,o.up)("apexchart"),n=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(n,{class:"flex flex-center q-pa-md width"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[e.store.state.columnsCsv?((0,o.wg)(),(0,o.j4)(r,{key:0,width:"700",type:"donut",options:e.options,series:e.series},null,8,["options","series"])):(0,o.kq)("",!0)])])),_:1})}q()(O,"components",{QPage:j.Z});const M=(0,o.aZ)({setup(){const e=(0,o.f3)("csvStore"),t=e.getters.getRowData(e.state.xaxis),s=e.getters.getRowData(e.state.yaxis),l=e.state.yaxis,i=e.state.xaxis,a=()=>({labels:t,plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}}}),r=()=>s;return{store:e,yaxisSelected:l,xaxisSelected:i,options:a(),series:r()}},watch:{yaxisSelected(){this.options=this.options(),this.series=this.series()}}});M.render=U;const Z=M;q()(M,"components",{QPage:j.Z});const V={class:" row flex justify-around bg-primary full-width "},R={class:"q-pl-xl text-white text-caption"},T=(0,o._)("p",{class:"q-pt-sm"},"Vision Bar",-1),B={class:"q-gutter-sm"},I=(0,o.Uk)(" No results "),L=(0,o.Uk)(" No results ");function A(e,t,s,l,i,a){const r=(0,o.up)("q-checkbox"),n=(0,o.up)("q-item-section"),_=(0,o.up)("q-item"),u=(0,o.up)("q-select");return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",R,[T,(0,o._)("div",B,[(0,o.Wm)(r,{modelValue:l.store.state.dashboard,"onUpdate:modelValue":t[0]||(t[0]=e=>l.store.state.dashboard=e),label:"Dashboard"},null,8,["modelValue"])])]),(0,o.Wm)(u,{class:"q-pl-xl q-pt-sm","label-color":"white",filled:"",modelValue:l.xaxis,"onUpdate:modelValue":t[1]||(t[1]=e=>l.xaxis=e),"use-input":"","input-debounce":"0",label:"X axis",options:l.options,onFilter:l.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"text-white"},{default:(0,o.w5)((()=>[I])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"]),(0,o.Wm)(u,{class:"q-pl-xl q-pt-sm","label-color":"white",filled:"",modelValue:l.yaxis,"onUpdate:modelValue":t[2]||(t[2]=e=>l.yaxis=e),"use-input":"","input-debounce":"0",label:"Y axis",options:l.options,onFilter:l.filterFn,style:{width:"250px"},behavior:"menu"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"text-grey"},{default:(0,o.w5)((()=>[L])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"])])}s(71);var S=s(1959);const F={setup(){const e=(0,o.f3)("csvStore");let t=e.state.visibleColumns?[...e.state.visibleColumns]:[],s=(0,S.iH)(t),l=(0,S.iH)(e.state.xaxis),i=(0,S.iH)(e.state.yaxis);return{store:e,options:s,xaxis:l,yaxis:i,filterFn(e,o){o(""!==e?()=>{const o=e.toLowerCase();s.value=t.filter((e=>e.toLowerCase().indexOf(o)>-1))}:()=>{s.value=t})}}},methods:{Visiualise(){this.store.state.dashboard=!this.store.state.dashboard,setTimeout((()=>{this.store.state.dashboard=!this.store.state.dashboard}),1)}},watch:{xaxis(e){this.store.state.xaxis=e,this.Visiualise()},yaxis(e){this.store.state.yaxis=e,this.Visiualise()}}};var K=s(1420);F.render=A;const Q=F;q()(F,"components",{QCheckbox:K.Z,QSelect:f.Z,QItem:v.Z,QItemSection:h.Z});const N=(0,o.aZ)({name:"PageIndex",components:{BarChart:W,PieChart:Z,VisionBar:Q},setup(){const e=(0,o.f3)("csvStore");return{store:e}}});N.render=D;const $=N,H=(0,o.aZ)({name:"PageIndex",components:{Uploader:i.Z,Table:y,Dashboard:$},setup(){const e=(0,o.f3)("csvStore");return{store:e}}});H.render=l;const z=H;q()(H,"components",{QPage:j.Z})}}]);