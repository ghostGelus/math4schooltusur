(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0778849d"],{6062:function(t,e,n){"use strict";var r=n("6d61"),o=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,o=n("7c73"),s=n("e2cc"),i=n("0366"),a=n("19aa"),l=n("2266"),u=n("7dd0"),c=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),p=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,r){a(t,c,e),p(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&l(r,t[u],t,n)})),h=v(e),w=function(t,e,n){var r,o,s=h(t),i=m(t,e);return i?i.value=n:(s.last=i={index:o=f(e,!0),key:e,value:n,previous:r=s.last,next:void 0,removed:!1},s.first||(s.first=i),r&&(r.next=i),d?s.size++:t.size++,"F"!==o&&(s.index[o]=i)),t},m=function(t,e){var n,r=h(t),o=f(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return s(c.prototype,{clear:function(){var t=this,e=h(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),r=m(e,t);if(r){var o=r.next,s=r.previous;delete n.index[r.index],r.removed=!0,s&&(s.next=o),o&&(o.previous=s),n.first==r&&(n.first=o),n.last==r&&(n.last=s),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=h(this),r=i(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),s(c.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),d&&r(c.prototype,"size",{get:function(){return h(this).size}}),c},setStrong:function(t,e,n){var r=e+" Iterator",o=v(e),s=v(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),s=n("94ca"),i=n("6eeb"),a=n("f183"),l=n("2266"),u=n("19aa"),c=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),p=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),m=v?"set":"add",_=o[t],b=_&&_.prototype,g=_,x={},y=function(t){var e=b[t];i(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(s(t,"function"!=typeof _||!(w||b.forEach&&!d((function(){(new _).entries().next()})))))g=n.getConstructor(e,t,v,m),a.REQUIRED=!0;else if(s(t,!0)){var C=new g,k=C[m](w?{}:-0,1)!=C,A=d((function(){C.has(1)})),P=f((function(t){new _(t)})),E=!w&&d((function(){var t=new _,e=5;while(e--)t[m](e,e);return!t.has(-0)}));P||(g=e((function(e,n){u(e,g,t);var r=p(new _,e,g);return void 0!=n&&l(n,r[m],r,v),r})),g.prototype=b,b.constructor=g),(A||E)&&(y("delete"),y("has"),v&&y("get")),(E||k)&&y(m),w&&b.clear&&delete b.clear}return x[t]=g,r({global:!0,forced:g!=_},x),h(g,t),w||n.setStrong(g,t,v),g}},abf8:function(t,e,n){},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},e3ed:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("div",{staticClass:"route_container thread_new"},[n("div",{staticClass:"h1"},[t._v("Опубликуйте новый пост")]),n("div",{staticClass:"thread_meta_info"},[n("div",{staticClass:"thread_meta_info__text"},[t._v("Выберите категорию и введите название поста")]),n("div",{staticClass:"thread_meta_info__form"},[n("select-button",{attrs:{options:t.categories},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}}),n("fancy-input",{staticClass:"thread_meta_info__title",attrs:{placeholder:"Название поста",error:t.errors.name,large:"true",width:"15rem"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("transition",{attrs:{name:"slide"}},[t.showPoll?n("div",{staticClass:"thread_meta_info__poll"},[n("div",{staticClass:"thread_meta_info__poll__top_bar"},[n("fancy-input",{staticClass:"thread_meta_info__poll__question",attrs:{placeholder:"Вопрос опроса",width:"20rem",large:!0,error:t.errors.pollQuestion},model:{value:t.pollQuestion,callback:function(e){t.pollQuestion=e},expression:"pollQuestion"}}),n("button",{staticClass:"button button--thin_text button--borderless",on:{click:t.removePoll}},[t._v(" Удалить опрос ")])],1),n("div",[t._l(t.pollAnswers,(function(e,r){return n("div",{key:"poll-answer-"+r,staticClass:"thread_meta_info__poll__answer"},[n("fancy-input",{attrs:{width:"15rem",large:!0,placeholder:"Answer "+(r+1)},model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"pollAnswer.answer"}}),n("span",{attrs:{title:"Удалить ответ"},on:{click:function(e){return t.removePollAnswer(r)}}},[t._v("×")])],1)})),n("div",{staticClass:"thread_meta_info__form"},[n("fancy-input",{staticStyle:{display:"inline-block","margin-right":"0.5rem"},attrs:{placeholder:"Вариант ответа на опрос",width:"15rem",large:!0,error:t.errors.pollAnswer},model:{value:t.newPollAnswer,callback:function(e){t.newPollAnswer=e},expression:"newPollAnswer"}}),n("button",{staticClass:"button button--thin_text",on:{click:t.addPollAnswer}},[t._v("Добавить ответ")])],1)],2)]):t._e()])],1),n("div",{staticClass:"editor",class:{"editor--focus":t.focusInput,"editor--error":t.errors.content}},[n("div",{staticClass:"editor__input"},[n("div",{staticClass:"editor__format_bar editor__format_bar--editor"},[t._v(" Редактор ")]),n("input-editor-core",{on:{mentions:t.setMentions,focus:function(e){return t.setFocusInput(!0)},blur:function(e){return t.setFocusInput(!1)}},model:{value:t.editor,callback:function(e){t.editor=e},expression:"editor"}})],1),n("div",{staticClass:"editor__preview"},[n("div",{staticClass:"editor__format_bar editor__format_bar--preview"},[t._v(" Превью ")]),n("input-editor-preview",{attrs:{value:t.editor,mentions:t.mentions}})],1)]),n("error-tooltip",{staticClass:"editor_error",attrs:{error:t.errors.content}}),n("loading-button",{staticClass:"button--green submit",attrs:{loading:t.loading},on:{click:t.postThread}},[t._v("Опубликовать пост")])],1)],1)},o=[],s=(n("99af"),n("4160"),n("d81d"),n("a434"),n("b0c0"),n("d3b7"),n("6062"),n("3ca3"),n("498a"),n("159b"),n("ddb0"),n("87e6")),i=n("b422"),a=n("80e3"),l=n("5016"),u=n("8e8d"),c=n("e145"),d=n("d178"),f=n("c4b0"),h=n.n(f),p=n("bd28"),v=n("2fa3"),w={name:"ThreadNew",components:{Navbar:d["a"],InputEditorCore:s["a"],InputEditorPreview:i["a"],SelectButton:l["a"],FancyInput:a["a"],LoadingButton:u["a"],ErrorTooltip:c["a"]},data:function(){return{selectedCategory:this.$store.state.category.selectedCategory,editor:"",mentions:[],name:"",loading:!1,focusInput:!1,errors:{content:"",name:"",pollQuestion:"",pollAnswer:""},showPoll:!1,pollQuestion:"",newPollAnswer:"",pollAnswers:[]}},computed:{categories:function(){return this.$store.getters.categoriesWithoutAll}},methods:{togglePoll:function(t){this.showPoll=void 0!==t?t:!this.showPoll},addPollAnswer:function(){this.newPollAnswer.trim().length&&(this.pollAnswers.push({answer:this.newPollAnswer}),this.newPollAnswer="")},removePollAnswer:function(t){this.pollAnswers.splice(t,1)},removePoll:function(){this.pollQuestion="",this.pollAnswers=[],this.newPollAnswer="",this.togglePoll()},setErrors:function(t){var e=this;t.forEach((function(t){e.errors[t.name]=t.error}))},clearErrors:function(){this.errors.content="",this.errors.name="",this.errors.pollQuestion="",this.errors.pollAnswer=""},hasDuplicates:function(t,e){return e&&(t=t.map(e)),t.length!==new Set(t).size},postThread:function(){var t,e=this,n=[];this.clearErrors(),this.editor.trim().length||n.push({name:"content",error:"Post content cannot be blank"}),this.name.trim().length||n.push({name:"name",error:"Cannot be blank"}),this.showPoll&&!this.pollQuestion.trim().length&&n.push({name:"pollQuestion",error:"Cannot be blank"}),this.showPoll&&this.pollAnswers.length<2&&n.push({name:"pollAnswer",error:"You need at least 2 answers"}),this.showPoll&&this.hasDuplicates(this.pollAnswers,(function(t){return t.answer}))&&n.push({name:"pollAnswer",error:"Your answers can't contain any duplicates"}),n.length?this.setErrors(n):(this.loading=!0,this.axios.post(v["a"]+"/api/v1/thread",{name:this.name,category:this.selectedCategory}).then((function(n){t=n.data;var r=[];return r.push(e.axios.post(v["a"]+"/api/v1/post",{threadId:n.data.id,content:e.editor,mentions:e.mentions})),e.showPoll&&r.push(e.axios.post(v["a"]+"/api/v1/poll",{question:e.pollQuestion,answers:e.pollAnswers.map((function(t){return t.answer})),threadId:n.data.id})),Promise.all(r)})).then((function(){e.loading=!1,e.$router.push("/thread/".concat(t.slug,"/").concat(t.id,"/0"))}))["catch"]((function(t){e.loading=!1,h()(e.$store)(t,(function(t,n){var r=t.path;void 0!==e.errors[r]?e.errors[r]=t.message:n.push(t.message)}))})))},setFocusInput:function(t){this.focusInput=t},setMentions:function(t){this.mentions=t}},watch:{"$store.state.username":function(t){t||this.$router.push("/")}},mounted:function(){Object(p["a"])("threadNew")},beforeRouteEnter:function(t,e,n){n((function(t){t.$store.state.username||(t.$store.commit("setAccountModalState",!0),n("/"))}))}},m=w,_=(n("f144"),n("2877")),b=Object(_["a"])(m,r,o,!1,null,null,null);e["default"]=b.exports},f144:function(t,e,n){"use strict";var r=n("abf8"),o=n.n(r);o.a},f183:function(t,e,n){var r=n("d012"),o=n("861d"),s=n("5135"),i=n("9bf2").f,a=n("90e3"),l=n("bb2f"),u=a("meta"),c=0,d=Object.isExtensible||function(){return!0},f=function(t){i(t,u,{value:{objectID:"O"+ ++c,weakData:{}}})},h=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},p=function(t,e){if(!s(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},v=function(t){return l&&w.REQUIRED&&d(t)&&!s(t,u)&&f(t),t},w=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:v};r[u]=!0}}]);
//# sourceMappingURL=chunk-0778849d.ab0e857b.js.map