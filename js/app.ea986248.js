(function(e){function t(t){for(var n,o,s=t[0],l=t[1],u=t[2],f=0,p=[];f<s.length;f++)o=s[f],a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("5f5b"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("NavBar"),r("br"),r("b-row",[r("b-col",[r("BankSearch",{model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),r("b-col",[r("ItemsPerPage",{model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),r("b-col",[r("b-button",{on:{click:function(t){e.viewAllBanks=!e.viewAllBanks}}},[e._v("\n        "+e._s(e.loading?"Loading..":e.viewAllBanks?"Switch to Favorite Banks":"Show all Banks")+"\n      ")])],1)],1),r("br"),r("BankTable",{attrs:{items:e.tableItems,perPage:e.perPage,filter:e.searchText}})],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Fyle Frontend Test")])],1)],1)},l=[],u={name:"NavBar"},c=u,f=r("2877"),p=Object(f["a"])(c,s,l,!1,null,null,null),d=p.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"Search here"}},[e._v("Search")])]),r("b-col",{attrs:{sm:"8"}},[r("b-form-input",{attrs:{value:e.filter,placeholder:"Enter Bank Name, City, etc.."},on:{input:e.updateBankSearch}})],1)],1)},v=[],h={name:"BankSearch",props:["value"],data:function(){return{filter:this.value}},methods:{updateBankSearch:function(e){this.$emit("input",e)}}},g=h,m=Object(f["a"])(g,b,v,!1,null,null,null),k=m.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-table",{attrs:{items:e.items,fields:e.fields,busy:e.isBusy,"per-page":e.perPage,filter:e.filter,"current-page":e.currentPage,striped:"",hover:"",responsive:"",outlined:""},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"favorite",fn:function(t){return[r("b-button",{on:{click:function(r){return e.toggleFavorite(t.item)}}},[e._v("\n        "+e._s(t.item.favorite?"Mark as not Favorite":"Mark as Favorite")+"\n      ")])]}}])},[r("div",{staticClass:"text-center text-info my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[e._v(" Loading...")])],1)])],1)},y=[],P=(r("96cf"),r("3b8d"));function S(){return w.apply(this,arguments)}function w(){return w=Object(P["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.bank_data||localStorage.bank_data.constructor!=String){e.next=8;break}return e.prev=1,t=JSON.parse(localStorage.bank_data),e.abrupt("return",t);case 6:e.prev=6,e.t0=e["catch"](1);case 8:return r="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI",e.next=11,fetch(r);case 11:return n=e.sent,e.next=14,n.json();case 14:return a=e.sent,localStorage.bank_data=JSON.stringify(a),e.abrupt("return",a);case 17:case"end":return e.stop()}},e,null,[[1,6]])})),w.apply(this,arguments)}function x(){if(localStorage.favorite_bank_data&&localStorage.favorite_bank_data.constructor==String)try{var e=JSON.parse(localStorage.favorite_bank_data);return e}catch(t){}return{}}function B(){return O.apply(this,arguments)}function O(){return O=Object(P["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:for(t=e.sent,r=x(),n=0;n<t.length;n++)try{1==r[t[n].ifsc]?t[n].favorite=!0:t[n].favorite=!1}catch(a){t[n].favorite=!1}return e.abrupt("return",t);case 6:case"end":return e.stop()}},e)})),O.apply(this,arguments)}function j(e,t){try{var r=JSON.parse(localStorage.favorite_bank_data);r[e]=t,localStorage.favorite_bank_data=JSON.stringify(r)}catch(a){var n={};n[e]=t,localStorage.favorite_bank_data=JSON.stringify(n)}}var T={name:"BankTable",data:function(){return{fields:["ifsc","branch","address","city","district","state","bank_name","favorite"],currentPage:1,itemsCount:0}},computed:{isBusy:function(){return!(this.items.length>0)},rows:function(){return""!=this.filter?this.itemsCount:this.items.length}},props:["items","perPage","filter"],methods:{onFiltered:function(e){this.itemsCount=e.length,this.currentPage=1},toggleFavorite:function(e){j(e.ifsc,!e.favorite),e.favorite=!e.favorite}}},I=T,N=Object(f["a"])(I,_,y,!1,null,null,null),F=N.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"Page Size"}},[e._v("Page Size")])]),r("b-col",{attrs:{sm:"8"}},[r("b-form-input",{attrs:{type:"number",value:e.itemsPerPage,min:"1"},on:{input:e.updateItemsPerPage}})],1)],1)},M=[],$={name:"ItemsPerPage",props:["value"],data:function(){return{itemsPerPage:this.value}},methods:{updateItemsPerPage:function(e){this.$emit("input",e)}}},A=$,C=Object(f["a"])(A,J,M,!1,null,null,null),E=C.exports,R={name:"app",components:{NavBar:d,BankSearch:k,BankTable:F,ItemsPerPage:E},created:function(){var e=this;this.loading=!0,B().then(function(t){e.items=t,e.loading=!1})},data:function(){return{items:[],perPage:6,searchText:"",viewAllBanks:!0,loading:!1}},computed:{tableItems:function(){return this.viewAllBanks?this.items:this.favoriteItems()}},methods:{favoriteItems:function(){for(var e=[],t=x(),r=0;r<this.items.length;r++)1==t[this.items[r].ifsc]&&e.push(this.items[r]);return e}}},z=R,L=Object(f["a"])(z,i,o,!1,null,null,null),U=L.exports;r("f9e3"),r("2dd8");n["default"].use(a["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(U)}}).$mount("#app")}});
//# sourceMappingURL=app.ea986248.js.map