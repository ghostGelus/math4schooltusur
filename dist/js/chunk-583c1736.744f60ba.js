(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-583c1736"],{"1ba0":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("div",{staticClass:"route_container route_container--settings"},[n("div",{staticClass:"settings_menu"},[n("div",{staticClass:"settings_menu__title"},[t._v("настройки")]),n("div",{staticClass:"settings_menu__items"},t._l(t.menuItems,(function(e,s){return n("div",{key:"menu-item-"+s,staticClass:"settings_menu__item",class:{"settings_menu__item--selected":s===t.selected},on:{click:function(n){return t.$router.push("/settings/"+e.route)}}},[n("font-awesome-icon",{attrs:{icon:["fa",e.icon]}}),t._v(" "+t._s(e.name)+" ")],1)})),0)]),n("div",{staticClass:"settings_page"},[n("router-view")],1)])],1)},i=[],o=(n("4160"),n("ac1f"),n("1276"),n("159b"),n("d178")),u={name:"settings",components:{Navbar:o["a"]},data:function(){return{menuItems:[{name:"Основные",route:"general",icon:"cog"},{name:"Аккаунт",route:"account",icon:"lock"}],selected:0}},watch:{$route:function(t){this.selected=this.getIndexFromRoute(t.path)},"$store.state.username":function(t){t||this.$router.push("/")}},mounted:function(){this.selected=this.getIndexFromRoute(this.$route.path)},methods:{getIndexFromRoute:function(t){var e,n=t.split("/")[2];return this.menuItems.forEach((function(t,s){t.route===n&&(e=s)})),e}},beforeRouteEnter:function(t,e,n){n((function(t){t.$store.state.username||(t.$store.commit("setAccountModalState",!0),n("/"))}))}},a=u,c=(n("4438"),n("2877")),r=Object(c["a"])(a,s,i,!1,null,"343af08f",null);e["default"]=r.exports},4438:function(t,e,n){"use strict";var s=n("5424"),i=n.n(s);i.a},5424:function(t,e,n){}}]);
//# sourceMappingURL=chunk-583c1736.744f60ba.js.map