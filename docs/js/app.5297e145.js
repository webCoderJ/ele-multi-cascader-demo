(function(e){function t(t){for(var n,r,s=t[0],c=t[1],o=t[2],d=0,p=[];d<s.length;d++)r=s[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,o||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],n=!0,s=1;s<l.length;s++){var c=l[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=l[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=n,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(l,n,function(t){return e[t]}.bind(null,n));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ele-multi-cascader-demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=c;i.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d76")},"146e":function(e,t,l){},"2e42":function(e,t,l){},"56d7":function(e,t){e.exports=[{label:"默认",id:-1,children:null,value:-1},{label:"电信",children:[{label:"华东电信",children:[{label:"安徽电信",id:51,children:null,value:51},{label:"福建电信",id:52,children:null,value:52},{label:"江苏电信",id:53,children:null,value:53}],id:11,value:11},{label:"华南电信",children:[{label:"广东电信",id:58,children:null,value:58},{label:"广西电信",id:59,children:null,value:59}],id:12,value:12}],id:1,value:1},{label:"联通",children:[{label:"华东联通",children:[{label:"安徽联通",id:91,children:null,value:91},{label:"福建联通",id:92,children:null,value:92},{label:"江苏联通",id:93,children:null,value:93}],id:21,value:21,disabled:!0},{label:"华南联通",children:[{label:"广东联通",id:98,children:null,value:98},{label:"广西联通",id:99,children:null,value:99},{label:"海南联通",id:100,children:null,value:100}],id:22,value:22,disabled:!0}],id:2,value:2,disabled:!0},{label:"移动",children:[{label:"华东移动",children:[{label:"安徽移动",id:131,children:null,value:131}],id:31,value:31,disabled:!0},{label:"华南移动",children:[{label:"广东移动",id:138,children:null,value:138},{label:"广西移动",id:139,children:null,value:139},{label:"海南移动",id:140,children:null,value:140}],id:32,value:32,disabled:!0}],id:3,value:3,disabled:!0},{label:"教育网",id:6,children:null,value:6},{label:"电信通",id:7,children:null,value:7}]},"56d76":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("097d");var n=l("2b0e"),a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("p",{staticClass:"title"},[e._v("Ele-Multi-Cascader 示例")]),l("a",{attrs:{href:"https://github.com/webCoderJ/ele-multi-cascader",target:"_blank"}},[l("el-button",{attrs:{type:"success",size:"mini",plain:""}},[e._v("@github")])],1),l("a",{staticClass:"ml10",attrs:{href:"https://www.npmjs.com/package/ele-multi-cascader",target:"_blank"}},[l("el-button",{attrs:{type:"warning",size:"mini",plain:""}},[e._v("@npm")])],1),l("br"),l("br"),l("el-row",{staticClass:"demo-wrapper"},[l("el-col",{staticClass:"demo-col",attrs:{gutter:100,span:8}},[l("div",{staticStyle:{"text-align":"left"}},[l("p",[e._v("Data")]),l("pre",[e._v("          "+e._s(e.options)+"\n        ")])])]),l("el-col",{staticClass:"demo-col",attrs:{gutter:100,span:8}},[l("br"),l("br"),l("br"),l("br"),l("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,rules:e.rules,"label-position":"left"}},[l("el-row",[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"选中子项: ",prop:"selectChildren",align:"left"}},[l("el-switch",{attrs:{"active-value":!0,"inactive-value":!1},on:{change:e.resetModel},model:{value:e.form.selectChildren,callback:function(t){e.$set(e.form,"selectChildren",t)},expression:"form.selectChildren"}})],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"展示层级:",prop:"selectChildren",align:"left"}},[l("el-switch",{attrs:{"active-value":!0,"inactive-value":!1},on:{change:e.resetModel},model:{value:e.form.showAllLevels,callback:function(t){e.$set(e.form,"showAllLevels",t)},expression:"form.showAllLevels"}})],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"输出层级:",prop:"selectChildren",align:"left"}},[l("el-switch",{attrs:{"active-value":!0,"inactive-value":!1},on:{change:e.resetModel},model:{value:e.form.outputLevelValue,callback:function(t){e.$set(e.form,"outputLevelValue",t)},expression:"form.outputLevelValue"}})],1)],1)],1),l("el-form-item",{attrs:{label:"运营商: ",prop:"isp"}},[l("ele-multi-cascader",{ref:"cascader",attrs:{options:e.options,placeholder:"选择运营商","show-all-levels":e.form.showAllLevels,"output-level-value":e.form.outputLevelValue,selectChildren:e.form.selectChildren},on:{change:e.ispChange},model:{value:e.form.isp,callback:function(t){e.$set(e.form,"isp",t)},expression:"form.isp"}})],1),l("br"),l("br"),l("p",[l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("测试提交")])],1)],1)],1),l("el-col",{staticClass:"demo-col",staticStyle:{"text-align":"left"},attrs:{gutter:100,span:8}},[l("p",[e._v("Output @change(values, items)")]),l("p",[e._v("Values")]),l("pre",[e._v("        "+e._s(e.outputs.values)+"\n      ")]),l("p",[e._v("Items")]),l("pre",[e._v("        "+e._s(e.outputs.items)+"\n      ")])])],1)],1)},i=[],r=l("56d7"),s=l.n(r),c={name:"app",data:function(){return{options:s.a,outputs:{values:[],items:[]},rules:{isp:[{required:!0,trigger:"change",validator:function(e,t,l){0===t.length?l(new Error("请选择运营商")):l()}}]},form:{isp:[],isp2:[],isp3:"",selectChildren:!0,showAllLevels:!0,outputLevelValue:!0}}},created:function(){this.resetModel()},methods:{ispChange:function(e,t){this.outputs.values=e,this.outputs.items=t},resetModel:function(){var e=this;this.form.isp=[],this.outputs.items=[],this.outputs.values=[],setTimeout(function(t){e.$message({message:"已重置数据",type:"success"}),e.form.isp=e.form.outputLevelValue?["1/11/51","1/11/52","1/12/59"]:["51","52","59"],e.form.isp2=e.form.outputLevelValue?["1/11/51","1/11/52","1/12/59"]:["51","52","59"]},0)},submit:function(){var e=this;this.$refs.form.validate(function(t){t&&e.$message({message:"测试通过",type:"success"})})}}},o=c,u=(l("cf19"),l("2877")),d=Object(u["a"])(o,a,i,!1,null,"0b14114b",null);d.options.__file="App.vue";var p,h=d.exports,f=l("5c96"),v=l.n(f),m=(l("7f7f"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cascader-wrapper"},[l("el-popover",{attrs:{placement:"bottom-start",trigger:"manual","popper-class":e.popperClass},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:e.placeholder,disabled:e.disabled,size:e.size,"collapse-tags":e.collapseTags,"popper-class":"hide-popper"},on:{focus:e.handleFocus,"remove-tag":e.removeTag,"visible-change":e.visibleChange},model:{value:e.selectedLabels,callback:function(t){e.selectedLabels=t},expression:"selectedLabels"}})],1),l("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.hidePopover,expression:"hidePopover"}],staticClass:"cascader-menu-wrapper"},e._l(e.casTree,function(t,n){return e.options.length>0?l("ul",{key:n,staticClass:"el-cascader-menu cascader-menu"},e._l(t,function(t,a){return l("li",{key:a,class:{"el-cascader-menu__item":!0,"el-cascader-menu__item--extensible":t.children&&t.children.length>0,"has-checked-child":t.indeterminate||t.hasCheckedChild,"is-active":t.checked},on:{click:function(l){e.spreadNext(t.children,n)}}},[l("el-checkbox",{attrs:{disabled:t.disabled,indeterminate:t.indeterminate},on:{change:function(l){e.checkedChange(t,l)}},model:{value:t.checked,callback:function(l){e.$set(t,"checked",l)},expression:"item.checked"}}),e._v("  \n          "),l("span",[e._v(e._s(t.label))])],1)})):l("ul",{staticClass:"el-cascader-menu cascader-menu"},[l("li",{staticClass:"el-cascader-menu__item dropdown__empty"},[e._v("\n          "+e._s(e.noDataText)+"\n        ")])])}))])],1)}),b=[],g=(l("7514"),l("456d"),l("ac6a"),l("53ca")),k=n["default"].prototype.$isServer,C=function(){return!k&&document.addEventListener?function(e,t,l){e&&t&&l&&e.addEventListener(t,l,!1)}:function(e,t,l){e&&t&&l&&e.attachEvent("on"+t,l)}}(),y=[],w="@@clickoutsideContext",_=0;function x(e,t,l){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(l&&l.context&&n.target&&a.target)||e.contains(n.target)||e.contains(a.target)||e===n.target||l.context.popperElm&&(l.context.popperElm.contains(n.target)||l.context.popperElm.contains(a.target))||(t.expression&&e[w].methodName&&l.context[e[w].methodName]?l.context[e[w].methodName]():e[w].bindingFn&&e[w].bindingFn())}}!n["default"].prototype.$isServer&&C(document,"mousedown",function(e){return p=e}),!n["default"].prototype.$isServer&&C(document,"mouseup",function(e){y.forEach(function(t){return t[w].documentHandler(e,p)})});var L={bind:function(e,t,l){y.push(e);var n=_++;e[w]={id:n,documentHandler:x(e,t,l),methodName:t.expression,bindingFn:t.value}},update:function(e,t,l){e[w].documentHandler=x(e,t,l),e[w].methodName=t.expression,e[w].bindingFn=t.value},unbind:function(e){for(var t=y.length,l=0;l<t;l++)if(y[l][w].id===e[w].id){y.splice(l,1);break}delete e[w]}};function O(e){if(!e&&"object"!==Object(g["a"])(e))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return Object.keys(e).forEach(function(l){e[l]&&"object"===Object(g["a"])(e[l])?(t[l]=e[l].constructor===Array?[]:{},t[l]=O(e[l])):t[l]=e[l]}),t}function P(e){return e.children&&Array.isArray(e.children)}var T={name:"EleMultiCascader",props:{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}},size:{type:String,default:""},selectChildren:{type:Boolean,default:!1},noDataText:{type:String,default:"无数据"},collapseTags:{type:Boolean,default:!1},separator:{type:String,default:"/"},showAllLevels:{type:Boolean,default:!1},outputLevelValue:{type:Boolean,default:!1}},watch:{casTree:function(){this.setPopperWidth()},options:{deep:!0,handler:function(){this.initOpts(),this.initDatas()}},value:{deep:!0,handler:function(){this.selectedValues!=this.value&&(this.initOpts(),this.initDatas())}}},directives:{Clickoutside:L},created:function(){this.popperClass="cascader-popper popper-class-".concat((new Date).getTime()),this.initOpts(),this.initDatas()},mounted:function(){this.elWidth=this.$el.offsetWidth},destroyed:function(){this.clonedOpts=null,this.casTree=null,this.selectedItems=null,this.selectedLabels=null,this.selectedvalues=null},data:function(){return{elWidth:"",popperWidth:"",popperClass:"",showPopover:!1,clonedOpts:[],casTree:[],selectedItems:[],selectedLabels:[],selectedValues:[]}},methods:{initOpts:function(){this.clonedOpts=O(this.options),this.recursiveOpt(this.clonedOpts,null),this.casTree=[this.clonedOpts]},initDatas:function(){this.pickCheckedItem(this.clonedOpts)},recursiveOpt:function(e,t){var l=this,n=this;e.forEach(function(e){t&&(e.parent=t),e.indeterminate=!1,e.checked=!1,l.value.some(function(t){return t==l.getLevel(e,"value",l.outputLevelValue)})&&(e.checked=!0),l.markChildrenChecked(e),l.markParentChecked(e),l.markParentHasCheckChild(e),P(e)&&n.recursiveOpt(e.children,e)})},markChildrenChecked:function(e){function t(e,l){e&&e.map(function(e){e.disabled||(e.checked=l,e.checked&&(e.indeterminate=!1)),P(e)&&t(e.children,l)})}e&&P(e)&&this.selectChildren&&t(e.children,e.checked)},markParentChecked:function(e){function t(e){var l=0,n=e.children.some(function(e){return e.indeterminate});e.children.map(function(e){e.checked&&l++}),l===e.children.length?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=!!(l>0||n)),e.parent&&t(e.parent)}e.indeterminate=!1,e&&e.parent&&this.selectChildren&&t(e.parent)},markParentHasCheckChild:function(e){function t(e){var l=0,n=e.children.some(function(e){return e.hasCheckedChild});e.children.map(function(e){e.checked&&l++}),e.hasCheckedChild=l>0||n,e.parent&&t(e.parent)}e.hasCheckedChild=!1,e&&e.parent&&!this.selectChildren&&t(e.parent)},getLevel:function(e,t,l){var n=[];function a(e){n.push(e[t]),e.parent&&a(e.parent)}return l?(a(e),n.reverse().join(this.separator)):e[t]},pickCheckedItem:function(e){function t(e){var l={};return Object.keys(e).forEach(function(t){"parent"!=t&&(l[t]=e[t])}),P(l)&&(l.children=l.children.map(function(e){return t(e)})),l}var l=this;function n(e){Array.isArray(e)&&e.map(function(e){if(e.checked){var a=t(e);l.selectedItems.push(a),l.selectedLabels.push(l.getLevel(e,"label",l.showAllLevels)),l.selectedValues.push(l.getLevel(e,"value",l.outputLevelValue))}P(e)&&n(e.children)})}l.selectedItems=[],l.selectedLabels=[],l.selectedValues=[],n(e)},removeTag:function(e){var t=this;function l(e){var l=null;function n(a){a&&a.find(function(a){if(t.getLevel(a,"label",t.showAllLevels)===e)return l=a,!0;P(a)&&n(a.children)})}if(e)return n(t.clonedOpts),l}var n=l(e);n&&t.checkedChange(n,!1)},checkedChange:function(e,t){e.checked=t,this.$emit("clickItem",e),this.markChildrenChecked(e),this.markParentChecked(e),this.markParentHasCheckChild(e),this.pickCheckedItem(this.clonedOpts),this.refresPopover(),this.syncData()},syncData:function(){this.$emit("input",this.selectedValues),this.$emit("change",this.selectedValues,this.selectedItems)},spreadNext:function(e,t){(t||0===t)&&(e&&e.length>0?this.casTree.splice(t+1,this.casTree.length-1,e):this.casTree.splice(t+1,this.casTree.length-1))},setPopperWidth:function(){var e=161*this.casTree.length;document.getElementsByClassName(this.popperClass)[0].style.width=e+"px"},visibleChange:function(e){e&&(this.showPopover=!0)},handleFocus:function(e){this.disabled||this.$emit("focus",e)},hidePopover:function(e){this.showPopover=!1,this.$emit("blur",e)},refresPopover:function(){var e=new Event("resize");setTimeout(function(){window.dispatchEvent(e)},66)}}},$=T,E=(l("a47a"),Object(u["a"])($,m,b,!1,null,null,null));E.options.__file="main.vue";var j=E.exports;j.install=function(e){e.component(j.name,j)};var A=j;n["default"].config.productionTip=!1,n["default"].use(v.a),n["default"].use(A),new n["default"]({render:function(e){return e(h)}}).$mount("#app")},a47a:function(e,t,l){"use strict";var n=l("2e42"),a=l.n(n);a.a},cf19:function(e,t,l){"use strict";var n=l("146e"),a=l.n(n);a.a}});
//# sourceMappingURL=app.5297e145.js.map