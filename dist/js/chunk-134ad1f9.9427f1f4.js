(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-134ad1f9"],{"16a3":function(t,s,e){"use strict";var a=e("cd8c"),r=e.n(a);r.a},"225f":function(t,s,e){"use strict";var a=e("63a4"),r=e.n(a);r.a},"3af9":function(t,s,e){},"3dc9":function(t,s,e){},"44ea":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info_tooltip",on:{mouseenter:function(s){return t.setState(!0)},mouseleave:function(s){return t.setState(!1)}}},[e("div",{staticClass:"info_tooltip__content",class:{"info_tooltip__content--show":t.show,"info_tooltip__content--pointer_events":t.pointerEvents}},[t._t("content")],2),e("div",{staticClass:"info_tooltip__display",class:{"info_tooltip__display--hover":t.show}},[t._t("display")],2)])},r=[],n=(e("4795"),{name:"InfoTooltip",props:["noEvents"],data:function(){return{show:!1,pointerEvents:!1}},methods:{setState:function(t){var s=this;this.noEvents||(t?(this.pointerEvents=!0,this.show=!0,this.$emit("hover")):(this.show=!1,setTimeout((function(){s.show||(s.pointerEvents=!1)}),300)))}}}),o=n,i=(e("b067"),e("2877")),c=Object(i["a"])(o,a,r,!1,null,null,null);s["a"]=c.exports},4795:function(t,s,e){var a=e("23e7"),r=e("da84"),n=e("342f"),o=[].slice,i=/MSIE .\./.test(n),c=function(t){return function(s,e){var a=arguments.length>2,r=a?o.call(arguments,2):void 0;return t(a?function(){("function"==typeof s?s:Function(s)).apply(this,r)}:s,e)}};a({global:!0,bind:!0,forced:i},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},"4e07":function(t,s,e){},"535e":function(t,s,e){"use strict";var a=e("7d62"),r=e.n(a);r.a},"61c3":function(t,s,e){"use strict";var a=e("ff4f"),r=e.n(a);r.a},6334:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab_view"},[e("div",{staticClass:"tab_view__tabs",class:{"tab_view__tabs--small_tabs":t.smallTabs,"tab_view__tabs--transparent":t.transparent}},t._l(t.tabs,(function(s,a){return e("div",{key:"tab-"+a,staticClass:"tab_view__tab",class:{"tab_view__tab--selected":t.tabIndex===a,"tab_view__tab--selected_small_tabs":t.tabIndex===a&&t.smallTabs,"tab_view__tab--selected_transparent":t.tabIndex===a&&t.transparent,"tab_view__tab--small_tabs":t.smallTabs,"tab_view__tab--transparent":t.transparent},on:{click:function(s){return t.changeTab(a)}}},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"tab_view__content",class:{"tab_view__content--padding":t.padding,"tab_view__content--transparent":t.transparent}},[t._t(t.currentTab)],2)])},r=[],n={name:"TabView",props:["tabs","value","padding","small-tabs","transparent"],methods:{changeTab:function(t){this.$emit("input",t)}},computed:{tabIndex:function(){return this.value},currentTab:function(){return this.tabs[this.tabIndex]}}},o=n,i=(e("535e"),e("2877")),c=Object(i["a"])(o,a,r,!1,null,"f4728206",null);s["a"]=c.exports},"63a4":function(t,s,e){},"7d62":function(t,s,e){},"80e3":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fancy_input",style:{width:t.width||"auto"}},[e("div",{staticStyle:{position:"relative",display:"inline-block"}},[e("div",{staticClass:"fancy_input__placeholder",class:{"fancy_input__placeholder--active":t.active||t.value.length,"fancy_input__placeholder--large":t.large}},[t._v(" "+t._s(t.placeholder)+" ")]),e("input",{staticClass:"fancy_input__input input",class:{"fancy_input__input--large":t.large,"fancy_input__input--error":t.error},attrs:{type:t.type||"text"},domProps:{value:t.value},on:{input:function(s){return t.updateValue(s.target.value)},focus:t.addActive,blur:t.removeActive}})]),e("error-tooltip",{attrs:{error:t.error}})],1)},r=[],n=e("e145"),o={name:"FancyInput",props:["value","placeholder","width","type","error","large"],components:{ErrorTooltip:n["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},i=o,c=(e("9946"),e("2877")),u=Object(c["a"])(i,a,r,!1,null,"e8a0c810",null);s["a"]=u.exports},"8df7":function(t,s,e){"use strict";var a=e("4e07"),r=e.n(a);r.a},"8e8d":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"button loading_button",class:{"loading_button--loading":t.loading},on:{click:function(s){return t.event("click")},keydown:function(s){return t.event("keydown")}}},[e("loading-icon",{staticClass:"loading_button__icon",attrs:{dark:t.dark}}),e("div",{staticClass:"loading_button__slot"},[t._t("default")],2)],1)},r=[],n=e("c5af"),o={name:"LoadingButton",props:["loading","dark"],components:{LoadingIcon:n["a"]},methods:{event:function(t){this.loading||this.$emit(t)}}},i=o,c=(e("8df7"),e("2877")),u=Object(c["a"])(i,a,r,!1,null,null,null);s["a"]=u.exports},9098:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("info-tooltip",{staticClass:"avatar_icon",attrs:{noEvents:null===t.user}},[e("template",{slot:"content"},[t.userData?[e("div",{staticClass:"avatar_icon__header"},[e("div",{staticClass:"avatar_icon__icon avatar_icon__icon--small picture_circle",style:{"background-color":t.proxyUser.color,"background-image":t.pictureURL},on:{click:t.goToUser}},[t._v(" "+t._s(t.letter)+" ")]),e("div",{staticClass:"avatar_icon__header_info"},[e("span",{staticClass:"avatar_icon__username",on:{click:function(s){return s.stopPropagation(),t.goToUser(s)}}},[t._v(" "+t._s(t.proxyUser.username)+" "),t.proxyUser.admin?e("span",{staticClass:"admin_badge"},[t._v("администратор")]):t._e()])])])]:[t._v("Загрузка...")]],2),e("div",{staticClass:"avatar_icon__icon picture_circle",class:{"avatar_icon__icon--small":"small"===t.size,"avatar_icon__icon--tiny":"tiny"===t.size},style:{"background-color":t.proxyUser.color,"background-image":t.pictureURL},attrs:{slot:"display"},on:{click:function(s){return s.stopPropagation(),t.goToUser(s)}},slot:"display"},[t._v(" "+t._s(t.letter)+" ")])],2)},r=[],n=e("44ea"),o=e("c4b0"),i=e.n(o),c=e("2fa3"),u={name:"AvatarIcon",props:["user","size"],components:{InfoTooltip:n["a"]},data:function(){return{userData:null}},computed:{proxyUser:function(){return this.userData?this.userData:this.user?this.user:{}},letter:function(){return this.proxyUser.username&&!this.proxyUser.picture?this.proxyUser.username[0].toUpperCase():""},pictureURL:function(){return this.proxyUser.picture?"url("+this.proxyUser.picture+")":null}},methods:{loadUser:function(){var t=this;this.userData||null===this.user||this.axios.get(c["a"]+"/api/v1/user/"+this.proxyUser.username).then((function(s){t.userData=s.data}))["catch"](i()(this.$store))},goToUser:function(){null!==this.user&&this.$router.push("/user/"+this.user.username)}},mounted:function(){this.loadUser()}},l=u,h=(e("d465"),e("2877")),d=Object(h["a"])(l,a,r,!1,null,null,null);s["a"]=d.exports},9946:function(t,s,e){"use strict";var a=e("bcc7"),r=e.n(a);r.a},b067:function(t,s,e){"use strict";var a=e("3af9"),r=e.n(a);r.a},bcc7:function(t,s,e){},cd8c:function(t,s,e){},d178:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"themes"}},[e("modal-window",{staticStyle:{"z-index":"100"},attrs:{width:"25rem","no-padding":!0},model:{value:t.showAjaxErrorsModal,callback:function(s){t.showAjaxErrorsModal=s},expression:"showAjaxErrorsModal"}},[e("div",{attrs:{slot:"main"},slot:"main"},t._l(this.$store.state.ajaxErrors,(function(s){return e("p",{key:s,staticStyle:{margin:"1rem"}},[t._v(t._s(s))])})),0),e("button",{ref:"ajaxErrorsModalButton",staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:function(s){t.showAjaxErrorsModal=!1}},slot:"footer"},[t._v(" OK ")])]),e("modal-window",{attrs:{"no-padding":!0,"hide-footer":!0},on:{input:t.closeAccountModal},model:{value:t.showAccountModal,callback:function(s){t.showAccountModal=s},expression:"showAccountModal"}},[e("tab-view",{attrs:{slot:"main",tabs:["Регистрация","Вход"],padding:"true"},slot:"main",model:{value:t.showAccountTab,callback:function(s){t.showAccountTab=s},expression:"showAccountTab"}},[e("template",{slot:"Регистрация"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.createAccount(s)}}},[e("fancy-input",{attrs:{error:t.signup.errors.username,placeholder:"Логин",width:"100%"},model:{value:t.signup.username,callback:function(s){t.$set(t.signup,"username",s)},expression:"signup.username"}}),e("fancy-input",{attrs:{error:t.signup.errors.hash,placeholder:"Пароль",type:"password",width:"100%"},model:{value:t.signup.password,callback:function(s){t.$set(t.signup,"password",s)},expression:"signup.password"}}),e("fancy-input",{attrs:{error:t.signup.errors.confirmPassword,placeholder:"Повторите пароль",type:"password",width:"100%"},model:{value:t.signup.confirmPassword,callback:function(s){t.$set(t.signup,"confirmPassword",s)},expression:"signup.confirmPassword"}}),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("loading-button",{staticClass:"button--green button--margin",attrs:{loading:t.signup.loading},on:{click:t.createAccount}},[t._v(" Регистрация ")]),e("div",{staticClass:"button button--borderless",on:{click:t.closeAccountModal}},[t._v(" Отмена ")])],1)],1)]),e("template",{slot:"Вход"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.doLogin(s)}}},[e("fancy-input",{attrs:{error:t.login.errors.username,placeholder:"Логин",width:"100%"},model:{value:t.login.username,callback:function(s){t.$set(t.login,"username",s)},expression:"login.username"}}),e("fancy-input",{attrs:{error:t.login.errors.hash,placeholder:"Пароль",type:"password",width:"100%"},model:{value:t.login.password,callback:function(s){t.$set(t.login,"password",s)},expression:"login.password"}}),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("loading-button",{staticClass:"button button--green button--margin",attrs:{loading:t.login.loading},on:{click:t.doLogin}},[e("font-awesome-icon",{staticStyle:{"margin-right":"0.25rem"},attrs:{icon:["fa","unlock-alt"]}}),t._v(" Войти ")],1),e("div",{staticClass:"button button--borderless",on:{click:t.closeAccountModal}},[t._v(" Отмена ")])],1)],1)])],2)],1),e("header",{staticClass:"header"},[e("a",{staticClass:"header__group",attrs:{href:"/category/all"}},[t._v(" Форум ")]),e("div",{staticClass:"header__group",class:{"header__group--show":t.showMenu}},[t.$store.state.username?[t.$store.state.admin?e("router-link",{staticClass:"button button--thin_text",attrs:{to:"/admin"}},[t._v(" Панель администратора ")]):t._e(),e("router-link",{staticClass:"button button--thin_text",attrs:{to:"/settings"}},[t._v(" Настройки ")]),e("loading-button",{staticClass:"button--thin_text",attrs:{loading:t.loadingLogout},on:{click:t.logout}},[t._v(" Выйти ")])]:[e("div",{staticClass:"button button--green button--thin_text",on:{click:function(s){return t.showAccountModalTab(0)}}},[t._v(" Регистрация ")]),e("div",{staticClass:"button button--thin_text",on:{click:function(s){return t.showAccountModalTab(1)}}},[t._v(" Вход ")])],e("search-box",{staticStyle:{"padding-top":"8px"},attrs:{"header-bar":"true"}})],2),e("div",{staticClass:"header__overlay",class:{"header__overlay--show":t.showMenu},on:{click:t.toggleMenu}}),e("span",{staticClass:"header__menu_button",on:{click:t.toggleMenu}},[e("font-awesome-icon",{attrs:{icon:["fa","bars"]}})],1)]),e("not-found",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.show404Page,expression:"$store.state.show404Page"}]})],1)},r=[],n=(e("7db0"),e("b0c0"),e("498a"),e("6307")),o=e("6334"),i=e("80e3"),c=e("8e8d"),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"root",staticClass:"search_box"},[e("div",{staticClass:"search_box__input",attrs:{tabindex:"0"},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.goToSearch(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchField,expression:"searchField"}],ref:"input",staticClass:"search_box__input__field",class:{"search_box__input__field--header":t.headerBar},attrs:{placeholder:t.placeholder||"Поиск"},domProps:{value:t.searchField},on:{focus:t.setShowResults,input:[function(s){s.target.composing||(t.searchField=s.target.value)},t.setShowResults],keydown:t.setKeyHighlight}}),e("button",{staticClass:"search_box__input__button",on:{click:t.goToSearch}},[e("font-awesome-icon",{attrs:{icon:["fa","search"]}})],1)]),t.headerBar?e("div",{staticClass:"search_box__results",class:{"search_box__results--show":t.showResults}},[e("div",{ref:"results",staticClass:"search_box__results__container"},[t.threads.length?[e("div",{staticClass:"search_box__results__header"},[t._v("Посты")]),e("div",{ref:"threads header",staticClass:"search_box__results__search_all",class:{"search_box__results--highlight":t.highlightIndex===t.getHighlightIndex("threads header")},on:{mouseover:function(s){t.highlightIndex=t.getHighlightIndex("threads header")},click:t.goToSearch}},[e("div",{staticClass:"search_box__results__icon"},[e("font-awesome-icon",{attrs:{icon:["fa","search"],"fixed-width":""}})],1),e("div",[t._v(" Найдены посты по запросу '"),e("strong",[t._v(t._s(t.searchField))]),t._v("' ")])]),t._l(t.threads,(function(s,a){return e("div",{key:"thread-result-"+a,ref:"threads",refInFor:!0,staticClass:"search_box__results__thread",class:{"search_box__results--highlight":t.highlightIndex===t.getHighlightIndex("threads",a)},on:{mouseover:function(s){t.highlightIndex=t.getHighlightIndex("threads",a)},click:t.goToSearch}},[e("div",{staticClass:"search_box__results__title"},[t._v(t._s(t._f("truncate")(s.name,50)))]),e("div",{staticClass:"search_box__results__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(s.Posts[0].content),75)))])])}))]:t._e(),t.users.length?[e("div",{staticClass:"search_box__results__header search_box__results__header--divider"},[t._v("Пользователи")]),e("div",{ref:"users header",staticClass:"search_box__results__search_all",class:{"search_box__results--highlight":t.highlightIndex===t.getHighlightIndex("users header")},on:{mouseover:function(s){t.highlightIndex=t.getHighlightIndex("users header")},click:t.goToSearch}},[e("div",{staticClass:"search_box__results__icon"},[e("font-awesome-icon",{attrs:{icon:["fa","search"]}})],1),e("div",[t._v(" Найдены пользователи по запросу '"),e("strong",[t._v(t._s(t.searchField))]),t._v("' ")])]),t._l(t.users,(function(s,a){return e("div",{key:"user-result-"+a,ref:"users",refInFor:!0,staticClass:"search_box__results__user",class:{"search_box__results--highlight":t.highlightIndex===t.getHighlightIndex("users",a)},on:{mouseover:function(s){t.highlightIndex=t.getHighlightIndex("users",a)},click:t.goToSearch}},[e("avatar-icon",{attrs:{size:"tiny",user:s}}),e("div",{staticClass:"search_box__results__title"},[t._v(t._s(s.username))])],1)}))]:t._e(),t.threads.length||t.users.length||t.loading?t._e():e("div",{staticClass:"search_box__results__message"},[t._v(" Ничего не найдено по запросу '"),e("strong",[t._v(t._s(t.searchField))]),t._v("' ")]),t.loading?e("div",{staticClass:"search_box__results__message"},[t._v(" Загрузка... ")]):t._e()],2)]):t._e()])},l=[],h=(e("caad"),e("fb6a"),e("4795"),e("9098")),d=e("c4b0"),_=e.n(d),g=e("2fa3"),p={name:"SearchBox",props:["placeholder","header-bar"],components:{AvatarIcon:h["a"]},data:function(){return{searchField:"",showResults:!1,loading:!1,highlightIndex:null,MinQueryLength:2,threads:[],users:[]}},computed:{totalHighlightOptions:function(){var t=0;return this.threads.length&&(t+=this.threads.length+1),this.users.length&&(t+=this.users.length+1),t}},methods:{setShowResults:function(){this.headerBar&&(this.showResults=this.searchField.trim().length>this.$store.state.MinQueryLength-1,this.showResults?this.getResults():this.resetResultsBox())},resetResultsBox:function(){var t=this;this.headerBar&&(this.showResults=!1,setTimeout((function(){t.highlightIndex=null,t.$refs.results.scrollTop=0,t.threads=[],t.users=[]}),200))},getHighlightIndex:function(t,s){if("threads header"===t)return 0;if("threads"===t)return 1+s;if("users"===t||"users header"===t){var e=0;return this.threads.length&&(e+=1+this.threads.length),"users"===t&&(e+=1+s),e}},getGroupFromIndex:function(t){return this.threads.length&&t<=this.threads.length?0===t?{group:"threads header",index:null}:{group:"threads",index:t-1}:this.threads.length&&t>this.threads.length?t===this.threads.length+1?{group:"users header",index:null}:{group:"users",index:t-1-this.threads.length-1}:this.users.length?0===t?{group:"users header",index:null}:{group:"users",index:t-1}:void 0},setKeyHighlight:function(t){if(this.headerBar&&[38,40].includes(t.keyCode)){var s=40===t.keyCode?1:-1;if(null===this.highlightIndex)this.highlightIndex=1===s?0:this.totalHighlightOptions-1;else{var e=this.highlightIndex+s;if(e===this.totalHighlightOptions||e<0)return void(this.highlightIndex=null);this.highlightIndex=e}var a=this.getGroupFromIndex(this.highlightIndex),r=a.group,n=a.index,o=null===n?this.$refs[r]:this.$refs[r][n];(o.offsetHeight+o.offsetTop>this.$refs.results.offsetHeight||o.offsetTop<this.$refs.results.scrollTop)&&o.scrollIntoView()}},goToSearch:function(){var t=encodeURIComponent(this.searchField.trim());if(null===this.highlightIndex&&this.searchField.trim().length)this.showResults=!1,this.$router.push("/search/"+t);else{var s=this.getGroupFromIndex(this.highlightIndex),e=s.group,a=s.index;if("users"===e)this.$router.push("/user/"+this.users[a].username);else if("threads"===e){var r=this.threads[a];this.$router.push("/thread/"+r.slug+"/"+r.id)}else"users header"===e?this.$router.push("/search/users/"+t):this.$router.push("/search/threads/"+t);this.resetResultsBox()}this.$refs.input.blur()},getResults:function(){var t=this,s=this.searchField.trim();s.length<this.$store.state.MinQueryLength||(this.loading=!0,this.threads=[],this.users=[],this.axios.get(g["a"]+"/api/v1/search/thread?q="+s).then((function(s){t.threads=s.data.threads.slice(0,3),t.loading=!1}))["catch"](_()(this.$store)),this.axios.get(g["a"]+"/api/v1/search/user?q="+s).then((function(s){t.users=s.data.users.slice(0,5),t.loading=!1}))["catch"](_()(this.$store)))}},mounted:function(){var t=this;document.body.addEventListener("click",(function(s){t.showResults&&t.$refs.root&&!t.$refs.root.contains(s.target)&&t.resetResultsBox()}))}},f=p,v=(e("61c3"),e("2877")),m=Object(v["a"])(f,u,l,!1,null,"461603cc",null),b=m.exports,x=e("1b9a"),w={name:"app",components:{ModalWindow:n["a"],TabView:o["a"],FancyInput:i["a"],LoadingButton:c["a"],SearchBox:b,NotFound:x["a"]},data:function(){return{signup:{username:"",password:"",confirmPassword:"",loading:!1,errors:{username:"",hash:"",confirmPassword:""}},login:{username:"",password:"",loading:!1,errors:{username:"",hash:""}},loadingLogout:!1,showMenu:!1,ajaxErrorHandler:_()(this.$store)}},computed:{name:function(){return this.$store.state.meta.name},showAccountModal:{get:function(){return this.$store.state.accountModal},set:function(t){this.$store.commit("setAccountModalState",t)}},showAjaxErrorsModal:{get:function(){return this.$store.state.ajaxErrorsModal},set:function(t){this.$store.commit("setAjaxErrorsModalState",t)}},showAccountTab:{get:function(){return this.$store.state.accountTabs},set:function(t){this.$store.commit("setAccountTabs",t)}},categories:function(){return this.$store.state.meta.categories}},methods:{showAccountModalTab:function(t){this.toggleMenu(),this.showAccountModal=!0,this.showAccountTab=t},toggleMenu:function(){this.showMenu=!this.showMenu},logout:function(){var t=this;this.toggleMenu(),this.loadingLogout=!0,this.axios.post(g["a"]+"/api/v1/user/"+this.$store.state.username+"/logout").then((function(s){t.loadingLogout=!1,t.$store.commit("setUsername",""),t.$store.commit("setAdmin",s.data.admin),t.$socket.emit("accountEvent"),t.$router.push("/")}))["catch"]((function(s){t.loadingLogout=!1,t.ajaxErrorHandler(s)}))},clearSignup:function(){this.signup.username="",this.signup.password="",this.signup.confirmPassword="",this.$store.commit("setToken",null)},clearSignupErrors:function(){this.signup.errors.username="",this.signup.errors.hash="",this.signup.errors.confirmPassword=""},clearLogin:function(){this.login.username="",this.login.password=""},clearLoginErrors:function(){this.login.errors.username="",this.login.errors.hash=""},closeAccountModal:function(){this.showAccountModal=!1,this.clearLogin(),this.clearSignup(),this.clearLoginErrors(),this.clearSignupErrors()},createAccount:function(){var t=this;this.clearSignupErrors();var s={username:this.signup.username,password:this.signup.password};this.$store.state.token&&(s.admin=!0,s.token=this.$store.state.token),this.signup.password!==this.signup.confirmPassword?this.signup.errors.confirmPassword="Passwords must match":(this.signup.loading=!0,this.axios.post(g["a"]+"/api/v1/user",s).then((function(s){t.signup.loading=!1,t.$store.commit("setUsername",s.data.username),t.$store.commit("setAdmin",s.data.admin),t.closeAccountModal()}))["catch"]((function(s){t.signup.loading=!1,t.ajaxErrorHandler(s,(function(s){var e=s.path;void 0!==t.signup.errors[e]&&void 0!==t.signup.errors[e]&&(t.signup.errors[e]=s.message)}))})))},doLogin:function(){var t=this;this.clearSignupErrors(),this.login.username.trim().length?(this.login.loading=!0,this.axios.post(g["a"]+"/api/v1/user/".concat(this.login.username,"/login"),{password:this.login.password}).then((function(s){t.login.loading=!1,t.$store.commit("setUsername",s.data.username),t.$store.commit("setAdmin",s.data.admin),t.closeAccountModal()}))["catch"]((function(s){t.login.loading=!1,t.ajaxErrorHandler(s,(function(s){var e=s.path;void 0!==t.signup.errors[e]&&void 0!==t.signup.errors[e]&&(t.signup.errors[e]=s.message)}))}))):this.login.errors.username="Username must not be blank"}},created:function(){var t=this;this.axios.get(g["a"]+"/api/v1/settings").then((function(s){t.$store.commit("setSettings",s.data),t.$store.dispatch("setTitle",t.$store.state.meta.title)}))["catch"]((function(s){"noSettings"===s.response.data.errors[0].name?t.$router.push("/start"):t.ajaxErrorHandler(s)})),this.axios.get(g["a"]+"/api/v1/category").then((function(s){if(t.$store.commit("addCategories",s.data),!t.$store.state.meta.title.length&&t.$route.params.category){var e=t.$route.params.category.toUpperCase(),a=t.categories.find((function(t){return t.value===e}));t.$store.dispatch("setTitle",a.name)}}))["catch"](this.ajaxErrorHandler)},watch:{$route:function(){this.showMenu=!1},"$store.state.ajaxErrorsModal":function(t){t&&this.$refs.ajaxErrorsModalButton.focus()}}},y=w,$=(e("16a3"),Object(v["a"])(y,a,r,!1,null,null,null));s["a"]=$.exports},d465:function(t,s,e){"use strict";var a=e("3dc9"),r=e.n(a);r.a},e145:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"error_tooltip",class:{"error_tooltip--show":t.error}},[t._v(" "+t._s(t.delayed_error)+" ")])},r=[],n=(e("4795"),{name:"ErrorTooltip",props:["error"],data:function(){return{delayed_error:this.error}},watch:{error:function(t){var s=this;t?this.delayed_error=t:setTimeout((function(){s.delayed_error=""}),205)}}}),o=n,i=(e("225f"),e("2877")),c=Object(i["a"])(o,a,r,!1,null,"6281f96c",null);s["a"]=c.exports},ff4f:function(t,s,e){}}]);
//# sourceMappingURL=chunk-134ad1f9.9427f1f4.js.map