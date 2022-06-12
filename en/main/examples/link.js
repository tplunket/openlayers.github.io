"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2799],{3368:function(t,e,n){var r=n(6566),i=n(4975),o=n(5395),a=n(2275),s=n(2016),u=n(2990);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=h(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}}).apply(this,arguments)}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function p(t,e){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){return parseFloat(t)}function w(t){return function(t){return(0,u.FH)(t,5)}(t).toString()}function b(t,e){return!isNaN(t)&&t!==d(w(e))}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(l,t);var e,n,i,u=y(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),e=u.call(this);var n,r=(0,a.f0)({animate:!0,replace:!1,prefix:""},t||{});return n=!0===r.animate?{duration:250}:r.animate?r.animate:null,e.animationOptions_=n,e.replace_=r.replace,e.prefix_=r.prefix,e.listenerKeys_=[],e.initial_=!0,e.updateState_=e.updateState_.bind(g(e)),e}return e=l,(n=[{key:"getParamName_",value:function(t){return this.prefix_?this.prefix_+t:t}},{key:"get_",value:function(t,e){return t.get(this.getParamName_(e))}},{key:"set_",value:function(t,e,n){t.set(this.getParamName_(e),n)}},{key:"delete_",value:function(t,e){t.delete(this.getParamName_(e))}},{key:"setMap",value:function(t){var e=this.getMap();f(v(l.prototype),"setMap",this).call(this,t),t!==e&&(e&&this.unregisterListeners_(e),t&&(this.initial_=!0,this.updateState_(),this.registerListeners_(t)))}},{key:"registerListeners_",value:function(t){this.listenerKeys_.push((0,s.oL)(t,o.Z.MOVEEND,this.updateUrl_,this),(0,s.oL)(t.getLayerGroup(),r.Z.CHANGE,this.updateUrl_,this),(0,s.oL)(t,"change:layergroup",this.handleChangeLayerGroup_,this)),this.replace_||addEventListener("popstate",this.updateState_)}},{key:"unregisterListeners_",value:function(t){for(var e=0,n=this.listenerKeys_.length;e<n;++e)(0,s.bN)(this.listenerKeys_[e]);this.listenerKeys_.length=0,this.replace_||removeEventListener("popstate",this.updateState_);var r=new URL(window.location.href),i=r.searchParams;this.delete_(i,"x"),this.delete_(i,"y"),this.delete_(i,"z"),this.delete_(i,"r"),this.delete_(i,"l"),window.history.replaceState(null,"",r)}},{key:"handleChangeLayerGroup_",value:function(){var t=this.getMap();t&&(this.unregisterListeners_(t),this.registerListeners_(t),this.initial_=!0,this.updateUrl_())}},{key:"updateState_",value:function(){var t=this.getMap();if(t){var e=t.getView();if(e){var n=new URL(window.location.href).searchParams,r=!1,i={},o=d(this.get_(n,"z"));b(o,e.getZoom())&&(r=!0,i.zoom=o);var s=d(this.get_(n,"r"));b(s,e.getRotation())&&(r=!0,i.rotation=s);var u,l,c=[d(this.get_(n,"x")),d(this.get_(n,"y"))];u=c,l=e.getCenter(),(b(u[0],l[0])||b(u[1],l[1]))&&(r=!0,i.center=c),r&&(!this.initial_&&this.animationOptions_?e.animate((0,a.f0)(i,this.animationOptions_)):(i.center&&e.setCenter(i.center),"zoom"in i&&e.setZoom(i.zoom),"rotation"in i&&e.setRotation(i.rotation)));var f=t.getAllLayers(),h=this.get_(n,"l");if(h&&h.length===f.length)for(var p=0,y=f.length;p<y;++p){var _=parseInt(h[p]);if(!isNaN(_)){var g=Boolean(_),v=f[p];v.getVisible()!==g&&v.setVisible(g)}}}}}},{key:"updateUrl_",value:function(){var t=this.getMap();if(t){var e=t.getView();if(e){var n=this.initial_;this.initial_=!1;for(var r=e.getCenter(),i=e.getZoom(),o=e.getRotation(),a=t.getAllLayers(),s=new Array(a.length),u=0,l=a.length;u<l;++u)s[u]=a[u].getVisible()?"1":"0";var c=new URL(window.location.href),f=c.searchParams;this.set_(f,"x",w(r[0])),this.set_(f,"y",w(r[1])),this.set_(f,"z",w(i)),this.set_(f,"r",w(o)),this.set_(f,"l",s.join("")),c.href!==window.location.href&&(n||this.replace_?window.history.replaceState(null,"",c):window.history.pushState(null,"",c))}}}}])&&c(e.prototype,n),i&&c(e,i),Object.defineProperty(e,"prototype",{writable:!1}),l}(i.ZP),O=n(1376),P=n(9847),L=n(2010),S=n(4354);new O.Z({layers:[new L.Z({source:new P.Z})],target:"map",view:new S.ZP({center:[0,0],zoom:2})}).addInteraction(new m)}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(3368)}]);
//# sourceMappingURL=link.js.map