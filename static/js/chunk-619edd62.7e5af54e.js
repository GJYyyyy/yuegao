(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-619edd62"],{"03a7":function(t,e,i){"use strict";var a=i("91c8"),n=i.n(a);n.a},"0a26":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("ad06"),n=i("78eb"),s=i("9884"),o=i("ea8e"),c=function(t){var e=t.parent,i=t.bem,c=t.role;return{mixins:[Object(s["a"])(e),n["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===c&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,i=t.target,a=this.$refs.icon,n=a===i||a.contains(i);this.isDisabled||!n&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,n=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(o["a"])(n)}},[this.slots("icon",{checked:e})||t(a["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:c,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}}},"186a":function(t,e){t.exports="data:image/png;base64,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"},"1d29":function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agentRegistration"},[a("div",{staticClass:"mid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"label"},[t._v("请输入准确的认证信息")]),a("div",{staticClass:"value"},[a("div",{staticClass:"left",on:{click:function(e){return t.upload("1")}}},[t.cardPic1?a("img",{attrs:{src:t.cardPic1?t.$utils.dealImg(t.cardPic1):i("164d"),alt:""}}):a("div",{staticClass:"choose"},[t._m(0),a("p",{staticClass:"text"},[t._v("身份证人像面")])]),a("input",{ref:"upload1",staticClass:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.chooseUpload}})]),a("div",{staticClass:"right",on:{click:function(e){return t.upload("2")}}},[t.cardPic2?a("img",{attrs:{src:t.cardPic2?t.$utils.dealImg(t.cardPic2):i("164d"),alt:""}}):a("div",{staticClass:"choose",on:{click:function(e){return t.upload("2")}}},[t._m(1),a("p",{staticClass:"text"},[t._v("身份证国徽面")])]),a("input",{ref:"upload2",staticClass:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.chooseUpload}})])])]),a("van-cell-group",[a("van-field",{attrs:{label:"真实姓名",placeholder:"请输入本人的真实姓名"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}}),a("van-field",{attrs:{label:"身份证号",placeholder:"请输入本人的身份证号"},model:{value:t.idCardNum,callback:function(e){t.idCardNum=e},expression:"idCardNum"}}),a("van-field",{attrs:{type:"number",label:"联系电话",placeholder:"请输入本人的手机号"},model:{value:t.userMobile,callback:function(e){t.userMobile=e},expression:"userMobile"}}),t._e()],1),a("div",{staticClass:"agreement"},[a("van-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._m(2)],1),a("div",{staticClass:"btn",on:{click:t.save}},[t._v("提交")])],1),a("van-popup",{model:{value:t.agreementShow,callback:function(e){t.agreementShow=e},expression:"agreementShow"}},[a("div",{staticClass:"agreementMid"},[a("div",{staticClass:"close",on:{click:function(e){t.agreementShow=!1}}},[t._v("×")]),a("div",{domProps:{innerHTML:t._s(t.agreement)}},[t._v(t._s(t.agreement))])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"picWrap"},[a("img",{attrs:{src:i("186a"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"picWrap"},[a("img",{attrs:{src:i("186a"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n        阅读并同意\n        "),i("span",[t._v("《推广服务协议》《共享经济合作伙伴协议》")])])}],o=(i("34ef"),i("4917"),i("28a5"),i("53ca")),c=i("ade3"),r=(i("3c32"),i("417e")),l=(i("8a58"),i("e41f")),d=(i("be7f"),i("565f")),u=(i("c194"),i("7744")),h=(i("7f7f"),i("0653"),i("34e9")),f=i("365c"),m={components:(a={},Object(c["a"])(a,h["a"].name,h["a"]),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,d["a"].name,d["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),a),data:function(){return{realName:"",idCardNum:"",userMobile:"",cardPic1:"",cardPic2:"",sms:"",checked:!0,agreementShow:!1,agreement:"",min:0,Interval:null}},methods:{upload:function(t){this.type=t,this.$refs["upload"+t].click()},chooseUpload:function(t){var e=this,i=this,a=(new FormData,t.target.files),n=new FileReader;if(!(a.length<1)){this.loading=this.$toast.loading({duration:0,forbidClick:!0,message:"加载中..."});for(var s=function(t){console.log(a[t]);var s=a[t].size/1024/1024;if(s>100)return e.$toast.fail("文件大于100M"),{v:void 0};n.readAsDataURL(a[t]),n.onload=function(){var e=this.result,n=new Image;n.src=e,n.onload=function(){i.compressEvent(n,s,(function(e){i.uploadImg(e,a[t],t,a.length)}))}}},c=0;c<a.length;c++){var r=s(c);if("object"===Object(o["a"])(r))return r.v}}},compressEvent:function(t,e,i){var a=document.createElement("canvas"),n=a.getContext("2d"),s=(t.src.length,t.width),o=t.height;a.width=s,a.height=o,n.drawImage(t,0,0,s,o);var c=a.toDataURL("image/jpeg",e>1?.1:1);i&&i(c)},getPixelRatio:function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e},dataURItoBlob:function(t){var e=t.split(","),i=e[0].match(/:(.*?);/)[1],a=atob(e[1]),n=a.length,s=new Uint8Array(n);while(n--)s[n]=a.charCodeAt(n);return new Blob([s],{type:i})},uploadImg:function(t,e,i,a){var n=this,s=this,o=this.dataURItoBlob(t),c=new FormData,r={headers:{"Content-Type":"multipart/form-data"}};c.append("file",o,e.name),c.append("path",1),Object(f["Jc"])(c,r).then((function(t){i+1==a&&n.loading.clear(),0==t.code?(s["cardPic"+n.type]=t.data.filename,console.log(n.cardPic1)):n.$toast.fail("图片上传失败！")}))},getSms:function(){var t=this;this.userMobile?this.$utils.isMobile(this.userMobile)?this.min||(this.min=60,this.Interval=setInterval((function(){t.min>0?t.min--:(clearInterval(t.Interval),t.Interval=null)}),1e3)):this.$toast("请输入正确的手机号码"):this.$toast("请输入联系方式")},save:function(){var t=this;if(this.cardPic1)if(this.cardPic2)if(this.realName)if(!this.idCardNum||this.$utils.isIdCard(this.idCardNum))if(this.userMobile)if(this.$utils.isMobile(this.userMobile))if(this.checked){var e=this.$toast.loading({duration:0,forbidClick:!0});Object(f["xc"])({realName:this.realName,userMobile:this.userMobile,idCardFrontPhoto:this.cardPic1,idCardBackPhoto:this.cardPic2,idCardNumber:this.idCardNum,areaCode:"",addrAddr:""}).then((function(i){e.clear(),0==i.code?(t.$toast("申请已提交"),setTimeout((function(){t.$router.back()}),500)):t.$toast(i.msg)}))}else this.$toast("请先同意《推广服务协议》《共享经济合作伙伴协议》");else this.$toast("请输入正确的手机号码");else this.$toast("请输入联系方式");else this.$toast("请输入正确的身份证号");else this.$toast("请输入真实姓名");else this.$toast("请上传身份证反面照");else this.$toast("请上传身份证正面照")}},mounted:function(){document.title="代理商注册"},deactivated:function(){clearInterval(this.Interval),this.Interval=null}},v=m,b=(i("03a7"),i("35ee"),i("2877")),g=Object(b["a"])(v,n,s,!1,null,"032621b0",null);e["default"]=g.exports},2381:function(t,e,i){},"35ee":function(t,e,i){"use strict";var a=i("6e95"),n=i.n(a);n.a},"3c32":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},"417e":function(t,e,i){"use strict";var a=i("d282"),n=i("0a26"),s=Object(a["a"])("checkbox"),o=s[0],c=s[1];e["a"]=o({mixins:[Object(n["a"])({bem:c,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,i=e.value.slice();if(t){if(e.max&&i.length>=e.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),e.$emit("input",i))}else{var a=i.indexOf(this.name);-1!==a&&(i.splice(a,1),e.$emit("input",i))}}}})},"6e95":function(t,e,i){},"78eb":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},"8a58":function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75")},"91c8":function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},e41f:function(t,e,i){"use strict";var a=i("d282"),n=i("a142"),s=i("6605"),o=i("ad06"),c=Object(a["a"])("popup"),r=c[0],l=c[1];e["a"]=r({mixins:[Object(s["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(i){return t.$emit(e,i)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var i=this.round,a=this.position,s=this.duration,c="center"===a,r=this.transition||(c?"van-fade":"van-popup-slide-"+a),d={};if(Object(n["c"])(s)){var u=c?"animationDuration":"transitionDuration";d[u]=s+"s"}return e("transition",{attrs:{appear:this.transitionAppear,name:r},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:d,class:l((t={round:i},t[a]=a,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(o["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);
//# sourceMappingURL=chunk-619edd62.7e5af54e.js.map