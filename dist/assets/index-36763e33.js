function kx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xm={exports:{}},gs={},Zm={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Sx=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),Ex=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),zx=Symbol.for("react.provider"),Tx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),Ax=Symbol.for("react.lazy"),Au=Symbol.iterator;function Dx(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var eh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},th=Object.assign,nh={};function hi(e,t,n){this.props=e,this.context=t,this.refs=nh,this.updater=n||eh}hi.prototype.isReactComponent={};hi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rh(){}rh.prototype=hi.prototype;function hd(e,t,n){this.props=e,this.context=t,this.refs=nh,this.updater=n||eh}var gd=hd.prototype=new rh;gd.constructor=hd;th(gd,hi.prototype);gd.isPureReactComponent=!0;var Du=Array.isArray,ih=Object.prototype.hasOwnProperty,xd={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ih.call(t,r)&&!oh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),p=0;p<l;p++)d[p]=arguments[p+2];i.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$o,type:e,key:o,ref:s,props:i,_owner:xd.current}}function Fx(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vd(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function Ox(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fu=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ox(""+e.key):t.toString(36)}function ka(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $o:case Sx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+el(s,0):r,Du(i)?(n="",e!=null&&(n=e.replace(Fu,"$&/")+"/"),ka(i,t,n,"",function(p){return p})):i!=null&&(vd(i)&&(i=Fx(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Du(e))for(var l=0;l<e.length;l++){o=e[l];var d=r+el(o,l);s+=ka(o,t,n,d,i)}else if(d=Dx(e),typeof d=="function")for(e=d.call(e),l=0;!(o=e.next()).done;)o=o.value,d=r+el(o,l++),s+=ka(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Io(e,t,n){if(e==null)return e;var r=[],i=0;return ka(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ix(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Sa={transition:null},Lx={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:xd};function sh(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Io,forEach:function(e,t,n){Io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Io(e,function(){t++}),t},toArray:function(e){return Io(e,function(t){return t})||[]},only:function(e){if(!vd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=hi;me.Fragment=Cx;me.Profiler=Nx;me.PureComponent=hd;me.StrictMode=Ex;me.Suspense=Px;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;me.act=sh;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=th({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=xd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)ih.call(t,d)&&!oh.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){l=Array(d);for(var p=0;p<d;p++)l[p]=arguments[p+2];r.children=l}return{$$typeof:$o,type:e.type,key:i,ref:o,props:r,_owner:s}};me.createContext=function(e){return e={$$typeof:Tx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zx,_context:e},e.Consumer=e};me.createElement=ah;me.createFactory=function(e){var t=ah.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:$x,render:e}};me.isValidElement=vd;me.lazy=function(e){return{$$typeof:Ax,_payload:{_status:-1,_result:e},_init:Ix}};me.memo=function(e,t){return{$$typeof:_x,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Sa.transition;Sa.transition={};try{e()}finally{Sa.transition=t}};me.unstable_act=sh;me.useCallback=function(e,t){return ct.current.useCallback(e,t)};me.useContext=function(e){return ct.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};me.useEffect=function(e,t){return ct.current.useEffect(e,t)};me.useId=function(){return ct.current.useId()};me.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return ct.current.useMemo(e,t)};me.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};me.useRef=function(e){return ct.current.useRef(e)};me.useState=function(e){return ct.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return ct.current.useTransition()};me.version="18.3.1";Zm.exports=me;var C=Zm.exports;const de=md(C),Rx=kx({__proto__:null,default:de},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=C,Vx=Symbol.for("react.element"),jx=Symbol.for("react.fragment"),Bx=Object.prototype.hasOwnProperty,Ux=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hx={key:!0,ref:!0,__self:!0,__source:!0};function lh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Bx.call(t,r)&&!Hx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vx,type:e,key:o,ref:s,props:i,_owner:Ux.current}}gs.Fragment=jx;gs.jsx=lh;gs.jsxs=lh;Xm.exports=gs;var bd=Xm.exports;const Yt=bd.Fragment,a=bd.jsx,c=bd.jsxs;var sc={},ch={exports:{}},zt={},dh={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,X){var _=R.length;R.push(X);e:for(;0<_;){var G=_-1>>>1,M=R[G];if(0<i(M,X))R[G]=X,R[_]=M,_=G;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var X=R[0],_=R.pop();if(_!==X){R[0]=_;e:for(var G=0,M=R.length,J=M>>>1;G<J;){var Q=2*(G+1)-1,se=R[Q],F=Q+1,pe=R[F];if(0>i(se,_))F<M&&0>i(pe,se)?(R[G]=pe,R[F]=_,G=F):(R[G]=se,R[Q]=_,G=Q);else if(F<M&&0>i(pe,_))R[G]=pe,R[F]=_,G=F;else break e}}return X}function i(R,X){var _=R.sortIndex-X.sortIndex;return _!==0?_:R.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],p=[],h=1,v=null,x=3,b=!1,w=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var X=n(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=R)r(p),X.sortIndex=X.expirationTime,t(d,X);else break;X=n(p)}}function y(R){if(k=!1,g(R),!w)if(n(d)!==null)w=!0,Z(N);else{var X=n(p);X!==null&&L(y,X.startTime-R)}}function N(R,X){w=!1,k&&(k=!1,m($),$=-1),b=!0;var _=x;try{for(g(X),v=n(d);v!==null&&(!(v.expirationTime>X)||R&&!A());){var G=v.callback;if(typeof G=="function"){v.callback=null,x=v.priorityLevel;var M=G(v.expirationTime<=X);X=e.unstable_now(),typeof M=="function"?v.callback=M:v===n(d)&&r(d),g(X)}else r(d);v=n(d)}if(v!==null)var J=!0;else{var Q=n(p);Q!==null&&L(y,Q.startTime-X),J=!1}return J}finally{v=null,x=_,b=!1}}var T=!1,O=null,$=-1,H=5,j=-1;function A(){return!(e.unstable_now()-j<H)}function V(){if(O!==null){var R=e.unstable_now();j=R;var X=!0;try{X=O(!0,R)}finally{X?B():(T=!1,O=null)}}else T=!1}var B;if(typeof f=="function")B=function(){f(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,le=re.port2;re.port1.onmessage=V,B=function(){le.postMessage(null)}}else B=function(){S(V,0)};function Z(R){O=R,T||(T=!0,B())}function L(R,X){$=S(function(){R(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,Z(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(R){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var _=x;x=X;try{return R()}finally{x=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,X){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var _=x;x=R;try{return X()}finally{x=_}},e.unstable_scheduleCallback=function(R,X,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,R){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=_+M,R={id:h++,callback:X,priorityLevel:R,startTime:_,expirationTime:M,sortIndex:-1},_>G?(R.sortIndex=_,t(p,R),n(d)===null&&R===n(p)&&(k?(m($),$=-1):k=!0,L(y,_-G))):(R.sortIndex=M,t(d,R),w||b||(w=!0,Z(N))),R},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(R){var X=x;return function(){var _=x;x=X;try{return R.apply(this,arguments)}finally{x=_}}}})(uh);dh.exports=uh;var qx=dh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx=C,Nt=qx;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ph=new Set,lo={};function wr(e,t){ai(e,t),ai(e+"Capture",t)}function ai(e,t){for(lo[e]=t,e=0;e<t.length;e++)ph.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,Yx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ou={},Iu={};function Wx(e){return lc.call(Iu,e)?!0:lc.call(Ou,e)?!1:Yx.test(e)?Iu[e]=!0:(Ou[e]=!0,!1)}function Qx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kx(e,t,n,r){if(t===null||typeof t>"u"||Qx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var yd=/[\-:]([a-z])/g;function wd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yd,wd);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yd,wd);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yd,wd);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function kd(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kx(t,n,i,r)&&(n=null),r||i===null?Wx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kn=Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),hh=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function wi(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,tl;function ji(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var d=`
`+i[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function Jx(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function pc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case Vr:return"Portal";case cc:return"Profiler";case Sd:return"StrictMode";case dc:return"Suspense";case uc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mh:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case Cd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ed:return t=e.displayName||null,t!==null?t:pc(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return pc(e(t))}catch{}}return null}function Xx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(t);case 8:return t===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zx(e){var t=gh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=Zx(e))}function xh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fc(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&kd(e,"checked",t,!1)}function mc(e,t){vh(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&hc(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hc(e,t,n){(t!=="number"||Ra(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bi=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Bi(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function bh(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,wh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e1=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){e1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function kh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function Sh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var t1=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(e,t){if(t){if(t1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yc=null;function Nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wc=null,ti=null,ni=null;function Bu(e){if(e=Ao(e)){if(typeof wc!="function")throw Error(U(280));var t=e.stateNode;t&&(t=ws(t),wc(e.stateNode,e.type,t))}}function Ch(e){ti?ni?ni.push(e):ni=[e]:ti=e}function Eh(){if(ti){var e=ti,t=ni;if(ni=ti=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function Nh(e,t){return e(t)}function zh(){}var il=!1;function Th(e,t,n){if(il)return e(t,n);il=!0;try{return Nh(e,t,n)}finally{il=!1,(ti!==null||ni!==null)&&(zh(),Eh())}}function uo(e,t){var n=e.stateNode;if(n===null)return null;var r=ws(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var kc=!1;if(vn)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){kc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{kc=!1}function n1(e,t,n,r,i,o,s,l,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(h){this.onError(h)}}var Wi=!1,Ma=null,Va=!1,Sc=null,r1={onError:function(e){Wi=!0,Ma=e}};function i1(e,t,n,r,i,o,s,l,d){Wi=!1,Ma=null,n1.apply(r1,arguments)}function o1(e,t,n,r,i,o,s,l,d){if(i1.apply(this,arguments),Wi){if(Wi){var p=Ma;Wi=!1,Ma=null}else throw Error(U(198));Va||(Va=!0,Sc=p)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uu(e){if(kr(e)!==e)throw Error(U(188))}function a1(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Uu(i),e;if(o===r)return Uu(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Ph(e){return e=a1(e),e!==null?_h(e):null}function _h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_h(e);if(t!==null)return t;e=e.sibling}return null}var Ah=Nt.unstable_scheduleCallback,Hu=Nt.unstable_cancelCallback,s1=Nt.unstable_shouldYield,l1=Nt.unstable_requestPaint,Ie=Nt.unstable_now,c1=Nt.unstable_getCurrentPriorityLevel,zd=Nt.unstable_ImmediatePriority,Dh=Nt.unstable_UserBlockingPriority,ja=Nt.unstable_NormalPriority,d1=Nt.unstable_LowPriority,Fh=Nt.unstable_IdlePriority,xs=null,sn=null;function u1(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:m1,p1=Math.log,f1=Math.LN2;function m1(e){return e>>>=0,e===0?32:31-(p1(e)/f1|0)|0}var Vo=64,jo=4194304;function Ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ui(l):(o&=s,o!==0&&(r=Ui(o)))}else s=n&~i,s!==0?r=Ui(s):o!==0&&(r=Ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wt(t),i=1<<n,r|=e[n],t&=~i;return r}function h1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Wt(o),l=1<<s,d=i[s];d===-1?(!(l&n)||l&r)&&(i[s]=h1(l,t)):d<=t&&(e.expiredLanes|=l),o&=~l}}function Cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=n}function x1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lh,$d,Rh,Mh,Vh,Ec=!1,Bo=[],Rn=null,Mn=null,Vn=null,po=new Map,fo=new Map,Pn=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function Si(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ao(t),t!==null&&$d(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b1(e,t,n,r,i){switch(t){case"focusin":return Rn=Si(Rn,e,t,n,r,i),!0;case"dragenter":return Mn=Si(Mn,e,t,n,r,i),!0;case"mouseover":return Vn=Si(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return po.set(o,Si(po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fo.set(o,Si(fo.get(o)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=sr(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=$h(n),t!==null){e.blockedOn=t,Vh(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yc=r,n.target.dispatchEvent(r),yc=null}else return t=Ao(n),t!==null&&$d(t),e.blockedOn=n,!1;t.shift()}return!0}function Gu(e,t,n){Ca(e)&&n.delete(t)}function y1(){Ec=!1,Rn!==null&&Ca(Rn)&&(Rn=null),Mn!==null&&Ca(Mn)&&(Mn=null),Vn!==null&&Ca(Vn)&&(Vn=null),po.forEach(Gu),fo.forEach(Gu)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Ec||(Ec=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,y1)))}function mo(e){function t(i){return Ci(i,e)}if(0<Bo.length){Ci(Bo[0],e);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Ci(Rn,e),Mn!==null&&Ci(Mn,e),Vn!==null&&Ci(Vn,e),po.forEach(t),fo.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Pn.shift()}var ri=kn.ReactCurrentBatchConfig,Ua=!0;function w1(e,t,n,r){var i=ye,o=ri.transition;ri.transition=null;try{ye=1,Pd(e,t,n,r)}finally{ye=i,ri.transition=o}}function k1(e,t,n,r){var i=ye,o=ri.transition;ri.transition=null;try{ye=4,Pd(e,t,n,r)}finally{ye=i,ri.transition=o}}function Pd(e,t,n,r){if(Ua){var i=Nc(e,t,n,r);if(i===null)hl(e,t,r,Ha,n),qu(e,r);else if(b1(i,e,t,n,r))r.stopPropagation();else if(qu(e,r),t&4&&-1<v1.indexOf(e)){for(;i!==null;){var o=Ao(i);if(o!==null&&Lh(o),o=Nc(e,t,n,r),o===null&&hl(e,t,r,Ha,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Ha=null;function Nc(e,t,n,r){if(Ha=null,e=Nd(r),e=sr(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function Bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c1()){case zd:return 1;case Dh:return 4;case ja:case d1:return 16;case Fh:return 536870912;default:return 16}default:return 16}}var Dn=null,_d=null,Ea=null;function Uh(){if(Ea)return Ea;var e,t=_d,n=t.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ea=i.slice(e,1<r?1-r:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function Yu(){return!1}function Tt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Uo:Yu,this.isPropagationStopped=Yu,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=Tt(gi),_o=Fe({},gi,{view:0,detail:0}),S1=Tt(_o),al,sl,Ei,vs=Fe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(al=e.screenX-Ei.screenX,sl=e.screenY-Ei.screenY):sl=al=0,Ei=e),al)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Wu=Tt(vs),C1=Fe({},vs,{dataTransfer:0}),E1=Tt(C1),N1=Fe({},_o,{relatedTarget:0}),ll=Tt(N1),z1=Fe({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=Tt(z1),$1=Fe({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=Tt($1),_1=Fe({},gi,{data:0}),Qu=Tt(_1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=F1[e])?!!t[e]:!1}function Dd(){return O1}var I1=Fe({},_o,{key:function(e){if(e.key){var t=A1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=Tt(I1),R1=Fe({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Tt(R1),M1=Fe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),V1=Tt(M1),j1=Fe({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=Tt(j1),U1=Fe({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=Tt(U1),q1=[9,13,27,32],Fd=vn&&"CompositionEvent"in window,Qi=null;vn&&"documentMode"in document&&(Qi=document.documentMode);var G1=vn&&"TextEvent"in window&&!Qi,Hh=vn&&(!Fd||Qi&&8<Qi&&11>=Qi),Ju=String.fromCharCode(32),Xu=!1;function qh(e,t){switch(e){case"keyup":return q1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Y1(e,t){switch(e){case"compositionend":return Gh(t);case"keypress":return t.which!==32?null:(Xu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Xu?null:e;default:return null}}function W1(e,t){if(Br)return e==="compositionend"||!Fd&&qh(e,t)?(e=Uh(),Ea=_d=Dn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hh&&t.locale!=="ko"?null:t.data;default:return null}}var Q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q1[e.type]:t==="textarea"}function Yh(e,t,n,r){Ch(r),t=qa(t,"onChange"),0<t.length&&(n=new Ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ki=null,ho=null;function K1(e){ig(e,0)}function bs(e){var t=qr(e);if(xh(t))return e}function J1(e,t){if(e==="change")return t}var Wh=!1;if(vn){var cl;if(vn){var dl="oninput"in document;if(!dl){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),dl=typeof ep.oninput=="function"}cl=dl}else cl=!1;Wh=cl&&(!document.documentMode||9<document.documentMode)}function tp(){Ki&&(Ki.detachEvent("onpropertychange",Qh),ho=Ki=null)}function Qh(e){if(e.propertyName==="value"&&bs(ho)){var t=[];Yh(t,ho,e,Nd(e)),Th(K1,t)}}function X1(e,t,n){e==="focusin"?(tp(),Ki=t,ho=n,Ki.attachEvent("onpropertychange",Qh)):e==="focusout"&&tp()}function Z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(ho)}function ev(e,t){if(e==="click")return bs(t)}function tv(e,t){if(e==="input"||e==="change")return bs(t)}function nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:nv;function go(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lc.call(t,i)||!Jt(e[i],t[i]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,t){var n=np(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function Kh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jh(){for(var e=window,t=Ra();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rv(e){var t=Jh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kh(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rp(n,o);var s=rp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iv=vn&&"documentMode"in document&&11>=document.documentMode,Ur=null,zc=null,Ji=null,Tc=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||Ur==null||Ur!==Ra(r)||(r=Ur,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&go(Ji,r)||(Ji=r,r=qa(zc,"onSelect"),0<r.length&&(t=new Ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},ul={},Xh={};vn&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ys(e){if(ul[e])return ul[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xh)return ul[e]=t[n];return e}var Zh=ys("animationend"),eg=ys("animationiteration"),tg=ys("animationstart"),ng=ys("transitionend"),rg=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){rg.set(e,t),wr(t,[e])}for(var pl=0;pl<op.length;pl++){var fl=op[pl],ov=fl.toLowerCase(),av=fl[0].toUpperCase()+fl.slice(1);Kn(ov,"on"+av)}Kn(Zh,"onAnimationEnd");Kn(eg,"onAnimationIteration");Kn(tg,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(ng,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function ap(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,o1(r,t,void 0,e),e.currentTarget=null}function ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],d=l.instance,p=l.currentTarget;if(l=l.listener,d!==o&&i.isPropagationStopped())break e;ap(i,l,p),o=d}else for(s=0;s<r.length;s++){if(l=r[s],d=l.instance,p=l.currentTarget,l=l.listener,d!==o&&i.isPropagationStopped())break e;ap(i,l,p),o=d}}}if(Va)throw e=Sc,Va=!1,Sc=null,e}function Ee(e,t){var n=t[Dc];n===void 0&&(n=t[Dc]=new Set);var r=e+"__bubble";n.has(r)||(og(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),og(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[qo]){e[qo]=!0,ph.forEach(function(n){n!=="selectionchange"&&(sv.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,ml("selectionchange",!1,t))}}function og(e,t,n,r){switch(Bh(t)){case 1:var i=w1;break;case 4:i=k1;break;default:i=Pd}n=i.bind(null,t,n,e),i=void 0,!kc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;s=s.return}for(;l!==null;){if(s=sr(l),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Th(function(){var p=o,h=Nd(n),v=[];e:{var x=rg.get(e);if(x!==void 0){var b=Ad,w=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":b=L1;break;case"focusin":w="focus",b=ll;break;case"focusout":w="blur",b=ll;break;case"beforeblur":case"afterblur":b=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=V1;break;case Zh:case eg:case tg:b=T1;break;case ng:b=B1;break;case"scroll":b=S1;break;case"wheel":b=H1;break;case"copy":case"cut":case"paste":b=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ku}var k=(t&4)!==0,S=!k&&e==="scroll",m=k?x!==null?x+"Capture":null:x;k=[];for(var f=p,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=uo(f,m),y!=null&&k.push(vo(f,y,g)))),S)break;f=f.return}0<k.length&&(x=new b(x,w,null,n,h),v.push({event:x,listeners:k}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&n!==yc&&(w=n.relatedTarget||n.fromElement)&&(sr(w)||w[bn]))break e;if((b||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,b?(w=n.relatedTarget||n.toElement,b=p,w=w?sr(w):null,w!==null&&(S=kr(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=p),b!==w)){if(k=Wu,y="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ku,y="onPointerLeave",m="onPointerEnter",f="pointer"),S=b==null?x:qr(b),g=w==null?x:qr(w),x=new k(y,f+"leave",b,n,h),x.target=S,x.relatedTarget=g,y=null,sr(h)===p&&(k=new k(m,f+"enter",w,n,h),k.target=g,k.relatedTarget=S,y=k),S=y,b&&w)t:{for(k=b,m=w,f=0,g=k;g;g=Nr(g))f++;for(g=0,y=m;y;y=Nr(y))g++;for(;0<f-g;)k=Nr(k),f--;for(;0<g-f;)m=Nr(m),g--;for(;f--;){if(k===m||m!==null&&k===m.alternate)break t;k=Nr(k),m=Nr(m)}k=null}else k=null;b!==null&&sp(v,x,b,k,!1),w!==null&&S!==null&&sp(v,S,w,k,!0)}}e:{if(x=p?qr(p):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var N=J1;else if(Zu(x))if(Wh)N=tv;else{N=Z1;var T=X1}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(N=ev);if(N&&(N=N(e,p))){Yh(v,N,n,h);break e}T&&T(e,x,p),e==="focusout"&&(T=x._wrapperState)&&T.controlled&&x.type==="number"&&hc(x,"number",x.value)}switch(T=p?qr(p):window,e){case"focusin":(Zu(T)||T.contentEditable==="true")&&(Ur=T,zc=p,Ji=null);break;case"focusout":Ji=zc=Ur=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,ip(v,n,h);break;case"selectionchange":if(iv)break;case"keydown":case"keyup":ip(v,n,h)}var O;if(Fd)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Br?qh(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Hh&&n.locale!=="ko"&&(Br||$!=="onCompositionStart"?$==="onCompositionEnd"&&Br&&(O=Uh()):(Dn=h,_d="value"in Dn?Dn.value:Dn.textContent,Br=!0)),T=qa(p,$),0<T.length&&($=new Qu($,e,null,n,h),v.push({event:$,listeners:T}),O?$.data=O:(O=Gh(n),O!==null&&($.data=O)))),(O=G1?Y1(e,n):W1(e,n))&&(p=qa(p,"onBeforeInput"),0<p.length&&(h=new Qu("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:p}),h.data=O))}ig(v,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=uo(e,n),o!=null&&r.unshift(vo(e,o,i)),o=uo(e,t),o!=null&&r.push(vo(e,o,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,d=l.alternate,p=l.stateNode;if(d!==null&&d===r)break;l.tag===5&&p!==null&&(l=p,i?(d=uo(n,o),d!=null&&s.unshift(vo(n,d,l))):i||(d=uo(n,o),d!=null&&s.push(vo(n,d,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(lv,`
`).replace(cv,"")}function Go(e,t,n){if(t=lp(t),lp(e)!==t&&n)throw Error(U(425))}function Ga(){}var $c=null,Pc=null;function _c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(pv)}:Ac;function pv(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),an="__reactFiber$"+xi,bo="__reactProps$"+xi,bn="__reactContainer$"+xi,Dc="__reactEvents$"+xi,fv="__reactListeners$"+xi,mv="__reactHandles$"+xi;function sr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dp(e);e!==null;){if(n=e[an])return n;e=dp(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[an]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function ws(e){return e[bo]||null}var Fc=[],Gr=-1;function Jn(e){return{current:e}}function ze(e){0>Gr||(e.current=Fc[Gr],Fc[Gr]=null,Gr--)}function Ce(e,t){Gr++,Fc[Gr]=e.current,e.current=t}var Qn={},nt=Jn(Qn),vt=Jn(!1),hr=Qn;function si(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function Ya(){ze(vt),ze(nt)}function up(e,t,n){if(nt.current!==Qn)throw Error(U(168));Ce(nt,t),Ce(vt,n)}function ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Xx(e)||"Unknown",i));return Fe({},n,r)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,hr=nt.current,Ce(nt,e),Ce(vt,vt.current),!0}function pp(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=ag(e,t,hr),r.__reactInternalMemoizedMergedChildContext=e,ze(vt),ze(nt),Ce(nt,e)):ze(vt),Ce(vt,n)}var fn=null,ks=!1,xl=!1;function sg(e){fn===null?fn=[e]:fn.push(e)}function hv(e){ks=!0,sg(e)}function Xn(){if(!xl&&fn!==null){xl=!0;var e=0,t=ye;try{var n=fn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fn=null,ks=!1}catch(i){throw fn!==null&&(fn=fn.slice(e+1)),Ah(zd,Xn),i}finally{ye=t,xl=!1}}return null}var Yr=[],Wr=0,Qa=null,Ka=0,_t=[],At=0,gr=null,mn=1,hn="";function rr(e,t){Yr[Wr++]=Ka,Yr[Wr++]=Qa,Qa=e,Ka=t}function lg(e,t,n){_t[At++]=mn,_t[At++]=hn,_t[At++]=gr,gr=e;var r=mn;e=hn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var o=32-Wt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mn=1<<32-Wt(t)+i|n<<i|r,hn=o+e}else mn=1<<o|n<<i|r,hn=e}function Id(e){e.return!==null&&(rr(e,1),lg(e,1,0))}function Ld(e){for(;e===Qa;)Qa=Yr[--Wr],Yr[Wr]=null,Ka=Yr[--Wr],Yr[Wr]=null;for(;e===gr;)gr=_t[--At],_t[At]=null,hn=_t[--At],_t[At]=null,mn=_t[--At],_t[At]=null}var Et=null,Ct=null,$e=!1,Ut=null;function cg(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,Ct=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:mn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,Ct=null,!0):!1;default:return!1}}function Oc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ic(e){if($e){var t=Ct;if(t){var n=t;if(!fp(e,t)){if(Oc(e))throw Error(U(418));t=jn(n.nextSibling);var r=Et;t&&fp(e,t)?cg(r,n):(e.flags=e.flags&-4097|2,$e=!1,Et=e)}}else{if(Oc(e))throw Error(U(418));e.flags=e.flags&-4097|2,$e=!1,Et=e}}}function mp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function Yo(e){if(e!==Et)return!1;if(!$e)return mp(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_c(e.type,e.memoizedProps)),t&&(t=Ct)){if(Oc(e))throw dg(),Error(U(418));for(;t;)cg(e,t),t=jn(t.nextSibling)}if(mp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Et?jn(e.stateNode.nextSibling):null;return!0}function dg(){for(var e=Ct;e;)e=jn(e.nextSibling)}function li(){Ct=Et=null,$e=!1}function Rd(e){Ut===null?Ut=[e]:Ut.push(e)}var gv=kn.ReactCurrentBatchConfig;function Ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hp(e){var t=e._init;return t(e._payload)}function ug(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=qn(m,f),m.index=0,m.sibling=null,m}function o(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,y){return f===null||f.tag!==6?(f=Cl(g,m.mode,y),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g,y){var N=g.type;return N===jr?h(m,f,g.props.children,y,g.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tn&&hp(N)===f.type)?(y=i(f,g.props),y.ref=Ni(m,f,g),y.return=m,y):(y=Da(g.type,g.key,g.props,null,m.mode,y),y.ref=Ni(m,f,g),y.return=m,y)}function p(m,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=El(g,m.mode,y),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function h(m,f,g,y,N){return f===null||f.tag!==7?(f=pr(g,m.mode,y,N),f.return=m,f):(f=i(f,g),f.return=m,f)}function v(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lo:return g=Da(f.type,f.key,f.props,null,m.mode,g),g.ref=Ni(m,null,f),g.return=m,g;case Vr:return f=El(f,m.mode,g),f.return=m,f;case Tn:var y=f._init;return v(m,y(f._payload),g)}if(Bi(f)||wi(f))return f=pr(f,m.mode,g,null),f.return=m,f;Wo(m,f)}return null}function x(m,f,g,y){var N=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(m,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:return g.key===N?d(m,f,g,y):null;case Vr:return g.key===N?p(m,f,g,y):null;case Tn:return N=g._init,x(m,f,N(g._payload),y)}if(Bi(g)||wi(g))return N!==null?null:h(m,f,g,y,null);Wo(m,g)}return null}function b(m,f,g,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,l(f,m,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lo:return m=m.get(y.key===null?g:y.key)||null,d(f,m,y,N);case Vr:return m=m.get(y.key===null?g:y.key)||null,p(f,m,y,N);case Tn:var T=y._init;return b(m,f,g,T(y._payload),N)}if(Bi(y)||wi(y))return m=m.get(g)||null,h(f,m,y,N,null);Wo(f,y)}return null}function w(m,f,g,y){for(var N=null,T=null,O=f,$=f=0,H=null;O!==null&&$<g.length;$++){O.index>$?(H=O,O=null):H=O.sibling;var j=x(m,O,g[$],y);if(j===null){O===null&&(O=H);break}e&&O&&j.alternate===null&&t(m,O),f=o(j,f,$),T===null?N=j:T.sibling=j,T=j,O=H}if($===g.length)return n(m,O),$e&&rr(m,$),N;if(O===null){for(;$<g.length;$++)O=v(m,g[$],y),O!==null&&(f=o(O,f,$),T===null?N=O:T.sibling=O,T=O);return $e&&rr(m,$),N}for(O=r(m,O);$<g.length;$++)H=b(O,m,$,g[$],y),H!==null&&(e&&H.alternate!==null&&O.delete(H.key===null?$:H.key),f=o(H,f,$),T===null?N=H:T.sibling=H,T=H);return e&&O.forEach(function(A){return t(m,A)}),$e&&rr(m,$),N}function k(m,f,g,y){var N=wi(g);if(typeof N!="function")throw Error(U(150));if(g=N.call(g),g==null)throw Error(U(151));for(var T=N=null,O=f,$=f=0,H=null,j=g.next();O!==null&&!j.done;$++,j=g.next()){O.index>$?(H=O,O=null):H=O.sibling;var A=x(m,O,j.value,y);if(A===null){O===null&&(O=H);break}e&&O&&A.alternate===null&&t(m,O),f=o(A,f,$),T===null?N=A:T.sibling=A,T=A,O=H}if(j.done)return n(m,O),$e&&rr(m,$),N;if(O===null){for(;!j.done;$++,j=g.next())j=v(m,j.value,y),j!==null&&(f=o(j,f,$),T===null?N=j:T.sibling=j,T=j);return $e&&rr(m,$),N}for(O=r(m,O);!j.done;$++,j=g.next())j=b(O,m,$,j.value,y),j!==null&&(e&&j.alternate!==null&&O.delete(j.key===null?$:j.key),f=o(j,f,$),T===null?N=j:T.sibling=j,T=j);return e&&O.forEach(function(V){return t(m,V)}),$e&&rr(m,$),N}function S(m,f,g,y){if(typeof g=="object"&&g!==null&&g.type===jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:e:{for(var N=g.key,T=f;T!==null;){if(T.key===N){if(N=g.type,N===jr){if(T.tag===7){n(m,T.sibling),f=i(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tn&&hp(N)===T.type){n(m,T.sibling),f=i(T,g.props),f.ref=Ni(m,T,g),f.return=m,m=f;break e}n(m,T);break}else t(m,T);T=T.sibling}g.type===jr?(f=pr(g.props.children,m.mode,y,g.key),f.return=m,m=f):(y=Da(g.type,g.key,g.props,null,m.mode,y),y.ref=Ni(m,f,g),y.return=m,m=y)}return s(m);case Vr:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=El(g,m.mode,y),f.return=m,m=f}return s(m);case Tn:return T=g._init,S(m,f,T(g._payload),y)}if(Bi(g))return w(m,f,g,y);if(wi(g))return k(m,f,g,y);Wo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Cl(g,m.mode,y),f.return=m,m=f),s(m)):n(m,f)}return S}var ci=ug(!0),pg=ug(!1),Ja=Jn(null),Xa=null,Qr=null,Md=null;function Vd(){Md=Qr=Xa=null}function jd(e){var t=Ja.current;ze(Ja),e._currentValue=t}function Lc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){Xa=e,Md=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Md!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(Xa===null)throw Error(U(308));Qr=e,Xa.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var lr=null;function Bd(e){lr===null?lr=[e]:lr.push(e)}function fg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bd(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Ud(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,Bd(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}function gp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var i=e.updateQueue;$n=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,p=d.next;d.next=null,s===null?o=p:s.next=p,s=d;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=p:l.next=p,h.lastBaseUpdate=d))}if(o!==null){var v=i.baseState;s=0,h=p=d=null,l=o;do{var x=l.lane,b=l.eventTime;if((r&x)===x){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,k=l;switch(x=t,b=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){v=w.call(b,v,x);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,x=typeof w=="function"?w.call(b,v,x):w,x==null)break e;v=Fe({},v,x);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else b={eventTime:b,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(p=h=b,d=v):h=h.next=b,s|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(1);if(h===null&&(d=v),i.baseState=d,i.firstBaseUpdate=p,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vr|=s,e.lanes=s,e.memoizedState=v}}function xp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Do={},ln=Jn(Do),yo=Jn(Do),wo=Jn(Do);function cr(e){if(e===Do)throw Error(U(174));return e}function Hd(e,t){switch(Ce(wo,t),Ce(yo,e),Ce(ln,Do),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xc(t,e)}ze(ln),Ce(ln,t)}function di(){ze(ln),ze(yo),ze(wo)}function hg(e){cr(wo.current);var t=cr(ln.current),n=xc(t,e.type);t!==n&&(Ce(yo,e),Ce(ln,n))}function qd(e){yo.current===e&&(ze(ln),ze(yo))}var Ae=Jn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Gd(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Ta=kn.ReactCurrentDispatcher,bl=kn.ReactCurrentBatchConfig,xr=0,De=null,Be=null,Ye=null,ts=!1,Xi=!1,ko=0,xv=0;function Ze(){throw Error(U(321))}function Yd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Wd(e,t,n,r,i,o){if(xr=o,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ta.current=e===null||e.memoizedState===null?wv:kv,e=n(r,i),Xi){o=0;do{if(Xi=!1,ko=0,25<=o)throw Error(U(301));o+=1,Ye=Be=null,t.updateQueue=null,Ta.current=Sv,e=n(r,i)}while(Xi)}if(Ta.current=ns,t=Be!==null&&Be.next!==null,xr=0,Ye=Be=De=null,ts=!1,t)throw Error(U(300));return e}function Qd(){var e=ko!==0;return ko=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function It(){if(Be===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ye===null?De.memoizedState:Ye.next;if(t!==null)Ye=t,Be=e;else{if(e===null)throw Error(U(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function So(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=It(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,d=null,p=o;do{var h=p.lane;if((xr&h)===h)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:h,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(l=d=v,s=r):d=d.next=v,De.lanes|=h,vr|=h}p=p.next}while(p!==null&&p!==o);d===null?s=r:d.next=l,Jt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,De.lanes|=o,vr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=It(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Jt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gg(){}function xg(e,t){var n=De,r=It(),i=t(),o=!Jt(r.memoizedState,i);if(o&&(r.memoizedState=i,gt=!0),r=r.queue,Kd(yg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Co(9,bg.bind(null,n,r,i,t),void 0,null),We===null)throw Error(U(349));xr&30||vg(n,t,i)}return i}function vg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bg(e,t,n,r){t.value=n,t.getSnapshot=r,wg(t)&&kg(e)}function yg(e,t,n){return n(function(){wg(t)&&kg(e)})}function wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function kg(e){var t=yn(e,1);t!==null&&Qt(t,e,1,-1)}function vp(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},t.queue=e,e=e.dispatch=yv.bind(null,De,e),[t.memoizedState,e]}function Co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sg(){return It().memoizedState}function $a(e,t,n,r){var i=nn();De.flags|=e,i.memoizedState=Co(1|t,n,void 0,r===void 0?null:r)}function Ss(e,t,n,r){var i=It();r=r===void 0?null:r;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,r!==null&&Yd(r,s.deps)){i.memoizedState=Co(t,n,o,r);return}}De.flags|=e,i.memoizedState=Co(1|t,n,o,r)}function bp(e,t){return $a(8390656,8,e,t)}function Kd(e,t){return Ss(2048,8,e,t)}function Cg(e,t){return Ss(4,2,e,t)}function Eg(e,t){return Ss(4,4,e,t)}function Ng(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zg(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4,4,Ng.bind(null,t,e),n)}function Jd(){}function Tg(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $g(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pg(e,t,n){return xr&21?(Jt(n,t)||(n=Oh(),De.lanes|=n,vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function vv(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{ye=n,bl.transition=r}}function _g(){return It().memoizedState}function bv(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(e))Dg(t,n);else if(n=fg(e,t,n,r),n!==null){var i=lt();Qt(n,e,r,i),Fg(n,t,r)}}function yv(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(e))Dg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,s)){var d=t.interleaved;d===null?(i.next=i,Bd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=fg(e,t,i,r),n!==null&&(i=lt(),Qt(n,e,r,i),Fg(n,t,r))}}function Ag(e){var t=e.alternate;return e===De||t!==null&&t===De}function Dg(e,t){Xi=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}var ns={readContext:Ot,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},wv={readContext:Ot,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:bp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$a(4194308,4,Ng.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bv.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:vp,useDebugValue:Jd,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=vp(!1),t=e[0];return e=vv.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,i=nn();if($e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),We===null)throw Error(U(349));xr&30||vg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bp(yg.bind(null,r,o,e),[e]),r.flags|=2048,Co(9,bg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nn(),t=We.identifierPrefix;if($e){var n=hn,r=mn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kv={readContext:Ot,useCallback:Tg,useContext:Ot,useEffect:Kd,useImperativeHandle:zg,useInsertionEffect:Cg,useLayoutEffect:Eg,useMemo:$g,useReducer:yl,useRef:Sg,useState:function(){return yl(So)},useDebugValue:Jd,useDeferredValue:function(e){var t=It();return Pg(t,Be.memoizedState,e)},useTransition:function(){var e=yl(So)[0],t=It().memoizedState;return[e,t]},useMutableSource:gg,useSyncExternalStore:xg,useId:_g,unstable_isNewReconciler:!1},Sv={readContext:Ot,useCallback:Tg,useContext:Ot,useEffect:Kd,useImperativeHandle:zg,useInsertionEffect:Cg,useLayoutEffect:Eg,useMemo:$g,useReducer:wl,useRef:Sg,useState:function(){return wl(So)},useDebugValue:Jd,useDeferredValue:function(e){var t=It();return Be===null?t.memoizedState=e:Pg(t,Be.memoizedState,e)},useTransition:function(){var e=wl(So)[0],t=It().memoizedState;return[e,t]},useMutableSource:gg,useSyncExternalStore:xg,useId:_g,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=xn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Bn(e,o,i),t!==null&&(Qt(t,e,i,r),za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=xn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bn(e,o,i),t!==null&&(Qt(t,e,i,r),za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=Hn(e),i=xn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bn(e,i,r),t!==null&&(Qt(t,e,r,n),za(t,e,r))}};function yp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!go(n,r)||!go(i,o):!0}function Og(e,t,n){var r=!1,i=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ot(o):(i=bt(t)?hr:nt.current,r=t.contextTypes,o=(r=r!=null)?si(e,i):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Mc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ud(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ot(o):(o=bt(t)?hr:nt.current,i.context=si(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),Za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t){try{var n="",r=t;do n+=Jx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Ig(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,Kc=r),Vc(e,t)},n}function Lg(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vc(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function kp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rv.bind(null,e,t,n),t.then(e,e))}function Sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e)}var Ev=kn.ReactCurrentOwner,gt=!1;function ot(e,t,n,r){t.child=e===null?pg(t,null,n,r):ci(t,e.child,n,r)}function Ep(e,t,n,r,i){n=n.render;var o=t.ref;return ii(t,i),r=Wd(e,t,n,r,o,i),n=Qd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):($e&&n&&Id(t),t.flags|=1,ot(e,t,r,i),t.child)}function Np(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rg(e,t,o,r,i)):(e=Da(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(s,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(go(o,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,wn(e,t,i)}return jc(e,t,n,r,i)}function Mg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Jr,St),St|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Jr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(Jr,St),St|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ce(Jr,St),St|=r;return ot(e,t,i,n),t.child}function Vg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,n,r,i){var o=bt(n)?hr:nt.current;return o=si(t,o),ii(t,i),n=Wd(e,t,n,r,o,i),r=Qd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):($e&&r&&Id(t),t.flags|=1,ot(e,t,n,i),t.child)}function zp(e,t,n,r,i){if(bt(n)){var o=!0;Wa(t)}else o=!1;if(ii(t,i),t.stateNode===null)Pa(e,t),Og(t,n,r),Mc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ot(p):(p=bt(n)?hr:nt.current,p=si(t,p));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||d!==p)&&wp(t,s,r,p),$n=!1;var x=t.memoizedState;s.state=x,Za(t,r,s,i),d=t.memoizedState,l!==r||x!==d||vt.current||$n?(typeof h=="function"&&(Rc(t,n,h,r),d=t.memoizedState),(l=$n||yp(t,n,l,r,x,d,p))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=p,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,mg(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:jt(t.type,l),s.props=p,v=t.pendingProps,x=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ot(d):(d=bt(n)?hr:nt.current,d=si(t,d));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==v||x!==d)&&wp(t,s,r,d),$n=!1,x=t.memoizedState,s.state=x,Za(t,r,s,i);var w=t.memoizedState;l!==v||x!==w||vt.current||$n?(typeof b=="function"&&(Rc(t,n,b,r),w=t.memoizedState),(p=$n||yp(t,n,p,r,x,w,d)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=d,r=p):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Bc(e,t,n,r,o,i)}function Bc(e,t,n,r,i,o){Vg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&pp(t,n,!1),wn(e,t,o);r=t.stateNode,Ev.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ci(t,e.child,null,o),t.child=ci(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&pp(t,n,!0),t.child}function jg(e){var t=e.stateNode;t.pendingContext?up(e,t.pendingContext,t.pendingContext!==t.context):t.context&&up(e,t.context,!1),Hd(e,t.containerInfo)}function Tp(e,t,n,r,i){return li(),Rd(i),t.flags|=256,ot(e,t,n,r),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Hc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bg(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Ae,i&1),e===null)return Ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=zs(s,r,0,null),e=pr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hc(n),t.memoizedState=Uc,e):Xd(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Nv(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=qn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=qn(l,o):(o=pr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Hc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Uc,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xd(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qo(e,t,n,r){return r!==null&&Rd(r),ci(t,e.child,null,n),e=Xd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(U(422))),Qo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zs({mode:"visible",children:r.children},i,0,null),o=pr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ci(t,e.child,null,s),t.child.memoizedState=Hc(s),t.memoizedState=Uc,o);if(!(t.mode&1))return Qo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=kl(o,r,void 0),Qo(e,t,s,r)}if(l=(s&e.childLanes)!==0,gt||l){if(r=We,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Qt(r,e,i,-1))}return iu(),r=kl(Error(U(421))),Qo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ct=jn(i.nextSibling),Et=t,$e=!0,Ut=null,e!==null&&(_t[At++]=mn,_t[At++]=hn,_t[At++]=gr,mn=e.id,hn=e.overflow,gr=t),t=Xd(t,r.children),t.flags|=4096,t)}function $p(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lc(e.return,t,n)}function Sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ug(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$p(e,n,t);else if(e.tag===19)$p(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,o);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zv(e,t,n){switch(t.tag){case 3:jg(t),li();break;case 5:hg(t);break;case 1:bt(t.type)&&Wa(t);break;case 4:Hd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Bg(e,t,n):(Ce(Ae,Ae.current&1),e=wn(e,t,n),e!==null?e.sibling:null);Ce(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ug(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Mg(e,t,n)}return wn(e,t,n)}var Hg,qc,qg,Gg;Hg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};qg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(ln.current);var o=null;switch(n){case"input":i=fc(e,i),r=fc(e,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=gc(e,i),r=gc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}vc(n,r);var s;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var l=i[p];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(lo.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var d=r[p];if(l=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&d!==l&&(d!=null||l!=null))if(p==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(o=o||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(lo.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&Ee("scroll",e),o||l===d||(o=[])):(o=o||[]).push(p,d))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};Gg=function(e,t,n,r){n!==r&&(t.flags|=4)};function zi(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tv(e,t,n){var r=t.pendingProps;switch(Ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return bt(t.type)&&Ya(),et(t),null;case 3:return r=t.stateNode,di(),ze(vt),ze(nt),Gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(Zc(Ut),Ut=null))),qc(e,t),et(t),null;case 5:qd(t);var i=cr(wo.current);if(n=t.type,e!==null&&t.stateNode!=null)qg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return et(t),null}if(e=cr(ln.current),Yo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[an]=t,r[bo]=o,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)Ee(Hi[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Ru(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":Vu(r,o),Ee("invalid",r)}vc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Go(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Go(r.textContent,l,e),i=["children",""+l]):lo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ro(r),Mu(r,o,!0);break;case"textarea":Ro(r),ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ga)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[an]=t,e[bo]=r,Hg(e,t,!1,!1),t.stateNode=e;e:{switch(s=bc(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)Ee(Hi[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":Ru(e,r),i=fc(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Vu(e,r),i=gc(e,r),Ee("invalid",e);break;default:i=r}vc(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="style"?Sh(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wh(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&co(e,d):typeof d=="number"&&co(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(lo.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Ee("scroll",e):d!=null&&kd(e,o,d,s))}switch(n){case"input":Ro(e),Mu(e,r,!1);break;case"textarea":Ro(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ei(e,!!r.multiple,o,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Gg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=cr(wo.current),cr(ln.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(o=r.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:Go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return et(t),null;case 13:if(ze(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Ct!==null&&t.mode&1&&!(t.flags&128))dg(),li(),t.flags|=98560,o=!1;else if(o=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[an]=t}else li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else Ut!==null&&(Zc(Ut),Ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ue===0&&(Ue=3):iu())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return di(),qc(e,t),e===null&&xo(t.stateNode.containerInfo),et(t),null;case 10:return jd(t.type._context),et(t),null;case 17:return bt(t.type)&&Ya(),et(t),null;case 19:if(ze(Ae),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)zi(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=es(e),s!==null){for(t.flags|=128,zi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>pi&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304)}else{if(!r)if(e=es(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$e)return et(t),null}else 2*Ie()-o.renderingStartTime>pi&&n!==1073741824&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Ae.current,Ce(Ae,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function $v(e,t){switch(Ld(t),t.tag){case 1:return bt(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return di(),ze(vt),ze(nt),Gd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qd(t),null;case 13:if(ze(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ae),null;case 4:return di(),null;case 10:return jd(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Ko=!1,tt=!1,Pv=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Gc(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var Pp=!1;function _v(e,t){if($c=Ua,e=Jh(),Od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,d=-1,p=0,h=0,v=e,x=null;t:for(;;){for(var b;v!==n||i!==0&&v.nodeType!==3||(l=s+i),v!==o||r!==0&&v.nodeType!==3||(d=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(b=v.firstChild)!==null;)x=v,v=b;for(;;){if(v===e)break t;if(x===n&&++p===i&&(l=s),x===o&&++h===r&&(d=s),(b=v.nextSibling)!==null)break;v=x,x=v.parentNode}v=b}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:e,selectionRange:n},Ua=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,S=w.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:jt(t.type,k),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(y){Oe(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return w=Pp,Pp=!1,w}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gc(t,n,o)}i=i.next}while(i!==r)}}function Es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yg(e){var t=e.alternate;t!==null&&(e.alternate=null,Yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[bo],delete t[Dc],delete t[fv],delete t[mv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wg(e){return e.tag===5||e.tag===3||e.tag===4}function _p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}var Ke=null,Bt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Qg(e,t,n),n=n.sibling}function Qg(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(xs,n)}catch{}switch(n.tag){case 5:tt||Kr(n,t);case 6:var r=Ke,i=Bt;Ke=null,Cn(e,t,n),Ke=r,Bt=i,Ke!==null&&(Bt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Bt?(e=Ke,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),mo(e)):gl(Ke,n.stateNode));break;case 4:r=Ke,i=Bt,Ke=n.stateNode.containerInfo,Bt=!0,Cn(e,t,n),Ke=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gc(n,t,s),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!tt&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Cn(e,t,n),tt=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function Ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pv),t.forEach(function(r){var i=Vv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Bt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Bt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(Ke===null)throw Error(U(160));Qg(o,s,i),Ke=null,Bt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(p){Oe(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kg(t,e),t=t.sibling}function Kg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),tn(e),r&4){try{Zi(3,e,e.return),Es(3,e)}catch(k){Oe(e,e.return,k)}try{Zi(5,e,e.return)}catch(k){Oe(e,e.return,k)}}break;case 1:Mt(t,e),tn(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(Mt(t,e),tn(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{co(i,"")}catch(k){Oe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&vh(i,o),bc(l,s);var p=bc(l,o);for(s=0;s<d.length;s+=2){var h=d[s],v=d[s+1];h==="style"?Sh(i,v):h==="dangerouslySetInnerHTML"?wh(i,v):h==="children"?co(i,v):kd(i,h,v,p)}switch(l){case"input":mc(i,o);break;case"textarea":bh(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?ei(i,!!o.multiple,b,!1):x!==!!o.multiple&&(o.defaultValue!=null?ei(i,!!o.multiple,o.defaultValue,!0):ei(i,!!o.multiple,o.multiple?[]:"",!1))}i[bo]=o}catch(k){Oe(e,e.return,k)}}break;case 6:if(Mt(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Oe(e,e.return,k)}}break;case 3:if(Mt(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(k){Oe(e,e.return,k)}break;case 4:Mt(t,e),tn(e);break;case 13:Mt(t,e),tn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=Ie())),r&4&&Ap(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(p=tt)||h,Mt(t,e),tt=p):Mt(t,e),tn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!h&&e.mode&1)for(ee=e,h=e.child;h!==null;){for(v=ee=h;ee!==null;){switch(x=ee,b=x.child,x.tag){case 0:case 11:case 14:case 15:Zi(4,x,x.return);break;case 1:Kr(x,x.return);var w=x.stateNode;if(typeof w.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Kr(x,x.return);break;case 22:if(x.memoizedState!==null){Fp(v);continue}}b!==null?(b.return=x,ee=b):Fp(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{i=v.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,d=v.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=kh("display",s))}catch(k){Oe(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(k){Oe(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Mt(t,e),tn(e),r&4&&Ap(e);break;case 21:break;default:Mt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wg(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var o=_p(e);Qc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=_p(e);Wc(e,l,s);break;default:throw Error(U(161))}}catch(d){Oe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Av(e,t,n){ee=e,Jg(e)}function Jg(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var i=ee,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ko;if(!s){var l=i.alternate,d=l!==null&&l.memoizedState!==null||tt;l=Ko;var p=tt;if(Ko=s,(tt=d)&&!p)for(ee=i;ee!==null;)s=ee,d=s.child,s.tag===22&&s.memoizedState!==null?Op(i):d!==null?(d.return=s,ee=d):Op(i);for(;o!==null;)ee=o,Jg(o),o=o.sibling;ee=i,Ko=l,tt=p}Dp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ee=o):Dp(e)}}function Dp(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var h=p.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&mo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||t.flags&512&&Yc(t)}catch(x){Oe(t,t.return,x)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Fp(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Op(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Es(4,t)}catch(d){Oe(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Oe(t,i,d)}}var o=t.return;try{Yc(t)}catch(d){Oe(t,o,d)}break;case 5:var s=t.return;try{Yc(t)}catch(d){Oe(t,s,d)}}}catch(d){Oe(t,t.return,d)}if(t===e){ee=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ee=l;break}ee=t.return}}var Dv=Math.ceil,rs=kn.ReactCurrentDispatcher,Zd=kn.ReactCurrentOwner,Ft=kn.ReactCurrentBatchConfig,ve=0,We=null,Me=null,Je=0,St=0,Jr=Jn(0),Ue=0,Eo=null,vr=0,Ns=0,eu=0,eo=null,ht=null,tu=0,pi=1/0,pn=null,is=!1,Kc=null,Un=null,Jo=!1,Fn=null,os=0,to=0,Jc=null,_a=-1,Aa=0;function lt(){return ve&6?Ie():_a!==-1?_a:_a=Ie()}function Hn(e){return e.mode&1?ve&2&&Je!==0?Je&-Je:gv.transition!==null?(Aa===0&&(Aa=Oh()),Aa):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Bh(e.type)),e):1}function Qt(e,t,n,r){if(50<to)throw to=0,Jc=null,Error(U(185));Po(e,n,r),(!(ve&2)||e!==We)&&(e===We&&(!(ve&2)&&(Ns|=n),Ue===4&&_n(e,Je)),yt(e,r),n===1&&ve===0&&!(t.mode&1)&&(pi=Ie()+500,ks&&Xn()))}function yt(e,t){var n=e.callbackNode;g1(e,t);var r=Ba(e,e===We?Je:0);if(r===0)n!==null&&Hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hu(n),t===1)e.tag===0?hv(Ip.bind(null,e)):sg(Ip.bind(null,e)),uv(function(){!(ve&6)&&Xn()}),n=null;else{switch(Ih(r)){case 1:n=zd;break;case 4:n=Dh;break;case 16:n=ja;break;case 536870912:n=Fh;break;default:n=ja}n=o0(n,Xg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xg(e,t){if(_a=-1,Aa=0,ve&6)throw Error(U(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var r=Ba(e,e===We?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=as(e,r);else{t=r;var i=ve;ve|=2;var o=e0();(We!==e||Je!==t)&&(pn=null,pi=Ie()+500,ur(e,t));do try{Iv();break}catch(l){Zg(e,l)}while(1);Vd(),rs.current=o,ve=i,Me!==null?t=0:(We=null,Je=0,t=Ue)}if(t!==0){if(t===2&&(i=Cc(e),i!==0&&(r=i,t=Xc(e,i))),t===1)throw n=Eo,ur(e,0),_n(e,r),yt(e,Ie()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fv(i)&&(t=as(e,r),t===2&&(o=Cc(e),o!==0&&(r=o,t=Xc(e,o))),t===1))throw n=Eo,ur(e,0),_n(e,r),yt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:ir(e,ht,pn);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=tu+500-Ie(),10<t)){if(Ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ac(ir.bind(null,e,ht,pn),t);break}ir(e,ht,pn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Wt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dv(r/1960))-r,10<r){e.timeoutHandle=Ac(ir.bind(null,e,ht,pn),r);break}ir(e,ht,pn);break;case 5:ir(e,ht,pn);break;default:throw Error(U(329))}}}return yt(e,Ie()),e.callbackNode===n?Xg.bind(null,e):null}function Xc(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=as(e,t),e!==2&&(t=ht,ht=n,t!==null&&Zc(t)),e}function Zc(e){ht===null?ht=e:ht.push.apply(ht,e)}function Fv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Jt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~eu,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wt(t),r=1<<n;e[n]=-1,t&=~r}}function Ip(e){if(ve&6)throw Error(U(327));oi();var t=Ba(e,0);if(!(t&1))return yt(e,Ie()),null;var n=as(e,t);if(e.tag!==0&&n===2){var r=Cc(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=Eo,ur(e,0),_n(e,t),yt(e,Ie()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,ht,pn),yt(e,Ie()),null}function nu(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(pi=Ie()+500,ks&&Xn())}}function br(e){Fn!==null&&Fn.tag===0&&!(ve&6)&&oi();var t=ve;ve|=1;var n=Ft.transition,r=ye;try{if(Ft.transition=null,ye=1,e)return e()}finally{ye=r,Ft.transition=n,ve=t,!(ve&6)&&Xn()}}function ru(){St=Jr.current,ze(Jr)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dv(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:di(),ze(vt),ze(nt),Gd();break;case 5:qd(r);break;case 4:di();break;case 13:ze(Ae);break;case 19:ze(Ae);break;case 10:jd(r.type._context);break;case 22:case 23:ru()}n=n.return}if(We=e,Me=e=qn(e.current,null),Je=St=t,Ue=0,Eo=null,eu=Ns=vr=0,ht=eo=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lr=null}return e}function Zg(e,t){do{var n=Me;try{if(Vd(),Ta.current=ns,ts){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if(xr=0,Ye=Be=De=null,Xi=!1,ko=0,Zd.current=null,n===null||n.return===null){Ue=1,Eo=t,Me=null;break}e:{var o=e,s=n.return,l=n,d=t;if(t=Je,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,h=l,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Sp(s);if(b!==null){b.flags&=-257,Cp(b,s,l,o,t),b.mode&1&&kp(o,p,t),t=b,d=p;var w=t.updateQueue;if(w===null){var k=new Set;k.add(d),t.updateQueue=k}else w.add(d);break e}else{if(!(t&1)){kp(o,p,t),iu();break e}d=Error(U(426))}}else if($e&&l.mode&1){var S=Sp(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Cp(S,s,l,o,t),Rd(ui(d,l));break e}}o=d=ui(d,l),Ue!==4&&(Ue=2),eo===null?eo=[o]:eo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Ig(o,d,t);gp(o,m);break e;case 1:l=d;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Lg(o,l,t);gp(o,y);break e}}o=o.return}while(o!==null)}n0(n)}catch(N){t=N,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function e0(){var e=rs.current;return rs.current=ns,e===null?ns:e}function iu(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(vr&268435455)&&!(Ns&268435455)||_n(We,Je)}function as(e,t){var n=ve;ve|=2;var r=e0();(We!==e||Je!==t)&&(pn=null,ur(e,t));do try{Ov();break}catch(i){Zg(e,i)}while(1);if(Vd(),ve=n,rs.current=r,Me!==null)throw Error(U(261));return We=null,Je=0,Ue}function Ov(){for(;Me!==null;)t0(Me)}function Iv(){for(;Me!==null&&!s1();)t0(Me)}function t0(e){var t=i0(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?n0(e):Me=t,Zd.current=null}function n0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$v(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Me=null;return}}else if(n=Tv(n,t,St),n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Ue===0&&(Ue=5)}function ir(e,t,n){var r=ye,i=Ft.transition;try{Ft.transition=null,ye=1,Lv(e,t,n,r)}finally{Ft.transition=i,ye=r}return null}function Lv(e,t,n,r){do oi();while(Fn!==null);if(ve&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(x1(e,o),e===We&&(Me=We=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,o0(ja,function(){return oi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ft.transition,Ft.transition=null;var s=ye;ye=1;var l=ve;ve|=4,Zd.current=null,_v(e,n),Kg(n,e),rv(Pc),Ua=!!$c,Pc=$c=null,e.current=n,Av(n),l1(),ve=l,ye=s,Ft.transition=o}else e.current=n;if(Jo&&(Jo=!1,Fn=e,os=i),o=e.pendingLanes,o===0&&(Un=null),u1(n.stateNode),yt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=Kc,Kc=null,e;return os&1&&e.tag!==0&&oi(),o=e.pendingLanes,o&1?e===Jc?to++:(to=0,Jc=e):to=0,Xn(),null}function oi(){if(Fn!==null){var e=Ih(os),t=Ft.transition,n=ye;try{if(Ft.transition=null,ye=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,os=0,ve&6)throw Error(U(331));var i=ve;for(ve|=4,ee=e.current;ee!==null;){var o=ee,s=o.child;if(ee.flags&16){var l=o.deletions;if(l!==null){for(var d=0;d<l.length;d++){var p=l[d];for(ee=p;ee!==null;){var h=ee;switch(h.tag){case 0:case 11:case 15:Zi(8,h,o)}var v=h.child;if(v!==null)v.return=h,ee=v;else for(;ee!==null;){h=ee;var x=h.sibling,b=h.return;if(Yg(h),h===p){ee=null;break}if(x!==null){x.return=b,ee=x;break}ee=b}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}ee=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ee=s;else e:for(;ee!==null;){if(o=ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,ee=m;break e}ee=o.return}}var f=e.current;for(ee=f;ee!==null;){s=ee;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ee=g;else e:for(s=f;ee!==null;){if(l=ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Es(9,l)}}catch(N){Oe(l,l.return,N)}if(l===s){ee=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,ee=y;break e}ee=l.return}}if(ve=i,Xn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(xs,e)}catch{}r=!0}return r}finally{ye=n,Ft.transition=t}}return!1}function Lp(e,t,n){t=ui(n,t),t=Ig(e,t,1),e=Bn(e,t,1),t=lt(),e!==null&&(Po(e,1,t),yt(e,t))}function Oe(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=ui(n,e),e=Lg(t,e,1),t=Bn(t,e,1),e=lt(),t!==null&&(Po(t,1,e),yt(t,e));break}}t=t.return}}function Rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Je&n)===n&&(Ue===4||Ue===3&&(Je&130023424)===Je&&500>Ie()-tu?ur(e,0):eu|=n),yt(e,t)}function r0(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=lt();e=yn(e,t),e!==null&&(Po(e,t,n),yt(e,n))}function Mv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),r0(e,n)}function Vv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),r0(e,n)}var i0;i0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,zv(e,t,n);gt=!!(e.flags&131072)}else gt=!1,$e&&t.flags&1048576&&lg(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pa(e,t),e=t.pendingProps;var i=si(t,nt.current);ii(t,n),i=Wd(null,t,r,e,i,n);var o=Qd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,Wa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ud(t),i.updater=Cs,t.stateNode=i,i._reactInternals=t,Mc(t,r,e,n),t=Bc(null,t,r,!0,o,n)):(t.tag=0,$e&&o&&Id(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bv(r),e=jt(r,e),i){case 0:t=jc(null,t,r,e,n);break e;case 1:t=zp(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Np(null,t,r,jt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),jc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),zp(e,t,r,i,n);case 3:e:{if(jg(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,mg(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ui(Error(U(423)),t),t=Tp(e,t,r,n,i);break e}else if(r!==i){i=ui(Error(U(424)),t),t=Tp(e,t,r,n,i);break e}else for(Ct=jn(t.stateNode.containerInfo.firstChild),Et=t,$e=!0,Ut=null,n=pg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){t=wn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return hg(t),e===null&&Ic(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_c(r,i)?s=null:o!==null&&_c(r,o)&&(t.flags|=32),Vg(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&Ic(t),null;case 13:return Bg(e,t,n);case 4:return Hd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ci(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Ep(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ce(Ja,r._currentValue),r._currentValue=s,o!==null)if(Jt(o.value,s)){if(o.children===i.children&&!vt.current){t=wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var d=l.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=xn(-1,n&-n),d.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var h=p.pending;h===null?d.next=d:(d.next=h.next,h.next=d),p.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Lc(o.return,n,t),l.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ii(t,n),i=Ot(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),Np(e,t,r,i,n);case 15:return Rg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Pa(e,t),t.tag=1,bt(r)?(e=!0,Wa(t)):e=!1,ii(t,n),Og(t,r,i),Mc(t,r,i,n),Bc(null,t,r,!0,e,n);case 19:return Ug(e,t,n);case 22:return Mg(e,t,n)}throw Error(U(156,t.tag))};function o0(e,t){return Ah(e,t)}function jv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new jv(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bv(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cd)return 11;if(e===Ed)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Da(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ou(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jr:return pr(n.children,i,o,t);case Sd:s=8,i|=8;break;case cc:return e=Dt(12,n,t,i|2),e.elementType=cc,e.lanes=o,e;case dc:return e=Dt(13,n,t,i),e.elementType=dc,e.lanes=o,e;case uc:return e=Dt(19,n,t,i),e.elementType=uc,e.lanes=o,e;case hh:return zs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case mh:s=9;break e;case Cd:s=11;break e;case Ed:s=14;break e;case Tn:s=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Dt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pr(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=hh,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function El(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,i,o,s,l,d){return e=new Uv(e,t,n,l,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(o),e}function Hv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function a0(e){if(!e)return Qn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(bt(n))return ag(e,n,t)}return t}function s0(e,t,n,r,i,o,s,l,d){return e=au(n,r,!0,e,i,o,s,l,d),e.context=a0(null),n=e.current,r=lt(),i=Hn(n),o=xn(r,i),o.callback=t??null,Bn(n,o,i),e.current.lanes=i,Po(e,i,r),yt(e,r),e}function Ts(e,t,n,r){var i=t.current,o=lt(),s=Hn(i);return n=a0(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bn(i,t,s),e!==null&&(Qt(e,i,s,o),za(e,i,s)),s}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function su(e,t){Rp(e,t),(e=e.alternate)&&Rp(e,t)}function qv(){return null}var l0=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}$s.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ts(e,t,null,null)};$s.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){Ts(null,e,null,null)}),t[bn]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&jh(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function Gv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=ss(s);o.call(p)}}var s=s0(t,r,e,0,null,!1,!1,"",Mp);return e._reactRootContainer=s,e[bn]=s.current,xo(e.nodeType===8?e.parentNode:e),br(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var p=ss(d);l.call(p)}}var d=au(e,0,!1,null,null,!1,!1,"",Mp);return e._reactRootContainer=d,e[bn]=d.current,xo(e.nodeType===8?e.parentNode:e),br(function(){Ts(t,d,n,r)}),d}function _s(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var d=ss(s);l.call(d)}}Ts(t,s,e,i)}else s=Gv(n,t,e,i,r);return ss(s)}Lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ui(t.pendingLanes);n!==0&&(Td(t,n|1),yt(t,Ie()),!(ve&6)&&(pi=Ie()+500,Xn()))}break;case 13:br(function(){var r=yn(e,1);if(r!==null){var i=lt();Qt(r,e,1,i)}}),su(e,1)}};$d=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=lt();Qt(t,e,134217728,n)}su(e,134217728)}};Rh=function(e){if(e.tag===13){var t=Hn(e),n=yn(e,t);if(n!==null){var r=lt();Qt(n,e,t,r)}su(e,t)}};Mh=function(){return ye};Vh=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};wc=function(e,t,n){switch(t){case"input":if(mc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ws(r);if(!i)throw Error(U(90));xh(r),mc(r,i)}}}break;case"textarea":bh(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};Nh=nu;zh=br;var Yv={usingClientEntryPoint:!1,Events:[Ao,qr,ws,Ch,Eh,nu]},Ti={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wv={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{xs=Xo.inject(Wv),sn=Xo}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(U(200));return Hv(e,t,null,n)};zt.createRoot=function(e,t){if(!cu(e))throw Error(U(299));var n=!1,r="",i=l0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,xo(e.nodeType===8?e.parentNode:e),new lu(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return br(e)};zt.hydrate=function(e,t,n){if(!Ps(t))throw Error(U(200));return _s(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!cu(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=l0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=s0(t,null,e,1,n??null,i,!1,o,s),e[bn]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $s(t)};zt.render=function(e,t,n){if(!Ps(t))throw Error(U(200));return _s(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(U(40));return e._reactRootContainer?(br(function(){_s(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};zt.unstable_batchedUpdates=nu;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return _s(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(e){console.error(e)}}c0(),ch.exports=zt;var Qv=ch.exports,Vp=Qv;sc.createRoot=Vp.createRoot,sc.hydrateRoot=Vp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}var On;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(On||(On={}));const jp="popstate";function Kv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return ed("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:d0(i)}return Xv(t,n,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function du(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jv(){return Math.random().toString(36).substr(2,8)}function Bp(e,t){return{usr:e.state,key:e.key,idx:t}}function ed(e,t,n,r){return n===void 0&&(n=null),No({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vi(t):t,{state:n,key:t&&t.key||r||Jv()})}function d0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=On.Pop,d=null,p=h();p==null&&(p=0,s.replaceState(No({},s.state,{idx:p}),""));function h(){return(s.state||{idx:null}).idx}function v(){l=On.Pop;let S=h(),m=S==null?null:S-p;p=S,d&&d({action:l,location:k.location,delta:m})}function x(S,m){l=On.Push;let f=ed(k.location,S,m);n&&n(f,S),p=h()+1;let g=Bp(f,p),y=k.createHref(f);try{s.pushState(g,"",y)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(y)}o&&d&&d({action:l,location:k.location,delta:1})}function b(S,m){l=On.Replace;let f=ed(k.location,S,m);n&&n(f,S),p=h();let g=Bp(f,p),y=k.createHref(f);s.replaceState(g,"",y),o&&d&&d({action:l,location:k.location,delta:0})}function w(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:d0(S);return f=f.replace(/ $/,"%20"),He(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let k={get action(){return l},get location(){return e(i,s)},listen(S){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(jp,v),d=S,()=>{i.removeEventListener(jp,v),d=null}},createHref(S){return t(i,S)},createURL:w,encodeLocation(S){let m=w(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:b,go(S){return s.go(S)}};return k}var Up;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Up||(Up={}));function Zv(e,t,n){return n===void 0&&(n="/"),eb(e,t,n,!1)}function eb(e,t,n,r){let i=typeof t=="string"?vi(t):t,o=f0(i.pathname||"/",n);if(o==null)return null;let s=u0(e);tb(s);let l=null;for(let d=0;l==null&&d<s.length;++d){let p=pb(o);l=db(s[d],p,r)}return l}function u0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let d={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(He(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let p=fr([r,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(He(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),u0(o.children,t,h,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:lb(p,o.index),routesMeta:h})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let d of p0(o.path))i(o,s,d)}),t}function p0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=p0(r.join("/")),l=[];return l.push(...s.map(d=>d===""?o:[o,d].join("/"))),i&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function tb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nb=/^:[\w-]+$/,rb=3,ib=2,ob=1,ab=10,sb=-2,Hp=e=>e==="*";function lb(e,t){let n=e.split("/"),r=n.length;return n.some(Hp)&&(r+=sb),t&&(r+=ib),n.filter(i=>!Hp(i)).reduce((i,o)=>i+(nb.test(o)?rb:o===""?ob:ab),r)}function cb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function db(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let d=r[l],p=l===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",v=qp({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},h),x=d.route;if(!v&&p&&n&&!r[r.length-1].route.index&&(v=qp({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},h)),!v)return null;Object.assign(i,v.params),s.push({params:i,pathname:fr([o,v.pathname]),pathnameBase:bb(fr([o,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(o=fr([o,v.pathnameBase]))}return s}function qp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ub(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((p,h,v)=>{let{paramName:x,isOptional:b}=h;if(x==="*"){let k=l[v]||"";s=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const w=l[v];return b&&!w?p[x]=void 0:p[x]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:s,pattern:e}}function ub(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),du(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(r.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return du(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function f0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const fb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mb=e=>fb.test(e);function hb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vi(e):e,o;if(n)if(mb(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),du(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Gp(n.substring(1),"/"):o=Gp(n,t)}else o=t;return{pathname:o,search:yb(r),hash:wb(i)}}function Gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xb(e,t){let n=gb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vb(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vi(e):(i=No({},e),He(!i.pathname||!i.pathname.includes("?"),Nl("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),Nl("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),Nl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let v=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),v-=1;i.pathname=x.join("/")}l=v>=0?t[v]:"/"}let d=hb(i,l),p=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||h)&&(d.pathname+="/"),d}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),bb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const m0=["post","put","patch","delete"];new Set(m0);const Sb=["get",...m0];new Set(Sb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}const uu=C.createContext(null),Cb=C.createContext(null),As=C.createContext(null),Ds=C.createContext(null),Sr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),h0=C.createContext(null);function Fs(){return C.useContext(Ds)!=null}function Os(){return Fs()||He(!1),C.useContext(Ds).location}function g0(e){C.useContext(As).static||C.useLayoutEffect(e)}function Zn(){let{isDataRoute:e}=C.useContext(Sr);return e?Mb():Eb()}function Eb(){Fs()||He(!1);let e=C.useContext(uu),{basename:t,future:n,navigator:r}=C.useContext(As),{matches:i}=C.useContext(Sr),{pathname:o}=Os(),s=JSON.stringify(xb(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return g0(()=>{l.current=!0}),C.useCallback(function(p,h){if(h===void 0&&(h={}),!l.current)return;if(typeof p=="number"){r.go(p);return}let v=vb(p,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:fr([t,v.pathname])),(h.replace?r.replace:r.push)(v,h.state,h)},[t,r,s,o,e])}const Nb=C.createContext(null);function zb(e){let t=C.useContext(Sr).outlet;return t&&C.createElement(Nb.Provider,{value:e},t)}function Tb(e,t){return $b(e,t)}function $b(e,t,n,r){Fs()||He(!1);let{navigator:i}=C.useContext(As),{matches:o}=C.useContext(Sr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let p=Os(),h;if(t){var v;let S=typeof t=="string"?vi(t):t;d==="/"||(v=S.pathname)!=null&&v.startsWith(d)||He(!1),h=S}else h=p;let x=h.pathname||"/",b=x;if(d!=="/"){let S=d.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=Zv(e,{pathname:b}),k=Fb(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:fr([d,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?d:fr([d,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&k?C.createElement(Ds.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:On.Pop}},k):k}function Pb(){let e=Rb(),t=kb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const _b=C.createElement(Pb,null);class Ab extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Sr.Provider,{value:this.props.routeContext},C.createElement(h0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Db(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(uu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Sr.Provider,{value:t},r)}function Fb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=s.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);h>=0||He(!1),s=s.slice(0,Math.min(s.length,h+1))}let d=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let v=s[h];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=h),v.route.id){let{loaderData:x,errors:b}=n,w=v.route.loader&&x[v.route.id]===void 0&&(!b||b[v.route.id]===void 0);if(v.route.lazy||w){d=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}return s.reduceRight((h,v,x)=>{let b,w=!1,k=null,S=null;n&&(b=l&&v.route.id?l[v.route.id]:void 0,k=v.route.errorElement||_b,d&&(p<0&&x===0?(Vb("route-fallback",!1),w=!0,S=null):p===x&&(w=!0,S=v.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,x+1)),f=()=>{let g;return b?g=k:w?g=S:v.route.Component?g=C.createElement(v.route.Component,null):v.route.element?g=v.route.element:g=h,C.createElement(Db,{match:v,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?C.createElement(Ab,{location:n.location,revalidation:n.revalidation,component:k,error:b,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var x0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(x0||{}),ls=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ls||{});function Ob(e){let t=C.useContext(uu);return t||He(!1),t}function Ib(e){let t=C.useContext(Cb);return t||He(!1),t}function Lb(e){let t=C.useContext(Sr);return t||He(!1),t}function v0(e){let t=Lb(),n=t.matches[t.matches.length-1];return n.route.id||He(!1),n.route.id}function Rb(){var e;let t=C.useContext(h0),n=Ib(ls.UseRouteError),r=v0(ls.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Mb(){let{router:e}=Ob(x0.UseNavigateStable),t=v0(ls.UseNavigateStable),n=C.useRef(!1);return g0(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,zo({fromRouteId:t},o)))},[e,t])}const Yp={};function Vb(e,t,n){!t&&!Yp[e]&&(Yp[e]=!0)}function jb(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function b0(e){return zb(e.context)}function Ne(e){He(!1)}function Bb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=On.Pop,navigator:o,static:s=!1,future:l}=e;Fs()&&He(!1);let d=t.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:d,navigator:o,static:s,future:zo({v7_relativeSplatPath:!1},l)}),[d,l,o,s]);typeof r=="string"&&(r=vi(r));let{pathname:h="/",search:v="",hash:x="",state:b=null,key:w="default"}=r,k=C.useMemo(()=>{let S=f0(h,d);return S==null?null:{location:{pathname:S,search:v,hash:x,state:b,key:w},navigationType:i}},[d,h,v,x,b,w,i]);return k==null?null:C.createElement(As.Provider,{value:p},C.createElement(Ds.Provider,{children:n,value:k}))}function Ub(e){let{children:t,location:n}=e;return Tb(td(t),n)}new Promise(()=>{});function td(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,td(r.props.children,o));return}r.type!==Ne&&He(!1),!r.props.index||!r.props.children||He(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=td(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hb="6";try{window.__reactRouterVersion=Hb}catch{}const qb="startTransition",Wp=Rx[qb];function Gb(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Kv({window:i,v5Compat:!0}));let s=o.current,[l,d]=C.useState({action:s.action,location:s.location}),{v7_startTransition:p}=r||{},h=C.useCallback(v=>{p&&Wp?Wp(()=>d(v)):d(v)},[d,p]);return C.useLayoutEffect(()=>s.listen(h),[s,h]),C.useEffect(()=>jb(r),[r]),C.createElement(Bb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var Qp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qp||(Qp={}));var Kp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kp||(Kp={}));function y0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=y0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function In(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=y0(e))&&(r&&(r+=" "),r+=t);return r}const no=e=>typeof e=="number"&&!isNaN(e),yr=e=>typeof e=="string",xt=e=>typeof e=="function",Fa=e=>yr(e)||xt(e)?e:null,zl=e=>C.isValidElement(e)||yr(e)||xt(e)||no(e);function Yb(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Is(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:l,position:d,preventExitTransition:p,done:h,nodeRef:v,isIn:x}=s;const b=r?`${t}--${d}`:t,w=r?`${n}--${d}`:n,k=C.useRef(0);return C.useLayoutEffect(()=>{const S=v.current,m=b.split(" "),f=g=>{g.target===v.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",f),S.removeEventListener("animationcancel",f),k.current===0&&g.type!=="animationcancel"&&S.classList.remove(...m))};S.classList.add(...m),S.addEventListener("animationend",f),S.addEventListener("animationcancel",f)},[]),C.useEffect(()=>{const S=v.current,m=()=>{S.removeEventListener("animationend",m),i?Yb(S,h,o):h()};x||(p?m():(k.current=1,S.className+=` ${w}`,S.addEventListener("animationend",m)))},[x]),de.createElement(de.Fragment,null,l)}}function Jp(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Pt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Zo=e=>{let{theme:t,type:n,...r}=e;return de.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Tl={info:function(e){return de.createElement(Zo,{...e},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return de.createElement(Zo,{...e},de.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return de.createElement(Zo,{...e},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return de.createElement(Zo,{...e},de.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return de.createElement("div",{className:"Toastify__spinner"})}};function Wb(e){const[,t]=C.useReducer(b=>b+1,0),[n,r]=C.useState([]),i=C.useRef(null),o=C.useRef(new Map).current,s=b=>n.indexOf(b)!==-1,l=C.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:b=>o.get(b)}).current;function d(b){let{containerId:w}=b;const{limit:k}=l.props;!k||w&&l.containerId!==w||(l.count-=l.queue.length,l.queue=[])}function p(b){r(w=>b==null?[]:w.filter(k=>k!==b))}function h(){const{toastContent:b,toastProps:w,staleId:k}=l.queue.shift();x(b,w,k)}function v(b,w){let{delay:k,staleId:S,...m}=w;if(!zl(b)||function(V){return!i.current||l.props.enableMultiContainer&&V.containerId!==l.props.containerId||o.has(V.toastId)&&V.updateId==null}(m))return;const{toastId:f,updateId:g,data:y}=m,{props:N}=l,T=()=>p(f),O=g==null;O&&l.count++;const $={...N,style:N.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(m).filter(V=>{let[B,re]=V;return re!=null})),toastId:f,updateId:g,data:y,closeToast:T,isIn:!1,className:Fa(m.className||N.toastClassName),bodyClassName:Fa(m.bodyClassName||N.bodyClassName),progressClassName:Fa(m.progressClassName||N.progressClassName),autoClose:!m.isLoading&&(H=m.autoClose,j=N.autoClose,H===!1||no(H)&&H>0?H:j),deleteToast(){const V=Jp(o.get(f),"removed");o.delete(f),Pt.emit(4,V);const B=l.queue.length;if(l.count=f==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),B>0){const re=f==null?l.props.limit:1;if(B===1||re===1)l.displayedToast++,h();else{const le=re>B?B:re;l.displayedToast=le;for(let Z=0;Z<le;Z++)h()}}else t()}};var H,j;$.iconOut=function(V){let{theme:B,type:re,isLoading:le,icon:Z}=V,L=null;const R={theme:B,type:re};return Z===!1||(xt(Z)?L=Z(R):C.isValidElement(Z)?L=C.cloneElement(Z,R):yr(Z)||no(Z)?L=Z:le?L=Tl.spinner():(X=>X in Tl)(re)&&(L=Tl[re](R))),L}($),xt(m.onOpen)&&($.onOpen=m.onOpen),xt(m.onClose)&&($.onClose=m.onClose),$.closeButton=N.closeButton,m.closeButton===!1||zl(m.closeButton)?$.closeButton=m.closeButton:m.closeButton===!0&&($.closeButton=!zl(N.closeButton)||N.closeButton);let A=b;C.isValidElement(b)&&!yr(b.type)?A=C.cloneElement(b,{closeToast:T,toastProps:$,data:y}):xt(b)&&(A=b({closeToast:T,toastProps:$,data:y})),N.limit&&N.limit>0&&l.count>N.limit&&O?l.queue.push({toastContent:A,toastProps:$,staleId:S}):no(k)?setTimeout(()=>{x(A,$,S)},k):x(A,$,S)}function x(b,w,k){const{toastId:S}=w;k&&o.delete(k);const m={content:b,props:w};o.set(S,m),r(f=>[...f,S].filter(g=>g!==k)),Pt.emit(4,Jp(m,m.props.updateId==null?"added":"updated"))}return C.useEffect(()=>(l.containerId=e.containerId,Pt.cancelEmit(3).on(0,v).on(1,b=>i.current&&p(b)).on(5,d).emit(2,l),()=>{o.clear(),Pt.emit(3,l)}),[]),C.useEffect(()=>{l.props=e,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(b){const w=new Map,k=Array.from(o.values());return e.newestOnTop&&k.reverse(),k.forEach(S=>{const{position:m}=S.props;w.has(m)||w.set(m,[]),w.get(m).push(S)}),Array.from(w,S=>b(S[0],S[1]))},containerRef:i,isToastActive:s}}function Xp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Zp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Qb(e){const[t,n]=C.useState(!1),[r,i]=C.useState(!1),o=C.useRef(null),s=C.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=C.useRef(e),{autoClose:d,pauseOnHover:p,closeToast:h,onClick:v,closeOnClick:x}=e;function b(y){if(e.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",f),document.addEventListener("touchmove",m),document.addEventListener("touchend",f);const N=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=N.getBoundingClientRect(),N.style.transition="",s.x=Xp(y.nativeEvent),s.y=Zp(y.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=N.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=N.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function w(y){if(s.boundingRect){const{top:N,bottom:T,left:O,right:$}=s.boundingRect;y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=O&&s.x<=$&&s.y>=N&&s.y<=T?S():k()}}function k(){n(!0)}function S(){n(!1)}function m(y){const N=o.current;s.canDrag&&N&&(s.didMove=!0,t&&S(),s.x=Xp(y),s.y=Zp(y),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),N.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,N.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function f(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",f);const y=o.current;if(s.canDrag&&s.didMove&&y){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${e.draggableDirection}(0)`,y.style.opacity="1"}}C.useEffect(()=>{l.current=e}),C.useEffect(()=>(o.current&&o.current.addEventListener("d",k,{once:!0}),xt(e.onOpen)&&e.onOpen(C.isValidElement(e.children)&&e.children.props),()=>{const y=l.current;xt(y.onClose)&&y.onClose(C.isValidElement(y.children)&&y.children.props)}),[]),C.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",k),window.addEventListener("blur",S)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",k),window.removeEventListener("blur",S))}),[e.pauseOnFocusLoss]);const g={onMouseDown:b,onTouchStart:b,onMouseUp:w,onTouchEnd:w};return d&&p&&(g.onMouseEnter=S,g.onMouseLeave=k),x&&(g.onClick=y=>{v&&v(y),s.canCloseOnClick&&h()}),{playToast:k,pauseToast:S,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:g}}function w0(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return de.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},de.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},de.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Kb(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:l,controlledProgress:d,progress:p,rtl:h,isIn:v,theme:x}=e;const b=o||d&&p===0,w={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:b?0:1};d&&(w.transform=`scaleX(${p})`);const k=In("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${x}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),S=xt(s)?s({rtl:h,type:i,defaultClassName:k}):In(k,s);return de.createElement("div",{role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:S,style:w,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{v&&r()}})}const Jb=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=Qb(e),{closeButton:o,children:s,autoClose:l,onClick:d,type:p,hideProgressBar:h,closeToast:v,transition:x,position:b,className:w,style:k,bodyClassName:S,bodyStyle:m,progressClassName:f,progressStyle:g,updateId:y,role:N,progress:T,rtl:O,toastId:$,deleteToast:H,isIn:j,isLoading:A,iconOut:V,closeOnClick:B,theme:re}=e,le=In("Toastify__toast",`Toastify__toast-theme--${re}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":B}),Z=xt(w)?w({rtl:O,position:b,type:p,defaultClassName:le}):In(le,w),L=!!T||!l,R={closeToast:v,type:p,theme:re};let X=null;return o===!1||(X=xt(o)?o(R):C.isValidElement(o)?C.cloneElement(o,R):w0(R)),de.createElement(x,{isIn:j,done:H,position:b,preventExitTransition:n,nodeRef:r},de.createElement("div",{id:$,onClick:d,className:Z,...i,style:k,ref:r},de.createElement("div",{...j&&{role:N},className:xt(S)?S({type:p}):In("Toastify__toast-body",S),style:m},V!=null&&de.createElement("div",{className:In("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},V),de.createElement("div",null,s)),X,de.createElement(Kb,{...y&&!L?{key:`pb-${y}`}:{},rtl:O,theme:re,delay:l,isRunning:t,isIn:j,closeToast:v,hide:h,type:p,style:g,className:f,controlledProgress:L,progress:T||0})))},Ls=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Xb=Is(Ls("bounce",!0));Is(Ls("slide",!0));Is(Ls("zoom"));Is(Ls("flip"));const nd=C.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=Wb(e),{className:o,style:s,rtl:l,containerId:d}=e;function p(h){const v=In("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":l});return xt(o)?o({position:h,rtl:l,defaultClassName:v}):In(v,Fa(o))}return C.useEffect(()=>{t&&(t.current=r.current)},[]),de.createElement("div",{ref:r,className:"Toastify",id:d},n((h,v)=>{const x=v.length?{...s}:{...s,pointerEvents:"none"};return de.createElement("div",{className:p(h),style:x,key:`container-${h}`},v.map((b,w)=>{let{content:k,props:S}=b;return de.createElement(Jb,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":w+1,"--len":v.length},key:`toast-${S.key}`},k)}))}))});nd.displayName="ToastContainer",nd.defaultProps={position:"top-right",transition:Xb,autoClose:5e3,closeButton:w0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let $l,or=new Map,qi=[],Zb=1;function k0(){return""+Zb++}function ey(e){return e&&(yr(e.toastId)||no(e.toastId))?e.toastId:k0()}function ro(e,t){return or.size>0?Pt.emit(0,e,t):qi.push({content:e,options:t}),t.toastId}function cs(e,t){return{...t,type:t&&t.type||e,toastId:ey(t)}}function ea(e){return(t,n)=>ro(t,cs(e,n))}function D(e,t){return ro(e,cs("default",t))}D.loading=(e,t)=>ro(e,cs("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let r,{pending:i,error:o,success:s}=t;i&&(r=yr(i)?D.loading(i,n):D.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(h,v,x)=>{if(v==null)return void D.dismiss(r);const b={type:h,...l,...n,data:x},w=yr(v)?{render:v}:v;return r?D.update(r,{...b,...w}):D(w.render,{...b,...w}),x},p=xt(e)?e():e;return p.then(h=>d("success",s,h)).catch(h=>d("error",o,h)),p},D.success=ea("success"),D.info=ea("info"),D.error=ea("error"),D.warning=ea("warning"),D.warn=D.warning,D.dark=(e,t)=>ro(e,cs("default",{theme:"dark",...t})),D.dismiss=e=>{or.size>0?Pt.emit(1,e):qi=qi.filter(t=>e!=null&&t.options.toastId!==e)},D.clearWaitingQueue=function(e){return e===void 0&&(e={}),Pt.emit(5,e)},D.isActive=e=>{let t=!1;return or.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},D.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=or.get(o||$l);return s&&s.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:k0()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,ro(s,o)}},0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(Pt.on(4,e),()=>{Pt.off(4,e)}),D.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Pt.on(2,e=>{$l=e.containerId||e,or.set($l,e),qi.forEach(t=>{Pt.emit(0,t.content,t.options)}),qi=[]}).on(3,e=>{or.delete(e.containerId||e),or.size===0&&Pt.off(0).off(1).off(5)});const S0=C.createContext(),cn=()=>{const e=C.useContext(S0);if(!e)throw new Error("useBusiness must be used within a BusinessProvider");return e},io={beauty:{primary:"#E91E63",secondary:"#F48FB1",accent:"#FFEB3B"},health:{primary:"#1976D2",secondary:"#42A5F5",accent:"#4CAF50"},fitness:{primary:"#FF5722",secondary:"#FF9800",accent:"#FFC107"},professional:{primary:"#9C27B0",secondary:"#BA68C8",accent:"#E1BEE7"},technical:{primary:"#607D8B",secondary:"#90A4AE",accent:"#B0BEC5"},restaurant:{primary:"#FF6F00",secondary:"#FFB74D",accent:"#FFF3E0"},public:{primary:"#2E7D32",secondary:"#4CAF50",accent:"#81C784"},veterinary:{primary:"#795548",secondary:"#A1887F",accent:"#D7CCC8"},education:{primary:"#FF9800",secondary:"#FFB74D",accent:"#FFF3E0"},retail:{primary:"#7B1FA2",secondary:"#BA68C8",accent:"#E1BEE7"},other:{primary:"#546E7A",secondary:"#78909C",accent:"#B0BEC5"}},ef=e=>{const t=io[e]||io.beauty,n=document.documentElement;n.style.setProperty("--primary-color",t.primary),n.style.setProperty("--secondary-color",t.secondary),n.style.setProperty("--accent-color",t.accent),n.style.setProperty("--primary-rgb",Pl(t.primary)),n.style.setProperty("--secondary-rgb",Pl(t.secondary)),n.style.setProperty("--accent-rgb",Pl(t.accent)),localStorage.setItem("businessTheme",JSON.stringify(t))},Pl=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)},${parseInt(t[2],16)},${parseInt(t[3],16)}`:"0,0,0"},ty=({children:e})=>{const[t,n]=C.useState("beauty"),[r,i]=C.useState(null),[o,s]=C.useState(io.beauty),[l,d]=C.useState(!0);C.useEffect(()=>{const b=localStorage.getItem("businessType")||"beauty";n(b),ef(b),d(!1)},[]);const p=x=>{n(x),s(io[x]||io.beauty),localStorage.setItem("businessType",x);const b=h(x);i(b),ef(x)},h=x=>{const b={health:{name:"Salud y Bienestar",icon:"🏥",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Pacientes",icon:"🤒"},{id:"agenda",label:"Agenda Médica",icon:"📅"},{id:"historiaClinica",label:"Historia Clínica",icon:"📋"},{id:"servicios",label:"Servicios",icon:"⚕️"},{id:"cobrar",label:"Cobros",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"especialidades",label:"Especialidades"},{id:"horarios",label:"Horarios"},{id:"medica",label:"Médica"}]},beauty:{name:"Belleza y Cuidado Personal",icon:"💇",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"agenda",label:"Agenda",icon:"📅"},{id:"servicios",label:"Servicios",icon:"✂️"},{id:"turnos",label:"Turnos",icon:"🎫"},{id:"cobrar",label:"Cobrar",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"promociones",label:"Promociones",icon:"🎉"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"},{id:"precios",label:"Precios"}]},fitness:{name:"Actividad Física y Formación",icon:"🏋️",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"agenda",label:"Clases",icon:"📅"},{id:"membresias",label:"Membresías",icon:"🎫"},{id:"instructores",label:"Instructores",icon:"👨‍🏫"},{id:"cobrar",label:"Cobros",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"asistencia",label:"Asistencia",icon:"✓"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"clases",label:"Clases"},{id:"horarios",label:"Horarios"},{id:"membresias",label:"Membresías"}]},professional:{name:"Servicios Profesionales",icon:"🧾",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"agenda",label:"Agenda",icon:"📅"},{id:"expedientes",label:"Expedientes",icon:"📁"},{id:"documentos",label:"Documentos",icon:"📄"},{id:"cobrar",label:"Facturación",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"},{id:"facturacion",label:"Facturación"}]},technical:{name:"Servicios Técnicos",icon:"🛠️",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"agenda",label:"Agenda",icon:"📅"},{id:"vehiculos",label:"Equipos/Vehículos",icon:"🚗"},{id:"ordenes",label:"Órdenes de Trabajo",icon:"📋"},{id:"inventario",label:"Repuestos",icon:"🔧"},{id:"cobrar",label:"Cobros",icon:"💳"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"},{id:"tecnica",label:"Técnica"}]},restaurant:{name:"Gastronomía",icon:"🧑‍🍳",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"mesas",label:"Mesas",icon:"🪑"},{id:"reservas",label:"Reservas",icon:"📅"},{id:"menu",label:"Menú",icon:"🍽️"},{id:"pedidos",label:"Pedidos",icon:"📝"},{id:"cocina",label:"Cocina",icon:"👨‍🍳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Caja",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"reservas",label:"Reservas"},{id:"horarios",label:"Horarios"},{id:"menu",label:"Menú"}]},public:{name:"Sector Público y Trámites",icon:"🏢",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"ciudadanos",label:"Ciudadanos",icon:"👥"},{id:"turnos",label:"Turnos",icon:"🎫"},{id:"tramites",label:"Trámites",icon:"📋"},{id:"documentos",label:"Documentos",icon:"📄"},{id:"atencion",label:"Atención",icon:"👥"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"},{id:"publica",label:"Pública"}]},veterinary:{name:"Veterinarias y Spa de Animales",icon:"🐾",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Dueños",icon:"👥"},{id:"mascotas",label:"Mascotas",icon:"🐾"},{id:"agenda",label:"Agenda",icon:"📅"},{id:"historiaClinica",label:"Historia Clínica",icon:"📋"},{id:"servicios",label:"Servicios",icon:"⚕️"},{id:"grooming",label:"Grooming",icon:"✂️"},{id:"guarderia",label:"Guardería/Hospedaje",icon:"🏠"},{id:"cobrar",label:"Cobros",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"promociones",label:"Promociones",icon:"🎉"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"},{id:"veterinaria",label:"Veterinaria"}]},education:{name:"Educación",icon:"🎓",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"estudiantes",label:"Estudiantes",icon:"🎓"},{id:"cursos",label:"Cursos",icon:"📚"},{id:"agenda",label:"Horario",icon:"📅"},{id:"matriculas",label:"Matrículas",icon:"📝"},{id:"asistencia",label:"Asistencia",icon:"✓"},{id:"calificaciones",label:"Calificaciones",icon:"📊"},{id:"cobrar",label:"Pagos",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"cursos",label:"Cursos"},{id:"horarios",label:"Horarios"},{id:"matriculas",label:"Matrículas"}]},retail:{name:"Comercio Minorista",icon:"🛍️",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"productos",label:"Productos",icon:"📦"},{id:"ventas",label:"Punto de Venta",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📋"},{id:"arqueo",label:"Caja",icon:"💰"},{id:"promociones",label:"Promociones",icon:"🎉"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"atencion",label:"Atención"},{id:"horarios",label:"Horarios"},{id:"ventas",label:"Ventas"}]},other:{name:"Otros Servicios",icon:"🔧",components:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"usuarios",label:"Usuarios",icon:"👤"},{id:"clientes",label:"Clientes",icon:"👥"},{id:"agenda",label:"Agenda",icon:"📅"},{id:"servicios",label:"Servicios",icon:"⚙️"},{id:"cobrar",label:"Cobrar",icon:"💳"},{id:"inventario",label:"Inventario",icon:"📦"},{id:"arqueo",label:"Arqueo",icon:"💰"},{id:"reportes",label:"Reportes",icon:"📈"},{id:"configuracion",label:"Configuración",icon:"⚙️"},{id:"bitacora",label:"Bitácora",icon:"📝"}],tabs:[{id:"general",label:"General"},{id:"servicios",label:"Servicios"},{id:"horarios",label:"Horarios"}]}};return b[x]||b.other},v={businessType:t,businessConfig:r,businessColors:o,updateBusinessType:p,getBusinessComponents:h,loading:l,componentList:h(t).components,tabs:h(t).tabs};return a(S0.Provider,{value:v,children:e})},C0=C.createContext(),bi=()=>{const e=C.useContext(C0);if(!e)throw new Error("useCliente must be used within a ClienteProvider");return e},ny=({children:e})=>{const[t,n]=C.useState(null),[r,i]=C.useState(!0),[o,s]=C.useState([]),[l,d]=C.useState([]);C.useEffect(()=>{const y=localStorage.getItem("cliente");y&&n(JSON.parse(y));const N=localStorage.getItem("carrito_cliente");N&&s(JSON.parse(N));const T=localStorage.getItem("citas_cliente");T&&d(JSON.parse(T)),i(!1)},[]);const p=y=>{n(y),localStorage.setItem("cliente",JSON.stringify(y))},h=()=>{n(null),s([]),d([]),localStorage.removeItem("cliente"),localStorage.removeItem("carrito_cliente"),localStorage.removeItem("citas_cliente")},v=y=>{s(N=>N.find(O=>O.id===y.id)?N.map(O=>O.id===y.id?{...O,cantidad:O.cantidad+1}:O):[...N,{...y,cantidad:1}])},x=y=>{s(N=>N.filter(T=>T.id!==y))},b=(y,N)=>{if(N<=0){x(y);return}s(T=>T.map(O=>O.id===y?{...O,cantidad:N}:O))},w=()=>{s([]),localStorage.removeItem("carrito_cliente")},k=y=>{const N={...y,id:Date.now(),estado:"pendiente",fechaCreacion:new Date().toISOString()};d(T=>{const O=[...T,N];return localStorage.setItem("citas_cliente",JSON.stringify(O)),O})},S=y=>{d(N=>{const T=N.map(O=>O.id===y?{...O,estado:"cancelada"}:O);return localStorage.setItem("citas_cliente",JSON.stringify(T)),T})};C.useEffect(()=>{o.length>0&&localStorage.setItem("carrito_cliente",JSON.stringify(o))},[o]);const m=o.reduce((y,N)=>y+N.precio*N.cantidad,0),f=o.reduce((y,N)=>y+N.cantidad,0),g={cliente:t,loading:r,login:p,logout:h,carrito:o,agregarAlCarrito:v,removeFromCarrito:x,updateCantidad:b,clearCarrito:w,valorCarrito:m,cantidadCarrito:f,citas:l,agregarCita:k,cancelarCita:S};return a(C0.Provider,{value:g,children:e})};var Fo=e=>e.type==="checkbox",dr=e=>e instanceof Date,mt=e=>e==null;const E0=e=>typeof e=="object";var Le=e=>!mt(e)&&!Array.isArray(e)&&E0(e)&&!dr(e),ry=e=>Le(e)&&e.target?Fo(e.target)?e.target.checked:e.target.value:e,iy=(e,t)=>t.split(".").some((n,r,i)=>!isNaN(Number(n))&&e.has(i.slice(0,r).join("."))),oy=e=>{const t=e.constructor&&e.constructor.prototype;return Le(t)&&t.hasOwnProperty("isPrototypeOf")},pu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function je(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(pu&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(Le(e)&&oy(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=je(e[i]));return r}var Rs=e=>/^\w*$/.test(e),_e=e=>e===void 0,fu=e=>Array.isArray(e)?e.filter(Boolean):[],mu=e=>fu(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ne=(e,t,n)=>{if(!t||!Le(e))return n;const r=(Rs(t)?[t]:mu(t)).reduce((i,o)=>mt(i)?i:i[o],e);return _e(r)||r===e?_e(e[t])?n:e[t]:r},rn=e=>typeof e=="boolean",Ht=e=>typeof e=="function",ke=(e,t,n)=>{let r=-1;const i=Rs(t)?[t]:mu(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let d=n;if(r!==s){const p=e[l];d=Le(p)||Array.isArray(p)?p:isNaN(+i[r+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=d,e=e[l]}};const zr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},qt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Vt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},_l="form",N0="root",ay=de.createContext(null);ay.displayName="HookFormControlContext";var sy=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==qt.all&&(t._proxyFormState[s]=!r||qt.all),n&&(n[s]=!0),e[s]}});return i};const ly=typeof window<"u"?de.useLayoutEffect:de.useEffect;var st=e=>typeof e=="string",cy=(e,t,n,r,i)=>st(e)?(r&&t.watch.add(e),ne(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ne(n,o))):(r&&(t.watchAll=!0),n),rd=e=>mt(e)||!E0(e);function An(e,t,n=new WeakSet){if(rd(e)||rd(t))return Object.is(e,t);if(dr(e)&&dr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const o of r){const s=e[o];if(!i.includes(o))return!1;if(o!=="ref"){const l=t[o];if(dr(s)&&dr(l)||(Le(s)||Array.isArray(s))&&(Le(l)||Array.isArray(l))?!An(s,l,n):!Object.is(s,l))return!1}}return!0}const dy=de.createContext(null);dy.displayName="HookFormContext";var z0=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},oo=e=>Array.isArray(e)?e:[e],tf=()=>{let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}};function T0(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const i=e[r],o=t[r];if(i&&Le(i)&&o){const s=T0(i,o);Le(s)&&(n[r]=s)}else e[r]&&(n[r]=o)}return n}var it=e=>Le(e)&&!Object.keys(e).length,hu=e=>e.type==="file",ds=e=>{if(!pu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},$0=e=>e.type==="select-multiple",gu=e=>e.type==="radio",uy=e=>gu(e)||Fo(e),Al=e=>ds(e)&&e.isConnected;function py(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=_e(e)?r++:e[t[r++]];return e}function fy(e){for(const t in e)if(e.hasOwnProperty(t)&&!_e(e[t]))return!1;return!0}function Re(e,t){const n=Array.isArray(t)?t:Rs(t)?[t]:mu(t),r=n.length===1?e:py(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Le(r)&&it(r)||Array.isArray(r)&&fy(r))&&Re(e,n.slice(0,-1)),e}var my=e=>{for(const t in e)if(Ht(e[t]))return!0;return!1};function P0(e){return Array.isArray(e)||Le(e)&&!my(e)}function id(e,t={}){for(const n in e){const r=e[n];P0(r)?(t[n]=Array.isArray(r)?[]:{},id(r,t[n])):_e(r)||(t[n]=!0)}return t}function Gi(e,t,n){n||(n=id(t));for(const r in e){const i=e[r];if(P0(i))_e(t)||rd(n[r])?n[r]=id(i,Array.isArray(i)?[]:{}):Gi(i,mt(t)?{}:t[r],n[r]);else{const o=t[r];n[r]=!An(i,o)}}return n}const nf={value:!1,isValid:!1},rf={value:!0,isValid:!0};var _0=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_e(e[0].attributes.value)?_e(e[0].value)||e[0].value===""?rf:{value:e[0].value,isValid:!0}:rf:nf}return nf},A0=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>_e(e)?e:t?e===""?NaN:e&&+e:n&&st(e)?new Date(e):r?r(e):e;const of={isValid:!1,value:null};var D0=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,of):of;function af(e){const t=e.ref;return hu(t)?t.files:gu(t)?D0(e.refs).value:$0(t)?[...t.selectedOptions].map(({value:n})=>n):Fo(t)?_0(e.refs).value:A0(_e(t.value)?e.ref.value:t.value,e)}var hy=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,gy=(e,t,n,r)=>{const i={};for(const o of e){const s=ne(t,o);s&&ke(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},us=e=>e instanceof RegExp,$i=e=>_e(e)?e:us(e)?e.source:Le(e)?us(e.value)?e.value.source:e.value:e,sf=e=>({isOnSubmit:!e||e===qt.onSubmit,isOnBlur:e===qt.onBlur,isOnChange:e===qt.onChange,isOnAll:e===qt.all,isOnTouch:e===qt.onTouched});const lf="AsyncFunction";var xy=e=>!!e&&!!e.validate&&!!(Ht(e.validate)&&e.validate.constructor.name===lf||Le(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===lf)),vy=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),cf=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ao=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=ne(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(ao(l,t))break}else if(Le(l)&&ao(l,t))break}}};function df(e,t,n){const r=ne(e,n);if(r||Rs(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=ne(t,o),l=ne(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};if(l&&l.root&&l.root.type)return{name:`${o}.root`,error:l.root};i.pop()}return{name:n}}var by=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return it(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||qt.all))},yy=(e,t,n)=>!e||!t||e===t||oo(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),wy=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,ky=(e,t)=>!fu(ne(e,t)).length&&Re(e,t),Sy=(e,t,n)=>{const r=oo(ne(e,n));return ke(r,N0,t[n]),ke(e,n,r),e};function uf(e,t,n="validate"){if(st(e)||Array.isArray(e)&&e.every(st)||rn(e)&&!e)return{type:n,message:st(e)?e:"",ref:t}}var Tr=e=>Le(e)&&!us(e)?e:{value:e,message:""},pf=async(e,t,n,r,i,o)=>{const{ref:s,refs:l,required:d,maxLength:p,minLength:h,min:v,max:x,pattern:b,validate:w,name:k,valueAsNumber:S,mount:m}=e._f,f=ne(n,k);if(!m||t.has(k))return{};const g=l?l[0]:s,y=V=>{i&&g.reportValidity&&(g.setCustomValidity(rn(V)?"":V||""),g.reportValidity())},N={},T=gu(s),O=Fo(s),$=T||O,H=(S||hu(s))&&_e(s.value)&&_e(f)||ds(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,j=z0.bind(null,k,r,N),A=(V,B,re,le=Vt.maxLength,Z=Vt.minLength)=>{const L=V?B:re;N[k]={type:V?le:Z,message:L,ref:s,...j(V?le:Z,L)}};if(o?!Array.isArray(f)||!f.length:d&&(!$&&(H||mt(f))||rn(f)&&!f||O&&!_0(l).isValid||T&&!D0(l).isValid)){const{value:V,message:B}=st(d)?{value:!!d,message:d}:Tr(d);if(V&&(N[k]={type:Vt.required,message:B,ref:g,...j(Vt.required,B)},!r))return y(B),N}if(!H&&(!mt(v)||!mt(x))){let V,B;const re=Tr(x),le=Tr(v);if(!mt(f)&&!isNaN(f)){const Z=s.valueAsNumber||f&&+f;mt(re.value)||(V=Z>re.value),mt(le.value)||(B=Z<le.value)}else{const Z=s.valueAsDate||new Date(f),L=_=>new Date(new Date().toDateString()+" "+_),R=s.type=="time",X=s.type=="week";st(re.value)&&f&&(V=R?L(f)>L(re.value):X?f>re.value:Z>new Date(re.value)),st(le.value)&&f&&(B=R?L(f)<L(le.value):X?f<le.value:Z<new Date(le.value))}if((V||B)&&(A(!!V,re.message,le.message,Vt.max,Vt.min),!r))return y(N[k].message),N}if((p||h)&&!H&&(st(f)||o&&Array.isArray(f))){const V=Tr(p),B=Tr(h),re=!mt(V.value)&&f.length>+V.value,le=!mt(B.value)&&f.length<+B.value;if((re||le)&&(A(re,V.message,B.message),!r))return y(N[k].message),N}if(b&&!H&&st(f)){const{value:V,message:B}=Tr(b);if(us(V)&&!f.match(V)&&(N[k]={type:Vt.pattern,message:B,ref:s,...j(Vt.pattern,B)},!r))return y(B),N}if(w){if(Ht(w)){const V=await w(f,n),B=uf(V,g);if(B&&(N[k]={...B,...j(Vt.validate,B.message)},!r))return y(B.message),N}else if(Le(w)){let V={};for(const B in w){if(!it(V)&&!r)break;const re=uf(await w[B](f,n),g,B);re&&(V={...re,...j(B,re.message)},y(re.message),r&&(N[k]=V))}if(!it(V)&&(N[k]={ref:g,...V},!r))return N}}return y(!0),N};const Cy={mode:qt.onSubmit,reValidateMode:qt.onChange,shouldFocusError:!0};function Ey(e={}){let t={...Cy,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ht(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=Le(t.defaultValues)||Le(t.values)?je(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:je(i),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},d,p=0;const h={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={...h};let x={...v};const b={array:tf(),state:tf()},w=t.criteriaMode===qt.all,k=E=>z=>{clearTimeout(p),p=setTimeout(E,z)},S=async E=>{if(!s.keepIsValid&&!t.disabled&&(v.isValid||x.isValid||E)){let z;t.resolver?(z=it((await H()).errors),m()):z=await V({fields:r,onlyCheckValid:!0,eventType:zr.VALID}),z!==n.isValid&&b.state.next({isValid:z})}},m=(E,z)=>{!t.disabled&&(v.isValidating||v.validatingFields||x.isValidating||x.validatingFields)&&((E||Array.from(l.mount)).forEach(P=>{P&&(z?ke(n.validatingFields,P,z):Re(n.validatingFields,P))}),b.state.next({validatingFields:n.validatingFields,isValidating:!it(n.validatingFields)}))},f=E=>{const z=Gi(i,o),P=hy(E);ke(n.dirtyFields,P,ne(z,P))},g=(E,z=[],P,K,W=!0,q=!0)=>{if(K&&P&&!t.disabled){if(s.action=!0,q&&Array.isArray(ne(r,E))){const ie=P(ne(r,E),K.argA,K.argB);W&&ke(r,E,ie)}if(q&&Array.isArray(ne(n.errors,E))){const ie=P(ne(n.errors,E),K.argA,K.argB);W&&ke(n.errors,E,ie),ky(n.errors,E)}if((v.touchedFields||x.touchedFields)&&q&&Array.isArray(ne(n.touchedFields,E))){const ie=P(ne(n.touchedFields,E),K.argA,K.argB);W&&ke(n.touchedFields,E,ie)}(v.dirtyFields||x.dirtyFields)&&f(E),b.state.next({name:E,isDirty:re(E,z),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ke(o,E,z)},y=(E,z)=>{ke(n.errors,E,z),b.state.next({errors:n.errors})},N=E=>{n.errors=E,b.state.next({errors:n.errors,isValid:!1})},T=(E,z,P,K)=>{const W=ne(r,E);if(W){const q=ne(o,E,_e(P)?ne(i,E):P);_e(q)||K&&K.defaultChecked||z?ke(o,E,z?q:af(W._f)):L(E,q),s.mount&&!s.action&&S()}},O=(E,z,P,K,W)=>{let q=!1,ie=!1;const fe={name:E};if(!t.disabled){if(!P||K){(v.isDirty||x.isDirty)&&(ie=n.isDirty,n.isDirty=fe.isDirty=re(),q=ie!==fe.isDirty);const be=An(ne(i,E),z);ie=!!ne(n.dirtyFields,E),be?Re(n.dirtyFields,E):ke(n.dirtyFields,E,!0),fe.dirtyFields=n.dirtyFields,q=q||(v.dirtyFields||x.dirtyFields)&&ie!==!be}if(P){const be=ne(n.touchedFields,E);be||(ke(n.touchedFields,E,P),fe.touchedFields=n.touchedFields,q=q||(v.touchedFields||x.touchedFields)&&be!==P)}q&&W&&b.state.next(fe)}return q?fe:{}},$=(E,z,P,K)=>{const W=ne(n.errors,E),q=(v.isValid||x.isValid)&&rn(z)&&n.isValid!==z;if(t.delayError&&P?(d=k(()=>y(E,P)),d(t.delayError)):(clearTimeout(p),d=null,P?ke(n.errors,E,P):Re(n.errors,E)),(P?!An(W,P):W)||!it(K)||q){const ie={...K,...q&&rn(z)?{isValid:z}:{},errors:n.errors,name:E};n={...n,...ie},b.state.next(ie)}},H=async E=>(m(E,!0),await t.resolver(o,t.context,gy(E||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),j=async E=>{const{errors:z}=await H(E);if(m(E),E)for(const P of E){const K=ne(z,P);K?ke(n.errors,P,K):Re(n.errors,P)}else n.errors=z;return z},A=async({name:E,eventType:z})=>{if(e.validate){const P=await e.validate({formValues:o,formState:n,name:E,eventType:z});if(Le(P))for(const K in P)P[K]&&F(`${_l}.${K}`,{message:st(P.message)?P.message:"",type:Vt.validate});else st(P)||!P?F(_l,{message:P||"",type:Vt.validate}):se(_l);return P}return!0},V=async({fields:E,onlyCheckValid:z,name:P,eventType:K,context:W={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(W.runRootValidation=!0,!await A({name:P,eventType:K})&&(W.valid=!1,z)))return W.valid;for(const q in E){const ie=E[q];if(ie){const{_f:fe,...be}=ie;if(fe){const rt=l.array.has(fe.name),en=ie._f&&xy(ie._f);en&&v.validatingFields&&m([fe.name],!0);const ut=await pf(ie,l.disabled,o,w,t.shouldUseNativeValidation&&!z,rt);if(en&&v.validatingFields&&m([fe.name]),ut[fe.name]&&(W.valid=!1,z)||(!z&&(ne(ut,fe.name)?rt?Sy(n.errors,ut,fe.name):ke(n.errors,fe.name,ut[fe.name]):Re(n.errors,fe.name)),e.shouldUseNativeValidation&&ut[fe.name]))break}!it(be)&&await V({context:W,onlyCheckValid:z,fields:be,name:q,eventType:K})}}return W.valid},B=()=>{for(const E of l.unMount){const z=ne(r,E);z&&(z._f.refs?z._f.refs.every(P=>!Al(P)):!Al(z._f.ref))&&he(E)}l.unMount=new Set},re=(E,z)=>!t.disabled&&(E&&z&&ke(o,E,z),!An(J(),i)),le=(E,z,P)=>cy(E,l,{...s.mount?o:_e(z)?i:st(E)?{[E]:z}:z},P,z),Z=E=>fu(ne(s.mount?o:i,E,t.shouldUnregister?ne(i,E,[]):[])),L=(E,z,P={})=>{const K=ne(r,E);let W=z;if(K){const q=K._f;q&&(!q.disabled&&ke(o,E,A0(z,q)),W=ds(q.ref)&&mt(z)?"":z,$0(q.ref)?[...q.ref.options].forEach(ie=>ie.selected=W.includes(ie.value)):q.refs?Fo(q.ref)?q.refs.forEach(ie=>{(!ie.defaultChecked||!ie.disabled)&&(Array.isArray(W)?ie.checked=!!W.find(fe=>fe===ie.value):ie.checked=W===ie.value||!!W)}):q.refs.forEach(ie=>ie.checked=ie.value===W):hu(q.ref)?q.ref.value="":(q.ref.value=W,q.ref.type||b.state.next({name:E,values:je(o)})))}(P.shouldDirty||P.shouldTouch)&&O(E,W,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&M(E)},R=(E,z,P)=>{for(const K in z){if(!z.hasOwnProperty(K))return;const W=z[K],q=E+"."+K,ie=ne(r,q);(l.array.has(E)||Le(W)||ie&&!ie._f)&&!dr(W)?R(q,W,P):L(q,W,P)}},X=(E,z,P={})=>{const K=ne(r,E),W=l.array.has(E),q=je(z);ke(o,E,q),W?(b.array.next({name:E,values:je(o)}),(v.isDirty||v.dirtyFields||x.isDirty||x.dirtyFields)&&P.shouldDirty&&(f(E),b.state.next({name:E,dirtyFields:n.dirtyFields,isDirty:re(E,q)}))):K&&!K._f&&!mt(q)?R(E,q,P):L(E,q,P),cf(E,l)?b.state.next({...n,name:E,values:je(o)}):b.state.next({name:s.mount?E:void 0,values:je(o)})},_=async E=>{s.mount=!0;const z=E.target;let P=z.name,K=!0;const W=ne(r,P),q=be=>{K=Number.isNaN(be)||dr(be)&&isNaN(be.getTime())||An(be,ne(o,P,be))},ie=sf(t.mode),fe=sf(t.reValidateMode);if(W){let be,rt;const en=z.type?af(W._f):ry(E),ut=E.type===zr.BLUR||E.type===zr.FOCUS_OUT,bx=!vy(W._f)&&!e.validate&&!t.resolver&&!ne(n.errors,P)&&!W._f.deps||wy(ut,ne(n.touchedFields,P),n.isSubmitted,fe,ie),Xs=cf(P,l,ut);ke(o,P,en),ut?(!z||!z.readOnly)&&(W._f.onBlur&&W._f.onBlur(E),d&&d(0)):W._f.onChange&&W._f.onChange(E);const Zs=O(P,en,ut),yx=!it(Zs)||Xs;if(!ut&&b.state.next({name:P,type:E.type,values:je(o)}),bx)return(v.isValid||x.isValid)&&(t.mode==="onBlur"?ut&&S():ut||S()),yx&&b.state.next({name:P,...Xs?{}:Zs});if(!t.resolver&&e.validate&&await A({name:P,eventType:E.type}),!ut&&Xs&&b.state.next({...n}),t.resolver){const{errors:Pu}=await H([P]);if(m([P]),q(en),K){const wx=df(n.errors,r,P),_u=df(Pu,r,wx.name||P);be=_u.error,P=_u.name,rt=it(Pu)}}else m([P],!0),be=(await pf(W,l.disabled,o,w,t.shouldUseNativeValidation))[P],m([P]),q(en),K&&(be?rt=!1:(v.isValid||x.isValid)&&(rt=await V({fields:r,onlyCheckValid:!0,name:P,eventType:E.type})));K&&(W._f.deps&&(!Array.isArray(W._f.deps)||W._f.deps.length>0)&&M(W._f.deps),$(P,rt,be,Zs))}},G=(E,z)=>{if(ne(n.errors,z)&&E.focus)return E.focus(),1},M=async(E,z={})=>{let P,K;const W=oo(E);if(t.resolver){const q=await j(_e(E)?E:W);P=it(q),K=E?!W.some(ie=>ne(q,ie)):P}else E?(K=(await Promise.all(W.map(async q=>{const ie=ne(r,q);return await V({fields:ie&&ie._f?{[q]:ie}:ie,eventType:zr.TRIGGER})}))).every(Boolean),!(!K&&!n.isValid)&&S()):K=P=await V({fields:r,name:E,eventType:zr.TRIGGER});return b.state.next({...!st(E)||(v.isValid||x.isValid)&&P!==n.isValid?{}:{name:E},...t.resolver||!E?{isValid:P}:{},errors:n.errors}),z.shouldFocus&&!K&&ao(r,G,E?W:l.mount),K},J=(E,z)=>{let P={...s.mount?o:i};return z&&(P=T0(z.dirtyFields?n.dirtyFields:n.touchedFields,P)),_e(E)?P:st(E)?ne(P,E):E.map(K=>ne(P,K))},Q=(E,z)=>({invalid:!!ne((z||n).errors,E),isDirty:!!ne((z||n).dirtyFields,E),error:ne((z||n).errors,E),isValidating:!!ne(n.validatingFields,E),isTouched:!!ne((z||n).touchedFields,E)}),se=E=>{const z=E?oo(E):void 0;z==null||z.forEach(P=>Re(n.errors,P)),z?z.forEach(P=>{b.state.next({name:P,errors:n.errors})}):b.state.next({errors:{}})},F=(E,z,P)=>{const K=(ne(r,E,{_f:{}})._f||{}).ref,W=ne(n.errors,E)||{},{ref:q,message:ie,type:fe,...be}=W;ke(n.errors,E,{...be,...z,ref:K}),b.state.next({name:E,errors:n.errors,isValid:!1}),P&&P.shouldFocus&&K&&K.focus&&K.focus()},pe=(E,z)=>Ht(E)?b.state.subscribe({next:P=>"values"in P&&E(le(void 0,z),P)}):le(E,z,!0),Y=E=>b.state.subscribe({next:z=>{yy(E.name,z.name,E.exact)&&by(z,E.formState||v,Ve,E.reRenderRoot)&&E.callback({values:{...o},...n,...z,defaultValues:i})}}).unsubscribe,Se=E=>(s.mount=!0,x={...x,...E.formState},Y({...E,formState:{...h,...E.formState}})),he=(E,z={})=>{for(const P of E?oo(E):l.mount)l.mount.delete(P),l.array.delete(P),z.keepValue||(Re(r,P),Re(o,P)),!z.keepError&&Re(n.errors,P),!z.keepDirty&&Re(n.dirtyFields,P),!z.keepTouched&&Re(n.touchedFields,P),!z.keepIsValidating&&Re(n.validatingFields,P),!t.shouldUnregister&&!z.keepDefaultValue&&Re(i,P);b.state.next({values:je(o)}),b.state.next({...n,...z.keepDirty?{isDirty:re()}:{}}),!z.keepIsValid&&S()},ge=({disabled:E,name:z})=>{if(rn(E)&&s.mount||E||l.disabled.has(z)){const W=l.disabled.has(z)!==!!E;E?l.disabled.add(z):l.disabled.delete(z),W&&s.mount&&!s.action&&S()}},ce=(E,z={})=>{let P=ne(r,E);const K=rn(z.disabled)||rn(t.disabled),W=!l.registerName.has(E)&&P&&!P._f.mount;return ke(r,E,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:E}},name:E,mount:!0,...z}}),l.mount.add(E),P&&!W?ge({disabled:rn(z.disabled)?z.disabled:t.disabled,name:E}):T(E,!0,z.value),{...K?{disabled:z.disabled||t.disabled}:{},...t.progressive?{required:!!z.required,min:$i(z.min),max:$i(z.max),minLength:$i(z.minLength),maxLength:$i(z.maxLength),pattern:$i(z.pattern)}:{},name:E,onChange:_,onBlur:_,ref:q=>{if(q){l.registerName.add(E),ce(E,z),l.registerName.delete(E),P=ne(r,E);const ie=_e(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,fe=uy(ie),be=P._f.refs||[];if(fe?be.find(rt=>rt===ie):ie===P._f.ref)return;ke(r,E,{_f:{...P._f,...fe?{refs:[...be.filter(Al),ie,...Array.isArray(ne(i,E))?[{}]:[]],ref:{type:ie.type,name:E}}:{ref:ie}}}),T(E,!1,void 0,ie)}else P=ne(r,E,{}),P._f&&(P._f.mount=!1),(t.shouldUnregister||z.shouldUnregister)&&!(iy(l.array,E)&&s.action)&&l.unMount.add(E)}}},Te=()=>t.shouldFocusError&&ao(r,G,l.mount),I=E=>{rn(E)&&(b.state.next({disabled:E}),ao(r,(z,P)=>{const K=ne(r,P);K&&(z.disabled=K._f.disabled||E,Array.isArray(K._f.refs)&&K._f.refs.forEach(W=>{W.disabled=K._f.disabled||E}))},0,!1))},te=(E,z)=>async P=>{let K;P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let W=je(o);if(b.state.next({isSubmitting:!0}),t.resolver){const{errors:q,values:ie}=await H();m(),n.errors=q,W=je(ie)}else await V({fields:r,eventType:zr.SUBMIT});if(l.disabled.size)for(const q of l.disabled)Re(W,q);if(Re(n.errors,N0),it(n.errors)){b.state.next({errors:{}});try{await E(W,P)}catch(q){K=q}}else z&&await z({...n.errors},P),Te(),setTimeout(Te);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:it(n.errors)&&!K,submitCount:n.submitCount+1,errors:n.errors}),K)throw K},ue=(E,z={})=>{ne(r,E)&&(_e(z.defaultValue)?X(E,je(ne(i,E))):(X(E,z.defaultValue),ke(i,E,je(z.defaultValue))),z.keepTouched||Re(n.touchedFields,E),z.keepDirty||(Re(n.dirtyFields,E),n.isDirty=z.defaultValue?re(E,je(ne(i,E))):re()),z.keepError||(Re(n.errors,E),v.isValid&&S()),b.state.next({...n}))},ae=(E,z={})=>{const P=E?je(E):i,K=je(P),W=it(E),q=W?i:K;if(z.keepDefaultValues||(i=P),!z.keepValues){if(z.keepDirtyValues){const ie=new Set([...l.mount,...Object.keys(Gi(i,o))]);for(const fe of Array.from(ie)){const be=ne(n.dirtyFields,fe),rt=ne(o,fe),en=ne(q,fe);be&&!_e(rt)?ke(q,fe,rt):!be&&!_e(en)&&X(fe,en)}}else{if(pu&&_e(E))for(const ie of l.mount){const fe=ne(r,ie);if(fe&&fe._f){const be=Array.isArray(fe._f.refs)?fe._f.refs[0]:fe._f.ref;if(ds(be)){const rt=be.closest("form");if(rt){rt.reset();break}}}}if(z.keepFieldsRef)for(const ie of l.mount)X(ie,ne(q,ie));else r={}}o=t.shouldUnregister?z.keepDefaultValues?je(i):{}:je(q),b.array.next({values:{...q}}),b.state.next({values:{...q}})}l={mount:z.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!v.isValid||!!z.keepIsValid||!!z.keepDirtyValues||!t.shouldUnregister&&!it(q),s.watch=!!t.shouldUnregister,s.keepIsValid=!!z.keepIsValid,s.action=!1,z.keepErrors||(n.errors={}),b.state.next({submitCount:z.keepSubmitCount?n.submitCount:0,isDirty:W?!1:z.keepDirty?n.isDirty:!!(z.keepDefaultValues&&!An(E,i)),isSubmitted:z.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:W?{}:z.keepDirtyValues?z.keepDefaultValues&&o?Gi(i,o):n.dirtyFields:z.keepDefaultValues&&E?Gi(i,E):z.keepDirty?n.dirtyFields:{},touchedFields:z.keepTouched?n.touchedFields:{},errors:z.keepErrors?n.errors:{},isSubmitSuccessful:z.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Pe=(E,z)=>ae(Ht(E)?E(o):E,{...t.resetOptions,...z}),dn=(E,z={})=>{const P=ne(r,E),K=P&&P._f;if(K){const W=K.refs?K.refs[0]:K.ref;W.focus&&setTimeout(()=>{W.focus(),z.shouldSelect&&Ht(W.select)&&W.select()})}},Ve=E=>{n={...n,...E}},Sn={control:{register:ce,unregister:he,getFieldState:Q,handleSubmit:te,setError:F,_subscribe:Y,_runSchema:H,_updateIsValidating:m,_focusError:Te,_getWatch:le,_getDirty:re,_setValid:S,_setFieldArray:g,_setDisabledField:ge,_setErrors:N,_getFieldArray:Z,_reset:ae,_resetDefaultValues:()=>Ht(t.defaultValues)&&t.defaultValues().then(E=>{Pe(E,t.resetOptions),b.state.next({isLoading:!1})}),_removeUnmounted:B,_disableForm:I,_subjects:b,_proxyFormState:v,get _fields(){return r},get _formValues(){return o},get _state(){return s},set _state(E){s=E},get _defaultValues(){return i},get _names(){return l},set _names(E){l=E},get _formState(){return n},get _options(){return t},set _options(E){t={...t,...E}}},subscribe:Se,trigger:M,register:ce,handleSubmit:te,watch:pe,setValue:X,getValues:J,reset:Pe,resetField:ue,clearErrors:se,unregister:he,setError:F,setFocus:dn,getFieldState:Q};return{...Sn,formControl:Sn}}function Xt(e={}){const t=de.useRef(void 0),n=de.useRef(void 0),[r,i]=de.useState({isDirty:!1,isValidating:!1,isLoading:Ht(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ht(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Ht(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...l}=Ey(e);t.current={...l,formState:r}}const o=t.current.control;return o._options=e,ly(()=>{const s=o._subscribe({formState:o._proxyFormState,callback:()=>i({...o._formState}),reRenderRoot:!0});return i(l=>({...l,isReady:!0})),o._formState.isReady=!0,s},[o]),de.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),de.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),de.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),de.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),de.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),de.useEffect(()=>{var s;e.values&&!An(e.values,n.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),!((s=o._options.resetOptions)===null||s===void 0)&&s.keepIsValid||o._setValid(),n.current=e.values,i(l=>({...l}))):o._resetDefaultValues()},[o,e.values]),de.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=de.useMemo(()=>sy(r,o),[o,r]),t.current}const ff=(e,t,n)=>{if(e&&"reportValidity"in e){const r=ne(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},F0=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?ff(r.ref,n,e):r.refs&&r.refs.forEach(i=>ff(i,n,e))}},Ny=(e,t)=>{t.shouldUseNativeValidation&&F0(e,t);const n={};for(const r in e){const i=ne(t.fields,r),o=Object.assign(e[r]||{},{ref:i&&i.ref});if(zy(t.names||Object.keys(e),r)){const s=Object.assign({},ne(n,r));ke(s,"root",o),ke(n,r,s)}else ke(n,r,o)}return n},zy=(e,t)=>e.some(n=>n.startsWith(t+"."));function Zt(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(s,l){try{var d=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(p){return o.shouldUseNativeValidation&&F0({},o),{values:n.raw?r:p,errors:{}}}))}catch(p){return l(p)}return d&&d.then?d.then(void 0,l):d}(0,function(s){if(!s.inner)throw s;return{values:{},errors:Ny((l=s,d=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(p,h){if(p[h.path]||(p[h.path]={message:h.message,type:h.type}),d){var v=p[h.path].types,x=v&&v[h.type];p[h.path]=z0(h.path,d,p,h.type,x?[].concat(x,h.message):h.message)}return p},{})),o)};var l,d}))}catch(s){return Promise.reject(s)}}}function Cr(e){this._maxSize=e,this.clear()}Cr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Cr.prototype.get=function(e){return this._values[e]};Cr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Ty=/[^.^\]^[]+|(?=\[\]|\.\.)/g,O0=/^\d+$/,$y=/^\d/,Py=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,_y=/^\s*(['"]?)(.*?)(\1)\s*$/,xu=512,mf=new Cr(xu),hf=new Cr(xu),gf=new Cr(xu),mr={Cache:Cr,split:od,normalizePath:Dl,setter:function(e){var t=Dl(e);return hf.get(e)||hf.set(e,function(r,i){for(var o=0,s=t.length,l=r;o<s-1;){var d=t[o];if(d==="__proto__"||d==="constructor"||d==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Dl(e);return gf.get(e)||gf.set(e,function(i){for(var o=0,s=n.length;o<s;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(vu(n)||O0.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Ay(Array.isArray(e)?e:od(e),t,n)}};function Dl(e){return mf.get(e)||mf.set(e,od(e).map(function(t){return t.replace(_y,"$2")}))}function od(e){return e.match(Ty)||[""]}function Ay(e,t,n){var r=e.length,i,o,s,l;for(o=0;o<r;o++)i=e[o],i&&(Oy(i)&&(i='"'+i+'"'),l=vu(i),s=!l&&/^\d+$/.test(i),t.call(n,i,l,s,o,e))}function vu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function Dy(e){return e.match($y)&&!e.match(O0)}function Fy(e){return Py.test(e)}function Oy(e){return!vu(e)&&(Dy(e)||Fy(e))}const Iy=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ms=e=>e.match(Iy)||[],Vs=e=>e[0].toUpperCase()+e.slice(1),bu=(e,t)=>Ms(e).join(t).toLowerCase(),I0=e=>Ms(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),Ly=e=>Vs(I0(e)),Ry=e=>bu(e,"_"),My=e=>bu(e,"-"),Vy=e=>Vs(bu(e," ")),jy=e=>Ms(e).map(Vs).join(" ");var Fl={words:Ms,upperFirst:Vs,camelCase:I0,pascalCase:Ly,snakeCase:Ry,kebabCase:My,sentenceCase:Vy,titleCase:jy},yu={exports:{}};yu.exports=function(e){return L0(By(e),e)};yu.exports.array=L0;function L0(e,t){var n=e.length,r=new Array(n),i={},o=n,s=Uy(t),l=Hy(e);for(t.forEach(function(p){if(!l.has(p[0])||!l.has(p[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||d(e[o],o,new Set);return r;function d(p,h,v){if(v.has(p)){var x;try{x=", node was:"+JSON.stringify(p)}catch{x=""}throw new Error("Cyclic dependency"+x)}if(!l.has(p))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(p));if(!i[h]){i[h]=!0;var b=s.get(p)||new Set;if(b=Array.from(b),h=b.length){v.add(p);do{var w=b[--h];d(w,l.get(w),v)}while(h);v.delete(p)}r[--n]=p}}}function By(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function Uy(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Hy(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var qy=yu.exports;const Gy=md(qy),Yy=Object.prototype.toString,Wy=Error.prototype.toString,Qy=RegExp.prototype.toString,Ky=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Jy=/^Symbol\((.*)\)(.*)$/;function Xy(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function xf(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return Xy(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return Ky.call(e).replace(Jy,"Symbol($1)");const r=Yy.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+Wy.call(e)+"]":r==="RegExp"?Qy.call(e):null}function Gn(e,t){let n=xf(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=xf(this[r],t);return o!==null?o:i},2)}function R0(e){return e==null?[]:[].concat(e)}let M0,V0,j0,Zy=/\$\{\s*(\w+)\s*\}/g;M0=Symbol.toStringTag;class vf{constructor(t,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[M0]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],R0(t).forEach(o=>{if(at.isError(o)){this.errors.push(...o.errors);const s=o.inner.length?o.inner:[o];this.inner.push(...s)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}V0=Symbol.hasInstance;j0=Symbol.toStringTag;class at extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(Zy,(i,o)=>Gn(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){const s=new vf(t,n,r,i);if(o)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[j0]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,at)}static[V0](t){return vf[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let on={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Gn(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Gn(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Gn(n,!0)}\``+i}},ft={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},zn={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ad={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},sd={isValue:"${path} field must be ${value}"},Oa={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},e2={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},t2={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Gn(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Gn(n,!0)}\``}return at.formatError(on.notType,e)}};Object.assign(Object.create(null),{mixed:on,string:ft,number:zn,date:ad,object:Oa,array:e2,boolean:sd,tuple:t2});const wu=e=>e&&e.__isYupSchema__;class ps{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,s=typeof r=="function"?r:(...l)=>l.every(d=>d===r);return new ps(t,(l,d)=>{var p;let h=s(...l)?i:o;return(p=h==null?void 0:h(d))!=null?p:d})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!wu(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const ta={context:"$",value:"."};function n2(e,t){return new er(e,t)}class er{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ta.context,this.isValue=this.key[0]===ta.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ta.context:this.isValue?ta.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&mr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}er.prototype.__isYupRef=!0;const Gt=e=>e==null;function $r(e){function t({value:n,path:r="",options:i,originalValue:o,schema:s},l,d){const{name:p,test:h,params:v,message:x,skipAbsent:b}=e;let{parent:w,context:k,abortEarly:S=s.spec.abortEarly,disableStackTrace:m=s.spec.disableStackTrace}=i;const f={value:n,parent:w,context:k};function g(A={}){const V=B0(Object.assign({value:n,originalValue:o,label:s.spec.label,path:A.path||r,spec:s.spec,disableStackTrace:A.disableStackTrace||m},v,A.params),f),B=new at(at.formatError(A.message||x,V),n,V.path,A.type||p,V.disableStackTrace);return B.params=V,B}const y=S?l:d;let N={path:r,parent:w,type:p,from:i.from,createError:g,resolve(A){return U0(A,f)},options:i,originalValue:o,schema:s};const T=A=>{at.isError(A)?y(A):A?d(null):y(g())},O=A=>{at.isError(A)?y(A):l(A)};if(b&&Gt(n))return T(!0);let H;try{var j;if(H=h.call(N,n,N),typeof((j=H)==null?void 0:j.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${N.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(H).then(T,O)}}catch(A){O(A);return}T(H)}return t.OPTIONS=e,t}function B0(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=U0(e[n],t);return e}function U0(e,t){return er.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function r2(e,t,n,r=n){let i,o,s;return t?(mr.forEach(t,(l,d,p)=>{let h=d?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let v=e.type==="tuple",x=p?parseInt(h,10):0;if(e.innerType||v){if(v&&!p)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&x>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[x],e=v?e.spec.types[x]:e.innerType}if(!p){if(!e.fields||!e.fields[h])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);i=n,n=n&&n[h],e=e.fields[h]}o=h,s=d?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class fs extends Set{describe(){const t=[];for(const n of this.values())t.push(er.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new fs(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Xr(e,t=new Map){if(wu(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Xr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,Xr(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Xr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=Xr(i,t)}else throw Error(`Unable to clone ${e}`);return n}function i2(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,i=!1;for(let o=0;o<e.length;o++){const s=e[o];if(s==="["&&!i){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!i){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){i=!i;continue}if(s==="."&&!r&&!i){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function o2(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:i2(n)}))}function H0(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return o2(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(i=>H0(i,r))}class Lt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fs,this._blacklist=new fs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(on.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Xr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(s=>{o.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&Gt(o))return o;let s=Gn(t),l=Gn(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(l!==s?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:s=t,strict:l=this.spec.strict}=n,d=t;l||(d=this._cast(d,Object.assign({assert:!1},n)));let p=[];for(let h of Object.values(this.internalTests))h&&p.push(h);this.runTests({path:o,value:d,originalValue:s,options:n,tests:p},r,h=>{if(h.length)return i(h,d);this.runTests({path:o,value:d,originalValue:s,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:s,originalValue:l,path:d,options:p}=t,h=k=>{i||(i=!0,n(k,s))},v=k=>{i||(i=!0,r(k,s))},x=o.length,b=[];if(!x)return v([]);let w={value:s,originalValue:l,path:d,options:p,schema:this};for(let k=0;k<o.length;k++){const S=o[k];S(w,h,function(f){f&&(Array.isArray(f)?b.push(...f):b.push(f)),--x<=0&&v(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:s}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const d=typeof l=="number";let p=r[l];const h=Object.assign({},s,{strict:!0,parent:r,value:p,originalValue:o[l],key:void 0,[d?"index":"key"]:l,path:d||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(v,x,b)=>this.resolve(h)._validate(p,h,x,b)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((s,l)=>i._validate(t,n,(d,p)=>{at.isError(d)&&(d.value=p),l(d)},(d,p)=>{d.length?l(new at(d,p,void 0,void 0,o)):s(p)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(l,d)=>{throw at.isError(l)&&(l.value=d),l},(l,d)=>{if(l.length)throw new at(l,t,void 0,void 0,s);o=d}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(at.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(at.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Xr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=$r({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=$r({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=on.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=on.notNull){return this.nullability(!1,t)}required(t=on.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=on.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=$r(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(o||s.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=R0(t).map(o=>new er(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new ps(i,n):ps.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=$r({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=on.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=$r({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,s=o.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:s}})}}),r}notOneOf(t,n=on.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=$r({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,s=o.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:s}=n.spec;return{meta:i,label:r,optional:o,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((d,p,h)=>h.findIndex(v=>v.OPTIONS.name===d.OPTIONS.name)===p).map(d=>{const p=d.OPTIONS.params&&t?B0(Object.assign({},d.OPTIONS.params),t):d.OPTIONS.params;return{name:d.OPTIONS.name,params:p}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(i){if(i instanceof at)return{issues:H0(i)};throw i}}}}}Lt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Lt.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:s}=r2(this,t,n,r.context);return s[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Lt.prototype[e]=Lt.prototype.oneOf;for(const e of["not","nope"])Lt.prototype[e]=Lt.prototype.notOneOf;function q0(){return new G0}class G0 extends Lt{constructor(){super({type:"boolean",check(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}}),this.withMutation(()=>{this.transform((t,n)=>{if(this.spec.coerce&&!this.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}isTrue(t=sd.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return Gt(n)||n===!0}})}isFalse(t=sd.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return Gt(n)||n===!1}})}default(t){return super.default(t)}defined(t){return super.defined(t)}optional(){return super.optional()}required(t){return super.required(t)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(t){return super.nonNullable(t)}strip(t){return super.strip(t)}}q0.prototype=G0.prototype;const a2=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function s2(e){const t=ld(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function ld(e){var t,n;const r=a2.exec(e);return r?{year:un(r[1]),month:un(r[2],1)-1,day:un(r[3],1),hour:un(r[4]),minute:un(r[5]),second:un(r[6]),millisecond:r[7]?un(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:un(r[10]),minuteOffset:un(r[11])}:null}function un(e,t=0){return Number(e)||t}let l2=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,c2=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,d2=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u2="^\\d{4}-\\d{2}-\\d{2}",p2="\\d{2}:\\d{2}:\\d{2}",f2="(([+-]\\d{2}(:?\\d{2})?)|Z)",m2=new RegExp(`${u2}T${p2}(\\.\\d+)?${f2}$`),h2=e=>Gt(e)||e===e.trim(),g2={}.toString();function oe(){return new Y0}class Y0 extends Lt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===g2?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||on.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=ft.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=ft.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=ft.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||ft.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=ft.email){return this.matches(l2,{name:"email",message:t,excludeEmptyString:!0})}url(t=ft.url){return this.matches(c2,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=ft.uuid){return this.matches(d2,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,i;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=t:n=t),this.matches(m2,{name:"datetime",message:n||ft.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||ft.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:o=>{if(!o||r)return!0;const s=ld(o);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||ft.datetime_precision,params:{precision:i},skipAbsent:!0,test:o=>{if(!o||i==null)return!0;const s=ld(o);return s?s.precision===i:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=ft.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:h2})}lowercase(t=ft.lowercase){return this.transform(n=>Gt(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Gt(n)||n===n.toLowerCase()})}uppercase(t=ft.uppercase){return this.transform(n=>Gt(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Gt(n)||n===n.toUpperCase()})}}oe.prototype=Y0.prototype;let x2=e=>e!=+e;function Kt(){return new W0}class W0 extends Lt{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!x2(t)}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce)return t;let r=t;if(typeof r=="string"){if(r=r.replace(/\s/g,""),r==="")return NaN;r=+r}return this.isType(r)||r===null?r:parseFloat(r)})})}min(t,n=zn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=zn.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=zn.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=zn.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=zn.positive){return this.moreThan(0,t)}negative(t=zn.negative){return this.lessThan(0,t)}integer(t=zn.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>Gt(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>Gt(i)?i:Math[t](i))}}Kt.prototype=W0.prototype;let v2=new Date(""),b2=e=>Object.prototype.toString.call(e)==="[object Date]";class js extends Lt{constructor(){super({type:"date",check(t){return b2(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=s2(t),isNaN(t)?js.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(er.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=ad.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=ad.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}js.INVALID_DATE=v2;js.prototype;function y2(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([s,l])=>`${s}-${l}`));function o(s,l){let d=mr.split(s)[0];r.add(d),i.has(`${l}-${d}`)||n.push([l,d])}for(const s of Object.keys(e)){let l=e[s];r.add(s),er.isRef(l)&&l.isSibling?o(l.path,s):wu(l)&&"deps"in l&&l.deps.forEach(d=>o(d,s))}return Gy.array(Array.from(r),n).reverse()}function bf(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Q0(e){return(t,n)=>bf(e,t)-bf(e,n)}const w2=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ia(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ia(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ia(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ia)}):"optional"in e?e.optional():e}const k2=(e,t)=>{const n=[...mr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=mr.getter(mr.join(n),!0)(e);return!!(i&&r in i)};let yf=e=>Object.prototype.toString.call(e)==="[object Object]";function wf(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const S2=Q0([]);function Rt(e){return new K0(e)}class K0 extends Lt{constructor(t){super({type:"object",check(n){return yf(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=S2,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(v=>!this._nodes.includes(v))),d={},p=Object.assign({},n,{parent:d,__validating:n.__validating||!1}),h=!1;for(const v of l){let x=o[v],b=v in i,w=i[v];if(x){let k;p.path=(n.path?`${n.path}.`:"")+v,x=x.resolve({value:w,context:n.context,parent:d});let S=x instanceof Lt?x.spec:void 0,m=S==null?void 0:S.strict;if(S!=null&&S.strip){h=h||v in i;continue}k=!n.__validating||!m?x.cast(w,p):w,k!==void 0&&(d[v]=k)}else b&&!s&&(d[v]=w);(b!==v in d||d[v]!==w)&&(h=!0)}return h?d:i}_validate(t,n={},r,i){let{from:o=[],originalValue:s=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:s},...o],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(d,p)=>{if(!l||!yf(p)){i(d,p);return}s=s||p;let h=[];for(let v of this._nodes){let x=this.fields[v];!x||er.isRef(x)||h.push(x.asNestedTest({options:n,key:v,parent:p,parentPath:n.path,originalParent:s}))}this.runTests({tests:h,value:p,originalValue:s,options:n},r,v=>{i(v.sort(this._sortErrors).concat(d),p)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const s=r[i];r[i]=s===void 0?o:s}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=y2(t,n),r._sortErrors=Q0(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ia(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=mr.getter(t,!0);return this.transform(o=>{if(!o)return o;let s=o;return k2(o,t)&&(s=Object.assign({},o),r||delete s[t],s[n]=i(o)),s})}json(){return this.transform(w2)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||Oa.exact,test(n){if(n==null)return!0;const r=wf(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=Oa.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=wf(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Oa.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Fl.camelCase)}snakeCase(){return this.transformKeys(Fl.snakeCase)}constantCase(){return this.transformKeys(t=>Fl.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,s]of Object.entries(n.fields)){var i;let l=t;(i=l)!=null&&i.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[o]})),r.fields[o]=s.describe(l)}return r}}Rt.prototype=K0.prototype;var J0={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,ku=Qe?Symbol.for("react.element"):60103,Su=Qe?Symbol.for("react.portal"):60106,Bs=Qe?Symbol.for("react.fragment"):60107,Us=Qe?Symbol.for("react.strict_mode"):60108,Hs=Qe?Symbol.for("react.profiler"):60114,qs=Qe?Symbol.for("react.provider"):60109,Gs=Qe?Symbol.for("react.context"):60110,Cu=Qe?Symbol.for("react.async_mode"):60111,Ys=Qe?Symbol.for("react.concurrent_mode"):60111,Ws=Qe?Symbol.for("react.forward_ref"):60112,Qs=Qe?Symbol.for("react.suspense"):60113,C2=Qe?Symbol.for("react.suspense_list"):60120,Ks=Qe?Symbol.for("react.memo"):60115,Js=Qe?Symbol.for("react.lazy"):60116,E2=Qe?Symbol.for("react.block"):60121,N2=Qe?Symbol.for("react.fundamental"):60117,z2=Qe?Symbol.for("react.responder"):60118,T2=Qe?Symbol.for("react.scope"):60119;function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ku:switch(e=e.type,e){case Cu:case Ys:case Bs:case Hs:case Us:case Qs:return e;default:switch(e=e&&e.$$typeof,e){case Gs:case Ws:case Js:case Ks:case qs:return e;default:return t}}case Su:return t}}}function X0(e){return $t(e)===Ys}we.AsyncMode=Cu;we.ConcurrentMode=Ys;we.ContextConsumer=Gs;we.ContextProvider=qs;we.Element=ku;we.ForwardRef=Ws;we.Fragment=Bs;we.Lazy=Js;we.Memo=Ks;we.Portal=Su;we.Profiler=Hs;we.StrictMode=Us;we.Suspense=Qs;we.isAsyncMode=function(e){return X0(e)||$t(e)===Cu};we.isConcurrentMode=X0;we.isContextConsumer=function(e){return $t(e)===Gs};we.isContextProvider=function(e){return $t(e)===qs};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ku};we.isForwardRef=function(e){return $t(e)===Ws};we.isFragment=function(e){return $t(e)===Bs};we.isLazy=function(e){return $t(e)===Js};we.isMemo=function(e){return $t(e)===Ks};we.isPortal=function(e){return $t(e)===Su};we.isProfiler=function(e){return $t(e)===Hs};we.isStrictMode=function(e){return $t(e)===Us};we.isSuspense=function(e){return $t(e)===Qs};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bs||e===Ys||e===Hs||e===Us||e===Qs||e===C2||typeof e=="object"&&e!==null&&(e.$$typeof===Js||e.$$typeof===Ks||e.$$typeof===qs||e.$$typeof===Gs||e.$$typeof===Ws||e.$$typeof===N2||e.$$typeof===z2||e.$$typeof===T2||e.$$typeof===E2)};we.typeOf=$t;J0.exports=we;var Eu=J0.exports;function $2(e){function t(M,J,Q,se,F){for(var pe=0,Y=0,Se=0,he=0,ge,ce,Te=0,I=0,te,ue=te=ge=0,ae=0,Pe=0,dn=0,Ve=0,yi=Q.length,Sn=yi-1,E,z="",P="",K="",W="",q;ae<yi;){if(ce=Q.charCodeAt(ae),ae===Sn&&Y+he+Se+pe!==0&&(Y!==0&&(ce=Y===47?10:47),he=Se=pe=0,yi++,Sn++),Y+he+Se+pe===0){if(ae===Sn&&(0<Pe&&(z=z.replace(x,"")),0<z.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:z+=Q.charAt(ae)}ce=59}switch(ce){case 123:for(z=z.trim(),ge=z.charCodeAt(0),te=1,Ve=++ae;ae<yi;){switch(ce=Q.charCodeAt(ae)){case 123:te++;break;case 125:te--;break;case 47:switch(ce=Q.charCodeAt(ae+1)){case 42:case 47:e:{for(ue=ae+1;ue<Sn;++ue)switch(Q.charCodeAt(ue)){case 47:if(ce===42&&Q.charCodeAt(ue-1)===42&&ae+2!==ue){ae=ue+1;break e}break;case 10:if(ce===47){ae=ue+1;break e}}ae=ue}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;ae++<Sn&&Q.charCodeAt(ae)!==ce;);}if(te===0)break;ae++}switch(te=Q.substring(Ve,ae),ge===0&&(ge=(z=z.replace(v,"").trim()).charCodeAt(0)),ge){case 64:switch(0<Pe&&(z=z.replace(x,"")),ce=z.charCodeAt(1),ce){case 100:case 109:case 115:case 45:Pe=J;break;default:Pe=Z}if(te=t(J,Pe,te,ce,F+1),Ve=te.length,0<R&&(Pe=n(Z,z,dn),q=l(3,te,Pe,J,B,V,Ve,ce,F,se),z=Pe.join(""),q!==void 0&&(Ve=(te=q.trim()).length)===0&&(ce=0,te="")),0<Ve)switch(ce){case 115:z=z.replace(T,s);case 100:case 109:case 45:te=z+"{"+te+"}";break;case 107:z=z.replace(f,"$1 $2"),te=z+"{"+te+"}",te=le===1||le===2&&o("@"+te,3)?"@-webkit-"+te+"@"+te:"@"+te;break;default:te=z+te,se===112&&(te=(P+=te,""))}else te="";break;default:te=t(J,n(J,z,dn),te,se,F+1)}K+=te,te=dn=Pe=ue=ge=0,z="",ce=Q.charCodeAt(++ae);break;case 125:case 59:if(z=(0<Pe?z.replace(x,""):z).trim(),1<(Ve=z.length))switch(ue===0&&(ge=z.charCodeAt(0),ge===45||96<ge&&123>ge)&&(Ve=(z=z.replace(" ",":")).length),0<R&&(q=l(1,z,J,M,B,V,P.length,se,F,se))!==void 0&&(Ve=(z=q.trim()).length)===0&&(z="\0\0"),ge=z.charCodeAt(0),ce=z.charCodeAt(1),ge){case 0:break;case 64:if(ce===105||ce===99){W+=z+Q.charAt(ae);break}default:z.charCodeAt(Ve-1)!==58&&(P+=i(z,ge,ce,z.charCodeAt(2)))}dn=Pe=ue=ge=0,z="",ce=Q.charCodeAt(++ae)}}switch(ce){case 13:case 10:Y===47?Y=0:1+ge===0&&se!==107&&0<z.length&&(Pe=1,z+="\0"),0<R*_&&l(0,z,J,M,B,V,P.length,se,F,se),V=1,B++;break;case 59:case 125:if(Y+he+Se+pe===0){V++;break}default:switch(V++,E=Q.charAt(ae),ce){case 9:case 32:if(he+pe+Y===0)switch(Te){case 44:case 58:case 9:case 32:E="";break;default:ce!==32&&(E=" ")}break;case 0:E="\\0";break;case 12:E="\\f";break;case 11:E="\\v";break;case 38:he+Y+pe===0&&(Pe=dn=1,E="\f"+E);break;case 108:if(he+Y+pe+re===0&&0<ue)switch(ae-ue){case 2:Te===112&&Q.charCodeAt(ae-3)===58&&(re=Te);case 8:I===111&&(re=I)}break;case 58:he+Y+pe===0&&(ue=ae);break;case 44:Y+Se+he+pe===0&&(Pe=1,E+="\r");break;case 34:case 39:Y===0&&(he=he===ce?0:he===0?ce:he);break;case 91:he+Y+Se===0&&pe++;break;case 93:he+Y+Se===0&&pe--;break;case 41:he+Y+pe===0&&Se--;break;case 40:if(he+Y+pe===0){if(ge===0)switch(2*Te+3*I){case 533:break;default:ge=1}Se++}break;case 64:Y+Se+he+pe+ue+te===0&&(te=1);break;case 42:case 47:if(!(0<he+pe+Se))switch(Y){case 0:switch(2*ce+3*Q.charCodeAt(ae+1)){case 235:Y=47;break;case 220:Ve=ae,Y=42}break;case 42:ce===47&&Te===42&&Ve+2!==ae&&(Q.charCodeAt(Ve+2)===33&&(P+=Q.substring(Ve,ae+1)),E="",Y=0)}}Y===0&&(z+=E)}I=Te,Te=ce,ae++}if(Ve=P.length,0<Ve){if(Pe=J,0<R&&(q=l(2,P,Pe,M,B,V,Ve,se,F,se),q!==void 0&&(P=q).length===0))return W+P+K;if(P=Pe.join(",")+"{"+P+"}",le*re!==0){switch(le!==2||o(P,2)||(re=0),re){case 111:P=P.replace(y,":-moz-$1")+P;break;case 112:P=P.replace(g,"::-webkit-input-$1")+P.replace(g,"::-moz-$1")+P.replace(g,":-ms-input-$1")+P}re=0}}return W+P+K}function n(M,J,Q){var se=J.trim().split(S);J=se;var F=se.length,pe=M.length;switch(pe){case 0:case 1:var Y=0;for(M=pe===0?"":M[0]+" ";Y<F;++Y)J[Y]=r(M,J[Y],Q).trim();break;default:var Se=Y=0;for(J=[];Y<F;++Y)for(var he=0;he<pe;++he)J[Se++]=r(M[he]+" ",se[Y],Q).trim()}return J}function r(M,J,Q){var se=J.charCodeAt(0);switch(33>se&&(se=(J=J.trim()).charCodeAt(0)),se){case 38:return J.replace(m,"$1"+M.trim());case 58:return M.trim()+J.replace(m,"$1"+M.trim());default:if(0<1*Q&&0<J.indexOf("\f"))return J.replace(m,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+J}function i(M,J,Q,se){var F=M+";",pe=2*J+3*Q+4*se;if(pe===944){M=F.indexOf(":",9)+1;var Y=F.substring(M,F.length-1).trim();return Y=F.substring(0,M).trim()+Y+";",le===1||le===2&&o(Y,1)?"-webkit-"+Y+Y:Y}if(le===0||le===2&&!o(F,1))return F;switch(pe){case 1015:return F.charCodeAt(10)===97?"-webkit-"+F+F:F;case 951:return F.charCodeAt(3)===116?"-webkit-"+F+F:F;case 963:return F.charCodeAt(5)===110?"-webkit-"+F+F:F;case 1009:if(F.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+F+F;case 978:return"-webkit-"+F+"-moz-"+F+F;case 1019:case 983:return"-webkit-"+F+"-moz-"+F+"-ms-"+F+F;case 883:if(F.charCodeAt(8)===45)return"-webkit-"+F+F;if(0<F.indexOf("image-set(",11))return F.replace(A,"$1-webkit-$2")+F;break;case 932:if(F.charCodeAt(4)===45)switch(F.charCodeAt(5)){case 103:return"-webkit-box-"+F.replace("-grow","")+"-webkit-"+F+"-ms-"+F.replace("grow","positive")+F;case 115:return"-webkit-"+F+"-ms-"+F.replace("shrink","negative")+F;case 98:return"-webkit-"+F+"-ms-"+F.replace("basis","preferred-size")+F}return"-webkit-"+F+"-ms-"+F+F;case 964:return"-webkit-"+F+"-ms-flex-"+F+F;case 1023:if(F.charCodeAt(8)!==99)break;return Y=F.substring(F.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+F+"-ms-flex-pack"+Y+F;case 1005:return w.test(F)?F.replace(b,":-webkit-")+F.replace(b,":-moz-")+F:F;case 1e3:switch(Y=F.substring(13).trim(),J=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(J)){case 226:Y=F.replace(N,"tb");break;case 232:Y=F.replace(N,"tb-rl");break;case 220:Y=F.replace(N,"lr");break;default:return F}return"-webkit-"+F+"-ms-"+Y+F;case 1017:if(F.indexOf("sticky",9)===-1)break;case 975:switch(J=(F=M).length-10,Y=(F.charCodeAt(J)===33?F.substring(0,J):F).substring(M.indexOf(":",7)+1).trim(),pe=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:F=F.replace(Y,"-webkit-"+Y)+";"+F;break;case 207:case 102:F=F.replace(Y,"-webkit-"+(102<pe?"inline-":"")+"box")+";"+F.replace(Y,"-webkit-"+Y)+";"+F.replace(Y,"-ms-"+Y+"box")+";"+F}return F+";";case 938:if(F.charCodeAt(5)===45)switch(F.charCodeAt(6)){case 105:return Y=F.replace("-items",""),"-webkit-"+F+"-webkit-box-"+Y+"-ms-flex-"+Y+F;case 115:return"-webkit-"+F+"-ms-flex-item-"+F.replace($,"")+F;default:return"-webkit-"+F+"-ms-flex-line-pack"+F.replace("align-content","").replace($,"")+F}break;case 973:case 989:if(F.charCodeAt(3)!==45||F.charCodeAt(4)===122)break;case 931:case 953:if(j.test(M)===!0)return(Y=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),J,Q,se).replace(":fill-available",":stretch"):F.replace(Y,"-webkit-"+Y)+F.replace(Y,"-moz-"+Y.replace("fill-",""))+F;break;case 962:if(F="-webkit-"+F+(F.charCodeAt(5)===102?"-ms-"+F:"")+F,Q+se===211&&F.charCodeAt(13)===105&&0<F.indexOf("transform",10))return F.substring(0,F.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+F}return F}function o(M,J){var Q=M.indexOf(J===1?":":"{"),se=M.substring(0,J!==3?Q:10);return Q=M.substring(Q+1,M.length-1),X(J!==2?se:se.replace(H,"$1"),Q,J)}function s(M,J){var Q=i(J,J.charCodeAt(0),J.charCodeAt(1),J.charCodeAt(2));return Q!==J+";"?Q.replace(O," or ($1)").substring(4):"("+J+")"}function l(M,J,Q,se,F,pe,Y,Se,he,ge){for(var ce=0,Te=J,I;ce<R;++ce)switch(I=L[ce].call(h,M,Te,Q,se,F,pe,Y,Se,he,ge)){case void 0:case!1:case!0:case null:break;default:Te=I}if(Te!==J)return Te}function d(M){switch(M){case void 0:case null:R=L.length=0;break;default:if(typeof M=="function")L[R++]=M;else if(typeof M=="object")for(var J=0,Q=M.length;J<Q;++J)d(M[J]);else _=!!M|0}return d}function p(M){return M=M.prefix,M!==void 0&&(X=null,M?typeof M!="function"?le=1:(le=2,X=M):le=0),p}function h(M,J){var Q=M;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),G=Q,Q=[G],0<R){var se=l(-1,J,Q,Q,B,V,0,0,0,0);se!==void 0&&typeof se=="string"&&(J=se)}var F=t(Z,Q,J,0,0);return 0<R&&(se=l(-2,F,Q,Q,B,V,F.length,0,0,0),se!==void 0&&(F=se)),G="",re=0,V=B=1,F}var v=/^\0+/g,x=/[\0\r\f]/g,b=/: */g,w=/zoo|gra/,k=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,y=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,$=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,V=1,B=1,re=0,le=1,Z=[],L=[],R=0,X=null,_=0,G="";return h.use=d,h.set=p,e!==void 0&&p(e),h}var P2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var A2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kf=_2(function(e){return A2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Nu=Eu,D2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Z0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zu={};zu[Nu.ForwardRef]=O2;zu[Nu.Memo]=Z0;function Sf(e){return Nu.isMemo(e)?Z0:zu[e.$$typeof]||D2}var I2=Object.defineProperty,L2=Object.getOwnPropertyNames,Cf=Object.getOwnPropertySymbols,R2=Object.getOwnPropertyDescriptor,M2=Object.getPrototypeOf,Ef=Object.prototype;function ex(e,t,n){if(typeof t!="string"){if(Ef){var r=M2(t);r&&r!==Ef&&ex(e,r,n)}var i=L2(t);Cf&&(i=i.concat(Cf(t)));for(var o=Sf(e),s=Sf(t),l=0;l<i.length;++l){var d=i[l];if(!F2[d]&&!(n&&n[d])&&!(s&&s[d])&&!(o&&o[d])){var p=R2(t,d);try{I2(e,d,p)}catch{}}}}return e}var V2=ex;const j2=md(V2);function gn(){return(gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Nf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},cd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Eu.typeOf(e)},ms=Object.freeze([]),Yn=Object.freeze({});function To(e){return typeof e=="function"}function zf(e){return e.displayName||e.name||"Component"}function Tu(e){return e&&typeof e.styledComponentId=="string"}var fi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$u=typeof window<"u"&&"HTMLElement"in window,B2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Oo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var U2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Oo(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var l=o;l<s;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(n+1),p=0,h=r.length;p<h;p++)this.tag.insertRule(d,r[p])&&(this.groupSizes[n]++,d++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,l=o;l<s;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),La=new Map,hs=new Map,so=1,na=function(e){if(La.has(e))return La.get(e);for(;hs.has(so);)so++;var t=so++;return La.set(e,t),hs.set(t,e),t},H2=function(e){return hs.get(e)},q2=function(e,t){t>=so&&(so=t+1),La.set(e,t),hs.set(t,e)},G2="style["+fi+'][data-styled-version="5.3.11"]',Y2=new RegExp("^"+fi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),W2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Q2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var l=s.match(Y2);if(l){var d=0|parseInt(l[1],10),p=l[2];d!==0&&(q2(p,d),W2(e,p,l[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(s)}}},K2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},tx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var d=l.childNodes,p=d.length;p>=0;p--){var h=d[p];if(h&&h.nodeType===1&&h.hasAttribute(fi))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(fi,"active"),r.setAttribute("data-styled-version","5.3.11");var s=K2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},J2=function(){function e(n){var r=this.element=tx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,l=o.length;s<l;s++){var d=o[s];if(d.ownerNode===i)return d}Oo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),X2=function(){function e(n){var r=this.element=tx(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Z2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Tf=$u,ew={isServer:!$u,useCSSOMInjection:!B2},nx=function(){function e(n,r,i){n===void 0&&(n=Yn),r===void 0&&(r={}),this.options=gn({},ew,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$u&&Tf&&(Tf=!1,function(o){for(var s=document.querySelectorAll(G2),l=0,d=s.length;l<d;l++){var p=s[l];p&&p.getAttribute(fi)!=="active"&&(Q2(o,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(n){return na(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new Z2(s):o?new J2(s):new X2(s),new U2(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(na(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(na(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(na(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var l=H2(s);if(l!==void 0){var d=n.names.get(l),p=r.getGroup(s);if(d&&p&&d.size){var h=fi+".g"+s+'[id="'+l+'"]',v="";d!==void 0&&d.forEach(function(x){x.length>0&&(v+=x+",")}),o+=""+p+h+'{content:"'+v+`"}/*!sc*/
`}}}return o}(this)},e}(),tw=/(a)(d)/gi,$f=function(e){return String.fromCharCode(e+(e>25?39:97))};function dd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$f(t%52)+n;return($f(t%52)+n).replace(tw,"$1-$2")}var Zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rx=function(e){return Zr(5381,e)};function nw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(To(n)&&!Tu(n))return!1}return!0}var rw=rx("5.3.11"),iw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nw(t),this.componentId=n,this.baseHash=Zr(rw,n),this.baseStyle=r,nx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=mi(this.rules,t,n,r).join(""),l=dd(Zr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,l)){var d=r(s,"."+l,void 0,i);n.insertRules(i,l,d)}o.push(l),this.staticRulesId=l}else{for(var p=this.rules.length,h=Zr(this.baseHash,r.hash),v="",x=0;x<p;x++){var b=this.rules[x];if(typeof b=="string")v+=b;else if(b){var w=mi(b,t,n,r),k=Array.isArray(w)?w.join(""):w;h=Zr(h,k+x),v+=k}}if(v){var S=dd(h>>>0);if(!n.hasNameForId(i,S)){var m=r(v,"."+S,void 0,i);n.insertRules(i,S,m)}o.push(S)}}return o.join(" ")},e}(),ow=/^\s*\/\/.*$/gm,aw=[":","[",".","#"];function sw(e){var t,n,r,i,o=e===void 0?Yn:e,s=o.options,l=s===void 0?Yn:s,d=o.plugins,p=d===void 0?ms:d,h=new $2(l),v=[],x=function(k){function S(m){if(m)try{k(m+"}")}catch{}}return function(m,f,g,y,N,T,O,$,H,j){switch(m){case 1:if(H===0&&f.charCodeAt(0)===64)return k(f+";"),"";break;case 2:if($===0)return f+"/*|*/";break;case 3:switch($){case 102:case 112:return k(g[0]+f),"";default:return f+(j===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(k){v.push(k)}),b=function(k,S,m){return S===0&&aw.indexOf(m[n.length])!==-1||m.match(i)?k:"."+t};function w(k,S,m,f){f===void 0&&(f="&");var g=k.replace(ow,""),y=S&&m?m+" "+S+" { "+g+" }":g;return t=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(m||!S?"":S,y)}return h.use([].concat(p,[function(k,S,m){k===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,b))},x,function(k){if(k===-2){var S=v;return v=[],S}}])),w.hash=p.length?p.reduce(function(k,S){return S.name||Oo(15),Zr(k,S.name)},5381).toString():"",w}var ix=de.createContext();ix.Consumer;var ox=de.createContext(),lw=(ox.Consumer,new nx),ud=sw();function cw(){return C.useContext(ix)||lw}function dw(){return C.useContext(ox)||ud}var ax=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ud);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Oo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ud),this.name+t.hash},e}(),uw=/([A-Z])/,pw=/([A-Z])/g,fw=/^ms-/,mw=function(e){return"-"+e.toLowerCase()};function Pf(e){return uw.test(e)?e.replace(pw,mw).replace(fw,"-ms-"):e}var _f=function(e){return e==null||e===!1||e===""};function mi(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,l=e.length;s<l;s+=1)(i=mi(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(_f(e))return"";if(Tu(e))return"."+e.styledComponentId;if(To(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!t)return e;var d=e(t);return mi(d,t,n,r)}var p;return e instanceof ax?n?(e.inject(n,r),e.getName(r)):e:cd(e)?function h(v,x){var b,w,k=[];for(var S in v)v.hasOwnProperty(S)&&!_f(v[S])&&(Array.isArray(v[S])&&v[S].isCss||To(v[S])?k.push(Pf(S)+":",v[S],";"):cd(v[S])?k.push.apply(k,h(v[S],S)):k.push(Pf(S)+": "+(b=S,(w=v[S])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||b in P2||b.startsWith("--")?String(w).trim():w+"px")+";"));return x?[x+" {"].concat(k,["}"]):k}(e):e.toString()}var Af=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function sx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return To(e)||cd(e)?Af(mi(Nf(ms,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Af(mi(Nf(e,n)))}var hw=function(e,t,n){return n===void 0&&(n=Yn),e.theme!==n.theme&&e.theme||t||n.theme},gw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xw=/(^-|-$)/g;function Ol(e){return e.replace(gw,"-").replace(xw,"")}var lx=function(e){return dd(rx(e)>>>0)};function ra(e){return typeof e=="string"&&!0}var pd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},vw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bw(e,t,n){var r=e[n];pd(t)&&pd(r)?cx(r,t):e[n]=t}function cx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(pd(s))for(var l in s)vw(l)&&bw(e,s[l],l)}return e}var dx=de.createContext();dx.Consumer;var Il={};function ux(e,t,n){var r=Tu(e),i=!ra(e),o=t.attrs,s=o===void 0?ms:o,l=t.componentId,d=l===void 0?function(f,g){var y=typeof f!="string"?"sc":Ol(f);Il[y]=(Il[y]||0)+1;var N=y+"-"+lx("5.3.11"+y+Il[y]);return g?g+"-"+N:N}(t.displayName,t.parentComponentId):l,p=t.displayName,h=p===void 0?function(f){return ra(f)?"styled."+f:"Styled("+zf(f)+")"}(e):p,v=t.displayName&&t.componentId?Ol(t.displayName)+"-"+t.componentId:t.componentId||d,x=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,b=t.shouldForwardProp;r&&e.shouldForwardProp&&(b=t.shouldForwardProp?function(f,g,y){return e.shouldForwardProp(f,g,y)&&t.shouldForwardProp(f,g,y)}:e.shouldForwardProp);var w,k=new iw(n,v,r?e.componentStyle:void 0),S=k.isStatic&&s.length===0,m=function(f,g){return function(y,N,T,O){var $=y.attrs,H=y.componentStyle,j=y.defaultProps,A=y.foldedComponentIds,V=y.shouldForwardProp,B=y.styledComponentId,re=y.target,le=function(se,F,pe){se===void 0&&(se=Yn);var Y=gn({},F,{theme:se}),Se={};return pe.forEach(function(he){var ge,ce,Te,I=he;for(ge in To(I)&&(I=I(Y)),I)Y[ge]=Se[ge]=ge==="className"?(ce=Se[ge],Te=I[ge],ce&&Te?ce+" "+Te:ce||Te):I[ge]}),[Y,Se]}(hw(N,C.useContext(dx),j)||Yn,N,$),Z=le[0],L=le[1],R=function(se,F,pe,Y){var Se=cw(),he=dw(),ge=F?se.generateAndInjectStyles(Yn,Se,he):se.generateAndInjectStyles(pe,Se,he);return ge}(H,O,Z),X=T,_=L.$as||N.$as||L.as||N.as||re,G=ra(_),M=L!==N?gn({},N,{},L):N,J={};for(var Q in M)Q[0]!=="$"&&Q!=="as"&&(Q==="forwardedAs"?J.as=M[Q]:(V?V(Q,kf,_):!G||kf(Q))&&(J[Q]=M[Q]));return N.style&&L.style!==N.style&&(J.style=gn({},N.style,{},L.style)),J.className=Array.prototype.concat(A,B,R!==B?R:null,N.className,L.className).filter(Boolean).join(" "),J.ref=X,C.createElement(_,J)}(w,f,g,S)};return m.displayName=h,(w=de.forwardRef(m)).attrs=x,w.componentStyle=k,w.displayName=h,w.shouldForwardProp=b,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ms,w.styledComponentId=v,w.target=r?e.target:e,w.withComponent=function(f){var g=t.componentId,y=function(T,O){if(T==null)return{};var $,H,j={},A=Object.keys(T);for(H=0;H<A.length;H++)$=A[H],O.indexOf($)>=0||(j[$]=T[$]);return j}(t,["componentId"]),N=g&&g+"-"+(ra(f)?f:Ol(zf(f)));return ux(f,gn({},y,{attrs:x,componentId:N}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?cx({},e.defaultProps,f):f}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&j2(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var fd=function(e){return function t(n,r,i){if(i===void 0&&(i=Yn),!Eu.isValidElementType(r))return Oo(1,String(r));var o=function(){return n(r,i,sx.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,gn({},i,{},s))},o.attrs=function(s){return t(n,r,gn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(ux,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fd[e]=fd(e)});function Er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=sx.apply(void 0,[e].concat(n)).join(""),o=lx(i);return new ax(o,i)}const u=fd,yw=Rt({username:oe().required("El usuario es requerido"),password:oe().min(6,"La contraseña debe tener al menos 6 caracteres").required("La contraseña es requerida")}),ww=u.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`,kw=u.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    margin: 20px;
    padding: 30px 20px;
  }
`,Sw=u.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`,Cw=u.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Df=u.div`
  position: relative;
`,Ff=u.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #999;
  }
`,Ew=u.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`,Nw=u.div`
  text-align: center;
  margin-top: 20px;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
`,zw=u.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 16px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 1000;

  &.visible {
    transform: translateY(0);
  }

  button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    margin-left: 12px;
    cursor: pointer;
  }
`,Tw=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),i=Zn(),{register:o,handleSubmit:s,formState:{errors:l}}=Xt({resolver:Zt(yw)}),d=async h=>{t(!0);try{await new Promise(v=>setTimeout(v,1500)),localStorage.setItem("token","fake-jwt-token"),localStorage.setItem("user",JSON.stringify({username:h.username,role:"admin"})),D.success("¡Bienvenido a TurnoFlow!"),i("/dashboard")}catch{D.error("Error al iniciar sesión. Verifica tus credenciales.")}finally{t(!1)}};C.useState(()=>{"serviceWorker"in navigator&&window.matchMedia("(display-mode: standalone)").matches===!1&&setTimeout(()=>r(!0),3e3)});const p=()=>{r(!1),D.info("Instalación iniciada")};return c(Yt,{children:[a(ww,{children:c(kw,{children:[c(Sw,{children:[a("h1",{children:"TurnoFlow"}),a("p",{children:"Sistema de Apartado de Turnos"})]}),c(Cw,{onSubmit:s(d),children:[c(Df,{children:[a(Ff,{type:"text",placeholder:"Usuario",...o("username"),disabled:e}),l.username&&a("span",{style:{color:"red",fontSize:"12px"},children:l.username.message})]}),c(Df,{children:[a(Ff,{type:"password",placeholder:"Contraseña",...o("password"),disabled:e}),l.password&&a("span",{style:{color:"red",fontSize:"12px"},children:l.password.message})]}),a(Ew,{type:"submit",disabled:e,children:e?"Iniciando sesión...":"Iniciar Sesión"})]}),a(Nw,{children:a("a",{href:"#forgot",children:"¿Olvidaste tu contraseña?"})})]})}),c(zw,{className:n?"visible":"",children:[a("span",{children:"Instala TurnoFlow en tu dispositivo para una mejor experiencia"}),a("button",{onClick:p,children:"Instalar"})]})]})},$w=u.div`
  position: fixed;
  top: 0;
  left: ${e=>e.collapsed?"-280px":"0"};
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--primary-color) 100%);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    transform: ${e=>e.collapsed?"translateX(-100%)":"translateX(0)"};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,Pw=u.div`
  padding: 24px 20px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`,_w=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #1e3a8a;
    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
  }

  .logo-text {
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`,Aw=u.div`
  .user-name {
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin-bottom: 2px;
  }

  .user-role {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 10px;
    display: inline-block;
  }
`,Dw=u.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  padding: 4px 10px;
  border-radius: 12px;
  margin-top: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.9);
`,Fw=u.div`
  padding: 16px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Ow=u.div`
  margin-top: auto;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Iw=u.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  width: calc(100% - 40px);
  margin: 0 20px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #fee2e2;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  .logout-icon {
    margin-right: 10px;
    font-size: 16px;
  }

  .logout-text {
    flex: 1;
    text-align: left;
  }
`,Lw=u.div`
  margin-bottom: 8px;
`,Rw=u.div`
  padding: 8px 20px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Of=u.div`
  position: relative;

  .menu-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: ${e=>e.active?"#fbbf24":"rgba(255, 255, 255, 0.8)"};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-weight: ${e=>e.active?"600":"500"};

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      padding-left: 24px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: ${e=>e.active?"4px":"0"};
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      transition: width 0.3s ease;
      border-radius: 0 4px 4px 0;
    }

    &:hover::before {
      width: 4px;
    }
  }

  .menu-icon {
    width: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .menu-text {
    flex: 1;
    font-size: 14px;
  }

  .expand-icon {
    font-size: 12px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${e=>e.expanded?"rotate(180deg)":"rotate(0deg)"};
  }
`,Mw=u.div`
  overflow: hidden;
  max-height: ${e=>e.expanded?"500px":"0"};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.05);
`,Vw=u.div`
  .submenu-link {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 52px;
    color: ${e=>e.active?"#fbbf24":"rgba(255, 255, 255, 0.7)"};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 13px;
    font-weight: ${e=>e.active?"600":"400"};
    border-left: 2px solid transparent;
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: white;
      padding-left: 56px;
      border-left-color: rgba(251, 191, 36, 0.5);
    }

    &::before {
      content: '';
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${e=>e.active?"#fbbf24":"rgba(255, 255, 255, 0.5)"};
    }
  }
`,jw=u.button`
  position: fixed;
  top: 16px;
  left: ${e=>e.collapsed?"16px":"284px"};
  width: 40px;
  height: 40px;
  background: #1e3a8a;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #3b82f6;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: ${e=>e.collapsed?"flex":"none"};
  }
`,Bw=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${e=>e.show?"block":"none"};

  @media (min-width: 769px) {
    display: none;
  }
`,Uw=u.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  max-width: 400px;
  width: 90%;
  text-align: center;
  animation: modalFadeIn 0.3s ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .modal-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .modal-title {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .modal-message {
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.5;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: center;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .modal-button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.cancel {
      background: #6c757d;
      color: white;

      &:hover {
        background: #5a6268;
        transform: translateY(-1px);
      }
    }

    &.confirm {
      background: #dc3545;
      color: white;

      &:hover {
        background: #c82333;
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
      }
    }
  }
`,Hw=({collapsed:e,onToggle:t})=>{const n=Os(),r=Zn(),{businessType:i,getBusinessComponents:o,componentList:s}=cn(),[l,d]=C.useState({gestion:!1,operaciones:!1,reportes:!1,configuracion:!1}),[p,h]=C.useState(!1),v=o(i),b=(T=>{const O={principal:[],gestion:[],operaciones:[],marketing:[],reportes:[],configuracion:[]};return T.forEach($=>{const H=$.id.toLowerCase();H==="dashboard"?O.principal.push($):["usuarios","clientes","servicios"].includes(H)?O.gestion.push($):["agenda","turnos","inventario","arqueo","cobrar"].includes(H)?O.operaciones.push($):["promociones","membresias"].includes(H)?O.marketing.push($):["reportes"].includes(H)?O.reportes.push($):["configuracion"].includes(H)&&O.configuracion.push($)}),O})(s),k=(()=>{const T=[];b.principal.length>0&&T.push({section:"Principal",items:b.principal.map($=>({id:$.id,label:$.label,icon:$.icon,path:`/${$.id}`,active:n.pathname===`/${$.id}`}))}),b.gestion.length>0&&T.push({section:"Gestión",items:[{id:"gestion",label:"Gestión",icon:"👥",submenu:!0,expanded:l.gestion,items:b.gestion.map($=>({id:$.id,label:$.label,path:`/${$.id}`,active:n.pathname===`/${$.id}`}))}]}),b.operaciones.length>0&&T.push({section:"Operaciones",items:[{id:"operaciones",label:"Operaciones",icon:"⚙️",submenu:!0,expanded:l.operaciones,items:b.operaciones.map($=>({id:$.id,label:$.label,path:`/${$.id}`,active:n.pathname===`/${$.id}`}))}]}),b.marketing.length>0&&T.push({section:"Marketing",items:b.marketing.map($=>({id:$.id,label:$.label,icon:$.icon,path:`/${$.id}`,active:n.pathname===`/${$.id}`}))}),b.reportes.length>0&&T.push({section:"Reportes",items:[{id:"reportes",label:"Reportes",icon:"📋",path:"/reportes",active:n.pathname==="/reportes"}]});const O=[];return O.push({id:"configuration",label:"Configuración",path:"/configuration",active:n.pathname==="/configuration"}),O.push({id:"super-admin",label:"Super Admin",path:"/super-admin",active:n.pathname==="/super-admin"}),T.push({section:"Configuración",items:[{id:"configuracion",label:"Sistema",icon:"⚙️",submenu:!0,expanded:l.configuracion,items:O}]}),T})(),S=T=>{d(O=>({...O,[T]:!O[T]}))},m=T=>{r(T),window.innerWidth<=768&&t()},f=()=>{h(!0)},g=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),h(!1),D.success("Sesión cerrada exitosamente"),r("/")},y=()=>{h(!1)},N=(T,O=0)=>T.submenu?c(Of,{expanded:T.expanded,children:[c("div",{className:"menu-item",onClick:()=>S(T.id),children:[a("div",{className:"menu-icon",children:T.icon}),a("span",{className:"menu-text",children:T.label}),a("div",{className:"expand-icon",children:"▼"})]}),a(Mw,{expanded:T.expanded,children:T.items.map($=>a(Vw,{active:$.active,children:a("div",{className:"submenu-link",onClick:()=>m($.path),children:$.label})},$.id))})]},T.id):a(Of,{active:T.active,children:c("div",{className:"menu-item",onClick:()=>m(T.path),children:[a("div",{className:"menu-icon",children:T.icon}),a("span",{className:"menu-text",children:T.label})]})},T.id);return c(Yt,{children:[c($w,{collapsed:e,children:[c(Pw,{children:[c(_w,{children:[a("div",{className:"logo-icon",children:"TF"}),a("div",{className:"logo-text",children:"TurnoFlow"})]}),c(Aw,{children:[a("div",{className:"user-name",children:"Admin User"}),a("div",{className:"user-role",children:"Super Admin"})]}),c(Dw,{children:[a("span",{children:v.icon}),a("span",{children:v.name})]})]}),c(Fw,{children:[k.map(T=>c(Lw,{children:[a(Rw,{children:T.section}),T.items.map(O=>N(O))]},T.section)),a(Ow,{children:c(Iw,{onClick:f,children:[a("div",{className:"logout-icon",children:"🚪"}),a("div",{className:"logout-text",children:"Cerrar Sesión"})]})})]})]}),a(jw,{collapsed:e,onClick:t,children:e?"☰":"✕"}),a(Bw,{show:!e&&window.innerWidth<=768,onClick:t}),p&&c(Uw,{children:[a("div",{className:"modal-icon",children:"🚪"}),a("h2",{className:"modal-title",children:"¿Deseas Salir?"}),a("p",{className:"modal-message",children:"Estás a punto de cerrar tu sesión en TurnoFlow. ¿Estás seguro de que quieres continuar?"}),c("div",{className:"modal-actions",children:[a("button",{className:"modal-button cancel",onClick:y,children:"Cancelar"}),a("button",{className:"modal-button confirm",onClick:g,children:"Sí, Cerrar Sesión"})]})]})]})},qw=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
`,Gw=u.main`
  flex: 1;
  margin-left: ${e=>e.sidebarCollapsed?"0":"280px"};
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`,Yw=()=>{const[e,t]=C.useState(!1);return c(qw,{children:[a(Hw,{collapsed:e,onToggle:()=>{t(!e)}}),a(Gw,{sidebarCollapsed:e,children:a(b0,{})})]})},Ww=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,Qw=u.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    color: #1f2937;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    color: #6b7280;
    font-size: 16px;
    margin: 0;
  }
`,Kw=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ia=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .stat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: ${e=>e.iconBg||"#667eea"};
      color: white;
    }

    .stat-change {
      font-size: 12px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 20px;
      background: ${e=>e.changeColor||"#d1fae5"};
      color: ${e=>e.changeTextColor||"#065f46"};
    }
  }

  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 4px;
  }

  .stat-label {
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
  }
`,Jw=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,If=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`,Lf=u.div`
  height: 200px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 14px;
`,Xw=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`,Zw=u.div`
  space-y: 16px;
`,ek=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
  }

  .activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background: ${e=>e.iconBg||"#667eea"};
    color: white;
  }

  .activity-content {
    flex: 1;

    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      color: #1f2937;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #6b7280;
    }
  }

  .activity-time {
    font-size: 12px;
    color: #9ca3af;
  }
`,tk=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
`,nk=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rk=u.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: #667eea;
    border-color: #667eea;
    color: white;
    transform: translateY(-2px);
  }

  .action-icon {
    font-size: 20px;
  }

  .action-content {
    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      opacity: 0.8;
    }
  }
`,Rf=()=>{const[e,t]=C.useState({totalSales:0,totalClients:0,appointmentsToday:0,pendingPayments:0}),[n,r]=C.useState([{id:1,type:"appointment",title:"Nueva cita agendada",description:"María García - Corte de cabello",time:"Hace 5 min",icon:"📅",iconBg:"#10b981"},{id:2,type:"payment",title:"Pago recibido",description:"$50.000 - Carlos Rodríguez",time:"Hace 15 min",icon:"💰",iconBg:"#f59e0b"},{id:3,type:"client",title:"Nuevo cliente registrado",description:"Ana López se unió al sistema",time:"Hace 30 min",icon:"👤",iconBg:"#667eea"},{id:4,type:"service",title:"Servicio completado",description:"Tratamiento facial - Laura Martínez",time:"Hace 1 hora",icon:"✨",iconBg:"#8b5cf6"}]);C.useEffect(()=>{(async()=>{try{await new Promise(l=>setTimeout(l,1e3)),t({totalSales:245e4,totalClients:156,appointmentsToday:12,pendingPayments:34e4})}catch{D.error("Error al cargar datos del dashboard")}})()},[]);const i=s=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(s),o=[{id:"new-client",title:"Nuevo Cliente",description:"Registrar cliente",icon:"👤",action:()=>D.info("Funcionalidad próximamente")},{id:"new-appointment",title:"Nueva Cita",description:"Agendar turno",icon:"📅",action:()=>D.info("Funcionalidad próximamente")},{id:"add-service",title:"Agregar Servicio",description:"Nuevo servicio",icon:"✨",action:()=>D.info("Funcionalidad próximamente")},{id:"view-reports",title:"Ver Reportes",description:"Análisis de datos",icon:"📊",action:()=>D.info("Funcionalidad próximamente")}];return a(Ww,{children:c("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[a(Qw,{children:a("h1",{children:"INFORMACIÓN DETALLADA"})}),c(Kw,{children:[c(ia,{iconBg:"#10b981",changeColor:"#d1fae5",changeTextColor:"#065f46",children:[c("div",{className:"stat-header",children:[a("div",{className:"stat-icon",children:"💰"}),a("div",{className:"stat-change",children:"+12%"})]}),a("div",{className:"stat-value",children:i(e.totalSales)}),a("div",{className:"stat-label",children:"Ventas Totales"})]}),c(ia,{iconBg:"#667eea",changeColor:"#dbeafe",changeTextColor:"#1e40af",children:[c("div",{className:"stat-header",children:[a("div",{className:"stat-icon",children:"👥"}),a("div",{className:"stat-change",children:"+8%"})]}),a("div",{className:"stat-value",children:e.totalClients}),a("div",{className:"stat-label",children:"Total Clientes"})]}),c(ia,{iconBg:"#f59e0b",changeColor:"#fef3c7",changeTextColor:"#92400e",children:[c("div",{className:"stat-header",children:[a("div",{className:"stat-icon",children:"📅"}),a("div",{className:"stat-change",children:"-3%"})]}),a("div",{className:"stat-value",children:e.appointmentsToday}),a("div",{className:"stat-label",children:"Citas Hoy"})]}),c(ia,{iconBg:"#ef4444",changeColor:"#fee2e2",changeTextColor:"#991b1b",children:[c("div",{className:"stat-header",children:[a("div",{className:"stat-icon",children:"⏳"}),a("div",{className:"stat-change",children:"+5%"})]}),a("div",{className:"stat-value",children:i(e.pendingPayments)}),a("div",{className:"stat-label",children:"Pagos Pendientes"})]})]}),c(Jw,{children:[c(If,{children:[a("h3",{children:"Ventas Mensuales"}),a(Lf,{children:"📊 Gráfico de ventas próximamente"})]}),c(If,{children:[a("h3",{children:"Citas por Día"}),a(Lf,{children:"📅 Gráfico de citas próximamente"})]})]}),c(Xw,{children:[a("h3",{children:"Actividad Reciente"}),a(Zw,{children:n.map(s=>c(ek,{iconBg:s.iconBg,children:[a("div",{className:"activity-icon",children:s.icon}),c("div",{className:"activity-content",children:[a("h4",{children:s.title}),a("p",{children:s.description})]}),a("div",{className:"activity-time",children:s.time})]},s.id))})]}),c(tk,{children:[a("h3",{children:"Acciones Rápidas"}),a(nk,{children:o.map(s=>c(rk,{onClick:s.action,children:[a("div",{className:"action-icon",children:s.icon}),c("div",{className:"action-content",children:[a("h4",{children:s.title}),a("p",{children:s.description})]})]},s.id))})]})]})})},ik=512,ok=512,ak=.8,px=async(e,t={})=>{const{maxWidth:n=ik,maxHeight:r=ok,quality:i=ak,outputName:o}=t;if(!e||!e.type.startsWith("image/"))throw new Error("El archivo no es una imagen válida");const s=e.size,l=o||e.name.replace(/\.[^.]+$/,""),d=await sk(e),{width:p,height:h}=lk(d.width,d.height,n,r),v=await ck(d,p,h,i),x=new File([v],`${l}.webp`,{type:"image/webp",lastModified:Date.now()}),b=s>0?Math.round((1-x.size/s)*100):0,w={file:x,originalSize:s,webpSize:x.size,savedPercent:b,originalWidth:d.width,originalHeight:d.height,webpWidth:p,webpHeight:h};try{w.previewUrl=URL.createObjectURL(v)}catch{}return w},sk=e=>new Promise((t,n)=>{const r=new Image,i=URL.createObjectURL(e);r.onload=()=>{URL.revokeObjectURL(i),t(r)},r.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Error al cargar la imagen"))},r.src=i}),lk=(e,t,n,r)=>{let i=e,o=t;return i>n&&(o=Math.round(o*n/i),i=n),o>r&&(i=Math.round(i*r/o),o=r),{width:i,height:o}},ck=(e,t,n,r)=>new Promise((i,o)=>{const s=document.createElement("canvas");s.width=t,s.height=n;const l=s.getContext("2d");if(!l){o(new Error("No se pudo crear el contexto del canvas"));return}l.fillStyle="#FFFFFF",l.fillRect(0,0,t,n),l.drawImage(e,0,0,t,n),s.toBlob(d=>{d?i(d):o(new Error("Error al convertir la imagen a WebP"))},"image/webp",r)}),Ln=e=>{if(e===0)return"0 Bytes";const t=1024,n=["Bytes","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,r)).toFixed(1))+" "+n[r]},Ll="turnoflow_empresa",dk=Rt({name:oe().required("El nombre de la empresa es requerido"),nit:oe().required("El NIT es requerido"),tax_regime:oe(),phone:oe().matches(/^[0-9+\-\s()]+$/,"Formato de teléfono inválido"),email:oe().email("Email inválido"),address:oe(),city:oe(),legal_representative:oe(),legal_id:oe(),legal_phone:oe().matches(/^[0-9+\-\s()]+$/,"Formato de teléfono inválido"),whatsapp:oe(),instagram:oe(),facebook:oe(),website:oe().url("URL inválida"),opening_time:oe(),closing_time:oe(),description:oe().max(300,"Máximo 300 caracteres")}),uk=u.div`
  max-width: 900px;
  margin: 0 auto;
`,pk=u.div`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 16px;
  padding: 32px;
  color: white;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.25);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
`,fk=u.div`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,mk=u.div`
  flex: 1;

  h2 {
    margin: 0 0 4px 0;
    font-size: 24px;
    font-weight: 700;
  }

  .preview-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 8px;
    font-size: 13px;
    opacity: 0.9;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`,hk=u.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
`,Pr=u.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`,_r=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: #f8f9fa;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f1f3f4;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      font-size: 20px;
    }

    h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: #374151;
    }

    .count {
      font-size: 11px;
      color: #9ca3af;
      background: #e5e7eb;
      padding: 1px 8px;
      border-radius: 10px;
    }
  }

  .toggle {
    font-size: 14px;
    color: #9ca3af;
    transition: transform 0.3s ease;
    transform: ${e=>e.$open?"rotate(180deg)":"rotate(0deg)"};
  }
`,Ar=u.div`
  padding: ${e=>e.$open?"20px 24px 24px":"0 24px"};
  max-height: ${e=>e.$open?"2000px":"0"};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${e=>e.$open?1:0};
`,Pi=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Mf=u.div`
  grid-column: 1 / -1;
`,qe=u.div`
  display: flex;
  flex-direction: column;
`,Ge=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
`,wt=u.input`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.08);
    background: white;
  }

  &::placeholder {
    color: #bbb;
  }
`,gk=u.textarea`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: #fafafa;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.08);
    background: white;
  }
`,xk=u.select`
  padding: 11px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: #fafafa;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,vk=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,bk=u.button`
  padding: 8px 14px;
  border: 2px solid ${e=>e.$active?"var(--primary-color)":"#e5e7eb"};
  border-radius: 8px;
  background: ${e=>e.$active?"rgba(var(--primary-rgb), 0.08)":"white"};
  color: ${e=>e.$active?"var(--primary-color)":"#6b7280"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`,Vf=u.div`
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    padding: 10px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  span {
    color: #9ca3af;
    font-weight: 600;
  }
`,yk=u.span`
  font-size: 11px;
  color: ${e=>e.$over?"#ef4444":"#9ca3af"};
  text-align: right;
  margin-top: 4px;
`,wk=u.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`,kk=u.div`
  width: 110px;
  height: 110px;
  border-radius: 14px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #d1d5db;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Sk=u.input`
  display: none;
`,Ck=u.div`
  flex: 1;
  min-width: 180px;
`,Ek=u.label`
  display: inline-block;
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-1px);
  }
`,Nk=u.div`
  font-size: 12px;
  color: #059669;
  background: #ecfdf5;
  padding: 6px 12px;
  border-radius: 6px;
  margin-top: 8px;
  display: inline-block;
`,zk=u.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
  margin-bottom: 32px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Tk=u.button`
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;

  &:hover {
    color: #ef4444;
  }
`,$k=[{key:"mon",label:"Lun"},{key:"tue",label:"Mar"},{key:"wed",label:"Mié"},{key:"thu",label:"Jue"},{key:"fri",label:"Vie"},{key:"sat",label:"Sáb"},{key:"sun",label:"Dom"}],Pk=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(null),[i,o]=C.useState(null),[s,l]=C.useState(!1),[d,p]=C.useState(!1),[h,v]=C.useState({general:!0,contact:!1,legal:!1,social:!1,hours:!1,logo:!1}),x=Z=>{v(L=>({...L,[Z]:!L[Z]}))},[b,w]=C.useState(["mon","tue","wed","thu","fri"]),k=Z=>{w(L=>L.includes(Z)?L.filter(R=>R!==Z):[...L,Z])},S=()=>{const Z=localStorage.getItem(Ll);if(Z)try{const L=JSON.parse(Z);return L.workingDays&&w(L.workingDays),L.logoPreview&&r(L.logoPreview),L.formData}catch{}return{name:"",nit:"",tax_regime:"simplificado",phone:"",email:"",address:"",city:"",legal_representative:"",legal_id:"",legal_phone:"",whatsapp:"",instagram:"",facebook:"",website:"",opening_time:"08:00",closing_time:"18:00",description:""}},{register:m,handleSubmit:f,formState:{errors:g},reset:y,watch:N}=Xt({resolver:Zt(dk),defaultValues:S()}),T=N("description",""),O=(T==null?void 0:T.length)||0,$=()=>{window.confirm("¿Está seguro de limpiar todos los datos?")&&(y(),t(null),r(null),o(null),w(["mon","tue","wed","thu","fri"]),localStorage.removeItem(Ll),D.info("Datos restablecidos"))},H=async Z=>{const L=Z.target.files[0];if(L){if(L.size>3*1024*1024){D.error("El logo debe ser menor a 3MB");return}if(!L.type.startsWith("image/")){D.error("Solo se permiten archivos de imagen");return}l(!0);try{const R=await px(L,{maxWidth:512,maxHeight:512,quality:.8,outputName:`logo_${Date.now()}`});t(R.file),r(R.previewUrl),o(R),R.savedPercent>0&&D.success(`Logo optimizado: ${Ln(R.originalSize)} → ${Ln(R.webpSize)} (${R.savedPercent}% menos)`,{autoClose:4e3})}catch{D.error("Error al procesar la imagen")}finally{l(!1),Z.target.value=""}}},j=async Z=>{p(!0);try{await new Promise(R=>setTimeout(R,1200));const L={formData:Z,workingDays:b,logo:(e==null?void 0:e.name)||null,logoPreview:n};localStorage.setItem(Ll,JSON.stringify(L)),D.success("✅ Información de empresa guardada exitosamente")}catch{D.error("Error al guardar")}finally{p(!1)}},A=N("name")||"Mi Empresa",V=N("phone"),B=N("email"),re=N("city"),le=N("nit");return c(uk,{children:[c(pk,{children:[a(fk,{children:n?a("img",{src:n,alt:"logo"}):"🏢"}),c(mk,{children:[a("h2",{children:A||"Mi Empresa"}),c("div",{className:"preview-meta",children:[le&&c("span",{children:["📋 NIT ",le]}),re&&c("span",{children:["📍 ",re]}),V&&c("span",{children:["📞 ",V]}),B&&c("span",{children:["✉️ ",B]})]}),c(hk,{children:[b.length," días hábiles · ",N("opening_time")||"08:00"," - ",N("closing_time")||"18:00"]})]})]}),c("form",{onSubmit:f(j),children:[c(Pr,{children:[c(_r,{$open:h.general,onClick:()=>x("general"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"🏢"}),a("h3",{children:"Información General"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.general,children:c(Pi,{children:[a(Mf,{children:c(qe,{children:[a(Ge,{children:"📛 Nombre de la Empresa *"}),a(wt,{type:"text",placeholder:"Ej: Mi Empresa S.A.S.",...m("name")}),g.name&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.name.message})]})}),c(qe,{children:[a(Ge,{children:"📋 NIT *"}),a(wt,{type:"text",placeholder:"123456789-0",...m("nit")}),g.nit&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.nit.message})]}),c(qe,{children:[a(Ge,{children:"📄 Régimen Tributario"}),c(xk,{...m("tax_regime"),children:[a("option",{value:"simplificado",children:"Simplificado"}),a("option",{value:"comun",children:"Común"}),a("option",{value:"gran_contribuyente",children:"Gran Contribuyente"}),a("option",{value:"no_responsable",children:"No Responsable de IVA"})]})]}),c(qe,{children:[a(Ge,{children:"📝 Descripción"}),a(gk,{placeholder:"Breve descripción del negocio...",maxLength:300,...m("description")}),c(yk,{$over:O>300,children:[O,"/300"]})]})]})})]}),c(Pr,{children:[c(_r,{$open:h.contact,onClick:()=>x("contact"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"📞"}),a("h3",{children:"Contacto"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.contact,children:c(Pi,{children:[c(qe,{children:[a(Ge,{children:"📞 Teléfono"}),a(wt,{type:"text",placeholder:"+57 300 123 4567",...m("phone")}),g.phone&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.phone.message})]}),c(qe,{children:[a(Ge,{children:"✉️ Email"}),a(wt,{type:"email",placeholder:"contacto@empresa.com",...m("email")}),g.email&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.email.message})]}),c(qe,{children:[a(Ge,{children:"📍 Dirección"}),a(wt,{type:"text",placeholder:"Calle 123 #45-67",...m("address")})]}),c(qe,{children:[a(Ge,{children:"🏙️ Ciudad"}),a(wt,{type:"text",placeholder:"Bogotá, Colombia",...m("city")})]})]})})]}),c(Pr,{children:[c(_r,{$open:h.legal,onClick:()=>x("legal"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"👤"}),a("h3",{children:"Representante Legal"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.legal,children:c(Pi,{children:[c(qe,{children:[a(Ge,{children:"🧑 Nombre Completo"}),a(wt,{type:"text",placeholder:"Nombre del representante",...m("legal_representative")})]}),c(qe,{children:[a(Ge,{children:"🆔 Documento de Identidad"}),a(wt,{type:"text",placeholder:"CC 123456789",...m("legal_id")})]}),c(qe,{children:[a(Ge,{children:"📞 Teléfono"}),a(wt,{type:"text",placeholder:"+57 301 987 6543",...m("legal_phone")}),g.legal_phone&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.legal_phone.message})]})]})})]}),c(Pr,{children:[c(_r,{$open:h.social,onClick:()=>x("social"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"🌐"}),a("h3",{children:"Redes Sociales"}),a("span",{className:"count",children:"Opcional"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.social,children:c(Pi,{children:[c(qe,{children:[a(Ge,{children:"💬 WhatsApp"}),a(wt,{type:"text",placeholder:"+57 300 123 4567",...m("whatsapp")})]}),c(qe,{children:[a(Ge,{children:"📸 Instagram"}),a(wt,{type:"text",placeholder:"@miempresa",...m("instagram")})]}),c(qe,{children:[a(Ge,{children:"👍 Facebook"}),a(wt,{type:"text",placeholder:"facebook.com/miempresa",...m("facebook")})]}),c(qe,{children:[a(Ge,{children:"🌍 Sitio Web"}),a(wt,{type:"url",placeholder:"https://miempresa.com",...m("website")}),g.website&&a("span",{style:{color:"#ef4444",fontSize:12,marginTop:4},children:g.website.message})]})]})})]}),c(Pr,{children:[c(_r,{$open:h.hours,onClick:()=>x("hours"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"🕐"}),a("h3",{children:"Horarios de Atención"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.hours,children:c(Pi,{children:[a(Mf,{children:c(qe,{children:[a(Ge,{children:"📅 Días Laborales"}),a(vk,{children:$k.map(Z=>a(bk,{type:"button",$active:b.includes(Z.key),onClick:()=>k(Z.key),children:Z.label},Z.key))})]})}),c(qe,{children:[a(Ge,{children:"🟢 Hora de Apertura"}),a(Vf,{children:a("input",{type:"time",...m("opening_time")})})]}),c(qe,{children:[a(Ge,{children:"🔴 Hora de Cierre"}),a(Vf,{children:a("input",{type:"time",...m("closing_time")})})]})]})})]}),c(Pr,{children:[c(_r,{$open:h.logo,onClick:()=>x("logo"),children:[c("div",{className:"section-title",children:[a("span",{className:"icon",children:"🖼️"}),a("h3",{children:"Logo de la Empresa"}),n&&a("span",{className:"count",children:"Cargado"})]}),a("span",{className:"toggle",children:"▼"})]}),a(Ar,{$open:h.logo,children:c(wk,{children:[a(kk,{children:s?c("div",{style:{color:"var(--primary-color)",textAlign:"center",fontSize:13},children:[a("div",{style:{fontSize:28},children:"⏳"}),"Optimizando..."]}):n?a("img",{src:n,alt:"Logo"}):a("div",{style:{color:"#bbb",fontSize:14},children:"Sin logo"})}),c(Ck,{children:[a(Sk,{type:"file",accept:"image/*",onChange:H,id:"logo-input",disabled:s}),a(Ek,{htmlFor:"logo-input",style:{opacity:s?.6:1},children:s?"Procesando...":n?"🔄 Cambiar Logo":"📁 Subir Logo"}),i&&c(Nk,{children:["✓ ",Ln(i.originalSize)," → ",Ln(i.webpSize)," (",i.savedPercent,"% menos)",i.webpWidth&&c(Yt,{children:[" · ",i.webpWidth,"×",i.webpHeight,"px"]})]}),a("p",{style:{fontSize:12,color:"#9ca3af",marginTop:8},children:"Máximo 3MB. Se convierte automáticamente a WebP."})]})]})})]}),a(zk,{type:"submit",disabled:d,children:d?"⏳ Guardando...":"💾 Guardar Configuración"})]}),a("div",{style:{textAlign:"center",marginBottom:24},children:a(Tk,{type:"button",onClick:$,children:"Restablecer datos"})})]})},_k=u.div`
  max-width: 1000px;
  margin: 0 auto;
`,Ak=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Dk=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 3px solid ${e=>e.selected?"var(--primary-color)":"transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${e=>e.selected&&`
    &::after {
      content: '✓';
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--primary-color);
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  `}
`,Fk=u.div`
  font-size: 48px;
  margin-bottom: 16px;
  text-align: center;
`,Ok=u.h3`
  margin: 0 0 12px 0;
  color: #1f2937;
  font-size: 20px;
  text-align: center;
`,Ik=u.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`,Lk=u.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`,Rk=u.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Mk=u.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`,Vk=u.div`
  margin-bottom: 20px;

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`,jk=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Bk={beauty:{primary:"#E91E63",secondary:"#F48FB1",accent:"#FFEB3B"},health:{primary:"#1976D2",secondary:"#42A5F5",accent:"#4CAF50"},fitness:{primary:"#FF5722",secondary:"#FF9800",accent:"#FFC107"},professional:{primary:"#9C27B0",secondary:"#BA68C8",accent:"#E1BEE7"},technical:{primary:"#607D8B",secondary:"#90A4AE",accent:"#B0BEC5"},restaurant:{primary:"#FF6F00",secondary:"#FFB74D",accent:"#FFF3E0"},public:{primary:"#2E7D32",secondary:"#4CAF50",accent:"#81C784"},veterinary:{primary:"#795548",secondary:"#A1887F",accent:"#D7CCC8"},education:{primary:"#FF9800",secondary:"#FFB74D",accent:"#FFF3E0"},retail:{primary:"#7B1FA2",secondary:"#BA68C8",accent:"#E1BEE7"},other:{primary:"#546E7A",secondary:"#78909C",accent:"#B0BEC5"}},jf=e=>{const t=Bk[e];if(!t)return;const n=document.documentElement;n.style.setProperty("--primary-color",t.primary),n.style.setProperty("--secondary-color",t.secondary),n.style.setProperty("--accent-color",t.accent)},Uk=()=>{const[e,t]=C.useState("beauty"),[n,r]=C.useState(!1);C.useEffect(()=>{const p=localStorage.getItem("businessType");p&&(t(p),jf(p))},[]);const i=[{id:"beauty",name:"Belleza y Cuidado Personal",icon:"💇",description:"Salones de belleza, peluquerías, barberías, centros de estética, manicuristas, pedicuristas, spa y masajistas.",colors:["#E91E63","#F48FB1","#FFEB3B"]},{id:"health",name:"Salud y Bienestar",icon:"🏥",description:"Consultorios médicos, clínicas y centros de salud, psicólogos, psiquiatras, odontólogos, nutricionistas, terapias alternativas.",colors:["#1976D2","#42A5F5","#4CAF50"]},{id:"fitness",name:"Actividad Física y Formación",icon:"🏋️",description:"Gimnasios, entrenadores personales, clases grupales (yoga, baile, pilates, boxeo), profesores particulares.",colors:["#FF5722","#FF9800","#FFC107"]},{id:"professional",name:"Servicios Profesionales",icon:"🧾",description:"Abogados, contadores, asesores financieros, consultores, agentes inmobiliarios.",colors:["#9C27B0","#BA68C8","#E1BEE7"]},{id:"technical",name:"Servicios Técnicos",icon:"🛠️",description:"Talleres de reparación, mecánicos automotrices, centros de diagnóstico vehicular, reparación de equipos.",colors:["#607D8B","#90A4AE","#B0BEC5"]},{id:"restaurant",name:"Gastronomía",icon:"🧑‍🍳",description:"Restaurantes con alta demanda, cafés con espacios limitados, food trucks con atención por orden.",colors:["#FF6F00","#FFB74D","#FFF3E0"]},{id:"public",name:"Sector Público y Trámites",icon:"🏢",description:"Notarías, oficinas de tránsito, EPS/IPS, centros de atención ciudadana.",colors:["#2E7D32","#4CAF50","#81C784"]},{id:"veterinary",name:"Veterinarias y Spa Animales",icon:"🐾",description:"Clínicas veterinarias, peluquería canina, grooming, baños medicados, guarderías, hoteles para mascotas.",colors:["#795548","#A1887F","#D7CCC8"]},{id:"education",name:"Educación",icon:"🎓",description:"Instituciones educativas, academias, cursos y capacitación.",colors:["#FF9800","#FFB74D","#FFF3E0"]},{id:"retail",name:"Comercio Minorista",icon:"🛍️",description:"Tiendas, boutiques, comercios minoristas y servicios comerciales.",colors:["#7B1FA2","#BA68C8","#E1BEE7"]},{id:"other",name:"Otros Servicios",icon:"🔧",description:"Otros tipos de negocio que requieren sistema de turnos.",colors:["#546E7A","#78909C","#B0BEC5"]}],{updateBusinessType:o,getBusinessComponents:s}=cn(),l=async()=>{r(!0);try{await new Promise(h=>setTimeout(h,1e3)),o(e);const p=s(e);D.success(`${p.icon} ${p.name} configurado exitosamente. El menú se adaptará automáticamente.`)}catch{D.error("Error al guardar la configuración")}finally{r(!1)}},d=i.find(p=>p.id===e);return c(_k,{children:[a(Ak,{children:i.map(p=>c(Dk,{selected:e===p.id,onClick:()=>{t(p.id),jf(p.id)},children:[a(Fk,{children:p.icon}),a(Ok,{children:p.name}),a(Ik,{children:p.description}),a(Lk,{children:p.colors.map((h,v)=>a(Rk,{color:h},v))})]},p.id))}),c(Mk,{children:[c(Vk,{children:[a("h4",{children:"Selección Actual"}),a("p",{children:d?`${d.icon} ${d.name}`:"Ninguno seleccionado"})]}),a(jk,{onClick:l,disabled:n,children:n?"Configurando...":"Aplicar Configuración"}),a("p",{style:{fontSize:"12px",color:"#6b7280",marginTop:"12px"},children:"Al cambiar el tipo de negocio, el menú y componentes disponibles se adaptarán automáticamente."})]})]})},Hk=u.div`
  max-width: 900px;
  margin: 0 auto;
`,oa=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,aa=u.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 18px;
  }

  .badge {
    margin-left: auto;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    &.active {
      background: #d1fae5;
      color: #065f46;
    }

    &.expired {
      background: #fee2e2;
      color: #991b1b;
    }

    &.pending {
      background: #fef3c7;
      color: #92400e;
    }
  }
`,qk=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`,Gk=u.div`
  background: ${e=>e.$selected?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"white"};
  border: 2px solid ${e=>e.$selected?"transparent":"#e5e7eb"};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: ${e=>e.$selected?"transparent":"var(--primary-color)"};
  }

  ${e=>e.$selected&&`
    box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.3);
  `}

  .plan-icon {
    font-size: 36px;
    margin-bottom: 8px;
  }

  .plan-name {
    font-size: 16px;
    font-weight: 700;
    color: ${e=>e.$selected?"white":"#1f2937"};
    margin-bottom: 4px;
  }

  .plan-price {
    font-size: 22px;
    font-weight: 800;
    color: ${e=>e.$selected?"rgba(255,255,255,0.95)":"var(--primary-color)"};
    margin-bottom: 2px;

    span {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.7;
    }
  }

  .plan-users {
    font-size: 12px;
    color: ${e=>e.$selected?"rgba(255,255,255,0.8)":"#9ca3af"};
    margin-bottom: 12px;
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      font-size: 12px;
      color: ${e=>e.$selected?"rgba(255,255,255,0.85)":"#6b7280"};
      padding: 3px 0;
      display: flex;
      align-items: center;
      gap: 6px;

      &::before {
        content: '✓';
        font-weight: 700;
        color: ${e=>e.$selected?"white":"#10b981"};
      }
    }
  }
`,Bf=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,pt=u.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 13px;
    margin-bottom: 4px;
  }

  span {
    color: #6b7280;
    font-size: 15px;
  }

  input, select {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
`,Yk=u.div`
  margin-top: 16px;
`,Uf=u.div`
  margin-bottom: 14px;

  .progress-header {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 6px;

    strong {
      color: #374151;
    }
  }
`,Hf=u.div`
  height: 8px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .fill {
    height: 100%;
    border-radius: 10px;
    background: ${e=>e.$percent>90?"#ef4444":e.$percent>70?"#f59e0b":e.$percent>0?"var(--primary-color)":"#e5e7eb"};
    width: ${e=>Math.min(e.$percent,100)}%;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,Wk=u.input`
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Qk=u.div`
  margin-top: 8px;
`,Kk=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${e=>e.$blocked?"#fef2f2":"#f8f9fa"};
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  opacity: ${e=>e.$blocked?.7:1};

  &:hover {
    background: ${e=>e.$blocked?"#fee2e2":"#f1f3f4"};
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;

    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: ${e=>e.$blocked?"#9ca3af":"var(--primary-color)"};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 14px;
      flex-shrink: 0;
    }

    .details {
      min-width: 0;

      h4 {
        margin: 0 0 2px 0;
        font-size: 14px;
        color: #1f2937;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        margin: 0;
        font-size: 12px;
        color: #6b7280;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .status-tag {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    margin: 0 12px;
    white-space: nowrap;

    &.blocked {
      background: #fee2e2;
      color: #991b1b;
    }

    &.active {
      background: #d1fae5;
      color: #065f46;
    }
  }

  .actions {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }
`,qf=u.button`
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.block {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
    }
  }

  &.unblock {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Gf=u.div`
  text-align: center;
  padding: 40px 20px;
  color: #9ca3af;

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
  }
`,Jk=u.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`,Rl=u.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,En=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &.primary {
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-1px);
    }
  }

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &.warning {
    background: #f59e0b;
    color: white;

    &:hover {
      background: #d97706;
      transform: translateY(-1px);
    }
  }

  &.danger {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }
  }

  &.outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    &:hover {
      background: rgba(var(--primary-rgb), 0.1);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`,Xk=u.div`
  margin-top: 16px;
`,fx=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  font-size: 13px;

  &:hover {
    background: #f8f9fa;
  }

  .amount {
    font-weight: 700;
    color: #1f2937;
  }

  .date {
    color: #6b7280;
  }

  .method {
    color: #6b7280;
  }

  .receipt {
    color: var(--primary-color);
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`,Zk=u(fx)`
  font-weight: 700;
  color: #374151;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #e5e7eb;
`,sa=[{id:"basic",name:"Básico",icon:"🌱",price:0,maxUsers:5,features:["5 usuarios","1 empresa","Gestión de agenda","Reportes básicos","Soporte email"],monthlyPrice:0},{id:"professional",name:"Profesional",icon:"⭐",price:149900,maxUsers:20,features:["20 usuarios","1 empresa","Agenda + Turnos","Reportes avanzados","Soporte prioritario"],monthlyPrice:49900},{id:"premium",name:"Premium",icon:"👑",price:399900,maxUsers:50,features:["50 usuarios","3 empresas","Todo incluido","API acceso","Soporte 24/7"],monthlyPrice:99900},{id:"enterprise",name:"Empresarial",icon:"🏢",price:999900,maxUsers:999,features:["Usuarios ilimitados","Empresas ilimitadas","Personalización total","Backups dedicados","Gerente de cuenta"],monthlyPrice:249900}],Ml="turnoflow_subscription",eS=()=>{var Z,L,R,X;const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(""),[s,l]=C.useState(!1),[d,p]=C.useState(()=>{const _=localStorage.getItem(Ml);if(_)try{return JSON.parse(_)}catch{}return h()});function h(){const _=new Date,G=new Date(_.getFullYear(),0,1),M=new Date(_.getFullYear(),11,31);return{planId:"premium",planName:"Premium",startDate:G.toISOString().split("T")[0],endDate:M.toISOString().split("T")[0],status:"active",maxUsers:50,usersCount:25,customPrices:{monthly:99900,total:399900},users:[{id:1,name:"Ana García",email:"ana@ejemplo.com",role:"Administrador",blocked:!1},{id:2,name:"Carlos López",email:"carlos@ejemplo.com",role:"Vendedor",blocked:!1},{id:3,name:"María Rodríguez",email:"maria@ejemplo.com",role:"Asesor",blocked:!0},{id:4,name:"Juan Pérez",email:"juan@ejemplo.com",role:"Cliente",blocked:!1},{id:5,name:"Laura Martínez",email:"laura@ejemplo.com",role:"Vendedor",blocked:!1},{id:6,name:"Pedro Gómez",email:"pedro@ejemplo.com",role:"Cobrador",blocked:!1}],payments:[{id:1,date:"2026-01-15",amount:99900,method:"Tarjeta débito",status:"Pagado"},{id:2,date:"2026-02-15",amount:99900,method:"Transferencia",status:"Pagado"},{id:3,date:"2026-03-15",amount:99900,method:"Tarjeta crédito",status:"Pagado"},{id:4,date:"2026-04-15",amount:99900,method:"Efectivo",status:"Pagado"}]}}C.useEffect(()=>{localStorage.setItem(Ml,JSON.stringify(d))},[d]);const v=sa.find(_=>_.id===d.planId)||sa[2],x=((Z=d.customPrices)==null?void 0:Z.monthly)??v.monthlyPrice,b=((L=d.customPrices)==null?void 0:L.total)??v.price,w=new Date,k=new Date(d.endDate),S=new Date(d.startDate),m=Math.max(1,Math.round((k-S)/(1e3*60*60*24))),f=Math.max(0,Math.round((k-w)/(1e3*60*60*24))),g=Math.min(100,Math.round(d.usersCount/d.maxUsers*100)),y=d.users.filter(_=>_.name.toLowerCase().includes(i.toLowerCase())||_.email.toLowerCase().includes(i.toLowerCase())||_.role.toLowerCase().includes(i.toLowerCase())),N=_=>{const G=sa.find(M=>M.id===_);G&&(p(M=>({...M,planId:G.id,planName:G.name,maxUsers:G.maxUsers,customPrices:{monthly:G.monthlyPrice,total:G.price}})),D.success(`Plan ${G.name} seleccionado`))},T=()=>{r(!1),localStorage.setItem(Ml,JSON.stringify(d)),D.success("Configuración de suscripción guardada")},O=_=>{p(M=>{const J=M.users.map(Q=>Q.id===_?{...Q,blocked:!0}:Q);return{...M,users:J}});const G=d.users.find(M=>M.id===_);D.success(`${G==null?void 0:G.name} bloqueado`)},$=_=>{p(M=>{const J=M.users.map(Q=>Q.id===_?{...Q,blocked:!1}:Q);return{...M,users:J}});const G=d.users.find(M=>M.id===_);D.success(`${G==null?void 0:G.name} desbloqueado`)},H=()=>{t(!0),setTimeout(()=>{const _=new Date(w);_.setFullYear(_.getFullYear()+1),p(G=>({...G,endDate:_.toISOString().split("T")[0],status:"active",payments:[...G.payments,{id:Date.now(),date:w.toISOString().split("T")[0],amount:x||b,method:"Tarjeta débito",status:"Pagado"}]})),D.success(`Suscripción renovada hasta ${_.toLocaleDateString("es-CO")}`),t(!1)},1500)},j=()=>{window.confirm("¿Está seguro de que desea bloquear a TODOS los usuarios?")&&(p(_=>({..._,users:_.users.map(G=>({...G,blocked:!0}))})),D.success("Todos los usuarios han sido bloqueados"))},A=()=>{window.confirm("¿Está seguro de que desea desbloquear a TODOS los usuarios?")&&(p(_=>({..._,users:_.users.map(G=>({...G,blocked:!1}))})),D.success("Todos los usuarios han sido desbloqueados"))},V=()=>{window.confirm("¿Está seguro de CANCELAR la suscripción? Perderá acceso al final del período.")&&(p(_=>({..._,status:"expired"})),D.warning("Suscripción cancelada"))},B=_=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0}).format(_),re=_=>new Date(_+"T00:00:00").toLocaleDateString("es-CO",{year:"numeric",month:"long",day:"numeric"}),le={active:{label:"Activa",className:"active"},expired:{label:"Expirada",className:"expired"},pending:{label:"Pendiente",className:"pending"}}[d.status]||{label:"Activa",className:"active"};return c(Hk,{children:[c(oa,{children:[a(aa,{children:a("h3",{children:"Seleccionar Plan"})}),a(qk,{children:sa.map(_=>c(Gk,{$selected:d.planId===_.id,onClick:()=>N(_.id),children:[a("div",{className:"plan-icon",children:_.icon}),a("div",{className:"plan-name",children:_.name}),c("div",{className:"plan-price",children:[_.price===0?"Gratis":`${B(_.monthlyPrice)}`,_.price>0&&a("span",{children:" /mes"})]}),c("div",{className:"plan-users",children:["Hasta ",_.maxUsers===999?"∞":_.maxUsers," usuarios"]}),a("ul",{className:"plan-features",children:_.features.map((G,M)=>a("li",{children:G},M))})]},_.id))})]}),c(oa,{children:[c(aa,{children:[a("h3",{children:"Detalle de Suscripción"}),a("span",{className:`badge ${le.className}`,children:le.label})]}),n?c(Yt,{children:[c(Bf,{children:[c(pt,{children:[a("label",{children:"Nombre del Plan"}),a("input",{type:"text",value:d.planName,onChange:_=>p(G=>({...G,planName:_.target.value}))})]}),c(pt,{children:[a("label",{children:"Estado"}),c("select",{value:d.status,onChange:_=>p(G=>({...G,status:_.target.value})),children:[a("option",{value:"active",children:"Activa"}),a("option",{value:"expired",children:"Expirada"}),a("option",{value:"pending",children:"Pendiente"})]})]}),c(pt,{children:[a("label",{children:"Fecha de Inicio"}),a("input",{type:"date",value:d.startDate,onChange:_=>p(G=>({...G,startDate:_.target.value}))})]}),c(pt,{children:[a("label",{children:"Fecha de Vencimiento"}),a("input",{type:"date",value:d.endDate,onChange:_=>p(G=>({...G,endDate:_.target.value}))})]}),c(pt,{children:[a("label",{children:"Usuarios Máximos"}),a("input",{type:"number",min:"1",max:"999",value:d.maxUsers,onChange:_=>p(G=>({...G,maxUsers:Number(_.target.value)}))})]}),c(pt,{children:[a("label",{children:"Precio Mensual (COP)"}),a("input",{type:"number",min:"0",step:"1000",value:((R=d.customPrices)==null?void 0:R.monthly)??"",onChange:_=>p(G=>({...G,customPrices:{...G.customPrices||{},monthly:Number(_.target.value)}})),placeholder:"Ej: 99900"})]}),c(pt,{children:[a("label",{children:"Precio Total Plan (COP)"}),a("input",{type:"number",min:"0",step:"10000",value:((X=d.customPrices)==null?void 0:X.total)??"",onChange:_=>p(G=>({...G,customPrices:{...G.customPrices||{},total:Number(_.target.value)}})),placeholder:"Ej: 399900"})]}),c(pt,{children:[a("label",{children:"Usuarios Registrados"}),a("span",{children:d.usersCount})]})]}),c(Rl,{children:[a(En,{className:"primary",onClick:T,children:"💾 Guardar Cambios"}),a(En,{className:"outline",onClick:()=>r(!1),children:"Cancelar"})]})]}):c(Yt,{children:[c(Bf,{children:[c(pt,{children:[a("label",{children:"Plan"}),c("span",{children:[v.icon," ",d.planName]})]}),c(pt,{children:[a("label",{children:"Costo Mensual"}),c("span",{style:{color:"var(--primary-color)",fontWeight:700},children:[x===0?"Gratis":B(x)+" /mes",d.customPrices&&a("span",{style:{fontSize:11,color:"#9ca3af",fontWeight:400,marginLeft:8},children:"(personalizado)"})]})]}),c(pt,{children:[a("label",{children:"Fecha de Inicio"}),a("span",{children:re(d.startDate)})]}),c(pt,{children:[a("label",{children:"Fecha de Vencimiento"}),a("span",{children:re(d.endDate)})]}),c(pt,{children:[a("label",{children:"Valor Total Plan"}),a("span",{style:{fontWeight:700},children:b===0?"Gratis":B(b)})]}),c(pt,{children:[a("label",{children:"Usuarios"}),c("span",{children:[d.usersCount," de ",d.maxUsers]})]})]}),c(Yk,{children:[c(Uf,{children:[c("div",{className:"progress-header",children:[c("span",{children:["Días restantes: ",a("strong",{children:f})," de ",m]}),c("span",{children:[Math.round(f/m*100),"%"]})]}),a(Hf,{$percent:100-Math.round(f/m*100),children:a("div",{className:"fill"})})]}),c(Uf,{children:[c("div",{className:"progress-header",children:[c("span",{children:["Usuarios: ",a("strong",{children:d.usersCount})," de ",d.maxUsers]}),c("span",{children:[g,"%"]})]}),a(Hf,{$percent:g,children:a("div",{className:"fill"})})]})]}),a(Rl,{children:a(En,{className:"outline",onClick:()=>r(!0),children:"✏️ Editar Configuración"})})]})]}),c(oa,{children:[c(aa,{children:[a("h3",{children:"Usuarios del Sistema"}),c("span",{style:{fontSize:13,color:"#9ca3af"},children:[d.users.filter(_=>!_.blocked).length," activos"]})]}),a(Wk,{type:"text",placeholder:"🔍 Buscar usuario por nombre, email o rol...",value:i,onChange:_=>o(_.target.value)}),y.length===0?c(Gf,{children:[a("div",{className:"icon",children:"👤"}),a("p",{children:"No se encontraron usuarios con ese criterio de búsqueda"})]}):a(Qk,{children:y.map(_=>c(Kk,{$blocked:_.blocked,children:[c("div",{className:"user-info",children:[a("div",{className:"avatar",children:_.blocked?"🚫":_.name.charAt(0)}),c("div",{className:"details",children:[a("h4",{children:_.name}),c("p",{children:[_.email," • ",_.role]})]})]}),_.blocked&&a("span",{className:"status-tag blocked",children:"Bloqueado"}),!_.blocked&&a("span",{className:"status-tag active",children:"Activo"}),a("div",{className:"actions",children:_.blocked?a(qf,{className:"unblock",onClick:()=>$(_.id),children:"Desbloquear"}):a(qf,{className:"block",onClick:()=>O(_.id),children:"Bloquear"})})]},_.id))})]}),c(oa,{children:[c(aa,{children:[a("h3",{children:"Historial de Pagos"}),a("span",{style:{fontSize:13,color:"var(--primary-color)",cursor:"pointer",fontWeight:600},onClick:()=>l(!s),children:s?"▲ Ocultar":"▼ Mostrar"})]}),s&&c(Yt,{children:[c(Xk,{children:[c(Zk,{children:[a("div",{children:"Fecha"}),a("div",{children:"Monto"}),a("div",{children:"Método"}),a("div",{children:"Recibo"})]}),d.payments.map(_=>c(fx,{children:[a("div",{className:"date",children:re(_.date)}),a("div",{className:"amount",children:B(_.amount)}),a("div",{className:"method",children:_.method}),a("div",{className:"receipt",onClick:()=>D.info(`Recibo #${_.id} - Simulado`),children:"📄 Ver"})]},_.id))]}),d.payments.length===0&&c(Gf,{children:[a("div",{className:"icon",children:"📭"}),a("p",{children:"No hay pagos registrados"})]})]})]}),c(Jk,{children:[a("h3",{style:{margin:0,color:"#374151"},children:"Acciones de Suscripción"}),a("p",{style:{fontSize:13,color:"#9ca3af",margin:"8px 0 0 0"},children:"Administra el estado general de la suscripción"}),c(Rl,{children:[a(En,{className:"primary",onClick:H,disabled:e,children:e?"⏳ Renovando...":"🔄 Renovar Suscripción"}),a(En,{className:"warning",onClick:()=>{p(_=>({..._,status:"pending"})),D.info("Suscripción en estado pendiente")},children:"⏸️ Pausar"}),a(En,{className:"success",onClick:A,children:"🔓 Desbloquear Todos"}),a(En,{className:"danger",onClick:j,children:"🔒 Bloquear Todos"}),a(En,{className:"danger",onClick:V,style:{opacity:.7},children:"🛑 Cancelar Suscripción"})]})]})]})},tS=u.div`
  max-width: 1000px;
  margin: 0 auto;
`,Vl=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,jl=u.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 18px;
  }

  .icon {
    margin-right: 12px;
    font-size: 24px;
  }
`,nS=u.div`
  margin-top: 20px;
`,rS=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;

  .backup-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .backup-icon {
      font-size: 32px;
    }

    .details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`,Bl=u.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.download {
    background: #28a745;
    color: white;

    &:hover {
      background: #218838;
    }
  }

  &.restore {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.delete {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,iS=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Ul=u.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;

  h4 {
    margin: 0 0 12px 0;
    color: #374151;
    font-size: 16px;
  }
`,oS=u.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin-right: 12px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #667eea;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .label-text {
    font-size: 14px;
    color: #374151;
  }
`,Yf=u.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,Wf=u.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Hl=u.button`
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &.danger {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,aS=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!0),[i,o]=C.useState("daily"),[s,l]=C.useState(7),d=new Date;d.toISOString().split("T")[0];const p=new Date(d);p.setDate(p.getDate()-1);const h=new Date(d);h.setDate(h.getDate()-2);const v=f=>f.toISOString().split("T")[0],x=[{id:1,name:`backup_${v(d)}_auto`,date:`${v(d)} 02:00:00`,size:"45.2 MB",type:"automatic"},{id:2,name:`backup_${v(p)}_auto`,date:`${v(p)} 02:00:00`,size:"44.8 MB",type:"automatic"},{id:3,name:`backup_manual_${v(h)}`,date:`${v(h)} 15:30:00`,size:"46.1 MB",type:"manual"}],b=async()=>{t(!0);try{await new Promise(f=>setTimeout(f,3e3)),D.success("Copia de seguridad creada exitosamente")}catch{D.error("Error al crear la copia de seguridad")}finally{t(!1)}},w=async()=>{if(window.confirm("¿Está seguro de que desea limpiar la bitácora? Esta acción no se puede deshacer.")){t(!0);try{await new Promise(f=>setTimeout(f,2e3)),D.success("Bitácora limpiada exitosamente")}catch{D.error("Error al limpiar la bitácora")}finally{t(!1)}}},k=async f=>{t(!0);try{await new Promise(g=>setTimeout(g,1500)),D.success("Descarga iniciada")}catch{D.error("Error al descargar la copia")}finally{t(!1)}},S=async f=>{if(window.confirm("¿Está seguro de que desea restaurar esta copia? Los datos actuales se perderán.")){t(!0);try{await new Promise(g=>setTimeout(g,4e3)),D.success("Copia restaurada exitosamente")}catch{D.error("Error al restaurar la copia")}finally{t(!1)}}},m=async f=>{if(window.confirm("¿Está seguro de que desea eliminar esta copia de seguridad?")){t(!0);try{await new Promise(g=>setTimeout(g,1e3)),D.success("Copia eliminada exitosamente")}catch{D.error("Error al eliminar la copia")}finally{t(!1)}}};return c(tS,{children:[c(Vl,{children:[c(jl,{children:[a("span",{className:"icon",children:"💾"}),a("h3",{children:"Copias de Seguridad"})]}),c(iS,{children:[c(Ul,{children:[a("h4",{children:"Copia Automática"}),c(oS,{children:[c("div",{className:"switch",children:[a("input",{type:"checkbox",checked:n,onChange:f=>r(f.target.checked)}),a("span",{className:"slider"})]}),a("span",{className:"label-text",children:n?"Activada":"Desactivada"})]})]}),c(Ul,{children:[a("h4",{children:"Frecuencia"}),c(Yf,{value:i,onChange:f=>o(f.target.value),disabled:!n,children:[a("option",{value:"hourly",children:"Cada hora"}),a("option",{value:"daily",children:"Diaria"}),a("option",{value:"weekly",children:"Semanal"}),a("option",{value:"monthly",children:"Mensual"})]})]}),c(Ul,{children:[a("h4",{children:"Copias Máximas"}),c(Yf,{value:s,onChange:f=>l(Number(f.target.value)),disabled:!n,children:[a("option",{value:"3",children:"3 copias"}),a("option",{value:"7",children:"7 copias"}),a("option",{value:"14",children:"14 copias"}),a("option",{value:"30",children:"30 copias"})]})]})]}),a(Wf,{children:a(Hl,{className:"primary",onClick:b,disabled:e,children:"Crear Copia Manual"})})]}),c(Vl,{children:[c(jl,{children:[a("span",{className:"icon",children:"📋"}),a("h3",{children:"Copias Disponibles"})]}),a(nS,{children:x.map(f=>c(rS,{children:[c("div",{className:"backup-info",children:[a("div",{className:"backup-icon",children:"📦"}),c("div",{className:"details",children:[a("h4",{children:f.name}),c("p",{children:[new Date(f.date).toLocaleString("es-CO")," •",f.size," •",f.type==="automatic"?"Automática":"Manual"]})]})]}),c("div",{className:"actions",children:[a(Bl,{className:"download",onClick:()=>k(f.id),disabled:e,children:"Descargar"}),a(Bl,{className:"restore",onClick:()=>S(f.id),disabled:e,children:"Restaurar"}),a(Bl,{className:"delete",onClick:()=>m(f.id),disabled:e,children:"Eliminar"})]})]},f.id))})]}),c(Vl,{children:[c(jl,{children:[a("span",{className:"icon",children:"🧹"}),a("h3",{children:"Mantenimiento"})]}),a("p",{style:{color:"#6b7280",marginBottom:"20px"},children:"Operaciones de mantenimiento avanzadas para la base de datos."}),c(Wf,{children:[a(Hl,{className:"danger",onClick:w,disabled:e,children:"Limpiar Bitácora Antigua"}),a(Hl,{className:"secondary",onClick:()=>D.info("Función próximamente disponible"),disabled:e,children:"Optimizar Tablas"})]})]})]})},sS=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,lS=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,cS=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_i=u.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`,ql=u.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,Qf=u.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,dS=u.button`
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,uS=u.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,pS=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  font-weight: 600;
  color: #374151;
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`,fS=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 12px 16px;

    .mobile-label {
      font-weight: 600;
      color: #6b7280;
      font-size: 12px;
      margin-bottom: 2px;
    }

    .mobile-value {
      font-size: 14px;
      color: #374151;
      margin-bottom: 8px;
    }
  }
`,mS=u.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  ${e=>{switch(e.type){case"login":return"background: #d1fae5; color: #065f46;";case"create":return"background: #dbeafe; color: #1e40af;";case"update":return"background: #fef3c7; color: #92400e;";case"delete":return"background: #fee2e2; color: #991b1b;";default:return"background: #f3f4f6; color: #374151;"}}}
`,hS=u.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  text-align: center;
`,gS=u.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Kf=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.excel {
    background: #217346;
    color: white;

    &:hover {
      background: #1e6b3a;
      transform: translateY(-1px);
    }
  }

  &.pdf {
    background: #dc2626;
    color: white;

    &:hover {
      background: #b91c1c;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,xS=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState({user:"",action:"",entity:"",dateFrom:"",dateTo:""}),i=new Date,o=(h,v=0)=>{const x=new Date(i);return x.setHours(x.getHours()-h,x.getMinutes()-v,x.getSeconds()),x.toISOString().replace("T"," ").substring(0,19)},s=[{id:1,timestamp:o(0,30),user:"admin@empresa.com",action:"login",entity:"Usuario",details:"Inicio de sesión exitoso"},{id:2,timestamp:o(1,15),user:"vendedor@empresa.com",action:"create",entity:"Cliente",details:'Cliente "María López" creado'},{id:3,timestamp:o(2,0),user:"asesor@empresa.com",action:"update",entity:"Cita",details:"Cita #123 actualizada - estado: completada"},{id:4,timestamp:o(3,30),user:"admin@empresa.com",action:"delete",entity:"Usuario",details:'Usuario "temporal" eliminado'},{id:5,timestamp:o(5,0),user:"cobrador@empresa.com",action:"create",entity:"Pago",details:"Pago de $50.000 registrado"}],l=async()=>{t(!0);try{await new Promise(h=>setTimeout(h,1e3)),D.success("Filtros aplicados")}catch{D.error("Error al aplicar filtros")}finally{t(!1)}},d=async()=>{t(!0);try{await new Promise(h=>setTimeout(h,2e3)),D.success("Exportación a Excel completada")}catch{D.error("Error al exportar")}finally{t(!1)}},p=async()=>{t(!0);try{await new Promise(h=>setTimeout(h,2500)),D.success("Exportación a PDF completada")}catch{D.error("Error al exportar")}finally{t(!1)}};return c(sS,{children:[c(lS,{children:[a("h3",{style:{margin:"0 0 20px 0",color:"#1f2937"},children:"Filtros de Bitácora"}),c(cS,{children:[c(_i,{children:[a("label",{children:"Usuario"}),c(ql,{value:n.user,onChange:h=>r({...n,user:h.target.value}),children:[a("option",{value:"",children:"Todos los usuarios"}),a("option",{value:"admin",children:"Administrador"}),a("option",{value:"vendedor",children:"Vendedor"}),a("option",{value:"asesor",children:"Asesor"}),a("option",{value:"cobrador",children:"Cobrador"})]})]}),c(_i,{children:[a("label",{children:"Acción"}),c(ql,{value:n.action,onChange:h=>r({...n,action:h.target.value}),children:[a("option",{value:"",children:"Todas las acciones"}),a("option",{value:"login",children:"Inicio de sesión"}),a("option",{value:"create",children:"Crear"}),a("option",{value:"update",children:"Actualizar"}),a("option",{value:"delete",children:"Eliminar"})]})]}),c(_i,{children:[a("label",{children:"Entidad"}),c(ql,{value:n.entity,onChange:h=>r({...n,entity:h.target.value}),children:[a("option",{value:"",children:"Todas las entidades"}),a("option",{value:"Usuario",children:"Usuario"}),a("option",{value:"Cliente",children:"Cliente"}),a("option",{value:"Cita",children:"Cita"}),a("option",{value:"Pago",children:"Pago"})]})]}),c(_i,{children:[a("label",{children:"Desde"}),a(Qf,{type:"date",value:n.dateFrom,onChange:h=>r({...n,dateFrom:h.target.value})})]}),c(_i,{children:[a("label",{children:"Hasta"}),a(Qf,{type:"date",value:n.dateTo,onChange:h=>r({...n,dateTo:h.target.value})})]}),a(dS,{onClick:l,disabled:e,children:e?"Aplicando...":"Aplicar Filtros"})]})]}),c(uS,{children:[c(pS,{children:[a("div",{children:"Fecha/Hora"}),a("div",{children:"Usuario"}),a("div",{children:"Acción"}),a("div",{children:"Detalles"}),a("div",{children:"Tipo"})]}),s.map(h=>c(fS,{children:[c("div",{children:[a("div",{className:"mobile-label",children:"Fecha/Hora:"}),a("div",{className:"mobile-value",children:new Date(h.timestamp).toLocaleString("es-CO")})]}),c("div",{children:[a("div",{className:"mobile-label",children:"Usuario:"}),a("div",{className:"mobile-value",children:h.user})]}),c("div",{children:[a("div",{className:"mobile-label",children:"Acción:"}),a("div",{className:"mobile-value",children:a(mS,{type:h.action,children:h.action==="login"?"Login":h.action==="create"?"Crear":h.action==="update"?"Actualizar":h.action==="delete"?"Eliminar":h.action})})]}),c("div",{children:[a("div",{className:"mobile-label",children:"Detalles:"}),a("div",{className:"mobile-value",children:h.details})]}),c("div",{children:[a("div",{className:"mobile-label",children:"Entidad:"}),a("div",{className:"mobile-value",children:h.entity})]})]},h.id))]}),c(hS,{children:[a("h3",{style:{margin:"0 0 8px 0",color:"#1f2937"},children:"Exportar Bitácora"}),a("p",{style:{margin:"0 0 16px 0",color:"#6b7280"},children:"Exporta los registros filtrados en formato Excel o PDF"}),c(gS,{children:[a(Kf,{className:"excel",onClick:d,disabled:e,children:"📊 Exportar Excel"}),a(Kf,{className:"pdf",onClick:p,disabled:e,children:"📄 Exportar PDF"})]})]})]})},vS=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,bS=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`,yS=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,wS=u.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,kS=u.button`
  flex: 1;
  padding: 16px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid ${e=>e.active?"var(--primary-color)":"transparent"};
  color: ${e=>e.active?"var(--primary-color)":"#6c757d"};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: none;
    min-width: 120px;
    padding: 12px 16px;
    font-size: 12px;
  }
`,SS=u.div`
  padding: 32px;
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,CS=()=>{var i;const[e,t]=C.useState("empresa"),n=[{id:"empresa",label:"Empresa",component:Pk},{id:"tipo-negocio",label:"Tipo de Negocio",component:Uk},{id:"suscripcion",label:"Suscripción",component:eS},{id:"base-datos",label:"Base de Datos",component:aS},{id:"bitacora",label:"Bitácora",component:xS}],r=(i=n.find(o=>o.id===e))==null?void 0:i.component;return a(vS,{children:c(bS,{children:[c(yS,{children:[a("h1",{children:"Panel de Super Admin"}),a("p",{children:"Configuración avanzada del sistema TurnoFlow"})]}),a(wS,{children:n.map(o=>a(kS,{active:e===o.id,onClick:()=>t(o.id),children:o.label},o.id))}),a(SS,{children:r&&a(r,{})})]})})},ES=u.div`
  max-width: 100%;
  overflow-x: auto;
`,NS=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  .business-icon {
    font-size: 40px;
  }

  .business-info {
    flex: 1;
    
    h3 {
      margin: 0 0 4px 0;
      font-size: 20px;
    }
    
    p {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
  }
`,zS=u.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,TS=u.div`
  display: grid;
  grid-template-columns: 250px repeat(7, 1fr);
  gap: 16px;
  padding: 20px;
  background: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
  font-weight: 600;
  color: #374151;
  font-size: 14px;

  @media (max-width: 1200px) {
    grid-template-columns: 200px repeat(7, 1fr);
    gap: 8px;
    padding: 16px 12px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,$S=u.div`
  display: grid;
  grid-template-columns: 250px repeat(7, 1fr);
  gap: 16px;
  padding: 20px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 200px repeat(7, 1fr);
    gap: 8px;
    padding: 16px 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px;

    .component-name {
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
    }

    .mobile-roles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }
`,PS=u.div`
  font-weight: 600;
  color: #374151;

  .component-name {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .component-desc {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`,_S=u.div`
  text-align: center;

  .role-name {
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .role-name {
      margin-bottom: 0;
      flex: 1;
    }
  }
`,AS=u.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--primary-color);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,DS=u.div`
  text-align: center;
  font-weight: 600;
  color: #374151;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`,FS=u.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`,OS=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Jf="turnoflow_permissions_",IS={admin:{access:!0,read:!0,write:!0,delete:!0},auditor:{access:!0,read:!0,write:!1,delete:!1},vendedor:{access:!0,read:!0,write:!0,delete:!1},cobrador:{access:!0,read:!0,write:!0,delete:!1},asesor:{access:!0,read:!0,write:!0,delete:!1},empleado:{access:!0,read:!0,write:!1,delete:!1},cliente:{access:!0,read:!0,write:!1,delete:!1}},LS={configuracion:{admin:!0,vendedor:!1,cobrador:!1,asesor:!1,empleado:!1,cliente:!1},usuarios:{admin:!0,vendedor:!1,cobrador:!1,asesor:!1,empleado:!1,cliente:!1},inventario:{admin:!0,auditor:!0,vendedor:!0,cobrador:!1,asesor:!1,empleado:!1,cliente:!1},arqueo:{cobrador:!0,vendedor:!1,asesor:!1},cobrar:{cobrador:!0,vendedor:!1,asesor:!1,empleado:!1},bitacora:{vendedor:!1,cobrador:!1,asesor:!1,empleado:!1,cliente:!1},superadmin:{admin:!1}},RS=e=>{const t={};return e.forEach(n=>{const r={};for(const[i,o]of Object.entries(IS)){const s=LS[n.id];s&&s[i]!==void 0?r[i]=s[i]:r[i]=o.access}t[n.id]=r}),t},MS={dashboard:"Vista general del negocio",usuarios:"Gestión de usuarios del sistema",clientes:"Registro y gestión de clientes",agenda:"Programación y control de citas",servicios:"Catálogo de servicios ofrecidos",turnos:"Control y asignación de turnos",inventario:"Control de productos y existencias",arqueo:"Control de movimientos financieros",cobrar:"Registro de pagos y cobros",reportes:"Generación de reportes del negocio",configuracion:"Configuraciones del sistema",bitacora:"Registro de actividades",promociones:"Gestión de promociones y campañas",superadmin:"Panel de administración global",historiaClinica:"Historia clínica de pacientes",membresias:"Planes y membresías",instructores:"Gestión de instructores",asistencia:"Registro de asistencia",expedientes:"Expedientes profesionales",documentos:"Gestión documental",vehiculos:"Gestión de equipos/vehículos",ordenes:"Órdenes de trabajo",mesas:"Gestión de mesas",reservas:"Reservas de mesas",menu:"Gestión del menú",pedidos:"Gestión de pedidos",cocina:"Visualización en cocina",ciudadanos:"Registro de ciudadanos",tramites:"Trámites disponibles",atencion:"Atención al ciudadano",mascotas:"Gestión de mascotas",grooming:"Servicios de grooming",guarderia:"Guardería y hospedaje",estudiantes:"Gestión de estudiantes",cursos:"Cursos disponibles",matriculas:"Proceso de matrícula",calificaciones:"Sistema de notas",productos:"Catálogo de productos",ventas:"Punto de venta",configuracion_adicional:"Configuraciones adicionales"},VS=()=>{const{businessType:e,componentList:t,getBusinessComponents:n}=cn(),r=n(e),[i,o]=C.useState({}),[s,l]=C.useState(!1),d=[{id:"admin",name:"Administrador",color:"var(--primary-color)"},{id:"auditor",name:"Auditor",color:"#10b981"},{id:"vendedor",name:"Vendedor",color:"#f59e0b"},{id:"cobrador",name:"Cobrador",color:"#ef4444"},{id:"asesor",name:"Asesor",color:"#8b5cf6"},{id:"empleado",name:"Empleado",color:"#6b7280"},{id:"cliente",name:"Cliente",color:"#06b6d4"}],p=x=>MS[x]||"Configuración específica del negocio";C.useEffect(()=>{const x=Jf+e,b=localStorage.getItem(x);if(b)try{o(JSON.parse(b));return}catch{}o(RS(t))},[e,t]);const h=(x,b,w)=>{o(k=>({...k,[x]:{...k[x],[b]:w}}))},v=async()=>{l(!0);try{await new Promise(x=>setTimeout(x,1500)),localStorage.setItem(Jf+e,JSON.stringify(i)),D.success(`Permisos actualizados para ${r.name}`)}catch{D.error("Error al guardar los permisos")}finally{l(!1)}};return c(ES,{children:[c(NS,{children:[a("div",{className:"business-icon",children:r.icon}),c("div",{className:"business-info",children:[c("h3",{children:["Tipo de Negocio: ",r.name]}),a("p",{children:"Los componentes y permisos se adaptan automáticamente según el tipo de negocio seleccionado."})]})]}),c(zS,{children:[c(TS,{children:[a("div",{children:"Componente"}),d.map(x=>a(DS,{style:{color:x.color},children:x.name},x.id))]}),t.map(x=>c($S,{children:[c(PS,{children:[c("div",{className:"component-name",children:[x.icon," ",x.label]}),a("div",{className:"component-desc",children:p(x.id)})]}),d.map(b=>{var w;return a(_S,{children:c("div",{className:"mobile-roles",children:[a("span",{className:"role-name",style:{color:b.color},children:b.name}),a(AS,{type:"checkbox",checked:((w=i[x.id])==null?void 0:w[b.id])||!1,onChange:k=>h(x.id,b.id,k.target.checked),disabled:b.id==="admin"&&x.id==="superadmin"})]})},b.id)})]},x.id))]}),c(FS,{children:[a("h3",{style:{margin:"0 0 16px 0",color:"#374151"},children:"Guardar Cambios"}),c("p",{style:{margin:"0 0 20px 0",color:"#6b7280"},children:["Los cambios en los permisos se aplicarán únicamente para el tipo de negocio: ",a("strong",{children:r.name})]}),a(OS,{onClick:v,disabled:s,children:s?"Guardando...":"Guardar Permisos"})]})]})},jS=u.div`
  max-width: 1000px;
  margin: 0 auto;
`,BS=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,US=u.h3`
  margin: 0 0 20px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '${e=>e.icon||"⚙️"}';
    font-size: 24px;
  }
`,HS=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;u.div`
  grid-column: 1 / -1;
`;const Ai=u.div`
  display: flex;
  flex-direction: column;
`,Di=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Gl=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`,qS=u.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`,GS=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`,YS=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
`,Xf=u.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: normal;

  input {
    margin: 0;
  }
`,WS=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,QS=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,xe=({businessType:e,tabId:t})=>{const[n,r]=C.useState(!1),i=`turnoflow_config_${e}_${t}`,s=((m,f)=>{var y;return((y={health:{specialties:{title:"Especialidades Médicas",icon:"🏥",fields:[{name:"availableSpecialties",label:"Especialidades disponibles",type:"multicheckbox",options:["Medicina General","Odontología","Dermatología","Oftalmología","Ginecología","Psicología","Psiquiatría","Nutrición","Fisioterapia","Terapias Alternativas"],defaultValue:["Medicina General"]},{name:"emergencyService",label:"Servicio de emergencias 24/7",type:"checkbox",defaultValue:!0},{name:"telemedicine",label:"Telemedicina habilitada",type:"checkbox",defaultValue:!1},{name:"maxPatientsPerDay",label:"Pacientes máximo por día",type:"number",defaultValue:20},{name:"appointmentTypes",label:"Tipos de cita disponibles",type:"multicheckbox",options:["Presencial","Telemedicina","Domiciliaria"],defaultValue:["Presencial"]},{name:"patientRecords",label:"Historia clínica digital obligatoria",type:"checkbox",defaultValue:!0},{name:"consentForms",label:"Consentimientos informados",type:"checkbox",defaultValue:!0},{name:"followUpReminders",label:"Recordatorios de seguimiento",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios Médicos",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"07:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"17:00"},{name:"appointmentDuration",label:"Duración consulta (min)",type:"select",options:[15,20,30,45,60],defaultValue:30},{name:"emergencySlots",label:"Cupos de emergencia diarios",type:"number",defaultValue:3},{name:"breakTime",label:"Tiempo entre consultas (min)",type:"select",options:[0,5,10,15,30],defaultValue:10}]},medical:{title:"Configuración Médica",icon:"⚕️",fields:[{name:"insuranceIntegration",label:"Integración con seguros médicos",type:"checkbox",defaultValue:!1},{name:"onlinePrescriptions",label:"Recetas en línea",type:"checkbox",defaultValue:!1},{name:"labResults",label:"Resultados de laboratorio",type:"checkbox",defaultValue:!0},{name:"appointmentReminders",label:"Recordatorios automáticos",type:"multicheckbox",options:["WhatsApp","SMS","Email"],defaultValue:["WhatsApp","Email"]}]}},beauty:{services:{title:"Servicios de Belleza",icon:"💄",fields:[{name:"enableOnlineBooking",label:"Reservas en línea",type:"checkbox",defaultValue:!0},{name:"maxAdvanceBooking",label:"Días máximo anticipo",type:"select",options:[7,14,30,60],defaultValue:30},{name:"cancellationPolicy",label:"Política de cancelación (horas)",type:"select",options:[2,4,8,24],defaultValue:4},{name:"loyaltyProgram",label:"Programa de fidelización",type:"checkbox",defaultValue:!0},{name:"packageDeals",label:"Paquetes promocionales",type:"checkbox",defaultValue:!0},{name:"materialControl",label:"Control de materiales/insumos",type:"checkbox",defaultValue:!1},{name:"advancePayment",label:"Pagos anticipados requeridos",type:"checkbox",defaultValue:!1}]},schedule:{title:"Horarios de Atención",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"08:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"18:00"},{name:"appointmentDuration",label:"Duración servicios (min)",type:"select",options:[30,45,60,90,120],defaultValue:60},{name:"breakTime",label:"Tiempo entre citas (min)",type:"select",options:[0,15,30,45],defaultValue:15}]},pricing:{title:"Configuración de Precios",icon:"💰",fields:[{name:"currency",label:"Moneda",type:"select",options:["COP","USD"],defaultValue:"COP"},{name:"taxRate",label:"Impuesto (%)",type:"number",defaultValue:19},{name:"serviceFee",label:"Tarifa por servicio (%)",type:"number",defaultValue:5},{name:"discountEnabled",label:"Descuentos habilitados",type:"checkbox",defaultValue:!0},{name:"comboDiscounts",label:"Descuentos en combos",type:"checkbox",defaultValue:!0}]}},fitness:{classes:{title:"Configuración de Clases",icon:"🏋️",fields:[{name:"classTypes",label:"Tipos de clase disponibles",type:"multicheckbox",options:["Yoga","Pilates","Spinning","Crossfit","Baile","Boxeo","Funcional","Personalizado"],defaultValue:["Yoga","Pilates"]},{name:"maxCapacity",label:"Capacidad máxima por clase",type:"number",defaultValue:15},{name:"advanceBooking",label:"Días anticipo para reserva",type:"select",options:[1,3,7,14],defaultValue:7},{name:"cancellationHours",label:"Horas para cancelar",type:"select",options:[2,4,8,24],defaultValue:4},{name:"waitingList",label:"Lista de espera habilitada",type:"checkbox",defaultValue:!0},{name:"qrCheckin",label:"Check-in por QR",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios de Clases",icon:"🕐",fields:[{name:"workDays",label:"Días de operación",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"05:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"22:00"},{name:"classDuration",label:"Duración clases (min)",type:"select",options:[30,45,60,90],defaultValue:60},{name:"peakHours",label:"Horas pico (ej: 7:00-9:00, 17:00-19:00)",type:"textarea",placeholder:"Describa las horas pico del día"}]},memberships:{title:"Planes y Membresías",icon:"🎫",fields:[{name:"membershipTypes",label:"Tipos de membresía",type:"multicheckbox",options:["Mensual","Trimestral","Semestral","Anual","Día por día","Clases individuales"],defaultValue:["Mensual","Trimestral","Anual"]},{name:"autoRenewal",label:"Renovación automática",type:"checkbox",defaultValue:!1},{name:"referralProgram",label:"Programa de referidos",type:"checkbox",defaultValue:!0},{name:"guestPasses",label:"Pases para invitados",type:"checkbox",defaultValue:!0},{name:"freezingMembership",label:"Congelamiento de membresía",type:"checkbox",defaultValue:!0},{name:"cancellationPenalty",label:"Penalidad por cancelación",type:"number",defaultValue:0}]}},professional:{services:{title:"Servicios Profesionales",icon:"🧾",fields:[{name:"serviceTypes",label:"Tipos de servicio",type:"multicheckbox",options:["Consulta inicial","Seguimiento","Revisión","Asesoría","Tramite","Audiencia"],defaultValue:["Consulta inicial","Seguimiento"]},{name:"appointmentTypes",label:"Modalidad de atención",type:"multicheckbox",options:["Presencial","Virtual","Domiciliaria"],defaultValue:["Presencial","Virtual"]},{name:"advanceBooking",label:"Días anticipo mínimo",type:"select",options:[1,2,3,7,14],defaultValue:2},{name:"followUpRequired",label:"Seguimiento obligatorio",type:"checkbox",defaultValue:!0},{name:"fileUploads",label:"Carga de archivos permitida",type:"checkbox",defaultValue:!0},{name:"billingMethod",label:"Método de facturación",type:"select",options:["Por hora","Por sesión","Proyecto"],defaultValue:"Por hora"}]},schedule:{title:"Horarios Profesionales",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes"]},{name:"openingTime",label:"Hora de inicio",type:"time",defaultValue:"08:00"},{name:"closingTime",label:"Hora de fin",type:"time",defaultValue:"17:00"},{name:"appointmentDuration",label:"Duración cita (min)",type:"select",options:[30,45,60,90,120],defaultValue:60},{name:"breakTime",label:"Tiempo entre citas (min)",type:"select",options:[0,15,30,45],defaultValue:15},{name:"calendarIntegration",label:"Integración con Google Calendar",type:"checkbox",defaultValue:!1}]},billing:{title:"Configuración de Facturación",icon:"💰",fields:[{name:"currency",label:"Moneda",type:"select",options:["COP","USD"],defaultValue:"COP"},{name:"taxRate",label:"IVA (%)",type:"number",defaultValue:19},{name:"paymentMethods",label:"Métodos de pago aceptados",type:"multicheckbox",options:["Efectivo","Transferencia","Tarjeta","Cheque"],defaultValue:["Efectivo","Transferencia","Tarjeta"]},{name:"invoiceRequired",label:"Factura obligatoria",type:"checkbox",defaultValue:!0},{name:"installments",label:"Permitir cuotas",type:"checkbox",defaultValue:!1}]}},technical:{services:{title:"Servicios Técnicos",icon:"🛠️",fields:[{name:"serviceTypes",label:"Tipos de servicio",type:"multicheckbox",options:["Reparación","Mantenimiento","Diagnóstico","Instalación","Actualización"],defaultValue:["Reparación","Mantenimiento"]},{name:"warrantyService",label:"Servicio con garantía",type:"checkbox",defaultValue:!0},{name:"pickupDelivery",label:"Recogida/entrega a domicilio",type:"checkbox",defaultValue:!1},{name:"emergencyService",label:"Servicio de emergencias",type:"checkbox",defaultValue:!1},{name:"partsInventory",label:"Control de repuestos",type:"checkbox",defaultValue:!0},{name:"workOrderRequired",label:"Orden de trabajo obligatoria",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios Técnicos",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"08:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"17:00"},{name:"appointmentDuration",label:"Tiempo estimado por servicio",type:"select",options:[30,60,90,120,180],defaultValue:60},{name:"maxDailyAppointments",label:"Citas máximas por día",type:"number",defaultValue:8},{name:"progressNotifications",label:"Notificaciones de progreso",type:"checkbox",defaultValue:!0}]},technical:{title:"Configuración Técnica",icon:"⚙️",fields:[{name:"diagnosticFee",label:"Cobro por diagnóstico",type:"checkbox",defaultValue:!0},{name:"photoDocumentation",label:"Documentación fotográfica",type:"checkbox",defaultValue:!0},{name:"customerNotification",label:"Notificación al cliente",type:"checkbox",defaultValue:!0},{name:"qualityControl",label:"Control de calidad",type:"checkbox",defaultValue:!0},{name:"advancePayment",label:"Pagos anticipados",type:"checkbox",defaultValue:!1}]}},restaurant:{reservations:{title:"Sistema de Reservas",icon:"📅",fields:[{name:"maxGuests",label:"Máximo comensales por reserva",type:"number",defaultValue:8},{name:"advanceBooking",label:"Días anticipo máximo",type:"select",options:[7,14,30,60],defaultValue:30},{name:"minAdvanceHours",label:"Horas anticipo mínimo",type:"select",options:[1,2,4,6,12],defaultValue:2},{name:"cancellationHours",label:"Horas para cancelar",type:"select",options:[1,2,4,8,24],defaultValue:2},{name:"specialRequests",label:"Solicitudes especiales permitidas",type:"checkbox",defaultValue:!0},{name:"depositRequired",label:"Depósitos requeridos",type:"checkbox",defaultValue:!1},{name:"waitingList",label:"Lista de espera",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios de Operación",icon:"🕐",fields:[{name:"workDays",label:"Días de operación",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"12:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"23:00"},{name:"lastOrderTime",label:"Último pedido",type:"time",defaultValue:"22:30"},{name:"peakHours",label:"Horas pico",type:"textarea",placeholder:"Ej: 13:00-15:00, 19:00-21:00"},{name:"reservationDuration",label:"Duración estimada reserva (horas)",type:"select",options:[1,1.5,2,2.5,3],defaultValue:2}]},menu:{title:"Configuración del Menú",icon:"🍽️",fields:[{name:"cuisineType",label:"Tipo de cocina",type:"select",options:["Colombiana","Italiana","Mexicana","Asiática","Internacional","Mixta"],defaultValue:"Colombiana"},{name:"dietaryOptions",label:"Opciones dietéticas",type:"multicheckbox",options:["Vegetariano","Vegano","Sin gluten","Kosher","Halal"],defaultValue:["Vegetariano"]},{name:"onlineOrdering",label:"Pedidos en línea",type:"checkbox",defaultValue:!0},{name:"deliveryService",label:"Servicio a domicilio",type:"checkbox",defaultValue:!0},{name:"takeoutService",label:"Servicio para llevar",type:"checkbox",defaultValue:!0}]}},public:{services:{title:"Servicios Públicos",icon:"🏢",fields:[{name:"serviceTypes",label:"Tipos de trámite",type:"multicheckbox",options:["Registro","Consulta","Certificación","Licencia","Permiso","Renovación"],defaultValue:["Registro","Consulta"]},{name:"priorityService",label:"Servicio prioritario",type:"checkbox",defaultValue:!0},{name:"onlineAppointments",label:"Citas en línea",type:"checkbox",defaultValue:!0},{name:"documentVerification",label:"Verificación de documentos",type:"checkbox",defaultValue:!0},{name:"queueManagement",label:"Gestión de filas",type:"checkbox",defaultValue:!0},{name:"appointmentRequired",label:"Cita obligatoria",type:"checkbox",defaultValue:!0},{name:"walkInService",label:"Atención sin cita",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios de Atención",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes"]},{name:"openingTime",label:"Hora de atención",type:"time",defaultValue:"08:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"16:00"},{name:"appointmentDuration",label:"Tiempo por trámite (min)",type:"select",options:[10,15,20,30,45],defaultValue:15},{name:"maxDailyAppointments",label:"Citas máximas por día",type:"number",defaultValue:50},{name:"priorityQueue",label:"Cola prioritaria (adulto mayor, discapacidad)",type:"checkbox",defaultValue:!0}]},public:{title:"Configuración Pública",icon:"📋",fields:[{name:"digitalDocuments",label:"Documentos digitales",type:"checkbox",defaultValue:!0},{name:"paymentIntegration",label:"Pagos en línea",type:"checkbox",defaultValue:!1},{name:"notificationSystem",label:"Sistema de notificaciones",type:"checkbox",defaultValue:!0},{name:"surveyEnabled",label:"Encuesta de satisfacción",type:"checkbox",defaultValue:!0},{name:"statisticsTracking",label:"Seguimiento de estadísticas",type:"checkbox",defaultValue:!0}]}},veterinary:{services:{title:"Servicios Veterinarios",icon:"🐾",fields:[{name:"serviceTypes",label:"Tipos de servicio",type:"multicheckbox",options:["Consulta general","Vacunación","Cirugía","Peluquería","Grooming","Guardería","Hospedaje","Emergencias"],defaultValue:["Consulta general","Vacunación"]},{name:"petTypes",label:"Tipos de mascota",type:"multicheckbox",options:["Perros","Gatos","Aves","Roedores","Reptiles","Otros"],defaultValue:["Perros","Gatos"]},{name:"emergencyService",label:"Servicio de emergencias 24/7",type:"checkbox",defaultValue:!1},{name:"homeService",label:"Servicio a domicilio",type:"checkbox",defaultValue:!1},{name:"loyaltyProgram",label:"Programa de fidelización",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios Veterinarios",icon:"🕐",fields:[{name:"workDays",label:"Días de atención",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"08:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"18:00"},{name:"appointmentDuration",label:"Duración consulta (min)",type:"select",options:[15,20,30,45,60],defaultValue:30},{name:"groomingDuration",label:"Duración grooming (min)",type:"select",options:[30,45,60,90],defaultValue:60},{name:"boardingCheckIn",label:"Check-in guardería (hora)",type:"time",defaultValue:"08:00"},{name:"boardingCheckOut",label:"Check-out guardería (hora)",type:"time",defaultValue:"18:00"}]},veterinary:{title:"Configuración Veterinaria",icon:"⚕️",fields:[{name:"patientRecords",label:"Historia clínica digital",type:"checkbox",defaultValue:!0},{name:"vaccinationReminders",label:"Recordatorios de vacunación",type:"checkbox",defaultValue:!0},{name:"petPhotos",label:"Fotos de mascotas",type:"checkbox",defaultValue:!0},{name:"ownerCommunication",label:"Comunicación con dueños",type:"checkbox",defaultValue:!0},{name:"prescriptionManagement",label:"Gestión de medicamentos",type:"checkbox",defaultValue:!0},{name:"boardingRules",label:"Reglas de hospedaje",type:"textarea",placeholder:"Reglas específicas para guardería y hospedaje"}]}},education:{courses:{title:"Configuración de Cursos",icon:"🎓",fields:[{name:"courseTypes",label:"Tipos de curso",type:"multicheckbox",options:["Presencial","Virtual","Semipresencial","Intensivo","Diplomado","Taller"],defaultValue:["Presencial","Virtual"]},{name:"maxStudentsPerGroup",label:"Estudiantes máximo por grupo",type:"number",defaultValue:20},{name:"advanceBooking",label:"Días anticipo para inscripciones",type:"select",options:[7,14,30,60],defaultValue:14},{name:"enrollmentDeadline",label:"Días antes de iniciar curso",type:"select",options:[1,3,5,7],defaultValue:3},{name:"waitingList",label:"Lista de espera",type:"checkbox",defaultValue:!0},{name:"certification",label:"Certificación incluida",type:"checkbox",defaultValue:!0},{name:"placementTest",label:"Prueba de nivelación",type:"checkbox",defaultValue:!1}]},schedule:{title:"Horarios Académicos",icon:"🕐",fields:[{name:"workDays",label:"Días de clase",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Miércoles","Viernes"]},{name:"morningStart",label:"Inicio jornada mañana",type:"time",defaultValue:"07:00"},{name:"morningEnd",label:"Fin jornada mañana",type:"time",defaultValue:"12:00"},{name:"afternoonStart",label:"Inicio jornada tarde",type:"time",defaultValue:"14:00"},{name:"afternoonEnd",label:"Fin jornada tarde",type:"time",defaultValue:"18:00"},{name:"classDuration",label:"Duración clase (min)",type:"select",options:[45,60,90,120],defaultValue:60},{name:"breakTime",label:"Tiempo de descanso (min)",type:"select",options:[5,10,15,30],defaultValue:15}]},enrollment:{title:"Configuración de Matrículas",icon:"📝",fields:[{name:"registrationFee",label:"Costo de matrícula",type:"number",defaultValue:0},{name:"paymentPlans",label:"Planes de pago",type:"multicheckbox",options:["Contado","Mensual","Bimestral","Trimestral"],defaultValue:["Contado","Mensual"]},{name:"onlinePayment",label:"Pagos en línea",type:"checkbox",defaultValue:!0},{name:"refundPolicy",label:"Política de reembolso",type:"select",options:["Sin reembolso","Parcial","Total"],defaultValue:"Parcial"},{name:"siblingDiscount",label:"Descuento por hermanos",type:"checkbox",defaultValue:!0},{name:"earlyBirdDiscount",label:"Descuento por pago anticipado",type:"checkbox",defaultValue:!0}]}},retail:{services:{title:"Configuración de Atención",icon:"🛍️",fields:[{name:"queueSystem",label:"Sistema de turnos",type:"checkbox",defaultValue:!0},{name:"appointmentService",label:"Citas programadas",type:"checkbox",defaultValue:!1},{name:"loyaltyCard",label:"Tarjeta de fidelización",type:"checkbox",defaultValue:!0},{name:"giftCards",label:"Tarjetas de regalo",type:"checkbox",defaultValue:!0},{name:"personalShopping",label:"Compras personalizadas",type:"checkbox",defaultValue:!1},{name:"homeDelivery",label:"Entrega a domicilio",type:"checkbox",defaultValue:!0},{name:"clickAndCollect",label:"Recoger en tienda",type:"checkbox",defaultValue:!0}]},schedule:{title:"Horarios de Atención",icon:"🕐",fields:[{name:"workDays",label:"Días laborables",type:"multicheckbox",options:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],defaultValue:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},{name:"openingTime",label:"Hora de apertura",type:"time",defaultValue:"09:00"},{name:"closingTime",label:"Hora de cierre",type:"time",defaultValue:"19:00"},{name:"holidaySchedule",label:"Horario festivo",type:"textarea",placeholder:"Horarios especiales en días festivos"},{name:"expressCheckout",label:"Caja express (clientes ≤5)",type:"checkbox",defaultValue:!0}]},sales:{title:"Configuración de Ventas",icon:"💰",fields:[{name:"currency",label:"Moneda",type:"select",options:["COP","USD"],defaultValue:"COP"},{name:"taxRate",label:"Impuesto (%)",type:"number",defaultValue:19},{name:"paymentMethods",label:"Métodos de pago",type:"multicheckbox",options:["Efectivo","Débito","Crédito","Transferencia","PSE","Nequi","Daviplata"],defaultValue:["Efectivo","Débito","Crédito"]},{name:"installments",label:"Cuotas sin interés",type:"checkbox",defaultValue:!1},{name:"discountPolicy",label:"Política de descuentos",type:"select",options:["Solo empleados","Solo temporadas","Siempre"],defaultValue:"Solo temporadas"},{name:"returnsPolicy",label:"Política de devoluciones (días)",type:"select",options:[7,15,30,60],defaultValue:30}]}}}[m])==null?void 0:y[f])||{title:"Configuración",icon:"⚙️",fields:[]}})(e,t),l=Rt(s.fields.reduce((m,f)=>(f.type==="checkbox"?m[f.name]=q0():f.type==="number"?m[f.name]=Kt().positive():m[f.name]=oe(),m),{})),{register:d,handleSubmit:p,watch:h,setValue:v,reset:x,formState:{errors:b}}=Xt({resolver:Zt(l),defaultValues:w()||s.fields.reduce((m,f)=>(m[f.name]=f.defaultValue,m),{})});function w(){try{const m=localStorage.getItem(i);return m?JSON.parse(m):null}catch{return null}}C.useEffect(()=>{const m=w();x(m||s.fields.reduce((f,g)=>(f[g.name]=g.defaultValue,f),{}))},[e,t,x]);const k=async m=>{r(!0);try{await new Promise(f=>setTimeout(f,800)),localStorage.setItem(i,JSON.stringify(m)),D.success("Configuración guardada exitosamente")}catch{D.error("Error al guardar la configuración")}finally{r(!1)}},S=m=>{const f=h(m.name);switch(m.type){case"checkbox":return a(Ai,{children:c(Xf,{children:[a(Gl,{type:"checkbox",...d(m.name)}),a(Di,{style:{margin:0},children:m.label})]})},m.name);case"select":return c(Ai,{children:[a(Di,{children:m.label}),c(qS,{...d(m.name),children:[a("option",{value:"",children:"Seleccionar opción"}),m.options.map(g=>a("option",{value:g,children:g},g))]})]},m.name);case"multicheckbox":return c(Ai,{children:[a(Di,{children:m.label}),a(YS,{children:m.options.map(g=>c(Xf,{children:[a(Gl,{type:"checkbox",value:g,checked:(f==null?void 0:f.includes(g))||!1,onChange:y=>{const N=f||[];y.target.checked?v(m.name,[...N,g]):v(m.name,N.filter(T=>T!==g))}}),a("span",{children:g})]},g))})]},m.name);case"textarea":return c(Ai,{children:[a(Di,{children:m.label}),a(GS,{...d(m.name),placeholder:m.placeholder})]},m.name);default:return c(Ai,{children:[a(Di,{children:m.label}),a(Gl,{type:m.type,...d(m.name),placeholder:m.placeholder})]},m.name)}};return a(jS,{children:c(BS,{children:[a(US,{icon:s.icon,children:s.title}),c("form",{onSubmit:p(k),children:[a(HS,{children:s.fields.map(S)}),a(WS,{children:a(QS,{type:"submit",className:"primary",disabled:n,children:n?"Guardando...":"Guardar Configuración"})})]})]})})},KS=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,JS=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,XS=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,ZS=u.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  margin-top: 12px;
  font-size: 14px;
`,eC=u.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,tC=u.button`
  flex: 1;
  padding: 16px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid ${e=>e.active?"var(--primary-color)":"transparent"};
  color: ${e=>e.active?"var(--primary-color)":"#6c757d"};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: none;
    min-width: 120px;
    padding: 12px 16px;
    font-size: 12px;
  }
`,nC=u.div`
  padding: 32px;
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,rC=()=>{var v;const{businessType:e,businessConfig:t,getBusinessComponents:n}=cn(),[r,i]=C.useState("roles"),o=n(e),s=x=>({beauty:[{id:"services",label:"Servicios de Belleza",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"pricing",label:"Precios",component:xe}],health:[{id:"specialties",label:"Especialidades",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"medical",label:"Configuración Médica",component:xe}],fitness:[{id:"classes",label:"Clases y Servicios",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"memberships",label:"Membresías",component:xe}],professional:[{id:"services",label:"Servicios Profesionales",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"billing",label:"Facturación",component:xe}],technical:[{id:"services",label:"Servicios Técnicos",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"technical",label:"Configuración Técnica",component:xe}],restaurant:[{id:"reservations",label:"Reservas",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"menu",label:"Menú",component:xe}],public:[{id:"services",label:"Servicios Públicos",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"public",label:"Configuración Pública",component:xe}],veterinary:[{id:"services",label:"Servicios Veterinarios",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"veterinary",label:"Configuración Veterinaria",component:xe}],education:[{id:"courses",label:"Cursos",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"enrollment",label:"Inscripciones",component:xe}],retail:[{id:"services",label:"Atención",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"sales",label:"Ventas",component:xe}],other:[{id:"general",label:"Configuración General",component:xe},{id:"schedule",label:"Horarios",component:xe},{id:"services",label:"Servicios",component:xe}]})[x]||[];C.useEffect(()=>{i("roles")},[e]);const l=[{id:"roles",label:"Roles y Permisos",component:VS}],d=s(e),p=[...l,...d],h=(v=p.find(x=>x.id===r))==null?void 0:v.component;return a(KS,{children:c(JS,{children:[c(XS,{children:[a("h1",{children:"Configuración del Sistema"}),a("p",{children:"Administra roles, permisos y configuraciones específicas del negocio"}),c(ZS,{children:[a("span",{children:o.icon}),a("span",{children:o.name})]})]}),a(eC,{children:p.map(x=>a(tC,{active:r===x.id,onClick:()=>i(x.id),children:x.label},x.id))}),a(nC,{children:h&&a(h,{businessType:e,tabId:r})})]})})},iC=Rt({firstName:oe().required("Los nombres son requeridos"),lastName:oe().required("Los apellidos son requeridos"),identification:oe().matches(/^[0-9]+$/,"Solo números").required("La identificación es requerida"),address:oe().required("La dirección es requerida"),phone:oe().matches(/^[0-9+\-\s()]+$/,"Formato de teléfono inválido").required("El teléfono es requerido"),email:oe().email("Email inválido").required("El email es requerido")}),oC=u.div`
  max-width: 800px;
  margin: 0 auto;
`,aC=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,sC=u.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '👤';
    font-size: 24px;
  }
`,lC=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Lr=u.div`
  display: flex;
  flex-direction: column;
`,Dr=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Fi=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`,cC=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`,dC=u(Lr)`
  grid-column: 1 / -1;
`,uC=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Zf=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,pC=()=>{const[e,t]=C.useState(!1),{register:n,handleSubmit:r,setValue:i,watch:o,formState:{errors:s}}=Xt({resolver:Zt(iC),defaultValues:{firstName:"",lastName:"",identification:"",address:"",phone:"",email:""}}),l=v=>v.replace(/\b\w/g,x=>x.toUpperCase()),d=(v,x)=>{const b=l(x);i(v,b)},p=async v=>{t(!0);try{console.log("Datos de usuario:",v),await new Promise(x=>setTimeout(x,1e3)),D.success("Información general guardada exitosamente")}catch{D.error("Error al guardar la información")}finally{t(!1)}},h=()=>{i("firstName",""),i("lastName",""),i("identification",""),i("address",""),i("phone",""),i("email","")};return a(oC,{children:c(aC,{children:[a(sC,{children:"Información General del Usuario"}),c("form",{onSubmit:r(p),children:[c(lC,{children:[c(Lr,{children:[a(Dr,{children:"Nombres"}),a(Fi,{type:"text",placeholder:"Ej: Juan Carlos",...n("firstName"),onChange:v=>d("firstName",v.target.value)}),s.firstName&&a("span",{style:{color:"red",fontSize:"12px"},children:s.firstName.message})]}),c(Lr,{children:[a(Dr,{children:"Apellidos"}),a(Fi,{type:"text",placeholder:"Ej: Pérez López",...n("lastName"),onChange:v=>d("lastName",v.target.value)}),s.lastName&&a("span",{style:{color:"red",fontSize:"12px"},children:s.lastName.message})]}),c(Lr,{children:[a(Dr,{children:"Identificación"}),a(Fi,{type:"text",placeholder:"Ej: 1234567890",...n("identification"),maxLength:"20"}),s.identification&&a("span",{style:{color:"red",fontSize:"12px"},children:s.identification.message})]}),c(Lr,{children:[a(Dr,{children:"Teléfono"}),a(Fi,{type:"text",placeholder:"Ej: +57 300 123 4567",...n("phone")}),s.phone&&a("span",{style:{color:"red",fontSize:"12px"},children:s.phone.message})]}),c(Lr,{children:[a(Dr,{children:"Email"}),a(Fi,{type:"email",placeholder:"Ej: usuario@empresa.com",...n("email")}),s.email&&a("span",{style:{color:"red",fontSize:"12px"},children:s.email.message})]}),c(dC,{children:[a(Dr,{children:"Dirección"}),a(cC,{placeholder:"Dirección completa del usuario",...n("address")}),s.address&&a("span",{style:{color:"red",fontSize:"12px"},children:s.address.message})]})]}),c(uC,{children:[a(Zf,{type:"button",className:"secondary",onClick:h,children:"Limpiar"}),a(Zf,{type:"submit",className:"primary",disabled:e,children:e?"Guardando...":"Guardar Información"})]})]})]})})},fC=Rt({username:oe().min(3,"Mínimo 3 caracteres").required("El usuario es requerido"),password:oe().min(6,"Mínimo 6 caracteres").required("La contraseña es requerida"),confirmPassword:oe().oneOf([n2("password")],"Las contraseñas no coinciden").required("Confirme la contraseña"),role:oe().required("El rol es requerido")}),mC=u.div`
  max-width: 600px;
  margin: 0 auto;
`,hC=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,gC=u.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '🔐';
    font-size: 24px;
  }
`,xC=u.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
`,la=u.div`
  display: flex;
  flex-direction: column;
`,ca=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Yl=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[type="password"] {
    font-family: 'Courier New', monospace;
  }
`,vC=u.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`,bC=u.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`,yC=u.div`
  flex: 1;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;

  .fill {
    height: 100%;
    background: ${e=>{switch(e.strength){case"weak":return"#ef4444";case"medium":return"#f59e0b";case"strong":return"#10b981";default:return"#e5e7eb"}}};
    width: ${e=>{switch(e.strength){case"weak":return"33%";case"medium":return"66%";case"strong":return"100%";default:return"0%"}}};
    transition: all 0.3s ease;
  }
`,wC=u.span`
  font-size: 12px;
  color: ${e=>{switch(e.strength){case"weak":return"#ef4444";case"medium":return"#f59e0b";case"strong":return"#10b981";default:return"#6b7280"}}};
  font-weight: 600;
`,kC=u.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  border-left: 4px solid #667eea;

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding-left: 16px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.4;
  }
`,SC=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,em=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,CC=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{register:i,handleSubmit:o,watch:s,formState:{errors:l}}=Xt({resolver:Zt(fC),defaultValues:{username:"",password:"",confirmPassword:"",role:""}}),d=s("password"),h=(w=>{if(!w)return{strength:"none",text:""};let k=0;return w.length>=6&&k++,w.length>=8&&k++,/[a-z]/.test(w)&&k++,/[A-Z]/.test(w)&&k++,/[0-9]/.test(w)&&k++,/[^A-Za-z0-9]/.test(w)&&k++,k<=2?{strength:"weak",text:"Débil"}:k<=4?{strength:"medium",text:"Media"}:{strength:"strong",text:"Fuerte"}})(d),v=async w=>{t(!0);try{const{confirmPassword:k,...S}=w;console.log("Datos de acceso:",S),await new Promise(m=>setTimeout(m,1e3)),D.success("Credenciales de acceso guardadas exitosamente")}catch{D.error("Error al guardar las credenciales")}finally{t(!1)}},x=()=>{setValue("username",""),setValue("password",""),setValue("confirmPassword",""),setValue("role","")},b=[{value:"admin",label:"Administrador"},{value:"auditor",label:"Auditor"},{value:"vendedor",label:"Vendedor"},{value:"cobrador",label:"Cobrador"},{value:"asesor",label:"Asesor"},{value:"empleado",label:"Empleado"},{value:"cliente",label:"Cliente"}];return a(mC,{children:c(hC,{children:[a(gC,{children:"Usuario de Acceso"}),c("form",{onSubmit:o(v),children:[c(xC,{children:[c(la,{children:[a(ca,{children:"Nombre de Usuario"}),a(Yl,{type:"text",placeholder:"Ej: usuario123",...i("username"),autoComplete:"username"}),l.username&&a("span",{style:{color:"red",fontSize:"12px"},children:l.username.message})]}),c(la,{children:[a(ca,{children:"Rol del Usuario"}),c(vC,{...i("role"),children:[a("option",{value:"",children:"Seleccionar rol"}),b.map(w=>a("option",{value:w.value,children:w.label},w.value))]}),l.role&&a("span",{style:{color:"red",fontSize:"12px"},children:l.role.message})]}),c(la,{children:[a(ca,{children:"Contraseña"}),c("div",{style:{position:"relative"},children:[a(Yl,{type:n?"text":"password",placeholder:"Mínimo 6 caracteres",...i("password"),autoComplete:"new-password"}),a("button",{type:"button",onClick:()=>r(!n),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#6b7280",fontSize:"14px"},children:n?"🙈":"👁️"})]}),d&&c(bC,{children:[a(yC,{strength:h.strength,children:a("div",{className:"fill"})}),a(wC,{strength:h.strength,children:h.text})]}),l.password&&a("span",{style:{color:"red",fontSize:"12px"},children:l.password.message})]}),c(la,{children:[a(ca,{children:"Confirmar Contraseña"}),a(Yl,{type:"password",placeholder:"Repita la contraseña",...i("confirmPassword"),autoComplete:"new-password"}),l.confirmPassword&&a("span",{style:{color:"red",fontSize:"12px"},children:l.confirmPassword.message})]})]}),c(kC,{children:[a("h4",{children:"Recomendaciones de Seguridad"}),c("ul",{children:[a("li",{children:"Use al menos 8 caracteres"}),a("li",{children:"Incluya mayúsculas, minúsculas y números"}),a("li",{children:"Use caracteres especiales para mayor seguridad"}),a("li",{children:"No reutilice contraseñas de otros servicios"}),a("li",{children:"Cambie la contraseña periódicamente"})]})]}),c(SC,{children:[a(em,{type:"button",className:"secondary",onClick:x,children:"Limpiar"}),a(em,{type:"submit",className:"primary",disabled:e,children:e?"Guardando...":"Guardar Credenciales"})]})]})]})})},EC=u.div`
  max-width: 800px;
  margin: 0 auto;
`,NC=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,zC=u.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '📷';
    font-size: 24px;
  }
`,tm=u.div`
  margin-bottom: 32px;
`,nm=u.h4`
  margin: 0 0 16px 0;
  color: #374151;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '${e=>e.icon}';
    font-size: 18px;
  }
`,rm=u.div`
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  background: ${e=>e.isDragOver?"#f0f9ff":"#fafafa"};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #667eea;
    background: #f0f9ff;
  }

  ${e=>e.isDragOver&&`
    border-color: #667eea;
    background: #f0f9ff;
  `}
`,im=u.div`
  font-size: 48px;
  color: #9ca3af;
  margin-bottom: 16px;
`,om=u.div`
  color: #6b7280;
  margin-bottom: 8px;

  h5 {
    margin: 0 0 4px 0;
    color: #374151;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`,am=u.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,TC=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
`,sm=u.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>e.type==="photo"?"#10b981":"#f59e0b"};
`,lm=u.div`
  width: 100%;
  height: 120px;
  border-radius: 6px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '${e=>e.type==="photo"?"📷":"📄"}';
    font-size: 32px;
    color: #9ca3af;
  }

  ${e=>e.hasImage&&`
    &::before {
      display: none;
    }
  `}
`,cm=u.div`
  h6 {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #374151;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #6b7280;
    line-height: 1.3;
  }
`,dm=u.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }
`,$C=u.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,PC=u.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  border-left: 4px solid #667eea;

  h5 {
    margin: 0 0 8px 0;
    color: #374151;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding-left: 16px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.4;
  }
`,_C=()=>{const[e,t]=C.useState(null),[n,r]=C.useState([]),[i,o]=C.useState(!1),[s,l]=C.useState(!1),[d,p]=C.useState(!1),h=async f=>{const g=f.target.files[0];if(g){if(g.size>3*1024*1024){D.error("La imagen debe ser menor a 3MB");return}if(!g.type.startsWith("image/")){D.error("Solo se permiten archivos de imagen");return}l(!0);try{const y=await px(g,{maxWidth:400,maxHeight:400,quality:.8,outputName:`photo_${Date.now()}`});t({file:y.file,preview:y.previewUrl,name:`${y.file.name}`,size:Ln(y.webpSize),originalSize:Ln(y.originalSize),savedPercent:y.savedPercent}),y.savedPercent>0&&D.success(`Foto optimizada: ${Ln(y.originalSize)} → ${Ln(y.webpSize)} (${y.savedPercent}% menos)`,{autoClose:3e3})}catch(y){console.error("Error al procesar la imagen:",y),D.error("Error al procesar la imagen. Intenta con otro archivo.")}finally{l(!1),f.target.value=""}}},v=f=>{const g=Array.from(f.target.files);if(g.length===0)return;const y=g.filter(N=>["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/plain"].includes(N.type)&&N.size<=3*1024*1024);if(y.length!==g.length&&D.warning("Algunos archivos fueron rechazados (tipo no válido o tamaño > 3MB)"),y.length===0){D.error("No se encontraron archivos válidos para subir");return}try{const N=y.map(T=>({file:T,name:T.name,size:(T.size/1024/1024).toFixed(2)+" MB",type:T.type}));r(T=>[...T,...N]),D.success(`${y.length} documento(s) agregado(s) correctamente`)}catch(N){console.error("Error al procesar documentos:",N),D.error("Error al procesar los documentos")}},x=()=>{t(null)},b=f=>{r(g=>g.filter((y,N)=>N!==f))},w=f=>{f.preventDefault(),o(!0)},k=f=>{f.preventDefault(),o(!1)},S=f=>{f.preventDefault(),o(!1);const g=Array.from(f.dataTransfer.files),y=g.filter(T=>T.type.startsWith("image/")),N=g.filter(T=>["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/plain"].includes(T.type));y.length>0&&!e&&h({target:{files:[y[0]]}}),N.length>0&&v({target:{files:N}})},m=async()=>{p(!0);try{console.log("Foto:",e),console.log("Documentos:",n),await new Promise(f=>setTimeout(f,1500)),D.success("Archivos guardados exitosamente")}catch{D.error("Error al guardar los archivos")}finally{p(!1)}};return a(EC,{children:c(NC,{children:[a(zC,{children:"Fotos y Documentos"}),c(tm,{children:[a(nm,{icon:"📸",children:"Foto de Perfil"}),c(rm,{isDragOver:i,onDragOver:w,onDragLeave:k,onDrop:S,children:[a(im,{children:"📷"}),c(om,{children:[a("h5",{children:"Subir Foto de Perfil"}),a("p",{children:"Arrastra y suelta una imagen aquí, o haz clic para seleccionar"})]}),a(am,{type:"file",accept:"image/*",onChange:h})]})]}),c(tm,{children:[a(nm,{icon:"📄",children:"Documentos"}),c(rm,{isDragOver:i,onDragOver:w,onDragLeave:k,onDrop:S,children:[a(im,{children:"📄"}),c(om,{children:[a("h5",{children:"Subir Documentos"}),a("p",{children:"Arrastra y suelta archivos aquí, o haz clic para seleccionar (PDF, DOC, TXT)"})]}),a(am,{type:"file",accept:".pdf,.doc,.docx,.txt",multiple:!0,onChange:v})]})]}),c(PC,{children:[a("h5",{children:"Requisitos de Archivos"}),c("ul",{children:[a("li",{children:"Máximo 3MB por archivo"}),a("li",{children:"Imágenes: JPG, PNG, GIF, WEBP (se convierten automáticamente)"}),a("li",{children:"Documentos: PDF, DOC, DOCX, TXT"}),a("li",{children:"Hasta 5 documentos por usuario"})]})]}),c(TC,{children:[e&&c(sm,{type:"photo",children:[c(lm,{hasImage:!0,type:"photo",children:[a("img",{src:e.preview,alt:"Foto de perfil"}),a(dm,{onClick:x,children:"×"})]}),c(cm,{children:[a("h6",{children:"Foto de Perfil"}),c("p",{children:[e.name,a("br",{}),e.size]})]})]}),n.map((f,g)=>c(sm,{type:"document",children:[a(lm,{type:"document",children:a(dm,{onClick:()=>b(g),children:"×"})}),c(cm,{children:[a("h6",{children:f.name}),c("p",{children:[f.size,a("br",{}),f.type]})]})]},g))]}),(e||n.length>0)&&a($C,{onClick:m,disabled:d,children:d?"Guardando...":"Guardar Archivos"})]})})},AC=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,DC=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
`,FC=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,OC=u.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,IC=u.button`
  flex: 1;
  padding: 16px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid ${e=>e.active?"#667eea":"transparent"};
  color: ${e=>e.active?"#667eea":"#6c757d"};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: #667eea;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: none;
    min-width: 120px;
    padding: 12px 16px;
    font-size: 12px;
  }
`,LC=u.div`
  padding: 32px;
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,RC=()=>{var i;const[e,t]=C.useState("general"),n=[{id:"general",label:"Información General",component:pC},{id:"access",label:"Usuario de Acceso",component:CC},{id:"photos",label:"Fotos y Documentos",component:_C}],r=(i=n.find(o=>o.id===e))==null?void 0:i.component;return a(AC,{children:c(DC,{children:[c(FC,{children:[a("h1",{children:"Gestión de Usuarios"}),a("p",{children:"Crea y administra los usuarios del sistema TurnoFlow"})]}),a(OC,{children:n.map(o=>a(IC,{active:e===o.id,onClick:()=>t(o.id),children:o.label},o.id))}),a(LC,{children:r&&a(r,{})})]})})},MC=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,VC=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`,jC=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,BC=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,UC=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`,HC=u.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '👥';
    font-size: 24px;
  }
`,qC=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rr=u.div`
  display: flex;
  flex-direction: column;
`,Fr=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Oi=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`,GC=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`,YC=u(Rr)`
  grid-column: 1 / -1;
`,WC=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,um=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,QC=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,KC=u.h3`
  margin: 0 0 20px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '📋';
    font-size: 24px;
  }
`,JC=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateY(-1px);
  }

  .client-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #667eea;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
    }

    .details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .actions {
      width: 100%;
      justify-content: flex-end;
    }
  }
`,pm=u.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.delete {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }
`,mx="turnoflow_clientes",fm=[{id:1,firstName:"María",lastName:"García López",identification:"1234567890",phone:"+57 300 123 4567",email:"maria.garcia@email.com",address:"Calle 123 #45-67, Bogotá"},{id:2,firstName:"Carlos",lastName:"Rodríguez",identification:"0987654321",phone:"+57 301 987 6543",email:"carlos.rodriguez@email.com",address:"Carrera 45 #12-34, Medellín"},{id:3,firstName:"Ana",lastName:"Martínez",identification:"1122334455",phone:"+57 310 555 6677",email:"ana.martinez@email.com",address:"Av. Siempre Viva 742, Cali"},{id:4,firstName:"Pedro",lastName:"Gómez",identification:"5544332211",phone:"+57 320 888 9900",email:"pedro.gomez@email.com",address:"Cra 8 #23-45, Barranquilla"}],XC=()=>{try{const e=localStorage.getItem(mx);return e?JSON.parse(e):fm}catch{return fm}},ZC=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(XC);C.useEffect(()=>{localStorage.setItem(mx,JSON.stringify(n))},[n]);const i=Rt({firstName:oe().required("Los nombres son requeridos"),lastName:oe().required("Los apellidos son requeridos"),identification:oe().matches(/^[0-9]+$/,"Solo números").required("La identificación es requerida"),phone:oe().matches(/^[0-9+\-\s()]+$/,"Formato de teléfono inválido").required("El teléfono es requerido"),email:oe().email("Email inválido").required("El email es requerido"),address:oe().required("La dirección es requerida")}),{register:o,handleSubmit:s,reset:l,formState:{errors:d}}=Xt({resolver:Zt(i)}),p=async x=>{t(!0);try{await new Promise(w=>setTimeout(w,1e3));const b={id:n.length+1,...x};r(w=>[...w,b]),l(),D.success("Cliente registrado exitosamente")}catch{D.error("Error al registrar el cliente")}finally{t(!1)}},h=x=>{D.info("Funcionalidad de edición próximamente")},v=async x=>{if(window.confirm("¿Está seguro de que desea eliminar este cliente?")){t(!0);try{await new Promise(b=>setTimeout(b,500)),r(b=>b.filter(w=>w.id!==x)),D.success("Cliente eliminado exitosamente")}catch{D.error("Error al eliminar el cliente")}finally{t(!1)}}};return a(MC,{children:c(VC,{children:[c(jC,{children:[a("h1",{children:"Gestión de Clientes"}),a("p",{children:"Registra y administra los clientes de tu negocio"})]}),c(BC,{children:[c(UC,{children:[a(HC,{children:"Registrar Nuevo Cliente"}),c("form",{onSubmit:s(p),children:[c(qC,{children:[c(Rr,{children:[a(Fr,{children:"Nombres"}),a(Oi,{type:"text",placeholder:"Ej: María José",...o("firstName")}),d.firstName&&a("span",{style:{color:"red",fontSize:"12px"},children:d.firstName.message})]}),c(Rr,{children:[a(Fr,{children:"Apellidos"}),a(Oi,{type:"text",placeholder:"Ej: García López",...o("lastName")}),d.lastName&&a("span",{style:{color:"red",fontSize:"12px"},children:d.lastName.message})]}),c(Rr,{children:[a(Fr,{children:"Identificación"}),a(Oi,{type:"text",placeholder:"Ej: 1234567890",...o("identification"),maxLength:"20"}),d.identification&&a("span",{style:{color:"red",fontSize:"12px"},children:d.identification.message})]}),c(Rr,{children:[a(Fr,{children:"Teléfono"}),a(Oi,{type:"text",placeholder:"Ej: +57 300 123 4567",...o("phone")}),d.phone&&a("span",{style:{color:"red",fontSize:"12px"},children:d.phone.message})]}),c(Rr,{children:[a(Fr,{children:"Email"}),a(Oi,{type:"email",placeholder:"Ej: cliente@email.com",...o("email")}),d.email&&a("span",{style:{color:"red",fontSize:"12px"},children:d.email.message})]}),c(YC,{children:[a(Fr,{children:"Dirección"}),a(GC,{placeholder:"Dirección completa del cliente",...o("address")}),d.address&&a("span",{style:{color:"red",fontSize:"12px"},children:d.address.message})]})]}),c(WC,{children:[a(um,{type:"button",className:"secondary",onClick:()=>l(),children:"Limpiar"}),a(um,{type:"submit",className:"primary",disabled:e,children:e?"Registrando...":"Registrar Cliente"})]})]})]}),c(QC,{children:[a(KC,{children:"Clientes Registrados"}),n.map(x=>c(JC,{children:[c("div",{className:"client-info",children:[c("div",{className:"avatar",children:[x.firstName.charAt(0),x.lastName.charAt(0)]}),c("div",{className:"details",children:[c("h4",{children:[x.firstName," ",x.lastName]}),c("p",{children:[x.email," • ",x.phone]})]})]}),c("div",{className:"actions",children:[a(pm,{className:"edit",onClick:()=>h(),disabled:e,children:"Editar"}),a(pm,{className:"delete",onClick:()=>v(x.id),disabled:e,children:"Eliminar"})]})]},x.id)),n.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"👥"}),a("p",{children:"No hay clientes registrados aún"})]})]})]})]})})},e4=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,t4=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,n4=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,r4=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,i4=u.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  margin-bottom: 32px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,o4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Wl=u.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`,Ql=u.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,a4=u.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,s4=u.button`
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,l4=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,c4=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,d4=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    margin: 0;
    color: #1f2937;
    font-size: 20px;
  }

  .count {
    background: #667eea;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
`,u4=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,p4=u.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }

  .appointment-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: ${e=>{switch(e.status){case"confirmed":return"#10b981";case"pending":return"#f59e0b";case"completed":return"#6b7280";case"cancelled":return"#ef4444";default:return"#667eea"}}};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
  }

  .appointment-details {
    h4 {
      margin: 0 0 4px 0;
      color: #1f2937;
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 14px;
    }

    .client-name {
      color: #374151;
      font-weight: 500;
    }
  }
`,f4=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .time {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }

  .status {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    ${e=>{switch(e.status){case"confirmed":return"background: #d1fae5; color: #065f46;";case"pending":return"background: #fef3c7; color: #92400e;";case"completed":return"background: #e5e7eb; color: #374151;";case"cancelled":return"background: #fee2e2; color: #991b1b;";default:return"background: #e0e7ff; color: #3730a3;"}}}
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`,mm=u.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.cancel {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,m4=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,h4=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,g4=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,x4=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ii=u.div`
  display: flex;
  flex-direction: column;
`,Nn=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Kl=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,v4=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,b4=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,hm=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,y4=()=>{const[e,t]=C.useState([{id:1,clientName:"María García",service:"Corte de cabello",date:"2024-01-15",time:"10:00",status:"confirmed",notes:"Cliente habitual"},{id:2,clientName:"Carlos Rodríguez",service:"Tratamiento facial",date:"2024-01-15",time:"14:30",status:"pending",notes:"Primera visita"},{id:3,clientName:"Ana López",service:"Manicure",date:"2024-01-15",time:"16:00",status:"completed",notes:"Servicio completado"},{id:4,clientName:"Juan Pérez",service:"Pedicure",date:"2024-01-16",time:"09:00",status:"cancelled",notes:"Cancelado por cliente"}]),[n,r]=C.useState(e),[i,o]=C.useState(!1),[s,l]=C.useState({status:"",date:"",service:""}),d=Rt({clientName:oe().required("El nombre del cliente es requerido"),service:oe().required("El servicio es requerido"),date:oe().required("La fecha es requerida"),time:oe().required("La hora es requerida"),notes:oe()}),{register:p,handleSubmit:h,reset:v,formState:{errors:x}}=Xt({resolver:Zt(d)});C.useEffect(()=>{b()},[s,e]);const b=()=>{let g=[...e];s.status&&(g=g.filter(y=>y.status===s.status)),s.date&&(g=g.filter(y=>y.date===s.date)),s.service&&(g=g.filter(y=>y.service.toLowerCase().includes(s.service.toLowerCase()))),r(g)},w=(g,y)=>{l(N=>({...N,[g]:y}))},k=async g=>{try{const y={id:e.length+1,clientName:g.clientName,service:g.service,date:g.date,time:g.time,status:"pending",notes:g.notes||""};t(N=>[...N,y]),o(!1),v(),D.success("Cita agendada exitosamente")}catch{D.error("Error al agendar la cita")}},S=async(g,y)=>{try{t(N=>N.map(T=>T.id===g?{...T,status:y}:T)),D.success("Estado de la cita actualizado")}catch{D.error("Error al actualizar el estado")}},m=g=>{switch(g){case"confirmed":return"✅";case"pending":return"⏳";case"completed":return"✓";case"cancelled":return"❌";default:return"📅"}},f=["Corte de cabello","Tratamiento facial","Manicure","Pedicure","Tinte","Peinado","Depilación","Masaje"];return c(e4,{children:[c(t4,{children:[c(n4,{children:[a("h1",{children:"Agenda de Citas"}),a("p",{children:"Control y gestión del agendamiento de turnos"})]}),c(r4,{children:[c(i4,{children:[c(o4,{children:[c(Wl,{children:[a(Nn,{children:"Estado"}),c(Ql,{value:s.status,onChange:g=>w("status",g.target.value),children:[a("option",{value:"",children:"Todos los estados"}),a("option",{value:"pending",children:"Pendiente"}),a("option",{value:"confirmed",children:"Confirmada"}),a("option",{value:"completed",children:"Completada"}),a("option",{value:"cancelled",children:"Cancelada"})]})]}),c(Wl,{children:[a(Nn,{children:"Fecha"}),a(a4,{type:"date",value:s.date,onChange:g=>w("date",g.target.value)})]}),c(Wl,{children:[a(Nn,{children:"Servicio"}),c(Ql,{value:s.service,onChange:g=>w("service",g.target.value),children:[a("option",{value:"",children:"Todos los servicios"}),f.map(g=>a("option",{value:g,children:g},g))]})]}),a(s4,{onClick:b,children:"Aplicar Filtros"})]}),a(l4,{onClick:()=>o(!0),children:"Nueva Cita"})]}),c(c4,{children:[c(d4,{children:[a("h3",{children:"Citas Agendadas"}),c("div",{className:"count",children:[n.length," citas"]})]}),n.length===0?c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"📅"}),a("p",{children:"No hay citas que coincidan con los filtros"})]}):n.map(g=>c(u4,{children:[c(p4,{status:g.status,children:[a("div",{className:"appointment-icon",children:m(g.status)}),c("div",{className:"appointment-details",children:[a("h4",{children:g.service}),a("p",{children:a("span",{className:"client-name",children:g.clientName})}),g.notes&&a("p",{children:g.notes})]})]}),c(f4,{status:g.status,children:[c("div",{className:"time",children:[g.time," - ",new Date(g.date).toLocaleDateString("es-CO")]}),a("div",{className:"status",children:g.status}),c("div",{className:"actions",children:[g.status==="pending"&&a(mm,{className:"edit",onClick:()=>S(g.id,"confirmed"),children:"Confirmar"}),g.status!=="completed"&&g.status!=="cancelled"&&a(mm,{className:"cancel",onClick:()=>S(g.id,"cancelled"),children:"Cancelar"})]})]})]},g.id))]})]})]}),i&&a(m4,{children:c(h4,{children:[c(g4,{children:[a("h2",{children:"Nueva Cita"}),a("button",{className:"close",onClick:()=>o(!1),children:"×"})]}),c("form",{onSubmit:h(k),children:[c(x4,{children:[c(Ii,{children:[a(Nn,{children:"Nombre del Cliente"}),a(Kl,{type:"text",placeholder:"Ej: María García",...p("clientName")}),x.clientName&&a("span",{style:{color:"red",fontSize:"12px"},children:x.clientName.message})]}),c(Ii,{children:[a(Nn,{children:"Servicio"}),c(Ql,{...p("service"),children:[a("option",{value:"",children:"Seleccionar servicio"}),f.map(g=>a("option",{value:g,children:g},g))]}),x.service&&a("span",{style:{color:"red",fontSize:"12px"},children:x.service.message})]}),c(Ii,{children:[a(Nn,{children:"Fecha"}),a(Kl,{type:"date",...p("date")}),x.date&&a("span",{style:{color:"red",fontSize:"12px"},children:x.date.message})]}),c(Ii,{children:[a(Nn,{children:"Hora"}),a(Kl,{type:"time",...p("time")}),x.time&&a("span",{style:{color:"red",fontSize:"12px"},children:x.time.message})]}),c(Ii,{style:{gridColumn:"1 / -1"},children:[a(Nn,{children:"Notas (opcional)"}),a(v4,{placeholder:"Información adicional sobre la cita...",...p("notes")})]})]}),c(b4,{children:[a(hm,{type:"button",className:"secondary",onClick:()=>o(!1),children:"Cancelar"}),a(hm,{type:"submit",className:"primary",children:"Agendar Cita"})]})]})]})})]})},w4=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,k4=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,S4=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,C4=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,E4=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`,N4=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: none;
  }

  input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  .search-icon {
    color: #6b7280;
    font-size: 20px;
  }
`,z4=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,T4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$4=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.active?"#10b981":"transparent"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .service-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .service-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${e=>e.active?"background: #d1fae5; color: #065f46;":"background: #fee2e2; color: #991b1b;"}
    }
  }

  .service-name {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .service-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .service-price {
    font-size: 24px;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 16px;
  }

  .service-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #9ca3af;

    .duration {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .service-actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
`,gm=u.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.toggle {
    background: ${e=>e.active?"#dc3545":"#10b981"};
    color: white;

    &:hover {
      background: ${e=>e.active?"#c82333":"#059669"};
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,P4=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,_4=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,A4=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,D4=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Li=u.div`
  display: flex;
  flex-direction: column;
`,Ri=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Jl=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,F4=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,O4=u.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,I4=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,xm=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,hx="turnoflow_servicios",vm=[{id:1,name:"Corte de Cabello Mujer",description:"Corte moderno con lavado y secado incluido",price:35e3,duration:60,category:"Peluquería",active:!0},{id:2,name:"Tratamiento Facial",description:"Limpieza profunda con productos premium",price:8e4,duration:90,category:"Estética",active:!0},{id:3,name:"Manicure + Pedicure",description:"Servicio completo de uñas con esmaltado permanente",price:6e4,duration:120,category:"Uñas",active:!0},{id:4,name:"Tinte de Cabello",description:"Coloración profesional con productos de calidad",price:12e4,duration:180,category:"Peluquería",active:!1},{id:5,name:"Corte de Cabello Hombre",description:"Corte moderno para caballero",price:25e3,duration:45,category:"Peluquería",active:!0},{id:6,name:"Gel Fijador",description:"Gel para peinado con fijación fuerte",category:"Peinado",stock:18,minStock:12,unitPrice:1e4},{id:7,name:"Consulta Médica General",description:"Consulta médica completa",category:"Medicina General",stock:0,minStock:0,unitPrice:5e4},{id:8,name:"Limpieza Dental",description:"Limpieza dental profesional",category:"Odontología",stock:0,minStock:0,unitPrice:8e4},{id:9,name:"Clase de Yoga",description:"Sesión de yoga de 60 minutos",category:"Yoga",stock:15,minStock:5,unitPrice:25e3},{id:10,name:"Asesoría Legal",description:"Consulta legal especializada",category:"Abogados",stock:0,minStock:0,unitPrice:12e4},{id:11,name:"Reparación de Celular",description:"Reparación de celulares",category:"Reparación",stock:0,minStock:0,unitPrice:0},{id:12,name:"Consulta Veterinaria",description:"Consulta veterinaria general",category:"Consultas Veterinarias",stock:0,minStock:0,unitPrice:6e4}],L4=()=>{try{const e=localStorage.getItem(hx);return e?JSON.parse(e):vm}catch{return vm}},R4=()=>{const[e,t]=C.useState(L4),[n,r]=C.useState([]),[i,o]=C.useState(""),[s,l]=C.useState(!1),[d,p]=C.useState(null);C.useEffect(()=>{localStorage.setItem(hx,JSON.stringify(e))},[e]);const h=Rt({name:oe().required("El nombre del servicio es requerido"),description:oe().required("La descripción es requerida"),price:Kt().positive("El precio debe ser mayor a 0").required("El precio es requerido"),duration:Kt().positive("La duración debe ser mayor a 0").required("La duración es requerida"),category:oe().required("La categoría es requerida")}),{register:v,handleSubmit:x,reset:b,setValue:w,formState:{errors:k}}=Xt({resolver:Zt(h)}),S=["Cuidado Capilar","Cuidado Facial","Cuidado Corporal","Uñas","Peinado","Maquillaje","Bienestar","Medicina General","Odontología","Dermatología","Psicología","Fisioterapia","Yoga","Pilates","Spinning","Abogados","Contadores","Consultores","Reparación","Mantenimiento","Diagnóstico","Reservas","Consultas Veterinarias","Grooming","Trámites","Educación","Otros"],m=$=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format($),f=$=>{o($);const H=e.filter(j=>j.name.toLowerCase().includes($.toLowerCase())||j.category.toLowerCase().includes($.toLowerCase())||j.description.toLowerCase().includes($.toLowerCase()));r(H)},g=()=>{p(null),b(),l(!0)},y=$=>{p($),w("name",$.name),w("description",$.description),w("price",$.price),w("duration",$.duration),w("category",$.category),l(!0)},N=async $=>{try{t(H=>H.map(j=>j.id===$?{...j,active:!j.active}:j)),D.success("Estado del servicio actualizado")}catch{D.error("Error al actualizar el servicio")}},T=async $=>{try{if(d)t(H=>H.map(j=>j.id===d.id?{...j,...$}:j)),D.success("Servicio actualizado exitosamente");else{const H={id:e.length+1,...$,active:!0};t(j=>[...j,H]),D.success("Servicio creado exitosamente")}l(!1),b(),p(null)}catch{D.error("Error al guardar el servicio")}},O=$=>({Peluquería:"✂️",Estética:"💄",Uñas:"💅",Bienestar:"🧘",Depilación:"🪒",Maquillaje:"🎭",Masajes:"💆",Otros:"🔧"})[$]||"🔧";return c(w4,{children:[c(k4,{children:[c(S4,{children:[a("h1",{children:"Gestión de Servicios"}),a("p",{children:"Administra los servicios que ofreces a tus clientes"})]}),c(C4,{children:[c(E4,{children:[c(N4,{children:[a("div",{className:"search-icon",children:"🔍"}),a("input",{type:"text",placeholder:"Buscar servicios...",value:i,onChange:$=>f($.target.value)})]}),a(z4,{onClick:g,children:"Nuevo Servicio"})]}),a(T4,{children:n.map($=>c($4,{active:$.active,children:[c("div",{className:"service-header",children:[a("div",{className:"service-icon",children:O($.category)}),a("div",{className:"service-status",active:$.active,children:$.active?"Activo":"Inactivo"})]}),a("div",{className:"service-name",children:$.name}),a("div",{className:"service-description",children:$.description}),a("div",{className:"service-price",children:m($.price)}),c("div",{className:"service-meta",children:[a("div",{className:"category",children:$.category}),c("div",{className:"duration",children:["⏱️ ",$.duration," min"]})]}),c("div",{className:"service-actions",children:[a(gm,{className:"edit",onClick:()=>y($),children:"Editar"}),a(gm,{className:"toggle",active:$.active,onClick:()=>N($.id),children:$.active?"Desactivar":"Activar"})]})]},$.id))}),n.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🔧"}),a("p",{children:"No se encontraron servicios"})]})]})]}),s&&a(P4,{children:c(_4,{children:[c(A4,{children:[a("h2",{children:d?"Editar Servicio":"Nuevo Servicio"}),a("button",{className:"close",onClick:()=>l(!1),children:"×"})]}),c("form",{onSubmit:x(T),children:[c(D4,{children:[c(Li,{children:[a(Ri,{children:"Nombre del Servicio"}),a(Jl,{type:"text",placeholder:"Ej: Corte de Cabello Mujer",...v("name")}),k.name&&a("span",{style:{color:"red",fontSize:"12px"},children:k.name.message})]}),c(Li,{children:[a(Ri,{children:"Categoría"}),c(O4,{...v("category"),children:[a("option",{value:"",children:"Seleccionar categoría"}),S.map($=>a("option",{value:$,children:$},$))]}),k.category&&a("span",{style:{color:"red",fontSize:"12px"},children:k.category.message})]}),c(Li,{children:[a(Ri,{children:"Precio (COP)"}),a(Jl,{type:"number",placeholder:"35000",...v("price")}),k.price&&a("span",{style:{color:"red",fontSize:"12px"},children:k.price.message})]}),c(Li,{children:[a(Ri,{children:"Duración (minutos)"}),a(Jl,{type:"number",placeholder:"60",...v("duration")}),k.duration&&a("span",{style:{color:"red",fontSize:"12px"},children:k.duration.message})]}),c(Li,{style:{gridColumn:"1 / -1"},children:[a(Ri,{children:"Descripción"}),a(F4,{placeholder:"Describe el servicio que ofreces...",...v("description")}),k.description&&a("span",{style:{color:"red",fontSize:"12px"},children:k.description.message})]})]}),c(I4,{children:[a(xm,{type:"button",className:"secondary",onClick:()=>l(!1),children:"Cancelar"}),a(xm,{type:"submit",className:"primary",children:d?"Actualizar Servicio":"Crear Servicio"})]})]})]})})]})},M4=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,V4=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,j4=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,B4=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,U4=u.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,H4=u.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);

  .label {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .number {
    font-size: 64px;
    font-weight: 900;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  .client-info {
    margin-top: 12px;
    font-size: 16px;
    opacity: 0.95;
  }
`,q4=u.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,Xl=u.button`
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &.call {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
    }
  }

  &.complete {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    }
  }

  &.skip {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-2px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,G4=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,bm=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
      content: '${e=>e.icon}';
      font-size: 20px;
    }
  }
`,ym=u.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a8a8a8;
    }
  }
`,wm=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${e=>{switch(e.status){case"waiting":return"#f8f9fa";case"called":return"#fff3cd";case"in_progress":return"#d1ecf1";case"completed":return"#d4edda";case"missed":return"#f8d7da";default:return"#f8f9fa"}}};
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .turno-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .turno-number {
      font-size: 24px;
      font-weight: 900;
      color: ${e=>{switch(e.status){case"waiting":return"#6b7280";case"called":return"#856404";case"in_progress":return"#0c5460";case"completed":return"#155724";case"missed":return"#721c24";default:return"#6b7280"}}};
      min-width: 60px;
      text-align: center;
    }

    .client-details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }

      .service {
        color: #374151;
        font-weight: 500;
      }
    }
  }

  .turno-actions {
    display: flex;
    gap: 8px;
  }
`,da=u.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.call {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.start {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &.complete {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &.miss {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Y4=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
`,W4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ua=u.div`
  text-align: center;

  .stat-value {
    font-size: 32px;
    font-weight: 900;
    color: ${e=>e.color||"#667eea"};
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: #6b7280;
    text-transform: uppercase;
    font-weight: 600;
  }
`,Q4=()=>{const[e,t]=C.useState([{id:1,numero:"A001",cliente:"María García",servicio:"Corte de Cabello",estado:"waiting",horaLlegada:"2024-01-15 09:30:00",horaLlamado:null,horaInicio:null,horaFin:null},{id:2,numero:"A002",cliente:"Carlos Rodríguez",servicio:"Tratamiento Facial",estado:"waiting",horaLlegada:"2024-01-15 09:45:00",horaLlamado:null,horaInicio:null,horaFin:null},{id:3,numero:"A003",cliente:"Ana López",servicio:"Manicure",estado:"called",horaLlegada:"2024-01-15 10:00:00",horaLlamado:"2024-01-15 10:15:00",horaInicio:null,horaFin:null},{id:4,numero:"A004",cliente:"Juan Pérez",servicio:"Pedicure",estado:"in_progress",horaLlegada:"2024-01-15 10:30:00",horaLlamado:"2024-01-15 10:32:00",horaInicio:"2024-01-15 10:35:00",horaFin:null},{id:5,numero:"A005",cliente:"Laura Martínez",servicio:"Tinte de Cabello",estado:"completed",horaLlegada:"2024-01-15 09:00:00",horaLlamado:"2024-01-15 09:05:00",horaInicio:"2024-01-15 09:10:00",horaFin:"2024-01-15 11:30:00"}]),[n,r]=C.useState(null),[i,o]=C.useState(!0);C.useEffect(()=>{const S=e.find(m=>m.estado==="called"||m.estado==="in_progress");r(S||null)},[e]);const s=S=>{i&&console.log("Reproduciendo audio:",S)},l=async S=>{try{const m=new Date().toISOString();t(g=>g.map(y=>y.id===S?{...y,estado:"called",horaLlamado:m}:y));const f=e.find(g=>g.id===S);s(`Turno ${f.numero}. ${f.cliente}`),D.success(`Turno ${f.numero} llamado`)}catch{D.error("Error al llamar el turno")}},d=async S=>{try{const m=new Date().toISOString();t(f=>f.map(g=>g.id===S?{...g,estado:"in_progress",horaInicio:m}:g)),D.success("Turno iniciado")}catch{D.error("Error al iniciar el turno")}},p=async S=>{try{const m=new Date().toISOString();t(f=>f.map(g=>g.id===S?{...g,estado:"completed",horaFin:m}:g)),D.success("Turno completado")}catch{D.error("Error al completar el turno")}},h=async S=>{try{t(m=>m.map(f=>f.id===S?{...f,estado:"missed"}:f)),D.warning("Turno marcado como perdido")}catch{D.error("Error al marcar el turno como perdido")}},v=S=>{switch(S){case"waiting":return"Esperando";case"called":return"Llamado";case"in_progress":return"En Progreso";case"completed":return"Completado";case"missed":return"Perdido";default:return"Desconocido"}},x=e.filter(S=>S.estado==="waiting"),b=e.filter(S=>["called","in_progress"].includes(S.estado)),w=e.filter(S=>S.estado==="completed"),k={total:e.length,waiting:x.length,active:b.length,completed:w.length};return a(M4,{children:c(V4,{children:[c(j4,{children:[a("h1",{children:"Sistema de Turnos"}),a("p",{children:"Gestión de turnos en tiempo real"})]}),c(B4,{children:[c(U4,{children:[c(H4,{children:[a("div",{className:"label",children:"Turno Actual"}),a("div",{className:"number",children:n?n.numero:"--"}),n&&c("div",{className:"client-info",children:[n.cliente," - ",n.servicio]})]}),c(q4,{children:[a(Xl,{className:"call",onClick:()=>{const S=x[0];S?l(S.id):D.info("No hay turnos en espera")},disabled:x.length===0,children:"Llamar Siguiente"}),n&&n.estado==="called"&&a(Xl,{className:"complete",onClick:()=>d(n.id),children:"Iniciar Atención"}),n&&n.estado==="in_progress"&&a(Xl,{className:"complete",onClick:()=>p(n.id),children:"Finalizar"})]}),a("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:c("label",{style:{fontSize:"14px",color:"#374151"},children:["Audio:",a("input",{type:"checkbox",checked:i,onChange:S=>o(S.target.checked),style:{marginLeft:"8px"}})]})})]}),c(G4,{children:[c(bm,{icon:"⏳",children:[c("h3",{children:["Turnos en Espera (",x.length,")"]}),c(ym,{children:[x.map(S=>c(wm,{status:S.estado,children:[c("div",{className:"turno-info",children:[a("div",{className:"turno-number",children:S.numero}),c("div",{className:"client-details",children:[a("h4",{children:S.cliente}),a("p",{className:"service",children:S.servicio}),a("p",{children:new Date(S.horaLlegada).toLocaleTimeString("es-CO")})]})]}),a("div",{className:"turno-actions",children:a(da,{className:"call",onClick:()=>l(S.id),children:"Llamar"})})]},S.id)),x.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎉"}),a("p",{children:"No hay turnos en espera"})]})]})]}),c(bm,{icon:"⚡",children:[c("h3",{children:["Turnos Activos (",b.length,")"]}),c(ym,{children:[b.map(S=>c(wm,{status:S.estado,children:[c("div",{className:"turno-info",children:[a("div",{className:"turno-number",children:S.numero}),c("div",{className:"client-details",children:[a("h4",{children:S.cliente}),a("p",{className:"service",children:S.servicio}),a("p",{children:v(S.estado)})]})]}),c("div",{className:"turno-actions",children:[S.estado==="called"&&c(Yt,{children:[a(da,{className:"start",onClick:()=>d(S.id),children:"Iniciar"}),a(da,{className:"miss",onClick:()=>h(S.id),children:"Perdió"})]}),S.estado==="in_progress"&&a(da,{className:"complete",onClick:()=>p(S.id),children:"Completar"})]})]},S.id)),b.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"💤"}),a("p",{children:"No hay turnos activos"})]})]})]})]}),c(Y4,{children:[a("h3",{children:"Estadísticas del Día"}),c(W4,{children:[c(ua,{color:"#6b7280",children:[a("div",{className:"stat-value",children:k.total}),a("div",{className:"stat-label",children:"Total"})]}),c(ua,{color:"#f59e0b",children:[a("div",{className:"stat-value",children:k.waiting}),a("div",{className:"stat-label",children:"Esperando"})]}),c(ua,{color:"#17a2b8",children:[a("div",{className:"stat-value",children:k.active}),a("div",{className:"stat-label",children:"Activos"})]}),c(ua,{color:"#10b981",children:[a("div",{className:"stat-value",children:k.completed}),a("div",{className:"stat-label",children:"Completados"})]})]})]})]})]})})},K4=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,J4=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,X4=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,Z4=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,e6=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`,t6=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 400px;

  input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  .search-icon {
    color: #6b7280;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
`,n6=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,r6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,i6=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.active?new Date(e.endDate)<new Date?"#fef3c7":"#10b981":"#fee2e2"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .promotion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .promotion-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .promotion-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${e=>e.active?new Date(e.endDate)<new Date?"background: #fef3c7; color: #92400e;":"background: #d1fae5; color: #065f46;":"background: #fee2e2; color: #991b1b;"}
    }
  }

  .promotion-title {
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .promotion-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .promotion-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 12px;

    .detail-item {
      display: flex;
      flex-direction: column;

      .label {
        color: #9ca3af;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 2px;
      }

      .value {
        color: #374151;
        font-weight: 500;
      }
    }
  }

  .promotion-actions {
    display: flex;
    gap: 8px;
  }
`,Zl=u.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.toggle {
    background: ${e=>e.active?"#dc3545":"#10b981"};
    color: white;

    &:hover {
      background: ${e=>e.active?"#c82333":"#059669"};
    }
  }

  &.participants {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,o6=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,a6=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,s6=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,l6=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ar=u.div`
  display: flex;
  flex-direction: column;
`,tr=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,Mi=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,c6=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,d6=u.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,u6=u(ar)`
  grid-column: 1 / -1;
`,p6=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,km=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: var(--primary-color);
    color: white;

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,f6=()=>{const[e,t]=C.useState([{id:1,title:"Descuento 20% en Cortes",description:"Aprovecha nuestro descuento especial en todos los cortes de cabello para damas.",type:"discount",discountPercentage:20,startDate:"2024-01-15",endDate:"2024-01-31",active:!0,participants:45,maxParticipants:100},{id:2,title:"Rifa de Productos Premium",description:"Participa en nuestra rifa mensual y gana productos de cuidado capilar premium.",type:"raffle",startDate:"2024-01-01",endDate:"2024-01-31",active:!0,participants:120,maxParticipants:null},{id:3,title:"Día del Cliente",description:"Evento especial con tratamientos gratuitos y regalos para nuestros clientes fieles.",type:"event",startDate:"2024-01-20",endDate:"2024-01-20",active:!0,participants:25,maxParticipants:50},{id:4,title:"Campaña Redes Sociales",description:"Comparte nuestras publicaciones y gana sesiones gratuitas de tratamientos.",type:"campaign",startDate:"2024-01-10",endDate:"2024-02-10",active:!1,participants:89,maxParticipants:200},{id:5,title:"Regalo de Cumpleaños",description:"Tratamiento facial gratuito para clientes que cumplen años este mes.",type:"gift",startDate:"2024-01-01",endDate:"2024-01-31",active:!0,participants:12,maxParticipants:null}]),[n,r]=C.useState(e),[i,o]=C.useState(""),[s,l]=C.useState(!1),[d,p]=C.useState(null),h=[{value:"discount",label:"Descuento"},{value:"raffle",label:"Rifa"},{value:"event",label:"Evento"},{value:"campaign",label:"Campaña Publicitaria"},{value:"gift",label:"Regalo"}],v=Rt({title:oe().required("El título es requerido"),description:oe().required("La descripción es requerida"),type:oe().required("El tipo es requerido"),discountPercentage:Kt().when("type",{is:"discount",then:Kt().min(1).max(100).required("El porcentaje de descuento es requerido")}),startDate:oe().required("La fecha de inicio es requerida"),endDate:oe().required("La fecha de fin es requerida"),maxParticipants:Kt().nullable().positive("Debe ser un número positivo")}),{register:x,handleSubmit:b,reset:w,setValue:k,watch:S,formState:{errors:m}}=Xt({resolver:Zt(v)}),f=S("type"),g=A=>{o(A);const V=e.filter(B=>B.title.toLowerCase().includes(A.toLowerCase())||B.description.toLowerCase().includes(A.toLowerCase())||B.type.toLowerCase().includes(A.toLowerCase()));r(V)},y=()=>{p(null),w(),l(!0)},N=A=>{p(A),k("title",A.title),k("description",A.description),k("type",A.type),k("discountPercentage",A.discountPercentage||""),k("startDate",A.startDate),k("endDate",A.endDate),k("maxParticipants",A.maxParticipants||""),l(!0)},T=async A=>{try{t(V=>V.map(B=>B.id===A?{...B,active:!B.active}:B)),D.success("Estado de la promoción actualizado")}catch{D.error("Error al actualizar la promoción")}},O=async A=>{try{if(d)t(V=>V.map(B=>B.id===d.id?{...B,...A,participants:B.participants}:B)),D.success("Promoción actualizada exitosamente");else{const V={id:e.length+1,...A,active:!0,participants:0};t(B=>[...B,V]),D.success("Promoción creada exitosamente")}l(!1),w(),p(null)}catch{D.error("Error al guardar la promoción")}},$=A=>({discount:"💰",raffle:"🎰",event:"🎉",campaign:"📢",gift:"🎁"})[A]||"🎊",H=A=>({discount:"Descuento",raffle:"Rifa",event:"Evento",campaign:"Campaña",gift:"Regalo"})[A]||A,j=A=>new Date(A).toLocaleDateString("es-CO",{year:"numeric",month:"short",day:"numeric"});return c(K4,{children:[c(J4,{children:[c(X4,{children:[a("h1",{children:"Gestión de Promociones"}),a("p",{children:"Crea y administra promociones, rifas y campañas para tus clientes"})]}),c(Z4,{children:[c(e6,{children:[c(t6,{children:[a("div",{className:"search-icon",children:"🔍"}),a("input",{type:"text",placeholder:"Buscar promociones...",value:i,onChange:A=>g(A.target.value)})]}),a(n6,{onClick:y,children:"Nueva Promoción"})]}),a(r6,{children:n.map(A=>c(i6,{active:A.active,endDate:A.endDate,children:[c("div",{className:"promotion-header",children:[a("div",{className:"promotion-icon",children:$(A.type)}),a("div",{className:"promotion-status",children:A.active?new Date(A.endDate)<new Date?"Vencida":"Activa":"Inactiva"})]}),a("div",{className:"promotion-title",children:A.title}),a("div",{className:"promotion-description",children:A.description}),c("div",{className:"promotion-details",children:[c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Tipo"}),a("div",{className:"value",children:H(A.type)})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Participantes"}),c("div",{className:"value",children:[A.participants,A.maxParticipants&&`/${A.maxParticipants}`]})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Inicio"}),a("div",{className:"value",children:j(A.startDate)})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Fin"}),a("div",{className:"value",children:j(A.endDate)})]}),A.discountPercentage&&c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Descuento"}),c("div",{className:"value",children:[A.discountPercentage,"%"]})]})]}),c("div",{className:"promotion-actions",children:[a(Zl,{className:"edit",onClick:()=>N(A),children:"Editar"}),a(Zl,{className:"participants",onClick:()=>D.info("Funcionalidad próximamente"),children:"Ver Participantes"}),a(Zl,{className:"toggle",active:A.active,onClick:()=>T(A.id),children:A.active?"Desactivar":"Activar"})]})]},A.id))}),n.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎊"}),a("p",{children:"No se encontraron promociones"})]})]})]}),s&&a(o6,{children:c(a6,{children:[c(s6,{children:[a("h2",{children:d?"Editar Promoción":"Nueva Promoción"}),a("button",{className:"close",onClick:()=>l(!1),children:"×"})]}),c("form",{onSubmit:b(O),children:[c(l6,{children:[c(ar,{children:[a(tr,{children:"Título de la Promoción"}),a(Mi,{type:"text",placeholder:"Ej: Descuento 20% en Cortes",...x("title")}),m.title&&a("span",{style:{color:"red",fontSize:"12px"},children:m.title.message})]}),c(ar,{children:[a(tr,{children:"Tipo de Promoción"}),c(d6,{...x("type"),children:[a("option",{value:"",children:"Seleccionar tipo"}),h.map(A=>a("option",{value:A.value,children:A.label},A.value))]}),m.type&&a("span",{style:{color:"red",fontSize:"12px"},children:m.type.message})]}),f==="discount"&&c(ar,{children:[a(tr,{children:"Porcentaje de Descuento"}),a(Mi,{type:"number",placeholder:"20",min:"1",max:"100",...x("discountPercentage")}),m.discountPercentage&&a("span",{style:{color:"red",fontSize:"12px"},children:m.discountPercentage.message})]}),c(ar,{children:[a(tr,{children:"Fecha de Inicio"}),a(Mi,{type:"date",...x("startDate")}),m.startDate&&a("span",{style:{color:"red",fontSize:"12px"},children:m.startDate.message})]}),c(ar,{children:[a(tr,{children:"Fecha de Fin"}),a(Mi,{type:"date",...x("endDate")}),m.endDate&&a("span",{style:{color:"red",fontSize:"12px"},children:m.endDate.message})]}),c(ar,{children:[a(tr,{children:"Máximo de Participantes (opcional)"}),a(Mi,{type:"number",placeholder:"Sin límite",min:"1",...x("maxParticipants")}),m.maxParticipants&&a("span",{style:{color:"red",fontSize:"12px"},children:m.maxParticipants.message})]}),c(u6,{children:[a(tr,{children:"Descripción"}),a(c6,{placeholder:"Describe la promoción y sus condiciones...",...x("description")}),m.description&&a("span",{style:{color:"red",fontSize:"12px"},children:m.description.message})]})]}),c(p6,{children:[a(km,{type:"button",className:"secondary",onClick:()=>l(!1),children:"Cancelar"}),a(km,{type:"submit",className:"primary",children:d?"Actualizar Promoción":"Crear Promoción"})]})]})]})})]})},m6=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,h6=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,g6=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,x6=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,v6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,pa=u.div`
  background: ${e=>e.bgColor||"white"};
  color: ${e=>e.textColor||"#374151"};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  .summary-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.8;
  }

  .summary-value {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  .summary-label {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 600;
  }
`,b6=u.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 20px;
  margin-bottom: 32px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Sm=u.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`,ec=u.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,y6=u.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,Cm=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &.danger {
    background: #ef4444;
    color: white;

    &:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,w6=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`,k6=u.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a8a8a8;
    }
  }
`,S6=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${e=>e.type==="income"?"#f0fdf4":"#fef2f2"};
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid ${e=>e.type==="income"?"#10b981":"#ef4444"};

  .transaction-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .transaction-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: ${e=>e.type==="income"?"#10b981":"#ef4444"};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: white;
    }

    .transaction-details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .transaction-amount {
    text-align: right;

    .amount {
      font-size: 18px;
      font-weight: 700;
      color: ${e=>e.type==="income"?"#059669":"#dc2626"};
    }

    .method {
      font-size: 12px;
      color: #9ca3af;
      margin-top: 2px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .transaction-amount {
      align-self: flex-end;
    }
  }
`,Em=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Nm=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,zm=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,C6=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,fa=u.div`
  display: flex;
  flex-direction: column;
`,Or=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,E6=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,N6=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Tm=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ma=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,z6=()=>{const[e,t]=C.useState([{id:1,type:"income",amount:35e3,description:"Corte de cabello - María García",method:"Efectivo",timestamp:"2024-01-15 09:30:00",user:"Ana López"},{id:2,type:"income",amount:8e4,description:"Tratamiento facial - Carlos Rodríguez",method:"Tarjeta",timestamp:"2024-01-15 10:15:00",user:"Ana López"},{id:3,type:"expense",amount:15e3,description:"Compra de productos para tratamientos",method:"Efectivo",timestamp:"2024-01-15 11:00:00",user:"Ana López"},{id:4,type:"income",amount:6e4,description:"Manicure + Pedicure - Laura Martínez",method:"Transferencia",timestamp:"2024-01-15 14:30:00",user:"Ana López"},{id:5,type:"income",amount:25e3,description:"Tinte de cejas - Sofía Ramírez",method:"Efectivo",timestamp:"2024-01-15 15:45:00",user:"Ana López"},{id:6,type:"expense",amount:8e3,description:"Pago de servicios públicos",method:"Transferencia",timestamp:"2024-01-15 16:00:00",user:"Ana López"}]),[n,r]=C.useState(e),[i,o]=C.useState("2024-01-15"),[s,l]=C.useState(""),[d,p]=C.useState(!1),[h,v]=C.useState(!1),[x,b]=C.useState(!1),w=Rt({type:oe().required("El tipo es requerido"),amount:Kt().positive("El monto debe ser mayor a 0").required("El monto es requerido"),description:oe().required("La descripción es requerida"),method:oe().required("El método de pago es requerido")}),{register:k,handleSubmit:S,reset:m,formState:{errors:f}}=Xt({resolver:Zt(w)});C.useEffect(()=>{g()},[i,s,e]);const g=()=>{let A=[...e];i&&(A=A.filter(V=>V.timestamp.startsWith(i))),s&&(A=A.filter(V=>V.type===s)),r(A)},y=A=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(A),T=(()=>{const A=n.reduce((V,B)=>(B.type==="income"?V.income+=B.amount:V.expense+=B.amount,V),{income:0,expense:0});return A.balance=A.income-A.expense,A})(),O=async A=>{try{const V={id:e.length+1,...A,timestamp:new Date().toISOString().replace("T"," ").substring(0,19),user:"Ana López"};t(B=>[...B,V]),p(!1),m(),D.success("Movimiento registrado exitosamente")}catch{D.error("Error al registrar el movimiento")}},$=async()=>{b(!0);try{await new Promise(A=>setTimeout(A,2e3)),D.success("Arqueo cerrado exitosamente"),v(!1)}catch{D.error("Error al cerrar el arqueo")}finally{b(!1)}},H=A=>({Efectivo:"💵",Tarjeta:"💳",Transferencia:"🏦"})[A]||"💰",j=["Efectivo","Tarjeta","Transferencia"];return c(m6,{children:[c(h6,{children:[c(g6,{children:[a("h1",{children:"Control de Arqueo"}),a("p",{children:"Movimientos financieros y cierre de caja del día"})]}),c(x6,{children:[c(v6,{children:[c(pa,{bgColor:"#d1fae5",textColor:"#065f46",children:[a("div",{className:"summary-icon",children:"💰"}),a("div",{className:"summary-value",children:y(T.income)}),a("div",{className:"summary-label",children:"Ingresos"})]}),c(pa,{bgColor:"#fee2e2",textColor:"#991b1b",children:[a("div",{className:"summary-icon",children:"💸"}),a("div",{className:"summary-value",children:y(T.expense)}),a("div",{className:"summary-label",children:"Egresos"})]}),c(pa,{bgColor:"#dbeafe",textColor:"#1e40af",children:[a("div",{className:"summary-icon",children:"⚖️"}),a("div",{className:"summary-value",children:y(T.balance)}),a("div",{className:"summary-label",children:"Saldo"})]}),c(pa,{bgColor:"#f3e8ff",textColor:"#6b21a8",children:[a("div",{className:"summary-icon",children:"📊"}),a("div",{className:"summary-value",children:n.length}),a("div",{className:"summary-label",children:"Movimientos"})]})]}),c(b6,{children:[c(Sm,{children:[a(Or,{children:"Fecha"}),a(y6,{type:"date",value:i,onChange:A=>o(A.target.value)})]}),c(Sm,{children:[a(Or,{children:"Tipo"}),c(ec,{value:s,onChange:A=>l(A.target.value),children:[a("option",{value:"",children:"Todos"}),a("option",{value:"income",children:"Ingresos"}),a("option",{value:"expense",children:"Egresos"})]})]}),c("div",{style:{display:"flex",gap:"12px"},children:[a(Cm,{className:"primary",onClick:()=>p(!0),children:"Nuevo Movimiento"}),a(Cm,{className:"success",onClick:()=>v(!0),children:"Cerrar Arqueo"})]})]}),c(w6,{children:[a("h3",{style:{margin:"0 0 20px 0",color:"#1f2937"},children:"Movimientos del Día"}),a(k6,{children:n.map(A=>c(S6,{type:A.type,children:[c("div",{className:"transaction-info",children:[a("div",{className:"transaction-icon",children:A.type==="income"?"📈":"📉"}),c("div",{className:"transaction-details",children:[a("h4",{children:A.description}),c("p",{children:[new Date(A.timestamp).toLocaleString("es-CO")," •",A.user]})]})]}),c("div",{className:"transaction-amount",children:[c("div",{className:"amount",children:[A.type==="income"?"+":"-",y(A.amount)]}),c("div",{className:"method",children:[H(A.method)," ",A.method]})]})]},A.id))}),n.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"💼"}),a("p",{children:"No hay movimientos para la fecha seleccionada"})]})]})]})]}),d&&a(Em,{children:c(Nm,{children:[c(zm,{children:[a("h2",{children:"Nuevo Movimiento"}),a("button",{className:"close",onClick:()=>p(!1),children:"×"})]}),c("form",{onSubmit:S(O),children:[c(C6,{children:[c(fa,{children:[a(Or,{children:"Tipo de Movimiento"}),c(ec,{...k("type"),children:[a("option",{value:"",children:"Seleccionar tipo"}),a("option",{value:"income",children:"Ingreso"}),a("option",{value:"expense",children:"Egreso"})]}),f.type&&a("span",{style:{color:"red",fontSize:"12px"},children:f.type.message})]}),c(fa,{children:[a(Or,{children:"Monto (COP)"}),a(E6,{type:"number",placeholder:"35000",...k("amount")}),f.amount&&a("span",{style:{color:"red",fontSize:"12px"},children:f.amount.message})]}),c(fa,{children:[a(Or,{children:"Método de Pago"}),c(ec,{...k("method"),children:[a("option",{value:"",children:"Seleccionar método"}),j.map(A=>a("option",{value:A,children:A},A))]}),f.method&&a("span",{style:{color:"red",fontSize:"12px"},children:f.method.message})]}),c(fa,{style:{gridColumn:"1 / -1"},children:[a(Or,{children:"Descripción"}),a(N6,{placeholder:"Describe el movimiento financiero...",...k("description")}),f.description&&a("span",{style:{color:"red",fontSize:"12px"},children:f.description.message})]})]}),c(Tm,{children:[a(ma,{type:"button",className:"secondary",onClick:()=>p(!1),children:"Cancelar"}),a(ma,{type:"submit",className:"primary",children:"Registrar Movimiento"})]})]})]})}),h&&a(Em,{children:c(Nm,{children:[c(zm,{children:[a("h2",{children:"Cerrar Arqueo del Día"}),a("button",{className:"close",onClick:()=>v(!1),children:"×"})]}),c("div",{style:{marginBottom:"24px"},children:[a("h3",{style:{margin:"0 0 16px 0",color:"#1f2937"},children:"Resumen del Día"}),c("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[c("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"8px"},children:[a("div",{style:{fontSize:"18px",fontWeight:"700",color:"#059669"},children:y(T.income)}),a("div",{style:{fontSize:"14px",color:"#6b7280"},children:"Total Ingresos"})]}),c("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"8px"},children:[a("div",{style:{fontSize:"18px",fontWeight:"700",color:"#dc2626"},children:y(T.expense)}),a("div",{style:{fontSize:"14px",color:"#6b7280"},children:"Total Egresos"})]}),c("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"8px",gridColumn:"1 / -1"},children:[a("div",{style:{fontSize:"24px",fontWeight:"900",color:"#1e40af"},children:y(T.balance)}),a("div",{style:{fontSize:"14px",color:"#6b7280"},children:"Saldo Final"})]})]})]}),a("p",{style:{color:"#6b7280",marginBottom:"24px"},children:"Al cerrar el arqueo, se generará un reporte final del día y se preparará para el siguiente período."}),c(Tm,{children:[a(ma,{type:"button",className:"secondary",onClick:()=>v(!1),children:"Cancelar"}),a(ma,{type:"button",className:"success",onClick:$,disabled:x,children:x?"Cerrando...":"Confirmar Cierre"})]})]})})]})},T6=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,$6=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,P6=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,_6=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,A6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ha=u.div`
  background: ${e=>e.bgColor||"white"};
  color: ${e=>e.textColor||"#374151"};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  .stat-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.8;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 600;
  }
`,D6=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`,F6=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 400px;

  input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  .search-icon {
    color: #6b7280;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
`,O6=u.select`
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,I6=u.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,L6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,R6=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.stock<=e.minStock?"#fee2e2":e.stock<=e.minStock*1.5?"#fef3c7":"#10b981"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .product-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .product-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .product-status {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;

      ${e=>e.stock<=e.minStock?"background: #fee2e2; color: #991b1b;":e.stock<=e.minStock*1.5?"background: #fef3c7; color: #92400e;":"background: #d1fae5; color: #065f46;"}
    }
  }

  .product-name {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .product-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .product-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 12px;

    .detail-item {
      display: flex;
      flex-direction: column;

      .label {
        color: #9ca3af;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 2px;
      }

      .value {
        color: #374151;
        font-weight: 500;
      }
    }
  }

  .product-price {
    font-size: 20px;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 16px;
  }

  .product-actions {
    display: flex;
    gap: 8px;
  }
`,tc=u.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &.stock {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &.delete {
    background: #dc3545;
    color: white;

    &:hover {
      background: #c82333;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,M6=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,V6=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,j6=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,B6=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Mr=u.div`
  display: flex;
  flex-direction: column;
`,Ir=u.label`
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
`,ga=u.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,U6=u.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,H6=u.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,q6=u(Mr)`
  grid-column: 1 / -1';
`,G6=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,$m=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,gx="turnoflow_inventario",Pm=[{id:1,name:"Champú Profesional",description:"Champú anticaída con extractos naturales",category:"Cuidado Capilar",stock:25,minStock:10,unitPrice:15e3},{id:2,name:"Acondicionador Hidratante",description:"Acondicionador profundo que hidrata",category:"Cuidado Capilar",stock:8,minStock:10,unitPrice:18e3},{id:3,name:"Crema para Manos",description:"Crema hidratante con vitamina E",category:"Cuidado Corporal",stock:45,minStock:15,unitPrice:12e3},{id:4,name:"Máscara Facial",description:"Máscara purificante con arcilla verde",category:"Cuidado Facial",stock:3,minStock:8,unitPrice:25e3},{id:5,name:"Aceite para Cutículas",description:"Aceite nutritivo para cutículas",category:"Uñas",stock:12,minStock:5,unitPrice:8e3},{id:6,name:"Gel Fijador",description:"Gel para peinado con fijación fuerte",category:"Peinado",stock:18,minStock:12,unitPrice:1e4}],Y6=()=>{try{const e=localStorage.getItem(gx);return e?JSON.parse(e):Pm}catch{return Pm}},W6=()=>{const[e,t]=C.useState(Y6),[n,r]=C.useState(e),[i,o]=C.useState(""),[s,l]=C.useState(""),[d,p]=C.useState(!1),[h,v]=C.useState(null),[x,b]=C.useState(!1),w=Rt({name:oe().required("El nombre del producto es requerido"),description:oe().required("La descripción es requerida"),category:oe().required("La categoría es requerida"),stock:Kt().min(0,"El stock no puede ser negativo").required("El stock es requerido"),minStock:Kt().min(0,"El stock mínimo no puede ser negativo").required("El stock mínimo es requerido"),unitPrice:Kt().positive("El precio debe ser mayor a 0").required("El precio unitario es requerido")}),{register:k,handleSubmit:S,reset:m,setValue:f,formState:{errors:g}}=Xt({resolver:Zt(w)});C.useEffect(()=>{y()},[i,s,e]),C.useEffect(()=>{localStorage.setItem(gx,JSON.stringify(e))},[e]);const y=()=>{let L=[...e];i&&(L=L.filter(R=>R.name.toLowerCase().includes(i.toLowerCase())||R.description.toLowerCase().includes(i.toLowerCase()))),s&&(L=L.filter(R=>R.category===s)),r(L)},N=L=>{o(L)},T=L=>{l(L)},O=()=>{v(null),m(),p(!0)},$=L=>{v(L),f("name",L.name),f("description",L.description),f("category",L.category),f("stock",L.stock),f("minStock",L.minStock),f("unitPrice",L.unitPrice),p(!0)},H=async L=>{if(window.confirm("¿Está seguro de que desea eliminar este producto?")){b(!0);try{await new Promise(R=>setTimeout(R,500)),t(R=>R.filter(X=>X.id!==L)),D.success("Producto eliminado exitosamente")}catch{D.error("Error al eliminar el producto")}finally{b(!1)}}},j=async L=>{try{const R={...L,lastUpdated:new Date().toISOString().split("T")[0]};if(h)t(X=>X.map(_=>_.id===h.id?{..._,...R}:_)),D.success("Producto actualizado exitosamente");else{const X={id:e.length+1,...R};t(_=>[..._,X]),D.success("Producto creado exitosamente")}p(!1),m(),v(null)}catch{D.error("Error al guardar el producto")}},A=["Cuidado Capilar","Cuidado Facial","Cuidado Corporal","Uñas","Peinado","Maquillaje","Bienestar","Otros"],V=L=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(L),B=L=>({"Cuidado Capilar":"💇","Cuidado Facial":"🧴","Cuidado Corporal":"🧴",Uñas:"💅",Peinado:"💇",Maquillaje:"💄",Bienestar:"🧘",Otros:"📦"})[L]||"📦",re=()=>e.filter(L=>L.stock<=L.minStock).length,le=()=>e.reduce((L,R)=>L+R.stock*R.unitPrice,0),Z={totalProducts:e.length,lowStockProducts:re(),totalValue:le(),categoriesCount:new Set(e.map(L=>L.category)).size};return c(T6,{children:[c($6,{children:[c(P6,{children:[a("h1",{children:"Gestión de Inventario"}),a("p",{children:"Control y administración de productos y existencias"})]}),c(_6,{children:[c(A6,{children:[c(ha,{bgColor:"#d1fae5",textColor:"#065f46",children:[a("div",{className:"stat-icon",children:"📦"}),a("div",{className:"stat-value",children:Z.totalProducts}),a("div",{className:"stat-label",children:"Total Productos"})]}),c(ha,{bgColor:"#fee2e2",textColor:"#991b1b",children:[a("div",{className:"stat-icon",children:"⚠️"}),a("div",{className:"stat-value",children:Z.lowStockProducts}),a("div",{className:"stat-label",children:"Stock Bajo"})]}),c(ha,{bgColor:"#dbeafe",textColor:"#1e40af",children:[a("div",{className:"stat-icon",children:"💰"}),a("div",{className:"stat-value",children:V(Z.totalValue)}),a("div",{className:"stat-label",children:"Valor Total"})]}),c(ha,{bgColor:"#f3e8ff",textColor:"#6b21a8",children:[a("div",{className:"stat-icon",children:"🏷️"}),a("div",{className:"stat-value",children:Z.categoriesCount}),a("div",{className:"stat-label",children:"Categorías"})]})]}),c(D6,{children:[c("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[c(F6,{children:[a("div",{className:"search-icon",children:"🔍"}),a("input",{type:"text",placeholder:"Buscar productos...",value:i,onChange:L=>N(L.target.value)})]}),c(O6,{value:s,onChange:L=>T(L.target.value),children:[a("option",{value:"",children:"Todas las categorías"}),A.map(L=>a("option",{value:L,children:L},L))]})]}),a(I6,{onClick:O,children:"Nuevo Producto"})]}),a(L6,{children:n.map(L=>c(R6,{stock:L.stock,minStock:L.minStock,children:[c("div",{className:"product-header",children:[a("div",{className:"product-icon",children:B(L.category)}),a("div",{className:"product-status",children:L.stock<=L.minStock?"Stock Bajo":L.stock<=L.minStock*1.5?"Stock Medio":"Stock Bueno"})]}),a("div",{className:"product-name",children:L.name}),a("div",{className:"product-description",children:L.description}),c("div",{className:"product-details",children:[c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Categoría"}),a("div",{className:"value",children:L.category})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Stock Actual"}),c("div",{className:"value",children:[L.stock," unidades"]})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Stock Mínimo"}),c("div",{className:"value",children:[L.minStock," unidades"]})]}),c("div",{className:"detail-item",children:[a("div",{className:"label",children:"Última Actualización"}),a("div",{className:"value",children:new Date(L.lastUpdated).toLocaleDateString("es-CO")})]})]}),a("div",{className:"product-price",children:V(L.unitPrice)}),c("div",{className:"product-actions",children:[a(tc,{className:"edit",onClick:()=>$(L),children:"Editar"}),a(tc,{className:"stock",children:"Gestionar Stock"}),a(tc,{className:"delete",onClick:()=>H(L.id),disabled:x,children:"Eliminar"})]})]},L.id))}),n.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"📦"}),a("p",{children:"No se encontraron productos"})]})]})]}),d&&a(M6,{children:c(V6,{children:[c(j6,{children:[a("h2",{children:h?"Editar Producto":"Nuevo Producto"}),a("button",{className:"close",onClick:()=>p(!1),children:"×"})]}),c("form",{onSubmit:S(j),children:[c(B6,{children:[c(Mr,{children:[a(Ir,{children:"Nombre del Producto"}),a(ga,{type:"text",placeholder:"Ej: Champú Profesional",...k("name")}),g.name&&a("span",{style:{color:"red",fontSize:"12px"},children:g.name.message})]}),c(Mr,{children:[a(Ir,{children:"Categoría"}),c(H6,{...k("category"),children:[a("option",{value:"",children:"Seleccionar categoría"}),A.map(L=>a("option",{value:L,children:L},L))]}),g.category&&a("span",{style:{color:"red",fontSize:"12px"},children:g.category.message})]}),c(Mr,{children:[a(Ir,{children:"Stock Actual"}),a(ga,{type:"number",placeholder:"25",min:"0",...k("stock")}),g.stock&&a("span",{style:{color:"red",fontSize:"12px"},children:g.stock.message})]}),c(Mr,{children:[a(Ir,{children:"Stock Mínimo"}),a(ga,{type:"number",placeholder:"10",min:"0",...k("minStock")}),g.minStock&&a("span",{style:{color:"red",fontSize:"12px"},children:g.minStock.message})]}),c(Mr,{children:[a(Ir,{children:"Precio Unitario (COP)"}),a(ga,{type:"number",placeholder:"15000",min:"0",...k("unitPrice")}),g.unitPrice&&a("span",{style:{color:"red",fontSize:"12px"},children:g.unitPrice.message})]}),c(q6,{children:[a(Ir,{children:"Descripción"}),a(U6,{placeholder:"Describe el producto y sus características...",...k("description")}),g.description&&a("span",{style:{color:"red",fontSize:"12px"},children:g.description.message})]})]}),c(G6,{children:[a($m,{type:"button",className:"secondary",onClick:()=>p(!1),children:"Cancelar"}),a($m,{type:"submit",className:"primary",children:h?"Actualizar Producto":"Crear Producto"})]})]})]})})]})},Q6=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`,K6=u.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`,J6=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 24px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0 0;
    opacity: 0.9;
    font-size: 16px;
  }
`,X6=u.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,Z6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,e3=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }

  .report-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
    margin-bottom: 16px;
  }

  .report-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .report-description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .report-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #9ca3af;

    .stat-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`,t3=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`,n3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,nc=u.div`
  label {
    display: block;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
    margin-bottom: 6px;
  }
`,r3=u.select`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,_m=u.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,i3=u.button`
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,o3=u.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,a3=u.div`
  space-y: 16px;
`,s3=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .report-info {
    display: flex;
    align-items: center;
    gap: 16px;

    .report-type-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: ${e=>{switch(e.type){case"ventas":return"#10b981";case"clientes":return"var(--primary-color)";case"servicios":return"#f59e0b";case"inventario":return"#8b5cf6";case"financiero":return"#ef4444";default:return"#6b7280"}}};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: white;
    }

    .report-details {
      h4 {
        margin: 0 0 4px 0;
        font-size: 16px;
        color: #1f2937;
        font-weight: 600;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }
    }
  }

  .report-actions {
    display: flex;
    gap: 8px;
  }
`,rc=u.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.download {
    background: #28a745;
    color: white;

    &:hover {
      background: #218838;
    }
  }

  &.view {
    background: #17a2b8;
    color: white;

    &:hover {
      background: #138496;
    }
  }

  &.email {
    background: #ffc107;
    color: #212529;

    &:hover {
      background: #e0a800;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,l3=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,c3=u.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,d3=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #374151;
    }
  }
`,u3=u.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;

  h3 {
    margin: 0 0 16px 0;
    color: #1f2937;
    font-size: 18px;
  }

  .preview-content {
    font-family: monospace;
    background: white;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    max-height: 200px;
    overflow-y: auto;
    font-size: 12px;
    line-height: 1.4;
  }
`,p3=u.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Am=u.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #667eea;
    color: white;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;

    &:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }
  }

  &.success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,f3=()=>{const[e,t]=C.useState(null),[n,r]=C.useState({dateFrom:"",dateTo:"",reportType:""}),[i,o]=C.useState([{id:1,type:"ventas",title:"Reporte de Ventas - Enero 2024",dateRange:"01/01/2024 - 31/01/2024",generatedAt:"2024-01-15 14:30:00",format:"PDF",size:"2.4 MB"},{id:2,type:"clientes",title:"Lista de Clientes Activos",dateRange:"Todo el período",generatedAt:"2024-01-14 16:45:00",format:"Excel",size:"1.8 MB"},{id:3,type:"servicios",title:"Servicios Más Solicitados",dateRange:"01/01/2024 - 31/01/2024",generatedAt:"2024-01-13 11:20:00",format:"PDF",size:"956 KB"},{id:4,type:"financiero",title:"Balance Financiero Mensual",dateRange:"Enero 2024",generatedAt:"2024-01-12 09:15:00",format:"Excel",size:"3.2 MB"}]),[s,l]=C.useState(!1),[d,p]=C.useState(!1),h=[{id:"ventas",title:"Reporte de Ventas",description:"Análisis completo de ingresos, servicios vendidos y tendencias de ventas.",icon:"📊",stats:{generated:24,downloads:156}},{id:"clientes",title:"Reporte de Clientes",description:"Lista de clientes, frecuencia de visitas y patrones de consumo.",icon:"👥",stats:{generated:18,downloads:89}},{id:"servicios",title:"Reporte de Servicios",description:"Estadísticas de servicios prestados, tiempos y satisfacción del cliente.",icon:"✨",stats:{generated:31,downloads:203}},{id:"inventario",title:"Reporte de Inventario",description:"Estado actual de productos, movimientos y niveles de stock.",icon:"📦",stats:{generated:12,downloads:67}},{id:"financiero",title:"Reporte Financiero",description:"Balance general, ingresos, egresos y análisis financiero detallado.",icon:"💰",stats:{generated:8,downloads:45}},{id:"turnos",title:"Reporte de Turnos",description:"Estadísticas de turnos atendidos, tiempos de espera y eficiencia.",icon:"⏰",stats:{generated:15,downloads:98}}],v=async m=>{var f;l(!0);try{await new Promise(y=>setTimeout(y,2e3));const g={id:i.length+1,type:m,title:`${(f=h.find(y=>y.id===m))==null?void 0:f.title} - ${new Date().toLocaleDateString("es-CO")}`,dateRange:n.dateFrom&&n.dateTo?`${n.dateFrom} - ${n.dateTo}`:"Todo el período",generatedAt:new Date().toISOString().replace("T"," ").substring(0,19),format:Math.random()>.5?"PDF":"Excel",size:`${(Math.random()*3+.5).toFixed(1)} MB`};o(y=>[g,...y]),D.success("Reporte generado exitosamente")}catch{D.error("Error al generar el reporte")}finally{l(!1)}},x=async(m,f)=>{l(!0);try{await new Promise(g=>setTimeout(g,1500)),D.success(`Descarga de ${f} iniciada`)}catch{D.error("Error al descargar el reporte")}finally{l(!1)}},b=m=>{t(m),p(!0)},w=async m=>{l(!0);try{await new Promise(f=>setTimeout(f,1e3)),D.success("Reporte enviado por email")}catch{D.error("Error al enviar el reporte")}finally{l(!1)}},k=m=>({ventas:"📊",clientes:"👥",servicios:"✨",inventario:"📦",financiero:"💰",turnos:"⏰"})[m]||"📄",S=m=>({ventas:`REPORTE DE VENTAS
Fecha: ${m.generatedAt}
Período: ${m.dateRange}

INGRESOS TOTALES: $2,450,000 COP
NÚMERO DE VENTAS: 145
VENTA PROMEDIO: $16,897 COP

SERVICIOS MÁS VENDIDOS:
1. Corte de Cabello Mujer - 45 ventas
2. Tratamiento Facial - 38 ventas
3. Manicure + Pedicure - 32 ventas

MÉTODOS DE PAGO:
• Efectivo: 40%
• Tarjeta: 35%
• Transferencia: 25%`,clientes:`LISTA DE CLIENTES ACTIVOS
Total de Clientes: 156

CLIENTES FRECUENTES (5+ visitas):
1. María García - 12 visitas
2. Carlos Rodríguez - 8 visitas
3. Ana López - 7 visitas

NUEVOS CLIENTES ESTE MES: 23
CLIENTES INACTIVOS: 8`,servicios:`ESTADÍSTICAS DE SERVICIOS
Total Servicios Prestados: 234

TIEMPOS PROMEDIO:
• Corte de Cabello: 45 min
• Tratamiento Facial: 75 min
• Manicure: 60 min

SATISFACCIÓN DEL CLIENTE: 4.8/5.0`,inventario:`ESTADO DEL INVENTARIO
Total Productos: 45

PRODUCTOS CON STOCK BAJO:
• Champú Profesional - 8 unidades
• Máscara Facial - 3 unidades

VALOR TOTAL DEL INVENTARIO: $1,250,000 COP`,financiero:`BALANCE FINANCIERO

INGRESOS: $3,450,000 COP
EGRESOS: $1,890,000 COP
UTILIDAD: $1,560,000 COP

MARGEN DE UTILIDAD: 45.2%`})[m.type]||"Contenido del reporte no disponible";return c(Q6,{children:[c(K6,{children:[c(J6,{children:[a("h1",{children:"Generación de Reportes"}),a("p",{children:"Analiza el rendimiento de tu negocio con reportes detallados"})]}),c(X6,{children:[a(Z6,{children:h.map(m=>c(e3,{onClick:()=>v(m.id),disabled:s,children:[a("div",{className:"report-icon",children:m.icon}),a("div",{className:"report-title",children:m.title}),a("div",{className:"report-description",children:m.description}),c("div",{className:"report-stats",children:[c("div",{className:"stat-item",children:["📄 ",m.stats.generated]}),c("div",{className:"stat-item",children:["📥 ",m.stats.downloads]})]})]},m.id))}),c(t3,{children:[a("h3",{style:{margin:"0 0 20px 0",color:"#1f2937"},children:"Filtros de Reportes"}),c(n3,{children:[c(nc,{children:[a("label",{children:"Tipo de Reporte"}),c(r3,{value:n.reportType,onChange:m=>r({...n,reportType:m.target.value}),children:[a("option",{value:"",children:"Todos los tipos"}),h.map(m=>a("option",{value:m.id,children:m.title},m.id))]})]}),c(nc,{children:[a("label",{children:"Fecha Desde"}),a(_m,{type:"date",value:n.dateFrom,onChange:m=>r({...n,dateFrom:m.target.value})})]}),c(nc,{children:[a("label",{children:"Fecha Hasta"}),a(_m,{type:"date",value:n.dateTo,onChange:m=>r({...n,dateTo:m.target.value})})]}),a(i3,{onClick:()=>D.info("Filtros aplicados"),children:"Aplicar Filtros"})]})]}),c(o3,{children:[a("h3",{style:{margin:"0 0 20px 0",color:"#1f2937"},children:"Reportes Generados"}),a(a3,{children:i.map(m=>c(s3,{type:m.type,children:[c("div",{className:"report-info",children:[a("div",{className:"report-type-icon",children:k(m.type)}),c("div",{className:"report-details",children:[a("h4",{children:m.title}),c("p",{children:[m.dateRange," • ",m.format," • ",m.size," •",new Date(m.generatedAt).toLocaleString("es-CO")]})]})]}),c("div",{className:"report-actions",children:[a(rc,{className:"view",onClick:()=>b(m),children:"Ver"}),c(rc,{className:"download",onClick:()=>x(m.id,m.format),disabled:s,children:["📥 ",m.format]}),a(rc,{className:"email",onClick:()=>w(m.id),disabled:s,children:"📧 Email"})]})]},m.id))}),i.length===0&&c("div",{style:{textAlign:"center",padding:"40px",color:"#6b7280"},children:[a("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"📊"}),a("p",{children:"No hay reportes generados aún"}),a("p",{style:{fontSize:"14px"},children:"Haz clic en cualquier tipo de reporte para generar uno"})]})]})]})]}),d&&e&&a(l3,{children:c(c3,{children:[c(d3,{children:[c("h2",{children:["Vista Previa - ",e.title]}),a("button",{className:"close",onClick:()=>p(!1),children:"×"})]}),c(u3,{children:[a("h3",{children:"Contenido del Reporte"}),a("div",{className:"preview-content",children:S(e)})]}),c(p3,{children:[a(Am,{type:"button",className:"secondary",onClick:()=>p(!1),children:"Cerrar"}),c(Am,{type:"button",className:"success",onClick:()=>{x(e.id,e.format),p(!1)},children:["📥 Descargar ",e.format]})]})]})})]})},xa="turnoflow_cobrar",va=5,m3={Peluquería:"✂️",Cortes:"✂️",Coloración:"🎨",Estética:"🧴",Tratamientos:"🧴",Maquillaje:"💄",Uñas:"💅","Cejas y Pestañas":"👁️","Cuidado Capilar":"🧴","Cuidado Corporal":"🧴","Cuidado Facial":"🧴",Peinado:"💇",Paquetes:"🎁",Productos:"🛍️",Otros:"📌"},h3=()=>{try{const e=localStorage.getItem("turnoflow_servicios");if(e)return JSON.parse(e).filter(n=>(n.price||n.unitPrice)&&n.active!==!1).map(n=>({id:`sv_${n.id}`,name:n.name,category:n.category||"General",price:n.price||n.unitPrice||0,popular:n.price>5e4,from:"servicios"}))}catch{}return g3()},g3=()=>[{id:"sv_1",name:"Corte de Cabello Dama",category:"Cortes",price:45e3,popular:!0,from:"servicios"},{id:"sv_2",name:"Corte de Cabello Caballero",category:"Cortes",price:25e3,popular:!0,from:"servicios"},{id:"sv_3",name:"Corte Infantil",category:"Cortes",price:18e3,from:"servicios"},{id:"sv_4",name:"Corte con Degradado",category:"Cortes",price:35e3,from:"servicios"},{id:"sv_5",name:"Arreglo de Barba",category:"Cortes",price:12e3,from:"servicios"},{id:"sv_6",name:"Tinte Completo",category:"Coloración",price:85e3,popular:!0,from:"servicios"},{id:"sv_7",name:"Mechas/Reflejos",category:"Coloración",price:12e4,popular:!0,from:"servicios"},{id:"sv_8",name:"Baño de Color",category:"Coloración",price:55e3,from:"servicios"},{id:"sv_9",name:"Decoloración",category:"Coloración",price:9e4,from:"servicios"},{id:"sv_10",name:"Retoque de Raíz",category:"Coloración",price:6e4,from:"servicios"},{id:"sv_11",name:"Keratina",category:"Tratamientos",price:15e4,popular:!0,from:"servicios"},{id:"sv_12",name:"Hidratación Profunda",category:"Tratamientos",price:65e3,from:"servicios"},{id:"sv_13",name:"Botox Capilar",category:"Tratamientos",price:12e4,from:"servicios"},{id:"sv_14",name:"Maquillaje Social",category:"Maquillaje",price:8e4,popular:!0,from:"servicios"},{id:"sv_15",name:"Maquillaje Novia",category:"Maquillaje",price:25e4,from:"servicios"},{id:"sv_16",name:"Arreglo de Uñas",category:"Uñas",price:35e3,popular:!0,from:"servicios"},{id:"sv_17",name:"Uñas Acrílicas",category:"Uñas",price:8e4,from:"servicios"},{id:"sv_18",name:"Pedicure",category:"Uñas",price:4e4,from:"servicios"},{id:"sv_19",name:"Diseño de Cejas",category:"Cejas y Pestañas",price:15e3,popular:!0,from:"servicios"},{id:"sv_20",name:"Pack Corte + Tinte",category:"Paquetes",price:11e4,popular:!0,from:"servicios"}],x3=()=>{try{const e=localStorage.getItem("turnoflow_inventario");if(e)return JSON.parse(e).filter(t=>t.stock>0&&t.unitPrice>0).map(t=>({id:`inv_${t.id}`,name:t.name,category:t.category||"Productos",price:t.unitPrice||0,popular:!1,stock:t.stock,from:"inventario"}))}catch{}return[]},v3=()=>{try{const e=localStorage.getItem("turnoflow_clientes");if(e)return JSON.parse(e)}catch{}return[]},Dm=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
  padding: 20px;
`,Fm=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 1600px;
  margin: 0 auto;
`,b3=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;

    .header-icon {
      width: 48px;
      height: 48px;
      background: rgba(255,255,255,0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }

    p {
      margin: 2px 0 0 0;
      opacity: 0.85;
      font-size: 14px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;

    .date-display {
      background: rgba(255,255,255,0.15);
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`,y3=u.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`,w3=u.div`
  padding: 24px;
  border-right: 1px solid #f0f0f0;
  min-height: 600px;

  @media (max-width: 1100px) {
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
  }
`,k3=u.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 14px 16px 14px 48px;
    border: 2px solid #e5e7eb;
    border-radius: 14px;
    font-size: 16px;
    background: #f8fafc;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      background: white;
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.08);
    }
  }

  .search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #9ca3af;
  }
`,S3=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
`,C3=u.button`
  padding: 10px 18px;
  border: 2px solid ${e=>e.$active?"var(--primary-color)":"#e5e7eb"};
  border-radius: 12px;
  background: ${e=>e.$active?"rgba(var(--primary-rgb), 0.08)":"white"};
  color: ${e=>e.$active?"var(--primary-color)":"#6b7280"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`,E3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`,N3=u.button`
  background: ${e=>e.$inCart?"rgba(var(--primary-rgb), 0.06)":"white"};
  border: 2px solid ${e=>e.$inCart?"var(--primary-color)":"#f0f0f0"};
  border-radius: 14px;
  padding: 16px 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }

  .item-icon {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .item-name {
    font-size: 13px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .item-price {
    font-size: 16px;
    font-weight: 800;
    color: var(--primary-color);
  }

  .popular-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  }

  .in-cart-badge {
    position: absolute;
    top: -6px;
    left: -6px;
    background: var(--primary-color);
    color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.3);
  }
`,z3=u.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  background: #fafbfc;
  min-height: 600px;
`,T3=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .clear-btn {
    background: none;
    border: none;
    color: #ef4444;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background: #fef2f2;
    }
  }
`,$3=u.div`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
`,P3=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .item-icon {
    font-size: 24px;
    width: 40px;
    text-align: center;
  }

  .item-details {
    flex: 1;
    min-width: 0;

    .item-name {
      font-size: 14px;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item-price {
      font-size: 13px;
      color: var(--primary-color);
      font-weight: 700;
    }
  }

  .qty-controls {
    display: flex;
    align-items: center;
    gap: 6px;

    button {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      background: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      color: #374151;

      &:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: #374151;
      min-width: 24px;
      text-align: center;
    }
  }

  .item-subtotal {
    font-size: 15px;
    font-weight: 800;
    color: #1f2937;
    min-width: 70px;
    text-align: right;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #d1d5db;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    transition: color 0.2s;

    &:hover {
      color: #ef4444;
    }
  }
`,_3=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  padding: 40px;

  .empty-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.5; }
  h4 { margin: 0 0 8px 0; color: #6b7280; font-size: 16px; }
  p { margin: 0; font-size: 13px; text-align: center; }
`,A3=u.div`
  margin-top: 16px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`,ic=u.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;

  &.total {
    font-size: 20px;
    font-weight: 800;
    color: #1f2937;
    border-top: 2px solid #f0f0f0;
    padding-top: 12px;
    margin-top: 8px;
    margin-bottom: 0;
  }

  &.discount {
    color: #10b981;
  }
`,D3=u.div`
  display: flex;
  gap: 8px;
  margin: 12px 0;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  button {
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
`,F3=u.div`
  margin-top: 16px;
`,O3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
  margin-bottom: 14px;
`,I3=u.button`
  padding: 10px 6px;
  border: 2px solid ${e=>e.$active?"var(--primary-color)":"#e5e7eb"};
  border-radius: 10px;
  background: ${e=>e.$active?"rgba(var(--primary-rgb), 0.06)":"white"};
  color: ${e=>e.$active?"var(--primary-color)":"#6b7280"};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  line-height: 1.3;

  .pay-icon { font-size: 20px; display: block; margin-bottom: 2px; }

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`,L3=u.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .pay-amount {
    background: rgba(255,255,255,0.2);
    padding: 2px 12px;
    border-radius: 20px;
  }
`,Om=u.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;

  button {
    flex: 1;
    padding: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: #6b7280;

    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
`,Im=u.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,R3=u.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .modal-title {
    font-size: 18px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .search-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 15px;
    margin-bottom: 16px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  .client-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid transparent;

    &:hover {
      background: rgba(var(--primary-rgb), 0.06);
      border-color: var(--primary-color);
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 16px;
      flex-shrink: 0;
    }

    .info {
      flex: 1;
      .name { font-size: 15px; font-weight: 600; color: #1f2937; }
      .detail { font-size: 13px; color: #6b7280; }
    }
  }

  .no-results {
    text-align: center;
    padding: 30px;
    color: #9ca3af;
    font-size: 14px;
  }
`,M3=u.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .receipt-header {
    text-align: center;
    margin-bottom: 20px;

    .success-icon {
      font-size: 56px;
      margin-bottom: 12px;
    }

    h2 { margin: 0; color: #1f2937; font-size: 22px; }
    p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
  }

  .receipt-items {
    margin-bottom: 16px;

    .receipt-item {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 14px;
      color: #374151;

      .receipt-item-name { flex: 1; }
      .receipt-item-qty { color: #9ca3af; margin: 0 12px; }
      .receipt-item-price { font-weight: 600; }
    }
  }

  .receipt-total {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-top: 2px solid #f0f0f0;
    font-size: 18px;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .receipt-meta {
    font-size: 12px;
    color: #9ca3af;
    text-align: center;
    margin-bottom: 20px;
  }

  .receipt-actions {
    display: flex;
    gap: 12px;

    button {
      flex: 1;
      padding: 14px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      &:hover { background: var(--secondary-color); }
    }

    .btn-secondary {
      background: #f3f4f6;
      color: #374151;
      &:hover { background: #e5e7eb; }
    }
  }
`,kt=e=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(e),Lm=e=>e.toLocaleDateString("es-CO",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),V3=e=>e.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"}),j3=()=>{const[e,t]=C.useState(""),[n,r]=C.useState("Todas"),[i,o]=C.useState([]),[s,l]=C.useState("efectivo"),[d,p]=C.useState(0),[h,v]=C.useState(""),[x,b]=C.useState(!1),[w,k]=C.useState(null),[S,m]=C.useState(""),[f,g]=C.useState(null),[y,N]=C.useState(!1),[T,O]=C.useState(""),[$,H]=C.useState(1),[j,A]=C.useState([]),[V,B]=C.useState(!1);C.useEffect(()=>{try{const ae=localStorage.getItem(xa);ae&&JSON.parse(ae).some(dn=>typeof dn.id=="number")&&localStorage.removeItem(xa)}catch{}const I=h3(),te=x3(),ue=[...I,...te];A(ue),B(!0)},[]),C.useEffect(()=>{try{const I=localStorage.getItem(xa);I&&o(JSON.parse(I))}catch{}},[]),C.useEffect(()=>{localStorage.setItem(xa,JSON.stringify(i))},[i]);const re=["Todas",...new Set(j.map(I=>I.category))],Z=(n==="Todas"?j:j.filter(I=>I.category===n)).filter(I=>I.name.toLowerCase().includes(e.toLowerCase())||I.category.toLowerCase().includes(e.toLowerCase())),L=i.map(I=>{const te=j.find(ue=>ue.id===I.id);return te?{...te,qty:I.qty}:{id:I.id,name:"Desconocido",price:0,qty:I.qty}}),R=L.reduce((I,te)=>I+te.price*te.qty,0),X=d>0?Math.round(R*(d/100)):0,_=R-X,G=Math.max(1,Math.ceil(L.length/va)),M=Math.min($,G),J=L.slice((M-1)*va,M*va);C.useEffect(()=>{H(1)},[i.length]);const Q=I=>{o(te=>te.find(ae=>ae.id===I.id)?te.map(ae=>ae.id===I.id?{...ae,qty:ae.qty+1}:ae):[...te,{id:I.id,qty:1}])},se=(I,te)=>{o(ue=>ue.map(ae=>{if(ae.id!==I)return ae;const Pe=Math.max(0,ae.qty+te);return{...ae,qty:Pe}}).filter(ae=>ae.qty>0))},F=I=>{o(te=>te.filter(ue=>ue.id!==I))},pe=()=>{i.length!==0&&window.confirm("¿Limpiar todo el carrito?")&&(o([]),p(0),v(""),m(""),g(null),H(1),D.info("Carrito limpiado"))},Y=()=>{const I=parseFloat(h);if(isNaN(I)||I<0){D.error("Descuento inválido");return}if(I>100){D.error("El descuento no puede superar el 100%");return}p(I),D.success(`Descuento del ${I}% aplicado`)},Se=I=>{p(I),v(String(I))},he=()=>{if(i.length===0){D.error("Agrega productos al carrito");return}const I={id:Date.now(),date:new Date,client:(f==null?void 0:f.name)||"Cliente mostrador",items:L.filter(te=>te.price>0),subtotal:R,discount:d,discountAmount:X,total:_,method:s,cashReceived:s==="efectivo"&&parseFloat(S)||_,change:s==="efectivo"?(parseFloat(S)||_)-_:0};k(I),b(!0)},ge=()=>{o([]),p(0),v(""),m(""),b(!1),D.success("Venta completada ✅")},ce=I=>m3[I]||"📌",Te=I=>ce(I.category);return V?c(Dm,{children:[c(Fm,{children:[c(b3,{children:[c("div",{className:"header-left",children:[a("div",{className:"header-icon",children:"💳"}),c("div",{children:[a("h1",{children:"Cobrar"}),a("p",{children:"Punto de venta — Selecciona los servicios y productos"})]})]}),a("div",{className:"header-right",children:c("div",{className:"date-display",children:["📅 ",Lm(new Date)]})})]}),c(y3,{children:[c(w3,{children:[c(k3,{children:[a("span",{className:"search-icon",children:"🔍"}),a("input",{type:"text",placeholder:"Buscar servicio o producto...",value:e,onChange:I=>{t(I.target.value),r("Todas")}})]}),a(S3,{children:re.map(I=>c(C3,{$active:n===I,onClick:()=>r(I),children:[ce(I)," ",I]},I))}),c(E3,{children:[Z.map(I=>{const te=i.find(ue=>ue.id===I.id);return c(N3,{$inCart:!!te,onClick:()=>Q(I),children:[a("div",{className:"item-icon",children:Te(I)}),a("div",{className:"item-name",children:I.name}),a("div",{className:"item-price",children:kt(I.price)}),I.popular&&a("div",{className:"popular-badge",children:"🔥 Popular"}),I.from==="inventario"&&a("div",{className:"popular-badge",style:{background:"linear-gradient(135deg, #10b981, #059669)",right:"auto",left:-6},children:"📦"}),te&&a("div",{className:"in-cart-badge",children:te.qty})]},I.id)}),Z.length===0&&a("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:40,color:"#9ca3af"},children:"🧐 No se encontraron servicios"})]}),c("div",{style:{textAlign:"center",marginTop:8,fontSize:12,color:"#9ca3af"},children:[Z.length," items encontrados"]})]}),c(z3,{children:[c(T3,{children:[c("h3",{children:["🛒 Carrito ",i.length>0&&c("span",{style:{fontSize:13,color:"#9ca3af",fontWeight:400},children:["(",i.reduce((I,te)=>I+te.qty,0)," items)"]})]}),i.length>0&&a("button",{className:"clear-btn",onClick:pe,children:"✕ Limpiar"})]}),i.length===0?c(_3,{children:[a("div",{className:"empty-icon",children:"🛍️"}),a("h4",{children:"Carrito vacío"}),a("p",{children:"Selecciona servicios o productos del panel izquierdo para comenzar"})]}):c(Yt,{children:[a($3,{children:J.map(I=>c(P3,{children:[a("div",{className:"item-icon",children:Te(I)}),c("div",{className:"item-details",children:[a("div",{className:"item-name",children:I.name}),a("div",{className:"item-price",children:kt(I.price)})]}),c("div",{className:"qty-controls",children:[a("button",{onClick:()=>se(I.id,-1),children:"−"}),a("span",{children:I.qty}),a("button",{onClick:()=>se(I.id,1),children:"+"})]}),a("div",{className:"item-subtotal",children:kt(I.price*I.qty)}),a("button",{className:"remove-btn",onClick:()=>F(I.id),children:"✕"})]},I.id))}),G>1&&c("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 0",marginBottom:4},children:[a("button",{onClick:()=>H(I=>Math.max(1,I-1)),disabled:M<=1,style:{padding:"6px 12px",border:"1px solid #e5e7eb",borderRadius:6,background:M<=1?"#f9fafb":"white",color:M<=1?"#d1d5db":"#374151",cursor:M<=1?"not-allowed":"pointer",fontWeight:600,fontSize:12},children:"◀"}),Array.from({length:G},(I,te)=>te+1).map(I=>a("button",{onClick:()=>H(I),style:{width:28,height:28,borderRadius:6,border:I===M?"2px solid var(--primary-color)":"1px solid #e5e7eb",background:I===M?"rgba(var(--primary-rgb), 0.08)":"white",color:I===M?"var(--primary-color)":"#6b7280",fontWeight:I===M?700:500,cursor:"pointer",fontSize:12},children:I},I)),a("button",{onClick:()=>H(I=>Math.min(G,I+1)),disabled:M>=G,style:{padding:"6px 12px",border:"1px solid #e5e7eb",borderRadius:6,background:M>=G?"#f9fafb":"white",color:M>=G?"#d1d5db":"#374151",cursor:M>=G?"not-allowed":"pointer",fontWeight:600,fontSize:12},children:"▶"})]}),L.length>va&&c("div",{style:{textAlign:"center",fontSize:11,color:"#9ca3af",marginBottom:8},children:[L.length," items · Página ",M," de ",G]}),c(A3,{children:[c(ic,{children:[a("span",{children:"Subtotal"}),a("span",{children:kt(R)})]}),c(D3,{children:[a("input",{type:"number",placeholder:"% descuento",value:h,onChange:I=>v(I.target.value),min:"0",max:"100"}),a("button",{onClick:Y,children:"Aplicar"})]}),c(Om,{children:[[5,10,15,20].map(I=>c("button",{onClick:()=>Se(I),children:[I,"%"]},I)),d>0&&a("button",{onClick:()=>{p(0),v("")},style:{color:"#ef4444"},children:"✕"})]}),d>0&&c(ic,{className:"discount",children:[c("span",{children:["Descuento (",d,"%)"]}),c("span",{children:["-",kt(X)]})]}),c(ic,{className:"total",children:[a("span",{children:"Total a pagar"}),a("span",{children:kt(_)})]})]}),c(F3,{children:[a(O3,{children:[{id:"efectivo",label:"Efectivo",icon:"💵"},{id:"tarjeta",label:"Tarjeta",icon:"💳"},{id:"transferencia",label:"Transferencia",icon:"🏦"},{id:"nequi",label:"Nequi",icon:"📱"},{id:"daviplata",label:"Daviplata",icon:"📲"}].map(I=>c(I3,{$active:s===I.id,onClick:()=>l(I.id),children:[a("span",{className:"pay-icon",children:I.icon}),I.label]},I.id))}),s==="efectivo"&&c(Om,{children:[[5e4,1e5,2e5,5e5].map(I=>a("button",{onClick:()=>m(String(I)),children:kt(I)},I)),a("input",{type:"number",placeholder:"otro valor",value:S,onChange:I=>m(I.target.value),style:{flex:1,padding:"8px",border:"1px solid #e5e7eb",borderRadius:8,fontSize:13}})]}),c(L3,{onClick:he,disabled:i.length===0,children:["💳 Cobrar ",a("span",{className:"pay-amount",children:kt(_)})]}),s==="efectivo"&&S&&parseFloat(S)>=_&&c("div",{style:{textAlign:"center",marginTop:8,fontSize:13,color:"#10b981",fontWeight:600},children:["Cambio: ",kt(parseFloat(S)-_)]})]})]})]})]})]}),y&&a(Im,{onClick:()=>N(!1),children:c(R3,{onClick:I=>I.stopPropagation(),children:[a("div",{className:"modal-title",children:"👤 Seleccionar Cliente"}),a("input",{className:"search-input",type:"text",placeholder:"Buscar por nombre, teléfono o email...",value:T,onChange:I=>O(I.target.value),autoFocus:!0}),(()=>{const I=v3(),te=T?I.filter(ue=>(ue.name||"").toLowerCase().includes(T.toLowerCase())||(ue.phone||"").includes(T)||(ue.email||"").toLowerCase().includes(T.toLowerCase())):I;return te.length===0?a("div",{className:"no-results",children:"😕 No se encontraron clientes"}):te.map(ue=>{var ae;return c("div",{className:"client-option",onClick:()=>{g(ue),N(!1),O("")},children:[a("div",{className:"avatar",children:((ae=ue.name)==null?void 0:ae.charAt(0))||"?"}),c("div",{className:"info",children:[a("div",{className:"name",children:ue.name}),a("div",{className:"detail",children:ue.phone||ue.email||"Sin contacto"})]}),a("span",{style:{color:"var(--primary-color)",fontSize:20},children:"➕"})]},ue.id)})})()]})}),x&&w&&a(Im,{onClick:()=>b(!1),children:c(M3,{onClick:I=>I.stopPropagation(),children:[c("div",{className:"receipt-header",children:[a("div",{className:"success-icon",children:"✅"}),a("h2",{children:"¡Pago exitoso!"}),c("p",{children:["Recibo #",w.id.toString().slice(-6)]})]}),c("div",{className:"receipt-client",style:{background:"#f0fdf4",borderRadius:10,padding:"10px 14px",marginBottom:16,display:"flex",alignItems:"center",gap:10},children:[a("span",{style:{fontSize:20},children:"👤"}),a("span",{style:{fontSize:14,fontWeight:600,color:"#065f46"},children:w.client})]}),a("div",{className:"receipt-items",children:w.items.map(I=>c("div",{className:"receipt-item",children:[a("span",{className:"receipt-item-name",children:I.name}),c("span",{className:"receipt-item-qty",children:["×",I.qty]}),a("span",{className:"receipt-item-price",children:kt(I.price*I.qty)})]},I.id))}),w.discount>0&&c("div",{className:"receipt-item",style:{justifyContent:"space-between",fontSize:13,color:"#10b981"},children:[c("span",{children:["Descuento (",w.discount,"%)"]}),c("span",{children:["-",kt(w.discountAmount)]})]}),c("div",{className:"receipt-total",children:[a("span",{children:"Total"}),a("span",{children:kt(w.total)})]}),c("div",{className:"receipt-meta",children:[c("div",{children:[Lm(w.date)," — ",V3(w.date)]}),c("div",{children:["Método: ",{efectivo:"💵 Efectivo",tarjeta:"💳 Tarjeta",transferencia:"🏦 Transferencia",nequi:"📱 Nequi",daviplata:"📲 Daviplata"}[w.method]]}),w.method==="efectivo"&&w.change>0&&c("div",{style:{color:"#10b981",marginTop:4},children:["Cambio: ",kt(w.change)]})]}),c("div",{className:"receipt-actions",children:[a("button",{className:"btn-primary",onClick:ge,children:"Nueva Venta"}),a("button",{className:"btn-secondary",onClick:()=>{D.info("📄 Recibo descargado (simulado)")},children:"📄 Imprimir"})]})]})})]}):a(Dm,{children:a(Fm,{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:60},children:c("div",{style:{textAlign:"center"},children:[a("div",{style:{fontSize:48,marginBottom:16},children:"⏳"}),a("div",{style:{color:"#6b7280",fontSize:16},children:"Cargando..."})]})})})},xx=Er`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,B3=Er`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`,Rm=u.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
    animation: ${B3} 8s ease-in-out infinite;
  }
`,ba=u.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${e=>e.shape==="circle"?"50%":"0"};
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  animation: ${xx} ${e=>e.duration}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;

  @media (max-width: 768px) {
    display: none;
  }
`,Mm=u.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  display: flex;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`,Vm=u.div`
  flex: 1;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 32px 24px;
    text-align: center;
    align-items: center;
  }

  .business-icon {
    font-size: 64px;
    margin-bottom: 24px;
    animation: ${xx} 3s ease-in-out infinite;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 16px 0;
  }

  p {
    font-size: 16px;
    opacity: 0.9;
    line-height: 1.6;
    margin: 0;
  }

  .features {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
      display: none;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      opacity: 0.9;

      span:first-child {
        font-size: 20px;
      }
    }
  }
`,jm=u.div`
  flex: 1;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`,U3=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;

  .logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .logo-text {
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
  }
`,H3=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 12px;
`,Bm=u.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.active?"white":"transparent"};
  color: ${e=>e.active?"#667eea":"#6b7280"};
  box-shadow: ${e=>e.active?"0 2px 8px rgba(102, 126, 234, 0.2)":"none"};

  &:hover {
    color: #667eea;
  }
`,q3=u.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,nr=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  input {
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .error {
    font-size: 12px;
    color: #ef4444;
  }
`,Um=u.div`
  position: relative;

  input {
    width: 100%;
    padding-right: 48px;
  }

  .toggle-password {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #6b7280;

    &:hover {
      color: #667eea;
    }
  }
`,G3=u.button`
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Y3=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    font-size: 14px;
    color: #9ca3af;
  }
`,W3=u.div`
  display: flex;
  gap: 12px;

  button {
    flex: 1;
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      border-color: #667eea;
      background: #f9fafb;
    }
  }
`,Q3=u.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`,oc=u.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #6b7280;

  a {
    color: #667eea;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`,K3=u.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`,J3=u.div`
  text-align: center;
  padding: 40px 20px;

  .icon {
    font-size: 64px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    color: #1f2937;
    margin: 0 0 12px 0;
  }

  p {
    color: #6b7280;
    margin: 0 0 24px 0;
  }

  button {
    padding: 14px 32px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }
  }
`,X3=()=>{const e=Zn(),{businessType:t,getBusinessComponents:n}=cn(),r=n(t),[i,o]=C.useState("login"),[s,l]=C.useState(!1),[d,p]=C.useState(!1),[h,v]=C.useState({email:"",password:"",confirmPassword:"",nombre:"",apellido:"",telefono:"",identificacion:""}),[x,b]=C.useState({}),w=()=>{const g={};return h.email?/\S+@\S+\.\S+/.test(h.email)||(g.email="Email inválido"):g.email="El email es requerido",h.password||(g.password="La contraseña es requerida"),b(g),Object.keys(g).length===0},k=()=>{const g={};return h.nombre||(g.nombre="El nombre es requerido"),h.apellido||(g.apellido="El apellido es requerido"),h.identificacion||(g.identificacion="La identificación es requerida"),h.telefono||(g.telefono="El teléfono es requerido"),h.email?/\S+@\S+\.\S+/.test(h.email)||(g.email="Email inválido"):g.email="El email es requerido",h.password?h.password.length<6&&(g.password="Mínimo 6 caracteres"):g.password="La contraseña es requerida",h.password!==h.confirmPassword&&(g.confirmPassword="Las contraseñas no coinciden"),b(g),Object.keys(g).length===0},S=()=>{const g={};return h.email?/\S+@\S+\.\S+/.test(h.email)||(g.email="Email inválido"):g.email="El email es requerido",b(g),Object.keys(g).length===0},m=async g=>{g.preventDefault(),p(!0);try{await new Promise(y=>setTimeout(y,1500)),i==="login"?w()&&(localStorage.setItem("cliente",JSON.stringify({nombre:h.email.split("@")[0],email:h.email})),D.success("¡Bienvenido!"),e("/cliente/dashboard")):i==="register"?k()&&(o("success"),D.success("¡Registro exitoso!")):i==="forgot"&&S()&&(D.success("Se ha enviado un enlace de recuperación a tu email"),o("login"))}catch{D.error("Ha ocurrido un error")}finally{p(!1)}},f=g=>{const{name:y,value:N}=g.target;v(T=>({...T,[y]:N})),x[y]&&b(T=>({...T,[y]:""}))};return i==="success"?a(Rm,{children:c(Mm,{children:[c(Vm,{children:[a("div",{className:"business-icon",children:r.icon}),a("h2",{children:r.name}),a("p",{children:"Tu salud y bienestar es nuestra prioridad"})]}),a(jm,{children:c(J3,{children:[a("div",{className:"icon",children:"✅"}),a("h3",{children:"¡Registro Exitoso!"}),a("p",{children:"Tu cuenta ha sido creada. Ahora puedes agendar tus citas y disfrutar de nuestros servicios."}),a("button",{onClick:()=>e("/cliente/dashboard"),children:"Ir a mi Dashboard"})]})})]})}):c(Rm,{children:[a(ba,{size:100,shape:"circle",top:10,left:10,duration:6,delay:0}),a(ba,{size:80,shape:"square",top:60,left:85,duration:8,delay:1}),a(ba,{size:60,shape:"circle",top:80,left:20,duration:7,delay:2}),a(ba,{size:120,shape:"square",top:20,left:70,duration:5,delay:.5}),c(Mm,{children:[c(Vm,{children:[a("div",{className:"business-icon",children:r.icon}),a("h2",{children:r.name}),a("p",{children:"Tu salud y bienestar es nuestra prioridad. Agenda tu cita ahora y experimenta un servicio de calidad."}),c("div",{className:"features",children:[c("div",{className:"feature",children:[a("span",{children:"📅"}),a("span",{children:"Agenda tu cita en línea 24/7"})]}),c("div",{className:"feature",children:[a("span",{children:"⭐"}),a("span",{children:"Acceso a promociones exclusivas"})]}),c("div",{className:"feature",children:[a("span",{children:"📱"}),a("span",{children:"Notificaciones y recordatorios"})]}),c("div",{className:"feature",children:[a("span",{children:"🛒"}),a("span",{children:"Compra productos desde casa"})]})]})]}),c(jm,{children:[c(U3,{children:[a("div",{className:"logo-icon",children:"TF"}),a("div",{className:"logo-text",children:"TurnoFlow"})]}),c(H3,{children:[a(Bm,{active:i==="login",onClick:()=>o("login"),children:"Iniciar Sesión"}),a(Bm,{active:i==="register",onClick:()=>o("register"),children:"Registrarse"})]}),c(q3,{onSubmit:m,children:[i==="register"&&c(Yt,{children:[c("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[c(nr,{children:[a("label",{children:"Nombre"}),a("input",{type:"text",name:"nombre",placeholder:"Tu nombre",value:h.nombre,onChange:f}),x.nombre&&a("span",{className:"error",children:x.nombre})]}),c(nr,{children:[a("label",{children:"Apellido"}),a("input",{type:"text",name:"apellido",placeholder:"Tu apellido",value:h.apellido,onChange:f}),x.apellido&&a("span",{className:"error",children:x.apellido})]})]}),c(nr,{children:[a("label",{children:"Identificación"}),a("input",{type:"text",name:"identificacion",placeholder:"Número de identificación",value:h.identificacion,onChange:f}),x.identificacion&&a("span",{className:"error",children:x.identificacion})]}),c(nr,{children:[a("label",{children:"Teléfono"}),a("input",{type:"tel",name:"telefono",placeholder:"Número de teléfono",value:h.telefono,onChange:f}),x.telefono&&a("span",{className:"error",children:x.telefono})]})]}),c(nr,{children:[a("label",{children:"Email"}),a("input",{type:"email",name:"email",placeholder:"tu@email.com",value:h.email,onChange:f}),x.email&&a("span",{className:"error",children:x.email})]}),i!=="forgot"&&c(nr,{children:[a("label",{children:"Contraseña"}),c(Um,{children:[a("input",{type:s?"text":"password",name:"password",placeholder:"••••••••",value:h.password,onChange:f}),a("button",{type:"button",className:"toggle-password",onClick:()=>l(!s),children:s?"🙈":"👁️"})]}),x.password&&a("span",{className:"error",children:x.password})]}),i==="register"&&c(nr,{children:[a("label",{children:"Confirmar Contraseña"}),a(Um,{children:a("input",{type:s?"text":"password",name:"confirmPassword",placeholder:"••••••••",value:h.confirmPassword,onChange:f})}),x.confirmPassword&&a("span",{className:"error",children:x.confirmPassword})]}),i==="login"&&a(Q3,{type:"button",onClick:()=>o("forgot"),children:"¿Olvidaste tu contraseña?"}),i==="forgot"&&a(K3,{type:"button",onClick:()=>o("login"),children:"← Volver a iniciar sesión"}),a(G3,{type:"submit",disabled:d,children:d?"Cargando...":i==="login"?"Iniciar Sesión":i==="register"?"Crear Cuenta":"Recuperar Contraseña"})]}),i==="login"&&c(Yt,{children:[a(Y3,{children:a("span",{children:"o"})}),c(W3,{children:[c("button",{type:"button",children:[a("span",{children:"G"})," Google"]}),c("button",{type:"button",children:[a("span",{children:"f"})," Facebook"]})]})]}),i==="forgot"?c(oc,{children:["¿No tienes cuenta? ",a("a",{onClick:()=>o("register"),children:"Regístrate"})]}):i==="login"?c(oc,{children:["¿No tienes cuenta? ",a("a",{onClick:()=>o("register"),children:"Regístrate gratis"})]}):c(oc,{children:["¿Ya tienes cuenta? ",a("a",{onClick:()=>o("login"),children:"Inicia sesión"})]})]})]})]})},Z3=u.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`,e5=u.header`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`,t5=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }

  .logo-text {
    font-size: 18px;
    font-weight: 700;
  }

  .business-name {
    font-size: 14px;
    opacity: 0.9;
    padding-left: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    .business-name {
      display: none;
    }
  }
`,n5=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,r5=u.button`
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    font-size: 11px;
    font-weight: bold;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    span:not(.badge) {
      display: none;
    }
  }
`,i5=u.div`
  position: relative;
`,o5=u.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .avatar {
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    
    span {
      display: none;
    }
  }
`,a5=u.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  overflow: hidden;
  display: ${e=>e.show?"block":"none"};
  animation: slideDown 0.2s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ya=u.button`
  width: 100%;
  padding: 14px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #667eea;
  }

  &.logout {
    color: #ef4444;
    border-top: 1px solid #e5e7eb;
    
    &:hover {
      background: #fef2f2;
    }
  }
`,s5=u.nav`
  background: white;
  padding: 0 24px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,l5=u.button`
  padding: 16px 20px;
  background: none;
  border: none;
  border-bottom: 3px solid ${e=>e.active?"#667eea":"transparent"};
  color: ${e=>e.active?"#667eea":"#6b7280"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: #f9fafb;
  }
`,c5=u.main`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`,d5=()=>{const e=Zn(),t=Os(),{cliente:n,logout:r,cantidadCarrito:i,valorCarrito:o}=bi(),{getBusinessComponents:s}=cn(),[l,d]=C.useState(!1),p=s("beauty"),h=[{path:"/cliente/dashboard",label:"Inicio",icon:"🏠"},{path:"/cliente/agendar",label:"Agendar Cita",icon:"📅"},{path:"/cliente/servicios",label:"Servicios",icon:"✂️"},{path:"/cliente/productos",label:"Productos",icon:"🛒"},{path:"/cliente/mis-citas",label:"Mis Citas",icon:"📋"}],v=()=>{r(),D.success("Sesión cerrada"),e("/cliente")},x=b=>b?b.charAt(0).toUpperCase():"U";return c(Z3,{children:[c(e5,{children:[c(t5,{children:[a("div",{className:"logo-icon",children:"TF"}),a("span",{className:"logo-text",children:"TurnoFlow"}),a("span",{className:"business-name",children:p.name})]}),c(n5,{children:[c(r5,{onClick:()=>e("/cliente/productos"),children:["🛒 ",a("span",{children:"Carrito"}),i>0&&a("span",{className:"badge",children:i})]}),c(i5,{children:[c(o5,{onClick:()=>d(!l),children:[a("div",{className:"avatar",children:x(n==null?void 0:n.nombre)}),a("span",{children:(n==null?void 0:n.nombre)||"Cliente"})]}),c(a5,{show:l,children:[a(ya,{onClick:()=>{d(!1),e("/cliente/dashboard")},children:"👤 Mi Perfil"}),a(ya,{onClick:()=>{d(!1),e("/cliente/mis-citas")},children:"📋 Mis Citas"}),c(ya,{onClick:()=>{d(!1),e("/cliente/productos")},children:["🛒 Mi Carrito ($",o.toLocaleString("es-CO"),")"]}),a(ya,{className:"logout",onClick:v,children:"🚪 Cerrar Sesión"})]})]})]})]}),a(s5,{children:h.map(b=>c(l5,{active:t.pathname===b.path,onClick:()=>e(b.path),children:[b.icon," ",b.label]},b.path))}),a(c5,{children:a(b0,{})})]})},vx=Er`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,u5=u.div`
  animation: ${vx} 0.5s ease;
`,p5=u.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 20px;
  padding: 32px;
  color: white;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .welcome-text {
    h2 {
      margin: 0 0 8px 0;
      font-size: 28px;
    }

    p {
      margin: 0;
      opacity: 0.9;
    }
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    padding: 24px;
    text-align: center;

    .actions {
      justify-content: center;
    }
  }
`,Hm=u.button`
  padding: 14px 24px;
  background: ${e=>e.$primary?"white":"rgba(255,255,255,0.2)"};
  color: ${e=>e.$primary?"var(--primary-color)":"white"};
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`,f5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`,wa=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  animation: ${vx} 0.5s ease;
  animation-delay: ${e=>e.$delay||"0s"};
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: ${e=>e.$color||"#667eea"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .info {
    flex: 1;

    h3 {
      margin: 0;
      font-size: 14px;
      color: #6b7280;
      font-weight: 500;
    }

    p {
      margin: 4px 0 0 0;
      font-size: 24px;
      font-weight: 700;
      color: #1f2937;
    }
  }
`,qm=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`,Gm=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  button {
    background: none;
    border: none;
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`,m5=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h5=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f4f6;
  }

  .date-box {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: 10px;
    padding: 12px 16px;
    text-align: center;
    min-width: 70px;

    .day {
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
    }

    .month {
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.9;
    }
  }

  .info {
    flex: 1;

    h4 {
      margin: 0 0 4px 0;
      font-size: 16px;
      color: #1f2937;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #6b7280;
    }
  }

  .status {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: ${e=>{switch(e.$status){case"pendiente":return"#fef3c7";case"confirmada":return"#d1fae5";case"completada":return"#dbeafe";case"cancelada":return"#fee2e2";default:return"#e5e7eb"}}};
    color: ${e=>{switch(e.$status){case"pendiente":return"#92400e";case"confirmada":return"#065f46";case"completada":return"#1e40af";case"cancelada":return"#991b1b";default:return"#374151"}}};
  }
`,g5=u.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  button {
    margin-top: 16px;
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,x5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,v5=u.div`
  background: linear-gradient(135deg, ${e=>e.$color||"#667eea"}20, ${e=>e.$color||"#764ba2"}10);
  border: 2px solid ${e=>e.$color||"#667eea"}30;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .tag {
    display: inline-block;
    padding: 4px 10px;
    background: ${e=>e.$color||"#667eea"};
    color: white;
    font-size: 11px;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #1f2937;
  }

  p {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #6b7280;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    color: ${e=>e.$color||"#667eea"};

    span {
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
      color: #9ca3af;
    }
  }
`,b5=()=>{const e=Zn(),{cliente:t,citas:n}=bi(),{getBusinessComponents:r}=cn();r("beauty");const i=n.filter(l=>l.estado!=="cancelada").slice(0,3),o=l=>{const d=new Date(l);return{day:d.getDate(),month:d.toLocaleDateString("es-CO",{month:"short"})}},s=[{id:1,titulo:"Descuento en Servicios",descripcion:"20% en tu primera cita",precio:0,color:"#10b981",tag:"Nueva"},{id:2,titulo:"Paquete Facial",descripcion:"Limpieza facial + Hidratación",precio:8e4,original:12e4,color:"#f59e0b",tag:"Oferta"},{id:3,titulo:"Membresía Mensual",descripcion:"Acceso ilimitado a servicios",precio:15e4,original:2e5,color:"#8b5cf6",tag:"Premium"}];return c(u5,{children:[c(p5,{children:[c("div",{className:"welcome-text",children:[c("h2",{children:["¡Hola, ",(t==null?void 0:t.nombre)||"Bienvenido","! 👋"]}),a("p",{children:"¿Qué te gustaría hacer hoy? Explora nuestros servicios o agenda tu próxima cita."})]}),c("div",{className:"actions",children:[a(Hm,{$primary:!0,onClick:()=>e("/cliente/agendar"),children:"📅 Agendar Cita"}),a(Hm,{onClick:()=>e("/cliente/servicios"),children:"✂️ Ver Servicios"})]})]}),c(f5,{children:[c(wa,{$delay:"0.1s",$color:"linear-gradient(135deg, #667eea, #764ba2)",children:[a("div",{className:"icon",children:"📅"}),c("div",{className:"info",children:[a("h3",{children:"Citas Agendadas"}),a("p",{children:n.length})]})]}),c(wa,{$delay:"0.2s",$color:"linear-gradient(135deg, #10b981, #059669)",children:[a("div",{className:"icon",children:"✅"}),c("div",{className:"info",children:[a("h3",{children:"Citas Completadas"}),a("p",{children:n.filter(l=>l.estado==="completada").length})]})]}),c(wa,{$delay:"0.3s",$color:"linear-gradient(135deg, #f59e0b, #d97706)",children:[a("div",{className:"icon",children:"⭐"}),c("div",{className:"info",children:[a("h3",{children:"Visitas Totales"}),a("p",{children:n.length})]})]}),c(wa,{$delay:"0.4s",$color:"linear-gradient(135deg, #ec4899, #db2777)",children:[a("div",{className:"icon",children:"🎁"}),c("div",{className:"info",children:[a("h3",{children:"Puntos Fidelidad"}),a("p",{children:n.length*100})]})]})]}),c(qm,{children:[c(Gm,{children:[a("h3",{children:"📅 Próximas Citas"}),a("button",{onClick:()=>e("/cliente/mis-citas"),children:"Ver todas"})]}),i.length>0?a(m5,{children:i.map(l=>{const{day:d,month:p}=o(l.fecha);return c(h5,{$status:l.estado,children:[c("div",{className:"date-box",children:[a("div",{className:"day",children:d}),a("div",{className:"month",children:p})]}),c("div",{className:"info",children:[a("h4",{children:l.servicio}),c("p",{children:[l.hora," - ",l.profesional||"Profesional asignado"]})]}),a("span",{className:"status",children:l.estado})]},l.id)})}):c(g5,{children:[a("div",{className:"icon",children:"📅"}),a("p",{children:"No tienes citas agendadas"}),a("button",{onClick:()=>e("/cliente/agendar"),children:"Agenda tu primera cita"})]})]}),c(qm,{children:[a(Gm,{children:a("h3",{children:"🎉 Promociones para Ti"})}),a(x5,{children:s.map(l=>c(v5,{$color:l.color,children:[a("span",{className:"tag",children:l.tag}),a("h4",{children:l.titulo}),a("p",{children:l.descripcion}),c("div",{className:"price",children:["$",l.precio===0?"Gratis":l.precio.toLocaleString("es-CO"),l.original&&c("span",{children:[" $",l.original.toLocaleString("es-CO")]})]})]},l.id))})]})]})},y5=Er`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Ym=u.div`
  animation: ${y5} 0.5s ease;
`,w5=u.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`,ac=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${e=>e.$active?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"#f3f4f6"};
  color: ${e=>e.$active?"white":"#9ca3af"};
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 12px;
    
    span:first-child {
      display: none;
    }
  }

  ${e=>e.$completed&&`
    background: #10b981;
    color: white;
  `}
`,Wm=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;

  h3 {
    margin: 0 0 20px 0;
    font-size: 18px;
    color: #1f2937;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,k5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`,S5=u.div`
  padding: 20px;
  background: ${e=>e.$selected?"linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(var(--secondary-rgb), 0.06))":"#f9fafb"};
  border: 2px solid ${e=>e.$selected?"var(--primary-color)":"#e5e7eb"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #1f2937;
  }

  p {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #6b7280;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .duration {
    font-size: 13px;
    color: #9ca3af;
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-color);
  }
`,C5=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qm=u.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
  }

  input, select {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
    }
  }

  .error {
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
  }
`;u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
`;u.button`
  padding: 12px;
  background: ${e=>e.$selected?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"#f3f4f6"};
  color: ${e=>e.$selected?"white":"#374151"};
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$selected?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"#e5e7eb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const E5=u.div`
  margin-top: 20px;

  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;
    min-height: 100px;
    resize: vertical;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
    }
  }
`,N5=u.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h3 {
    margin: 0 0 20px 0;
    font-size: 18px;
    color: #1f2937;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f3f4f6;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: #6b7280;
    }

    .value {
      font-weight: 600;
      color: #1f2937;
    }
  }
`,Km=u.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  button {
    flex: 1;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &.back {
      background: #f3f4f6;
      color: #374151;

      &:hover {
        background: #e5e7eb;
      }
    }

    &.confirm {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }
    }
  }
`,z5=u.div`
  text-align: center;
  padding: 60px 20px;

  .icon {
    font-size: 80px;
    margin-bottom: 24px;
  }

  h2 {
    color: #1f2937;
    margin: 0 0 12px 0;
  }

  p {
    color: #6b7280;
    margin: 0 0 32px 0;
    font-size: 16px;
  }

  button {
    padding: 16px 32px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,T5=()=>{const e=Zn(),{agregarCita:t,agregarAlCarrito:n}=bi(),{businessType:r,getBusinessComponents:i}=cn();i(r);const[o,s]=C.useState(1),[l,d]=C.useState(null),[p,h]=C.useState(""),[v,x]=C.useState(""),[b,w]=C.useState("");C.useState(!1);const k=[{id:1,nombre:"Corte de cabello",descripcion:"Corte y peinado profesional",precio:25e3,duracion:30},{id:2,nombre:"Manicure",descripcion:"Cuidados de uñas y esmalte",precio:2e4,duracion:45},{id:3,nombre:"Pedicure",descripcion:"Cuidado de pies y uñas",precio:25e3,duracion:45},{id:4,nombre:"Tratamiento facial",descripcion:"Limpieza e hidratación",precio:45e3,duracion:60},{id:5,nombre:"Coloración",descripcion:"Tinte completo de cabello",precio:6e4,duracion:90},{id:6,nombre:"Masaje relajante",descripcion:"Masaje corporal completo",precio:5e4,duracion:60}],S=()=>{const g=[];for(let y=8;y<=18;y++)g.push(`${y.toString().padStart(2,"0")}:00`),g.push(`${y.toString().padStart(2,"0")}:30`);return g},m=()=>{const g=new Date;return g.setDate(g.getDate()+1),g.toISOString().split("T")[0]},f=async()=>{if(!l||!p||!v){D.error("Por favor completa todos los campos");return}t({servicio:l.nombre,fecha:p,hora:v,notas:b,precio:l.precio}),s(3),D.success("¡Cita agendada exitosamente!")};return o===3?a(Ym,{children:c(z5,{children:[a("div",{className:"icon",children:"✅"}),a("h2",{children:"¡Cita Agendada!"}),c("p",{children:["Tu cita ha sido confirmada para el ",p," a las ",v,".",a("br",{}),"Te enviaremos un recordatorio."]}),a("button",{onClick:()=>e("/cliente/dashboard"),children:"Volver al Inicio"})]})}):c(Ym,{children:[c(w5,{children:[a(ac,{$active:o===1,$completed:o>1,children:"1. Servicio"}),a(ac,{$active:o===2,$completed:o>2,children:"2. Fecha y Hora"}),a(ac,{$active:o===3,children:"3. Confirmar"})]}),o===1&&c(Wm,{children:[a("h3",{children:"✂️ Selecciona un Servicio"}),a(k5,{children:k.map(g=>c(S5,{$selected:(l==null?void 0:l.id)===g.id,onClick:()=>d(g),children:[a("h4",{children:g.nombre}),a("p",{children:g.descripcion}),c("div",{className:"footer",children:[c("span",{className:"duration",children:["⏱️ ",g.duracion," min"]}),c("span",{className:"price",children:["$",g.precio.toLocaleString("es-CO")]})]})]},g.id))}),c(Km,{children:[a("button",{className:"back",onClick:()=>e("/cliente/dashboard"),children:"Cancelar"}),a("button",{className:"confirm",disabled:!l,onClick:()=>s(2),children:"Continuar"})]})]}),o===2&&c(Yt,{children:[c(Wm,{children:[a("h3",{children:"📅 Selecciona Fecha y Hora"}),c(C5,{children:[c(Qm,{children:[a("label",{children:"Fecha"}),a("input",{type:"date",value:p,onChange:g=>h(g.target.value),min:m()})]}),c(Qm,{children:[a("label",{children:"Hora"}),c("select",{value:v,onChange:g=>x(g.target.value),children:[a("option",{value:"",children:"Selecciona una hora"}),S().map(g=>a("option",{value:g,children:g},g))]})]})]}),c(E5,{children:[a("label",{children:"Notas adicionales (opcional)"}),a("textarea",{placeholder:"¿Alguna observación orequesta especial?",value:b,onChange:g=>w(g.target.value)})]})]}),c(N5,{children:[a("h3",{children:"📋 Resumen de tu Cita"}),c("div",{className:"summary-item",children:[a("span",{className:"label",children:"Servicio"}),a("span",{className:"value",children:l==null?void 0:l.nombre})]}),c("div",{className:"summary-item",children:[a("span",{className:"label",children:"Duración"}),c("span",{className:"value",children:[l==null?void 0:l.duracion," minutos"]})]}),c("div",{className:"summary-item",children:[a("span",{className:"label",children:"Fecha"}),a("span",{className:"value",children:p||"No seleccionada"})]}),c("div",{className:"summary-item",children:[a("span",{className:"label",children:"Hora"}),a("span",{className:"value",children:v||"No seleccionada"})]}),c("div",{className:"summary-item",children:[a("span",{className:"label",children:"Total a pagar"}),c("span",{className:"value",style:{color:"var(--primary-color)",fontSize:"18px"},children:["$",l==null?void 0:l.precio.toLocaleString("es-CO")]})]})]}),c(Km,{children:[a("button",{className:"back",onClick:()=>s(1),children:"Atrás"}),a("button",{className:"confirm",disabled:!p||!v,onClick:f,children:"Confirmar Cita"})]})]})]})},$5=Er`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,P5=u.div`
  animation: ${$5} 0.5s ease;
`,_5=u.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    color: #1f2937;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`,A5=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
`,D5=u.button`
  padding: 10px 20px;
  background: ${e=>e.$active?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"#f3f4f6"};
  color: ${e=>e.$active?"white":"#6b7280"};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, var(--primary-color), var(--secondary-color))":"#e5e7eb"};
  }
`,F5=u.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;

  input {
    flex: 1;
    padding: 14px 20px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,O5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,I5=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .image {
    height: 160px;
    background: linear-gradient(135deg, ${e=>e.$color?e.$color+"40":"rgba(var(--primary-rgb), 0.25)"}, ${e=>e.$color?e.$color+"20":"rgba(var(--secondary-rgb), 0.12)"});
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
  }

  .content {
    padding: 20px;
  }

  .category {
    display: inline-block;
    padding: 4px 10px;
    background: ${e=>e.$color?e.$color+"20":"rgba(var(--primary-rgb), 0.12)"};
    color: ${e=>e.$color||"var(--primary-color)"};
    font-size: 11px;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #1f2937;
  }

  p {
    margin: 0 0 16px 0;
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    .duration {
      font-size: 13px;
      color: #9ca3af;
    }

    .price {
      font-size: 20px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  button {
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`,L5=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
  }
`,R5=()=>{const{agregarCita:e}=bi(),{businessType:t,getBusinessComponents:n}=cn(),r=n(t),[i,o]=C.useState("todos"),[s,l]=C.useState(""),d=[{id:1,nombre:"Corte de cabello",descripcion:"Corte y peinado profesional con productos de calidad",precio:25e3,duracion:30,categoria:"cabello",color:"#f59e0b",icon:"💇"},{id:2,nombre:"Manicure profesional",descripcion:"Cuidados completos de uñas con esmalte de larga duración",precio:2e4,duracion:45,categoria:"uñas",color:"#ec4899",icon:"💅"},{id:3,nombre:"Pedicure spa",descripcion:"Tratamiento relajante para pies y uñas",precio:25e3,duracion:45,categoria:"uñas",color:"#8b5cf6",icon:"🦶"},{id:4,nombre:"Tratamiento facial",descripcion:"Limpieza profunda e hidratación para tu rostro",precio:45e3,duracion:60,categoria:"facial",color:"#10b981",icon:"✨"},{id:5,nombre:"Coloración completa",descripcion:"Tinte profesional con productos orgánicos",precio:6e4,duracion:90,categoria:"cabello",color:"#ef4444",icon:"🎨"},{id:6,nombre:"Masaje relajante",descripcion:"Masaje corporal completo para eliminar estrés",precio:5e4,duracion:60,categoria:"masaje",color:"#06b6d4",icon:"💆"},{id:7,nombre:"Mascarilla capilar",descripcion:"Tratamiento nutritivo para tu cabello",precio:3e4,duracion:40,categoria:"cabello",color:"#f59e0b",icon:"🧴"},{id:8,nombre:"Depilación",descripcion:"Depilación con cera tibia natural",precio:35e3,duracion:45,categoria:"cuerpo",color:"#ec4899",icon:"🪒"}],p=[{id:"todos",label:"Todos"},{id:"cabello",label:"Cabello"},{id:"uñas",label:"Uñas"},{id:"facial",label:"Facial"},{id:"masaje",label:"Masajes"},{id:"cuerpo",label:"Cuerpo"}],h=d.filter(x=>{const b=i==="todos"||x.categoria===i,w=x.nombre.toLowerCase().includes(s.toLowerCase())||x.descripcion.toLowerCase().includes(s.toLowerCase());return b&&w}),v=x=>{e({servicio:x.nombre,precio:x.precio,fecha:new Date().toISOString().split("T")[0],hora:"Por confirmar"}),D.success(`¡${x.nombre} agregado! Ve a "Agendar" para completar tu cita.`)};return c(P5,{children:[c(_5,{children:[a("h2",{children:"✂️ Nuestros Servicios"}),c("p",{children:["Explora todos los servicios que ",r.name," tiene para ti"]})]}),a(A5,{children:p.map(x=>a(D5,{$active:i===x.id,onClick:()=>o(x.id),children:x.label},x.id))}),a(F5,{children:a("input",{type:"text",placeholder:"Buscar servicio...",value:s,onChange:x=>l(x.target.value)})}),h.length>0?a(O5,{children:h.map(x=>c(I5,{$color:x.color,children:[a("div",{className:"image",children:x.icon}),c("div",{className:"content",children:[a("span",{className:"category",children:x.categoria}),a("h3",{children:x.nombre}),a("p",{children:x.descripcion}),c("div",{className:"footer",children:[c("div",{className:"info",children:[c("div",{className:"duration",children:["⏱️ ",x.duracion," min"]}),c("div",{className:"price",children:["$",x.precio.toLocaleString("es-CO")]})]}),a("button",{onClick:()=>v(x),children:"Reservar"})]})]})]},x.id))}):c(L5,{children:[a("div",{className:"icon",children:"🔍"}),a("h3",{children:"No se encontraron servicios"}),a("p",{children:"Intenta con otros términos de búsqueda"})]})]})},M5=Er`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,V5=u.div`
  animation: ${M5} 0.5s ease;
`,j5=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;

  .title {
    h2 {
      margin: 0 0 8px 0;
      font-size: 24px;
      color: #1f2937;
    }

    p {
      margin: 0;
      color: #6b7280;
    }
  }
`,B5=u.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
  }

  .icon {
    font-size: 24px;
  }

  .info {
    text-align: left;

    .count {
      font-size: 14px;
      font-weight: 600;
    }

    .total {
      font-size: 12px;
      opacity: 0.9;
    }
  }

  .badge {
    background: #ef4444;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    bottom: 16px;
    right: 16px;
    padding: 14px 20px;

    .info {
      display: none;
    }
  }
`,U5=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
`,H5=u.button`
  padding: 10px 20px;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea, #764ba2)":"#f3f4f6"};
  color: ${e=>e.$active?"white":"#6b7280"};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea, #764ba2)":"#e5e7eb"};
  }
`,q5=u.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;

  input {
    flex: 1;
    padding: 14px 20px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
`,G5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`,Y5=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .image {
    height: 180px;
    background: linear-gradient(135deg, ${e=>e.$color||"#667eea"}30, ${e=>e.$color||"#764ba2"}10);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    position: relative;
  }

  .discount {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #ef4444;
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .content {
    padding: 20px;
  }

  .category {
    font-size: 11px;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    margin: 4px 0 8px 0;
    font-size: 16px;
    color: #1f2937;
  }

  .description {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-container {
    .original {
      font-size: 13px;
      color: #9ca3af;
      text-decoration: line-through;
    }

    .price {
      font-size: 20px;
      font-weight: 700;
      color: #667eea;
    }
  }

  .add-button {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`,W5=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 1000;
  padding: 20px;
`,Q5=u.div`
  background: white;
  width: 100%;
  max-width: 450px;
  height: 85vh;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    border-radius: 24px;
    height: auto;
    max-height: 90vh;
  }
`,K5=u.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 20px;
    color: #1f2937;
  }

  .close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;

    &:hover {
      color: #1f2937;
    }
  }
`,J5=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
`,X5=u.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;

  .image {
    width: 70px;
    height: 70px;
    background: #f3f4f6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  .info {
    flex: 1;

    h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      color: #1f2937;
    }

    .price {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      width: 28px;
      height: 28px;
      background: #f3f4f6;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background: #e5e7eb;
      }
    }

    span {
      min-width: 24px;
      text-align: center;
      font-weight: 600;
    }
  }

  .remove {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #dc2626;
    }
  }
`,Z5=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h4 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
  }
`,e8=u.div`
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;

  .subtotal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    span:first-child {
      color: #6b7280;
    }

    span:last-child {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
    }
  }

  button {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`,t8=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0;
  }
`,n8=()=>{Zn();const{agregarAlCarrito:e,removeFromCarrito:t,updateCantidad:n,clearCarrito:r,carrito:i,cantidadCarrito:o,valorCarrito:s}=bi(),{businessType:l,getBusinessComponents:d}=cn(),p=d(l),[h,v]=C.useState("todos"),[x,b]=C.useState(""),[w,k]=C.useState(!1),S=[{id:1,nombre:"Shampoo profesional",descripcion:"Shampoo para cabello teñido",precio:35e3,categoria:"cabello",color:"#f59e0b",icon:"🧴",descuento:10},{id:2,nombre:"Mascarilla hydratant",descripcion:"Mascarilla intensiva para cabello seco",precio:42e3,categoria:"cabello",color:"#f59e0b",icon:"💆"},{id:3,nombre:"Esmalte uñas",descripcion:"Esmalte de larga duración varios colores",precio:18e3,categoria:"uñas",color:"#ec4899",icon:"💅",descuento:0},{id:4,nombre:"Crema facial",descripcion:"Crema hidratante con vitamina E",precio:55e3,categoria:"facial",color:"#10b981",icon:"✨",descuento:15},{id:5,nombre:"Bálsamo labial",descripcion:"Bálsamo nutritivo para labios",precio:12e3,categoria:"facial",color:"#10b981",icon:"👄",descuento:0},{id:6,nombre:"Aceite corporal",descripcion:"Aceite hidratante corporal",precio:48e3,categoria:"cuerpo",color:"#8b5cf6",icon:"🧴",descuento:20},{id:7,nombre:"Kit manicure",descripcion:"Kit completo de herramientas",precio:65e3,categoria:"uñas",color:"#ec4899",icon:"🧰",descuento:0},{id:8,nombre:"Spray fijador",descripcion:"Fijador de peinado profesional",precio:22e3,categoria:"cabello",color:"#f59e0b",icon:"🌀",descuento:5}],m=[{id:"todos",label:"Todos"},{id:"cabello",label:"Cabello"},{id:"uñas",label:"Uñas"},{id:"facial",label:"Facial"},{id:"cuerpo",label:"Cuerpo"}],f=S.filter(y=>{const N=h==="todos"||y.categoria===h,T=y.nombre.toLowerCase().includes(x.toLowerCase())||y.descripcion.toLowerCase().includes(x.toLowerCase());return N&&T}),g=()=>{r(),k(!1),D.success("¡Pedido enviado exitosamente! Te contactaremos pronto.")};return c(V5,{children:[a(j5,{children:c("div",{className:"title",children:[a("h2",{children:"🛒 Productos"}),c("p",{children:["Compra los productos que ",p.name," tiene para ti"]})]})}),a(U5,{children:m.map(y=>a(H5,{$active:h===y.id,onClick:()=>v(y.id),children:y.label},y.id))}),a(q5,{children:a("input",{type:"text",placeholder:"Buscar producto...",value:x,onChange:y=>b(y.target.value)})}),f.length>0?a(G5,{children:f.map(y=>c(Y5,{$color:y.color,children:[c("div",{className:"image",children:[y.icon,y.descuento>0&&c("span",{className:"discount",children:["-",y.descuento,"%"]})]}),c("div",{className:"content",children:[a("span",{className:"category",children:y.categoria}),a("h3",{children:y.nombre}),a("p",{className:"description",children:y.descripcion}),c("div",{className:"footer",children:[c("div",{className:"price-container",children:[y.descuento>0&&c("div",{className:"original",children:["$",(y.precio*100/(100-y.descuento)).toLocaleString("es-CO")]}),c("div",{className:"price",children:["$",y.precio.toLocaleString("es-CO")]})]}),a("button",{className:"add-button",onClick:()=>e(y),children:"+"})]})]})]},y.id))}):c(t8,{children:[a("div",{className:"icon",children:"🔍"}),a("h3",{children:"No se encontraron productos"}),a("p",{children:"Intenta con otros términos de búsqueda"})]}),o>0&&c(B5,{onClick:()=>k(!0),children:[a("div",{className:"icon",children:"🛒"}),c("div",{className:"info",children:[c("div",{className:"count",children:[o," producto",o!==1?"s":""]}),c("div",{className:"total",children:["$",s.toLocaleString("es-CO")]})]}),a("div",{className:"badge",children:o})]}),w&&a(W5,{onClick:()=>k(!1),children:c(Q5,{onClick:y=>y.stopPropagation(),children:[c(K5,{children:[a("h3",{children:"🛒 Tu Carrito"}),a("button",{className:"close",onClick:()=>k(!1),children:"×"})]}),a(J5,{children:i.length>0?i.map(y=>c(X5,{children:[a("div",{className:"image",children:y.icon}),c("div",{className:"info",children:[a("h4",{children:y.nombre}),c("div",{className:"price",children:["$",(y.precio*y.cantidad).toLocaleString("es-CO")]})]}),c("div",{className:"quantity",children:[a("button",{onClick:()=>n(y.id,y.cantidad-1),children:"-"}),a("span",{children:y.cantidad}),a("button",{onClick:()=>n(y.id,y.cantidad+1),children:"+"})]}),a("button",{className:"remove",onClick:()=>t(y.id),children:"🗑️"})]},y.id)):c(Z5,{children:[a("div",{className:"icon",children:"🛒"}),a("h4",{children:"Tu carrito está vacío"}),a("p",{children:"Agrega productos para continuar"})]})}),i.length>0&&c(e8,{children:[c("div",{className:"subtotal",children:[a("span",{children:"Subtotal:"}),c("span",{children:["$",s.toLocaleString("es-CO")]})]}),a("button",{onClick:g,children:"Enviar Pedido al Negocio"})]})]})})]})},r8=Er`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,i8=u.div`
  animation: ${r8} 0.5s ease;
`,o8=u.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    color: #1f2937;
  }

  p {
    margin: 0;
    color: #6b7280;
  }
`,a8=u.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
`,Vi=u.button`
  padding: 10px 20px;
  background: ${e=>e.$active?"linear-gradient(135deg, #667eea, #764ba2)":"#f3f4f6"};
  color: ${e=>e.$active?"white":"#6b7280"};
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #667eea, #764ba2)":"#e5e7eb"};
  }
`,s8=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,l8=u.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .date-box {
    background: linear-gradient(135deg, ${e=>e.$color||"#667eea"}, ${e=>e.$color||"#764ba2"});
    color: white;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    min-width: 80px;

    .day {
      font-size: 28px;
      font-weight: 700;
      line-height: 1;
    }

    .month {
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.9;
      margin-top: 4px;
    }

    .year {
      font-size: 11px;
      opacity: 0.8;
      margin-top: 2px;
    }
  }

  .content {
    flex: 1;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;

      h3 {
        margin: 0;
        font-size: 18px;
        color: #1f2937;
      }
    }

    .details {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 12px;

      span {
        font-size: 14px;
        color: #6b7280;
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }

    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
  }

  .status {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: ${e=>{switch(e.$status){case"pendiente":return"#fef3c7";case"confirmada":return"#d1fae5";case"completada":return"#dbeafe";case"cancelada":return"#fee2e2";default:return"#e5e7eb"}}};
    color: ${e=>{switch(e.$status){case"pendiente":return"#92400e";case"confirmada":return"#065f46";case"completada":return"#1e40af";case"cancelada":return"#991b1b";default:return"#374151"}}};
  }
`,Jm=u.button`
  padding: 10px 16px;
  background: ${e=>e.$primary?"linear-gradient(135deg, #667eea, #764ba2)":"#f3f4f6"};
  color: ${e=>e.$primary?"white":"#374151"};
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.cancel {
    background: #fee2e2;
    color: #991b1b;

    &:hover {
      background: #fecaca;
    }
  }
`,c8=u.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
    color: #374151;
  }

  p {
    margin: 0 0 24px 0;
  }

  button {
    padding: 14px 28px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,d8=()=>{const e=Zn(),{citas:t,cancelarCita:n}=bi(),[r,i]=C.useState("todas"),o=h=>{switch(h){case"pendiente":return"Pendiente";case"confirmada":return"Confirmada";case"completada":return"Completada";case"cancelada":return"Cancelada";default:return h}},s=h=>{switch(h){case"pendiente":return"#f59e0b";case"confirmada":return"#10b981";case"completada":return"#3b82f6";case"cancelada":return"#ef4444";default:return"#667eea"}},l=t.filter(h=>r==="todas"?!0:h.estado===r),d=h=>{const v=new Date(h);return{day:v.getDate(),month:v.toLocaleDateString("es-CO",{month:"short"}),year:v.getFullYear()}},p=h=>{window.confirm("¿Estás seguro de que deseas cancelar esta cita?")&&(n(h),D.success("Cita cancelada exitosamente"))};return c(i8,{children:[c(o8,{children:[a("h2",{children:"📋 Mis Citas"}),a("p",{children:"Gestiona todas tus citas agendadas"})]}),c(a8,{children:[a(Vi,{$active:r==="todas",onClick:()=>i("todas"),children:"Todas"}),a(Vi,{$active:r==="pendiente",onClick:()=>i("pendiente"),children:"Pendientes"}),a(Vi,{$active:r==="confirmada",onClick:()=>i("confirmada"),children:"Confirmadas"}),a(Vi,{$active:r==="completada",onClick:()=>i("completada"),children:"Completadas"}),a(Vi,{$active:r==="cancelada",onClick:()=>i("cancelada"),children:"Canceladas"})]}),l.length>0?a(s8,{children:l.map(h=>{const{day:v,month:x,year:b}=d(h.fecha),w=s(h.estado);return c(l8,{$status:h.estado,$color:w,children:[c("div",{className:"date-box",children:[a("div",{className:"day",children:v}),a("div",{className:"month",children:x}),a("div",{className:"year",children:b})]}),c("div",{className:"content",children:[c("div",{className:"header",children:[a("h3",{children:h.servicio}),a("span",{className:"status",children:o(h.estado)})]}),c("div",{className:"details",children:[c("span",{children:["🕐 ",h.hora]}),h.precio&&c("span",{children:["💰 $",h.precio.toLocaleString("es-CO")]}),h.profesional&&c("span",{children:["👤 ",h.profesional]})]}),h.notas&&a("div",{className:"details",children:c("span",{children:["📝 ",h.notas]})}),h.estado!=="cancelada"&&h.estado!=="completada"&&c("div",{className:"actions",children:[a(Jm,{$primary:!0,onClick:()=>e("/cliente/agendar"),children:"Reprogramar"}),a(Jm,{className:"cancel",onClick:()=>p(h.id),children:"Cancelar Cita"})]})]})]},h.id)})}):c(c8,{children:[a("div",{className:"icon",children:"📅"}),a("h3",{children:"No tienes citas"}),a("p",{children:"Agenda tu primera cita con nosotros"}),a("button",{onClick:()=>e("/cliente/agendar"),children:"Agendar Cita"})]})]})};function u8(){return a(ty,{children:a(ny,{children:a(Gb,{children:c("div",{className:"App",children:[c(Ub,{children:[a(Ne,{index:!0,element:a(Tw,{})}),c(Ne,{path:"cliente",children:[a(Ne,{index:!0,element:a(X3,{})}),c(Ne,{element:a(d5,{}),children:[a(Ne,{path:"dashboard",element:a(b5,{})}),a(Ne,{path:"agendar",element:a(T5,{})}),a(Ne,{path:"servicios",element:a(R5,{})}),a(Ne,{path:"productos",element:a(n8,{})}),a(Ne,{path:"mis-citas",element:a(d8,{})})]})]}),c(Ne,{path:"/",element:a(Yw,{}),children:[a(Ne,{index:!0,element:a(Rf,{})}),a(Ne,{path:"dashboard",element:a(Rf,{})}),a(Ne,{path:"super-admin",element:a(CS,{})}),a(Ne,{path:"configuration",element:a(rC,{})}),a(Ne,{path:"users",element:a(RC,{})}),a(Ne,{path:"clients",element:a(ZC,{})}),a(Ne,{path:"agenda",element:a(y4,{})}),a(Ne,{path:"servicios",element:a(R4,{})}),a(Ne,{path:"turnos",element:a(Q4,{})}),a(Ne,{path:"promociones",element:a(f6,{})}),a(Ne,{path:"arqueo",element:a(z6,{})}),a(Ne,{path:"inventario",element:a(W6,{})}),a(Ne,{path:"cobrar",element:a(j3,{})}),a(Ne,{path:"reportes",element:a(f3,{})})]})]}),a(nd,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})})})}sc.createRoot(document.getElementById("root")).render(a(de.StrictMode,{children:a(u8,{})}));
