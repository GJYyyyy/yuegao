(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89de8f70"],{"02de":function(t,e,i){"use strict";function n(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}i.d(e,"a",(function(){return n}))},"09fe":function(t,e,i){},"2bb1":function(t,e,i){"use strict";var n=i("c31d"),a=i("d282"),s=i("9884"),o=Object(a["a"])("swipe-item"),r=o[0],c=o[1];e["a"]=r({mixins:[Object(s["a"])("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,i=e.size,n=e.vertical;return t[n?"height":"width"]=i+"px",this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.inited,i=this.parent,n=this.mounted;if(!i.lazyRender||e)return!0;if(!n)return!1;var a=i.activeIndicator,s=i.count-1,o=0===a&&i.loop?s:a-1,r=a===s&&i.loop?0:a+1,c=t===a||t===o||t===r;return c&&(this.inited=!0),c}},render:function(){var t=arguments[0];return t("div",{class:c(),style:this.style,on:Object(n["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}})},"2cbd":function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75"),i("e3b3"),i("8400")},"3ab1":function(t,e,i){"use strict";var n=i("91c4"),a=i.n(n);a.a},4598:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return u}));var n=i("a142"),a=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-a)),n=setTimeout(t,i);return a=e+i,n}var o=n["g"]?t:window,r=o.requestAnimationFrame||s,c=o.cancelAnimationFrame||o.clearTimeout;function l(t){return r.call(o,t)}function h(t){l((function(){l(t)}))}function u(t){c.call(o,t)}}).call(this,i("c8ba"))},"504b":function(t,e,i){},5596:function(t,e,i){"use strict";var n=i("d282"),a=i("02de"),s=i("1325"),o=i("4598"),r=i("482d"),c=i("3875"),l=i("9884"),h=i("5fbe"),u=Object(n["a"])("swipe"),d=u[0],f=u[1];e["a"]=d({mixins:[c["a"],Object(l["b"])("vanSwipe"),Object(h["a"])((function(t,e){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(a["a"])(this.$el)){clearTimeout(this.timer);var e=this.$el.getBoundingClientRect();this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=+this.width||e.width,this.computedHeight=+this.height||e.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(s["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,i=Date.now()-this.touchStartTime,n=e/i,a=Math.abs(n)>.25||Math.abs(e)>t/2;if(a&&this.isCorrectDirection){var s=this.vertical?this.offsetY:this.offsetX,o=0;o=this.loop?s>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:o,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count,n=this.maxCount;return t?this.loop?Object(r["b"])(e+t,-1,i):Object(r["b"])(e+t,0,n):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=e-i;return this.loop||(n=Object(r["b"])(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,a=void 0===n?0:n,s=t.emitChange,o=this.loop,r=this.count,c=this.active,l=this.children,h=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(i),f=this.getTargetOffset(d,a);if(o){if(l[0]&&f!==u){var m=f<u;l[0].offset=m?h:0}if(l[r-1]&&0!==f){var v=f>0;l[r-1].offset=v?-h:0}}this.active=d,this.offset=f,s&&d!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(o["b"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,e.immediate?Object(o["b"])((function(){i.swiping=!1})):i.swiping=!1,i.move({pace:n-i.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,a=this.slots("indicator");return a||(this.showIndicators&&i>1?e("div",{class:f("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,a){return e("i",{class:f("indicator",{active:a===n}),style:a===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:f()},[t("div",{ref:"track",style:this.trackStyle,class:f("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},"786d":function(t,e,i){},"78eb":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},8270:function(t,e,i){},8400:function(t,e,i){},"91c4":function(t,e,i){},a8f4:function(t,e,i){"use strict";var n=i("dfe1"),a=i.n(n);a.a},ab2c:function(t,e,i){"use strict";var n=i("c31d"),a=i("2638"),s=i.n(a),o=i("d282"),r=i("ba31"),c=i("6605"),l=i("ad06"),h=i("e41f"),u=i("543e"),d=Object(o["a"])("action-sheet"),f=d[0],m=d[1];function v(t,e,i,n){var a=e.title,o=e.cancelText,c=e.closeable;function d(){Object(r["a"])(n,"input",!1),Object(r["a"])(n,"cancel")}function f(){if(a)return t("div",{class:m("header")},[a,c&&t(l["a"],{attrs:{name:e.closeIcon},class:m("close"),on:{click:d}})])}function v(i,a){var s=i.disabled,o=i.loading,c=i.callback;function l(t){t.stopPropagation(),s||o||(c&&c(i),Object(r["a"])(n,"select",i,a),e.closeOnClickAction&&Object(r["a"])(n,"input",!1))}function h(){return o?t(u["a"],{class:m("loading-icon")}):[t("span",{class:m("name")},[i.name]),i.subname&&t("div",{class:m("subname")},[i.subname])]}return t("button",{attrs:{type:"button"},class:[m("item",{disabled:s,loading:o}),i.className],style:{color:i.color},on:{click:l}},[h()])}function p(){if(o)return[t("div",{class:m("gap")}),t("button",{attrs:{type:"button"},class:m("cancel"),on:{click:d}},[o])]}function g(){var n=(null==i.description?void 0:i.description())||e.description;if(n)return t("div",{class:m("description")},[n])}return t(h["a"],s()([{class:m(),attrs:{position:"bottom",round:e.round,value:e.value,overlay:e.overlay,duration:e.duration,lazyRender:e.lazyRender,lockScroll:e.lockScroll,getContainer:e.getContainer,closeOnPopstate:e.closeOnPopstate,closeOnClickOverlay:e.closeOnClickOverlay,safeAreaInsetBottom:e.safeAreaInsetBottom}},Object(r["b"])(n,!0)]),[f(),g(),t("div",{class:m("content")},[e.actions&&e.actions.map(v),null==i.default?void 0:i.default()]),p()])}v.props=Object(n["a"])({},c["b"],{title:String,actions:Array,duration:[Number,String],cancelText:String,description:String,getContainer:[String,Function],closeOnPopstate:Boolean,closeOnClickAction:Boolean,round:{type:Boolean,default:!0},closeable:{type:Boolean,default:!0},closeIcon:{type:String,default:"cross"},safeAreaInsetBottom:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}}),e["a"]=f(v)},b64f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user mescroll"},[n("van-cell-group",{staticStyle:{"padding-top":"10px"},attrs:{border:!1}},[n("van-cell",{staticClass:"upload",attrs:{border:!1}},[n("van-uploader",{attrs:{"after-read":t.onRead,accept:"image/*",disabled:""}},[n("div",{staticClass:"pic"},[n("img",{attrs:{src:t.$utils.dealImg(t.pic)||i("b789"),alt:""}})])])],1),n("van-field",{attrs:{border:!1,"input-align":"right",clearable:"",label:"昵称",placeholder:"请填写",disabled:""},on:{blur:function(e){return t.blur()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("van-field",{attrs:{border:!1,"input-align":"right",clearable:"",label:"联系方式",placeholder:"请填写",disabled:""},on:{blur:function(e){return t.blur()}},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),n("van-cell",{attrs:{border:!1,title:"性别",value:t.sex?"1"==t.sex?"男":"女":"请选择","is-link":""},on:{click:function(e){t.sexShow=!0}}}),t._e()],1),t._e(),n("van-action-sheet",{attrs:{actions:t.sexActions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.sexShow,callback:function(e){t.sexShow=e},expression:"sexShow"}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showAddress,callback:function(e){t.showAddress=e},expression:"showAddress"}},[n("van-area",{attrs:{"area-list":t.areaList,value:t.cityId,"columns-num":2},on:{confirm:t.areaConfirm,cancel:function(e){t.showAddress=!1}}})],1)],1)},a=[],s=i("ade3"),o=(i("db2c"),i("1125")),r=(i("8a58"),i("e41f")),c=(i("2cbd"),i("ab2c")),l=(i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b"),i("bcd3"),i("c31d")),h=i("d282"),u=i("ea8e"),d=i("a142");function f(t){return Array.isArray(t)?t:[t]}function m(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function v(t,e){return f(t).some((function(t){return t.size>e}))}var p=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function g(t){return p.test(t)}function b(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?g(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var w=i("78eb"),y=i("ad06"),S=i("2638"),x=i.n(S),O=Object(h["a"])("image"),$=O[0],C=O[1],z=$({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(d["c"])(this.width)&&(t.width=Object(u["a"])(this.width)),Object(d["c"])(this.height)&&(t.height=Object(u["a"])(this.height)),Object(d["c"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(u["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&d["b"]&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading&&d["b"]?t("div",{class:C("loading")},[this.slots("loading")||t(y["a"],{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:C("loading-icon")})]):this.error&&this.showError?t("div",{class:C("error")},[this.slots("error")||t(y["a"],{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:C("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:C("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",x()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",x()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:C({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}}),I=i("543e"),j=i("2b0e"),T=Object(h["a"])("image-preview"),k=T[0],P=T[1],A=i("6605"),L=i("3875"),B=i("5fbe"),M=i("5596"),D=i("482d"),R=i("1325"),X=i("2bb1");function E(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var N,Y={mixins:[L["a"]],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,e=this.rootHeight,i=e/t;return this.imageRatio>i},imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var i=this.moveX/t,n=this.moveY/t;e.transform="scale("+t+", "+t+") translate("+i+"px, "+n+"px)"}return e},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){this.scale=Object(D["b"])(t,+this.minZoom,+this.maxZoom),this.$emit("scale",{scale:this.scale,index:this.active})},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var e=t.touches,i=this.offsetX,n=void 0===i?0:i;this.touchStart(t),this.touchStartTime=new Date,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===e.length&&1!==this.scale,this.zooming=2===e.length&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=E(t.touches))},onTouchMove:function(t){var e=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&Object(R["c"])(t,!0),this.moving){var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(D["b"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(D["b"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var a=E(e),s=this.startScale*a/this.startDistance;this.setScale(s)}},onTouchEnd:function(t){var e=!1;(this.moving||this.zooming)&&(e=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.zooming&&(this.moveX=Object(D["b"])(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=Object(D["b"])(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),Object(R["c"])(t,e),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this,e=this.offsetX,i=void 0===e?0:e,n=this.offsetY,a=void 0===n?0:n,s=new Date-this.touchStartTime,o=250,r=10;i<r&&a<r&&s<o&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),o))},onLoad:function(t){var e=t.target,i=e.naturalWidth,n=e.naturalHeight;this.imageRatio=n/i}},render:function(){var t=arguments[0],e={loading:function(){return t(I["a"],{attrs:{type:"spinner"}})}};return t(X["a"],{class:P("swipe-item")},[t(z,{attrs:{src:this.src,fit:"contain"},class:P("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:e,on:{load:this.onLoad}})])}},F=k({mixins:[L["a"],Object(A["a"])({skipToggleEvent:!0}),Object(B["a"])((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:500},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:P("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.resize(),e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:P("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:P("cover")},[e])},genImages:function(){var t=this,e=this.$createElement;return e(M["a"],{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:P("swipe"),on:{change:this.setActive}},[this.images.map((function(i){return e(Y,{attrs:{src:i,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(y["a"],{attrs:{role:"button",name:this.closeIcon},class:P("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,e){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,e)}},render:function(){var t=arguments[0];if(this.shouldRender)return t("transition",{attrs:{name:"van-fade"},on:{afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],class:[P(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()])])}}),W={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,getContainer:"body",startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},H=function(){N=new(j["a"].extend(F))({el:document.createElement("div")}),document.body.appendChild(N.$el),N.$on("change",(function(t){N.onChange&&N.onChange(t)})),N.$on("scale",(function(t){N.onScale&&N.onScale(t)}))},U=function(t,e){if(void 0===e&&(e=0),!d["g"]){N||H();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(l["a"])(N,W,i),N.$once("input",(function(t){N.value=t})),N.$once("closed",(function(){N.images=[]})),i.onClose&&(N.$off("close"),N.$once("close",i.onClose)),N}};U.Component=F,U.install=function(){j["a"].use(F)};var Z,_=U,V=Object(h["a"])("uploader"),q=V[0],J=V[1],G=q({inheritAttrs:!1,mixins:[w["a"]],model:{prop:"fileList"},props:{disabled:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return Object(u["a"])(this.previewSize)},value:function(){return this.fileList}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(Object(d["f"])(n))return void n.then((function(t){t?e.readFile(t):e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=v(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return m(t,e.resultType)}))).then((function(n){var a=t.map((function(t,e){var i={file:t,status:"",message:""};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(a,i)}))}else m(t,this.resultType).then((function(n){var a={file:t,status:"",message:""};n&&(a.content=n),e.onAfterRead(a,i)}))},onAfterRead:function(t,e){var i=this;this.resetInput();var n=t;if(e){var a=t;Array.isArray(t)?(a=[],n=[],t.forEach((function(t){t.file&&(t.file.size>i.maxSize?a.push(t):n.push(t))}))):n=null,this.$emit("oversize",a,this.getDetail())}var s=Array.isArray(n)?Boolean(n.length):Boolean(n);s&&(this.$emit("input",[].concat(this.fileList,f(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(Object(d["f"])(n))return void n.then((function(){i.deleteFile(t,e)})).catch(d["h"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return b(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=_(Object(l["a"])({images:n,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var e=this.$createElement,i=t.status,n=t.message;if("uploading"===i||"failed"===i){var a="failed"===i?e(y["a"],{attrs:{name:"close"},class:J("mask-icon")}):e(I["a"],{class:J("loading")}),s=Object(d["c"])(n)&&""!==n;return e("div",{class:J("mask")},[a,s&&e("div",{class:J("mask-message")},[n])])}},genPreviewItem:function(t,e){var i=this,n=this.$createElement,a="uploading"!==t.status&&this.deletable,s=a&&n("div",{class:J("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}},[n(y["a"],{attrs:{name:"cross"},class:J("preview-delete-icon")})]),o=this.slots("preview-cover",Object(l["a"])({index:e},t)),r=o&&n("div",{class:J("preview-cover")},[o]),c=b(t)?n(z,{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,lazyLoad:this.lazyLoad},class:J("preview-image"),on:{click:function(){i.onPreviewImage(t)}}},[r]):n("div",{class:J("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(y["a"],{class:J("file-icon"),attrs:{name:"description"}}),n("div",{class:[J("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),r]);return n("div",{class:J("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[c,this.genPreviewMask(t),s])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var e,i=this.slots(),n=t("input",{attrs:Object(l["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:J("input"),on:{change:this.onChange}});if(i)return t("div",{class:J("input-wrapper")},[i,n]);if(this.previewSize){var a=this.previewSizeWithUnit;e={width:a,height:a}}return t("div",{class:J("upload"),style:e},[t(y["a"],{attrs:{name:this.uploadIcon},class:J("upload-icon")}),this.uploadText&&t("span",{class:J("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:J()},[t("div",{class:J("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}}),K=(i("0653"),i("34e9")),Q=(i("c194"),i("7744")),tt=(i("7f7f"),i("be7f"),i("565f")),et=i("42df"),it=i("365c"),nt={components:(Z={},Object(s["a"])(Z,tt["a"].name,tt["a"]),Object(s["a"])(Z,Q["a"].name,Q["a"]),Object(s["a"])(Z,K["a"].name,K["a"]),Object(s["a"])(Z,G.name,G),Object(s["a"])(Z,c["a"].name,c["a"]),Object(s["a"])(Z,r["a"].name,r["a"]),Object(s["a"])(Z,o["a"].name,o["a"]),Z),data:function(){return{pic:"",name:"",tel:"",sex:"1",sexShow:!1,sexActions:[{name:"男",value:"1"},{name:"女",value:"2"}],showAddress:!1,areaList:{},address:"江苏省 无锡市",provinceId:"",cityId:"320200",interest:"",signature:""}},methods:{blur:function(){document.body.scrollTop=0},onRead:function(t){var e=this;console.log(t);var i=new FormData;i.append("file",t.file),i.append("path",1);var n={headers:{"Content-Type":"multipart/form-data"}},a=this.$toast.loading({duration:0,forbidClick:!0,message:"上传中..."});console.log(i),this.$axios.post("http://wxoa.wxjggl.com/govOA/app/sys/user/updateFiles?userId="+sessionStorage.getItem("userId"),i,n).then((function(t){a.clear(),console.log(t),1==t.success?e.pic=e.$utils.dealImg(t.data.file):e.$toast.fail("图片上传失败！")})).catch((function(t){e.$toast.clear(),console.log(t),e.$toast.fail("网络错误")}))},onSelect:function(t){this.sex=t.value,this.sexShow=!1,this.submit()},onCancel:function(){this.sexShow=!1},areaConfirm:function(t){this.showAddress=!1,this.address="".concat(t[0].name," ").concat(t[1].name),this.provinceId=t[0].code,this.cityId=t[1].code},toInterest:function(){this.$router.push({name:"interest"})},loadData:function(){var t=this,e=this.$toast.loading({duration:0,forbidClick:!0});Object(it["Sb"])({token:sessionStorage.getItem("token")||"177128e71cd2d4bc4acdba48bcae04709"}).then((function(i){e.clear(),0==i.code&&(t.pic=i.data.head_portrait,t.name=i.data.user_name,t.tel=i.data.phone,t.sex=i.data.gender)}))},submit:function(){var t=this.$toast.loading({duration:0,forbidClick:!0}),e={token:sessionStorage.getItem("toekn")||"177128e71cd2d4bc4acdba48bcae04709",gender:this.sex};Object(it["D"])(e).then((function(e){t.clear()}))}},mounted:function(){document.title="个人资料",this.areaList=et["a"],this.loadData()}},at=nt,st=(i("a8f4"),i("3ab1"),i("2877")),ot=Object(st["a"])(at,n,a,!1,null,"1c211922",null);e["default"]=ot.exports},b789:function(t,e,i){t.exports=i.p+"static/img/userDefault.fa3b0710.png"},bcd3:function(t,e,i){},dfe1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-89de8f70.6b91d4d1.js.map