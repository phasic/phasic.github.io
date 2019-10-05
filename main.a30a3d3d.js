!function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=61)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){t.exports=!r(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(6),s=r(24),o=r(17),i=Object.defineProperty;e.f=r(1)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),s)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(2),s=r(13);t.exports=r(1)?function(t,e,r){return n.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(18)("wks"),s=r(12),o=r(0).Symbol,i="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=i&&o[t]||(i?o:s)("Symbol."+t))}).store=n},function(t,e,r){var n=r(10);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(44),s=r(32);t.exports=function(t){return n(s(t))}},function(t,e,r){"use strict";r(37);var n=r(6),s=r(26),o=r(1),i=/./.toString,a=function(t){r(11)(RegExp.prototype,"toString",t,!0)};r(9)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?a(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):"toString"!=i.name&&a(function(){return i.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(0),s=r(3),o=r(4),i=r(12)("src"),a=Function.toString,c=(""+a).split("toString");r(14).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,r,a){var u="function"==typeof r;u&&(o(r,"name")||s(r,"name",e)),t[e]!==r&&(u&&(o(r,i)||s(r,i,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=r:a?t[e]?t[e]=r:s(t,e,r):(delete t[e],s(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||a.call(this)})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=!1},function(t,e,r){var n=r(30),s=r(21);t.exports=Object.keys||function(t){return n(t,s)}},function(t,e,r){var n=r(10);t.exports=function(t,e){if(!n(t))return t;var r,s;if(e&&"function"==typeof(r=t.toString)&&!n(s=r.call(t)))return s;if("function"==typeof(r=t.valueOf)&&!n(s=r.call(t)))return s;if(!e&&"function"==typeof(r=t.toString)&&!n(s=r.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(14),s=r(0),o=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(2).f,s=r(4),o=r(5)("toStringTag");t.exports=function(t,e,r){t&&!s(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){var n=r(18)("keys"),s=r(12);t.exports=function(t){return n[t]||(n[t]=s(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports={}},function(t,e,r){t.exports=!r(1)&&!r(9)(function(){return 7!=Object.defineProperty(r(25)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(10),s=r(0).document,o=n(s)&&n(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},function(t,e,r){"use strict";var n=r(6);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(0),s=r(14),o=r(15),i=r(28),a=r(2).f;t.exports=function(t){var e=s.Symbol||(s.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:i.f(t)})}},function(t,e,r){e.f=r(5)},function(t,e,r){var n=r(0),s=r(14),o=r(3),i=r(11),a=r(40),c=function(t,e,r){var u,d,l,p,h=t&c.F,f=t&c.G,_=t&c.S,m=t&c.P,g=t&c.B,y=f?n:_?n[e]||(n[e]={}):(n[e]||{}).prototype,v=f?s:s[e]||(s[e]={}),S=v.prototype||(v.prototype={});for(u in f&&(r=e),r)l=((d=!h&&y&&void 0!==y[u])?y:r)[u],p=g&&d?a(l,n):m&&"function"==typeof l?a(Function.call,l):l,y&&i(y,u,l,t&c.U),v[u]!=l&&o(v,u,p),m&&S[u]!=l&&(S[u]=l)};n.core=s,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(4),s=r(7),o=r(45)(!1),i=r(20)("IE_PROTO");t.exports=function(t,e){var r,a=s(t),c=0,u=[];for(r in a)r!=i&&n(a,r)&&u.push(r);for(;e.length>c;)n(a,r=e[c++])&&(~o(u,r)||u.push(r));return u}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(6),s=r(49),o=r(21),i=r(20)("IE_PROTO"),a=function(){},c=function(){var t,e=r(25)("iframe"),n=o.length;for(e.style.display="none",r(50).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[o[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(a.prototype=n(t),r=new a,a.prototype=null,r[i]=t):r=c(),void 0===e?r:s(r,e)}},function(t,e,r){var n=r(30),s=r(21).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},function(t,e,r){r(1)&&"g"!=/./g.flags&&r(2).f(RegExp.prototype,"flags",{configurable:!0,get:r(26)})},function(t,e,r){r(27)("asyncIterator")},function(t,e,r){"use strict";var n=r(0),s=r(4),o=r(1),i=r(29),a=r(11),c=r(42).KEY,u=r(9),d=r(18),l=r(19),p=r(12),h=r(5),f=r(28),_=r(27),m=r(43),g=r(48),y=r(6),v=r(10),S=r(7),b=r(17),w=r(13),x=r(35),C=r(51),E=r(52),N=r(2),P=r(16),k=E.f,O=N.f,T=C.f,A=n.Symbol,j=n.JSON,I=j&&j.stringify,M=h("_hidden"),$=h("toPrimitive"),R={}.propertyIsEnumerable,L=d("symbol-registry"),V=d("symbols"),F=d("op-symbols"),z=Object.prototype,U="function"==typeof A,D=n.QObject,W=!D||!D.prototype||!D.prototype.findChild,B=o&&u(function(){return 7!=x(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=k(z,e);n&&delete z[e],O(t,e,r),n&&t!==z&&O(z,e,n)}:O,H=function(t){var e=V[t]=x(A.prototype);return e._k=t,e},q=U&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},J=function(t,e,r){return t===z&&J(F,e,r),y(t),e=b(e,!0),y(r),s(V,e)?(r.enumerable?(s(t,M)&&t[M][e]&&(t[M][e]=!1),r=x(r,{enumerable:w(0,!1)})):(s(t,M)||O(t,M,w(1,{})),t[M][e]=!0),B(t,e,r)):O(t,e,r)},G=function(t,e){y(t);for(var r,n=m(e=S(e)),s=0,o=n.length;o>s;)J(t,r=n[s++],e[r]);return t},K=function(t){var e=R.call(this,t=b(t,!0));return!(this===z&&s(V,t)&&!s(F,t))&&(!(e||!s(this,t)||!s(V,t)||s(this,M)&&this[M][t])||e)},Y=function(t,e){if(t=S(t),e=b(e,!0),t!==z||!s(V,e)||s(F,e)){var r=k(t,e);return!r||!s(V,e)||s(t,M)&&t[M][e]||(r.enumerable=!0),r}},Q=function(t){for(var e,r=T(S(t)),n=[],o=0;r.length>o;)s(V,e=r[o++])||e==M||e==c||n.push(e);return n},X=function(t){for(var e,r=t===z,n=T(r?F:S(t)),o=[],i=0;n.length>i;)!s(V,e=n[i++])||r&&!s(z,e)||o.push(V[e]);return o};U||(a((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===z&&e.call(F,r),s(this,M)&&s(this[M],t)&&(this[M][t]=!1),B(this,t,w(1,r))};return o&&W&&B(z,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),E.f=Y,N.f=J,r(36).f=C.f=Q,r(22).f=K,r(34).f=X,o&&!r(15)&&a(z,"propertyIsEnumerable",K,!0),f.f=function(t){return H(h(t))}),i(i.G+i.W+i.F*!U,{Symbol:A});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=P(h.store),rt=0;et.length>rt;)_(et[rt++]);i(i.S+i.F*!U,"Symbol",{for:function(t){return s(L,t+="")?L[t]:L[t]=A(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),i(i.S+i.F*!U,"Object",{create:function(t,e){return void 0===e?x(t):G(x(t),e)},defineProperty:J,defineProperties:G,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),j&&i(i.S+i.F*(!U||u(function(){var t=A();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],s=1;arguments.length>s;)n.push(arguments[s++]);if(r=e=n[1],(v(e)||void 0!==t)&&!q(t))return g(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!q(e))return e}),n[1]=e,I.apply(j,n)}}),A.prototype[$]||r(3)(A.prototype,$,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},function(t,e,r){var n=r(41);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,s){return t.call(e,r,n,s)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(12)("meta"),s=r(10),o=r(4),i=r(2).f,a=0,c=Object.isExtensible||function(){return!0},u=!r(9)(function(){return c(Object.preventExtensions({}))}),d=function(t){i(t,n,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!c(t))return"F";if(!e)return"E";d(t)}return t[n].i},getWeak:function(t,e){if(!o(t,n)){if(!c(t))return!0;if(!e)return!1;d(t)}return t[n].w},onFreeze:function(t){return u&&l.NEED&&c(t)&&!o(t,n)&&d(t),t}}},function(t,e,r){var n=r(16),s=r(34),o=r(22);t.exports=function(t){var e=n(t),r=s.f;if(r)for(var i,a=r(t),c=o.f,u=0;a.length>u;)c.call(t,i=a[u++])&&e.push(i);return e}},function(t,e,r){var n=r(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(7),s=r(46),o=r(47);t.exports=function(t){return function(e,r,i){var a,c=n(e),u=s(c.length),d=o(i,u);if(t&&r!=r){for(;u>d;)if((a=c[d++])!=a)return!0}else for(;u>d;d++)if((t||d in c)&&c[d]===r)return t||d||0;return!t&&-1}}},function(t,e,r){var n=r(33),s=Math.min;t.exports=function(t){return t>0?s(n(t),9007199254740991):0}},function(t,e,r){var n=r(33),s=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?s(t+e,0):o(t,e)}},function(t,e,r){var n=r(31);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(2),s=r(6),o=r(16);t.exports=r(1)?Object.defineProperties:function(t,e){s(t);for(var r,i=o(e),a=i.length,c=0;a>c;)n.f(t,r=i[c++],e[r]);return t}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(7),s=r(36).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?function(t){try{return s(t)}catch(t){return i.slice()}}(t):s(n(t))}},function(t,e,r){var n=r(22),s=r(13),o=r(7),i=r(17),a=r(4),c=r(24),u=Object.getOwnPropertyDescriptor;e.f=r(1)?u:function(t,e){if(t=o(t),e=i(e,!0),c)try{return u(t,e)}catch(t){}if(a(t,e))return s(!n.f.call(t,e),t[e])}},function(t,e,r){for(var n=r(54),s=r(16),o=r(11),i=r(0),a=r(3),c=r(23),u=r(5),d=u("iterator"),l=u("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(h),_=0;_<f.length;_++){var m,g=f[_],y=h[g],v=i[g],S=v&&v.prototype;if(S&&(S[d]||a(S,d,p),S[l]||a(S,l,g),c[g]=p,y))for(m in n)S[m]||o(S,m,n[m],!0)}},function(t,e,r){"use strict";var n=r(55),s=r(56),o=r(23),i=r(7);t.exports=r(57)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,s(1)):s(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){var n=r(5)("unscopables"),s=Array.prototype;void 0==s[n]&&r(3)(s,n,{}),t.exports=function(t){s[n][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n=r(15),s=r(29),o=r(11),i=r(3),a=r(23),c=r(58),u=r(19),d=r(59),l=r(5)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,r,f,_,m,g){c(r,e,f);var y,v,S,b=function(t){if(!p&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",x="values"==_,C=!1,E=t.prototype,N=E[l]||E["@@iterator"]||_&&E[_],P=N||b(_),k=_?x?b("entries"):P:void 0,O="Array"==e&&E.entries||N;if(O&&(S=d(O.call(new t)))!==Object.prototype&&S.next&&(u(S,w,!0),n||"function"==typeof S[l]||i(S,l,h)),x&&N&&"values"!==N.name&&(C=!0,P=function(){return N.call(this)}),n&&!g||!p&&!C&&E[l]||i(E,l,P),a[e]=P,a[w]=h,_)if(y={values:x?P:b("values"),keys:m?P:b("keys"),entries:k},g)for(v in y)v in E||o(E,v,y[v]);else s(s.P+s.F*(p||C),e,y);return y}},function(t,e,r){"use strict";var n=r(35),s=r(13),o=r(19),i={};r(3)(i,r(5)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(i,{next:s(1,r)}),o(t,e+" Iterator")}},function(t,e,r){var n=r(4),s=r(60),o=r(20)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,r){var n=r(32);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r.r(e);
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
const n=new WeakMap,s=t=>"function"==typeof t&&n.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},a={},c={},u=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${u}--\x3e`,l=new RegExp(`${u}|${d}`),p="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const r=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let o=0,i=-1,a=0;const{strings:c,values:{length:d}}=t;for(;a<d;){const t=s.nextNode();if(null!==t){if(i++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)f(e[t].name,p)&&n++;for(;n-- >0;){const e=c[a],r=g.exec(e)[2],n=r.toLowerCase()+p,s=t.getAttribute(n);t.removeAttribute(n);const o=s.split(l);this.parts.push({type:"attribute",index:i,name:r,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(u)>=0){const n=t.parentNode,s=e.split(l),o=s.length-1;for(let e=0;e<o;e++){let r,o=s[e];if(""===o)r=m();else{const t=g.exec(o);null!==t&&f(t[2],p)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),r=document.createTextNode(o)}n.insertBefore(r,t),this.parts.push({type:"node",index:++i})}""===s[o]?(n.insertBefore(m(),t),r.push(t)):t.data=s[o],a+=o}}else if(8===t.nodeType)if(t.data===u){const e=t.parentNode;null!==t.previousSibling&&i!==o||(i++,e.insertBefore(m(),t)),o=i,this.parts.push({type:"node",index:i}),null===t.nextSibling?t.data="":(r.push(t),i--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(u,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const t of r)t.parentNode.removeChild(t)}}const f=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},_=t=>-1!==t.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,i=0,a=0,c=n.nextNode();for(;i<r.length;)if(s=r[i],_(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=e.pop(),c=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const v=` ${u} `;class S{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===t.indexOf("--\x3e",s+1);const o=g.exec(t);e+=null===o?t+(r?v:d):t.substr(0,o.index)+o[1]+o[2]+p+o[3]+u}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const b=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let n=0;n<e;n++){r+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(b(t)||!w(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||b(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const r=new y(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const s of t)void 0===(r=e[n])&&(r=new E(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(s),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class P extends x{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends C{}let O=!1;try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const j=new class{handleAttributeExpressions(t,e,r,n){const s=e[0];return"."===s?new P(t,e.slice(1),r).parts:"@"===s?[new T(t,e.slice(1),n.eventContext)]:"?"===s?[new N(t,e.slice(1),r)]:new x(t,e,r).parts}handleTextExpression(t){return new E(t)}};
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
 */function I(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(u);return void 0===(r=e.keyString.get(n))&&(r=new h(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const M=new Map,$=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const R=(t,...e)=>new S(t,e,"html",j),L=133;function V(t,e){const{element:{content:r},parts:n}=t,s=document.createTreeWalker(r,L,null,!1);let o=z(n),i=n[o],a=-1,c=0;const u=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(u.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==i&&i.index===a;)i.index=null!==d?-1:i.index-c,i=n[o=z(n,o)]}u.forEach(t=>t.parentNode.removeChild(t))}const F=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,L,null,!1);for(;r.nextNode();)e++;return e},z=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(_(e))return r}return-1};
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
const U=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const W=["html","svg"],B=new Set,H=(t,e,r)=>{B.add(t);const n=r?r.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const i=document.createElement("style");for(let t=0;t<o;t++){const e=s[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}(t=>{W.forEach(e=>{const r=M.get(U(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),V(t,r)})})})(t);const a=n.content;r?function(t,e,r=null){const{element:{content:n},parts:s}=t;if(null===r||void 0===r)return void n.appendChild(e);const o=document.createTreeWalker(n,L,null,!1);let i=z(s),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===r&&(a=F(e),r.parentNode.insertBefore(e,r));-1!==i&&s[i].index===c;){if(a>0){for(;-1!==i;)s[i].index+=a,i=z(s,i);return}i=z(s,i)}}(r,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(i,a.firstChild);const t=new Set;t.add(i),V(r,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:J},K=Promise.resolve(!0),Y=1,Q=4,X=8,Z=16,tt=32,et="finalized";class rt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const n=this[t];this[r]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(et)||t.finalize(),this[et]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=J){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||q,s="function"==typeof n?n:n.fromAttribute;return s?s(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||q.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=G){const n=this.constructor,s=n._attributeNameForProperty(t,r);if(void 0!==s){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=this._updateState|X,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=this._updateState&~X}}_attributeToProperty(t,e){if(this._updateState&X)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r._classProperties.get(n)||G;this._updateState=this._updateState|Z,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const n=this.constructor,s=n._classProperties.get(t)||G;n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{t=r,e=n});try{await r}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}rt[et]=!0;const nt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol();class ot{constructor(t,e){if(e!==st)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const r=e.reduce((e,r,n)=>e+(t=>{if(t instanceof ot)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1],t[0]);return new ot(r,st)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const at=t=>t.flat?t.flat(1/0):function t(e,r=[]){for(let n=0,s=e.length;n<s;n++){const s=e[n];Array.isArray(s)?t(s,r):r.push(s)}return r}(t);class ct extends rt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){at(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof S&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ct.finalized=!0,ct.render=((t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=$.has(e),o=D&&11===e.nodeType&&!!e.host,a=o&&!B.has(n),c=a?document.createDocumentFragment():e;if(((t,e,r)=>{let n=$.get(e);void 0===n&&(i(e,e.firstChild),$.set(e,n=new E(Object.assign({templateFactory:I},r))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:(t=>e=>{const r=U(e.type,t);let n=M.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(r,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(u);if(void 0===(s=n.keyString.get(o))){const r=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(r,t),s=new h(e,r),n.keyString.set(o,s)}return n.stringsArray.set(e.strings,s),s})(n)},r)),a){const t=$.get(c);$.delete(c);const r=t.value instanceof y?t.value.template:void 0;H(n,c,r),i(e,e.firstChild),e.appendChild(c),$.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)});r(8);const ut=(t,e)=>{window.dispatchEvent(new CustomEvent("customNavigate",{detail:{page:t,data:e},bubbles:!0,composed:!0}))},dt=(t,e,r)=>{window.dispatchEvent(new CustomEvent("updateStudentError",{detail:{student:t,word:e,error:r},bubbles:!0,composed:!0}))},lt=t=>{console.log(" in listMostCommonErrors"),console.log("scoreCards :",t)};class pt{constructor(t,e){this.__errorName=t,this.__errorId=e}get errorName(){return this.__errorName}get errorId(){return this.__errorId}get error(){return{errorName:this.__errorName,errorId:this.__errorId}}get toString(){return`${this.__errorId}. ${this.__errorName}`}}class ht{constructor(t,e){this.__wordName=t,this.__wordId=e}get wordName(){return this.__wordName}get wordId(){return this.__wordId}get word(){return{wordName:this.__wordName,wordId:this.__wordId}}get toString(){return`${this.__wordId}. ${this.__wordName}`}}class ft{constructor(t,e){this.__studentName=t,this.__studentId=e}get studentName(){return this.__studentName}get studentId(){return this.__studentId}get student(){return{studentName:this.__studentName,studentId:this.__studentId}}get toString(){return`${this.__studentId}. ${this.__studentName}`}}const _t=["Jan","Piet-Joris","Korneel","Franky","Juul"],mt=["station","gezondheid","kwaliteit","precies","Belgisch","misschien","oceaan","geëindigd"],gt=["d/dt","ij/ei","au/ou"];customElements.define("student-list-component",class extends ct{static get properties(){return{students:Array}}constructor(){super(),this.students=_t.map((t,e)=>new ft(t,e))}__goToDetailsPage(t){ut("details",t)}_renderStudentNavigation(t,e){return R`
      <h2 @click=${t=>this.__goToDetailsPage(e)}>${t}</h2>
    `}_renderStudentCard(t){return R`
      <div class="pointer card" @click=${e=>this.__goToDetailsPage(t)}>
        ${t.toString}
      </div>
    `}render(){return R` 
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
    `}});customElements.define("home-page",class extends ct{render(){return R`
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
    `}});customElements.define("scoring-page",class extends ct{render(){return R`
      <student-list-component></student-list-component>
    `}});customElements.define("scoring-sheet-component",class extends ct{static get properties(){return{student:Object,errors:Array,words:Array}}constructor(){super(),this.errors=gt.map((t,e)=>new pt(t,e)),this.words=mt.map((t,e)=>new ht(t,e))}__checkboxClicked(t,e){dt(this.student,t,e)}__goToScoring(){ut("scoring")}render(){return R` 
    <h2>${this.student.studentName}</h2>
    <button @click=${this.__goToScoring}>Select an other student</button>
      <table>
        <tr>
          <th></th>
          ${this.errors.map(t=>R`<th>${t.errorName}</th>`)}
        </tr>
        ${this.words.map(t=>R`
            <tr>
              <td>
                ${t.toString}
              </td>
              ${this.errors.map(e=>R`<td><input type="checkbox" @click=${r=>this.__checkboxClicked(t,e)}></input></td>`)}
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
    `}});customElements.define("details-page",class extends ct{static get properties(){return{student:Object}}render(){return R`
      <scoring-sheet-component .student=${this.student}></scoring-sheet-component>
    `}});const yt=t=>R`
    <style>
      .word-title {
        padding-left: 5%;
      }

      .error-title {
        padding-left: 10%;
      }
    </style>
    <div class="word-title"><b>${t.word.toString}</b></div>
    <div class="error-title">${t.errors.map(t=>(t=>R`
    <div>${t.toString}</div>
  `)(t))}</div>
  `,vt=t=>{if(t.length>0)return R`
      ${t.map(t=>(t=>R`
    <h3>${t.student.toString}</h3>
    ${t.wordErrors.map(t=>yt(t))}


  `)(t))}
    `};customElements.define("summary-page",class extends ct{properties(){return{scoreCards:Object,__mostCommonErrors:Array}}connectedCallback(){super.connectedCallback(),this.__mostCommonErrors=lt(this.scoreCards)}render(){return R`
      <h2>Here is the summary of all the scores</h2>
      ${vt(this.scoreCards.scoreCards)}
    `}});const St=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let bt,wt=0;customElements.define("about-page",class extends ct{connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownCallback)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.keyDownCallback)}keyDownCallback(t){t.key!==St[wt++]&&(wt=0),wt===St.length&&(()=>{ut("home");const t=document.createElement("style");t.innerHTML="html {\n          -webkit-animation:spin 1s linear infinite;\n          -moz-animation:spin 1s linear infinite;\n          animation:spin 1s linear infinite;\n      }\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }",document.body.appendChild(t)})()}render(){return R`
      <p>
        Created by Yoran Cobben (github.com/phasic)
      </p>
    `}});customElements.define("side-navigation",class extends ct{connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_clicked(t){t.path[0]!==this.shadowRoot.getElementById("mySidenav")&&t.path[0]!==this.shadowRoot.getElementById("menubtn")&&this.opened&&this.__closeNav()}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px",window.addEventListener("click",bt=(t=>this._clicked(t))),this.opened=!0}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0",window.removeEventListener("click",bt),this.opened=!1}__navigate(t){this.__closeNav(),ut(t)}render(){return R`
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
      `]}});const xt={scoring:"Select a student",details:"Enter results"};customElements.define("header-bar",class extends ct{static get properties(){return{pageTitle:String}}__navigate(t){this.__closeNav(),ut(t)}render(){return R`
    <header class="flex space-between">
      <side-navigation></side-navigation>
        <div class="flex">
          <span>
            <h1>${xt[this.pageTitle]||this.pageTitle}</h1>
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
      `]}});customElements.define("app-shell",class extends ct{static get properties(){return{page:String}}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px"}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0"}render(){return R`

      <header-bar .pageTitle=${this.page}>
      </header-bar>
      <div class="main">
        <slot></slot>
      </div>
     
    `}static get styles(){return[it`
        .main {
          margin: 8px;
        }
      `]}});r(38),r(39),r(53);function Ct(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,s=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){s=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class Et{constructor(t,e,r){this.__scoreCard={student:t,wordErrors:[{word:e,errors:[r]}]}}get scoreCard(){return this.__scoreCard}get student(){return this.__scoreCard.student}get wordErrors(){return this.__scoreCard.wordErrors}get toString(){return`${this.student.toString} : ${this.__toStringWordErrors()}`}__toStringWordErrors(){return this.__scoreCard.wordErrors.reduce((t,e)=>`${t} - ${e.word.toString} --\x3e ${this.__toStringErrors(e.errors)}`,"")}__toStringErrors(t){return t.reduce((t,e)=>`${t}${e.toString}`,"")}updateWordError(t,e){const r=Ct(this.__scoreCard.wordErrors.filter(e=>e.word.wordId===t.wordId),1)[0];r?this.__scoreCard=this.__updateWordError(this.__scoreCard,r,e):this.__addWordError(t,e)}__updateWordError(t,e,r){const n=t.wordErrors[this.__findWordErrorIndexByWord(e.word)].errors;let s=Ct(n.filter(t=>t.errorId===r.errorId),1)[0];return s?n.splice(this.__findErrorsIndexByError(n,s),1):n.push(r),t}__addWordError(t,e){this.__scoreCard.wordErrors.push({word:t,errors:[e]})}__findWordErrorIndexByWord(t){return this.__scoreCard.wordErrors.findIndex(e=>e.word.wordId===t.wordId)}__findErrorsIndexByError(t,e){return t.findIndex(t=>t.errorId===e.errorId)}}class Nt{constructor(){this.__scoreCards=[]}get scoreCards(){return this.__scoreCards}get toString(){return this.__scoreCards.reduce((t,e)=>`${t}\n${e.toString}`,"")}updateStudentScoreCard(t,e,r){this.__studentExistsInScoreCards(t)?this.__updateStudentScoreCard(t,e,r):this.__addScoreCard(t,e,r)}__addScoreCard(t,e,r){this.__scoreCards.push(new Et(t,e,r))}__studentExistsInScoreCards(t){return!!this.__scoreCards.filter(e=>e.student.studentName===t.studentName).length}__updateStudentScoreCard(t,e,r){this.__findStudentScoreCard(t).updateWordError(e,r)}__findStudentScoreCard(t){return this.__scoreCards.filter(e=>e.student.studentName===t.studentName)[0]}__findMatchingScoreCardAndRemove(t){this.__scoreCards=this.__scoreCards.filter(e=>e.student.studentName!==t.student.studentName)}}customElements.define("app-component",class extends ct{static get properties(){return{page:String,__pageHistory:Array,routeMap:Object,scoreCards:Object,reRender:Boolean,__routeToRender:Object,__routeData:Object}}constructor(){super(),this.__initializeData(),this.__initializeRouter()}connectedCallback(){super.connectedCallback(),this.__initializeRouteListeners()}render(){return R`
      <app-shell .page=${this.page}>
        ${this.__routeToRender}
      </app-shell>
    `}updated(t){t.has("page")&&this.__pageHistory.push(this.page)}__initializeData(){this.scoreCards=new Nt,this.__pageHistory=[]}__initializeRouter(){this.__reparseRouteMap(),this.page="home",this.__routeToRender=this.routeMap[this.page]}__reparseRouteMap(){this.routeMap={home:R`<home-page></home-page>`,scoring:R`<scoring-page></scoring-page>`,details:R`<details-page .student=${this.__routeData}></details-page>`,summary:R`<summary-page .scoreCards=${this.scoreCards}></summary-page>`,about:R`<about-page></about-page>`}}__initializeRouteListeners(){const t=t=>{"back"===t.page&&this.__pageHistory.length>1?(this.page=this.__pageHistory.pop(),this.page=this.__pageHistory.pop()):"back"!==t.page&&(this.__routeData=t.data,this.__routeData&&this.__reparseRouteMap(),this.page=t.page),this.__routeToRender=this.routeMap[this.page],this.__routeData=void 0};window.addEventListener("customNavigate",e=>t(e.detail)),window.addEventListener("updateStudentError",t=>this.__processStudentError(t.detail))}__processStudentError(t){let e=t.student,r=t.word,n=t.error;this.scoreCards.updateStudentScoreCard(e,r,n),this.reRender=!this.reRender}})}]);