(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9f95"],{"34db":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticStyle:{"background-color":"#fff"}},[t("p",{staticClass:"flex-vertical",staticStyle:{height:"60px",padding:"0 16px","margin-bottom":"16px","font-size":"18px"}},[e._v("修改个人信息")]),t("van-form",{on:{submit:e._submit_edit}},[t("van-field",{attrs:{label:"姓名",disabled:""},model:{value:e.userInfoForm.userName,callback:function(s){e.$set(e.userInfoForm,"userName",s)},expression:"userInfoForm.userName"}}),t("van-field",{attrs:{label:"账号",disabled:""},model:{value:e.userInfoForm.viewCode,callback:function(s){e.$set(e.userInfoForm,"viewCode",s)},expression:"userInfoForm.viewCode"}}),t("van-field",{attrs:{label:"头像上传"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-uploader",{attrs:{"max-count":"1","after-read":e._read_file_finised},model:{value:e.headerFileList,callback:function(s){e.headerFileList=s},expression:"headerFileList"}})]},proxy:!0}])}),t("van-field",{attrs:{label:"新手机号",placeholder:"新手机号",rules:[{required:!0,pattern:e.phoneNumberPattern,message:"手机号格式不正确"}]},model:{value:e.userInfoForm.userMobile,callback:function(s){e.$set(e.userInfoForm,"userMobile",s)},expression:"userInfoForm.userMobile"}}),t("van-field",{attrs:{type:"viewPsw",label:"新密码",placeholder:"新密码",rules:[{required:!0,message:"请填写新密码"}]},model:{value:e.userInfoForm.viewPsw,callback:function(s){e.$set(e.userInfoForm,"viewPsw",s)},expression:"userInfoForm.viewPsw"}}),t("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"短信验证码",rules:[{required:!0,message:"请填写短信验证码"}]},scopedSlots:e._u([{key:"button",fn:function(){return[t("van-button",{attrs:{size:"small",disabled:!e.canSendSms,"native-type":"button"},on:{click:e._send_sms}},[e._v(e._s(e.sendSmsBtnText))])]},proxy:!0}]),model:{value:e.userInfoForm.userIdcard,callback:function(s){e.$set(e.userInfoForm,"userIdcard",s)},expression:"userInfoForm.userIdcard"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)},n=[],o=t("01ea"),a=t("365c"),i={data:function(){return{headerFileList:[{url:""}],sendingSms:!1,waitSmsTime:60,countTimer:null,phoneNumberPattern:/^1[3456789]\d{9}$/,sendSmsBtnText:"发送验证码",userInfoForm:{userHeader:"",userMobile:"",viewPsw:"",userName:"",userIdcard:"",viewCode:""}}},computed:{canSendSms:function(){return!(this.sendingSms||!this.phoneNumberPattern.test(this.userInfoForm.userMobile))}},mounted:function(){this.getPersonalInfo()},destroyed:function(){clearInterval(this.countTimer)},methods:{getPersonalInfo:function(){var e=this;Object(a["Xb"])().then((function(s){0===s.code?(e.headerFileList=[{url:o["a"].host+s.data.userHeader}],e.userInfoForm.userMobile=s.data.userMobile,e.userInfoForm.viewPsw=s.data.viewPsw,e.userInfoForm.userName=s.data.userName,e.userInfoForm.viewCode=s.data.viewCode):e.$toast.fail(s.msg)}))},_read_file_finised:function(e){var s=this,t=new FormData,r={headers:{"Content-Type":"multipart/form-data"}};t.append("file",e.file),t.append("path",1),Object(a["Wc"])(t,r).then((function(e){0==e.code?s.userInfoForm.userHeader=e.data.filename:s.$toast.fail("图片上传失败！")}))},_send_sms:function(){var e=this,s=this.userInfoForm,t=s.userMobile,r=s.userName;Object(a["Mc"])({phoneNumber:t,username:r}).then((function(s){0===s.code?(e.$toast.success("发送验证码成功！"),e.countTimer=setInterval((function(){0===e.waitSmsTime?(clearInterval(e.countTimer),e.sendingSms=!1,e.sendSmsBtnText="发送验证码",e.countTimer=60):(e.sendingSms=!0,e.sendSmsBtnText=--e.waitSmsTime+"秒后可再发送")}),1e3)):e.$toast.fail(s.msg)}))},_submit_edit:function(){var e=this,s=this.userInfoForm,t=s.userHeader,r=s.userMobile,n=s.viewPsw,o=s.userName,i=s.userIdcard;Object(a["E"])({userHeader:t,userMobile:r,viewPsw:n,userName:o,userIdcard:i}).then((function(s){0===s.code?(e.$toast.success("修改信息成功！"),e.getPersonalInfo()):e.$toast.fail(s.msg)}))}}},u=i,l=t("2877"),d=Object(l["a"])(u,r,n,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b9f95.78c5c1b3.js.map