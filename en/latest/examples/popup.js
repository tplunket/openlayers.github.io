(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{344:function(e,n,o){"use strict";o.r(n);var t=o(3),a=o(78),c=o(2),i=o(29),s=o(5),p=o(4),r=o(53),u=document.getElementById("popup"),l=document.getElementById("popup-content"),m=document.getElementById("popup-closer"),d=new a.a({element:u,autoPan:!0,autoPanAnimation:{duration:250}});m.onclick=function(){return d.setPosition(void 0),m.blur(),!1},new t.a({layers:[new s.a({source:new r.a({url:"https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?access_token=pk.eyJ1IjoidHNjaGF1YiIsImEiOiJjaW5zYW5lNHkxMTNmdWttM3JyOHZtMmNtIn0.CDIBD8H-G2Gf-cPkIuWtRg",crossOrigin:"anonymous"})})],overlays:[d],target:"map",view:new c.a({center:[0,0],zoom:2})}).on("singleclick",function(e){var n=e.coordinate,o=Object(i.l)(Object(p.o)(n));l.innerHTML="<p>You clicked here:</p><code>"+o+"</code>",d.setPosition(n)})}},[[344,0]]]);
//# sourceMappingURL=popup.js.map