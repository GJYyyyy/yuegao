(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b55746b"],{"4ffd":function(t,e,i){t.exports=i.p+"img/logo.c6e22438.png"},"57da":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-container",{staticStyle:{height:"100vh"}},[l("el-header",{staticClass:"flex-stretch flex-between",staticStyle:{height:"50px",padding:"0 16px","background-color":"var(--bg-color)"}},[l("div",{staticClass:"flex-stretch"},[l("router-link",{staticClass:"flex-center",staticStyle:{width:"150px"},attrs:{to:"/"}},[l("img",{attrs:{src:i("4ffd")}})]),l("ul",{staticClass:"flex-stretch",staticStyle:{padding:"0 16px"}},t._l(t.menus,(function(e,i){return l("li",{key:i,staticClass:"flex-center menu-item",on:{click:function(e){return t._select_menu(e,i)}}},[t._v(t._s(e.title))])})),0)],1),l("el-dropdown",{staticClass:"flex-stretch",staticStyle:{width:"140px"},attrs:{trigger:"click"},on:{command:t._user_info_click}},[l("div",{staticClass:"flex-vertical",staticStyle:{width:"100%","flex-direction":"row-reverse",cursor:"pointer"}},[l("p",{staticClass:"ellipsis",staticStyle:{"max-width":"calc(100% - 48px)","padding-left":"8px",color:"var(--ft-color)"}},[t._v("用户名")]),l("el-avatar",{attrs:{icon:"el-icon-user-solid"}})],1),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("el-dropdown-item",[t._v("个人中心")]),l("el-dropdown-item",[t._v("修改密码")]),l("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1),l("el-container",{staticStyle:{height:"calc(100% - 50px)"}},[l("el-aside",{staticStyle:{"border-right":"1px solid var(--border-color)","background-color":"var(--bg-color3)"},attrs:{width:"200px"}},[l("div",{staticStyle:{height:"50%","overflow-y":"auto"}},[l("el-menu",{staticStyle:{border:"none",overflow:"hidden"},attrs:{"background-color":"var(--bg-color3)"}},t._l(t.currentMenu.submenus,(function(e,i){return l("el-submenu",{key:i,attrs:{index:""+i}},[l("template",{slot:"title"},[l("span",[t._v(t._s(e.title))])]),t._l(e.submenus,(function(e,s){return l("el-menu-item",{key:s,attrs:{index:i+"-"+s}},[l("router-link",{staticClass:"flex-stretch",staticStyle:{width:"100%",color:"var(--ft-color5)"},attrs:{to:e.path?"/home"+e.path:"/home"}},[t._v(t._s(e.title))])],1)}))],2)})),1)],1),l("div",{staticStyle:{height:"50%",padding:"16px","border-top":"1px solid var(--border-color)","overflow-y":"auto"}},[l("div",t._l(t.commonInfo.info1.list,(function(e,i){return l("div",{key:i,staticStyle:{"margin-bottom":"16px"}},[l("div",{staticClass:"flex-horizontal"},[l("div",{staticStyle:{display:"inline-block",color:"var(--ft-color)",padding:"4px 8px","border-radius":"4px","font-size":"18px"},style:{backgroundColor:e.bgColor}},[t._v(t._s(e.num))])]),l("p",{staticClass:"flex-horizontal",staticStyle:{"margin-top":"4px"}},[t._v(t._s(e.title))])])})),0),l("div",t._l(t.commonInfo.info2.list,(function(e,i){return l("div",{key:i,staticClass:"flex-center",staticStyle:{margin:"14px 0"}},[l("span",[t._v(t._s(e.title)+"：")]),l("span",{staticStyle:{"font-size":"18px"},style:{color:t.commonInfo.info2.fontColor}},[t._v(t._s(e.num))])])})),0)])]),l("el-main",[l("router-view")],1)],1)],1)],1)},s=[],o={data:function(){return{menus:[{title:"我的面板",submenus:[{title:"个人信息",submenus:[{title:"我的桌面",path:"/mydesktop"},{title:"个人信息",path:"/userinfo"},{title:"修改密码"}]},{title:"文件管理",submenus:[{title:"文件管理"}]}]},{title:"项目管理",submenus:[{title:"灯具管理",submenus:[{title:"灯具信息"},{title:"灯杆信息"},{title:"安装信息"},{title:"灯具分组"},{title:"基站管理"},{title:"摄像头管理"},{title:"灯具操作日志"}]},{title:"基本信息",submenus:[{title:"项目信息"},{title:"控制箱管理"},{title:"回路管理"},{title:"环境设备管理"}]},{title:"扩展信息",submenus:[{title:"属性信息"},{title:"属性值信息"},{title:"属性属性值绑定"},{title:"驱动信息"},{title:"包装信息"},{title:"型号信息"},{title:"品牌信息"}]}]},{title:"运维管理",submenus:[{title:"工单信息",submenus:[{title:"安装工单"}]},{title:"待办事项",submenus:[{title:"待办事项"}]},{title:"派单单据管理",submenus:[{title:"安装工单"},{title:"巡检工单"},{title:"维修工单"},{title:"单据操作记录"}]},{title:"报警信息",submenus:[{title:"报警基础模板"},{title:"报警应用模板"},{title:"报警应用"},{title:"报警事件（平台自检）"},{title:"报警信息（手动操作）"}]}]},{title:"仓库管理",submenus:[{title:"单据管理",submenus:[{title:"入库单据"},{title:"出库单据"},{title:"报损出库单"},{title:"退还入库单"},{title:"盘点"},{title:"单据审批"}]},{title:"仓库管理",submenus:[{title:"仓库信息"},{title:"出库入库"}]},{title:"物料管理",submenus:[{title:"物料信息"},{title:"物料库存"},{title:"物料分类"}]}]},{title:"报表",submenus:[{title:"统计",submenus:[{title:"控制箱与回路"},{title:"灯具与灯杆"},{title:"亮灯情况"},{title:"报警事件"},{title:"电流电压"},{title:"单灯能耗"},{title:"项目能耗"}]}]},{title:"基础配置",submenus:[{title:"基本信息",submenus:[{title:"网格管理"},{title:"道路管理"},{title:"管理手册"},{title:"提示语音管理"},{title:"单页信息"},{title:"新闻管理"}]}]},{title:"系统设置",submenus:[{title:"机构用户",submenus:[{title:"用户管理"},{title:"区域用户管理"},{title:"供应商管理"},{title:"业主单位管理"},{title:"区域管理"},{title:"用户封禁情况"}]},{title:"系统设置",submenus:[{title:"菜单管理"},{title:"角色管理"},{title:"字典管理"},{title:"日志管理"},{title:"审核管理"},{title:"开放接口密匙管理"}]}]}],currentMenuIndex:0,commonInfo:{info1:{list:[{title:"新故障",num:999,bgColor:"var(--danger-color)"},{title:"在线",num:999,bgColor:"var(--success-color)"},{title:"使用",num:999,bgColor:"var(--bg-color2)"},{title:"总数",num:999,bgColor:"var(--bg-color)"}]},info2:{fontColor:"var(--bg-color)",list:[{title:"温度",num:15.7},{title:"湿度",num:58.5},{title:"照度",num:286}]}}}},computed:{currentMenu:function(){return this.menus[this.currentMenuIndex]}},methods:{_select_menu:function(t,e){this.currentMenuIndex=e},_user_info_click:function(t){switch(t){case"logout":this.$router.push("login");break}}}},n=o,r=(i("8b71a"),i("2877")),u=Object(r["a"])(n,l,s,!1,null,null,null);e["default"]=u.exports},"88d7":function(t,e,i){},"8b71a":function(t,e,i){"use strict";i("88d7")}}]);
//# sourceMappingURL=chunk-2b55746b.21909881.js.map