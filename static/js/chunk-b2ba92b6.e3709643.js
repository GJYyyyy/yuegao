(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2ba92b6"],{"654a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"orderDetail mescroll"},[i("div",{staticClass:"address flex"},[i("img",{staticClass:"icon",attrs:{src:a("e1d4")}}),i("div",{staticClass:"flex-2"},[i("div",{staticClass:"personalInfo"},[i("span",{staticClass:"name"},[t._v("收货人："+t._s(t.detail.userName2))]),i("span",{staticClass:"tenlo"},[t._v(t._s(t.detail.userMobile))])]),i("div",{staticClass:"addressInfo"},[t._v(t._s(t.detail.addrAddr))])])]),i("div",{staticClass:"line"}),i("div",{staticClass:"goodsInfo"},[i("div",{staticClass:"goodsInfo-top flex"},[i("div",{staticClass:"flex-2 title"},[t._v("商品信息")]),i("div",{staticClass:"status",style:1==t.detail.orderStatus||3==t.detail.orderStatus?"color:#eb5252":4==t.detail.orderStatus?"color:#333":"color:#999"},[t._v(t._s(t.$utils.getText(t.detail.orderStatus)))])]),i("div",{staticClass:"list"},[i("div",{staticClass:"item flex"},[i("div",{staticClass:"item-pic flex-1"},[i("img",{attrs:{src:t.detail.aimg?t.$utils.dealImg(t.detail.aimg):""}})]),i("div",{staticClass:"flex-2"},[i("div",{staticClass:"title"},[t._v(t._s(t.detail.activityName?t.detail.activityName:""))]),i("div",{staticClass:"price"},[t._v("\n            ¥\n            "),i("span",{staticClass:"money"},[t._v(t._s(t.detail.aoutPrice?t.detail.aoutPrice.toFixed(2):""))])])])])]),i("div",{staticClass:"goodsInfo-bottom"},[t._e(),t.detail.remarks?i("div",{staticClass:"flex1"},[i("div",{staticClass:"flex-1"},[t._v("备注")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.remarks))])]):t._e(),i("div",{staticClass:"line1"}),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("商品数量")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.shopCount||"1"))])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("商品合计")]),i("div",{staticClass:"flex-2"},[t._v("￥"+t._s(t.detail.oorderMoney?t.detail.oorderMoney.toFixed(2):"0.00"))])]),t.detail.oorderYunFei?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("运费合计")]),i("div",{staticClass:"flex-2"},[t._v("￥"+t._s(t.detail.oorderYunFei.toFixed(2)))])]):t._e(),t.detail.oorderYouhui?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("优惠合计")]),i("div",{staticClass:"flex-2"},[t._v("￥"+t._s(t.detail.oorderYouhui.toFixed(2)))])]):t._e(),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("实付款")]),i("div",{staticClass:"flex-2 allPrice"},[t._v("\n          ￥\n          "),i("span",[t._v(t._s(t.detail.oorderMoneyShifu?t.detail.oorderMoneyShifu.toFixed(2):"0.00"))])])])])]),i("div",{staticClass:"line"}),i("div",{staticClass:"orderInfo",style:0==t.flag?"padding-bottom:70px":""},[i("div",{staticClass:"title"},[t._v("订单信息")]),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("订单编号")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.orderno))])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("下单时间")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.oorderWdate))])]),1!=t.detail.orderStatus&&9!=t.detail.orderStatus?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("支付方式")]),i("div",{staticClass:"flex-2"},[t._v(t._s(1==t.detail.pay_type?"余额":"微信"))])]):t._e(),1!=t.detail.orderStatus&&9!=t.detail.orderStatus?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("支付时间")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.opayWdate))])]):t._e(),"1"!=t.type&&t.detail.shopName?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("核销商户")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.shopName))])]):t._e(),"1"!=t.type&&t.detail.checkuserName?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("核销人")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.checkuserName))])]):t._e(),"1"!=t.type&&t.detail.orderCheckDate?i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1"},[t._v("核销时间")]),i("div",{staticClass:"flex-2"},[t._v(t._s(t.detail.orderCheckDate))])]):t._e()]),0==t.flag?i("div",{staticClass:"bottom"},[i("div",{staticClass:"btns flex"},[0==t.flag?i("div",{staticClass:"btn btnPay",on:{click:function(s){return t.handle(1)}}},[t._v("核销订单")]):t._e()])]):t._e()])},e=[],l=(a("a481"),a("e17f"),a("2241")),d=a("365c"),c={data:function(){return{hour:2,min:1,detail:{},closeDetail:{},type:"",flag:null}},methods:{handle:function(t){var s=this;switch(t){case 1:l["a"].confirm({title:"提示",message:"是否确定核销此订单？"}).then((function(){s.submit()})).catch((function(){}));break;default:console.log(111);break}},submit:function(){var t=this,s=this.$toast.loading({duration:0,forbidClick:!0});Object(d["n"])({orderCode:this.detail.id}).then((function(a){s.clear(),0==a.code?(t.$toast("核销成功"),t.type="2",t.loadData()):t.$toast(a.msg)}))},loadData:function(){var t=this,s=this.$toast.loading({duration:0,forbidClick:!0});"1"==this.type?Object(d["i"])({orderCode:this.$route.query.id}).then((function(a){s.clear(),0==a.code?(0!=a.data.flag&&t.$toast(a.data.message),t.flag=a.data.flag,t.detail=a.data.scMarketActivityOrders,t.detail.addrText=t.detail.addr.area.treeNames.replace(/\//g,"")+t.detail.addr.addrAddr):t.$toast(a.msg)})):Object(d["g"])({orderCode:this.$route.query.orderCode}).then((function(a){s.clear(),0==a.code?(t.flag=1,t.detail=a.data):t.$toast(a.msg)}))}},mounted:function(){document.title="核销订单详情",this.type=this.$route.query.type||"2",this.loadData()}},o=c,r=(a("b27a"),a("2877")),n=Object(r["a"])(o,i,e,!1,null,"a95ea66a",null);s["default"]=n.exports},7336:function(t,s,a){},b27a:function(t,s,a){"use strict";var i=a("7336"),e=a.n(i);e.a},e1d4:function(t,s){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-b2ba92b6.e3709643.js.map