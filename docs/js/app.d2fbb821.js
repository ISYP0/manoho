(function(t){function e(e){for(var s,n,c=e[0],r=e[1],o=e[2],p=0,v=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(v.length)v.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(s=!1)}s&&(l.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},l=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/manoho/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2395:function(t,e,a){},"42da":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:t.transitionName}},[a("keep-alive",[a("router-view")],1)],1)],1)},l=[],n={name:"App",data:function(){return{transitionName:"slide-right"}},watch:{$route:function(t){var e=t.path;this.transitionName="/suggest"===e?"slide-left":"slide-right"}}},c=n,r=(a("7c55"),a("2877")),o=Object(r["a"])(c,i,l,!1,null,null,null),u=o.exports,p=a("57c4"),v=a.n(p),_=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t._m(0),a("div",{staticClass:"page__bd page__bd_spacing"},[a("section",[a("router-link",{attrs:{tag:"a",to:"/suggest"}},[a("span",{staticClass:"icon ts"}),t._v(" 投诉 ")])],1),a("section",[a("router-link",{attrs:{tag:"a",to:"/suggest"}},[a("span",{staticClass:"icon jy"}),t._v(" 建议 ")])],1),a("section",[a("router-link",{attrs:{tag:"a",to:"/suggest"}},[a("span",{staticClass:"icon by"}),t._v(" 表扬 ")])],1)])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page__hd"},[s("img",{attrs:{alt:"Health 100",src:a("5c3f")}}),s("p",[t._v(" 我们重视您的每一次反馈，以助力我们提升服务品质。"),s("br"),t._v("感谢您的信任和支持! ")])])}],w={name:"MainPage",props:{msg:String}},b=w,C=(a("72a8"),Object(r["a"])(b,d,f,!1,null,"55fd7c08",null)),g=C.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{position:"absolute"}},[a("div",{staticClass:"page"},[a("div",{staticClass:"weui-form"},[a("div",{staticClass:"weui-form__text-area"},[a("div",{staticClass:"weui-cells__group weui-cells__group_form"},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("位置")])]),a("div",{staticClass:"weui-cell__bd"},[t._v(" 深圳市分公司 ")])])])]),a("div",{staticClass:"weui-form__control-area"},[a("div",{staticClass:"weui-cells__group weui-cells__group_form"},[a("div",{staticClass:"weui-cells__title"}),a("div",{staticClass:"weui-cells weui-cells_form"},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("姓名")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{id:"js_input",placeholder:"请输入您的姓名"}})])]),a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("联系方式")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{id:"js_input",placeholder:"请输入您的联系方式"}})])]),a("div",{staticClass:"weui-cell weui-cell_vcode"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("验证码")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{type:"text",pattern:"[0-9]*",placeholder:"输入验证码",maxlength:"6"}})]),a("div",{staticClass:"weui-cell__ft"},[a("button",{staticClass:"weui-btn weui-btn_default weui-vcode-btn"},[t._v("获取验证码")])])]),a("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("投诉主题")])]),a("select",{staticClass:"weui-select",attrs:{id:"case_title",reg:"[^ \\f\\n\\r\\t\\v]",tip:"投诉主题不为空","ok-tip":""}},[a("option",{attrs:{value:""}},[t._v("请选择投诉主题")]),a("option",{attrs:{value:"1"}},[t._v("关于排队/秩序问题投诉")]),a("option",{attrs:{value:"2"}},[t._v("关于科室医生服务的投诉")]),a("option",{attrs:{value:"3"}},[t._v("关于分院卫生/早餐/停车的投诉")]),a("option",{attrs:{value:"4"}},[t._v("关于前台服务投诉")]),a("option",{attrs:{value:"5"}},[t._v("关于预约的投诉")]),a("option",{attrs:{value:"6"}},[t._v("关于误诊、漏诊的投诉")]),a("option",{attrs:{value:"7"}},[t._v("关于电话不通的投诉")]),a("option",{attrs:{value:"8"}},[t._v("关于报告领取/未出的投诉")]),a("option",{attrs:{value:"9"}},[t._v("关于销售、售卡相关的投诉")]),a("option",{attrs:{value:"10"}},[t._v("关于分院护士/导诊服务投诉")]),a("option",{attrs:{value:"11"}},[t._v("关于报告内容相关投诉")])])]),a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("问题描述")])]),a("div",{staticClass:"weui-cell__bd"},[a("textarea",{staticClass:"weui-textarea",attrs:{placeholder:"请描述你所发生的问题",rows:"3"}}),a("div",{staticClass:"weui-textarea-counter"},[a("span",[t._v("0")]),t._v("/200")])])])])])]),a("div",{staticClass:"weui-form__opr-area"},[a("a",{staticClass:"weui-btn weui-btn_primary",attrs:{href:"javascript:",id:"showTooltips"}},[t._v("确定")])])]),a("div",{staticStyle:{display:"none"},attrs:{id:"js_toast"}},[a("div",{staticClass:"weui-mask_transparent"}),a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-icon-success-no-circle weui-icon_toast"}),a("p",{staticClass:"weui-toast__content"},[t._v("已完成")])])])])])}],y={name:"Suggest",methods:{handleClick:function(){this.$weui.picker([{label:"飞机票",value:0},{label:"火车票",value:1},{label:"的士票",value:2},{label:"公交票 (disabled)",disabled:!0,value:3},{label:"其他",value:4}],{onChange:function(t){console.log(t)},onConfirm:function(t){console.log(t)},title:"单列选择器"})}}},j=y,x=(a("8060"),Object(r["a"])(j,h,m,!1,null,"2aff3c12",null)),O=x.exports,k=new _["a"]({routes:[{path:"",component:g},{path:"/suggest",component:O}]});s["a"].use(_["a"]),s["a"].config.productionTip=!1,s["a"].prototype.$weui=v.a,new s["a"]({render:function(t){return t(u)},router:k}).$mount("#app")},"5c3f":function(t,e,a){t.exports=a.p+"img/fedbk-head-bg.17351b7c.png"},"72a8":function(t,e,a){"use strict";a("f1ac")},"7c55":function(t,e,a){"use strict";a("2395")},8060:function(t,e,a){"use strict";a("42da")},f1ac:function(t,e,a){}});
//# sourceMappingURL=app.d2fbb821.js.map