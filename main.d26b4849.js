!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=52)}([function(e,t,r){var n=r(17)("wks"),s=r(12),i=r(1).Symbol,o="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=o&&i[e]||(o?i:s)("Symbol."+e))}).store=n},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(7),s=r(20);e.exports=r(3)?function(e,t,r){return n.f(e,t,s(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){e.exports=!r(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){for(var n=r(27),s=r(22),i=r(6),o=r(1),a=r(2),c=r(13),l=r(0),d=l("iterator"),u=l("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(p),g=0;g<f.length;g++){var _,m=f[g],v=p[m],y=o[m],b=y&&y.prototype;if(b&&(b[d]||a(b,d,h),b[u]||a(b,u,m),c[m]=h,v))for(_ in n)b[_]||i(b,_,n[_],!0)}},function(e,t,r){var n=r(8);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(1),s=r(2),i=r(10),o=r(12)("src"),a=Function.toString,c=(""+a).split("toString");r(11).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,a){var l="function"==typeof r;l&&(i(r,"name")||s(r,"name",t)),e[t]!==r&&(l&&(i(r,o)||s(r,o,e[t]?""+e[t]:c.join(String(t)))),e===n?e[t]=r:a?e[t]?e[t]=r:s(e,t,r):(delete e[t],s(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||a.call(this)})},function(e,t,r){var n=r(5),s=r(29),i=r(30),o=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),s)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports={}},function(e,t,r){var n=r(32),s=r(15);e.exports=function(e){return n(s(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(17)("keys"),s=r(12);e.exports=function(e){return n[e]||(n[e]=s(e))}},function(e,t,r){var n=r(11),s=r(1),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t,r){var n=r(8),s=r(1).document,i=n(s)&&n(s.createElement);e.exports=function(e){return i?s.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(40),s=r(24);e.exports=Object.keys||function(e){return n(e,s)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(7).f,s=r(10),i=r(0)("toStringTag");e.exports=function(e,t,r){e&&!s(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},function(e,t,r){"use strict";var n=r(5);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,r){"use strict";var n=r(28),s=r(31),i=r(13),o=r(14);e.exports=r(33)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,s(1)):s(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(e,t,r){var n=r(0)("unscopables"),s=Array.prototype;void 0==s[n]&&r(2)(s,n,{}),e.exports=function(e){s[n][e]=!0}},function(e,t,r){e.exports=!r(3)&&!r(9)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(8);e.exports=function(e,t){if(!n(e))return e;var r,s;if(t&&"function"==typeof(r=e.toString)&&!n(s=r.call(e)))return s;if("function"==typeof(r=e.valueOf)&&!n(s=r.call(e)))return s;if(!t&&"function"==typeof(r=e.toString)&&!n(s=r.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){var n=r(21);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){"use strict";var n=r(18),s=r(34),i=r(6),o=r(2),a=r(13),c=r(37),l=r(25),d=r(45),u=r(0)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,r,f,g,_,m){c(r,t,f);var v,y,b,w=function(e){if(!h&&e in P)return P[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},x=t+" Iterator",S="values"==g,C=!1,P=e.prototype,k=P[u]||P["@@iterator"]||g&&P[g],E=k||w(g),O=g?S?w("entries"):E:void 0,N="Array"==t&&P.entries||k;if(N&&(b=d(N.call(new e)))!==Object.prototype&&b.next&&(l(b,x,!0),n||"function"==typeof b[u]||o(b,u,p)),S&&k&&"values"!==k.name&&(C=!0,E=function(){return k.call(this)}),n&&!m||!h&&!C&&P[u]||o(P,u,E),a[t]=E,a[x]=p,g)if(v={values:S?E:w("values"),keys:_?E:w("keys"),entries:O},m)for(y in v)y in P||i(P,y,v[y]);else s(s.P+s.F*(h||C),t,v);return v}},function(e,t,r){var n=r(1),s=r(11),i=r(2),o=r(6),a=r(35),c=function(e,t,r){var l,d,u,h,p=e&c.F,f=e&c.G,g=e&c.S,_=e&c.P,m=e&c.B,v=f?n:g?n[t]||(n[t]={}):(n[t]||{}).prototype,y=f?s:s[t]||(s[t]={}),b=y.prototype||(y.prototype={});for(l in f&&(r=t),r)u=((d=!p&&v&&void 0!==v[l])?v:r)[l],h=m&&d?a(u,n):_&&"function"==typeof u?a(Function.call,u):u,v&&o(v,l,u,e&c.U),y[l]!=u&&i(y,l,h),_&&b[l]!=u&&(b[l]=u)};n.core=s,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,r){var n=r(36);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,s){return e.call(t,r,n,s)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(38),s=r(20),i=r(25),o={};r(2)(o,r(0)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(o,{next:s(1,r)}),i(e,t+" Iterator")}},function(e,t,r){var n=r(5),s=r(39),i=r(24),o=r(16)("IE_PROTO"),a=function(){},c=function(){var e,t=r(19)("iframe"),n=i.length;for(t.style.display="none",r(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c.prototype[i[n]];return c()};e.exports=Object.create||function(e,t){var r;return null!==e?(a.prototype=n(e),r=new a,a.prototype=null,r[o]=e):r=c(),void 0===t?r:s(r,t)}},function(e,t,r){var n=r(7),s=r(5),i=r(22);e.exports=r(3)?Object.defineProperties:function(e,t){s(e);for(var r,o=i(t),a=o.length,c=0;a>c;)n.f(e,r=o[c++],t[r]);return e}},function(e,t,r){var n=r(10),s=r(14),i=r(41)(!1),o=r(16)("IE_PROTO");e.exports=function(e,t){var r,a=s(e),c=0,l=[];for(r in a)r!=o&&n(a,r)&&l.push(r);for(;t.length>c;)n(a,r=t[c++])&&(~i(l,r)||l.push(r));return l}},function(e,t,r){var n=r(14),s=r(42),i=r(43);e.exports=function(e){return function(t,r,o){var a,c=n(t),l=s(c.length),d=i(o,l);if(e&&r!=r){for(;l>d;)if((a=c[d++])!=a)return!0}else for(;l>d;d++)if((e||d in c)&&c[d]===r)return e||d||0;return!e&&-1}}},function(e,t,r){var n=r(23),s=Math.min;e.exports=function(e){return e>0?s(n(e),9007199254740991):0}},function(e,t,r){var n=r(23),s=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?s(e+t,0):i(e,t)}},function(e,t,r){var n=r(1).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(10),s=r(46),i=r(16)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,r){var n=r(15);e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict";r(48);var n=r(5),s=r(26),i=r(3),o=/./.toString,a=function(e){r(6)(RegExp.prototype,"toString",e,!0)};r(9)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?a(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?s.call(e):void 0)}):"toString"!=o.name&&a(function(){return o.call(this)})},function(e,t,r){r(3)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(26)})},function(e,t,r){r(50)("split",2,function(e,t,n){"use strict";var s=r(51),i=n,o=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];n=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!s(e))return i.call(r,e,t);var n,c,l,d,u,h=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=void 0===t?4294967295:t>>>0,_=new RegExp(e.source,p+"g");for(a||(n=new RegExp("^"+_.source+"$(?!\\s)",p));(c=_.exec(r))&&!((l=c.index+c[0].length)>f&&(h.push(r.slice(f,c.index)),!a&&c.length>1&&c[0].replace(n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c.length>1&&c.index<r.length&&o.apply(h,c.slice(1)),d=c[0].length,f=l,h.length>=g));)_.lastIndex===c.index&&_.lastIndex++;return f===r.length?!d&&_.test("")||h.push(""):h.push(r.slice(f)),h.length>g?h.slice(0,g):h}}else"0".split(void 0,0).length&&(n=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(r,s){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,s):n.call(String(i),r,s)},n]})},function(e,t,r){"use strict";var n=r(2),s=r(6),i=r(9),o=r(15),a=r(0);e.exports=function(e,t,r){var c=a(e),l=r(o,c,""[e]),d=l[0],u=l[1];i(function(){var t={};return t[c]=function(){return 7},7!=""[e](t)})&&(s(String.prototype,e,d),n(RegExp.prototype,c,2==t?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}))}},function(e,t,r){var n=r(8),s=r(21),i=r(0)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},function(e,t,r){"use strict";r.r(t);
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
const n=new WeakMap,s=e=>"function"==typeof e&&n.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},a={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${d}`),h="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,o=-1,a=0;const{strings:c,values:{length:d}}=e;for(;a<d;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)f(t[e].name,h)&&n++;for(;n-- >0;){const t=c[a],r=m.exec(t)[2],n=r.toLowerCase()+h,s=e.getAttribute(n);e.removeAttribute(n);const i=s.split(u);this.parts.push({type:"attribute",index:o,name:r,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const n=e.parentNode,s=t.split(u),i=s.length-1;for(let t=0;t<i;t++){let r,i=s[t];if(""===i)r=_();else{const e=m.exec(i);null!==e&&f(e[2],h)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:"node",index:++o})}""===s[i]?(n.insertBefore(_(),e),r.push(e)):e.data=s[i],a+=i}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&o!==i||(o++,t.insertBefore(_(),e)),i=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(r.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const f=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},g=e=>-1!==e.index,_=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class v{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,c=n.nextNode();for(;o<r.length;)if(s=r[o],g(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=t.pop(),c=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const y=` ${l} `;class b{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],s=e.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===e.indexOf("--\x3e",s+1);const i=m.exec(e);t+=null===i?e+(r?y:d):e.substr(0,i.index)+i[1]+i[2]+h+i[3]+l}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(w(e)||!x(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||w(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(_()),this.endNode=e.appendChild(_())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=_()),e.__insert(this.endNode=_())}insertAfterPart(e){e.__insert(this.startNode=_()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const r=new v(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const s of e)void 0===(r=t[n])&&(r=new P(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(s),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class E extends S{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let N=!1;try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class A{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=$(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const j=new class{handleAttributeExpressions(e,t,r,n){const s=t[0];return"."===s?new E(e,t.slice(1),r).parts:"@"===s?[new A(e,t.slice(1),n.eventContext)]:"?"===s?[new k(e,t.slice(1),r)]:new S(e,t,r).parts}handleTextExpression(e){return new P(e)}};
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
 */function T(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(l);return void 0===(r=t.keyString.get(n))&&(r=new p(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const R=new Map,L=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(e,...t)=>new b(e,t,"html",j),F=133;function V(e,t){const{element:{content:r},parts:n}=e,s=document.createTreeWalker(r,F,null,!1);let i=D(n),o=n[i],a=-1,c=0;const l=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,o=n[i=D(n,i)]}l.forEach(e=>e.parentNode.removeChild(e))}const I=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,F,null,!1);for(;r.nextNode();)t++;return t},D=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(g(t))return r}return-1};
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
const B=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const W=["html","svg"],z=new Set,q=(e,t,r)=>{z.add(e);const n=r?r.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{W.forEach(t=>{const r=R.get(B(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),V(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:s}=e;if(null===r||void 0===r)return void n.appendChild(t);const i=document.createTreeWalker(n,F,null,!1);let o=D(s),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===r&&(a=I(t),r.parentNode.insertBefore(t,r));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=D(s,o);return}o=D(s,o)}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),V(r,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},K=Promise.resolve(!0),Q=1,Y=4,X=8,Z=16,ee=32,te="finalized";class re extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(te)||e.finalize(),this[te]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=G){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||H,s="function"==typeof n?n:n.fromAttribute;return s?s(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||H.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const n=this.constructor,s=n._attributeNameForProperty(e,r);if(void 0!==s){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|X,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~X}}_attributeToProperty(e,t){if(this._updateState&X)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||J;this._updateState=this._updateState|Z,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,s=n._classProperties.get(e)||J;n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Y;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}re[te]=!0;const ne="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol();class ie{constructor(e,t){if(t!==se)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ne?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=e=>new ie(String(e),se),ae=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof ie)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new ie(r,se)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ce=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,s=t.length;n<s;n++){const s=t[n];Array.isArray(s)?e(s,r):r.push(s)}return r}(e);class le extends re{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ce(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ne?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}le.finalized=!0,le.render=((e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=L.has(t),i=U&&11===t.nodeType&&!!t.host,a=i&&!z.has(n),c=a?document.createDocumentFragment():t;if(((e,t,r)=>{let n=L.get(t);void 0===n&&(o(t,t.firstChild),L.set(t,n=new P(Object.assign({templateFactory:T},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,c,Object.assign({templateFactory:(e=>t=>{const r=B(t.type,e);let n=R.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(r,n));let s=n.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(l);if(void 0===(s=n.keyString.get(i))){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),s=new p(t,r),n.keyString.set(i,s)}return n.stringsArray.set(t.strings,s),s})(n)},r)),a){const e=L.get(c);L.delete(c);const r=e.value instanceof v?e.value.template:void 0;q(n,c,r),o(t,t.firstChild),t.appendChild(c),L.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)});r(4);function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ue{static get properties(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){de(e,t,r[t])})}return e}({},super.properties,{page:String,__pageMap:Object})}constructor(e){this.__pageMap=e,this.__pageMap?this.page=Object.keys(this.__pageMap)[0]:console.warn("WARNING: no pageMap given")}get pages(){return Object.keys(this.__pageMap)}renderPage(){return this.__isPageAllowed()?M`
      ${this.__pageMap[this.page]}
    `:"This page is not allowed"}navigate(e){this.page=e}__isPageAllowed(){return Object.keys(this.__pageMap).indexOf(this.page)>-1}}const he=(e,t)=>{window.dispatchEvent(new CustomEvent("navigate",{detail:{page:e,data:t},bubbles:!0,composed:!0}))},pe=(e,t,r)=>{window.dispatchEvent(new CustomEvent("updateStudentError",{detail:{student:e,word:t,error:r},bubbles:!0,composed:!0}))},fe=e=>{},ge=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let _e=0;customElements.define("about-page",class extends le{connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownCallback)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.keyDownCallback)}keyDownCallback(e){e.key!==ge[_e++]&&(_e=0),_e===ge.length&&(()=>{he("home");const e=document.createElement("style");e.innerHTML="html {\n          -webkit-animation:spin 1s linear infinite;\n          -moz-animation:spin 1s linear infinite;\n          animation:spin 1s linear infinite;\n      }\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }",document.body.appendChild(e)})()}render(){return M`
      <p>
        Created by Yoran Cobben (github.com/phasic)
      </p>
    `}});class me{constructor(e,t){this.__studentName=e,this.__studentId=t}get studentName(){return this.__studentName}get studentId(){return this.__studentId}get student(){return{studentName:this.__studentName,studentId:this.__studentId}}get toString(){return`${this.__studentId}. ${this.__studentName}`}}const ve=["6A","6B"],ye={"6A":["Lina","Chiel","Oscar","Quinten","Karolina","Maxime","Matisse","Romik","Suhelija","Jerome","Yana","Genevaldo","Lou","Dries","Maaike","Seppe","Jaane","Lena"],"6B":["Abdulraheem","Kaat","Ines","Jolien","Anna","Floor","Sourik","Maiko","Kenji","Jade","Getuar","Marie","Odette","Julian","Hannah","Quinten","Matin"]},be=[{word:"station",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"tio"}]},{word:"gezondheid",errors:[{fiche:"10",error:"d"},{fiche:"13",error:"dh"}]},{word:"kwaliteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]},{word:"precies",errors:[{fiche:"18",error:"c"}]},{word:"Belgisch",errors:[{fiche:"11",error:"B"},{fiche:"18",error:"isch"}]},{word:"misschien",errors:[{fiche:"18",error:"i"},{fiche:"18",error:"ss"},{fiche:"5",error:"sch"}]},{word:"oceaan",errors:[{fiche:"13",error:"o"},{fiche:"13",error:"e"},{fiche:"18",error:"c"}]},{word:"geëindigd",errors:[{fiche:"10",error:"d"},{fiche:"18",error:"ë"},{fiche:"19",error:"d"}]},{word:"materiaal",errors:[{fiche:"13",error:"t"},{fiche:"13",error:"e"},{fiche:"18",error:"iaal"}]},{word:"restaurant",errors:[{fiche:"18",error:"au"}]},{word:"relatie",errors:[{fiche:"12",error:"re"},{fiche:"13",error:"a"},{fiche:"18",error:"tie"}]},{word:"verbindt",errors:[{fiche:"19",error:"dt"}]},{word:"circa",errors:[{fiche:"18",error:"c"}]},{word:"advocaat",errors:[{fiche:"10",error:"t"},{fiche:"13",error:"o"},{fiche:"18",error:"d"},{fiche:"18",error:"c"}]},{word:"drama's",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"'s"}]},{word:"dialoog",errors:[{fiche:"13",error:"a"},{fiche:"15",error:"g"},{fiche:"18",error:"i"}]},{word:"portie",errors:[{fiche:"18",error:"tie"}]},{word:"sneed",errors:[{fiche:"19",error:"d"}]},{word:"knieën",errors:[{fiche:"18",error:"ë"}]},{word:"realiteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"e"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]}];const we=oe("#448AFF"),xe=oe("#9C27B0"),Se=(oe("#7B1FA2"),oe("#E1BEE7")),Ce=oe("#FFFFFF"),Pe=(oe("#000000"),oe("#C8C8C8")),ke=oe("#777777"),Ee=oe("#212121"),Oe=oe("#757575"),Ne=oe("#BDBDBD"),Ae=ae`
  .card {
    cursor: pointer;
    border: 1px solid #d9d9d9;
    padding: 10px;
    margin: 10px;
    text-align: center;
    border-radius: 1px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);

  }

  .card:hover {
    background-color: ${we};
    border: 1px solid ${we};
  }

  .card.selected {
    background-color: ${Se};
    border: 1px solid ${Se};
  }
`,$e=ae`
  h1 {
    color: ${Ee}
  }

  h2 {
    color: ${Oe}
  }
`,je=ae`
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`,Te=ae`
  button[outline] {
    color: ${we};
    border: 1px solid ${we};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[outline]:hover {
    color: white;
    border: 1px solid white;
    background: ${we};
  }

  button[primary] {
    background-color: ${we};
    color: ${Ce};
    border: 1px solid ${we};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[primary]:hover {
    background-color: ${Ce};
    color: ${we};
  }

  button[secondary] {
    background-color: ${Pe};
    color: ${ke};
    border: 1px solid ${ke};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }

  button[secondary]:hover {
    background-color: ${ke};
    color: ${Pe};
    border: 1px solid ${ke};
    border-radius: 4px;
    padding: 3px 20px 3px 20px;
    cursor: pointer;
    font-size: 24px;
  }
`;customElements.define("scoring-sheet-component",class extends le{static get properties(){return{student:Object,errors:Array,words:Array,fiches:Array,data:Object}}constructor(){super(),this.words=be.map(e=>e.word),this.fiches=function(e){return[...new Set((e||be).map(e=>e.errors.map(e=>e.fiche)).flat(1/0))].sort((e,t)=>+e-+t)}()}connectedCallback(){super.connectedCallback()}updated(e){e.has("data")&&(this.student=this.data.selectedStudent)}__checkboxClicked(e,t,r){const n=e.path[0];"green"!==n.style.background?n.style.background="green":n.style.background="",pe(this.student,t,r)}__renderWordErrorForFiche(e,t,r){const n=be[be.findIndex(t=>t.word===e)].errors,s=n[n.findIndex(e=>e.fiche===t)];return s?M`<td class="clickable" @click=${r=>this.__checkboxClicked(r,e,t)}>${s.error}</td>`:M`<td class="not-clickable"></td>`}render(){if(this.student)return M` 
      <h1>${this.student.studentName}</h1>
        <table>
          <tr>
            <th></th>
            ${this.fiches.map(e=>M`<th>${e}</th>`)}
          </tr>
          ${this.words.map(e=>M`
              <tr>
                <td>
                  ${e}
                </td>
                ${this.fiches.map((t,r)=>this.__renderWordErrorForFiche(e,t,r))}
              </tr>
            `)}
        </table>
  
      `}static get styles(){return[$e,Te,ae`
      table {
        width: 100%;
      }

      td {
        text-align: center
      }

      table tr td{
        border: 1px solid black;
        border-radius: 5px;
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
        background: ${Ne};
      }
    `]}});customElements.define("details-page",class extends le{static get properties(){return{student:Object}}render(){return M`
      <scoring-sheet-component .student=${this.student}></scoring-sheet-component>
    `}});function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Le(e,t,r[t])})}return e}function Le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}customElements.define("home-page",class extends le{render(){return M`
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
    `}});let Me;const Fe=e=>(class extends e{static get properties(){return{__hideNext:Boolean,__hidePrevious:Boolean}}connectedCallback(){super.connectedCallback(),window.addEventListener("flowData",Me=(e=>this.__flowDataListener(e.detail))),this.flowRouter=new class{static get properties(){return Re({},super.properties,{__flowMap:Object,__index:Number,__flowData:Object})}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.__flowMap=e,this.__index=t,this.__flowData={},this.__flowMap||console.warn("WARNING: no flowMap given")}renderStep(){return this.__isPageAllowed()?M`
      ${this.__flowMap[this.__index]}
    `:"Flow page index exceeded, this functionality needs to be implemented still"}next(){this.__isNextPageAllowed(this.__index)?this.__index++:console.warn("The max index has already been achieved.")}previous(){this.__index>0?this.__index--:console.warn("Cannot go back in the flow.")}isLastStep(){return this.__index===this.__flowMap.length-1}isFirstStep(){return 0===this.__index}set flowData(e){this.__flowData=Re({},this.__flowData,e)}get flowData(){return this.__flowData}__isPageAllowed(){return this.__index<=this.__flowMap.length-1}__isNextPageAllowed(e){return++e<=this.__flowMap.length-1}}(this.routerConfig),this.__hidePrevious=this.flowRouter.isFirstStep(),this.__hideNext=this.flowRouter.isLastStep()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("flowData",Me)}flowTemplate(){return M`
      <div id="content">
        ${this.flowRouter.renderStep()}      
      </div>
      <div id="navigationButtons">
        ${this.__hidePrevious?"":M`<button secondary @click=${e=>this.__previous()}>Previous</button>`}
        ${this.__hideNext?"":M`<button primary @click=${e=>this.__next()}>Next</button>`}
      </div>
    `}__flowDataListener(e){this.flowRouter.flowData=e,this.requestUpdate()}async __next(){this.flowRouter.next(),await this.requestUpdate(),this.shadowRoot.querySelector("#content > :first-child").data=this.flowRouter.flowData,this.__hideNext=this.flowRouter.isLastStep(),this.__hidePrevious=this.flowRouter.isFirstStep()}async __previous(){this.flowRouter.previous(),await this.requestUpdate(),this.shadowRoot.querySelector("#content > :first-child").data=this.flowRouter.flowData,this.__hideNext=this.flowRouter.isLastStep(),this.__hidePrevious=this.flowRouter.isFirstStep()}static get styles(){return[Te,ae`
        #navigationButtons {
          position: absolute;
          bottom: 0;
          padding-bottom: 15px;
        }
      `]}});r(47);customElements.define("student-list-component",class extends le{static get properties(){return{students:Array,selectedClass:String,selectedStudent:Object,ready:Boolean}}constructor(){super(),this.ready=!1}updated(e){e.has("selectedClass")&&(this.students=function(e){return ye[e].map((e,t)=>new me(e,t+1))}(this.selectedClass),this.__removeSelectedStyle(this.selectedStudent),this.ready=!0),(e.has("selectedStudent")&&this.ready||e.has("ready")&&this.selectedStudent)&&(this.__removeSelectedStyle(e.get("selectedStudent")),this.__addSelectedStyle(this.selectedStudent.studentId))}__removeSelectedStyle(e){if(e){const t=this.shadowRoot.getElementById(e.studentId);t&&t.classList.remove("selected")}}__addSelectedStyle(e){this.shadowRoot.getElementById(e).classList.add("selected")}__selectStudent(e){window.dispatchEvent(new CustomEvent("flowData",{detail:{selectedStudent:e},bubbles:!0,composed:!0})),this.selectedStudent=e}_renderStudentCard(e){return M`
      <div class="pointer card" id=${e.studentId} @click=${t=>this.__selectStudent(e)}>
        ${e.toString}
      </div>
    `}render(){if(this.students)return M` 
      <div class="grid">
        ${this.students.map(e=>this._renderStudentCard(e))}
      </div>
     
      
      `}static get styles(){return[Ae,$e,je,Te]}});function Ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let Ie,De,Be,Ue;customElements.define("class-list-component",class extends le{static get properties(){return{selectedClass:String}}updated(e){e.has("selectedClass")&&(this.__removeSelectedStyle(e.get("selectedClass")),this.__addSelectedStyle(this.selectedClass))}__removeSelectedStyle(e){const t=this.shadowRoot.getElementById(e);t&&t.classList.remove("selected")}__addSelectedStyle(e){this.shadowRoot.getElementById(e).classList.add("selected")}__selectClass(e){window.dispatchEvent(new CustomEvent("selectClass",{detail:{selectedClass:e},bubbles:!0,composed:!0})),window.dispatchEvent(new CustomEvent("flowData",{detail:{selectedStudent:null},bubbles:!0,composed:!0})),this.selectedClass=e}_renderSchoolClassCard(e){return M`
      <div class="card" id=${e} @click=${t=>this.__selectClass(e)}>
        ${e}
      </div>
    `}render(){return M` 
        ${ve.map(e=>this._renderSchoolClassCard(e))}
    `}static get styles(){return[Ae]}});function We(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}customElements.define("class-and-student-selection",class extends le{static get properties(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Ve(e,t,r[t])})}return e}({},super.properties,{_selectedClass:String,_selectedStudent:Object,data:Object})}connectedCallback(){super.connectedCallback(),window.addEventListener("selectClass",Ie=(e=>this._selectClassListener(e.detail))),window.addEventListener("selectStudent",De=(e=>this._selectStudentListener(e.detail)))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("selectClass",Ie),window.removeEventListener("selectStudent",De)}updated(e){e.has("data")&&this.data.selectedClass&&(this._selectedClass=this.data.selectedClass),e.has("data")&&this.data.selectedStudent&&(this._selectedStudent=this.data.selectedStudent)}_selectClassListener(e){let t=e.selectedClass;this._selectedClass=t,window.dispatchEvent(new CustomEvent("flowData",{detail:{selectedClass:t},bubbles:!0,composed:!0}))}_selectStudentListener(e){let t=e.selectedStudent;this._selectedStudent=t,window.dispatchEvent(new CustomEvent("flowData",{detail:{selectedStudent:t},bubbles:!0,composed:!0}))}render(){return M`
      <div class="flex">
        <class-list-component .selectedClass=${this._selectedClass}></class-list-component>
        <student-list-component .selectedClass=${this._selectedClass} .selectedStudent=${this._selectedStudent}></student-list-component>
      </div>
    `}static get styles(){return[ae`
        .flex {
          display: flex;
          justify-content: flex-start;
        }

        class-list-component {
          width: 30%;
          border-right: 1px solid ${Ne};
        }

        student-list-component {
          width: 60%;
        }
      `]}});customElements.define("scoring-page",class extends(Fe(le)){static get properties(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){We(e,t,r[t])})}return e}({},super.properties)}constructor(){super(),this.routerConfig=[M`<class-and-student-selection></class-and-student-selection>`,M`<scoring-sheet-component></scoring-sheet-component>`]}render(){return this.flowTemplate()}});customElements.define("summary-page",class extends le{properties(){return{scoreCards:Object,__mostCommonErrors:Array}}connectedCallback(){super.connectedCallback(),this.__mostCommonErrors=fe(this.scoreCards)}render(){return M`
      <h2>Here is the summary of all the scores</h2>
    `}});customElements.define("side-navigation",class extends le{_closeNavOnNavigation(e){e.path[0]!==this.shadowRoot.getElementById("mySidenav")&&e.path[0]!==this.shadowRoot.getElementById("menubtn")&&this.opened&&this.__closeNav()}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px",window.addEventListener("click",Be=(e=>this._closeNavOnNavigation(e))),this.opened=!0}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0",window.removeEventListener("click",Be),this.opened=!1}__navigate(e){this.__closeNav(),he(e)}render(){return M`
     <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click=${this.__closeNav}>&times;</a>
        ${this.pages.map(e=>M`<a class="page-nav" href="#" @click=${()=>this.__navigate(e)}>${e}</a>`)}
      </div>
      <div id="menubtn" class="menubtn" @click=${this.__openNav}>&#9776; Menu</div>
    `}static get styles(){return[ae`
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

      .page-nav {
        text-transform: capitalize;
      }
      `]}});customElements.define("header-bar",class extends le{render(){return M`
    <header class="flex space-between">
      <side-navigation .pages=${this.pages}>
      </side-navigation>
      <div class="flex">
        <span>
          <h1>
            <slot name="title"></slot>
          </h1>
        </span>
      </div>
    </header>
    `}static get styles(){return[ae`
        header {
          background: ${xe};
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
          border-left: 2px solid ${Ne};
          padding-left: 5px;
          text-transform: capitalize;
        }
      `]}});customElements.define("app-shell",class extends le{static get properties(){return{pages:Array,page:String}}render(){return M`
      <header-bar .pages=${this.pages} .pageTitle=${this.page}>
        <div slot="title">
          <slot name="title">
          </slot>
        </div>
      </header-bar>
      <div class="main">
        <slot name="content"></slot>
      </div>
     
    `}static get styles(){return[ae`
        .main {
          margin: 8px;
        }
      `]}});customElements.define("main-app",class extends le{constructor(){super(),this.pageRouter=new ue({home:M`<home-page></home-page>`,scoring:M`<scoring-page></scoring-page>`,summary:M`<summary-page></summary-page>`,about:M`<about-page></about-page>`})}connectedCallback(){super.connectedCallback(),window.addEventListener("navigate",Ue=(e=>this.__navigationListener(e.detail)))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("navigate",Ue)}__navigationListener(e){let t=e.page;this.pageRouter.navigate(t),this.requestUpdate()}render(){return M`
      <app-shell .pages=${this.pageRouter.pages}>
        <div slot="title">
          ${this.pageRouter.page}
        </div>
        <div slot="content">
          ${this.pageRouter.renderPage()}
        </div>
      </app-shell>
    `}});r(49);customElements.define("jens-krijgt-zijn-goesting",class extends le{static get properties(){return{data:Array,currentWord:String,currentFiche:String,currentFout:String,reRender:Boolean}}constructor(){super(),this.data=[],this.currentWord="",this.currentFiche="",this.currentFout="",this.reRender=!1}_append(e,t){this[e]=t.target.value}__submitWord(){this.currentWord&&-1===this.data.findIndex(e=>e.word===this.currentWord)&&(this.data.push({word:this.currentWord,errors:[]}),this.reRender=!this.reRender)}__submitFout(){const e=this.data[this.data.findIndex(e=>e.word===this.currentWord)];if(-1===e.errors.findIndex(e=>e.fiche===this.currentFiche)){const t=this.currentFout.split(",").map(e=>({fiche:this.currentFiche,error:e}));e.errors.push(t),this.reRender=!this.reRender}}render(){return M`
    <h2>Word</h2>
    <input
      type="text"
      .value=${this.currentWord}
      @input=${e=>this._append("currentWord",e)}
    />
    <button type="button" @click=${this.__submitWord}>Voeg woord toe</button>

    <h2>
      Fout
    </h2>
    <label>Fiche</label>
    <input
      type="text"
      .value=${this.currentFiche}
      @input=${e=>this._append("currentFiche",e)}
    />
    <br>
    <label>Fout</label>
    <input
      type="text"
      .value=${this.currentFout}
      @input=${e=>this._append("currentFout",e)}
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