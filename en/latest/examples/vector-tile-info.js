(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{386:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(2),i=r(127),o=r(100),s=r(94),c=new n.a({target:"map",view:new a.a({center:[0,0],zoom:2}),layers:[new o.a({source:new s.a({format:new i.a,url:"https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf"})})]});c.on("pointermove",function(e){var t=c.getFeaturesAtPixel(e.pixel);if(!t)return p.innerText="",void(p.style.opacity=0);var r=t[0].getProperties();p.innerText=JSON.stringify(r,null,2),p.style.opacity=1});var p=document.getElementById("info")}},[[386,0]]]);
//# sourceMappingURL=vector-tile-info.js.map