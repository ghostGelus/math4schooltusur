(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},s={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-03c04938":"08c81a2b","chunk-04c69c95":"f4f53a39","chunk-0d0c761d":"700a2212","chunk-134ad1f9":"9427f1f4","chunk-10b26223":"271c4301","chunk-0778849d":"ab0e857b","chunk-5da7eef8":"e8f5240e","chunk-b796c072":"a96edfff","chunk-12c5f6fb":"f1c6f592","chunk-40a3b066":"81fd8f4e","chunk-53d676ec":"9dfab6e4","chunk-583c1736":"744f60ba","chunk-1db02d71":"7e77d92d","chunk-2a048948":"d9fe0878","chunk-4afa51c3":"a2e21333","chunk-647d921c":"218dce91","chunk-2d0c13b8":"3e0c6037","chunk-38020534":"44552c25","chunk-3c6116e8":"0fbb40ed","chunk-4f474130":"29a0cca5","chunk-5190d239":"2a962592","chunk-0cf580a4":"9065abac","chunk-63a4498a":"67fd3124","chunk-6a082552":"8a6dee74","chunk-76aca1e7":"9759556c","chunk-bea4f64c":"225b4283"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-03c04938":1,"chunk-04c69c95":1,"chunk-0d0c761d":1,"chunk-134ad1f9":1,"chunk-10b26223":1,"chunk-0778849d":1,"chunk-5da7eef8":1,"chunk-b796c072":1,"chunk-12c5f6fb":1,"chunk-40a3b066":1,"chunk-53d676ec":1,"chunk-583c1736":1,"chunk-1db02d71":1,"chunk-2a048948":1,"chunk-4afa51c3":1,"chunk-647d921c":1,"chunk-38020534":1,"chunk-3c6116e8":1,"chunk-4f474130":1,"chunk-5190d239":1,"chunk-0cf580a4":1,"chunk-63a4498a":1,"chunk-6a082552":1,"chunk-76aca1e7":1,"chunk-bea4f64c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-03c04938":"973f1ee7","chunk-04c69c95":"eae0b606","chunk-0d0c761d":"05b0d332","chunk-134ad1f9":"d48857c9","chunk-10b26223":"4dae1283","chunk-0778849d":"95ff4d77","chunk-5da7eef8":"6704a298","chunk-b796c072":"8b86effe","chunk-12c5f6fb":"3ac136db","chunk-40a3b066":"34d664c1","chunk-53d676ec":"b40327a0","chunk-583c1736":"7a5fa9a0","chunk-1db02d71":"98216282","chunk-2a048948":"ce43c5e0","chunk-4afa51c3":"789e8224","chunk-647d921c":"08d3e314","chunk-2d0c13b8":"31d6cfe0","chunk-38020534":"d44008e2","chunk-3c6116e8":"669b3ec3","chunk-4f474130":"60636df3","chunk-5190d239":"2ef02fdc","chunk-0cf580a4":"7937b8fe","chunk-63a4498a":"8ec49061","chunk-6a082552":"a1adf2c1","chunk-76aca1e7":"f4c2cd00","chunk-bea4f64c":"a712bf1d"}[t]+".css",s=c.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===s))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===o||d===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],h.parentNode.removeChild(h),n(r)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}s[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b9a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route_container not_found"},[n("h1",{staticClass:"not_found__title"},[t._v("404 - страница не найдена")]),n("div",{staticClass:"not_found__box"},[n("p",{staticClass:"not_found__box--large_text"},[t._v(" Страница по адрецу "),n("strong",[t._v(t._s(t.$route.fullPath))]),t._v(" не найдена. ")]),n("p",[n("router-link",{staticClass:"button",attrs:{to:"/"}},[t._v("Нажмите на эту кнопку чтобы перейти на главную страницу")])],1)])])},a=[],s={name:"NotFound"},r=s,i=(n("d10e"),n("2877")),c=Object(i["a"])(r,o,a,!1,null,"060ed8ac",null);e["a"]=c.exports},"238a":function(t,e,n){},"2fa3":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o="";o="https://math4school.herokuapp.com";var a=o},5326:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("d81d"),n("13d5"),n("fb6a"),n("b0c0"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),n("498a");var o=n("ade3"),a=n("2909"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("323e")),r=n.n(s),i=n("2b0e"),c=n("8c4f"),u=n("2f62"),d=(n("5363"),n("ce5b")),l=n.n(d);n("bf40");i["default"].use(l.a);var h={},f=new l.a(h),m=n("6c42"),p=(n("da96"),n("bc3a")),g=n.n(p),v=n("a7fe"),b=n.n(v),k=(n("4160"),n("a630"),n("3ca3"),n("159b"),n("2fa3")),w={},P={install:function(t){t.prototype.$linkExpander=function(e,n){var o=0,a=function(){o++,o===i.length&&n(r.innerHTML)},s=function(t,e){if(t.length){var n=document.createElement("div");n.innerHTML=t,e.parentNode.replaceChild(n.children[0],e)}a()},r=document.createElement("div");r.innerHTML=e;var i=Array.from(r.querySelectorAll("p a[href]")).filter((function(t){return t.parentNode.parentNode===r&&1===t.parentNode.childNodes.length&&t.innerHTML===t.href}));i.forEach((function(e){var n=w[e.href];n?s(n,e):t.axios.get(k["a"]+"/api/v1/link_preview?url="+e.href).then((function(t){w[e.href]=t.data,s(t.data,e)}))["catch"](a)}))}}},y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("modal-window",{staticStyle:{"z-index":"100"},attrs:{width:"25rem","no-padding":!0},model:{value:t.showAjaxErrorsModal,callback:function(e){t.showAjaxErrorsModal=e},expression:"showAjaxErrorsModal"}},[n("div",{attrs:{slot:"main"},slot:"main"},t._l(this.$store.state.ajaxErrors,(function(e){return n("p",{key:e,staticStyle:{margin:"1rem"}},[t._v(t._s(e))])})),0),n("button",{ref:"ajaxErrorsModalButton",staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:function(e){t.showAjaxErrorsModal=!1}},slot:"footer"},[t._v(" OK ")])]),n("not-found",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.show404Page,expression:"$store.state.show404Page"}]}),n("transition",{attrs:{name:"fade"}},[n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.show404Page,expression:"!$store.state.show404Page"}]})],1)],1)},x=[],_=(n("7db0"),n("6307")),L=n("1b9a"),E=n("c4b0"),$=n.n(E),M={name:"app",components:{ModalWindow:_["a"],NotFound:L["a"]},data:function(){return{signup:{username:"",password:"",confirmPassword:"",loading:!1,errors:{username:"",hash:"",confirmPassword:""}},login:{username:"",password:"",loading:!1,errors:{username:"",hash:""}},loadingLogout:!1,showMenu:!1,ajaxErrorHandler:$()(this.$store)}},computed:{name:function(){return this.$store.state.meta.name},showAccountModal:{get:function(){return this.$store.state.accountModal},set:function(t){this.$store.commit("setAccountModalState",t)}},showAjaxErrorsModal:{get:function(){return this.$store.state.ajaxErrorsModal},set:function(t){this.$store.commit("setAjaxErrorsModalState",t)}},showAccountTab:{get:function(){return this.$store.state.accountTabs},set:function(t){this.$store.commit("setAccountTabs",t)}},categories:function(){return this.$store.state.meta.categories}},methods:{showAccountModalTab:function(t){this.toggleMenu(),this.showAccountModal=!0,this.showAccountTab=t},toggleMenu:function(){this.showMenu=!this.showMenu},logout:function(){var t=this;this.toggleMenu(),this.loadingLogout=!0,this.axios.post(k["a"]+"/api/v1/user/"+this.$store.state.username+"/logout").then((function(e){t.loadingLogout=!1,t.$store.commit("setUsername",""),t.$store.commit("setAdmin",e.data.admin),t.$socket.emit("accountEvent"),t.$router.push("/")}))["catch"]((function(e){t.loadingLogout=!1,t.ajaxErrorHandler(e)}))},clearSignup:function(){this.signup.username="",this.signup.password="",this.signup.confirmPassword="",this.$store.commit("setToken",null)},clearSignupErrors:function(){this.signup.errors.username="",this.signup.errors.hash="",this.signup.errors.confirmPassword=""},clearLogin:function(){this.login.username="",this.login.password=""},clearLoginErrors:function(){this.login.errors.username="",this.login.errors.hash=""},closeAccountModal:function(){this.showAccountModal=!1,this.clearLogin(),this.clearSignup(),this.clearLoginErrors(),this.clearSignupErrors()},createAccount:function(){var t=this;this.clearSignupErrors();var e={username:this.signup.username,password:this.signup.password};this.$store.state.token&&(e.admin=!0,e.token=this.$store.state.token),this.signup.password!==this.signup.confirmPassword?this.signup.errors.confirmPassword="Passwords must match":(this.signup.loading=!0,this.axios.post(k["a"]+"/api/v1/user",e).then((function(e){t.signup.loading=!1,t.$store.commit("setUsername",e.data.username),t.$store.commit("setAdmin",e.data.admin),t.closeAccountModal(),t.$socket.emit("accountEvent")}))["catch"]((function(e){t.signup.loading=!1,t.ajaxErrorHandler(e,(function(e){var n=e.path;void 0!==t.signup.errors[n]&&void 0!==t.signup.errors[n]&&(t.signup.errors[n]=e.message)}))})))},doLogin:function(){var t=this;this.clearSignupErrors(),this.login.username.trim().length?(this.login.loading=!0,this.axios.post(k["a"]+"/api/v1/user/".concat(this.login.username,"/login"),{password:this.login.password}).then((function(e){t.login.loading=!1,t.$store.commit("setUsername",e.data.username),t.$store.commit("setAdmin",e.data.admin),t.closeAccountModal(),t.$socket.emit("accountEvent")}))["catch"]((function(e){t.login.loading=!1,t.ajaxErrorHandler(e,(function(e){var n=e.path;void 0!==t.signup.errors[n]&&void 0!==t.signup.errors[n]&&(t.signup.errors[n]=e.message)}))}))):this.login.errors.username="Username must not be blank"}},created:function(){var t=this;this.$store.dispatch("setTitle","Математика с Факультетом безопасности"),this.axios.get(k["a"]+"/api/v1/settings").then((function(e){t.$store.commit("setSettings",e.data),t.$store.dispatch("setTitle",t.$store.state.meta.title)}))["catch"]((function(e){"noSettings"===e.response.data.errors[0].name?t.$router.push("/start"):t.ajaxErrorHandler(e)})),this.axios.get(k["a"]+"/api/v1/category").then((function(e){if(t.$store.commit("addCategories",e.data),!t.$store.state.meta.title.length&&t.$route.params.category){var n=t.$route.params.category.toUpperCase(),o=t.categories.find((function(t){return t.value===n}));t.$store.dispatch("setTitle",o.name)}}))["catch"](this.ajaxErrorHandler)},watch:{$route:function(){this.showMenu=!1},"$store.state.ajaxErrorsModal":function(t){t&&this.$refs.ajaxErrorsModalButton.focus()}}},C=M,A=(n("5c0b"),n("2877")),j=Object(A["a"])(C,y,x,!1,null,null,null),T=j.exports,S=(n("a4d3"),n("e01a"),n("c975"),n("277d"),n("4e82"),n("a434"),n("99af"),n("caad"),n("0d03"),n("4d63"),n("25f0"),n("2532"),n("5319"),n("ddb0"),{thread:"",category:null,threadId:void 0,PollQuestionId:null,posts:[],postNotification:null,locked:!1,reply:{username:"",id:null},editor:{show:!1,loading:!1,value:""},mentions:[],loadingPosts:!1,nextURL:"",previousURL:"",nextPostsCount:10,previousPostsCount:0,totalPostsCount:0,selectedPosts:[],removePostsButtonLoading:!1,showRemovePostsButton:!1}),R={sortedPosts:function(t){return t.posts.sort((function(t,e){return new Date(t.createdAt)-new Date(e.createdAt)}))}},O={deleteThread:function(t,e){var n=t.state;e.axios.put(k["a"]+"/api/v1/thread/"+n.threadId).then((function(){e.$router.push("/")}))["catch"]($()(e.$store))},removePostsAsync:function(t,e){var n=t.state,o=t.commit;o("setRemovePostsButtonLoading",!0);var a=n.selectedPosts.map((function(t){return e.axios.put(k["a"]+"/api/v1/post/"+t)}));Promise.all(a).then((function(){o("setRemovePostsButtonLoading",!1),o("setShowRemovePostsButton",!1),n.posts=n.posts.map((function(t){return n.selectedPosts.includes(t.id)&&(t.content="<p>[This post has been removed by an administrator]</p>"),t})),n.selectedPosts=[]}))["catch"]((function(t){o("setRemovePostsButtonLoading",!1),o("setShowRemovePostsButton",!1),$()(e.$store)(t)}))},addPostAsync:function(t,e){var n=t.state,o=t.commit,a=n.editor.value;n.mentions.forEach((function(t){var e=new RegExp("(^|\\s)@"+t+"($|\\s)");a=a.replace(e,"$1[@".concat(t,"](/user/").concat(t,")$2"))}));var s={content:a,mentions:n.mentions,threadId:+e.$route.params.id};n.reply.id&&(s.replyingToId=n.reply.id),o("setThreadEditorLoading",!0),e.axios.post(k["a"]+"/api/v1/post",s).then((function(t){o("setThreadEditorLoading",!1),o("addPost",t.data),o("addReplyBubble",t.data),o("setThreadEditorValue",""),o("setThreadEditorState",!1),o("setTotalPostsCount",n.totalPostsCount+1),o({type:"setReply",username:"",id:""})}))["catch"]((function(t){o("setThreadEditorLoading",!1),$()(e.$store)(t)}))},loadInitialPostsAsync:function(t,e){var n=t.commit,o=t.dispatch;n("setPosts",[]),n("setThread",{name:"Загрузка..."}),o("setTitle","Загрузка...");var a=e.$route.params.post_number,s="/api/v1/thread/"+e.$route.params.id;void 0!==a&&(s+="?postNumber="+a),e.axios.get(s).then((function(t){n("setThread",t.data),o("setTitle",t.data.name),n("setNextURL",t.data.meta.nextURL),n("setLocked",t.data.locked),n("setPreviousURL",t.data.meta.previousURL),n("setNextURL",t.data.meta.nextURL),n("setPreviousURL",t.data.meta.previousURL),n("setPostCounts",t.data.meta),n("setTotalPostsCount",t.data.postsCount),n("setPosts",t.data.Posts),e.$router.replace({name:"thread-post",params:{post_number:a||0,slug:t.data.slug}}),void 0!==a&&e.highlightPost(+a)}))["catch"]((function(t){400===t.response.status?n("set404Page",!0):$()(e.$store)(t)}))},loadPostsAsync:function(t,e){var n,o=t.state,a=t.commit,s=e.vue,r=e.previous;r?(a("setLoadingPostsState","previous"),n=o.previousURL):(a("setLoadingPostsState","next"),n=o.nextURL),null===n?a("setLoadingPostsState",!1):s.axios.get(n).then((function(t){var e=o.posts.map((function(t){return t.id})),n=t.data.Posts.filter((function(t){return!e.includes(t.id)}));if(a("setLoadingPostsState",!1),r){var i=n.slice(-1)[0];a("prependPosts",n),a("setPreviousURL",t.data.meta.previousURL),i&&s.scrollTo(i.postNumber)}else a("addPost",n),a("setNextURL",t.data.meta.nextURL);a("setPostCounts",t.data.meta)}))["catch"]((function(t){console.log(t),$()(s.$store)}))},loadNewPostsSinceLoad:function(t,e){var n=t.state,o=t.commit;if(n.nextPostsCount<10){var a=n.nextURL,s="/api/v1/thread/"+n.threadId+"?limit=10&from=";o("incrementNextPostsCount"),null===a&&o("setNextURL",s+(e.postNumber-1))}},setThreadLockedState:function(t,e){var n=t.state,o=t.commit;e.axios.put(k["a"]+"/api/v1/thread/"+n.threadId,{locked:!n.locked}).then((function(){o("setLocked",!n.locked)}))["catch"]((function(t){console.log(t),$()(e.$store)}))}},U={setReply:function(t,e){t.reply.username=e.username,t.reply.id=e.id,e.quote&&(t.editor.value=e.quote)},"thread/setPostNotification":function(t,e){t.postNotification=e},addPost:function(t,e){var n;Array.isArray(e)?(n=t.posts).push.apply(n,Object(a["a"])(e)):t.posts.push(e)},prependPosts:function(t,e){var n;(n=t.posts).unshift.apply(n,Object(a["a"])(e))},addReplyBubble:function(t,e){var n,o={};e.replyId&&(t.posts.forEach((function(t,a){t.id===e.replyId&&(n=a,o=t)})),o.Replies.push(e),t.posts.splice(n,1,o))},setThreadEditorValue:function(t,e){t.editor.value=e},setThreadEditorLoading:function(t,e){t.editor.loading=e},setThreadEditorState:function(t,e){t.editor.show=e},setLoadingPostsState:function(t,e){t.loadingPosts=e},setPosts:function(t,e){t.posts=e},setThread:function(t,e){t.thread=e.name,t.threadId=e.id,t.PollQuestionId=e.PollQuestionId,t.category=e.Category},setNextURL:function(t,e){t.nextURL=e},setPreviousURL:function(t,e){t.previousURL=e},setPostCounts:function(t,e){t.previousPostsCount=e.previousPostsCount,t.nextPostsCount=e.nextPostsCount},setTotalPostsCount:function(t,e){t.totalPostsCount=e},incrementNextPostsCount:function(t){t.nextPostsCount++},setMentions:function(t,e){t.mentions=e},setLocked:function(t,e){t.locked=e},setSelectedPosts:function(t,e){var n=t.selectedPosts.indexOf(e);n>-1?t.selectedPosts.splice(n,1):t.selectedPosts.push(e)},setRemovePostsButtonLoading:function(t,e){t.removePostsButtonLoading=e},setShowRemovePostsButton:function(t,e){t.showRemovePostsButton=e}},N={state:S,getters:R,actions:O,mutations:U},B={selectedCategory:""},I={},H={},D={setSelectedCategory:function(t,e){t.selectedCategory=e}},q={state:B,getters:I,actions:H,mutations:D},F={showAddNewBanModal:!1,username:"",message:"",options:[{name:"Выберите тип блокировки",disabled:!0},{name:"Block user's known ip addresses",value:"ip"},{name:"Ban from creating new threads",value:"thread"},{name:"Ban from replying to threads",value:"post"},{name:"Ban from both",value:"both"}],selectedOption:0},Q={},z={"moderation/clearModal":function(t){var e=t.commit;e("moderation/setUsername",""),e("moderation/setMessage",""),e("moderation/setSelectedOption",0)}},W={"moderation/setUsername":function(t,e){t.username=e},"moderation/setMessage":function(t,e){t.message=e},"moderation/setModal":function(t,e){t.showAddNewBanModal=e},"moderation/setSelectedOption":function(t,e){t.selectedOption=e}},J={state:F,getters:Q,actions:z,mutations:W};i["default"].use(u["a"]);var K=new u["a"].Store({state:{meta:{name:"",title:"",categories:[{name:"Все",value:"ALL",color:"#1565C0"}]},accountTabs:0,accountModal:!1,username:"",admin:!1,token:null,show404Page:!1,ajaxErrors:[],ajaxErrorsModal:!1,MinQueryLength:2},getters:{categoriesWithoutAll:function(t){var e=t.meta.categories.filter((function(t){return-1===["ALL","OTHER"].indexOf(t.value)}));return e.unshift({name:"Выбрать категорию",disabled:!0}),e.filter((function(t){return"ALL"!==t.value}))},title:function(t){return t.meta.title.trim().length?t.meta.title:t.meta.name},alphabetizedCategories:function(t){return t.meta.categories.sort((function(t,e){return"All"===t.name||"Other"===t.name||"Other"===e.name||t.name<e.name?-1:t.name>e.name?1:0}))}},actions:{setTitle:function(t,e){var n=t.state,o=t.getters,a=e;console.log(a),n.meta.title="Математика с факультетом безопасонсти",document.title=o.title}},mutations:{setToken:function(t,e){t.token=e},set404Page:function(t,e){t.show404Page=e},setAccountTabs:function(t,e){t.accountTabs=e},setSelectOptions:function(t,e){t.selectOptions[e.name]=e.value},setAccountModalState:function(t,e){t.accountModal=e},setAjaxErrorsModalState:function(t,e){t.ajaxErrorsModal=e},setAjaxErrors:function(t,e){t.ajaxErrors=e},setUsername:function(t,e){t.username=e},setAdmin:function(t,e){t.admin=e},setSettings:function(t,e){t.meta.name=e.forumName,t.meta.description=e.forumDescription,t.meta.showDescription=e.showDescription},addCategories:function(t,e){var n;Array.isArray(e)?(n=t.meta.categories).push.apply(n,Object(a["a"])(e)):t.meta.categories.push(e)},removeCategory:function(t,e){var n=t.meta.categories.filter((function(t){return t.id===e})),o=t.meta.categories.indexOf(n);t.meta.categories.splice(o,1)},updateCategory:function(t,e){var n=t.meta.categories.filter((function(t){return t.id===e.id})),o=t.meta.categories.indexOf(n);t.meta.categories.splice(o,1,e)}},modules:{thread:N,category:q,moderation:J}}),V=n("ecee"),G=n("ad3d"),X=n("b702"),Y=n("c074");window.onload=function(){var t,e=document.createElement("div");e.innerHTML='<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/default.min.css">',(t=document.head).append.apply(t,Object(a["a"])(e.children))},i["default"].use(l.a,{iconfont:"fortawesome"}),i["default"].use(m["a"]),V["c"].add(Y["a"],Y["s"],Y["m"],Y["p"],Y["h"],Y["A"],X["a"],Y["B"],Y["u"],Y["o"],Y["y"],Y["k"],Y["D"],Y["z"],Y["j"],Y["C"],Y["i"],Y["q"],Y["g"],Y["v"],Y["f"],Y["x"],Y["w"],X["b"],Y["e"],Y["t"],Y["r"],Y["c"],Y["b"],Y["n"],Y["l"],Y["E"],Y["d"]),i["default"].component("font-awesome-icon",G["a"]);var Z=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-53d676ec")]).then(n.bind(null,"9c38"))},tt=function(){return n.e("chunk-2d0c13b8").then(n.bind(null,"44bd"))},et=function(){return n.e("chunk-0d0c761d").then(n.bind(null,"eb57"))},nt=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-10b26223"),n.e("chunk-5da7eef8"),n.e("chunk-b796c072")]).then(n.bind(null,"9009"))},ot=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-10b26223"),n.e("chunk-0778849d")]).then(n.bind(null,"e3ed"))},at=function(){return n.e("chunk-4f474130").then(n.bind(null,"5998"))},st=function(){return Promise.all([n.e("chunk-2a048948"),n.e("chunk-647d921c")]).then(n.bind(null,"da3f"))},rt=function(){return Promise.all([n.e("chunk-2a048948"),n.e("chunk-4afa51c3")]).then(n.bind(null,"7183"))},it=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-12c5f6fb")]).then(n.bind(null,"6839"))},ct=function(){return Promise.all([n.e("chunk-5da7eef8"),n.e("chunk-0cf580a4")]).then(n.bind(null,"07c9"))},ut=function(){return n.e("chunk-04c69c95").then(n.bind(null,"52ca"))},dt=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-583c1736")]).then(n.bind(null,"1ba0"))},lt=function(){return n.e("chunk-1db02d71").then(n.bind(null,"7da2"))},ht=function(){return n.e("chunk-03c04938").then(n.bind(null,"3746"))},ft=function(){return Promise.all([n.e("chunk-134ad1f9"),n.e("chunk-40a3b066")]).then(n.bind(null,"d580"))},mt=function(){return n.e("chunk-bea4f64c").then(n.bind(null,"1331"))},pt=function(){return n.e("chunk-5190d239").then(n.bind(null,"8649"))},gt=function(){return n.e("chunk-6a082552").then(n.bind(null,"a157"))},vt=function(){return n.e("chunk-38020534").then(n.bind(null,"ed44"))},bt=function(){return n.e("chunk-3c6116e8").then(n.bind(null,"add3"))},kt=function(){return n.e("chunk-63a4498a").then(n.bind(null,"68ad"))},wt=function(){return n.e("chunk-76aca1e7").then(n.bind(null,"5c3d"))};i["default"].use(c["a"]),i["default"].use(u["a"]),i["default"].use(b.a,g.a),i["default"].use(P);var Pt=new c["a"]({routes:[{path:"/",component:at},{path:"/category/:category",component:Z},{path:"/p/:id",component:tt},{path:"/start",component:et},{path:"/thread/:slug/:id",component:nt},{path:"/thread/:slug/:id/:post_number",name:"thread-post",component:nt},{path:"/thread/new",component:ot},{path:"/search/:q",component:st},{path:"/search/users/:q",component:rt,name:"search/users"},{path:"/search/threads/:q",component:rt,name:"search/threads"},{path:"/user/:username",redirect:"/user/:username/posts",component:it,children:[{path:"posts",component:ct},{path:"threads",component:ut}]},{path:"/settings",redirect:"/settings/general",component:dt,children:[{path:"general",component:lt},{path:"account",component:ht}]},{path:"/admin",redirect:"/admin/dashboard",component:ft,children:[{path:"dashboard",component:mt},{path:"general",component:vt},{path:"users",component:bt},{path:"moderation",redirect:"/admin/moderation/reports"},{path:"moderation/reports",component:pt},{path:"moderation/bans",component:gt},{path:"contacts",component:kt},{path:"contacts/:id",name:"adminContact",component:wt}]},{path:"*",component:L["a"]}],mode:"history"});Pt.beforeEach((function(t,e,n){Pt.app.$store.commit("set404Page",!1),"thread-post"===t.name||"thread-post"===e.name||t.params.id&&t.params.id===e.params.id||r.a.start(),n()})),Pt.afterEach((function(){r.a.done()})),i["default"].filter("formatDate",(function(t){return t.length<=10?t:"".concat(t.substring(0,10))})),i["default"].filter("stripTags",(function(t){var e=(new DOMParser).parseFromString(t,"text/html");return e.body.textContent||""})),i["default"].filter("shortenContent",(function(t){return t.length<=30?t:"".concat(t.substring(0,30),"...")})),i["default"].filter("truncate",(function(t,e){return t.length<=e?t:t.slice(0,e)+"…"})),i["default"].filter("truncateMid",(function(t,e){if(t.length<=e)return t;var n=Math.round(e/2),o=e-n;return t.slice(0,n)+"…"+t.slice(t.length-o,t.length)}));var yt=new i["default"]({vuetify:f,store:K,router:Pt,render:function(t){return t(T)}}).$mount("#app"),xt=document.cookie.split(";").map((function(t){return t.split("=").map((function(t){return t.trim()}))})).map((function(t){var e=t[0],n=t[1];return Object(o["a"])({},e,n)})).reduce((function(t,e){var n=Object.keys(e)[0];return t[n]=e[n],t}),{});xt.username&&yt.$store.commit("setUsername",xt.username),"false"===xt.admin?yt.$store.commit("setAdmin",!1):"true"===xt.admin&&yt.$store.commit("setAdmin",!0)},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},6307:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal_window__overlay",class:{"modal_window--show":t.value},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[n("div",{staticClass:"modal_window",class:{"modal_window--show":t.value},style:{width:t.width||"20rem"}},[n("div",{staticClass:"modal_window__loading_overlay",class:{"modal_window__loading_overlay--show":t.loading}},[n("loading-icon")],1),t.closeButton?n("span",{staticClass:"modal_window__close",on:{click:t.closeModal}},[n("font-awesome-icon",{attrs:{icon:["fa","times"]}})],1):t._e(),n("div",{staticClass:"modal_window__main",class:{"modal_window__main--no_padding":t.noPadding}},[t._t("main")],2),t.hideFooter?t._e():n("div",{staticClass:"modal_window__footer"},[t._t("footer")],2)])])},a=[],s=n("c5af"),r={name:"ModalWindow",props:["value","width","close-button","hide-footer","no-padding","loading"],components:{LoadingIcon:s["a"]},methods:{closeModal:function(){this.$emit("input",!1)}}},i=r,c=(n("6c05"),n("2877")),u=Object(c["a"])(i,o,a,!1,null,"7d83827a",null);e["a"]=u.exports},"6c05":function(t,e,n){"use strict";var o=n("238a"),a=n.n(o);a.a},9832:function(t,e,n){"use strict";var o=n("5326"),a=n.n(o);a.a},"9c0c":function(t,e,n){},c4b0:function(t,e,n){n("4160"),n("fb6a"),n("159b"),t.exports=function(t){return function(e,n){var o=[];void 0===e.response||void 0===e.response.data.errors?console.log("Неизвестная ошибка"):e.response.data.errors.forEach((function(t){var e=t.path;e&&n?n(t,o):o.push(t.message[0].toUpperCase()+t.message.slice(1))})),o.length&&(t.commit("setAjaxErrors",o),t.commit("setAjaxErrorsModalState",!0))}}},c5af:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading_icon",class:{"loading_icon--dark":t.dark}},[n("span"),n("span"),n("span")])},a=[],s={name:"LoadingIcon",props:["dark"]},r=s,i=(n("9832"),n("2877")),c=Object(i["a"])(r,o,a,!1,null,null,null);e["a"]=c.exports},d10e:function(t,e,n){"use strict";var o=n("ed27"),a=n.n(o);a.a},ed27:function(t,e,n){}});
//# sourceMappingURL=app.c636138b.js.map