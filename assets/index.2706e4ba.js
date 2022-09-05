(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const cs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",us=Yr(cs);function Ti(e){return!!e||e===""}function Wr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?ps(r):Wr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(Q(e))return e}}const ds=/;(?![^(]*\))/g,ms=/:(.+)/;function ps(e){const t={};return e.split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function an(e){let t="";if(ne(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=an(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ie=e=>ne(e)?e:e==null?"":L(e)||Q(e)&&(e.toString===Li||!j(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!L(t)&&!Ri(t)?String(t):t,K={},kt=[],Ce=()=>{},hs=()=>!1,gs=/^on[^a-z]/,Hn=e=>gs.test(e),Kr=e=>e.startsWith("onUpdate:"),fe=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vs=Object.prototype.hasOwnProperty,$=(e,t)=>vs.call(e,t),L=Array.isArray,At=e=>Yn(e)==="[object Map]",Mi=e=>Yn(e)==="[object Set]",j=e=>typeof e=="function",ne=e=>typeof e=="string",Xr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Fi=e=>Q(e)&&j(e.then)&&j(e.catch),Li=Object.prototype.toString,Yn=e=>Li.call(e),bs=e=>Yn(e).slice(8,-1),Ri=e=>Yn(e)==="[object Object]",Vr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ys=/-(\w)/g,Fe=Wn(e=>e.replace(ys,(t,n)=>n?n.toUpperCase():"")),xs=/\B([A-Z])/g,Tt=Wn(e=>e.replace(xs,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Wn(e=>e?`on${Kn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ws=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const _s=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class ks{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ie&&(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function As(e,t=Ie){t&&t.active&&t.effects.push(e)}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&Ze)>0,Di=e=>(e.n&Ze)>0,Os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Cs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},gr=new WeakMap;let zt=0,Ze=1;const vr=30;let _e;const ft=Symbol(""),br=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,As(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Je=!0,Ze=1<<++zt,zt<=vr?Os(this):Na(this),this.fn()}finally{zt<=vr&&Cs(this),Ze=1<<--zt,_e=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const zi=[];function Nt(){zi.push(Je),Je=!1}function Mt(){const e=zi.pop();Je=e===void 0?!0:e}function ge(e,t,n){if(Je&&_e){let r=gr.get(e);r||gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),$i(a)}}function $i(e,t){let n=!1;zt<=vr?Di(e)||(e.n|=Ze,n=!ji(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function De(e,t,n,r,a,i){const o=gr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(ft)),At(e)&&s.push(o.get(br)));break;case"delete":L(e)||(s.push(o.get(ft)),At(e)&&s.push(o.get(br)));break;case"set":At(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);yr(Jr(l))}}function yr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Es=Yr("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),Ps=Zr(),Ss=Zr(!1,!0),Is=Zr(!0),Fa=Ts();function Ts(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=U(this)[t].apply(this,n);return Mt(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?qs:Ki:t?Wi:Yi).get(r))return r;const o=L(r);if(!e&&o&&$(Fa,a))return Reflect.get(Fa,a,i);const s=Reflect.get(r,a,i);return(Xr(a)?Bi.has(a):Es(a))||(e||ge(r,"get",a),t)?s:le(s)?o&&Vr(a)?s:s.value:Q(s)?e?qi(s):ta(s):s}}const Ns=Ui(),Ms=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let o=n[r];if(Xt(o)&&le(o)&&!le(a))return!1;if(!e&&!Xt(a)&&(xr(a)||(a=U(a),o=U(o)),!L(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=L(n)&&Vr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Nn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Fs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ls(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!Bi.has(t))&&ge(e,"has",t),n}function Rs(e){return ge(e,"iterate",L(e)?"length":ft),Reflect.ownKeys(e)}const Hi={get:Ps,set:Ns,deleteProperty:Fs,has:Ls,ownKeys:Rs},js={get:Is,set(e,t){return!0},deleteProperty(e,t){return!0}},Ds=fe({},Hi,{get:Ss,set:Ms}),Qr=e=>e,qn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=qn(a),s=r?Qr:n?aa:ra;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&ge(U(e),"iterate",ft),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return qn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=qn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function ja(e){const t=U(this),{has:n,get:r}=qn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Da(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Qr:e?aa:ra;return!e&&ge(s,"iterate",ft),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Qr:t?aa:ra;return!t&&ge(i,"iterate",l?br:ft),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function zs(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:La,set:Ra,delete:ja,clear:Da,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:La,set:Ra,delete:ja,clear:Da,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[$s,Bs,Us,Hs]=zs();function ea(e,t){const n=t?e?Hs:Us:e?Bs:$s;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ys={get:ea(!1,!1)},Ws={get:ea(!1,!0)},Ks={get:ea(!0,!1)},Yi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,qs=new WeakMap;function Xs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vs(e){return e.__v_skip||!Object.isExtensible(e)?0:Xs(bs(e))}function ta(e){return Xt(e)?e:na(e,!1,Hi,Ys,Yi)}function Js(e){return na(e,!1,Ds,Ws,Wi)}function qi(e){return na(e,!0,js,Ks,Ki)}function na(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Vs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return Xt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Xi(e){return Ot(e)||Xt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Vi(e){return Mn(e,"__v_skip",!0),e}const ra=e=>Q(e)?ta(e):e,aa=e=>Q(e)?qi(e):e;function Gs(e){Je&&_e&&(e=U(e),$i(e.dep||(e.dep=Jr())))}function Zs(e,t){e=U(e),e.dep&&yr(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function Qs(e){return le(e)?e.value:e}const el={get:(e,t,n)=>Qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ji(e){return Ot(e)?e:new Proxy(e,el)}class tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,Zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Gs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function nl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new tl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Ee(e,t,n,r){if(j(e)){const i=Ge(e,t,n,r);return i&&Fi(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}rl(e,n,a,r)}function rl(e,t,n,r=!0){console.error(e)}let Fn=!1,wr=!1;const he=[];let je=0;const Ut=[];let $t=null,bt=0;const Ht=[];let Xe=null,yt=0;const Gi=Promise.resolve();let ia=null,_r=null;function al(e){const t=ia||Gi;return e?t.then(this?e.bind(this):e):t}function il(e){let t=je+1,n=he.length;for(;t<n;){const r=t+n>>>1;Vt(he[r])<e?t=r+1:n=r}return t}function Zi(e){(!he.length||!he.includes(e,Fn&&e.allowRecurse?je+1:je))&&e!==_r&&(e.id==null?he.push(e):he.splice(il(e.id),0,e),Qi())}function Qi(){!Fn&&!wr&&(wr=!0,ia=Gi.then(no))}function ol(e){const t=he.indexOf(e);t>je&&he.splice(t,1)}function eo(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Qi()}function sl(e){eo(e,$t,Ut,bt)}function ll(e){eo(e,Xe,Ht,yt)}function Vn(e,t=null){if(Ut.length){for(_r=t,$t=[...new Set(Ut)],Ut.length=0,bt=0;bt<$t.length;bt++)$t[bt]();$t=null,bt=0,_r=null,Vn(e,t)}}function to(e){if(Vn(),Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>Vt(n)-Vt(r)),yt=0;yt<Xe.length;yt++)Xe[yt]();Xe=null,yt=0}}const Vt=e=>e.id==null?1/0:e.id;function no(e){wr=!1,Fn=!0,Vn(e),he.sort((n,r)=>Vt(n)-Vt(r));const t=Ce;try{for(je=0;je<he.length;je++){const n=he[je];n&&n.active!==!1&&Ge(n,null,14)}}finally{je=0,he.length=0,to(),Fn=!1,ia=null,(he.length||Ut.length||Ht.length)&&no(e)}}function fl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(ws))}let s,l=r[s=sr(t)]||r[s=sr(Fe(t))];!l&&i&&(l=r[s=sr(Tt(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function ro(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=ro(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):fe(o,i),r.set(e,o),o)}function Jn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Tt(t))||$(e,t))}let Ne=null,ao=null;function Ln(e){const t=Ne;return Ne=e,ao=e&&e.type.__scopeId||null,t}function cl(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Ln(t),o=e(...a);return Ln(i),r._d&&Xa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:D}=e;let N,y;const C=Ln(e);try{if(n.shapeFlag&4){const z=a||r;N=Te(d.call(z,z,m,i,k,v,R)),y=l}else{const z=t;N=Te(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),y=t.props?l:ul(l)}}catch(z){Yt.length=0,Xn(z,e,1),N=te(Jt)}let F=N;if(y&&D!==!1){const z=Object.keys(y),{shapeFlag:W}=F;z.length&&W&7&&(o&&z.some(Kr)&&(y=dl(y,o)),F=Pt(F,y))}return n.dirs&&(F=Pt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),N=F,Ln(C),N}const ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},dl=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Jn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,c):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Jn(n,i))return!0}return!1}function pl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hl=e=>e.__isSuspense;function gl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):ll(e)}function vl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function cr(e,t,n=!1){const r=re||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const $a={};function Cn(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=re;let l,c=!1,d=!1;if(le(e)?(l=()=>e.value,c=xr(e)):Ot(e)?(l=()=>e,r=!0):L(e)?(d=!0,c=e.some(y=>Ot(y)||xr(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(Ot(y))return xt(y);if(j(y))return Ge(y,s,2)})):j(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ee(e,s,3,[v])}:l=Ce,t&&r){const y=l;l=()=>xt(y())}let m,v=y=>{m=N.onStop=()=>{Ge(y,s,4)}};if(Zt)return v=Ce,t?n&&Ee(t,s,3,[l(),d?[]:void 0,v]):l(),Ce;let k=d?[]:$a;const R=()=>{if(!!N.active)if(t){const y=N.run();(r||c||(d?y.some((C,F)=>Nn(C,k[F])):Nn(y,k)))&&(m&&m(),Ee(t,s,3,[y,k===$a?void 0:k,v]),k=y)}else N.run()};R.allowRecurse=!!t;let D;a==="sync"?D=R:a==="post"?D=()=>me(R,s&&s.suspense):D=()=>sl(R);const N=new Gr(l,D);return t?n?R():k=N.run():a==="post"?me(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&qr(s.scope.effects,N)}}function bl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?oo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;St(this);const s=io(a,i.bind(r),n);return o?St(o):ut(),s}function oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))xt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(Mi(e)||At(e))e.forEach(n=>{xt(n,t)});else if(Ri(e))for(const n in e)xt(e[n],t);return e}function oa(e){return j(e)?{setup:e,name:e.name}:e}const En=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function yl(e,t){lo(e,"a",t)}function xl(e,t){lo(e,"da",t)}function lo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)so(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=Gn(t,e,r,!0);fo(()=>{qr(r[t],a)},n)}function Gn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Nt(),St(n);const s=Ee(t,n,e,o);return ut(),Mt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=re)=>(!Zt||e==="sp")&&Gn(e,t,n),_l=Ue("bm"),kl=Ue("m"),Al=Ue("bu"),Ol=Ue("u"),Cl=Ue("bum"),fo=Ue("um"),El=Ue("sp"),Pl=Ue("rtg"),Sl=Ue("rtc");function Il(e,t=re){Gn("ec",e,t)}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Nt(),Ee(l,n,8,[e.el,s,e,t]),Mt())}}const co="components";function uo(e,t){return Nl(co,e,!0,t)||e}const Tl=Symbol();function Nl(e,t,n=!0,r=!1){const a=Ne||re;if(a){const i=a.type;if(e===co){const s=cf(i,!1);if(s&&(s===t||s===Fe(t)||s===Kn(Fe(t))))return i}const o=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!o&&r?i:o}}function Ba(e,t){return e&&(e[t]||e[Fe(t)]||e[Kn(Fe(t))])}function mo(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const kr=e=>e?Oo(e)?ca(e)||e.proxy:kr(e.parent):null,Rn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>ho(e),$forceUpdate:e=>e.f||(e.f=()=>Zi(e.update)),$nextTick:e=>e.n||(e.n=al.bind(e.proxy)),$watch:e=>bl.bind(e)}),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&$(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Rn[t];let m,v;if(d)return t==="$attrs"&&ge(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&$(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||t!==K&&$(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Rn,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ar=!0;function Fl(e){const t=ho(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:D,deactivated:N,beforeDestroy:y,beforeUnmount:C,destroyed:F,unmounted:z,render:W,renderTracked:ce,renderTriggered:oe,errorCaptured:Ye,serverPrefetch:ae,expose:nt,inheritAttrs:pt,components:Lt,directives:fn,filters:Oa}=t;if(c&&Ll(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const q=o[G];j(q)&&(r[G]=q.bind(n))}if(a){const G=a.call(n,n);Q(G)&&(e.data=ta(G))}if(Ar=!0,i)for(const G in i){const q=i[G],Le=j(q)?q.bind(n,n):j(q.get)?q.get.bind(n,n):Ce,ar=!j(q)&&j(q.set)?q.set.bind(n):Ce,Rt=be({get:Le,set:ar});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:ht=>Rt.value=ht})}if(s)for(const G in s)po(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{vl(q,G[q])})}d&&Ua(d,e,"c");function ue(G,q){L(q)?q.forEach(Le=>G(Le.bind(n))):q&&G(q.bind(n))}if(ue(_l,m),ue(kl,v),ue(Al,k),ue(Ol,R),ue(yl,D),ue(xl,N),ue(Il,Ye),ue(Sl,ce),ue(Pl,oe),ue(Cl,C),ue(fo,z),ue(El,ae),L(nt))if(nt.length){const G=e.exposed||(e.exposed={});nt.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:Le=>n[q]=Le})})}else e.exposed||(e.exposed={});W&&e.render===Ce&&(e.render=W),pt!=null&&(e.inheritAttrs=pt),Lt&&(e.components=Lt),fn&&(e.directives=fn)}function Ll(e,t,n=Ce,r=!1){L(e)&&(e=Or(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=cr(i.from||a,i.default,!0):o=cr(i.from||a):o=cr(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ua(e,t,n){Ee(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function po(e,t,n,r){const a=r.includes(".")?oo(n,r):()=>n[r];if(ne(e)){const i=t[e];j(i)&&Cn(a,i)}else if(j(e))Cn(a,e.bind(n));else if(Q(e))if(L(e))e.forEach(i=>po(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Cn(a,i,e)}}function ho(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,t,o)),i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rl={data:Ha,props:it,emits:it,methods:it,computed:it,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:it,directives:it,watch:Dl,provide:Ha,inject:jl};function Ha(e,t){return t?e?function(){return fe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function jl(e,t){return it(Or(e),Or(t))}function Or(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?fe(fe(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function zl(e,t,n,r=!1){const a={},i={};Mn(i,Zn,1),e.propsDefaults=Object.create(null),go(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Jn(e.emitsOptions,v))continue;const k=t[v];if(l)if($(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=Fe(v);a[R]=Cr(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{go(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Tt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m)&&!0)&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function go(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&$(a,d=Fe(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Jn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!$(c,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function vo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,k]=vo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,kt),kt;if(L(i))for(let d=0;d<i.length;d++){const m=Fe(i[d]);Ya(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Fe(d);if(Ya(m)){const v=i[d],k=o[m]=L(v)||j(v)?{type:v}:v;if(k){const R=qa(Boolean,k.type),D=qa(String,k.type);k[0]=R>-1,k[1]=D<0||R<D,(R>-1||$(k,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function qa(e,t){return L(t)?t.findIndex(n=>Ka(n,e)):j(t)&&Ka(t,e)?0:-1}const bo=e=>e[0]==="_"||e==="$stable",sa=e=>L(e)?e.map(Te):[Te(e)],Bl=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>sa(t(...a)),n);return r._c=!1,r},yo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(bo(a))continue;const i=e[a];if(j(i))t[a]=Bl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},xo=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Ul=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):yo(t,e.slots={})}else e.slots={},t&&xo(e,t);Mn(e.slots,Zn,1)},Hl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,yo(t,a)),o=t}else t&&(xo(e,t),o={default:1});if(i)for(const s in a)!bo(s)&&!(s in o)&&delete a[s]};function wo(){return{app:null,config:{isNativeTag:hs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Wl(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=wo(),o=new Set;let s=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=te(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ca(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Er(e,t,n,r,a=!1){if(L(e)){e.forEach((v,k)=>Er(v,t&&(L(t)?t[k]:t),n,r,a));return}if(En(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),j(l))Ge(l,s,12,[o,d]);else{const v=ne(l),k=le(l);if(v||k){const R=()=>{if(e.f){const D=v?d[l]:l.value;a?L(D)&&qr(D,i):L(D)?D.includes(i)||D.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,me(R,n)):R()}}}const me=gl;function Kl(e){return ql(e)}function ql(e,t){const n=_s();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ce,cloneNode:R,insertStaticContent:D}=e,N=(f,u,p,g=null,h=null,w=null,A=!1,x=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Dt(f,u)&&(g=cn(f),We(f,h,w,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:E}=u;switch(b){case la:y(f,u,p,g);break;case Jt:C(f,u,p,g);break;case Pn:f==null&&F(u,p,g,A);break;case we:fn(f,u,p,g,h,w,A,x,_);break;default:E&1?ce(f,u,p,g,h,w,A,x,_):E&6?Oa(f,u,p,g,h,w,A,x,_):(E&64||E&128)&&b.process(f,u,p,g,h,w,A,x,_,gt)}S!=null&&h&&Er(S,f&&f.ref,w,u||f,!u)},y=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},C=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},F=(f,u,p,g)=>{[f.el,f.anchor]=D(f.children,u,p,g,f.el,f.anchor)},z=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},W=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},ce=(f,u,p,g,h,w,A,x,_)=>{A=A||u.type==="svg",f==null?oe(u,p,g,h,w,A,x,_):nt(f,u,h,w,A,x,_)},oe=(f,u,p,g,h,w,A,x)=>{let _,b;const{type:S,props:E,shapeFlag:I,transition:M,patchFlag:B,dirs:H}=f;if(f.el&&R!==void 0&&B===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),I&8?d(_,f.children):I&16&&ae(f.children,_,null,g,h,w&&S!=="foreignObject",A,x),H&&rt(f,null,g,"created"),E){for(const X in E)X!=="value"&&!On(X)&&i(_,X,null,E[X],w,f.children,g,h,Re);"value"in E&&i(_,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Se(b,g,f)}Ye(_,f,f.scopeId,A,g)}H&&rt(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(_),r(_,u,p),((b=E&&E.onVnodeMounted)||Y||H)&&me(()=>{b&&Se(b,g,f),Y&&M.enter(_),H&&rt(f,null,g,"mounted")},h)},Ye=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let w=0;w<g.length;w++)k(f,g[w]);if(h){let w=h.subTree;if(u===w){const A=h.vnode;Ye(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ae=(f,u,p,g,h,w,A,x,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=x?Ve(f[b]):Te(f[b]);N(null,S,u,p,g,h,w,A,x)}},nt=(f,u,p,g,h,w,A)=>{const x=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const E=f.props||K,I=u.props||K;let M;p&&at(p,!1),(M=I.onVnodeBeforeUpdate)&&Se(M,p,u,f),S&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const B=h&&u.type!=="foreignObject";if(b?pt(f.dynamicChildren,b,x,p,g,B,w):A||Le(f,u,x,null,p,g,B,w,!1),_>0){if(_&16)Lt(x,u,E,I,p,g,h);else if(_&2&&E.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",E.style,I.style,h),_&8){const H=u.dynamicProps;for(let Y=0;Y<H.length;Y++){const X=H[Y],xe=E[X],vt=I[X];(vt!==xe||X==="value")&&i(x,X,xe,vt,h,f.children,p,g,Re)}}_&1&&f.children!==u.children&&d(x,u.children)}else!A&&b==null&&Lt(x,u,E,I,p,g,h);((M=I.onVnodeUpdated)||S)&&me(()=>{M&&Se(M,p,u,f),S&&rt(u,f,p,"updated")},g)},pt=(f,u,p,g,h,w,A)=>{for(let x=0;x<u.length;x++){const _=f[x],b=u[x],S=_.el&&(_.type===we||!Dt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,g,h,w,A,!0)}},Lt=(f,u,p,g,h,w,A)=>{if(p!==g){for(const x in g){if(On(x))continue;const _=g[x],b=p[x];_!==b&&x!=="value"&&i(f,x,b,_,A,u.children,h,w,Re)}if(p!==K)for(const x in p)!On(x)&&!(x in g)&&i(f,x,p[x],null,A,u.children,h,w,Re);"value"in g&&i(f,"value",p.value,g.value)}},fn=(f,u,p,g,h,w,A,x,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=u;M&&(x=x?x.concat(M):M),f==null?(r(b,p,g),r(S,p,g),ae(u.children,p,S,h,w,A,x,_)):E>0&&E&64&&I&&f.dynamicChildren?(pt(f.dynamicChildren,I,p,h,w,A,x),(u.key!=null||h&&u===h.subTree)&&_o(f,u,!0)):Le(f,u,p,S,h,w,A,x,_)},Oa=(f,u,p,g,h,w,A,x,_)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):rr(u,p,g,h,w,A,_):ue(f,u,_)},rr=(f,u,p,g,h,w,A)=>{const x=f.component=af(f,g,h);if(so(f)&&(x.ctx.renderer=gt),of(x),x.asyncDep){if(h&&h.registerDep(x,G),!f.el){const _=x.subTree=te(Jt);C(null,_,u,p)}return}G(x,f,u,p,h,w,A)},ue=(f,u,p)=>{const g=u.component=f.component;if(ml(f,u,p))if(g.asyncDep&&!g.asyncResolved){q(g,u,p);return}else g.next=u,ol(g.update),g.update();else u.el=f.el,g.vnode=u},G=(f,u,p,g,h,w,A)=>{const x=()=>{if(f.isMounted){let{next:S,bu:E,u:I,parent:M,vnode:B}=f,H=S,Y;at(f,!1),S?(S.el=B.el,q(f,S,A)):S=B,E&&lr(E),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Se(Y,M,S,B),at(f,!0);const X=fr(f),xe=f.subTree;f.subTree=X,N(xe,X,m(xe.el),cn(xe),f,h,w),S.el=X.el,H===null&&pl(f,X.el),I&&me(I,h),(Y=S.props&&S.props.onVnodeUpdated)&&me(()=>Se(Y,M,S,B),h)}else{let S;const{el:E,props:I}=u,{bm:M,m:B,parent:H}=f,Y=En(u);if(at(f,!1),M&&lr(M),!Y&&(S=I&&I.onVnodeBeforeMount)&&Se(S,H,u),at(f,!0),E&&or){const X=()=>{f.subTree=fr(f),or(E,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=fr(f);N(null,X,p,g,f,h,w),u.el=X.el}if(B&&me(B,h),!Y&&(S=I&&I.onVnodeMounted)){const X=u;me(()=>Se(S,H,X),h)}(u.shapeFlag&256||H&&En(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Gr(x,()=>Zi(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},q=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,$l(f,u.props,g,p),Hl(f,u.children,p),Nt(),Vn(void 0,f.update),Mt()},Le=(f,u,p,g,h,w,A,x,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,E=u.children,{patchFlag:I,shapeFlag:M}=u;if(I>0){if(I&128){Rt(b,E,p,g,h,w,A,x,_);return}else if(I&256){ar(b,E,p,g,h,w,A,x,_);return}}M&8?(S&16&&Re(b,h,w),E!==b&&d(p,E)):S&16?M&16?Rt(b,E,p,g,h,w,A,x,_):Re(b,h,w,!0):(S&8&&d(p,""),M&16&&ae(E,p,g,h,w,A,x,_))},ar=(f,u,p,g,h,w,A,x,_)=>{f=f||kt,u=u||kt;const b=f.length,S=u.length,E=Math.min(b,S);let I;for(I=0;I<E;I++){const M=u[I]=_?Ve(u[I]):Te(u[I]);N(f[I],M,p,null,h,w,A,x,_)}b>S?Re(f,h,w,!0,!1,E):ae(u,p,g,h,w,A,x,_,E)},Rt=(f,u,p,g,h,w,A,x,_)=>{let b=0;const S=u.length;let E=f.length-1,I=S-1;for(;b<=E&&b<=I;){const M=f[b],B=u[b]=_?Ve(u[b]):Te(u[b]);if(Dt(M,B))N(M,B,p,null,h,w,A,x,_);else break;b++}for(;b<=E&&b<=I;){const M=f[E],B=u[I]=_?Ve(u[I]):Te(u[I]);if(Dt(M,B))N(M,B,p,null,h,w,A,x,_);else break;E--,I--}if(b>E){if(b<=I){const M=I+1,B=M<S?u[M].el:g;for(;b<=I;)N(null,u[b]=_?Ve(u[b]):Te(u[b]),p,B,h,w,A,x,_),b++}}else if(b>I)for(;b<=E;)We(f[b],h,w,!0),b++;else{const M=b,B=b,H=new Map;for(b=B;b<=I;b++){const pe=u[b]=_?Ve(u[b]):Te(u[b]);pe.key!=null&&H.set(pe.key,b)}let Y,X=0;const xe=I-B+1;let vt=!1,Pa=0;const jt=new Array(xe);for(b=0;b<xe;b++)jt[b]=0;for(b=M;b<=E;b++){const pe=f[b];if(X>=xe){We(pe,h,w,!0);continue}let Pe;if(pe.key!=null)Pe=H.get(pe.key);else for(Y=B;Y<=I;Y++)if(jt[Y-B]===0&&Dt(pe,u[Y])){Pe=Y;break}Pe===void 0?We(pe,h,w,!0):(jt[Pe-B]=b+1,Pe>=Pa?Pa=Pe:vt=!0,N(pe,u[Pe],p,null,h,w,A,x,_),X++)}const Sa=vt?Xl(jt):kt;for(Y=Sa.length-1,b=xe-1;b>=0;b--){const pe=B+b,Pe=u[pe],Ia=pe+1<S?u[pe+1].el:g;jt[b]===0?N(null,Pe,p,Ia,h,w,A,x,_):vt&&(Y<0||b!==Sa[Y]?ht(Pe,p,Ia,2):Y--)}}},ht=(f,u,p,g,h=null)=>{const{el:w,type:A,transition:x,children:_,shapeFlag:b}=f;if(b&6){ht(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,gt);return}if(A===we){r(w,u,p);for(let E=0;E<_.length;E++)ht(_[E],u,p,g);r(f.anchor,u,p);return}if(A===Pn){z(f,u,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,u,p),me(()=>x.enter(w),h);else{const{leave:E,delayLeave:I,afterLeave:M}=x,B=()=>r(w,u,p),H=()=>{E(w,()=>{B(),M&&M()})};I?I(w,B,H):H()}else r(w,u,p)},We=(f,u,p,g=!1,h=!1)=>{const{type:w,props:A,ref:x,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:E,dirs:I}=f;if(x!=null&&Er(x,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&I,B=!En(f);let H;if(B&&(H=A&&A.onVnodeBeforeUnmount)&&Se(H,u,f),S&6)fs(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&rt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,gt,g):b&&(w!==we||E>0&&E&64)?Re(b,u,p,!1,!0):(w===we&&E&384||!h&&S&16)&&Re(_,u,p),g&&Ca(f)}(B&&(H=A&&A.onVnodeUnmounted)||M)&&me(()=>{H&&Se(H,u,f),M&&rt(f,null,u,"unmounted")},p)},Ca=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===we){ls(p,g);return}if(u===Pn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,_=()=>A(p,w);x?x(f.el,w,_):_()}else w()},ls=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},fs=(f,u,p)=>{const{bum:g,scope:h,update:w,subTree:A,um:x}=f;g&&lr(g),h.stop(),w&&(w.active=!1,We(A,f,u,p)),x&&me(x,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,g=!1,h=!1,w=0)=>{for(let A=w;A<f.length;A++)We(f[A],u,p,g,h)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&We(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),to(),u._vnode=f},gt={p:N,um:We,m:ht,r:Ca,mt:rr,mc:ae,pc:Le,pbc:pt,n:cn,o:e};let ir,or;return t&&([ir,or]=t(gt)),{render:Ea,hydrate:ir,createApp:Wl(Ea,ir)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _o(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||_o(o,s))}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,we=Symbol(void 0),la=Symbol(void 0),Jt=Symbol(void 0),Pn=Symbol(void 0),Yt=[];let Ae=null;function ct(e=!1){Yt.push(Ae=e?null:[])}function Jl(){Yt.pop(),Ae=Yt[Yt.length-1]||null}let Gt=1;function Xa(e){Gt+=e}function ko(e){return e.dynamicChildren=Gt>0?Ae||kt:null,Jl(),Gt>0&&Ae&&Ae.push(e),e}function Ct(e,t,n,r,a,i){return ko(T(e,t,n,r,a,i,!0))}function Gl(e,t,n,r,a){return ko(te(e,t,n,r,a,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",Ao=({key:e})=>e!=null?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||le(e)||j(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function T(e,t=null,n=null,r=0,a=null,i=e===we?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Sn(t),scopeId:ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Gt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const te=Zl;function Zl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Jt),Pr(e)){const s=Pt(e,t,!0);return n&&fa(s,n),Gt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=Ql(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=an(s)),Q(l)&&(Xi(l)&&!L(l)&&(l=fe({},l)),t.style=Wr(l))}const o=ne(e)?1:hl(e)?128:Vl(e)?64:Q(e)?4:j(e)?2:0;return T(e,t,n,r,a,o,i,!0)}function Ql(e){return e?Xi(e)||Zn in e?fe({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor}}function ye(e=" ",t=0){return te(la,null,e,t)}function ef(e,t){const n=te(Pn,null,e);return n.staticCount=t,n}function Te(e){return e==null||typeof e=="boolean"?te(Jt):L(e)?te(we,null,e.slice()):typeof e=="object"?Ve(e):te(la,null,String(e))}function Ve(e){return e.el===null||e.memo?e:Pt(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=an([t.class,r.class]));else if(a==="style")t.style=Wr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const nf=wo();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vo(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fl.bind(null,i),e.ce&&e.ce(i),i}let re=null;const St=e=>{re=e,e.scope.on()},ut=()=>{re&&re.scope.off(),re=null};function Oo(e){return e.vnode.shapeFlag&4}let Zt=!1;function of(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=Oo(e);zl(e,n,a,t),Ul(e,r);const i=a?sf(e,t):void 0;return Zt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ff(e):null;St(e),Nt();const i=Ge(r,e,0,[e.props,a]);if(Mt(),ut(),Fi(i)){if(i.then(ut,ut),t)return i.then(o=>{Va(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else Va(e,i,t)}else Co(e,t)}function Va(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ji(t)),Co(e,n)}let Ja;function Co(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Ja(a,c)}}e.render=r.render||Ce}St(e),Nt(),Fl(e),Mt(),ut()}function lf(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function ff(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=lf(e))},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Vi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)}}))}function cf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return j(e)&&"__vccOpts"in e}const be=(e,t)=>nl(e,t,Zt);function Eo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!L(t)?Pr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),te(e,t,n))}const df="3.2.37",mf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,Ga=ot&&ot.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(mf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ga.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ga.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)Sr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&Sr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Za=/\s*!important$/;function Sr(e,t,n){if(L(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);Za.test(n)?e.setProperty(Tt(r),n.replace(Za,""),"important"):e[r]=n}}const Qa=["Webkit","Moz","ms"],ur={};function vf(e,t){const n=ur[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Kn(r);for(let a=0;a<Qa.length;a++){const i=Qa[a]+r;if(i in e)return ur[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n);else{const i=us(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Po,xf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ir=0;const wf=Promise.resolve(),_f=()=>{Ir=0},kf=()=>Ir||(wf.then(_f),Ir=Po());function Af(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ef(t);if(r){const c=i[t]=Pf(r,a);Af(e,s,c,l)}else o&&(Of(e,s,o,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function Ef(e){let t;if(ti.test(e)){t={};let n;for(;n=e.match(ti);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Tt(e.slice(2)),t]}function Pf(e,t){const n=r=>{const a=r.timeStamp||Po();(xf||a>=n.attached-1)&&Ee(Sf(r,n.value),t,5,[r])};return n.value=e,n.attached=kf(),n}function Sf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ni=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?hf(e,r,a):t==="style"?gf(e,n,r):Hn(t)?Kr(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,a))?yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,a))};function Tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ni.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ni.test(t)&&ne(n)?!1:t in e}const Nf=fe({patchProp:If},pf);let ri;function Mf(){return ri||(ri=Kl(Nf))}const So=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ff(e){return ne(e)?document.querySelector(e):e}const Io=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Lf={props:["props"]},Rf={class:"country"},jf=["src"],Df={class:"title"},zf={class:"population"},$f=ye("Population: "),Bf={class:"region"},Uf=ye("Region: "),Hf={class:"capital"},Yf=ye("Capital: ");function Wf(e,t,n,r,a,i){return ct(),Ct("div",Rf,[T("img",{src:n.props.flags.png,alt:"country flag"},null,8,jf),T("h1",Df,ie(n.props.name.common),1),T("h1",zf,[$f,T("p",null,ie(n.props.population),1)]),T("h1",Bf,[Uf,T("p",null,ie(n.props.region),1)]),T("h1",Hf,[Yf,T("p",null,ie(n.props.capital),1)])])}const Kf=Io(Lf,[["render",Wf]]),qf=T("h1",null,"Where in the world?",-1),Xf={class:"filter-sec"},Vf={class:"in"},Jf=["oninput"],Gf={class:"select"},Zf=T("option",{seleced:""},"Filter by Region",-1),Qf=ef('<option value="Africa">Africa</option><option value="America">America</option><option value="Asia">Asia</option><option value="Europe">Europe</option><option value="Oceania">Oceania</option>',5),ec=[Zf,Qf],tc={class:"countries"},nc={data(){return{nightMode:!0,countries:[],viewedCountries:[]}},beforeMount(){fetch("https://restcountries.com/v3.1/all").then(e=>e.json()).then(e=>{this.countries=e,this.viewedCountries=e}).catch(e=>console.log(e))},methods:{searchCountry(e){this.viewedCountries=this.countries.filter((t,n,r)=>t.name.official.toLowerCase().includes(e.target.value.toLowerCase()))},regionFilterClick(e){e.target.value==="Filter by Region"?this.viewedCountries=this.countries:this.viewedCountries=this.countries.filter((t,n,r)=>t.region.toLowerCase().includes(e.target.value.toLowerCase()))},handleCountryClick(e){let t=Object.keys(e.currencies).map((a,i,o)=>e.currencies[a].name).join(", "),n=Object.keys(e.languages).map((a,i,o)=>e.languages[a]).join(", "),r=Object.keys(e.name.nativeName).map((a,i,o)=>e.name.nativeName[a].common).join(", ");localStorage.setItem("name",e.name.official),localStorage.setItem("population",e.population),localStorage.setItem("region",e.region),localStorage.setItem("sub-region",e.subregion),localStorage.setItem("capital",e.capital),localStorage.setItem("img",e.flags.png),localStorage.setItem("top-level-domain",e.tld),localStorage.setItem("borders",e.borders),localStorage.setItem("currencies",t),localStorage.setItem("languages",n),localStorage.setItem("native-names",r),window.location.replace("country.html")}}},rc=Object.assign(nc,{__name:"App",setup(e){return(t,n)=>{const r=uo("font-awesome-icon");return ct(),Ct("div",{class:an({app_dark:t.nightMode,app_light:!t.nightMode})},[T("header",null,[qf,T("div",{onClick:n[0]||(n[0]=()=>{t.nightMode=!t.nightMode}),class:"theme-btn"},[te(r,{class:"icon",icon:t.nightMode?["fas","moon"]:["fas","sun"]},null,8,["icon"]),T("p",null,ie(t.nightMode?"Dark":"Light")+" Mode",1)])]),T("section",Xf,[T("div",Vf,[te(r,{class:"icon",icon:["fas","magnifying-glass"]}),T("input",{oninput:t.searchCountry,placeholder:"Search for a country..."},null,8,Jf)]),T("div",Gf,[T("select",{onChange:n[1]||(n[1]=(...a)=>t.regionFilterClick&&t.regionFilterClick(...a)),id:"regions-filter"},ec,32),te(r,{class:"icon",icon:["fas","chevron-down"]})])]),T("div",tc,[(ct(!0),Ct(we,null,mo(t.viewedCountries,a=>(ct(),Gl(Kf,{props:a,onClick:()=>{t.handleCountryClick(a)}},null,8,["props","onClick"]))),256))])],2)}}}),ac={data(){return{name:"",population:"",region:"",subRegion:"",capital:"",img:"",tld:"",borders:"",currencies:"",languages:"",nativeName:"",nightMode:!0}},beforeMount(){this.name=localStorage.getItem("name"),this.population=localStorage.getItem("population"),this.region=localStorage.getItem("region"),this.subRegion=localStorage.getItem("sub-region"),this.capital=localStorage.getItem("capital"),this.img=localStorage.getItem("img"),this.tld=localStorage.getItem("top-level-domain"),this.borders=localStorage.getItem("borders").split(","),this.currencies=localStorage.getItem("currencies"),this.languages=localStorage.getItem("languages"),this.nativeName=localStorage.getItem("native-names")},methods:{backBtnClick(){window.location.replace("index.html")}}},ic=T("h1",null,"Where in the world?",-1),oc=T("h1",null,"BACK",-1),sc={class:"info"},lc=["src"],fc={class:"info-txt"},cc={class:"name"},uc={class:"g1"},dc=ye("Native Name: "),mc=ye("Population: "),pc=ye("Region: "),hc=ye("Sub Region: "),gc=ye("Capital: "),vc={class:"g2"},bc=ye("Top Level Domain: "),yc=ye("Currencies: "),xc=ye("Langauges: "),wc={class:"border-countries"},_c=T("h2",null,"Border Countries:",-1);function kc(e,t,n,r,a,i){const o=uo("font-awesome-icon");return ct(),Ct("div",{class:an({countryPageLight:!a.nightMode,countryPageDark:a.nightMode})},[T("header",null,[ic,T("div",{onClick:t[0]||(t[0]=()=>{this.nightMode=!this.nightMode}),class:"theme-btn"},[te(o,{class:"icon",icon:a.nightMode?["fas","moon"]:["fas","sun"]},null,8,["icon"]),T("p",null,ie(a.nightMode?"Dark":"Light")+" Mode",1)])]),T("div",{class:"back-btn",onClick:t[1]||(t[1]=(...s)=>i.backBtnClick&&i.backBtnClick(...s))},[te(o,{class:"icon",icon:["fas","arrow-left-long"]}),oc]),T("div",sc,[T("img",{src:a.img,alt:"country flag"},null,8,lc),T("div",fc,[T("h1",cc,ie(a.name),1),T("div",uc,[T("h2",null,[dc,T("p",null,ie(a.nativeName),1)]),T("h2",null,[mc,T("p",null,ie(a.population),1)]),T("h2",null,[pc,T("p",null,ie(a.region),1)]),T("h2",null,[hc,T("p",null,ie(a.subRegion),1)]),T("h2",null,[gc,T("p",null,ie(a.capital),1)])]),T("div",vc,[T("h2",null,[bc,T("p",null,ie(a.tld),1)]),T("h2",null,[yc,T("p",null,ie(a.currencies),1)]),T("h2",null,[xc,T("p",null,ie(a.languages),1)])]),T("div",wc,[_c,(ct(!0),Ct(we,null,mo(a.borders,s=>(ct(),Ct("p",null,ie(s),1))),256))])])])],2)}const Ac=Io(ac,[["render",kc]]);function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function Oc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cc(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return Pc(e)||Ic(e,t)||To(e,t)||Nc()}function on(e){return Ec(e)||Sc(e)||To(e)||Tc()}function Ec(e){if(Array.isArray(e))return Tr(e)}function Pc(e){if(Array.isArray(e))return e}function Sc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ic(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function To(e,t){if(!!e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oi=function(){},da={},No={},Mo=null,Fo={mark:oi,measure:oi};try{typeof window<"u"&&(da=window),typeof document<"u"&&(No=document),typeof MutationObserver<"u"&&(Mo=MutationObserver),typeof performance<"u"&&(Fo=performance)}catch{}var Mc=da.navigator||{},si=Mc.userAgent,li=si===void 0?"":si,Qe=da,J=No,fi=Mo,gn=Fo;Qe.document;var He=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Lo=~li.indexOf("MSIE")||~li.indexOf("Trident/"),vn,bn,yn,xn,wn,ze="___FONT_AWESOME___",Nr=16,Ro="fa",jo="svg-inline--fa",dt="data-fa-i2svg",Mr="data-fa-pseudo-element",Fc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",ci="fontawesome-i2svg",Lc="async",Rc=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),V="classic",Z="sharp",ha=[V,Z];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Qt=sn((vn={},ee(vn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),vn)),en=sn((bn={},ee(bn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(bn,Z,{solid:"fass"}),bn)),tn=sn((yn={},ee(yn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(yn,Z,{fass:"fa-solid"}),yn)),jc=sn((xn={},ee(xn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(xn,Z,{"fa-solid":"fass"}),xn)),Dc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,zo="fa-layers-text",zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$c=sn((wn={},ee(wn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(wn,Z,{900:"fass"}),wn)),$o=[1,2,3,4,5,6,7,8,9,10],Bc=$o.concat([11,12,13,14,15,16,17,18,19,20]),Uc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=new Set;Object.keys(en[V]).map(nn.add.bind(nn));Object.keys(en[Z]).map(nn.add.bind(nn));var Hc=[].concat(ha,on(nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat($o.map(function(e){return"".concat(e,"x")})).concat(Bc.map(function(e){return"w-".concat(e)})),Wt=Qe.FontAwesomeConfig||{};function Yc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=Wc(Yc(n));a!=null&&(Wt[r]=a)})}var Bo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ro,replacementClass:jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var It=O(O({},Bo),Wt);It.autoReplaceSvg||(It.observeMutations=!1);var P={};Object.keys(Bo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){It[e]=n,Kt.forEach(function(r){return r(P)})},get:function(){return It[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Kt.forEach(function(n){return n(P)})},get:function(){return It.cssPrefix}});Qe.FontAwesomeConfig=P;var Kt=[];function qc(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var qe=Nr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xc(e){if(!(!e||!He)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Vc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=Vc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Uo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Uo(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function Gc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Zc(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Lo?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ho(){var e=Ro,t=jo,n=P.cssPrefix,r=P.replacementClass,a=Qc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ui=!1;function dr(){P.autoAddCss&&!ui&&(Xc(Ho()),ui=!0)}var eu={mixout:function(){return{dom:{css:Ho,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},$e=Qe||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var Oe=$e[ze],Yo=[],tu=function e(){J.removeEventListener("DOMContentLoaded",e),zn=1,Yo.map(function(t){return t()})},zn=!1;He&&(zn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),zn||J.addEventListener("DOMContentLoaded",tu));function nu(e){!He||(zn?setTimeout(e,0):Yo.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Uo(e):"<".concat(t," ").concat(Jc(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},mr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ru(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fr(e){var t=au(e);return t.length===1?t[0].toString(16):null}function iu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,mi(t)):Oe.styles[e]=O(O({},Oe.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}var _n,kn,An,wt=Oe.styles,ou=Oe.shims,su=(_n={},ee(_n,V,Object.values(tn[V])),ee(_n,Z,Object.values(tn[Z])),_n),ba=null,Wo={},Ko={},qo={},Xo={},Vo={},lu=(kn={},ee(kn,V,Object.keys(Qt[V])),ee(kn,Z,Object.keys(Qt[Z])),kn);function fu(e){return~Hc.indexOf(e)}function cu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fu(a)?a:null}var Jo=function(){var t=function(i){return mr(wt,function(o,s,l){return o[l]=mr(s,i,{}),o},{})};Wo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Vo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in wt||P.autoFetchSvg,r=mr(ou,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});qo=r.names,Xo=r.unicodes,ba=er(P.styleDefault,{family:P.familyDefault})};qc(function(e){ba=er(e.styleDefault,{family:P.familyDefault})});Jo();function ya(e,t){return(Wo[e]||{})[t]}function uu(e,t){return(Ko[e]||{})[t]}function lt(e,t){return(Vo[e]||{})[t]}function Go(e){return qo[e]||{prefix:null,iconName:null}}function du(e){var t=Xo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Qt[r][e],i=en[r][e]||en[r][a],o=e in Oe.styles?e:null;return i||o||null}var pi=(An={},ee(An,V,Object.keys(tn[V])),ee(An,Z,Object.keys(tn[Z])),An);function tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,V,"".concat(P.cssPrefix,"-").concat(V)),ee(t,Z,"".concat(P.cssPrefix,"-").concat(Z)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return pi[V].includes(c)}))&&(s=V),(e.includes(i[Z])||e.some(function(c){return pi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=cu(P.cssPrefix,d);if(wt[d]?(d=su[s].includes(d)?jc[s][d]:d,o=d,c.prefix=d):lu[s].indexOf(d)>-1?(o=d,c.prefix=er(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Go(c.iconName):{},k=lt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!wt.far&&wt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(wt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=lt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var mu=function(){function e(){Oc(this,e),this.definitions={}}return Cc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=tn[V][s];l&&Lr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),hi=[],_t={},Et={},pu=Object.keys(Et);function hu(e,t){var n=t.mixoutsTo;return hi=e,_t={},Object.keys(Et).forEach(function(r){pu.indexOf(r)===-1&&delete Et[r]}),hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function Rr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(!!t)return t=lt(n,t)||t,di(Zo.definitions,n,t)||di(Oe.styles,n,t)}var Zo=new mu,gu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,mt("noAuto")},vu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(mt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,nu(function(){yu({autoReplaceSvgRoot:n}),mt("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=er(t[0]);return{prefix:r,iconName:lt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Dc))){var a=tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:lt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:lt(i,t)||t}}}},ve={noAuto:gu,config:P,dom:vu,parse:bu,library:Zo,findIconDefinition:jr,toHtml:ln},yu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Oe.styles).length>0||P.autoFetchSvg)&&He&&P.autoReplaceSvg&&ve.dom.i2svg({node:r})};function nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,D=R.width,N=R.height,y=a==="fak",C=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),F={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(N)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(D/N*16*.0625,"em")}:{};k&&(F.attributes[dt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||rn())},children:[l]}),delete F.attributes.title);var W=O(O({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},z),m.styles)}),ce=r.found&&n.found?Be("generateAbstractMask",W)||{children:[],attributes:{}}:Be("generateAbstractIcon",W)||{children:[],attributes:{}},oe=ce.children,Ye=ce.attributes;return W.children=oe,W.attributes=Ye,s?wu(W):xu(W)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[dt]="");var d=O({},o.styles);va(a)&&(d.transform=Zc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function _u(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pr=Oe.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ku={found:!1,width:512,height:512};function Au(e,t){!Do&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var o=pr[t][e];return r(Dr(o))}Au(e,t),r(O(O({},ku),{},{icon:P.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var vi=function(){},$r=P.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:vi,measure:vi},Bt='FA "6.2.0"',Ou=function(t){return $r.mark("".concat(Bt," ").concat(t," begins")),function(){return Qo(t)}},Qo=function(t){$r.mark("".concat(Bt," ").concat(t," ends")),$r.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},_a={begin:Ou,end:Qo},In=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function Cu(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function Eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Pu(){if(P.autoReplaceSvg===!0)return Tn.replace;var e=Tn[P.autoReplaceSvg];return e||Tn.replace}function Su(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Iu(e){return J.createElement(e)}function es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Su:Iu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(es(o,{ceFn:r}))}),a}function Tu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Tn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(es(a),n)}),n.getAttribute(dt)===null&&P.keepOriginalSource){var r=J.createComment(Tu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(P.replacementClass))return Tn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function yi(e){e()}function ts(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=yi;P.mutateApproach===Lc&&(r=Qe.requestAnimationFrame||yi),r(function(){var a=Pu(),i=_a.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function ns(){ka=!0}function Br(){ka=!1}var $n=null;function xi(e){if(!!fi&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?J:s;$n=new fi(function(c){if(!ka){var d=et();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~Uc.indexOf(m.attributeName))if(m.attributeName==="class"&&Cu(m.target)){var v=tr(ga(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(ma,k||d),R&&m.target.setAttribute(pa,R)}else Eu(m.target)&&a(m.target)})}}),He&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nu(){!$n||$n.disconnect()}function Mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tr(ga(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=uu(a.prefix,e.innerText)||ya(a.prefix,Fr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Lu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Lu(e),s=Rr("parseNodeAttributes",{},e),l=t.styleParser?Mu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ju=Oe.styles;function rs(e){var t=P.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(zo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var tt=new Set;ha.map(function(e){tt.add("fa-".concat(e))});Object.keys(Qt[V]).map(tt.add.bind(tt));Object.keys(Qt[Z]).map(tt.add.bind(tt));tt=on(tt);function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=P.autoFetchSvg?tt:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ju));i.includes("fa")||i.push("fa");var o=[".".concat(zo,":not([").concat(dt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),c=s.reduce(function(d,m){try{var v=rs(m);v&&d.push(v)}catch(k){Do||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){ts(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rs(e).then(function(n){n&&ts([n],t)})}function zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var $u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,D=n.classes,N=D===void 0?[]:D,y=n.attributes,C=y===void 0?{}:y,F=n.styles,z=F===void 0?{}:F;if(!!t){var W=t.prefix,ce=t.iconName,oe=t.icon;return nr(O({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(R||rn()):(C["aria-hidden"]="true",C.focusable="false")),wa({icons:{main:Dr(oe),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},Me),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:C,styles:z,classes:N}})})}},Bu={mixout:function(){return{icon:zu($u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=Du,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return _i(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var N=ua(D,2),y=N[0],C=N[1];k([n,wa({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Uu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nr({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},Hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return nr({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),_u({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},Yu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return nr({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:O(O({},Me),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(on(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Lo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Wu=new RegExp('"',"ug"),ki=[1105920,1112319];function Ku(e){var t=e.replace(Wu,""),n=iu(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(Fc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(oe){return oe.getAttribute(Mr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:V,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:$c[v][c],R=Ku(m),D=R.value,N=R.isSecondary,y=l[0].startsWith("FontAwesome"),C=ya(k,D),F=C;if(y){var z=du(D);z.iconName&&z.prefix&&(C=z.iconName,k=z.prefix)}if(C&&!N&&(!o||o.getAttribute(ma)!==k||o.getAttribute(pa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var W=Ru(),ce=W.extra;ce.attributes[Mr]=t,zr(C,k).then(function(oe){var Ye=wa(O(O({},W),{},{icons:{main:oe,mask:xa()},prefix:k,iconName:F,extra:ce,watchable:!0})),ae=J.createElement("svg");t==="::before"?e.insertBefore(ae,e.firstChild):e.appendChild(ae),ae.outerHTML=Ye.map(function(nt){return ln(nt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function qu(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function Xu(e){return e.parentNode!==document.head&&!~Rc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(!!He)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Xu).map(qu),a=_a.begin("searchPseudoElements");ns(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Vu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;P.searchPseudoElements&&Oi(a)}}},Ci=!1,Ju={mixout:function(){return{dom:{unwatch:function(){ns(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){xi(Rr("mutationObserverCallbacks",{}))},noAuto:function(){Nu()},watch:function(n){var r=n.observeMutationsRoot;Ci?Br():xi(Rr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ei=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gu={mixout:function(){return{parse:{transform:function(n){return Ei(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ei(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},hr={x:0,y:0,width:"100%",height:"100%"};function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zu(e){return e.tag==="g"?e.children:[e]}var Qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Gc({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},hr),{},{fill:"white"})},D=d.children?{children:d.children.map(Pi)}:{},N={tag:"g",attributes:O({},k.inner),children:[Pi(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},D))]},y={tag:"g",attributes:O({},k.outer),children:[N]},C="mask-".concat(s||rn()),F="clip-".concat(s||rn()),z={tag:"mask",attributes:O(O({},hr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Zu(v)},z]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(C,")")},hr)}),{children:r,attributes:a}}}},ed={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},td={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nd=[eu,Bu,Uu,Hu,Yu,Vu,Ju,Gu,Qu,ed,td];hu(nd,{mixoutsTo:ve});ve.noAuto;var as=ve.config,rd=ve.library;ve.dom;var Bn=ve.parse;ve.findIconDefinition;ve.toHtml;var ad=ve.icon;ve.layer;var id=ve.text;ve.counter;function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function od(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function sd(e,t){if(e==null)return{};var n=od(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ur(e){return ld(e)||fd(e)||cd(e)||ud()}function ld(e){if(Array.isArray(e))return Hr(e)}function fd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cd(e,t){if(!!e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ud(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},is={exports:{}};(function(e){(function(t){var n=function(y,C,F){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var z,W=0,ce=0;if(d(C))for(z=[],ce=C.length;W<ce;W++)z.push(n(y,C[W],F));else{z={};for(var oe in C)Object.prototype.hasOwnProperty.call(C,oe)&&(z[y(oe,F)]=n(y,C[oe],F))}return z},r=function(y,C){C=C||{};var F=C.separator||"_",z=C.split||/(?=[A-Z])/;return y.split(z).join(F)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},D=function(y,C){var F=C&&"process"in C?C.process:C;return typeof F!="function"?y:function(z,W){return F(z,y,W)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(D(a,C),y)},decamelizeKeys:function(y,C){return n(D(o,C),y,C)},pascalizeKeys:function(y,C){return n(D(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(dd)})(is);var md=is.exports,pd=["class","style"];function hd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=md.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function gd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Aa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=gd(d);break;case"style":l.style=hd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=sd(n,pd);return Eo(e.tag,ke(ke(ke({},t),{},{class:a.class,style:ke(ke({},a.style),o)},a.attrs),s),r)}var os=!1;try{os=!0}catch{}function vd(){if(!os&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function bd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ii(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bn.icon)return Bn.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ss=oa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Ii(t.icon)}),i=be(function(){return qt("classes",bd(t))}),o=be(function(){return qt("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=be(function(){return qt("mask",Ii(t.mask))}),l=be(function(){return ad(a.value,ke(ke(ke(ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return vd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=be(function(){return l.value?Aa(l.value.abstract[0],{},r):null});return function(){return c.value}}});oa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=as.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(Ur(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Eo("div",{class:i.value},r.default?r.default():[])}}});oa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=as.familyPrefix,i=be(function(){return qt("classes",[].concat(Ur(t.counter?["".concat(a,"-layers-counter")]:[]),Ur(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return qt("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=be(function(){var c=id(t.value.toString(),ke(ke({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=be(function(){return Aa(s.value,{},r)});return function(){return l.value}}});var yd={prefix:"fas",iconName:"arrow-left-long",icon:[512,512,["long-arrow-left"],"f177","M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"]},xd={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"]},wd={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},_d={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},kd={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};rd.add(wd,yd,xd,kd,_d);So(rc).component("font-awesome-icon",ss).mount("#app");So(Ac).component("font-awesome-icon",ss).mount("#app-country");
