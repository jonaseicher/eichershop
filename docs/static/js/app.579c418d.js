(function(t){function e(e){for(var n,c,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var o=r[s];0!==i[o]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/eichershop/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";r("85ec")},"2f09":function(t,e,r){"use strict";r.r(e);var n=r("42e8");for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i)},"42e8":function(t,e,r){},"85ec":function(t,e,r){},"98ef":function(t,e,r){"use strict";r.r(e);var n=r("a9dd");for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i)},a9dd:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Material+Icons&display=block",rel:"stylesheet"}}),r("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),r("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap",rel:"stylesheet"}}),r("Header"),r("Something")],1)},a=[],c=r("d4ec"),s=r("262e"),o=r("2caf"),u=r("9ab4"),l=r("1b40"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-container"},[t._l(t.articles,(function(e){return r("div",{key:e.id,staticClass:"article"},[r("div",{staticStyle:{"text-align":"end"}},[e.amountInCart>0?r("div",[r("button",{staticClass:"button left-semi-circle",staticStyle:{"text-align":"center"},on:{click:function(r){return t.addToCart(e.id,-1)}}},[t._v("-")]),r("button",{staticClass:"button"},[t._v(t._s(e.amountInCart))]),r("button",{staticClass:"button right-semi-circle",on:{click:function(r){return t.addToCart(e.id,1)}}},[t._v("+")])]):r("div",[r("button",{staticClass:"button round",on:{click:function(r){return t.addToCart(e.id,1)}}},[t._v("+")])])]),r("img",{staticStyle:{"object-fit":"contain",margin:"1rem 0rem"},attrs:{src:e.image,alt:"",width:"100%",height:"300"}}),r("div",{staticClass:"price title"},[t._v(t._s(e.price)+".00 €")]),r("div",{staticClass:"title"},[t._v(t._s(e.name))])])})),r("div",{staticClass:"article"},[t._v(" Article ")]),r("div",{staticClass:"article"},[t._v(" Article ")]),r("div",{staticClass:"article"},[t._v(" Article ")])],2)])},f=[],p=(r("cfb2"),r("bee2")),h=(r("7db0"),r("4de4"),r("d81d"),r("8d27")),g=r("2f62");n["a"].use(g["a"]);var m=new g["a"].Store({strict:!1}),v=m,b=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.articles=[{name:"Eicher Diesel Alu Schild",description:"Wir können das Eicher Diesel Alu-Schild in Original 2,5mm Dicke wieder liefern. Mit bereits fertig lackiertem roten Schriftzug und das auch noch zu einem vergünstigten Preis von 35  statt vorher unlackiert für 39 ! Achtung begrenzte Anzahl!",tags:["neu","accessory"],price:35,amountInCart:0,id:8039,image:"http://eicher-freunde.de/shop/eicher_diesel_alu_schild_gr.jpg"},{name:"Keramik-Tasse",description:"Hochwertige Keramik-Tasse in weiß mit modernem Design.\nMit Eicher-Diesel Logo.\nSpülmaschinenfest.\nCa. 10cm hoch, 8cm Durchmesser",tags:["accessory"],price:8,amountInCart:0,id:8006,image:"http://eicher-freunde.de/shop/tasse_mit_logo.jpg"},{id:1016,name:"Kinder T-Shirt",price:18,image:"http://eicher-freunde.de/shop/kinder-t-shirt_gr.jpg",tags:["clothing"],description:"",amountInCart:0},{id:1032,name:"Die Eicher Raubtierkappe",price:27,image:"http://eicher-freunde.de/shop/raubtierkappe_gr.jpg",tags:["clothing"],description:"",amountInCart:0},{id:1025,name:"Soft Shell Bodywarmer Weste, rot",price:60,image:"http://eicher-freunde.de/shop/softshell_weste_gr.jpg",tags:["clothing"],description:"",amountInCart:0},{id:1026,name:"Strickfleece-Jacke blaumeliert",price:45,image:"http://eicher-freunde.de/shop/strickjacke_gr.jpg",tags:["clothing"],description:"",amountInCart:0},{id:1023,name:"Mütze mit gestricktem Eicherfreunde Logo",price:10,image:"http://eicher-freunde.de/shop/strickmuetze_gr.jpg",tags:["clothing"],description:"",amountInCart:0},{id:1010,name:"Kappe, navyblau",price:10,image:"http://eicher-freunde.de/shop/kappe_neu.jpg",tags:["clothing"],description:"",amountInCart:0}],t}return Object(p["a"])(r,[{key:"addToCart",value:function(t,e){var r=this.getArticle(t);r.amountInCart+=e,r.amountInCart<0&&(r.amountInCart=0)}},{key:"getArticle",value:function(t){var e=this.articles.find((function(e){return e.id===t}));if(!e)throw new Error("Article with id ".concat(t," not found!"));return e}},{key:"getCartArticles",value:function(){return this.articles.filter((function(t){return t.amountInCart>0}))}},{key:"getCartNumberOfProducts",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.amountInCart})).reduce((function(t,e){return t+e}))}},{key:"getCartTotalPrice",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.price*t.amountInCart})).reduce((function(t,e){return t+e}))}}]),r}(h["b"]);b=Object(u["a"])([Object(h["a"])({generateMutationSetters:!0})],b);var _=new b({store:v,name:"shop"}),C=_;let j=class extends l["b"]{get articles(){return C.articles}addToCart(t,e){C.addToCart(t,e)}};j=Object(u["a"])([l["a"]],j);var y=j,O=y,k=r("2877");function w(t){var e=r("2f09");e.__inject__&&e.__inject__(t)}var S=Object(k["a"])(O,d,f,!1,w,"610d8ba6",null,!0),A=S.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("mwc-icon",{staticClass:"icon"},[t._v("agriculture")]),r("div",{staticClass:"title"},[t._v("Eicher Fanartikel Shop")]),r("mwc-icon",{staticClass:"icon"},[t._v("home")]),r("mwc-icon",{staticClass:"icon"},[t._v("person")]),r("div",[r("mwc-icon",{staticClass:"icon"},[t._v("shopping_cart")]),t.cartNumberOfProducts>0?r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.cartNumberOfProducts))]):t._e()],1),r("mwc-icon",{staticClass:"icon"},[t._v("menu")])],1)},P=[];let x=class extends l["b"]{get cartArticles(){return C.getCartArticles()}get cartNumberOfProducts(){return C.getCartNumberOfProducts()}get cartTotalPrice(){return C.getCartTotalPrice()}};x=Object(u["a"])([l["a"]],x);var T=x,E=T;function M(t){var e=r("98ef");e.__inject__&&e.__inject__(t)}var D=Object(k["a"])(E,I,P,!1,M,"60c94cda",null,!0),z=D.exports,N=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(l["b"]);N=Object(u["a"])([Object(l["a"])({components:{Something:A,Header:z}})],N);var K=N,$=K,H=(r("034f"),Object(k["a"])($,i,a,!1,null,null,null)),J=H.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")}});
//# sourceMappingURL=app.579c418d.js.map