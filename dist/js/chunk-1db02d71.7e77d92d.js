(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db02d71"],{"175d":function(t,e,a){"use strict";var i=a("8b99"),o=a.n(i);o.a},"19b4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fancy_textarea"},[a("div",{staticClass:"fancy_textarea__container",staticStyle:{position:"relative",display:"inline-block"},style:{width:t.width||"20rem"}},[a("div",{staticClass:"fancy_textarea__placeholder",class:{"fancy_textarea__placeholder--active":t.active||t.value.length}},[t._v(" "+t._s(t.placeholder)+" ")]),a("textarea",{staticClass:"input fancy_textarea__textarea",domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)},focus:t.addActive,blur:t.removeActive}})]),a("error-tooltip",{attrs:{error:t.error}})],1)},o=[],r=a("e145"),n={name:"FancyTextarea",props:["value","placeholder","width","error"],components:{ErrorTooltip:r["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},c=n,s=(a("175d"),a("2877")),l=Object(s["a"])(c,i,o,!1,null,"133c8d9c",null);e["a"]=l.exports},"225f":function(t,e,a){"use strict";var i=a("63a4"),o=a.n(i);o.a},"466d":function(t,e,a){"use strict";var i=a("d784"),o=a("825a"),r=a("50c4"),n=a("1d80"),c=a("8aa5"),s=a("14c3");i("match",1,(function(t,e,a){return[function(e){var a=n(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var n=o(t),l=String(this);if(!n.global)return s(n,l);var u=n.unicode;n.lastIndex=0;var d,p=[],f=0;while(null!==(d=s(n,l))){var v=String(d[0]);p[f]=v,""===v&&(n.lastIndex=c(l,r(n.lastIndex),u)),f++}return 0===f?null:p}]}))},4795:function(t,e,a){var i=a("23e7"),o=a("da84"),r=a("342f"),n=[].slice,c=/MSIE .\./.test(r),s=function(t){return function(e,a){var i=arguments.length>2,o=i?n.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,a)}};i({global:!0,bind:!0,forced:c},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})},"4e07":function(t,e,a){},"63a4":function(t,e,a){},"7da2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"route_container"},[a("confirm-modal",{attrs:{color:"red",text:"Yes, remove it"},on:{confirm:t.removeProfilePicture},model:{value:t.picture.showRemoveProfilePictureModal,callback:function(e){t.$set(t.picture,"showRemoveProfilePictureModal",e)},expression:"picture.showRemoveProfilePictureModal"}},[t._v(" Вы действительно хотите удалить фото профиля ")]),a("modal-window",{attrs:{loading:t.picture.loading,width:"25rem"},on:{input:t.hideProflePictureModal},model:{value:t.picture.showProfilePictureModal,callback:function(e){t.$set(t.picture,"showProfilePictureModal",e)},expression:"picture.showProfilePictureModal"}},[a("div",{staticClass:"profile_picture_modal",class:{"profile_picture_modal--picture.dragging":t.picture.dragging},attrs:{slot:"main"},on:{dragover:t.handleDragOver,drkagend:function(e){t.picture.dragging=!1},drkgleave:function(e){t.picture.dragging=!1},drop:t.handleFileDrop},slot:"main"},[a("div",{staticClass:"h3"},[t._v("Дорбавить изображение профиля")]),a("p",{staticClass:"p--condensed"},[t._v(" Загрузите файл "),a("label",{staticClass:"button profile_picture_modal__upload_button"},[a("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.processImage(e.target.files[0])}}}),t._v(" Загрузить ")])]),a("div",{staticClass:"profile_picture_modal__drag_area"},[t.picture.dataURL?a("div",{staticClass:"profile_picture_modal__drag_area__image picture_circle",style:{"background-image":"url("+t.picture.dataURL+")"}}):a("span",{staticClass:"profile_picture_modal__drag_area__icon",class:{"profile_picture_modal__drag_area__icon--picture.dragging":t.picture.dragging}},[a("font-awesome-icon",{attrs:{icon:["fa","cloud-upload-alt"]}})],1)])]),a("div",{staticClass:"profile_picture_modal__buttons",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"button button--modal button--green",class:{"button--disabled":!t.picture.dataURL},on:{click:t.uploadProfilePicture}},[t._v(" Загрузить изображение ")]),a("button",{staticClass:"button button--modal",on:{click:t.hideProflePictureModal}},[t._v("Отмена")])])]),a("div",{staticClass:"h1"},[t._v("Основные настройки")]),a("div",[a("div",{staticClass:"h3"},[t._v("Информация")]),a("p",{staticClass:"p--condensed"},[t._v(" Напишите что-нибудь о себе ")]),a("fancy-textarea",{attrs:{placeholder:"Описание",error:t.description.error,type:"password"},model:{value:t.description.value,callback:function(e){t.$set(t.description,"value",e)},expression:"description.value"}}),a("loading-button",{staticClass:"button button--green",attrs:{loading:t.description.loading},on:{click:t.saveDescription}},[t._v(" Сохранить описание ")])],1),a("br"),a("div",[a("div",{staticClass:"h3"},[t._v("Изображение профиля")]),t.picture.current?a("p",{staticClass:"p--condensed profile_picture_preview picture_circle",style:{"background-image":"url("+t.picture.current+")"}}):t._e(),a("button",{staticClass:"button",on:{click:function(e){t.picture.showProfilePictureModal=!0}}},[t._v(" "+t._s(t.picture.current?"Изменить":"Добавить")+" изображение профиля ")]),t.picture.current?a("button",{staticClass:"button",staticStyle:{"margin-left":"0.5rem"},on:{click:function(e){t.picture.showRemoveProfilePictureModal=!0}}},[t._v(" Удалить ")]):t._e()])],1)},o=[],r=(a("a4d3"),a("e01a"),a("ac1f"),a("466d"),a("4795"),a("19b4")),n=a("8e8d"),c=a("6307"),s=a("da16"),l=a("c4b0"),u=a.n(l),d=a("bd28"),p=a("2fa3"),f={name:"settingsGeneral",components:{FancyTextarea:r["a"],LoadingButton:n["a"],ModalWindow:c["a"],ConfirmModal:s["a"]},data:function(){return{description:{value:"",loading:!1,error:""},picture:{current:null,showProfilePictureModal:!1,showRemoveProfilePictureModal:!1,dragging:!1,dataURL:null,file:null,loading:!1}}},computed:{},methods:{saveDescription:function(){var t=this;this.description.error="",this.description.loading=!0,this.axios.put(p["a"]+"/api/v1/user/"+this.$store.state.username,{description:this.description.value}).then((function(){t.description.loading=!1}))["catch"]((function(e){t.description.loading=!1,u()(t.$store)(e,(function(e){t.description.error=e.message}))}))},uploadProfilePicture:function(){var t=this;this.picture.loading=!0;var e=new FormData;e.append("picture",this.picture.file),this.axios.post(p["a"]+"/api/v1/user/"+this.$store.state.username+"/picture",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.hideProflePictureModal(),t.picture.current=e.data.picture}))["catch"]((function(e){t.picture.loading=!1,u()(t.$store)(e)}))},removeProfilePicture:function(){var t=this;this.axios.put(p["a"]+"/api/v1/user/"+this.$store.state.username+"/picture").then((function(){t.picture.current=null}))["catch"](u()(this.$store))},hideProflePictureModal:function(){var t=this;this.picture.showProfilePictureModal=!1,setTimeout((function(){t.picture.dataURL=null,t.picture.loading=!1}),200)},handleDragOver:function(t){t.preventDefault(),this.picture.dragging=!0},handleFileDrop:function(t){if(t.preventDefault(),this.picture.dragging=!1,t.dataTransfer&&t.dataTransfer.items){var e=t.dataTransfer.items[0];e.type.match("^image/")&&this.processImage(e.getAsFile())}},processImage:function(t){var e=this,a=new FileReader;a.readAsDataURL(t),this.picture.file=t,a.addEventListener("load",(function(){e.picture.dataURL=a.result}))}},created:function(){var t=this;this.$nextTick((function(){t.axios.get(p["a"]+"/api/v1/user/"+t.$store.state.username).then((function(e){t.description.value=e.data.description||"",t.picture.current=e.data.picture}))["catch"]((function(e){u()(t.$store)(e)}))})),Object(d["a"])("settingsGeneral")}},v=f,h=(a("fde0"),a("2877")),_=Object(h["a"])(v,i,o,!1,null,"2d1d1a15",null);e["default"]=_.exports},"8b99":function(t,e,a){},"8df7":function(t,e,a){"use strict";var i=a("4e07"),o=a.n(i);o.a},"8e8d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button loading_button",class:{"loading_button--loading":t.loading},on:{click:function(e){return t.event("click")},keydown:function(e){return t.event("keydown")}}},[a("loading-icon",{staticClass:"loading_button__icon",attrs:{dark:t.dark}}),a("div",{staticClass:"loading_button__slot"},[t._t("default")],2)],1)},o=[],r=a("c5af"),n={name:"LoadingButton",props:["loading","dark"],components:{LoadingIcon:r["a"]},methods:{event:function(t){this.loading||this.$emit(t)}}},c=n,s=(a("8df7"),a("2877")),l=Object(s["a"])(c,i,o,!1,null,null,null);e["a"]=l.exports},"962b":function(t,e,a){},bd28:function(t,e,a){"use strict";var i=a("bc3a"),o=a.n(i),r=a("2fa3");e["a"]=function(t,e){"userPosts"===t||"userThreads"===t?o.a.get(r["a"]+"/api/v1/user/"+e).then((function(e){return o.a.post(r["a"]+"/api/v1/log",{route:t,resourceId:e.data.id})}))["catch"](console.log):o.a.post(r["a"]+"/api/v1/log",{route:t,resourceId:e})["catch"](console.log)}},da16:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[a("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),a("button",{staticClass:"button button--modal",on:{click:function(e){return t.setShowModal(!1)}}},[t._v("Отмена")])])])},o=[],r=a("6307"),n={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:r["a"]},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}},c=n,s=a("2877"),l=Object(s["a"])(c,i,o,!1,null,null,null);e["a"]=l.exports},e145:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error_tooltip",class:{"error_tooltip--show":t.error}},[t._v(" "+t._s(t.delayed_error)+" ")])},o=[],r=(a("4795"),{name:"ErrorTooltip",props:["error"],data:function(){return{delayed_error:this.error}},watch:{error:function(t){var e=this;t?this.delayed_error=t:setTimeout((function(){e.delayed_error=""}),205)}}}),n=r,c=(a("225f"),a("2877")),s=Object(c["a"])(n,i,o,!1,null,"6281f96c",null);e["a"]=s.exports},fde0:function(t,e,a){"use strict";var i=a("962b"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-1db02d71.7e77d92d.js.map