"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7970],{814:function(t,e,r){var n=r(1376),i=r(4354),o=r(2739),a=r(2025),u=r(2662),s=r(8675),l=r(5691),c=r(392),h=r(5265),f=r(8460),y=r(3077),d=r(1988),w=r(5469),v=r(5528),_=r(2810),p=r(6877),b=r(2275);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){return(k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=P(t);if(e){var i=P(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function M(t,e,r){return e&&U(t.prototype,e),r&&U(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var G=1,S=2,I=3,B=4,W=5,T=6,D=7,N=15,j=16,A=17,F=function(){function t(e){C(this,t),this.view_=e,this.pos_=0,this.initialized_=!1,this.isLittleEndian_=!1,this.hasZ_=!1,this.hasM_=!1,this.srid_=null,this.layout_=l.Z.XY}return M(t,[{key:"readUint8",value:function(){return this.view_.getUint8(this.pos_++)}},{key:"readUint32",value:function(t){return this.view_.getUint32((this.pos_+=4)-4,void 0!==t?t:this.isLittleEndian_)}},{key:"readDouble",value:function(t){return this.view_.getFloat64((this.pos_+=8)-8,void 0!==t?t:this.isLittleEndian_)}},{key:"readPoint",value:function(){var t=[];return t.push(this.readDouble()),t.push(this.readDouble()),this.hasZ_&&t.push(this.readDouble()),this.hasM_&&t.push(this.readDouble()),t}},{key:"readLineString",value:function(){for(var t=this.readUint32(),e=[],r=0;r<t;r++)e.push(this.readPoint());return e}},{key:"readPolygon",value:function(){for(var t=this.readUint32(),e=[],r=0;r<t;r++)e.push(this.readLineString());return e}},{key:"readWkbHeader",value:function(t){var e=this.readUint8()>0,r=this.readUint32(e),n=Math.floor((268435455&r)/1e3),i=Boolean(2147483648&r)||1===n||3===n,o=Boolean(1073741824&r)||2===n||3===n,a=Boolean(536870912&r),u=(268435455&r)%1e3,s=["XY",i?"Z":"",o?"M":""].join(""),l=a?this.readUint32(e):null;if(void 0!==t&&t!==u)throw new Error("Unexpected WKB geometry type "+u);if(this.initialized_){if(this.isLittleEndian_!==e)throw new Error("Inconsistent endian");if(this.layout_!==s)throw new Error("Inconsistent geometry layout");if(l&&this.srid_!==l)throw new Error("Inconsistent coordinate system (SRID)")}else this.isLittleEndian_=e,this.hasZ_=i,this.hasM_=o,this.layout_=s,this.srid_=l,this.initialized_=!0;return u}},{key:"readWkbPayload",value:function(t){switch(t){case G:return this.readPoint();case S:return this.readLineString();case I:case A:return this.readPolygon();case B:return this.readMultiPoint();case W:return this.readMultiLineString();case T:case N:case j:return this.readMultiPolygon();case D:return this.readGeometryCollection();default:throw new Error("Unsupported WKB geometry type "+t+" is found")}}},{key:"readWkbBlock",value:function(t){return this.readWkbPayload(this.readWkbHeader(t))}},{key:"readWkbCollection",value:function(t,e){for(var r=this.readUint32(),n=[],i=0;i<r;i++){var o=t.call(this,e);o&&n.push(o)}return n}},{key:"readMultiPoint",value:function(){return this.readWkbCollection(this.readWkbBlock,G)}},{key:"readMultiLineString",value:function(){return this.readWkbCollection(this.readWkbBlock,S)}},{key:"readMultiPolygon",value:function(){return this.readWkbCollection(this.readWkbBlock,I)}},{key:"readGeometryCollection",value:function(){return this.readWkbCollection(this.readGeometry)}},{key:"readGeometry",value:function(){var t=this.readWkbHeader(),e=this.readWkbPayload(t);switch(t){case G:return new w.Z(e,this.layout_);case S:return new h.Z(e,this.layout_);case I:case A:return new v.ZP(e,this.layout_);case B:return new y.Z(e,this.layout_);case W:return new f.Z(e,this.layout_);case T:case N:case j:return new d.Z(e,this.layout_);case D:return new s.Z(e);default:return null}}},{key:"getSrid",value:function(){return this.srid_}}]),t}(),R=function(){function t(e){C(this,t),e=e||{},this.layout_=e.layout,this.isLittleEndian_=!1!==e.littleEndian,this.isEWKB_=!1!==e.ewkb,this.writeQueue_=[],this.nodata_=(0,b.f0)({X:0,Y:0,Z:0,M:0},e.nodata)}return M(t,[{key:"writeUint8",value:function(t){this.writeQueue_.push([1,t])}},{key:"writeUint32",value:function(t){this.writeQueue_.push([4,t])}},{key:"writeDouble",value:function(t){this.writeQueue_.push([8,t])}},{key:"writePoint",value:function(t,e){var r,n=b.f0.apply(null,e.split("").map((function(e,r){return O({},e,t[r])}))),i=E(this.layout_);try{for(i.s();!(r=i.n()).done;){var o=r.value;this.writeDouble(o in n?n[o]:this.nodata_[o])}}catch(t){i.e(t)}finally{i.f()}}},{key:"writeLineString",value:function(t,e){this.writeUint32(t.length);for(var r=0;r<t.length;r++)this.writePoint(t[r],e)}},{key:"writePolygon",value:function(t,e){this.writeUint32(t.length);for(var r=0;r<t.length;r++)this.writeLineString(t[r],e)}},{key:"writeWkbHeader",value:function(t,e){t%=1e3,this.layout_.indexOf("Z")>=0&&(t+=this.isEWKB_?2147483648:1e3),this.layout_.indexOf("M")>=0&&(t+=this.isEWKB_?1073741824:2e3),this.isEWKB_&&Number.isInteger(e)&&(t|=536870912),this.writeUint8(this.isLittleEndian_?1:0),this.writeUint32(t),this.isEWKB_&&Number.isInteger(e)&&this.writeUint32(e)}},{key:"writeMultiPoint",value:function(t,e){this.writeUint32(t.length);for(var r=0;r<t.length;r++)this.writeWkbHeader(1),this.writePoint(t[r],e)}},{key:"writeMultiLineString",value:function(t,e){this.writeUint32(t.length);for(var r=0;r<t.length;r++)this.writeWkbHeader(2),this.writeLineString(t[r],e)}},{key:"writeMultiPolygon",value:function(t,e){this.writeUint32(t.length);for(var r=0;r<t.length;r++)this.writeWkbHeader(3),this.writePolygon(t[r],e)}},{key:"writeGeometryCollection",value:function(t){this.writeUint32(t.length);for(var e=0;e<t.length;e++)this.writeGeometry(t[e])}},{key:"findMinimumLayout",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Z.XYZM,r=function(t,e){return t===e?t:t===l.Z.XYZM?e:e===l.Z.XYZM?t:l.Z.XY};if(t instanceof p.ZP)return r(t.getLayout(),e);if(t instanceof s.Z)for(var n=t.getGeometriesArray(),i=0;i<n.length&&e!==l.Z.XY;i++)e=this.findMinimumLayout(n[i],e);return e}},{key:"writeGeometry",value:function(t,e){var r,n,i=(O(r={},c.Z.POINT,G),O(r,c.Z.LINE_STRING,S),O(r,c.Z.POLYGON,I),O(r,c.Z.MULTI_POINT,B),O(r,c.Z.MULTI_LINE_STRING,W),O(r,c.Z.MULTI_POLYGON,T),O(r,c.Z.GEOMETRY_COLLECTION,D),r),o=t.getType(),a=i[o];if(!a)throw new Error("GeometryType "+o+" is not supported");(this.layout_||(this.layout_=this.findMinimumLayout(t)),this.writeWkbHeader(a,e),t instanceof p.ZP)?(O(n={},c.Z.POINT,this.writePoint),O(n,c.Z.LINE_STRING,this.writeLineString),O(n,c.Z.POLYGON,this.writePolygon),O(n,c.Z.MULTI_POINT,this.writeMultiPoint),O(n,c.Z.MULTI_LINE_STRING,this.writeMultiLineString),O(n,c.Z.MULTI_POLYGON,this.writeMultiPolygon),n)[o].call(this,t.getCoordinates(),t.getLayout()):t instanceof s.Z&&this.writeGeometryCollection(t.getGeometriesArray())}},{key:"getBuffer",value:function(){var t=this,e=this.writeQueue_.reduce((function(t,e){return t+e[0]}),0),r=new ArrayBuffer(e),n=new DataView(r),i=0;return this.writeQueue_.forEach((function(e){switch(e[0]){case 1:n.setUint8(i,e[1]);break;case 4:n.setUint32(i,e[1],t.isLittleEndian_);break;case 8:n.setFloat64(i,e[1],t.isLittleEndian_)}i+=e[0]})),r}}]),t}();function Y(t){return"string"==typeof t?function(t){for(var e=new Uint8Array(t.length/2),r=0;r<t.length/2;r++)e[r]=parseInt(t.substr(2*r,2),16);return new DataView(e.buffer)}(t):ArrayBuffer.isView(t)?t instanceof DataView?t:new DataView(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new DataView(t):null}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(r,t);var e=m(r);function r(t){var n;C(this,r);var i=t||{};return(n=e.call(this)).splitCollection=Boolean(i.splitCollection),n.viewCache_=null,n.hex_=!1!==i.hex,n.littleEndian_=!1!==i.littleEndian,n.ewkb_=!1!==i.ewkb,n.layout_=i.geometryLayout,n.nodataZ_=i.nodataZ||0,n.nodataM_=i.nodataM||0,n.srid_=i.srid,n}return M(r,[{key:"getType",value:function(){return this.hex_?u.Z.TEXT:u.Z.ARRAY_BUFFER}},{key:"readFeature",value:function(t,e){return new o.Z({geometry:this.readGeometry(t,e)})}},{key:"readFeatures",value:function(t,e){var r=this.readGeometry(t,e);return(this.splitCollection&&r instanceof s.Z?r.getGeometriesArray():[r]).map((function(t){return new o.Z({geometry:t})}))}},{key:"readGeometry",value:function(t,e){var r=Y(t);if(!r)return null;var n=new F(r).readGeometry();this.viewCache_=r;var i=this.getReadOptions(t,e);return this.viewCache_=null,(0,a.fI)(n,!1,i)}},{key:"readProjection",value:function(t){var e=this.viewCache_||Y(t);if(e){var r=new F(e);return r.readWkbHeader(),r.getSrid()&&(0,_.U2)("EPSG:"+r.getSrid())||void 0}}},{key:"writeFeature",value:function(t,e){return this.writeGeometry(t.getGeometry(),e)}},{key:"writeFeatures",value:function(t,e){return this.writeGeometry(new s.Z(t.map((function(t){return t.getGeometry()}))),e)}},{key:"writeGeometry",value:function(t,e){var r=this.adaptOptions(e),n=new R({layout:this.layout_,littleEndian:this.littleEndian_,ewkb:this.ewkb_,nodata:{Z:this.nodataZ_,M:this.nodataM_}}),i=Number.isInteger(this.srid_)?Number(this.srid_):null;if(!1!==this.srid_&&!Number.isInteger(this.srid_)){var o=r.dataProjection&&(0,_.U2)(r.dataProjection);if(o){var u=o.getCode();0===u.indexOf("EPSG:")&&(i=Number(u.substring(5)))}}n.writeGeometry((0,a.fI)(t,!0,r),i);var s=n.getBuffer();return this.hex_?function(t){var e=new Uint8Array(t);return Array.from(e.values()).map((function(t){return(t<16?"0":"")+Number(t).toString(16).toUpperCase()})).join("")}(s):s}}]),r}(a.ZP),H=r(9847),X=r(5783),K=r(2010),Q=r(1372),V=new K.Z({source:new H.Z}),z=(new x).readFeature("0103000000010000000500000054E3A59BC4602540643BDF4F8D1739C05C8FC2F5284C4140EC51B81E852B34C0D578E926316843406F1283C0CAD141C01B2FDD2406012B40A4703D0AD79343C054E3A59BC4602540643BDF4F8D1739C0",{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),$=new Q.Z({source:new X.Z({features:[z]})});new n.Z({layers:[V,$],target:"map",view:new i.ZP({center:[2952104.0199,-3277504.823],zoom:4})})}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(814)}]);
//# sourceMappingURL=wkb.js.map