(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{426:function(t,i,e){"use strict";e.r(i);var r=e(3),a=e(2),o=e(5),n=e(68),s=e(9),h=e(112),c=e(20),u=e(13),p=e(1),g=e(11),_=e(98),l=e(95),m=function(t){function i(i){var e=i||{};t.call(this,{attributions:e.attributions,projection:e.projection,resolutions:e.resolutions}),this.crossOrigin_=void 0!==e.crossOrigin?e.crossOrigin:null,this.hidpi_=void 0===e.hidpi||e.hidpi,this.url_=e.url,this.imageLoadFunction_=void 0!==e.imageLoadFunction?e.imageLoadFunction:_.b,this.params_=e.params||{},this.image_=null,this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==e.ratio?e.ratio:1.5}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getParams=function(){return this.params_},i.prototype.getImageInternal=function(t,i,e,r){if(void 0===this.url_)return null;i=this.findNearestResolution(i),e=this.hidpi_?e:1;var a=this.image_;if(a&&this.renderedRevision_==this.getRevision()&&a.getResolution()==i&&a.getPixelRatio()==e&&Object(p.g)(a.getExtent(),t))return a;var o={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Object(g.a)(o,this.params_);var n=((t=t.slice())[0]+t[2])/2,s=(t[1]+t[3])/2;if(1!=this.ratio_){var c=this.ratio_*Object(p.E)(t)/2,_=this.ratio_*Object(p.A)(t)/2;t[0]=n-c,t[1]=s-_,t[2]=n+c,t[3]=s+_}var l=i/e,m=Math.ceil(Object(p.E)(t)/l),d=Math.ceil(Object(p.A)(t)/l);t[0]=n-l*m/2,t[2]=n+l*m/2,t[1]=s-l*d/2,t[3]=s+l*d/2,this.imageSize_[0]=m,this.imageSize_[1]=d;var v=this.getRequestUrl_(t,this.imageSize_,e,r,o);return this.image_=new h.a(t,i,e,v,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(u.a.CHANGE,this.handleImageChange.bind(this)),this.image_},i.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},i.prototype.getRequestUrl_=function(t,i,e,r,a){var o=r.getCode().split(":").pop();a.SIZE=i[0]+","+i[1],a.BBOX=t.join(","),a.BBOXSR=o,a.IMAGESR=o,a.DPI=Math.round(90*e);var n=this.url_,s=n.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return s==n&&Object(c.a)(!1,50),Object(l.a)(s,a)},i.prototype.getUrl=function(){return this.url_},i.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},i.prototype.setUrl=function(t){t!=this.url_&&(this.url_=t,this.image_=null,this.changed())},i.prototype.updateParams=function(t){Object(g.a)(this.params_,t),this.image_=null,this.changed()},i}(_.a),d=[new o.a({source:new s.b}),new n.a({source:new m({ratio:1,params:{},url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new r.a({layers:d,target:"map",view:new a.a({center:[-10997148,4569099],zoom:4})})}},[[426,0]]]);
//# sourceMappingURL=arcgis-image.js.map