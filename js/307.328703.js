"use strict";(self.webpackChunkaobtools=self.webpackChunkaobtools||[]).push([[307],{90:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(8081),r=n.n(a),u=n(3645),o=n.n(u)()(r());o.push([e.id,"\n.row-bg[data-v-37aeef4c] {\n  height: 100%;\n  box-sizing: border-box;\n}\n.base-addr-input[data-v-37aeef4c] {\n  margin-bottom: 10px;\n}\n.trans-button[data-v-37aeef4c] {\n  /* margin-top: 10px; */\n  width: 100%;\n  height: 45px;\n  font-size: 16px;\n}\nhtml[data-v-37aeef4c], body[data-v-37aeef4c] {\n  margin: 0;\n  padding: 0;\n}\n",""]);const l=o},2307:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(6252),r=n(2152),u=n.n(r);const o={data:function(){return{input:"",textarea:"",result:""}},methods:{caculateTapped:function(){var e=this.caculateOffset(this.input.replace("0x",""),this.textarea);this.result=e},copyTapped:function(){""==this.result?this.$notify({title:"提示",message:"没有要复制的内容",type:"warning"}):this.copyTextToClipboard(this.result)},clearTapped:function(){this.result="",this.$notify({title:"提示",message:"结果已清空",type:"warning"})},caculateOffset:function(e,t){for(var n=[],a=0;a<t.length;a+=2)n.push(t.substring(a,a+2));for(var r=parseInt(e,16),u="",o=0;o<n.length;o+=1)"00"!==n[o]&&(u+="0x".concat((r+o).toString(16),": 0x000000").concat(n[o],"  \n"));return u},copyTextToClipboard:function(e){var t=this,n=new(u())(".trans-button",{text:function(){return e}});n.on("success",(function(){t.$notify({title:"提示",message:"生成内容已复制到系统剪切板。",type:"success"}),n.destroy()})),n.on("error",(function(){t.$notify({title:"提示",message:"生成内容已经复制到剪切板",type:"warning"}),n.destroy()}))}}};var l=n(3379),s=n.n(l),i=n(7795),c=n.n(i),p=n(569),d=n.n(p),f=n(3565),m=n.n(f),h=n(9216),b=n.n(h),y=n(4589),w=n.n(y),g=n(90),x={};x.styleTagTransform=w(),x.setAttributes=m(),x.insert=d().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=b(),s()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const k=(0,n(3744).Z)(o,[["render",function(e,t,n,r,u,o){var l=(0,a.up)("el-input"),s=(0,a.up)("el-button"),i=(0,a.up)("el-col"),c=(0,a.up)("el-row");return(0,a.wg)(),(0,a.j4)(c,{class:"row-bg",justify:"space-around",align:"top"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{span:11},{default:(0,a.w5)((function(){return[(0,a.Wm)(l,{class:"base-addr-input",modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.input=t}),placeholder:"0x00000000"},{prepend:(0,a.w5)((function(){return[(0,a.Uk)("内存基址")]})),_:1},8,["modelValue"]),(0,a.Wm)(l,{class:"base-addr-input",spellcheck:"false",modelValue:e.textarea,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.textarea=t}),rows:20,resize:"none",type:"textarea",placeholder:"请输入或复制二进制"},null,8,["modelValue"]),(0,a.Wm)(s,{class:"trans-button",type:"primary",onClick:o.caculateTapped},{default:(0,a.w5)((function(){return[(0,a.Uk)("计算偏移")]})),_:1},8,["onClick"])]})),_:1}),(0,a.Wm)(i,{span:11},{default:(0,a.w5)((function(){return[(0,a.Wm)(l,{class:"base-addr-input",modelValue:e.input,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.input=t}),disabled:"",placeholder:"0x00000000"},{prepend:(0,a.w5)((function(){return[(0,a.Uk)("内存基址")]})),_:1},8,["modelValue"]),(0,a.Wm)(l,{class:"base-addr-input",spellcheck:"false",modelValue:e.result,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.result=t}),rows:20,readonly:"",resize:"none",type:"textarea",placeholder:"暂无输入"},null,8,["modelValue"]),(0,a.Wm)(c,{justify:"space-between"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i,{span:11},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{class:"trans-button",type:"success",onClick:o.copyTapped},{default:(0,a.w5)((function(){return[(0,a.Uk)("复制结果")]})),_:1},8,["onClick"])]})),_:1}),(0,a.Wm)(i,{span:11},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{class:"trans-button",type:"danger",onClick:o.clearTapped},{default:(0,a.w5)((function(){return[(0,a.Uk)("清空结果")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}],["__scopeId","data-v-37aeef4c"]])}}]);