"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6827],{1738:function(e,t,n){var o=n(1376),r=n(9847),i=n(2010),c=n(4354),u=n(2685),a=n(5830),l=n(5486),f=n(2810);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var t,n,o,r=b(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.call(this,{element:document.createElement("div")})).element.setAttribute("hidden","hidden"),e.element.className="ol-mask",e.element.innerHTML="<div>Map not usable</div>",e}return t=i,n&&d(t.prototype,n),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(u.Z),w=document.getElementById("map"),g=new o.Z({target:w,controls:(0,a.ce)().extend([new l.Z,new h]),layers:[new i.Z({source:new r.Z})],view:new c.ZP({center:(0,f.mi)([37.41,8.82]),zoom:4})});function O(){v&&(v.close(),v=void 0)}window.addEventListener("pagehide",O);var E=document.getElementById("external-map-button");function j(){w.style.height="",g.setTarget(w),E.disabled=!1}function P(){if(v){var e=v.document.getElementById("map");e&&("visible"===document.visibilityState?(e.classList.remove("unusable"),e.setAttribute("tabindex","0"),e.focus()):(e.removeAttribute("tabindex"),e.classList.add("unusable")))}}window.addEventListener("visibilitychange",P),E.addEventListener("click",(function(){var e=document.getElementById("blocker-notice");e.setAttribute("hidden","hidden"),E.disabled=!0;var t=setTimeout((function(){O(),j(),e.removeAttribute("hidden"),t=void 0}),3e3);(v=window.open("resources/external-map-map.html","MapWindow","toolbar=0,location=0,menubar=0,width=800,height=600")).addEventListener("DOMContentLoaded",(function(){var e=v.document.getElementById("map");w.style.height="0px",g.setTarget(e),t&&(t=clearTimeout(t)),v.addEventListener("pagehide",(function(){j(),O()})),P()}))}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(1738)}]);
//# sourceMappingURL=external-map.js.map