"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{8584:function(i,e,t){var s=t(1055),r=t(824),a=t(5117),n=t(2486),o=t(1531),h=t(7419),g=t(3172),c=t(3422),u=t(6117);class l extends o.ZP{constructor(i){super({attributions:(i=i||{}).attributions,interpolate:i.interpolate,projection:i.projection,resolutions:i.resolutions}),this.crossOrigin_=void 0!==i.crossOrigin?i.crossOrigin:null,this.hidpi_=void 0===i.hidpi||i.hidpi,this.url_=i.url,this.imageLoadFunction_=void 0!==i.imageLoadFunction?i.imageLoadFunction:o.r6,this.params_=i.params||{},this.image_=null,this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==i.ratio?i.ratio:1.5}getParams(){return this.params_}getImageInternal(i,e,t,s){if(void 0===this.url_)return null;e=this.findNearestResolution(e),t=this.hidpi_?t:1;const r=this.image_;if(r&&this.renderedRevision_==this.getRevision()&&r.getResolution()==e&&r.getPixelRatio()==t&&(0,u.r4)(r.getExtent(),i))return r;const a={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Object.assign(a,this.params_);const o=((i=i.slice())[0]+i[2])/2,g=(i[1]+i[3])/2;if(1!=this.ratio_){const e=this.ratio_*(0,u.dz)(i)/2,t=this.ratio_*(0,u.Cr)(i)/2;i[0]=o-e,i[1]=g-t,i[2]=o+e,i[3]=g+t}const c=e/t,l=Math.ceil((0,u.dz)(i)/c),_=Math.ceil((0,u.Cr)(i)/c);i[0]=o-c*l/2,i[2]=o+c*l/2,i[1]=g-c*_/2,i[3]=g+c*_/2,this.imageSize_[0]=l,this.imageSize_[1]=_;const d=this.getRequestUrl_(i,this.imageSize_,t,s,a);return this.image_=new h.Z(i,e,t,d,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(n.Z.CHANGE,this.handleImageChange.bind(this)),this.image_}getImageLoadFunction(){return this.imageLoadFunction_}getRequestUrl_(i,e,t,s,r){const a=s.getCode().split(/:(?=\d+$)/).pop();r.SIZE=e[0]+","+e[1],r.BBOX=i.join(","),r.BBOXSR=a,r.IMAGESR=a,r.DPI=Math.round(90*t);const n=this.url_,o=n.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return o==n&&(0,c.h)(!1,50),(0,g.B)(o,r)}getUrl(){return this.url_}setImageLoadFunction(i){this.image_=null,this.imageLoadFunction_=i,this.changed()}setUrl(i){i!=this.url_&&(this.url_=i,this.image_=null,this.changed())}updateParams(i){Object.assign(this.params_,i),this.image_=null,this.changed()}}var _=l,d=t(2893),m=t(1802);const p=[new d.Z({source:new a.Z}),new m.Z({source:new _({ratio:1,params:{},url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new s.Z({layers:p,target:"map",view:new r.ZP({center:[-10997148,4569099],zoom:4})})}},function(i){var e;e=8584,i(i.s=e)}]);
//# sourceMappingURL=arcgis-image.js.map