(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{313:function(e,n,o){"use strict";o.r(n);var t=o(3),a=o(2),i=o(5),r=o(4),s=o(53);function c(e){return Object(r.s)(e,"EPSG:4326","EPSG:3857")}var w={India:c([68.17665,7.96553,97.40256,35.49401]),Argentina:c([-73.41544,-55.25,-53.62835,-21.83231]),Nigeria:c([2.6917,4.24059,14.57718,13.86592]),Sweden:c([11.02737,55.36174,23.90338,69.10625])},p="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0Znl4aWJ2MGQxOTJ6cW5waWkwZWZ4ayJ9.Vgh43s6uPiHP5q3uhhLtng",u=new i.a({source:new s.a({url:"https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token="+p,crossOrigin:"anonymous"})}),m=new i.a({extent:w.India,source:new s.a({url:"https://api.tiles.mapbox.com/v4/mapbox.world-black.json?secure&access_token="+p,crossOrigin:"anonymous"})});new t.a({layers:[u,m],target:"map",view:new a.a({center:[0,0],zoom:1})});for(var b in w)document.getElementById(b).onclick=function(e){m.setExtent(w[e.target.id])}}},[[313,0]]]);
//# sourceMappingURL=layer-extent.js.map