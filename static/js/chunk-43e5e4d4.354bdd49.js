(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43e5e4d4"],{"02de":function(t,e,o){"use strict";function i(t){var e=window.getComputedStyle(t),o="none"===e.display,i=null===t.offsetParent&&"fixed"!==e.position;return o||i}o.d(e,"a",(function(){return i}))},"0b33":function(t,e,o){"use strict";var i=o("c31d"),n=o("d282"),s=o("9884"),r=o("48f4"),l=Object(n["a"])("tab"),a=l[0],c=l[1];e["a"]=a({mixins:[Object(s["a"])("vanTabs")],props:Object(i["a"])({},r["c"],{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){var t;return null!=(t=this.name)?t:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick((function(){e.parent.$emit("rendered",e.computedName,e.title)}))}},render:function(t){var e=this.slots,o=this.parent,i=this.isActive,n=e();if(n||o.animated){var s=o.scrollspy||i,r=this.inited||o.scrollspy||!o.lazyRender,l=r?n:t();return o.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!i},class:c("pane-wrapper",{inactive:!i})},[t("div",{class:c("pane")},[l])]):t("div",{directives:[{name:"show",value:s}],attrs:{role:"tabpanel"},class:c("pane")},[l])}}})},"164d":function(t,e,o){t.exports=o.p+"static/img/defaultH.327f7b99.png"},"1f8c":function(t,e,o){"use strict";var i=o("d181"),n=o.n(i);n.a},4598:function(t,e,o){"use strict";(function(t){o.d(e,"c",(function(){return c})),o.d(e,"b",(function(){return p})),o.d(e,"a",(function(){return u}));var i=o("a142"),n=Date.now();function s(t){var e=Date.now(),o=Math.max(0,16-(e-n)),i=setTimeout(t,o);return n=e+o,i}var r=i["g"]?t:window,l=r.requestAnimationFrame||s,a=r.cancelAnimationFrame||r.clearTimeout;function c(t){return l.call(r,t)}function p(t){c((function(){c(t)}))}function u(t){a.call(r,t)}}).call(this,o("c8ba"))},"5e46":function(t,e,o){"use strict";var i,n=o("d282"),s=o("ea8e"),r=o("a142"),l=o("4598"),a=o("a8c1");function c(t,e,o){Object(l["a"])(i);var n=0,s=t.scrollLeft,r=0===o?1:Math.round(1e3*o/16);function a(){t.scrollLeft+=(e-s)/r,++n<r&&(i=Object(l["c"])(a))}a()}function p(t,e,o,i){var n=Object(a["c"])(t),s=n<e,r=0===o?1:Math.round(1e3*o/16),c=(e-n)/r;function p(){n+=c,(s&&n>e||!s&&n<e)&&(n=e),Object(a["h"])(t,n),s&&n<e||!s&&n>e?Object(l["c"])(p):i&&Object(l["c"])(i)}p()}var u=o("48f4"),h=o("02de"),d=o("1325"),f=o("b1d2"),m=o("7e3e"),v=o("9884"),w=o("5fbe"),g=o("6f2f"),y=Object(n["a"])("tab"),b=y[0],S=y[1],D=b({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String},computed:{style:function(){var t={},e=this.color,o=this.isActive,i="card"===this.type;e&&i&&(t.borderColor=e,this.disabled||(o?t.backgroundColor=e:t.color=e));var n=o?this.activeColor:this.inactiveColor;return n&&(t.color=n),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,e=t("span",{class:S("text",{ellipsis:!this.scrollable})},[this.slots()||this.title]);return this.dot||Object(r["c"])(this.info)&&""!==this.info?t("span",{class:S("text-wrapper")},[e,t(g["a"],{attrs:{dot:this.dot,info:this.info}})]):e}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[S({active:this.isActive,disabled:this.disabled})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),T=Object(n["a"])("sticky"),C=T[0],x=T[1],U=C({mixins:[Object(w["a"])((function(t,e){if(this.scroller||(this.scroller=Object(a["d"])(this.$el)),this.observer){var o=e?"observe":"unobserve";this.observer[o](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return Object(s["b"])(this.offsetTop)},style:function(){if(this.fixed){var t={};return Object(r["c"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!r["g"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!Object(h["a"])(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,o=this.offsetTopPx,i=Object(a["c"])(window),n=Object(a["a"])(this.$el),s=function(){t.$emit("scroll",{scrollTop:i,isFixed:t.fixed})};if(e){var r=n+e.offsetHeight;if(i+o+this.height>r){var l=this.height+i-r;return l<this.height?(this.fixed=!0,this.transform=-(l+o)):this.fixed=!1,void s()}}i+o>n?(this.fixed=!0,this.transform=0):this.fixed=!1,s()}}},render:function(){var t=arguments[0],e=this.fixed,o={height:e?this.height+"px":null};return t("div",{style:o},[t("div",{class:x({fixed:e}),style:this.style},[this.slots()])])}}),L=o("c31d"),k=o("3875"),B=Object(n["a"])("tabs"),E=B[0],I=B[1],O=50,N=E({mixins:[k["a"]],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,o=this.currentIndex;"horizontal"===t&&this.offsetX>=O&&(e>0&&0!==o?this.$emit("change",o-1):e<0&&o!==this.count-1&&this.$emit("change",o+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:I("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:I("content",{animated:this.animated}),on:Object(L["a"])({},this.listeners)},[this.genChildren()])}}),z=Object(n["a"])("tabs"),H=z[0],P=z[1];e["a"]=H({mixins:[Object(v["b"])("vanTabs"),Object(w["a"])((function(t){this.scroller||(this.scroller=Object(a["d"])(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],model:{prop:"active"},props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},offsetTopPx:function(){return Object(s["b"])(this.offsetTop)},scrollOffset:function(){return this.sticky?this.offsetTopPx+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.active||this.currentName),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(a["g"])(Math.ceil(Object(a["a"])(this.$el)-this.offsetTopPx))},scrollspy:function(t){t?Object(d["b"])(this.scroller,"scroll",this.onScroll,!0):Object(d["a"])(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.init()},activated:function(){this.init(),this.setLine()},methods:{resize:function(){this.setLine()},init:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=Object(a["e"])(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var o=t.$refs.titles;if(o&&o[t.currentIndex]&&"line"===t.type&&!Object(h["a"])(t.$el)){var i=o[t.currentIndex].$el,n=t.lineWidth,l=t.lineHeight,a=i.offsetLeft+i.offsetWidth/2,c={width:Object(s["a"])(n),backgroundColor:t.color,transform:"translateX("+a+"px) translateX(-50%)"};if(e&&(c.transitionDuration=t.duration+"s"),Object(r["c"])(l)){var p=Object(s["a"])(l);c.height=p,c.borderRadius=p}t.lineStyle=c}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),o=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:o)},setCurrentIndex:function(t){var e=this.findAvailableTab(t);if(Object(r["c"])(e)){var o=this.children[e],i=o.computedName,n=null!==this.currentIndex;this.currentIndex=e,i!==this.active&&(this.$emit("input",i),n&&this.$emit("change",i,o.title))}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t,e){var o=this,i=this.children[e],n=i.title,s=i.disabled,r=i.computedName;s?this.$emit("disabled",r,n):(Object(m["a"])({interceptor:this.beforeChange,args:[r],done:function(){o.setCurrentIndex(e),o.scrollToCurrentContent()}}),this.$emit("click",r,n),Object(u["b"])(t.$router,t))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var o=this.$refs.nav,i=e[this.currentIndex].$el,n=i.offsetLeft-(o.offsetWidth-i.offsetWidth)/2;c(o,n,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollTo:function(t){var e=this;this.$nextTick((function(){e.setCurrentIndexByName(t),e.scrollToCurrentContent(!0)}))},scrollToCurrentContent:function(t){var e=this;if(void 0===t&&(t=!1),this.scrollspy){var o=this.children[this.currentIndex],i=null==o?void 0:o.$el;if(i){var n=Object(a["a"])(i,this.scroller)-this.scrollOffset;this.lockScroll=!0,p(this.scroller,n,t?0:+this.duration,(function(){e.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){var o=Object(a["f"])(t[e].$el);if(o>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,o=arguments[0],i=this.type,n=this.animated,s=this.scrollable,r=this.children.map((function(t,n){var r;return o(D,{ref:"titles",refInFor:!0,attrs:{type:i,dot:t.dot,info:null!=(r=t.badge)?r:t.info,title:t.title,color:e.color,isActive:n===e.currentIndex,disabled:t.disabled,scrollable:s,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(t,n)}}})})),l=o("div",{ref:"wrap",class:[P("wrap",{scrollable:s}),(t={},t[f["e"]]="line"===i&&this.border,t)]},[o("div",{ref:"nav",attrs:{role:"tablist"},class:P("nav",[i,{complete:this.scrollable}]),style:this.navStyle},[this.slots("nav-left"),r,"line"===i&&o("div",{class:P("line"),style:this.lineStyle}),this.slots("nav-right")])]);return o("div",{class:P([i])},[this.sticky?o(U,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[l]):l,o(N,{attrs:{count:this.children.length,animated:n,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"7e3e":function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var i=o("a142");function n(t){var e=t.interceptor,o=t.args,n=t.done;if(e){var s=e.apply(void 0,o);Object(i["f"])(s)?s.then((function(t){t&&n()})).catch(i["h"]):s&&n()}else n()}},ae9e:function(t,e,o){},b807:function(t,e,o){},bda7:function(t,e,o){"use strict";o("68ef"),o("9d70"),o("ae9e"),o("b807")},d181:function(t,e,o){},d32c:function(t,e,o){"use strict";var i=o("ef02"),n=o.n(i);n.a},d3e2:function(t,e,o){t.exports=o.p+"static/img/nodata.1b3d4bb9.png"},da3c:function(t,e,o){"use strict";o("68ef"),o("f319")},dff6:function(t,e,o){"use strict";o.r(e);var i,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"live"},[i("div",{staticClass:"search"},[i("form",{attrs:{action:"/"}},[i("van-search",{attrs:{"show-action":"","action-text":"搜索",placeholder:"搜索直播名称",background:"#fff"},on:{cancel:t.onSearch,search:t.onSearch,blur:t.blur},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t.cateList.length?i("van-tabs",{attrs:{"line-width":20,"line-height":3,"swipe-threshold":6,"title-active-color":"#000",border:!1},on:{click:t.onClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.cateList,(function(t,e){return i("van-tab",{key:e,attrs:{title:t.cateName}})})),1):t._e(),i("div",{staticClass:"mid mescroll"},[i("div",{staticClass:"list",attrs:{id:"list"}},[i("div",{attrs:{id:"listData"}},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item",on:{click:function(o){return t.goDetail(e.acode)}}},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.aimg?t.$utils.dealImg(e.aimg):o("164d"),alt:""}})]),i("div",{staticClass:"right"},[i("p",{staticClass:"title"},[t._v(t._s(e.aname))]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"text1"},[t._v(t._s(e.aoutPrice?e.asalenum+"人开通":e.avisitnum+"人浏览"))]),i("div",{staticClass:"text2"},[t._v(t._s(e.aoutPrice?"￥"+e.aoutPrice.toFixed(2):"免费"))])])])])})),0)])])],1)},s=[],r=o("ade3"),l=(o("5852"),o("d961")),a=(o("bda7"),o("5e46")),c=(o("7f7f"),o("da3c"),o("0b33")),p=o("365c"),u=o("f868"),h=o.n(u),d={components:(i={},Object(r["a"])(i,c["a"].name,c["a"]),Object(r["a"])(i,a["a"].name,a["a"]),Object(r["a"])(i,l["a"].name,l["a"]),i),data:function(){return{active:0,value:"",cateList:[],list:[]}},methods:{blur:function(){document.body.scrollTop=0},onSearch:function(){this.mescroll.scrollTo(0,0),this.mescroll.resetUpScroll()},onClick:function(){this.mescroll.scrollTo(0,0),this.mescroll.resetUpScroll()},goDetail:function(t){this.$router.push({name:"liveDetail",query:{acode:t}})},loadCate:function(){var t=this,e=this.$toast.loading({duration:0,forbidClick:!0});Object(p["gb"])({parentId:this.$route.query.cateCode||"0"}).then((function(o){e.clear(),0==o.code?(t.cateList=o.data,t.startMescroll()):$this.$toast.fail(o.errorMsg)}))},loadData:function(t,e,o,i){var n=this,s={pageNum:t,pageSize:e,cateCode:this.cateList.length?this.cateList[this.active].cateCode:"",viewName:this.value};Object(p["Ab"])(s).then((function(t){0==t.code?o&&o(t.data):n.$toast.fail(t.errorMsg)})).catch((function(t){i&&i(),console.log(t)}))},startMescroll:function(){this.mescroll=new h.a("list",{up:{callback:this.upCallback,isBounce:!1,page:{size:10},empty:{warpId:"listData",icon:o("d3e2"),tip:"暂无数据"},noMoreSize:10,scrollbar:{use:!1},htmlNodata:'<p class="upwarp-nodata">-- 无更多数据 --</p>',lazyLoad:{use:!0}}})},upCallback:function(t){var e=this;e.loadData(t.num,t.size,(function(o){1==t.num&&(e.list=[]),o.list&&o.list.map((function(t){e.list.push(t)})),console.log(t),e.mescroll.endBySize(o.list?o.list.length:0,o.count)}),(function(){e.mescroll.endErr()}))}},mounted:function(){document.title="直播列表",this.loadCate()}},f=d,m=(o("1f8c"),o("d32c"),o("2877")),v=Object(m["a"])(f,n,s,!1,null,"aa1b18d8",null);e["default"]=v.exports},ef02:function(t,e,o){},f319:function(t,e,o){},f868:function(t,e,o){var i,n;(function(s,r){i=r,n="function"===typeof i?i.call(e,o,e,t):i,void 0===n||(t.exports=n)})(0,(function(){var t=function(t,e){var o=this;if(o.version="1.4.0",o.isScrollBody=!t||"body"===t,o.scrollDom=o.isScrollBody?document.body:o.getDomById(t),o.scrollDom){o.options=e||{};var i=navigator.userAgent,n=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),s="undefined"===typeof window.orientation,r=i.indexOf("Android")>-1||i.indexOf("Adr")>-1;o.os={ios:n,pc:s,android:r},o.isDownScrolling=!1,o.isUpScrolling=!1;var l=o.options.down&&o.options.down.callback;o.initDownScroll(),o.initUpScroll(),setTimeout((function(){o.optDown.use&&o.optDown.auto&&l&&(o.optDown.autoShowLoading?o.triggerDownScroll():o.optDown.callback&&o.optDown.callback(o)),o.optUp.use&&o.optUp.auto&&!o.isUpAutoLoad&&o.triggerUpScroll()}),30)}};return t.prototype.extendDownScroll=function(e){t.extend(e,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,e){t.downTipDom=e.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=e.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,e,o){if(t.downProgressDom){var i=360*e;t.downProgressDom.style.webkitTransform="rotate("+i+"deg)",t.downProgressDom.style.transform="rotate("+i+"deg)"}},beforeLoading:function(t,e){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(e){var o=this.os.pc;t.extend(e,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,e){},showLoading:function(t,e){e.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,e){e.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:o,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(e,o){if(!e)return o;for(var i in o)null==e[i]?e[i]=o[i]:"object"===typeof e[i]&&t.extend(e[i],o[i]);return e},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(e){t.isScrollTo&&t.preventDefault(e),t.startPoint=t.getPoint(e),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var o=t.getScrollTop();t.isKeepTop=0===o,t.os.pc&&o<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(e){if(t.startPoint){var o=t.getScrollTop();o>0&&(t.isKeepTop=!1);var i=t.getPoint(e),n=i.y-t.startPoint.y;if(n>0){if(o<=0&&(t.preventDefault(e),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var s=Math.abs(t.lastPoint.x-i.x),r=Math.abs(t.lastPoint.y-i.y),l=Math.sqrt(s*s+r*r);if(0!==l){var a=Math.asin(r/l)/Math.PI*180;if(a<t.optDown.minAngle)return}if(t.maxTouchmoveY>0&&i.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var c=i.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=c*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=c>0?c*t.optDown.outOffsetRate:c),t.downwarp.style.height=t.downHight+"px";var p=t.downHight/t.optDown.offset;t.optDown.onMoving(t,p,t.downHight)}}else if(n<0){var u=t.getScrollHeight(),h=t.getClientHeight(),d=u-h-o;!t.optUp.isBounce&&d<=0&&t.preventDefault(e),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(h+t.optUp.offset>=u||d<=0)&&t.triggerUpScroll()}t.lastPoint=i}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var e=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&e?e.appendChild(t.downwarp):(e||(e=t.scrollDom),e.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout((function(){t.optDown.inited(t,t.downwarp)}),0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,e=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},o=t.optDown.afterLoading(t);"number"===typeof o&&o>0?setTimeout(e,o):e()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,e=this;(e.optUp=e.options.up||{use:!1},e.extendUpScroll(e.optUp),e.optUp.scrollbar.use&&e.scrollDom.classList.add(e.optUp.scrollbar.barClass),e.optUp.isBounce||e.setBounce(!1),!1!==e.optUp.use)&&(e.optUp.hasNext=!0,e.upwarp=document.createElement("div"),e.upwarp.className=e.optUp.warpClass,e.optUp.warpId&&(t=e.getDomById(e.optUp.warpId)),t||(t=e.scrollDom),t.appendChild(e.upwarp),e.preScrollY=0,e.lazyStartTime=(new Date).getTime(),e.lazyTag="mescroll-lazying",e.scrollEvent=function(){var t=e.getScrollTop(),o=t-e.preScrollY>0;if(e.preScrollY=t,!e.isUpScrolling&&(!e.isDownScrolling||e.isDownScrolling&&e.optDown.isBoth)&&!e.optUp.isLock&&e.optUp.hasNext){var i=e.getScrollHeight()-e.getClientHeight()-t;i<=e.optUp.offset&&o&&e.triggerUpScroll()}var n=e.optUp.toTop;if((n.src||n.html)&&(t>=n.offset?e.showTopBtn():e.hideTopBtn()),e.optUp.lazyLoad.use){var s=(new Date).getTime();e.lazyTimer&&clearTimeout(e.lazyTimer),s-e.lazyStartTime>=e.optUp.lazyLoad.delay?(e.lazyStartTime=s,e.lazyLoad(0)):e.lazyTimer=e.lazyLoad()}e.optUp.onScroll&&e.optUp.onScroll(e,t,o)},e.isScrollBody?window.addEventListener("scroll",e.scrollEvent):e.scrollDom.addEventListener("scroll",e.scrollEvent),setTimeout((function(){e.optUp.inited(e,e.upwarp)}),0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){var e=this,o=t.target,i=!0;while(o!==document.body&&o!==document){var n=o.classList;if(n){if(n.contains("mescroll")||n.contains("mescroll-touch")){i=!1;break}if(n.contains("mescroll-touch-x")||n.contains("mescroll-touch-y")){var s=t.touches?t.touches[0].pageX:t.clientX,r=t.touches?t.touches[0].pageY:t.clientY;e.preWinX||(e.preWinX=s),e.preWinY||(e.preWinY=r);var l=Math.abs(e.preWinX-s),a=Math.abs(e.preWinY-r),c=Math.sqrt(l*l+a*a);if(e.preWinX=s,e.preWinY=r,0!==c){var p=Math.asin(a/c)/Math.PI*180;if(p<=45&&n.contains("mescroll-touch-x")||p>45&&n.contains("mescroll-touch-y")){i=!1;break}}}}o=o.parentNode}i&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var e=this.upwarp.getElementsByClassName("upwarp-progress")[0];e&&e.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,e){null!=t&&(t?this.showNoMore():this.hideUpScroll(e)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var e=this.optUp.page;this.prePageNum=e.num,this.prePageTime=e.time,e.num=1,e.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(e,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var e=this.getDomById(t);e&&(e.innerHTML="")}},t.prototype.endByPage=function(t,e,o){var i;this.optUp.use&&null!=e&&(i=this.optUp.page.num<e),this.endSuccess(t,i,o)},t.prototype.endBySize=function(t,e,o){var i;if(this.optUp.use&&null!=e){var n=(this.optUp.page.num-1)*this.optUp.page.size+t;i=n<e}this.endSuccess(t,i,o)},t.prototype.endSuccess=function(t,e,o){var i=this;if(i.isDownScrolling&&i.endDownScroll(),i.optUp.use){var n;if(null!=t){var s=i.optUp.page.num,r=i.optUp.page.size;if(1===s&&(i.clearDataList(),o&&(i.optUp.page.time=o)),t<r||!1===e)if(i.optUp.hasNext=!1,0===t&&1===s)n=!1,i.showEmpty();else{var l=(s-1)*r+t;n=!(l<i.optUp.noMoreSize),i.removeEmpty()}else n=!1,i.optUp.hasNext=!0,i.removeEmpty()}var a=!i.optUp.hasNext;i.endUpScroll(n,a),i.loadFull(),i.optUp.lazyLoad.use&&i.lazyLoad(16)}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout((function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()}),t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,e=t.optUp.empty,o=e.warpId||t.optUp.clearEmptyId;if(null!=o){var i=t.getDomById(o);if(i){t.removeEmpty();var n="";if(e.icon&&(n+='<img class="empty-icon" src="'+e.icon+'"/>'),e.tip&&(n+='<p class="empty-tip">'+e.tip+"</p>"),e.btntext&&(n+='<p class="empty-btn">'+e.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=n,i.appendChild(t.emptyDom),e.btnClick){var s=t.emptyDom.getElementsByClassName("empty-btn")[0];e.supportTap?s.addEventListener("tap",(function(o){o.stopPropagation(),t.preventDefault(o),e.btnClick()})):s.onclick=function(){e.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var e,o=this,i=o.optUp.toTop;if(null==o.toTopBtn)i.html?(o.toTopBtn=document.createElement("div"),o.toTopBtn.innerHTML=i.html):(o.toTopBtn=document.createElement("img"),o.toTopBtn.src=i.src),o.toTopBtn.className=i.warpClass,i.supportTap?o.toTopBtn.addEventListener("tap",(function(t){t.stopPropagation(),o.preventDefault(t);var e=i.btnClick&&i.btnClick();!0!==e&&o.scrollTo(0,o.optUp.toTop.duration)})):o.toTopBtn.onclick=function(){var t=i.btnClick&&i.btnClick();!0!==t&&o.scrollTo(0,o.optUp.toTop.duration)},i.warpId&&(e=o.getDomById(i.warpId)),e||(e=document.body),e.appendChild(o.toTopBtn);o.toTopBtn.classList.remove(i.hideClass),o.toTopBtn.classList.add(i.showClass),o.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var e=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=e,this.toTopBtn.style.webkitAnimationDuration=e}},t.prototype.scrollTo=function(t,e){var o=this,i=o.getScrollTop(),n=t;if(n>0){var s=o.getScrollHeight()-o.getClientHeight();n>s&&(n=s)}else n=0;o.isScrollTo=!0,o.scrollDom.style.webkitOverflowScrolling="auto",o.getStep(i,n,(function(t){o.setScrollTop(t),t===n&&(o.scrollDom.style.webkitOverflowScrolling="touch",o.isScrollTo=!1)}),e)},t.prototype.getStep=function(t,e,o,i,n){var s=e-t;if(0!==i&&0!==s){i=i||300,n=n||30;var r=i/n,l=s/r,a=0,c=window.setInterval((function(){a<r-1?(t+=l,o&&o(t,c),a++):(o&&o(e,c),window.clearInterval(c))}),n)}else o&&o(e)},t.prototype.lazyLoad=function(t){var e=this,o=null!=t?t:e.optUp.lazyLoad.delay,i=setTimeout((function(){for(var t=e.scrollDom.querySelectorAll("["+e.optUp.lazyLoad.attr+"]"),o=t.length,i=0;i<o;i++){var n=t[i];if("true"!==n.getAttribute(e.lazyTag)&&e.isInSee(n,e.optUp.lazyLoad.offset)){var s=n.getAttribute(e.optUp.lazyLoad.attr),r=new Image;r.onload=function(){var t=this.src,o=this.dom,i=e.optUp.lazyLoad.showClass;i&&o.classList.add(i),"IMG"===o.tagName?o.src=t:o.style.backgroundImage="url("+t+")",o.removeAttribute(e.optUp.lazyLoad.attr),o.removeAttribute(e.lazyTag)},r.onerror=function(){this.dom.removeAttribute(e.lazyTag)},r.onabort=function(){this.dom.removeAttribute(e.lazyTag)},r.src=s,n.setAttribute(e.lazyTag,"true"),r.dom=n}}}),o);return i},t.prototype.isInSee=function(t,e){e=e||0;var o=this.getOffsetTop(t),i=this.getScrollTop()-e,n=o+t.offsetHeight,s=i+e+this.getClientHeight()+e;return o<s&&o>=i||n<=s&&n>i},t.prototype.getOffsetTop=function(t){var e=t.offsetTop,o=t.offsetParent;while(null!=o&&o!==this.scrollDom)e+=o.offsetTop+o.clientTop,o=o.offsetParent;return e},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"===typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var e;return t&&("string"===typeof t?e=document.getElementById(t):t.nodeType&&(e=t)),e||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),e},t.prototype.removeChild=function(t){if(t){var e=t.parentNode;e&&e.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t}))}}]);
//# sourceMappingURL=chunk-43e5e4d4.354bdd49.js.map