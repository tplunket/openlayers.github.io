"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5926],{5767:function(t,e,n){var o=n(1376),r=n(9847),i=n(2010),c=n(4354),u=n(2685),a=n(6566),l=n(8736),f=n(5528);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v(t);if(e){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(i,t);var e,n,o,r=b(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n=t||{};(e=r.call(this,{element:document.createElement("div"),target:n.target})).extent=n.extent?n.extent:null;var o=void 0!==n.className?n.className:"ol-zoom-extent",c=void 0!==n.label?n.label:"E",u=void 0!==n.tipLabel?n.tipLabel:"Fit to extent",f=document.createElement("button");f.setAttribute("type","button"),f.title=u,f.appendChild("string"==typeof c?document.createTextNode(c):c),f.addEventListener(a.Z.CLICK,e.handleClick_.bind(h(e)),!1);var p=o+" "+l.XV+" "+l.hg,s=e.element;return s.className=p,s.appendChild(f),e}return e=i,(n=[{key:"handleClick_",value:function(t){t.preventDefault(),this.handleZoomToExtent()}},{key:"handleZoomToExtent",value:function(){var t=this.getMap().getView(),e=this.extent?this.extent:t.getProjection().getExtent();t.fitInternal((0,f.oJ)(e))}}])&&s(e.prototype,n),o&&s(e,o),Object.defineProperty(e,"prototype",{writable:!1}),i}(u.Z),w=n(5830);new o.Z({controls:(0,w.ce)().extend([new m({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})]),layers:[new i.Z({source:new r.Z})],target:"map",view:new c.ZP({center:[0,0],zoom:2})})}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(5767)}]);
//# sourceMappingURL=navigation-controls.js.map