(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{334:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(2),c=n(51),r=n(161),s=n(29),i=n(5),d=n(9),u=new r.a({coordinateFormat:Object(s.d)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position"),undefinedHTML:"&nbsp;"});new o.a({controls:Object(c.a)().extend([u]),layers:[new i.a({source:new d.b})],target:"map",view:new a.a({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",function(e){u.setProjection(e.target.value)}),document.getElementById("precision").addEventListener("change",function(e){var t=Object(s.d)(e.target.valueAsNumber);u.setCoordinateFormat(t)})}},[[334,0]]]);
//# sourceMappingURL=mouse-position.js.map