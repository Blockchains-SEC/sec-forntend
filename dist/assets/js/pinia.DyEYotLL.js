import{k as H,r as M,m as q,i as G,w as $,a as T,g as p,l as B,t as tt,q as et,s as st,v as nt,n as ot,x as ct,c as rt}from"./@vue.CEj65B4J.js";var ut=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let D;const R=t=>D=t,J=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function vt(){const t=H(!0),c=t.run(()=>M({}));let s=[],e=[];const r=q({install(u){R(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const K=()=>{};function V(t,c,s,e=K){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),A=Symbol(),I=Symbol();function O(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!p(e)&&!B(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function lt(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function it(t){return!!(p(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const v=ct(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((S,m)=>(S[m]=q(rt(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),S),{}))}return g=z(t,b,c,s,e,!0),g}function z(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),g={deep:!0};let b,v,S=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),M({});let W;function N(o){let n;b=v=!1,typeof o=="function"?(o(e.state.value[t]),n={type:E.patchFunction,storeId:t,events:_}):(O(e.state.value[t],o),n={type:E.patchObject,payload:o,storeId:t,events:_});const l=W=Symbol();ot().then(()=>{W===l&&(b=!0)}),v=!0,P(S,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,l=n?n():{};this.$patch(j=>{y(j,l)})}:K;function U(){f.stop(),S=[],m=[],e._s.delete(t)}const F=(o,n="")=>{if(A in o)return o[I]=n,o;const l=function(){R(e);const j=Array.from(arguments),w=[],k=[];function Y(i){w.push(i)}function Z(i){k.push(i)}P(m,{args:j,name:l[I],store:h,after:Y,onError:Z});let x;try{x=o.apply(this&&this.$id===t?this:h,j)}catch(i){throw P(k,i),i}return x instanceof Promise?x.then(i=>(P(w,i),i)).catch(i=>(P(k,i),Promise.reject(i))):(P(w,x),x)};return l[A]=!0,l[I]=n,l},X={_p:e,$id:t,$onAction:V.bind(null,m),$patch:N,$reset:Q,$subscribe(o,n={}){const l=V(S,o,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],w=>{(n.flush==="sync"?v:b)&&o({storeId:t,type:E.direct,events:_},w)},y({},g,n)));return l},$dispose:U},h=T(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=H()).run(()=>c({action:F}))));for(const o in C){const n=C[o];if(p(n)&&!it(n)||B(n))u||(d&&lt(n)&&(p(n)?n.value=d[o]:O(n,d[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const l=F(n,o);C[o]=l,a.actions[o]=n}}return y(h,C),y(tt(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,v=!0,h}function St(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,g){const b=et();return a=a||(b?G(J,null):null),a&&R(a),a=D,a._s.has(e)||(u?z(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{vt as c,St as d};
