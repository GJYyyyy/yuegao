(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-282a7499"],{"88ea":function(t,s,e){},dbe1:function(t,s,e){"use strict";var a=e("88ea"),i=e.n(a);i.a},f85e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{height:"100%"}},[e("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":""},on:{search:t._get_goods_list},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:t._get_goods_list}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keyWord,callback:function(s){t.keyWord=s},expression:"keyWord"}}),e("div",{staticClass:"flex-between",staticStyle:{height:"calc(100% - 54px)"}},[e("div",{staticStyle:{"overflow-y":"auto","background-color":"#f7f8fa"}},[e("van-sidebar",{on:{change:t._get_goods_list},model:{value:t.activeClassifyIndex,callback:function(s){t.activeClassifyIndex=s},expression:"activeClassifyIndex"}},t._l(t.goodsClassifyList,(function(t,s){return e("van-sidebar-item",{key:s,attrs:{title:t.cateName}})})),1)],1),e("div",{staticStyle:{width:"calc(100% - 80px)","background-color":"#f9f9f9","overflow-y":"auto"}},[e("div",{staticClass:"list"},t._l(t.goodsList,(function(s,a){return e("div",{key:a,staticClass:"item",on:{click:function(e){return t.goDetail(s)}}},[e("div",{staticClass:"topImage"},[e("img",{attrs:{src:t.$utils.dealImg(s.gimg),alt:""}})]),e("div",{staticClass:"bottomText"},[e("p",{staticClass:"title"},[t._v(t._s(s.gname))]),e("div",{staticClass:"labels"},[s.gfanj?e("div",{staticClass:"label"},[t._v("送"+t._s(s.gfanj)+"积分")]):t._e()]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"left"},[e("div",{staticClass:"price1"},[e("span",{staticClass:"label"},[t._v("优惠价")]),e("span",{staticClass:"font"},[t._v("¥")]),e("span",{staticClass:"num"},[t._v(t._s(s.goutPrice?s.goutPrice.toFixed(2):"0.00"))])]),e("div",{staticClass:"price"},[e("span",{staticClass:"label"},[t._v("市场价")]),e("span",{staticClass:"font"},[t._v("¥")]),e("span",{staticClass:"num"},[e("del",[t._v(t._s(s.gmarketPrice?s.gmarketPrice.toFixed(2):"0.00"))])])])])])])])})),0)])])],1)},i=[],o=(e("96cf"),e("1da1")),n=e("365c"),c={data:function(){return{activeClassifyIndex:0,goodsClassifyList:[],goodsList:[],keyWord:""}},computed:{currCateCode:function(){return this.goodsClassifyList[this.activeClassifyIndex].cateCode}},mounted:function(){document.title="商品分类",this.loadData()},methods:{loadData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["xb"])();case 2:s=t.sent,0===s.code?(console.log(s),s.data&&(this.goodsClassifyList=s.data,this._get_goods_list())):this.$toast.fail(s.msg);case 4:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}(),goDetail:function(t){this.$router.push({name:"goodsDetail",query:{id:t.gcode,title:t.gname}})},_get_goods_list:function(){var t=this,s={cateCode:this.currCateCode,viewName:this.keyWord,pageNum:1,pageSize:1e3};Object(n["wb"])(s).then((function(s){0===s.code?(console.log(s),s.data&&(t.goodsList=s.data.list)):t.$toast.fail(s.msg)}))}}},l=c,r=(e("dbe1"),e("2877")),d=Object(r["a"])(l,a,i,!1,null,"2986b5d0",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-282a7499.c5ed451a.js.map