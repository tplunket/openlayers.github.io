(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{359:function(e,n,o){"use strict";o.r(n);var t=o(3),a=o(2),r=o(32),s=o(5),w=o(22),l=o(9),i=o(10),u=o(12),c=o(23),p=o(19),d=new s.a({source:new l.b}),g=new u.c({fill:new c.a({color:"rgba(255,255,255,0.7)"}),stroke:new p.a({color:"#3399CC",width:3})}),m=new w.a({source:new i.a({url:"data/geojson/countries.geojson",format:new r.a})}),b=new t.a({layers:[d,m],target:"map",view:new a.a({center:[0,0],zoom:2})}),f=null,v=document.getElementById("status");b.on("pointermove",function(e){null!==f&&(f.setStyle(void 0),f=null),b.forEachFeatureAtPixel(e.pixel,function(e){return f=e,e.setStyle(g),!0}),v.innerHTML=f?"&nbsp;Hovering: "+f.get("name"):"&nbsp;"})}},[[359,0]]]);
//# sourceMappingURL=select-hover-features.js.map