"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5926],{55767:function(e,t,n){var r=n(41376),o=n(79847),i=n(42010),c=n(54354),u=n(32685),a=n(6566),l=n(48736),f=n(85528);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&y(e,t)}(i,e);var t,n,r,o=b(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=e||{};(t=o.call(this,{element:document.createElement("div"),target:n.target})).extent=n.extent?n.extent:null;var r=void 0!==n.className?n.className:"ol-zoom-extent",c=void 0!==n.label?n.label:"E",u=void 0!==n.tipLabel?n.tipLabel:"Fit to extent",f=document.createElement("button");f.setAttribute("type","button"),f.title=u,f.appendChild("string"==typeof c?document.createTextNode(c):c),f.addEventListener(a.Z.CLICK,t.handleClick_.bind(h(t)),!1);var s=r+" "+l.XV+" "+l.hg,p=t.element;return p.className=s,p.appendChild(f),t}return t=i,(n=[{key:"handleClick_",value:function(e){e.preventDefault(),this.handleZoomToExtent()}},{key:"handleZoomToExtent",value:function(){var e=this.getMap().getView(),t=this.extent?this.extent:e.getProjection().getExtent();e.fitInternal((0,f.oJ)(t))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(u.Z),w=n(45830);new r.Z({controls:(0,w.ce)().extend([new m({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})]),layers:[new i.Z({source:new o.Z})],target:"map",view:new c.ZP({center:[0,0],zoom:2})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(55767)}]);
//# sourceMappingURL=navigation-controls.js.map