(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-876424d2","chunk-07a04385","chunk-2d217734","chunk-2d0c1f78"],{"02f4":function(e,t,r){var l=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var i,n,o=String(a(t)),c=l(r),s=o.length;return c<0||c>=s?e?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===s||(n=o.charCodeAt(c+1))<56320||n>57343?e?o.charAt(c):i:e?o.slice(c,c+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var l=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?l(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var l=r("cb7c");e.exports=function(){var e=l(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var l=r("2aba"),a=r("32e9"),i=r("79e5"),n=r("be13"),o=r("2b4c"),c=r("520a"),s=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=o(e),p=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=p?!i((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[s]=function(){return r}),r[f](""),!t})):void 0;if(!p||!m||"replace"===e&&!u||"split"===e&&!d){var v=/./[f],g=r(n,f,""[e],(function(e,t,r,l,a){return t.exec===c?p&&!a?{done:!0,value:v.call(t,r,l)}:{done:!0,value:e.call(r,t,l)}:{done:!1}})),b=g[0],h=g[1];l(String.prototype,e,b),a(RegExp.prototype,f,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},"2a18":function(e,t,r){"use strict";r.r(t),r.d(t,"toUpperCase",(function(){return l})),r.d(t,"toSQLLine",(function(){return a}));r("a481");var l=function(e){return e[0]?e.replace(e[0],e[0].toUpperCase()):""},a=function(e){return"ID"==e?"ID":e.replace(/([A-Z])/g,"_$1").toLowerCase()}},4196:function(e,t,r){},"47fe":function(e,t,r){"use strict";r.r(t),r.d(t,"createTemp",(function(){return a}));var l=r("b775"),a=function(e){return Object(l["default"])({url:"/autoCode/createTemp",method:"post",data:e,responseType:"blob"})}},"520a":function(e,t,r){"use strict";var l=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,n=a,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[o]||0!==t[o]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(n=function(e){var t,r,n,u,d=this;return s&&(r=new RegExp("^"+d.source+"$(?!\\s)",l.call(d))),c&&(t=d[o]),n=a.call(d,e),c&&n&&(d[o]=d.global?n.index+n[0].length:t),s&&n&&n.length>1&&i.call(n[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)})),n}),e.exports=n},"5f1b":function(e,t,r){"use strict";var l=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==l(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},a481:function(e,t,r){"use strict";var l=r("cb7c"),a=r("4bf8"),i=r("9def"),n=r("4588"),o=r("0390"),c=r("5f1b"),s=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,v){return[function(l,a){var i=e(this),n=void 0==l?void 0:l[t];return void 0!==n?n.call(l,i,a):r.call(String(i),l,a)},function(e,t){var a=v(r,e,this,t);if(a.done)return a.value;var d=l(e),f=String(this),p="function"===typeof t;p||(t=String(t));var b=d.global;if(b){var h=d.unicode;d.lastIndex=0}var x=[];while(1){var y=c(d,f);if(null===y)break;if(x.push(y),!b)break;var k=String(y[0]);""===k&&(d.lastIndex=o(f,i(d.lastIndex),h))}for(var w="",_=0,N=0;N<x.length;N++){y=x[N];for(var F=String(y[0]),M=s(u(n(y.index),f.length),0),$=[],S=1;S<y.length;S++)$.push(m(y[S]));var C=y.groups;if(p){var D=[F].concat($,M,f);void 0!==C&&D.push(C);var O=String(t.apply(void 0,D))}else O=g(F,f,M,$,C,t);M>=_&&(w+=f.slice(_,M)+O,_=M+F.length)}return w+f.slice(_)}];function g(e,t,l,i,n,o){var c=l+e.length,s=i.length,u=p;return void 0!==n&&(n=a(n),u=f),r.call(o,u,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,l);case"'":return t.slice(c);case"<":o=n[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>s){var f=d(u/10);return 0===f?r:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):r}o=i[u-1]}return void 0===o?"":o}))}}))},b0c5:function(e,t,r){"use strict";var l=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:l!==/./.exec},{exec:l})},b81f:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"autoCodeForm",attrs:{rules:e.rules,model:e.form,"label-width":"120px",inline:!0}},[r("el-form-item",{attrs:{label:"Struct名称",prop:"structName"}},[r("el-input",{attrs:{placeholder:"首字母自动转换大写"},model:{value:e.form.structName,callback:function(t){e.$set(e.form,"structName",t)},expression:"form.structName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Struct简称",prop:"abbreviation"}},[r("el-input",{attrs:{placeholder:"简称会作为入参对象名和路由group"},model:{value:e.form.abbreviation,callback:function(t){e.$set(e.form,"abbreviation",t)},expression:"form.abbreviation"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"文件名称",prop:"packageName"}},[r("el-input",{model:{value:e.form.packageName,callback:function(t){e.$set(e.form,"packageName",t)},expression:"form.packageName"}})],1),e._v(" "),r("el-form-item",[r("el-checkbox",{model:{value:e.form.autoCreateApiToSql,callback:function(t){e.$set(e.form,"autoCreateApiToSql",t)},expression:"form.autoCreateApiToSql"}},[e._v("自动创建api")])],1)],1),e._v(" "),r("div",{staticClass:"button-box clearflex"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editAndAddField()}}},[e._v("新增Field")])],1),e._v(" "),r("el-table",{attrs:{data:e.form.fields,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序列",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{prop:"fieldName",label:"Field名",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{prop:"fieldDesc",label:"中文名",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{prop:"fieldJson",label:"FieldJson",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{prop:"fieldType",label:"Field数据类型",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.editAndAddField(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-popover",{attrs:{placement:"top",width:"280"},model:{value:t.row.visible,callback:function(r){e.$set(t.row,"visible",r)},expression:"scope.row.visible"}},[r("p",[e._v("这是一段内容这是一段内容确定删除吗？")]),e._v(" "),r("div",{staticStyle:{"text-align":"right",margin:"0"}},[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.deleteField(t.$index)}}},[e._v("确定")])],1),e._v(" "),r("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),r("div",{staticClass:"button-box clearflex"},[r("el-button",{attrs:{type:"primary"},on:{click:e.enterForm}},[e._v("生成代码包")])],1),e._v(" "),r("el-dialog",{attrs:{title:"组件内容",visible:e.dialogFlag},on:{"update:visible":function(t){e.dialogFlag=t}}},[r("FieldDialog",{ref:"fieldDialog",attrs:{dialogMiddle:e.dialogMiddle}}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),n=r("c77a"),o=r("2a18"),c=r("47fe"),s={fieldName:"",fieldDesc:"",fieldType:"",fieldJson:"",columnName:""},u={name:"autoCode",data:function(){return{addFlag:"",form:{structName:"",packageName:"",abbreviation:"",autoCreateApiToSql:!1,fields:[]},rules:{structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],packageName:[{required:!0,message:"请输入包名称",trigger:"blur"}]},dialogMiddle:{},bk:{},dialogFlag:!1}},components:{FieldDialog:n["default"]},methods:{editAndAddField:function(e){this.dialogFlag=!0,e?(this.addFlag="edit",this.bk=JSON.parse(JSON.stringify(e)),this.dialogMiddle=e):(this.addFlag="add",this.dialogMiddle=JSON.parse(JSON.stringify(s)))},enterDialog:function(){var e=this;this.$refs.fieldDialog.$refs.fieldDialogFrom.validate((function(t){if(!t)return!1;e.dialogMiddle.fieldName=Object(o["toUpperCase"])(e.dialogMiddle.fieldName),"add"==e.addFlag&&e.form.fields.push(e.dialogMiddle),e.dialogFlag=!1}))},closeDialog:function(){"edit"==this.addFlag&&(this.dialogMiddle=this.bk),this.dialogFlag=!1},deleteField:function(e){this.form.fields.splice(e,1)},enterForm:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.form.fields.length<=0)){e.next=3;break}return this.$message({type:"error",message:"请填写至少一个field"}),e.abrupt("return",!1);case 3:this.$refs.autoCodeForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var l,a,i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}if(t.form.structName=Object(o["toUpperCase"])(t.form.structName),t.form.structName!=t.form.abbreviation){e.next=5;break}return t.$message({type:"error",message:"structName和struct简称不能相同"}),e.abrupt("return",!1);case 5:return e.next=7,Object(c["createTemp"])(t.form);case 7:l=e.sent,a=new Blob([l]),i="ginvueadmin.zip","download"in document.createElement("a")?(n=window.URL.createObjectURL(a),s=document.createElement("a"),s.style.display="none",s.href=n,s.setAttribute("download",i),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(n)):window.navigator.msSaveBlob(a,i),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},d=u,f=(r("ec78"),r("2877")),p=Object(f["a"])(d,l,a,!1,null,null,null);t["default"]=p.exports},c77a:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"fieldDialogFrom",attrs:{model:e.dialogMiddle,"label-width":"120px","label-position":"left",rules:e.rules}},[r("el-form-item",{attrs:{label:"Field名称",prop:"fieldName"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldName,callback:function(t){e.$set(e.dialogMiddle,"fieldName",t)},expression:"dialogMiddle.fieldName"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Field中文名",prop:"fieldDesc"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldDesc,callback:function(t){e.$set(e.dialogMiddle,"fieldDesc",t)},expression:"dialogMiddle.fieldDesc"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"FieldJSON",prop:"fieldJson"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldJson,callback:function(t){e.$set(e.dialogMiddle,"fieldJson",t)},expression:"dialogMiddle.fieldJson"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"数据库字段名",prop:"columnName"}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.columnName,callback:function(t){e.$set(e.dialogMiddle,"columnName",t)},expression:"dialogMiddle.columnName"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Field数据类型",prop:"fieldType"}},[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{placeholder:"请选择field数据类型"},model:{value:e.dialogMiddle.fieldType,callback:function(t){e.$set(e.dialogMiddle,"fieldType",t)},expression:"dialogMiddle.fieldType"}},e._l(e.typeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},a=[],i={name:"FieldDialog",props:{dialogMiddle:{type:Object,default:function(){return{}}}},data:function(){return{visible:!1,typeOptions:[{label:"字符串",value:"string"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"}],rules:{fieldName:[{required:!0,message:"请输入field英文名",trigger:"blur"}],fieldDesc:[{required:!0,message:"请输入field中文名",trigger:"blur"}],fieldJson:[{required:!0,message:"请输入field格式化json",trigger:"blur"}],fieldType:[{required:!0,message:"请选择field数据类型",trigger:"blur"}]}}}},n=i,o=r("2877"),c=Object(o["a"])(n,l,a,!1,null,null,null);t["default"]=c.exports},ec78:function(e,t,r){"use strict";var l=r("4196"),a=r.n(l);a.a}}]);