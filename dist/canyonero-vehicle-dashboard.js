function t(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}console.groupCollapsed("%c🚗 💨  CANYONERO  💨 🚙%cv0.0.3","background-color: #b58450; color: #fff; padding: 2px 6px; border: 1px solid #b58450; border-radius: 2px 0 0 2px; font-family: Roboto, system-ui, sans-serif; text-shadow: 0 1px 0 rgba(0,0,0,0.3); font-weight: 700","background-color: transparent; color: #b58450; padding: 2px 6px; border: 1px solid #b58450; border-radius: 0 2px 2px 0; font-family: Roboto, system-ui, sans-serif"),console.info("Canyonero — universal vehicle dashboard card for Home Assistant"),console.info("GitHub: https://github.com/its-me-prash/vag-connect-cards"),console.info('"Canyonero! Canyonero!" — Hank Williams Jr.'),console.groupEnd(),"function"==typeof SuppressedError&&SuppressedError;var e,i,n="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",o="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",a="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",r="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",s="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z",l="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",c="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z",d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",h="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",u="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z",p="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var m=function(t){if(t.time_format===i.language||t.time_format===i.system){var e=t.time_format===i.language?t.language:void 0,n=(new Date).toLocaleString(e);return n.includes("AM")||n.includes("PM")}return t.time_format===i.am_pm},g=function(t,e){return f(e).format(t)},f=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:m(t)?"numeric":"2-digit",minute:"2-digit",hour12:m(t)})},v=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},_=function(t){v(window,"haptic",t)};function b(t){return void 0!==t&&"none"!==t.action}function y(t,e,i){if(e.has("config")||i)return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,x=w.ShadowRoot&&(void 0===w.ShadyCSS||w.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol(),S=new WeakMap;let T=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==C)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(x&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=S.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&S.set(e,t))}return t}toString(){return this.cssText}};const k=t=>new T("string"==typeof t?t:t+"",void 0,C),A=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new T(i,t,C)},E=(t,e)=>{if(x)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=w.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},M=x?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return k(e)})(t):t,{is:P,defineProperty:$,getOwnPropertyDescriptor:O,getOwnPropertyNames:z,getOwnPropertySymbols:I,getPrototypeOf:D}=Object,B=globalThis,j=B.trustedTypes,R=j?j.emptyScript:"",N=B.reactiveElementPolyfillSupport,H=(t,e)=>t,Z={toAttribute(t,e){switch(e){case Boolean:t=t?R:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},V=(t,e)=>!P(t,e),F={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:V};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;let U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&$(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=O(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=D(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const t=this.properties,e=[...z(t),...I(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(M(t))}else void 0!==t&&e.push(M(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:Z).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Z;this._$Em=n;const a=o.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??V)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[H("elementProperties")]=new Map,U[H("finalized")]=new Map,N?.({ReactiveElement:U}),(B.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G=globalThis,W=G.trustedTypes,q=W?W.createPolicy("lit-html",{createHTML:t=>t}):void 0,Y="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,X="?"+K,Q=`<${X}>`,J=document,tt=()=>J.createComment(""),et=t=>null===t||"object"!=typeof t&&"function"!=typeof t,it=Array.isArray,nt=t=>it(t)||"function"==typeof t?.[Symbol.iterator],ot="[ \t\n\f\r]",at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,st=/>/g,lt=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,ht=/^(?:script|style|textarea|title)$/i,ut=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),pt=ut(1),mt=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),ft=new WeakMap,vt=J.createTreeWalker(J,129);function _t(t,e){if(!it(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==q?q.createHTML(e):e}const bt=(t,e)=>{const i=t.length-1,n=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=at;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===at?"!--"===l[1]?r=rt:void 0!==l[1]?r=st:void 0!==l[2]?(ht.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=lt):void 0!==l[3]&&(r=lt):r===lt?">"===l[0]?(r=o??at,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?lt:'"'===l[3]?dt:ct):r===dt||r===ct?r=lt:r===rt||r===st?r=at:(r=lt,o=void 0);const h=r===lt&&t[e+1].startsWith("/>")?" ":"";a+=r===at?i+Q:c>=0?(n.push(s),i.slice(0,c)+Y+i.slice(c)+K+h):i+K+(-2===c?e:h)}return[_t(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};let yt=class t{constructor({strings:e,_$litType$:i},n){let o;this.parts=[];let a=0,r=0;const s=e.length-1,l=this.parts,[c,d]=bt(e,i);if(this.el=t.createElement(c,n),vt.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=vt.nextNode())&&l.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(Y)){const e=d[r++],i=o.getAttribute(t).split(K),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?Tt:"?"===n[1]?kt:"@"===n[1]?At:St}),o.removeAttribute(t)}else t.startsWith(K)&&(l.push({type:6,index:a}),o.removeAttribute(t));if(ht.test(o.tagName)){const t=o.textContent.split(K),e=t.length-1;if(e>0){o.textContent=W?W.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],tt()),vt.nextNode(),l.push({type:2,index:++a});o.append(t[e],tt())}}}else if(8===o.nodeType)if(o.data===X)l.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(K,t+1));)l.push({type:7,index:a}),t+=K.length-1}a++}}static createElement(t,e){const i=J.createElement("template");return i.innerHTML=t,i}};function wt(t,e,i=t,n){if(e===mt)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=et(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=wt(t,o._$AS(t,e.values),o,n)),e}let xt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??J).importNode(e,!0);vt.currentNode=n;let o=vt.nextNode(),a=0,r=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new Ct(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new Et(o,this,t)),this._$AV.push(e),s=i[++r]}a!==s?.index&&(o=vt.nextNode(),a++)}return vt.currentNode=J,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ct=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wt(this,t,e),et(t)?t===gt||null==t||""===t?(this._$AH!==gt&&this._$AR(),this._$AH=gt):t!==this._$AH&&t!==mt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==gt&&et(this._$AH)?this._$AA.nextSibling.data=t:this.T(J.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=yt.createElement(_t(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new xt(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ft.get(t.strings);return void 0===e&&ft.set(t.strings,e=new yt(t)),e}k(e){it(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const a of e)o===i.length?i.push(n=new t(this.O(tt()),this.O(tt()),this,this.options)):n=i[o],n._$AI(a),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},St=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=gt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=gt}_$AI(t,e=this,i,n){const o=this.strings;let a=!1;if(void 0===o)t=wt(this,t,e,0),a=!et(t)||t!==this._$AH&&t!==mt,a&&(this._$AH=t);else{const n=t;let r,s;for(t=o[0],r=0;r<o.length-1;r++)s=wt(this,n[i+r],e,r),s===mt&&(s=this._$AH[r]),a||=!et(s)||s!==this._$AH[r],s===gt?t=gt:t!==gt&&(t+=(s??"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(t)}j(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Tt=class extends St{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===gt?void 0:t}},kt=class extends St{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==gt)}},At=class extends St{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=wt(this,t,e,0)??gt)===mt)return;const i=this._$AH,n=t===gt&&i!==gt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==gt&&(i===gt||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Et=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}};const Mt={I:Ct},Pt=G.litHtmlPolyfillSupport;Pt?.(yt,Ct),(G.litHtmlVersions??=[]).push("3.3.1");const $t=(t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Ct(e.insertBefore(tt(),t),t,void 0,i??{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},Ot=globalThis;let Lt=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};Lt._$litElement$=!0,Lt.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:Lt});const zt=Ot.litElementPolyfillSupport;zt?.({LitElement:Lt}),(Ot.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Dt={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:V},Bt=(t=Dt,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jt(t){return(e,i)=>"object"==typeof i?Bt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(t){return jt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(t,e){return(e,i,n)=>Nt(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={ATTRIBUTE:1,CHILD:2},Vt=t=>(...e)=>({_$litDirective$:t,values:e});let Ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut="important",Gt=" !"+Ut,Wt=Vt(class extends Ft{constructor(t){if(super(t),t.type!==Zt.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(Gt);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?Ut:""):i[t]=n}}return mt}});function qt(t){return null!==t&&"object"==typeof t&&"constructor"in t&&t.constructor===Object}function Yt(t,e){void 0===t&&(t={}),void 0===e&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(t=>i.indexOf(t)<0).forEach(i=>{void 0===t[i]?t[i]=e[i]:qt(e[i])&&qt(t[i])&&Object.keys(e[i]).length>0&&Yt(t[i],e[i])})}const Kt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xt(){const t="undefined"!=typeof document?document:{};return Yt(t,Kt),t}const Qt={document:Kt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:t=>"undefined"==typeof setTimeout?(t(),null):setTimeout(t,0),cancelAnimationFrame(t){"undefined"!=typeof setTimeout&&clearTimeout(t)}};function Jt(){const t="undefined"!=typeof window?window:{};return Yt(t,Qt),t}function te(t){return void 0===t&&(t=""),t.trim().split(" ").filter(t=>!!t.trim())}function ee(t){const e=t;Object.keys(e).forEach(t=>{try{e[t]=null}catch(t){}try{delete e[t]}catch(t){}})}function ie(t,e){return void 0===e&&(e=0),setTimeout(t,e)}function ne(){return Date.now()}function oe(t){const e=Jt();let i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function ae(t,e){void 0===e&&(e="x");const i=Jt();let n,o,a;const r=oe(t);return i.WebKitCSSMatrix?(o=r.transform||r.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(t=>t.replace(",",".")).join(", ")),a=new i.WebKitCSSMatrix("none"===o?"":o)):(a=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=a.toString().split(",")),"x"===e&&(o=i.WebKitCSSMatrix?a.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===e&&(o=i.WebKitCSSMatrix?a.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),o||0}function re(t){return"object"==typeof t&&null!==t&&t.constructor&&"Object"===Object.prototype.toString.call(t).slice(8,-1)}function se(t){return"undefined"!=typeof window&&void 0!==window.HTMLElement?t instanceof HTMLElement:t&&(1===t.nodeType||11===t.nodeType)}function le(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const n=i<0||arguments.length<=i?void 0:arguments[i];if(null!=n&&!se(n)){const i=Object.keys(Object(n)).filter(t=>e.indexOf(t)<0);for(let e=0,o=i.length;e<o;e+=1){const o=i[e],a=Object.getOwnPropertyDescriptor(n,o);void 0!==a&&a.enumerable&&(re(t[o])&&re(n[o])?n[o].__swiper__?t[o]=n[o]:le(t[o],n[o]):!re(t[o])&&re(n[o])?(t[o]={},n[o].__swiper__?t[o]=n[o]:le(t[o],n[o])):t[o]=n[o])}}}return t}function ce(t,e,i){t.style.setProperty(e,i)}function de(t){let{swiper:e,targetPosition:i,side:n}=t;const o=Jt(),a=-e.translate;let r,s=null;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(e.cssModeFrameID);const c=i>a?"next":"prev",d=(t,e)=>"next"===c&&t>=e||"prev"===c&&t<=e,h=()=>{r=(new Date).getTime(),null===s&&(s=r);const t=Math.max(Math.min((r-s)/l,1),0),c=.5-Math.cos(t*Math.PI)/2;let u=a+c*(i-a);if(d(u,i)&&(u=i),e.wrapperEl.scrollTo({[n]:u}),d(u,i))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:u})}),void o.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=o.requestAnimationFrame(h)};h()}function he(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function ue(t,e){void 0===e&&(e="");const i=Jt(),n=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&n.push(...t.assignedElements()),e?n.filter(t=>t.matches(e)):n}function pe(t,e){const i=[e];for(;i.length>0;){const e=i.shift();if(t===e)return!0;i.push(...e.children,...e.shadowRoot?e.shadowRoot.children:[],...e.assignedElements?e.assignedElements():[])}}function me(t,e){const i=Jt();let n=e.contains(t);if(!n&&i.HTMLSlotElement&&e instanceof HTMLSlotElement){n=[...e.assignedElements()].includes(t),n||(n=pe(t,e))}return n}function ge(t){try{return void console.warn(t)}catch(t){}}function fe(t,e){void 0===e&&(e=[]);const i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:te(e)),i}function ve(t,e){const i=[];for(;t.previousElementSibling;){const n=t.previousElementSibling;e?n.matches(e)&&i.push(n):i.push(n),t=n}return i}function _e(t,e){const i=[];for(;t.nextElementSibling;){const n=t.nextElementSibling;e?n.matches(e)&&i.push(n):i.push(n),t=n}return i}function be(t,e){return Jt().getComputedStyle(t,null).getPropertyValue(e)}function ye(t){let e,i=t;if(i){for(e=0;null!==(i=i.previousSibling);)1===i.nodeType&&(e+=1);return e}}function we(t,e){const i=[];let n=t.parentElement;for(;n;)e?n.matches(e)&&i.push(n):i.push(n),n=n.parentElement;return i}function xe(t,e){e&&t.addEventListener("transitionend",function i(n){n.target===t&&(e.call(t,n),t.removeEventListener("transitionend",i))})}function Ce(t,e,i){const n=Jt();return t["width"===e?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(t,null).getPropertyValue("width"===e?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(t,null).getPropertyValue("width"===e?"margin-left":"margin-bottom"))}function Se(t){return(Array.isArray(t)?t:[t]).filter(t=>!!t)}function Te(t){return e=>Math.abs(e)>0&&t.browser&&t.browser.need3dFix&&Math.abs(e)%90==0?e+.001:e}function ke(t,e){void 0===e&&(e=""),"undefined"!=typeof trustedTypes?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):t.innerHTML=e}let Ae,Ee,Me;function Pe(){const t=Jt(),e=Xt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function $e(){return Ae||(Ae=Pe()),Ae}function Oe(t){let{userAgent:e}=void 0===t?{}:t;const i=$e(),n=Jt(),o=n.navigator.platform,a=e||n.navigator.userAgent,r={ios:!1,android:!1},s=n.screen.width,l=n.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad).*OS\s([\d_]+)/);const h=a.match(/(iPod)(.*OS\s([\d_]+))?/),u=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===o;let m="MacIntel"===o;return!d&&m&&i.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${s}x${l}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),c&&!p&&(r.os="android",r.android=!0),(d||u||h)&&(r.os="ios",r.ios=!0),r}function Le(t){return void 0===t&&(t={}),Ee||(Ee=Oe(t)),Ee}function ze(){const t=Jt(),e=Le();let i=!1;function n(){const e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}if(n()){const e=String(t.navigator.userAgent);if(e.includes("Version/")){const[t,n]=e.split("Version/")[1].split(" ")[0].split(".").map(t=>Number(t));i=t<16||16===t&&n<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),a=n();return{isSafari:i||a,needPerspectiveFix:i,need3dFix:a||o&&e.ios,isWebView:o}}function Ie(){return Me||(Me=ze()),Me}function De(t){let{swiper:e,on:i,emit:n}=t;const o=Jt();let a=null,r=null;const s=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};i("init",()=>{e.params.resizeObserver&&void 0!==o.ResizeObserver?e&&!e.destroyed&&e.initialized&&(a=new ResizeObserver(t=>{r=o.requestAnimationFrame(()=>{const{width:i,height:n}=e;let o=i,a=n;t.forEach(t=>{let{contentBoxSize:i,contentRect:n,target:r}=t;r&&r!==e.el||(o=n?n.width:(i[0]||i).inlineSize,a=n?n.height:(i[0]||i).blockSize)}),o===i&&a===n||s()})}),a.observe(e.el)):(o.addEventListener("resize",s),o.addEventListener("orientationchange",l))}),i("destroy",()=>{r&&o.cancelAnimationFrame(r),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null),o.removeEventListener("resize",s),o.removeEventListener("orientationchange",l)})}function Be(t){let{swiper:e,extendParams:i,on:n,emit:o}=t;const a=[],r=Jt(),s=function(t,i){void 0===i&&(i={});const n=new(r.MutationObserver||r.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(1===t.length)return void o("observerUpdate",t[0]);const i=function(){o("observerUpdate",t[0])};r.requestAnimationFrame?r.requestAnimationFrame(i):r.setTimeout(i,0)});n.observe(t,{attributes:void 0===i.attributes||i.attributes,childList:e.isElement||(void 0===i.childList||i).childList,characterData:void 0===i.characterData||i.characterData}),a.push(n)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",()=>{if(e.params.observer){if(e.params.observeParents){const t=we(e.hostEl);for(let e=0;e<t.length;e+=1)s(t[e])}s(e.hostEl,{childList:e.params.observeSlideChildren}),s(e.wrapperEl,{attributes:!1})}}),n("destroy",()=>{a.forEach(t=>{t.disconnect()}),a.splice(0,a.length)})}var je={on(t,e,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const o=i?"unshift":"push";return t.split(" ").forEach(t=>{n.eventsListeners[t]||(n.eventsListeners[t]=[]),n.eventsListeners[t][o](e)}),n},once(t,e,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;function o(){n.off(t,o),o.__emitterProxy&&delete o.__emitterProxy;for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];e.apply(n,a)}return o.__emitterProxy=e,n.on(t,o,i)},onAny(t,e){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const n=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[n](t),i},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){const i=this;return!i.eventsListeners||i.destroyed?i:i.eventsListeners?(t.split(" ").forEach(t=>{void 0===e?i.eventsListeners[t]=[]:i.eventsListeners[t]&&i.eventsListeners[t].forEach((n,o)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&i.eventsListeners[t].splice(o,1)})}),i):i},emit(){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let e,i,n;for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];"string"==typeof a[0]||Array.isArray(a[0])?(e=a[0],i=a.slice(1,a.length),n=t):(e=a[0].events,i=a[0].data,n=a[0].context||t),i.unshift(n);return(Array.isArray(e)?e:e.split(" ")).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(n,[e,...i])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(t=>{t.apply(n,i)})}),t}};function Re(){const t=this;let e,i;const n=t.el;e=void 0!==t.params.width&&null!==t.params.width?t.params.width:n.clientWidth,i=void 0!==t.params.height&&null!==t.params.height?t.params.height:n.clientHeight,0===e&&t.isHorizontal()||0===i&&t.isVertical()||(e=e-parseInt(be(n,"padding-left")||0,10)-parseInt(be(n,"padding-right")||0,10),i=i-parseInt(be(n,"padding-top")||0,10)-parseInt(be(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function Ne(){const t=this;function e(e,i){return parseFloat(e.getPropertyValue(t.getDirectionLabel(i))||0)}const i=t.params,{wrapperEl:n,slidesEl:o,size:a,rtlTranslate:r,wrongRTL:s}=t,l=t.virtual&&i.virtual.enabled,c=l?t.virtual.slides.length:t.slides.length,d=ue(o,`.${t.params.slideClass}, swiper-slide`),h=l?t.virtual.slides.length:d.length;let u=[];const p=[],m=[];let g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(t));let f=i.slidesOffsetAfter;"function"==typeof f&&(f=i.slidesOffsetAfter.call(t));const v=t.snapGrid.length,_=t.slidesGrid.length;let b=i.spaceBetween,y=-g,w=0,x=0;if(void 0===a)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*a:"string"==typeof b&&(b=parseFloat(b)),t.virtualSize=-b,d.forEach(t=>{r?t.style.marginLeft="":t.style.marginRight="",t.style.marginBottom="",t.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(ce(n,"--swiper-centered-offset-before",""),ce(n,"--swiper-centered-offset-after",""));const C=i.grid&&i.grid.rows>1&&t.grid;let S;C?t.grid.initSlides(d):t.grid&&t.grid.unsetSlides();const T="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter(t=>void 0!==i.breakpoints[t].slidesPerView).length>0;for(let n=0;n<h;n+=1){let o;if(S=0,d[n]&&(o=d[n]),C&&t.grid.updateSlide(n,o,d),!d[n]||"none"!==be(o,"display")){if("auto"===i.slidesPerView){T&&(d[n].style[t.getDirectionLabel("width")]="");const a=getComputedStyle(o),r=o.style.transform,s=o.style.webkitTransform;if(r&&(o.style.transform="none"),s&&(o.style.webkitTransform="none"),i.roundLengths)S=t.isHorizontal()?Ce(o,"width"):Ce(o,"height");else{const t=e(a,"width"),i=e(a,"padding-left"),n=e(a,"padding-right"),r=e(a,"margin-left"),s=e(a,"margin-right"),l=a.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=t+r+s;else{const{clientWidth:e,offsetWidth:a}=o;S=t+i+n+r+s+(a-e)}}r&&(o.style.transform=r),s&&(o.style.webkitTransform=s),i.roundLengths&&(S=Math.floor(S))}else S=(a-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),d[n]&&(d[n].style[t.getDirectionLabel("width")]=`${S}px`);d[n]&&(d[n].swiperSlideSize=S),m.push(S),i.centeredSlides?(y=y+S/2+w/2+b,0===w&&0!==n&&(y=y-a/2-b),0===n&&(y=y-a/2-b),Math.abs(y)<.001&&(y=0),i.roundLengths&&(y=Math.floor(y)),x%i.slidesPerGroup===0&&u.push(y),p.push(y)):(i.roundLengths&&(y=Math.floor(y)),(x-Math.min(t.params.slidesPerGroupSkip,x))%t.params.slidesPerGroup===0&&u.push(y),p.push(y),y=y+S+b),t.virtualSize+=S+b,w=S,x+=1}}if(t.virtualSize=Math.max(t.virtualSize,a)+f,r&&s&&("slide"===i.effect||"coverflow"===i.effect)&&(n.style.width=`${t.virtualSize+b}px`),i.setWrapperSize&&(n.style[t.getDirectionLabel("width")]=`${t.virtualSize+b}px`),C&&t.grid.updateWrapperSize(S,u),!i.centeredSlides){const e=[];for(let n=0;n<u.length;n+=1){let o=u[n];i.roundLengths&&(o=Math.floor(o)),u[n]<=t.virtualSize-a&&e.push(o)}u=e,Math.floor(t.virtualSize-a)-Math.floor(u[u.length-1])>1&&u.push(t.virtualSize-a)}if(l&&i.loop){const e=m[0]+b;if(i.slidesPerGroup>1){const n=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),o=e*i.slidesPerGroup;for(let t=0;t<n;t+=1)u.push(u[u.length-1]+o)}for(let n=0;n<t.virtual.slidesBefore+t.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&u.push(u[u.length-1]+e),p.push(p[p.length-1]+e),t.virtualSize+=e}if(0===u.length&&(u=[0]),0!==b){const e=t.isHorizontal()&&r?"marginLeft":t.getDirectionLabel("marginRight");d.filter((t,e)=>!(i.cssMode&&!i.loop)||e!==d.length-1).forEach(t=>{t.style[e]=`${b}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let t=0;m.forEach(e=>{t+=e+(b||0)}),t-=b;const e=t>a?t-a:0;u=u.map(t=>t<=0?-g:t>e?e+f:t)}if(i.centerInsufficientSlides){let t=0;m.forEach(e=>{t+=e+(b||0)}),t-=b;const e=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(t+e<a){const i=(a-t-e)/2;u.forEach((t,e)=>{u[e]=t-i}),p.forEach((t,e)=>{p[e]=t+i})}}if(Object.assign(t,{slides:d,snapGrid:u,slidesGrid:p,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){ce(n,"--swiper-centered-offset-before",-u[0]+"px"),ce(n,"--swiper-centered-offset-after",t.size/2-m[m.length-1]/2+"px");const e=-t.snapGrid[0],i=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(t=>t+e),t.slidesGrid=t.slidesGrid.map(t=>t+i)}if(h!==c&&t.emit("slidesLengthChange"),u.length!==v&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),p.length!==_&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!(l||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const e=`${i.containerModifierClass}backface-hidden`,n=t.el.classList.contains(e);h<=i.maxBackfaceHiddenSlides?n||t.el.classList.add(e):n&&t.el.classList.remove(e)}}function He(t){const e=this,i=[],n=e.virtual&&e.params.virtual.enabled;let o,a=0;"number"==typeof t?e.setTransition(t):!0===t&&e.setTransition(e.params.speed);const r=t=>n?e.slides[e.getSlideIndexByData(t)]:e.slides[t];if("auto"!==e.params.slidesPerView&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(t=>{i.push(t)});else for(o=0;o<Math.ceil(e.params.slidesPerView);o+=1){const t=e.activeIndex+o;if(t>e.slides.length&&!n)break;i.push(r(t))}else i.push(r(e.activeIndex));for(o=0;o<i.length;o+=1)if(void 0!==i[o]){const t=i[o].offsetHeight;a=t>a?t:a}(a||0===a)&&(e.wrapperEl.style.height=`${a}px`)}function Ze(){const t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(t.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-i-t.cssOverflowAdjustment()}const Ve=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function Fe(t){void 0===t&&(t=this&&this.translate||0);const e=this,i=e.params,{slides:n,rtlTranslate:o,snapGrid:a}=e;if(0===n.length)return;void 0===n[0].swiperSlideOffset&&e.updateSlidesOffset();let r=-t;o&&(r=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let s=i.spaceBetween;"string"==typeof s&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*e.size:"string"==typeof s&&(s=parseFloat(s));for(let t=0;t<n.length;t+=1){const l=n[t];let c=l.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(c-=n[0].swiperSlideOffset);const d=(r+(i.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+s),h=(r-a[0]+(i.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+s),u=-(r-c),p=u+e.slidesSizesGrid[t],m=u>=0&&u<=e.size-e.slidesSizesGrid[t],g=u>=0&&u<e.size-1||p>1&&p<=e.size||u<=0&&p>=e.size;g&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(t)),Ve(l,g,i.slideVisibleClass),Ve(l,m,i.slideFullyVisibleClass),l.progress=o?-d:d,l.originalProgress=o?-h:h}}function Ue(t){const e=this;if(void 0===t){const i=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*i||0}const i=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:o,isBeginning:a,isEnd:r,progressLoop:s}=e;const l=a,c=r;if(0===n)o=0,a=!0,r=!0;else{o=(t-e.minTranslate())/n;const i=Math.abs(t-e.minTranslate())<1,s=Math.abs(t-e.maxTranslate())<1;a=i||o<=0,r=s||o>=1,i&&(o=0),s&&(o=1)}if(i.loop){const i=e.getSlideIndexByData(0),n=e.getSlideIndexByData(e.slides.length-1),o=e.slidesGrid[i],a=e.slidesGrid[n],r=e.slidesGrid[e.slidesGrid.length-1],l=Math.abs(t);s=l>=o?(l-o)/r:(l+r-a)/r,s>1&&(s-=1)}Object.assign(e,{progress:o,progressLoop:s,isBeginning:a,isEnd:r}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),a&&!l&&e.emit("reachBeginning toEdge"),r&&!c&&e.emit("reachEnd toEdge"),(l&&!a||c&&!r)&&e.emit("fromEdge"),e.emit("progress",o)}const Ge=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function We(){const t=this,{slides:e,params:i,slidesEl:n,activeIndex:o}=t,a=t.virtual&&i.virtual.enabled,r=t.grid&&i.grid&&i.grid.rows>1,s=t=>ue(n,`.${i.slideClass}${t}, swiper-slide${t}`)[0];let l,c,d;if(a)if(i.loop){let e=o-t.virtual.slidesBefore;e<0&&(e=t.virtual.slides.length+e),e>=t.virtual.slides.length&&(e-=t.virtual.slides.length),l=s(`[data-swiper-slide-index="${e}"]`)}else l=s(`[data-swiper-slide-index="${o}"]`);else r?(l=e.find(t=>t.column===o),d=e.find(t=>t.column===o+1),c=e.find(t=>t.column===o-1)):l=e[o];l&&(r||(d=_e(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!d&&(d=e[0]),c=ve(l,`.${i.slideClass}, swiper-slide`)[0],i.loop&&0===!c&&(c=e[e.length-1]))),e.forEach(t=>{Ge(t,t===l,i.slideActiveClass),Ge(t,t===d,i.slideNextClass),Ge(t,t===c,i.slidePrevClass)}),t.emitSlidesClasses()}const qe=(t,e)=>{if(!t||t.destroyed||!t.params)return;const i=e.closest(t.isElement?"swiper-slide":`.${t.params.slideClass}`);if(i){let e=i.querySelector(`.${t.params.lazyPreloaderClass}`);!e&&t.isElement&&(i.shadowRoot?e=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(e=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),e&&e.remove())})),e&&e.remove()}},Ye=(t,e)=>{if(!t.slides[e])return;const i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},Ke=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const n="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),o=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const i=o,a=[i-e];return a.push(...Array.from({length:e}).map((t,e)=>i+n+e)),void t.slides.forEach((e,i)=>{a.includes(e.column)&&Ye(t,i)})}const a=o+n-1;if(t.params.rewind||t.params.loop)for(let n=o-e;n<=a+e;n+=1){const e=(n%i+i)%i;(e<o||e>a)&&Ye(t,e)}else for(let n=Math.max(o-e,0);n<=Math.min(a+e,i-1);n+=1)n!==o&&(n>a||n<o)&&Ye(t,n)};function Xe(t){const{slidesGrid:e,params:i}=t,n=t.rtlTranslate?t.translate:-t.translate;let o;for(let t=0;t<e.length;t+=1)void 0!==e[t+1]?n>=e[t]&&n<e[t+1]-(e[t+1]-e[t])/2?o=t:n>=e[t]&&n<e[t+1]&&(o=t+1):n>=e[t]&&(o=t);return i.normalizeSlideIndex&&(o<0||void 0===o)&&(o=0),o}function Qe(t){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:o,activeIndex:a,realIndex:r,snapIndex:s}=e;let l,c=t;const d=t=>{let i=t-e.virtual.slidesBefore;return i<0&&(i=e.virtual.slides.length+i),i>=e.virtual.slides.length&&(i-=e.virtual.slides.length),i};if(void 0===c&&(c=Xe(e)),n.indexOf(i)>=0)l=n.indexOf(i);else{const t=Math.min(o.slidesPerGroupSkip,c);l=t+Math.floor((c-t)/o.slidesPerGroup)}if(l>=n.length&&(l=n.length-1),c===a&&!e.params.loop)return void(l!==s&&(e.snapIndex=l,e.emit("snapIndexChange")));if(c===a&&e.params.loop&&e.virtual&&e.params.virtual.enabled)return void(e.realIndex=d(c));const h=e.grid&&o.grid&&o.grid.rows>1;let u;if(e.virtual&&o.virtual.enabled&&o.loop)u=d(c);else if(h){const t=e.slides.find(t=>t.column===c);let i=parseInt(t.getAttribute("data-swiper-slide-index"),10);Number.isNaN(i)&&(i=Math.max(e.slides.indexOf(t),0)),u=Math.floor(i/o.grid.rows)}else if(e.slides[c]){const t=e.slides[c].getAttribute("data-swiper-slide-index");u=t?parseInt(t,10):c}else u=c;Object.assign(e,{previousSnapIndex:s,snapIndex:l,previousRealIndex:r,realIndex:u,previousIndex:a,activeIndex:c}),e.initialized&&Ke(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(r!==u&&e.emit("realIndexChange"),e.emit("slideChange"))}function Je(t,e){const i=this,n=i.params;let o=t.closest(`.${n.slideClass}, swiper-slide`);!o&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(t=>{!o&&t.matches&&t.matches(`.${n.slideClass}, swiper-slide`)&&(o=t)});let a,r=!1;if(o)for(let t=0;t<i.slides.length;t+=1)if(i.slides[t]===o){r=!0,a=t;break}if(!o||!r)return i.clickedSlide=void 0,void(i.clickedIndex=void 0);i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=a,n.slideToClickedSlide&&void 0!==i.clickedIndex&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var ti={updateSize:Re,updateSlides:Ne,updateAutoHeight:He,updateSlidesOffset:Ze,updateSlidesProgress:Fe,updateProgress:Ue,updateSlidesClasses:We,updateActiveIndex:Qe,updateClickedSlide:Je};function ei(t){void 0===t&&(t=this.isHorizontal()?"x":"y");const{params:e,rtlTranslate:i,translate:n,wrapperEl:o}=this;if(e.virtualTranslate)return i?-n:n;if(e.cssMode)return n;let a=ae(o,t);return a+=this.cssOverflowAdjustment(),i&&(a=-a),a||0}function ii(t,e){const i=this,{rtlTranslate:n,params:o,wrapperEl:a,progress:r}=i;let s=0,l=0;let c;i.isHorizontal()?s=n?-t:t:l=t,o.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?s:l,o.cssMode?a[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-s:-l:o.virtualTranslate||(i.isHorizontal()?s-=i.cssOverflowAdjustment():l-=i.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, 0px)`);const d=i.maxTranslate()-i.minTranslate();c=0===d?0:(t-i.minTranslate())/d,c!==r&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function ni(){return-this.snapGrid[0]}function oi(){return-this.snapGrid[this.snapGrid.length-1]}function ai(t,e,i,n,o){void 0===t&&(t=0),void 0===e&&(e=this.params.speed),void 0===i&&(i=!0),void 0===n&&(n=!0);const a=this,{params:r,wrapperEl:s}=a;if(a.animating&&r.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let d;if(d=n&&t>l?l:n&&t<c?c:t,a.updateProgress(d),r.cssMode){const t=a.isHorizontal();if(0===e)s[t?"scrollLeft":"scrollTop"]=-d;else{if(!a.support.smoothScroll)return de({swiper:a,targetPosition:-d,side:t?"left":"top"}),!0;s.scrollTo({[t?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===e?(a.setTransition(0),a.setTranslate(d),i&&(a.emit("beforeTransitionStart",e,o),a.emit("transitionEnd"))):(a.setTransition(e),a.setTranslate(d),i&&(a.emit("beforeTransitionStart",e,o),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(t){a&&!a.destroyed&&t.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,i&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var ri={getTranslate:ei,setTranslate:ii,minTranslate:ni,maxTranslate:oi,translateTo:ai};function si(t,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=0===t?"0ms":""),i.emit("setTransition",t,e)}function li(t){let{swiper:e,runCallbacks:i,direction:n,step:o}=t;const{activeIndex:a,previousIndex:r}=e;let s=n;s||(s=a>r?"next":a<r?"prev":"reset"),e.emit(`transition${o}`),i&&"reset"===s?e.emit(`slideResetTransition${o}`):i&&a!==r&&(e.emit(`slideChangeTransition${o}`),"next"===s?e.emit(`slideNextTransition${o}`):e.emit(`slidePrevTransition${o}`))}function ci(t,e){void 0===t&&(t=!0);const i=this,{params:n}=i;n.cssMode||(n.autoHeight&&i.updateAutoHeight(),li({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function di(t,e){void 0===t&&(t=!0);const i=this,{params:n}=i;i.animating=!1,n.cssMode||(i.setTransition(0),li({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var hi={setTransition:si,transitionStart:ci,transitionEnd:di};function ui(t,e,i,n,o){void 0===t&&(t=0),void 0===i&&(i=!0),"string"==typeof t&&(t=parseInt(t,10));const a=this;let r=t;r<0&&(r=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:h,rtlTranslate:u,wrapperEl:p,enabled:m}=a;if(!m&&!n&&!o||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;void 0===e&&(e=a.params.speed);const g=Math.min(a.params.slidesPerGroupSkip,r);let f=g+Math.floor((r-g)/a.params.slidesPerGroup);f>=l.length&&(f=l.length-1);const v=-l[f];if(s.normalizeSlideIndex)for(let t=0;t<c.length;t+=1){const e=-Math.floor(100*v),i=Math.floor(100*c[t]),n=Math.floor(100*c[t+1]);void 0!==c[t+1]?e>=i&&e<n-(n-i)/2?r=t:e>=i&&e<n&&(r=t+1):e>=i&&(r=t)}if(a.initialized&&r!==h){if(!a.allowSlideNext&&(u?v>a.translate&&v>a.minTranslate():v<a.translate&&v<a.minTranslate()))return!1;if(!a.allowSlidePrev&&v>a.translate&&v>a.maxTranslate()&&(h||0)!==r)return!1}let _;r!==(d||0)&&i&&a.emit("beforeSlideChangeStart"),a.updateProgress(v),_=r>h?"next":r<h?"prev":"reset";const b=a.virtual&&a.params.virtual.enabled;if(!(b&&o)&&(u&&-v===a.translate||!u&&v===a.translate))return a.updateActiveIndex(r),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==s.effect&&a.setTranslate(v),"reset"!==_&&(a.transitionStart(i,_),a.transitionEnd(i,_)),!1;if(s.cssMode){const t=a.isHorizontal(),i=u?v:-v;if(0===e)b&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),b&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[t?"scrollLeft":"scrollTop"]=i})):p[t?"scrollLeft":"scrollTop"]=i,b&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return de({swiper:a,targetPosition:i,side:t?"left":"top"}),!0;p.scrollTo({[t?"left":"top"]:i,behavior:"smooth"})}return!0}const y=Ie().isSafari;return b&&!o&&y&&a.isElement&&a.virtual.update(!1,!1,r),a.setTransition(e),a.setTranslate(v),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",e,n),a.transitionStart(i,_),0===e?a.transitionEnd(i,_):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(t){a&&!a.destroyed&&t.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(i,_))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function pi(t,e,i,n){if(void 0===t&&(t=0),void 0===i&&(i=!0),"string"==typeof t){t=parseInt(t,10)}const o=this;if(o.destroyed)return;void 0===e&&(e=o.params.speed);const a=o.grid&&o.params.grid&&o.params.grid.rows>1;let r=t;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)r+=o.virtual.slidesBefore;else{let t;if(a){const e=r*o.params.grid.rows;t=o.slides.find(t=>1*t.getAttribute("data-swiper-slide-index")===e).column}else t=o.getSlideIndexByData(r);const e=a?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:i}=o.params;let s=o.params.slidesPerView;"auto"===s?s=o.slidesPerViewDynamic():(s=Math.ceil(parseFloat(o.params.slidesPerView,10)),i&&s%2==0&&(s+=1));let l=e-t<s;if(i&&(l=l||t<Math.ceil(s/2)),n&&i&&"auto"!==o.params.slidesPerView&&!a&&(l=!1),l){const n=i?t<o.activeIndex?"prev":"next":t-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:n,slideTo:!0,activeSlideIndex:"next"===n?t+1:t-e+1,slideRealIndex:"next"===n?o.realIndex:void 0})}if(a){const t=r*o.params.grid.rows;r=o.slides.find(e=>1*e.getAttribute("data-swiper-slide-index")===t).column}else r=o.getSlideIndexByData(r)}return requestAnimationFrame(()=>{o.slideTo(r,e,i,n)}),o}function mi(t,e,i){void 0===e&&(e=!0);const n=this,{enabled:o,params:a,animating:r}=n;if(!o||n.destroyed)return n;void 0===t&&(t=n.params.speed);let s=a.slidesPerGroup;"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(s=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<a.slidesPerGroupSkip?1:s,c=n.virtual&&a.virtual.enabled;if(a.loop){if(r&&!c&&a.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,t,e,i)}),!0}return a.rewind&&n.isEnd?n.slideTo(0,t,e,i):n.slideTo(n.activeIndex+l,t,e,i)}function gi(t,e,i){void 0===e&&(e=!0);const n=this,{params:o,snapGrid:a,slidesGrid:r,rtlTranslate:s,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;void 0===t&&(t=n.params.speed);const d=n.virtual&&o.virtual.enabled;if(o.loop){if(c&&!d&&o.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}function h(t){return t<0?-Math.floor(Math.abs(t)):Math.floor(t)}const u=h(s?n.translate:-n.translate),p=a.map(t=>h(t)),m=o.freeMode&&o.freeMode.enabled;let g=a[p.indexOf(u)-1];if(void 0===g&&(o.cssMode||m)){let t;a.forEach((e,i)=>{u>=e&&(t=i)}),void 0!==t&&(g=m?a[t]:a[t>0?t-1:t])}let f=0;if(void 0!==g&&(f=r.indexOf(g),f<0&&(f=n.activeIndex-1),"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),o.rewind&&n.isBeginning){const o=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(o,t,e,i)}return o.loop&&0===n.activeIndex&&o.cssMode?(requestAnimationFrame(()=>{n.slideTo(f,t,e,i)}),!0):n.slideTo(f,t,e,i)}function fi(t,e,i){void 0===e&&(e=!0);const n=this;if(!n.destroyed)return void 0===t&&(t=n.params.speed),n.slideTo(n.activeIndex,t,e,i)}function vi(t,e,i,n){void 0===e&&(e=!0),void 0===n&&(n=.5);const o=this;if(o.destroyed)return;void 0===t&&(t=o.params.speed);let a=o.activeIndex;const r=Math.min(o.params.slidesPerGroupSkip,a),s=r+Math.floor((a-r)/o.params.slidesPerGroup),l=o.rtlTranslate?o.translate:-o.translate;if(l>=o.snapGrid[s]){const t=o.snapGrid[s];l-t>(o.snapGrid[s+1]-t)*n&&(a+=o.params.slidesPerGroup)}else{const t=o.snapGrid[s-1];l-t<=(o.snapGrid[s]-t)*n&&(a-=o.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,o.slidesGrid.length-1),o.slideTo(a,t,e,i)}function _i(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:i}=t,n="auto"===e.slidesPerView?t.slidesPerViewDynamic():e.slidesPerView;let o,a=t.getSlideIndexWhenGrid(t.clickedIndex);const r=t.isElement?"swiper-slide":`.${e.slideClass}`,s=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;o=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(o):a>(s?(t.slides.length-n)/2-(t.params.grid.rows-1):t.slides.length-n)?(t.loopFix(),a=t.getSlideIndex(ue(i,`${r}[data-swiper-slide-index="${o}"]`)[0]),ie(()=>{t.slideTo(a)})):t.slideTo(a)}else t.slideTo(a)}var bi={slideTo:ui,slideToLoop:pi,slideNext:mi,slidePrev:gi,slideReset:fi,slideToClosest:vi,slideToClickedSlide:_i};function yi(t,e){const i=this,{params:n,slidesEl:o}=i;if(!n.loop||i.virtual&&i.params.virtual.enabled)return;const a=()=>{ue(o,`.${n.slideClass}, swiper-slide`).forEach((t,e)=>{t.setAttribute("data-swiper-slide-index",e)})},r=i.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||r)&&(()=>{const t=ue(o,`.${n.slideBlankClass}`);t.forEach(t=>{t.remove()}),t.length>0&&(i.recalcSlides(),i.updateSlides())})();const s=n.slidesPerGroup*(r?n.grid.rows:1),l=i.slides.length%s!==0,c=r&&i.slides.length%n.grid.rows!==0,d=t=>{for(let e=0;e<t;e+=1){const t=i.isElement?fe("swiper-slide",[n.slideBlankClass]):fe("div",[n.slideClass,n.slideBlankClass]);i.slidesEl.append(t)}};if(l){if(n.loopAddBlankSlides){d(s-i.slides.length%s),i.recalcSlides(),i.updateSlides()}else ge("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(c){if(n.loopAddBlankSlides){d(n.grid.rows-i.slides.length%n.grid.rows),i.recalcSlides(),i.updateSlides()}else ge("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();i.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next",initial:e})}function wi(t){let{slideRealIndex:e,slideTo:i=!0,direction:n,setTranslate:o,activeSlideIndex:a,initial:r,byController:s,byMousewheel:l}=void 0===t?{}:t;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:h,allowSlideNext:u,slidesEl:p,params:m}=c,{centeredSlides:g,initialSlide:f}=m;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&m.virtual.enabled)return i&&(m.centeredSlides||0!==c.snapIndex?m.centeredSlides&&c.snapIndex<m.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0):c.slideTo(c.virtual.slides.length,0,!1,!0)),c.allowSlidePrev=h,c.allowSlideNext=u,void c.emit("loopFix");let v=m.slidesPerView;"auto"===v?v=c.slidesPerViewDynamic():(v=Math.ceil(parseFloat(m.slidesPerView,10)),g&&v%2==0&&(v+=1));const _=m.slidesPerGroupAuto?v:m.slidesPerGroup;let b=g?Math.max(_,Math.ceil(v/2)):_;b%_!==0&&(b+=_-b%_),b+=m.loopAdditionalSlides,c.loopedSlides=b;const y=c.grid&&m.grid&&m.grid.rows>1;d.length<v+b||"cards"===c.params.effect&&d.length<v+2*b?ge("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&"row"===m.grid.fill&&ge("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],x=[],C=y?Math.ceil(d.length/m.grid.rows):d.length,S=r&&C-f<v&&!g;let T=S?f:c.activeIndex;void 0===a?a=c.getSlideIndex(d.find(t=>t.classList.contains(m.slideActiveClass))):T=a;const k="next"===n||!n,A="prev"===n||!n;let E=0,M=0;const P=(y?d[a].column:a)+(g&&void 0===o?-v/2+.5:0);if(P<b){E=Math.max(b-P,_);for(let t=0;t<b-P;t+=1){const e=t-Math.floor(t/C)*C;if(y){const t=C-e-1;for(let e=d.length-1;e>=0;e-=1)d[e].column===t&&w.push(e)}else w.push(C-e-1)}}else if(P+v>C-b){M=Math.max(P-(C-2*b),_),S&&(M=Math.max(M,v-C+f+1));for(let t=0;t<M;t+=1){const e=t-Math.floor(t/C)*C;y?d.forEach((t,i)=>{t.column===e&&x.push(i)}):x.push(e)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),"cards"===c.params.effect&&d.length<v+2*b&&(x.includes(a)&&x.splice(x.indexOf(a),1),w.includes(a)&&w.splice(w.indexOf(a),1)),A&&w.forEach(t=>{d[t].swiperLoopMoveDOM=!0,p.prepend(d[t]),d[t].swiperLoopMoveDOM=!1}),k&&x.forEach(t=>{d[t].swiperLoopMoveDOM=!0,p.append(d[t]),d[t].swiperLoopMoveDOM=!1}),c.recalcSlides(),"auto"===m.slidesPerView?c.updateSlides():y&&(w.length>0&&A||x.length>0&&k)&&c.slides.forEach((t,e)=>{c.grid.updateSlide(e,t,c.slides)}),m.watchSlidesProgress&&c.updateSlidesOffset(),i)if(w.length>0&&A){if(void 0===e){const t=c.slidesGrid[T],e=c.slidesGrid[T+E]-t;l?c.setTranslate(c.translate-e):(c.slideTo(T+Math.ceil(E),0,!1,!0),o&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-e,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-e))}else if(o){const t=y?w.length/m.grid.rows:w.length;c.slideTo(c.activeIndex+t,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(x.length>0&&k)if(void 0===e){const t=c.slidesGrid[T],e=c.slidesGrid[T-M]-t;l?c.setTranslate(c.translate-e):(c.slideTo(T-M,0,!1,!0),o&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-e,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-e))}else{const t=y?x.length/m.grid.rows:x.length;c.slideTo(c.activeIndex-t,0,!1,!0)}if(c.allowSlidePrev=h,c.allowSlideNext=u,c.controller&&c.controller.control&&!s){const t={slideRealIndex:e,direction:n,setTranslate:o,activeSlideIndex:a,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...t,slideTo:e.params.slidesPerView===m.slidesPerView&&i})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...t,slideTo:c.controller.control.params.slidesPerView===m.slidesPerView&&i})}c.emit("loopFix")}function xi(){const t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const n=[];t.slides.forEach(t=>{const e=void 0===t.swiperSlideIndex?1*t.getAttribute("data-swiper-slide-index"):t.swiperSlideIndex;n[e]=t}),t.slides.forEach(t=>{t.removeAttribute("data-swiper-slide-index")}),n.forEach(t=>{i.append(t)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Ci={loopCreate:yi,loopFix:wi,loopDestroy:xi};function Si(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i="container"===e.params.touchEventsTarget?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ti(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t["container"===t.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var ki={setGrabCursor:Si,unsetGrabCursor:Ti};function Ai(t,e){return void 0===e&&(e=this),function e(i){if(!i||i===Xt()||i===Jt())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(t);return n||i.getRootNode?n||e(i.getRootNode().host):null}(e)}function Ei(t,e,i){const n=Jt(),{params:o}=t,a=o.edgeSwipeDetection,r=o.edgeSwipeThreshold;return!a||!(i<=r||i>=n.innerWidth-r)||"prevent"===a&&(e.preventDefault(),!0)}function Mi(t){const e=this,i=Xt();let n=t;n.originalEvent&&(n=n.originalEvent);const o=e.touchEventsData;if("pointerdown"===n.type){if(null!==o.pointerId&&o.pointerId!==n.pointerId)return;o.pointerId=n.pointerId}else"touchstart"===n.type&&1===n.targetTouches.length&&(o.touchId=n.targetTouches[0].identifier);if("touchstart"===n.type)return void Ei(e,n,n.targetTouches[0].pageX);const{params:a,touches:r,enabled:s}=e;if(!s)return;if(!a.simulateTouch&&"mouse"===n.pointerType)return;if(e.animating&&a.preventInteractionOnTransition)return;!e.animating&&a.cssMode&&a.loop&&e.loopFix();let l=n.target;if("wrapper"===a.touchEventsTarget&&!me(l,e.wrapperEl))return;if("which"in n&&3===n.which)return;if("button"in n&&n.button>0)return;if(o.isTouched&&o.isMoved)return;const c=!!a.noSwipingClass&&""!==a.noSwipingClass,d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const h=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,u=!(!n.target||!n.target.shadowRoot);if(a.noSwiping&&(u?Ai(h,l):l.closest(h)))return void(e.allowClick=!0);if(a.swipeHandler&&!l.closest(a.swipeHandler))return;r.currentX=n.pageX,r.currentY=n.pageY;const p=r.currentX,m=r.currentY;if(!Ei(e,n,p))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=p,r.startY=m,o.touchStartTime=ne(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1);let g=!0;l.matches(o.focusableElements)&&(g=!1,"SELECT"===l.nodeName&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==l&&("mouse"===n.pointerType||"mouse"!==n.pointerType&&!l.matches(o.focusableElements))&&i.activeElement.blur();const f=g&&e.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!f||l.isContentEditable||n.preventDefault(),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.animating&&!a.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function Pi(t){const e=Xt(),i=this,n=i.touchEventsData,{params:o,touches:a,rtlTranslate:r,enabled:s}=i;if(!s)return;if(!o.simulateTouch&&"mouse"===t.pointerType)return;let l,c=t;if(c.originalEvent&&(c=c.originalEvent),"pointermove"===c.type){if(null!==n.touchId)return;if(c.pointerId!==n.pointerId)return}if("touchmove"===c.type){if(l=[...c.changedTouches].find(t=>t.identifier===n.touchId),!l||l.identifier!==n.touchId)return}else l=c;if(!n.isTouched)return void(n.startMoving&&n.isScrolling&&i.emit("touchMoveOpposite",c));const d=l.pageX,h=l.pageY;if(c.preventedByNestedSwiper)return a.startX=d,void(a.startY=h);if(!i.allowTouchMove)return c.target.matches(n.focusableElements)||(i.allowClick=!1),void(n.isTouched&&(Object.assign(a,{startX:d,startY:h,currentX:d,currentY:h}),n.touchStartTime=ne()));if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(h<a.startY&&i.translate<=i.maxTranslate()||h>a.startY&&i.translate>=i.minTranslate())return n.isTouched=!1,void(n.isMoved=!1)}else{if(r&&(d>a.startX&&-i.translate<=i.maxTranslate()||d<a.startX&&-i.translate>=i.minTranslate()))return;if(!r&&(d<a.startX&&i.translate<=i.maxTranslate()||d>a.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==c.target&&"mouse"!==c.pointerType&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(n.focusableElements))return n.isMoved=!0,void(i.allowClick=!1);n.allowTouchCallbacks&&i.emit("touchMove",c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=d,a.currentY=h;const u=a.currentX-a.startX,p=a.currentY-a.startY;if(i.params.threshold&&Math.sqrt(u**2+p**2)<i.params.threshold)return;if(void 0===n.isScrolling){let t;i.isHorizontal()&&a.currentY===a.startY||i.isVertical()&&a.currentX===a.startX?n.isScrolling=!1:u*u+p*p>=25&&(t=180*Math.atan2(Math.abs(p),Math.abs(u))/Math.PI,n.isScrolling=i.isHorizontal()?t>o.touchAngle:90-t>o.touchAngle)}if(n.isScrolling&&i.emit("touchMoveOpposite",c),void 0===n.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(n.startMoving=!0)),n.isScrolling||"touchmove"===c.type&&n.preventTouchMoveFromPointerMove)return void(n.isTouched=!1);if(!n.startMoving)return;i.allowClick=!1,!o.cssMode&&c.cancelable&&c.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&c.stopPropagation();let m=i.isHorizontal()?u:p,g=i.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;o.oneWayMovement&&(m=Math.abs(m)*(r?1:-1),g=Math.abs(g)*(r?1:-1)),a.diff=m,m*=o.touchRatio,r&&(m=-m,g=-g);const f=i.touchesDirection;i.swipeDirection=m>0?"prev":"next",i.touchesDirection=g>0?"prev":"next";const v=i.params.loop&&!o.cssMode,_="next"===i.touchesDirection&&i.allowSlideNext||"prev"===i.touchesDirection&&i.allowSlidePrev;if(!n.isMoved){if(v&&_&&i.loopFix({direction:i.swipeDirection}),n.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const t=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(t)}n.allowMomentumBounce=!1,!o.grabCursor||!0!==i.allowSlideNext&&!0!==i.allowSlidePrev||i.setGrabCursor(!0),i.emit("sliderFirstMove",c)}if((new Date).getTime(),!1!==o._loopSwapReset&&n.isMoved&&n.allowThresholdMove&&f!==i.touchesDirection&&v&&_&&Math.abs(m)>=1)return Object.assign(a,{startX:d,startY:h,currentX:d,currentY:h,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,void(n.startTranslate=n.currentTranslate);i.emit("sliderMove",c),n.isMoved=!0,n.currentTranslate=m+n.startTranslate;let b=!0,y=o.resistanceRatio;if(o.touchReleaseOnEdges&&(y=0),m>0?(v&&_&&n.allowThresholdMove&&n.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-("auto"!==o.slidesPerView&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>i.minTranslate()&&(b=!1,o.resistance&&(n.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+n.startTranslate+m)**y))):m<0&&(v&&_&&n.allowThresholdMove&&n.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+("auto"!==o.slidesPerView&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-("auto"===o.slidesPerView?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),n.currentTranslate<i.maxTranslate()&&(b=!1,o.resistance&&(n.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-n.startTranslate-m)**y))),b&&(c.preventedByNestedSwiper=!0),!i.allowSlideNext&&"next"===i.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!i.allowSlidePrev&&"prev"===i.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),i.allowSlidePrev||i.allowSlideNext||(n.currentTranslate=n.startTranslate),o.threshold>0){if(!(Math.abs(m)>o.threshold||n.allowThresholdMove))return void(n.currentTranslate=n.startTranslate);if(!n.allowThresholdMove)return n.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,n.currentTranslate=n.startTranslate,void(a.diff=i.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}o.followFinger&&!o.cssMode&&((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(n.currentTranslate),i.setTranslate(n.currentTranslate))}function $i(t){const e=this,i=e.touchEventsData;let n,o=t;o.originalEvent&&(o=o.originalEvent);if("touchend"===o.type||"touchcancel"===o.type){if(n=[...o.changedTouches].find(t=>t.identifier===i.touchId),!n||n.identifier!==i.touchId)return}else{if(null!==i.touchId)return;if(o.pointerId!==i.pointerId)return;n=o}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(o.type)){if(!(["pointercancel","contextmenu"].includes(o.type)&&(e.browser.isSafari||e.browser.isWebView)))return}i.pointerId=null,i.touchId=null;const{params:a,touches:r,rtlTranslate:s,slidesGrid:l,enabled:c}=e;if(!c)return;if(!a.simulateTouch&&"mouse"===o.pointerType)return;if(i.allowTouchCallbacks&&e.emit("touchEnd",o),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&a.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);a.grabCursor&&i.isMoved&&i.isTouched&&(!0===e.allowSlideNext||!0===e.allowSlidePrev)&&e.setGrabCursor(!1);const d=ne(),h=d-i.touchStartTime;if(e.allowClick){const t=o.path||o.composedPath&&o.composedPath();e.updateClickedSlide(t&&t[0]||o.target,t),e.emit("tap click",o),h<300&&d-i.lastClickTime<300&&e.emit("doubleTap doubleClick",o)}if(i.lastClickTime=ne(),ie(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||0===r.diff&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);let u;if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,u=a.followFinger?s?e.translate:-e.translate:-i.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled)return void e.freeMode.onTouchEnd({currentPos:u});const p=u>=-e.maxTranslate()&&!e.params.loop;let m=0,g=e.slidesSizesGrid[0];for(let t=0;t<l.length;t+=t<a.slidesPerGroupSkip?1:a.slidesPerGroup){const e=t<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==l[t+e]?(p||u>=l[t]&&u<l[t+e])&&(m=t,g=l[t+e]-l[t]):(p||u>=l[t])&&(m=t,g=l[l.length-1]-l[l.length-2])}let f=null,v=null;a.rewind&&(e.isBeginning?v=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const _=(u-l[m])/g,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes)return void e.slideTo(e.activeIndex);"next"===e.swipeDirection&&(_>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:m+b):e.slideTo(m)),"prev"===e.swipeDirection&&(_>1-a.longSwipesRatio?e.slideTo(m+b):null!==v&&_<0&&Math.abs(_)>a.longSwipesRatio?e.slideTo(v):e.slideTo(m))}else{if(!a.shortSwipes)return void e.slideTo(e.activeIndex);e.navigation&&(o.target===e.navigation.nextEl||o.target===e.navigation.prevEl)?o.target===e.navigation.nextEl?e.slideTo(m+b):e.slideTo(m):("next"===e.swipeDirection&&e.slideTo(null!==f?f:m+b),"prev"===e.swipeDirection&&e.slideTo(null!==v?v:m))}}function Oi(){const t=this,{params:e,el:i}=t;if(i&&0===i.offsetWidth)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:o,snapGrid:a}=t,r=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const s=r&&e.loop;!("auto"===e.slidesPerView||e.slidesPerView>1)||!t.isEnd||t.isBeginning||t.params.centeredSlides||s?t.params.loop&&!r?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0):t.slideTo(t.slides.length-1,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=o,t.allowSlideNext=n,t.params.watchOverflow&&a!==t.snapGrid&&t.checkOverflow()}function Li(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function zi(){const t=this,{wrapperEl:e,rtlTranslate:i,enabled:n}=t;if(!n)return;let o;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,0===t.translate&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();const a=t.maxTranslate()-t.minTranslate();o=0===a?0:(t.translate-t.minTranslate())/a,o!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Ii(t){const e=this;qe(e,t.target),e.params.cssMode||"auto"!==e.params.slidesPerView&&!e.params.autoHeight||e.update()}function Di(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Bi=(t,e)=>{const i=Xt(),{params:n,el:o,wrapperEl:a,device:r}=t,s=!!n.nested,l="on"===e?"addEventListener":"removeEventListener",c=e;o&&"string"!=typeof o&&(i[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:s}),o[l]("touchstart",t.onTouchStart,{passive:!1}),o[l]("pointerdown",t.onTouchStart,{passive:!1}),i[l]("touchmove",t.onTouchMove,{passive:!1,capture:s}),i[l]("pointermove",t.onTouchMove,{passive:!1,capture:s}),i[l]("touchend",t.onTouchEnd,{passive:!0}),i[l]("pointerup",t.onTouchEnd,{passive:!0}),i[l]("pointercancel",t.onTouchEnd,{passive:!0}),i[l]("touchcancel",t.onTouchEnd,{passive:!0}),i[l]("pointerout",t.onTouchEnd,{passive:!0}),i[l]("pointerleave",t.onTouchEnd,{passive:!0}),i[l]("contextmenu",t.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&o[l]("click",t.onClick,!0),n.cssMode&&a[l]("scroll",t.onScroll),n.updateOnWindowResize?t[c](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Oi,!0):t[c]("observerUpdate",Oi,!0),o[l]("load",t.onLoad,{capture:!0}))};function ji(){const t=this,{params:e}=t;t.onTouchStart=Mi.bind(t),t.onTouchMove=Pi.bind(t),t.onTouchEnd=$i.bind(t),t.onDocumentTouchStart=Di.bind(t),e.cssMode&&(t.onScroll=zi.bind(t)),t.onClick=Li.bind(t),t.onLoad=Ii.bind(t),Bi(t,"on")}function Ri(){Bi(this,"off")}var Ni={attachEvents:ji,detachEvents:Ri};const Hi=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Zi(){const t=this,{realIndex:e,initialized:i,params:n,el:o}=t,a=n.breakpoints;if(!a||a&&0===Object.keys(a).length)return;const r=Xt(),s="window"!==n.breakpointsBase&&n.breakpointsBase?"container":n.breakpointsBase,l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?t.el:r.querySelector(n.breakpointsBase),c=t.getBreakpoint(a,s,l);if(!c||t.currentBreakpoint===c)return;const d=(c in a?a[c]:void 0)||t.originalParams,h=Hi(t,n),u=Hi(t,d),p=t.params.grabCursor,m=d.grabCursor,g=n.enabled;h&&!u?(o.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),t.emitContainerClasses()):!h&&u&&(o.classList.add(`${n.containerModifierClass}grid`),(d.grid.fill&&"column"===d.grid.fill||!d.grid.fill&&"column"===n.grid.fill)&&o.classList.add(`${n.containerModifierClass}grid-column`),t.emitContainerClasses()),p&&!m?t.unsetGrabCursor():!p&&m&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(e=>{if(void 0===d[e])return;const i=n[e]&&n[e].enabled,o=d[e]&&d[e].enabled;i&&!o&&t[e].disable(),!i&&o&&t[e].enable()});const f=d.direction&&d.direction!==n.direction,v=n.loop&&(d.slidesPerView!==n.slidesPerView||f),_=n.loop;f&&i&&t.changeDirection(),le(t.params,d);const b=t.params.enabled,y=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),g&&!b?t.disable():!g&&b&&t.enable(),t.currentBreakpoint=c,t.emit("_beforeBreakpoint",d),i&&(v?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!_&&y?(t.loopCreate(e),t.updateSlides()):_&&!y&&t.loopDestroy()),t.emit("breakpoint",d)}function Vi(t,e,i){if(void 0===e&&(e="window"),!t||"container"===e&&!i)return;let n=!1;const o=Jt(),a="window"===e?o.innerHeight:i.clientHeight,r=Object.keys(t).map(t=>{if("string"==typeof t&&0===t.indexOf("@")){const e=parseFloat(t.substr(1));return{value:a*e,point:t}}return{value:t,point:t}});r.sort((t,e)=>parseInt(t.value,10)-parseInt(e.value,10));for(let t=0;t<r.length;t+=1){const{point:a,value:s}=r[t];"window"===e?o.matchMedia(`(min-width: ${s}px)`).matches&&(n=a):s<=i.clientWidth&&(n=a)}return n||"max"}var Fi={setBreakpoint:Zi,getBreakpoint:Vi};function Ui(t,e){const i=[];return t.forEach(t=>{"object"==typeof t?Object.keys(t).forEach(n=>{t[n]&&i.push(e+n)}):"string"==typeof t&&i.push(e+t)}),i}function Gi(){const t=this,{classNames:e,params:i,rtl:n,el:o,device:a}=t,r=Ui(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:n},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&"column"===i.grid.fill},{android:a.android},{ios:a.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...r),o.classList.add(...e),t.emitContainerClasses()}function Wi(){const{el:t,classNames:e}=this;t&&"string"!=typeof t&&(t.classList.remove(...e),this.emitContainerClasses())}var qi={addClasses:Gi,removeClasses:Wi};function Yi(){const t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:n}=i;if(n){const e=t.slides.length-1,i=t.slidesGrid[e]+t.slidesSizesGrid[e]+2*n;t.isLocked=t.size>i}else t.isLocked=1===t.snapGrid.length;!0===i.allowSlideNext&&(t.allowSlideNext=!t.isLocked),!0===i.allowSlidePrev&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Ki={checkOverflow:Yi},Xi={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Qi(t,e){return function(i){void 0===i&&(i={});const n=Object.keys(i)[0],o=i[n];"object"==typeof o&&null!==o?(!0===t[n]&&(t[n]={enabled:!0}),"navigation"===n&&t[n]&&t[n].enabled&&!t[n].prevEl&&!t[n].nextEl&&(t[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&t[n]&&t[n].enabled&&!t[n].el&&(t[n].auto=!0),n in t&&"enabled"in o?("object"!=typeof t[n]||"enabled"in t[n]||(t[n].enabled=!0),t[n]||(t[n]={enabled:!1}),le(e,i)):le(e,i)):le(e,i)}}const Ji={eventsEmitter:je,update:ti,translate:ri,transition:hi,slide:bi,loop:Ci,grabCursor:ki,events:Ni,breakpoints:Fi,checkOverflow:Ki,classes:qi},tn={};class en{constructor(){let t,e;for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];1===n.length&&n[0].constructor&&"Object"===Object.prototype.toString.call(n[0]).slice(8,-1)?e=n[0]:[t,e]=n,e||(e={}),e=le({},e),t&&!e.el&&(e.el=t);const a=Xt();if(e.el&&"string"==typeof e.el&&a.querySelectorAll(e.el).length>1){const t=[];return a.querySelectorAll(e.el).forEach(i=>{const n=le({},e,{el:i});t.push(new en(n))}),t}const r=this;r.__swiper__=!0,r.support=$e(),r.device=Le({userAgent:e.userAgent}),r.browser=Ie(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],e.modules&&Array.isArray(e.modules)&&r.modules.push(...e.modules);const s={};r.modules.forEach(t=>{t({params:e,swiper:r,extendParams:Qi(e,s),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=le({},Xi,s);return r.params=le({},l,tn,e),r.originalParams=le({},r.params),r.passedParams=le({},e),r.params&&r.params.on&&Object.keys(r.params.on).forEach(t=>{r.on(t,r.params.on[t])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:e,params:i}=this,n=ye(ue(e,`.${i.slideClass}, swiper-slide`)[0]);return ye(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(e=>1*e.getAttribute("data-swiper-slide-index")===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&("column"===this.params.grid.fill?t=Math.floor(t/this.params.grid.rows):"row"===this.params.grid.fill&&(t%=Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const{slidesEl:t,params:e}=this;this.slides=ue(t,`.${e.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const i=this;t=Math.min(Math.max(t,0),1);const n=i.minTranslate(),o=(i.maxTranslate()-n)*t+n;i.translateTo(o,void 0===e?0:e),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(e=>0===e.indexOf("swiper")||0===e.indexOf(t.params.containerModifierClass));t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(t=>0===t.indexOf("swiper-slide")||0===t.indexOf(e.params.slideClass)).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(i=>{const n=t.getSlideClasses(i);e.push({slideEl:i,classNames:n}),t.emit("_slideClass",i,n)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){void 0===t&&(t="current"),void 0===e&&(e=!1);const{params:i,slides:n,slidesGrid:o,slidesSizesGrid:a,size:r,activeIndex:s}=this;let l=1;if("number"==typeof i.slidesPerView)return i.slidesPerView;if(i.centeredSlides){let t,e=n[s]?Math.ceil(n[s].swiperSlideSize):0;for(let i=s+1;i<n.length;i+=1)n[i]&&!t&&(e+=Math.ceil(n[i].swiperSlideSize),l+=1,e>r&&(t=!0));for(let i=s-1;i>=0;i-=1)n[i]&&!t&&(e+=n[i].swiperSlideSize,l+=1,e>r&&(t=!0))}else if("current"===t)for(let t=s+1;t<n.length;t+=1){(e?o[t]+a[t]-o[s]<r:o[t]-o[s]<r)&&(l+=1)}else for(let t=s-1;t>=0;t-=1){o[s]-o[t]<r&&(l+=1)}return l}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:i}=t;function n(){const e=t.rtlTranslate?-1*t.translate:t.translate,i=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(i.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(e=>{e.complete&&qe(t,e)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&t.updateAutoHeight();else{if(("auto"===i.slidesPerView||i.slidesPerView>1)&&t.isEnd&&!i.centeredSlides){const e=t.virtual&&i.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(e.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||n()}i.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){void 0===e&&(e=!0);const i=this,n=i.params.direction;return t||(t="horizontal"===n?"vertical":"horizontal"),t===n||"horizontal"!==t&&"vertical"!==t||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.forEach(e=>{"vertical"===t?e.style.width="":e.style.height=""}),i.emit("changeDirection"),e&&i.update()),i}changeLanguageDirection(t){const e=this;e.rtl&&"rtl"===t||!e.rtl&&"ltr"===t||(e.rtl="rtl"===t,e.rtlTranslate="horizontal"===e.params.direction&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let i=t||e.params.el;if("string"==typeof i&&(i=document.querySelector(i)),!i)return!1;i.swiper=e,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===e.params.swiperElementNodeName.toUpperCase()&&(e.isElement=!0);const n=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(i&&i.shadowRoot&&i.shadowRoot.querySelector){return i.shadowRoot.querySelector(n())}return ue(i,n())[0]})();return!o&&e.params.createElements&&(o=fe("div",e.params.wrapperClass),i.append(o),ue(i,`.${e.params.slideClass}`).forEach(t=>{o.append(t)})),Object.assign(e,{el:i,wrapperEl:o,slidesEl:e.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:e.isElement?i.parentNode.host:i,mounted:!0,rtl:"rtl"===i.dir.toLowerCase()||"rtl"===be(i,"direction"),rtlTranslate:"horizontal"===e.params.direction&&("rtl"===i.dir.toLowerCase()||"rtl"===be(i,"direction")),wrongRTL:"-webkit-box"===be(o,"display")}),!0}init(t){const e=this;if(e.initialized)return e;if(!1===e.mount(t))return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(void 0,!0),e.attachEvents();const i=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&i.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(t=>{t.complete?qe(e,t):t.addEventListener("load",t=>{qe(e,t.target)})}),Ke(e),e.initialized=!0,Ke(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){void 0===t&&(t=!0),void 0===e&&(e=!0);const i=this,{params:n,el:o,wrapperEl:a,slides:r}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),e&&(i.removeClasses(),o&&"string"!=typeof o&&o.removeAttribute("style"),a&&a.removeAttribute("style"),r&&r.length&&r.forEach(t=>{t.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),t.removeAttribute("style"),t.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(t=>{i.off(t)}),!1!==t&&(i.el&&"string"!=typeof i.el&&(i.el.swiper=null),ee(i)),i.destroyed=!0),null}static extendDefaults(t){le(tn,t)}static get extendedDefaults(){return tn}static get defaults(){return Xi}static installModule(t){en.prototype.__modules__||(en.prototype.__modules__=[]);const e=en.prototype.__modules__;"function"==typeof t&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>en.installModule(t)),en):(en.installModule(t),en)}}function nn(t,e,i,n){return t.params.createElements&&Object.keys(n).forEach(o=>{if(!i[o]&&!0===i.auto){let a=ue(t.el,`.${n[o]}`)[0];a||(a=fe("div",n[o]),a.className=n[o],t.el.append(a)),i[o]=a,e[o]=a}}),i}function on(t){return void 0===t&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function an(t){let{swiper:e,extendParams:i,on:n,emit:o}=t;const a="swiper-pagination";let r;i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let s=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function c(t,i){const{bulletActiveClass:n}=e.params.pagination;t&&(t=t[("prev"===i?"previous":"next")+"ElementSibling"])&&(t.classList.add(`${n}-${i}`),(t=t[("prev"===i?"previous":"next")+"ElementSibling"])&&t.classList.add(`${n}-${i}-${i}`))}function d(t){const i=t.target.closest(on(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const n=ye(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===n)return;const t=(o=e.realIndex,a=n,r=e.slides.length,(a%=r)===1+(o%=r)?"next":a===o-1?"previous":void 0);"next"===t?e.slideNext():"previous"===t?e.slidePrev():e.slideToLoop(n)}else e.slideTo(n);var o,a,r}function h(){const t=e.rtl,i=e.params.pagination;if(l())return;let n,a,d=e.pagination.el;d=Se(d);const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,u=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(a=e.previousRealIndex||0,n=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(n=e.snapIndex,a=e.previousSnapIndex):(a=e.previousIndex||0,n=e.activeIndex||0),"bullets"===i.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const o=e.pagination.bullets;let l,h,u;if(i.dynamicBullets&&(r=Ce(o[0],e.isHorizontal()?"width":"height"),d.forEach(t=>{t.style[e.isHorizontal()?"width":"height"]=r*(i.dynamicMainBullets+4)+"px"}),i.dynamicMainBullets>1&&void 0!==a&&(s+=n-(a||0),s>i.dynamicMainBullets-1?s=i.dynamicMainBullets-1:s<0&&(s=0)),l=Math.max(n-s,0),h=l+(Math.min(o.length,i.dynamicMainBullets)-1),u=(h+l)/2),o.forEach(t=>{const e=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(t=>`${i.bulletActiveClass}${t}`)].map(t=>"string"==typeof t&&t.includes(" ")?t.split(" "):t).flat();t.classList.remove(...e)}),d.length>1)o.forEach(t=>{const o=ye(t);o===n?t.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&t.setAttribute("part","bullet"),i.dynamicBullets&&(o>=l&&o<=h&&t.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),o===l&&c(t,"prev"),o===h&&c(t,"next"))});else{const t=o[n];if(t&&t.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&o.forEach((t,e)=>{t.setAttribute("part",e===n?"bullet-active":"bullet")}),i.dynamicBullets){const t=o[l],e=o[h];for(let t=l;t<=h;t+=1)o[t]&&o[t].classList.add(...`${i.bulletActiveClass}-main`.split(" "));c(t,"prev"),c(e,"next")}}if(i.dynamicBullets){const n=Math.min(o.length,i.dynamicMainBullets+4),a=(r*n-r)/2-u*r,s=t?"right":"left";o.forEach(t=>{t.style[e.isHorizontal()?s:"top"]=`${a}px`})}}d.forEach((t,a)=>{if("fraction"===i.type&&(t.querySelectorAll(on(i.currentClass)).forEach(t=>{t.textContent=i.formatFractionCurrent(n+1)}),t.querySelectorAll(on(i.totalClass)).forEach(t=>{t.textContent=i.formatFractionTotal(u)})),"progressbar"===i.type){let o;o=i.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(n+1)/u;let r=1,s=1;"horizontal"===o?r=a:s=a,t.querySelectorAll(on(i.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`,t.style.transitionDuration=`${e.params.speed}ms`})}"custom"===i.type&&i.renderCustom?(ke(t,i.renderCustom(e,n+1,u)),0===a&&o("paginationRender",t)):(0===a&&o("paginationRender",t),o("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass)})}function u(){const t=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let n=e.pagination.el;n=Se(n);let a="";if("bullets"===t.type){let n=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&n>i&&(n=i);for(let i=0;i<n;i+=1)t.renderBullet?a+=t.renderBullet.call(e,i,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],n.forEach(i=>{"custom"!==t.type&&ke(i,a||""),"bullets"===t.type&&e.pagination.bullets.push(...i.querySelectorAll(on(t.bulletClass)))}),"custom"!==t.type&&o("paginationRender",n[0])}function p(){e.params.pagination=nn(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;"string"==typeof t.el&&e.isElement&&(i=e.el.querySelector(t.el)),i||"string"!=typeof t.el||(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),i&&0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.find(t=>we(t,".swiper")[0]===e.el))),Array.isArray(i)&&1===i.length&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=Se(i),i.forEach(i=>{"bullets"===t.type&&t.clickable&&i.classList.add(...(t.clickableClass||"").split(" ")),i.classList.add(t.modifierClass+t.type),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(i.classList.add(`${t.modifierClass}${t.type}-dynamic`),s=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.classList.add(t.progressbarOppositeClass),t.clickable&&i.addEventListener("click",d),e.enabled||i.classList.add(t.lockClass)}))}function m(){const t=e.params.pagination;if(l())return;let i=e.pagination.el;i&&(i=Se(i),i.forEach(i=>{i.classList.remove(t.hiddenClass),i.classList.remove(t.modifierClass+t.type),i.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(i.classList.remove(...(t.clickableClass||"").split(" ")),i.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=Se(i),i.forEach(i=>{i.classList.remove(t.horizontalClass,t.verticalClass),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n("init",()=>{!1===e.params.pagination.enabled?g():(p(),u(),h())}),n("activeIndexChange",()=>{void 0===e.snapIndex&&h()}),n("snapIndexChange",()=>{h()}),n("snapGridLengthChange",()=>{u(),h()}),n("destroy",()=>{m()}),n("enable disable",()=>{let{el:t}=e.pagination;t&&(t=Se(t),t.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{h()}),n("click",(t,i)=>{const n=i.target,a=Se(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&a&&a.length>0&&!n.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;const t=a[0].classList.contains(e.params.pagination.hiddenClass);o(!0===t?"paginationShow":"paginationHide"),a.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=Se(t),t.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=Se(t),t.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),p(),u(),h()},disable:g,render:u,update:h,init:p,destroy:m})}function rn(t){let e,i,{swiper:n,extendParams:o,on:a,emit:r,params:s}=t;n.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,c,d,h,u,p,m,g,f=s&&s.autoplay?s.autoplay.delay:3e3,v=s&&s.autoplay?s.autoplay.delay:3e3,_=(new Date).getTime();function b(t){n&&!n.destroyed&&n.wrapperEl&&t.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",b),g||t.detail&&t.detail.bySwiperTouchMove||T())}const y=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?c=!0:c&&(v=l,c=!1);const t=n.autoplay.paused?l:_+v-(new Date).getTime();n.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/f),i=requestAnimationFrame(()=>{y()})},w=t=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(i),y();let o=void 0===t?n.params.autoplay.delay:t;f=n.params.autoplay.delay,v=n.params.autoplay.delay;const a=(()=>{let t;if(t=n.virtual&&n.params.virtual.enabled?n.slides.find(t=>t.classList.contains("swiper-slide-active")):n.slides[n.activeIndex],!t)return;return parseInt(t.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(a)&&a>0&&void 0===t&&(o=a,f=a,v=a),l=o;const s=n.params.speed,c=()=>{n&&!n.destroyed&&(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(s,!0,!0),r("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,s,!0,!0),r("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(s,!0,!0),r("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,s,!0,!0),r("autoplay")),n.params.cssMode&&(_=(new Date).getTime(),requestAnimationFrame(()=>{w()})))};return o>0?(clearTimeout(e),e=setTimeout(()=>{c()},o)):requestAnimationFrame(()=>{c()}),o},x=()=>{_=(new Date).getTime(),n.autoplay.running=!0,w(),r("autoplayStart")},C=()=>{n.autoplay.running=!1,clearTimeout(e),cancelAnimationFrame(i),r("autoplayStop")},S=(t,i)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(e),t||(m=!0);const o=()=>{r("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",b):T()};if(n.autoplay.paused=!0,i)return p&&(l=n.params.autoplay.delay),p=!1,void o();const a=l||n.params.autoplay.delay;l=a-((new Date).getTime()-_),n.isEnd&&l<0&&!n.params.loop||(l<0&&(l=0),o())},T=()=>{n.isEnd&&l<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(_=(new Date).getTime(),m?(m=!1,w(l)):w(),n.autoplay.paused=!1,r("autoplayResume"))},k=()=>{if(n.destroyed||!n.autoplay.running)return;const t=Xt();"hidden"===t.visibilityState&&(m=!0,S(!0)),"visible"===t.visibilityState&&T()},A=t=>{"mouse"===t.pointerType&&(m=!0,g=!0,n.animating||n.autoplay.paused||S(!0))},E=t=>{"mouse"===t.pointerType&&(g=!1,n.autoplay.paused&&T())};a("init",()=>{n.params.autoplay.enabled&&(n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",A),n.el.addEventListener("pointerleave",E)),Xt().addEventListener("visibilitychange",k),x())}),a("destroy",()=>{n.el&&"string"!=typeof n.el&&(n.el.removeEventListener("pointerenter",A),n.el.removeEventListener("pointerleave",E)),Xt().removeEventListener("visibilitychange",k),n.autoplay.running&&C()}),a("_freeModeStaticRelease",()=>{(h||m)&&T()}),a("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?C():S(!0,!0)}),a("beforeTransitionStart",(t,e,i)=>{!n.destroyed&&n.autoplay.running&&(i||!n.params.autoplay.disableOnInteraction?S(!0,!0):C())}),a("sliderFirstMove",()=>{!n.destroyed&&n.autoplay.running&&(n.params.autoplay.disableOnInteraction?C():(d=!0,h=!1,m=!1,u=setTimeout(()=>{m=!0,h=!0,S(!0)},200)))}),a("touchEnd",()=>{if(!n.destroyed&&n.autoplay.running&&d){if(clearTimeout(u),clearTimeout(e),n.params.autoplay.disableOnInteraction)return h=!1,void(d=!1);h&&n.params.cssMode&&T(),h=!1,d=!1}}),a("slideChange",()=>{!n.destroyed&&n.autoplay.running&&(p=!0)}),Object.assign(n.autoplay,{start:x,stop:C,pause:S,resume:T})}function sn(t){const{effect:e,swiper:i,on:n,setTranslate:o,setTransition:a,overwriteParams:r,perspective:s,recreateShadows:l,getEffectParams:c}=t;let d;n("beforeInit",()=>{if(i.params.effect!==e)return;i.classNames.push(`${i.params.containerModifierClass}${e}`),s&&s()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const t=r?r():{};Object.assign(i.params,t),Object.assign(i.originalParams,t)}),n("setTranslate _virtualUpdated",()=>{i.params.effect===e&&o()}),n("setTransition",(t,n)=>{i.params.effect===e&&a(n)}),n("transitionEnd",()=>{if(i.params.effect===e&&l){if(!c||!c().slideShadows)return;i.slides.forEach(t=>{t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>t.remove())}),l()}}),n("virtualUpdate",()=>{i.params.effect===e&&(i.slides.length||(d=!0),requestAnimationFrame(()=>{d&&i.slides&&i.slides.length&&(o(),d=!1)}))})}function ln(t,e){const i=he(e);return i!==e&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function cn(t){let{swiper:e,duration:i,transformElements:n}=t;const{activeIndex:o}=e;if(e.params.virtualTranslate&&0!==i){let t,i=!1;t=n,t.forEach(t=>{xe(t,()=>{if(i)return;if(!e||e.destroyed)return;i=!0,e.animating=!1;const t=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(t)})})}}function dn(t){let{swiper:e,extendParams:i,on:n}=t;i({fadeEffect:{crossFade:!1}});sn({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:t}=e,i=e.params.fadeEffect;for(let n=0;n<t.length;n+=1){const t=e.slides[n];let o=-t.swiperSlideOffset;e.params.virtualTranslate||(o-=e.translate);let a=0;e.isHorizontal()||(a=o,o=0);const r=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t.progress),0):1+Math.min(Math.max(t.progress,-1),0),s=ln(i,t);s.style.opacity=r,s.style.transform=`translate3d(${o}px, ${a}px, 0px)`}},setTransition:t=>{const i=e.slides.map(t=>he(t));i.forEach(e=>{e.style.transitionDuration=`${t}ms`}),cn({swiper:e,duration:t,transformElements:i})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function hn(t,e,i){const n=`swiper-slide-shadow${i?`-${i}`:""} swiper-slide-shadow-${t}`,o=he(e);let a=o.querySelector(`.${n.split(" ").join(".")}`);return a||(a=fe("div",n.split(" ")),o.append(a)),a}function un(t){let{swiper:e,extendParams:i,on:n}=t;i({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}});sn({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:t,height:i,slides:n,slidesSizesGrid:o}=e,a=e.params.coverflowEffect,r=e.isHorizontal(),s=e.translate,l=r?t/2-s:i/2-s,c=r?a.rotate:-a.rotate,d=a.depth,h=Te(e);for(let t=0,e=n.length;t<e;t+=1){const e=n[t],i=o[t],s=(l-e.swiperSlideOffset-i/2)/i,u="function"==typeof a.modifier?a.modifier(s):s*a.modifier;let p=r?c*u:0,m=r?0:c*u,g=-d*Math.abs(u),f=a.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(a.stretch)/100*i);let v=r?0:f*u,_=r?f*u:0,b=1-(1-a.scale)*Math.abs(u);Math.abs(_)<.001&&(_=0),Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(p)<.001&&(p=0),Math.abs(m)<.001&&(m=0),Math.abs(b)<.001&&(b=0);const y=`translate3d(${_}px,${v}px,${g}px)  rotateX(${h(m)}deg) rotateY(${h(p)}deg) scale(${b})`;if(ln(a,e).style.transform=y,e.style.zIndex=1-Math.abs(Math.round(u)),a.slideShadows){let t=r?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=r?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");t||(t=hn("coverflow",e,r?"left":"top")),i||(i=hn("coverflow",e,r?"right":"bottom")),t&&(t.style.opacity=u>0?u:0),i&&(i.style.opacity=-u>0?-u:0)}}},setTransition:t=>{e.slides.map(t=>he(t)).forEach(e=>{e.style.transitionDuration=`${t}ms`,e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e=>{e.style.transitionDuration=`${t}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}Object.keys(Ji).forEach(t=>{Object.keys(Ji[t]).forEach(e=>{en.prototype[e]=Ji[t][e]})}),en.use([De,Be]);var pn=A`/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */

/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: ease;
  transition-timing-function: initial;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-left: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-top: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid #007aff;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
.swiper-virtual .swiper-slide {
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}
.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
  height: 1px;
  width: var(--swiper-virtual-size);
}
.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
  width: 1px;
  height: var(--swiper-virtual-size);
}
:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(44px / 44 * 27);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: 44px;
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (44px / 2));
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007aff;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  transform-origin: center;
}
.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 10px;
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-lock {
  display: none;
}
/* Navigation font start */
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: 44px;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-feature-settings: ;
  font-variant: normal;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
/* Navigation font end */
:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 8px;
  bottom: var(--swiper-pagination-bottom, 8px);
  top: auto;
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: 8px;
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: 50%;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: #000;
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: 0.2;
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
          -moz-appearance: none;
       appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #007aff;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: 8px;
  right: var(--swiper-pagination-right, 8px);
  left: auto;
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}
/* Fraction */
.swiper-pagination-fraction {
  color: inherit;
  color: var(--swiper-pagination-fraction-color, inherit);
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: 4px;
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-lock {
  display: none;
}
:root {
  /*
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
  */
}
.swiper-scrollbar {
  border-radius: 10px;
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  position: relative;
  touch-action: none;
  background: rgba(0, 0, 0, 0.1);
  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}
.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
  display: none !important;
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute;
  left: 1%;
  left: var(--swiper-scrollbar-sides-offset, 1%);
  bottom: 4px;
  bottom: var(--swiper-scrollbar-bottom, 4px);
  top: auto;
  top: var(--swiper-scrollbar-top, auto);
  z-index: 50;
  height: 4px;
  height: var(--swiper-scrollbar-size, 4px);
  width: calc(100% - 2 * 1%);
  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-vertical > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-vertical {
  position: absolute;
  left: auto;
  left: var(--swiper-scrollbar-left, auto);
  right: 4px;
  right: var(--swiper-scrollbar-right, 4px);
  top: 1%;
  top: var(--swiper-scrollbar-sides-offset, 1%);
  z-index: 50;
  width: 4px;
  width: var(--swiper-scrollbar-size, 4px);
  height: calc(100% - 2 * 1%);
  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
/* Zoom container styles start */
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
/* Zoom container styles end */
.swiper-slide-zoomed {
  cursor: move;
  touch-action: none;
}
/* a11y */
.swiper .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-grid > .swiper-wrapper {
  flex-wrap: wrap;
}
.swiper-grid-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}
.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}
.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}
.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-fade .swiper-slide-active {
  pointer-events: auto;
}
.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper.swiper-cube {
  overflow: visible;
}
.swiper-cube .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-cube.swiper-rtl .swiper-slide {
  transform-origin: 100% 0;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}
.swiper-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}
.swiper-cube .swiper-cube-shadow:before {
  content: '';
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}
.swiper-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
/* Cube slide shadows start */
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}
/* Cube slide shadows end */
.swiper.swiper-flip {
  overflow: visible;
}
.swiper-flip .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
/* Flip slide shadows start */
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}
/* Flip slide shadows end */
.swiper-creative .swiper-slide {
  backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}
.swiper.swiper-cards {
  overflow: visible;
}
.swiper-cards .swiper-slide {
  transform-origin: center bottom;
  backface-visibility: hidden;
  overflow: hidden;
}
`;let mn=class extends Lt{constructor(){super(...arguments),this.images=[],this.swiper=null}firstUpdated(t){super.firstUpdated(t),this._copyImageFromConfig()}_copyImageFromConfig(){this.config&&this.config.images&&(this.images=this.config.images,this.updateComplete.then(()=>{this.initSwiper()}))}get showImageIndex(){var t,e;return null!==(e=null===(t=this.config)||void 0===t?void 0:t.show_image_index)&&void 0!==e&&e}initSwiper(){var t,e,i;if(!this.config.images)return;const n=(null===(e=null===(t=this.config)||void 0===t?void 0:t.extra_configs)||void 0===e?void 0:e.images_swipe)||{},o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".swiper-container");if(!o)return;const a=o.querySelector(".swiper-pagination");this.swiper=new en(o,(()=>{const t={modules:[an,rn,dn,un],centeredSlides:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},loop:n.loop||!0,speed:n.speed||500,pagination:{clickable:!0,el:a,dynamicBullets:!0},roundLengths:!0,slidesPerView:1,spaceBetween:12},e={slide:{},fade:{effect:"fade",fadeEffect:{crossFade:!0}},coverflow:{effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}};return!0===n.autoplay&&Object.assign(t,{autoplay:{delay:n.delay||5e3,disableOnInteraction:!1}}),n.effect&&Object.assign(t,e[n.effect||"slide"]),t})())}render(){var t,e;const i=null===(e=null===(t=this.config)||void 0===t?void 0:t.extra_configs)||void 0===e?void 0:e.images_swipe,{max_height:n,max_width:o}=null!=i?i:{max_height:150,max_width:450},a={"--vic-images-slide-height":`${n}px`,"--vic-images-slide-width":`${o}px`},r=this.images,s=r.length;return r&&0!==r.length?pt`
      <section id="swiper" style=${Wt(a)}>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${r.map((t,e)=>pt`
                <div class="swiper-slide">
                  ${this.editMode&&this.showImageIndex?pt`<span class="image-index">[${e+1} / ${s}] - ${t.title}</span>`:""}
                  <img src="${t.url}" />
                </div>
              `)}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    `:pt``}static get styles(){return[k(pn),A`
        :host {
          --swiper-pagination-bottom: -8px;
          --swiper-theme-color: var(--primary-text-color);
        }
        section {
          display: block;
          padding: 1rem 0;
        }
        .swiper-wrapper {
          display: flex;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
          display: block;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .swiper-slide:active {
          scale: 1.02;
        }
        .swiper-slide img {
          width: 100%;
          height: 100%;
          max-height: 150px;
          object-fit: scale-down;
          max-height: var(--vic-images-slide-height, 150px);
          max-width: var(--vic-images-slide-width, 450px);
        }
        .swiper-slide .image-index {
          position: absolute;
          bottom: 0;
          left: var(--vic-card-padding);
          padding: var(--vic-gutter-gap);
          background-color: var(--swiper-theme-color);
          color: var(--primary-background-color);
          font-size: 1rem;
          font-weight: bold;
          z-index: 1;
        }
        .swiper-pagination {
          display: block;
        }
        .swiper-pagination-bullet {
          background-color: var(--swiper-theme-color);
          transition: all 0.3s ease-in-out !important;
        }
        .swiper-pagination-bullet-active {
          width: 18px !important;
          border-radius: 1rem !important;
          opacity: 0.7;
        }
      `]}};t([Rt()],mn.prototype,"config",void 0),t([Rt()],mn.prototype,"editMode",void 0),t([Rt()],mn.prototype,"images",void 0),mn=t([It("canyonero-header-slide")],mn);var gn,fn={exports:{}},vn=fn.exports;
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */function _n(){return gn||(gn=1,function(t){var e="1.9.4";function i(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++)for(e in o=arguments[i])t[e]=o[e];return t}var n=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function o(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var a=0;function r(t){return"_leaflet_id"in t||(t._leaflet_id=++a),t._leaflet_id}function s(t,e,i){var n,o,a,r;return r=function(){n=!1,o&&(a.apply(i,o),o=!1)},a=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(r,e),n=!0)},a}function l(t,e,i){var n=e[1],o=e[0],a=n-o;return t===n&&i?t:((t-o)%a+a)%a+o}function c(){return!1}function d(t,e){if(!1===e)return t;var i=Math.pow(10,void 0===e?6:e);return Math.round(t*i)/i}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function p(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?n(t.options):{}),e)t.options[i]=e[i];return t.options}function m(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function f(t,e){return t.replace(g,function(t,i){var n=e[i];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n})}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function _(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var b="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var w=0;function x(t){var e=+new Date,i=Math.max(0,16-(e-w));return w=e+i,window.setTimeout(t,i)}var C=window.requestAnimationFrame||y("RequestAnimationFrame")||x,S=window.cancelAnimationFrame||y("CancelAnimationFrame")||y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function T(t,e,i){if(!i||C!==x)return C.call(window,o(t,e));t.call(e)}function k(t){t&&S.call(window,t)}var A={__proto__:null,extend:i,create:n,bind:o,get lastId(){return a},stamp:r,throttle:s,wrapNum:l,falseFn:c,formatNum:d,trim:h,splitWords:u,setOptions:p,getParamString:m,template:f,isArray:v,indexOf:_,emptyImageUrl:b,requestFn:C,cancelFn:S,requestAnimFrame:T,cancelAnimFrame:k};function E(){}function M(t){if("undefined"!=typeof L&&L&&L.Mixin){t=v(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}E.extend=function(t){var e=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=e.__super__=this.prototype,a=n(o);for(var r in a.constructor=e,e.prototype=a,this)Object.prototype.hasOwnProperty.call(this,r)&&"prototype"!==r&&"__super__"!==r&&(e[r]=this[r]);return t.statics&&i(e,t.statics),t.includes&&(M(t.includes),i.apply(null,[a].concat(t.includes))),i(a,t),delete a.statics,delete a.includes,a.options&&(a.options=o.options?n(o.options):{},i(a.options,t.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=a._initHooks.length;t<e;t++)a._initHooks[t].call(this)}},e},E.include=function(t){var e=this.prototype.options;return i(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},E.mergeOptions=function(t){return i(this.prototype.options,t),this},E.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var P={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,a=(t=u(t)).length;o<a;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=u(t);for(var o=1===arguments.length,a=0,r=t.length;a<r;a++)o?this._off(t[a]):this._off(t[a],e,i)}else delete this._events;return this},_on:function(t,e,i,n){if("function"==typeof e){if(!1===this._listens(t,e,i)){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}}else console.warn("wrong listener type: "+typeof e)},_off:function(t,e,i){var n,o,a;if(this._events&&(n=this._events[t]))if(1!==arguments.length)if("function"==typeof e){var r=this._listens(t,e,i);if(!1!==r){var s=n[r];this._firingCount&&(s.fn=c,this._events[t]=n=n.slice()),n.splice(r,1)}}else console.warn("wrong listener type: "+typeof e);else{if(this._firingCount)for(o=0,a=n.length;o<a;o++)n[o].fn=c;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var a=this._events[t];if(a){this._firingCount=this._firingCount+1||1;for(var r=0,s=a.length;r<s;r++){var l=a[r],c=l.fn;l.once&&this.off(t,c,l.ctx),c.call(l.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e;"function"!=typeof e&&(n=!!e,o=void 0,i=void 0);var a=this._events&&this._events[t];if(a&&a.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,a=n.length;o<a;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,a=(t=u(t)).length;o<a;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[r(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[r(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};P.addEventListener=P.on,P.removeEventListener=P.clearAllEventListeners=P.off,P.addOneTimeEventListener=P.once,P.fireEvent=P.fire,P.hasEventListeners=P.listens;var $=E.extend(P);function O(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var z=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};function I(t,e,i){return t instanceof O?t:v(t)?new O(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new O(t.x,t.y):new O(t,e,i)}function D(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function B(t,e){return!t||t instanceof D?t:new D(t,e)}function j(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function R(t,e){return t instanceof j?t:new j(t,e)}function N(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function H(t,e,i){return t instanceof N?t:v(t)&&"object"!=typeof t[0]?3===t.length?new N(t[0],t[1],t[2]):2===t.length?new N(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new N(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new N(t,e,i)}O.prototype={clone:function(){return new O(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new O(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new O(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=z(this.x),this.y=z(this.y),this},distanceTo:function(t){var e=(t=I(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+d(this.x)+", "+d(this.y)+")"}},D.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof O||"number"==typeof t[0]||"x"in t)e=i=I(t);else if(e=(t=B(t)).min,i=t.max,!e||!i)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone()),this},getCenter:function(t){return I((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return I(this.min.x,this.max.y)},getTopRight:function(){return I(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof O?I(t):B(t))instanceof D?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=B(t);var e=this.min,i=this.max,n=t.min,o=t.max,a=o.x>=e.x&&n.x<=i.x,r=o.y>=e.y&&n.y<=i.y;return a&&r},overlaps:function(t){t=B(t);var e=this.min,i=this.max,n=t.min,o=t.max,a=o.x>e.x&&n.x<i.x,r=o.y>e.y&&n.y<i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return B(I(e.x-n,e.y-o),I(i.x+n,i.y+o))},equals:function(t){return!!t&&(t=B(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},j.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof N)e=t,i=t;else{if(!(t instanceof j))return t?this.extend(H(t)||R(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new N(e.lat,e.lng),this._northEast=new N(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new j(new N(e.lat-n,e.lng-o),new N(i.lat+n,i.lng+o))},getCenter:function(){return new N((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new N(this.getNorth(),this.getWest())},getSouthEast:function(){return new N(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof N||"lat"in t?H(t):R(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof j?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),a=o.lat>=e.lat&&n.lat<=i.lat,r=o.lng>=e.lng&&n.lng<=i.lng;return a&&r},overlaps:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),a=o.lat>e.lat&&n.lat<i.lat,r=o.lng>e.lng&&n.lng<i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=R(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}},N.prototype={equals:function(t,e){return!!t&&(t=H(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+d(this.lat,t)+", "+d(this.lng,t)+")"},distanceTo:function(t){return V.distance(this,H(t))},wrap:function(){return V.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return R([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new N(this.lat,this.lng,this.alt)}};var Z={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t);return new D(this.transformation.transform(e.min,i),this.transformation.transform(e.max,i))},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?l(t.lng,this.wrapLng,!0):t.lng;return new N(this.wrapLat?l(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(0===n&&0===o)return t;var a=t.getSouthWest(),r=t.getNorthEast();return new j(new N(a.lat-n,a.lng-o),new N(r.lat-n,r.lng-o))}},V=i({},Z,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,a=Math.sin((e.lat-t.lat)*i/2),r=Math.sin((e.lng-t.lng)*i/2),s=a*a+Math.cos(n)*Math.cos(o)*r*r,l=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*l}}),F=6378137,U={R:F,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new O(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new N((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=F*Math.PI;return new D([-t,-t],[t,t])}()};function G(t,e,i,n){if(v(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=e,this._c=i,this._d=n}function W(t,e,i,n){return new G(t,e,i,n)}G.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new O((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};var q=i({},V,{code:"EPSG:3857",projection:U,transformation:function(){var t=.5/(Math.PI*U.R);return W(t,.5,-t,.5)}()}),Y=i({},q,{code:"EPSG:900913"});function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t,e){var i,n,o,a,r,s,l="";for(i=0,o=t.length;i<o;i++){for(n=0,a=(r=t[i]).length;n<a;n++)l+=(n?"L":"M")+(s=r[n]).x+" "+s.y;l+=e?Bt.svg?"z":"x":""}return l||"M0 0"}var Q,J=document.documentElement.style,tt="ActiveXObject"in window,et=tt&&!document.addEventListener,it="msLaunchUri"in navigator&&!("documentMode"in document),nt=Dt("webkit"),ot=Dt("android"),at=Dt("android 2")||Dt("android 3"),rt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),st=ot&&Dt("Google")&&rt<537&&!("AudioNode"in window),lt=!!window.opera,ct=!it&&Dt("chrome"),dt=Dt("gecko")&&!nt&&!lt&&!tt,ht=!ct&&Dt("safari"),ut=Dt("phantom"),pt="OTransition"in J,mt=0===navigator.platform.indexOf("Win"),gt=tt&&"transition"in J,ft="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!at,vt="MozPerspective"in J,_t=!window.L_DISABLE_3D&&(gt||ft||vt)&&!pt&&!ut,bt="undefined"!=typeof orientation||Dt("mobile"),yt=bt&&nt,wt=bt&&ft,xt=!window.PointerEvent&&window.MSPointerEvent,Ct=!(!window.PointerEvent&&!xt),St="ontouchstart"in window||!!window.TouchEvent,Tt=!window.L_NO_TOUCH&&(St||Ct),kt=bt&&lt,At=bt&&dt,Et=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Mt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",c,e),window.removeEventListener("testPassiveEventSupport",c,e)}catch(t){}return t}(),Pt=!!document.createElement("canvas").getContext,$t=!(!document.createElementNS||!K("svg").createSVGRect),Ot=!!$t&&((Q=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Q.firstChild&&Q.firstChild.namespaceURI)),Lt=!$t&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),zt=0===navigator.platform.indexOf("Mac"),It=0===navigator.platform.indexOf("Linux");function Dt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var Bt={ie:tt,ielt9:et,edge:it,webkit:nt,android:ot,android23:at,androidStock:st,opera:lt,chrome:ct,gecko:dt,safari:ht,phantom:ut,opera12:pt,win:mt,ie3d:gt,webkit3d:ft,gecko3d:vt,any3d:_t,mobile:bt,mobileWebkit:yt,mobileWebkit3d:wt,msPointer:xt,pointer:Ct,touch:Tt,touchNative:St,mobileOpera:kt,mobileGecko:At,retina:Et,passiveEvents:Mt,canvas:Pt,svg:$t,vml:Lt,inlineSvg:Ot,mac:zt,linux:It},jt=Bt.msPointer?"MSPointerDown":"pointerdown",Rt=Bt.msPointer?"MSPointerMove":"pointermove",Nt=Bt.msPointer?"MSPointerUp":"pointerup",Ht=Bt.msPointer?"MSPointerCancel":"pointercancel",Zt={touchstart:jt,touchmove:Rt,touchend:Nt,touchcancel:Ht},Vt={touchstart:Jt,touchmove:Qt,touchend:Qt,touchcancel:Qt},Ft={},Ut=!1;function Gt(t,e,i){return"touchstart"===e&&Xt(),Vt[e]?(i=Vt[e].bind(this,i),t.addEventListener(Zt[e],i,!1),i):(console.warn("wrong event specified:",e),c)}function Wt(t,e,i){Zt[e]?t.removeEventListener(Zt[e],i,!1):console.warn("wrong event specified:",e)}function qt(t){Ft[t.pointerId]=t}function Yt(t){Ft[t.pointerId]&&(Ft[t.pointerId]=t)}function Kt(t){delete Ft[t.pointerId]}function Xt(){Ut||(document.addEventListener(jt,qt,!0),document.addEventListener(Rt,Yt,!0),document.addEventListener(Nt,Kt,!0),document.addEventListener(Ht,Kt,!0),Ut=!0)}function Qt(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Ft)e.touches.push(Ft[i]);e.changedTouches=[e],t(e)}}function Jt(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&qe(e),Qt(t,e)}function te(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return t=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}var ee=200;function ie(t,e){t.addEventListener("dblclick",e);var i,n=0;function o(t){if(1===t.detail){if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){var o=Ke(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var a=Date.now();a-n<=ee?2===++i&&e(te(t)):i=1,n=a}}}else i=t.detail}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function ne(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var oe,ae,re,se,le,ce=ke(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),de=ke(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),he="webkitTransition"===de||"OTransition"===de?de+"End":"transitionend";function ue(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}function me(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function ge(t){var e=t.parentNode;e&&e.removeChild(t)}function fe(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ve(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function _e(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function be(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=Ce(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function ye(t,e){if(void 0!==t.classList)for(var i=u(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!be(t,e)){var a=Ce(t);xe(t,(a?a+" ":"")+e)}}function we(t,e){void 0!==t.classList?t.classList.remove(e):xe(t,h((" "+Ce(t)+" ").replace(" "+e+" "," ")))}function xe(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function Ce(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function Se(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Te(t,e)}function Te(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function ke(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ae(t,e,i){var n=e||new O(0,0);t.style[ce]=(Bt.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function Ee(t,e){t._leaflet_pos=e,Bt.any3d?Ae(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Me(t){return t._leaflet_pos||new O(0,0)}if("onselectstart"in document)oe=function(){je(window,"selectstart",qe)},ae=function(){Ne(window,"selectstart",qe)};else{var Pe=ke(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);oe=function(){if(Pe){var t=document.documentElement.style;re=t[Pe],t[Pe]="none"}},ae=function(){Pe&&(document.documentElement.style[Pe]=re,re=void 0)}}function $e(){je(window,"dragstart",qe)}function Oe(){Ne(window,"dragstart",qe)}function Le(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),se=t,le=t.style.outlineStyle,t.style.outlineStyle="none",je(window,"keydown",ze))}function ze(){se&&(se.style.outlineStyle=le,se=void 0,le=void 0,Ne(window,"keydown",ze))}function Ie(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function De(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Be={__proto__:null,TRANSFORM:ce,TRANSITION:de,TRANSITION_END:he,get:ue,getStyle:pe,create:me,remove:ge,empty:fe,toFront:ve,toBack:_e,hasClass:be,addClass:ye,removeClass:we,setClass:xe,getClass:Ce,setOpacity:Se,testProp:ke,setTransform:Ae,setPosition:Ee,getPosition:Me,get disableTextSelection(){return oe},get enableTextSelection(){return ae},disableImageDrag:$e,enableImageDrag:Oe,preventOutline:Le,restoreOutline:ze,getSizedParentNode:Ie,getScale:De};function je(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)Ve(t,o,e[o],i);else for(var a=0,r=(e=u(e)).length;a<r;a++)Ve(t,e[a],i,n);return this}var Re="_leaflet_events";function Ne(t,e,i,n){if(1===arguments.length)He(t),delete t[Re];else if(e&&"object"==typeof e)for(var o in e)Fe(t,o,e[o],i);else if(e=u(e),2===arguments.length)He(t,function(t){return-1!==_(e,t)});else for(var a=0,r=e.length;a<r;a++)Fe(t,e[a],i,n);return this}function He(t,e){for(var i in t[Re]){var n=i.split(/\d/)[0];e&&!e(n)||Fe(t,n,null,null,i)}}var Ze={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ve(t,e,i,n){var o=e+r(i)+(n?"_"+r(n):"");if(t[Re]&&t[Re][o])return this;var a=function(e){return i.call(n||t,e||window.event)},s=a;!Bt.touchNative&&Bt.pointer&&0===e.indexOf("touch")?a=Gt(t,e,a):Bt.touch&&"dblclick"===e?a=ie(t,a):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(Ze[e]||e,a,!!Bt.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(a=function(e){e=e||window.event,ti(t,e)&&s(e)},t.addEventListener(Ze[e],a,!1)):t.addEventListener(e,s,!1):t.attachEvent("on"+e,a),t[Re]=t[Re]||{},t[Re][o]=a}function Fe(t,e,i,n,o){o=o||e+r(i)+(n?"_"+r(n):"");var a=t[Re]&&t[Re][o];if(!a)return this;!Bt.touchNative&&Bt.pointer&&0===e.indexOf("touch")?Wt(t,e,a):Bt.touch&&"dblclick"===e?ne(t,a):"removeEventListener"in t?t.removeEventListener(Ze[e]||e,a,!1):t.detachEvent("on"+e,a),t[Re][o]=null}function Ue(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ge(t){return Ve(t,"wheel",Ue),this}function We(t){return je(t,"mousedown touchstart dblclick contextmenu",Ue),t._leaflet_disable_click=!0,this}function qe(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ye(t){return qe(t),Ue(t),this}function Ke(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Xe(t,e){if(!e)return new O(t.clientX,t.clientY);var i=De(e),n=i.boundingClientRect;return new O((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Qe=Bt.linux&&Bt.chrome?window.devicePixelRatio:Bt.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Je(t){return Bt.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Qe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function ti(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var ei={__proto__:null,on:je,off:Ne,stopPropagation:Ue,disableScrollPropagation:Ge,disableClickPropagation:We,preventDefault:qe,stop:Ye,getPropagationPath:Ke,getMousePosition:Xe,getWheelDelta:Je,isExternalTarget:ti,addListener:je,removeListener:Ne},ii=$.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Me(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),Ee(this._el,i),this.fire("step")},_complete:function(){k(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),ni=$.extend({options:{crs:q,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=p(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(H(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=de&&Bt.any3d&&!Bt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),je(this._proxy,he,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(H(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e,n.pan&&n.pan.noMoveStart),this)},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),a=(t instanceof O?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(a));return this.setView(r,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():R(t);var i=I(e.paddingTopLeft||e.padding||[0,0]),n=I(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),o),s=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(s).divideBy(2).add(a),o),zoom:o}},fitBounds:function(t,e){if(!(t=R(t)).isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(e=e||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new ii,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){ye(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!Bt.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),a=this.getSize(),r=this._zoom;t=H(t),e=void 0===e?r:e;var s=Math.max(a.x,a.y),l=s*this.getZoomScale(r,e),c=o.distanceTo(n)||1,d=1.42,h=d*d;function u(t){var e=(l*l-s*s+(t?-1:1)*h*h*c*c)/(2*(t?l:s)*h*c),i=Math.sqrt(e*e+1)-e;return i<1e-9?-18:Math.log(i)}function p(t){return(Math.exp(t)-Math.exp(-t))/2}function m(t){return(Math.exp(t)+Math.exp(-t))/2}function g(t){return p(t)/m(t)}var f=u(0);function v(t){return s*(m(f)/m(f+d*t))}function _(t){return s*(m(f)*g(f+d*t)-p(f))/h}function b(t){return 1-Math.pow(1-t,1.5)}var y=Date.now(),w=(u(1)-f)/d,x=i.duration?1e3*i.duration:1e3*w*.8;function C(){var i=(Date.now()-y)/x,a=b(i)*w;i<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(_(a)/c)),r),this.getScaleZoom(s/v(a),r),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),C.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=R(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,R(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=I((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=I(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),a=this.project(t),r=this.getPixelBounds(),s=B([r.min.add(i),r.max.subtract(n)]),l=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var c=a.subtract(s.getCenter()),d=s.extend(a).getSize().subtract(l);o.x+=c.x<0?-d.x:d.x,o.y+=c.y<0?-d.y:d.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),a=e.divideBy(2).round(),r=n.divideBy(2).round(),s=a.subtract(r);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:n})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o(this._handleGeolocationResponse,this),n=o(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=new N(t.coords.latitude,t.coords.longitude),i=e.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(i);this.setView(e,n.maxZoom?Math.min(o,n.maxZoom):o)}var a={latlng:e,bounds:i,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(a[r]=t.coords[r]);this.fire("locationfound",a)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ge(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(k(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)ge(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i=me("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=i),i},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new j(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=R(t),i=I(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),a=this.getMaxZoom(),r=t.getNorthWest(),s=t.getSouthEast(),l=this.getSize().subtract(i),c=B(this.project(s,n),this.project(r,n)).getSize(),d=Bt.any3d?this.options.zoomSnap:1,h=l.x/c.x,u=l.y/c.y,p=e?Math.max(h,u):Math.min(h,u);return n=this.getScaleZoom(p,n),d&&(n=Math.round(n/(d/100))*(d/100),n=e?Math.ceil(n/d)*d:Math.floor(n/d)*d),Math.max(o,Math.min(a,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new D(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(H(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(I(t),e)},layerPointToLatLng:function(t){var e=I(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){return this.project(H(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(H(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(R(t))},distance:function(t,e){return this.options.crs.distance(H(t),H(e))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(H(t)))},mouseEventToContainerPoint:function(t){return Xe(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=ue(t);if(!e)throw new Error("Map container not found.");if(e._leaflet_id)throw new Error("Map container is already initialized.");je(e,"scroll",this._onScroll,this),this._containerId=r(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Bt.any3d,ye(t,"leaflet-container"+(Bt.touch?" leaflet-touch":"")+(Bt.retina?" leaflet-retina":"")+(Bt.ielt9?" leaflet-oldie":"")+(Bt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=pe(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ee(this._mapPane,new O(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ye(t.markerPane,"leaflet-zoom-hide"),ye(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Ee(this._mapPane,new O(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return k(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Ee(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[r(this._container)]=this;var e=t?Ne:je;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),Bt.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){k(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,a=t.target||t.srcElement,s=!1;a;){if((i=this._targets[r(a)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){s=!0;break}if(i&&i.listens(e,!0)){if(o&&!ti(a,t))break;if(n.push(i),o)break}if(a===this._container)break;a=a.parentNode}return n.length||s||o||!this.listens(e,!0)||(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(e))){var i=t.type;"mousedown"===i&&Le(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}var a=this._findEventTargets(t,e);if(n){for(var r=[],s=0;s<n.length;s++)n[s].listens(e,!0)&&r.push(n[s]);a=r.concat(a)}if(a.length){"contextmenu"===e&&qe(t);var l=a[0],c={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var d=l.getLatLng&&(!l._radius||l._radius<=10);c.containerPoint=d?this.latLngToContainerPoint(l.getLatLng()):this.mouseEventToContainerPoint(t),c.layerPoint=this.containerPointToLayerPoint(c.containerPoint),c.latlng=d?l.getLatLng():this.layerPointToLatLng(c.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(e,c,!0),c.originalEvent._stopped||!1===a[s].options.bubblingMouseEvents&&-1!==_(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Me(this._mapPane)||new O(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return B([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),a=new D(n.subtract(o),n.add(o)),r=this._getBoundsOffset(a,i,e);return Math.abs(r.x)<=1&&Math.abs(r.y)<=1?t:this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new D(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=B(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),a=n.max.subtract(t.max);return new O(this._rebound(o.x,-a.x),this._rebound(o.y,-a.y))},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=Bt.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){we(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(i)||(this.panBy(i,e),0))},_createAnimProxy:function(){var t=this._proxy=me("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ce,i=this._proxy.style[e];Ae(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ge(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ae(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==i.animate&&!this.getSize().contains(o)||(T(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,ye(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&we(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function oi(t,e){return new ni(t,e)}var ai=E.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return ye(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ge(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ri=function(t){return new ai(t)};ni.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=me("div",e+"control-container",this._container);function n(n,o){var a=e+n+" "+e+o;t[n+o]=me("div",a,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ge(this._controlCorners[t]);ge(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var si=ai.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in p(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return ai.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(r(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){ye(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(ye(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):we(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return we(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=me("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),We(e),Ge(e);var n=this._section=me("section",t+"-list");i&&(this._map.on("click",this.collapse,this),je(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=me("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),je(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){qe(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=me("div",t+"-base",n),this._separator=me("div",t+"-separator",n),this._overlaysList=me("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&r(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(o(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;fe(this._baseLayersList),fe(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(r(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+r(this),n),this._layerControlInputs.push(e),e.layerId=r(t.layer),je(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var a=document.createElement("span");return i.appendChild(a),a.appendChild(e),a.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var a=i.length-1;a>=0;a--)t=i[a],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(a=0;a<o.length;a++)this._map.hasLayer(o[a])&&this._map.removeLayer(o[a]);for(a=0;a<n.length;a++)this._map.hasLayer(n[a])||this._map.addLayer(n[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,je(t,"click",qe),this.expand();var e=this;setTimeout(function(){Ne(t,"click",qe),e._preventClick=!1})}}),li=function(t,e,i){return new si(t,e,i)},ci=ai.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=me("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var a=me("a",i,n);return a.innerHTML=t,a.href="#",a.title=e,a.setAttribute("role","button"),a.setAttribute("aria-label",e),We(a),je(a,"click",Ye),je(a,"click",o,this),je(a,"click",this._refocusOnMap,this),a},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";we(this._zoomInButton,e),we(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(ye(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(ye(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});ni.mergeOptions({zoomControl:!0}),ni.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ci,this.addControl(this.zoomControl))});var di=function(t){return new ci(t)},hi=ai.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=me("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=me("div",e,i)),t.imperial&&(this._iScale=me("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),ui=function(t){return new hi(t)},pi='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',mi=ai.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Bt.inlineSvg?pi+" ":"")+"Leaflet</a>"},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var e in t.attributionControl=this,this._container=me("div","leaflet-control-attribution"),We(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});ni.mergeOptions({attributionControl:!0}),ni.addInitHook(function(){this.options.attributionControl&&(new mi).addTo(this)});var gi=function(t){return new mi(t)};ai.Layers=si,ai.Zoom=ci,ai.Scale=hi,ai.Attribution=mi,ri.layers=li,ri.zoom=di,ri.scale=ui,ri.attribution=gi;var fi=E.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});fi.addTo=function(t,e){return t.addHandler(e,this),this};var vi={Events:P},_i=Bt.touch?"touchstart mousedown":"mousedown",bi=$.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){p(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(je(this._dragStartTarget,_i,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(bi._dragging===this&&this.finishDrag(!0),Ne(this._dragStartTarget,_i,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!be(this._element,"leaflet-zoom-anim")))if(t.touches&&1!==t.touches.length)bi._dragging===this&&this.finishDrag();else if(!(bi._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(bi._dragging=this,this._preventOutline&&Le(this._element),$e(),oe(),this._moving))){this.fire("down");var e=t.touches?t.touches[0]:t,i=Ie(this._element);this._startPoint=new O(e.clientX,e.clientY),this._startPos=Me(this._element),this._parentScale=De(i);var n="mousedown"===t.type;je(document,n?"mousemove":"touchmove",this._onMove,this),je(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}},_onMove:function(t){if(this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new O(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,qe(t),this._moved||(this.fire("dragstart"),this._moved=!0,ye(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ye(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Ee(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){we(document.body,"leaflet-dragging"),this._lastTarget&&(we(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ne(document,"mousemove touchmove",this._onMove,this),Ne(document,"mouseup touchend touchcancel",this._onUp,this),Oe(),ae();var e=this._moved&&this._moving;this._moving=!1,bi._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function yi(t,e,i){var n,o,a,r,s,l,c,d,h,u=[1,4,2,8];for(o=0,c=t.length;o<c;o++)t[o]._code=Li(t[o],e);for(r=0;r<4;r++){for(d=u[r],n=[],o=0,a=(c=t.length)-1;o<c;a=o++)s=t[o],l=t[a],s._code&d?l._code&d||((h=Oi(l,s,d,e,i))._code=Li(h,e),n.push(h)):(l._code&d&&((h=Oi(l,s,d,e,i))._code=Li(h,e),n.push(h)),n.push(s));t=n}return t}function wi(t,e){var i,n,o,a,r,s,l,c,d;if(!t||0===t.length)throw new Error("latlngs not passed");Di(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var h=H([0,0]),u=R(t);u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(h=xi(t));var p=t.length,m=[];for(i=0;i<p;i++){var g=H(t[i]);m.push(e.project(H([g.lat-h.lat,g.lng-h.lng])))}for(s=l=c=0,i=0,n=p-1;i<p;n=i++)o=m[i],a=m[n],r=o.y*a.x-a.y*o.x,l+=(o.x+a.x)*r,c+=(o.y+a.y)*r,s+=3*r;d=0===s?m[0]:[l/s,c/s];var f=e.unproject(I(d));return H([f.lat+h.lat,f.lng+h.lng])}function xi(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var a=H(t[o]);e+=a.lat,i+=a.lng,n++}return H([e/n,i/n])}var Ci,Si={__proto__:null,clipPolygon:yi,polygonCenter:wi,centroid:xi};function Ti(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Ei(t=Pi(t,i),i)}function ki(t,e,i){return Math.sqrt(Ii(t,e,i,!0))}function Ai(t,e,i){return Ii(t,e,i)}function Ei(t,e){var i=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(i);n[0]=n[i-1]=1,Mi(t,n,e,0,i-1);var o,a=[];for(o=0;o<i;o++)n[o]&&a.push(t[o]);return a}function Mi(t,e,i,n,o){var a,r,s,l=0;for(r=n+1;r<=o-1;r++)(s=Ii(t[r],t[n],t[o],!0))>l&&(a=r,l=s);l>i&&(e[a]=1,Mi(t,e,i,n,a),Mi(t,e,i,a,o))}function Pi(t,e){for(var i=[t[0]],n=1,o=0,a=t.length;n<a;n++)zi(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<a-1&&i.push(t[a-1]),i}function $i(t,e,i,n,o){var a,r,s,l=n?Ci:Li(t,i),c=Li(e,i);for(Ci=c;;){if(!(l|c))return[t,e];if(l&c)return!1;s=Li(r=Oi(t,e,a=l||c,i,o),i),a===l?(t=r,l=s):(e=r,c=s)}}function Oi(t,e,i,n,o){var a,r,s=e.x-t.x,l=e.y-t.y,c=n.min,d=n.max;return 8&i?(a=t.x+s*(d.y-t.y)/l,r=d.y):4&i?(a=t.x+s*(c.y-t.y)/l,r=c.y):2&i?(a=d.x,r=t.y+l*(d.x-t.x)/s):1&i&&(a=c.x,r=t.y+l*(c.x-t.x)/s),new O(a,r,o)}function Li(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function zi(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Ii(t,e,i,n){var o,a=e.x,r=e.y,s=i.x-a,l=i.y-r,c=s*s+l*l;return c>0&&((o=((t.x-a)*s+(t.y-r)*l)/c)>1?(a=i.x,r=i.y):o>0&&(a+=s*o,r+=l*o)),s=t.x-a,l=t.y-r,n?s*s+l*l:new O(a,r)}function Di(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Bi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Di(t)}function ji(t,e){var i,n,o,a,r,s,l,c;if(!t||0===t.length)throw new Error("latlngs not passed");Di(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var d=H([0,0]),h=R(t);h.getNorthWest().distanceTo(h.getSouthWest())*h.getNorthEast().distanceTo(h.getNorthWest())<1700&&(d=xi(t));var u=t.length,p=[];for(i=0;i<u;i++){var m=H(t[i]);p.push(e.project(H([m.lat-d.lat,m.lng-d.lng])))}for(i=0,n=0;i<u-1;i++)n+=p[i].distanceTo(p[i+1])/2;if(0===n)c=p[0];else for(i=0,a=0;i<u-1;i++)if(r=p[i],s=p[i+1],(a+=o=r.distanceTo(s))>n){l=(a-n)/o,c=[s.x-l*(s.x-r.x),s.y-l*(s.y-r.y)];break}var g=e.unproject(I(c));return H([g.lat+d.lat,g.lng+d.lng])}var Ri={__proto__:null,simplify:Ti,pointToSegmentDistance:ki,closestPointOnSegment:Ai,clipSegment:$i,_getEdgeIntersection:Oi,_getBitCode:Li,_sqClosestPointOnSegment:Ii,isFlat:Di,_flat:Bi,polylineCenter:ji},Ni={project:function(t){return new O(t.lng,t.lat)},unproject:function(t){return new N(t.y,t.x)},bounds:new D([-180,-90],[180,90])},Hi={R:6378137,R_MINOR:6356752.314245179,bounds:new D([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,a=Math.sqrt(1-o*o),r=a*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),a/2);return n=-i*Math.log(Math.max(s,1e-10)),new O(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,a=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),s=Math.PI/2-2*Math.atan(r),l=0,c=.1;l<15&&Math.abs(c)>1e-7;l++)e=a*Math.sin(s),e=Math.pow((1-e)/(1+e),a/2),s+=c=Math.PI/2-2*Math.atan(r*e)-s;return new N(s*i,t.x*i/n)}},Zi={__proto__:null,LonLat:Ni,Mercator:Hi,SphericalMercator:U},Vi=i({},V,{code:"EPSG:3395",projection:Hi,transformation:function(){var t=.5/(Math.PI*Hi.R);return W(t,.5,-t,.5)}()}),Fi=i({},V,{code:"EPSG:4326",projection:Ni,transformation:W(1/180,1,-1/180,.5)}),Ui=i({},Z,{projection:Ni,transformation:W(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Z.Earth=V,Z.EPSG3395=Vi,Z.EPSG3857=q,Z.EPSG900913=Y,Z.EPSG4326=Fi,Z.Simple=Ui;var Gi=$.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[r(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[r(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});ni.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=r(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var e=r(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return r(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?v(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[r(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=r(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wi=Gi.extend({initialize:function(t,e){var i,n;if(p(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return r(t)}}),qi=function(t,e){return new Wi(t,e)},Yi=Wi.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Wi.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Wi.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new j;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Ki=function(t,e){return new Yi(t,e)},Xi=E.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),a=I("shadow"===e&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),a&&(t.style.marginLeft=-a.x+"px",t.style.marginTop=-a.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return Bt.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Qi(t){return new Xi(t)}var Ji=Xi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof Ji.imagePath&&(Ji.imagePath=this._detectIconPath()),(this.options.imagePath||Ji.imagePath)+Xi.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,i){var n=e.exec(t);return n&&n[i]};return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=me("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e))return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),tn=fi.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new bi(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ye(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&we(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,a=Me(e._icon),r=i.getPixelBounds(),s=i.getPixelOrigin(),l=B(r.min._subtract(s).add(o),r.max._subtract(s).subtract(o));if(!l.contains(a)){var c=I((Math.max(l.max.x,a.x)-l.max.x)/(r.max.x-l.max.x)-(Math.min(l.min.x,a.x)-l.min.x)/(r.min.x-l.min.x),(Math.max(l.max.y,a.y)-l.max.y)/(r.max.y-l.max.y)-(Math.min(l.min.y,a.y)-l.min.y)/(r.min.y-l.min.y)).multiplyBy(n);i.panBy(c,{animate:!1}),this._draggable._newPos._add(c),this._draggable._startPos._add(c),Ee(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=T(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(k(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Me(e._icon),o=e._map.layerPointToLatLng(n);i&&Ee(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){k(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),en=Gi.extend({options:{icon:new Ji,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){p(this,e),this._latlng=H(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=H(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),ye(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&je(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),a=!1;o!==this._shadow&&(this._removeShadow(),a=!0),o&&(ye(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&a&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ne(this._icon,"focus",this._panOnFocus,this),ge(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ge(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Ee(this._icon,t),this._shadow&&Ee(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(ye(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),tn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new tn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Se(this._icon,t),this._shadow&&Se(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?I(e.iconSize):I(0,0),n=e.iconAnchor?I(e.iconAnchor):I(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function nn(t,e){return new en(t,e)}var on=Gi.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),an=on.extend({options:{fill:!0,radius:10},initialize:function(t,e){p(this,e),this._latlng=H(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=H(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return on.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new D(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function rn(t,e){return new an(t,e)}var sn=an.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),p(this,e),this._latlng=H(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new j(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:on.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===V.distance){var o=Math.PI/180,a=this._mRadius/V.R/o,r=i.project([e+a,t]),s=i.project([e-a,t]),l=r.add(s).divideBy(2),c=i.unproject(l).lat,d=Math.acos((Math.cos(a*o)-Math.sin(e*o)*Math.sin(c*o))/(Math.cos(e*o)*Math.cos(c*o)))/o;(isNaN(d)||0===d)&&(d=a/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(d)?0:l.x-i.project([c,t-d]).x,this._radiusY=l.y-r.y}else{var h=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(h).x}this._updateBounds()}});function ln(t,e,i){return new sn(t,e,i)}var cn=on.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){p(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,i,n=1/0,o=null,a=Ii,r=0,s=this._parts.length;r<s;r++)for(var l=this._parts[r],c=1,d=l.length;c<d;c++){var h=a(t,e=l[c-1],i=l[c],!0);h<n&&(n=h,o=a(t,e,i))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ji(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=H(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new j,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Di(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=Di(t),n=0,o=t.length;n<o;n++)i?(e[n]=H(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new D;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new O(t,t);this._rawPxBounds&&(this._pxBounds=new D([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n,o,a=t[0]instanceof N,r=t.length;if(a){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var e,i,n,o,a,r,s,l=this._parts;for(e=0,n=0,o=this._rings.length;e<o;e++)for(i=0,a=(s=this._rings[e]).length;i<a-1;i++)(r=$i(s[i],s[i+1],t,i,!0))&&(l[n]=l[n]||[],l[n].push(r[0]),r[1]===s[i+1]&&i!==a-2||(l[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Ti(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,a,r,s,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,a=this._parts.length;i<a;i++)for(n=0,o=(r=(s=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&ki(t,s[o],s[n])<=l)return!0;return!1}});function dn(t,e){return new cn(t,e)}cn._flat=Bi;var hn=cn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return wi(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=cn.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof N&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){cn.prototype._setLatLngs.call(this,t),Di(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Di(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new O(e,e);if(t=new D(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,a=this._rings.length;o<a;o++)(n=yi(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,a,r,s,l,c=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,s=this._parts.length;o<s;o++)for(a=0,r=(l=(e=this._parts[o]).length)-1;a<l;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(c=!c);return c||cn.prototype._containsPoint.call(this,t,!0)}});function un(t,e){return new hn(t,e)}var pn=Yi.extend({initialize:function(t,e){p(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=v(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var a=this.options;if(a.filter&&!a.filter(t))return this;var r=mn(t,a);return r?(r.feature=wn(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function mn(t,e){var i,n,o,a,r="Feature"===t.type?t.geometry:t,s=r?r.coordinates:null,l=[],c=e&&e.pointToLayer,d=e&&e.coordsToLatLng||fn;if(!s&&!r)return null;switch(r.type){case"Point":return gn(c,t,i=d(s),e);case"MultiPoint":for(o=0,a=s.length;o<a;o++)i=d(s[o]),l.push(gn(c,t,i,e));return new Yi(l);case"LineString":case"MultiLineString":return n=vn(s,"LineString"===r.type?0:1,d),new cn(n,e);case"Polygon":case"MultiPolygon":return n=vn(s,"Polygon"===r.type?1:2,d),new hn(n,e);case"GeometryCollection":for(o=0,a=r.geometries.length;o<a;o++){var h=mn({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);h&&l.push(h)}return new Yi(l);case"FeatureCollection":for(o=0,a=r.features.length;o<a;o++){var u=mn(r.features[o],e);u&&l.push(u)}return new Yi(l);default:throw new Error("Invalid GeoJSON object.")}}function gn(t,e,i,n){return t?t(e,i):new en(i,n&&n.markersInheritOptions&&n)}function fn(t){return new N(t[1],t[0],t[2])}function vn(t,e,i){for(var n,o=[],a=0,r=t.length;a<r;a++)n=e?vn(t[a],e-1,i):(i||fn)(t[a]),o.push(n);return o}function _n(t,e){return void 0!==(t=H(t)).alt?[d(t.lng,e),d(t.lat,e),d(t.alt,e)]:[d(t.lng,e),d(t.lat,e)]}function bn(t,e,i,n){for(var o=[],a=0,r=t.length;a<r;a++)o.push(e?bn(t[a],Di(t[a])?0:e-1,i,n):_n(t[a],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function yn(t,e){return t.feature?i({},t.feature,{geometry:e}):wn(e)}function wn(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var xn={toGeoJSON:function(t){return yn(this,{type:"Point",coordinates:_n(this.getLatLng(),t)})}};function Cn(t,e){return new pn(t,e)}en.include(xn),sn.include(xn),an.include(xn),cn.include({toGeoJSON:function(t){var e=!Di(this._latlngs);return yn(this,{type:(e?"Multi":"")+"LineString",coordinates:bn(this._latlngs,e?1:0,!1,t)})}}),hn.include({toGeoJSON:function(t){var e=!Di(this._latlngs),i=e&&!Di(this._latlngs[0]),n=bn(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),yn(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Wi.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),yn(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return this.eachLayer(function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(i)n.push(o.geometry);else{var a=wn(o);"FeatureCollection"===a.type?n.push.apply(n,a.features):n.push(a)}}}),i?yn(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var Sn=Cn,Tn=Gi.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=R(e),p(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ye(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ge(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ve(this._image),this},bringToBack:function(){return this._map&&_e(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=R(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:me("img");ye(e,"leaflet-image-layer"),this._zoomAnimated&&ye(e,"leaflet-zoom-animated"),this.options.className&&ye(e,this.options.className),e.onselectstart=c,e.onmousemove=c,e.onload=o(this.fire,this,"load"),e.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ae(this._image,i,e)},_reset:function(){var t=this._image,e=new D(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Ee(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){Se(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),kn=function(t,e,i){return new Tn(t,e,i)},An=Tn.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:me("video");if(ye(e,"leaflet-image-layer"),this._zoomAnimated&&ye(e,"leaflet-zoom-animated"),this.options.className&&ye(e,this.options.className),e.onselectstart=c,e.onmousemove=c,e.onloadeddata=o(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],a=0;a<i.length;a++)n.push(i[a].src);this._url=i.length>0?n:[e.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var s=me("source");s.src=this._url[r],e.appendChild(s)}}}});function En(t,e,i){return new An(t,e,i)}var Mn=Tn.extend({_initImage:function(){var t=this._image=this._url;ye(t,"leaflet-image-layer"),this._zoomAnimated&&ye(t,"leaflet-zoom-animated"),this.options.className&&ye(t,this.options.className),t.onselectstart=c,t.onmousemove=c}});function Pn(t,e,i){return new Mn(t,e,i)}var $n=Gi.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof N||v(t))?(this._latlng=H(t),p(this,e)):(p(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Se(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Se(this._container,1),this.bringToFront(),this.options.interactive&&(ye(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Se(this._container,0),this._removeTimeout=setTimeout(o(ge,void 0,this._container),200)):ge(this._container),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=H(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ve(this._container),this},bringToBack:function(){return this._map&&_e(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Yi){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else{if(!e.getBounds)throw new Error("Unable to get source layer LatLng.");t=e.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=I(this.options.offset),i=this._getAnchor();this._zoomAnimated?Ee(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});ni.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),Gi.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(p(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}});var On=$n.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,$n.prototype.openOn.call(this,t)},onAdd:function(t){$n.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof on||this._source.on("preclick",Ue))},onRemove:function(t){$n.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof on||this._source.off("preclick",Ue))},getEvents:function(){var t=$n.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=me("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=me("div",t+"-content-wrapper",e);if(this._contentNode=me("div",t+"-content",i),We(e),Ge(this._contentNode),je(e,"contextmenu",Ue),this._tipContainer=me("div",t+"-tip-container",e),this._tip=me("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=me("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',je(n,"click",function(t){qe(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,a="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",ye(t,a)):we(t,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();Ee(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan)if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning)this._autopanning=!1;else{var t=this._map,e=parseInt(pe(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new O(this._containerLeft,-i-this._containerBottom);o._add(Me(this._container));var a=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),s=I(this.options.autoPanPaddingTopLeft||r),l=I(this.options.autoPanPaddingBottomRight||r),c=t.getSize(),d=0,h=0;a.x+n+l.x>c.x&&(d=a.x+n-c.x+l.x),a.x-d-s.x<0&&(d=a.x-s.x),a.y+i+l.y>c.y&&(h=a.y+i-c.y+l.y),a.y-h-s.y<0&&(h=a.y-s.y),(d||h)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([d,h]))}},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ln=function(t,e){return new On(t,e)};ni.mergeOptions({closePopupOnClick:!0}),ni.include({openPopup:function(t,e,i){return this._initOverlay(On,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),Gi.include({bindPopup:function(t,e){return this._popup=this._initOverlay(On,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Yi||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){Ye(t);var e=t.layer||t.target;this._popup._source!==e||e instanceof on?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var zn=$n.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){$n.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){$n.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=$n.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=me("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+r(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,a=n.latLngToContainerPoint(n.getCenter()),r=n.layerPointToContainerPoint(t),s=this.options.direction,l=o.offsetWidth,c=o.offsetHeight,d=I(this.options.offset),h=this._getAnchor();"top"===s?(e=l/2,i=c):"bottom"===s?(e=l/2,i=0):"center"===s?(e=l/2,i=c/2):"right"===s?(e=0,i=c/2):"left"===s?(e=l,i=c/2):r.x<a.x?(s="right",e=0,i=c/2):(s="left",e=l+2*(d.x+h.x),i=c/2),t=t.subtract(I(e,i,!0)).add(d).add(h),we(o,"leaflet-tooltip-right"),we(o,"leaflet-tooltip-left"),we(o,"leaflet-tooltip-top"),we(o,"leaflet-tooltip-bottom"),ye(o,"leaflet-tooltip-"+s),Ee(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Se(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),In=function(t,e){return new zn(t,e)};ni.include({openTooltip:function(t,e,i){return this._initOverlay(zn,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Gi.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(zn,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Yi||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(je(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),je(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map)if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)})}else this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});var Dn=Xi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(fe(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=I(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Bn(t){return new Dn(t)}Xi.Default=Ji;var jn=Gi.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Bt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ge(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ve(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=s(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof O?t:new O(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,a=i.length;o<a;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Bt.ielt9){Se(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var a=Math.min(1,(t-o.loaded)/200);Se(o.el,a),a<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(k(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:c,_initContainer:function(){this._container||(this._container=me("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(ge(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=me("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),c(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:c,_onRemoveLevel:c,_onCreateLevel:c,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ge(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),a=Math.floor(e/2),r=i-1,s=new O(+o,+a);s.z=+r;var l=this._tileCoordsToKey(s),c=this._tiles[l];return c&&c.active?(c.retain=!0,!0):(c&&c.loaded&&(c.retain=!0),r>n&&this._retainParent(o,a,r,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var a=2*e;a<2*e+2;a++){var r=new O(o,a);r.z=i+1;var s=this._tileCoordsToKey(r),l=this._tiles[s];l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<n&&this._retainChildren(o,a,i+1,n))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var a=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!a||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();Bt.any3d?Ae(t.el,o,n):Ee(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),a=e.getSize().divideBy(2*n);return new D(o.subtract(a),o.add(a))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),a=o.getCenter(),r=[],s=this.options.keepBuffer,l=new D(o.getBottomLeft().subtract([s,-s]),o.getTopRight().add([s,-s]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var c in this._tiles){var d=this._tiles[c].coords;d.z===this._tileZoom&&l.contains(new O(d.x,d.y))||(this._tiles[c].current=!1)}if(Math.abs(i-this._tileZoom)>1)this._setView(t,i);else{for(var h=o.min.y;h<=o.max.y;h++)for(var u=o.min.x;u<=o.max.x;u++){var p=new O(u,h);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:r.push(p)}}if(r.sort(function(t,e){return t.distanceTo(a)-e.distanceTo(a)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var g=document.createDocumentFragment();for(u=0;u<r.length;u++)this._addTile(r[u],g);this._level.el.appendChild(g)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return R(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i);return[e.unproject(n,t.z),e.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new j(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new O(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(ge(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){ye(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=c,t.onmousemove=c,Bt.ielt9&&this.options.opacity<1&&Se(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),a=this.createTile(this._wrapCoords(t),o(this._tileReady,this,t));this._initTile(a),this.createTile.length<2&&T(o(this._tileReady,this,t,null,a)),Ee(a,i),this._tiles[n]={el:a,coords:t,current:!0},e.appendChild(a),this.fire("tileloadstart",{tile:a,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(Se(i.el,0),k(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(ye(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Bt.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new O(this._wrapX?l(t.x,this._wrapX):t.x,this._wrapY?l(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new D(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Rn(t){return new jn(t)}var Nn=jn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=p(this,e)).detectRetina&&Bt.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return je(i,"load",o(this._tileOnLoad,this,e,i)),je(i,"error",o(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:Bt.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return f(this._url,i(e,this.options))},_tileOnLoad:function(t,e){Bt.ielt9?setTimeout(o(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return this.options.zoomReverse&&(t=e-t),t+this.options.zoomOffset},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=c,e.onerror=c,!e.complete)){e.src=b;var i=this._tiles[t].coords;ge(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",b),jn.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==b))return jn.prototype._tileReady.call(this,t,e,i)}});function Hn(t,e){return new Nn(t,e)}var Zn=Nn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var a=(e=p(this,e)).detectRetina&&Bt.retina?2:1,r=this.getTileSize();n.width=r.x*a,n.height=r.y*a,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Nn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=B(i.project(e[0]),i.project(e[1])),o=n.min,a=n.max,r=(this._wmsVersion>=1.3&&this._crs===Fi?[o.y,o.x,a.y,a.x]:[o.x,o.y,a.x,a.y]).join(","),s=Nn.prototype.getTileUrl.call(this,t);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});function Vn(t,e){return new Zn(t,e)}Nn.WMS=Zn,Hn.wms=Vn;var Fn=Gi.extend({options:{padding:.1},initialize:function(t){p(this,t),r(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ye(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),a=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));Bt.any3d?Ae(this._container,a,i):Ee(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new D(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Un=Fn.extend({options:{tolerance:0},getEvents:function(){var t=Fn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Fn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");je(t,"mousemove",this._onMouseMove,this),je(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),je(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){k(this._redrawRequest),delete this._ctx,ge(this._container),Ne(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){Fn.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=Bt.retina?2:1;Ee(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",Bt.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Fn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[r(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[r(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),o=[];for(i=0;i<n.length;i++){if(e=Number(n[i]),isNaN(e))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new D,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,a,r=t._parts,s=r.length,l=this._ctx;if(s){for(l.beginPath(),i=0;i<s;i++){for(n=0,o=r[i].length;n<o;n++)a=r[i][n],l[n?"lineTo":"moveTo"](a.x,a.y);e&&l.closePath()}this._fillStroke(l,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&("click"!==t.type&&"preclick"!==t.type||!this._map._draggableMoved(e))&&(i=e);this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(we(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,a=this._drawFirst;a;a=a.next)(i=a.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(ye(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;i&&(i.prev=n,n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;n&&(n.next=i,i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}});function Gn(t){return Bt.canvas?new Un(t):null}var Wn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),qn={_initContainer:function(){this._container=me("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Fn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Wn("shape");ye(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Wn("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[r(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;ge(e),t.removeInteractiveTarget(e),delete this._layers[r(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Wn("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Wn("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){ve(t._container)},_bringToBack:function(t){_e(t._container)}},Yn=Bt.vml?Wn:K,Kn=Fn.extend({_initContainer:function(){this._container=Yn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Yn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ge(this._container),Ne(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){Fn.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Ee(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Yn("path");t.options.className&&ye(e,t.options.className),t.options.interactive&&ye(e,"leaflet-interactive"),this._updateStyle(t),this._layers[r(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ge(t._path),t.removeInteractiveTarget(t._path),delete this._layers[r(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,X(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){ve(t._path)},_bringToBack:function(t){_e(t._path)}});function Xn(t){return Bt.svg||Bt.vml?new Kn(t):null}Bt.vml&&Kn.include(qn),ni.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Gn(t)||Xn(t)}});var Qn=hn.extend({initialize:function(t,e){hn.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=R(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Jn(t,e){return new Qn(t,e)}Kn.create=Yn,Kn.pointsToPath=X,pn.geometryToLayer=mn,pn.coordsToLatLng=fn,pn.coordsToLatLngs=vn,pn.latLngToCoords=_n,pn.latLngsToCoords=bn,pn.getFeature=yn,pn.asFeature=wn,ni.mergeOptions({boxZoom:!0});var to=fi.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){je(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ne(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ge(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),oe(),$e(),this._startPoint=this._map.mouseEventToContainerPoint(t),je(document,{contextmenu:Ye,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=me("div","leaflet-zoom-box",this._container),ye(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new D(this._point,this._startPoint),i=e.getSize();Ee(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(ge(this._box),we(this._container,"leaflet-crosshair")),ae(),Oe(),Ne(document,{contextmenu:Ye,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var e=new j(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ni.addInitHook("addHandler","boxZoom",to),ni.mergeOptions({doubleClickZoom:!0});var eo=fi.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});ni.addInitHook("addHandler","doubleClickZoom",eo),ni.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var io=fi.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new bi(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}ye(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){we(this._map._container,"leaflet-grab"),we(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=R(this._map.options.maxBounds);this._offsetLimit=B(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,a=(n+e+i)%t-e-i,r=Math.abs(o+i)<Math.abs(a+i)?o:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,r=i.easeLinearity,s=o.multiplyBy(r/a),l=s.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,l),d=s.multiplyBy(c/l),h=c/(i.inertiaDeceleration*r),u=d.multiplyBy(-h/2).round();u.x||u.y?(u=e._limitOffset(u,e.options.maxBounds),T(function(){e.panBy(u,{duration:h,easeLinearity:r,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});ni.addInitHook("addHandler","dragging",io),ni.mergeOptions({keyboard:!0,keyboardPanDelta:80});var no=fi.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),je(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ne(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){je(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ne(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map;if(i in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(e=this._panKeys[i],t.shiftKey&&(e=I(e).multiplyBy(3)),n.options.maxBounds&&(e=n._limitOffset(I(e),n.options.maxBounds)),n.options.worldCopyJump){var o=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));n.panTo(o)}else n.panBy(e)}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Ye(t)}}});ni.addInitHook("addHandler","keyboard",no),ni.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var oo=fi.extend({addHooks:function(){je(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ne(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Je(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),n),Ye(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,a=i?Math.ceil(o/i)*i:o,r=t._limitZoom(e+(this._delta>0?a:-a))-e;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}});ni.addInitHook("addHandler","scrollWheelZoom",oo);var ao=600;ni.mergeOptions({tapHold:Bt.touchNative&&Bt.safari&&Bt.mobile,tapTolerance:15});var ro=fi.extend({addHooks:function(){je(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ne(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new O(e.clientX,e.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(je(document,"touchend",qe),je(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),ao),je(document,"touchend touchcancel contextmenu",this._cancel,this),je(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){Ne(document,"touchend",qe),Ne(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),Ne(document,"touchend touchcancel contextmenu",this._cancel,this),Ne(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new O(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});ni.addInitHook("addHandler","tapHold",ro),ni.mergeOptions({touchZoom:Bt.touch,bounceAtZoomLimits:!0});var so=fi.extend({addHooks:function(){ye(this._map._container,"leaflet-touch-zoom"),je(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){we(this._map._container,"leaflet-touch-zoom"),Ne(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),je(document,"touchmove",this._onTouchMove,this),je(document,"touchend touchcancel",this._onTouchEnd,this),qe(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),a=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(a,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&a<1||this._zoom>e.getMaxZoom()&&a>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===a)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===a&&0===r.x&&0===r.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),k(this._animRequest);var s=o(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=T(s,this,!0),qe(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,k(this._animRequest),Ne(document,"touchmove",this._onTouchMove,this),Ne(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});ni.addInitHook("addHandler","touchZoom",so),ni.BoxZoom=to,ni.DoubleClickZoom=eo,ni.Drag=io,ni.Keyboard=no,ni.ScrollWheelZoom=oo,ni.TapHold=ro,ni.TouchZoom=so,t.Bounds=D,t.Browser=Bt,t.CRS=Z,t.Canvas=Un,t.Circle=sn,t.CircleMarker=an,t.Class=E,t.Control=ai,t.DivIcon=Dn,t.DivOverlay=$n,t.DomEvent=ei,t.DomUtil=Be,t.Draggable=bi,t.Evented=$,t.FeatureGroup=Yi,t.GeoJSON=pn,t.GridLayer=jn,t.Handler=fi,t.Icon=Xi,t.ImageOverlay=Tn,t.LatLng=N,t.LatLngBounds=j,t.Layer=Gi,t.LayerGroup=Wi,t.LineUtil=Ri,t.Map=ni,t.Marker=en,t.Mixin=vi,t.Path=on,t.Point=O,t.PolyUtil=Si,t.Polygon=hn,t.Polyline=cn,t.Popup=On,t.PosAnimation=ii,t.Projection=Zi,t.Rectangle=Qn,t.Renderer=Fn,t.SVG=Kn,t.SVGOverlay=Mn,t.TileLayer=Nn,t.Tooltip=zn,t.Transformation=G,t.Util=A,t.VideoOverlay=An,t.bind=o,t.bounds=B,t.canvas=Gn,t.circle=ln,t.circleMarker=rn,t.control=ri,t.divIcon=Bn,t.extend=i,t.featureGroup=Ki,t.geoJSON=Cn,t.geoJson=Sn,t.gridLayer=Rn,t.icon=Qi,t.imageOverlay=kn,t.latLng=H,t.latLngBounds=R,t.layerGroup=qi,t.map=oi,t.marker=nn,t.point=I,t.polygon=un,t.polyline=dn,t.popup=Ln,t.rectangle=Jn,t.setOptions=p,t.stamp=r,t.svg=Xn,t.svgOverlay=Pn,t.tileLayer=Hn,t.tooltip=In,t.transformation=W,t.version=e,t.videoOverlay=En;var lo=window.L;t.noConflict=function(){return window.L=lo,this},window.L=t}(fn.exports)),fn.exports}var bn,yn,wn,xn=_n(),Cn=A`/* required styles */

.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	  -webkit-user-drag: none;
	}
/* Prevents IE11 from highlighting tiles in blue */
.leaflet-tile::-moz-selection {
	background: transparent;
}
.leaflet-tile::selection {
	background: transparent;
}
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
	image-rendering: -webkit-optimize-contrast;
	}
/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {
	width: 1600px;
	height: 1600px;
	-webkit-transform-origin: 0 0;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg {
	max-width: none !important;
	max-height: none !important;
	}
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
	max-width: none !important;
	max-height: none !important;
	width: auto;
	padding: 0;
	}

.leaflet-container img.leaflet-tile {
	/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */
	mix-blend-mode: plus-lighter;
}

.leaflet-container.leaflet-touch-zoom {
	touch-action: pan-x pan-y;
	}
.leaflet-container.leaflet-touch-drag {
	/* Fallback for FF which doesn't support pinch-zoom */
	touch-action: none;
	touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
	touch-action: none;
}
.leaflet-container {
	-webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	box-sizing: border-box;
	z-index: 800;
	}
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
	-moz-user-select: none;
	}

.leaflet-pane         { z-index: 400; }

.leaflet-tile-pane    { z-index: 200; }
.leaflet-overlay-pane { z-index: 400; }
.leaflet-shadow-pane  { z-index: 500; }
.leaflet-marker-pane  { z-index: 600; }
.leaflet-tooltip-pane   { z-index: 650; }
.leaflet-popup-pane   { z-index: 700; }

.leaflet-map-pane canvas { z-index: 100; }
.leaflet-map-pane svg    { z-index: 200; }

.leaflet-vml-shape {
	width: 1px;
	height: 1px;
	}
.lvml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute;
	}


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 800;
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	left: 0;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 10px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 10px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;
	}
.leaflet-zoom-animated {
	transform-origin: 0 0;
	}
svg.leaflet-zoom-animated {
	will-change: transform;
}

.leaflet-zoom-anim .leaflet-zoom-animated {
	transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
	transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-interactive {
	cursor: pointer;
	}
.leaflet-grab {
	cursor:         grab;
	}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
	cursor: crosshair;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
	cursor: move;
	cursor:         grabbing;
	}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
	pointer-events: none;
	}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}

/* visual tweaks */

.leaflet-container {
	background: #ddd;
	outline-offset: 1px;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-zoom-box {
	border: 2px dotted #38f;
	background: rgba(255,255,255,0.5);
	}


/* general typography */
.leaflet-container {
	font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 1.5;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);
	border-radius: 4px;
	}
.leaflet-bar a {
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	width: 26px;
	height: 26px;
	line-height: 26px;
	display: block;
	text-align: center;
	-webkit-text-decoration: none;
	text-decoration: none;
	color: black;
	}
.leaflet-bar a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-bar a:hover,
.leaflet-bar a:focus {
	background-color: #f4f4f4;
	}
.leaflet-bar a:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	}
.leaflet-bar a:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: none;
	}
.leaflet-bar a.leaflet-disabled {
	cursor: default;
	background-color: #f4f4f4;
	color: #bbb;
	}

.leaflet-touch .leaflet-bar a {
	width: 30px;
	height: 30px;
	line-height: 30px;
	}
.leaflet-touch .leaflet-bar a:first-child {
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	}
.leaflet-touch .leaflet-bar a:last-child {
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	}

/* zoom control */

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
	font: bold 18px 'Lucida Console', Monaco, monospace;
	text-indent: 1px;
	}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {
	font-size: 22px;
	}


/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);
	background: #fff;
	border-radius: 5px;
	}
.leaflet-control-layers-toggle {
	background-image: url(images/layers.png);
	width: 36px;
	height: 36px;
	}
.leaflet-retina .leaflet-control-layers-toggle {
	background-image: url(images/layers-2x.png);
	background-size: 26px 26px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-scrollbar {
	overflow-y: scroll;
	overflow-x: hidden;
	padding-right: 5px;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	font-size: 13px;
	font-size: 1.08333em;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}

/* Default icon URLs */
.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */
	background-image: url(images/marker-icon.png);
	}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	background: #fff;
	background: rgba(255, 255, 255, 0.8);
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	line-height: 1.4;
	}
.leaflet-control-attribution a {
	-webkit-text-decoration: none;
	text-decoration: none;
	}
.leaflet-control-attribution a:hover,
.leaflet-control-attribution a:focus {
	-webkit-text-decoration: underline;
	text-decoration: underline;
	}
.leaflet-attribution-flag {
	display: inline !important;
	vertical-align: baseline !important;
	width: 1em;
	height: 0.6669em;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 2px solid #777;
	border-top: none;
	line-height: 1.1;
	padding: 2px 5px 1px;
	white-space: nowrap;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.8);
	text-shadow: 1px 1px #fff;
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #777;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	border: 2px solid rgba(0,0,0,0.2);
	background-clip: padding-box;
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	margin-bottom: 20px;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	border-radius: 12px;
	}
.leaflet-popup-content {
	margin: 13px 24px 13px 20px;
	line-height: 1.3;
	font-size: 13px;
	font-size: 1.08333em;
	min-height: 1px;
	}
.leaflet-popup-content p {
	margin: 17px 0;
	margin: 1.3em 0;
	}
.leaflet-popup-tip-container {
	width: 40px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-top: -1px;
	margin-left: -20px;
	overflow: hidden;
	pointer-events: none;
	}
.leaflet-popup-tip {
	width: 17px;
	height: 17px;
	padding: 1px;

	margin: -10px auto 0;
	pointer-events: auto;
	transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
	background: white;
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	text-align: center;
	width: 24px;
	height: 24px;
	font: 16px/24px Tahoma, Verdana, sans-serif;
	color: #757575;
	-webkit-text-decoration: none;
	text-decoration: none;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover,
.leaflet-container a.leaflet-popup-close-button:focus {
	color: #585858;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	}

.leaflet-oldie .leaflet-popup-content-wrapper {
	-ms-zoom: 1;
	}
.leaflet-oldie .leaflet-popup-tip {
	width: 24px;
	margin: 0 auto;

	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
	}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
	border: 1px solid #999;
	}


/* div icon */

.leaflet-div-icon {
	background: #fff;
	border: 1px solid #666;
	}


/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
	position: absolute;
	padding: 6px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 3px;
	color: #222;
	white-space: nowrap;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	pointer-events: none;
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);
	}
.leaflet-tooltip.leaflet-interactive {
	cursor: pointer;
	pointer-events: auto;
	}
.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	position: absolute;
	pointer-events: none;
	border: 6px solid transparent;
	background: transparent;
	content: "";
	}

/* Directions */

.leaflet-tooltip-bottom {
	margin-top: 6px;
}
.leaflet-tooltip-top {
	margin-top: -6px;
}
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
	left: 50%;
	margin-left: -6px;
	}
.leaflet-tooltip-top:before {
	bottom: 0;
	margin-bottom: -12px;
	border-top-color: #fff;
	}
.leaflet-tooltip-bottom:before {
	top: 0;
	margin-top: -12px;
	margin-left: -6px;
	border-bottom-color: #fff;
	}
.leaflet-tooltip-left {
	margin-left: -6px;
}
.leaflet-tooltip-right {
	margin-left: 6px;
}
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	top: 50%;
	margin-top: -6px;
	}
.leaflet-tooltip-left:before {
	right: 0;
	margin-right: -12px;
	border-left-color: #fff;
	}
.leaflet-tooltip-right:before {
	left: 0;
	margin-left: -12px;
	border-right-color: #fff;
	}

/* Printing */

@media print {
	/* Prevent printers from removing background-images of controls. */
	.leaflet-control {
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
		}
	}
`,Sn={exports:{}},Tn=Sn.exports;function kn(){return bn||(bn=1,t=Sn,e=function(t){return t.TileLayer.Provider=t.TileLayer.extend({initialize:function(e,i){var n=t.TileLayer.Provider.providers,o=e.split("."),a=o[0],r=o[1];if(!n[a])throw"No such provider ("+a+")";var s={url:n[a].url,options:n[a].options};if(r&&"variants"in n[a]){if(!(r in n[a].variants))throw"No such variant of "+a+" ("+r+")";var l,c=n[a].variants[r];l="string"==typeof c?{variant:c}:c.options,s={url:c.url||s.url,options:t.Util.extend({},s.options,l)}}var d=function(t){return-1===t.indexOf("{attribution.")?t:t.replace(/\{attribution.(\w*)\}/g,function(t,e){return d(n[e].options.attribution)})};s.options.attribution=d(s.options.attribution);var h=t.Util.extend({},s.options,i);t.TileLayer.prototype.initialize.call(this,s.url,h)}}),t.TileLayer.Provider.providers={OpenStreetMap:{url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",options:{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},variants:{Mapnik:{},DE:{url:"https://tile.openstreetmap.de/{z}/{x}/{y}.png",options:{maxZoom:18}},CH:{url:"https://tile.osm.ch/switzerland/{z}/{x}/{y}.png",options:{maxZoom:18,bounds:[[45,5],[48,11]]}},France:{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",options:{maxZoom:20,attribution:"&copy; OpenStreetMap France | {attribution.OpenStreetMap}"}},HOT:{url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",options:{attribution:'{attribution.OpenStreetMap}, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'}},BZH:{url:"https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png",options:{attribution:'{attribution.OpenStreetMap}, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',bounds:[[46.2,-5.5],[50,.7]]}}}},MapTilesAPI:{url:"https://maptiles.p.rapidapi.com/{variant}/{z}/{x}/{y}.png?rapidapi-key={apikey}",options:{attribution:'&copy; <a href="http://www.maptilesapi.com/">MapTiles API</a>, {attribution.OpenStreetMap}',variant:"en/map/v1",apikey:"<insert your api key here>",maxZoom:19},variants:{OSMEnglish:{options:{variant:"en/map/v1"}},OSMFrancais:{options:{variant:"fr/map/v1"}},OSMEspagnol:{options:{variant:"es/map/v1"}}}},OpenSeaMap:{url:"https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",options:{attribution:'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'}},OPNVKarte:{url:"https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png",options:{maxZoom:18,attribution:'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data {attribution.OpenStreetMap}'}},OpenTopoMap:{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",options:{maxZoom:17,attribution:'Map data: {attribution.OpenStreetMap}, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}},OpenRailwayMap:{url:"https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",options:{maxZoom:19,attribution:'Map data: {attribution.OpenStreetMap} | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}},OpenFireMap:{url:"http://openfiremap.org/hytiles/{z}/{x}/{y}.png",options:{maxZoom:19,attribution:'Map data: {attribution.OpenStreetMap} | Map style: &copy; <a href="http://www.openfiremap.org">OpenFireMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}},SafeCast:{url:"https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png",options:{maxZoom:16,attribution:'Map data: {attribution.OpenStreetMap} | Map style: &copy; <a href="https://blog.safecast.org/about/">SafeCast</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}},Stadia:{url:"https://tiles.stadiamaps.com/tiles/{variant}/{z}/{x}/{y}{r}.{ext}",options:{minZoom:0,maxZoom:20,attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"alidade_smooth",ext:"png"},variants:{AlidadeSmooth:"alidade_smooth",AlidadeSmoothDark:"alidade_smooth_dark",OSMBright:"osm_bright",Outdoors:"outdoors",StamenToner:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_toner"}},StamenTonerBackground:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_toner_background"}},StamenTonerLines:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_toner_lines"}},StamenTonerLabels:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_toner_labels"}},StamenTonerLite:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_toner_lite"}},StamenWatercolor:{url:"https://tiles.stadiamaps.com/tiles/{variant}/{z}/{x}/{y}.{ext}",options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_watercolor",ext:"jpg",minZoom:1,maxZoom:16}},StamenTerrain:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_terrain",minZoom:0,maxZoom:18}},StamenTerrainBackground:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_terrain_background",minZoom:0,maxZoom:18}},StamenTerrainLabels:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_terrain_labels",minZoom:0,maxZoom:18}},StamenTerrainLines:{options:{attribution:'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> {attribution.OpenStreetMap}',variant:"stamen_terrain_lines",minZoom:0,maxZoom:18}}}},Thunderforest:{url:"https://{s}.tile.thunderforest.com/{variant}/{z}/{x}/{y}.png?apikey={apikey}",options:{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, {attribution.OpenStreetMap}',variant:"cycle",apikey:"<insert your api key here>",maxZoom:22},variants:{OpenCycleMap:"cycle",Transport:{options:{variant:"transport"}},TransportDark:{options:{variant:"transport-dark"}},SpinalMap:{options:{variant:"spinal-map"}},Landscape:"landscape",Outdoors:"outdoors",Pioneer:"pioneer",MobileAtlas:"mobile-atlas",Neighbourhood:"neighbourhood"}},CyclOSM:{url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",options:{maxZoom:20,attribution:'<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: {attribution.OpenStreetMap}'}},Jawg:{url:"https://{s}.tile.jawg.io/{variant}/{z}/{x}/{y}{r}.png?access-token={accessToken}",options:{attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> {attribution.OpenStreetMap}',minZoom:0,maxZoom:22,subdomains:"abcd",variant:"jawg-terrain",accessToken:"<insert your access token here>"},variants:{Streets:"jawg-streets",Terrain:"jawg-terrain",Sunny:"jawg-sunny",Dark:"jawg-dark",Light:"jawg-light",Matrix:"jawg-matrix"}},MapBox:{url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",options:{attribution:'&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> {attribution.OpenStreetMap} <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>',tileSize:512,maxZoom:18,zoomOffset:-1,id:"mapbox/streets-v11",accessToken:"<insert your access token here>"}},MapTiler:{url:"https://api.maptiler.com/maps/{variant}/{z}/{x}/{y}{r}.{ext}?key={key}",options:{attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',variant:"streets",ext:"png",key:"<insert your MapTiler Cloud API key here>",tileSize:512,zoomOffset:-1,minZoom:0,maxZoom:21},variants:{Streets:"streets",Basic:"basic",Bright:"bright",Pastel:"pastel",Positron:"positron",Hybrid:{options:{variant:"hybrid",ext:"jpg"}},Toner:"toner",Topo:"topo",Voyager:"voyager"}},TomTom:{url:"https://{s}.api.tomtom.com/map/1/tile/{variant}/{style}/{z}/{x}/{y}.{ext}?key={apikey}",options:{variant:"basic",maxZoom:22,attribution:'<a href="https://tomtom.com" target="_blank">&copy;  1992 - '+(new Date).getFullYear()+" TomTom.</a> ",subdomains:"abcd",style:"main",ext:"png",apikey:"<insert your API key here>"},variants:{Basic:"basic",Hybrid:"hybrid",Labels:"labels"}},Esri:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/{variant}/MapServer/tile/{z}/{y}/{x}",options:{variant:"World_Street_Map",attribution:"Tiles &copy; Esri"},variants:{WorldStreetMap:{options:{attribution:"{attribution.Esri} &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"}},DeLorme:{options:{variant:"Specialty/DeLorme_World_Base_Map",minZoom:1,maxZoom:11,attribution:"{attribution.Esri} &mdash; Copyright: &copy;2012 DeLorme"}},WorldTopoMap:{options:{variant:"World_Topo_Map",attribution:"{attribution.Esri} &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"}},WorldImagery:{options:{variant:"World_Imagery",attribution:"{attribution.Esri} &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}},WorldTerrain:{options:{variant:"World_Terrain_Base",maxZoom:13,attribution:"{attribution.Esri} &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS"}},WorldShadedRelief:{options:{variant:"World_Shaded_Relief",maxZoom:13,attribution:"{attribution.Esri} &mdash; Source: Esri"}},WorldPhysical:{options:{variant:"World_Physical_Map",maxZoom:8,attribution:"{attribution.Esri} &mdash; Source: US National Park Service"}},OceanBasemap:{options:{variant:"Ocean/World_Ocean_Base",maxZoom:13,attribution:"{attribution.Esri} &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}},NatGeoWorldMap:{options:{variant:"NatGeo_World_Map",maxZoom:16,attribution:"{attribution.Esri} &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"}},WorldGrayCanvas:{options:{variant:"Canvas/World_Light_Gray_Base",maxZoom:16,attribution:"{attribution.Esri} &mdash; Esri, DeLorme, NAVTEQ"}}}},OpenWeatherMap:{url:"http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png?appid={apiKey}",options:{maxZoom:19,attribution:'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',apiKey:"<insert your api key here>",opacity:.5},variants:{Clouds:"clouds",CloudsClassic:"clouds_cls",Precipitation:"precipitation",PrecipitationClassic:"precipitation_cls",Rain:"rain",RainClassic:"rain_cls",Pressure:"pressure",PressureContour:"pressure_cntr",Wind:"wind",Temperature:"temp",Snow:"snow"}},HERE:{url:"https://{s}.{base}.maps.api.here.com/maptile/2.1/{type}/{mapID}/{variant}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}",options:{attribution:"Map &copy; 1987-"+(new Date).getFullYear()+' <a href="http://developer.here.com">HERE</a>',subdomains:"1234",mapID:"newest",app_id:"<insert your app_id here>",app_code:"<insert your app_code here>",base:"base",variant:"normal.day",maxZoom:20,type:"maptile",language:"eng",format:"png8",size:"256"},variants:{normalDay:"normal.day",normalDayCustom:"normal.day.custom",normalDayGrey:"normal.day.grey",normalDayMobile:"normal.day.mobile",normalDayGreyMobile:"normal.day.grey.mobile",normalDayTransit:"normal.day.transit",normalDayTransitMobile:"normal.day.transit.mobile",normalDayTraffic:{options:{variant:"normal.traffic.day",base:"traffic",type:"traffictile"}},normalNight:"normal.night",normalNightMobile:"normal.night.mobile",normalNightGrey:"normal.night.grey",normalNightGreyMobile:"normal.night.grey.mobile",normalNightTransit:"normal.night.transit",normalNightTransitMobile:"normal.night.transit.mobile",reducedDay:"reduced.day",reducedNight:"reduced.night",basicMap:{options:{type:"basetile"}},mapLabels:{options:{type:"labeltile",format:"png"}},trafficFlow:{options:{base:"traffic",type:"flowtile"}},carnavDayGrey:"carnav.day.grey",hybridDay:{options:{base:"aerial",variant:"hybrid.day"}},hybridDayMobile:{options:{base:"aerial",variant:"hybrid.day.mobile"}},hybridDayTransit:{options:{base:"aerial",variant:"hybrid.day.transit"}},hybridDayGrey:{options:{base:"aerial",variant:"hybrid.grey.day"}},hybridDayTraffic:{options:{variant:"hybrid.traffic.day",base:"traffic",type:"traffictile"}},pedestrianDay:"pedestrian.day",pedestrianNight:"pedestrian.night",satelliteDay:{options:{base:"aerial",variant:"satellite.day"}},terrainDay:{options:{base:"aerial",variant:"terrain.day"}},terrainDayMobile:{options:{base:"aerial",variant:"terrain.day.mobile"}}}},HEREv3:{url:"https://{s}.{base}.maps.ls.hereapi.com/maptile/2.1/{type}/{mapID}/{variant}/{z}/{x}/{y}/{size}/{format}?apiKey={apiKey}&lg={language}",options:{attribution:"Map &copy; 1987-"+(new Date).getFullYear()+' <a href="http://developer.here.com">HERE</a>',subdomains:"1234",mapID:"newest",apiKey:"<insert your apiKey here>",base:"base",variant:"normal.day",maxZoom:20,type:"maptile",language:"eng",format:"png8",size:"256"},variants:{normalDay:"normal.day",normalDayCustom:"normal.day.custom",normalDayGrey:"normal.day.grey",normalDayMobile:"normal.day.mobile",normalDayGreyMobile:"normal.day.grey.mobile",normalDayTransit:"normal.day.transit",normalDayTransitMobile:"normal.day.transit.mobile",normalNight:"normal.night",normalNightMobile:"normal.night.mobile",normalNightGrey:"normal.night.grey",normalNightGreyMobile:"normal.night.grey.mobile",normalNightTransit:"normal.night.transit",normalNightTransitMobile:"normal.night.transit.mobile",reducedDay:"reduced.day",reducedNight:"reduced.night",basicMap:{options:{type:"basetile"}},mapLabels:{options:{type:"labeltile",format:"png"}},trafficFlow:{options:{base:"traffic",type:"flowtile"}},carnavDayGrey:"carnav.day.grey",hybridDay:{options:{base:"aerial",variant:"hybrid.day"}},hybridDayMobile:{options:{base:"aerial",variant:"hybrid.day.mobile"}},hybridDayTransit:{options:{base:"aerial",variant:"hybrid.day.transit"}},hybridDayGrey:{options:{base:"aerial",variant:"hybrid.grey.day"}},pedestrianDay:"pedestrian.day",pedestrianNight:"pedestrian.night",satelliteDay:{options:{base:"aerial",variant:"satellite.day"}},terrainDay:{options:{base:"aerial",variant:"terrain.day"}},terrainDayMobile:{options:{base:"aerial",variant:"terrain.day.mobile"}}}},FreeMapSK:{url:"https://{s}.freemap.sk/T/{z}/{x}/{y}.jpeg",options:{minZoom:8,maxZoom:16,subdomains:"abcd",bounds:[[47.204642,15.996093],[49.830896,22.576904]],attribution:'{attribution.OpenStreetMap}, visualization CC-By-SA 2.0 <a href="http://freemap.sk">Freemap.sk</a>'}},MtbMap:{url:"http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png",options:{attribution:"{attribution.OpenStreetMap} &amp; USGS"}},CartoDB:{url:"https://{s}.basemaps.cartocdn.com/{variant}/{z}/{x}/{y}{r}.png",options:{attribution:'{attribution.OpenStreetMap} &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:20,variant:"light_all"},variants:{Positron:"light_all",PositronNoLabels:"light_nolabels",PositronOnlyLabels:"light_only_labels",DarkMatter:"dark_all",DarkMatterNoLabels:"dark_nolabels",DarkMatterOnlyLabels:"dark_only_labels",Voyager:"rastertiles/voyager",VoyagerNoLabels:"rastertiles/voyager_nolabels",VoyagerOnlyLabels:"rastertiles/voyager_only_labels",VoyagerLabelsUnder:"rastertiles/voyager_labels_under"}},HikeBike:{url:"https://tiles.wmflabs.org/{variant}/{z}/{x}/{y}.png",options:{maxZoom:19,attribution:"{attribution.OpenStreetMap}",variant:"hikebike"},variants:{HikeBike:{},HillShading:{options:{maxZoom:15,variant:"hillshading"}}}},BasemapAT:{url:"https://mapsneu.wien.gv.at/basemap/{variant}/{type}/google3857/{z}/{y}/{x}.{format}",options:{maxZoom:19,attribution:'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>',type:"normal",format:"png",bounds:[[46.35877,8.782379],[49.037872,17.189532]],variant:"geolandbasemap"},variants:{basemap:{options:{maxZoom:20,variant:"geolandbasemap"}},grau:"bmapgrau",overlay:"bmapoverlay",terrain:{options:{variant:"bmapgelaende",type:"grau",format:"jpeg"}},surface:{options:{variant:"bmapoberflaeche",type:"grau",format:"jpeg"}},highdpi:{options:{variant:"bmaphidpi",format:"jpeg"}},orthofoto:{options:{maxZoom:20,variant:"bmaporthofoto30cm",format:"jpeg"}}}},nlmaps:{url:"https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/{variant}/EPSG:3857/{z}/{x}/{y}.png",options:{minZoom:6,maxZoom:19,bounds:[[50.5,3.25],[54,7.6]],attribution:'Kaartgegevens &copy; <a href="https://www.kadaster.nl">Kadaster</a>'},variants:{standaard:"standaard",pastel:"pastel",grijs:"grijs",water:"water",luchtfoto:{url:"https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0/Actueel_ortho25/EPSG:3857/{z}/{x}/{y}.jpeg"}}},NASAGIBS:{url:"https://map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}",options:{attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',bounds:[[-85.0511287776,-179.999999975],[85.0511287776,179.999999975]],minZoom:1,maxZoom:9,format:"jpg",time:"",tilematrixset:"GoogleMapsCompatible_Level"},variants:{ModisTerraTrueColorCR:"MODIS_Terra_CorrectedReflectance_TrueColor",ModisTerraBands367CR:"MODIS_Terra_CorrectedReflectance_Bands367",ViirsEarthAtNight2012:{options:{variant:"VIIRS_CityLights_2012",maxZoom:8}},ModisTerraLSTDay:{options:{variant:"MODIS_Terra_Land_Surface_Temp_Day",format:"png",maxZoom:7,opacity:.75}},ModisTerraSnowCover:{options:{variant:"MODIS_Terra_NDSI_Snow_Cover",format:"png",maxZoom:8,opacity:.75}},ModisTerraAOD:{options:{variant:"MODIS_Terra_Aerosol",format:"png",maxZoom:6,opacity:.75}},ModisTerraChlorophyll:{options:{variant:"MODIS_Terra_Chlorophyll_A",format:"png",maxZoom:7,opacity:.75}}}},NLS:{url:"https://nls-{s}.tileserver.com/nls/{z}/{x}/{y}.jpg",options:{attribution:'<a href="http://geo.nls.uk/maps/">National Library of Scotland Historic Maps</a>',bounds:[[49.6,-12],[61.7,3]],minZoom:1,maxZoom:18,subdomains:"0123"}},JusticeMap:{url:"https://www.justicemap.org/tile/{size}/{variant}/{z}/{x}/{y}.png",options:{attribution:'<a href="http://www.justicemap.org/terms.php">Justice Map</a>',size:"county",bounds:[[14,-180],[72,-56]]},variants:{income:"income",americanIndian:"indian",asian:"asian",black:"black",hispanic:"hispanic",multi:"multi",nonWhite:"nonwhite",white:"white",plurality:"plural"}},GeoportailFrance:{url:"https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER={variant}&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",options:{attribution:'<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',bounds:[[-75,-180],[81,180]],minZoom:2,maxZoom:18,apikey:"choisirgeoportail",format:"image/png",style:"normal",variant:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"},variants:{plan:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",parcels:{options:{variant:"CADASTRALPARCELS.PARCELLAIRE_EXPRESS",style:"PCI vecteur",maxZoom:20}},orthos:{options:{maxZoom:19,format:"image/jpeg",variant:"ORTHOIMAGERY.ORTHOPHOTOS"}}}},OneMapSG:{url:"https://maps-{s}.onemap.sg/v3/{variant}/{z}/{x}/{y}.png",options:{variant:"Default",minZoom:11,maxZoom:18,bounds:[[1.56073,104.11475],[1.16,103.502]],attribution:'<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'},variants:{Default:"Default",Night:"Night",Original:"Original",Grey:"Grey",LandLot:"LandLot"}},USGS:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:20,attribution:'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'},variants:{USTopo:{},USImagery:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"},USImageryTopo:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"}}},WaymarkedTrails:{url:"https://tile.waymarkedtrails.org/{variant}/{z}/{x}/{y}.png",options:{maxZoom:18,attribution:'Map data: {attribution.OpenStreetMap} | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},variants:{hiking:"hiking",cycling:"cycling",mtb:"mtb",slopes:"slopes",riding:"riding",skating:"skating"}},OpenAIP:{url:"https://{s}.tile.maps.openaip.net/geowebcache/service/tms/1.0.0/openaip_basemap@EPSG%3A900913@png/{z}/{x}/{y}.{ext}",options:{attribution:'<a href="https://www.openaip.net/">openAIP Data</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-NC-SA</a>)',ext:"png",minZoom:4,maxZoom:14,tms:!0,detectRetina:!0,subdomains:"12"}},OpenSnowMap:{url:"https://tiles.opensnowmap.org/{variant}/{z}/{x}/{y}.png",options:{minZoom:9,maxZoom:18,attribution:'Map data: {attribution.OpenStreetMap} & ODbL, &copy; <a href="https://www.opensnowmap.org/iframes/data.html">www.opensnowmap.org</a> <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'},variants:{pistes:"pistes"}},AzureMaps:{url:"https://atlas.microsoft.com/map/tile?api-version={apiVersion}&tilesetId={variant}&x={x}&y={y}&zoom={z}&language={language}&subscription-key={subscriptionKey}",options:{attribution:"See https://docs.microsoft.com/en-us/rest/api/maps/render-v2/get-map-tile for details.",apiVersion:"2.0",variant:"microsoft.imagery",subscriptionKey:"<insert your subscription key here>",language:"en-US"},variants:{MicrosoftImagery:"microsoft.imagery",MicrosoftBaseDarkGrey:"microsoft.base.darkgrey",MicrosoftBaseRoad:"microsoft.base.road",MicrosoftBaseHybridRoad:"microsoft.base.hybrid.road",MicrosoftTerraMain:"microsoft.terra.main",MicrosoftWeatherInfraredMain:{url:"https://atlas.microsoft.com/map/tile?api-version={apiVersion}&tilesetId={variant}&x={x}&y={y}&zoom={z}&timeStamp={timeStamp}&language={language}&subscription-key={subscriptionKey}",options:{timeStamp:"2021-05-08T09:03:00Z",attribution:"See https://docs.microsoft.com/en-us/rest/api/maps/render-v2/get-map-tile#uri-parameters for details.",variant:"microsoft.weather.infrared.main"}},MicrosoftWeatherRadarMain:{url:"https://atlas.microsoft.com/map/tile?api-version={apiVersion}&tilesetId={variant}&x={x}&y={y}&zoom={z}&timeStamp={timeStamp}&language={language}&subscription-key={subscriptionKey}",options:{timeStamp:"2021-05-08T09:03:00Z",attribution:"See https://docs.microsoft.com/en-us/rest/api/maps/render-v2/get-map-tile#uri-parameters for details.",variant:"microsoft.weather.radar.main"}}}},SwissFederalGeoportal:{url:"https://wmts.geo.admin.ch/1.0.0/{variant}/default/current/3857/{z}/{x}/{y}.jpeg",options:{attribution:'&copy; <a href="https://www.swisstopo.admin.ch/">swisstopo</a>',minZoom:2,maxZoom:18,bounds:[[45.398181,5.140242],[48.230651,11.47757]]},variants:{NationalMapColor:"ch.swisstopo.pixelkarte-farbe",NationalMapGrey:"ch.swisstopo.pixelkarte-grau",SWISSIMAGE:{options:{variant:"ch.swisstopo.swissimage",maxZoom:19}}}}},t.tileLayer.provider=function(e,i){return new t.TileLayer.Provider(e,i)},t},"object"==typeof modules&&t.exports?t.exports=e(_n()):e(L)),Sn.exports;var t,e}kn(),function(t){t.Auto="auto",t.Light="light",t.Dark="dark"}(yn||(yn={})),function(t){t.HEADER_INFO="header_info",t.IMAGES_SLIDER="images_slider",t.MINI_MAP="mini_map",t.BUTTONS="buttons"}(wn||(wn={}));const An=[wn.HEADER_INFO,wn.IMAGES_SLIDER,wn.MINI_MAP,wn.BUTTONS],En={type:"custom:canyonero-vehicle-dashboard",name:"Canyonero",entity:"",model_name:"",selected_language:"system",show_slides:!1,show_map:!1,show_buttons:!0,show_header_info:!0,show_background:!0,enable_map_popup:!1,enable_services_control:!1,show_error_notify:!1,device_tracker:"",map_popup_config:{hours_to_show:0,default_zoom:14,theme_mode:yn.Auto},selected_theme:{theme:"default",mode:yn.Auto},extra_configs:{tire_card_custom:{background:"",horizontal:!1,image_size:100,value_size:100,top:50,left:50},images_swipe:{max_height:150,max_width:450,autoplay:!1,loop:!0,delay:5e3,speed:500,effect:"slide"},mini_map_height:150,show_address:!0},button_grid:{use_swiper:!1,rows_size:2},services:{auxheat:!1,charge:!1,doorsLock:!1,engine:!1,preheat:!1,sendRoute:!1,sigPos:!1,sunroof:!1,windows:!1},use_custom_cards:{vehicle_card:!1,trip_card:!1,eco_card:!1,tyre_card:!1}},Mn=(t,e)=>t&&t.config.components.includes(e);class Pn{constructor(t,e){this.hass=t,this.hoursToShow=e,this.combinedHistory={}}processMessage(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;const e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,i={};for(const t of Object.keys(this.combinedHistory))i[t]=[];for(const e of Object.keys(t.states))i[e]=[];for(const n of Object.keys(i)){if(n in this.combinedHistory&&n in t.states){const e=this.combinedHistory[n],o=e[e.length-1];i[n]=e.concat(t.states[n]),t.states[n][0].lu<o.lu&&(i[n]=i[n].sort((t,e)=>t.lu-e.lu))}else n in this.combinedHistory?i[n]=this.combinedHistory[n]:i[n]=t.states[n];if(e&&n in this.combinedHistory){const t=i[n].filter(t=>t.lu<e);if(!t.length)continue;if(i[n]=i[n].filter(t=>t.lu>=e),i[n].length&&i[n][0].lu===e)continue;const o=t[t.length-1];o.lu=e,i[n].unshift(o)}}return this.combinedHistory=i,this.combinedHistory}}const $n=(t,e,i,n,o)=>{const a={type:"history/stream",entity_ids:o,start_time:i.toISOString(),end_time:n.toISOString(),minimal_response:!1,no_attributes:!1,significant_changes_only:!1},r=new Pn(t);return t.connection.subscribeMessage(t=>e(r.processMessage(t)),a)};function On(t,e){if(!t)return;let i=null,n=null,o=null,a=null,r=!1;const s=e=>{e.stopImmediatePropagation(),"undefined"!=typeof TouchEvent&&e instanceof TouchEvent?(i=e.touches[0].clientX,n=e.touches[0].clientY):"undefined"!=typeof MouseEvent&&e instanceof MouseEvent&&(i=e.clientX,n=e.clientY),["touchmove","mousemove"].forEach(e=>{t.addEventListener(e,l)}),["touchend","mouseup"].forEach(e=>{t.addEventListener(e,c)})},l=t=>{null!==i&&null!==n&&("undefined"!=typeof TouchEvent&&t instanceof TouchEvent?(o=i-t.touches[0].clientX,a=n-t.touches[0].clientY):"undefined"!=typeof MouseEvent&&t instanceof MouseEvent&&(o=i-t.clientX,a=n-t.clientY),null!==o&&null!==a&&Math.abs(o)>1&&Math.abs(a)>1&&(r=!0))},c=s=>{s.stopImmediatePropagation(),["touchmove","mousemove"].forEach(e=>{t.removeEventListener(e,l)}),["touchend","mouseup"].forEach(e=>{t.removeEventListener(e,c)});const d=t.clientWidth;r&&null!==o&&null!==a&&(Math.abs(o)>Math.abs(a)&&Math.abs(o)>d/3&&(o>0?(t.classList.add("swiping-left"),setTimeout(()=>{e("next"),t.classList.remove("swiping-left")},300)):(t.classList.add("swiping-right"),setTimeout(()=>{e("prev"),t.classList.remove("swiping-right")},300))),o=a=i=n=null,r=!1)};["touchstart","mousedown"].forEach(e=>{t.addEventListener(e,s,{passive:!0})})}var Ln=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function zn(t,e){return t===e||!(!Ln(t)||!Ln(e))}function In(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!zn(t[i],e[i]))return!1;return!0}function Dn(t,e){void 0===e&&(e=In);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var a=t.apply(this,n);return i={lastResult:a,lastArgs:n,lastThis:this},a}return n.clear=function(){i=null},n}var Bn="0.0.3",jn={url:"https://github.com/its-me-prash/vag-connect-cards"};const Rn=`v${Bn}`,Nn="update.canyonero_card_update",Hn=jn.url.replace("https://github.com/",""),Zn=["btn_preview","card_preview","tire_preview"],Vn={domain:"vag_connect",filters:{doorsLocked:{suffix:"_doors_locked"},doorsOpen:{suffix:"_doors_open"},windowsOpen:{suffix:"_windows_open"},plugConnected:{suffix:"_plug_connected"},connectorLocked:{suffix:"_connector_locked"},isCharging:{suffix:"_is_charging"},isDriving:{suffix:"_is_driving"},isOnline:{suffix:"_is_online"},lightsOn:{suffix:"_lights_on"},climatisationActive:{suffix:"_climatisation_active"},windowHeatingEnabled:{suffix:"_window_heating_enabled"},windowHeatingFront:{suffix:"_window_heating_front"},windowHeatingBack:{suffix:"_window_heating_back"},batteryCareEnabled:{suffix:"_battery_care_enabled"},climateAtUnlock:{suffix:"_climate_at_unlock"},autoUnlockWhenCharged:{suffix:"_auto_unlock_when_charged"},otaUpdateAvailable:{suffix:"_ota_update_available"},warning12vLow:{suffix:"_warning_12v_low"},warningActive:{suffix:"_warning_active"},warningBrakes:{suffix:"_warning_brakes"},warningEngine:{suffix:"_warning_engine"},warningOil:{suffix:"_warning_oil"},warningTyre:{suffix:"_warning_tyre"},soc:{suffix:"_battery_soc"},targetSoc:{suffix:"_target_soc"},batteryCareTargetSoc:{suffix:"_battery_care_target_soc_pct"},chargingPower:{suffix:"_charging_power_kw"},chargingRate:{suffix:"_charging_rate_kmh"},chargeCompleteEta:{suffix:"_charge_complete_eta"},chargingType:{suffix:"_charging_type"},chargingState:{suffix:"_charging_state"},plugState:{suffix:"_plug_state"},maxChargeCurrent:{suffix:"_max_charge_current_a"},totalChargedEnergy:{suffix:"_total_charged_energy_kwh"},lastChargingSessionKwh:{suffix:"_last_charging_session_kwh"},lastChargingSessionDuration:{suffix:"_last_charging_session_duration_min"},activeChargingProfileName:{suffix:"_active_charging_profile_name"},activeChargingProfileTargetSoc:{suffix:"_active_charging_profile_target_soc_pct"},fuelLevel:{suffix:"_fuel_level"},adblueRange:{suffix:"_adblue_range_km"},rangeElectric:{suffix:"_electric_range_km"},rangeCombustion:{suffix:"_combustion_range_km"},rangeTotal:{suffix:"_total_range_km"},rangeLegacy:{suffix:"_range_km"},secondaryEngineRange:{suffix:"_secondary_engine_range_km"},odometer:{suffix:"_odometer_km"},outsideTemp:{suffix:"_outside_temp"},batteryTemp:{suffix:"_battery_temp"},voltage12v:{suffix:"_voltage_12v"},vehicleState:{suffix:"_vehicle_state"},connectionState:{suffix:"_connection_state"},parkingAddress:{suffix:"_parking_address"},parkingCity:{suffix:"_parking_city"},climatisationState:{suffix:"_climatisation_state"},targetTemperature:{suffix:"_target_temperature"},serviceDueInDays:{suffix:"_service_due_in_days"},serviceDueAt:{suffix:"_service_due_at"},serviceKm:{suffix:"_service_km"},oilServiceDueInDays:{suffix:"_oil_service_due_in_days"},oilServiceAt:{suffix:"_oil_service_at"},oilServiceKm:{suffix:"_oil_service_km"},softwareVersion:{suffix:"_software_version"},licensePlate:{suffix:"_license_plate"},requestsRemaining:{suffix:"_requests_remaining_today"},wakeCountToday:{suffix:"_wake_count_today"},lastUpdatedAt:{suffix:"_last_updated_at"},lastTripDistance:{suffix:"_last_trip_distance_km"},lastTripAvgSpeed:{suffix:"_last_trip_avg_speed_kmh"},lastTripAvgFuelConsumption:{suffix:"_last_trip_avg_fuel_consumption_l_100km"},lastTripAvgElectricConsumption:{suffix:"_last_trip_avg_electric_consumption_kwh_100km"}},services:{refresh:"refresh_vehicle",refreshCache:"refresh_cloud_cache",lock:"lock",unlock:"unlock",startClimate:"start_climatisation",stopClimate:"stop_climatisation",startCharging:"start_charging",stopCharging:"stop_charging",flashLights:"flash_lights",startWindowHeating:"start_window_heating",stopWindowHeating:"stop_window_heating",startVentilation:"start_ventilation",stopVentilation:"stop_ventilation",startAuxHeating:"start_aux_heating",stopAuxHeating:"stop_aux_heating",wake:"wake_vehicle",engineStart:"engine_start",engineStop:"engine_stop",setTargetSoc:"set_target_soc",setClimateTemp:"set_climatisation_temperature",setDepartureTimer:"set_departure_timer",sendDestination:"send_destination"}},Fn={domain:"tesla_custom",filters:{soc:{suffix:"_battery"},targetSoc:{suffix:"_charge_limit"},rangeElectric:{suffix:"_battery_range"},chargingPower:{suffix:"_charger_power"},chargingState:{suffix:"_charger"},plugState:{suffix:"_charger_plug"},odometer:{suffix:"_odometer"},outsideTemp:{suffix:"_outside_temp"},batteryTemp:{suffix:"_battery_heater"},isCharging:{suffix:"_charger"},isOnline:{suffix:"_online"},doorsLocked:{suffix:"_doors_locked"},softwareVersion:{suffix:"_software_update_version"}},services:{lock:"lock_doors",unlock:"unlock_doors",startClimate:"climate_on",stopClimate:"climate_off",startCharging:"charging_start",stopCharging:"charging_stop",flashLights:"flash_lights",wake:"wake_up"}},Un={domain:"mbapi2020",filters:{soc:{prefix:"sensor.",suffix:"soc"},targetSoc:{prefix:"sensor.",suffix:"_max_state_of_charge"},rangeElectric:{suffix:"_rangeelectrickm"},rangeCombustion:{suffix:"_rangeliquid"},fuelLevel:{suffix:"_tanklevelpercent"},adblueRange:{suffix:"_tankleveladblue"},chargingPower:{suffix:"_chargingpowerkw"},odometer:{suffix:"_odometer"},doorsLocked:{prefix:"lock",suffix:"_lock"},windowsOpen:{suffix:"_windowstatusoverall"},warningTyre:{suffix:"_tirewarninglamp"}},services:{}},Gn={domain:null,filters:Vn.filters,services:{}},Wn={vag_connect:Vn,tesla_custom:Fn,mbapi2020:Un,generic:Gn},qn="vag_connect";function Yn(t){return Wn[t]||Wn[qn]}const Kn=["audi","volkswagen","skoda","seat","cupra","porsche","volkswagen_na","tesla","bmw","mercedes","toyota","volvo","ford","hyundai","kia","nissan","mazda","honda","subaru"];var Xn="German",Qn="Deutsch",Jn={socQuality:{title:"SOC-Datenqualität",missing:"SOC ist nicht verfügbar.",ambiguous:"Die Quelle enthält mehrdeutige SOC-Werte.",unverified:"Der SOC-Erfassungszeitpunkt ist nicht bestätigt.",future:"Der SOC-Quellzeitpunkt liegt in der Zukunft.",stale:"Der letzte SOC-Wert ist älter als die eingestellte Grenze.",fresh:"Aktueller SOC-Wert mit eigenem Erfassungszeitpunkt.",sourceTime:"SOC-Quellzeitpunkt",noSourceTime:"Kein bestätigter Quellzeitpunkt",energyToTarget:"Batterieenergie bis zum Ziel",noEstimate:"Keine verlässliche Schätzung",estimateNote:"Die Schätzung enthält keine Ladeverluste. Sie bestätigt keine Zielerreichung zum Termin und steuert das Laden nicht."},common:{vehicle:"Fahrzeug",lastUpdate:"Letzte Aktualisierung",stateCharging:"Lädt",stateClosed:"Geschlossen",stateLocked:"Verriegelt",stateLockedInt:"Innen verriegelt",stateNotExisting:"Nicht vorhanden",stateOpen:"Offen",stateParkBrakeOff:"Gelöst",stateParkBrakeOn:"Angezogen",statePartlyUnlocked:"Teilweise entriegelt",stateUnknown:"Unbekannt",stateUnlocked:"Entriegelt",statePressed:"Gedrückt",titleRemoteControl:"Fernbedienung",titleServices:"Dienste",toastCommandSent:"Befehl gesendet",toastCardAlreadyExists:"Karte mit diesem Namen existiert bereits",toastImageError:"Bild konnte nicht geladen werden"},cardType:{tripCards:"Fahrt & Reichweite",vehicleCards:"Fahrzeug-Status",ecoCards:"Service",tyreCards:"Akku & Laden"},tripCard:{overview:"Übersicht",lastTrip:"Letzte Fahrt",odometer:"Kilometerstand",rangeTotal:"Gesamtreichweite",rangeElectric:"Elektrische Reichweite",rangeCombustion:"Kraftstoff-Reichweite",fuelLevel:"Tankfüllung",adblueRange:"AdBlue-Reichweite",soc:"Ladestand",targetSoc:"Ziel-Ladestand",lastTripDistance:"Strecke",lastTripAvgSpeed:"Ø Geschwindigkeit",lastTripAvgFuelConsumption:"Ø Kraftstoffverbrauch",lastTripAvgElectricConsumption:"Ø Stromverbrauch",outsideTemp:"Außentemperatur",batteryTemp:"Akkutemperatur"},vehicleCard:{vehicleStatus:"Fahrzeugstatus",vehicleWarnings:"Warnungen",doorsLocked:"Türen verriegelt",doorsOpen:"Türen",windowsOpen:"Fenster",plugConnected:"Ladekabel",lightsOn:"Licht",isOnline:"Online",warning12vLow:"12-V-Batterie schwach",warningActive:"Warnung aktiv",warningOil:"Öl",warningTyre:"Reifendruck",warningBrakes:"Bremsen",warningEngine:"Motor"},ecoCard:{serviceTitle:"Service",diagnosticsTitle:"Diagnose",serviceDueInDays:"Service fällig (Tage)",serviceKm:"Service fällig (km)",oilServiceDueInDays:"Ölservice (Tage)",oilServiceKm:"Ölservice (km)",voltage12v:"12-V-Spannung",softwareVersion:"Softwareversion",otaUpdateAvailable:"OTA-Update verfügbar",requestsRemaining:"API-Kontingent verbleibend",wakeCountToday:"Weckungen heute",connectionState:"Verbindung",lastUpdatedAt:"Zuletzt gesehen",daysUnit:"T"},tyreCard:{batteryTitle:"Akku",target:"Ziel",chargingOverview:"Lade-Übersicht",chargingDetails:"Lade-Details",chargingPower:"Ladeleistung",chargingRate:"Ladegeschwindigkeit",chargingType:"Ladetyp",chargeCompleteEta:"Voll geladen um",maxChargeCurrent:"Max. Ladestrom",totalChargedEnergy:"Gesamtenergie geladen"},chargingOverview:{soc:"Ladestand",targetSoc:"Ziel-Ladestand",chargingState:"Ladezustand",plugState:"Ladekabel-Status"},climateOverview:{climatisationState:"Klimatisierung",targetTemperature:"Zieltemperatur"},chargingState:{charging:"Lädt",notCharging:"Lädt nicht",readyForCharging:"Ladebereit",conservation:"Erhaltungsladung",off:"Aus"},plugState:{connected:"Angeschlossen",disconnected:"Getrennt"},chargingType:{ac:"AC",dc:"DC",off:"Aus"},climateState:{heating:"Heizen",cooling:"Kühlen",ventilation:"Lüften",off:"Aus"},connectionState:{online:"Online",offline:"Offline",waking:"Wacht auf"},vehicleState:{parked:"Geparkt",driving:"Fahrend",charging:"Lädt",climatizing:"Klimatisiert",ready:"Bereit"},doorAttributes:{frontLeft:"Vorne links",frontRight:"Vorne rechts",rearLeft:"Hinten links",rearRight:"Hinten rechts",trunk:"Kofferraum",hood:"Motorhaube",sunroof:"Schiebedach"},lockAttributes:{frontLeft:"Vorne links",frontRight:"Vorne rechts",rearLeft:"Hinten links",rearRight:"Hinten rechts"},windowAttributes:{frontLeft:"Vorne links",frontRight:"Vorne rechts",rearLeft:"Hinten links",rearRight:"Hinten rechts",sunroof:"Schiebedach"},windowState:{ventilation:"Lüftungsstellung",tilt:"Gekippt"},serviceData:{labelLockCar:"Fahrzeug verriegeln",labelUnlockCar:"Fahrzeug entriegeln",labelMoreInfo:"Mehr Infos",labelPreclimateStatus:"Vorklima-Status"},button:{hidden:"Versteckt",icon:"Icon",primary:"Hauptzeile"},buttonConfig:{transparent:"Transparent"}},to={common:{infoServices:"Aktiviere die Dienste, die du über die Karte steuern möchtest.",infoButton:"Karten-Buttons konfigurieren."},entityConfig:{title:"Entität & Name",desc:"Wähle einen beliebigen VAG-Connect-Sensor deines Fahrzeugs — der Rest wird automatisch erkannt."},buttonConfig:{title:"Karten-Buttons",desc:"Konfiguriere die Buttons, die in der Karte angezeigt werden",deleteConfirm:"Diesen Button wirklich löschen?",toastNewCard:"Neue Karte hinzugefügt"},customButtonConfig:{title:"Eigene Buttons",info:"Aussehen und Verhalten dieses Buttons anpassen."},mapConfig:{title:"Karte",desc:"Mini-Karte und Karten-Popup-Optionen.",device_tracker:"Device-Tracker-Entität",default_zoom:"Standard-Zoom",hours_to_show:"Stunden Verlauf",theme_mode:"Theme-Modus",google_api_key:"Google Maps API-Key (optional, für Adressauflösung)"},imagesConfig:{selectAll:"Alle auswählen",deselectAll:"Auswahl aufheben",deleteSelected:"Ausgewählte löschen"},servicesConfig:{title:"Dienste",desc:"VAG-Connect-Aktionen aktivieren (Lock, Klima, Laden …)."},themeLangConfig:{title:"Theme & Sprache",desc:"Theme-Modus + Karten-Sprache."},showConfig:{title:"Sichtbarkeit",desc:"Sektionen der Karte ein-/ausblenden."},showOpts:{show_slides:"Bild-Slider anzeigen",show_buttons:"Buttons anzeigen",show_map:"Karte anzeigen",show_header_info:"Header-Info anzeigen",show_background:"Hintergrund anzeigen",enable_map_popup:"Karten-Popup aktivieren",show_address:"Adresse anzeigen",enable_services_control:"Dienstesteuerung aktivieren",show_error_notify:"Fehlerbenachrichtigungen anzeigen"},customTireBackground:{info:"Eigener Hintergrund für das alte Reifen-Layout (für Rückwärtskompatibilität)."}},eo={name:Xn,nativeName:Qn,card:Jn,editor:to},io=Object.freeze({__proto__:null,card:Jn,default:eo,editor:to,name:Xn,nativeName:Qn}),no="English",oo="English",ao={socQuality:{title:"SOC data quality",missing:"SOC is not available.",ambiguous:"Source contains ambiguous SOC readings.",unverified:"SOC capture time is not verified.",future:"SOC source time is in the future.",stale:"Last SOC reading is older than the configured limit.",fresh:"Recent per-point SOC reading.",sourceTime:"SOC source time",noSourceTime:"No verified source time",energyToTarget:"Battery energy to target",noEstimate:"No reliable estimate",estimateNote:"Estimate excludes charging losses. It does not predict deadline completion or control charging."},common:{vehicle:"Vehicle",lastUpdate:"Last update",stateCharging:"Charging",stateClosed:"Closed",stateLocked:"Locked",stateLockedInt:"Locked (interior)",stateNotExisting:"Not available",stateOpen:"Open",stateParkBrakeOff:"Released",stateParkBrakeOn:"Engaged",statePartlyUnlocked:"Partly unlocked",stateUnknown:"Unknown",stateUnlocked:"Unlocked",statePressed:"Pressed",titleRemoteControl:"Remote control",titleServices:"Services",toastCommandSent:"Command sent",toastCardAlreadyExists:"Card with this name already exists",toastImageError:"Failed to load image"},cardType:{tripCards:"Trip & Range",vehicleCards:"Vehicle Status",ecoCards:"Service",tyreCards:"Battery & Charging"},tripCard:{overview:"Overview",lastTrip:"Last trip",odometer:"Odometer",rangeTotal:"Total range",rangeElectric:"Electric range",rangeCombustion:"Combustion range",fuelLevel:"Fuel level",adblueRange:"AdBlue range",soc:"State of charge",targetSoc:"Target SoC",lastTripDistance:"Distance",lastTripAvgSpeed:"Average speed",lastTripAvgFuelConsumption:"Fuel consumption",lastTripAvgElectricConsumption:"Electric consumption",outsideTemp:"Outside temperature",batteryTemp:"Battery temperature"},vehicleCard:{vehicleStatus:"Vehicle status",vehicleWarnings:"Warnings",doorsLocked:"Doors locked",doorsOpen:"Doors",windowsOpen:"Windows",plugConnected:"Plug",lightsOn:"Lights",isOnline:"Online",warning12vLow:"12 V battery low",warningActive:"Warning indicator",warningOil:"Oil",warningTyre:"Tyre pressure",warningBrakes:"Brakes",warningEngine:"Engine"},ecoCard:{serviceTitle:"Service",diagnosticsTitle:"Diagnostics",serviceDueInDays:"Service due (days)",serviceKm:"Service due (km)",oilServiceDueInDays:"Oil service (days)",oilServiceKm:"Oil service (km)",voltage12v:"12 V voltage",softwareVersion:"Software version",otaUpdateAvailable:"OTA update",requestsRemaining:"API quota remaining",wakeCountToday:"Wakes today",connectionState:"Connection",lastUpdatedAt:"Last seen",daysUnit:"d"},tyreCard:{batteryTitle:"Battery",target:"Target",chargingOverview:"Charging overview",chargingDetails:"Charging details",chargingPower:"Charging power",chargingRate:"Charging rate",chargingType:"Charging type",chargeCompleteEta:"Charge complete ETA",maxChargeCurrent:"Max charge current",totalChargedEnergy:"Total energy charged"},chargingOverview:{soc:"State of charge",targetSoc:"Target SoC",chargingState:"Charging state",plugState:"Plug state"},climateOverview:{climatisationState:"Climate state",targetTemperature:"Target temperature"},chargingState:{charging:"Charging",notCharging:"Not charging",readyForCharging:"Ready for charging",conservation:"Conservation",off:"Off"},plugState:{connected:"Connected",disconnected:"Disconnected"},chargingType:{ac:"AC",dc:"DC",off:"Off"},climateState:{heating:"Heating",cooling:"Cooling",ventilation:"Ventilation",off:"Off"},connectionState:{online:"Online",offline:"Offline",waking:"Waking"},vehicleState:{parked:"Parked",driving:"Driving",charging:"Charging",climatizing:"Climatizing",ready:"Ready"},doorAttributes:{frontLeft:"Front left",frontRight:"Front right",rearLeft:"Rear left",rearRight:"Rear right",trunk:"Trunk",hood:"Hood",sunroof:"Sunroof"},lockAttributes:{frontLeft:"Front left",frontRight:"Front right",rearLeft:"Rear left",rearRight:"Rear right"},windowAttributes:{frontLeft:"Front left",frontRight:"Front right",rearLeft:"Rear left",rearRight:"Rear right",sunroof:"Sunroof"},windowState:{ventilation:"Ventilation",tilt:"Tilt"},serviceData:{labelLockCar:"Lock vehicle",labelUnlockCar:"Unlock vehicle",labelMoreInfo:"More info",labelPreclimateStatus:"Pre-climate status"},button:{hidden:"Hidden",icon:"Icon",primary:"Primary"},buttonConfig:{transparent:"Transparent"}},ro={common:{infoServices:"Enable the services you want to control from the card.",infoButton:"Configure the card buttons."},entityConfig:{title:"Entity & Name",desc:"Pick any VAG Connect sensor for your vehicle — the card auto-discovers the rest."},buttonConfig:{title:"Card Buttons",desc:"Configure the buttons displayed in the card",deleteConfirm:"Are you sure you want to delete this button?",toastNewCard:"New card added"},customButtonConfig:{title:"Custom Buttons",info:"Customise the appearance and behaviour of this button."},mapConfig:{title:"Map",desc:"Mini-map and map popup options.",device_tracker:"Device tracker entity",default_zoom:"Default zoom",hours_to_show:"Hours of history",theme_mode:"Theme mode",google_api_key:"Google Maps API key (optional, for address resolution)"},imagesConfig:{selectAll:"Select all",deselectAll:"Deselect all",deleteSelected:"Delete selected"},servicesConfig:{title:"Services",desc:"Enable VAG Connect actions (lock, climate, charging, …)."},themeLangConfig:{title:"Theme & Language",desc:"Theme mode + card language."},showConfig:{title:"Visibility",desc:"Toggle card sections on / off."},showOpts:{show_slides:"Show image slider",show_buttons:"Show buttons",show_map:"Show map",show_header_info:"Show header info",show_background:"Show background",enable_map_popup:"Enable map popup",show_address:"Show address",enable_services_control:"Enable services control",show_error_notify:"Show error notifications"},customTireBackground:{info:"Custom background for the legacy tyre layout (kept for back-compat)."}},so={name:no,nativeName:oo,card:ao,editor:ro},lo=Object.freeze({__proto__:null,card:ao,default:so,editor:ro,name:no,nativeName:oo}),co="French",ho="Français",uo={socQuality:{title:"Qualité des données SOC",missing:"Le SOC est indisponible.",ambiguous:"La source contient des mesures SOC ambiguës.",unverified:"L’heure de mesure du SOC n’est pas vérifiée.",future:"L’heure source du SOC est dans le futur.",stale:"La dernière mesure SOC dépasse la limite configurée.",fresh:"Mesure SOC récente avec horodatage individuel.",sourceTime:"Heure source du SOC",noSourceTime:"Aucune heure source vérifiée",energyToTarget:"Énergie batterie jusqu’à la cible",noEstimate:"Aucune estimation fiable",estimateNote:"L’estimation exclut les pertes de charge. Elle ne prédit pas la fin de charge et ne commande pas la charge."},common:{vehicle:"Véhicule",lastUpdate:"Dernière mise à jour",stateCharging:"En charge",stateClosed:"Fermé",stateLocked:"Verrouillé",stateLockedInt:"Verrouillé (intérieur)",stateNotExisting:"Non disponible",stateOpen:"Ouvert",stateParkBrakeOff:"Relâché",stateParkBrakeOn:"Serré",statePartlyUnlocked:"Partiellement déverrouillé",stateUnknown:"Inconnu",stateUnlocked:"Déverrouillé",statePressed:"Appuyé",titleRemoteControl:"Télécommande",titleServices:"Services",toastCommandSent:"Commande envoyée",toastCardAlreadyExists:"Une carte avec ce nom existe déjà",toastImageError:"Échec du chargement de l'image"},cardType:{tripCards:"Trajet & Autonomie",vehicleCards:"État du véhicule",ecoCards:"Service",tyreCards:"Batterie & Charge"},tripCard:{overview:"Aperçu",lastTrip:"Dernier trajet",odometer:"Compteur",rangeTotal:"Autonomie totale",rangeElectric:"Autonomie électrique",rangeCombustion:"Autonomie thermique",fuelLevel:"Niveau de carburant",adblueRange:"Autonomie AdBlue",soc:"État de charge",targetSoc:"SoC cible",lastTripDistance:"Distance",lastTripAvgSpeed:"Vitesse moyenne",lastTripAvgFuelConsumption:"Consommation carburant",lastTripAvgElectricConsumption:"Consommation électrique",outsideTemp:"Température extérieure",batteryTemp:"Température batterie"},vehicleCard:{vehicleStatus:"État du véhicule",vehicleWarnings:"Avertissements",doorsLocked:"Portes verrouillées",doorsOpen:"Portes",windowsOpen:"Fenêtres",plugConnected:"Câble de charge",lightsOn:"Feux",isOnline:"En ligne",warning12vLow:"Batterie 12 V faible",warningActive:"Avertissement actif",warningOil:"Huile",warningTyre:"Pression pneus",warningBrakes:"Freins",warningEngine:"Moteur"},ecoCard:{serviceTitle:"Entretien",diagnosticsTitle:"Diagnostic",serviceDueInDays:"Entretien dû (jours)",serviceKm:"Entretien dû (km)",oilServiceDueInDays:"Vidange (jours)",oilServiceKm:"Vidange (km)",voltage12v:"Tension 12 V",softwareVersion:"Version logicielle",otaUpdateAvailable:"Mise à jour OTA",requestsRemaining:"Quota API restant",wakeCountToday:"Réveils aujourd'hui",connectionState:"Connexion",lastUpdatedAt:"Dernière communication",daysUnit:"j"},tyreCard:{batteryTitle:"Batterie",target:"Cible",chargingOverview:"Aperçu de la charge",chargingDetails:"Détails de la charge",chargingPower:"Puissance de charge",chargingRate:"Vitesse de charge",chargingType:"Type de charge",chargeCompleteEta:"Charge complète à",maxChargeCurrent:"Courant max",totalChargedEnergy:"Énergie totale chargée"},chargingOverview:{soc:"État de charge",targetSoc:"SoC cible",chargingState:"État de charge",plugState:"État du câble"},climateOverview:{climatisationState:"Climatisation",targetTemperature:"Température cible"},chargingState:{charging:"En charge",notCharging:"Pas en charge",readyForCharging:"Prêt à charger",conservation:"Conservation",off:"Arrêt"},plugState:{connected:"Connecté",disconnected:"Déconnecté"},chargingType:{ac:"AC",dc:"DC",off:"Arrêt"},climateState:{heating:"Chauffage",cooling:"Climatisation",ventilation:"Ventilation",off:"Arrêt"},connectionState:{online:"En ligne",offline:"Hors ligne",waking:"Réveil"},vehicleState:{parked:"Stationné",driving:"En conduite",charging:"En charge",climatizing:"Climatisation",ready:"Prêt"},doorAttributes:{frontLeft:"Avant gauche",frontRight:"Avant droit",rearLeft:"Arrière gauche",rearRight:"Arrière droit",trunk:"Coffre",hood:"Capot",sunroof:"Toit ouvrant"},lockAttributes:{frontLeft:"Avant gauche",frontRight:"Avant droit",rearLeft:"Arrière gauche",rearRight:"Arrière droit"},windowAttributes:{frontLeft:"Avant gauche",frontRight:"Avant droit",rearLeft:"Arrière gauche",rearRight:"Arrière droit",sunroof:"Toit ouvrant"},windowState:{ventilation:"Ventilation",tilt:"Entrebâillé"},serviceData:{labelLockCar:"Verrouiller le véhicule",labelUnlockCar:"Déverrouiller le véhicule",labelMoreInfo:"Plus d'infos",labelPreclimateStatus:"Préclimatisation"},button:{hidden:"Caché",icon:"Icône",primary:"Principal"},buttonConfig:{transparent:"Transparent"}},po={common:{infoServices:"Activez les services à contrôler depuis la carte.",infoButton:"Configurer les boutons de la carte."},entityConfig:{title:"Entité & Nom",desc:"Choisis n'importe quel capteur VAG Connect — le reste est détecté automatiquement."},buttonConfig:{title:"Boutons de la carte",desc:"Configurer les boutons affichés dans la carte",deleteConfirm:"Supprimer ce bouton ?",toastNewCard:"Nouvelle carte ajoutée"},customButtonConfig:{title:"Boutons personnalisés",info:"Personnaliser l'apparence et le comportement de ce bouton."},mapConfig:{title:"Carte",desc:"Mini-carte et options de fenêtre carte.",device_tracker:"Entité device_tracker",default_zoom:"Zoom par défaut",hours_to_show:"Heures d'historique",theme_mode:"Mode thème",google_api_key:"Clé API Google Maps (optionnel, géocodage adresse)"},imagesConfig:{selectAll:"Tout sélectionner",deselectAll:"Tout désélectionner",deleteSelected:"Supprimer la sélection"},servicesConfig:{title:"Services",desc:"Activer les actions VAG Connect (verrouillage, climatisation, charge …)."},themeLangConfig:{title:"Thème & Langue",desc:"Mode de thème + langue de la carte."},showConfig:{title:"Visibilité",desc:"Activer/désactiver les sections de la carte."},showOpts:{show_slides:"Afficher le diaporama d'images",show_buttons:"Afficher les boutons",show_map:"Afficher la carte",show_header_info:"Afficher les infos d'en-tête",show_background:"Afficher l'arrière-plan",enable_map_popup:"Activer la fenêtre de carte",show_address:"Afficher l'adresse",enable_services_control:"Activer le contrôle des services",show_error_notify:"Afficher les notifications d'erreur"},customTireBackground:{info:"Arrière-plan personnalisé pour l'ancien layout pneus (rétro-compatibilité)."}},mo={name:co,nativeName:ho,card:uo,editor:po},go=Object.freeze({__proto__:null,card:uo,default:mo,editor:po,name:co,nativeName:ho});const fo={de:io,en:lo,fr:go},vo=[{key:"de",name:"German",nativeName:"Deutsch"},{key:"en",name:"English",nativeName:"English"},{key:"fr",name:"French",nativeName:"Français"}],_o="en";function bo(t,e){try{return t.split(".").reduce((t,e)=>t[e],fo[e])}catch(t){return}}function yo(t,e,i="",n=""){let o=bo(t,fo.hasOwnProperty(e)?e:_o);return o||(o=bo(t,_o)),o||(o=t),i&&n&&(o=o.replace(i,n)),o}const wo=(t,e,i)=>({label:yo(t,e),configKey:i}),xo=t=>[wo("editor.showOpts.show_slides",t,"show_slides"),wo("editor.showOpts.show_buttons",t,"show_buttons"),wo("editor.showOpts.show_map",t,"show_map"),wo("editor.showOpts.show_header_info",t,"show_header_info"),wo("editor.showOpts.show_background",t,"show_background"),wo("editor.showOpts.enable_map_popup",t,"enable_map_popup"),wo("editor.showOpts.show_address",t,"show_address"),wo("editor.showOpts.enable_services_control",t,"enable_services_control"),wo("editor.showOpts.show_error_notify",t,"show_error_notify")],Co=(t,e,i,n,o)=>({type:t,name:yo(`card.cardType.${t}`,o),icon:e,config:i,button:n}),So=t=>[Co("tripCards","mdi:road-variant","trip_card","trip_button",t),Co("vehicleCards","mdi:car-info","vehicle_card","vehicle_button",t),Co("ecoCards","mdi:wrench-clock","eco_card","eco_button",t),Co("tyreCards","mdi:battery-charging","tyre_card","tyre_button",t)],To=(t,e,i,n)=>Object.assign({key:t,name:yo(`card.${e}`,i)},n?{icon:n}:{}),ko=t=>[To("odometer","tripCard.odometer",t,"mdi:counter"),To("rangeTotal","tripCard.rangeTotal",t,"mdi:map-marker-distance"),To("rangeElectric","tripCard.rangeElectric",t,"mdi:lightning-bolt"),To("rangeCombustion","tripCard.rangeCombustion",t,"mdi:gas-station"),To("fuelLevel","tripCard.fuelLevel",t,"mdi:fuel"),To("adblueRange","tripCard.adblueRange",t),To("soc","tripCard.soc",t,"mdi:battery-high"),To("targetSoc","tripCard.targetSoc",t)],Ao=t=>[To("lastTripDistance","tripCard.lastTripDistance",t,"mdi:map-marker-path"),To("lastTripAvgSpeed","tripCard.lastTripAvgSpeed",t,"mdi:speedometer"),To("lastTripAvgFuelConsumption","tripCard.lastTripAvgFuelConsumption",t,"mdi:gas-station"),To("lastTripAvgElectricConsumption","tripCard.lastTripAvgElectricConsumption",t,"mdi:lightning-bolt"),To("outsideTemp","tripCard.outsideTemp",t,"mdi:thermometer"),To("batteryTemp","tripCard.batteryTemp",t,"mdi:thermometer-low")],Eo=t=>[To("doorsLocked","vehicleCard.doorsLocked",t,"mdi:car-door-lock"),To("doorsOpen","vehicleCard.doorsOpen",t,"mdi:car-door"),To("windowsOpen","vehicleCard.windowsOpen",t,"mdi:window-closed-variant"),To("plugConnected","vehicleCard.plugConnected",t,"mdi:ev-plug-type2"),To("lightsOn","vehicleCard.lightsOn",t,"mdi:car-light-high"),To("isOnline","vehicleCard.isOnline",t,"mdi:wifi")],Mo=t=>[To("warning12vLow","vehicleCard.warning12vLow",t,"mdi:car-battery"),To("warningActive","vehicleCard.warningActive",t,"mdi:alert"),To("warningOil","vehicleCard.warningOil",t,"mdi:oil"),To("warningTyre","vehicleCard.warningTyre",t,"mdi:tire"),To("warningBrakes","vehicleCard.warningBrakes",t,"mdi:car-brake-alert"),To("warningEngine","vehicleCard.warningEngine",t,"mdi:engine")],Po=t=>[To("serviceDueInDays","ecoCard.serviceDueInDays",t,"mdi:wrench-clock"),To("serviceKm","ecoCard.serviceKm",t,"mdi:map-marker-distance"),To("oilServiceDueInDays","ecoCard.oilServiceDueInDays",t,"mdi:oil"),To("oilServiceKm","ecoCard.oilServiceKm",t),To("voltage12v","ecoCard.voltage12v",t,"mdi:car-battery"),To("softwareVersion","ecoCard.softwareVersion",t,"mdi:numeric")],$o=t=>[To("otaUpdateAvailable","ecoCard.otaUpdateAvailable",t,"mdi:cloud-download"),To("requestsRemaining","ecoCard.requestsRemaining",t,"mdi:gauge"),To("wakeCountToday","ecoCard.wakeCountToday",t,"mdi:alarm"),To("connectionState","ecoCard.connectionState",t,"mdi:cloud-check"),To("lastUpdatedAt","ecoCard.lastUpdatedAt",t,"mdi:clock-check")],Oo=t=>[To("soc","chargingOverview.soc",t,"mdi:battery-high"),To("targetSoc","chargingOverview.targetSoc",t,"mdi:battery-charging-100"),To("chargingState","chargingOverview.chargingState",t,"mdi:battery-charging"),To("plugState","chargingOverview.plugState",t,"mdi:ev-plug-type2")],Lo=t=>[To("chargingPower","tyreCard.chargingPower",t,"mdi:flash"),To("chargingRate","tyreCard.chargingRate",t,"mdi:speedometer"),To("chargingType","tyreCard.chargingType",t,"mdi:ev-station"),To("chargeCompleteEta","tyreCard.chargeCompleteEta",t,"mdi:timer"),To("maxChargeCurrent","tyreCard.maxChargeCurrent",t,"mdi:current-ac"),To("totalChargedEnergy","tyreCard.totalChargedEnergy",t,"mdi:counter")],zo=t=>[To("climatisationState","climateOverview.climatisationState",t,"mdi:air-conditioner"),To("targetTemperature","climateOverview.targetTemperature",t,"mdi:thermometer")],Io=t=>({tripOverview:ko(t),lastTripStats:Ao(t),vehicleOverview:Eo(t),vehicleWarnings:Mo(t),serviceOverview:Po(t),diagnosticsOverview:$o(t),chargingOverview:Oo(t),chargingDetails:Lo(t),climateOverview:zo(t)}),Do=window.loadCardHelpers?window.loadCardHelpers():void 0;function Bo(t){const e=t.toLowerCase().trim();return e.includes("audi")?"audi":e.includes("škoda")||e.includes("skoda")?"skoda":e.includes("cupra")?"cupra":e.includes("seat")?"seat":e.includes("porsche")?"porsche":e.includes("volkswagen")?e.includes("us")||e.includes("na")?"volkswagen_na":"volkswagen":e.includes("tesla")?"tesla":e.includes("bmw")?"bmw":e.includes("mercedes")||e.includes("benz")?"mercedes":e.includes("toyota")?"toyota":e.includes("volvo")?"volvo":e.includes("ford")?"ford":e.includes("hyundai")?"hyundai":e.includes("kia")?"kia":e.includes("nissan")?"nissan":e.includes("mazda")?"mazda":e.includes("honda")?"honda":e.includes("subaru")?"subaru":Kn.includes(e)?e:void 0}const jo=Dn(async(t,e,i)=>{if(!t.states[e.entity])return i._entityNotFound=!0,{};const n=await t.callWS({type:"config/entity_registry/list"}),o=n.find(t=>t.entity_id===e.entity);if(!o)return console.warn("[canyonero] Anchor entity not found in registry:",e.entity),{};const a=n.filter(t=>t.device_id===o.device_id&&null===t.hidden_by&&null===t.disabled_by).filter(e=>t.states[e.entity_id]&&!["unavailable","unknown"].includes(t.states[e.entity_id].state)),r=Yn(e.integration||qn),s={};for(const t of Object.keys(r.filters)){const{prefix:e,suffix:i}=r.filters[t],n=a.find(t=>e?t.entity_id.startsWith(e)&&t.entity_id.endsWith(i):t.unique_id&&t.unique_id.endsWith(i)||t.entity_id.endsWith(i));n&&(s[t]={entity_id:n.entity_id,original_name:n.original_name})}return s});async function Ro(t,e){const i=(await t.callWS({type:"config/entity_registry/list"})).find(t=>t.entity_id===e);if(!(null==i?void 0:i.device_id))return null;const n=(await t.callWS({type:"config/device_registry/list"})).find(t=>t.id===i.device_id);return n?{name:n.name_by_user||n.name||"",model:n.model||"",manufacturer:n.manufacturer||"",brand:Bo(n.manufacturer||"")}:null}function No(t){const e=Object.keys(t.states);return e.find(t=>t.startsWith("sensor.")&&t.endsWith("_battery_soc"))||e.find(t=>t.startsWith("sensor.")&&t.endsWith("_vehicle_state"))||""}async function Ho(t,e){if(!e)return;const i=e.secondary?await Vo(t,e.secondary):e.attribute&&e.entity?t.formatEntityAttributeValue(t.states[e.entity],e.attribute):e.entity?t.formatEntityState(t.states[e.entity]):"",n=!!e.notify&&await Fo(t,e.notify),o=e.icon_template?await Vo(t,e.icon_template):e.icon||"",a=e.color_template?await Vo(t,e.color_template):"";return{enabled:!0,hide:!1,primary:e.primary,secondary:i,icon:o,notify:n,button_type:e.button_type||"default",button_action:e.button_action,entity:e.entity||"",attribute:e.attribute||"",color:a}}async function Zo(t,e){if(!e)return[];let i;if(window.loadCardHelpers?i=await window.loadCardHelpers():Do&&(i=Do),!i||!i.createCardElement)return[];const n=await Promise.all(e.map(async e=>{try{const n=await i.createCardElement(e);return n.hass=t,n}catch(t){return null}}));return n}async function Vo(t,e){if(!t||!e)return"";try{return await t.callApi("POST","template",{template:e})}catch(t){throw new Error(`Error evaluating template: ${t}`)}}async function Fo(t,e){if(!t||!e)return!1;try{return"true"===(await t.callApi("POST","template",{template:e})).trim().toLowerCase()}catch(t){return!1}}async function Uo(t,e,i){var n;const o=e[i.button],a=(null===(n=e.use_custom_cards)||void 0===n?void 0:n[i.config])||!1,r=void 0!==e[i.config],s=[{type:"vertical-stack",cards:e[i.config]}];return{key:i.type,default_name:i.name,default_icon:i.icon,button:{hidden:(null==o?void 0:o.hide)||!1,button_action:(null==o?void 0:o.button_action)||{},entity:(null==o?void 0:o.entity)||"",icon:(null==o?void 0:o.icon)||"",primary:(null==o?void 0:o.primary)||"",secondary:(null==o?void 0:o.secondary)||"",attribute:(null==o?void 0:o.attribute)||"",notify:(null==o?void 0:o.notify)||"",icon_template:(null==o?void 0:o.icon_template)||"",color_template:(null==o?void 0:o.color_template)||"",picture_template:(null==o?void 0:o.picture_template)||"",state_color:(null==o?void 0:o.state_color)||!1,notify_icon:(null==o?void 0:o.notify_icon)||"",notify_color:(null==o?void 0:o.notify_color)||""},button_type:(null==o?void 0:o.button_type)||"default",card_type:a?"custom":"default",custom_button:(null==o?void 0:o.enabled)||!1,custom_card:r?await Zo(t,s):[]}}async function Go(t,e,i){var n,o;const a=e.button,r=e.cards&&e.cards.length>0,s=[{type:"vertical-stack",cards:e.cards}];return{key:i,custom_button:null!==(n=a.enabled)&&void 0!==n&&n,button:{hidden:null!==(o=a.hide)&&void 0!==o&&o,button_action:(null==a?void 0:a.button_action)||{},entity:a.entity||"",icon:a.icon||"",primary:a.primary||"",secondary:a.secondary||"",attribute:a.attribute||"",notify:a.notify||"",icon_template:a.icon_template||"",color_template:a.color_template||"",picture_template:a.picture_template||"",state_color:a.state_color||!1,notify_icon:a.notify_icon||"",notify_color:a.notify_color||""},button_type:a.button_type||"default",card_type:"custom",custom_card:r?await Zo(t,s):[]}}async function Wo(t){var e,i,n;if(!t._latestRelease.version){const[e,i]=await Promise.all([oa(),qo(t.hass)]);t._latestRelease.version=null!=e?e:"",t._latestRelease.hacs=!!i,t._latestRelease.updated=(null!=e?e:"")===Rn}const o={};if(t._config.entity)if(t._modelName){if(void 0===(null===(e=t._config.extra_configs)||void 0===e?void 0:e.section_order)){const e=Object.assign({},t._config.extra_configs||{}),i={show_header_info:wn.HEADER_INFO,show_slides:wn.IMAGES_SLIDER,show_map:wn.MINI_MAP,show_buttons:wn.BUTTONS},n=[];for(const e in i)void 0!==t._config[e]&&!0!==t._config[e]||n.push(i[e]);e.section_order=n,o.extra_configs=e}else if(void 0===(null===(n=null===(i=t._config)||void 0===i?void 0:i.extra_configs)||void 0===n?void 0:n.images_swipe)){const e=Object.assign({},t._config.extra_configs||{});e.images_swipe=En.extra_configs.images_swipe,o.extra_configs=e}}else{const e=await Ro(t.hass,t._config.entity);e&&(t._modelName=e.model)}else o.entity=No(t.hass);Object.keys(o).length>0&&(t._config=Object.assign(Object.assign({},t._config),o),t.configChanged())}async function qo(t){var e,i;if(!(null===(i=null===(e=null==t?void 0:t.config)||void 0===e?void 0:e.components)||void 0===i?void 0:i.includes("hacs")))return!1;return!!(await t.callWS({type:"config/entity_registry/list"})).find(t=>t.entity_id===Nn)}async function Yo(t,e){const{default_zoom:i,hours_to_show:n,theme_mode:o}=e.map_popup_config||{},a=[{type:"map",default_zoom:i||14,hours_to_show:n,theme_mode:o,entities:[{entity:e.device_tracker}]}];return await Zo(t,a)}async function Ko(t){const e=t._hass,i=t.config;t.vehicleEntities=await jo(e,i,t),t.DataKeys=Io(t.userLang),t.vehicleEntities&&0!==Object.keys(t.vehicleEntities).length||(t._entityNotFound=!0);try{const n=await Ro(e,i.entity);n&&(t._brandManufacturer=n.manufacturer||"",!i.model_name&&n.model&&(t.config.model_name=n.model))}catch(t){console.warn("[canyonero] Could not resolve device metadata:",t)}if(!i.images||0===i.images.length)try{const n=await Xo(e,i.entity);n.length>0&&(t.config.images=n)}catch(t){console.warn("[canyonero] Could not auto-discover render images:",t)}if(!i.device_tracker)try{const n=await Qo(e,i.entity);n&&(t.config.device_tracker=n,void 0===i.show_map&&(t.config.show_map=!0))}catch(t){console.warn("[canyonero] Could not auto-discover device_tracker:",t)}ta(t)}async function Xo(t,e){const i=await t.callWS({type:"config/entity_registry/list"}),n=i.find(t=>t.entity_id===e);if(!(null==n?void 0:n.device_id))return[];const o=i.filter(t=>t.device_id===n.device_id&&t.entity_id.startsWith("image.")).filter(e=>t.states[e.entity_id]),a=["side_lg","angle_lg","angle_hd","side_sm","medium","small","icon"];return o.sort((t,e)=>{const i=a.findIndex(e=>t.entity_id.endsWith("_render_"+e)),n=a.findIndex(t=>e.entity_id.endsWith("_render_"+t));return(-1===i?99:i)-(-1===n?99:n)}),o.slice(0,5).map(e=>{var i,n;const o=t.states[e.entity_id];return{url:(null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.entity_picture)||(null===(n=null==o?void 0:o.attributes)||void 0===n?void 0:n.image_url)||`/api/image_proxy/${e.entity_id}`,title:e.original_name||e.entity_id.replace(/^image\./,"")}})}async function Qo(t,e){const i=await t.callWS({type:"config/entity_registry/list"}),n=i.find(t=>t.entity_id===e);if(!(null==n?void 0:n.device_id))return;const o=i.find(t=>t.device_id===n.device_id&&t.entity_id.startsWith("device_tracker."));return null==o?void 0:o.entity_id}async function Jo(t){var e,i;const n=t.config;if(!(null===(e=n.map_popup_config)||void 0===e?void 0:e.single_map_card)||!n.device_tracker)return;const o=t._hass,a=n.map_popup_config,r={type:"map",default_zoom:a.default_zoom||14,hours_to_show:null!==(i=a.hours_to_show)&&void 0!==i?i:0,theme_mode:a.theme_mode,aspect_ratio:a.aspect_ratio,auto_fit:a.auto_fit,fit_zones:a.fit_zones,entities:a.extra_entities&&a.extra_entities.length>0?a.extra_entities:[{entity:n.device_tracker,label_mode:a.label_mode,attribute:a.attribute,focus:!0}]};return(await Zo(o,[r]))[0]}async function ta(t){const e=t.config;if(!e.show_map||!e.device_tracker||null!==t._currentPreviewType)return;const i=t._hass.states[e.device_tracker];if(!i)return;const{latitude:n,longitude:o,entity_picture:a}=i.attributes;t.MapData={lat:n,lon:o,entityPic:null!=a?a:void 0,address:{}}}const ea=Dn(async(t,e,i)=>{var n,o,a;if(!1===(null===(n=t.config.map_popup_config)||void 0===n?void 0:n.show_address))return;const r=null===(o=t.config)||void 0===o?void 0:o.google_api_key,s=null===(a=t.config.map_popup_config)||void 0===a?void 0:a.us_format,l=r?await ia(e,i,r):await na(e,i);return l?(l.streetName=s?`${l.streetNumber} ${l.streetName}`:`${l.streetName} ${l.streetNumber}`,l.city=l.sublocality?l.sublocality:l.city,l):void 0});async function ia(t,e,i){const n={street_number:"streetNumber",route:"streetName",neighborhood:"sublocality"},o=["locality","administrative_area_level_2","administrative_area_level_1"],a=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${t},${e}&key=${i}`;try{const t=await fetch(a),e=await t.json();if("OK"!==e.status)throw new Error("No results found");const i=e.results[0].address_components,r={};return i.forEach(t=>{const e=t.types[0];n[e]?r[n[e]]=t.short_name:o.some(e=>t.types.includes(e))&&!r.city&&(r.city=t.short_name)}),r.streetName&&r.city?r:null}catch(t){return console.warn("Error fetching address from Google:",t),null}}async function na(t,e){try{const i=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${e}&format=jsonv2`);if(!i.ok)throw new Error("Failed to fetch address from OpenStreetMap");const n=await i.json(),{house_number:o,road:a,suburb:r,village:s,city:l,town:c,neighbourhood:d}=n.address;return{streetNumber:o||"",streetName:a||"",sublocality:d||s||"",city:r||l||c||""}}catch(t){return console.warn("Error fetching address:",t),null}}async function oa(){try{const t=await fetch(`https://api.github.com/repos/${Hn}/releases/latest`);if(t.ok){return(await t.json()).tag_name}}catch(t){}}const aa=t=>Object.keys(t).filter(t=>"entity"!==t).some(e=>b(t[e]));function ra(t){return ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ra(t)}var sa=/^\s+/,la=/\s+$/;function ca(t,e){if(e=e||{},(t=t||"")instanceof ca)return t;if(!(this instanceof ca))return new ca(t,e);var i=da(t);this._originalInput=t,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||i.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function da(t){var e={r:0,g:0,b:0},i=1,n=null,o=null,a=null,r=!1,s=!1;return"string"==typeof t&&(t=Ga(t)),"object"==ra(t)&&(Ua(t.r)&&Ua(t.g)&&Ua(t.b)?(e=ha(t.r,t.g,t.b),r=!0,s="%"===String(t.r).substr(-1)?"prgb":"rgb"):Ua(t.h)&&Ua(t.s)&&Ua(t.v)?(n=Ha(t.s),o=Ha(t.v),e=ga(t.h,n,o),r=!0,s="hsv"):Ua(t.h)&&Ua(t.s)&&Ua(t.l)&&(n=Ha(t.s),a=Ha(t.l),e=pa(t.h,n,a),r=!0,s="hsl"),t.hasOwnProperty("a")&&(i=t.a)),i=za(i),{ok:r,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}function ha(t,e,i){return{r:255*Ia(t,255),g:255*Ia(e,255),b:255*Ia(i,255)}}function ua(t,e,i){t=Ia(t,255),e=Ia(e,255),i=Ia(i,255);var n,o,a=Math.max(t,e,i),r=Math.min(t,e,i),s=(a+r)/2;if(a==r)n=o=0;else{var l=a-r;switch(o=s>.5?l/(2-a-r):l/(a+r),a){case t:n=(e-i)/l+(e<i?6:0);break;case e:n=(i-t)/l+2;break;case i:n=(t-e)/l+4}n/=6}return{h:n,s:o,l:s}}function pa(t,e,i){var n,o,a;function r(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}if(t=Ia(t,360),e=Ia(e,100),i=Ia(i,100),0===e)n=o=a=i;else{var s=i<.5?i*(1+e):i+e-i*e,l=2*i-s;n=r(l,s,t+1/3),o=r(l,s,t),a=r(l,s,t-1/3)}return{r:255*n,g:255*o,b:255*a}}function ma(t,e,i){t=Ia(t,255),e=Ia(e,255),i=Ia(i,255);var n,o,a=Math.max(t,e,i),r=Math.min(t,e,i),s=a,l=a-r;if(o=0===a?0:l/a,a==r)n=0;else{switch(a){case t:n=(e-i)/l+(e<i?6:0);break;case e:n=(i-t)/l+2;break;case i:n=(t-e)/l+4}n/=6}return{h:n,s:o,v:s}}function ga(t,e,i){t=6*Ia(t,360),e=Ia(e,100),i=Ia(i,100);var n=Math.floor(t),o=t-n,a=i*(1-e),r=i*(1-o*e),s=i*(1-(1-o)*e),l=n%6;return{r:255*[i,r,a,a,s,i][l],g:255*[s,i,i,r,a,a][l],b:255*[a,a,s,i,i,r][l]}}function fa(t,e,i,n){var o=[Na(Math.round(t).toString(16)),Na(Math.round(e).toString(16)),Na(Math.round(i).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function va(t,e,i,n,o){var a=[Na(Math.round(t).toString(16)),Na(Math.round(e).toString(16)),Na(Math.round(i).toString(16)),Na(Za(n))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function _a(t,e,i,n){return[Na(Za(n)),Na(Math.round(t).toString(16)),Na(Math.round(e).toString(16)),Na(Math.round(i).toString(16))].join("")}function ba(t,e){e=0===e?0:e||10;var i=ca(t).toHsl();return i.s-=e/100,i.s=Da(i.s),ca(i)}function ya(t,e){e=0===e?0:e||10;var i=ca(t).toHsl();return i.s+=e/100,i.s=Da(i.s),ca(i)}function wa(t){return ca(t).desaturate(100)}function xa(t,e){e=0===e?0:e||10;var i=ca(t).toHsl();return i.l+=e/100,i.l=Da(i.l),ca(i)}function Ca(t,e){e=0===e?0:e||10;var i=ca(t).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),ca(i)}function Sa(t,e){e=0===e?0:e||10;var i=ca(t).toHsl();return i.l-=e/100,i.l=Da(i.l),ca(i)}function Ta(t,e){var i=ca(t).toHsl(),n=(i.h+e)%360;return i.h=n<0?360+n:n,ca(i)}function ka(t){var e=ca(t).toHsl();return e.h=(e.h+180)%360,ca(e)}function Aa(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ca(t).toHsl(),n=[ca(t)],o=360/e,a=1;a<e;a++)n.push(ca({h:(i.h+a*o)%360,s:i.s,l:i.l}));return n}function Ea(t){var e=ca(t).toHsl(),i=e.h;return[ca(t),ca({h:(i+72)%360,s:e.s,l:e.l}),ca({h:(i+216)%360,s:e.s,l:e.l})]}function Ma(t,e,i){e=e||6,i=i||30;var n=ca(t).toHsl(),o=360/i,a=[ca(t)];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,a.push(ca(n));return a}function Pa(t,e){e=e||6;for(var i=ca(t).toHsv(),n=i.h,o=i.s,a=i.v,r=[],s=1/e;e--;)r.push(ca({h:n,s:o,v:a})),a=(a+s)%1;return r}ca.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,i,n=this.toRgb();return t=n.r/255,e=n.g/255,i=n.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(t){return this._a=za(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=ma(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=ma(this._r,this._g,this._b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.v);return 1==this._a?"hsv("+e+", "+i+"%, "+n+"%)":"hsva("+e+", "+i+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=ua(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=ua(this._r,this._g,this._b),e=Math.round(360*t.h),i=Math.round(100*t.s),n=Math.round(100*t.l);return 1==this._a?"hsl("+e+", "+i+"%, "+n+"%)":"hsla("+e+", "+i+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return fa(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return va(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ia(this._r,255))+"%",g:Math.round(100*Ia(this._g,255))+"%",b:Math.round(100*Ia(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*Ia(this._r,255))+"%, "+Math.round(100*Ia(this._g,255))+"%, "+Math.round(100*Ia(this._b,255))+"%)":"rgba("+Math.round(100*Ia(this._r,255))+"%, "+Math.round(100*Ia(this._g,255))+"%, "+Math.round(100*Ia(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Oa[fa(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+_a(this._r,this._g,this._b,this._a),i=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=ca(t);i="#"+_a(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+i+")"},toString:function(t){var e=!!t;t=t||this._format;var i=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return ca(this.toString())},_applyModification:function(t,e){var i=t.apply(null,[this].concat([].slice.call(e)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(xa,arguments)},brighten:function(){return this._applyModification(Ca,arguments)},darken:function(){return this._applyModification(Sa,arguments)},desaturate:function(){return this._applyModification(ba,arguments)},saturate:function(){return this._applyModification(ya,arguments)},greyscale:function(){return this._applyModification(wa,arguments)},spin:function(){return this._applyModification(Ta,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(Ma,arguments)},complement:function(){return this._applyCombination(ka,arguments)},monochromatic:function(){return this._applyCombination(Pa,arguments)},splitcomplement:function(){return this._applyCombination(Ea,arguments)},triad:function(){return this._applyCombination(Aa,[3])},tetrad:function(){return this._applyCombination(Aa,[4])}},ca.fromRatio=function(t,e){if("object"==ra(t)){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]="a"===n?t[n]:Ha(t[n]));t=i}return ca(t,e)},ca.equals=function(t,e){return!(!t||!e)&&ca(t).toRgbString()==ca(e).toRgbString()},ca.random=function(){return ca.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ca.mix=function(t,e,i){i=0===i?0:i||50;var n=ca(t).toRgb(),o=ca(e).toRgb(),a=i/100;return ca({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},ca.readability=function(t,e){var i=ca(t),n=ca(e);return(Math.max(i.getLuminance(),n.getLuminance())+.05)/(Math.min(i.getLuminance(),n.getLuminance())+.05)},ca.isReadable=function(t,e,i){var n,o,a=ca.readability(t,e);switch(o=!1,(n=Wa(i)).level+n.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},ca.mostReadable=function(t,e,i){var n,o,a,r,s=null,l=0;o=(i=i||{}).includeFallbackColors,a=i.level,r=i.size;for(var c=0;c<e.length;c++)(n=ca.readability(t,e[c]))>l&&(l=n,s=ca(e[c]));return ca.isReadable(t,s,{level:a,size:r})||!o?s:(i.includeFallbackColors=!1,ca.mostReadable(t,["#fff","#000"],i))};var $a=ca.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Oa=ca.hexNames=La($a);function La(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function za(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ia(t,e){ja(t)&&(t="100%");var i=Ra(t);return t=Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Da(t){return Math.min(1,Math.max(0,t))}function Ba(t){return parseInt(t,16)}function ja(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function Ra(t){return"string"==typeof t&&-1!=t.indexOf("%")}function Na(t){return 1==t.length?"0"+t:""+t}function Ha(t){return t<=1&&(t=100*t+"%"),t}function Za(t){return Math.round(255*parseFloat(t)).toString(16)}function Va(t){return Ba(t)/255}var Fa=function(){var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+e),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+e),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+e),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ua(t){return!!Fa.CSS_UNIT.exec(t)}function Ga(t){t=t.replace(sa,"").replace(la,"").toLowerCase();var e,i=!1;if($a[t])t=$a[t],i=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=Fa.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=Fa.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=Fa.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=Fa.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=Fa.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=Fa.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=Fa.hex8.exec(t))?{r:Ba(e[1]),g:Ba(e[2]),b:Ba(e[3]),a:Va(e[4]),format:i?"name":"hex8"}:(e=Fa.hex6.exec(t))?{r:Ba(e[1]),g:Ba(e[2]),b:Ba(e[3]),format:i?"name":"hex"}:(e=Fa.hex4.exec(t))?{r:Ba(e[1]+""+e[1]),g:Ba(e[2]+""+e[2]),b:Ba(e[3]+""+e[3]),a:Va(e[4]+""+e[4]),format:i?"name":"hex8"}:!!(e=Fa.hex3.exec(t))&&{r:Ba(e[1]+""+e[1]),g:Ba(e[2]+""+e[2]),b:Ba(e[3]+""+e[3]),format:i?"name":"hex"}}function Wa(t){var e,i;return"AA"!==(e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==e&&(e="AA"),"small"!==(i=(t.size||"small").toLowerCase())&&"large"!==i&&(i="small"),{level:e,size:i}}function qa(t,e){return 60*Number(t)+Number(e)}function Ya(t,e){t=t.startsWith("v")?t.slice(1):t,e=e.startsWith("v")?e.slice(1):e;const i=t.split(/[\.-]/).map(t=>isNaN(t)?t:parseInt(t,10)),n=e.split(/[\.-]/).map(t=>isNaN(t)?t:parseInt(t,10));for(let t=0;t<Math.max(i.length,n.length);t++){const e=void 0!==i[t]?i[t]:"string"==typeof n[t]?"":0,o=void 0!==n[t]?n[t]:"string"==typeof i[t]?"":0;if("number"==typeof e&&"number"==typeof o){if(e>o)return 1;if(e<o)return-1}else if("string"==typeof e&&"string"==typeof o){if(e>o)return 1;if(e<o)return-1}else{if("string"==typeof e)return-1;if("string"==typeof o)return 1}}return 0}function Ka(t){return Array.isArray(t)?0===t.length:!t||"object"!=typeof t||0===Object.keys(t).length}const Xa=t=>ca(t).isLight(),Qa=t=>new Date(1e3*t).toLocaleString();Dn((t,e)=>{var i;if(!e||null===(i=t.map_popup_config.hours_to_show)||void 0===i||!i)return;const n={},o=e[t.device_tracker];if(!o)return;const a=o.filter(t=>t.a.latitude&&t.a.longitude);if(a.length<2)return;const r=a.length,s=[],l=[];for(let t=0;t<r-1;t++){const e=a[t],i=a[t+1],n=.8;let o,c;o=n/(r-2),c=1-n;const d=c+t*o;s.push({type:"Feature",id:`line-${t}`,geometry:{type:"LineString",coordinates:[[e.a.longitude,e.a.latitude],[i.a.longitude,i.a.latitude]]},properties:{line_id:`line-${t}`,order_id:t,opacity:d}});const h=`<b>${e.a.friendly_name}</b><i>${Qa(e.lu)}</i>`;l.push({type:"Feature",geometry:{type:"Point",coordinates:[e.a.longitude,e.a.latitude]},properties:{friendly_name:e.a.friendly_name,last_updated:e.lu,description:h,opacity:d}})}const c={type:"geojson",data:{type:"FeatureCollection",features:l}},d={type:"geojson",data:{type:"FeatureCollection",features:s}};return n.route=d,n.points=c,n});const Ja=/{%|{{/,tr=t=>Ja.test(t),er=t=>{if(!t)return!1;if("string"==typeof t)return tr(t);if("object"==typeof t){return(Array.isArray(t)?t:Object.values(t)).some(t=>t&&er(t))}return!1};function ir(t,e){const i=new ar(t,e,nr);t.addEventListener("pointerdown",i.handleStart.bind(i)),t.addEventListener("pointerup",i.handleEnd.bind(i)),t.addEventListener("contextmenu",t=>t.preventDefault()),t.style.cursor="pointer"}function nr(t,e,i){const n=(null==e?void 0:e.tap_action)||{action:"more-info"},o=(null==e?void 0:e.double_tap_action)||{action:"none"},a=(null==e?void 0:e.hold_action)||{action:"none"},r=(null==e?void 0:e.entity)||null;r&&or(t,{entity:r,tap_action:n,double_tap_action:o,hold_action:a},i)}function or(t,e,i){setTimeout(()=>{const n=new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:e,action:i}});t.dispatchEvent(n)},1)}class ar{constructor(t,e,i){this.startX=null,this.startY=null,this.element=t,this.config=e,this.sendActionEvent=i,this.defaultEntity=e.entity||this._extractEntityFromAction(e),this.tapTimeout=null,this.lastTap=0,this.startTime=null,this.isSwiping=!1}_extractEntityFromAction(t){var e,i,n,o,a,r,s,l,c;return(null===(n=null===(i=null===(e=null==t?void 0:t.button_action)||void 0===e?void 0:e.tap_action)||void 0===i?void 0:i.target)||void 0===n?void 0:n.entity_id)?t.button_action.tap_action.target.entity_id:(null===(r=null===(a=null===(o=null==t?void 0:t.button_action)||void 0===o?void 0:o.hold_action)||void 0===a?void 0:a.target)||void 0===r?void 0:r.entity_id)?t.button_action.hold_action.target.entity_id:(null===(c=null===(l=null===(s=null==t?void 0:t.button_action)||void 0===s?void 0:s.double_tap_action)||void 0===l?void 0:l.target)||void 0===c?void 0:c.entity_id)?t.button_action.double_tap_action.target.entity_id:null}handleEnd(t){if(null===this.startTime)return;const e=Date.now(),i=e-this.startTime,n=Math.abs((t.clientX||0)-(this.startX||0)),o=Math.abs((t.clientY||0)-(this.startY||0));if(n>20||o>20)return this.isSwiping=!0,void(this.startTime=null);const a=e-this.lastTap;this.lastTap=e,this.startTime=null,i>500?this.sendActionEvent(this.element,this.config,"hold"):a<300?this.sendActionEvent(this.element,this.config,"double_tap"):this.tapTimeout=window.setTimeout(()=>{this.sendActionEvent(this.element,this.config,"tap")},300)}handleStart(t){t.preventDefault(),this.startTime=Date.now(),this.startX=t.clientX,this.startY=t.clientY,this.isSwiping=!1,clearTimeout(this.tapTimeout)}}const rr=window.loadCardHelpers?window.loadCardHelpers():void 0,sr=()=>{var t,e,i,n,o;customElements.get("ha-form")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-card-conditions-editor")||null===(i=customElements.get("hui-conditional-card"))||void 0===i||i.getConfigElement(),customElements.get("ha-form-multi_select")||null===(n=customElements.get("hui-entities-card"))||void 0===n||n.getConfigElement(),customElements.get("hui-entity-editor")||null===(o=customElements.get("hui-glance-card"))||void 0===o||o.getConfigElement()},lr=()=>{var t,e,i,n;const o=null===(t=document.querySelector("body > home-assistant"))||void 0===t?void 0:t.shadowRoot,a=null===(e=null==o?void 0:o.querySelector("hui-dialog-edit-card"))||void 0===e?void 0:e.shadowRoot,r=null===(n=null===(i=null==a?void 0:a.querySelector("ha-dialog"))||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.getElementById("content"),s=null==a?void 0:a.querySelector("div.element-preview"),l=null==a?void 0:a.querySelector("div.element-editor");r&&l&&s&&(Object.assign(r.style,{padding:"8px"}),Object.assign(l.style,{margin:"0 4px"}),Object.assign(s.style,{position:"sticky",top:"0",padding:"0",display:"flex",justifyContent:"center",alignItems:"center"}))},cr=async()=>{if(!customElements.get("hui-card-picker")){let t;if(console.warn("Card picker not loaded"),window.loadCardHelpers?t=await window.loadCardHelpers():rr&&(t=rr),!t||!t.createCardElement)return;let e=customElements.get("hui-vertical-stack-card");e||(t.createCardElement({type:"vertical-stack",cards:[]}),await customElements.whenDefined("hui-vertical-stack-card"),e=customElements.get("hui-vertical-stack-card"));return await e.getConfigElement()}};async function dr(t,e){const i=new FormData;i.append("file",e);const n=await fetch("/api/image/upload",{method:"POST",body:i,headers:{Authorization:`Bearer ${t.auth.data.access_token}`}});if(!n.ok)throw new Error("Failed to upload image");const o=(await n.json()).id;return o?`/api/image/serve/${o}/original`:null}function hr(t,e,i){e.stopPropagation();const n=e.target,o=n.value;if(!o||!t._config)return;const a=[...t._config.images||[]];void 0!==i?a[i]=Object.assign(Object.assign({},a[i]),{url:o,title:o}):(a.push({url:o,title:o}),n.value=""),t._config=Object.assign(Object.assign({},t._config),{images:a}),t.configChanged()}async function ur(t,e){const{files:i,toastId:n,errorMsg:o}=e;if(i&&0!==i.length)for(const e of Array.from(i))try{const i=await dr(t.hass,e);if(!i)continue;pr(t,i,e.name.toUpperCase())}catch(e){t.launchToast(n,o)}}function pr(t,e,i){if(t._config){const n=[...t._config.images||[]];n.push({url:e,title:i}),t._config=Object.assign(Object.assign({},t._config),{images:n}),t.configChanged()}}const mr=(t,e,i,n=!1)=>{t._themes||(t._themes={});let o=e.default_theme;("default"===i||i&&e.themes[i])&&(o=i);const a=Object.assign({},t._themes);if("default"!==o){const i=e.themes[o];Object.keys(i).forEach(e=>{const n="--"+e;t._themes[n]="",a[n]=i[e]})}if(window.ShadyCSS)window.ShadyCSS.styleSubtree(t,a);else for(const e in a)null===e?t.style.removeProperty(e):t.style.setProperty(e,a[e]);if(!n)return;const r=document.querySelector("meta[name=theme-color]");if(r){r.hasAttribute("default-content")||r.setAttribute("default-content",r.getAttribute("content"));const t=a["--primary-color"]||r.getAttribute("default-content");r.setAttribute("content",t)}};function gr(t,e,i,n){var o,a=arguments.length,r=a<3?e:n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr=globalThis,vr=fr.ShadowRoot&&(void 0===fr.ShadyCSS||fr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_r=Symbol(),br=new WeakMap;let yr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==_r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(vr&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=br.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&br.set(e,t))}return t}toString(){return this.cssText}};const wr=t=>new yr("string"==typeof t?t:t+"",void 0,_r),xr=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new yr(i,t,_r)},Cr=(t,e)=>{if(vr)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=fr.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},Sr=vr?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return wr(e)})(t):t,{is:Tr,defineProperty:kr,getOwnPropertyDescriptor:Ar,getOwnPropertyNames:Er,getOwnPropertySymbols:Mr,getPrototypeOf:Pr}=Object,$r=globalThis,Or=$r.trustedTypes,Lr=Or?Or.emptyScript:"",zr=$r.reactiveElementPolyfillSupport,Ir=(t,e)=>t,Dr={toAttribute(t,e){switch(e){case Boolean:t=t?Lr:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Br=(t,e)=>!Tr(t,e),jr={attribute:!0,type:String,converter:Dr,reflect:!1,useDefault:!1,hasChanged:Br};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),$r.litPropertyMetadata??=new WeakMap;let Rr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=jr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&kr(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=Ar(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jr}static _$Ei(){if(this.hasOwnProperty(Ir("elementProperties")))return;const t=Pr(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ir("properties"))){const t=this.properties,e=[...Er(t),...Mr(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Sr(t))}else void 0!==t&&e.push(Sr(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:Dr).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Dr;this._$Em=n,this[n]=o.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??Br)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Rr.elementStyles=[],Rr.shadowRootOptions={mode:"open"},Rr[Ir("elementProperties")]=new Map,Rr[Ir("finalized")]=new Map,zr?.({ReactiveElement:Rr}),($r.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nr=globalThis,Hr=Nr.trustedTypes,Zr=Hr?Hr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Vr="$lit$",Fr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ur="?"+Fr,Gr=`<${Ur}>`,Wr=document,qr=()=>Wr.createComment(""),Yr=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Kr=Array.isArray,Xr=t=>Kr(t)||"function"==typeof t?.[Symbol.iterator],Qr="[ \t\n\f\r]",Jr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ts=/-->/g,es=/>/g,is=RegExp(`>|${Qr}(?:([^\\s"'>=/]+)(${Qr}*=${Qr}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ns=/'/g,os=/"/g,as=/^(?:script|style|textarea|title)$/i,rs=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),ss=rs(1),ls=Symbol.for("lit-noChange"),cs=Symbol.for("lit-nothing"),ds=new WeakMap,hs=Wr.createTreeWalker(Wr,129);function us(t,e){if(!Kr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Zr?Zr.createHTML(e):e}const ps=(t,e)=>{const i=t.length-1,n=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=Jr;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===Jr?"!--"===l[1]?r=ts:void 0!==l[1]?r=es:void 0!==l[2]?(as.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=is):void 0!==l[3]&&(r=is):r===is?">"===l[0]?(r=o??Jr,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?is:'"'===l[3]?os:ns):r===os||r===ns?r=is:r===ts||r===es?r=Jr:(r=is,o=void 0);const h=r===is&&t[e+1].startsWith("/>")?" ":"";a+=r===Jr?i+Gr:c>=0?(n.push(s),i.slice(0,c)+Vr+i.slice(c)+Fr+h):i+Fr+(-2===c?e:h)}return[us(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class ms{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,a=0;const r=t.length-1,s=this.parts,[l,c]=ps(t,e);if(this.el=ms.createElement(l,i),hs.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=hs.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(Vr)){const e=c[a++],i=n.getAttribute(t).split(Fr),r=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?bs:"?"===r[1]?ys:"@"===r[1]?ws:_s}),n.removeAttribute(t)}else t.startsWith(Fr)&&(s.push({type:6,index:o}),n.removeAttribute(t));if(as.test(n.tagName)){const t=n.textContent.split(Fr),e=t.length-1;if(e>0){n.textContent=Hr?Hr.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],qr()),hs.nextNode(),s.push({type:2,index:++o});n.append(t[e],qr())}}}else if(8===n.nodeType)if(n.data===Ur)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(Fr,t+1));)s.push({type:7,index:o}),t+=Fr.length-1}o++}}static createElement(t,e){const i=Wr.createElement("template");return i.innerHTML=t,i}}function gs(t,e,i=t,n){if(e===ls)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=Yr(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=gs(t,o._$AS(t,e.values),o,n)),e}let fs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Wr).importNode(e,!0);hs.currentNode=n;let o=hs.nextNode(),a=0,r=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new vs(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new xs(o,this,t)),this._$AV.push(e),s=i[++r]}a!==s?.index&&(o=hs.nextNode(),a++)}return hs.currentNode=Wr,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class vs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=cs,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gs(this,t,e),Yr(t)?t===cs||null==t||""===t?(this._$AH!==cs&&this._$AR(),this._$AH=cs):t!==this._$AH&&t!==ls&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Xr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==cs&&Yr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Wr.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ms.createElement(us(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new fs(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ds.get(t.strings);return void 0===e&&ds.set(t.strings,e=new ms(t)),e}k(t){Kr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new vs(this.O(qr()),this.O(qr()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class _s{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=cs,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=cs}_$AI(t,e=this,i,n){const o=this.strings;let a=!1;if(void 0===o)t=gs(this,t,e,0),a=!Yr(t)||t!==this._$AH&&t!==ls,a&&(this._$AH=t);else{const n=t;let r,s;for(t=o[0],r=0;r<o.length-1;r++)s=gs(this,n[i+r],e,r),s===ls&&(s=this._$AH[r]),a||=!Yr(s)||s!==this._$AH[r],s===cs?t=cs:t!==cs&&(t+=(s??"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(t)}j(t){t===cs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bs extends _s{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===cs?void 0:t}}class ys extends _s{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==cs)}}let ws=class extends _s{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=gs(this,t,e,0)??cs)===ls)return;const i=this._$AH,n=t===cs&&i!==cs||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==cs&&(i===cs||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};class xs{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gs(this,t)}}const Cs=Nr.litHtmlPolyfillSupport;Cs?.(ms,vs),(Nr.litHtmlVersions??=[]).push("3.3.0");const Ss=(t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new vs(e.insertBefore(qr(),t),t,void 0,i??{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},Ts=globalThis;class ks extends Rr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ss(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ls}}ks._$litElement$=!0,ks.finalized=!0,Ts.litElementHydrateSupport?.({LitElement:ks});const As=Ts.litElementPolyfillSupport;As?.({LitElement:ks}),(Ts.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Es={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Br},Ms=(t=Es,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};function Ps(t){return(e,i)=>"object"==typeof i?Ms(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=t=>t??cs;class Os extends ks{constructor(){super(...arguments),Object.defineProperty(this,"active",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"narrow",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}render(){return ss`
			<div
				tabindex="0"
				role="tab"
				aria-selected=${this.active}
				aria-label=${$s(this.name)}
				@click=${this._handleClick}
				@keydown=${this._handleKeyDown}>
				${this.narrow?ss`<slot name="icon"></slot>`:""}
				<span class="name">${this.name}</span>
				<ha-ripple></ha-ripple>
			</div>
		`}_handleClick(){this.dispatchEvent(new CustomEvent("tab-activated",{bubbles:!0,composed:!0}))}_handleKeyDown(t){"Enter"===t.key&&this._handleClick()}}Object.defineProperty(Os,"styles",{enumerable:!0,configurable:!0,writable:!0,value:xr`
		:host {
			display: flex;
			flex: 0 0 auto;
		}
		div {
			padding: 0 24px;
			display: flex;
			flex-direction: column;
			text-align: center;
			box-sizing: border-box;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: var(--header-height);
			cursor: pointer;
			position: relative;
			outline: none;
		}

		.name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 100%;
			text-transform: uppercase;
		}

		:host([active]) {
			color: var(--primary-color);
		}

		:host(:not([narrow])[active]) div {
			border-bottom: 2px solid var(--primary-color);
		}

		:host([narrow]) {
			min-width: 0;
			display: flex;
			justify-content: center;
			overflow: hidden;
		}

		:host([narrow]) div {
			padding: 0 4px;
		}

		div:focus-visible:before {
			position: absolute;
			display: block;
			content: '';
			inset: 0;
			background-color: var(--secondary-text-color);
			opacity: 0.08;
		}
	`}),gr([Ps({type:Boolean,reflect:!0})],Os.prototype,"active",void 0),gr([Ps({type:Boolean,reflect:!0})],Os.prototype,"narrow",void 0),gr([Ps()],Os.prototype,"name",void 0),customElements.get("nvn-tab")||customElements.define("nvn-tab",Os);class Ls extends ks{constructor(){super(...arguments),Object.defineProperty(this,"narrow",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_onTabActivated",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.target.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}})}render(){return ss`
			<div class="scroll-container">
				<slot></slot>
			</div>
		`}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-activated",this._onTabActivated)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("tab-activated",this._onTabActivated)}}Object.defineProperty(Ls,"styles",{enumerable:!0,configurable:!0,writable:!0,value:xr`
		:host {
			display: block;
			width: 100%;
		}

		.scroll-container {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			height: var(--header-height);
			overflow-x: auto;
			overflow-y: hidden;
			-webkit-overflow-scrolling: touch;
			scroll-behavior: smooth;
			width: 100%;
		}

		::-webkit-scrollbar {
			display: none;
		}

		::slotted(nvn-tab) {
			flex: 1 1 0; /* Allow tabs to stretch if there's room */
			min-width: max-content; /* Prevent squishing tabs too much */
		}
	`}),gr([Ps({type:Boolean})],Ls.prototype,"narrow",void 0),customElements.get("nvn-tab-bar")||customElements.define("nvn-tab-bar",Ls);const zs=({cardIndex:t,component:e,configIndex:i,configType:n,configValue:o,itemIndex:a,items:r,label:s,options:l,pickerType:c,value:d})=>{var h;const u=null!==(h=e.hass)&&void 0!==h?h:e._hass,p=t=>e._valueChanged(t);return{action:pt`
      <ha-combo-box
        .item-value-path=${"value"}
        .item-label-path=${"label"}
        .hass=${u}
        .label=${s}
        .value=${d}
        .configValue=${o}
        .configType=${n}
        .configIndex=${i}
        @value-changed=${p}
        .items=${null==l?void 0:l.actions}
      ></ha-combo-box>
    `,attribute:pt`
      <ha-combo-box
        .item-value-path=${"value"}
        .item-label-path=${"label"}
        .label=${null!=s?s:"Attribute"}
        .hass=${u}
        .value=${d}
        .configValue=${o||"attribute"}
        .configType=${n}
        .configIndex=${i}
        .index=${i}
        .items=${r}
        .disabled=${null==l?void 0:l.disabled}
        @value-changed=${p}
      ></ha-combo-box>
    `,boolean:pt`
      <ha-formfield .label=${s}>
        <ha-switch
          .label=${s}
          .checked=${d}
          .configValue=${o}
          .configType=${n}
          .configIndex=${i}
          .cardIndex=${t}
          @change=${p}
        ></ha-switch>
      </ha-formfield>
    `,entity:pt`
      <ha-entity-picker
        id="entity-picker-form"
        .hass=${u}
        .value=${d}
        .configValue=${o||"entity"}
        .configType=${n}
        .configIndex=${i}
        .index=${i}
        .itemIndex=${a}
        .cardIndex=${t}
        @value-changed=${p}
        .allowCustomIcons=${!0}
        .includeDomains=${null==l?void 0:l.includeDomains}
      ></ha-entity-picker>
    `,icon:pt`
      <ha-icon-picker
        .hass=${u}
        .value=${d}
        .configValue=${"icon"}
        .configType=${n}
        .configIndex=${i}
        .index=${i}
        .label=${null!=s?s:"Icon"}
        @value-changed=${p}
      ></ha-icon-picker>
    `,number:pt`
      <ha-selector
        .hass=${u}
        .value=${d}
        .configValue=${o}
        .configType=${n}
        .configIndex=${i}
        .label=${s}
        .selector=${null==l?void 0:l.selector}
        @value-changed=${p}
        .required=${!1}
        .helper=${null==l?void 0:l.helperText}
      ></ha-selector>
    `,selectorBoolean:pt`
      <ha-selector
        id="vic-boolean-selector"
        .hass=${u}
        .value=${d}
        .configValue=${o}
        .configType=${n}
        .configIndex=${i}
        .cardIndex=${t}
        .label=${s}
        .selector="${(null==l?void 0:l.selector)||{boolean:[{label:"True",value:!0},{label:"False",value:!1}]}}"
        @value-changed=${p}
        .required=${!1}
      ></ha-selector>
    `,template:pt`
      <ha-selector
        .hass=${u}
        .value=${d}
        .configValue=${o}
        .configType=${n}
        .configIndex=${i}
        .label=${(null==l?void 0:l.label)||"template"}
        .helper=${null==l?void 0:l.helperText}
        .selector=${{template:{}}}
        .index=${i}
        @value-changed=${p}
        .required=${!1}
      >
      </ha-selector>
    `,textfield:pt`
      <ha-textfield
        .label=${s}
        .placeholder=${s}
        .configValue=${o}
        .value="${d}"
        .configType=${n}
        @change=${p}
        .configIndex=${i}
        .cardIndex=${t}
        .index=${i}
      ></ha-textfield>
    `,theme:pt`
      <ha-theme-picker
        .hass=${u}
        .value=${d}
        .configValue=${"theme"}
        .configType=${n}
        .configIndex=${i}
        .index=${i}
        .includeDefault=${!0}
        .required=${!0}
        @selected=${p}
        @closed="${t=>t.stopPropagation()}"
      >
      </ha-theme-picker>
    `,baseSelector:pt`
      <ha-selector
        .hass=${u}
        .value=${d}
        .configValue=${o}
        .configType=${n}
        .configIndex=${i}
        .label=${s}
        .selector=${null==l?void 0:l.selector}
        @value-changed=${p}
        .required=${!1}
        .disabled=${(null==l?void 0:l.disabled)||!1}
        .helper=${null==l?void 0:l.helperText}
      ></ha-selector>
    `}[c]},Is=(t,e)=>{if(!t)return pt``;const{primary:i,icon:n,secondary:o,notify:a,entity:r,color:s}=t;let l;l=s||"var(--primary-text-color)";return pt`
    <div class="preview-card" style=${"\n          display: flex;\n          width: 100%;\n          min-width: 250px;\n        }"}>
      <div class="grid-item" style="width: 100%;">
        <div class="item-icon">
          <div class="icon-background" style=${`background-color: rgb(from ${l} r g b / 0.2)`}>
            <ha-state-icon
              .hass=${e}
              .stateObj=${r?e.states[r]:void 0}
              .icon=${n}
              style=${`color: ${l}`}
            ></ha-state-icon>
          </div>
          <div class="item-notify" ?hidden=${!a}>
            <ha-icon icon="mdi:alert-circle"></ha-icon>
          </div>
        </div>
        <div class="item-content">
          <div class="primary"><span class="title">${i}</span></div>
          <span class="secondary">${o}</span>
        </div>
      </div>
    </div>
  `},Ds=(t,e)=>{var i;return pt`
    <div style=${"\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tdirection: var(--direction);\n\t\t"}>
      <ha-icon-button
        .label=${null!==(i=null==t?void 0:t.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close"}
        .path=${r}
        dialogAction="close"
      ></ha-icon-button>
      <span>${e}</span>
    </div>
  `},Bs=({activeTabIndex:t,onTabChange:e,tabs:i})=>{var n;return pt`
    <nvn-tab-bar>
      ${i.map((i,n)=>pt`
          <nvn-tab ?active=${n===t} .name=${i.label} @click=${()=>e(n)}>
            ${i.icon?pt`<ha-icon .icon=${i.icon}></ha-icon>`:""}
          </nvn-tab>
        `)}
    </nvn-tab-bar>

    <div>${(null===(n=i[t])||void 0===n?void 0:n.content)||pt`<div>No content available</div>`}</div>
  `},js=0,Rs=pt`<style>
  ha-dialog {
    --mdc-dialog-min-width: min(100vw, 600px);
    --mdc-dialog-max-width: 100vw;
    --mdc-dialog-max-height: 100vh;
  }
</style>`;let Ns=class extends Lt{constructor(){super(...arguments),this.map=null,this.latLon=null,this.marker=null,this._locateIconVisible=!1,this._addressReady=!1,this._address=null}get mapPopup(){return this.card.config.enable_map_popup}get zoom(){var t;return null!==(t=this.card.config.map_popup_config.map_zoom)&&void 0!==t?t:14}get mapConfig(){var t;const{map_popup_config:e,device_tracker:i="",google_api_key:n=""}=this.card.config,o=null===(t=this.card.config.extra_configs)||void 0===t?void 0:t.maptiler_api_key;return Object.assign(Object.assign({},e),{device_tracker:i,google_api_key:n,maptiler_api_key:o})}get _deviceNotInZone(){var t;const e=this.mapConfig.device_tracker;return!e||"not_home"===(null===(t=this.hass.states[e])||void 0===t?void 0:t.state)}get _deviceState(){const t=this.mapConfig.device_tracker;if(!t)return"";const e=this.hass.states[t];return e?this.hass.formatEntityState(e):""}connectedCallback(){super.connectedCallback(),this._subscribeHistory()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeHistory()}_subscribeHistory(){var t,e;const i=this.mapConfig,n=this.hass;if(!Mn(n,"history")||this._subscribed||null===(t=i.hours_to_show)||void 0===t||!t)return;const o=null==i?void 0:i.history_period,a=new Date;let r=new Date(a),s=new Date(a);"today"===o?r.setHours(0,0,0,0):"yesterday"===o?(r.setDate(a.getDate()-1),r.setHours(0,0,0,0)):r=new Date(a.getTime()-3600*(null!==(e=i.hours_to_show)&&void 0!==e?e:0)*1e3),this._subscribed=$n(n,t=>{this._subscribed&&(this._stateHistory=t)},new Date(r),new Date(s),[i.device_tracker]).catch(t=>{this._subscribed=void 0})}_unsubscribeHistory(){this._subscribed&&(this._subscribed.then(t=>null==t?void 0:t()),this._subscribed=void 0)}async updated(t){super.updated(t),t.has("mapData")&&this.mapData&&void 0!==this.mapData&&(this.initMap(),this._getAddress())}shouldUpdate(t){var e;if(t.has("hass")&&this.hass&&this.map){const{lat:t,lon:i}=this.mapData,n=this.hass.states[this.mapConfig.device_tracker];if(n){const{latitude:o,longitude:a}=n.attributes;t===o&&i===a||(this.mapData.lat=o,this.mapData.lon=a,this.latLon=this._getTargetLatLng(this.map),null===(e=this.marker)||void 0===e||e.setLatLng([o,a]),this.map.setView(this.latLon,this.zoom),this._getAddress())}}return!0}async _getAddress(){const{lat:t,lon:e}=this.mapData,i=await ea(this.card,t,e);i?(this._address=i,this.mapData.address=i,this._addressReady=!0):this._address||(this._addressReady=!0)}initMap(){var t;const{lat:e,lon:i}=this.mapData,n={dragging:!0,zoomControl:!1,scrollWheelZoom:!0,zoom:this.zoom},o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("map");o&&(this.map=xn.map(o,n).setView([e,i]),this.latLon=this._getTargetLatLng(this.map),this.map.setView(this.latLon,this.zoom),this._createTileLayer(this.map),this.marker=this._createMarker(this.map),this.map.on("moveend zoomend",()=>{const t=this.map.getBounds().contains(this.marker.getLatLng());this._locateIconVisible=t}))}_getTargetLatLng(t){const{lat:e,lon:i}=this.mapData,n=t.getSize().x,o=t.project([e,i],this.zoom).subtract([n/5,3]);return t.unproject(o,this.zoom)}_createMarker(t){const{lat:e,lon:i}=this.mapData,n=xn.divIcon({html:'<div class="marker">\n            </div>',iconSize:[24,24],className:"marker"}),o=xn.marker([e,i],{icon:n}).addTo(t);return o.on("click",()=>{this._toggleMapDialog()}),o}_createTileLayer(t){return xn.tileLayer.provider("CartoDB.Positron",{tileSize:256,className:"map-tiles"}).addTo(t)}resetMap(){this.map&&this.latLon&&this.map.flyTo(this.latLon,this.zoom)}render(){const t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return pt`
      <div class="map-wrapper" ?safari=${t} style=${this._computeMapStyle()}>
        <div id="overlay-container">
          <div class="reset-button" @click=${this.resetMap} .hidden=${this._locateIconVisible}>
            <ha-icon icon="mdi:compass"></ha-icon>
          </div>
          ${this._renderAddress()}
        </div>
        <div id="map"></div>
      </div>

      ${this._renderMapDialog()}
    `}_renderAddress(){var t,e;const i=null===(t=this.mapConfig)||void 0===t?void 0:t.use_zone_name;if(!1===(null===(e=this.card.config.map_popup_config)||void 0===e?void 0:e.show_address))return pt``;if(!this._addressReady)return pt` <div class="address-line loading"><span class="loader"></span></div> `;const n=this._address||{},o=!this._deviceNotInZone,a=i&&o?pt`<span class="primary">${this._deviceState}</span>`:pt`
            <span class="secondary">${n.streetName}</span>
            <span class="primary">${n.sublocality||n.city}</span>
          `;return(null==n?void 0:n.streetName)?pt` <div class="address-line">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          <div class="address-info">${a}</div>
        </div>`:pt``}_renderMapDialog(){return this.open?pt`
      <ha-dialog
        open
        .heading=${Ds(this.hass,"Map")}
        @closed=${()=>this.open=!1}
        hideActions
        flexContent
      >
        ${Rs}
        <div class="container">${this.mapCardPopup}</div>
      </ha-dialog>
    `:gt}async _toggleMapDialog(){this.mapPopup&&(this.mapConfig.maptiler_api_key||this.mapCardPopup||this.open?this.open=!this.open:Yo(this.hass,this.card.config).then(t=>{this.mapCardPopup=t,setTimeout(()=>{this.open=!0},50)}))}_computeMapStyle(){var t,e,i,n;const o=null!==(e=null===(t=this.card.config.extra_configs)||void 0===t?void 0:t.section_order)&&void 0!==e?e:[...An],a=""===(null===(i=this.card.config.name)||void 0===i?void 0:i.trim())||void 0===this.card.config.name,r=o[0]===wn.MINI_MAP&&a,s=o[o.length-1]===wn.MINI_MAP,l=o.includes(wn.MINI_MAP)&&1===o.length;let c="linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";s&&!r?c="linear-gradient(to bottom, transparent 0%, black 10%)":r&&!s?c="linear-gradient(to bottom, black 90%, transparent 100%)":l&&(c="linear-gradient(to bottom, transparent 0%, black 0%, black 100%, transparent 100%)");const d=this.isDark?"var(--accent-color)":"var(--primary-color)",h=this.isDark?"contrast(1.2) saturate(6) brightness(1.3)":"none",u=this.isDark?"brightness(0.6) invert(1) contrast(6) saturate(0.3) brightness(0.7) opacity(.25)":"grayscale(1) contrast(1.1) opacity(1)",p=null===(n=this.card.config.extra_configs)||void 0===n?void 0:n.mini_map_height;return Wt({"--vic-map-marker-color":d,"--vic-marker-filter":h,"--vic-map-tiles-filter":u,"--vic-map-mask-image":c,"--vic-map-height":p?`${p}px`:"150px",height:p?`${p}px`:"150px"})}static get styles(){return[k(Cn),A`
        *:focus {
          outline: none;
        }
        .map-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-wrapper[safari] {
          width: calc(100% + 0.6rem);
          left: -0.5rem;
        }

        .map-wrapper.loading {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #overlay-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* background-color: var(--ha-card-background, var(--card-background-color)); */
          /* opacity: 0.6;  */
        }

        #map {
          height: 100%;
          width: 100%;
          background-color: transparent !important;
          mask-image: var(--vic-map-mask-image);
          mask-composite: intersect;
        }

        .map-tiles {
          filter: var(--vic-map-tiles-filter, none);
          position: relative;
          width: 100%;
          height: 100%;
        }

        .marker {
          position: relative;
          width: 24px;
          height: 24px;
          /* filter: var(--vic-marker-filter); */
        }

        .marker::before {
          content: '';
          position: absolute;
          width: calc(100% + 1rem);
          height: calc(100% + 1rem);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: radial-gradient(
            circle,
            transparent 0%,
            rgb(from var(--vic-map-marker-color) r g b / 25%) 100%
          );
          border-radius: 50%;
          border: none !important;
          /* opacity: 0.6; */
        }

        .marker::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 50%;
          background-color: var(--vic-map-marker-color);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          /* border: 1px solid white; */
          transform: translate(-50%, -50%);
          opacity: 1;
          transition: all 0.2s ease;
        }
        .marker:hover::after {
          width: calc(60% + 1px);
          height: calc(60% + 1px);
        }

        .leaflet-control-container {
          display: none;
        }

        .reset-button {
          position: absolute;
          top: 1em;
          right: 1em;
          z-index: 2;
          cursor: pointer;
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        }
        .address-line {
          position: absolute;
          width: max-content;
          height: fit-content;
          bottom: 1rem;
          left: 1rem;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-text-color);
          backdrop-filter: blur(2px);
          text-shadow: 0 0 black;
          ha-icon {
            color: var(--secondary-text-color);
          }
          .address-info {
            display: flex;
            flex-direction: column;
          }
          .address-info span {
            font-weight: 400;
            font-size: 12px;
            letter-spacing: 0.5px;
            line-height: 16px;
          }
          span.primary {
            text-transform: uppercase;
            opacity: 0.8;
            letter-spacing: 1px;
          }
        }
        .loader {
          width: 48px;
          height: 48px;
          display: inline-block;
          position: relative;
        }
        .loader::after,
        .loader::before {
          content: '';
          box-sizing: border-box;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--primary-text-color);
          position: absolute;
          left: 0;
          top: 0;
          animation: animloader 2s linear infinite;
          opacity: 0;
        }
        .loader::after {
          animation-delay: 1s;
        }

        @keyframes animloader {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `]}};t([jt({attribute:!1})],Ns.prototype,"hass",void 0),t([jt({attribute:!1})],Ns.prototype,"mapData",void 0),t([jt({attribute:!1})],Ns.prototype,"card",void 0),t([jt({type:Boolean})],Ns.prototype,"isDark",void 0),t([jt({type:Boolean})],Ns.prototype,"open",void 0),t([Rt()],Ns.prototype,"map",void 0),t([Rt()],Ns.prototype,"_locateIconVisible",void 0),t([Rt()],Ns.prototype,"_addressReady",void 0),Ns=t([It("canyonero-map")],Ns);const Hs=(t,e)=>yo(`card.serviceData.${t}`,e),Zs=(t,e,i)=>({name:yo(`card.servicesCtrl.${t}`,i),icon:e}),Vs=(t,e,i,n)=>({command:t,icon:e,label:Hs(i,n)}),Fs=t=>({auxheat:Zs("auxheat","mdi:radiator",t),charge:Zs("charge","mdi:ev-station",t),doorsLock:Zs("doorsLock","mdi:key-chain",t),engine:Zs("engine","mdi:engine",t),preheat:Zs("preheat","mdi:car-seat-heater",t),sendRoute:Zs("sendRoute","mdi:map-marker-path",t),sigPos:Zs("sigPos","mdi:bugle",t),sunroof:Zs("sunroof","mdi:window-open",t),windows:Zs("windows","mdi:car-door",t)}),Us=t=>({service:{START:Vs("preheat_start","mdi:car-seat-heater","labelStart",t),STOP:Vs("preheat_stop","mdi:car-seat","labelStop",t),DATA_SEAT_CONFIGURE:Vs("preconditioning_configure_seats","mdi:car-seat","labelSeatConfig",t),DATA_TEMP_CONFIGURE:Vs("temperature_configure","mdi:thermometer","labelSetTempZone",t)},data:{precondSeat:{front_left:{label:Hs("labelWindowFrontLeft",t),value:!1},front_right:{label:Hs("labelWindowFrontRight",t),value:!1},rear_left:{label:Hs("labelWindowRearLeft",t),value:!1},rear_right:{label:Hs("labelWindowRearRight",t),value:!1}},temperature:{front_left:{label:Hs("labelWindowFrontLeft",t)},front_right:{label:Hs("labelWindowFrontRight",t)},rear_left:{label:Hs("labelWindowRearLeft",t)},rear_right:{label:Hs("labelWindowRearRight",t)}}}}),Gs=t=>({service:{DATA_SEND_ROUTE:Vs("send_route","mdi:map-marker","labelSend",t)},data:{title:{label:Hs("labelTitle",t),value:"",placeholder:"Brandenburger Tor"},latitude:{label:Hs("labelLatitude",t),value:"",placeholder:"52.5163"},longitude:{label:Hs("labelLongitude",t),value:"",placeholder:"13.3777"},city:{label:Hs("labelCity",t),value:"",placeholder:"Berlin"},postcode:{label:Hs("labelPostCode",t),value:"",placeholder:"10117"},street:{label:Hs("labelStreet",t),value:"",placeholder:"Pariser Platz"}}}),Ws=t=>({service:{DATA_MAX_SOC_CONFIGURE:Vs("battery_max_soc_configure","mdi:battery-charging-high","labelSetMaxSoc",t),DATA_CHARGE_PROGRAM:Vs("charge_program_configure","mdi:ev-station","labelSetProgram",t)},data:{selected_program:0,program_options:{0:"DEFAULT",2:"HOME",3:"WORK"},max_soc:{label:Hs("labelMaxStateOfCharge",t),value:50},program_select:{label:Hs("labelChargeProgram",t)}}}),qs=t=>({service:{START:Vs("engine_start","mdi:engine-start","labelStart",t),STOP:Vs("engine_stop","mdi:engine-off","labelStop",t)}}),Ys=t=>({service:{DATA_START_DEP_TIME:Vs("preheat_start_departure_time","mdi:cog","labelStartTime",t),STOP_DEP_TIME:Vs("preheat_stop_departure_time","mdi:cog","labelStopTime",t)},data:{time:{label:Hs("labelDepartureTime",t),value:0,hour:"00",minute:"00"},departure_time:{label:Hs("labelDepartureTime",t)}}}),Ks=t=>({service:{OPEN:Vs("windows_open","mdi:arrow-down-bold","labelOpen",t),CLOSE:Vs("windows_close","mdi:arrow-up-bold","labelClose",t),DATA_MOVE:Vs("windows_move","mdi:swap-vertical-bold","labelMove",t)},data:{positions:{front_left:{label:Hs("labelWindowFrontLeft",t),value:0},front_right:{label:Hs("labelWindowFrontRight",t),value:0},rear_left:{label:Hs("labelWindowRearLeft",t),value:0},rear_right:{label:Hs("labelWindowRearRight",t),value:0}}}}),Xs=t=>({service:{START:Vs("auxheat_start","mdi:radiator","labelStart",t),STOP:Vs("auxheat_stop","mdi:radiator-off","labelStop",t),DATA_CONFIGURE:Vs("auxheat_configure","mdi:cog","labelSave",t)},data:{time_selection:"0",time_selection_options:{0:Hs("labelNoSelection",t),1:Hs("labelTime1",t),2:Hs("labelTime2",t),3:Hs("labelTime3",t)},items:{time_1:{label:Hs("labelTime1",t),value:0,hour:"00",minute:"00"},time_2:{label:Hs("labelTime2",t),value:0,hour:"00",minute:"00"},time_3:{label:Hs("labelTime3",t),value:0,hour:"00",minute:"00"}},selection_time:{label:Hs("labelTimeSelection",t)}}}),Qs=t=>({service:{OPEN:Vs("sunroof_open","mdi:window-open","labelOpen",t),CLOSE:Vs("sunroof_close","mdi:window-closed","labelClose",t),TILT:Vs("sunroof_tilt","mdi:window-shutter","labelTilt",t)}}),Js=t=>({auxheatConfig:Xs(t),batteryChargeConfig:Ws(t),engineConfig:qs(t),precondSeatConfig:Us(t),preheatConfig:Ys(t),sendRouteConfig:Gs(t),sunroofConfigData:Qs(t),windowsConfig:Ks(t)}),tl=[{value:"0",label:"Low"},{value:"16",label:"16°C"},{value:"16.5",label:"16.5°C"},{value:"17",label:"17°C"},{value:"17.5",label:"17.5°C"},{value:"18",label:"18°C"},{value:"18.5",label:"18.5°C"},{value:"19",label:"19°C"},{value:"19.5",label:"19.5°C"},{value:"20",label:"20°C"},{value:"20.5",label:"20.5°C"},{value:"21",label:"21°C"},{value:"21.5",label:"21.5°C"},{value:"22",label:"22°C"},{value:"22.5",label:"22.5°C"},{value:"23",label:"23°C"},{value:"23.5",label:"23.5°C"},{value:"24",label:"24°C"},{value:"24.5",label:"24.5°C"},{value:"25",label:"25°C"},{value:"25.5",label:"25.5°C"},{value:"26",label:"26°C"},{value:"26.5",label:"26.5°C"},{value:"27",label:"27°C"},{value:"27.5",label:"27.5°C"},{value:"28",label:"28°C"},{value:"28.5",label:"28.5°C"},{value:"30",label:"High"}];var el=A`:host {
  --control-icon-size: 32px;
  --control-btn-radius: var(--feature-border-radius, 12px);
  --feature-height: 42px;
  --mdc-menu-max-height: 200px !important;
  --ha-select-min-width: 150px;
}

.service-control {
  display: flex;
  flex-direction: column;

  padding-top: var(--vic-gutter-gap);

  padding-bottom: var(--vic-gutter-gap);
}

#toast {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}

#toast.show {
  visibility: visible;
  opacity: 1;
  max-height: 100px;
  animation: fade-in 0.3s ease-in-out forwards;
}

.head-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 0.5rem;
  gap: 0.5rem;
  position: relative;
}

.head-sub-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  position: relative;
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.head-sub-row>.control-btn-sm:nth-last-child(1):nth-child(odd) {
  grid-column: span 2;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.hidden {
  display: none !important;
}

.fade-in {
  animation: fade-in 0.3s ease-in-out forwards;
}

.fade-out {
  animation: fade-out 0.3s ease-in-out forwards;
}

.sub-card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  height: auto;
  /* padding: var(--vic-card-padding); */
}

.control-btn-sm,
.control-btn-rounded {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  background-color: var(--ha-card-background, var(--card-background-color, #fff));
  box-sizing: border-box;
  border-radius: 12px;
  border-radius: var(--ha-card-border-radius, 12px);
  border-width: 1px;
  border-width: var(--ha-card-border-width, 1px);
  border-style: solid;
  border-color: #e0e0e0;
  border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
  transition: all 0.3s ease !important;
  cursor: pointer;
  text-wrap: balance;
  text-align: center;
  gap: 0.5rem;
}

.control-btn-sm:hover,.control-btn-rounded:hover {
    box-shadow: inset 0 0 50px var(--primary-color) !important;
  }

.control-btn-rounded {
  flex-direction: column;
}

.control-btn-rounded[active] {
  color: var(--primary-color);
  background-color: rgba(var(--rgb-primary-color), 0.1);
}

.control-btn-rounded ha-icon {
  --mdc-icon-size: var(--control-icon-size);
}

.control-btn-sm {
  padding: 0.5rem !important;
  text-transform: uppercase;
}

.control-btn-sm.reset {
  background-color: var(--disabled-text-color) !important;
  height: -moz-min-content;
  height: min-content;
  padding: 0;
  opacity: 0.5;
}

.sub-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.items-row {
  display: inline-flex;
  width: 100%;
  height: -moz-min-content;
  height: min-content;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--divider-color);
  padding-bottom: 0.5rem;
}

.item-label {
  display: flex;
  flex: 1 0 50%;
}

.items-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.items-control {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.items-control input[type='number'] {
  width: -moz-fit-content;
  width: -moz-max-content;
  width: max-content;
  background-color: var(--card-background-color);
  color: var(--primary-text-color);
  padding: 0.5rem 1rem;
  border: none;
  text-align: center;
  font-size: 1rem;
}

.control-btn {
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}`,il=A`:host {
  --vic-gutter-gap: 8px;
  --vic-card-padding: 12px;
  --vic-icon-size: 36px;
  --vic-icon-border-radius: 18px;
  --vic-icon-shape-color: rgba(var(--rgb-primary-text-color), 0.05);
  --vic-icon-bg-opacity: 0.2;
}

*:focus {
  outline: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

*[hidden] {
  display: none;
}

ha-card {
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 500px !important;
  padding: var(--vic-card-padding);
  background-color: var(--card-background-color);
}

ha-card.preview-card {
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  gap: var(--vic-card-padding);
  background: none;
}


ha-card.__background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 250px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background-image: var(--vic-background-image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
  -webkit-mask-image: linear-gradient(transparent 0%, black 40%, black 70%, transparent 100%);
          mask-image: linear-gradient(transparent 0%, black 40%, black 70%, transparent 100%);
}

ha-card.__map_last {
  padding-bottom: 0;
}

ha-card.__map_last section[type="custom"] {
  padding-bottom: var(--vic-card-padding);
}

ha-card[no-header].__map_first {
  padding-top: 0;
}

ha-card.__map_last #buttons {
  margin-top: var(--vic-card-padding);
}

ha-card[no-header].__map_single {
  padding-top: 0;
  padding-bottom: 0;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

header h1 {
  color: var(--ha-card-header-color, var(--primary-text-color));
  /* Inherit HA's card-header font (was Mercedes hard-coded 'serif !important'). */
  font-family: inherit;
  font-family: var(--ha-card-header-font-family, var(--paper-font-headline_-_font-family, inherit));
  font-size: 24px;
  font-size: var(--ha-card-header-font-size, 24px);
  line-height: 2rem;
  display: block;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 0.67em;
}

#mini_map {
  position: relative;
  min-width: calc(100% + (var(--vic-card-padding) * 2)) !important;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  place-self: center;
}

.header-info-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  gap: var(--vic-gutter-gap);
  flex-wrap: wrap;
  transition: all 0.5s ease;
  padding-bottom: var(--vic-card-padding);

}

.combined-info-box {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(calc((100% - 24px) / 2), 1fr));
  grid-gap: var(--vic-card-padding);
  gap: var(--vic-card-padding);
}

.info-box {
  --mdc-icon-size: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: -moz-fit-content;
  height: fit-content;
  gap: var(--vic-gutter-gap);
  flex-wrap: wrap;
  letter-spacing: 0.5px;
}

.combined-info-box>.info-box:nth-last-child(1):nth-child(odd) {
  grid-column: span 2;
}

@media screen and (max-width: 768px) {
  .info-box {
    --mdc-icon-size: 17px;
  }
}

.info-box.range {
  justify-content: center;
  text-wrap: nowrap;
  align-items: center;
  flex-wrap: nowrap !important;
}

.info-box.range .item {
  display: flex;
  align-items: center;
  gap: 4px !important;
}

.info-box .item {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;


}

@media screen and (max-width: 768px) {
  ha-card {
    padding: 0.5rem;
  }
}

.added-item-arrow {
  display: flex;
}

.item.active-btn {
  cursor: pointer;
}

.item.active-btn:hover,
.item.active-btn[active] {
  color: var(--primary-color);
}



/* .item.active-btn>ha-icon {
  color: var(--primary-color);
} */

.info-box.charge {
  overflow: hidden;
  justify-content: space-evenly;
  max-height: 0;
  opacity: 0;
  transition: all 400ms cubic-bezier(0.3, 0.0, 0.8, 0.15);
}

.info-box.charge .icon-state {
  display: inline-flex;
  height: auto;
  align-items: center;
  gap: var(--vic-gutter-gap);
  width: 100%;
  justify-content: center;
}

.info-box.charge.active {
  max-height: 100px;
  /* Adjust this to be more than the expected height of the content */
  opacity: 1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.info-box.charge .item {
  display: inline-flex;
  align-items: center;
  flex-flow: column;
  gap: initial;
  width: calc((100% /4) - 8px);
  overflow: hidden;
}

.info-box.charge .item-name {
  color: var(--secondary-text-color);
  text-wrap-style: auto;
  text-align: center;
}

.fuel-wrapper {
  display: inline-block;
  width: 50%;
  height: 5px;
  background-color: #909090;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.fuel-level-bar {
  position: absolute;
  background-color: #4caf50;
  border-radius: 5px;
  height: 100%;
  width: var(--vic-range-width);
}

.fuel-level-bar[electric] {
  background-color: #2196f3 !important;
}

.fuel-level-bar[electric][charging]::after {
  content: '';
  position: absolute;
  width: 15%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  animation: pulse 3.7s ease-in-out forwards infinite;
  display: none;
}

.fuel-level-bar[electric][charging]::after {
  display: block !important;
}

@keyframes pulse {
  0% {
    background: rgba(255, 255, 255, 1);
    box-shadow: inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
      0px 0px 40px 2px rgba(105, 135, 255, 1);
    left: 0;
    opacity: 0.3;
  }

  50% {
    left: var(--vic-range-width);
    opacity: 0.5;
  }

  100% {
    background: rgba(255, 255, 255, 0);
    box-shadow: inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
      0px 0px 30px 2px rgba(105, 135, 255, 0.3);
    left: 0;
    opacity: 0.7;
  }
}

.added-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary-text-color);
}

.added-card-header ha-icon-button {
  transition: all 0.4s ease-in-out;
}

.added-card-header ha-icon-button:hover {
    color: var(--primary-text-color);
  }

.added-card-header .card-toggle {
  display: flex;
  gap: 1rem;
}

.added-card {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 0;
  overflow: hidden;
}

.added-card:first-child {
  margin-top: 0;
}

.last-update {
  display: inline-flex;
  width: 100%;
  justify-content: center;
  color: var(--secondary-text-color);
  margin-top: 0.5rem;
  opacity: 0.5;
  font-size: 0.8rem;
}

#cards-wrapper {
  animation: fadeIn 0.5s ease-in-out;
  position: relative;
}

#main-wrapper {
  animation: fadeIn 0.3s ease;
  position: relative;
}

.card-element {
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--vic-card-padding);
}

/* .card-element.swiping-left {
  transform: translateX(-120%);
} */

/* .card-element.swiping-right {
  transform: translateX(120%);
}  */

.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-enter-active {
  transform: translateX(0);
}

.slide-left-exit {
  transform: translateX(0);
}

.slide-left-exit-active {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-enter-active {
  transform: translateX(0);
}

.slide-right-exit {
  transform: translateX(0);
}

.slide-right-exit-active {
  transform: translateX(100%);
}



.default-card {
  align-items: center;
  padding: var(--vic-card-padding);
  background: var(--ha-card-background-color, var(--secondary-background-color));
  box-shadow: none;
  box-shadow: var(--ha-card-box-shadow, none);
  box-sizing: border-box;
  border-radius: 12px;
  border-radius: var(--ha-card-border-radius, 12px);
  border-width: 1px;
  border-width: var(--ha-card-border-width, 1px);
  border-style: solid;
  border-color: #e0e0e0;
  border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
  transition: all 0.3s ease-out;
  /* margin-bottom: 1rem; */
  position: relative;
  overflow: hidden;
}

.default-card:not(:first-child) {
  animation: slideUpDown 0.3s linear;
}

@keyframes slideUpDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.default-card:last-child {
  margin-bottom: 0;
}

.data-header {
  color: --primary-text-color;
  color: var(--ha-card-header-color, --primary-text-color);
  font-family: inherit;
  font-family: var(--ha-card-header-font-family, inherit);
  font-size: 1.5rem;
  line-height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: auto;
  /* padding: 8px 0; */
}

.data-header>div[clickable] {
  cursor: pointer;
}

.data-header > div[clickable]:hover {
    color: var(--primary-color);
  }

.default-card .data-box {
  opacity: 1;
  padding-top: var(--vic-gutter-gap);
  max-height: 1000px;
  transition: all 400ms cubic-bezier(0.3, 0.0, 0.8, 0.15);
}

.default-card .data-box[active='false'] {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0;
}

.default-card.remote-tab {
  border: none !important;
  background: none !important;
  padding: 0px;
}

/* .default-card.remote-tab>.data-header {
  padding: var(--vic-gutter-gap);
} */

.data-row {
  display: flex;
  justify-content: space-between;
  padding: var(--vic-gutter-gap);
  border-bottom: 1px solid #444;
  overflow: hidden;
}

.data-row .data-value-unit {
  cursor: pointer;
  text-align: right;
  text-wrap: nowrap;
}

.data-row .data-label {
  height: auto;
  display: inline-block;
  align-items: flex-end;
  margin-left: 8px;
  text-transform: none;
}

.data-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.data-row div {
  display: flex;
  align-items: center;
  gap: var(--vic-gutter-gap);
}

.data-icon {
  color: var(--secondary-text-color);
}


*[warning] {
  color: --error-color !important;
  color: var(--warning-color, --error-color) !important;
}

.subcard-icon {
  transition: transform 0.3s;
  transform: rotate(0deg);
  display: inline-block;
  cursor: pointer;
}

.subcard-icon[active] {
  transform: rotate(180deg);
}

.subcard-icon.hidden {
  visibility: hidden;
}

.subcard-icon[hide] {
  display: none !important;
}

.sub-attributes {
  overflow: hidden;
  padding-top: 0px !important;
  max-height: 0;
  opacity: 0;
  transition: all 400ms cubic-bezier(0.3, 0.0, 0.8, 0.15);
}

.sub-attributes[active] {
  max-height: 1000px;
  opacity: 1;
  padding: var(--vic-card-padding);
}

*[error] {
  color: var(--error-color);
}

dialog {
  width: 100%;
  overflow: hidden;
  max-width: 500px;
  background: none;
  border: none;
  border-radius: 12px;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

@keyframes slideUpDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes tap-feedback {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(100%);
  }
}

.click-shrink {
  transition: transform 0.1s;
}

.click-shrink:active {
  transform: scale(0.9);
}


/* Legacy .tyre-* classes from the Mercedes 4-wheel pressure layout are
 * kept below for any user YAML that still references them via custom
 * templates; the default VAG Battery-Charging slot uses .battery-donut
 * instead and renders an SoC SVG ring with target-SoC label underneath. */

/* --- VAG brand header (top of card, above info-box) ------------------- */
.vag-brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem 0 0.5rem 0;
}

.vag-brand-header .brand-logo-slot {
  flex: 0 0 auto;
  width: 56px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
}

.vag-brand-header .brand-logo-slot img {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

.vag-brand-header .brand-wordmark {
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1.2px;
  color: var(--primary-text-color);
  /* Inherit the user's HA theme font instead of forcing Helvetica/Roboto. */
  font-family: inherit;
}

/* VAG group */
.vag-brand-header[brand="audi"] .brand-wordmark   { letter-spacing: 4px; }
.vag-brand-header[brand="vw"] .brand-wordmark,
.vag-brand-header[brand="vw_us"] .brand-wordmark  { letter-spacing: 1.5px; }
.vag-brand-header[brand="porsche"] .brand-wordmark { letter-spacing: 2.5px; font-style: italic; }
.vag-brand-header[brand="škoda"] .brand-wordmark,
.vag-brand-header[brand="skoda"] .brand-wordmark   { font-style: italic; letter-spacing: 2px; }
.vag-brand-header[brand="cupra"] .brand-wordmark   { color: #b58450; color: var(--accent-color, #b58450); letter-spacing: 2.5px; }
.vag-brand-header[brand="seat"] .brand-wordmark    { letter-spacing: 2.5px; }

/* Non-VAG majors — keep neutral tracking; subtle differentiation only.
 * Real licensed logos are out of scope; users can drop their own via
 * config.brand_logo_url. */
.vag-brand-header[brand="tesla"] .brand-wordmark   { letter-spacing: 3px; }
.vag-brand-header[brand="bmw"] .brand-wordmark     { letter-spacing: 2px; }
.vag-brand-header[brand="mercedes"] .brand-wordmark { letter-spacing: 1.5px; font-style: italic; }
.vag-brand-header[brand="toyota"] .brand-wordmark  { letter-spacing: 2px; }
.vag-brand-header[brand="volvo"] .brand-wordmark   { letter-spacing: 3px; }
.vag-brand-header[brand="ford"] .brand-wordmark    { letter-spacing: 1.5px; }
.vag-brand-header[brand="hyundai"] .brand-wordmark { letter-spacing: 2px; }
.vag-brand-header[brand="kia"] .brand-wordmark     { letter-spacing: 3px; }
.vag-brand-header[brand="nissan"] .brand-wordmark  { letter-spacing: 2px; }
.vag-brand-header[brand="mazda"] .brand-wordmark   { letter-spacing: 2px; }
.vag-brand-header[brand="honda"] .brand-wordmark   { letter-spacing: 1.5px; }
.vag-brand-header[brand="subaru"] .brand-wordmark  { letter-spacing: 2px; }

.vag-brand-header .brand-meta {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
}

.vag-brand-header .brand-model {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vag-brand-header .brand-vin {
  font-size: 0.75rem;
  color: var(--secondary-text-color);
  letter-spacing: 0.5px;
}

.vag-brand-header .brand-online {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: var(--secondary-text-color);
}

.vag-brand-header .brand-online[online] {
  color: #4caf50;
  color: var(--success-color, #4caf50);
}

.battery-donut-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem 0 0.5rem 0;
}

.battery-donut {
  width: 70%;
  max-width: 240px;
  aspect-ratio: 1;
  display: block;
}

.battery-donut .battery-track {
  fill: none;
  stroke: var(--divider-color);
  stroke-width: 10;
  opacity: 0.4;
}

.battery-donut .battery-fill {
  fill: none;
  stroke: #00b0f0;
  stroke: var(--primary-color, #00b0f0);
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.6s ease-in-out, stroke 0.3s ease-in-out;
}

.battery-donut[charging] .battery-fill {
  stroke: #4caf50;
  stroke: var(--success-color, #4caf50);
  animation: vag-battery-pulse 1.6s ease-in-out infinite;
}

@keyframes vag-battery-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
}

.battery-donut .battery-soc-text {
  font-size: 26px;
  font-weight: 600;
  fill: var(--primary-text-color);
}

.battery-donut .battery-target-text {
  font-size: 10px;
  fill: var(--secondary-text-color);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.tyre-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  transition: all 0.5s ease-in-out;
}

.tyre-toggle-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: var(--vic-card-padding);
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s;
}

.tyre-toggle-btn:hover {
  opacity: 1;
}

/* TYRE WRAP ROTATED */
.tyre-wrapper[rotated] {
  transform: rotate(90deg);
}

.tyre-box[rotated] {
  transform: rotate(-90deg);
}

.tyre-wrapper .background {
  position: absolute;
  width: 100%;
  width: var(--vic-tire-size, 100%);
  height: 100%;
  height: var(--vic-tire-size, 100%);
  z-index: 0;
  top: 50%;
  top: var(--vic-tire-top, 50%);
  left: 50%;
  left: var(--vic-tire-left, 50%);
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  filter: drop-shadow(2px 4px 1rem rgba(0,0,0,0.84706));
}

.tyre-wrapper .tyre-box {
  position: absolute;
  width: 35%;
  height: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 400ms cubic-bezier(0.3, 0.0, 0.8, 0.15);
  scale: var(--vic-tire-value-size);
}

.tyre-value {
  font-size: 1.5rem;
  color: var(--primary-text-color);
  text-align: center;
  margin: 0;
}

.tyre-name {
  color: var(--secondary-text-color);
  text-align: left;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-wrap: nowrap;
}

.tyre-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  text-align: center;
}

*[tyre=frontleft] {
  top: 0%;
  left: 0%;
  /* transform: translate(-15%, -10%); */
}

*[tyre=frontright] {
  top: 0%;
  right: 0%;
  /* transform: translate(15%, -10%); */
}

*[tyre=rearleft] {
  bottom: 0%;
  left: 0%;
  /* transform: translate(-15%, 10%); */
}

*[tyre=rearright] {
  bottom: 0%;
  right: 0%;
  /* transform: translate(15%, 10%); */
}

.loading-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.loading-image img {
  width: 50%;
  height: 50%;
  -o-object-fit: contain;
     object-fit: contain;
  animation: zoomRotate 2s linear infinite;
}

@keyframes zoomRotate {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }

  50% {
    transform: scale(1) rotate(180deg);
    opacity: 0.7;
  }

  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

.redGlows {
  animation: redGlow 1s infinite;
  animation-iteration-count: 5;
}

@keyframes redGlow {
  0% {
    box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.5);
  }

  50% {
    box-shadow: 0 0 20px 0 rgba(255, 0, 0, 0.5);
  }

  100% {
    box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.5);
  }
}

.zoom-in {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoomIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}`;let nl=class extends Lt{constructor(){super(...arguments),this.subcardType=null,this.serviceData={},this._precondState="time"}firstUpdated(){this.initializeServiceData()}initializeServiceData(){this.serviceData=structuredClone(Js(this.card.userLang))}resetConfig(){this.serviceData=structuredClone(Js(this.card.userLang)),this.requestUpdate()}get auxheatConfig(){return this.serviceData.auxheatConfig}get windowsConfig(){return this.serviceData.windowsConfig}get preheatConfig(){return this.serviceData.preheatConfig}get engineConfig(){return this.serviceData.engineConfig}get chargeConfig(){return this.serviceData.batteryChargeConfig}get sendRouteConfig(){return this.serviceData.sendRouteConfig}get sunroofConfig(){return this.serviceData.sunroofConfigData}get precondSeatConfig(){return this.serviceData.precondSeatConfig}static get styles(){return[el,il]}render(){if(0===Object.keys(this.selectedServices).length)return pt`<hui-warning>No service selected.</hui-warning>`;const t=this.subcardType?this.selectedServices[this.subcardType].name:this.card.localize("card.common.titleRemoteControl");return pt`
      <div class="data-header">
        <ha-icon-button
          .label=${"Close"}
          .path=${r}
          class="click-shrink"
          @click=${()=>this.card.toggleCard("close")}
        >
        </ha-icon-button
        >${t}
      </div>
      <div class="service-control">
        <div class="head-row">${this._renderControlBtn()}</div>
        ${this._renderSubCard()}
      </div>
      ${this._renderToast()}
    `}_renderSubCard(){if(!this.subcardType)return;const t={doorsLock:this._renderLockControl(),windows:this._renderWindowsControl(),auxheat:this._renderAuxHeatControl(),charge:this._renderChargeControl(),engine:this._renderEngineControl(),preheat:this._renderPreheatControl(),sendRoute:this._renderSendRouteControl(),sunroof:this._renderSunroofControl()}[this.subcardType];return t?pt`<div class="sub-card-wrapper fade-in">${t}</div>`:void 0}_renderControlBtn(){const t=t=>{"sigPos"===t?this.callService("sigpos_start"):this._handleSubCardClick(t)};return pt`${Object.keys(this.selectedServices).map(e=>{const i=this.subcardType===e,{name:n,icon:o}=this.selectedServices[e];return pt`
        <div @click=${()=>t(e)} class="control-btn-rounded click-shrink" ?active=${i}>
          <ha-icon icon=${o}></ha-icon>
          <span>${n}</span>
        </div>
      `})}`}_renderToast(){const t=this.card.localize("card.common.toastCommandSent");return pt`
      <div id="toast">
        <ha-alert alert-type="success">${t} </ha-alert>
      </div>
    `}_renderServiceBtn(t,e){const{command:i,icon:n,label:o}=e,a=t.includes("DATA_")?()=>this.saveConfigChange(i):()=>this.callService(i);return pt`
      <div class="control-btn-sm click-shrink" @click=${a}>
        <ha-icon icon=${n}></ha-icon><span>${o}</span>
      </div>
    `}_renderResetBtn(){return pt` <div class="control-btn-sm click-shrink" @click=${()=>this.resetConfig()}>
      <ha-icon icon="mdi:restore"></ha-icon><span>RESET</span>
    </div>`}_renderSunroofControl(){const{sunroofConfig:t}=this,e=t.service;return pt`
      <div class="head-sub-row">
        ${Object.entries(e).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}_renderSendRouteControl(){const{sendRouteConfig:t}=this,e=t.data,i=Object.entries(e).map(([t,e])=>{const{label:i,value:n,placeholder:o}=e;return pt`
        <div class="items-row">
          <div>${i}</div>
          <div class="items-control">
            <ha-textfield
              .value=${String(n)}
              .placeholder=${o}
              @input=${e=>this.handleSendRouteChange(t,e)}
            ></ha-textfield>
          </div>
        </div>
      `});return pt`
      <div class="sub-row">${i}</div>

      <div class="head-sub-row">
        ${this._renderResetBtn()}
        ${Object.entries(t.service).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}_renderPreheatControl(){const{preheatConfig:t,precondSeatConfig:e}=this,i=t.service,n=e.service,o=pt`
      <ha-control-select
        .value=${this._precondState}
        .options=${[{value:"time",label:"Time"},{value:"zone_temp",label:"Zones & Temperatures"}]}
        @value-changed=${t=>{this._precondState=t.detail.value}}
      ></ha-control-select>
    `,a=this._renderDepartureTime(),r=this._renderPrecondZoneTemp(),s=pt` <div class="head-sub-row">
      ${"time"===this._precondState?pt` ${Object.entries(i).map(([t,e])=>this._renderServiceBtn(t,e))}`:pt` ${Object.entries(n).map(([t,e])=>this._renderServiceBtn(t,e))}`}
    </div>`;return pt`
      <div class="sub-row">
        ${o} ${"time"===this._precondState?a:r}
        ${this._renderResetBtn()}
      </div>
      ${s}
    `}_renderPrecondZoneTemp(){var t,e;const{precondSeatConfig:i}=this,n=i.data.precondSeat,o=i.data.temperature,a=null===(t=this.card.vehicleEntities.precondStatus)||void 0===t?void 0:t.entity_id,r="on"===(null===(e=this.hass.states[a])||void 0===e?void 0:e.state),s=this.card.getStateDisplay(a),l=Object.entries(n).map(([t,e])=>{const{label:i,value:n}=e,a=o[t],r=(null==a?void 0:a.value)||"";return pt`
        <div class="items-row">
          <!-- Seat Controls -->
          <div>${i}</div>
          <ha-switch
            .checked=${n}
            .configValue=${t}
            @change=${t=>this._handleSeatChange(t)}
          ></ha-switch>

          <!-- Temperature Controls -->
          <ha-select
            .label=${"Temperature"}
            .value=${String(r)}
            .configValue=${t}
            @selected=${this._handleTempSelect}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
            clearAble
          >
            ${tl.map(({value:t,label:e})=>pt`<mwc-list-item value=${t}>${e}</mwc-list-item>`)}
          </ha-select>
        </div>
      `}),c=s?pt`<div class="items-row">
          <div>${this.card.localize("card.serviceData.labelPreclimateStatus")}</div>
          <div>
            <ha-switch .checked=${r} @change=${t=>this._handlePreclimateSwitch(t)}></ha-switch>
            ${s}
          </div>
        </div>`:gt;return pt` ${c} ${l}`}_renderDepartureTime(){const{preheatConfig:t}=this,e=t.data.time;return pt`
      <div class="items-row">
        <div>${t.data.departure_time.label}</div>
        <div>
          <ha-textfield
            type="number"
            inputmode="numeric"
            .value=${e.hour}
            .label=${"hh"}
            .configValue=${"hour"}
            maxlength="2"
            min="0"
            max=${String(23)}
            @input="${this.handlePreheatTimeChange}"
          >
          </ha-textfield>
          <ha-textfield
            type="number"
            inputmode="numeric"
            .value=${e.minute}
            .label=${"mm"}
            .configValue=${"minute"}
            maxlength="2"
            min="0"
            max=${String(59)}
            @input="${this.handlePreheatTimeChange}"
          >
          </ha-textfield>
        </div>
      </div>
    `}_handleSeatChange(t){t.stopPropagation();const e=t.target,i=t.target.configValue,n=e.checked;this.precondSeatConfig.data.precondSeat[i].value=n,this.requestUpdate()}_handlePreclimateSwitch(t){t.stopPropagation();const e=t.target.checked;this.callService(e?"preheat_start":"preheat_stop")}_handleTempSelect(t){t.stopPropagation();const e=t.target,i=e.configValue,n=e.value;this.precondSeatConfig.data.temperature[i].value=n,this.requestUpdate()}_renderEngineControl(){return pt`
      <div class="head-sub-row">
        ${Object.entries(this.engineConfig.service).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}_renderChargeControl(){const{chargeConfig:t}=this,e=t.data,i=e.selected_program,n=e.program_options,o=e.max_soc,a=t.service,r=pt`
      <div class="items-row">
        <div class="item-label">${e.program_select.label}</div>
        <ha-select
          .value=${String(i)}
          @change=${t=>this.handleChargeProgramChange("selected_program",t)}
        >
          ${Object.entries(n).map(([t,e])=>pt`<mwc-list-item value=${t}>${e}</mwc-list-item>`)}
        </ha-select>
      </div>
    `,s=pt`
      <div class="items-row">
        <div class="item-label">${o.label}</div>
        <ha-control-number-buttons
          .min=${50}
          .max=${100}
          .step=${10}
          .value=${o.value}
          @value-changed=${t=>this.handleChargeProgramChange("max_soc",t)}
        ></ha-control-number-buttons>

        </ha-select>
      </div>
    `;return pt`
      <div class="sub-row">${r}${s}</div>
      ${this._renderResetBtn()}
      <div class="head-sub-row">
        ${Object.entries(a).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}_renderAuxHeatControl(){const{auxheatConfig:t}=this,e=t.data.items,i=t.data.time_selection_options,n=t.service,o=pt`
      <div class="items-row">
        <div>${t.data.selection_time.label}</div>
        <ha-select
          .label=${t.data.selection_time.label}
          .value=${t.data.time_selection}
          .configValue=${"time_selection"}
          @selected=${this.handleAuxheatChange}
          @closed=${t=>t.stopPropagation()}
        >
          ${Object.keys(i).map(t=>pt`<ha-list-item value=${t}>${i[t]}</ha-list-item>`)}
        </ha-select>
      </div>
    `,a=Object.keys(e).map(t=>{const{label:i,hour:n,minute:o}=e[t];return pt`
        <div class="items-row">
          <div>${i}</div>
          <div>
            <ha-textfield
              type="number"
              inputmode="numeric"
              .value=${n}
              .label=${"hh"}
              .configValue=${"hour"}
              maxlength="2"
              min="0"
              max=${String(23)}
              .item=${t}
              @input=${this.handleAuxheatChange}
            >
            </ha-textfield>
            <ha-textfield
              type="number"
              inputmode="numeric"
              .value=${o}
              .label=${"mm"}
              .configValue=${"minute"}
              maxlength="2"
              min="0"
              max=${String(59)}
              .item=${t}
              @input=${this.handleAuxheatChange}
            >
            </ha-textfield>
          </div>
        </div>
      `});return pt`
      <div class="sub-row">${o}${a}</div>
      ${this._renderResetBtn()}
      <div class="head-sub-row">
        ${Object.entries(n).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}_renderLockControl(){var t,e;const i=null===(t=this.card.vehicleEntities.lock)||void 0===t?void 0:t.entity_id,n=null===(e=this.hass.states[i])||void 0===e?void 0:e.state,o=t=>this.card.localize(t),a={locked:{icon:"mdi:lock",stateDisplay:o("card.serviceData.labelUnlockCar"),command:"doors_unlock",bgColor:"var(--state-lock-locked-color)"},unlocked:{icon:"mdi:lock-open",stateDisplay:o("card.serviceData.labelLockCar"),command:"doors_lock",bgColor:"var(--state-lock-unlocked-color)"},unlocking:{icon:"mdi:lock-clock",stateDisplay:n,command:"",bgColor:"var(--state-lock-unlocking-color)"}},{icon:r,stateDisplay:s,command:l,bgColor:c}=a[n];return pt`
      <div class="head-sub-row">
        <div
          class="control-btn-sm click-shrink"
          style="background-color: ${c};"
          @click=${()=>this.callService(l)}
        >
          <ha-icon icon=${r}></ha-icon><span>${s}</span>
        </div>
        <div class="control-btn-sm click-shrink" @click=${this.lockMoreInfo}>
          <ha-icon icon="mdi:information"></ha-icon><span>${o("card.serviceData.labelMoreInfo")}</span>
        </div>
      </div>
    `}_renderWindowsControl(){const{windowsConfig:t}=this,e=t.data.positions,i=t.service,n=Object.entries(e).map(([t,e])=>{const{label:i,value:n}=e;return pt`
        <div class="items-row">
          <div class="item-label">${i}</div>
          <ha-control-number-buttons
            .min=${0}
            .max=${100}
            .step=${10}
            .value=${n}
            @value-changed=${e=>this.handleWindowsChange(t,e)}
          ></ha-control-number-buttons>
        </div>
      `});return pt`
      <div class="sub-row">${n}</div>
      ${this._renderResetBtn()}

      <div class="head-sub-row">
        ${Object.entries(i).map(([t,e])=>this._renderServiceBtn(t,e))}
      </div>
    `}saveConfigChange(t){switch(t){case"preheat_start_departure_time":const e={time:qa(this.preheatConfig.data.time.hour,this.preheatConfig.data.time.minute)};this.callService(t,e);break;case"auxheat_configure":const{items:i,time_selection:n}=this.auxheatConfig.data,o=Object.entries(i).reduce((t,[e,i])=>{const{hour:n,minute:o}=i;return t[e]=qa(n,o),t},{}),a=Object.assign({time_selection:n},o);this.callService(t,a);break;case"battery_max_soc_configure":const r={charge_program:this.chargeConfig.data.selected_program,max_soc:this.chargeConfig.data.max_soc.value};this.callService(t,r);break;case"charge_program_configure":const s={charge_program:this.chargeConfig.data.selected_program};this.callService(t,s);break;case"windows_move":const l=Object.entries(this.windowsConfig.data.positions).reduce((t,[e,i])=>{const{value:n}=i;return t[e]=n,t},{});this.callService(t,l);break;case"send_route":const c=Object.entries(this.sendRouteConfig.data).reduce((t,[e,i])=>{const{value:n}=i;return t[e]=n,t},{});this.callService(t,c);break;case"temperature_configure":const d=Object.entries(this.precondSeatConfig.data.temperature).reduce((t,[e,i])=>{const{value:n}=i;return""===n||null==n||(t[e]=n),t},{});this.callService(t,d);break;case"preconditioning_configure_seats":const h=Object.entries(this.precondSeatConfig.data.precondSeat).reduce((t,[e,i])=>{const{value:n}=i;return t[e]=n,t},{});this.callService(t,h)}}handleSendRouteChange(t,e){const i=e.target.value;this.sendRouteConfig.data[t].value=i,this.requestUpdate()}handleChargeProgramChange(t,e){const i=e.target.value;"max_soc"===t?this.chargeConfig.data[t].value=parseInt(i,10):this.chargeConfig.data[t]=parseInt(i,10),this.requestUpdate()}handlePreheatTimeChange(t){const e=t.target,i=e.value,n=e.configValue;this.preheatConfig.data.time[n]=i,this.requestUpdate()}handleAuxheatChange(t){t.stopPropagation();const e=t.target,i=e.configValue,n=e.item,o=e.value,a=this.auxheatConfig.data;if("time_selection"===i)a.time_selection=o;else{a.items[n][i]=o}this.requestUpdate()}handleWindowsChange(t,e){this.windowsConfig.data.positions[t].value=e.detail.value,this.requestUpdate()}_handleSubCardClick(t){_("light"),this.subcardType=this.subcardType===t?null:t,setTimeout(()=>{var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".control-btn-rounded:not([active])");null==e||e.forEach(t=>{t.classList.remove("fade-in","fade-out","hidden"),null===this.subcardType?(t.classList.add("fade-in"),t.classList.remove("hidden")):(t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.add("hidden")},{once:!0}))})},0)}lockMoreInfo(){var t;const e=null===(t=this.card.vehicleEntities.lock)||void 0===t?void 0:t.entity_id;v(this,"hass-more-info",{entityId:e})}async callService(t,e){_("success");try{await this.hass.callService("mbapi2020",t,Object.assign({vin:this.card.carVinNumber},e))}finally{this.launchToast()}}launchToast(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("toast");e&&(e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3e3))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ol(t,e,i){return t?e(t):i?.(t)}t([jt({attribute:!1})],nl.prototype,"hass",void 0),t([jt({attribute:!1})],nl.prototype,"card",void 0),t([jt({attribute:!1})],nl.prototype,"selectedServices",void 0),t([Rt()],nl.prototype,"subcardType",void 0),t([Rt()],nl.prototype,"serviceData",void 0),t([Rt()],nl.prototype,"_precondState",void 0),nl=t([It("canyonero-remote-control")],nl);const al=(t,e,i)=>t.subscribeMessage(t=>e(t),Object.assign({type:"render_template"},i)),rl=["secondary","notify","icon_template","color_template","picture_template","notify_icon","notify_color"],sl=".2";let ll=class extends Lt{constructor(){super(...arguments),this._templateResults={},this._unsubRenderTemplates=new Map,this._iconStyle={},this.getValue=t=>{var e,i,n,o,a,r,s,l,c;const{button:d,custom_button:h,default_name:u,default_icon:p,key:m}=this._button,g=this._card.component,f=this._templateResults[t];switch(t){case"primary":return h?null==d?void 0:d.primary:u;case"icon":return h?this.getValue("icon_template"):p;case"secondary":if(!h)return g.getSecondaryInfo(m);return d.secondary?null!==(e=null==f?void 0:f.result)&&void 0!==e?e:d.secondary:d.attribute?g.getFormattedAttributeState(d.entity,d.attribute):g.getStateDisplay(d.entity);case"notify":return h?null==f?void 0:f.result:g.getErrorNotify(m);case"icon_template":const t=d.icon_template&&null!==(i=null==f?void 0:f.result.toString())&&void 0!==i?i:d.icon;return t.includes("mdi:")?t:"";case"color_template":return null!==(o=null!==(n=null==f?void 0:f.result)&&void 0!==n?n:d.color_template)&&void 0!==o?o:"";case"color":return this.getValue("color_template")||"var(--secondary-text-color)";case"picture_template":return null!==(a=null==f?void 0:f.result)&&void 0!==a?a:"";case"entity":return h?null==d?void 0:d.entity:"";case"picture":return h?this.getValue("picture_template"):"";case"notify_icon":return h&&null!==(s=null!==(r=null==f?void 0:f.result)&&void 0!==r?r:d.notify_icon)&&void 0!==s?s:"mdi:alert-circle";case"notify_color":return null!==(c=null!==(l=null==f?void 0:f.result)&&void 0!==l?l:d.notify_color)&&void 0!==c?c:"var(--error-color)"}},this._applyMarquee=()=>{this.updateComplete.then(()=>{var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".primary");if(e){const t=e.querySelector("span");if(e.scrollWidth>e.clientWidth){const i=e.scrollWidth-e.clientWidth,n=i/5;e.style.setProperty("--speed",`${n}s`),e.style.setProperty("--offset",`-${i}px`),e.classList.add("title-wrap"),t.classList.add("marquee"),t.addEventListener("animationend",()=>{t.classList.remove("marquee"),e.classList.remove("title-wrap"),e.style.removeProperty("--offset"),e.style.removeProperty("--speed")})}else e.classList.remove("title-wrap"),t.classList.remove("marquee")}})}}connectedCallback(){super.connectedCallback(),this._tryConnect()}disconnectedCallback(){super.disconnectedCallback(),this._tryDisconnect()}async _tryConnect(){rl.forEach(t=>{this._subscribeRenderTemplate(t)})}async _subscribeRenderTemplate(t){var e,i;if(void 0!==this._unsubRenderTemplates.get(t)||!this.hass||!this.isTemplate(t))return;const n=this._button.button;try{const i=al(this.hass.connection,e=>{this._templateResults=Object.assign(Object.assign({},this._templateResults),{[t]:e})},{template:null!==(e=n[t])&&void 0!==e?e:"",entity_ids:n.entity?[n.entity]:void 0,variables:{config:n,user:this.hass.user.name},strict:!0});this._unsubRenderTemplates.set(t,i),await i}catch(e){const o={result:null!==(i=n[t])&&void 0!==i?i:"",listeners:{all:!1,domains:[],entities:[],time:!1}};this._templateResults=Object.assign(Object.assign({},this._templateResults),{[t]:o}),this._unsubRenderTemplates.delete(t)}}async _tryDisconnect(){rl.forEach(t=>{this._tryDisconnectKey(t)})}async _tryDisconnectKey(t){const e=this._unsubRenderTemplates.get(t);if(e)try{(await e)(),this._unsubRenderTemplates.delete(t)}catch(t){if("not_found"!==t.code&&"template_error"!==t.code)throw t}}get _stateColor(){var t;return this._entityStateObj&&this._button.custom_button&&(null===(t=this._button.button)||void 0===t?void 0:t.state_color)||!1}isTemplate(t){const e=this._button.button[t];return er(e)}_setColorAlpha(t){return ca(t).setAlpha(sl).toRgbString()}_getBackgroundColors(){const t=getComputedStyle(this).getPropertyValue("--primary-text-color");return this._setColorAlpha(t)}async firstUpdated(t){super.firstUpdated(t),this._setEventListeners(),this._applyMarquee(),this._updateStateBadgeEl()}updated(t){var e,i;if(super.updated(t),t.has("hass")&&this._tryConnect(),t.has("hass")&&this.hass){const n=t.get("hass");if(n){const t=n.states[null===(e=this._button.button)||void 0===e?void 0:e.entity],o=this.hass.states[null===(i=this._button.button)||void 0===i?void 0:i.entity];t&&o&&t!==o&&(this._entityStateObj=o,setTimeout(()=>{var t;const e=(null===(t=this._stateBadgeEl)||void 0===t?void 0:t._iconStyle)||{},i=this._iconStyle;JSON.stringify(i)!==JSON.stringify(e)&&(this._iconStyle=e,this.requestUpdate("_iconStyle"))},100))}}}willUpdate(t){if(super.willUpdate(t),t.has("_button")&&this._button&&this._button.button){const t=this._button.button.entity;t&&this.hass?this._entityStateObj=this.hass.states[t]:this._entityStateObj=void 0}}_updateStateBadgeEl(){var t;this._stateBadgeEl||(this._stateBadgeEl=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("state-badge"),this._stateBadgeEl&&(this._stateColor?setTimeout(()=>{var t;const e=(null===(t=this._stateBadgeEl)||void 0===t?void 0:t._iconStyle)||{};this._iconStyle=e,this.requestUpdate("_iconStyle")},0):(this._iconStyle={},this._stateBadgeEl.stateColor=!1)))}_setEventListeners(){var t,e;if(!this.isAction)return;const i=(null===(t=this._button.button)||void 0===t?void 0:t.button_action)||{};if(aa(i)){ir(null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("actionBtn"),i)}}get isAction(){return"action"===this._button.button_type}render(){var t,e;const{show_error_notify:i}=this._config,{key:n}=this._button,o=this._stateColor,a=this._entityStateObj,r=this.getValue,s=r("primary"),l=r("icon"),c=r("secondary"),d=r("notify"),h=r("entity"),u=r("color"),p=r("picture"),m=r("notify_icon"),g=r("notify_color"),f=u||"var(--secondary-text-color)",v={"--vic-icon-bg-color":`${o?null!==(e=null!==(t=this._iconStyle.color)&&void 0!==t?t:u)&&void 0!==e?e:"var(--disabled-text-color)":u||"var(--disabled-text-color)"}`,"--vic-icon-color":`${f}`,"--vic-notify-color":`${g}`},_=this._stateColor&&h?pt`<state-badge
            .hass=${this.hass}
            .stateObj=${a}
            .stateColor=${this._stateColor}
            .overrideIcon=${l}
            .color=${this._stateColor?void 0:f}
          ></state-badge>`:pt`<ha-state-icon
            .hass=${this.hass}
            .stateObj=${a}
            .icon=${l}
            style=${`color: ${f};`}
          ></ha-state-icon>`;return pt`
      <div
        id="actionBtn"
        data-key="${`button-${n}`}"
        class="grid-item"
        @click=${this._handleNavigate}
        ?transparent=${this._card.buttonConfig.transparent}
        style=${Wt(v)}
      >
        <ha-ripple></ha-ripple>
        <div
          class="click-container click-shrink"
          id="${`button-action-${n}`}"
          ?vertical=${"vertical"===this.layout}
        >
          <div class="item-icon">
            <div class="icon-background">
              ${p?pt`<img src="${p}" class="icon-picture" />`:_}
            </div>
            <div class="item-notify" ?hidden=${!d||!i}>
              <div class="notify-icon">
                <ha-icon .icon="${m}"></ha-icon>
              </div>
            </div>
          </div>
          <div class="item-content">
            <div class="primary">
              <span>${s}</span>
            </div>
            <span class="secondary">${c}</span>
          </div>
        </div>
      </div>
    `}_handleNavigate(t){t.stopPropagation(),this.isAction||(_("light"),this._card._handleClick(this._button.key))}static get styles(){return[il,A`
        :host {
          --vic-notify-icon-color: var(--white-color);
        }
        #actionBtn {
          cursor: pointer;
        }
        /* GRID ITEM */
        .grid-item {
          display: flex;
          position: relative;
          padding: var(--vic-gutter-gap) var(--vic-card-padding);
          background: var(--secondary-background-color, var(--card-background-color, #fff));
          box-shadow: var(--ha-card-box-shadow);
          box-sizing: border-box;
          border-radius: var(--ha-card-border-radius, 12px);
          border-width: var(--ha-card-border-width, 1px);
          border-style: solid;
          border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
          transition: all 0.3s ease-out;
          opacity: 1;
          cursor: pointer;
          align-items: center;
          height: 100%;
          overflow: hidden;
        }

        .grid-item[transparent] {
          background: none !important;
          border: none !important;
          box-shadow: none !important;
        }

        .grid-item .click-container {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 1 1 0%;
          min-width: 0px;
          box-sizing: border-box;
          pointer-events: none;
          gap: 1em;
        }

        .grid-item .click-container[vertical] {
          flex-direction: column;
          text-align: center;
          gap: 10px;
        }

        .grid-item .item-notify {
          position: absolute;
          top: 3px;
          right: -3px;
        }

        .grid-item .item-notify .notify-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          width: var(--vic-notify-size, 18px);
          height: var(--vic-notify-size, 18px);
          font-size: var(--vic-notify-size, 18px);
          border-radius: 50%;
          background-color: var(--vic-notify-color, var(--error-color));
          transition: background-color 280ms ease-in-out;
        }

        .notify-icon ha-icon {
          --mdc-icon-size: 12px;
          color: var(--vic-notify-icon-color, rgb(var(--rgb-white))) !important;
        }

        .grid-item .item-notify[hidden] {
          display: none;
        }

        .grid-item .item-icon {
          position: relative;
          padding: 6px;
          margin: -6px;
        }

        .item-icon .icon-background {
          position: relative;
          width: var(--vic-icon-size);
          height: var(--vic-icon-size);
          border-radius: var(--vic-icon-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: background-color 180ms ease-in-out, opacity 180ms ease-in-out;
        }

        .item-icon .icon-background::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--vic-icon-bg-color, var(--disabled-text-color));
          opacity: var(--vic-icon-bg-opacity);
          transition: background-color 180ms ease-in-out, opacity 180ms ease-in-out;
        }

        .icon-picture {
          width: 100%;
          height: 100%;
          border-radius: var(--vic-icon-border-radius);
        }

        .grid-item .item-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
        }

        .grid-item .item-content .primary {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 1rem;
          font-weight: 500;
        }

        .grid-item .item-content > .primary > .title {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
          font-size: 1rem;
        }

        .grid-item .item-content .secondary {
          color: var(--secondary-text-color);
          text-transform: capitalize;
          letter-spacing: 0.5px;
          white-space: nowrap;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          text-overflow: ellipsis;
        }

        .primary.title-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          display: block;
          left: 0;
          top: 0;
        }

        .primary.title-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -10px;
          width: 15%;
          height: 100%;
          background-image: linear-gradient(
            to left,
            transparent 0,
            var(--secondary-background-color, var(--card-background-color, #fff)) 100%
          );
        }

        .marquee {
          display: inline-block;
          animation: marquee linear 1s infinite;
          overflow: visible !important;
          animation-iteration-count: 3;
          animation-duration: var(--speed, 6s);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          50% {
            transform: translateX(var(--offset));
          }

          100% {
            transform: translateX(0%);
          }
        }
      `]}};t([jt({attribute:!1})],ll.prototype,"hass",void 0),t([jt({attribute:!1})],ll.prototype,"_config",void 0),t([jt({attribute:!1})],ll.prototype,"_card",void 0),t([jt({attribute:!1})],ll.prototype,"_button",void 0),t([jt({attribute:"layout",type:String})],ll.prototype,"layout",void 0),t([jt({attribute:!1})],ll.prototype,"_entityStateObj",void 0),t([Rt()],ll.prototype,"_templateResults",void 0),t([Rt()],ll.prototype,"_unsubRenderTemplates",void 0),t([Rt()],ll.prototype,"_iconStyle",void 0),t([Rt()],ll.prototype,"_stateBadgeEl",void 0),ll=t([It("canyonero-button-single")],ll);let cl=class extends Lt{constructor(){super(...arguments),this.swiper=null,this.activeSlideIndex=0,this.getErrorNotify=t=>this.component.getErrorNotify(t),this.getSecondaryInfo=t=>this.component.getSecondaryInfo(t),this._chunkObject=(t,e)=>Object.keys(t).reduce((i,n,o)=>{const a=Math.floor(o/e);return i[a]||(i[a]={}),i[a][n]=t[n],i},{}),this._handleClick=t=>{this.component._currentSwipeIndex=this.activeSlideIndex,this.component._currentCardType=t},this.showCustomBtnEditor=t=>{var e,i,n;const o=`button-${t}`,a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("canyonero-button-single"),r=Array.from(a).find(t=>t.getAttribute("data-key")===o);if(!r)return;const s=()=>{var t;const e=Array.from(a).filter(t=>t.getAttribute("data-key")!==o),i=null===(t=r.shadowRoot)||void 0===t?void 0:t.querySelector(".grid-item");e.forEach(t=>t.style.opacity="0.2"),i.classList.add("redGlows"),setTimeout(()=>{e.forEach(t=>t.style.opacity=""),i.classList.remove("redGlows")},3e3)};if(this.swiper){const t=r.closest(".swiper-slide"),e=Array.from((null===(i=t.parentElement)||void 0===i?void 0:i.children)||[]).indexOf(t);-1!==e&&(null===(n=this.swiper)||void 0===n||n.slideTo(e),setTimeout(s,500))}else setTimeout(s,500)}}static get styles(){return[k(pn),A`
        #button-swiper {
          --swiper-pagination-bottom: -8px;
          --swiper-theme-color: var(--primary-text-color);
          padding: 0 0 var(--vic-card-padding) 0;
          border: none !important;
          background: none !important;
          overflow: visible;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        /* .swiper-wrapper {
          flex-direction: initial;
          flex-wrap: wrap;
        } */
        .swiper-slide {
          height: 100%;
          width: 100%;
        }
        .swiper-pagination {
          margin-top: var(--swiper-pagination-bottom);
          display: block;
        }

        .swiper-pagination-bullet {
          background-color: var(--swiper-theme-color);
          transition: all 0.3s ease-in-out !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 0.7;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(calc((100% - 24px) / 2), 1fr));
          grid-template-rows: auto;
          grid-gap: var(--vic-gutter-gap);
          position: relative;
        }
      `,il]}get useSwiper(){var t;return(null===(t=this._config.button_grid)||void 0===t?void 0:t.use_swiper)||!1}get buttonConfig(){var t,e,i,n,o,a,r,s;return{rows_size:null!==(e=null===(t=this._config.button_grid)||void 0===t?void 0:t.rows_size)&&void 0!==e?e:2,columns_size:null!==(n=null===(i=this._config.button_grid)||void 0===i?void 0:i.columns_size)&&void 0!==n?n:2,button_layout:null!==(a=null===(o=this._config.button_grid)||void 0===o?void 0:o.button_layout)&&void 0!==a?a:"horizontal",use_swiper:this.useSwiper,transparent:null!==(s=null===(r=this._config.button_grid)||void 0===r?void 0:r.transparent)&&void 0!==s&&s}}firstUpdated(t){super.firstUpdated(t),this.useSwiper&&this.initSwiper(),t.has("component")&&this.component&&!1===this.component._loading&&this._setUpButtonAnimation()}_setUpButtonAnimation(){if(this.component.isEditorPreview)return;if(!this.shadowRoot)return;const t=()=>{var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("canyonero-button-single");i&&0!==i.length&&(i.forEach((t,e)=>{requestAnimationFrame(()=>{var i;const n=null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector(".grid-item");n&&(n.style.animationDelay=50*e+"ms",n.classList.add("zoom-in"),n.addEventListener("animationend",()=>{n.classList.remove("zoom-in")},{once:!0}))})}),e.disconnect())},e=new MutationObserver(()=>{var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("canyonero-button-single");i&&i.length>0&&requestAnimationFrame(()=>t())});e.observe(this.shadowRoot,{childList:!0,subtree:!0}),requestAnimationFrame(()=>t())}initSwiper(){var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".swiper-container");if(!i)return;const n=i.querySelector(".swiper-pagination");this.swiper=new en(i,{modules:[an],grabCursor:!0,speed:500,roundLengths:!0,spaceBetween:12,loop:!1,slidesPerView:"auto",pagination:{el:n,clickable:!0}}),null===(e=this.swiper)||void 0===e||e.on("slideChange",()=>{var t,e;this.activeSlideIndex=null!==(e=null===(t=this.swiper)||void 0===t?void 0:t.activeIndex)&&void 0!==e?e:0}),this.swiper&&void 0!==this._cardCurrentSwipeIndex&&this._cardCurrentSwipeIndex!==this.activeSlideIndex&&this.swiper.slideTo(this._cardCurrentSwipeIndex,0,!1)}_renderSwiper(){const t=this._buttons;return pt`
      <section id="button-swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">${this._buttonsGridGroup(t)}</div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    `}_renderGrid(){const t=this._buttons;return pt`
      <section id="button-swiper">
        <div class="grid-container" style=${this._computeGridColumns()}>
          ${Object.keys(t).map(t=>pt`${this._renderButton(t)} `)}
        </div>
      </section>
    `}render(){return pt`${ol(this.useSwiper,()=>this._renderSwiper(),()=>this._renderGrid())}`}_buttonsGridGroup(t){const e=this.buttonConfig.rows_size*this.buttonConfig.columns_size,i=this._chunkObject(t,e),n=Object.keys(i).map(t=>{const e=pt`
        <div class="grid-container" style=${this._computeGridColumns()}>
          ${Object.keys(i[t]).map(t=>pt`${this._renderButton(t)} `)}
        </div>
      `;return pt`<div class="swiper-slide">${e}</div>`});return pt`${n}`}_renderButton(t){const e=this._buttons[t];return pt` <canyonero-button-single
      data-key="${`button-${t}`}"
      .hass=${this.hass}
      ._config=${this._config}
      ._card=${this}
      ._button=${e}
      .layout=${this.buttonConfig.button_layout}
    ></canyonero-button-single>`}_computeGridColumns(){const t=this.buttonConfig.columns_size;return Wt({gridTemplateColumns:`repeat(auto-fill, minmax(${`calc((100% - 24px) / ${t})`}, 1fr))`})}swipeToButton(t){this.updateComplete.then(()=>{var e,i,n;const o=`button-${t}`,a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-key="${o}"]`);if(a&&this.useSwiper){const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll(".swiper-slide");let e=-1;t.forEach((t,i)=>{t.contains(a)&&(e=i)}),-1!==e&&(null===(n=this.swiper)||void 0===n||n.slideTo(e,0,!1))}})}};t([jt({attribute:!1})],cl.prototype,"hass",void 0),t([jt({attribute:!1})],cl.prototype,"component",void 0),t([jt({attribute:!1})],cl.prototype,"_config",void 0),t([jt({attribute:!1})],cl.prototype,"_buttons",void 0),t([Rt()],cl.prototype,"swiper",void 0),t([Rt()],cl.prototype,"activeSlideIndex",void 0),t([Rt()],cl.prototype,"_cardCurrentSwipeIndex",void 0),cl=t([It("canyonero-buttons")],cl);var dl=A`:host {
  --vic-gutter-gap: 8px;
  --vic-card-padding: 12px;
  --vic-icon-size: 36px;
  --vic-icon-border-radius: 50%;
  --vic-icon-shape-color: rgba(var(--rgb-primary-text-color), 0.05);
}

.card-config {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.panel-container {
  margin-top: 1rem;
}

.switches,
.card-button-cfg {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  grid-gap: var(--vic-gutter-gap);
  gap: var(--vic-gutter-gap);
  margin-top: var(--vic-gutter-gap);
  margin-bottom: var(--vic-gutter-gap);
}

.card-button-cfg.ha-button {
  grid-template-columns: repeat(auto-fit, minmax(calc((100% - 8px) / 4), 1fr))
}

.card-button-cfg:not(.ha-button)>*:nth-last-child(1):nth-child(odd) {
  grid-column: span 2;
}

.switches>*:nth-last-child(1):nth-child(odd) {
  grid-column: span 2;
}

.item-content {
  /* display: flex; */
  /* flex-direction: column; */
  /* min-width: 0; */
  /* overflow: hidden; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.action-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.select-action {
  display: flex;
  flex-direction: column;
  gap: var(--vic-card-padding);
}

/* .switches {
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
} */

ha-select,
ha-textfield {
  margin-bottom: 8px;
  display: block;
  width: 100%;
}

ha-switch {
  --mdc-theme-secondary: var(--switch-checked-color);
}

ha-expansion-panel .container {
  padding: 0px 1rem !important;
}

h3 {
  color: var(--secondary-text-color);
  margin-top: 0;
  margin-bottom: 0;
}

.right-icon {
  padding-right: 8px;
}

.note {
  color: var(--secondary-text-color);
  text-align: left;
}

.cards-buttons {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  gap: 8px 0px;
}

#section-order {
  border: 1px solid var(--divider-color);
  padding: var(--vic-gutter-gap);
  box-sizing: border-box;
  border-radius: var(--vic-gutter-gap);
  margin-bottom: var(--vic-card-padding);
}

.card-types {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-bottom: 1px solid var(--divider-color);
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  margin-top: var(--vic-card-padding);
  margin-bottom: var(--vic-card-padding);
}

.header-sm {
  /* color: var(--secondary-text-color); */
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
  text-transform: uppercase;
  height: 100%;
  /* font-size: medium; */
  /* margin-top: 1rem; */
  font-weight: 400;
}

.header-sm[interactive] {
  cursor: pointer;
}

.header-sm[interactive]:hover {
  color: var(--primary-color);
}

.header-sm.divider {
  color: var(--secondary-text-color);
  padding: var(--vic-card-padding);
}


.subcard-icon {
  transition: transform 0.3s;
  transform: rotate(0deg);
  display: inline-block;
  cursor: pointer;
}

.subcard-icon[active] {
  transform: rotate(180deg);
}

.subcard-icon[hide] {
  display: none !important;
}

.sub-card-rows {
  opacity: 1;
  padding-top: var(--vic-gutter-gap);
  max-height: 1000px;
  transition: all 400ms ease-in-out;
}

.sub-card-rows[hidden] {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  transition: all 400ms ease-in-out;
}

.card-type-item {
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  border-bottom: 1px solid var(--divider-color);
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
}

.card-type-item[disabled] {
  opacity: 0.5;
}

.card-types:last-child,
.card-type-item:last-child {
  border-bottom: none;
}

.confirm-delete {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--disabled-color);
  color: var(--primary-text-color);
  z-index: 2;
}

.card-type-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-type-row[disabled] {
  opacity: 0.5;
}

.card-type-icon {
  width: 36px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: var(--secondary-text-color);
}

.card-type-icon .icon-background {
  position: relative;
  width: var(--vic-icon-size);
  height: var(--vic-icon-size);
  font-size: var(--vic-icon-size);
  border-radius: var(--vic-icon-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vic-icon-shape-color);
  transition-property: background-color, box-shadow;
  transition-duration: 280ms;
  transition-timing-function: ease-out;
}

.card-type-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  flex: 1;
}

.card-type-content .primary {
    font-weight: 500;
    font-size: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: uppercase;
  }

.card-type-content .secondary {
    color: var(--secondary-text-color);
    /* text-transform: capitalize; */
    letter-spacing: 0.5px;
    font-size: smaller;
    text-wrap: nowrap;
  }

.card-type-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  opacity: 1 !important;
}

.card-type-actions .action-icon {
  cursor: pointer;
  color: var(--secondary-text-color);
  /* background-color: var(--vic-icon-shape-color); */
  border-radius: 50%;
  padding: 4px;
  display: inline-block;
  --mdc-icon-size: 22px;
  border: none;
}

.card-type-actions .action-icon:hover {
    color: var(--primary-color);
    box-shadow: 0 0 8px 0 rgba(3, 11, 115, 0.3);
  }

.custom-btn {
  position: relative;
  display: inline-flex;
  width: 50%;
  height: 100%;
}

.custom-btn .habtn {
  width: 100%;
  position: relative;
}

.custom-btn .remove-card-icon {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--secondary-text-color);
  cursor: pointer;
}

.image-config {
  display: flex;
  flex-direction: column;
}

.images-list {
  animation: fade-in 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.custom-background-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}

.custom-background-wrapper.dragging {
  background-color: var(--primary-color);
}

#card-list .handle,
.custom-background-wrapper .handle {
  cursor: grab;
  color: var(--secondary-text-color);
}

#card-list .handle:active,
.custom-background-wrapper .handle:active {
  cursor: grabbing;
  color: var(--primary-color);
}

.ghost {
  opacity: 0.5;
  background: var(--primary-color);
  border-radius: 12px;
  border-radius: var(--ha-card-border-radius, 12px);
}

.new-url-btn,
.file-input {
  display: none;
}

.new-url-btn.show,
.file-upload {
  cursor: pointer;
  display: inline-block;
  color: var(--secondary-text-color);
}

.new-url-btn:hover,
.file-upload:hover {
  color: var(--primary-color);
}

.image-input {
  text-transform: uppercase !important;
  letter-spacing: inherit;
  width: inherit;
}

.sub-card-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--divider-color);
}

.card-tab {
  display: inline-flex;
  width: -moz-fit-content;
  width: fit-content;
  height: 100%;
  align-items: center;
  color: var(--secondary-text-color);
  cursor: pointer;
}

.card-tab:hover {
    color: var(--primary-color);
  }

.card-tab.active {
  display: inline-flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--primary-color) !important;
  text-transform: uppercase;
}

.tab-content {
  display: block;
  border: 1px solid var(--divider-color);
  padding: 4px;
}

.toast {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}

.toast.show {
  visibility: visible;
  opacity: 1;
  max-height: 100px;
  animation: fade-in 0.3s ease-in-out forwards;
}

#toast {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}

#toast-update.hidden {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}

#toast.show {
  visibility: visible;
  opacity: 1;
  max-height: 100px;
  animation: fade-in 0.3s ease-in-out forwards;
}

#toast-update {
  visibility: visible;
  opacity: 1;
  max-height: 100px;
}

.version {
  /* margin-top: 2rem; */
  color: var(--secondary-text-color);
  align-items: stretch;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.version .update {
  color: var(--accent-color);
  opacity: 0.7;
}

ha-alert {
  width: 100%;
}

ha-alert>.alert-icon {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.sub-card-config {
  margin-top: 16px;
}

.flex-col {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}`;const hl=[{name:"tap_action",label:"Tap action",defaultAction:"more-info"},{name:"hold_action",label:"Hold action",defaultAction:"none"},{name:"double_tap_action",label:"Double tap action",defaultAction:"none"}];let ul=class extends Lt{constructor(){super(...arguments),this.isButtonPreview=!1,this._selectedAction="tap_action"}static get styles(){return[dl]}get cardButton(){return this.card.button}_renderActionSelectors(){const t=this.button.button_action||{},e=hl.map(e=>pt`
        <div class="action-label">${e.label}</div>
        <div class="select-action">
          <ha-selector
            .hass=${this.hass}
            .label=${e.label}
            .selector=${{ui_action:{default_action:e.defaultAction}}}
            .value=${t[e.name]||e.defaultAction}
            .configValue=${e.name}
            .configType=${"button_action"}
            @value-changed=${t=>this._handleActionTypeChange(t,null==e?void 0:e.name,this.cardButton)}
          ></ha-selector>
        </div>
      `);return pt`${e}`}render(){const t=this.button.button_action||{},e=pt` <div class="select-action">
      <div class="action-label">Entity to interact with</div>

      <ha-entity-picker
        .hass=${this.hass}
        .value=${t.entity||""}
        .label=${"Entity to interact with"}
        .configValue=${"entity"}
        .configBtnType=${"button_action"}
        @value-changed=${t=>this._handleActionTypeChange(t,"entity",this.cardButton)}
      ></ha-entity-picker>
    </div>`,i=pt`${void 0===this.button.button_type||"default"===this.button.button_type?pt`<ha-alert
          alert-type="info"
          dismissable
          @alert-dismissed-clicked=${t=>this._handlerAlert(t)}
          >${"You are using `default` button type, select `action` to use Tap Action features"}</ha-alert
        >`:gt}`,n=this._renderActionSelectors();return pt` ${i}${e} ${n} `}_handlerAlert(t){t.target.style.display="none"}_handleActionTypeChange(t,e,i){var n;t.stopPropagation();const o=null!==(n=t.detail.value)&&void 0!==n?n:t.target.value;this._selectedAction=o,this._customButtonAction(e,o,i)}_customButtonAction(t,e,i){if(!this.config)return;const n={};if(this.config.added_cards&&this.config.added_cards[i]){const o=Object.assign({},this.config.added_cards[i].button||{}),a=Object.assign({},o.button_action||{});a[t]=e,o.button_action=a,n.added_cards=Object.assign(Object.assign({},this.config.added_cards),{[i]:Object.assign(Object.assign({},this.config.added_cards[i]),{button:o})})}else{const o=Object.assign({},this.config[i]||{}),a=Object.assign({},o.button_action||{});a[t]=e,o.button_action=a,n[i]=o}Object.keys(n).length>0&&(this.config=Object.assign(Object.assign({},this.config),n),v(this,"config-changed",{config:this.config}))}};t([jt({attribute:!1})],ul.prototype,"hass",void 0),t([jt({type:Object})],ul.prototype,"config",void 0),t([Rt()],ul.prototype,"button",void 0),t([Rt()],ul.prototype,"card",void 0),t([jt({type:Boolean})],ul.prototype,"isButtonPreview",void 0),t([Rt()],ul.prototype,"_selectedAction",void 0),ul=t([It("custom-button-action")],ul);const pl=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o};let ml=class extends Lt{constructor(){super(...arguments),this.configDefault={}}static get styles(){return[dl]}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t)}render(){return this.hass?pt`
      <div class="card-config">
        <ha-yaml-editor
          .hass=${this.hass}
          .defaultValue=${this.configDefault}
          .copyClipboard=${!0}
          @value-changed=${this._onChange}
        ></ha-yaml-editor>
      </div>
    `:gt}_onChange(t){t.stopPropagation();const{isValid:e,value:i}=t.detail;let n=Object.assign({},this.editor._config);n&&e&&(i.button.enabled=this.isDefaultCard?i.button.enabled:i.button.enabled=!0,n=this.isDefaultCard?Object.assign(Object.assign({},n),{[this.configType]:i}):Object.assign(Object.assign({},n),{added_cards:Object.assign(Object.assign({},n.added_cards),{[this.configType]:Object.assign(Object.assign({},n.added_cards[this.configType]),{button:i})})}),pl(this,"config-changed",{config:n}))}};t([jt({attribute:!1})],ml.prototype,"hass",void 0),t([jt({attribute:!1})],ml.prototype,"editor",void 0),t([jt({attribute:!1})],ml.prototype,"configDefault",void 0),t([Rt()],ml.prototype,"isDefaultCard",void 0),t([Rt()],ml.prototype,"configType",void 0),ml=t([It("custom-yaml-editor")],ml);const gl=["more-info","toggle","navigate","perform-action","assist"],fl=["default","action"],vl=Dn(t=>[{name:"",type:"grid",schema:[{name:"hide",label:"hideButton",selector:{boolean:{}}},Object.assign({},t&&{name:"enabled",label:"useCustomButton",selector:{boolean:{}}})]}]),_l=Dn(t=>[{name:"",type:"grid",schema:[{name:"button_type",label:"Button Type",required:!0,default:"default",selector:{select:{mode:"dropdown",options:fl.map(t=>({value:t,label:t.charAt(0).toUpperCase()+t.slice(1)}))}}},{name:"primary",label:"Button Title",type:"string"},{name:"icon",label:"Icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"state_color",label:"State Color",type:"boolean",default:!1,disabled:!t,helper:"Set to true to have icon colored when entity is active, or to show entity picture instead of icon. (secondary entity required)"}]}]),bl=Dn(t=>[{name:"",type:"expandable",title:"Secondary content",schema:[{name:"",type:"grid",schema:[{name:"entity",selector:{entity:{}}},{name:"attribute",label:"Attribute",selector:{attribute:{entity_id:t}}}]},{name:"secondary",label:"secondaryInfo",helper:"secondaryInfoHelper",selector:{template:{}}}]}]),yl=[{name:"",type:"expandable",title:"Extra templates",schema:[{name:"",type:"expandable",title:"Icon Customize",schema:[{name:"icon_template",label:"iconInfo",helper:"iconInfoHelper",selector:{template:{}}},{name:"color_template",label:"colorInfo",helper:"colorInfoHelper",selector:{template:{}}},{name:"picture_template",label:"pictureInfo",helper:"pictureInfoHelper",selector:{template:{}}}]},{name:"",type:"expandable",title:"Notification Settings",schema:[{name:"notify",label:"notifyInfo",helper:"notifyInfoHelper",selector:{template:{}}},{name:"notify_color",label:"Badge color template",helper:"Use Jinja2 template to set the badge color",selector:{template:{}}},{name:"notify_icon",label:"Badge icon template",helper:"Template with result in `mdi:` format to set the badge icon",selector:{template:{}}}]}]}],wl=[{name:"button_action",type:"expandable",title:"Button Interaction",schema:[{name:"entity",selector:{entity:{}}},{name:"",type:"optional_actions",flatten:!0,schema:[{name:"tap_action",label:"Tap Action",selector:{ui_action:{actions:gl,default_action:"none"}}},{name:"double_tap_action",label:"Double Tap Action",selector:{ui_action:{actions:gl,default_action:"none"}}},{name:"hold_action",label:"Hold Action",selector:{ui_action:{actions:gl,default_action:"none"}}}]}]}],xl=["tap_action","double_tap_action","hold_action","button_type","primary","icon","attribute","state_color","notify_icon","notify_color"];let Cl=class extends Lt{constructor(){super(...arguments),this.isButtonPreview=!1,this._yamlMode=!1,this.localizeKey=t=>this.editor.localize(`editor.buttonConfig.${t}`),this._computeLabel=t=>"entity"===t.name?"":xl.includes(t.name)?t.label:this.localizeKey(`${t.label}`)||t.label||"",this._computeHelper=t=>void 0!==t.helper?["notify_icon","notify_color","state_color"].includes(t.name)?t.helper:this.localizeKey(`${t.helper}`)||"":"",this._handleValueChanged=t=>{t.stopPropagation();let e=t.detail.value;["isDefaultCard","useCustomButton","isHidden"].forEach(t=>{delete e[t]}),e.enabled=this.button.isDefaultCard?e.enabled:e.enabled=!0,this._dispatchConfig(e)}}static get styles(){return[A`
        *[hidden] {
          display: none;
        }
      `,dl]}get cardButton(){return this.card.button}_editorHeader(){const t=this.localizeKey,e=this.editor._btnPreview?t("hidePreview"):t("preview"),i=this._yamlMode?"Hide YAML":"Show YAML";return pt`
      <div class="card-button-cfg ha-button">
        <ha-button
          .outlined=${!0}
          .label=${t("showButton")}
          ?hidden=${this.button.isHidden}
          @click=${()=>this.editor._toggleShowButton(this.card)}
        ></ha-button>
        <ha-button
          .outlined=${!0}
          @click=${()=>this.editor._toggleBtnPreview(this.cardButton)}
          .label=${e}
        >
        </ha-button>
        <ha-button .outlined=${!0} @click=${()=>this._yamlMode=!this._yamlMode} .label=${i}>
        </ha-button>
      </div>
    `}_generateButtonFormSchema(){var t,e;const i=Object.assign({},this.button),n=[...vl(i.isDefaultCard),..._l(null!==(t=i.entity)&&void 0!==t?t:""),...bl(null!==(e=i.entity)&&void 0!==e?e:""),...yl,...wl];return pt`
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${n}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._handleValueChanged}
      ></ha-form>
    `}_renderYamlEditor(){if(!this._yamlMode)return pt``;const t=this.button.isDefaultCard,e=t?this.editor._config[this.cardButton]:this.editor._config.added_cards[this.cardButton].button;return pt`
      <custom-yaml-editor
        .hass=${this.hass}
        .editor=${this.editor}
        .configDefault=${e}
        .isDefaultCard=${t}
        .configType=${this.cardButton}
      ></custom-yaml-editor>
    `}render(){if(!(this.hass&&this.editor&&this.button&&this.card))return pt``;const t=this._editorHeader(),e=this._generateButtonFormSchema(),i=this._renderYamlEditor();return pt`${t}${this._yamlMode?i:e}`}_dispatchConfig(t){this.button=Object.assign(Object.assign({},this.button),t);const e={detail:{value:Object.assign({},t),configBtnType:this.cardButton},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("custom-button-changed",e)),this.requestUpdate()}};function Sl(t){if(!t||"object"!=typeof t)return t;if("[object Date]"==Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(Sl);var e={};return Object.keys(t).forEach(function(i){e[i]=Sl(t[i])}),e}t([jt({attribute:!1})],Cl.prototype,"hass",void 0),t([jt({type:Object})],Cl.prototype,"editor",void 0),t([jt({attribute:!1})],Cl.prototype,"button",void 0),t([jt({attribute:!1})],Cl.prototype,"card",void 0),t([jt({type:Boolean})],Cl.prototype,"isButtonPreview",void 0),t([Rt()],Cl.prototype,"_yamlMode",void 0),Cl=t([It("custom-button-template")],Cl);let Tl=class extends Lt{constructor(){super(...arguments),this.isCardPreview=!1,this.isCustomCard=!1,this.isAddedCard=!1,this.cards=[],this._selectedCard=0,this._GUImode=!0,this._guiModeAvailable=!0,this._initialized=!1,this.localizeKey=t=>this.editor.localize(`editor.buttonConfig.${t}`)}static get styles(){return[dl,A`
        .toolbar {
          display: flex;
        }

        #card-options {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        #editor-container {
          padding-inline: 4px;
          margin-top: 1rem;
        }

        #card-picker {
          display: block;
          max-height: 600px;
          overflow-x: hidden;
        }

        .gui-mode-button {
          margin-right: auto;
          margin-inline-end: auto;
          margin-inline-start: initial;
        }
      `]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){var t,e;super.disconnectedCallback(),null===(t=this._cardEditorEl)||void 0===t||t.removeEventListener("config-changed",this._handleConfigChanged),null===(e=this._cardEditorEl)||void 0===e||e.removeEventListener("GUImode-changed",this._handleGUIModeChanged)}focusYamlEditor(){var t;null===(t=this._cardEditorEl)||void 0===t||t.focusYamlEditor()}async firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t)}_renderCardHeader(){const t=this.localizeKey;return pt` <div class="sub-card-header">
      <ha-formfield style="${this.isAddedCard?"display: none;":""}" .label=${t("useCustomCard")}>
        <ha-checkbox
          .checked=${this.isCustomCard}
          .disabled=${this.isAddedCard}
          @change=${t=>this._handleUseCustomCard(t)}
        ></ha-checkbox>
      </ha-formfield>
      <ha-button
        style="display: inline-block; float: inline-end;"
        @click=${t=>this._dispatchEvent(t,"toggle_preview_card")}
      >
        ${this.isCardPreview?t("hidePreview"):t("preview")}
      </ha-button>
    </div>`}render(){if(!(this.editor&&this._config&&this.cardType&&this.hass))return pt``;this.cards=this.isAddedCard?this._config.added_cards[this.cardType.config].cards||[]:this._config[this.cardType.config]||[];const t=this._selectedCard,e=this.cards.length,i=!this._cardEditorEl||this._GUImode,n=this._renderCardHeader(),o=pt`
      <div class="toolbar">
        <nvn-tab-bar>
          ${this.cards.map((e,i)=>pt`<nvn-tab
                ?active=${t===i}
                .name=${i+1}
                @click=${()=>this._selectedCard=i}
                style="flex: 0 !important;"
              ></nvn-tab>`)}
        </nvn-tab-bar>
        <nvn-tab id="add-card" ?active=${t===e} @click=${this._handleAddCard} .narrow=${!0}>
          <ha-svg-icon .path="${p}" slot="icon"></ha-svg-icon>
        </nvn-tab>
      </div>
    `;return pt`
      <div class="card-config">
        ${n} ${o}
        <div id="editor-container">
          ${t<e?pt`
                <div id="card-options">
                  <ha-icon-button
                    class="gui-mode-button"
                    @click=${this._toggleMode}
                    .disabled=${!this._guiModeAvailable}
                    .path=${i?s:u}
                  ></ha-icon-button>
                  <ha-icon-button-arrow-prev
                    .disabled=${0===t}
                    .label=${"Move before"}
                    @click=${this._handleMove}
                    .move=${-1}
                  ></ha-icon-button-arrow-prev>

                  <ha-icon-button-arrow-next
                    .label=${"Move after"}
                    .disabled=${t===e-1}
                    @click=${this._handleMove}
                    .move=${1}
                  ></ha-icon-button-arrow-next>
                  <ha-icon-button
                    .label=${"Copy"}
                    .path=${l}
                    @click=${this._handleCopyCard}
                  ></ha-icon-button>

                  <ha-icon-button .label=${"Cut"} .path=${c} @click=${this._handleCutCard}></ha-icon-button>
                  <ha-icon-button
                    .label=${"Delete"}
                    .path=${d}
                    @click=${this._handleDeleteCard}
                  ></ha-icon-button>
                </div>
                <hui-card-element-editor
                  .hass=${this.hass}
                  .value=${this.cards[t]}
                  .lovelace=${this.lovelace}
                  @config-changed=${this._handleConfigChanged}
                  @GUImode-changed=${this._handleGUIModeChanged}
                ></hui-card-element-editor>
              `:pt`
                <div id="card-picker">
                  <hui-card-picker
                    .hass=${this.hass}
                    .lovelace=${this.lovelace}
                    ._clipboard=${this._clipboard}
                    ._height=${500}
                    @config-changed=${this._handleCardPicked}
                  >
                  </hui-card-picker>
                </div>
              `}
        </div>
      </div>
    `}_toggleMode(){var t;null===(t=this._cardEditorEl)||void 0===t||t.toggleMode()}_handleUseCustomCard(t){if(t.stopPropagation(),!this._config)return;const e=t.target,i=this.cardType.config,n="use_custom_cards",o=Object.assign(Object.assign({},this._config),{[n]:Object.assign(Object.assign({},this._config[n]),{[i]:e.checked})});pl(this,"config-changed",{config:o})}_handleSelectedCard(t){t.stopPropagation(),"add-card"!==t.target.id?(this._setMode(!0),this._guiModeAvailable=!0,this._selectedCard=parseInt(t.detail.selected,10)):this._selectedCard=this.cards.length}_handleAddCard(t){t.stopImmediatePropagation(),this._selectedCard=this.cards.length,this._setMode(!0),this._guiModeAvailable=!0}_setMode(t){this._GUImode=t,this._cardEditorEl&&(this._cardEditorEl.GUImode=t)}_handleGUIModeChanged(t){t.stopPropagation(),this._GUImode=t.detail.guiMode,this._guiModeAvailable=t.detail.guiModeAvailable}_handleConfigChanged(t){if(t.stopPropagation(),!this._initialized)return void(this._initialized=!0);if(!this._config)return;const e=this.cardType.config,i=[...this.cards];i[this._selectedCard]=t.detail.config;const n=i;this._config.card_preview&&this.isCardPreview&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:n})),this.isAddedCard?this._handleAddedCard(n):this._config=Object.assign(Object.assign({},this._config),{[e]:n}),this._guiModeAvailable=t.detail.guiModeAvailable,pl(this,"config-changed",{config:this._config})}_handleCardPicked(t){if(t.stopPropagation(),!this._config)return;const e=t.detail.config,i=[...this.cards||[],e];this._config.card_preview&&this.isCardPreview&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:i})),this.isAddedCard?this._handleAddedCard(i):this._config=Object.assign(Object.assign({},this._config),{[this.cardType.config]:i}),pl(this,"config-changed",{config:this._config})}_handleMove(t){if(!this._config)return;const e=t.currentTarget.move,i=this._selectedCard+e,n=[...this.cards||[]],o=n.splice(this._selectedCard,1)[0];n.splice(i,0,o),this._config.card_preview&&this.isCardPreview&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:n})),this.isAddedCard?this._handleAddedCard(n):this._config=Object.assign(Object.assign({},this._config),{[this.cardType.config]:n}),this._selectedCard=i,pl(this,"config-changed",{config:this._config})}_handleDeleteCard(t){if(t.stopPropagation(),!this._config)return;const e=[...this.cards];e.splice(this._selectedCard,1),this._config.card_preview&&this.isCardPreview&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:e})),this.isAddedCard?this._handleAddedCard(e):this._config=Object.assign(Object.assign({},this._config),{[this.cardType.config]:e}),this._selectedCard=Math.max(0,this._selectedCard-1),pl(this,"config-changed",{config:this._config})}_handleCopyCard(t){if(t.stopPropagation(),!this._config)return;const e=Sl(this.cards[this._selectedCard]);this._clipboard=e}_handleCutCard(t){t.stopPropagation(),this._config&&(this._handleCopyCard(t),this._handleDeleteCard(t))}_handleAddedCard(t){this._config&&(this._config=Object.assign(Object.assign({},this._config),{added_cards:Object.assign(Object.assign({},this._config.added_cards),{[this.cardType.config]:Object.assign(Object.assign({},this._config.added_cards[this.cardType.config]),{cards:t})})}))}_dispatchEvent(t,e){t.stopPropagation();const i={detail:{type:e,config:this.cardType.config,card:this.cardType},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("custom-card-editor-changed",i))}};function kl(t,e,{signal:i,edges:n}={}){let o,a=null;const r=null!=n&&n.includes("leading"),s=null==n||n.includes("trailing"),l=()=>{null!==a&&(t.apply(o,a),o=void 0,a=null)};let c=null;const d=()=>{null!=c&&clearTimeout(c),c=setTimeout(()=>{c=null,s&&l(),h()},e)},h=()=>{null!==c&&(clearTimeout(c),c=null),o=void 0,a=null},u=function(...t){if(i?.aborted)return;o=this,a=t;const e=null==c;d(),r&&e&&l()};return u.schedule=d,u.cancel=h,u.flush=()=>{l()},i?.addEventListener("abort",h,{once:!0}),u}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */t([jt({attribute:!1})],Tl.prototype,"hass",void 0),t([jt({attribute:!1})],Tl.prototype,"lovelace",void 0),t([jt({type:Object})],Tl.prototype,"editor",void 0),t([jt({type:Object})],Tl.prototype,"_config",void 0),t([jt({type:Object})],Tl.prototype,"cardType",void 0),t([jt({type:Boolean})],Tl.prototype,"isCardPreview",void 0),t([jt({type:Boolean})],Tl.prototype,"isCustomCard",void 0),t([jt({type:Boolean})],Tl.prototype,"isAddedCard",void 0),t([Rt()],Tl.prototype,"cards",void 0),t([Rt()],Tl.prototype,"_selectedCard",void 0),t([Rt()],Tl.prototype,"_GUImode",void 0),t([Rt()],Tl.prototype,"_guiModeAvailable",void 0),t([Rt()],Tl.prototype,"_initialized",void 0),t([Ht("hui-card-element-editor")],Tl.prototype,"_cardEditorEl",void 0),Tl=t([It("custom-card-ui-editor")],Tl);const{I:Al}=Mt,El=()=>document.createComment(""),Ml=(t,e,i)=>{const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(El(),o),a=n.insertBefore(El(),o);i=new Al(e,a,t,t.options)}else{const e=i._$AB.nextSibling,a=i._$AM,r=a!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,o),t=e}}}return i},Pl=(t,e,i=t)=>(t._$AI(e,i),t),$l={},Ol=(t,e=$l)=>t._$AH=e,Ll=t=>t._$AH,zl=t=>{t._$AR(),t._$AA.remove()},Il=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Dl=Vt(class extends Ft{constructor(t){if(super(t),t.type!==Zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],a=[];let r=0;for(const e of t)o[r]=n?n(e,r):r,a[r]=i(e,r),r++;return{values:a,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const o=Ll(t),{values:a,keys:r}=this.dt(e,i,n);if(!Array.isArray(o))return this.ut=r,a;const s=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=a.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(s[h]===r[p])l[p]=Pl(o[h],a[p]),h++,p++;else if(s[u]===r[m])l[m]=Pl(o[u],a[m]),u--,m--;else if(s[h]===r[m])l[m]=Pl(o[h],a[m]),Ml(t,l[m+1],o[h]),h++,m--;else if(s[u]===r[p])l[p]=Pl(o[u],a[p]),Ml(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=Il(r,p,m),d=Il(s,h,u)),c.has(s[h]))if(c.has(s[u])){const e=d.get(r[p]),i=void 0!==e?o[e]:null;if(null===i){const e=Ml(t,o[h]);Pl(e,a[p]),l[p]=e}else l[p]=Pl(i,a[p]),Ml(t,o[h],i),o[e]=null;p++}else zl(o[u]),u--;else zl(o[h]),h++;for(;p<=m;){const e=Ml(t,l[m+1]);Pl(e,a[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&zl(t)}return this.ut=r,Ol(t,l),mt}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Bl(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function jl(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Bl(Object(i),!0).forEach(function(e){Nl(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Bl(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Rl(t){return Rl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rl(t)}function Nl(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Hl(){return Hl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Hl.apply(this,arguments)}function Zl(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}function Vl(t,e){if(null==t)return{};var i,n,o=Zl(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var Fl="1.15.6";function Ul(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Gl=Ul(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Wl=Ul(/Edge/i),ql=Ul(/firefox/i),Yl=Ul(/safari/i)&&!Ul(/chrome/i)&&!Ul(/android/i),Kl=Ul(/iP(ad|od|hone)/i),Xl=Ul(/chrome/i)&&Ul(/android/i),Ql={capture:!1,passive:!1};function Jl(t,e,i){t.addEventListener(e,i,!Gl&&Ql)}function tc(t,e,i){t.removeEventListener(e,i,!Gl&&Ql)}function ec(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function ic(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function nc(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&ec(t,e):ec(t,e))||n&&t===i)return t;if(t===i)break}while(t=ic(t))}return null}var oc,ac=/\s+/g;function rc(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(ac," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(ac," ")}}function sc(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function lc(t,e){var i="";if("string"==typeof t)i=t;else do{var n=sc(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function cc(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,a=n.length;if(i)for(;o<a;o++)i(n[o],o);return n}return[]}function dc(){var t=document.scrollingElement;return t||document.documentElement}function hc(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var a,r,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==dc()?(r=(a=t.getBoundingClientRect()).top,s=a.left,l=a.bottom,c=a.right,d=a.height,h=a.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Gl))do{if(o&&o.getBoundingClientRect&&("none"!==sc(o,"transform")||i&&"static"!==sc(o,"position"))){var u=o.getBoundingClientRect();r-=u.top+parseInt(sc(o,"border-top-width")),s-=u.left+parseInt(sc(o,"border-left-width")),l=r+a.height,c=s+a.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=lc(o||t),m=p&&p.a,g=p&&p.d;p&&(l=(r/=g)+(d/=g),c=(s/=m)+(h/=m))}return{top:r,left:s,bottom:l,right:c,width:h,height:d}}}function uc(t,e,i){for(var n=_c(t,!0),o=hc(t)[e];n;){if(!(o>=hc(n)[i]))return n;if(n===dc())break;n=_c(n,!1)}return!1}function pc(t,e,i,n){for(var o=0,a=0,r=t.children;a<r.length;){if("none"!==r[a].style.display&&r[a]!==Md.ghost&&(n||r[a]!==Md.dragged)&&nc(r[a],i.draggable,t,!1)){if(o===e)return r[a];o++}a++}return null}function mc(t,e){for(var i=t.lastElementChild;i&&(i===Md.ghost||"none"===sc(i,"display")||e&&!ec(i,e));)i=i.previousElementSibling;return i||null}function gc(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Md.clone||e&&!ec(t,e)||i++;return i}function fc(t){var e=0,i=0,n=dc();if(t)do{var o=lc(t),a=o.a,r=o.d;e+=t.scrollLeft*a,i+=t.scrollTop*r}while(t!==n&&(t=t.parentNode));return[e,i]}function vc(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}function _c(t,e){if(!t||!t.getBoundingClientRect)return dc();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=sc(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return dc();if(n||e)return i;n=!0}}}while(i=i.parentNode);return dc()}function bc(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function yc(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function wc(t,e){return function(){if(!oc){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),oc=setTimeout(function(){oc=void 0},e)}}}function xc(){clearTimeout(oc),oc=void 0}function Cc(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Sc(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function Tc(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var a,r,s,l;if(nc(o,e.draggable,t,!1)&&!o.animated&&o!==i){var c=hc(o);n.left=Math.min(null!==(a=n.left)&&void 0!==a?a:1/0,c.left),n.top=Math.min(null!==(r=n.top)&&void 0!==r?r:1/0,c.top),n.right=Math.max(null!==(s=n.right)&&void 0!==s?s:-1/0,c.right),n.bottom=Math.max(null!==(l=n.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var kc="Sortable"+(new Date).getTime();function Ac(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(t){if("none"!==sc(t,"display")&&t!==Md.ghost){e.push({target:t,rect:hc(t)});var i=jl({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=lc(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}})},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(vc(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,a=0;e.forEach(function(t){var e=0,i=t.target,r=i.fromRect,s=hc(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=lc(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&yc(l,s)&&!yc(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(e=Mc(d,l,c,n.options)),yc(s,r)||(i.prevFromRect=r,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,a=Math.max(a,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},e),i.thisAnimationDuration=e)}),clearTimeout(t),o?t=setTimeout(function(){"function"==typeof i&&i()},a):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){sc(t,"transition",""),sc(t,"transform","");var o=lc(this.el),a=o&&o.a,r=o&&o.d,s=(e.left-i.left)/(a||1),l=(e.top-i.top)/(r||1);t.animatingX=!!s,t.animatingY=!!l,sc(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=Ec(t),sc(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),sc(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){sc(t,"transition",""),sc(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},n)}}}}function Ec(t){return t.offsetWidth}function Mc(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}var Pc=[],$c={initializeByDefault:!0},Oc={mount:function(t){for(var e in $c)$c.hasOwnProperty(e)&&!(e in t)&&(t[e]=$c[e]);Pc.forEach(function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Pc.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Pc.forEach(function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](jl({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](jl({sortable:e},i)))})},initializePlugins:function(t,e,i,n){for(var o in Pc.forEach(function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var a=new n(t,e,t.options);a.sortable=t,a.options=t.options,t[o]=a,Hl(i,a.defaults)}}),t.options)if(t.options.hasOwnProperty(o)){var a=this.modifyOption(t,o,t.options[o]);void 0!==a&&(t.options[o]=a)}},getEventProperties:function(t,e){var i={};return Pc.forEach(function(n){"function"==typeof n.eventProperties&&Hl(i,n.eventProperties.call(e[n.pluginName],t))}),i},modifyOption:function(t,e,i){var n;return Pc.forEach(function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))}),n}};function Lc(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,a=t.cloneEl,r=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,m=t.extraEventProperties;if(e=e||i&&i[kc]){var g,f=e.options,v="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Gl||Wl?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=r||i,g.from=s||i,g.item=o||i,g.clone=a,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var _=jl(jl({},m),Oc.getEventProperties(n,e));for(var b in _)g[b]=_[b];i&&i.dispatchEvent(g),f[v]&&f[v].call(e,g)}}var zc=["evt"],Ic=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=Vl(i,zc);Oc.pluginEvent.bind(Md)(t,e,jl({dragEl:Bc,parentEl:jc,ghostEl:Rc,rootEl:Nc,nextEl:Hc,lastDownEl:Zc,cloneEl:Vc,cloneHidden:Fc,dragStarted:nd,putSortable:Kc,activeSortable:Md.active,originalEvent:n,oldIndex:Uc,oldDraggableIndex:Wc,newIndex:Gc,newDraggableIndex:qc,hideGhostForTarget:Td,unhideGhostForTarget:kd,cloneNowHidden:function(){Fc=!0},cloneNowShown:function(){Fc=!1},dispatchSortableEvent:function(t){Dc({sortable:e,name:t,originalEvent:n})}},o))};function Dc(t){Lc(jl({putSortable:Kc,cloneEl:Vc,targetEl:Bc,rootEl:Nc,oldIndex:Uc,oldDraggableIndex:Wc,newIndex:Gc,newDraggableIndex:qc},t))}var Bc,jc,Rc,Nc,Hc,Zc,Vc,Fc,Uc,Gc,Wc,qc,Yc,Kc,Xc,Qc,Jc,td,ed,id,nd,od,ad,rd,sd,ld=!1,cd=!1,dd=[],hd=!1,ud=!1,pd=[],md=!1,gd=[],fd="undefined"!=typeof document,vd=Kl,_d=Wl||Gl?"cssFloat":"float",bd=fd&&!Xl&&!Kl&&"draggable"in document.createElement("div"),yd=function(){if(fd){if(Gl)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),wd=function(t,e){var i=sc(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=pc(t,0,e),a=pc(t,1,e),r=o&&sc(o),s=a&&sc(a),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+hc(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+hc(a).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!a||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=n&&"none"===i[_d]||a&&"none"===i[_d]&&l+c>n)?"vertical":"horizontal"},xd=function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,a=i?t.width:t.height,r=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===r||o===s||n+a/2===r+l/2},Cd=function(t,e){var i;return dd.some(function(n){var o=n[kc].options.emptyInsertThreshold;if(o&&!mc(n)){var a=hc(n),r=t>=a.left-o&&t<=a.right+o,s=e>=a.top-o&&e<=a.bottom+o;return r&&s?i=n:void 0}}),i},Sd=function(t){function e(t,i){return function(n,o,a,r){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,a,r),i)(n,o,a,r);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Rl(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},Td=function(){!yd&&Rc&&sc(Rc,"display","none")},kd=function(){!yd&&Rc&&sc(Rc,"display","")};fd&&!Xl&&document.addEventListener("click",function(t){if(cd)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),cd=!1,!1},!0);var Ad=function(t){if(Bc){t=t.touches?t.touches[0]:t;var e=Cd(t.clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[kc]._onDragOver(i)}}},Ed=function(t){Bc&&Bc.parentNode[kc]._isOutsideThisEl(t.target)};function Md(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Hl({},e),t[kc]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return wd(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Md.supportPointer&&"PointerEvent"in window&&(!Yl||Kl),emptyInsertThreshold:5};for(var n in Oc.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in Sd(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&bd,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Jl(t,"pointerdown",this._onTapStart):(Jl(t,"mousedown",this._onTapStart),Jl(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Jl(t,"dragover",this),Jl(t,"dragenter",this)),dd.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Hl(this,Ac())}function Pd(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function $d(t,e,i,n,o,a,r,s){var l,c,d=t[kc],h=d.options.onMove;return!window.CustomEvent||Gl||Wl?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=a||hc(e),l.willInsertAfter=s,l.originalEvent=r,t.dispatchEvent(l),h&&(c=h.call(d,l,r)),c}function Od(t){t.draggable=!1}function Ld(){md=!1}function zd(t,e,i){var n=hc(pc(i.el,0,i.options,!0)),o=Tc(i.el,i.options,Rc);return e?t.clientX<o.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-10||t.clientY<n.bottom&&t.clientX<n.left}function Id(t,e,i){var n=hc(mc(i.el,i.options.draggable)),o=Tc(i.el,i.options,Rc);return e?t.clientX>o.right+10||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+10||t.clientX>n.right&&t.clientY>n.top}function Dd(t,e,i,n,o,a,r,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!r)if(s&&rd<c*o){if(!hd&&(1===ad?l>d+c*a/2:l<h-c*a/2)&&(hd=!0),hd)u=!0;else if(1===ad?l<d+rd:l>h-rd)return-ad}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return Bd(e);return(u=u||r)&&(l<d+c*a/2||l>h-c*a/2)?l>d+c/2?1:-1:0}function Bd(t){return gc(Bc)<gc(t)?1:-1}function jd(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function Rd(t){gd.length=0;for(var e=t.getElementsByTagName("input"),i=e.length;i--;){var n=e[i];n.checked&&gd.push(n)}}function Nd(t){return setTimeout(t,0)}function Hd(t){return clearTimeout(t)}Md.prototype={constructor:Md,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(od=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Bc):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,a=t.type,r=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(r||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(Rd(i),!Bc&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Yl||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=nc(s,n.draggable,i,!1))&&s.animated||Zc===s)){if(Uc=gc(s),Wc=gc(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return Dc({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Ic("filter",e,{evt:t}),void(o&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(n){if(n=nc(l,n.trim(),i,!1))return Dc({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),Ic("filter",e,{evt:t}),!0})))return void(o&&t.preventDefault());n.handle&&!nc(l,n.handle,i,!1)||this._prepareDragStart(t,r,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,a=o.el,r=o.options,s=a.ownerDocument;if(i&&!Bc&&i.parentNode===a){var l=hc(i);if(Nc=a,jc=(Bc=i).parentNode,Hc=Bc.nextSibling,Zc=i,Yc=r.group,Md.dragged=Bc,Xc={target:Bc,clientX:(e||t).clientX,clientY:(e||t).clientY},ed=Xc.clientX-l.left,id=Xc.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Bc.style["will-change"]="all",n=function(){Ic("delayEnded",o,{evt:t}),Md.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!ql&&o.nativeDraggable&&(Bc.draggable=!0),o._triggerDragStart(t,e),Dc({sortable:o,name:"choose",originalEvent:t}),rc(Bc,r.chosenClass,!0))},r.ignore.split(",").forEach(function(t){cc(Bc,t.trim(),Od)}),Jl(s,"dragover",Ad),Jl(s,"mousemove",Ad),Jl(s,"touchmove",Ad),r.supportPointer?(Jl(s,"pointerup",o._onDrop),!this.nativeDraggable&&Jl(s,"pointercancel",o._onDrop)):(Jl(s,"mouseup",o._onDrop),Jl(s,"touchend",o._onDrop),Jl(s,"touchcancel",o._onDrop)),ql&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Bc.draggable=!0),Ic("delayStart",this,{evt:t}),!r.delay||r.delayOnTouchOnly&&!e||this.nativeDraggable&&(Wl||Gl))n();else{if(Md.eventCanceled)return void this._onDrop();r.supportPointer?(Jl(s,"pointerup",o._disableDelayedDrag),Jl(s,"pointercancel",o._disableDelayedDrag)):(Jl(s,"mouseup",o._disableDelayedDrag),Jl(s,"touchend",o._disableDelayedDrag),Jl(s,"touchcancel",o._disableDelayedDrag)),Jl(s,"mousemove",o._delayedDragTouchMoveHandler),Jl(s,"touchmove",o._delayedDragTouchMoveHandler),r.supportPointer&&Jl(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,r.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Bc&&Od(Bc),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;tc(t,"mouseup",this._disableDelayedDrag),tc(t,"touchend",this._disableDelayedDrag),tc(t,"touchcancel",this._disableDelayedDrag),tc(t,"pointerup",this._disableDelayedDrag),tc(t,"pointercancel",this._disableDelayedDrag),tc(t,"mousemove",this._delayedDragTouchMoveHandler),tc(t,"touchmove",this._delayedDragTouchMoveHandler),tc(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Jl(document,"pointermove",this._onTouchMove):Jl(document,e?"touchmove":"mousemove",this._onTouchMove):(Jl(Bc,"dragend",this),Jl(Nc,"dragstart",this._onDragStart));try{document.selection?Nd(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(ld=!1,Nc&&Bc){Ic("dragStarted",this,{evt:e}),this.nativeDraggable&&Jl(document,"dragover",Ed);var i=this.options;!t&&rc(Bc,i.dragClass,!1),rc(Bc,i.ghostClass,!0),Md.active=this,t&&this._appendGhost(),Dc({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Qc){this._lastX=Qc.clientX,this._lastY=Qc.clientY,Td();for(var t=document.elementFromPoint(Qc.clientX,Qc.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Qc.clientX,Qc.clientY))!==e;)e=t;if(Bc.parentNode[kc]._isOutsideThisEl(t),e)do{if(e[kc]){if(e[kc]._onDragOver({clientX:Qc.clientX,clientY:Qc.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=ic(e));kd()}},_onTouchMove:function(t){if(Xc){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,a=Rc&&lc(Rc,!0),r=Rc&&a&&a.a,s=Rc&&a&&a.d,l=vd&&sd&&fc(sd),c=(o.clientX-Xc.clientX+n.x)/(r||1)+(l?l[0]-pd[0]:0)/(r||1),d=(o.clientY-Xc.clientY+n.y)/(s||1)+(l?l[1]-pd[1]:0)/(s||1);if(!Md.active&&!ld){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Rc){a?(a.e+=c-(Jc||0),a.f+=d-(td||0)):a={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");sc(Rc,"webkitTransform",h),sc(Rc,"mozTransform",h),sc(Rc,"msTransform",h),sc(Rc,"transform",h),Jc=c,td=d,Qc=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Rc){var t=this.options.fallbackOnBody?document.body:Nc,e=hc(Bc,!0,vd,!0,t),i=this.options;if(vd){for(sd=t;"static"===sc(sd,"position")&&"none"===sc(sd,"transform")&&sd!==document;)sd=sd.parentNode;sd!==document.body&&sd!==document.documentElement?(sd===document&&(sd=dc()),e.top+=sd.scrollTop,e.left+=sd.scrollLeft):sd=dc(),pd=fc(sd)}rc(Rc=Bc.cloneNode(!0),i.ghostClass,!1),rc(Rc,i.fallbackClass,!0),rc(Rc,i.dragClass,!0),sc(Rc,"transition",""),sc(Rc,"transform",""),sc(Rc,"box-sizing","border-box"),sc(Rc,"margin",0),sc(Rc,"top",e.top),sc(Rc,"left",e.left),sc(Rc,"width",e.width),sc(Rc,"height",e.height),sc(Rc,"opacity","0.8"),sc(Rc,"position",vd?"absolute":"fixed"),sc(Rc,"zIndex","100000"),sc(Rc,"pointerEvents","none"),Md.ghost=Rc,t.appendChild(Rc),sc(Rc,"transform-origin",ed/parseInt(Rc.style.width)*100+"% "+id/parseInt(Rc.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;Ic("dragStart",this,{evt:t}),Md.eventCanceled?this._onDrop():(Ic("setupClone",this),Md.eventCanceled||((Vc=Sc(Bc)).removeAttribute("id"),Vc.draggable=!1,Vc.style["will-change"]="",this._hideClone(),rc(Vc,this.options.chosenClass,!1),Md.clone=Vc),i.cloneId=Nd(function(){Ic("clone",i),Md.eventCanceled||(i.options.removeCloneOnHide||Nc.insertBefore(Vc,Bc),i._hideClone(),Dc({sortable:i,name:"clone"}))}),!e&&rc(Bc,o.dragClass,!0),e?(cd=!0,i._loopId=setInterval(i._emulateDragOver,50)):(tc(document,"mouseup",i._onDrop),tc(document,"touchend",i._onDrop),tc(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,Bc)),Jl(document,"drop",i),sc(Bc,"transform","translateZ(0)")),ld=!0,i._dragStartId=Nd(i._dragStarted.bind(i,e,t)),Jl(document,"selectstart",i),nd=!0,window.getSelection().removeAllRanges(),Yl&&sc(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,a=this.el,r=t.target,s=this.options,l=s.group,c=Md.active,d=Yc===l,h=s.sort,u=Kc||c,p=this,m=!1;if(!md){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),r=nc(r,s.draggable,a,!0),M("dragOver"),Md.eventCanceled)return m;if(Bc.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return $(!1);if(cd=!1,c&&!s.disabled&&(d?h||(n=jc!==Nc):Kc===this||(this.lastPutMode=Yc.checkPull(this,c,Bc,t))&&l.checkPut(this,c,Bc,t))){if(o="vertical"===this._getDirection(t,r),e=hc(Bc),M("dragOverValid"),Md.eventCanceled)return m;if(n)return jc=Nc,P(),this._hideClone(),M("revert"),Md.eventCanceled||(Hc?Nc.insertBefore(Bc,Hc):Nc.appendChild(Bc)),$(!0);var g=mc(a,s.draggable);if(!g||Id(t,o,this)&&!g.animated){if(g===Bc)return $(!1);if(g&&a===t.target&&(r=g),r&&(i=hc(r)),!1!==$d(Nc,a,Bc,e,r,i,t,!!r))return P(),g&&g.nextSibling?a.insertBefore(Bc,g.nextSibling):a.appendChild(Bc),jc=a,O(),$(!0)}else if(g&&zd(t,o,this)){var f=pc(a,0,s,!0);if(f===Bc)return $(!1);if(i=hc(r=f),!1!==$d(Nc,a,Bc,e,r,i,t,!1))return P(),a.insertBefore(Bc,f),jc=a,O(),$(!0)}else if(r.parentNode===a){i=hc(r);var v,_,b,y=Bc.parentNode!==a,w=!xd(Bc.animated&&Bc.toRect||e,r.animated&&r.toRect||i,o),x=o?"top":"left",C=uc(r,"top","top")||uc(Bc,"top","top"),S=C?C.scrollTop:void 0;if(od!==r&&(_=i[x],hd=!1,ud=!w&&s.invertSwap||y),0!==(v=Dd(t,r,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,ud,od===r))){var T=gc(Bc);do{T-=v,b=jc.children[T]}while(b&&("none"===sc(b,"display")||b===Rc))}if(0===v||b===r)return $(!1);od=r,ad=v;var k=r.nextElementSibling,A=!1,E=$d(Nc,a,Bc,e,r,i,t,A=1===v);if(!1!==E)return 1!==E&&-1!==E||(A=1===E),md=!0,setTimeout(Ld,30),P(),A&&!k?a.appendChild(Bc):r.parentNode.insertBefore(Bc,A?k:r),C&&Cc(C,0,S-C.scrollTop),jc=Bc.parentNode,void 0===_||ud||(rd=Math.abs(_-hc(r)[x])),O(),$(!0)}if(a.contains(Bc))return $(!1)}return!1}function M(s,l){Ic(s,p,jl({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:r,completed:$,onMove:function(i,n){return $d(Nc,a,Bc,e,i,hc(i),t,n)},changed:O},l))}function P(){M("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function $(e){return M("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(rc(Bc,Kc?Kc.options.ghostClass:c.options.ghostClass,!1),rc(Bc,s.ghostClass,!0)),Kc!==p&&p!==Md.active?Kc=p:p===Md.active&&Kc&&(Kc=null),u===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){M("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(r===Bc&&!Bc.animated||r===a&&!r.animated)&&(od=null),s.dragoverBubble||t.rootEl||r===document||(Bc.parentNode[kc]._isOutsideThisEl(t.target),!e&&Ad(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),m=!0}function O(){Gc=gc(Bc),qc=gc(Bc,s.draggable),Dc({sortable:p,name:"change",toEl:a,newIndex:Gc,newDraggableIndex:qc,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){tc(document,"mousemove",this._onTouchMove),tc(document,"touchmove",this._onTouchMove),tc(document,"pointermove",this._onTouchMove),tc(document,"dragover",Ad),tc(document,"mousemove",Ad),tc(document,"touchmove",Ad)},_offUpEvents:function(){var t=this.el.ownerDocument;tc(t,"mouseup",this._onDrop),tc(t,"touchend",this._onDrop),tc(t,"pointerup",this._onDrop),tc(t,"pointercancel",this._onDrop),tc(t,"touchcancel",this._onDrop),tc(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Gc=gc(Bc),qc=gc(Bc,i.draggable),Ic("drop",this,{evt:t}),jc=Bc&&Bc.parentNode,Gc=gc(Bc),qc=gc(Bc,i.draggable),Md.eventCanceled||(ld=!1,ud=!1,hd=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Hd(this.cloneId),Hd(this._dragStartId),this.nativeDraggable&&(tc(document,"drop",this),tc(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Yl&&sc(document.body,"user-select",""),sc(Bc,"transform",""),t&&(nd&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Rc&&Rc.parentNode&&Rc.parentNode.removeChild(Rc),(Nc===jc||Kc&&"clone"!==Kc.lastPutMode)&&Vc&&Vc.parentNode&&Vc.parentNode.removeChild(Vc),Bc&&(this.nativeDraggable&&tc(Bc,"dragend",this),Od(Bc),Bc.style["will-change"]="",nd&&!ld&&rc(Bc,Kc?Kc.options.ghostClass:this.options.ghostClass,!1),rc(Bc,this.options.chosenClass,!1),Dc({sortable:this,name:"unchoose",toEl:jc,newIndex:null,newDraggableIndex:null,originalEvent:t}),Nc!==jc?(Gc>=0&&(Dc({rootEl:jc,name:"add",toEl:jc,fromEl:Nc,originalEvent:t}),Dc({sortable:this,name:"remove",toEl:jc,originalEvent:t}),Dc({rootEl:jc,name:"sort",toEl:jc,fromEl:Nc,originalEvent:t}),Dc({sortable:this,name:"sort",toEl:jc,originalEvent:t})),Kc&&Kc.save()):Gc!==Uc&&Gc>=0&&(Dc({sortable:this,name:"update",toEl:jc,originalEvent:t}),Dc({sortable:this,name:"sort",toEl:jc,originalEvent:t})),Md.active&&(null!=Gc&&-1!==Gc||(Gc=Uc,qc=Wc),Dc({sortable:this,name:"end",toEl:jc,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Ic("nulling",this),Nc=Bc=jc=Rc=Hc=Vc=Zc=Fc=Xc=Qc=nd=Gc=qc=Uc=Wc=od=ad=Kc=Yc=Md.dragged=Md.ghost=Md.clone=Md.active=null,gd.forEach(function(t){t.checked=!0}),gd.length=Jc=td=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Bc&&(this._onDragOver(t),Pd(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,a=this.options;n<o;n++)nc(t=i[n],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||jd(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach(function(t,e){var o=n.children[e];nc(o,this.options.draggable,n,!1)&&(i[t]=o)},this),e&&this.captureAnimationState(),t.forEach(function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return nc(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=Oc.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&Sd(i)},destroy:function(){Ic("destroy",this);var t=this.el;t[kc]=null,tc(t,"mousedown",this._onTapStart),tc(t,"touchstart",this._onTapStart),tc(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(tc(t,"dragover",this),tc(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),dd.splice(dd.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Fc){if(Ic("hideClone",this),Md.eventCanceled)return;sc(Vc,"display","none"),this.options.removeCloneOnHide&&Vc.parentNode&&Vc.parentNode.removeChild(Vc),Fc=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Fc){if(Ic("showClone",this),Md.eventCanceled)return;Bc.parentNode!=Nc||this.options.group.revertClone?Hc?Nc.insertBefore(Vc,Hc):Nc.appendChild(Vc):Nc.insertBefore(Vc,Bc),this.options.group.revertClone&&this.animate(Bc,Vc),sc(Vc,"display",""),Fc=!1}}else this._hideClone()}},fd&&Jl(document,"touchmove",function(t){(Md.active||ld)&&t.cancelable&&t.preventDefault()}),Md.utils={on:Jl,off:tc,css:sc,find:cc,is:function(t,e){return!!nc(t,e,t,!1)},extend:bc,throttle:wc,closest:nc,toggleClass:rc,clone:Sc,index:gc,nextTick:Nd,cancelNextTick:Hd,detectDirection:wd,getChild:pc,expando:kc},Md.get=function(t){return t[kc]},Md.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Md.utils=jl(jl({},Md.utils),t.utils)),Oc.mount(t)})},Md.create=function(t,e){return new Md(t,e)},Md.version=Fl;var Zd,Vd,Fd,Ud,Gd,Wd,qd=[],Yd=!1;function Kd(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Jl(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Jl(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Jl(document,"touchmove",this._handleFallbackAutoScroll):Jl(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?tc(document,"dragover",this._handleAutoScroll):(tc(document,"pointermove",this._handleFallbackAutoScroll),tc(document,"touchmove",this._handleFallbackAutoScroll),tc(document,"mousemove",this._handleFallbackAutoScroll)),Qd(),Xd(),xc()},nulling:function(){Gd=Vd=Zd=Yd=Wd=Fd=Ud=null,qd.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(n,o);if(Gd=t,e||this.options.forceAutoScrollFallback||Wl||Gl||Yl){Jd(t,this.options,a,e);var r=_c(a,!0);!Yd||Wd&&n===Fd&&o===Ud||(Wd&&Qd(),Wd=setInterval(function(){var a=_c(document.elementFromPoint(n,o),!0);a!==r&&(r=a,Xd()),Jd(t,i.options,a,e)},10),Fd=n,Ud=o)}else{if(!this.options.bubbleScroll||_c(a,!0)===dc())return void Xd();Jd(t,this.options,_c(a,!1),!1)}}},Hl(t,{pluginName:"scroll",initializeByDefault:!0})}function Xd(){qd.forEach(function(t){clearInterval(t.pid)}),qd=[]}function Qd(){clearInterval(Wd)}var Jd=wc(function(t,e,i,n){if(e.scroll){var o,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=dc(),d=!1;Vd!==i&&(Vd=i,Xd(),Zd=e.scroll,o=e.scrollFn,!0===Zd&&(Zd=_c(i,!0)));var h=0,u=Zd;do{var p=u,m=hc(p),g=m.top,f=m.bottom,v=m.left,_=m.right,b=m.width,y=m.height,w=void 0,x=void 0,C=p.scrollWidth,S=p.scrollHeight,T=sc(p),k=p.scrollLeft,A=p.scrollTop;p===c?(w=b<C&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),x=y<S&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(w=b<C&&("auto"===T.overflowX||"scroll"===T.overflowX),x=y<S&&("auto"===T.overflowY||"scroll"===T.overflowY));var E=w&&(Math.abs(_-a)<=s&&k+b<C)-(Math.abs(v-a)<=s&&!!k),M=x&&(Math.abs(f-r)<=s&&A+y<S)-(Math.abs(g-r)<=s&&!!A);if(!qd[h])for(var P=0;P<=h;P++)qd[P]||(qd[P]={});qd[h].vx==E&&qd[h].vy==M&&qd[h].el===p||(qd[h].el=p,qd[h].vx=E,qd[h].vy=M,clearInterval(qd[h].pid),0==E&&0==M||(d=!0,qd[h].pid=setInterval(function(){n&&0===this.layer&&Md.active._onTouchMove(Gd);var e=qd[this.layer].vy?qd[this.layer].vy*l:0,i=qd[this.layer].vx?qd[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(Md.dragged.parentNode[kc],i,e,t,Gd,qd[this.layer].el)||Cc(qd[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=_c(u,!1)));Yd=d}},30),th=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,r=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;r();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(a("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function eh(){}function ih(){}eh.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=pc(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:th},Hl(eh,{pluginName:"revertOnSpill"}),ih.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:th},Hl(ih,{pluginName:"removeOnSpill"}),Md.mount(new Kd),Md.mount(ih,eh);let nh=class extends Lt{constructor(){super(...arguments),this._selectedItems=new Set,this._newImageUrl="",this._sortable=null,this._reindexImages=!1,this.isDragging=!1,this._debouncedConfigChanged=kl(this._configChanged.bind(this),300)}static get styles(){return[dl,A`
        .hidden {
          display: none;
        }
        #drop-area {
          margin-block: var(--vic-card-padding);
          border-block: 1px solid var(--divider-color);
        }

        .drop-area {
          border: 2px dashed var(--divider-color);
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-block: var(--vic-card-padding);
        }

        .drop-area[dragging] {
          background-color: rgba(var(--rgb-primary-text-color), 0.05);
        }

        input[type='file'] {
          display: none;
        }

        .new-image-url > ha-textfield {
          width: 100%;
        }
      `]}shouldUpdate(t){return!t.has("config")||(this._images=this.config.images||[],!0)}_renderUploadAddNewImage(){return pt`
      <div class="custom-background-wrapper">
        <ha-button @click=${()=>this.toggleUpload()} id="upload-btn">
          ${this.editor.hass.localize("ui.components.selectors.image.upload")}
        </ha-button>
        <ha-button @click=${()=>this.toggleSwiperConfig()} id="swiper-btn"> Swiper Config </ha-button>
      </div>
    `}_renderSwiperConfig(){var t;const e=(null===(t=this.config.extra_configs)||void 0===t?void 0:t.images_swipe)||{},i={component:this,configType:"images_swipe"},n=[{value:e.max_height||150,configValue:"max_height",label:"Max Height (px)",options:{selector:{number:{min:100,max:500,mode:"slider",step:1}}},pickerType:"number"},{value:e.max_width||450,configValue:"max_width",label:"Max Width (px)",options:{selector:{number:{min:100,max:500,mode:"slider",step:1}}},pickerType:"number"},{value:e.delay||3e3,configValue:"delay",label:"Delay (ms)",options:{selector:{number:{min:500,max:1e4,mode:"slider",step:50}}},pickerType:"number"},{value:e.speed||500,configValue:"speed",label:"Speed (ms)",options:{selector:{number:{min:100,max:5e3,mode:"slider",step:50}}},pickerType:"number"},{value:e.effect||"slide",configValue:"effect",label:"Effect",items:[{value:"slide",label:"Slide"},{value:"fade",label:"Fade"},{value:"coverflow",label:"Coverflow"}],pickerType:"attribute"}],o=[{value:e.autoplay||!1,configValue:"autoplay",label:"Autoplay",pickerType:"selectorBoolean"},{value:e.loop||!0,configValue:"loop",label:"Loop",pickerType:"selectorBoolean"}];return pt` <div id="image-swiper-config" style="display: none;">
      <div>
        <div>Slide layout configuration</div>
      </div>
      <div>
        <div>${n.map(t=>this.generateItemPicker(Object.assign(Object.assign({},t),i)))}</div>
      </div>
      <div>${o.map(t=>this.generateItemPicker(Object.assign(Object.assign({},t),i)))}</div>
    </div>`}_imageList(){if(this._reindexImages)return pt`<span>Loading...</span>`;const t=0===this._selectedItems.size?this.editor.localize("editor.imagesConfig.selectAll"):this.editor.localize("editor.imagesConfig.deselectAll"),e=0===this._selectedItems.size?this._selectAll:this._deselectAllItems,i=this._selectedItems.size>0?pt`
            <ha-button @click=${this._deleteSelectedItems}>
              ${this.editor.localize("editor.imagesConfig.deleteSelected")}
            </ha-button>
          `:"",n=this._images.length>0?pt`
            <div class="custom-background-wrapper">
              <ha-formfield .label=${"Show Image Index"}>
                <ha-switch
                  .checked=${this.config.show_image_index}
                  .configValue=${"show_image_index"}
                  @change=${t=>this.editor._valueChanged(t)}
                ></ha-switch>
              </ha-formfield>
              <ha-button @click=${e}>${t}</ha-button>
              ${i}
            </div>
          `:"",o=this._renderDropArea(),a=pt`<div class="images-list" id="images-list">
      ${Dl(this._images||[],t=>t.url,(t,e)=>pt`<div class="custom-background-wrapper" data-url="${t.url}">
            <div class="handle"><ha-icon icon="mdi:drag"></ha-icon></div>
            <ha-textfield
              class="image-input"
              .label=${"IMAGE URL"}
              .configValue=${"images"}
              .value=${t.title}
              @input=${t=>hr(this.editor,t,e)}
            ></ha-textfield>
            <ha-checkbox .checked=${!1} @change=${e=>this._toggleSelection(e,t.url)}></ha-checkbox>
          </div>`)}
      ${n}
    </div>`;return pt`${o}${a}`}_renderDropArea(){const t=this.editor.localize("card.common.toastImageError");return pt`
      <div id="drop-area" style="display: none;">
        <div
          class="drop-area"
          ?dragging=${this.isDragging}
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${()=>{var t,e;return null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("file-upload-new"))||void 0===e?void 0:e.click()}}
        >
          <span>Drag & drop files here or click to select files</span>
          <p>Supports JPEG, PNG, or GIF image.</p>

          <input
            type="file"
            id="file-upload-new"
            class="file-input"
            .errorMsg=${t}
            .toastId="${"imagesConfig"}"
            @change=${t=>ur(this.editor,t)}
            accept="image/*"
            multiple
          />
        </div>
        <div class="custom-background-wrapper">
          <ha-textfield
            .label=${this.editor.hass.localize("ui.components.selectors.image.url")}
            .configValue=${"new_image_url"}
            .value=${this._newImageUrl}
            @input=${this.toggleAddButton}
          ></ha-textfield>
          <div class="new-url-btn">
            <ha-icon icon="mdi:plus" @click=${()=>this.addNewImageUrl()}></ha-icon>
          </div>
        </div>
      </div>
    `}render(){const t=this._imageList(),e=this._renderUploadAddNewImage(),i=this._renderSwiperConfig();return pt`${t}${e} ${i}`}_configChanged(){pl(this.editor,"config-changed",{config:this.config})}toggleSwiperConfig(){var t,e,i,n;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("image-swiper-config"),a=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("images-list"),r=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById("swiper-btn"),s=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById("upload-btn");"none"===(null==o?void 0:o.style.display)?(o.style.display="block",a.style.display="none",s.style.visibility="hidden",r.innerHTML="Cancel"):(o.style.display="none",s.style.visibility="visible",a.style.display="block",r.innerHTML="Swiper Config")}toggleUpload(){var t,e,i;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("drop-area"),o=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("images-list"),a=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById("upload-btn");"none"===(null==n?void 0:n.style.display)?(n.style.display="block",o.style.display="none",a.innerHTML="Cancel"):(n.style.display="none",o.style.display="block",a.innerHTML="Add Image")}generateItemPicker(t){return pt`
      <div class="item-content">
        ${zs(Object.assign({},t))}
      </div>
    `}_handleDragOver(t){t.preventDefault(),this.isDragging=!0}_handleDragLeave(){this.isDragging=!1}_handleDrop(t){var e;t.preventDefault(),this.isDragging=!1;const i=this.editor.localize("card.common.toastImageError"),n=null===(e=t.dataTransfer)||void 0===e?void 0:e.files;n&&n.length>0&&ur(this.editor,{files:n,toastId:"imagesConfig",errorMsg:i})}initSortable(){this.updateComplete.then(()=>{var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("images-list");e&&(this._sortable=new Md(e,{handle:".handle",animation:150,ghostClass:"ghost",onEnd:t=>{this._handleSortEnd(t)}}))})}_handleSortEnd(t){t.preventDefault();const e=t.oldIndex,i=t.newIndex;e!==i&&this._reorderImages(e,i)}_reorderImages(t,e){const i=this._images.concat(),n=i.splice(t,1)[0];i.splice(e,0,n),this.config=Object.assign(Object.assign({},this.config),{images:i}),this._debouncedConfigChanged()}_toggleSelection(t,e){t.stopPropagation();t.target.checked?(this._selectedItems.add(e),this.requestUpdate()):(this._selectedItems.delete(e),this.requestUpdate())}_deselectAllItems(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".images-list ha-checkbox")).forEach(t=>{t.checked=!1}),this._selectedItems.clear(),this.requestUpdate()}_selectAll(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".images-list ha-checkbox")).forEach(t=>{t.checked=!0}),this._selectedItems.clear(),this._images.forEach(t=>this._selectedItems.add(t.url)),this.requestUpdate()}_deleteSelectedItems(){if(0===this._selectedItems.size)return;const t=this._images.filter(t=>!this._selectedItems.has(t.url));this._selectedItems.clear(),pl(this.editor,"config-changed",{config:Object.assign(Object.assign({},this.config),{images:t})}),this.validateImageList()}validateImageList(){setTimeout(()=>{var t;((null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".images-list .image-input").length)||0)!==this._images.length&&(this._reindexImages=!0,setTimeout(()=>{this._reindexImages=!1,this.requestUpdate(),this.initSortable()},300))},200)}toggleAddButton(t){var e;t.stopPropagation();const i=t.target,n=null===(e=i.parentElement)||void 0===e?void 0:e.querySelector(".new-url-btn");n&&(i.value&&i.value.length>0?(this._newImageUrl=i.value,n.classList.add("show")):n.classList.remove("show"))}addNewImageUrl(){if(!this._newImageUrl||!this.config)return;const t=[...this.config.images||[]];t.push({url:this._newImageUrl,title:this._newImageUrl}),this.config=Object.assign(Object.assign({},this.config),{images:t}),this._newImageUrl="",this._debouncedConfigChanged()}_valueChanged(t){var e;if(t.stopPropagation(),!this.config)return;const i=t.target,n=i.configValue,o=i.configType;let a=t.detail.value;const r={};if("images_swipe"===o){let t=(null===(e=this.config.extra_configs)||void 0===e?void 0:e.images_swipe)||{};t=Object.assign(Object.assign({},t),{[n]:a}),r.extra_configs=Object.assign(Object.assign({},this.config.extra_configs),{images_swipe:t}),this.config=Object.assign(Object.assign({},this.config),r),this._debouncedConfigChanged()}else r[n]=a,this.config=Object.assign(Object.assign({},this.config),r),this._debouncedConfigChanged()}};t([jt({attribute:!1})],nh.prototype,"editor",void 0),t([jt({type:Object})],nh.prototype,"config",void 0),t([jt({type:Array})],nh.prototype,"_images",void 0),t([Rt()],nh.prototype,"_selectedItems",void 0),t([Rt()],nh.prototype,"_newImageUrl",void 0),t([Rt()],nh.prototype,"_sortable",void 0),t([Rt()],nh.prototype,"_reindexImages",void 0),t([jt({type:Boolean})],nh.prototype,"isDragging",void 0),nh=t([It("panel-images")],nh);const oh=Dn(t=>[{name:"entity",selector:{entity:{domain:["sensor"]}},required:!0},{name:"name",label:"Card name or select model name (optional)",selector:{select:{mode:"dropdown",custom_value:!0,options:["Vehicle Info Card",t]}}}]),ah=Dn(t=>[{name:"",type:"grid",column_min_width:"140px",schema:[...t.map(t=>({name:t.configKey,label:t.label,type:"boolean"}))]}]),rh=Dn(t=>[{name:"selected_language",label:"Selected Language",selector:{language:{languages:t,native_name:!0,no_sort:!1}}}]),sh=["auto","light","dark"],lh=[{name:"selected_theme",type:"grid",schema:[{name:"theme",label:"Theme",default:"default",required:!1,selector:{theme:{include_default:!0}}},{name:"mode",label:"Theme Mode",default:"auto",selector:{select:{mode:"dropdown",options:sh.map(t=>({value:t,label:t.charAt(0).toUpperCase()+t.slice(1)}))}}}]}],ch=Dn(t=>[{name:"services",type:"grid",schema:[...t.map(t=>({name:t.value,label:t.label,type:"boolean",default:!1}))]}]),dh=Vt(class extends Ft{constructor(t){if(super(t),t.type!==Zt.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return mt}}),hh='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',uh="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\n       <g fill="none" stroke="#777" stroke-width="2" stroke-linecap="round" opacity="0.55">\n         <path d="M14 38h36l-4-12c-1-3-3-4-6-4H24c-3 0-5 1-6 4z"/>\n         <circle cx="22" cy="42" r="4" fill="#777"/>\n         <circle cx="42" cy="42" r="4" fill="#777"/>\n       </g>\n     </svg>'),ph={BACK_DARK:hh,BACK_WHITE:hh,LOADING:uh},mh=(t,e)=>({state:Object.keys(t).reduce((i,n)=>(i[n]=yo(t[n],e),i),{})}),gh=(t,e,i)=>Object.assign({name:yo(t,i)},mh(e,i)),fh=t=>({on:yo("card.common.stateUnlocked",t),off:yo("card.common.stateLocked",t)}),vh=t=>mh({charging:"card.chargingState.charging",not_charging:"card.chargingState.notCharging",ready_for_charging:"card.chargingState.readyForCharging",conservation:"card.chargingState.conservation",error:"card.common.stateUnknown",off:"card.chargingState.off",unsupported:"card.common.stateUnknown"},t),_h=t=>({front_left:gh("card.doorAttributes.frontLeft",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),front_right:gh("card.doorAttributes.frontRight",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),rear_left:gh("card.doorAttributes.rearLeft",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),rear_right:gh("card.doorAttributes.rearRight",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),trunk:gh("card.doorAttributes.trunk",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),hood:gh("card.doorAttributes.hood",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t),sunroof:gh("card.doorAttributes.sunroof",{open:"card.common.stateOpen",closed:"card.common.stateClosed"},t)}),bh=t=>({front_left:gh("card.lockAttributes.frontLeft",{unlocked:"card.common.stateUnlocked",locked:"card.common.stateLocked"},t),front_right:gh("card.lockAttributes.frontRight",{unlocked:"card.common.stateUnlocked",locked:"card.common.stateLocked"},t),rear_left:gh("card.lockAttributes.rearLeft",{unlocked:"card.common.stateUnlocked",locked:"card.common.stateLocked"},t),rear_right:gh("card.lockAttributes.rearRight",{unlocked:"card.common.stateUnlocked",locked:"card.common.stateLocked"},t)}),yh=t=>({front_left:gh("card.windowAttributes.frontLeft",{open:"card.common.stateOpen",closed:"card.common.stateClosed",ventilation:"card.windowState.ventilation"},t),front_right:gh("card.windowAttributes.frontRight",{open:"card.common.stateOpen",closed:"card.common.stateClosed",ventilation:"card.windowState.ventilation"},t),rear_left:gh("card.windowAttributes.rearLeft",{open:"card.common.stateOpen",closed:"card.common.stateClosed",ventilation:"card.windowState.ventilation"},t),rear_right:gh("card.windowAttributes.rearRight",{open:"card.common.stateOpen",closed:"card.common.stateClosed",ventilation:"card.windowState.ventilation"},t),sunroof:gh("card.windowAttributes.sunroof",{open:"card.common.stateOpen",closed:"card.common.stateClosed",tilt:"card.windowState.tilt"},t)});function wh(t){return Number.isFinite(t.max_age_minutes)&&t.max_age_minutes>0&&(void 0===t.capacity_kwh||Number.isFinite(t.capacity_kwh)&&t.capacity_kwh>0)&&(void 0===t.target_soc||Number.isFinite(t.target_soc)&&t.target_soc>=0&&t.target_soc<=100)}function xh(t){if("string"!=typeof t&&"number"!=typeof t)return null;if("string"==typeof t&&!t.trim())return null;const e=Number(t);return Number.isFinite(e)&&e>=0&&e<=100?e:null}function Ch(t,e,i,n=Date.now()){var o;const a=xh(null==t?void 0:t.state),r=null!==(o=null==t?void 0:t.attributes)&&void 0!==o?o:{},s="string"==typeof r.data_captured_at?r.data_captured_at:void 0,l=s&&/(?:Z|[+-]\d{2}:\d{2})$/i.test(s)?Date.parse(s):NaN,c=Number.isFinite(l)?(n-l)/6e4:null,d=void 0===e.target_soc?xh(i):xh(e.target_soc);let h;h=null===a?"missing":!0===r.ambiguous_reading?"ambiguous":wh(e)&&"point"===r.freshness_source&&null!==c?c<0?"future":c<=e.max_age_minutes?"fresh":"stale":"unverified";const u="fresh"===h&&null!==d&&void 0!==e.capacity_kwh?Math.max(0,d-a)*e.capacity_kwh/100:null;return{status:h,captured:s,ageMinutes:c,missingKwh:null!==u&&Number.isFinite(u)?u:null,target:d}}const Sh=58;let Th=class extends Lt{constructor(){super(...arguments),this.editMode=!1,this.vehicleEntities={},this.buttonCards={},this._entityNotFound=!1,this.DataKeys={},this._brandManufacturer="",this.PreviewCard={},this._currentCardType=null,this._activeSubCard=new Set,this._currentPreviewType=null,this._loading=!0,this._buttonReady=!1,this._connected=!1,this.mainSectionItems={},this.localize=(t,e="",i="")=>yo(t,this.userLang,e,i),this._brandHeaderClickCount=0,this._handleBrandHeaderClick=()=>{if(this._brandHeaderClickCount++,clearTimeout(this._brandHeaderClickTimer),this._brandHeaderClickCount>=3){this._brandHeaderClickCount=0;const t=["Canyonero! Canyonero!","Legen… wait for it… DARY!","Bazinga.","Suit up.","D'oh!","Knock-knock-knock, Penny.","Have you met Ted?","Mmm… donuts.","Hi diddly-ho, neighbour!","Soft kitty, warm kitty…"],e=t[Math.floor(Math.random()*t.length)],i=document.createElement("div");return i.textContent=e,Object.assign(i.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",background:"var(--primary-color, #b58450)",color:"var(--text-primary-color, #fff)",padding:"10px 18px",borderRadius:"24px",fontWeight:"600",zIndex:"99999",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",opacity:"0",transition:"opacity 250ms ease"}),document.body.appendChild(i),requestAnimationFrame(()=>i.style.opacity="1"),void setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),300)},2200)}this._brandHeaderClickTimer=setTimeout(()=>this._brandHeaderClickCount=0,600)},this.toggleCard=t=>{var e;_("light");const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".card-element");if(!this._currentCardType||!i)return;const n=Object.values(this.buttonCards).filter(t=>"action"!==t.button_type);if("next"===t||"prev"===t){const e=n.findIndex(t=>t.key===this._currentCardType),o="next"===t?(e+1)%n.length:(e-1+n.length)%n.length;i.style.animation="none",setTimeout(()=>{this._currentCardType=n[o].key,i.style.animation="fadeIn 0.3s ease"},300)}else"close"===t&&(this._currentCardType=null)},this.toggleCardFromButtons=t=>{_("light"),setTimeout(()=>{this._currentCardType=this._currentCardType===t?null:t},150)},this.isSubCardActive=t=>""===t||this._activeSubCard.has(t),this.getEntityInfoByKey=({key:t,name:e,icon:i,state:n,unit:o})=>{const a=this.vehicleEntities[t];if(!a)return{key:t,name:e,icon:i,state:n,unit:o,active:!1};const r=this.getDefaultEntityInfo({key:t,name:e,icon:i,state:n,unit:o},a);return"soc"===t||"targetSoc"===t?this.getSocIconInfo(r,a):"doorsLocked"===t?this.getLockIconInfo(r,a):this.getWarningOrDefaultInfo(r,t,a)},this.getDefaultEntityInfo=({key:t,name:e,icon:i,state:n,unit:o},a)=>({key:t,name:null!=e?e:a.original_name,icon:null!=i?i:this.getEntityAttribute(a.entity_id,"icon"),state:null!=n?n:this.getStateDisplay(a.entity_id),unit:null!=o?o:this.getEntityAttribute(a.entity_id,"unit_of_measurement")}),this.getSocIconInfo=(t,e)=>{const i=this.getEntityState(e.entity_id),n=i?parseFloat(i):0;let o;return o=n<35?"mdi:battery-charging-low":n<70?"mdi:battery-charging-medium":"mdi:battery-charging-high",Object.assign(Object.assign({},t),{icon:o})},this.getLockIconInfo=(t,e)=>{const i=this.getBooleanState(e.entity_id);return Object.assign(Object.assign({},t),{icon:i?"mdi:lock-open":"mdi:lock",active:!i})},this.getWarningOrDefaultInfo=(t,e,i)=>{if(this.DataKeys.vehicleWarnings.map(t=>t.key).includes(e)){const e=this.getBooleanState(i.entity_id);return Object.assign(Object.assign({},t),{state:e?"Problem":"OK",active:!!e})}return t},this._setUpButtonAnimation=()=>{this.isEditorPreview||null===this.vehicleButtons||setTimeout(()=>{var t;const e=null===(t=this.vehicleButtons.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".grid-item");e&&e.forEach(t=>{t.classList.add("zoom-in"),t.addEventListener("animationend",()=>{t.classList.remove("zoom-in")})})},50)}}static async getConfigElement(){return await Promise.resolve().then(function(){return Mh}),document.createElement("canyonero-vehicle-dashboard-editor")}set hass(t){t&&(this._hass=t,this._buttonReady&&this.buttonCards&&Object.keys(this.buttonCards).forEach(e=>{const i=this.buttonCards[e].custom_card;"custom"===this.buttonCards[e].card_type&&!Ka(i)&&i.forEach(e=>{e.hass=t})}))}connectedCallback(){super.connectedCallback(),window.Canyonero=this,this.editMode&&(this._loading=!1,this.isEditorPreview&&window.addEventListener("editor-event",this.handleEditorEvents.bind(this))),this._connected=!0}disconnectedCallback(){window.removeEventListener("editor-event",this.handleEditorEvents.bind(this)),this._connected=!1,super.disconnectedCallback()}setConfig(t){if(t.soc_quality&&!wh(t.soc_quality))throw new Error("soc_quality requires a positive max_age_minutes, optional positive capacity_kwh and target_soc from 0 to 100.");this.config=Object.assign({},t)}get userLang(){return this.config.selected_language&&"system"!==this.config.selected_language?this.config.selected_language:this._hass.language}get baseCardTypes(){return So(this.userLang)}get isCharging(){var t,e;const i=null===(t=this.vehicleEntities.isCharging)||void 0===t?void 0:t.entity_id;if(i)return this.getBooleanState(i);const n=null===(e=this.vehicleEntities.chargingState)||void 0===e?void 0:e.entity_id;return!!n&&"charging"===this.getEntityState(n)}get carVinNumber(){return this.config.entity?this.getEntityAttribute(this.config.entity,"vin"):""}get isDark(){var t,e,i,n,o,a;return"dark"===(null===(e=null===(t=this.config)||void 0===t?void 0:t.selected_theme)||void 0===e?void 0:e.mode)||"light"!==(null===(n=null===(i=this.config)||void 0===i?void 0:i.selected_theme)||void 0===n?void 0:n.mode)&&(null!==(a=null===(o=this._hass.selectedTheme)||void 0===o?void 0:o.dark)&&void 0!==a?a:this._isDarkTheme())}get _locale(){const t=this._hass.locale,e=this.userLang.includes("_")?this.userLang.replace("_","-"):this.userLang;return Object.assign(Object.assign({},t),{language:e})}get isEditorPreview(){var t;return(null===(t=this.offsetParent)||void 0===t?void 0:t.classList.contains("element-preview"))||!1}static get styles(){return il}async willUpdate(t){var e,i,n,o,a;if(super.willUpdate(t),t.has("config")&&!0===(null===(e=this.config.map_popup_config)||void 0===e?void 0:e.single_map_card)&&(null===(i=this.config)||void 0===i?void 0:i.device_tracker)&&(null===(n=this.config.extra_configs)||void 0===n?void 0:n.maptiler_api_key)&&(this._singleMapCard||this.createSingleMapCard()),t.has("config")&&this.config.selected_theme){const e=null===(a=null===(o=t.get("config"))||void 0===o?void 0:o.selected_theme)||void 0===a?void 0:a.theme,i=this.config.selected_theme.theme;e!==i&&this.applyTheme(i)}}async firstUpdated(t){super.firstUpdated(t),await new Promise(t=>setTimeout(t,0)),Ko(this),this._setUpButtonCards(),this._setUpPreview()}async updated(t){var e;if(super.updated(t),t.has("_currentCardType")&&null!==this._currentCardType&&!this.editMode){const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".card-element");t&&On(t,this.toggleCard.bind(this))}}shouldUpdate(t){var e;return t.has("_currentCardType")&&this._currentCardType&&(this._activeSubCard=new Set),!(!(null===(e=this.config)||void 0===e?void 0:e.soc_quality)||!t.has("_hass"))||y(this,t,!0)}async _setUpButtonCards(){if(null!==this._currentPreviewType)return;this._buttonReady=!1;const t=[];for(const e of this.baseCardTypes)this.buttonCards[e.type]=await Uo(this._hass,this.config,e),t.push(e.type);if(this.config.added_cards&&Object.keys(this.config.added_cards).length>0)for(const[e,i]of Object.entries(this.config.added_cards))i&&(this.buttonCards[e]=await Go(this._hass,i,e)),t.push(e);this._buttonReady=!0,this._calculateCardHeight=this.getGridRowSize()*Sh,setTimeout(()=>{this._loading=!1},2e3)}async _setUpPreview(){var t,e,i;!this._currentPreviewType&&(null===(t=this.config)||void 0===t?void 0:t.card_preview)?this._currentPreviewType="card":!this._currentPreviewType&&(null===(e=this.config)||void 0===e?void 0:e.btn_preview)?this._currentPreviewType="button":!this._currentPreviewType&&(null===(i=this.config)||void 0===i?void 0:i.tire_preview)&&(this._currentPreviewType="tire"),null!==this._currentPreviewType?await this._configurePreview(this._currentPreviewType):this._currentPreviewType=null}async _configurePreview(t){var e,i;if(!t&&!this.isEditorPreview)return;let n,o=[];switch(t){case"button":if(o=null===(e=this.config)||void 0===e?void 0:e.btn_preview,!o)return;if(n=await Ho(this._hass,o),!n)return;this.PreviewCard.buttonPreview=n;break;case"card":if(o=null===(i=this.config)||void 0===i?void 0:i.card_preview,!o)return;if(n=await Zo(this._hass,o),!n)return;this.PreviewCard.cardPreview=n;break;case"tire":this._currentPreviewType="tire";break;default:return}null!==t?(this._currentPreviewType=t,this.requestUpdate()):this._resetCardPreview()}_resetCardPreview(){this.PreviewCard={},this._currentPreviewType=null,this.requestUpdate()}createSingleMapCard(){setTimeout(async()=>{this._singleMapCard=await Jo(this)},0)}render(){var t,e;if(!this.config||!this._hass||!this.config.entity||this._entityNotFound)return this._showWarning("No entity provided");if(null!==this._currentPreviewType&&this.isEditorPreview)return this._renderCardPreview();if(!0===(null===(t=this.config.map_popup_config)||void 0===t?void 0:t.single_map_card)&&void 0!==this._singleMapCard)return pt`${this._singleMapCard}`;const i=pt`
      <div class="loading-image" style="height: ${this._calculateCardHeight}px">
        <img src="${ph.LOADING}" alt="Loading" />
      </div>
    `,n=""===(null===(e=this.config.name)||void 0===e?void 0:e.trim())||void 0===this.config.name,o=n?gt:pt`<header><h1>${this.config.name}</h1></header>`,a=pt`${o}
    ${null!==this._currentCardType?this._renderCustomCard():this._renderMainCard()}`;return pt`
      <ha-card style=${this._computeCardStyles()} class=${this._computeClasses()} ?no-header=${n}>
        ${this._loading?i:a}
      </ha-card>
    `}_renderCardPreview(){if(!this._currentPreviewType)return pt``;const t=this._currentPreviewType;return{button:Is(this.PreviewCard.buttonPreview,this._hass),card:pt`<ha-card class="preview-card">${this.PreviewCard.cardPreview}</ha-card>`,tire:this._renderDefaultTyreCard()}[t]}_renderMainCard(){var t,e;const i=null!==(e=null===(t=this.config.extra_configs)||void 0===t?void 0:t.section_order)&&void 0!==e?e:[...An];return pt`
      <main id="main-wrapper">
        ${i.map(t=>{switch(t){case wn.HEADER_INFO:return this._renderHeaderInfo();case wn.IMAGES_SLIDER:return this._renderHeaderSlides();case wn.MINI_MAP:return this._renderMap();case wn.BUTTONS:return this._renderButtons();default:return""}})}
      </main>
    `}_renderHeaderInfo(){var t,e;return(null===(t=this.config)||void 0===t?void 0:t.show_header_info)||void 0===(null===(e=this.config)||void 0===e?void 0:e.show_header_info)?pt`
      <div id=${wn.HEADER_INFO} class="header-info-box">
        ${this._renderBrandHeader()} ${this._renderInfoBox()} ${this._renderChargingInfo()} ${this._renderRangeInfo()}
      </div>
    `:pt``}_renderBrandHeader(){var t;const e=this.config.brand_logo_url,i=this.config.model_name||"",n=this.carVinNumber||"",o=n?n.slice(-6):"",a=/^[A-HJ-NPR-Z0-9]{17}$/i.test(i.replace(/\s/g,""))?"":i,r=(this._brandManufacturer||"").toLowerCase(),s=(null===(t=this.vehicleEntities.isOnline)||void 0===t?void 0:t.entity_id)?this.getBooleanState(this.vehicleEntities.isOnline.entity_id):void 0,l=r.includes("audi")?"AUDI":r.includes("škoda")||r.includes("skoda")?"ŠKODA":r.includes("cupra")?"CUPRA":r.includes("seat")?"SEAT":r.includes("porsche")?"PORSCHE":r.includes("volkswagen")?r.includes("us")||r.includes("na")?"VW US":"VW":r.includes("tesla")?"TESLA":r.includes("bmw")?"BMW":r.includes("mercedes")||r.includes("benz")?"MERCEDES":r.includes("toyota")?"TOYOTA":r.includes("volvo")?"VOLVO":r.includes("ford")?"FORD":r.includes("hyundai")?"HYUNDAI":r.includes("kia")?"KIA":r.includes("nissan")?"NISSAN":r.includes("mazda")?"MAZDA":r.includes("honda")?"HONDA":r.includes("subaru")?"SUBARU":r?r.toUpperCase().slice(0,12):"CAR";return pt`
      <div
        class="vag-brand-header"
        brand="${l.toLowerCase().replace(/\s/g,"_")}"
        @click=${this._handleBrandHeaderClick}
      >
        <div class="brand-logo-slot">
          ${e?pt`<img src=${e} alt="Brand logo" />`:pt`<span class="brand-wordmark">${l}</span>`}
        </div>
        <div class="brand-meta">
          <span class="brand-model">${a||this.localize("card.common.vehicle")}</span>
          ${o?pt`<span class="brand-vin">VIN ···${o}</span>`:""}
        </div>
        ${void 0!==s?pt`<div class="brand-online" ?online=${s} title=${s?"online":"offline"}>
              <ha-icon icon=${s?"mdi:wifi":"mdi:wifi-off"}></ha-icon>
            </div>`:""}
      </div>
    `}_renderInfoBox(){const t=this.isCharging,e=!1!==this.config.enable_services_control,i=t&&e?"space-evenly":"center",n=(t,e,i,n=!1)=>pt`
      <div class="item active-btn" @click=${i} ?active=${n}>
        <ha-icon icon=${t}></ha-icon>
        <div class="added-item-arrow">
          <span>${e}</span>
          <div class="subcard-icon" ?active=${n}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>
      </div>
    `,o=this.createDataArray([{key:"doorsLocked"},{key:"isOnline"}]).map(({state:t,icon:e,key:i})=>pt`
        <div class="item active-btn" @click=${()=>{var t;return this.toggleMoreInfo(null===(t=this.vehicleEntities[i])||void 0===t?void 0:t.entity_id)}}>
          <ha-icon .icon=${e}></ha-icon>
          <span>${t}</span>
        </div>
      `),a=this.isCharging?n("mdi:ev-station",this.localize("card.common.stateCharging"),()=>this.chargingInfoVisible=!this.chargingInfoVisible,this.chargingInfoVisible):gt,r=!1!==this.config.enable_services_control?n("mdi:car-cog",this.localize("card.common.titleServices"),()=>this.toggleCardFromButtons("servicesCard")):gt;return pt`
      <div class="info-box" style=${`justify-content: ${i}`}>
        ${o} ${r} ${a}
      </div>
    `}_renderChargingInfo(){if(!this.DataKeys.chargingOverview)return pt``;const t=this.DataKeys.chargingOverview,e=this.createDataArray(t),i=this.chargingInfoVisible?"info-box charge active":"info-box charge";return pt`
      <div class=${i} .hidden=${this.isCharging}>
        ${e.map(({name:t,state:e,icon:i})=>e?pt`
              <div class="item charge">
                <div class="icon-state">
                  <ha-icon .icon=${i}></ha-icon>
                  <span>${e}</span>
                </div>
                <div class="item-name">
                  <span>${t}</span>
                </div>
              </div>
            `:pt``)}
      </div>
    `}_renderRangeInfo(){if(this.chargingInfoVisible)return;const t=t=>{if(!t)return null;return{state:parseInt(this.getEntityState(t)),stateDisplay:this.getStateDisplay(t)}},[e,i,n,o]=["fuelLevel","rangeCombustion","rangeElectric","soc"].map(e=>{var i;return t(null===(i=this.vehicleEntities[e])||void 0===i?void 0:i.entity_id)}),a=(t,e,i,n,o)=>pt`
      <div class="info-box range">
        <div class="item">
          <ha-icon icon="${t}"></ha-icon>
          <div><span>${i}</span></div>
        </div>
        <div class="fuel-wrapper">
          <div
            class="fuel-level-bar"
            ?electric=${o}
            ?charging=${o&&this.isCharging}
            style="--vic-range-width: ${e}%;"
          ></div>
        </div>
        <div class="item">
          <span>${n}</span>
        </div>
      </div>
    `;return pt`<div class="combined-info-box">${pt` ${e&&i?a("mdi:gas-station",e.state,e.stateDisplay,i.stateDisplay,!1):""}
      ${o&&n?a("mdi:ev-station",o.state,o.stateDisplay,n.stateDisplay,!0):""}`}</div>`}_renderHeaderSlides(){var t;return!this.config.images||!(null===(t=this.config)||void 0===t?void 0:t.show_slides)&&void 0!==this.config.show_slides?pt``:pt`
      <div id=${wn.IMAGES_SLIDER}>
        <canyonero-header-slide .config=${this.config} .editMode=${this.editMode}></canyonero-header-slide>
      </div>
    `}_renderMap(){const t=this.config,e=t.device_tracker,i=this.getEntityState(e),n=this._isDarkTheme();if(t.show_map)return t.device_tracker&&!/(unknown|unavailable)/.test(i)&&i||!t.show_map?pt`
      <div id=${wn.MINI_MAP}>
        <canyonero-map .hass=${this._hass} .mapData=${this.MapData} .card=${this} .isDark=${n}></canyonero-map>
      </div>
    `:this._showWarning("No device_tracker entity provided or entity is unavailable")}_renderEcoChart(){return pt``}_renderButtons(){var t;if(!1===(null===(t=this.config)||void 0===t?void 0:t.show_buttons)||!this._buttonReady)return pt``;const e=Object.entries(this.buttonCards).filter(([,t])=>!t.button.hidden),i=Object.fromEntries(e),n=this.config;return pt`
      <div id=${wn.BUTTONS}>
        <canyonero-buttons
          .hass=${this._hass}
          .component=${this}
          ._config=${n}
          ._buttons=${i}
          ._cardCurrentSwipeIndex=${this._currentSwipeIndex}
        ></canyonero-buttons>
      </div>
    `}_renderCustomCard(){var t;if(!this._currentCardType)return pt``;const e={tripCards:this._renderDefaultTripCard(),vehicleCards:this._renderDefaultVehicleCard(),ecoCards:this._renderDefaultEcoCard(),tyreCards:this._renderDefaultTyreCard(),servicesCard:this._renderServiceControl(),emptyCustom:this._showWarning("No custom card provided")},i=this._currentCardType,n=t=>{var e,i;return null!==(i=null===(e=this.buttonCards[t])||void 0===e?void 0:e.card_type)&&void 0!==i?i:"default"};let s;if("servicesCard"===i)s=e[i];else{const n=this.buttonCards[i],o=null!==(t=n.card_type)&&void 0!==t?t:"default",a=Ka(n.custom_card)?e.emptyCustom:n.custom_card.map(t=>t);s="custom"===o?a:e[i]}const l=this.config.entity?this._hass.states[this.config.entity].last_changed:"",c=g(new Date(l),this._locale),d=pt`<div class="added-card-header">
      <ha-icon-button .label=${"Close"} .path=${r} class="click-shrink" @click=${()=>this.toggleCard("close")}>
      </ha-icon-button>
      <div class="card-toggle">
        <ha-icon-button
          .label=${"Previous"}
          .path=${o}
          @click=${()=>this.toggleCard("prev")}
          class="click-shrink"
        ></ha-icon-button>

        <ha-icon-button
          .label=${"Next"}
          .path=${a}
          @click=${()=>this.toggleCard("next")}
          class="click-shrink"
        ></ha-icon-button>
      </div>
    </div>`;return pt`
      <main id="cards-wrapper">
        ${["servicesCard"].includes(i)?gt:d}
        <section class="card-element" type=${n(i)}>${s}</section>
        ${"default"===n(i)?pt`
              <div class="last-update">
                <span>${this.localize("card.common.lastUpdate")}: ${c}</span>
              </div>
            `:gt}
      </main>
    `}_renderDefaultTripCard(){const{tripOverview:t,lastTripStats:e}=this.DataKeys,i=[{title:this.localize("card.tripCard.overview"),data:this.createDataArray(t),key:""},{title:this.localize("card.tripCard.lastTrip"),data:this.createDataArray(e),key:"lastTrip"}];return pt` ${i.map(t=>this.createItemDataRow(t.title,t.data,t.key))} `}_renderDefaultVehicleCard(){const t=this.createDataArray(this.DataKeys.vehicleWarnings),e=this.isOverviewDataActive()||!this._activeSubCard.has("warnings");return pt`
      <div class="default-card">
        <div class="data-header">${this.localize("card.vehicleCard.vehicleStatus")}</div>
        <div class="data-box">${this._renderOverviewDataWithSubCard()}</div>
      </div>
      <div class="default-card">
        <div class="data-header">
          <div @click=${()=>this.toggleSubCard("warnings")} ?clickable=${!0}>
            ${this.localize("card.vehicleCard.vehicleWarnings")}
          </div>
          <div class="subcard-icon" ?active=${!e} @click=${()=>this.toggleSubCard("warnings")}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>
        <div class="data-box" active=${!e}>
          ${t.map(({key:t,icon:e,state:i,name:n,active:o})=>pt`
              <div class="data-row">
                <div>
                  <ha-icon
                    class="data-icon"
                    .icon="${e}"
                    @click=${()=>{var e;return this.toggleMoreInfo(null===(e=this.vehicleEntities[t])||void 0===e?void 0:e.entity_id)}}
                  ></ha-icon>
                  <span>${n}</span>
                </div>
                <div
                  class="data-value-unit"
                  ?error=${o}
                  @click=${()=>{var e;return this.toggleMoreInfo(null===(e=this.vehicleEntities[t])||void 0===e?void 0:e.entity_id)}}
                >
                  <span>${i}</span>
                </div>
              </div>
            `)}
        </div>
      </div>
    `}_renderDefaultEcoCard(){const t=this.createDataArray(this.DataKeys.serviceOverview),e=this.createDataArray(this.DataKeys.diagnosticsOverview);return pt`
      ${this.createItemDataRow(this.localize("card.ecoCard.serviceTitle"),t,"")}
      ${this.createItemDataRow(this.localize("card.ecoCard.diagnosticsTitle"),e,"diagnostics")}
    `}_renderDefaultTyreCard(){var t,e;const i=this.createDataArray(this.DataKeys.chargingOverview),n=this.createDataArray(this.DataKeys.chargingDetails),o=null===(t=this.vehicleEntities.soc)||void 0===t?void 0:t.entity_id,a=null===(e=this.vehicleEntities.targetSoc)||void 0===e?void 0:e.entity_id,r=o?parseInt(this.getEntityState(o)):NaN,s=o?this.getStateDisplay(o):"—",l=a?this.getStateDisplay(a):void 0,c=this.isCharging,d=2*Math.PI*54,h=Number.isFinite(r)?d-Math.max(0,Math.min(100,r))/100*d:d;return pt`
      <div class="default-card">
        <div class="data-header">${this.localize("card.tyreCard.batteryTitle")}</div>
        <div class="battery-donut-wrapper">
          <svg viewBox="0 0 140 140" class="battery-donut" ?charging=${c}>
            <circle class="battery-track" cx="70" cy="70" r=${54}></circle>
            <circle
              class="battery-fill"
              cx="70" cy="70" r=${54}
              stroke-dasharray=${d}
              stroke-dashoffset=${h}
              transform="rotate(-90 70 70)"
            ></circle>
            <text x="70" y="70" text-anchor="middle" dominant-baseline="central" class="battery-soc-text">
              ${s}
            </text>
            ${l?pt`<text x="70" y="92" text-anchor="middle" dominant-baseline="central" class="battery-target-text">
                  ${this.localize("card.tyreCard.target")} ${l}
                </text>`:""}
          </svg>
        </div>
      </div>
      ${this._renderSocQuality(o,a)}
      ${this.createItemDataRow(this.localize("card.tyreCard.chargingOverview"),i,"")}
      ${this.createItemDataRow(this.localize("card.tyreCard.chargingDetails"),n,"chargingDetails")}
    `}_renderSocQuality(t,e){var i;if(!this.config.soc_quality)return gt;const n=Ch(t?this._hass.states[t]:void 0,this.config.soc_quality,e?null===(i=this._hass.states[e])||void 0===i?void 0:i.state:void 0),o=this._locale.language,a=n.captured&&null!==n.ageMinutes?new Date(n.captured).toLocaleString(o,{timeZone:this._hass.config.time_zone}):this.localize("card.socQuality.noSourceTime"),r=null===n.missingKwh?this.localize("card.socQuality.noEstimate"):`≈ ${n.missingKwh.toLocaleString(o,{maximumFractionDigits:1})} kWh`;return pt`
      <div class="default-card" role="status">
        <div class="data-header">${this.localize("card.socQuality.title")}</div>
        <p>${this.localize(`card.socQuality.${n.status}`)}</p>
        <p>${this.localize("card.socQuality.sourceTime")}: ${a}</p>
        ${void 0!==this.config.soc_quality.capacity_kwh?pt`<p>${this.localize("card.socQuality.energyToTarget")}${null!==n.target?` (${n.target} %)`:""}: ${r}</p>
              <p>${this.localize("card.socQuality.estimateNote")}</p>`:gt}
      </div>
    `}_renderServiceControl(){const t=this._hass,e=this.config.services,i=Object.entries(e).reduce((t,[e,i])=>(i&&(t[e]={name:Fs(this.userLang)[e].name,icon:Fs(this.userLang)[e].icon}),t),{});return pt`
      <div class="default-card remote-tab">
        <canyonero-remote-control .hass=${t} .card=${this} .selectedServices=${i}></canyonero-remote-control>
      </div>
    `}_showWarning(t){return pt` <hui-warning>${t}</hui-warning> `}_isDarkTheme(){const t=getComputedStyle(this).getPropertyValue("--primary-text-color");return Xa(t)}_renderOverviewDataWithSubCard(){const t=this.createDataArray(this.DataKeys.vehicleOverview),e={doorsLocked:{key:"lock",renderSubCard:()=>this._renderSubCard("lock")},doorsOpen:{key:"door",renderSubCard:()=>this._renderSubCard("door")},windowsOpen:{key:"window",renderSubCard:()=>this._renderSubCard("window")}},i=t=>{var e;const i=null===(e=this.vehicleEntities[t])||void 0===e?void 0:e.entity_id;i&&this.toggleMoreInfo(i)},n=t=>this.isSubCardActive(t),o=t=>{["doorsLocked","doorsOpen","windowsOpen"].includes(t)?this.toggleSubCard(e[t].key):i(t)};return pt`
      ${t.map(({key:t,name:a,icon:r,state:s,active:l})=>{if(s){const c=e[t];return pt`
            <div class="data-row">
              <div>
                <ha-icon
                  class="data-icon"
                  .icon="${r}"
                  ?warning=${!l}
                  @click=${()=>i(t)}
                ></ha-icon>
                <span class="data-label">${a}</span>
              </div>
              <div class="data-value-unit" @click=${()=>o(t)}>
                <span ?warning=${!l} style="text-transform: capitalize;">${s}</span>
                ${c?pt`
                      <ha-icon class="subcard-icon" ?active=${n(c.key)} icon="mdi:chevron-down">
                      </ha-icon>
                    `:""}
              </div>
            </div>
            ${c?c.renderSubCard():""}
          `}return pt``})}
    `}_renderSubCard(t){const e=this.userLang,i={},n=this.getEntityTypeId(t),o=this.getAttrStateMap(t,e),a=this.isSubCardActive(t);return Object.keys(o).forEach(t=>{var e,o;let a;a="chargeflapdcstatus"===t&&void 0!==(null===(e=this.vehicleEntities.chargeFlapDCStatus)||void 0===e?void 0:e.entity_id)?this.getEntityState(this.vehicleEntities.chargeFlapDCStatus.entity_id):"sunroofstatus"===t&&void 0!==(null===(o=this.vehicleEntities.sunroofStatus)||void 0===o?void 0:o.entity_id)?this.getEntityState(this.vehicleEntities.sunroofStatus.entity_id):this.getEntityAttribute(n,t),null!=a&&(i[t]=a)}),pt`
      <div class="sub-attributes" ?active=${a}>
        ${Object.keys(i).map(t=>{const e=i[t];if(null!=e&&o[t]){const i=o[t].state[e]||"Unknown";let n;return n="sunroofstatus"===t?"0"!==e:!["2","1",!1].includes(e),pt`
              <div class="data-row">
                <span>${o[t].name}</span>
                <div class="data-value-unit" ?warning=${n}>
                  <span style="text-transform: capitalize">${i}</span>
                </div>
              </div>
            `}return""})}
      </div>
    `}getEntityTypeId(t){var e,i,n;return{lock:null===(e=this.vehicleEntities.doorsLocked)||void 0===e?void 0:e.entity_id,window:null===(i=this.vehicleEntities.windowsOpen)||void 0===i?void 0:i.entity_id,door:null===(n=this.vehicleEntities.doorsOpen)||void 0===n?void 0:n.entity_id}[t]}getAttrStateMap(t,e){return{lock:bh(e),window:yh(e),door:_h(e)}[t]||{}}createItemDataRow(t,e,i){const n=t=>this.isSubCardActive(t);return pt`
      <div class="default-card">
        <div class="data-header">
          <div @click=${()=>this.toggleSubCard(i)} ?clickable=${""!==i}>${t}</div>
          ${(t=>""!==t?pt`
          <div class="subcard-icon" ?active=${n(t)} @click=${()=>this.toggleSubCard(t)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        `:pt``)(i)}
        </div>
        <div class="data-box" active=${n(i)}>
          ${e.map(({key:t,name:e,icon:i,state:n})=>n?pt`
                <div class="data-row">
                  <div>
                    <ha-icon class="data-icon" .icon="${i}"></ha-icon>
                    <span class="data-label">${e}</span>
                  </div>
                  <div
                    class="data-value-unit"
                    @click=${()=>{var e;return this.toggleMoreInfo(null===(e=this.vehicleEntities[t])||void 0===e?void 0:e.entity_id)}}
                  >
                    <span>${n}</span>
                  </div>
                </div>
              `:pt``)}
        </div>
      </div>
    `}toggleSubCard(t){if(void 0===t)return;const e=this._activeSubCard;"warnings"===t&&this.isOverviewDataActive()?(e.forEach(t=>e.delete(t)),this.updateComplete.then(()=>{e.add(t),this.requestUpdate()})):(e.has(t)?e.delete(t):e.add(t),this.requestUpdate())}isOverviewDataActive(){return["lock","window","door"].some(t=>this._activeSubCard.has(t))}createDataArray(t){return t.map(t=>this.getEntityInfoByKey(t))}getStateDisplay(t){return t&&this._hass.states[t]?this._hass.formatEntityState(this._hass.states[t]):""}getSecondaryInfo(t){const{odometer:e,doorsLocked:i,soc:n,serviceDueInDays:o,chargingState:a}=this.vehicleEntities,r=this.userLang;switch(t){case"tripCards":return this.getStateDisplay(null==e?void 0:e.entity_id);case"vehicleCards":{const t=this.getEntityState(null==i?void 0:i.entity_id);if(!t)return"";return fh(r)[t]||this.localize("card.common.stateUnknown")}case"ecoCards":{const t=this.getEntityState(null==o?void 0:o.entity_id);if(!t)return"";const e=parseInt(t,10);return Number.isFinite(e)?`${e} ${this.localize("card.ecoCard.daysUnit")||"d"}`:t}case"tyreCards":{const t=(null==n?void 0:n.entity_id)?this.getStateDisplay(n.entity_id):"",e=(null==a?void 0:a.entity_id)?this.getEntityState(a.entity_id):"",i=vh(r).state,o=e&&i[e]?i[e]:"";return t&&o?`${t} · ${o}`:t||o||""}default:return""}}getBooleanState(t){return!(!t||!this._hass.states[t])&&"on"===this._hass.states[t].state}getEntityState(t){return t&&this._hass.states[t]?this._hass.states[t].state:""}getEntityAttribute(t,e){if(t&&this._hass.states[t]&&this._hass.states[t].attributes)return this._hass.states[t].attributes[e]}getFormattedAttributeState(t,e){return t&&this._hass.states[t]&&this._hass.states[t].attributes?this._hass.formatEntityAttributeValue(this._hass.states[t],e):""}toggleMoreInfo(t){pl(this,"hass-more-info",{entityId:t})}getErrorNotify(t){var e;if(!this.DataKeys.vehicleWarnings)return!1;const{vehicleEntities:i}=this;switch(t){case"vehicleCards":const t=[...this.DataKeys.vehicleWarnings.map(t=>t.key).filter(t=>"tirePressureWarning"!==t)].some(t=>{var e;return this.getBooleanState(null===(e=i[t])||void 0===e?void 0:e.entity_id)});return t;case"tyreCards":return this.getBooleanState(null===(e=i.tirePressureWarning)||void 0===e?void 0:e.entity_id);default:return!1}}applyTheme(t){const e=this._hass.themes.themes[t];if(e){const i=Object.keys(e).filter(t=>"modes"!==t).reduce((t,i)=>(t[i]=e[i],t),{}),n=this.isDark?"dark":"light",o=e.modes&&"object"==typeof e.modes?e.modes[n]:{},a=Object.assign(Object.assign({},i),o);mr(this,{default_theme:this._hass.themes.default_theme,themes:{[t]:a}},t,!1)}}_computeCardStyles(){const t=this.isDark?ph.BACK_WHITE:ph.BACK_DARK;return Wt({"--vic-background-image":this.config.show_background?`url(${t})`:"none"})}_computeClasses(){var t,e;const i=this.config.show_background&&!this._loading,n=null!==(e=null===(t=this.config.extra_configs)||void 0===t?void 0:t.section_order)&&void 0!==e?e:[...An],o=n[n.length-1],a=n[0],r=n.includes(wn.MINI_MAP)&&1===n.length;return dh({__background:i,__map_last:o===wn.MINI_MAP&&a!==wn.MINI_MAP,__map_first:a===wn.MINI_MAP&&o!==wn.MINI_MAP,__map_single:r})}handleEditorEvents(t){var e,i;if(t.stopPropagation(),!this.isEditorPreview)return;const n=t.detail;switch(!0){case n.startsWith("btn_"):const t=n.replace("btn_","");null===(e=this.vehicleButtons)||void 0===e||e.showCustomBtnEditor(t);break;case n.startsWith("toggle_preview_"):const o=n.replace("toggle_preview_","");this._currentPreviewType=o,this.updateComplete.then(()=>{this._configurePreview(o)});break;case n.startsWith("swipe_"):const a=n.replace("swipe_","");null===(i=this.vehicleButtons)||void 0===i||i.swipeToButton(a)}}getGridRowSize(){var t,e,i,n,o,a,r,s,l,c,d,h,u;const{show_slides:p=!0,show_map:m=!0,show_buttons:g=!0,show_header_info:f=!0}=this.config,v=""===(null===(t=this.config.name)||void 0===t?void 0:t.trim()),_=v?Sh/44:0,b=(null!==(i=null===(e=this.config.extra_configs)||void 0===e?void 0:e.mini_map_height)&&void 0!==i?i:150)/Sh,y=Object.values(this.buttonCards).filter(t=>!t.button.hidden).length,w=null!==(o=null===(n=this.config.button_grid)||void 0===n?void 0:n.rows_size)&&void 0!==o?o:2,x=null!==(r=null===(a=this.config.button_grid)||void 0===a?void 0:a.columns_size)&&void 0!==r?r:2,C=Math.ceil(y/x),S=((w>C?C:w)*("vertical"===(null===(s=this.config.button_grid)||void 0===s?void 0:s.button_layout)?114:57)+12)/Sh,T=((null!==(d=null===(c=null===(l=this.config.extra_configs)||void 0===l?void 0:l.images_swipe)||void 0===c?void 0:c.max_height)&&void 0!==d?d:150)+28)/Sh,k=70/Sh,A=null!==(u=null===(h=this.config.extra_configs)||void 0===h?void 0:h.section_order)&&void 0!==u?u:[...An];let E=0;return p&&(E+=T),m&&(E+=b),g&&(E+=S),f&&(E+=k),v&&(E+=_),E-=A[A.length-1]===wn.MINI_MAP||A[0]===wn.MINI_MAP?12/Sh:0,E}getCardSize(){return 3}getLayoutOptions(){return{grid_min_rows:this.getGridRowSize(),grid_columns:4,grid_min_columns:4}}};Th.getStubConfig=t=>{const e=No(t);return Object.assign(Object.assign({},En),{entity:e,images:[]})},t([jt({attribute:!1})],Th.prototype,"hass",null),t([jt({attribute:!1})],Th.prototype,"_hass",void 0),t([jt({attribute:!1})],Th.prototype,"config",void 0),t([jt({type:Boolean})],Th.prototype,"editMode",void 0),t([jt({attribute:!1})],Th.prototype,"layout",void 0),t([Rt()],Th.prototype,"vehicleEntities",void 0),t([Rt()],Th.prototype,"buttonCards",void 0),t([Rt()],Th.prototype,"_entityNotFound",void 0),t([Rt()],Th.prototype,"DataKeys",void 0),t([Rt()],Th.prototype,"_brandManufacturer",void 0),t([Rt()],Th.prototype,"MapData",void 0),t([Rt()],Th.prototype,"PreviewCard",void 0),t([Rt()],Th.prototype,"_currentCardType",void 0),t([Rt()],Th.prototype,"_activeSubCard",void 0),t([Rt()],Th.prototype,"chargingInfoVisible",void 0),t([Rt()],Th.prototype,"_singleMapCard",void 0),t([Rt()],Th.prototype,"_currentPreviewType",void 0),t([Rt()],Th.prototype,"_loading",void 0),t([Rt()],Th.prototype,"_buttonReady",void 0),t([Rt()],Th.prototype,"_currentSwipeIndex",void 0),t([Rt()],Th.prototype,"_connected",void 0),t([Rt()],Th.prototype,"mainSectionItems",void 0),t([Rt()],Th.prototype,"_cardPreviewId",void 0),t([Rt()],Th.prototype,"_cardId",void 0),t([Ht("canyonero-buttons")],Th.prototype,"vehicleButtons",void 0),t([Ht("canyonero-map")],Th.prototype,"vehicleMap",void 0),t([Ht("canyonero-remote-control")],Th.prototype,"remoteControl",void 0),Th=t([It("canyonero-vehicle-dashboard")],Th);const kh=Dn(()=>[{name:"button_grid",type:"expandable",title:"Button Grid Configuration",flatten:!1,schema:[{name:"",type:"grid",flatten:!0,schema:[{name:"use_swiper",label:"Use Swiper",type:"boolean"},{name:"transparent",label:"Transparent Background",type:"boolean",helper:"Use this option to make the button background transparent.",default:!1},{name:"rows_size",label:"Rows Size",default:2,selector:{number:{max:10,min:1,mode:"box",step:1}}},{name:"columns_size",label:"Columns Size",default:2,selector:{number:{max:10,min:1,mode:"box",step:1}}}]},{name:"button_layout",label:"Button layout",required:!0,default:"horizontal",selector:{select:{mode:"box",options:["horizontal","vertical"].map(t=>({label:t.charAt(0).toUpperCase()+t.slice(1),value:t,image:{src:`/static/images/form/tile_content_layout_${t}.svg`,src_dark:`/static/images/form/tile_content_layout_${t}_dark.svg`,flip_rtl:!0}}))}}}]}]),Ah={version:"",hacs:!1,updated:!1};let Eh=class extends Lt{constructor(){super(...arguments),this.baseCardTypes=[],this._btnPreview=!1,this._cardPreview=!1,this._isTirePreview=!1,this._activeTabIndex=0,this._activeSubcardType=null,this._confirmDeleteType=null,this._selectedLanguage="",this._cardSortable=null,this._sectionSortable=null,this._latestRelease=Ah,this._modelName=void 0,this._toastDissmissed=!1,this._reloadSectionList=!1,this._visiblePanel=new Set,this._newCardType=new Map,this._addedCardSorted=!1,this.useCustomCard=t=>{var e;return null===(e=this._config.use_custom_cards)||void 0===e?void 0:e[t]},this.isAddedCard=t=>{var e;return null===(e=this._config.added_cards)||void 0===e?void 0:e.hasOwnProperty(t)},this.useCustomButton=t=>{var e;return null===(e=this._config[t])||void 0===e?void 0:e.enabled},this.isButtonHidden=t=>{var e,i;return this.isAddedCard(t)?null===(e=this._config.added_cards)||void 0===e?void 0:e[t].button.hide:null===(i=this._config[t])||void 0===i?void 0:i.hide},this._getButtonConfig=t=>Object.assign(Object.assign({},this.isAddedCard(t)?this._config.added_cards[t].button:this._config[t]),{isDefaultCard:!this.isAddedCard(t),isHidden:this.isButtonHidden(t),useCustomButton:this.useCustomButton(t)}),this._debouncedCustomBtnChanged=kl(this.configChanged.bind(this),500),this.localize=(t,e="",i="")=>yo(t,this._selectedLanguage,e,i),this.renderCardItems=t=>{let e=!1;const i=pt` <ha-sortable handle-selector=".handle" @item-moved=${this._buttonsMoved}>
      <div id="added-card-list">
        ${Dl(t||[],t=>t.type,(t,i)=>this.isButtonHidden(t.button)&&!e?(e=!0,pt`
                <div class="header-sm divider">
                  <div>Hidden buttons</div>
                </div>
                ${this._renderItemRow(t,i)}
              `):this._renderItemRow(t,i))}
      </div>
    </ha-sortable>`;return i},this.panelTemplate=(t,e,i,n=!1,o=!1)=>{const a=this.localize(`editor.${t}.title`),r="customButtonConfig"===t?this.localize("editor.buttonConfig.desc"):this.localize(`editor.${t}.desc`);return pt`
      <div class="panel-container">
        <ha-expansion-panel
          id="${t}"
          .outlined=${!0}
          .header=${a}
          .secondary=${r}
          .expanded=${n}
          .leftChevron=${o}
          @expanded-changed=${e=>this._handlePanelExpandedChanged(e,t)}
        >
          <div class="right-icon" slot="icons">
            <ha-icon icon=${e}></ha-icon>
          </div>
          <div class="card-config">${i}</div>
          ${this._renderToast(t)} ${this._renderSuccesToast(t)}
        </ha-expansion-panel>
      </div>
    `}}async setConfig(t){this._config=t}connectedCallback(){super.connectedCallback(),sr(),lr(),window.CanyoneroEditor=this,this._cleanConfig()}disconnectedCallback(){super.disconnectedCallback()}_cleanConfig(){this._config&&"object"==typeof this._config&&Zn.some(t=>this._config.hasOwnProperty(t)&&(null===this._config[t]||null!==this._config[t]))&&(Zn.forEach(t=>{this._config.hasOwnProperty(t)&&delete this._config[t]}),pl(this,"config-changed",{config:this._config}))}willUpdate(t){if(t.has("_config")&&this._config.added_cards&&!this._addedCardSorted){const t=this._rearrangeAddedCards(this._config.added_cards);this._config=Object.assign(Object.assign({},this._config),{added_cards:t}),pl(this,"config-changed",{config:this._config}),this._addedCardSorted=!0}t.has("_config")&&this._config.selected_language&&(this._selectedLanguage=this._config.selected_language,this.getBaseCardTypes())}async firstUpdated(){await cr(),await new Promise(t=>setTimeout(t,0)),await Wo(this),this._selectedLanguage=this._config.selected_language||this.hass.language,this.getBaseCardTypes()}updated(t){super.updated(t)}shouldUpdate(t){this._btnPreview||this._cardPreview||this._isTirePreview||this._cleanConfig();const e=()=>{this._btnPreview=!1,this._cardPreview=!1,this._isTirePreview=!1,this._cleanConfig()};return(t.has("_activeSubcardType")&&!this._activeSubcardType&&(this._btnPreview||this._cardPreview||this._isTirePreview)||t.has("_activeTabIndex")&&(this._btnPreview||this._cardPreview||this._isTirePreview))&&e(),!0}get isAnyAddedCard(){return this._config.added_cards&&Object.keys(this._config.added_cards).length>0}getBaseCardTypes(){const t=So(this._selectedLanguage);if(this.isAnyAddedCard)for(const[e,i]of Object.entries(this._config.added_cards))t.push({type:e,name:i.button.primary,icon:i.button.icon,config:e,button:e});this.baseCardTypes=t}_handleSwipeToButton(t){setTimeout(()=>{this._dispatchCardEvent(`swipe_${t}`)},50)}render(){if(!this.hass||!this._config)return pt``;const t=this.baseCardTypes.find(t=>t.type===this._activeSubcardType);return pt`
      <div class="card-config">
        ${this._activeSubcardType?this._renderSubCardConfig(t):this._renderDefaultConfig()}
        ${this._renderVersionInfo()}
      </div>
    `}_renderDefaultConfig(){const t=[{titleKey:"entityConfig",icon:"mdi:car",content:this._renderNameEntityForm()},{titleKey:"buttonConfig",icon:"mdi:view-dashboard",content:this._renderCardButtonPanel()},{titleKey:"customButtonConfig",icon:"mdi:view-dashboard",content:this._renderCustomButtonPanel()},{titleKey:"mapConfig",icon:"mdi:map-search",content:this._renderMapPopupConfig()},{titleKey:"imagesConfig",icon:"mdi:image",content:this._renderImageConfig()},{titleKey:"servicesConfig",icon:"mdi:car-cog",content:this._renderServicesConfig()},{titleKey:"themeLangConfig",icon:"mdi:palette",content:this._renderThemesConfig()},{titleKey:"showConfig",icon:"mdi:toggle-switch",content:this._renderShowOptions()}].map(t=>this.panelTemplate(t.titleKey,t.icon,t.content));return pt`${t}`}_renderNameEntityForm(){const t=this._modelName||"",e={entity:this._config.entity||"",name:this._config.name||""};return this._createHaForm(e,oh(t))}_renderCardButtonPanel(){const t=t=>this.localize(`editor.buttonConfig.${t}`),e={info:this.localize("editor.common.infoButton"),defaultCards:t("defaultCards"),buttonGridSwipe:t("buttonGridSwipe"),useButtonSwipe:t("useButtonSwipe"),swipeRows:t("swipeRows")},i=this.baseCardTypes.filter(t=>!this.isAddedCard(t.type)),n=this._renderSection({key:"default-cards",title:e.defaultCards,cards:this.renderCardItems(i),toggle:()=>this._toggleSubButtonPanel("default-cards"),isVisible:!0,hideHeader:!0});return pt`<ha-alert alert-type="info">${e.info}</ha-alert>${n}`}_renderCustomButtonPanel(){const t=t=>this.localize(`editor.buttonConfig.${t}`),e={info:this.localize("editor.customButtonConfig.info"),customCards:t("customCards"),addNewCard:t("addNewCard")},i=pt`
      <div class="card-type-item">
        <div class="card-type-content">
          <ha-icon-picker
            .hass=${this.hass}
            .label=${"Icon"}
            .value=${"mdi:car"}
            .configValue=${"icon"}
            @value-changed=${this._handleCardTypeInput}
          ></ha-icon-picker>
        </div>
        <div class="card-type-content">
          <ha-textfield
            style="margin-bottom: 0;"
            .label=${"Enter name for the card"}
            .configValue=${"type"}
            .value=${this._newCardType.get("type")||""}
            .toastId=${"customButtonConfig"}
            .errorMsg=${"Please enter a name for the card"}
            @change=${this._handleCardTypeInput}
          ></ha-textfield>
        </div>
        <div class="card-type-actions">
          <div class="action-icon" @click=${this._addNewCard}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </div>
        </div>
      </div>
    `,n=this.baseCardTypes.filter(t=>this.isAddedCard(t.type)),o=[{key:"add-new-card",title:e.addNewCard,cards:[i],visible:!0,isVisible:this._visiblePanel.has("add-new-card")},{key:"added-cards",title:e.customCards,cards:this.renderCardItems(n),visible:this.isAnyAddedCard,isVisible:!0,hideToggle:!0}].map(t=>Object.assign(Object.assign({},t),{toggle:()=>this._toggleSubButtonPanel(t.key)})).map(t=>this._renderSection(t));return pt`<ha-alert alert-type="info">${e.info}</ha-alert>${o}`}_renderSubCardConfig(t){if(!t)return pt``;const{name:e,icon:i}=t,o=pt`
      <div class="sub-card-header">
        <ha-icon-button .path=${n} @click=${()=>this._closeSubCardEditor(t)}></ha-icon-button>
        <div class="card-tab active">
          <ha-button>${e}</ha-button>
          <ha-icon icon=${i}></ha-icon>
        </div>
      </div>
    `,a=pt`
      <custom-button-template
        .hass=${this.hass}
        .editor=${this}
        .button=${this._getButtonConfig(t.button)}
        .card=${t}
        .isButtonPreview=${this._btnPreview}
        @custom-button-changed=${this._customBtnChanged}
      ></custom-button-template>
    `,r=pt`
      <custom-card-ui-editor
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .editor=${this}
        ._config=${this._config}
        .cardType=${t}
        .isCardPreview=${this._cardPreview}
        .isCustomCard=${this.useCustomCard(t.config)}
        .isAddedCard=${this.isAddedCard(t.type)}
        @custom-card-editor-changed=${t=>this._handleCustomCardEditorChange(t)}
      ></custom-card-ui-editor>
    `,s=pt`${this._renderTireConfig()}`,l=[{key:"buttonConfig",label:"Button Config",content:a},{key:"cardConfig",label:"Card Config",content:r}];"tyreCards"===t.type&&l.push({key:"tireConfig",label:"Tire Config",content:s});const c=Bs({activeTabIndex:this._activeTabIndex||0,onTabChange:t=>this._activeTabIndex=t,tabs:l});return pt` <div class="sub-card-config">${o} ${c}</div> `}_renderShowOptions(){var t;const e=xo(this._selectedLanguage).filter(t=>"enable_map_popup"!==t.configKey&&"show_address"!==t.configKey),i=Object.assign({},Object.fromEntries(e.map(t=>[t.configKey,this._config[t.configKey]]))),n={button_grid:null===(t=this._config)||void 0===t?void 0:t.button_grid},o=kh(),a=this._renderSection({key:"section-order",title:"Section Order",isVisible:this._visiblePanel.has("section-order"),toggle:()=>this._toggleSubButtonPanel("section-order"),cards:this._renderSectionOrder()}),r=this._createHaForm(n,o);return pt`
      ${this._createHaForm(i,ah(e),"show_options")} ${a} ${r}
    `}_renderSectionOrder(){var t;if(this._reloadSectionList)return pt` <ha-spinner .size=${"small"}></ha-spinner> `;const e=(null===(t=this._config.extra_configs)||void 0===t?void 0:t.section_order)||[];return pt`
      <ha-sortable handle-selector=".handle" @item-moved=${this._sectionMoved}>
        <div id="section-list">
          ${Dl(e,t=>t,(t,e)=>pt`
                <div class="card-type-item" data-id=${t} data-index=${e}>
                  <div class="handle">
                    <ha-icon-button .path=${h}> </ha-icon-button>
                  </div>
                  <div class="card-type-row">
                    <div class="card-type-icon">
                      <div class="icon-background">
                        <ha-icon icon="mdi:numeric-${e+1}-circle"></ha-icon>
                      </div>
                    </div>
                    <div class="card-type-content">
                      <span class="primary">${t.replace(/_/g," ").toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              `)}
        </div>
      </ha-sortable>
    `}_sectionMoved(t){var e;t.stopPropagation();const{oldIndex:i,newIndex:n}=t.detail,o=[...(null===(e=this._config.extra_configs)||void 0===e?void 0:e.section_order)||[]];o.splice(n,0,o.splice(i,1)[0]),this._config=Object.assign(Object.assign({},this._config),{extra_configs:Object.assign(Object.assign({},this._config.extra_configs),{section_order:o})}),pl(this,"config-changed",{config:this._config})}_renderThemesConfig(){var t,e;const i=vo.map(t=>t.key),n=[...rh(i),...lh],o={selected_language:null===(t=this._config)||void 0===t?void 0:t.selected_language,selected_theme:null===(e=this._config)||void 0===e?void 0:e.selected_theme};return this._createHaForm(o,n)}_renderImageConfig(){return pt`<panel-images .editor=${this} .config=${this._config}></panel-images>`}_renderMapPopupConfig(){var t,e,i,n,o;const a=this._config.map_popup_config||{},r={device_tracker:this._config.device_tracker||"",show_map:null!==(t=this._config.show_map)&&void 0!==t&&t,enable_map_popup:null!==(e=this._config.enable_map_popup)&&void 0!==e&&e,hours_to_show:null!==(i=a.hours_to_show)&&void 0!==i?i:0,default_zoom:null!==(n=a.default_zoom)&&void 0!==n?n:14,theme_mode:null!==(o=a.theme_mode)&&void 0!==o?o:"auto",google_api_key:this._config.google_api_key||""},s=[{name:"show_map",label:this.localize("editor.showOpts.show_map"),selector:{boolean:{}}},{name:"enable_map_popup",label:this.localize("editor.showOpts.enable_map_popup"),selector:{boolean:{}}},{name:"device_tracker",label:this.localize("editor.mapConfig.device_tracker")||"Device tracker",selector:{entity:{domain:["device_tracker"]}}},{name:"",type:"grid",column_min_width:"140px",schema:[{name:"default_zoom",label:this.localize("editor.mapConfig.default_zoom")||"Default zoom",selector:{number:{min:1,max:20,step:1,mode:"box"}}},{name:"hours_to_show",label:this.localize("editor.mapConfig.hours_to_show")||"Hours to show",selector:{number:{min:0,max:168,step:1,mode:"box"}}},{name:"theme_mode",label:this.localize("editor.mapConfig.theme_mode")||"Theme mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}]}}}]},{name:"google_api_key",label:this.localize("editor.mapConfig.google_api_key")||"Google Geocoding API key (optional)",selector:{text:{}}}];return pt`
      <ha-form
        .hass=${this.hass}
        .data=${r}
        .schema=${s}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${t=>{const e=t.detail.value,i=Object.assign({},this._config);i.show_map=e.show_map,i.enable_map_popup=e.enable_map_popup,i.device_tracker=e.device_tracker,i.google_api_key=e.google_api_key,i.map_popup_config=Object.assign(Object.assign({},this._config.map_popup_config||{}),{hours_to_show:e.hours_to_show,default_zoom:e.default_zoom,theme_mode:e.theme_mode}),this._config=i,this.configChanged()}}
      ></ha-form>
    `}_renderServicesConfig(){var t;const e=this.localize("editor.common.infoServices"),i=Object.entries(Fs(this._selectedLanguage)).map(([t,{name:e}])=>({value:t,label:e})),n=ch(i),o={services:null===(t=this._config)||void 0===t?void 0:t.services},a=this._createHaForm(o,n);return pt` <ha-alert alert-type="info">${e}</ha-alert>${a}`}_renderVersionInfo(){const{version:t,updated:e}=this._latestRelease;return pt`
      <div class="version">
        <span>
          ${e?pt`version: ${Rn}`:pt`version: ${Rn} -> <span class="update">${t}</span>`}
        </span>
      </div>
      ${this._renderUpdateToast()}
    `}_renderUpdateToast(){const t=Ya(Rn,this._latestRelease.version);if(0===t||this._toastDissmissed)return pt``;const e={"-1":{title:"New version available",icon:"🎉"},1:{title:"You are using a beta version",icon:"🚨"}};return pt`
      <div id="toast-update">
        <ha-alert
          alert-type="info"
          title="${e[t].title}"
          dismissable="true"
          @alert-dismissed-clicked=${()=>this._handleToastUpdateDismissed()}
        >
          <span class="alert-icon" slot="icon">${e[t].icon}</span>
          <span>Latest: ${this._latestRelease.version}</span>
        </ha-alert>
      </div>
    `}_renderToast(t){const e=`toast_${t}`;return pt`
      <div id="${e}" class="toast">
        <ha-alert alert-type="warning" dismissable @alert-dismissed-clicked=${()=>this._handleAlertDismissed(e)}
          >Default alert message
        </ha-alert>
      </div>
    `}_renderSuccesToast(t){return pt`
      <div id="${`toast_${t}_success`}" class="toast">
        <ha-alert alert-type="success">Success alert message</ha-alert>
      </div>
    `}_renderTireConfig(){var t,e,i,n,o;const a=this.localize("editor.customTireBackground.info"),r=(null===(e=null===(t=this._config.extra_configs)||void 0===t?void 0:t.tire_card_custom)||void 0===e?void 0:e.background.startsWith("/api/"))||!1,s=pt`
      <ha-alert alert-type="info">${a}</ha-alert>
      <div class="custom-background-wrapper">
        <ha-textfield
          .label=${"Tire background url"}
          .disabled=${r}
          .value=${null===(i=this._config.extra_configs)||void 0===i?void 0:i.tire_card_custom.background}
          .configIndex=${"extra_configs"}
          .configValue=${"background"}
          @change=${this._valueChanged}
        ></ha-textfield>
      </div>

      <div class="custom-background-wrapper">
        ${(null===(n=this._config.extra_configs)||void 0===n?void 0:n.tire_card_custom.background)?pt` <ha-button @click=${()=>this._removeTireBackground()}> Use Defaut image </ha-button> `:pt` <ha-button @click=${()=>{var t,e;return null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("file-upload-new"))||void 0===e?void 0:e.click()}}>
                Upload image
              </ha-button>
              <input
                type="file"
                id="file-upload-new"
                class="file-input"
                @change=${t=>this._handleTireBackgroundUpload(t)}
                accept="image/*"
              />`}
        <ha-button @click=${()=>this._toggleTirePreview()}>
          ${this._isTirePreview?"Close preview":"Preview"}</ha-button
        >
      </div>
    `,l=(null===(o=this._config.extra_configs)||void 0===o?void 0:o.tire_card_custom)||{},c=[{value:l.image_size||100,label:"Base image size",configValue:"image_size",pickerType:"number",options:{selector:{number:{max:200,min:0,mode:"slider",step:1}}}},{value:l.value_size||100,label:"Name & Value size",configValue:"value_size",pickerType:"number",options:{selector:{number:{max:150,min:50,mode:"slider",step:1}}}},{value:l.top||50,label:(l.horizontal?"Horizontal":"Vertical")+" position",configValue:"top",pickerType:"number",options:{selector:{number:{max:100,min:0,mode:"slider",step:1}}}},{value:l.left||50,label:(l.horizontal?"Vertical":"Horizontal")+" position",configValue:"left",pickerType:"number",options:{selector:{number:{max:100,min:0,mode:"slider",step:1}}}},{value:l.horizontal||!1,label:"Horizontal layout",configValue:"horizontal",pickerType:"selectorBoolean"}],d=pt` <div class="card-button-cfg">
      ${c.map(t=>this.generateItemPicker(Object.assign(Object.assign({},t),{configIndex:"extra_configs",configType:"tire_card_custom"})))}
      <ha-button class="item-content" @click=${()=>this.resetTireImageSizes()}
        >Reset <ha-icon icon="mdi:restore"></ha-icon
      ></ha-button>
    </div>`;return pt`${s} ${d}`}_renderSection({key:t,title:e,isVisible:i,toggle:n,cards:o,hideHeader:a=!1,hideToggle:r=!1}){return pt`
      <div class="card-types" id="${t}">
        ${a?gt:pt`
              <div class="header-sm" @click="${()=>n()}" ?interactive=${!r}>
                <span>${e}</span>
                <div section-id="${t}" class="subcard-icon" ?active=${i} ?hide=${r}>
                  <ha-icon icon="mdi:chevron-down"></ha-icon>
                </div>
              </div>
            `}
        <div class="sub-card-rows" ?hidden=${!i}>${o}</div>
      </div>
    `}_toggleSubButtonPanel(t){this._visiblePanel.has(t)?this._visiblePanel.delete(t):this._visiblePanel.add(t),this.requestUpdate()}_renderItemRow(t,e){const i=this.isButtonHidden(t.button),n=this.isAddedCard(t.type),{icon:o,name:a,type:r,config:s}=t;return pt` <div class="card-type-item" data-id=${t.type}>
      ${n&&!i?pt`<div class="handle"><ha-icon-button .path=${h}> </ha-icon-button></div>`:gt}
      <div class="card-type-row" ?disabled=${i}>
        <div class="card-type-icon">
          <div class="icon-background">
            <ha-icon
              icon=${o||`mdi:numeric-${e+1}-circle`}
              @click=${()=>this._activeSubcardType=r}
            ></ha-icon>
          </div>
        </div>
        <div class="card-type-content">
          <span class="secondary">Config name: ${s}</span>
          <div class="primary">${a}</div>
        </div>
      </div>
      <div class="card-type-actions">
        <ha-button-menu
          .corner=${"BOTTOM_START"}
          .fixed=${!0}
          .menuCorner=${"START"}
          .activatable=${!0}
          .naturalMenuWidth=${!0}
          @closed=${t=>t.stopPropagation()}
        >
          <div class="action-icon" slot="trigger"><ha-icon icon="mdi:dots-vertical"></ha-icon></div>
          <mwc-list-item @click=${()=>this._activeSubcardType=r} .graphic=${"icon"}>
            <ha-icon icon="mdi:pencil" slot="graphic"></ha-icon>
            Edit
          </mwc-list-item>
          <mwc-list-item @click=${()=>this._toggleButtonHide(t.button)} .graphic=${"icon"}>
            <ha-icon icon="${i?"mdi:eye":"mdi:eye-off"}" slot="graphic"></ha-icon>
            ${i?"Unhide":"Hide"} button on card
          </mwc-list-item>
          ${n?pt`
                <mwc-list-item
                  @click=${()=>this._confirmDeleteType=r}
                  .graphic=${"icon"}
                  style="color: var(--error-color)"
                >
                  <ha-icon icon="mdi:delete" slot="graphic" style="color: var(--error-color)"></ha-icon>
                  Delete
                </mwc-list-item>
              `:gt}
        </ha-button-menu>
        ${this._confirmDeleteType===r?pt` <div class="confirm-delete">
                  <span>${this.localize("editor.buttonConfig.deleteConfirm")}</span>
                  <ha-button @click=${this._removeCustomCard(r)}><ha-icon icon="mdi:check"></ha-button>
                  <ha-button @click=${()=>this._confirmDeleteType=null}><ha-icon icon="mdi:close"> </ha-icon></ha-button>
                </div>`:gt}
      </div>
    </div>`}_buttonsMoved(t){t.stopPropagation();const{oldIndex:e,newIndex:i}=t.detail,n=[...Object.entries(this._config.added_cards)];n.splice(i,0,n.splice(e,1)[0]);const o=n[i][0],a=n.reduce((t,[e,i],n)=>(t[e]=Object.assign(Object.assign({},i),{order:n}),t),{});this._config=Object.assign(Object.assign({},this._config),{added_cards:a}),this.configChanged(),this.getBaseCardTypes(),this.requestUpdate(),this._handleSwipeToButton(o)}generateItemPicker(t,e="item-content"){return pt`
      <div class=${e}>
        ${zs(Object.assign(Object.assign({},t),{component:this}))}
      </div>
    `}resetTireImageSizes(){var t;this._config=Object.assign(Object.assign({},this._config),{extra_configs:Object.assign(Object.assign({},this._config.extra_configs),{tire_card_custom:Object.assign(Object.assign({},null===(t=this._config.extra_configs)||void 0===t?void 0:t.tire_card_custom),{image_size:100,value_size:100,top:50,left:50,horizontal:!1})})}),this.configChanged()}async _handleTireBackgroundUpload(t){var e;if(!t.target.files||0===t.target.files.length)return;const i=t.target.files[0],n=await dr(this.hass,i);n&&(this._config=Object.assign(Object.assign({},this._config),{extra_configs:Object.assign(Object.assign({},this._config.extra_configs),{tire_card_custom:Object.assign(Object.assign({},null===(e=this._config.extra_configs)||void 0===e?void 0:e.tire_card_custom),{background:n})})}),this.configChanged())}_removeTireBackground(){var t;this._config=Object.assign(Object.assign({},this._config),{extra_configs:Object.assign(Object.assign({},this._config.extra_configs),{tire_card_custom:Object.assign(Object.assign({},null===(t=this._config.extra_configs)||void 0===t?void 0:t.tire_card_custom),{background:""})})}),this.configChanged()}_handleCustomCardEditorChange(t){const{type:e,config:i}=t.detail;switch(e){case"use_custom_cards":this._customBtnChanged(t);break;case"toggle_preview_card":this._toggleCardPreview(i);break;default:return}}_removeCustomCard(t){return()=>{this._confirmDeleteType=null;const e=Object.assign({},this._config.added_cards);delete e[t],this._config=Object.assign(Object.assign({},this._config),{added_cards:e}),this.configChanged(),this.getBaseCardTypes(),this.requestUpdate()}}_handleCardTypeInput(t){t.stopPropagation();const e=t.target,i=e.configValue,n=e.toastId,o=e.errorMsg,a=e.value,r=new Map(this._newCardType);r.set(i,a),r.set("toastId",n),r.set("errorMsg",o),this._newCardType=r,this.requestUpdate()}_addNewCard(){var t,e;if(!this._config)return;const i=this._newCardType.get("toastId"),n=this._newCardType.get("errorMsg"),o=this._newCardType.get("type"),a=this._newCardType.get("icon")||"mdi:car";if(o&&i&&n){const n=o.trim().replace(/ /g,"_").toLowerCase();if((null===(t=this._config.added_cards)||void 0===t?void 0:t.hasOwnProperty(n))||(null===(e=this._config.use_custom_cards)||void 0===e?void 0:e.hasOwnProperty(n))){const t=this.localize("card.common.toastCardAlreadyExists")+`: ${n}`;return void this.launchToast(i,t)}let r=Object.assign({},this._config.added_cards||{});r=Object.assign(Object.assign({},r),{[n]:{cards:[],button:{primary:o,icon:a,enabled:!0,hide:!1,button_type:"default",button_action:{entity:""}}}}),this._config=Object.assign(Object.assign({},this._config),{added_cards:r});const s=this.localize("editor.buttonConfig.toastNewCard")+`: ${n}`;this.configChanged(),this.getBaseCardTypes(),this._newCardType.forEach((t,e)=>this._newCardType.delete(e)),this.updateComplete.then(()=>{this.launchToast("customButtonConfig",s,!0),setTimeout(()=>{this._dispatchCardEvent(`btn_${n}`)},500)})}}_toggleButtonHide(t){const e=this.isButtonHidden(t);if(this.isAddedCard(t)){const i=Object.assign({},this._config.added_cards);i[t].button.hide=!e;const n=this._rearrangeAddedCards(i);this._config=Object.assign(Object.assign({},this._config),{added_cards:n})}else{const i=Object.assign({},this._config);i[t].hide=!e,this._config=i}this.configChanged(),this.requestUpdate(),this.getBaseCardTypes()}_rearrangeAddedCards(t){const e=[...Object.entries(t)],i=Object.fromEntries([...e.filter(([,t])=>{var e;return!(null===(e=t.button)||void 0===e?void 0:e.hide)}),...e.filter(([,t])=>{var e;return null===(e=t.button)||void 0===e?void 0:e.hide})]);return i}_handlePanelExpandedChanged(t,e){var i;const n=t.target;"imagesConfig"===e&&n.expanded&&this._panelImages.initSortable();const o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll("ha-expansion-panel");o.forEach(t=>{t.expanded?t.style.display="block":t.style.display=t.id===e?"block":"none"}),[...o].some(t=>t.expanded)||o.forEach(t=>{t.style.display="block"})}_createHaForm(t,e,i){return pt`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${e}
        .configKey=${i}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._formValueChanged}
      ></ha-form>
    `}_computeLabel(t){return"entity"===t.name?"":t.label||t.name}_computeHelper(t){return t.helper||""}_formValueChanged(t){if(!this._config||!this.hass)return;const e=t.target.configKey,i=t.detail.value,n={};return null==e?(this._config=Object.assign(Object.assign({},this._config),i),void pl(this,"config-changed",{config:this._config})):"show_options"!==e||"object"!=typeof i?(n[e]=i,Object.keys(n).length>0?(this._config=Object.assign(Object.assign({},this._config),n),void this.configChanged()):void 0):void this._setOrderList(i)}launchToast(t,e="",i=!1){var n;const o=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById(`toast_${t}${i?"_success":""}`),a=null==o?void 0:o.querySelector("ha-alert");o&&(a.innerHTML=e||"Default alert message",o.classList.add("show"),i&&setTimeout(()=>{this._handleAlertDismissed(`toast_${t}_success`)},3e3))}_handleAlertDismissed(t){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(t);i&&i.classList.remove("show")}_handleToastUpdateDismissed(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("toast-update");e&&(e.remove(),this._toastDissmissed=!0)}_customBtnChanged(t){var e;t.stopPropagation();const{configBtnType:i,value:n}=t.detail,o={};this._btnPreview&&this._config.btn_preview&&(this._config=Object.assign(Object.assign({},this._config),{btn_preview:Object.assign({},n)})),(null===(e=this._config.added_cards)||void 0===e?void 0:e.hasOwnProperty(i))?this._config=Object.assign(Object.assign({},this._config),{added_cards:Object.assign(Object.assign({},this._config.added_cards),{[i]:Object.assign(Object.assign({},this._config.added_cards[i]),{button:Object.assign(Object.assign({},this._config.added_cards[i].button),n)})})}):(o[i]=Object.assign(Object.assign({},this._config[i]),n),this._config=Object.assign(Object.assign({},this._config),o)),this._debouncedCustomBtnChanged()}_setOrderList(t){var e;const i=["show_header_info","show_slides","show_map","show_buttons"],n=Object.fromEntries(Object.entries(t).filter(([t])=>i.includes(t)));let o=[...[...(null===(e=this._config.extra_configs)||void 0===e?void 0:e.section_order)||[]]];const a={show_header_info:wn.HEADER_INFO,show_slides:wn.IMAGES_SLIDER,show_map:wn.MINI_MAP,show_buttons:wn.BUTTONS};for(const t of Object.keys(a))!0===n[t]?o.push(a[t]):!1===n[t]&&(o=o.filter(e=>e!==a[t]));o=[...new Set(o)];const r=Object.assign(Object.assign({},this._config.extra_configs),{section_order:o});this._config=Object.assign(Object.assign(Object.assign({},this._config),{extra_configs:r}),t),pl(this,"config-changed",{config:this._config}),this._reloadSectionList=!0,setTimeout(()=>{this._reloadSectionList=!1},200)}_valueChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=t.target,n=i.configValue,o=i.configType,a=i.configIndex;let r=i.value;const s={};if("map_popup_config"===o){const e=n;if(r=t.detail.value,this._config.map_popup_config[e]&&this._config.map_popup_config[e]===r)return;s.map_popup_config=Object.assign(Object.assign({},this._config.map_popup_config),{[e]:r})}else if(["theme","mode"].includes(n)){const t=n;if(this._config.selected_theme&&this._config.selected_theme[t]===r)return;{let e=this._config.selected_theme||{};e=Object.assign(Object.assign({},e),{[t]:r}),s.selected_theme=e}}else if("selected_language"===n)this._selectedLanguage="system"===r?this.hass.language:r,s.selected_language=r;else if("button_grid"===o)r=t.detail.value,s.button_grid=Object.assign(Object.assign({},this._config.button_grid),r);else if("extra_configs"===a){const o=n;r="background"===o?i.value:t.detail.value,s.extra_configs=Object.assign(Object.assign({},this._config.extra_configs),{tire_card_custom:Object.assign(Object.assign({},null===(e=this._config.extra_configs)||void 0===e?void 0:e.tire_card_custom),{[o]:parseInt(r)||r})})}else"device_tracker"===n?s.device_tracker=r:"mini_map_height"===n?(r=t.detail.value,s.extra_configs=Object.assign(Object.assign({},this._config.extra_configs),{mini_map_height:parseInt(r)||r})):"maptiler_api_key"===n?(r=i.value,""!==r.trim()&&""!==r||(r=void 0),s.extra_configs=Object.assign(Object.assign({},this._config.extra_configs),{maptiler_api_key:r})):"google_api_key"===n?(r=i.value,""!==r.trim()&&""!==r||(r=void 0),s.google_api_key=r):(r=void 0!==i.checked?i.checked:t.detail.value,s[n]=r);Object.keys(s).length>0&&(this._config=Object.assign(Object.assign({},this._config),s),this.configChanged())}configChanged(){pl(this,"config-changed",{config:this._config})}_toggleCardPreview(t){var e;if(this._btnPreview&&(this._dispatchCardEvent("close_preview"),this._btnPreview=!1),this._cardPreview)this._config&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:null})),this._cardPreview=!1,this.configChanged(),setTimeout(()=>{this._dispatchCardEvent("close_card_preview")},50);else{let i;if(i=(null===(e=this._config.added_cards)||void 0===e?void 0:e.hasOwnProperty(t))?this._config.added_cards[t].cards:this._config[t],!i||0===i.length)return void this.launchToast("customCardConfig",`No card config found: ${t}`);this._config&&(this._config=Object.assign(Object.assign({},this._config),{card_preview:i})),this._cardPreview=!0,this.configChanged(),setTimeout(()=>{this._dispatchCardEvent("show_card_preview")},50)}}_toggleShowButton(t){this._btnPreview?(this._toggleBtnPreview(t.button),this._btnPreview=!1,setTimeout(()=>{this._dispatchCardEvent(`btn_${t.type}`)},50)):this._dispatchCardEvent(`btn_${t.type}`)}_toggleBtnPreview(t){var e;if(this._cardPreview&&(this._dispatchCardEvent("close_card_preview"),this._cardPreview=!1),this._btnPreview)this._config&&(this._config=Object.assign(Object.assign({},this._config),{btn_preview:null})),this._btnPreview=!1,this.configChanged(),setTimeout(()=>{this._dispatchCardEvent("close_preview")},50);else{let i;i=(null===(e=this._config.added_cards)||void 0===e?void 0:e.hasOwnProperty(t))?this._config.added_cards[t].button:this._config[t],this._config&&(this._config=Object.assign(Object.assign({},this._config),{btn_preview:Object.assign({},i)})),this.configChanged(),this._btnPreview=!0,setTimeout(()=>{this._dispatchCardEvent("show_button_preview")},50)}}_toggleTirePreview(){var t;if(this._cardPreview&&(this._dispatchCardEvent("close_card_preview"),this._cardPreview=!1),this._isTirePreview)this._config&&(this._config=Object.assign(Object.assign({},this._config),{tire_preview:null})),this._isTirePreview=!1,this.configChanged(),setTimeout(()=>{this._dispatchCardEvent("close_preview")},50);else{const e=null===(t=this._config.extra_configs)||void 0===t?void 0:t.tire_card_custom;this._config&&(this._config=Object.assign(Object.assign({},this._config),{tire_preview:Object.assign({},e)})),this._isTirePreview=!0,this.configChanged(),setTimeout(()=>{this._dispatchCardEvent("toggle_preview_tire")},50)}}_closeSubCardEditor(t){const e=()=>{this._activeSubcardType=null,this.getBaseCardTypes(),this._cardPreview=!1,this._btnPreview=!1};this._activeSubcardType?this._activeSubcardType!==t.type||this._cardPreview&&this._btnPreview||(this._activeSubcardType=null):(this._cardPreview?this._toggleCardPreview(t.type):this._btnPreview&&this._toggleBtnPreview(t.button),this.updateComplete.then(e)),this.updateComplete.then(()=>{this._toggleConfigPanel(t.type)})}_toggleConfigPanel(t){var e;let i="buttonConfig";["tripCards","vehicleCards","ecoCards","tyreCards"].includes(t)||(i="customButtonConfig");(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("ha-expansion-panel")).forEach(t=>{t.style.display=t.id===i?"block":"none",t.expanded=t.id===i})}_dispatchCardEvent(t){const e=new CustomEvent("editor-event",{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(e)}static get styles(){return dl}};t([jt({attribute:!1})],Eh.prototype,"hass",void 0),t([jt({attribute:!1})],Eh.prototype,"lovelace",void 0),t([jt({attribute:!1})],Eh.prototype,"_config",void 0),t([jt({attribute:!1})],Eh.prototype,"baseCardTypes",void 0),t([Rt()],Eh.prototype,"_btnPreview",void 0),t([Rt()],Eh.prototype,"_cardPreview",void 0),t([Rt()],Eh.prototype,"_isTirePreview",void 0),t([Rt()],Eh.prototype,"_activeTabIndex",void 0),t([Rt()],Eh.prototype,"_activeSubcardType",void 0),t([Rt()],Eh.prototype,"_confirmDeleteType",void 0),t([Rt()],Eh.prototype,"_selectedLanguage",void 0),t([Rt()],Eh.prototype,"_cardSortable",void 0),t([Rt()],Eh.prototype,"_sectionSortable",void 0),t([Rt()],Eh.prototype,"_latestRelease",void 0),t([Rt()],Eh.prototype,"_modelName",void 0),t([Rt()],Eh.prototype,"_reloadSectionList",void 0),t([Rt()],Eh.prototype,"_visiblePanel",void 0),t([Rt()],Eh.prototype,"_newCardType",void 0),t([Ht("panel-images")],Eh.prototype,"_panelImages",void 0),t([Ht("custom-card-ui-editor")],Eh.prototype,"_customCardEditor",void 0),t([Ht("custom-button-template")],Eh.prototype,"_customButtonTemplate",void 0),Eh=t([It("canyonero-vehicle-dashboard-editor")],Eh),window.customCards=window.customCards||[],window.customCards.push({type:"canyonero-vehicle-dashboard",name:"Canyonero",preview:!0,description:"Universal vehicle dashboard card for Home Assistant — works with VAG Connect, Mercedes mbapi2020, Tesla and more.",documentationURL:"https://github.com/its-me-prash/vag-connect-cards#configuration"});var Mh=Object.freeze({__proto__:null,get CanyoneroEditor(){return Eh}});export{Th as Canyonero};
