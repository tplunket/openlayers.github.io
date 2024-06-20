"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5863],{46874:function(e,t,n){var s=n(41564),o=n(45342),r=n(96256),a=n(87240),c=n(58212),i=n(9619),l=n(56770),p=n(28e3),m=n(6848),u=n(38376),E=n(10135),g=n(16235),_=n(28487),d=n(76582);l.A.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),l.A.defs("EPSG:23032","+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs"),l.A.defs("EPSG:5479","+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=163 +x_0=7000000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),l.A.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs"),l.A.defs("EPSG:3413","+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),l.A.defs("EPSG:2163","+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs"),l.A.defs("ESRI:54009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"),(0,d.kz)(l.A);const w=(0,_.Jt)("EPSG:27700");w.setExtent([-65e4,-15e4,135e4,145e4]);(0,_.Jt)("EPSG:23032").setExtent([-1206118.71,4021309.92,1295389,8051813.28]);(0,_.Jt)("EPSG:5479").setExtent([6825737.53,4189159.8,9633741.96,5782472.71]);(0,_.Jt)("EPSG:21781").setExtent([485071.54,75346.36,828515.78,299941.84]);(0,_.Jt)("EPSG:3413").setExtent([-4194304,-4194304,4194304,4194304]);(0,_.Jt)("EPSG:2163").setExtent([-8040784.5135,-2577524.921,3668901.4484,4785105.1096]);(0,_.Jt)("ESRI:54009").setExtent([-18e6,-9e6,18e6,9e6]);const S={};S.osm=new r.A({source:new p.A}),S.wms4326=new r.A({source:new m.A({url:"https://ahocevar.com/geoserver/gwc/service/wms",crossOrigin:"",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0,VERSION:"1.1.1"},projection:"EPSG:4326",tileGrid:(0,E.EN)({extent:[-180,-90,180,90],maxResolution:360/512,maxZoom:10}),reprojectionErrorThreshold:2})}),S.wms21781=new r.A({source:new m.A({attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',crossOrigin:"anonymous",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},url:"https://wms.geo.admin.ch/",projection:"EPSG:21781"})});const f=new i.A;S.wmts3413=new r.A;fetch("https://map1.vis.earthdata.nasa.gov/wmts-arctic/wmts.cgi?SERVICE=WMTS&request=GetCapabilities").then((function(e){return e.text()})).then((function(e){const t=f.read(e),n=(0,c.t)(t,{layer:"OSM_Land_Mask",matrixSet:"EPSG3413_250m"});n.crossOrigin="",n.projection="EPSG:3413",n.wrapX=!1,S.wmts3413.setSource(new c.A(n))})),S.bng=new r.A;fetch("https://tiles.arcgis.com/tiles/qHLhLQrcvEnxjtPr/arcgis/rest/services/OS_Open_Raster/MapServer/WMTS").then((function(e){return e.text()})).then((function(e){const t=f.read(e),n=(0,c.t)(t,{layer:"OS_Open_Raster"});n.attributions="Contains OS data © Crown Copyright and database right "+(new Date).getFullYear(),n.crossOrigin="",n.projection="EPSG:27700",n.wrapX=!1,S.bng.setSource(new c.A(n))}));const h=(0,g.RG)((0,_.Jt)("EPSG:3857").getExtent())/256,A=new Array(22);for(let e=0,t=A.length;e<t;++e)A[e]=h/Math.pow(2,e);S.states=new r.A({source:new m.A({url:"https://ahocevar.com/geoserver/wms",crossOrigin:"",params:{LAYERS:"topp:states"},serverType:"geoserver",tileGrid:new o.A({extent:[-13884991,2870341,-7455066,6338219],resolutions:A,tileSize:[512,256]}),projection:"EPSG:3857"})});const x=new s.A({layers:[S.osm,S.bng],target:"map",view:new a.Ay({projection:"EPSG:3857",center:[0,0],zoom:2})}),y=document.getElementById("base-layer"),G=document.getElementById("overlay-layer"),v=document.getElementById("view-projection"),P=document.getElementById("render-edges");let j=!1;function R(){const e=(0,_.Jt)(v.value),t=e.getExtent(),n=new a.Ay({projection:e,center:(0,g.q1)(t||[0,0,0,0]),zoom:0,extent:t||void 0});x.setView(n),e.isGlobal()?S.bng.setExtent((0,_.DI)(w.getExtent(),w,e,2)):S.bng.setExtent(void 0)}v.onchange=function(){R()},R();const b=function(e){if(e instanceof r.A){const t=e.getSource();t instanceof u.A&&t.setRenderReprojectionEdges(j)}};y.onchange=function(){const e=S[y.value];e&&(e.setOpacity(1),b(e),x.getLayers().setAt(0,e))},G.onchange=function(){const e=S[G.value];e&&(e.setOpacity(.7),b(e),x.getLayers().setAt(1,e))},P.onchange=function(){j=P.checked,x.getLayers().forEach((function(e){b(e)}))}}},function(e){var t;t=46874,e(e.s=t)}]);
//# sourceMappingURL=reprojection.js.map