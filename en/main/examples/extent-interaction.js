"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6398],{7487:function(e,t,n){var r=n(1510),o=n(2739),i=n(392),a=n(1248),u=n(5469),l=n(1291),c=n(1372),s=n(5783),f=n(6104),p=n(6923),h=n(2932),y=n(9039),v=n(5528),d=n(2810);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}}).apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k="extentchanged",T=function(e){m(n,e);var t=E(n);function n(e){var r;return O(this,n),(r=t.call(this,k)).extent=e,r}return w(n)}(r.ZP);function Z(){var e=(0,y.Ly)();return function(t,n){return e[i.Z.POINT]}}function j(e){return function(t){return(0,p.hI)([e,t])}}function S(e,t){return e[0]==t[0]?function(n){return(0,p.hI)([e,[n[0],t[1]]])}:e[1]==t[1]?function(n){return(0,p.hI)([e,[t[0],n[1]]])}:null}var C=function(e){m(n,e);var t=E(n);function n(e){var r;O(this,n);var o,a=e||{};return(r=t.call(this,a)).on,r.once,r.un,r.condition_=a.condition?a.condition:f.Bx,r.extent_=null,r.pointerHandler_=null,r.pixelTolerance_=void 0!==a.pixelTolerance?a.pixelTolerance:10,r.snappedToVertex_=!1,r.extentFeature_=null,r.vertexFeature_=null,e||(e={}),r.extentOverlay_=new c.Z({source:new s.Z({useSpatialIndex:!1,wrapX:!!e.wrapX}),style:e.boxStyle?e.boxStyle:(o=(0,y.Ly)(),function(e,t){return o[i.Z.POLYGON]}),updateWhileAnimating:!0,updateWhileInteracting:!0}),r.vertexOverlay_=new c.Z({source:new s.Z({useSpatialIndex:!1,wrapX:!!e.wrapX}),style:e.pointerStyle?e.pointerStyle:Z(),updateWhileAnimating:!0,updateWhileInteracting:!0}),e.extent&&r.setExtent(e.extent),r}return w(n,[{key:"snapToVertex_",value:function(e,t){var n=t.getCoordinateFromPixelInternal(e),r=this.getExtentInternal();if(r){var o=function(e){return[[[e[0],e[1]],[e[0],e[3]]],[[e[0],e[3]],[e[2],e[3]]],[[e[2],e[3]],[e[2],e[1]]],[[e[2],e[1]],[e[0],e[1]]]]}(r);o.sort((function(e,t){return(0,h.Bs)(n,e)-(0,h.Bs)(n,t)}));var i=o[0],a=(0,h.oL)(n,i),u=t.getPixelFromCoordinateInternal(a);if((0,h.TE)(e,u)<=this.pixelTolerance_){var l=t.getPixelFromCoordinateInternal(i[0]),c=t.getPixelFromCoordinateInternal(i[1]),s=(0,h.bI)(u,l),f=(0,h.bI)(u,c),p=Math.sqrt(Math.min(s,f));return this.snappedToVertex_=p<=this.pixelTolerance_,this.snappedToVertex_&&(a=s>f?i[1]:i[0]),a}}return null}},{key:"handlePointerMove_",value:function(e){var t=e.pixel,n=e.map,r=this.snapToVertex_(t,n);r||(r=n.getCoordinateFromPixelInternal(t)),this.createOrUpdatePointerFeature_(r)}},{key:"createOrUpdateExtentFeature_",value:function(e){var t=this.extentFeature_;return t?e?t.setGeometry((0,v.oJ)(e)):t.setGeometry(void 0):(t=e?new o.Z((0,v.oJ)(e)):new o.Z({}),this.extentFeature_=t,this.extentOverlay_.getSource().addFeature(t)),t}},{key:"createOrUpdatePointerFeature_",value:function(e){var t=this.vertexFeature_;t?t.getGeometry().setCoordinates(e):(t=new o.Z(new u.Z(e)),this.vertexFeature_=t,this.vertexOverlay_.getSource().addFeature(t));return t}},{key:"handleEvent",value:function(e){return!e.originalEvent||!this.condition_(e)||(e.type!=a.Z.POINTERMOVE||this.handlingDownUpSequence||this.handlePointerMove_(e),_(F(n.prototype),"handleEvent",this).call(this,e),!1)}},{key:"handleDownEvent",value:function(e){var t=e.pixel,n=e.map,r=this.getExtentInternal(),o=this.snapToVertex_(t,n),i=function(e){var t=null,n=null;return e[0]==r[0]?t=r[2]:e[0]==r[2]&&(t=r[0]),e[1]==r[1]?n=r[3]:e[1]==r[3]&&(n=r[1]),null!==t&&null!==n?[t,n]:null};if(o&&r){var a=o[0]==r[0]||o[0]==r[2]?o[0]:null,u=o[1]==r[1]||o[1]==r[3]?o[1]:null;null!==a&&null!==u?this.pointerHandler_=j(i(o)):null!==a?this.pointerHandler_=S(i([a,r[1]]),i([a,r[3]])):null!==u&&(this.pointerHandler_=S(i([r[0],u]),i([r[2],u])))}else o=n.getCoordinateFromPixelInternal(t),this.setExtent([o[0],o[1],o[0],o[1]]),this.pointerHandler_=j(o);return!0}},{key:"handleDragEvent",value:function(e){if(this.pointerHandler_){var t=e.coordinate;this.setExtent(this.pointerHandler_(t)),this.createOrUpdatePointerFeature_(t)}}},{key:"handleUpEvent",value:function(e){this.pointerHandler_=null;var t=this.getExtentInternal();return t&&0!==(0,p.bg)(t)||this.setExtent(null),!1}},{key:"setMap",value:function(e){this.extentOverlay_.setMap(e),this.vertexOverlay_.setMap(e),_(F(n.prototype),"setMap",this).call(this,e)}},{key:"getExtent",value:function(){return(0,d.Fj)(this.getExtentInternal(),this.getMap().getView().getProjection())}},{key:"getExtentInternal",value:function(){return this.extent_}},{key:"setExtent",value:function(e){this.extent_=e||null,this.createOrUpdateExtentFeature_(e),this.dispatchEvent(new T(this.extent_))}}]),n}(l.Z),M=n(1376),R=n(9847),H=n(2010),V=n(4354),U=new M.Z({layers:[new H.Z({source:new R.Z})],target:"map",view:new V.ZP({center:[0,0],zoom:2})}),B=new C({condition:f.vY});U.addInteraction(B)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7487)}]);
//# sourceMappingURL=extent-interaction.js.map