"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[727],{6654:function(i,e,t){var s=t(6291),n=t(6566),r=t(9010),a=t(9060),o=t(2514),h=t(6923);class u extends r.ZP{constructor(i){super({interpolate:i.interpolate,projection:i.projection,resolutions:i.resolutions}),this.crossOrigin_=void 0!==i.crossOrigin?i.crossOrigin:null,this.displayDpi_=void 0!==i.displayDpi?i.displayDpi:96,this.params_=i.params||{},this.url_=i.url,this.imageLoadFunction_=void 0!==i.imageLoadFunction?i.imageLoadFunction:r.r6,this.hidpi_=void 0===i.hidpi||i.hidpi,this.metersPerUnit_=void 0!==i.metersPerUnit?i.metersPerUnit:1,this.ratio_=void 0!==i.ratio?i.ratio:1,this.useOverlay_=void 0!==i.useOverlay&&i.useOverlay,this.image_=null,this.renderedRevision_=0}getParams(){return this.params_}getImageInternal(i,e,t,s){e=this.findNearestResolution(e),t=this.hidpi_?t:1;let r=this.image_;if(r&&this.renderedRevision_==this.getRevision()&&r.getResolution()==e&&r.getPixelRatio()==t&&(0,h.r4)(r.getExtent(),i))return r;1!=this.ratio_&&(i=i.slice(),(0,h.H9)(i,this.ratio_));const o=[(0,h.dz)(i)/e*t,(0,h.Cr)(i)/e*t];if(void 0!==this.url_){const h=this.getUrl(this.url_,this.params_,i,o,s);r=new a.Z(i,e,t,h,this.crossOrigin_,this.imageLoadFunction_),r.addEventListener(n.Z.CHANGE,this.handleImageChange.bind(this))}else r=null;return this.image_=r,this.renderedRevision_=this.getRevision(),r}getImageLoadFunction(){return this.imageLoadFunction_}updateParams(i){Object.assign(this.params_,i),this.changed()}getUrl(i,e,t,s,n){const r=function(i,e,t,s){const n=(0,h.dz)(i),r=(0,h.Cr)(i),a=e[0],o=e[1],u=.0254/s;return o*n>a*r?n*t/(a*u):r*t/(o*u)}(t,s,this.metersPerUnit_,this.displayDpi_),a=(0,h.qg)(t),u={OPERATION:this.useOverlay_?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol/source/ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.displayDpi_,SETDISPLAYWIDTH:Math.round(s[0]),SETDISPLAYHEIGHT:Math.round(s[1]),SETVIEWSCALE:r,SETVIEWCENTERX:a[0],SETVIEWCENTERY:a[1]};return Object.assign(u,e),(0,o.B)(i,u)}setImageLoadFunction(i){this.image_=null,this.imageLoadFunction_=i,this.changed()}}var d=u,l=t(4686),g=t(4354);new l.Z({layers:[new s.Z({extent:[-87.86511444236592,43.66506556483793,-87.59539405949707,43.82385256443007],source:new d({projection:"EPSG:4326",url:"https://mikenunn.net/mapguide/mapagent/mapagent.fcgi?",useOverlay:!1,metersPerUnit:111319.4908,params:{MAPDEFINITION:"Library://Samples/Sheboygan/Maps/Sheboygan.MapDefinition",FORMAT:"PNG",VERSION:"3.0.0",USERNAME:"OLGuest",PASSWORD:"olguest"},ratio:2})})],target:"map",view:new g.ZP({center:[-87.7302542509315,43.744459064634],projection:"EPSG:4326",zoom:12})})}},function(i){var e=function(e){return i(i.s=e)};e(9877),e(6654)}]);
//# sourceMappingURL=mapguide-untiled.js.map