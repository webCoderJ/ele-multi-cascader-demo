(function(e){function t(t){for(var s,a,r=t[0],c=t[1],d=t[2],u=0,h=[];u<r.length;u++)a=r[u],i[a]&&h.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);o&&o(t);while(h.length)h.shift()();return n.push.apply(n,d||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],s=!0,r=1;r<l.length;r++){var c=l[r];0!==i[c]&&(s=!1)}s&&(n.splice(t--,1),e=a(a.s=l[0]))}return e}var s={},i={app:0},n=[];function a(t){if(s[t])return s[t].exports;var l=s[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=s,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(l,s,function(t){return e[t]}.bind(null,s));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var o=c;n.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d76")},"18a5":function(e,t,l){"use strict";var s=l("4681"),i=l.n(s);i.a},"3f69":function(e,t,l){},4681:function(e,t,l){},"56d7":function(e,t){e.exports=[{label:"默认",id:-1,children:null,value:-1},{label:"电信",children:[{label:"华东电信",children:[{label:"安徽电信",id:51,children:null,value:51},{label:"福建电信",id:52,children:null,value:52},{label:"江苏电信",id:53,children:null,value:53}],id:11,value:11,disabled:!0},{label:"华南电信",children:[{label:"广东电信",id:58,children:null,value:58},{label:"广西电信",id:59,children:null,value:59}],id:12,value:12,disabled:!0}],id:1,value:1},{label:"联通",children:[{label:"华东联通",children:[{label:"安徽联通",id:91,children:null,value:91},{label:"福建联通",id:92,children:null,value:92},{label:"江苏联通",id:93,children:null,value:93}],id:21,value:21,disabled:!0},{label:"华南联通",children:[{label:"广东联通",id:98,children:null,value:98},{label:"广西联通",id:99,children:null,value:99},{label:"海南联通",id:100,children:null,value:100}],id:22,value:22,disabled:!0}],id:2,value:2,disabled:!0},{label:"移动",children:[{label:"华东移动",children:[{label:"安徽移动",id:131,children:null,value:131}],id:31,value:31,disabled:!0},{label:"华南移动",children:[{label:"广东移动",id:138,children:null,value:138},{label:"广西移动",id:139,children:null,value:139},{label:"海南移动",id:140,children:null,value:140}],id:32,value:32,disabled:!0}],id:3,value:3,disabled:!0},{label:"教育网",id:6,children:null,value:6},{label:"电信通",id:7,children:null,value:7}]},"56d76":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("097d");var s=l("2b0e"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("p",{staticClass:"title"},[e._v("Ele-Multi-Cascader 示例")]),l("br"),l("br"),l("el-row",{staticClass:"demo-wrapper"},[l("el-col",{staticClass:"demo-col",attrs:{gutter:100,span:8}},[l("div",{staticStyle:{"text-align":"left"}},[l("p",[e._v("Data")]),l("pre",[e._v("          "+e._s(e.options)+"\n        ")])])]),l("el-col",{staticClass:"demo-col",attrs:{gutter:100,span:8}},[l("br"),l("br"),l("br"),l("br"),l("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,rules:e.rules,"label-position":"left"}},[l("el-form-item",{attrs:{label:"运营商: ",prop:"isp"}},[l("ele-multi-cascader",{attrs:{options:e.options,placeholder:"选择运营商"},on:{change:e.ispChange},model:{value:e.form.isp,callback:function(t){e.$set(e.form,"isp",t)},expression:"form.isp"}})],1),l("br"),l("br"),l("p",[l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("测试提交")])],1)],1)],1),l("el-col",{staticClass:"demo-col",staticStyle:{"text-align":"left"},attrs:{gutter:100,span:8}},[l("p",[e._v("Output @change(values, items)")]),l("p",[e._v("Values")]),l("pre",[e._v("        "+e._s(e.outputs.values)+"\n      ")]),l("p",[e._v("Items")]),l("pre",[e._v("        "+e._s(e.outputs.items)+"\n      ")])])],1)],1)},n=[],a=l("56d7"),r=l.n(a),c={name:"app",data:function(){return{options:r.a,outputs:{values:[],items:[]},rules:{isp:[{required:!0,trigger:"change",validator:function(e,t,l){0===t.length?l(new Error("请选择运营商")):l()}}]},form:{isp:[58,59]}}},methods:{ispChange:function(e,t){this.outputs.values=e,this.outputs.items=t},submit:function(){var e=this;this.$refs.form.validate(function(t){t&&e.$message({message:"测试通过",type:"success"})})}}},d=c,o=(l("d993"),l("2877")),u=Object(o["a"])(d,i,n,!1,null,"f6b96890",null);u.options.__file="App.vue";var h=u.exports,p=l("5c96"),f=l.n(p),v=(l("7f7f"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cascader-wrapper"},[l("el-popover",{attrs:{placement:"bottom-start",trigger:"manual","popper-class":"cascader-popper"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:e.placeholder,"popper-class":"hide-popper",disabled:e.disabled,size:e.size},on:{change:e.selectChange,focus:e.handleFocus},model:{value:e.selectedLabels,callback:function(t){e.selectedLabels=t},expression:"selectedLabels"}})],1),l("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hidePopover,expression:"hidePopover"}],staticClass:"cascader-menu-wrapper"},e._l(e.casTree,function(t,s){return l("ul",{key:s,staticClass:"el-cascader-menu cascader-menu"},e._l(t,function(t,i){return l("li",{key:i,class:{"el-cascader-menu__item":!0,"el-cascader-menu__item--extensible":t.children&&t.children.length>0,"has-checked-child":t.hasCheckedChild,"is-active":t.hasCheckedChild},on:{click:function(l){e.spreadNext(t.children,s)}}},[l("el-checkbox",{attrs:{disabled:t.disabled},on:{change:function(l){e.checkedChange(t,s,l)}},model:{value:t.checked,callback:function(l){e.$set(t,"checked",l)},expression:"item.checked"}}),e._v("  \n          "),l("span",[e._v(e._s(t.label))])],1)}))}))])],1)}),b=[],m=(l("6762"),l("2fdb"),l("2909")),g=(l("456d"),l("ac6a"),l("53ca")),y=l("e67d"),k=l.n(y);function _(e){if(!e&&"object"!==Object(g["a"])(e))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return Object.keys(e).forEach(function(l){e[l]&&"object"===Object(g["a"])(e[l])?(t[l]=e[l].constructor===Array?[]:{},t[l]=_(e[l])):t[l]=e[l]}),t}var C={name:"EleMultiCascader",props:{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}},size:{type:String,default:""}},watch:{options:{deep:!0,handler:function(){this.initOpts()}},value:{deep:!0,handler:function(){this.hasInitModel||(this.initDatas(),this.hasInitModel=!0)}}},directives:{ClickOutside:k.a},created:function(){this.initOpts(),this.initDatas()},mounted:function(){this.elWidth=this.$el.offsetWidth,this.setPopperWidth()},destroyed:function(){this.clonedOpts=null,this.casTree=null,this.selectedItems=null,this.selectedLabels=null,this.selectedvalues=null},data:function(){return{elWidth:"",popperWidth:"",showPopover:!1,clonedOpts:[],casTree:[],selectedItems:[],selectedLabels:[],selectedValues:[],hasInitModel:!1}},methods:{initOpts:function(){this.clonedOpts=_(this.options),this.casTree=[this.clonedOpts]},initDatas:function(){this.selectedValues=this.value,this.selectedItems=[],this.selectedLabels=[],this.recursiveOpt(this.clonedOpts)},recursiveOpt:function(e){var t=this,l=this;e.forEach(function(e){e.checked=!1,t.selectedValues.some(function(t){return t+""==e.value+""})?(t.selectedItems.push(e),t.selectedLabels.push(e.label),e.checked=!0,t.describeCheckedMap(e)):e.checked=!1,e.children&&e.children.length>0&&l.recursiveOpt(e.children)})},describeCheckedMap:function(e){function t(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;s.forEach(function(s){if(e.value===s.value)if(s.checked)l.forEach(function(e){e.hasCheckedChild=!0});else for(var i=l.length-1;i>=0;i--){var n=l[i],a=!1;n.children&&n.children.length>0&&(a=n.children.some(function(e){return e.checked||e.hasCheckedChild})),n.hasCheckedChild=a}else Array.isArray(s.children)&&t(Object(m["a"])(l).concat([s]),s.children)})}t([],this.clonedOpts)},spreadNext:function(e,t){(t||0===t)&&(e&&e.length>0?this.casTree.splice(t+1,this.casTree.length-1,e):this.casTree.splice(t+1,this.casTree.length-1),this.setPopperWidth())},syncData:function(){this.$emit("input",this.selectedValues),this.$emit("change",this.selectedValues,this.selectedItems)},selectChange:function(e){var t=this;this.selectedLabels=e;var l=this.selectedItems.filter(function(t){return!e.includes(t.label)})[0];l.checked=!1,this.describeCheckedMap(l),this.selectedItems=this.selectedItems.filter(function(e){return t.selectedLabels.includes(e.label)}),this.selectedValues=this.selectedItems.map(function(e){return e.value}),this.syncData(),this.refresPopover()},checkedChange:function(e,t,l){var s=this;l?this.selectedItems.push(e):this.selectedItems=this.selectedItems.filter(function(t){return t.label!=e.label}),this.selectedLabels=[],this.selectedValues=[],this.selectedItems.forEach(function(e){s.selectedLabels.push(e.label),s.selectedValues.push(e.value)}),this.syncData(),this.describeCheckedMap(e),this.refresPopover()},setPopperWidth:function(){var e=161*this.casTree.length;document.getElementsByClassName("cascader-popper")[0].style.width=e+"px"},handleFocus:function(e){this.disabled||(this.showPopover=!0,this.$emit("focus",e))},hidePopover:function(e){this.showPopover=!1,this.$emit("blur",e)},refresPopover:function(){var e=new Event("resize");setTimeout(function(){window.dispatchEvent(e)},66)}}},w=C,O=(l("18a5"),Object(o["a"])(w,v,b,!1,null,null,null));O.options.__file="main.vue";var x=O.exports;x.install=function(e){e.component(x.name,x)};var P=x;s["default"].config.productionTip=!1,s["default"].use(f.a),s["default"].use(P),new s["default"]({render:function(e){return e(h)}}).$mount("#app")},d993:function(e,t,l){"use strict";var s=l("3f69"),i=l.n(s);i.a}});
//# sourceMappingURL=app.9b6069e5.js.map