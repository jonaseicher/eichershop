(function(t){function e(e){for(var n,c,o=e[0],s=e[1],u=e[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/eichershop/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";r("85ec")},7872:function(t,e,r){"use strict";r("aeeb")},"85ec":function(t,e,r){},"9fc5":function(t,e,r){},aeeb:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Material+Icons&display=block",rel:"stylesheet"}}),r("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),r("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap",rel:"stylesheet"}}),r("Header"),r("Something")],1)},a=[],c=r("d4ec"),o=r("262e"),s=r("2caf"),u=r("9ab4"),l=r("1b40"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-container"},[t._l(t.articles,(function(e){return r("div",{key:e.id,staticClass:"article"},[r("div",{staticStyle:{"text-align":"end"}},[e.amountInCart>0?r("div",[r("button",{staticClass:"button left-semi-circle noselect",staticStyle:{"text-align":"center"},on:{click:function(r){return t.addToCart(e.id,-1)}}},[t._v("-")]),r("button",{staticClass:"button noselect"},[t._v(t._s(e.amountInCart))]),r("button",{staticClass:"button right-semi-circle noselect",on:{click:function(r){return t.addToCart(e.id,1)}}},[t._v("+")])]):r("div",[r("button",{staticClass:"button round noselect",on:{click:function(r){return t.addToCart(e.id,1)}}},[t._v("+")])])]),r("img",{staticClass:"noselect image-contain",attrs:{src:e.image,alt:"",width:"100%","max-height":"300"}}),r("div",{staticClass:"price title"},[t._v(t._s(e.price)+".00 €")]),r("div",{staticClass:"title",staticStyle:{color:"var(--secondary-text-note)"}},[t._v(t._s(e.name))])])})),r("div",{staticClass:"article noselect"},[t._v(" Article ")]),r("div",{staticClass:"article"},[t._v(" Article ")]),r("div",{staticClass:"article"},[t._v(" Article ")])],2)])},d=[],f=r("bee2"),h=(r("cfb2"),r("7db0"),r("4de4"),r("d81d"),r("8d27")),m=r("2f62");n["a"].use(m["a"]);var g=new m["a"].Store({strict:!1}),b=g,v=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.articles=[{name:"Eicher Diesel Alu Schild",description:"Wir können das Eicher Diesel Alu-Schild in Original 2,5mm Dicke wieder liefern. Mit bereits fertig lackiertem roten Schriftzug und das auch noch zu einem vergünstigten Preis von 35  statt vorher unlackiert für 39 ! Achtung begrenzte Anzahl!",tags:["neu","accessory"],price:35,amountInCart:0,id:8039,image:"https://picsum.photos/400?random=1"},{name:"Keramik-Tasse",description:"Hochwertige Keramik-Tasse in weiß mit modernem Design.\nMit Eicher-Diesel Logo.\nSpülmaschinenfest.\nCa. 10cm hoch, 8cm Durchmesser",tags:["accessory"],price:8,amountInCart:0,id:8006,image:"https://picsum.photos/400?random=2"},{id:1016,name:"Kinder T-Shirt",price:18,image:"https://picsum.photos/400?random=3",tags:["clothing"],description:"",amountInCart:0},{id:1032,name:"Die Eicher Raubtierkappe",price:27,image:"https://picsum.photos/400?random=4",tags:["clothing"],description:"",amountInCart:0},{id:1025,name:"Soft Shell Bodywarmer Weste, rot",price:60,image:"https://picsum.photos/400?random=5",tags:["clothing"],description:"",amountInCart:0},{id:1026,name:"Strickfleece-Jacke blaumeliert",price:45,image:"https://picsum.photos/400?random=6",tags:["clothing"],description:"",amountInCart:0},{id:1023,name:"Mütze mit gestricktem Eicherfreunde Logo",price:10,image:"https://picsum.photos/400?random=7",tags:["clothing"],description:"",amountInCart:0},{id:1010,name:"Kappe, navyblau",price:10,image:"https://picsum.photos/400?random=8",tags:["clothing"],description:"",amountInCart:0}],t}return Object(f["a"])(r,[{key:"addToCart",value:function(t,e){var r=this.getArticle(t);r.amountInCart+=e,r.amountInCart<0&&(r.amountInCart=0)}},{key:"getArticle",value:function(t){var e=this.articles.find((function(e){return e.id===t}));if(!e)throw new Error("Article with id ".concat(t," not found!"));return e}},{key:"getCartArticles",value:function(){return this.articles.filter((function(t){return t.amountInCart>0}))}},{key:"getCartNumberOfProducts",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.amountInCart})).reduce((function(t,e){return t+e}))}},{key:"getCartTotalPrice",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.price*t.amountInCart})).reduce((function(t,e){return t+e}))}}]),r}(h["b"]);v=Object(u["a"])([Object(h["a"])({generateMutationSetters:!0})],v);var y=new v({store:b,name:"shop"}),C=y,O=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"articles",get:function(){return C.articles}},{key:"addToCart",value:function(t,e){C.addToCart(t,e)}}]),r}(l["b"]);O=Object(u["a"])([l["a"]],O);var _=O,j=_,k=(r("ebc9"),r("2877")),w=Object(k["a"])(j,p,d,!1,null,"c8193b8a",null),S=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("mwc-icon",{staticClass:"icon"},[t._v("menu")]),r("mwc-icon",{staticClass:"icon",staticStyle:{"text-align":"start"}},[t._v("search")]),t._m(0),r("div",[t.cartTotalPrice>0?r("span",{staticStyle:{color:"white","border-radius":"10px",border:"1px solid white",padding:"7px"}},[t._v(t._s(t.cartTotalPrice)+" €")]):t._e()]),r("div",{staticStyle:{height:"24px"}},[t.cartNumberOfProducts>0?r("mwc-icon",{staticClass:"icon"},[t._v("shopping_cart")]):t._e(),t.cartNumberOfProducts>0?r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.cartNumberOfProducts))]):t._e()],1)],1)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"title",staticStyle:{height:"24px"}},[r("span",[t._v(" Eicher Fanartikel Shop ")])])}],A=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"cartArticles",get:function(){return C.getCartArticles()}},{key:"cartNumberOfProducts",get:function(){return C.getCartNumberOfProducts()}},{key:"cartTotalPrice",get:function(){return C.getCartTotalPrice()}}]),r}(l["b"]);A=Object(u["a"])([l["a"]],A);var I=A,T=I,E=(r("7872"),Object(k["a"])(T,x,P,!1,null,"28333d30",null)),M=E.exports,D=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(l["b"]);D=Object(u["a"])([Object(l["a"])({components:{Something:S,Header:M}})],D);var N=D,z=N,$=(r("034f"),Object(k["a"])(z,i,a,!1,null,null,null)),K=$.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(K)}}).$mount("#app")},ebc9:function(t,e,r){"use strict";r("9fc5")}});
//# sourceMappingURL=app.ae462953.js.map