(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-603fd564"],{"01d9":function(t,i,e){"use strict";var a=e("0f56"),s=e.n(a);s.a},"0f56":function(t,i,e){},"2bb1":function(t,i,e){"use strict";var a=e("c31d"),s=e("d282"),n=e("9884"),o=Object(s["a"])("swipe-item"),c=o[0],r=o[1];i["a"]=c({mixins:[Object(n["a"])("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,a=i.vertical;return t[a?"height":"width"]=e+"px",this.offset&&(t.transform="translate"+(a?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,a=this.mounted;if(!e.lazyRender||i)return!0;if(!a)return!1;var s=e.activeIndicator,n=e.count-1,o=0===s&&e.loop?n:s-1,c=s===n&&e.loop?0:s+1,r=t===s||t===o||t===c;return r&&(this.inited=!0),r}},render:function(){var t=arguments[0];return t("div",{class:r(),style:this.style,on:Object(a["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}})},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var a=e("d282"),s=e("02de"),n=e("1325"),o=e("4598"),c=e("482d"),r=e("3875"),l=e("9884"),h=e("5fbe"),d=Object(a["a"])("swipe"),u=d[0],f=d[1];i["a"]=u({mixins:[r["a"],Object(l["b"])("vanSwipe"),Object(h["a"])((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(s["a"])(this.$el)){clearTimeout(this.timer);var i=this.$el.getBoundingClientRect();this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(n["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,a=i/e,s=Math.abs(a)>.25||Math.abs(i)>t/2;if(s&&this.isCorrectDirection){var n=this.vertical?this.offsetY:this.offsetX,o=0;o=this.loop?n>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:o,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,a=this.maxCount;return t?this.loop?Object(c["b"])(i+t,-1,e):Object(c["b"])(i+t,0,a):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var a=i-e;return this.loop||(a=Object(c["b"])(a,this.minOffset,0)),a},move:function(t){var i=t.pace,e=void 0===i?0:i,a=t.offset,s=void 0===a?0:a,n=t.emitChange,o=this.loop,c=this.count,r=this.active,l=this.children,h=this.trackSize,d=this.minOffset;if(!(c<=1)){var u=this.getTargetActive(e),f=this.getTargetOffset(u,s);if(o){if(l[0]&&f!==d){var m=f<d;l[0].offset=m?h:0}if(l[c-1]&&0!==f){var v=f>0;l[c-1].offset=v?-h:0}}this.active=u,this.offset=f,n&&u!==r&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){var a;a=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?Object(o["b"])((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:a-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,a=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:f("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:f("indicator",{active:s===a}),style:s===a?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:f()},[t("div",{ref:"track",style:this.trackStyle,class:f("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},"55f0":function(t,i,e){},"5f5f":function(t,i,e){"use strict";e("68ef"),e("e3b3"),e("a526")},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},8270:function(t,i,e){},"9f91":function(t,i,e){"use strict";e.r(i);var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"one mescroll"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:t.pics.length?t.$utils.dealImg(t.pics[0]):"",alt:""}}),e("div",{staticClass:"top_bottom"},[e("div",{staticClass:"left"},[e("van-icon",{attrs:{name:"bullhorn-o",size:"20"}})],1),e("div",{staticClass:"flex-mid"},[e("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},t._l(t.list,(function(i,a){return e("van-swipe-item",{key:a},[t._v(t._s(i.userName))])})),1)],1),e("div",{staticClass:"right"},[t._v("已报名")])])]),e("div",{staticClass:"mid",attrs:{id:"mid"}},[e("p",{staticClass:"title"},[t._v("根据国家要求，请提供准确的实名信息")]),e("van-cell-group",[e("van-cell",{attrs:{title:"套餐","is-link":"","arrow-direction":"down","value-class":t.setMealName?"color":"",value:t.setMealName||"请选择套餐"},on:{click:function(i){t.showSetMeal=!0}}}),e("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名(已加密)"},on:{blur:t.blur},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}}),e("van-field",{attrs:{label:"手机号",type:"number",placeholder:"输入手机号便于快递小哥联系"},on:{blur:t.blur},model:{value:t.telno,callback:function(i){t.telno=i},expression:"telno"}}),e("van-field",{attrs:{label:"身份证",placeholder:"请输入身份证(已加密)"},on:{blur:t.blur},model:{value:t.idCardNo,callback:function(i){t.idCardNo=i},expression:"idCardNo"}}),e("van-cell",{attrs:{title:"省市区","is-link":"","arrow-direction":"down","value-class":t.areaName?"color":"",value:t.areaName||"请选择省市区(已加密)"},on:{click:function(i){t.showAddress=!0}}}),e("van-field",{attrs:{label:"详细收货地址",placeholder:"请输入详细收货地址(已加密)"},on:{blur:t.blur},model:{value:t.addr,callback:function(i){t.addr=i},expression:"addr"}})],1),e("div",{staticClass:"flex"},[e("van-checkbox",{attrs:{shape:"square"},model:{value:t.checked,callback:function(i){t.checked=i},expression:"checked"}}),e("div",{staticClass:"text"},[t._v("\n        我已阅读并同意\n        "),e("span",{on:{click:function(i){t.agreementShow=!0}}},[t._v("《用户身份授权协议》")])])],1),e("div",{staticClass:"btn",on:{click:t.submit}},[t._v("立即领取")])],1),e("div",{staticClass:"bottom"},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.msg)}},[t._v(t._s(t.msg))])]),e("div",{staticClass:"fixed",on:{click:t.toMid}},[t._m(0)]),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showSetMeal,callback:function(i){t.showSetMeal=i},expression:"showSetMeal"}},[e("van-picker",{attrs:{title:"套餐","show-toolbar":"",columns:t.columns,"value-key":"vname"},on:{confirm:t.setMealConfirm,cancel:function(i){t.showSetMeal=!1}}})],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showAddress,callback:function(i){t.showAddress=i},expression:"showAddress"}},[e("van-area",{attrs:{"area-list":t.areaList,value:t.areaCode},on:{confirm:t.areaConfirm,cancel:function(i){t.showAddress=!1}}})],1),e("van-popup",{attrs:{round:""},model:{value:t.agreementShow,callback:function(i){t.agreementShow=i},expression:"agreementShow"}},[e("div",{staticClass:"agreementMid"},[e("div",{staticClass:"close",on:{click:function(i){t.agreementShow=!1}}},[t._v("×")]),e("div",{domProps:{innerHTML:t._s(t.agreement)}},[t._v(t._s(t.agreement))])])])],1)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"flex"},[e("div",{staticClass:"left"},[t._v("免费领取")]),e("div",{staticClass:"right"},[t._v("包邮到家")])])}],o=(e("28a5"),e("a481"),e("e17f"),e("2241")),c=e("ade3"),r=(e("5f5f"),e("f253")),l=(e("3c32"),e("417e")),h=(e("db2c"),e("1125")),d=(e("8a58"),e("e41f")),u=(e("be7f"),e("565f")),f=(e("c194"),e("7744")),m=(e("0653"),e("34e9")),v=(e("4b0a"),e("2bb1")),p=(e("7844"),e("5596")),b=(e("7f7f"),e("c3a6"),e("ad06")),g=e("42df"),w=e("365c"),C={components:(a={},Object(c["a"])(a,b["a"].name,b["a"]),Object(c["a"])(a,p["a"].name,p["a"]),Object(c["a"])(a,v["a"].name,v["a"]),Object(c["a"])(a,m["a"].name,m["a"]),Object(c["a"])(a,f["a"].name,f["a"]),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,d["a"].name,d["a"]),Object(c["a"])(a,h["a"].name,h["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),a),data:function(){return{name:"",telno:"",idCardNo:"",areaName:"",areaCode:"",addr:"",areaList:g["a"],showAddress:!1,checked:!0,list:[],msg:"",pics:[],showSetMeal:!1,columns:[],setMealName:"",setMealId:"",agreementShow:!1,agreement:""}},methods:{blur:function(){document.body.scrollTop=0},toMid:function(){mid.scrollIntoView({block:"start",behavior:"smooth"})},setMealConfirm:function(t){this.showSetMeal=!1,this.setMealName=t.vname,this.setMealId=t.vcode},areaConfirm:function(t){this.showAddress=!1,this.areaName="".concat(t[0].name," ").concat(t[1].name," ").concat(t[2].name),this.areaCode=t[2].code},submit:function(){var t=this;if(this.setMealId)if(this.name)if(this.telno)if(this.$utils.isMobile(this.telno))if(this.areaCode)if(this.addr)if(this.checked){var i=this.$toast.loading({duration:0,forbidClick:!0});Object(w["m"])({gcode:this.$route.query.id,username:this.name,usertel:this.telno,userIDCard:this.idCardNo,addrCode:this.areaCode,addrAddr:this.addr,parentCode:this.$route.query.parentId||"",vcode:this.setMealId}).then((function(e){i.clear(),0==e.code?(o["a"].alert({title:"提示",message:"提交成功，联通客服人员随后会联系您核实资料，请保持手机畅通。"}).then((function(){})),t.loadData(),t.name="",t.telno="",t.idCardNo="",t.areaName="",t.areaCode="",t.addr="",t.setMealName="",t.setMealId=""):t.$toast(e.msg)}))}else this.$toast("请同意《用户身份授权协议》");else this.$toast("请输入详细收货地址");else this.$toast("请选择省市区");else this.$toast("请输入正确的手机号");else this.$toast("请输入手机号");else this.$toast("请输入姓名");else this.$toast("请选择套餐")},loadData:function(){var t=this,i=this.$toast.loading({duration:0,forbidClick:!0});Object(w["Fb"])().then((function(e){i.clear(),0==e.code?t.list=e.data:t.$toast(e.msg)})),Object(w["Nb"])({id:"1295522665976070144"}).then((function(e){i.clear(),0==e.code?t.agreement=e.data.scCmsText.tmsg.replace(/(<img[\s\S]+?)src=(['"])/g,'<img src="'+t.$config.http):t.$toast(e.msg)})),this.$route.query.id&&Object(w["vb"])({id:this.$route.query.id,shopUrl:""}).then((function(e){i.clear(),0==e.code?(t.pics=e.data.gimg.split(","),t.columns=e.data.scEcomGoodsValList,t.setMealName=e.data.scEcomGoodsValList[0].vname,t.setMealId=e.data.scEcomGoodsValList[0].vcode,t.msg=e.data.gmsg.replace(/(<img[\s\S]+?)src=(['"])/g,'<img src="'+t.$config.http)):t.$toast(e.msg)}))}},mounted:function(){document.title=this.$route.query.title,this.loadData()}},y=C,k=(e("ae85"),e("01d9"),e("2877")),S=Object(k["a"])(y,s,n,!1,null,"50d14af3",null);i["default"]=S.exports},ae85:function(t,i,e){"use strict";var a=e("55f0"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-603fd564.b843811b.js.map