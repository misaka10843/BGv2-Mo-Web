(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{e51c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("transition",{attrs:{appear:"","appear-active-class":"animated bounceInDown"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row q-col-gutter-md items-center"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{round:"",color:"primary",icon:"mdi-chevron-left"},on:{click:function(e){t.$sound.tap(),t.$router.push("/")}}})],1),a("div",{staticClass:"col-12"},[a("q-card",[a("q-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{label:t.$t("favorite.title"),name:"favorite","no-caps":""}}),a("q-tab",{attrs:{label:t.$t("history.title"),name:"history","no-caps":""}})],1),a("q-tab-panels",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"favorite"}},[t.favoriteList&&t.favoriteList.length>0?a("q-list",t._l(t.favoriteList,(function(e){return a("q-slide-item",{key:e.type+"_"+e.id,on:{right:function(a){return t.onFavoriteSlideEvent(e)}},scopedSlots:t._u([{key:"right",fn:function(){return[a("q-icon",{attrs:{color:"white",name:"delete"}})]},proxy:!0}],null,!0)},[a("q-item",{attrs:{clickable:""},on:{click:function(a){t.$sound.tap(),t.$router.push("/"+e.type+"/"+e.id)}}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$lang.getInLang(t.$i18n.locale,e.artist))+" - "+t._s(t.$lang.getInLang(t.$i18n.locale,e.title))+"\n                        ")]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.author))])],1)],1)],1)})),1):a("div",{staticClass:"text-center text-grey"},[t._v("\n                  "+t._s(t.$t("public.empty"))+"\n                ")])],1),a("q-tab-panel",{attrs:{name:"history"}},[t.historyList&&t.historyList.length>0?a("q-list",t._l(t.historyList,(function(e){return a("q-slide-item",{key:e.type+"_"+e.id,on:{right:function(a){return t.onHistorySlideEvent(e)}},scopedSlots:t._u([{key:"right",fn:function(){return[a("q-icon",{attrs:{color:"white",name:"delete"}})]},proxy:!0}],null,!0)},[a("q-item",{attrs:{clickable:""},on:{click:function(a){t.$sound.tap(),t.$router.push("/"+e.type+"/"+e.id)}}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$lang.getInLang(t.$i18n.locale,e.artist))+" - "+t._s(t.$lang.getInLang(t.$i18n.locale,e.title))+"\n                        ")]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.author))])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[t._v(t._s(e.playCount))])],1)],1)],1)})),1):a("div",{staticClass:"text-center text-grey"},[t._v("\n                  "+t._s(t.$t("public.empty"))+"\n                ")])],1)],1)],1)],1)])])])],1)},n=[],o={name:"Favorite",data:function(){return{tab:"favorite"}},computed:{favoriteList:{get(){return this.$store.state.favorite.favoriteList}},historyList:{get(){return this.$store.state.favorite.historyList}}},methods:{onFavoriteSlideEvent(t){this.$q.loading.show(),this.$store.commit("favorite/toggleFavorite",t),this.$q.loading.hide()},onHistorySlideEvent(t){this.$q.loading.show(),this.$store.commit("favorite/removeHistory",t),this.$q.loading.hide()}}},s=o,r=a("2877"),l=a("9989"),c=a("9c40"),u=a("f09f"),d=a("429b"),p=a("7460"),m=a("adad"),v=a("823b"),b=a("1c1c"),h=a("de1d"),f=a("0016"),g=a("66e5"),q=a("4074"),y=a("0170"),$=a("eebe"),_=a.n($),L=Object(r["a"])(s,i,n,!1,null,"d3b9d024",null);e["default"]=L.exports;_()(L,"components",{QPage:l["a"],QBtn:c["a"],QCard:u["a"],QTabs:d["a"],QTab:p["a"],QTabPanels:m["a"],QTabPanel:v["a"],QList:b["a"],QSlideItem:h["a"],QIcon:f["a"],QItem:g["a"],QItemSection:q["a"],QItemLabel:y["a"]})}}]);