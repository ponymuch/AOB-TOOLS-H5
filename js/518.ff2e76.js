/*! For license information please see 518.ff2e76.js.LICENSE.txt */
"use strict";(self.webpackChunkaobtools=self.webpackChunkaobtools||[]).push([[518],{3914:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8081),o=r.n(n),a=r(3645),l=r.n(a)()(o());l.push([e.id,"\n.row-bg {\n  height: 100%;\n  box-sizing: border-box;\n}\n.base-addr-input {\n  margin-bottom: 10px;\n}\n.trans-button {\n  /* margin-top: 10px; */\n  width: 100%;\n  height: 45px;\n  font-size: 16px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n",""]);const i=l},6518:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(6252),o=(0,n._)("span",null,"真的要删除吗？",-1),a={class:"dialog-footer"},l=r(2152),i=r.n(l),u=r(751),c=r(4284),s=r(5108);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,l=Object.create(a.prototype),i=new C(o||[]);return n(l,"_invoke",{value:x(e,r,i)}),l}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var m={};function p(){}function h(){}function y(){}var g={};u(g,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(D([])));b&&b!==t&&r.call(b,a)&&(g=b);var w=y.prototype=p.prototype=Object.create(g);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function W(e,t){function o(n,a,l,i){var u=s(e[n],e,a);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==f(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,l,i)}),(function(e){o("throw",e,l,i)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return o("throw",e,l,i)}))}i(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var i=V(l,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function V(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,V(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function D(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(W.prototype),u(W.prototype,l,(function(){return this})),e.AsyncIterator=W,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var l=new W(c(t,r,n,o),a);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},_(w),u(w,i,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=D,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function m(e,t,r,n,o,a,l){try{var i=e[a](l),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}const p={data:function(){return{input:"",textarea:"",rawDataJson:void 0,transDataJson:void 0,dialogVisible:!1,form:null,rules:{name:[{required:!0,message:"必须输入游戏名称哦",trigger:"blur"}],volume:[{required:!0,message:"必须输入分组编号哦",trigger:"blur"},{type:"number",message:"必须输入的是数字哦"}],release_date:[{type:"date",required:!0,message:"必须选择一个日期哦",trigger:"change"}],lcla6_release_date:[{type:"date",required:!0,message:"必须选择一个日期哦",trigger:"change"}],sort_publisher:[{required:!0,message:"必须输入游戏开发商哦",trigger:"blur"}]}}},computed:{gameList:function(){var e=this;return Object.keys(this.rawDataJson.titles).map((function(t,r){return{index:r,number:t,title:e.rawDataJson.titles[t].title_zhHans}}))}},mounted:function(){this.$store.commit("setMenuIndex","4")},methods:{caculateTapped:function(){try{var e=JSON.parse(this.textarea||"");e&&e.titles?(this.rawDataJson=e,s.log(e),this.$notify({title:"提示",message:"解析完成",type:"success"})):this.$notify({title:"提示",message:"请输入正确的数据",type:"warning"})}catch(e){this.$notify({title:"提示",message:"请输入正确的数据",type:"warning"})}},handleSelectionChange:function(){},tableRowClick:function(e){var t=JSON.parse(JSON.stringify(this.rawDataJson.titles[e.number]));s.log(t),t&&(this.form={name:t.title_zhHans,code:t.code,cover_type:t.cover.split(".")[1],details_type:t.details_screen.split(".")[1],players_count:"".concat(t.players_count),release_date:t.release_date,lcla6_release_date:t.lcla6_release_date,simultaneous:t.simultaneous,save_count:"".concat(t.save_count),sort_publisher:t.sort_publisher,volume:t.volume,copyright:t.copyright})},addRowClick:function(){var e=this;u.T.prompt("该编号是重要信息，输入后无法编辑，请严格按照 A-0001_j 格式进行输入，不要输入已有的编号。请务必使用前仔细阅读了添加ROM的教程。 ","重要提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[A-Z]-\d{4}_j$/,inputErrorMessage:"输入的格式不正确, X-XXXX_j"}).then((function(t){var r=t.value;e.gameList.find((function(e){return e.number==r.trim()}))?(0,c.z8)({type:"warn",message:"游戏编号重复"}):(e.$refs.tableRef.setCurrentRow(),e.form={name:"",code:r.trim(),cover_type:"png",details_type:"png",players_count:"1",release_date:"",lcla6_release_date:"",simultaneous:!1,save_count:"1",sort_publisher:"Nintendo",volume:150,copyright:"©1995-2004 Nintendo"},(0,c.z8)({type:"success",message:"新增项:".concat(r)}))}))},onSubmit:(h=d().mark((function e(t){var r=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.validate((function(e,t){if(e){var n={code:r.form.code,copyright:r.form.copyright,cover:"/titles/".concat(r.form.code,"/").concat(r.form.code,".").concat(r.form.cover_type),details_screen:"/titles/".concat(r.form.code,"/").concat(r.form.code,"-details.").concat(r.form.details_type),fadein:[3,0],lcla6_release_date:r.form.lcla6_release_date,players_count:+r.form.players_count,publisher:"任天堂",release_date:r.form.release_date,rewind_interval:1.5,rom:"/titles/".concat(r.form.code,"/").concat(r.form.code,".gba"),save_count:+r.form.save_count,simultaneous:r.form.simultaneous,sort_publisher:r.form.sort_publisher,sort_title:r.form.name,title:r.form.name,title_zhHans:r.form.name,title_zhHant:r.form.name,volume:+r.form.volume};r.rawDataJson.titles[r.form.code]=n,r.$notify({title:"提示",message:"保存成功",type:"success"})}}));case 4:case"end":return e.stop()}}),e)})),y=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=h.apply(e,t);function a(e){m(o,r,n,a,l,"next",e)}function l(e){m(o,r,n,a,l,"throw",e)}a(void 0)}))},function(e){return y.apply(this,arguments)}),onDelete:function(){this.dialogVisible=!0},confirmDelete:function(){var e=this;this.dialogVisible=!1,delete this.rawDataJson.titles[this.form.code],this.$nextTick((function(){e.form=null,e.$notify({title:"提示",message:"已经删除",type:"success"})}))},copyTapped:function(){var e=JSON.stringify(this.rawDataJson);""==e?this.$notify({title:"提示",message:"没有要复制的内容",type:"warning"}):this.copyTextToClipboard(e)},clearTapped:function(){this.result="",this.$notify({title:"提示",message:"结果已清空",type:"warning"})},copyTextToClipboard:function(e){var t=this,r=new(i())(".trans-button",{text:function(){return e}});r.on("success",(function(){t.$notify({title:"提示",message:"生成内容已复制到系统剪切板。",type:"success"}),r.destroy()})),r.on("error",(function(){t.$notify({title:"提示",message:"生成内容已经复制到剪切板",type:"warning"}),r.destroy()}))}}};var h,y,g=r(3379),v=r.n(g),b=r(7795),w=r.n(b),_=r(569),W=r.n(_),x=r(3565),V=r.n(x),k=r(9216),L=r.n(k),C=r(4589),D=r.n(C),E=r(3914),j={};j.styleTagTransform=D(),j.setAttributes=V(),j.insert=W().bind(null,"head"),j.domAPI=w(),j.insertStyleElement=L(),v()(E.Z,j),E.Z&&E.Z.locals&&E.Z.locals;const S=(0,r(3744).Z)(p,[["render",function(e,t,r,l,i,u){var c=(0,n.up)("el-input"),s=(0,n.up)("el-button"),f=(0,n.up)("el-table-column"),d=(0,n.up)("el-table"),m=(0,n.up)("el-col"),p=(0,n.up)("el-row"),h=(0,n.up)("el-form-item"),y=(0,n.up)("el-radio"),g=(0,n.up)("el-radio-group"),v=(0,n.up)("el-date-picker"),b=(0,n.up)("el-switch"),w=(0,n.up)("el-form"),_=(0,n.up)("el-empty"),W=(0,n.up)("el-dialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p,{class:"row-bg",justify:"space-around",align:"top"},{default:(0,n.w5)((function(){return[(0,n.Wm)(m,{span:9},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{class:"base-addr-input",modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.input=t}),disabled:"",placeholder:"../0100555017574000/romfs/titles/lclassics.titlesdb"},{prepend:(0,n.w5)((function(){return[(0,n.Uk)("解析路径")]})),_:1},8,["modelValue"]),e.rawDataJson?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(d,{ref:"tableRef",class:"margin-top",data:u.gameList,border:"",style:{width:"100%"},height:"585","empty-text":"暂无数据","highlight-current-row":!0,onSelectionChange:u.handleSelectionChange,onRowClick:u.tableRowClick},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{property:"index",label:"序号",width:"60"}),(0,n.Wm)(f,{property:"number",label:"编号",width:"100"}),(0,n.Wm)(f,{property:"title",label:"名称"}),(0,n.kq)(' <el-table-column property="bid" label="BID" width="180" /> ')]})),_:1},8,["data","onSelectionChange","onRowClick"]),(0,n.Wm)(p,{justify:"space-between"},{default:(0,n.w5)((function(){return[(0,n.Wm)(m,{span:11},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{class:"trans-button margin-top-10",type:"success",onClick:u.copyTapped},{default:(0,n.w5)((function(){return[(0,n.Uk)("复制结果")]})),_:1},8,["onClick"])]})),_:1}),(0,n.Wm)(m,{span:11},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{class:"trans-button margin-top-10",type:"primary",onClick:u.addRowClick},{default:(0,n.w5)((function(){return[(0,n.Uk)("增加游戏")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(c,{class:"base-addr-input",spellcheck:"false",modelValue:e.textarea,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.textarea=t}),rows:20,resize:"none",type:"textarea",placeholder:"请输入或复制二进制"},null,8,["modelValue"]),(0,n.Wm)(s,{class:"trans-button",type:"primary",onClick:u.caculateTapped},{default:(0,n.w5)((function(){return[(0,n.Uk)("开始解析啦")]})),_:1},8,["onClick"])],64))]})),_:1}),(0,n.Wm)(m,{span:13,style:{}},{default:(0,n.w5)((function(){return[e.form?((0,n.wg)(),(0,n.j4)(w,{key:0,ref:"ruleFormRef",model:e.form,rules:e.rules,"status-icon":"","label-width":"120px","label-position":"left"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h,{label:"游戏名称",prop:"name"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.name=t}),placeholder:"请输入游戏名称"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"游戏编号"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{modelValue:e.form.code,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.code=t}),placeholder:"未知编号",disabled:""},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"封面格式"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{modelValue:e.form.cover_type,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.cover_type=t})},{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{label:"png"}),(0,n.Wm)(y,{label:"jpg"})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"截图格式"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{modelValue:e.form.details_type,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.form.details_type=t})},{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{label:"png"}),(0,n.Wm)(y,{label:"jpg"})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"游戏人数"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{modelValue:e.form.players_count,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.form.players_count=t})},{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{label:"1"}),(0,n.Wm)(y,{label:"2"}),(0,n.Wm)(y,{label:"3"}),(0,n.Wm)(y,{label:"4"})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"发行日期",prop:"release_date"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{modelValue:e.form.release_date,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.form.release_date=t}),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"录入日期",prop:"lcla6_release_date"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{modelValue:e.form.lcla6_release_date,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.form.lcla6_release_date=t}),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"开启同步"},{default:(0,n.w5)((function(){return[(0,n.Wm)(b,{modelValue:e.form.simultaneous,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.form.simultaneous=t})},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"存档个数"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{modelValue:e.form.save_count,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.form.save_count=t}),disabled:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{label:"1"}),(0,n.Wm)(y,{label:"2"}),(0,n.Wm)(y,{label:"3"}),(0,n.Wm)(y,{label:"4"})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"游戏开发",prop:"sort_publisher"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{modelValue:e.form.sort_publisher,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.form.sort_publisher=t}),placeholder:"请输入游戏开发商"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"分组编号",prop:"volume"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{modelValue:e.form.volume,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.form.volume=t}),modelModifiers:{number:!0},type:"text",autocomplete:"off",placeholder:"请输入分组编号"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,{label:"游戏发行"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{modelValue:e.form.copyright,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.form.copyright=t}),placeholder:"©1995-2004 Nintendo",disabled:""},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{type:"primary",onClick:t[14]||(t[14]=function(t){return u.onSubmit(e.$refs.ruleFormRef)})},{default:(0,n.w5)((function(){return[(0,n.Uk)("保存")]})),_:1}),(0,n.Wm)(s,{type:"danger",onClick:t[15]||(t[15]=function(e){return u.onDelete()})},{default:(0,n.w5)((function(){return[(0,n.Uk)("删除")]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])):((0,n.wg)(),(0,n.j4)(_,{key:1,description:"左边选了才能看",style:{height:"500px"}}))]})),_:1})]})),_:1}),(0,n.Wm)(W,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.dialogVisible=t}),title:"提示",width:"30%"},{footer:(0,n.w5)((function(){return[(0,n._)("span",a,[(0,n.Wm)(s,{onClick:t[16]||(t[16]=function(t){return e.dialogVisible=!1})},{default:(0,n.w5)((function(){return[(0,n.Uk)("取消")]})),_:1}),(0,n.Wm)(s,{type:"primary",onClick:u.confirmDelete},{default:(0,n.w5)((function(){return[(0,n.Uk)("确认")]})),_:1},8,["onClick"])])]})),default:(0,n.w5)((function(){return[o]})),_:1},8,["modelValue"])],64)}]])}}]);