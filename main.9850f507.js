!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}([function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var s=n(11),r=n(16);t.exports=n(2)?function(t,e,n){return s.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+s).toString(36))}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var s=n(20)("wks"),r=n(5),i=n(1).Symbol,o="function"==typeof i;(t.exports=function(t){return s[t]||(s[t]=o&&i[t]||(o?i:r)("Symbol."+t))}).store=s},function(t,e,n){},function(t,e,n){n(10)("split",2,function(t,e,s){"use strict";var r=n(22),i=s,o=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];s=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return i.call(n,t,e);var s,l,c,u,d,h=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=void 0===e?4294967295:e>>>0,_=new RegExp(t.source,p+"g");for(a||(s=new RegExp("^"+_.source+"$(?!\\s)",p));(l=_.exec(n))&&!((c=l.index+l[0].length)>f&&(h.push(n.slice(f,l.index)),!a&&l.length>1&&l[0].replace(s,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(l[d]=void 0)}),l.length>1&&l.index<n.length&&o.apply(h,l.slice(1)),u=l[0].length,f=c,h.length>=m));)_.lastIndex===l.index&&_.lastIndex++;return f===n.length?!u&&_.test("")||h.push(""):h.push(n.slice(f)),h.length>m?h.slice(0,m):h}}else"0".split(void 0,0).length&&(s=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):s.call(String(i),n,r)},s]})},function(t,e,n){"use strict";var s=n(4),r=n(17),i=n(3),o=n(19),a=n(7);t.exports=function(t,e,n){var l=a(t),c=n(o,l,""[t]),u=c[0],d=c[1];i(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,u),s(RegExp.prototype,l,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},function(t,e,n){var s=n(12),r=n(13),i=n(15),o=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(s(t),e=i(e,!0),s(n),r)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var s=n(0);t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(2)&&!n(3)(function(){return 7!=Object.defineProperty(n(14)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var s=n(0),r=n(1).document,i=s(r)&&s(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){var s=n(0);t.exports=function(t,e){if(!s(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!s(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var s=n(1),r=n(4),i=n(18),o=n(5)("src"),a=Function.toString,l=(""+a).split("toString");n(6).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(i(n,o)||r(n,o,t[e]?""+t[e]:l.join(String(e)))),t===s?t[e]=n:a?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||a.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var s=n(6),r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:s.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var s=n(0),r=n(23),i=n(7)("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";n.r(e);n(8);
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
 */const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${u}`),h="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],r=document.createTreeWalker(e.content,133,null,!1);let i=0,o=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)f(e[t].name,h)&&s++;for(;s-- >0;){const e=l[a],n=g.exec(e)[2],s=n.toLowerCase()+h,r=t.getAttribute(s);t.removeAttribute(s);const i=r.split(d);this.parts.push({type:"attribute",index:o,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const s=t.parentNode,r=e.split(d),i=r.length-1;for(let e=0;e<i;e++){let n,i=r[e];if(""===i)n=_();else{const t=g.exec(i);null!==t&&f(t[2],h)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),n=document.createTextNode(i)}s.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===r[i]?(s.insertBefore(_(),t),n.push(t)):t.data=r[i],a+=i}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&o!==i||(o++,e.insertBefore(_(),t)),i=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const f=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},m=t=>-1!==t.index,_=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=s.nextNode();for(;o<n.length;)if(r=n[o],m(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const v=` ${c} `;class S{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const i=g.exec(t);e+=null===i?t+(n?v:u):t.substr(0,i.index)+i[1]+i[2]+h+i[3]+c}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const w=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(w(t)||!b(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||w(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(_()),this.endNode=t.appendChild(_())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=_()),t.__insert(this.endNode=_())}insertAfterPart(t){t.__insert(this.startNode=_()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const r of t)void 0===(n=e[s])&&(n=new C(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(r),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class E extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let A=!1;try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const V=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];return"."===r?new E(t,e.slice(1),n).parts:"@"===r?[new k(t,e.slice(1),s.eventContext)]:"?"===r?[new N(t,e.slice(1),n)]:new x(t,e,n).parts}handleTextExpression(t){return new C(t)}};
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
 */function R(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(c);return void 0===(n=e.keyString.get(s))&&(n=new p(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const j=new Map,M=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const U=(t,...e)=>new S(t,e,"html",V),$=133;function q(t,e){const{element:{content:n},parts:s}=t,r=document.createTreeWalker(n,$,null,!1);let i=F(s),o=s[i],a=-1,l=0;const c=[];let u=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,o=s[i=F(s,i)]}c.forEach(t=>t.parentNode.removeChild(t))}const I=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,$,null,!1);for(;n.nextNode();)e++;return e},F=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(m(e))return n}return-1};
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
const z=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const L=["html","svg"],B=new Set,J=(t,e,n)=>{B.add(t);const s=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const n=j.get(z(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),q(t,n)})})})(t);const a=s.content;n?function(t,e,n=null){const{element:{content:s},parts:r}=t;if(null===n||void 0===n)return void s.appendChild(e);const i=document.createTreeWalker(s,$,null,!1);let o=F(r),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=I(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=F(r,o);return}o=F(r,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),q(n,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:D},K=Promise.resolve(!0),Q=1,X=4,Y=8,Z=16,tt=32,et="finalized";class nt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const s=this[t];this[n]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(et)||t.finalize(),this[et]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=D){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||W,r="function"==typeof s?s:s.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||W.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=G){const s=this.constructor,r=s._attributeNameForProperty(t,n);if(void 0!==r){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|Y,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Y}}_attributeToProperty(t,e){if(this._updateState&Y)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s)||G;this._updateState=this._updateState|Z,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const s=this.constructor,r=s._classProperties.get(t)||G;s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|X;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{t=n,e=s});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}nt[et]=!0;const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol();class it{constructor(t,e){if(e!==rt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(st?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ot=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof it)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new it(n,rt)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const at=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let s=0,r=e.length;s<r;s++){const r=e[s];Array.isArray(r)?t(r,n):n.push(r)}return n}(t);class lt extends nt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){at(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof S&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function ct(t){return t?JSON.parse('{"'+t.substring(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function ut(t,e){let n={};const s=t.split("/").filter(t=>""!=t),r=e.split("/").filter(t=>""!=t);return s.map((t,e)=>{/^:/.test(t)&&(n[t.substring(1)]=r[e])}),n}function dt(t,e){if(function(t){return t?new RegExp("^(|/)"+t.replace(/:[^\s/]+/g,"([\\wÀ-ÖØ-öø-ÿ-]+)")+"(|/)$"):new RegExp("(^$|^/$)")}(e).test(t))return!0}lt.finalized=!0,lt.render=((t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,r=M.has(e),i=H&&11===e.nodeType&&!!e.host,a=i&&!B.has(s),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=M.get(e);void 0===s&&(o(e,e.firstChild),M.set(e,s=new C(Object.assign({templateFactory:R},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:(t=>e=>{const n=z(e.type,t);let s=j.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},j.set(n,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const i=e.strings.join(c);if(void 0===(r=s.keyString.get(i))){const n=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,t),r=new p(e,n),s.keyString.set(i,r)}return s.stringsArray.set(e.strings,r),r})(s)},n)),a){const t=M.get(l);M.delete(l);const n=t.value instanceof y?t.value.template:void 0;J(s,l,n),o(e,e.firstChild),e.appendChild(l),M.set(e,t)}!r&&i&&window.ShadyCSS.styleElement(e.host)});let ht=t=>(class extends t{static get properties(){return{route:{type:String,reflect:!0,attribute:"route"},canceled:{type:Boolean}}}firstUpdated(){this.router(this.constructor.routes,(...t)=>this.onRoute(...t)),window.addEventListener("route",()=>{this.router(this.constructor.routes,(...t)=>this.onRoute(...t))}),window.onpopstate=(()=>{window.dispatchEvent(new CustomEvent("route"))}),super.firstUpdated&&super.firstUpdated()}router(t,e){this.canceled=!0;const n=decodeURI(window.location.pathname),s=decodeURI(window.location.search);let r=t.filter(t=>"*"===t.pattern)[0];if((t=t.filter(t=>"*"!==t.pattern&&dt(n,t.pattern))).length){let r=t[0];r.params=ut(r.pattern,n),r.query=ct(s),r.guard&&"function"==typeof r.guard?(this.canceled=!1,Promise.resolve(r.guard()).then(t=>{this.canceled||(t?(r.callback&&r.callback(r.name,r.params,r.query,r.data),e(r.name,r.params,r.query,r.data)):(r.callback&&r.callback("not-authorized",r.params,r.query,r.data),e("not-authorized",r.params,r.query,r.data)))})):(r.callback&&r.callback(r.name,r.params,r.query,r.data),e(r.name,r.params,r.query,r.data))}else r?(r.callback&&r.callback(r.name,{},ct(s),r.data),e(r.name,{},ct(s),r.data)):e("not-found",{},ct(s),r.data);super.router&&super.router()}});customElements.define("router-link",class extends lt{constructor(){super(),this.addEventListener("click",this.clickHandler.bind(this))}clickHandler(t){t.preventDefault(),window.history.pushState({},null,t.target.href+window.location.search),window.dispatchEvent(new CustomEvent("route"))}static get properties(){return{href:{type:String}}}render(){return U`
            <style>
                ::slotted(*) {
                    pointer-events: none;
                }
                a {
                    all: unset;
                    display: contents;
                    
                    /*Fallback for Edge*/
                    text-decoration: unset;
                    color: unset;
                }
            </style>
            <a href='${this.href}'>
                <slot></slot>
            </a>
        `}});customElements.define("router-slot",class extends lt{static get properties(){return{route:{type:String,reflect:!0,attribute:"route"}}}updated(t){t.has("route")&&this.slott()}slott(){this.route.length&&([...this.shadowRoot.querySelectorAll("[slot]")].map(t=>{this.appendChild(t)}),[...this.querySelectorAll(`[slot~=${this.route}]`)].map(t=>{this.shadowRoot.appendChild(t)}))}});n(9);const pt=t=>{for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),s=0;s<n.length;s++){for(var r=n[s];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""};customElements.define("details-component",class extends lt{static get properties(){return{words:Array,errors:Array}}constructor(){super(),this.words=["station","gezondheid","kwaliteit","precies","Belgisch","misschien","oceaan","geëindigd"],this.errors=["d/dt","ij/ei","au/ou"]}connectedCallback(){super.connectedCallback(),this.studentId=pt("studentId"),console.log("this.studentId :",this.studentId)}__checkboxClicked(t,e,n){console.log("word :",t),console.log("error :",e),console.log("index :",n)}__homeNavigation(){window.location="home"}render(){return U` 
      <table>
        <tr>
          <th></th>
          ${this.errors.map(t=>U`<th>${t}</th>`)}
        </tr>
        ${this.words.map(t=>U`
            <tr>
              <td>
                ${t}
              </td>
              ${this.errors.map((e,n)=>U`<td><input type="checkbox" @click=${s=>this.__checkboxClicked(t,e,n)}></input></td>`)}
            </tr>
          `)}
      </table>

      <button @click=${this.__homeNavigation}>Go back Home</button>
    `}static get styles(){return ot`
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

    `}});customElements.define("home-component",class extends lt{static get properties(){return{students:Array}}constructor(){super(),this.students=["Jan","Piet-Joris","Korneel","Franky","Juul"]}__goToDetailsPage(t){document.cookie=`studentId=${t}`,window.location="details"}_renderStudentNavigation(t,e){return U`
      <h2 @click=${t=>this.__goToDetailsPage(e)}>${t}</h2>
    `}render(){return U` 
     ${this.students.map((t,e)=>this._renderStudentNavigation(t,e))}

    `}static get styles(){return ot`
      h2 {
        cursor: pointer
      }
    `}});customElements.define("app-component",class extends(ht(lt)){static get properties(){return{route:String,routeMap:Object,__routeToRender:Object}}constructor(){super(),this.routeMap={home:U`<home-component></home-component>`,details:U`<details-component></details-component>`}}static get routes(){return[{name:"home",pattern:""},{name:"home",pattern:"home"},{name:"details",pattern:"details"},{name:"not-found",pattern:"*"}]}onRoute(t,e,n,s){console.log("params :",e),console.log("route :",t),console.log("query :",n),console.log("data :",s),this.__routeToRender=this.routeMap[t]}render(){return U` 
      ${this.__routeToRender}
    `}})}]);