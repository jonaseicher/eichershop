(function(t){function e(e){for(var n,c,s=e[0],o=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/eichershop/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";r("85ec")},"0ce6":function(t,e,r){},"33b1":function(t,e,r){},"71a0":function(t,e,r){"use strict";r("c8eb")},"85ec":function(t,e,r){},"9dd3":function(t,e,r){},a549:function(t,e,r){"use strict";r("0ce6")},c8eb:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Material+Icons&display=block",rel:"stylesheet"}}),r("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),r("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap",rel:"stylesheet"}}),r("Header"),r("Something")],1)},i=[],c=r("d4ec"),s=r("262e"),o=r("2caf"),l=r("9ab4"),u=r("1b40"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-container"},t._l(t.articles,(function(t){return r("article-tile-2",{key:t.id,attrs:{article:t}})})),1)])},p=[],f=r("bee2"),h=(r("cfb2"),r("7db0"),r("4de4"),r("d81d"),r("8d27")),m=r("2f62");n["a"].use(m["a"]);var b=new m["a"].Store({strict:!1}),g=b,v=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.articles=[{name:"Eicher Diesel Alu Schild",description:"Wir können das Eicher Diesel Alu-Schild in Original 2,5mm Dicke wieder liefern. Mit bereits fertig lackiertem roten Schriftzug und das auch noch zu einem vergünstigten Preis von 35  statt vorher unlackiert für 39 ! Achtung begrenzte Anzahl!",tags:["neu","accessory"],price:35,amountInCart:0,id:8039,image:"https://picsum.photos/400?random=1"},{name:"Keramik-Tasse",description:"Hochwertige Keramik-Tasse in weiß mit modernem Design.\nMit Eicher-Diesel Logo.\nSpülmaschinenfest.\nCa. 10cm hoch, 8cm Durchmesser",tags:["accessory"],price:8,amountInCart:0,id:8006,image:"https://picsum.photos/400?random=2"},{id:1016,name:"Kinder T-Shirt",price:18,image:"https://picsum.photos/400?random=3",tags:["clothing"],description:"",amountInCart:0},{id:1032,name:"Die Eicher Raubtierkappe",price:27,image:"https://picsum.photos/400?random=4",tags:["clothing"],description:"",amountInCart:0},{id:1025,name:"Soft Shell Bodywarmer Weste, rot",price:60,image:"https://picsum.photos/400?random=5",tags:["clothing"],description:"",amountInCart:0},{id:1026,name:"Strickfleece-Jacke blaumeliert",price:45,image:"https://picsum.photos/400?random=6",tags:["clothing"],description:"",amountInCart:0},{id:1023,name:"Mütze mit gestricktem Eicherfreunde Logo",price:10,image:"https://picsum.photos/400?random=7",tags:["clothing"],description:"",amountInCart:0},{id:1010,name:"Kappe, navyblau",price:10,image:"https://picsum.photos/400?random=8",tags:["clothing"],description:"",amountInCart:0}],t}return Object(f["a"])(r,[{key:"addToCart",value:function(t,e){var r=this.getArticle(t);r.amountInCart+=e,r.amountInCart<0&&(r.amountInCart=0)}},{key:"getArticle",value:function(t){var e=this.articles.find((function(e){return e.id===t}));if(!e)throw new Error("Article with id ".concat(t," not found!"));return e}},{key:"getCartArticles",value:function(){return this.articles.filter((function(t){return t.amountInCart>0}))}},{key:"getCartNumberOfProducts",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.amountInCart})).reduce((function(t,e){return t+e}))}},{key:"getCartTotalPrice",value:function(){return 0===this.getCartArticles().length?0:this.getCartArticles().map((function(t){return t.price*t.amountInCart})).reduce((function(t,e){return t+e}))}}]),r}(h["b"]);v=Object(l["a"])([Object(h["a"])({generateMutationSetters:!0})],v);var C=new v({store:g,name:"shop"}),y=C,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("div",{staticStyle:{"text-align":"end"}},[t.article.amountInCart>0?r("div",[r("button",{staticClass:"button left-semi-circle noselect",staticStyle:{"text-align":"center"},on:{click:function(e){return t.addToCart(t.article.id,-1)}}},[t._v("-")]),r("button",{staticClass:"button noselect"},[t._v(t._s(t.article.amountInCart))]),r("button",{staticClass:"button right-semi-circle noselect",on:{click:function(e){return t.addToCart(t.article.id,1)}}},[t._v("+")])]):r("div",[r("button",{staticClass:"button round noselect",on:{click:function(e){return t.addToCart(t.article.id,1)}}},[t._v("+")])])]),r("img",{staticClass:"noselect image-contain",attrs:{src:t.article.image,alt:"",width:"100%","max-height":"300"}}),r("div",{staticClass:"price title"},[t._v(t._s(t.article.price)+".00 €")]),r("div",{staticClass:"title",staticStyle:{color:"var(--secondary-text-note)"}},[t._v(t._s(t.article.name))])])},j=[],_=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"addToCart",value:function(t,e){y.addToCart(t,e)}}]),r}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0})],_.prototype,"article",void 0),_=Object(l["a"])([u["a"]],_);var k=_,w=k,S=(r("e05e"),r("2877")),T=Object(S["a"])(w,O,j,!1,null,"545816b2",null),x=T.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("div",{staticStyle:{display:"table",width:"100%"}},[r("span",{staticClass:"title",staticStyle:{display:"table-cell","vertical-align":"middle"}},[t._v(" "+t._s(t.article.price)+" € ")]),r("span",{staticStyle:{display:"table-cell","text-align":"right"}},[t.article.amountInCart>0?r("span",[r("button",{staticClass:"button left-semi-circle noselect",staticStyle:{"text-align":"center"},on:{click:function(e){return t.addToCart(t.article.id,-1)}}},[t._v("-")]),r("button",{staticClass:"button noselect"},[t._v(t._s(t.article.amountInCart))]),r("button",{staticClass:"button right-semi-circle noselect",on:{click:function(e){return t.addToCart(t.article.id,1)}}},[t._v("+")])]):r("span",[r("button",{staticClass:"button round noselect",on:{click:function(e){return t.addToCart(t.article.id,1)}}},[t._v("+")])])])]),r("img",{staticClass:"noselect image-contain",attrs:{src:t.article.image,alt:"",width:"100%","max-height":"300"}}),r("div",{staticClass:"title"},[t._v(t._s(t.article.name))])])},P=[],A=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"addToCart",value:function(t,e){y.addToCart(t,e)}}]),r}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0})],A.prototype,"article",void 0),A=Object(l["a"])([u["a"]],A);var E=A,M=E,D=(r("a549"),Object(S["a"])(M,I,P,!1,null,"4105f5be",null)),$=D.exports,N=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"articles",get:function(){return y.articles}}]),r}(u["c"]);N=Object(l["a"])([Object(u["a"])({components:{ArticleTile:x,ArticleTile2:$}})],N);var z=N,K=z,H=(r("71a0"),Object(S["a"])(K,d,p,!1,null,"00fa8e0f",null)),J=H.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header headergrid"},[r("mwc-icon",{staticClass:"icon menu"},[t._v("menu")]),r("mwc-icon",{staticClass:"icon search",staticStyle:{"text-align":"start"}},[t._v("search")]),t._m(0),r("div",[t.cartTotalPrice>0?r("span",{staticClass:"price"},[t._v(t._s(t.cartTotalPrice)+" €")]):t._e()]),r("div",{staticStyle:{height:"24px"}},[t.cartNumberOfProducts>0?r("mwc-icon",{staticClass:"icon cart"},[t._v("shopping_cart")]):t._e(),t.cartNumberOfProducts>0?r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.cartNumberOfProducts))]):t._e()],1)],1)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"title",staticStyle:{height:"24px"}},[r("span",[t._v(" Eicher Fanartikel Shop ")])])}],R=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(f["a"])(r,[{key:"cartArticles",get:function(){return y.getCartArticles()}},{key:"cartNumberOfProducts",get:function(){return y.getCartNumberOfProducts()}},{key:"cartTotalPrice",get:function(){return y.getCartTotalPrice()}}]),r}(u["c"]);R=Object(l["a"])([u["a"]],R);var W=R,B=W,F=(r("ec9c"),Object(S["a"])(B,q,L,!1,null,"398a1b6a",null)),G=F.exports,Q=function(t){Object(s["a"])(r,t);var e=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(u["c"]);Q=Object(l["a"])([Object(u["a"])({components:{Something:J,Header:G}})],Q);var U=Q,V=U,X=(r("034f"),Object(S["a"])(V,a,i,!1,null,null,null)),Y=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Y)}}).$mount("#app")},e05e:function(t,e,r){"use strict";r("9dd3")},ec9c:function(t,e,r){"use strict";r("33b1")}});
//# sourceMappingURL=app.bdf08087.js.map