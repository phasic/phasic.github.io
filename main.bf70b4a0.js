!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=50)}([function(e,t,n){var r=n(8),i=n(19);e.exports=n(5)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(20)("wks"),i=n(11),o=n(1).Symbol,s="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=s&&o[e]||(s?o:i)("Symbol."+e))}).store=r},function(e,t,n){for(var r=n(32),i=n(24),o=n(6),s=n(1),a=n(0),l=n(14),c=n(2),d=c("iterator"),u=c("toStringTag"),h=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(p),f=0;f<m.length;f++){var _,g=m[f],v=p[g],w=s[g],b=w&&w.prototype;if(b&&(b[d]||a(b,d,h),b[u]||a(b,u,g),l[g]=h,v))for(_ in r)b[_]||o(b,_,r[_],!0)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(1),i=n(0),o=n(7),s=n(11)("src"),a=Function.toString,l=(""+a).split("toString");n(12).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,n,a){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",t)),e[t]!==n&&(c&&(o(n,s)||i(n,s,e[t]?""+e[t]:l.join(String(t)))),e===r?e[t]=n:a?e[t]?e[t]=n:i(e,t,n):(delete e[t],i(e,t,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(9),i=n(29),o=n(30),s=Object.defineProperty;t.f=n(5)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports={}},function(e,t,n){var r=n(35),i=n(13);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(20)("keys"),i=n(11);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){"use strict";var r=n(0),i=n(6),o=n(10),s=n(13),a=n(2);e.exports=function(e,t,n){var l=a(e),c=n(s,l,""[e]),d=c[0],u=c[1];o(function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})&&(i(String.prototype,e,d),r(RegExp.prototype,l,2==t?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}))}},function(e,t,n){var r=n(4),i=n(1).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(12),i=n(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){n(17)("replace",2,function(e,t,n){return[function(r,i){"use strict";var o=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,o,i):n.call(String(o),r,i)},n]})},function(e,t,n){var r=n(43),i=n(26);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,i=n(7),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){n(17)("split",2,function(e,t,r){"use strict";var i=n(31),o=r,s=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];r=function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!i(e))return o.call(n,e,t);var r,l,c,d,u,h=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,f=void 0===t?4294967295:t>>>0,_=new RegExp(e.source,p+"g");for(a||(r=new RegExp("^"+_.source+"$(?!\\s)",p));(l=_.exec(n))&&!((c=l.index+l[0].length)>m&&(h.push(n.slice(m,l.index)),!a&&l.length>1&&l[0].replace(r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)}),l.length>1&&l.index<n.length&&s.apply(h,l.slice(1)),d=l[0].length,m=c,h.length>=f));)_.lastIndex===l.index&&_.lastIndex++;return m===n.length?!d&&_.test("")||h.push(""):h.push(n.slice(m)),h.length>f?h.slice(0,f):h}}else"0".split(void 0,0).length&&(r=function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)});return[function(n,i){var o=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,o,i):r.call(String(o),n,i)},r]})},function(e,t,n){e.exports=!n(5)&&!n(10)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(4),i=n(22),o=n(2)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},function(e,t,n){"use strict";var r=n(33),i=n(34),o=n(14),s=n(15);e.exports=n(36)(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t,n){var r=n(2)("unscopables"),i=Array.prototype;void 0==i[r]&&n(0)(i,r,{}),e.exports=function(e){i[r][e]=!0}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(22);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){"use strict";var r=n(21),i=n(37),o=n(6),s=n(0),a=n(14),l=n(40),c=n(27),d=n(48),u=n(2)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,m,f,_,g){l(n,t,m);var v,w,b,y=function(e){if(!h&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},x=t+" Iterator",S="values"==f,C=!1,E=e.prototype,k=E[u]||E["@@iterator"]||f&&E[f],$=k||y(f),P=f?S?y("entries"):$:void 0,O="Array"==t&&E.entries||k;if(O&&(b=d(O.call(new e)))!==Object.prototype&&b.next&&(c(b,x,!0),r||"function"==typeof b[u]||s(b,u,p)),S&&k&&"values"!==k.name&&(C=!0,$=function(){return k.call(this)}),r&&!g||!h&&!C&&E[u]||s(E,u,$),a[t]=$,a[x]=p,f)if(v={values:S?$:y("values"),keys:_?$:y("keys"),entries:P},g)for(w in v)w in E||o(E,w,v[w]);else i(i.P+i.F*(h||C),t,v);return v}},function(e,t,n){var r=n(1),i=n(12),o=n(0),s=n(6),a=n(38),l=function(e,t,n){var c,d,u,h,p=e&l.F,m=e&l.G,f=e&l.S,_=e&l.P,g=e&l.B,v=m?r:f?r[t]||(r[t]={}):(r[t]||{}).prototype,w=m?i:i[t]||(i[t]={}),b=w.prototype||(w.prototype={});for(c in m&&(n=t),n)u=((d=!p&&v&&void 0!==v[c])?v:n)[c],h=g&&d?a(u,r):_&&"function"==typeof u?a(Function.call,u):u,v&&s(v,c,u,e&l.U),w[c]!=u&&o(w,c,h),_&&b[c]!=u&&(b[c]=u)};r.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,n){var r=n(39);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(41),i=n(19),o=n(27),s={};n(0)(s,n(2)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(s,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(9),i=n(42),o=n(26),s=n(16)("IE_PROTO"),a=function(){},l=function(){var e,t=n(18)("iframe"),r=o.length;for(t.style.display="none",n(47).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;r--;)delete l.prototype[o[r]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(a.prototype=r(e),n=new a,a.prototype=null,n[s]=e):n=l(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(8),i=n(9),o=n(24);e.exports=n(5)?Object.defineProperties:function(e,t){i(e);for(var n,s=o(t),a=s.length,l=0;a>l;)r.f(e,n=s[l++],t[n]);return e}},function(e,t,n){var r=n(7),i=n(15),o=n(44)(!1),s=n(16)("IE_PROTO");e.exports=function(e,t){var n,a=i(e),l=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;t.length>l;)r(a,n=t[l++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(15),i=n(45),o=n(46);e.exports=function(e){return function(t,n,s){var a,l=r(t),c=i(l.length),d=o(s,c);if(e&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},function(e,t,n){var r=n(25),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(25),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(1).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(7),i=n(49),o=n(16)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){var r=n(13);e.exports=function(e){return Object(r(e))}},function(e,t,n){"use strict";n.r(t);n(28),n(23);
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
const r=new WeakMap,i=e=>"function"==typeof e&&r.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}},a=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},l={},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${d}--\x3e`,h=new RegExp(`${d}|${u}`),p="$lit$";class m{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)f(t[e].name,p)&&r++;for(;r-- >0;){const t=l[a],n=v.exec(t)[2],r=n.toLowerCase()+p,i=e.getAttribute(r);e.removeAttribute(r);const o=i.split(h);this.parts.push({type:"attribute",index:s,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const r=e.parentNode,i=t.split(h),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=g();else{const e=v.exec(o);null!==e&&f(e[2],p)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),n=document.createTextNode(o)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===i[o]?(r.insertBefore(g(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore(g(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const f=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},_=e=>-1!==e.index,g=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,l=r.nextNode();for(;s<n.length;)if(i=n[s],_(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const b=` ${d} `;class y{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=v.exec(e);t+=null===o?e+(n?b:u):e.substr(0,o.index)+o[1]+o[2]+p+o[3]+d}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const x=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(x(e)||!S(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===l||x(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=l,e(this)}this.value!==l&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}const e=this.__pendingValue;e!==l&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)void 0===(n=t[r])&&(n=new k(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ${constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}if(this.__pendingValue===l)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=l}}class P extends C{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends E{}let T=!1;try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=l,e(this)}if(this.__pendingValue===l)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=l}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const L=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new N(e,t.slice(1),r.eventContext)]:"?"===i?[new $(e,t.slice(1),n)]:new C(e,t,n).parts}handleTextExpression(e){return new k(e)}};
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
 */function R(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(d);return void 0===(n=t.keyString.get(r))&&(n=new m(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,M=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(e,...t)=>new y(e,t,"html",L),B=(e,...t)=>new class extends y{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),s(t,n.firstChild),e}}(e,t,"svg",L),V=133;function U(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,V,null,!1);let o=I(r),s=r[o],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[o=I(r,o)]}c.forEach(e=>e.parentNode.removeChild(e))}const F=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,V,null,!1);for(;n.nextNode();)t++;return t},I=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(_(t))return n}return-1};
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
const z=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const q=["html","svg"],W=new Set,G=(e,t,n)=>{W.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{q.forEach(t=>{const n=j.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null===n||void 0===n)return void r.appendChild(t);const o=document.createTreeWalker(r,V,null,!1);let s=I(i),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(a=F(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=I(i,s);return}s=I(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),U(n,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},K=(e,t)=>t!==e&&(t==t||e==e),Z={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:K},Q=Promise.resolve(!0),Y=1,X=4,ee=8,te=16,ne=32,re="finalized";class ie extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Q,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Z){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(re)||e.finalize(),this[re]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=K){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||J,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||J.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ne,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Z){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|ee,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~ee}}_attributeToProperty(e,t){if(this._updateState&ee)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||Z;this._updateState=this._updateState|te,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~te}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r._classProperties.get(e)||Z;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&te||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|X;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ne}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ie[re]=!0;const oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol();class ae{constructor(e,t){if(t!==se)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const le=e=>new ae(String(e),se),ce=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof ae)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new ae(n,se)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const de=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class ue extends ie{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){de(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ue.finalized=!0,ue.render=((e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=M.has(t),o=H&&11===t.nodeType&&!!t.host,s=o&&!W.has(r),l=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=M.get(t);void 0===r&&(a(t,t.firstChild),M.set(t,r=new k(Object.assign({templateFactory:R},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const n=z(t.type,e);let r=j.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(d);if(void 0===(i=r.keyString.get(o))){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),i=new m(t,n),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i})(r)},n)),s){const e=M.get(l);M.delete(l);const n=e.value instanceof w?e.value.template:void 0;G(r,l,n),a(t,t.firstChild),t.appendChild(l),M.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)});const he=(e,t)=>{window.dispatchEvent(new CustomEvent("navigate",{detail:{page:e,data:t},bubbles:!0,composed:!0}))},pe=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let me=0;customElements.define("about-page",class extends ue{connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownCallback)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.keyDownCallback)}keyDownCallback(e){e.key!==pe[me++]&&(me=0),me===pe.length&&(()=>{he("home");const e=document.createElement("style");e.innerHTML="html {\n          -webkit-animation:spin 1s linear infinite;\n          -moz-animation:spin 1s linear infinite;\n          animation:spin 1s linear infinite;\n      }\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }",document.body.appendChild(e)})()}render(){return D`
      <p>
        Created by Yoran Cobben (github.com/phasic)
      </p>
    `}});n(3);const fe=le("#00796B"),_e=le("#B2DFDB"),ge=le("#009688"),ve=le("#FFFFFF"),we=(le("#00BCD4"),le("#212121")),be=le("#757575"),ye=le("#BDBDBD"),xe=(le("#448AFF"),le("#000000"),le("#BDBDBD")),Se=le("#C8C8C8"),Ce=le("#777777"),Ee=ce`
  .card {
    cursor: pointer;
    border: 1px solid ${ye};
    margin: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  }

  .card:hover {
    background-color: ${_e};
    border: 1px solid ${_e};
  }

  .card.selected {
    background-color: ${ge};
    border: 1px solid ${ge};
    color: ${ve};
  }
`,ke=ce`
  h1 {
    color: ${we};
  }

  h2 {
    color: ${be};
  }

  div {
    color: ${we};
  }
`,$e=(ce`
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`,ce`
  button[outline] {
    color: ${fe};
    border: 1px solid ${fe};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[outline]:hover {
    color: white;
    border: 1px solid white;
    background: ${fe};
  }

  button[primary] {
    background-color: ${fe};
    color: ${ve};
    border: 1px solid ${fe};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[primary]:hover {
    background-color: ${ve};
    color: ${fe};
  }

  button[secondary] {
    background-color: ${Se};
    color: ${Ce};
    border: 1px solid ${Ce};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[secondary]:hover {
    background-color: ${Ce};
    color: ${Se};
    border: 1px solid ${Ce};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }
`),Pe=e=>{return firebase.database().ref(e).once("value").then(e=>e.val())};function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let Te=[],Ne={},Ae={};const Le=(e,t,n)=>{Ne={leerjaar:e,lvs:t,leerling:n}},Re=(e,t,n)=>{let r;if(function(e){return-1===Te.map(e=>e.fiche).indexOf(e)}(t)){const r={fiche:t,errors:[{error:n,word:e}]};Te.push(r)}else r=Te.find(e=>e.fiche===t),!function(e,t){return!Te.find(t=>t.fiche===e).errors.some(e=>e.word===t)}(t,e)?r.errors=r.errors.filter(t=>t.word!==e):r.errors.push({error:n,word:e});r&&0===r.errors.length&&(Te=Te.filter(e=>e.fiche!==t))},je=()=>{const e=new Date;Ae=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Oe(e,t,n[t])})}return e}({},Ne,{timeStamp:e,fichesWithErrors:Te}),((e,t)=>{firebase.database().ref(e).set(t)})(`testResults/${Ne.leerjaar}/${Ne.lvs}/${Ne.leerling}`,Ae)},Me=()=>Ae;const De=e=>[...new Set(e.map(e=>e.errors.map(e=>e.fiche)).flat(1/0))].sort((e,t)=>+e-+t),Be=e=>e&&e.replace("e:","ë").replace("i:","ï").replace("e'","é");customElements.define("scoring-sheet",class extends ue{static get properties(){return{studentName:String,className:String,lvsTest:String,ready:Boolean,student:Object,wordData:Array,errors:Array,words:Array,fiches:Array,flowData:Object,functionalError:Object}}constructor(){super(),this.ready=!1}updated(e){if(e.has("flowData")&&this.flowData){var t=this.flowData;this.studentName=t.studentName,this.className=t.className,this.lvsTest=t.lvsTest,Pe(`lvs/${this.lvsTest}`).then(e=>{this.wordData=e,this.words=e.map(e=>e.word),this.fiches=De(e),Le(this.className,this.lvsTest,this.studentName),this.ready=!0}).catch(e=>{this.functionalError=e})}}__checkboxClicked(e,t,n){let r=n.fiche,i=n.error;e.path[0].classList.toggle("selected"),Re(t,r,i)}render(){return this.ready?D` 
      <div class="flex">
        <h1>${this.studentName}</h1>
        <button primary id="submitButton" @click=${this.__submitTest}>Toets doorsturen</button>
      </div>
          <table>
            <tr>
              <th></th>
              ${this.__renderFicheNumbersAsTableHeader()}
            </tr>
            ${this.__renderTableContents()}
          </table>
      `:this.functionalError?D`An error has occurred: ${this.functionalError}`:void 0}__renderFicheNumbersAsTableHeader(){return this.fiches.map(e=>D`<th>${e}</th>`)}__renderTableContents(){return D`
     ${this.words.map(e=>D`
        <tr>
          <td>
            ${e}
          </td>
          ${this.fiches.map((t,n)=>this.__renderWordErrorForFiche(e,t,n))}
        </tr >
      `)}
    `}__renderWordErrorForFiche(e,t,n){const r=this.wordData,i=r[r.findIndex(t=>t.word===e)].errors,o=i[i.findIndex(e=>e.fiche===t)];return o?D`<td class="clickable" @click=${t=>this.__checkboxClicked(t,e,o)}>${Be(o.error)}</td>`:D`<td class="disabled"></td>`}__submitTest(){je(),window.dispatchEvent(new CustomEvent("flowNext",{detail:Me(),bubbles:!0,composed:!0}))}static get styles(){return[ke,$e,ce`
      .flex {
        display: flex;
        justify-content: space-between;
      }

      #submitButton{
        margin: 10px;
        font-size: 18px;
      }
    
      table {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        table-layout: fixed;
        border-collapse: collapse;
        margin-bottom: 100px;
      }

      td {
        text-align: center
      }

      tr td:first-child {
        text-align: left;
        padding-left: 5px;
      }

      tr td:not(:first-child) {
        width: 10%;
      }

      tr td:first-child {
        width : 20%;
      }

      tr td{
        border: 1px solid ${Se};
      }

      .clickable {
        cursor: pointer;
      }

      .clickable:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border: 1px solid ${_e};
        background: ${_e};
        color: black;
      }
      
      .disabled {
        background: ${xe};
        border: 1px solid ${Se};
      }

      .selected { 
        background: ${fe};
        color: ${ve};
        border: 1px solid ${fe};
      }
    `]}});customElements.define("details-page",class extends ue{static get properties(){return{student:Object}}render(){return D`
      <scoring-sheet .student=${this.student}></scoring-sheet>
    `}});function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ue(e,t,n[t])})}return e}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}customElements.define("home-page",class extends ue{render(){return D`
      <h2>
        Welkom
      </h2>

      <h3>
        Intention of this application
      </h3>

      <p>
        This application is intended to make the life of teachers easier, and hopefully in the future redundant.
      </p>

      <p>
        It is still very much in development by a person who converts coffee in lines of code and a rubber duck.
      </p>


      <p>
        V2. Added DB connection
      </p>
      <p>V3. Made appointment with shrink. Needed urgently! Too much magic happening. </p>
    `}});let Fe,Ie,ze;const He=e=>(class extends e{static get properties(){return{__hideNext:Boolean,__hidePrevious:Boolean,__disableNext:Boolean}}connectedCallback(){super.connectedCallback(),window.addEventListener("flowData",Fe=(e=>this.__flowDataListener(e.detail))),window.addEventListener("flowToggleNextButton",Ie=(e=>this.__toggleNextButton(e.detail))),window.addEventListener("flowNext",ze=(e=>this.__flowNextListener(e.detail))),this.flowRouter=new class{static get properties(){return Ve({},super.properties,{__flowMap:Object,__index:Number,__flowData:Object})}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.__flowMap=e,this.__index=t,this.__flowData={},this.__flowMap||console.warn("WARNING: no flowMap given")}renderStep(){return this.__isPageAllowed()?D`
      ${this.__flowMap[this.__index]}
    `:"Flow page index exceeded, this functionality needs to be implemented still"}next(){this.__isNextPageAllowed(this.__index)?this.__index++:console.warn("The max index has already been achieved.")}previous(){this.__index>0?this.__index--:console.warn("Cannot go back in the flow.")}isLastStep(){return this.__index===this.__flowMap.length-1}isFirstStep(){return 0===this.__index}set flowData(e){this.__flowData=Ve({},this.__flowData,e)}get flowData(){return this.__flowData}__isPageAllowed(){return this.__index<=this.__flowMap.length-1}__isNextPageAllowed(e){return++e<=this.__flowMap.length-1}}(this.routerConfig),this.__hidePrevious=this.flowRouter.isFirstStep(),this.__hideNext=this.flowRouter.isLastStep(),this.__hideNext=this.disableNextButton?this.disableNextButton:this.__hideNext}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("flowData",Fe),window.removeEventListener("flowToggleNextButton",Ie),window.removeEventListener("flowNext",ze)}flowTemplate(){return D`
      <div id="content">
        ${this.flowRouter.renderStep()}      
      </div>
      <div id="navigationButtons">
        ${this.__hidePrevious?"":D`<button secondary @click=${e=>this.__previous()}>Vorige</button>`}
        ${this.__hideNext?"":D`<button primary @click=${e=>this.__next()}>Volgende</button>`}
      </div>
    `}__flowDataListener(e){this.flowRouter.flowData=e,this.requestUpdate()}__flowNextListener(e){this.flowRouter.flowData=e,this.__next()}async __next(){this.flowRouter.next(),await this.requestUpdate(),this.shadowRoot.querySelector("#content > :first-child").flowData=this.flowRouter.flowData,this.__hideNext=this.flowRouter.isLastStep(),this.__hidePrevious=this.flowRouter.isFirstStep()}async __previous(){this.flowRouter.previous(),await this.requestUpdate(),this.shadowRoot.querySelector("#content > :first-child").data=this.flowRouter.flowData,this.__hideNext=this.flowRouter.isLastStep(),this.__hidePrevious=this.flowRouter.isFirstStep()}async __toggleNextButton(e){this.__hideNext=!e,await this.requestUpdate()}static get styles(){return[$e,ce`
        #navigationButtons {
          position: absolute;
          bottom: 0;
          padding-bottom: 15px;
        }
      `]}});customElements.define("loading-spinner",class extends ue{render(){return D`
<div class="loader">Loading...</div>
    `}static get styles(){return[ce`.loader {
  color: ${_e};
  font-size: 10px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
`]}});customElements.define("breadcrumb-list",class extends ue{static get properties(){return{listData:Array,selected:String,name:String,title:String,visible:Boolean,_cardHash:Number,_cachedSelectedElement:Object}}constructor(){super(),this._cardHash=0}async connectedCallback(){super.connectedCallback(),void 0===this.visible&&(this.visible=!0)}updated(e){if(e.has("selected"))if(this.selected){const e=this.shadowRoot.getElementById(this.selected);this._cachedSelectedElement&&this._cachedSelectedElement.classList.remove("selected"),this._cachedSelectedElement=e,this._cachedSelectedElement.classList.add("selected")}else this._cachedSelectedElement&&this._cachedSelectedElement.classList.remove("selected")}render(){return this.visible?D`
        <h2>${this.title}</h2>
        ${this.__renderList()}
      `:D``}__renderList(){return this.listData?D`
        <div class="list">
          ${this.listData.map(e=>this.__renderListCard(e))}
        </div>
      `:D`<loading-spinner></loading-spinner>`}__renderListCard(e){return D`
      <div class="card" id=${e} @click=${t=>this.__listElementSelected(e)}>
        ${e}
      </div>
    `}__listElementSelected(e){this.selected=e,window.dispatchEvent(new CustomEvent("breadcrumbSelected",{detail:{name:this.name,data:e},bubbles:!0,composed:!0}))}static get styles(){return[Ee,ke,ce`
        .list {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 75vh;
          border-right: 1px solid ${ye};
        }
      
        h2 {
          padding-left: 10px;
        }
      `]}});const qe=e=>{return D`
  <breadcrumb-list .title=${e.title} .listData=${e.listData} .selected=${e.selected} .name=${e.name} .visible=${e.visible}></breadcrumb-list>
`};function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let Ge;customElements.define("student-test-selection-breadcrumb",class extends ue{static get properties(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){We(e,t,n[t])})}return e}({},super.properties,{schoolClasses:Array,lvsTests:Array,students:Array,selectedClass:String,selectedLvsTest:String,selectedStudent:String})}connectedCallback(){super.connectedCallback(),this._fetchSchoolClasses(),window.addEventListener("breadcrumbSelected",Ge=(e=>this._breadcrumbSelected(e.detail)))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("breadcrumbSelected",Ge)}_breadcrumbSelected(e){let t=e.name,n=e.data;t&&(this[t]=n)}updated(e){e.has("selectedClass")&&this.selectedClass&&(this.lvsTests=null,this.selectedLvsTest=null,this.students=null,this.selectedStudent=null,window.dispatchEvent(new CustomEvent("flowToggleNextButton",{detail:!1,bubbles:!0,composed:!0})),this._fetchLvsTests()),e.has("selectedLvsTest")&&this.selectedLvsTest&&(this._fetchStudentList(),this.selectedStudent&&this._publishFlowData()),e.has("selectedStudent")&&this.selectedStudent&&this._publishFlowData()}_fetchSchoolClasses(){Pe("schoolClasses").then(e=>{this.schoolClasses=e})}_fetchLvsTests(){Pe(`leerjaren/${this.selectedClass}/lvs`).then(e=>{this.lvsTests=e})}_fetchStudentList(){Pe(`students/${this.selectedClass}`).then(e=>{this.students=e})}_publishFlowData(){window.dispatchEvent(new CustomEvent("flowData",{detail:{className:this.selectedClass,studentName:this.selectedStudent,lvsTest:this.selectedLvsTest},bubbles:!0,composed:!0})),window.dispatchEvent(new CustomEvent("flowToggleNextButton",{detail:!0,bubbles:!0,composed:!0}))}render(){return D`
      <div class="flex">
        ${[{title:"Selecteer een klas",listData:this.schoolClasses,name:"selectedClass"},{title:"Selecteer een lvs-toets",listData:this.lvsTests,selected:this.selectedLvsTest,name:"selectedLvsTest",visible:!!this.selectedClass},{title:"Selecteer een leerling",listData:this.students,selected:this.selectedStudent,name:"selectedStudent",visible:!!this.selectedLvsTest}].map(e=>qe(e))}
      </div>
    `}static get styles(){return[ce`
        .flex {
          display: flex;
          justify-content: flex-start;

        }

        .flex > * {
          width: 33%;
        }
      `]}});function Je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}customElements.define("scoring-result",class extends ue{static get properties(){return{flowData:Object}}constructor(){super()}render(){return D`
    <h1>Resultaten voor: ${this.flowData.leerling}</h1>
    <ul>
      <li>
        <h2>Klas: ${this.flowData.leerjaar}</h2>
      </li>
      <li>
        <h2>Toets: ${this.flowData.lvs}</h2>
      </li>
      <li>
        <h2>Datum: ${this.flowData.timeStamp}</h2>
      </li>
    </ul>
    
    <h2>Resultaten:</h2>
    ${this.__renderTestResults()}
    `}__renderTestResults(){let e=this.flowData.fichesWithErrors;return D`
    <ol>
      ${(e=e.sort((e,t)=>+e.fiche-+t.fiche)).map(e=>D`
        <li>
          fiche: ${e.fiche} <br> <a class="downloadLink" href="../../assets/pdf/index.pdf" download="fiche${e.fiche}">download fiche</a>
          ${e.errors.map(e=>D`
            <ul>
              <li>
                woord: ${e.word}
              </li>
              <li>
                fout: ${e.error}
              </li>
            </ul>
          `)}
        </li>
        `)}
    </ol>
    `}static get styles(){return[ke,ce`
        .downloadLink {
          text-decoration: underline;
          color: ${fe};
          cursor: pointer;
        }

        .downloadLink:hover {
          color: ${_e};
        }
      `]}});customElements.define("scoring-page",class extends(He(ue)){static get properties(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Je(e,t,n[t])})}return e}({},super.properties)}constructor(){super(),this.routerConfig=[D`<student-test-selection-breadcrumb></student-test-selection-breadcrumb>`,D`<scoring-sheet></scoring-sheet>`,D`<scoring-result></scoring-result>`],this.disableNextButton=!0}render(){return this.flowTemplate()}});customElements.define("summary-page",class extends ue{static get properties(){return{testResults:Object,ready:Boolean}}constructor(){super(),this.ready=!1}connectedCallback(){super.connectedCallback(),Pe("testResults").then(e=>{this.testResults=e,this.ready=!0})}render(){return this.ready?D`
      <h2>Hier is een overzicht van alle toetsen</h2>
      ${Object.keys(this.testResults).map(e=>this.__renderClassResults(e))}
    `:D`loading...`}__renderClassResults(e){return D`
      <b>Klas: ${e}</b>
      <ul>
        <li>
          ${this.__renderTests(this.testResults[e])}
        </li>
      </ul>
    `}__renderTests(e){return Object.keys(e).map(t=>this.__renderTestResults(e[t]))}__renderTestResults(e){return Object.values(e).map(e=>this.__renderTestResult(e))}__renderTestResult(e){let t=e.leerling,n=e.lvs,r=e.fichesWithErrors;return D`
        <div>
          Leerling:${t}
        </div>
        <div>
          Lvs: ${n}
        </div>
        <div>
          Fouten: <br>
          ${this.__renderErrors(r)}
        </div>
    `}__renderErrors(e){let t=e;return D`
    <ol>
      ${(t=t.sort((e,t)=>+e.fiche-+t.fiche)).map(e=>D`
        <li>
          fiche: ${e.fiche} <br> <a class="downloadLink" href="../../assets/pdf/index.pdf" download="fiche${e.fiche}">download fiche</a>
          ${e.errors.map(e=>D`
            <ul>
              <li>
                woord: ${e.word}
              </li>
              <li>
                fout: ${e.error}
              </li>
            </ul>
          `)}
        </li>
        `)}
    </ol>
    `}static get styles(){return[ke]}});const Ke={home:B`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"/></svg>`,about:B`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19C15.6 24.33 14 21.27 14 18.01c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z"/></svg>`,toetsen:B`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M24.89 32h4.18L18.86 6h-3.71L4.93 32h4.18l2.25-6h11.29l2.24 6zM12.86 22L17 10.95 21.14 22h-8.28zm30.31 1.17L27 39.34 19.66 32l-2.83 2.83L27 45l19-19-2.83-2.83z"/></svg>`,overzicht:B`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"/></svg>`},Ze=e=>Ke[e];customElements.define("menu-tooltip",class extends ue{render(){return D`
      <div class="tooltip">
        <slot name="element"></slot>
        <span class="tooltiptext">
          <slot name="tooltip"></slot>
        </span>
      </div>
    `}static get styles(){return[ce`
      .tooltip {
        position: relative;
        display: inline-block;
      }
      
      /* Tooltip text */
      .tooltip .tooltiptext {
        text-transform: capitalize;
        visibility: hidden;
        width: 120px;
        background-color: ${ge};
        color: ${ve};
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
       
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
        top: -5px;
        left: 115%;
        opacity: 0;
        transition: opacity 1s;
      }
      
      /* Show the tooltip text when you mouse over the tooltip container */
      .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
      }

      .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 100%; /* To the left of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent ${ge} transparent transparent;
      }
      
      `]}});function Qe(e){return e=e||[],Array.isArray(e)?e:[e]}function Ye(e){return`[Vaadin.Router] ${e}`}customElements.define("app-shell",class extends ue{static get properties(){return{title:String,pages:Array,hoverNodes:Object}}constructor(){super(),this.hoverNodes={}}render(){return D`
      <div id="shell">
        ${this._renderHeader()}
        <div class="flex">
          ${this._renderSidebar()}
          ${this._renderMain()}
        </div>
      </div>  
    `}_renderHeader(){return D`
      <header id="header">
        <div><!-- empty div because im too lazy to fix layout --></div>
        <h1>
          ${this.title}
        </h1>
        <button secondary id="logout-button" @click=${this._logout}>Uitloggen</button>
      </header>
    `}_renderSidebar(){return D`
    <div id="sidebar" class="flex-column">
      ${this.pages.map(e=>this._renderMenuEntry(e))}
    </div>

    `}_renderMenuEntry(e){return D`
      <menu-tooltip class="pageLink" ?selected=${e===this.currentPage}>
        <div slot="element" @click=${t=>this._navigate(e)} @hover=${this._bla}>
            ${Ze(e)}
        </div>
        <div slot="tooltip">${e}</div>
      </menu-tooltip>
    `}_renderMain(){return D`
      <div id="main">
        <slot name="main">
        </slot>
      </div>
    `}_navigate(e){window.location.href=`/${e}`}_logout(){firebase.auth().signOut().then(function(){},function(e){console.error("LOG OUT FAILED :",e)})}static get styles(){return[$e,ce`

        #shell {
          width: 100%;
        }

        #header {
          background: ${fe};
          color: white;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
          padding: 5px;
          margin: 0;
          position: relative;
          height: 40px;
          z-index: 1;
          display: flex;
          justify-content: space-between;
        }

        #logout-button {
          font-size: 14px;
        }

        #sidebar {
          width: 40px;
          padding-right: 10px;
          position: absolute;
          background: ${ge};
          height: 100%;
        }

        .flex {
          display: flex;
          position: relative;
          height: 100%;
          min-height: calc(100vh - 50px); 
        }

        .flex-column {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .pageLink {
          margin-top: 50px;
        }

        .pageLink:first-of-type {
          padding-top: 0px;
        }

        h1 {
          margin: 0;
          padding-left: 5px;
          text-transform: capitalize;
          text-align: center
          
        }

        #main {
          padding-left: 70px;
          width: 100%;
          height: 100%;
        }

         svg  {
          fill: ${_e};
          height: 36px;
          cursor: pointer;

        }

        svg:hover {
          fill: ${ve};
        }

        [selected] {
          background: ${fe};
          border-radius: 10px;
          padding-right: 50px;
        }
      `]}});const Xe="module",et="nomodule",tt=[Xe,et];function nt(e){if(!e.match(/.+\.[m]?js$/))throw new Error(Ye(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function rt(e){if(!e||!ct(e.path))throw new Error(Ye('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(lt(e.action)||Array.isArray(e.children)||lt(e.children)||at(t)||n.some(t=>ct(e[t]))))throw new Error(Ye(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(ct(t))nt(t);else{if(!tt.some(e=>e in t))throw new Error(Ye('Expected route bundle to include either "'+et+'" or "'+Xe+'" keys, or both'));tt.forEach(e=>e in t&&nt(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(Ye(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function it(e){Qe(e).forEach(e=>rt(e))}function ot(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===Xe?n.setAttribute("type",Xe):t===et&&n.setAttribute(et,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=(t=>{n.__dynamicImportLoaded=!0,e(t)}),n.onerror=(e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)}),null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function st(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function at(e){return"object"==typeof e&&!!e}function lt(e){return"function"==typeof e}function ct(e){return"string"==typeof e}function dt(e){const t=new Error(Ye(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ut=new class{};function ht(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:i,hash:o}=t;st("go",{pathname:r,search:i,hash:o})&&e.preventDefault()}const pt={activate(){window.document.addEventListener("click",ht)},inactivate(){window.document.removeEventListener("click",ht)}};function mt(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;st("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!lt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ft={activate(){window.addEventListener("popstate",mt)},inactivate(){window.removeEventListener("popstate",mt)}};var _t=Tt,gt=Ct,vt=function(e,t){return Et(Ct(e,t))},wt=Et,bt=Ot,yt="/",xt="./",St=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ct(e,t){for(var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||yt,l=t&&t.delimiters||xt,c=!1;null!==(n=St.exec(e));){var d=n[0],u=n[1],h=n.index;if(s+=e.slice(o,h),o=h+d.length,u)s+=u[1],c=!0;else{var p="",m=e[o],f=n[2],_=n[3],g=n[4],v=n[5];if(!c&&s.length){var w=s.length-1;l.indexOf(s[w])>-1&&(p=s[w],s=s.slice(0,w))}s&&(r.push(s),s="",c=!1);var b=""!==p&&void 0!==m&&m!==p,y="+"===v||"*"===v,x="?"===v||"*"===v,S=p||a,C=_||g;r.push({name:f||i++,prefix:p,delimiter:S,optional:x,repeat:y,partial:b,pattern:C?$t(C):"[^"+kt(S)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function Et(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=o(c[d],a),!t[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===d?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(l=o(String(c),a),!t[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');i+=a.prefix+l}}else i+=a}return i}}function kt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function $t(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Pt(e){return e&&e.sensitive?"":"i"}function Ot(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,o=!1!==n.end,s=kt(n.delimiter||yt),a=n.delimiters||xt,l=[].concat(n.endsWith||[]).map(kt).concat("$").join("|"),c=i?"^":"",d=0===e.length,u=0;u<e.length;u++){var h=e[u];if("string"==typeof h)c+=kt(h),d=u===e.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+kt(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?c+=kt(h.prefix)+"("+p+")?":c+="(?:"+kt(h.prefix)+"("+p+"))?":c+=kt(h.prefix)+"("+p+")"}}return o?(r||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,Pt(n))}function Tt(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Tt(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",Pt(n))}(e,t,n):function(e,t,n){return Ot(Ct(e,n),t,n)}(e,t,n)}_t.parse=gt,_t.compile=vt,_t.tokensToFunction=wt,_t.tokensToRegExp=bt;const{hasOwnProperty:Nt}=Object.prototype,At=new Map;function Lt(e){try{return decodeURIComponent(e)}catch(t){return e}}function Rt(e,t,n,r,i){let o,s,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const d=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,r,i){const o=`${e}|${n=!!n}`;let s=At.get(o);if(!s){const t=[];s={keys:t,pattern:_t(e,t,{end:n,strict:""===e})},At.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},i);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&Nt.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(Lt):[]:l[n]=r?Lt(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:l}}(l,t,!d,r,i)))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&d)for(;a<d.length;){if(!s){const r=d[a];r.parent=e;let i=o.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),s=Rt(r,t.substr(i),n,o.keys,o.params)}const r=s.next(c);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function jt(e){if(lt(e.route.action))return e.route.action(e)}At.set("|false",{keys:[],pattern:/(?:)/});class Mt{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||jt,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){it(e);const t=[...Qe(e)];this.root.__children=t}addRoutes(e){return it(e),this.root.__children.push(...Qe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,ct(e)?{pathname:e}:e),n=Rt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,o=null,s=t;function a(e,l=i.value.route,c){const d=null===c&&i.value.route;return i=o||n.next(d),o=null,e||!i.done&&function(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(dt(t)):(function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}(t,i.value),s=Object.assign({},t,i.value),Promise.resolve(r(s)).then(t=>null!==t&&void 0!==t&&t!==ut?(s.result=t.result||t,s):a(e,l,t))):(o=i,Promise.resolve(ut))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Mt.pathToRegexp=_t;const{pathToRegexp:Dt}=Mt,Bt=new Map;function Vt(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function Ut(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function Ft(e,t={}){if(!(e instanceof Mt))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let o=Vt(n,r);if(!(o||(n.clear(),function e(t,n,r){const i=n.name||n.component;if(i&&(t.has(i)?t.get(i).push(n):t.set(i,[n])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=n,e(t,o,o.__children||o.children)}}(n,e.root,e.root.__children),o=Vt(n,r))))throw new Error(`Route "${r}" not found`);let s=Bt.get(o.fullPath);if(!s){let e=Ut(o),t=o.parent;for(;t;){const n=Ut(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Dt.parse(e),r=Dt.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)ct(n[e])||(i[n[e].name]=!0);s={toPath:r,keys:i},Bt.set(e,s),o.fullPath=e}let a=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let It=[];function zt(e){It.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),It=e}const Ht=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},qt=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Wt(e,t){return e.classList.add(t),new Promise(n=>{if(Ht(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),qt(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Gt=256;function Jt(e){return null!==e&&void 0!==e}function Kt({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:o,resolver:s},a){const l=r.map(e=>e.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(e={})=>en(nn.pathToRegexp.compile(tn(l))(Object.assign({},i,e)),s)}}function Zt(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Qt(e,t,n){if(lt(e))return e.apply(n,t)}function Yt(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?Qt(n[e],t,n):void 0}function Xt(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function en(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function tn(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class nn extends Mt{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Mt.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=(e=>this.__resolveRoute(e));const i=nn.NavigationTrigger;nn.setTriggers.apply(nn,Object.keys(i).map(e=>i[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Kt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();lt(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{Jt(e)||lt(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!at(e))throw new Error(Ye(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=Qe(e);for(let e=0;e<n.length;e++)rt(n[e]),t.__children.push(n[e])}(e,t)}));const r={redirect:t=>Zt(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return Qt(t.action,[e,r],t)}).then(e=>Jt(e)&&(e instanceof HTMLElement||e.redirect||e===ut)?e:ct(t.redirect)?r.redirect(t.redirect):t.bundle?function(e){return ct(e)?ot(e):Promise.race(tt.filter(t=>t in e).map(t=>ot(e[t],t)))}(t.bundle).then(()=>{},()=>{throw new Error(Ye(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0).then(e=>Jt(e)?e:ct(t.component)?r.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},ct(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Kt(e),t&&this.__updateBrowserHistory(e,1===n),st("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Xt(this.__outlet&&this.__outlet.children),this.location=Kt(Object.assign(r,{resolver:this})),st("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===ut){if(en(tn(n.chain),n.resolver)!==n.pathname)throw dt(r)}return e&&e!==ut?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Kt(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(Ye(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),s=t=>Zt(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=r.length-1;s>=0;s--)n[s].path===r[s].path&&e.search===t.search||(i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[s]));for(let a=0;a<r.length;a++)n[a].path===r[a].path&&e.search===t.search||(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[a])),n[a].element.location=Kt(e,n[a].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t])}for(let t=e.__divergedChainIndex;!e.__skipAttach&&t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[t]);return i.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=Kt(t);return e.then(e=>{if(this.__isLatestRender(t)){return Yt("onBeforeLeave",[i,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const i=Kt(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return Yt("onBeforeEnter",[i,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Gt)throw new Error(Ye(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(Ye(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Xt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Xt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Kt(e);Qt(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Xt(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Kt(e,e.chain[t].route);Qt(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let o;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){o=i[e-1].route.animate;break}if(t&&n&&o){const e=at(o)&&o.leave||"leaving",i=at(o)&&o.enter||"entering";r.push(Wt(t,e)),r.push(Wt(n,i))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;ct(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){zt(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ft(this)),en(this.__urlForName(e,t),this)}urlForPath(e,t){return en(nn.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=ct(e)?this.__createUrl(e,"http://a"):e;return st("go",{pathname:t,search:n,hash:r})}}const rn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,on=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function sn(e,t){if("function"!=typeof e)return;const n=rn.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const an=function(e,t){if(window.Vaadin.developmentMode)return sn(e,t)};function ln(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(on?!function(){if(on){const e=Object.keys(on).map(e=>on[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}():!sn(function(){return!0}))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.5.2"}),an(ln),nn.NavigationTrigger={POPSTATE:ft,CLICK:pt};customElements.define("app-router",class extends ue{static get properties(){return{pageMap:Object}}connectedCallback(){super.connectedCallback()}firstUpdated(){super.firstUpdated(),new nn(this.shadowRoot.getElementById("outlet")).setRoutes(this.pageMap)}render(){return D`
      <div id="outlet"></div>
    `}});customElements.define("main-app",class extends ue{static get properties(){return{_pageMap:Array,_pages:Array}}constructor(){super(),this._pageMap=[{path:"/",component:"home-page"},{path:"/home",component:"home-page"},{path:"/toetsen",component:"scoring-page"},{path:"/overzicht",component:"summary-page"},{path:"/about",component:"about-page"}],this._pages=this._pageMap.map(e=>e.path.replace("/","")).slice(1)}_computePath(){var e=window.location.href.replace("http://","").replace("https://","").split("/");return e[e.length-1]||"home"}render(){return D`
      <app-shell .pages=${this._pages} .title=${this._computePath()}>
        <app-router .pageMap=${this._pageMap} slot="main"></app-router>
      </app-shell>
    `}})}]);