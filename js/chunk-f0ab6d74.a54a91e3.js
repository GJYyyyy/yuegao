(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0ab6d74"],{"35af":function(t,e,c){"use strict";c("a5f7")},"498c":function(t,e,c){"use strict";c("4c17")},"4c17":function(t,e,c){},a5f7:function(t,e,c){},b26a:function(t,e,c){"use strict";var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticStyle:{width:"100%",height:"100%","background-color":"#fff",color:"#333"}},[t.cols.length&&t.data.length?c("div",{staticClass:"flex-between",staticStyle:{height:"100%","overflow-y":"auto"}},t._l(t.cols,(function(e,a){return c("div",{key:a,staticStyle:{"flex-grow":"1"}},[c("div",{staticClass:"item flex-center",style:t.thStyle},[t._v(t._s(e.title))]),t._l(t.data,(function(a,n){return c("div",{key:n,staticClass:"item flex-center",style:t.tdStyle,on:{click:function(c){return t.$emit("tdclick",a[e.name],e)}}},[t._v(t._s(a[e.name]))])}))],2)})),0):c("div",{staticStyle:{"text-align":"center",color:"#999"}},[t._v("没有数据")])])},n=[],l={props:{cols:{type:Array,default:new Array},data:{type:Array,default:new Array},thStyle:{type:Object,defautl:new Object},tdStyle:{type:Object,defautl:new Object}}},i=l,r=(c("35af"),c("2877")),o=Object(r["a"])(i,a,n,!1,null,"7fb9252a",null);e["a"]=o.exports},fa04:function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("transition",{attrs:{css:!1,appear:""},on:{"before-enter":t._before_enter,enter:t._enter,leave:t._leave}},[c("div",{staticClass:"flex-center background"},[c("div",{staticStyle:{width:"144vh",height:"74%","margin-bottom":"3.4%","background-color":"#fff"}},[c("div",{staticClass:"flex-between"},t._l(t.tabs,(function(e,a){return c("button",{key:a,staticStyle:{"flex-grow":"1",height:"36px"}},[t._v(t._s(e))])})),0),c("div",[c("my-table",{attrs:{cols:t.cols,data:t.data,tdStyle:t.tdStyle,thStyle:t.tdStyle},on:{tdclick:function(e){t.chartVisible=!t.chartVisible}}})],1)])])])},n=[],l=c("b26a"),i=c("589d"),r=c.n(i),o={data:function(){return{tabs:["直流电阻","回路电阻","交流耐压","回路电阻","工频放压","动作电压","分合时间","直流耐压分合时间"],tdStyle:{height:"100px"},cols:[{name:"c1",title:"试验项目"},{name:"c2",title:"A(B)"},{name:"c3",title:"B(C)"},{name:"c4",title:"C(A)"},{name:"c5",title:"差值(%)"},{name:"c6",title:"温度"},{name:"c7",title:"备注"}],data:[{c1:"1号主变绕组高压侧",c2:"1306",c3:"1306",c4:"1307",c5:"0.07",c6:"30",c7:""},{c1:"1号主变绕组低压侧",c2:"1.414",c3:"1.414",c4:"1.418",c5:"0.28",c6:"30",c7:""},{c1:"1号主变低压侧PT(一次绕组KΩ)",c2:"2.476",c3:"2.386",c4:"2.507",c5:"",c6:"21.4",c7:""},{c1:"1号主变低压侧PT(二次绕组mΩ)an",c2:"168.4",c3:"173.3",c4:"167.9",c5:"",c6:"21.4",c7:""},{c1:"1号主变低压侧PT(二次绕组mΩ)dadn",c2:"130.5",c3:"130.5",c4:"115.8",c5:"",c6:"21.4",c7:""}],chartVisible:!1}},components:{myTable:l["a"]},methods:{_before_enter:function(t){t.style.opacity=0},_enter:function(t,e){r()(t,{opacity:1},{duration:1200,complete:e})},_leave:function(t,e){r()(t,{opacity:0},{duration:600,complete:e})}}},s=o,f=(c("498c"),c("2877")),u=Object(f["a"])(s,a,n,!1,null,"232aab1e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-f0ab6d74.a54a91e3.js.map