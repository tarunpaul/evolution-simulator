(function(e){this["webpackChunk"]=function(n,r){for(var o in r)e[o]=r[o];while(n.length)t[n.pop()]=1};var n={},t={main:1},r={};var o={7421:function(){return{"./app.js":{__wbindgen_json_serialize:function(e,t){return n["7c99"].exports["__wbindgen_json_serialize"](e,t)},__wbindgen_string_new:function(e,t){return n["7c99"].exports["__wbindgen_string_new"](e,t)},__wbindgen_json_parse:function(e,t){return n["7c99"].exports["__wbindgen_json_parse"](e,t)},__wbg_new_59cb74e423758ede:function(){return n["7c99"].exports["__wbg_new_59cb74e423758ede"]()},__wbg_stack_558ba5917b466edd:function(e,t){return n["7c99"].exports["__wbg_stack_558ba5917b466edd"](e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n["7c99"].exports["__wbg_error_4bb6c2a97407129a"](e,t)},__wbindgen_object_drop_ref:function(e){return n["7c99"].exports["__wbindgen_object_drop_ref"](e)},__wbg_getRandomValues_f5e14ab7ac8e995d:function(e,t,r){return n["7c99"].exports["__wbg_getRandomValues_f5e14ab7ac8e995d"](e,t,r)},__wbg_randomFillSync_d5bd2d655fdf256a:function(e,t,r){return n["7c99"].exports["__wbg_randomFillSync_d5bd2d655fdf256a"](e,t,r)},__wbg_self_1b7a39e3a92c949c:function(){return n["7c99"].exports["__wbg_self_1b7a39e3a92c949c"]()},__wbg_require_604837428532a733:function(e,t){return n["7c99"].exports["__wbg_require_604837428532a733"](e,t)},__wbg_crypto_968f1772287e2df0:function(e){return n["7c99"].exports["__wbg_crypto_968f1772287e2df0"](e)},__wbindgen_is_undefined:function(e){return n["7c99"].exports["__wbindgen_is_undefined"](e)},__wbg_getRandomValues_a3d34b4fee3c2869:function(e){return n["7c99"].exports["__wbg_getRandomValues_a3d34b4fee3c2869"](e)},__wbindgen_throw:function(e,t){return n["7c99"].exports["__wbindgen_throw"](e,t)},__wbindgen_rethrow:function(e){return n["7c99"].exports["__wbindgen_rethrow"](e)}}}}};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[];n.push(Promise.resolve().then((function(){t[e]||importScripts(e+".0879f00439aa50d2b4ba.worker.js")})));var i={"chunk-324d239a":["7421"]}[e]||[];return i.forEach((function(e){var t=r[e];if(t)n.push(t);else{var i,s=o[e](),u=fetch(a.p+""+{7421:"6e9c9f02c290aa46a9b5"}[e]+".module.wasm");if(s instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)i=Promise.all([WebAssembly.compileStreaming(u),s]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)i=WebAssembly.instantiateStreaming(u,s);else{var c=u.then((function(e){return e.arrayBuffer()}));i=c.then((function(e){return WebAssembly.instantiate(e,s)}))}n.push(r[e]=i.then((function(n){return a.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/evolution-simulator/",a.w={},a(a.s="b621")})({b621:function(e,n,t){"use strict";t.r(n);const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),i=new WeakSet,s=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:n,port2:t}=new MessageChannel;return u(e,n),[t,[t]]},deserialize:e=>{return e.start(),f(e)}}],["throw",{canHandle:e=>i.has(e),serialize(e){const n=e instanceof Error;let t=e;return n&&(t={isError:n,message:e.message,stack:e.stack}),[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function u(e,n=self){n.addEventListener("message",(function t(r){if(!r||!r.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(y);let f;try{const n=s.slice(0,-1).reduce((e,n)=>e[n],e),t=s.reduce((e,n)=>e[n],e);switch(a){case 0:f=t;break;case 1:n[s.slice(-1)[0]]=y(r.data.value),f=!0;break;case 2:f=t.apply(n,c);break;case 3:{const e=new t(...c);f=w(e)}break;case 4:{const{port1:n,port2:t}=new MessageChannel;u(e,t),f=m(n,[n])}break;case 5:f=void 0;break}}catch(d){f=d,i.add(d)}Promise.resolve(f).catch(e=>{return i.add(e),e}).then(e=>{const[r,i]=h(e);n.postMessage(Object.assign(Object.assign({},r),{id:o}),i),5===a&&(n.removeEventListener("message",t),_(n))})})),n.start&&n.start()}function c(e){return"MessagePort"===e.constructor.name}function _(e){c(e)&&e.close()}function f(e,n){return l(e,[],n)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e,n=[],t=function(){}){let r=!1;const i=new Proxy(t,{get(t,o){if(d(r),o===a)return()=>{return v(e,{type:5,path:n.map(e=>e.toString())}).then(()=>{_(e),r=!0})};if("then"===o){if(0===n.length)return{then:()=>i};const t=v(e,{type:0,path:n.map(e=>e.toString())}).then(y);return t.then.bind(t)}return l(e,[...n,o])},set(t,o,a){d(r);const[i,s]=h(a);return v(e,{type:1,path:[...n,o].map(e=>e.toString()),value:i},s).then(y)},apply(t,a,i){d(r);const s=n[n.length-1];if(s===o)return v(e,{type:4}).then(y);if("bind"===s)return l(e,n.slice(0,-1));const[u,c]=p(i);return v(e,{type:2,path:n.map(e=>e.toString()),argumentList:u},c).then(y)},construct(t,o){d(r);const[a,i]=p(o);return v(e,{type:3,path:n.map(e=>e.toString()),argumentList:a},i).then(y)}});return i}function b(e){return Array.prototype.concat.apply([],e)}function p(e){const n=e.map(h);return[n.map(e=>e[0]),b(n.map(e=>e[1]))]}const g=new WeakMap;function m(e,n){return g.set(e,n),e}function w(e){return Object.assign(e,{[r]:!0})}function h(e){for(const[n,t]of s)if(t.canHandle(e)){const[r,o]=t.serialize(e);return[{type:3,name:n,value:r},o]}return[{type:0,value:e},g.get(e)||[]]}function y(e){switch(e.type){case 3:return s.get(e.name).deserialize(e.value);case 0:return e.value}}function v(e,n,t){return new Promise(r=>{const o=x();e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===o&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},n),t)})}function x(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}t.d(n,"initSimulation",(function(){return k})),t.d(n,"advanceSimulation",(function(){return M})),t.d(n,"canContinue",(function(){return P})),t.d(n,"getResults",(function(){return E})),t.d(n,"getGeneration",(function(){return O})),t.d(n,"getStatistics",(function(){return A}));const S=t.e("chunk-324d239a").then(t.bind(null,"7c99"));S.then(e=>{console.log("setting debug hook"),e.browser_debug()});let j=null;async function k(e,n=[]){const t=await S;j=t.SquareWorld.new(e.size,e.seed,e.food_per_generation,e.preset),n.forEach(e=>{j.add_creatures(e)})}function M(e){return j.run(e)}function P(){return j.can_continue()}function E(){return j.get_results()}function O(e){return j.get_generation(e)}function A(e){return j.get_statistics(e)}u(Object.keys(n).reduce((function(e,t){return"__esModule"==t?e:(e[t]=n[t],e)}),{}))}});
//# sourceMappingURL=0879f00439aa50d2b4ba.worker.js.map