(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{421:function(t,e,n){"use strict";n.r(e);var c=n(141),r=n(169),i=n(6),b=n(0),o=[null,"http://www.opengis.net/wms"],u=Object(b.q)(o,{Service:Object(b.m)(function(t,e){return Object(b.t)({},j,t,e)}),Capability:Object(b.m)(function(t,e){return Object(b.t)({},O,t,e)})}),O=Object(b.q)(o,{Request:Object(b.m)(function(t,e){return Object(b.t)({},v,t,e)}),Exception:Object(b.m)(function(t,e){return Object(b.t)([],l,t,e)}),Layer:Object(b.m)(function(t,e){return Object(b.t)({},h,t,e)})}),a=function(t){function e(){t.call(this),this.version=void 0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFromDocument=function(t){for(var e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFromNode(e);return null},e.prototype.readFromNode=function(t){this.version=t.getAttribute("version").trim();var e=Object(b.t)({version:this.version},u,t,[]);return e||null},e}(r.a),j=Object(b.q)(o,{Name:Object(b.m)(i.h),Title:Object(b.m)(i.h),Abstract:Object(b.m)(i.h),KeywordList:Object(b.m)(B),OnlineResource:Object(b.m)(c.a),ContactInformation:Object(b.m)(function(t,e){return Object(b.t)({},m,t,e)}),Fees:Object(b.m)(i.h),AccessConstraints:Object(b.m)(i.h),LayerLimit:Object(b.m)(i.f),MaxWidth:Object(b.m)(i.f),MaxHeight:Object(b.m)(i.f)}),m=Object(b.q)(o,{ContactPersonPrimary:Object(b.m)(function(t,e){return Object(b.t)({},d,t,e)}),ContactPosition:Object(b.m)(i.h),ContactAddress:Object(b.m)(function(t,e){return Object(b.t)({},s,t,e)}),ContactVoiceTelephone:Object(b.m)(i.h),ContactFacsimileTelephone:Object(b.m)(i.h),ContactElectronicMailAddress:Object(b.m)(i.h)}),d=Object(b.q)(o,{ContactPerson:Object(b.m)(i.h),ContactOrganization:Object(b.m)(i.h)}),s=Object(b.q)(o,{AddressType:Object(b.m)(i.h),Address:Object(b.m)(i.h),City:Object(b.m)(i.h),StateOrProvince:Object(b.m)(i.h),PostCode:Object(b.m)(i.h),Country:Object(b.m)(i.h)}),l=Object(b.q)(o,{Format:Object(b.i)(i.h)}),h=Object(b.q)(o,{Name:Object(b.m)(i.h),Title:Object(b.m)(i.h),Abstract:Object(b.m)(i.h),KeywordList:Object(b.m)(B),CRS:Object(b.l)(i.h),EX_GeographicBoundingBox:Object(b.m)(function(t,e){var n=Object(b.t)({},g,t,e);if(!n)return;var c=n.westBoundLongitude,r=n.southBoundLatitude,i=n.eastBoundLongitude,o=n.northBoundLatitude;if(void 0===c||void 0===r||void 0===i||void 0===o)return;return[c,r,i,o]}),BoundingBox:Object(b.l)(function(t,e){var n=[Object(i.e)(t.getAttribute("minx")),Object(i.e)(t.getAttribute("miny")),Object(i.e)(t.getAttribute("maxx")),Object(i.e)(t.getAttribute("maxy"))],c=[Object(i.e)(t.getAttribute("resx")),Object(i.e)(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS"),extent:n,res:c}}),Dimension:Object(b.l)(function(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Object(i.b)(t.getAttribute("multipleValues")),nearestValue:Object(i.b)(t.getAttribute("nearestValue")),current:Object(i.b)(t.getAttribute("current")),values:Object(i.h)(t)}}),Attribution:Object(b.m)(function(t,e){return Object(b.t)({},f,t,e)}),AuthorityURL:Object(b.l)(function(t,e){var n=S(t,e);if(n)return n.name=t.getAttribute("name"),n;return}),Identifier:Object(b.l)(i.h),MetadataURL:Object(b.l)(function(t,e){var n=S(t,e);if(n)return n.type=t.getAttribute("type"),n;return}),DataURL:Object(b.l)(S),FeatureListURL:Object(b.l)(S),Style:Object(b.l)(function(t,e){return Object(b.t)({},L,t,e)}),MinScaleDenominator:Object(b.m)(i.d),MaxScaleDenominator:Object(b.m)(i.d),Layer:Object(b.l)(function(t,e){var n=e[e.length-1],c=Object(b.t)({},h,t,e);if(!c)return;var r=Object(i.b)(t.getAttribute("queryable"));void 0===r&&(r=n.queryable);c.queryable=void 0!==r&&r;var o=Object(i.g)(t.getAttribute("cascaded"));void 0===o&&(o=n.cascaded);c.cascaded=o;var u=Object(i.b)(t.getAttribute("opaque"));void 0===u&&(u=n.opaque);c.opaque=void 0!==u&&u;var O=Object(i.b)(t.getAttribute("noSubsets"));void 0===O&&(O=n.noSubsets);c.noSubsets=void 0!==O&&O;var a=Object(i.e)(t.getAttribute("fixedWidth"));a||(a=n.fixedWidth);c.fixedWidth=a;var j=Object(i.e)(t.getAttribute("fixedHeight"));j||(j=n.fixedHeight);c.fixedHeight=j,["Style","CRS","AuthorityURL"].forEach(function(t){if(t in n){var e=c[t]||[];c[t]=e.concat(n[t])}});return["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"].forEach(function(t){if(!(t in c)){var e=n[t];c[t]=e}}),c})}),f=Object(b.q)(o,{Title:Object(b.m)(i.h),OnlineResource:Object(b.m)(c.a),LogoURL:Object(b.m)(w)}),g=Object(b.q)(o,{westBoundLongitude:Object(b.m)(i.d),eastBoundLongitude:Object(b.m)(i.d),southBoundLatitude:Object(b.m)(i.d),northBoundLatitude:Object(b.m)(i.d)}),v=Object(b.q)(o,{GetCapabilities:Object(b.m)(C),GetMap:Object(b.m)(C),GetFeatureInfo:Object(b.m)(C)}),p=Object(b.q)(o,{Format:Object(b.l)(i.h),DCPType:Object(b.l)(function(t,e){return Object(b.t)({},A,t,e)})}),A=Object(b.q)(o,{HTTP:Object(b.m)(function(t,e){return Object(b.t)({},y,t,e)})}),y=Object(b.q)(o,{Get:Object(b.m)(S),Post:Object(b.m)(S)}),L=Object(b.q)(o,{Name:Object(b.m)(i.h),Title:Object(b.m)(i.h),Abstract:Object(b.m)(i.h),LegendURL:Object(b.l)(w),StyleSheetURL:Object(b.m)(S),StyleURL:Object(b.m)(S)}),x=Object(b.q)(o,{Format:Object(b.m)(i.h),OnlineResource:Object(b.m)(c.a)}),q=Object(b.q)(o,{Keyword:Object(b.i)(i.h)});function S(t,e){return Object(b.t)({},x,t,e)}function C(t,e){return Object(b.t)({},p,t,e)}function w(t,e){var n=S(t,e);if(n){var c=[Object(i.g)(t.getAttribute("width")),Object(i.g)(t.getAttribute("height"))];return n.size=c,n}}function B(t,e){return Object(b.t)([],q,t,e)}var R=new a;fetch("data/ogcsample.xml").then(function(t){return t.text()}).then(function(t){var e=R.read(t);document.getElementById("log").innerText=JSON.stringify(e,null,2)})}},[[421,0]]]);
//# sourceMappingURL=wms-capabilities.js.map