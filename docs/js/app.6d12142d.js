(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-wordscount/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",[n("WordsCount")],1),n("footer",[t._v("\n    Footer\n  ")])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("WordsCount")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"box box-green",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("div",{staticClass:"box box-blue"},t._l(t.countedAndSorted,function(e,r){return n("div",{key:r},[t._v("\n      "+t._s(e.word)+": "+t._s(e.count)+"\n    ")])}))])},c=[],i=(n("ac6a"),n("456d"),n("55dd"),n("c436")),s=n.n(i),l={data:function(){return{text:"Love to hate to love"}},computed:{countedAndSorted:function(){var t=s()(this.text);return Object.keys(t).map(function(e){return{word:e,count:t[e]}}).sort(function(t,e){return e.count-t.count})}}},f=l,p=(n("7ff7"),n("2877")),d=Object(p["a"])(f,a,c,!1,null,"025a3100",null);d.options.__file="WordsCount.vue";var v=d.exports,b={name:"app",components:{WordsCount:v}},_=b,h=(n("034f"),Object(p["a"])(_,o,u,!1,null,null,null));h.options.__file="App.vue";var m=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},6628:function(t,e,n){},"7ff7":function(t,e,n){"use strict";var r=n("6628"),o=n.n(r);o.a},c21b:function(t,e,n){}});
//# sourceMappingURL=app.6d12142d.js.map