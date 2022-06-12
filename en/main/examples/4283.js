"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4283],{7313:function(t,r,e){function n(t,r){var e=t.length-r,n=0;do{for(var o=r;o>0;o--)t[n+r]+=t[n],n++;e-=r}while(e>0)}function o(t,r,e){for(var n=0,o=t.length,i=o/e;o>r;){for(var a=r;a>0;--a)t[n+r]+=t[n],++n;o-=r}for(var c=t.slice(),u=0;u<i;++u)for(var f=0;f<e;++f)t[e*u+f]=c[(e-f-1)*i+u]}function i(t,r,e,i,a,c){if(!r||1===r)return t;for(var u=0;u<a.length;++u){if(a[u]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(a[u]!==a[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=a[0]/8,l=2===c?1:a.length,s=0;s<i&&!(s*l*e*f>=t.byteLength);++s){var h=void 0;if(2===r){switch(a[0]){case 8:h=new Uint8Array(t,s*l*e*f,l*e*f);break;case 16:h=new Uint16Array(t,s*l*e*f,l*e*f/2);break;case 32:h=new Uint32Array(t,s*l*e*f,l*e*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(a[0]," bits per sample."))}n(h,l)}else 3===r&&o(h=new Uint8Array(t,s*l*e*f,l*e*f),l,f)}return t}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function y(){}function v(){}var d={};f(d,o,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(k([])));g&&g!==r&&e.call(g,o)&&(d=g);var m=v.prototype=p.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function n(o,i,c,u){var f=s(t[o],t,i);if("throw"!==f.type){var l=f.arg,h=l.value;return h&&"object"==a(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(f.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,f(m,"constructor",v),f(v,"constructor",y),y.displayName=f(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(x.prototype),f(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),f(m,u,"Generator"),f(m,o,(function(){return this})),f(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function u(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function f(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.d(r,{Z:function(){return l}});var l=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,e,n,o,a;return r=t,(e=[{key:"decode",value:(o=c().mark((function t(r,e){var n,o,a,u,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.decodeBlock(e);case 2:if(n=t.sent,1===(o=r.Predictor||1)){t.next=9;break}return a=!r.StripOffsets,u=a?r.TileWidth:r.ImageWidth,f=a?r.TileLength:r.RowsPerStrip||r.ImageLength,t.abrupt("return",i(n,o,u,f,r.BitsPerSample,r.PlanarConfiguration));case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,r=arguments;return new Promise((function(e,n){var i=o.apply(t,r);function a(t){u(i,e,n,a,c,"next",t)}function c(t){u(i,e,n,a,c,"throw",t)}a(void 0)}))},function(t,r){return a.apply(this,arguments)})}])&&f(r.prototype,e),n&&f(r,n),Object.defineProperty(r,"prototype",{writable:!1}),t}()},4283:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=e(7313);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,r){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t})(t,r)}function u(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=l(t);if(r){var o=l(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,r){if(r&&("object"===o(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,r){for(var e=r.length-1;e>=0;e--)t.push(r[e]);return t}function h(t){for(var r=new Uint16Array(4093),e=new Uint8Array(4093),n=0;n<=257;n++)r[n]=4096,e[n]=n;var o=258,i=9,a=0;function c(){o=258,i=9}function u(t){var r=function(t,r,e){var n=r%8,o=Math.floor(r/8),i=8-n,a=r+e-8*(o+1),c=8*(o+2)-(r+e),u=8*(o+2)-r;if(c=Math.max(0,c),o>=t.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;var f=t[o]&Math.pow(2,8-n)-1,l=f<<=e-i;if(o+1<t.length){var s=t[o+1]>>>c;l+=s<<=Math.max(0,e-u)}if(a>8&&o+2<t.length){var h=8*(o+3)-(r+e);l+=t[o+2]>>>h}return l}(t,a,i);return a+=i,r}function f(t,n){return e[o]=n,r[o]=t,++o-1}function l(t){for(var n=[],o=t;4096!==o;o=r[o])n.push(e[o]);return n}var h=[];c();for(var p,y=new Uint8Array(t),v=u(y);257!==v;){if(256===v){for(c(),v=u(y);256===v;)v=u(y);if(257===v)break;if(v>256)throw new Error("corrupted code at scanline ".concat(v));s(h,l(v)),p=v}else if(v<o){var d=l(v);s(h,d),f(p,d[d.length-1]),p=v}else{var w=l(p);if(!w)throw new Error("Bogus entry. Not in dictionary, ".concat(p," / ").concat(o,", position: ").concat(a));s(h,w),h.push(w[w.length-1]),f(p,w[w.length-1]),p=v}o+1>=Math.pow(2,i)&&(12===i?p=void 0:i++),v=u(y)}return new Uint8Array(h)}var p=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&c(t,r)}(f,t);var r,e,n,o=u(f);function f(){return i(this,f),o.apply(this,arguments)}return r=f,(e=[{key:"decodeBlock",value:function(t){return h(t).buffer}}])&&a(r.prototype,e),n&&a(r,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(n.Z)}}]);
//# sourceMappingURL=4283.js.map