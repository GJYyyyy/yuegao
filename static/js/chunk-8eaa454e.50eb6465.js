(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8eaa454e"],{"101c":function(e,t,a){"use strict";a.r(t);var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"visitorsApply"},[a("van-nav-bar",{attrs:{title:e.navTitle,"left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.back()}}}),a("div",{staticClass:"mescroll"},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"mid"},[a("van-cell-group",{attrs:{border:!1}},[a("van-field",{attrs:{clearable:"",placeholder:"请填写您的姓名",border:!1,required:"true"},on:{blur:function(t){return e.blur()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("van-field",{attrs:{clearable:"",placeholder:"请填写您的手机号",border:!1,required:"true"},on:{blur:function(t){return e.blur()}},model:{value:e.telno,callback:function(t){e.telno=t},expression:"telno"}}),a("van-field",{attrs:{clearable:"",placeholder:"请填写您的单位",border:!1},on:{blur:function(t){return e.blur()}},model:{value:e.department1,callback:function(t){e.department1=t},expression:"department1"}}),a("van-field",{attrs:{clearable:"",placeholder:"请填写您搭档的姓名",border:!1},on:{blur:function(t){return e.blur()}},model:{value:e.name2,callback:function(t){e.name2=t},expression:"name2"}}),a("van-field",{attrs:{clearable:"",placeholder:"请填写您搭档的手机号",border:!1},on:{blur:function(t){return e.blur()}},model:{value:e.telno2,callback:function(t){e.telno2=t},expression:"telno2"}})],1),a("p",{staticClass:"text"},[e._v("* 单位可填可不填；妇联女子体育文化节参赛选手应填写单位。")]),a("p",{staticClass:"text"},[e._v("* 个人报名至少填写前2项即可，组合报名至少填写两个人的姓名和联系电话。")])],1),a("div",{staticClass:"agreement",on:{click:e.open}},[a("van-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._m(1)],1),a("div",{staticClass:"agreement",on:{click:e.open2}},[e._m(2)]),a("div",{staticClass:"submit",on:{click:function(t){return e.apply()}}},[e._v("立即报名")]),a("p",{staticClass:"prompt"},[e._v("温馨提示")]),a("p",{staticClass:"text"},[e._v("1) 经本人确认报名后，不得更换他人参赛。")]),a("p",{staticClass:"text"},[e._v("2) 因疫情防控需要，所有选手必须签订健康承诺书，赛前14天内前往中高风险地区的取消比赛资格。参赛时主动出示“苏康码”，经工作人员查验和测量体温正常方可进入比赛场地。")]),a("p",{staticClass:"text"},[e._v("3）本次大赛设立组委会和仲裁委员会，未尽事宜由组委会负责解释。")]),a("p",{staticClass:"text"},[e._v("4）咨询电话：13605261169")])])]),a("van-popup",{model:{value:e.agreementShow,callback:function(t){e.agreementShow=t},expression:"agreementShow"}},[a("div",{staticClass:"agreementMid"},[a("div",{staticClass:"close",on:{click:function(t){e.agreementShow=!1}}},[e._v("×")]),a("div",{domProps:{innerHTML:e._s(e.agreement)}},[e._v(e._s(e.agreement))])])]),a("van-popup",{model:{value:e.agreementShow2,callback:function(t){e.agreementShow2=t},expression:"agreementShow2"}},[a("div",{staticClass:"agreementMid"},[a("div",{staticClass:"close",on:{click:function(t){e.agreementShow2=!1}}},[e._v("×")]),a("div",{domProps:{innerHTML:e._s(e.agreement2)}},[e._v(e._s(e.agreement2))])])])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("img",{attrs:{src:a("857b"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n            阅读并同意\n            "),a("span",[e._v("《健康承诺书》")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("        大赛"),a("span",[e._v("《奖项设置》")])])}],o=a("ade3"),r=(a("e17f"),a("2241")),l=(a("3c32"),a("417e")),c=(a("5852"),a("d961")),h=(a("8a58"),a("e41f")),u=(a("0653"),a("34e9")),f=(a("c194"),a("7744")),d=(a("be7f"),a("565f")),m=(a("7f7f"),a("5246"),a("6b41")),p=a("365c"),v={components:(n={},Object(o["a"])(n,m["a"].name,m["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,c["a"].name,c["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,r["a"].name,r["a"]),n),data:function(){return{navTitle:"",name:"",telno:"",IdNumber:"",department1:"",name2:"",telno2:"",checked:!1,popupShow:!1,agreementShow:!1,agreement:"",agreementShow2:!1,agreement2:"",min:0,Interval:null}},methods:{open:function(){this.checked?this.agreementShow=!0:this.$toast("请选同意健康承诺书")},onClose:function(){this.agreementShow=!1,this.agreementShow2=fasle},open2:function(){this.agreementShow2=!0},blur:function(){document.body.scrollTop=0},apply:function(){var e=this;if(this.name)if(this.telno)if(this.$utils.isMobile(this.telno))if(this.checked){this.$toast.allowMultiple();var t=this.$toast.loading({duration:0,forbidClick:!0}),a={playUserId:sessionStorage.getItem("userId"),playName:this.name,playMobile:this.telno,playIdNumber:"",playDept:this.department1,playSex:"",playName2:this.name2,playMobile2:this.telno2,playSex2:""};Object(p["pc"])(a).then((function(a){t.clear(),"0"==a.code?setTimeout((function(){e.$router.push({name:"guandanRegisterSuccess",query:{surveyeName:sessionStorage.getItem("name")}})})):e.$toast.fail(a.msg)}))}else this.$toast("请先同意《健康承诺书》");else this.$toast("手机号码格式不正确");else this.$toast("请填写您的手机号");else this.$toast("请填写您的姓名")},loadData:function(){var e=this;this.$toast.loading({duration:0,forbidClick:!0});Object(p["Nb"])({id:"F35A0E71D4504F15B7470C7B1B1D0BB9"}).then((function(t){"0"==t.code?(e.agreement=t.data.tMsg,e.$toast("欢迎报名掼蛋大赛，请认真阅读健康承诺书。")):e.$toast(t.msg)})),Object(p["Nb"])({id:"C3F32800E1D54EB3848B06C028F09ED4"}).then((function(t){"0"==t.code?(e.agreement2=t.data.tMsg,e.$toast("欢迎报名掼蛋大赛，查看丰盛的大赛奖项设置。")):e.$toast(t.msg)}))}},mounted:function(){this.navTitle="掼蛋报名",this.loadData()}},g=v,b=(a("f9fb"),a("161b"),a("2877")),x=Object(b["a"])(g,i,s,!1,null,"0f300e84",null);t["default"]=x.exports},"161b":function(e,t,a){"use strict";var n=a("a46a"),i=a.n(n);i.a},2381:function(e,t,a){},"3c32":function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("2381")},"417e":function(e,t,a){"use strict";var n=a("d282"),i=a("0a26"),s=Object(n["a"])("checkbox"),o=s[0],r=s[1];t["a"]=o({mixins:[Object(i["a"])({bem:r,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,a=t.value.slice();if(e){if(t.max&&a.length>=t.max)return;-1===a.indexOf(this.name)&&(a.push(this.name),t.$emit("input",a))}else{var n=a.indexOf(this.name);-1!==n&&(a.splice(n,1),t.$emit("input",a))}}}})},5246:function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("8a0b")},"6b41":function(e,t,a){"use strict";var n=a("d282"),i=a("b1d2"),s=a("ad06"),o=Object(n["a"])("nav-bar"),r=o[0],l=o[1];t["a"]=r({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var e=this.$createElement,t=this.slots("left");return t||[this.leftArrow&&e(s["a"],{class:l("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&e("span",{class:l("text")},[this.leftText])]},genRight:function(){var e=this.$createElement,t=this.slots("right");return t||(this.rightText?e("span",{class:l("text")},[this.rightText]):void 0)},genNavBar:function(){var e,t=this.$createElement;return t("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[l({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(e={},e[i["a"]]=this.border,e)]},[t("div",{class:l("content")},[this.hasLeft()&&t("div",{class:l("left"),on:{click:this.onClickLeft}},[this.genLeft()]),t("div",{class:[l("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&t("div",{class:l("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(e){this.$emit("click-left",e)},onClickRight:function(e){this.$emit("click-right",e)}},render:function(){var e=arguments[0];return this.placeholder&&this.fixed?e("div",{class:l("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"857b":function(e,t,a){e.exports=a.p+"static/img/bg2.dc240c92.jpg"},"8a0b":function(e,t,a){},a46a:function(e,t,a){},efa7:function(e,t,a){},f9fb:function(e,t,a){"use strict";var n=a("efa7"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-8eaa454e.50eb6465.js.map