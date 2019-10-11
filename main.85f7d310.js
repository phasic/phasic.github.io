!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=52)}([function(e,t,r){var n=r(17)("wks"),s=r(12),i=r(1).Symbol,o="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=o&&i[e]||(o?i:s)("Symbol."+e))}).store=n},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(6),s=r(20);e.exports=r(3)?function(e,t,r){return n.f(e,t,s(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){e.exports=!r(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(7);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(1),s=r(2),i=r(9),o=r(12)("src"),a=Function.toString,c=(""+a).split("toString");r(11).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,a){var u="function"==typeof r;u&&(i(r,"name")||s(r,"name",t)),e[t]!==r&&(u&&(i(r,o)||s(r,o,e[t]?""+e[t]:c.join(String(t)))),e===n?e[t]=r:a?e[t]?e[t]=r:s(e,t,r):(delete e[t],s(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||a.call(this)})},function(e,t,r){var n=r(4),s=r(29),i=r(30),o=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),s)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){for(var n=r(27),s=r(22),i=r(5),o=r(1),a=r(2),c=r(13),u=r(0),l=u("iterator"),d=u("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(h),g=0;g<f.length;g++){var m,_=f[g],v=h[_],y=o[_],b=y&&y.prototype;if(b&&(b[l]||a(b,l,p),b[d]||a(b,d,_),c[_]=p,v))for(m in n)b[m]||i(b,m,n[m],!0)}},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports={}},function(e,t,r){var n=r(32),s=r(15);e.exports=function(e){return n(s(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(17)("keys"),s=r(12);e.exports=function(e){return n[e]||(n[e]=s(e))}},function(e,t,r){var n=r(11),s=r(1),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t,r){var n=r(7),s=r(1).document,i=n(s)&&n(s.createElement);e.exports=function(e){return i?s.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(40),s=r(24);e.exports=Object.keys||function(e){return n(e,s)}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(6).f,s=r(9),i=r(0)("toStringTag");e.exports=function(e,t,r){e&&!s(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},function(e,t,r){"use strict";var n=r(4);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,r){"use strict";var n=r(28),s=r(31),i=r(13),o=r(14);e.exports=r(33)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,s(1)):s(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(e,t,r){var n=r(0)("unscopables"),s=Array.prototype;void 0==s[n]&&r(2)(s,n,{}),e.exports=function(e){s[n][e]=!0}},function(e,t,r){e.exports=!r(3)&&!r(8)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(7);e.exports=function(e,t){if(!n(e))return e;var r,s;if(t&&"function"==typeof(r=e.toString)&&!n(s=r.call(e)))return s;if("function"==typeof(r=e.valueOf)&&!n(s=r.call(e)))return s;if(!t&&"function"==typeof(r=e.toString)&&!n(s=r.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){var n=r(21);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){"use strict";var n=r(18),s=r(34),i=r(5),o=r(2),a=r(13),c=r(37),u=r(25),l=r(45),d=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,r,f,g,m,_){c(r,t,f);var v,y,b,w=function(e){if(!p&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},x=t+" Iterator",S="values"==g,C=!1,k=e.prototype,E=k[d]||k["@@iterator"]||g&&k[g],P=E||w(g),N=g?S?w("entries"):P:void 0,T="Array"==t&&k.entries||E;if(T&&(b=l(T.call(new e)))!==Object.prototype&&b.next&&(u(b,x,!0),n||"function"==typeof b[d]||o(b,d,h)),S&&E&&"values"!==E.name&&(C=!0,P=function(){return E.call(this)}),n&&!_||!p&&!C&&k[d]||o(k,d,P),a[t]=P,a[x]=h,g)if(v={values:S?P:w("values"),keys:m?P:w("keys"),entries:N},_)for(y in v)y in k||i(k,y,v[y]);else s(s.P+s.F*(p||C),t,v);return v}},function(e,t,r){var n=r(1),s=r(11),i=r(2),o=r(5),a=r(35),c=function(e,t,r){var u,l,d,p,h=e&c.F,f=e&c.G,g=e&c.S,m=e&c.P,_=e&c.B,v=f?n:g?n[t]||(n[t]={}):(n[t]||{}).prototype,y=f?s:s[t]||(s[t]={}),b=y.prototype||(y.prototype={});for(u in f&&(r=t),r)d=((l=!h&&v&&void 0!==v[u])?v:r)[u],p=_&&l?a(d,n):m&&"function"==typeof d?a(Function.call,d):d,v&&o(v,u,d,e&c.U),y[u]!=d&&i(y,u,p),m&&b[u]!=d&&(b[u]=d)};n.core=s,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,r){var n=r(36);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,s){return e.call(t,r,n,s)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(38),s=r(20),i=r(25),o={};r(2)(o,r(0)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(o,{next:s(1,r)}),i(e,t+" Iterator")}},function(e,t,r){var n=r(4),s=r(39),i=r(24),o=r(16)("IE_PROTO"),a=function(){},c=function(){var e,t=r(19)("iframe"),n=i.length;for(t.style.display="none",r(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c.prototype[i[n]];return c()};e.exports=Object.create||function(e,t){var r;return null!==e?(a.prototype=n(e),r=new a,a.prototype=null,r[o]=e):r=c(),void 0===t?r:s(r,t)}},function(e,t,r){var n=r(6),s=r(4),i=r(22);e.exports=r(3)?Object.defineProperties:function(e,t){s(e);for(var r,o=i(t),a=o.length,c=0;a>c;)n.f(e,r=o[c++],t[r]);return e}},function(e,t,r){var n=r(9),s=r(14),i=r(41)(!1),o=r(16)("IE_PROTO");e.exports=function(e,t){var r,a=s(e),c=0,u=[];for(r in a)r!=o&&n(a,r)&&u.push(r);for(;t.length>c;)n(a,r=t[c++])&&(~i(u,r)||u.push(r));return u}},function(e,t,r){var n=r(14),s=r(42),i=r(43);e.exports=function(e){return function(t,r,o){var a,c=n(t),u=s(c.length),l=i(o,u);if(e&&r!=r){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===r)return e||l||0;return!e&&-1}}},function(e,t,r){var n=r(23),s=Math.min;e.exports=function(e){return e>0?s(n(e),9007199254740991):0}},function(e,t,r){var n=r(23),s=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?s(e+t,0):i(e,t)}},function(e,t,r){var n=r(1).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(9),s=r(46),i=r(16)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,r){var n=r(15);e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict";r(48);var n=r(4),s=r(26),i=r(3),o=/./.toString,a=function(e){r(5)(RegExp.prototype,"toString",e,!0)};r(8)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?a(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?s.call(e):void 0)}):"toString"!=o.name&&a(function(){return o.call(this)})},function(e,t,r){r(3)&&"g"!=/./g.flags&&r(6).f(RegExp.prototype,"flags",{configurable:!0,get:r(26)})},function(e,t,r){r(50)("split",2,function(e,t,n){"use strict";var s=r(51),i=n,o=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];n=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!s(e))return i.call(r,e,t);var n,c,u,l,d,p=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=void 0===t?4294967295:t>>>0,m=new RegExp(e.source,h+"g");for(a||(n=new RegExp("^"+m.source+"$(?!\\s)",h));(c=m.exec(r))&&!((u=c.index+c[0].length)>f&&(p.push(r.slice(f,c.index)),!a&&c.length>1&&c[0].replace(n,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(c[d]=void 0)}),c.length>1&&c.index<r.length&&o.apply(p,c.slice(1)),l=c[0].length,f=u,p.length>=g));)m.lastIndex===c.index&&m.lastIndex++;return f===r.length?!l&&m.test("")||p.push(""):p.push(r.slice(f)),p.length>g?p.slice(0,g):p}}else"0".split(void 0,0).length&&(n=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(r,s){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,s):n.call(String(i),r,s)},n]})},function(e,t,r){"use strict";var n=r(2),s=r(5),i=r(8),o=r(15),a=r(0);e.exports=function(e,t,r){var c=a(e),u=r(o,c,""[e]),l=u[0],d=u[1];i(function(){var t={};return t[c]=function(){return 7},7!=""[e](t)})&&(s(String.prototype,e,l),n(RegExp.prototype,c,2==t?function(e,t){return d.call(e,this,t)}:function(e){return d.call(e,this)}))}},function(e,t,r){var n=r(7),s=r(21),i=r(0)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},function(e,t,r){"use strict";r.r(t);r(10);
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
 */const n=new WeakMap,s=e=>"function"==typeof e&&n.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},a={},c={},u=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${u}--\x3e`,d=new RegExp(`${u}|${l}`),p="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,o=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)f(t[e].name,p)&&n++;for(;n-- >0;){const t=c[a],r=_.exec(t)[2],n=r.toLowerCase()+p,s=e.getAttribute(n);e.removeAttribute(n);const i=s.split(d);this.parts.push({type:"attribute",index:o,name:r,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(u)>=0){const n=e.parentNode,s=t.split(d),i=s.length-1;for(let t=0;t<i;t++){let r,i=s[t];if(""===i)r=m();else{const e=_.exec(i);null!==e&&f(e[2],p)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:"node",index:++o})}""===s[i]?(n.insertBefore(m(),e),r.push(e)):e.data=s[i],a+=i}}else if(8===e.nodeType)if(e.data===u){const t=e.parentNode;null!==e.previousSibling&&o!==i||(o++,t.insertBefore(m(),e)),i=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(r.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(u,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const f=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},g=e=>-1!==e.index,m=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
 */const y=` ${u} `;class b{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],s=e.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===e.indexOf("--\x3e",s+1);const i=_.exec(e);t+=null===i?e+(r?y:l):e.substr(0,i.index)+i[1]+i[2]+p+i[3]+u}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(w(e)||!x(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||w(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const r=new v(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const s of e)void 0===(r=t[n])&&(r=new k(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(s),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class P extends S{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let T=!1;try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class A{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const $=new class{handleAttributeExpressions(e,t,r,n){const s=t[0];return"."===s?new P(e,t.slice(1),r).parts:"@"===s?[new A(e,t.slice(1),n.eventContext)]:"?"===s?[new E(e,t.slice(1),r)]:new S(e,t,r).parts}handleTextExpression(e){return new k(e)}};
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
 */function j(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(u);return void 0===(r=t.keyString.get(n))&&(r=new h(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const R=new Map,L=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(e,...t)=>new b(e,t,"html",$),F=133;function V(e,t){const{element:{content:r},parts:n}=e,s=document.createTreeWalker(r,F,null,!1);let i=B(n),o=n[i],a=-1,c=0;const u=[];let l=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(u.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-c,o=n[i=B(n,i)]}u.forEach(e=>e.parentNode.removeChild(e))}const I=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,F,null,!1);for(;r.nextNode();)t++;return t},B=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(g(t))return r}return-1};
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
const z=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const D=["html","svg"],W=new Set,H=(e,t,r)=>{W.add(e);const n=r?r.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{D.forEach(t=>{const r=R.get(z(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),V(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:s}=e;if(null===r||void 0===r)return void n.appendChild(t);const i=document.createTreeWalker(n,F,null,!1);let o=B(s),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===r&&(a=I(t),r.parentNode.insertBefore(t,r));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=B(s,o);return}o=B(s,o)}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),V(r,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:J},K=Promise.resolve(!0),Q=1,Y=4,X=8,Z=16,ee=32,te="finalized";class re extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(te)||e.finalize(),this[te]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=J){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||q,s="function"==typeof n?n:n.fromAttribute;return s?s(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||q.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=G){const n=this.constructor,s=n._attributeNameForProperty(e,r);if(void 0!==s){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|X,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~X}}_attributeToProperty(e,t){if(this._updateState&X)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||G;this._updateState=this._updateState|Z,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,s=n._classProperties.get(e)||G;n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Y;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}re[te]=!0;const ne="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol();class ie{constructor(e,t){if(t!==se)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ne?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=e=>new ie(String(e),se),ae=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof ie)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new ie(r,se)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ce=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,s=t.length;n<s;n++){const s=t[n];Array.isArray(s)?e(s,r):r.push(s)}return r}(e);class ue extends re{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ce(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ne?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ue.finalized=!0,ue.render=((e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=L.has(t),i=U&&11===t.nodeType&&!!t.host,a=i&&!W.has(n),c=a?document.createDocumentFragment():t;if(((e,t,r)=>{let n=L.get(t);void 0===n&&(o(t,t.firstChild),L.set(t,n=new k(Object.assign({templateFactory:j},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,c,Object.assign({templateFactory:(e=>t=>{const r=z(t.type,e);let n=R.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(r,n));let s=n.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(u);if(void 0===(s=n.keyString.get(i))){const r=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(r,e),s=new h(t,r),n.keyString.set(i,s)}return n.stringsArray.set(t.strings,s),s})(n)},r)),a){const e=L.get(c);L.delete(c);const r=e.value instanceof v?e.value.template:void 0;H(n,c,r),o(t,t.firstChild),t.appendChild(c),L.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)});customElements.define("home-page",class extends ue{render(){return M`
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
    `}});r(47);class le{constructor(e,t){this.__studentName=e,this.__studentId=t}get studentName(){return this.__studentName}get studentId(){return this.__studentId}get student(){return{studentName:this.__studentName,studentId:this.__studentId}}get toString(){return`${this.__studentId}. ${this.__studentName}`}}const de=["6A","6B"],pe={"6A":["Lina","Chiel","Oscar","Quinten","Karolina","Maxime","Matisse","Romik","Suhelija","Jerome","Yana","Genevaldo","Lou","Dries","Maaike","Seppe","Jaane","Lena"],"6B":["Abdulraheem","Kaat","Ines","Jolien","Anna","Floor","Sourik","Maiko","Kenji","Jade","Getuar","Marie","Odette","Julian","Hannah","Quinten","Matin"]},he=[{word:"station",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"tio"}]},{word:"gezondheid",errors:[{fiche:"10",error:"d"},{fiche:"13",error:"dh"}]},{word:"kwaliteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]},{word:"precies",errors:[{fiche:"18",error:"c"}]},{word:"Belgisch",errors:[{fiche:"11",error:"B"},{fiche:"18",error:"isch"}]},{word:"misschien",errors:[{fiche:"18",error:"i"},{fiche:"18",error:"ss"},{fiche:"5",error:"sch"}]},{word:"oceaan",errors:[{fiche:"13",error:"o"},{fiche:"13",error:"e"},{fiche:"18",error:"c"}]},{word:"geëindigd",errors:[{fiche:"10",error:"d"},{fiche:"18",error:"ë"},{fiche:"19",error:"d"}]},{word:"materiaal",errors:[{fiche:"13",error:"t"},{fiche:"13",error:"e"},{fiche:"18",error:"iaal"}]},{word:"restaurant",errors:[{fiche:"18",error:"au"}]},{word:"relatie",errors:[{fiche:"12",error:"re"},{fiche:"13",error:"a"},{fiche:"18",error:"tie"}]},{word:"verbindt",errors:[{fiche:"19",error:"dt"}]},{word:"circa",errors:[{fiche:"18",error:"c"}]},{word:"advocaat",errors:[{fiche:"10",error:"t"},{fiche:"13",error:"o"},{fiche:"18",error:"d"},{fiche:"18",error:"c"}]},{word:"drama's",errors:[{fiche:"13",error:"a"},{fiche:"18",error:"'s"}]},{word:"dialoog",errors:[{fiche:"13",error:"a"},{fiche:"15",error:"g"},{fiche:"18",error:"i"}]},{word:"portie",errors:[{fiche:"18",error:"tie"}]},{word:"sneed",errors:[{fiche:"19",error:"d"}]},{word:"knieën",errors:[{fiche:"18",error:"ë"}]},{word:"realiteit",errors:[{fiche:"12",error:"teit"},{fiche:"13",error:"e"},{fiche:"13",error:"a"},{fiche:"18",error:"i"}]}];const fe=oe("#448AFF"),ge=oe("#9C27B0"),me=(oe("#7B1FA2"),oe("#E1BEE7"),oe("#FFFFFF"),oe("#212121")),_e=oe("#757575"),ve=oe("#BDBDBD"),ye=ae`
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
    background-color: ${fe};
    border: 1px solid ${fe};

  }
`,be=ae`
  h1 {
    color: ${me}
  }

  h2 {
    color: ${_e}
  }
`,we=ae`
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`,xe=ae`
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
`;customElements.define("student-list-component",class extends ue{static get properties(){return{students:Array,selectedClass:String}}connectedCallback(){super.connectedCallback(),this.students=function(e){return pe[e].map((e,t)=>new le(e,t+1))}(this.selectedClass)}__goToDetailsPage(e){window.dispatchEvent(new CustomEvent("scoringNext",{detail:{selectedStudent:e},bubbles:!0,composed:!0}))}_goBack(){window.dispatchEvent(new CustomEvent("scoringPrevious",{bubbles:!0,composed:!0}))}_renderStudentCard(e){return M`
      <div class="pointer card" @click=${t=>this.__goToDetailsPage(e)}>
        ${e.toString}
      </div>
    `}render(){return M` 
    <h1>Kies een leerling</h1>
    <button outline @click=${this._goBack}>Terug</button>
    <div class="grid">
      ${this.students.map(e=>this._renderStudentCard(e))}
    </div>
   
    
    `}static get styles(){return[ye,be,we,xe]}});customElements.define("class-list-component",class extends ue{__goToStudentListPage(e){window.dispatchEvent(new CustomEvent("scoringNext",{detail:{selectedClass:e},bubbles:!0,composed:!0}))}_renderSchoolClassCard(e){return M`
      <div class="card" @click=${t=>this.__goToStudentListPage(e)}>
        ${e}
      </div>
    `}render(){return M` 
      <h1>Kies een klas</h1>
        ${de.map(e=>this._renderSchoolClassCard(e))}
      </div>
    
    `}static get styles(){return[ye,be]}});const Se=(e,t)=>{window.dispatchEvent(new CustomEvent("customNavigate",{detail:{page:e,data:t},bubbles:!0,composed:!0}))},Ce=(e,t,r)=>{window.dispatchEvent(new CustomEvent("updateStudentError",{detail:{student:e,word:t,error:r},bubbles:!0,composed:!0}))},ke=e=>{};function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let Pe,Ne;customElements.define("scoring-sheet-component",class extends ue{static get properties(){return{student:Object,errors:Array,words:Array,fiches:Array}}constructor(){super(),this.words=he.map(e=>e.word),this.fiches=function(e){return[...new Set((e||he).map(e=>e.errors.map(e=>e.fiche)).flat(1/0))].sort((e,t)=>+e-+t)}()}__checkboxClicked(e,t,r){const n=e.path[0];"green"!==n.style.background?n.style.background="green":n.style.background="",Ce(this.student,t,r)}_goBack(){window.dispatchEvent(new CustomEvent("scoringPrevious",{bubbles:!0,composed:!0}))}__renderWordErrorForFiche(e,t,r){const n=he[he.findIndex(t=>t.word===e)].errors,s=n[n.findIndex(e=>e.fiche===t)];return s?M`<td class="clickable" @click=${r=>this.__checkboxClicked(r,e,t)}>${s.error}</td>`:M`<td class="not-clickable"></td>`}render(){return M` 
    <h1>${this.student.studentName}</h1>
    <button outline @click=${this._goBack}>Terug</button>

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

    `}static get styles(){return[be,xe,ae`
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
        background: ${ve};
      }
    `]}});customElements.define("scoring-page",class extends ue{static get properties(){return{pageToGoTo:String,pages:Array,schoolClass:String,template:Object,pageIndex:Number,data:Object}}constructor(){super(),this.pages=["class-list","student-list","scoring-sheet"]}connectedCallback(){super.connectedCallback(),this.pageIndex=0,this.__updateTemplate(),window.addEventListener("scoringNext",Pe=(e=>this.__scoringNextListener(e))),window.addEventListener("scoringPrevious",Ne=(e=>this.__scoringPreviousListener(e)))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scoringNext",Pe),window.removeEventListener("scoringPrevious",Ne)}__scoringNextListener(e){[null,void 0,NaN].indexOf(this.pageIndex)>-1?this.pageIndex=0:this.pageIndex++,this.__updateTemplate(e.detail)}__scoringPreviousListener(){this.pageIndex--,this.__updateTemplate()}__updateTemplate(e){switch(e&&(this.data=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Ee(e,t,r[t])})}return e}({},this.data,e)),this.pageIndex){case 0:this.template=M`<class-list-component></class-list-component>`;break;case 1:this.template=M`<student-list-component .selectedClass=${this.data.selectedClass}></student-list-component>`;break;case 2:this.template=M`<scoring-sheet-component .student=${this.data.selectedStudent}></scoring-sheet-component>`}}render(){return M`${this.template}`}});customElements.define("details-page",class extends ue{static get properties(){return{student:Object}}render(){return M`
      <scoring-sheet-component .student=${this.student}></scoring-sheet-component>
    `}});customElements.define("summary-page",class extends ue{properties(){return{scoreCards:Object,__mostCommonErrors:Array}}connectedCallback(){super.connectedCallback(),this.__mostCommonErrors=ke(this.scoreCards)}render(){return M`
      <h2>Here is the summary of all the scores</h2>
    `}});const Te=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let Ae,Oe=0;customElements.define("about-page",class extends ue{connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownCallback)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.keyDownCallback)}keyDownCallback(e){e.key!==Te[Oe++]&&(Oe=0),Oe===Te.length&&(()=>{Se("home");const e=document.createElement("style");e.innerHTML="html {\n          -webkit-animation:spin 1s linear infinite;\n          -moz-animation:spin 1s linear infinite;\n          animation:spin 1s linear infinite;\n      }\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }",document.body.appendChild(e)})()}render(){return M`
      <p>
        Created by Yoran Cobben (github.com/phasic)
      </p>
    `}});customElements.define("side-navigation",class extends ue{static get properties(){return{pages:Array}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_clicked(e){e.path[0]!==this.shadowRoot.getElementById("mySidenav")&&e.path[0]!==this.shadowRoot.getElementById("menubtn")&&this.opened&&this.__closeNav()}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px",window.addEventListener("click",Ae=(e=>this._clicked(e))),this.opened=!0}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0",window.removeEventListener("click",Ae),this.opened=!1}__navigate(e){this.__closeNav(),Se(e)}render(){return M`
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
      `]}});const $e={};customElements.define("header-bar",class extends ue{static get properties(){return{pageTitle:String,pages:Array}}__navigate(e){this.__closeNav(),Se(e)}render(){return M`
    <header class="flex space-between">
    <side-navigation .pages=${this.pages}></side-navigation>
        <div class="flex">
          <span>
            <h1>${$e[this.pageTitle]||this.pageTitle}</h1>
          </span>
        </div>
    </header>
      
      

    `}static get styles(){return[ae`
        header {
          background: ${ge};
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
          border-left: 2px solid ${ve};
          padding-left: 5px;
          text-transform: capitalize;
        }
      `]}});customElements.define("app-shell",class extends ue{static get properties(){return{pages:Array,page:String}}__openNav(){this.shadowRoot.getElementById("mySidenav").style.width="250px"}__closeNav(){this.shadowRoot.getElementById("mySidenav").style.width="0"}render(){return M`
      <header-bar .pages=${this.pages} .pageTitle=${this.page}>
      </header-bar>
      <div class="main">
        <slot></slot>
      </div>
     
    `}static get styles(){return[ae`
        .main {
          margin: 8px;
        }
      `]}});customElements.define("app-component",class extends ue{static get properties(){return{page:String,__pageHistory:Array,routeMap:Object,scoreCards:Object,reRender:Boolean,__routeToRender:Object,__routeData:Object}}constructor(){super(),this.__initializeData(),this.__initializeRouter()}connectedCallback(){super.connectedCallback(),this.__initializeRouteListeners()}render(){return M`
      <app-shell .pages=${Object.keys(this.routeMap)} .page=${this.page}>
        ${this.__routeToRender}
      </app-shell>
    `}updated(e){e.has("page")&&this.__pageHistory.push(this.page)}__initializeData(){this.__pageHistory=[]}__initializeRouter(){this.__reparseRouteMap(),this.page=Object.keys(this.routeMap)[0],this.__routeToRender=this.routeMap[this.page]}__reparseRouteMap(){this.routeMap={scoring:M`<scoring-page></scoring-page>`,home:M`<home-page></home-page>`,summary:M`<summary-page></summary-page>`,about:M`<about-page></about-page>`}}__initializeRouteListeners(){const e=e=>{"back"===e.page&&this.__pageHistory.length>1?(this.page=this.__pageHistory.pop(),this.page=this.__pageHistory.pop()):"back"!==e.page&&(this.__routeData=e.data,this.__routeData&&this.__reparseRouteMap(),this.page=e.page),this.__routeToRender=this.routeMap[this.page],this.__routeData=void 0};window.addEventListener("customNavigate",t=>e(t.detail)),window.addEventListener("updateStudentError",e=>this.__processStudentError(e.detail))}__processStudentError(e){let t=e.student,r=e.word,n=e.error;this.scoreCards.updateStudentScoreCard(t,r,n),this.reRender=!this.reRender}});r(49);customElements.define("jens-krijgt-zijn-goesting",class extends ue{static get properties(){return{data:Array,currentWord:String,currentFiche:String,currentFout:String,reRender:Boolean}}constructor(){super(),this.data=[],this.currentWord="",this.currentFiche="",this.currentFout="",this.reRender=!1}_append(e,t){this[e]=t.target.value}__submitWord(){this.currentWord&&-1===this.data.findIndex(e=>e.word===this.currentWord)&&(this.data.push({word:this.currentWord,errors:[]}),this.reRender=!this.reRender)}__submitFout(){const e=this.data[this.data.findIndex(e=>e.word===this.currentWord)];if(-1===e.errors.findIndex(e=>e.fiche===this.currentFiche)){const t=this.currentFout.split(",").map(e=>({fiche:this.currentFiche,error:e}));e.errors.push(t),this.reRender=!this.reRender}}render(){return M`
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