(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{423:function(e,i,t){"use strict";t.r(i);var o=t(3),r=t(2),n=t(5),a=t(120),s=t(1),l=t(159),f=t(21),u={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},g={};g[u.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},g[u.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},g[u.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},g.none={none:{supports:[],formats:[],qualities:[]}};var p=new RegExp("^https?://library.stanford.edu/iiif/image-api/(1.1/)?compliance.html#level[0-2]$"),m=new RegExp("^https?://iiif.io/api/image/2/level[0-2](.json)?$"),c=new RegExp("(^https?://iiif.io/api/image/3/level[0-2](.json)?$)|(^level[0-2]$)");var d={};d[u.VERSION1]=function(e){var i=e.getComplianceLevelSupportedFeatures();return void 0===i&&(i=g[u.VERSION1].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),supports:i.supports,formats:i.formats.concat([void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:i.qualities.concat([void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},d[u.VERSION2]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,o=t&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],r=t&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],n=t&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map(function(e){return[e.width,e.height]}),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map(function(e){return e.width})[0],e.imageInfo.tiles.map(function(e){return void 0===e.height?e.width:e.height})[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map(function(e){return e.scaleFactors})[0],supports:i.supports.concat(o),formats:i.formats.concat(r),qualities:i.qualities.concat(n)}},d[u.VERSION3]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=void 0===e.imageInfo.extraFormats?i.formats:i.formats.concat(e.imageInfo.extraFormats),o=void 0!==e.imageInfo.preferredFormats&&Array.isArray(e.imageInfo.preferredFormats)&&e.imageInfo.preferredFormats.length>0?e.imageInfo.preferredFormats.filter(function(e){return["jpg","png","gif"].includes(e)}).reduce(function(e,i){return void 0===e&&t.includes(i)?i:e},void 0):void 0;return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map(function(e){return[e.width,e.height]}),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map(function(e){return e.width})[0],e.imageInfo.tiles.map(function(e){return e.height})[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map(function(e){return e.scaleFactors})[0],supports:void 0===e.imageInfo.extraFeatures?i.supports:i.supports.concat(e.imageInfo.extraFeatures),formats:t,qualities:void 0===e.imageInfo.extraQualities?i.qualities:i.qualities.concat(e.imageInfo.extraQualities),preferredFormat:o}};var h=function(e){this.setImageInfo(e)};h.prototype.setImageInfo=function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e},h.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++)switch(e[i]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return u.VERSION1;case"http://iiif.io/api/image/2/context.json":return u.VERSION2;case"http://iiif.io/api/image/3/context.json":return u.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(u.VERSION1)&&this.imageInfo.identifier)return u.VERSION1}Object(f.a)(!1,61)}},h.prototype.getComplianceLevelEntryFromProfile=function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case u.VERSION1:if(p.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u.VERSION3:if(c.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u.VERSION2:if("string"==typeof this.imageInfo.profile&&m.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&m.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},h.prototype.getComplianceLevelFromProfile=function(e){var i=this.getComplianceLevelEntryFromProfile(e);if(void 0!==i){var t=i.match(/level[0-2](\.json)?$/g);return Array.isArray(t)?t[0].replace(".json",""):void 0}},h.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),i=this.getComplianceLevelFromProfile(e);return void 0===i?g.none.none:g[e][i]}},h.prototype.getTileSourceOptions=function(e){var i=e||{},t=this.getImageApiVersion();if(void 0!==t){var o=void 0===t?void 0:d[t](this);if(void 0!==o)return{url:o.url,version:t,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:void 0!==i.format&&o.formats.includes(i.format)?i.format:void 0!==o.preferredFormat?o.preferredFormat:"jpg",supports:o.supports,quality:i.quality&&o.qualities.includes(i.quality)?i.quality:o.qualities.includes("native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort(function(e,i){return i-e}):void 0,tileSize:o.tileSize}}};var v=h,I=t(78);function y(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var z=function(e){function i(i){var t=i||{},o=t.url||"";o+=o.lastIndexOf("/")===o.length-1||""===o?"":"/";var r=t.version||u.VERSION2,n=t.sizes||[],g=t.size;Object(f.a)(null!=g&&Array.isArray(g)&&2==g.length&&!isNaN(g[0])&&g[0]>0&&!isNaN(g[1])&&g[1]>0,60);var p,m,c,d=g[0],h=g[1],v=t.tileSize,z=t.tilePixelRatio||1,B=t.format||"jpg",S=t.quality||(t.version==u.VERSION1?"native":"default"),x=t.resolutions||[],E=t.supports||[],N=t.extent||[0,-h,d,0],O=null!=n&&Array.isArray(n)&&n.length>0,j=null!=v&&("number"==typeof v&&Number.isInteger(v)&&v>0||Array.isArray(v)&&v.length>0),R=null!=E&&Array.isArray(E)&&(E.includes("regionByPx")||E.includes("regionByPct"))&&(E.includes("sizeByWh")||E.includes("sizeByH")||E.includes("sizeByW")||E.includes("sizeByPct"));if(x.sort(function(e,i){return i-e}),j||R)if(null!=v&&("number"==typeof v&&Number.isInteger(v)&&v>0?(p=v,m=v):Array.isArray(v)&&v.length>0&&((1==v.length||null==v[1]&&Number.isInteger(v[0]))&&(p=v[0],m=v[0]),2==v.length&&(Number.isInteger(v[0])&&Number.isInteger(v[1])?(p=v[0],m=v[1]):null==v[0]&&Number.isInteger(v[1])&&(p=v[1],m=v[1])))),void 0!==p&&void 0!==m||(p=a.b,m=a.b),0==x.length)for(var b=c=Math.max(Math.ceil(Math.log(d/p)/Math.LN2),Math.ceil(Math.log(h/m)/Math.LN2));b>=0;b--)x.push(Math.pow(2,b));else{var q=Math.max.apply(Math,x);c=Math.round(Math.log(q)/Math.LN2)}else if(p=d,m=h,x=[],O){n.sort(function(e,i){return e[0]-i[0]}),c=-1;for(var w=[],V=0;V<n.length;V++){var P=d/n[V][0];x.length>0&&x[x.length-1]==P?w.push(V):(x.push(P),c++)}if(w.length>0)for(var F=0;F<w.length;F++)n.splice(w[F]-F,1)}else x.push(1),n.push([d,h]),c=0;var A=new I.a({tileSize:[p,m],extent:N,origin:Object(s.C)(N),resolutions:x}),C=l.a.bind(null,z,A);e.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:C,tileGrid:A,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,i,t){var a,s,l=e[0];if(!(l>c)){var f=e[1],g=e[2],v=x[l];if(!(void 0===f||void 0===g||void 0===v||f<0||Math.ceil(d/v/p)<=f||g<0||Math.ceil(h/v/m)<=g)){if(R||j){var I=f*p*v,z=g*m*v,N=p*v,b=m*v,q=p,w=m;if(I+N>d&&(N=d-I),z+b>h&&(b=h-z),I+p*v>d&&(q=Math.floor((d-I+v-1)/v)),z+m*v>h&&(w=Math.floor((h-z+v-1)/v)),0==I&&N==d&&0==z&&b==h)a="full";else if(!R||E.includes("regionByPx"))a=I+","+z+","+N+","+b;else if(E.includes("regionByPct")){a="pct:"+y(I/d*100)+","+y(z/h*100)+","+y(N/d*100)+","+y(b/h*100)}r!=u.VERSION3||R&&!E.includes("sizeByWh")?!R||E.includes("sizeByW")?s=q+",":E.includes("sizeByH")?s=","+w:E.includes("sizeByWh")?s=q+","+w:E.includes("sizeByPct")&&(s="pct:"+y(100/v)):s=q+","+w}else if(a="full",O){var V=n[l][0],P=n[l][1];s=r==u.VERSION3?V==d&&P==h?"max":V+","+P:V==d?"full":V+","}else s=r==u.VERSION3?"max":"full";return o+a+"/"+s+"/0/"+S+"."+B}}},transition:t.transition}),this.zDirection=t.zDirection}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i}(t(84).a),B=new n.a,S=new o.a({layers:[B],target:"map"}),x=document.getElementById("iiif-notification"),E=document.getElementById("imageInfoUrl");function N(e){fetch(e).then(function(e){e.json().then(function(e){var i=new v(e).getTileSourceOptions();if(void 0!==i&&void 0!==i.version){i.zDirection=-1;var t=new z(i);B.setSource(t),S.setView(new r.a({resolutions:t.getTileGrid().getResolutions(),extent:t.getTileGrid().getExtent(),constrainOnlyCenter:!0})),S.getView().fit(t.getTileGrid().getExtent()),x.textContent=""}else x.textContent="Data seems to be no valid IIIF image information."}).catch(function(e){x.textContent="Could not read image info json. "+e})}).catch(function(){x.textContent="Could not read data from URL."})}document.getElementById("display").addEventListener("click",function(){N(E.value)}),N(E.value)}},[[423,0]]]);
//# sourceMappingURL=iiif.js.map