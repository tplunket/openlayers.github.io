"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[755],{7340:function(e,r,n){var t=n(23775),a=n(33156),o=n(98475),s=n(49360),i=n(29123),c=new a.Z({target:"map",view:new i.ZP({center:[0,0],zoom:2}),layers:[new o.Z({source:new s.Z({format:new t.Z,url:"https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf"})})]});c.on("pointermove",(function(e){var r=c.getFeaturesAtPixel(e.pixel);if(0==r.length)return v.innerText="",void(v.style.opacity=0);var n=r[0].getProperties();v.innerText=JSON.stringify(n,null,2),v.style.opacity=1}));var v=document.getElementById("info")}},function(e){var r;r=7340,e(e.s=r)}]);
//# sourceMappingURL=vector-tile-info.js.map