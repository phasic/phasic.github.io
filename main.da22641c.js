!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=64)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(18)("wks"),o=r(11),s=r(0).Symbol,i="function"==typeof s;(t.exports=function(t){return n[t]||(n[t]=i&&s[t]||(i?s:o)("Symbol."+t))}).store=n},function(t,e,r){t.exports=!r(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(4),o=r(13);t.exports=r(2)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(7),o=r(26),s=r(17),i=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=s(e,!0),n(r),o)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(8);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(0),o=r(3),s=r(5),i=r(11)("src"),a=Function.toString,c=(""+a).split("toString");r(14).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,r,a){var u="function"==typeof r;u&&(s(r,"name")||o(r,"name",e)),t[e]!==r&&(u&&(s(r,i)||o(r,i,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=r:a?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||a.call(this)})},function(t,e,r){var n=r(42),o=r(21);t.exports=function(t){return n(o(t))}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){"use strict";r(38);var n=r(7),o=r(28),s=r(2),i=/./.toString,a=function(t){r(9)(RegExp.prototype,"toString",t,!0)};r(6)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?a(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=i.name&&a(function(){return i.call(this)})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=!1},function(t,e,r){var n=r(32),o=r(23);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(8);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(14),o=r(0),s=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports={}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(18)("keys"),o=r(11);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(4).f,o=r(5),s=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,s)&&n(t,s,{configurable:!0,value:e})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){t.exports=!r(2)&&!r(6)(function(){return 7!=Object.defineProperty(r(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(8),o=r(0).document,s=n(o)&&n(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,r){"use strict";var n=r(7);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){for(var n=r(39),o=r(16),s=r(9),i=r(0),a=r(3),c=r(19),u=r(1),d=u("iterator"),l=u("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=o(p),_=0;_<f.length;_++){var g,m=f[_],y=p[m],v=i[m],b=v&&v.prototype;if(b&&(b[d]||a(b,d,h),b[l]||a(b,l,m),c[m]=h,y))for(g in n)b[g]||s(b,g,n[g],!0)}},function(t,e,r){var n=r(0),o=r(14),s=r(3),i=r(9),a=r(44),c=function(t,e,r){var u,d,l,h,p=t&c.F,f=t&c.G,_=t&c.S,g=t&c.P,m=t&c.B,y=f?n:_?n[e]||(n[e]={}):(n[e]||{}).prototype,v=f?o:o[e]||(o[e]={}),b=v.prototype||(v.prototype={});for(u in f&&(r=e),r)l=((d=!p&&y&&void 0!==y[u])?y:r)[u],h=m&&d?a(l,n):g&&"function"==typeof l?a(Function.call,l):l,y&&i(y,u,l,t&c.U),v[u]!=l&&s(v,u,h),g&&b[u]!=l&&(b[u]=l)};n.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(7),o=r(47),s=r(23),i=r(22)("IE_PROTO"),a=function(){},c=function(){var t,e=r(27)("iframe"),n=s.length;for(e.style.display="none",r(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[s[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(a.prototype=n(t),r=new a,a.prototype=null,r[i]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(5),o=r(10),s=r(48)(!1),i=r(22)("IE_PROTO");t.exports=function(t,e){var r,a=o(t),c=0,u=[];for(r in a)r!=i&&n(a,r)&&u.push(r);for(;e.length>c;)n(a,r=e[c++])&&(~s(u,r)||u.push(r));return u}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(0),o=r(14),s=r(15),i=r(35),a=r(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=s?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:i.f(t)})}},function(t,e,r){e.f=r(1)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(32),o=r(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){r(2)&&"g"!=/./g.flags&&r(4).f(RegExp.prototype,"flags",{configurable:!0,get:r(28)})},function(t,e,r){"use strict";var n=r(40),o=r(41),s=r(19),i=r(10);t.exports=r(43)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},function(t,e,r){var n=r(1)("unscopables"),o=Array.prototype;void 0==o[n]&&r(3)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var n=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(15),o=r(30),s=r(9),i=r(3),a=r(19),c=r(46),u=r(24),d=r(52),l=r(1)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,f,_,g,m){c(r,e,f);var y,v,b,S=function(t){if(!h&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",x="values"==_,C=!1,E=t.prototype,k=E[l]||E["@@iterator"]||_&&E[_],N=k||S(_),P=_?x?S("entries"):N:void 0,T="Array"==e&&E.entries||k;if(T&&(b=d(T.call(new t)))!==Object.prototype&&b.next&&(u(b,w,!0),n||"function"==typeof b[l]||i(b,l,p)),x&&k&&"values"!==k.name&&(C=!0,N=function(){return k.call(this)}),n&&!m||!h&&!C&&E[l]||i(E,l,N),a[e]=N,a[w]=p,_)if(y={values:x?N:S("values"),keys:g?N:S("keys"),entries:P},m)for(v in y)v in E||s(E,v,y[v]);else o(o.P+o.F*(h||C),e,y);return y}},function(t,e,r){var n=r(45);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(31),o=r(13),s=r(24),i={};r(3)(i,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(i,{next:o(1,r)}),s(t,e+" Iterator")}},function(t,e,r){var n=r(4),o=r(7),s=r(16);t.exports=r(2)?Object.defineProperties:function(t,e){o(t);for(var r,i=s(e),a=i.length,c=0;a>c;)n.f(t,r=i[c++],e[r]);return t}},function(t,e,r){var n=r(10),o=r(49),s=r(50);t.exports=function(t){return function(e,r,i){var a,c=n(e),u=o(c.length),d=s(i,u);if(t&&r!=r){for(;u>d;)if((a=c[d++])!=a)return!0}else for(;u>d;d++)if((t||d in c)&&c[d]===r)return t||d||0;return!t&&-1}}},function(t,e,r){var n=r(33),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(33),o=Math.max,s=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):s(t,e)}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(5),o=r(53),s=r(22)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,r){var n=r(21);t.exports=function(t){return Object(n(t))}},function(t,e,r){r(34)("asyncIterator")},function(t,e,r){"use strict";var n=r(0),o=r(5),s=r(2),i=r(30),a=r(9),c=r(56).KEY,u=r(6),d=r(18),l=r(24),h=r(11),p=r(1),f=r(35),_=r(34),g=r(57),m=r(58),y=r(7),v=r(8),b=r(10),S=r(17),w=r(13),x=r(31),C=r(59),E=r(60),k=r(4),N=r(16),P=E.f,T=k.f,O=C.f,A=n.Symbol,$=n.JSON,j=$&&$.stringify,I=p("_hidden"),R=p("toPrimitive"),M={}.propertyIsEnumerable,L=d("symbol-registry"),F=d("symbols"),V=d("op-symbols"),W=Object.prototype,z="function"==typeof A,D=n.QObject,B=!D||!D.prototype||!D.prototype.findChild,U=s&&u(function(){return 7!=x(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=P(W,e);n&&delete W[e],T(t,e,r),n&&t!==W&&T(W,e,n)}:T,H=function(t){var e=F[t]=x(A.prototype);return e._k=t,e},G=z&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},q=function(t,e,r){return t===W&&q(V,e,r),y(t),e=S(e,!0),y(r),o(F,e)?(r.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),r=x(r,{enumerable:w(0,!1)})):(o(t,I)||T(t,I,w(1,{})),t[I][e]=!0),U(t,e,r)):T(t,e,r)},J=function(t,e){y(t);for(var r,n=g(e=b(e)),o=0,s=n.length;s>o;)q(t,r=n[o++],e[r]);return t},K=function(t){var e=M.call(this,t=S(t,!0));return!(this===W&&o(F,t)&&!o(V,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,I)&&this[I][t])||e)},Y=function(t,e){if(t=b(t),e=S(e,!0),t!==W||!o(F,e)||o(V,e)){var r=P(t,e);return!r||!o(F,e)||o(t,I)&&t[I][e]||(r.enumerable=!0),r}},Q=function(t){for(var e,r=O(b(t)),n=[],s=0;r.length>s;)o(F,e=r[s++])||e==I||e==c||n.push(e);return n},X=function(t){for(var e,r=t===W,n=O(r?V:b(t)),s=[],i=0;n.length>i;)!o(F,e=n[i++])||r&&!o(W,e)||s.push(F[e]);return s};z||(a((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===W&&e.call(V,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),U(this,t,w(1,r))};return s&&B&&U(W,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),E.f=Y,k.f=q,r(37).f=C.f=Q,r(25).f=K,r(36).f=X,s&&!r(15)&&a(W,"propertyIsEnumerable",K,!0),f.f=function(t){return H(p(t))}),i(i.G+i.W+i.F*!z,{Symbol:A});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)p(Z[tt++]);for(var et=N(p.store),rt=0;et.length>rt;)_(et[rt++]);i(i.S+i.F*!z,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=A(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),i(i.S+i.F*!z,"Object",{create:function(t,e){return void 0===e?x(t):J(x(t),e)},defineProperty:q,defineProperties:J,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),$&&i(i.S+i.F*(!z||u(function(){var t=A();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(v(e)||void 0!==t)&&!G(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!G(e))return e}),n[1]=e,j.apply($,n)}}),A.prototype[R]||r(3)(A.prototype,R,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},function(t,e,r){var n=r(11)("meta"),o=r(8),s=r(5),i=r(4).f,a=0,c=Object.isExtensible||function(){return!0},u=!r(6)(function(){return c(Object.preventExtensions({}))}),d=function(t){i(t,n,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,n)){if(!c(t))return"F";if(!e)return"E";d(t)}return t[n].i},getWeak:function(t,e){if(!s(t,n)){if(!c(t))return!0;if(!e)return!1;d(t)}return t[n].w},onFreeze:function(t){return u&&l.NEED&&c(t)&&!s(t,n)&&d(t),t}}},function(t,e,r){var n=r(16),o=r(36),s=r(25);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var i,a=r(t),c=s.f,u=0;a.length>u;)c.call(t,i=a[u++])&&e.push(i);return e}},function(t,e,r){var n=r(20);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(10),o=r(37).f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?function(t){try{return o(t)}catch(t){return i.slice()}}(t):o(n(t))}},function(t,e,r){var n=r(25),o=r(13),s=r(10),i=r(17),a=r(5),c=r(26),u=Object.getOwnPropertyDescriptor;e.f=r(2)?u:function(t,e){if(t=s(t),e=i(e,!0),c)try{return u(t,e)}catch(t){}if(a(t,e))return o(!n.f.call(t,e),t[e])}},function(t,e,r){r(62)("split",2,function(t,e,n){"use strict";var o=r(63),s=n,i=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];n=function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return s.call(r,t,e);var n,c,u,d,l,h=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,_=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,p+"g");for(a||(n=new RegExp("^"+g.source+"$(?!\\s)",p));(c=g.exec(r))&&!((u=c.index+c[0].length)>f&&(h.push(r.slice(f,c.index)),!a&&c.length>1&&c[0].replace(n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c.length>1&&c.index<r.length&&i.apply(h,c.slice(1)),d=c[0].length,f=u,h.length>=_));)g.lastIndex===c.index&&g.lastIndex++;return f===r.length?!d&&g.test("")||h.push(""):h.push(r.slice(f)),h.length>_?h.slice(0,_):h}}else"0".split(void 0,0).length&&(n=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(r,o){var s=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,s,o):n.call(String(s),r,o)},n]})},function(t,e,r){"use strict";var n=r(3),o=r(9),s=r(6),i=r(21),a=r(1);t.exports=function(t,e,r){var c=a(t),u=r(i,c,""[t]),d=u[0],l=u[1];s(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,d),n(RegExp.prototype,c,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},function(t,e,r){var n=r(8),o=r(20),s=r(1)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},function(t,e,r){"use strict";r.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=t=>"function"==typeof t&&n.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},a={},c={},u=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${u}--\x3e`,l=new RegExp(`${u}|${d}`),h="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const r=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let s=0,i=-1,a=0;const{strings:c,values:{length:d}}=t;for(;a<d;){const t=o.nextNode();if(null!==t){if(i++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)f(e[t].name,h)&&n++;for(;n-- >0;){const e=c[a],r=m.exec(e)[2],n=r.toLowerCase()+h,o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(l);this.parts.push({type:"attribute",index:i,name:r,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(u)>=0){const n=t.parentNode,o=e.split(l),s=o.length-1;for(let e=0;e<s;e++){let r,s=o[e];if(""===s)r=g();else{const t=m.exec(s);null!==t&&f(t[2],h)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),r=document.createTextNode(s)}n.insertBefore(r,t),this.parts.push({type:"node",index:++i})}""===o[s]?(n.insertBefore(g(),t),r.push(t)):t.data=o[s],a+=s}}else if(8===t.nodeType)if(t.data===u){const e=t.parentNode;null!==t.previousSibling&&i!==s||(i++,e.insertBefore(g(),t)),s=i,this.parts.push({type:"node",index:i}),null===t.nextSibling?t.data="":(r.push(t),i--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(u,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const t of r)t.parentNode.removeChild(t)}}const f=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},_=t=>-1!==t.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,i=0,a=0,c=n.nextNode();for(;i<r.length;)if(o=r[i],_(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=e.pop(),c=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${u} `;class b{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===t.indexOf("--\x3e",o+1);const s=m.exec(t);e+=null===s?t+(r?v:d):t.substr(0,s.index)+s[1]+s[2]+h+s[3]+u}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let n=0;n<e;n++){r+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(S(t)||!w(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||S(t)&&t===this.value||(this.value=t,o(t)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const r=new y(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const o of t)void 0===(r=e[n])&&(r=new E(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(o),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class N extends x{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends C{}let T=!1;try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class O{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;o(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new class{handleAttributeExpressions(t,e,r,n){const o=e[0];return"."===o?new N(t,e.slice(1),r).parts:"@"===o?[new O(t,e.slice(1),n.eventContext)]:"?"===o?[new k(t,e.slice(1),r)]:new x(t,e,r).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function j(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(u);return void 0===(r=e.keyString.get(n))&&(r=new p(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const I=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(t,...e)=>new b(t,e,"html",$),L=133;function F(t,e){const{element:{content:r},parts:n}=t,o=document.createTreeWalker(r,L,null,!1);let s=W(n),i=n[s],a=-1,c=0;const u=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(u.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==i&&i.index===a;)i.index=null!==d?-1:i.index-c,i=n[s=W(n,s)]}u.forEach(t=>t.parentNode.removeChild(t))}const V=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,L,null,!1);for(;r.nextNode();)e++;return e},W=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(_(e))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const B=["html","svg"],U=new Set,H=(t,e,r)=>{U.add(t);const n=r?r.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const i=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}(t=>{B.forEach(e=>{const r=I.get(z(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),F(t,r)})})})(t);const a=n.content;r?function(t,e,r=null){const{element:{content:n},parts:o}=t;if(null===r||void 0===r)return void n.appendChild(e);const s=document.createTreeWalker(n,L,null,!1);let i=W(o),a=0,c=-1;for(;s.nextNode();)for(c++,s.currentNode===r&&(a=V(e),r.parentNode.insertBefore(e,r));-1!==i&&o[i].index===c;){if(a>0){for(;-1!==i;)o[i].index+=a,i=W(o,i);return}i=W(o,i)}}(r,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(i,a.firstChild);const t=new Set;t.add(i),F(r,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const G={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:q},K=Promise.resolve(!0),Y=1,Q=4,X=8,Z=16,tt=32,et="finalized";class rt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const n=this[t];this[r]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(et)||t.finalize(),this[et]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=q){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||G,o="function"==typeof n?n:n.fromAttribute;return o?o(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||G.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=J){const n=this.constructor,o=n._attributeNameForProperty(t,r);if(void 0!==o){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=this._updateState|X,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~X}}_attributeToProperty(t,e){if(this._updateState&X)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r._classProperties.get(n)||J;this._updateState=this._updateState|Z,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const n=this.constructor,o=n._classProperties.get(t)||J;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{t=r,e=n});try{await r}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}rt[et]=!0;const nt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol();class st{constructor(t,e){if(e!==ot)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const r=e.reduce((e,r,n)=>e+(t=>{if(t instanceof st)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1],t[0]);return new st(r,ot)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const at=t=>t.flat?t.flat(1/0):function t(e,r=[]){for(let n=0,o=e.length;n<o;n++){const o=e[n];Array.isArray(o)?t(o,r):r.push(o)}return r}(t);class ct extends rt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){at(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ct.finalized=!0,ct.render=((t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=R.has(e),s=D&&11===e.nodeType&&!!e.host,a=s&&!U.has(n),c=a?document.createDocumentFragment():e;if(((t,e,r)=>{let n=R.get(e);void 0===n&&(i(e,e.firstChild),R.set(e,n=new E(Object.assign({templateFactory:j},r))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:(t=>e=>{const r=z(e.type,t);let n=I.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},I.set(r,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const s=e.strings.join(u);if(void 0===(o=n.keyString.get(s))){const r=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(r,t),o=new p(e,r),n.keyString.set(s,o)}return n.stringsArray.set(e.strings,o),o})(n)},r)),a){const t=R.get(c);R.delete(c);const r=t.value instanceof y?t.value.template:void 0;H(n,c,r),i(e,e.firstChild),e.appendChild(c),R.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)});r(12);const ut=(t,e)=>{window.dispatchEvent(new CustomEvent("customNavigate",{detail:{page:t,data:e},bubbles:!0,composed:!0}))},dt=(t,e,r)=>{window.dispatchEvent(new CustomEvent("updateStudentError",{detail:{student:t,word:e,error:r},bubbles:!0,composed:!0}))},lt=t=>{console.log(" in listMostCommonErrors"),console.log("scoreCards :",t)};r(29);class ht{constructor(t,e){this.__errorName=t,this.__errorId=e}get errorName(){return this.__errorName}get errorId(){return this.__errorId}get error(){return{errorName:this.__errorName,errorId:this.__errorId}}get toString(){return`${this.__errorId}. ${this.__errorName}`}}class pt{constructor(t,e){this.__studentName=t,this.__studentId=e}get studentName(){return this.__studentName}get studentId(){return this.__studentId}get student(){return{studentName:this.__studentName,studentId:this.__studentId}}get toString(){return`${this.__studentId}. ${this.__studentName}`}}const ft=["6A","6B"],_t={"6A":["Lina","Chiel","Oscar","Quinten","Karolina","Maxime","Matisse","Romik","Suhelija","Jerome","Yana","Genevaldo","Lou","Dries","Maaike","Seppe","Jaane","Lena"],"6B":["Abdulraheem","Kaat","Ines","Jolien","Anna","Floor","Sourik","Maiko","Kenji","Jade","Getuar","Marie","Odette","Julian","Hannah","Quinten","Matin"]},gt=[{word:"station",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"tio"}]},{word:"gezondheid",errors:[{fiche:"10",error:"d"},{fiche:"13",error:"dh"}]},{word:"kwaliteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]},{word:"precies",errors:[{fiche:"18",error:"c"}]},{word:"Belgisch",errors:[{fiche:"11",error:"B"},{fiche:"18",error:"isch"}]},{word:"misschien",errors:[{fiche:"18",error:"i"},{fiche:"18",error:"ss"},{fiche:"5",error:"sch"}]},{word:"oceaan",errors:[{fiche:"13",error:"o"},{fiche:"13",error:"e"},{fiche:"18",error:"c"}]},{word:"geëindigd",errors:[{fiche:"10",error:"d"},{fiche:"18",error:"ë"},{fiche:"19",error:"d"}]},{word:"materiaal",errors:[{fiche:"13",error:"t"},{fiche:"13",error:"e"},{fiche:"18",error:"iaal"}]},{word:"restaurant",errors:[{fiche:"18",error:"au"}]},{word:"relatie",errors:[{fiche:"12",error:"re"},{fiche:"13",error:"a"},{fiche:"18",error:"tie"}]},{word:"verbindt",errors:[{fiche:"19",error:"dt"}]},{word:"circa",errors:[{fiche:"18",error:"c"}]},{word:"advocaat",errors:[{fiche:"10",error:"t"},{fiche:"13",error:"o"},{fiche:"18",error:"d"},{fiche:"18",error:"c"}]},{word:"drama's",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"'s"}]},{word:"dialoog",errors:[{fiche:"13",error:"a"},{fiche:"15",error:"g"},{fiche:"18",error:"i"}]},{word:"portie",errors:[{fiche:"18",error:"tie"}]},{word:"sneed",errors:[{fiche:"19",error:"d"}]},{word:"knieën",errors:[{fiche:"18",error:"ë"}]},{word:"realiteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"e"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]}],mt=["d/dt","ij/ei","au/ou"];customElements.define("student-list-component",class extends ct{static get properties(){return{students:Array,schoolClass:String}}connectedCallback(){super.connectedCallback(),this.students=function(t){return _t[t].map((t,e)=>new pt(t,e+1))}(this.schoolClass)}__goToDetailsPage(t){ut("details",t)}_renderStudentNavigation(t,e){return M`
      <h2 @click=${t=>this.__goToDetailsPage(e)}>${t}</h2>
    `}_renderStudentCard(t){return M`
      <div class="pointer card" @click=${e=>this.__goToDetailsPage(t)}>
        ${t.toString}
      </div>
    `}render(){return M` 
     ${this.students.map(t=>this._renderStudentCard(t))}
    `}static get styles(){return it`
      .pointer {
        cursor: pointer
      }

      .card {
        width: 30%;
        margin: 10px;
        padding: 2px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 2px;
        background-color: #f5f5f6;
      }
      
      .card:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background-color: #c9c9c9;
      }
    `}});customElements.define("home-page",class extends ct{render(){return M`
      <h2>
        Welcome
      </h2>

      <h3>
        Intention of this application
      </h3>

      <p>
        This application is intended to make the life of teachers easier, and hopefully in the future redundant.
      </p>

      <p>
        It is still very much in development by a person who converts coffee in lines of code. 
      </p>
    `}});let yt;customElements.define("class-list-component",class extends ct{__goToStudentListPage(t){window.dispatchEvent(new CustomEvent("scoringNext",{detail:{schoolClass:t,pageToGoTo:"student-list"},bubbles:!0,composed:!0}))}_renderSchoolClassCard(t){return M`
      <div class="pointer card" @click=${e=>this.__goToStudentListPage(t)}>
        ${t}
      </div>
    `}render(){return M` 
     ${ft.map(t=>this._renderSchoolClassCard(t))}
    `}static get styles(){return it`
      .pointer {
        cursor: pointer
      }

      .card {
        width: 30%;
        margin: 10px;
        padding: 2px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 2px;
        background-color: #f5f5f6;
      }
      
      .card:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background-color: #c9c9c9;
      }
    `}});customElements.define("scoring-page",class extends ct{static get properties(){return{pageToGoTo:String,pages:Array,schoolClass:String}}constructor(){super(),this.pageToGoTo="class-list",this.pages=["class-list","student-list","scoring-sheet"]}connectedCallback(){super.connectedCallback(),window.addEventListener("scoringNext",yt=(t=>this.__scoringListener(t)))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scoringNext",yt)}__scoringListener(t){this.pageToGoTo=t.detail.pageToGoTo,this.schoolClass=t.detail.schoolClass}render(){return"class-list"===this.pageToGoTo?M`
      <class-list-component></class-list-component>
      `:"student-list"===this.pageToGoTo?M`
          <student-list-component .schoolClass=${this.schoolClass}></student-list-component>
        `:void 0}});customElements.define("scoring-sheet-component",class extends ct{static get properties(){return{student:Object,errors:Array,words:Array,fiches:Array}}constructor(){super(),this.errors=mt.map((t,e)=>new ht(t,e)),this.words=gt.map(t=>t.word),this.fiches=function(t){return[...new Set((t||gt).map(t=>t.errors.map(t=>t.fiche)).flat(1/0))].sort((t,e)=>+t-+e)}()}__checkboxClicked(t,e,r){const n=t.path[0];"green"!==n.style.background?n.style.background="green":n.style.background="",dt(this.student,e,r)}__goToScoring(){ut("scoring")}__renderWordErrorForFiche(t,e,r){const n=gt[gt.findIndex(e=>e.word===t)].errors,o=n[n.findIndex(t=>t.fiche===e)];return o?M`<td class="clickable" @click=${r=>this.__checkboxClicked(r,t,e)}>${o.error}</td>`:M`<td class="not-clickable"></td>`}render(){return M` 
    <h2>${this.student.studentName}</h2>
    <button @click=${this.__goToScoring}>Select an other student</button>
      <table>
        <tr>
          <th></th>
          ${this.fiches.map(t=>M`<th>${t}</th>`)}
        </tr>
        ${this.words.map(t=>M`
            <tr>
              <td>
                ${t}
              </td>
              ${this.fiches.map((e,r)=>this.__renderWordErrorForFiche(t,e,r))}
            </tr>
          `)}
      </table>

    `}static get styles(){return it`
      table {
        width: 100%;
        
      }

      td {
        text-align: center
      }

      table tr td{
        border: 1px solid black;
      }

      tr td:first-child {
        text-align: left;
        padding-left: 5px;
      }

      .clickable {
        cursor: pointer;
      }

      .clickable:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border: 1px solid green;
        background: green;
      }
      
      .not-clickable {
        background: #52506b;
      }
    `}});customElements.define("details-page",class extends ct{static get properties(){return{student:Object}}render(){return M`
      <scoring-sheet-component .student=${this.student}></scoring-sheet-component>
    `}});const vt=t=>M`
    <style>
      .word-title {
        padding-left: 5%;
      }

      .error-title {
        padding-left: 10%;
      }
    </style>
    <div class="word-title"><b>${t.word.toString}</b></div>
    <div class="error-title">${t.errors.map(t=>(t=>M`
    <div>${t.toString}</div>
  `)(t))}</div>
  `,bt=t=>{if(t.length>0)return M`
      ${t.map(t=>(t=>M`
    <h3>${t.student.toString}</h3>
    ${t.wordErrors.map(t=>vt(t))}


  `)(t))}
    `};customElements.define("summary-page",class extends ct{properties(){return{scoreCards:Object,__mostCommonErrors:Array}}connectedCallback(){super.connectedCallback(),this.__mostCommonErrors=lt(this.scoreCards)}render(){return M`
      <h2>Here is the summary of all the scores</h2>
      ${bt(this.scoreCards.scoreCards)}
    `}});const St=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let wt,xt=0;customElements.define("about-page",class extends ct{connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownCallback)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.keyDownCallback)}keyDownCallback(t){t.key!==St[xt++]&&(xt=0),xt===St.length&&(()=>{ut("home");const t=document.createElement("style");t.innerHTML="html {\n          -webkit-animation:spin 1s linear infinite;\n          -moz-animation:spin 1s linear infinite;\n          animation:spin 1s linear infinite;\n      }\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }",document.body.appendChild(t)})()}render(){return M`
      <p>
        Created by Yoran Cobben (github.com/phasic)
      </p>
    `}});customElements.define("side-navigation",class extends ct{connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_clicked(t){t.path[0]!==this.shadowRoot.getElementById("mySidenav")&&t.path[0]!==this.shadowRoot.getElementById("menubtn")&&this.opened&&this.__closeNav()}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px",window.addEventListener("click",wt=(t=>this._clicked(t))),this.opened=!0}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0",window.removeEventListener("click",wt),this.opened=!1}__navigate(t){this.__closeNav(),ut(t)}render(){return M`
     <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click=${this.__closeNav}>&times;</a>
        <a href="#" @click=${()=>this.__navigate("home")}>Home</a>
        <a href="#" @click=${()=>this.__navigate("scoring")}>Enter results</a>
        <a href="#" @click=${()=>this.__navigate("summary")}>Summary</a>
        <a href="#" @click=${()=>this.__navigate("about")}>About</a>
      </div>
      <div id="menubtn" class="menubtn" @click=${this.__openNav}>&#9776; Menu</div>
    `}static get styles(){return[it`
      .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
      }
      
      .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
      }
      
      .sidenav a:hover {
        color: #f1f1f1;
      }
      
      .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }

      .menubtn {
        font-size: 20px;
        cursor: pointer;
        padding-top: 5px;
      }
      `]}});const Ct={scoring:"Select a student",details:"Enter results"};customElements.define("header-bar",class extends ct{static get properties(){return{pageTitle:String}}__navigate(t){this.__closeNav(),ut(t)}render(){return M`
    <header class="flex space-between">
      <side-navigation></side-navigation>
        <div class="flex">
          <span>
            <h1>${Ct[this.pageTitle]||this.pageTitle}</h1>
          </span>
        </div>
    </header>
      
      

    `}static get styles(){return[it`
        header {
          background: #673ab7;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          padding: 5px;
          margin: 0;
        }

        .flex {
          display: flex;
        }

        .flex.space-between {
          justify-content: space-between;
        }

        h1 {
          margin: 0;
          border-left: 2px solid #7e5cb8;
          padding-left: 5px;
          text-transform: capitalize;
          
        }
      `]}});customElements.define("app-shell",class extends ct{static get properties(){return{page:String}}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px"}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0"}render(){return M`

      <header-bar .pageTitle=${this.page}>
      </header-bar>
      <div class="main">
        <slot></slot>
      </div>
     
    `}static get styles(){return[it`
        .main {
          margin: 8px;
        }
      `]}});r(54),r(55);function Et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,s=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class kt{constructor(t,e,r){this.__scoreCard={student:t,wordErrors:[{word:e,errors:[r]}]}}get scoreCard(){return this.__scoreCard}get student(){return this.__scoreCard.student}get wordErrors(){return this.__scoreCard.wordErrors}get toString(){return`${this.student.toString} : ${this.__toStringWordErrors()}`}__toStringWordErrors(){return this.__scoreCard.wordErrors.reduce((t,e)=>`${t} - ${e.word.toString} --\x3e ${this.__toStringErrors(e.errors)}`,"")}__toStringErrors(t){return t.reduce((t,e)=>`${t}${e.toString}`,"")}updateWordError(t,e){const r=Et(this.__scoreCard.wordErrors.filter(e=>e.word.wordId===t.wordId),1)[0];r?this.__scoreCard=this.__updateWordError(this.__scoreCard,r,e):this.__addWordError(t,e)}__updateWordError(t,e,r){const n=t.wordErrors[this.__findWordErrorIndexByWord(e.word)].errors;let o=Et(n.filter(t=>t.errorId===r.errorId),1)[0];return o?n.splice(this.__findErrorsIndexByError(n,o),1):n.push(r),t}__addWordError(t,e){this.__scoreCard.wordErrors.push({word:t,errors:[e]})}__findWordErrorIndexByWord(t){return this.__scoreCard.wordErrors.findIndex(e=>e.word.wordId===t.wordId)}__findErrorsIndexByError(t,e){return t.findIndex(t=>t.errorId===e.errorId)}}class Nt{constructor(){this.__scoreCards=[]}get scoreCards(){return this.__scoreCards}get toString(){return this.__scoreCards.reduce((t,e)=>`${t}\n${e.toString}`,"")}updateStudentScoreCard(t,e,r){this.__studentExistsInScoreCards(t)?this.__updateStudentScoreCard(t,e,r):this.__addScoreCard(t,e,r)}__addScoreCard(t,e,r){this.__scoreCards.push(new kt(t,e,r))}__studentExistsInScoreCards(t){return!!this.__scoreCards.filter(e=>e.student.studentName===t.studentName).length}__updateStudentScoreCard(t,e,r){this.__findStudentScoreCard(t).updateWordError(e,r)}__findStudentScoreCard(t){return this.__scoreCards.filter(e=>e.student.studentName===t.studentName)[0]}__findMatchingScoreCardAndRemove(t){this.__scoreCards=this.__scoreCards.filter(e=>e.student.studentName!==t.student.studentName)}}customElements.define("app-component",class extends ct{static get properties(){return{page:String,__pageHistory:Array,routeMap:Object,scoreCards:Object,reRender:Boolean,__routeToRender:Object,__routeData:Object}}constructor(){super(),this.__initializeData(),this.__initializeRouter()}connectedCallback(){super.connectedCallback(),this.__initializeRouteListeners()}render(){return M`
      <app-shell .page=${this.page}>
        ${this.__routeToRender}
      </app-shell>
    `}updated(t){t.has("page")&&this.__pageHistory.push(this.page)}__initializeData(){this.scoreCards=new Nt,this.__pageHistory=[]}__initializeRouter(){this.__reparseRouteMap(),this.page="home",this.__routeToRender=this.routeMap[this.page]}__reparseRouteMap(){this.routeMap={home:M`<home-page></home-page>`,scoring:M`<scoring-page></scoring-page>`,details:M`<details-page .student=${this.__routeData}></details-page>`,summary:M`<summary-page .scoreCards=${this.scoreCards}></summary-page>`,about:M`<about-page></about-page>`}}__initializeRouteListeners(){const t=t=>{"back"===t.page&&this.__pageHistory.length>1?(this.page=this.__pageHistory.pop(),this.page=this.__pageHistory.pop()):"back"!==t.page&&(this.__routeData=t.data,this.__routeData&&this.__reparseRouteMap(),this.page=t.page),this.__routeToRender=this.routeMap[this.page],this.__routeData=void 0};window.addEventListener("customNavigate",e=>t(e.detail)),window.addEventListener("updateStudentError",t=>this.__processStudentError(t.detail))}__processStudentError(t){let e=t.student,r=t.word,n=t.error;this.scoreCards.updateStudentScoreCard(e,r,n),this.reRender=!this.reRender}});r(61);customElements.define("jens-krijgt-zijn-goesting",class extends ct{static get properties(){return{data:Array,currentWord:String,currentFiche:String,currentFout:String,reRender:Boolean}}constructor(){super(),this.data=[],this.currentWord="",this.currentFiche="",this.currentFout="",this.reRender=!1}_append(t,e){this[t]=e.target.value}__submitWord(){this.currentWord&&-1===this.data.findIndex(t=>t.word===this.currentWord)&&(this.data.push({word:this.currentWord,errors:[]}),this.reRender=!this.reRender)}__submitFout(){const t=this.data[this.data.findIndex(t=>t.word===this.currentWord)];if(-1===t.errors.findIndex(t=>t.fiche===this.currentFiche)){const e=this.currentFout.split(",").map(t=>({fiche:this.currentFiche,error:t}));t.errors.push(e),this.reRender=!this.reRender}}render(){return M`
    <h2>Word</h2>
    <input
      type="text"
      .value=${this.currentWord}
      @input=${t=>this._append("currentWord",t)}
    />
    <button type="button" @click=${this.__submitWord}>Voeg woord toe</button>

    <h2>
      Fout
    </h2>
    <label>Fiche</label>
    <input
      type="text"
      .value=${this.currentFiche}
      @input=${t=>this._append("currentFiche",t)}
    />
    <br>
    <label>Fout</label>
    <input
      type="text"
      .value=${this.currentFout}
      @input=${t=>this._append("currentFout",t)}
    />

    <button type="button" @click=${this.__submitFout}>Voeg toe</button>


<br><br>
    <div>
      Current Word: ${this.currentWord}

      <br>
      Current fiche: ${this.currentFiche}
      <br>
      Current fout: ${this.currentFout}

      <br><br>
      Data:
      <br>
      ${JSON.stringify(this.data)}
    </div>

    `}})}]);