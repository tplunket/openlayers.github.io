"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3747],{82336:function(e,t,n){var o=n(61038),r=n(12739),a=n(77975),i=n(91118),u=n(5265),l=n(41376),s=n(99247),c=n(720),f=n(69039),g=n(54354),w=n(79847),h=n(95783),p=n(42010),v=n(41372);function m(e,t){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function d(e,t,n){var o=m(t,e),r=m(t,n),a=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/r;return Math.abs(o-a)<1e-6&&o<r}function Z(e,t){return(e%t+t)%t}function y(e,t,n){var o=e.getGeometry();"MultiPolygon"===o.getType()&&(o=o.getPolygon(0));var r,a,i,u=o.getLinearRing().getCoordinates(),l=-1;for(r=0;r<u.length;r++)if(d(t,a=u[r],i=u[Z(r+1,u.length)])){l=r;break}var s=[],c=0,f=[],g=0;for(r=0;r<u.length;r++){if(a=0===r?t:u[Z(r+l,u.length)],i=u[Z(r+l+1,u.length)],s.push(a),d(n,a,i)){s.push(n),c+=m(a,n);break}c+=m(a,i)}for(r=0;r<u.length;r++){if(a=u[Z(l-r,u.length)],i=0===r?t:u[Z(l-r+1,u.length)],f.push(i),d(n,a,i)){f.push(n),g+=m(n,i);break}g+=m(a,i)}return g<c?f:s}var P,C,k,b,x=new p.Z({source:new w.Z}),G=new v.Z({source:new h.Z({format:new i.Z,url:"https://ahocevar.com/geoserver/wfs?service=wfs&request=getfeature&typename=topp:states&cql_filter=STATE_NAME='Idaho'&outputformat=application/json"})}),I=new v.Z({source:new h.Z,style:new f.ZP({stroke:new c.Z({color:"rgba(100, 255, 0, 1)",width:2}),fill:new a.Z({color:"rgba(100, 255, 0, 0.3)"})})}),E=new r.Z({geometry:new u.Z([])}),F=new v.Z({source:new h.Z({features:[E]}),style:new f.ZP({stroke:new c.Z({color:"rgba(255, 0, 0, 1)",width:2})})}),A=new l.Z({layers:[x,G,I,F],target:"map",view:new g.ZP({center:[-12986427,5678422],zoom:5})}),M=!1,T={hitTolerance:10,layerFilter:function(e){return e===G}};A.on("click",(function(e){if(M){var t=!1;A.forEachFeatureAtPixel(e.pixel,(function(n){if(!C||n===C){t=!0;var o=A.getCoordinateFromPixel(e.pixel);if(n===C){b=C.getGeometry().getClosestPoint(o);var r=y(C,k,b);P.removeLastPoint(),P.appendCoordinates(r),C=null}k=(C=n).getGeometry().getClosestPoint(o)}}),T),t||(E.getGeometry().setCoordinates([]),C=null)}})),A.on("pointermove",(function(e){if(C&&M){var t=null;A.forEachFeatureAtPixel(e.pixel,(function(n){C===n&&(t=A.getCoordinateFromPixel(e.pixel))}),T);var n=[];t&&(b=C.getGeometry().getClosestPoint(t),n=y(C,k,b)),E.getGeometry().setCoordinates(n)}}));var q=new s.Z({source:G.getSource()}),S=document.getElementById("type");function L(){"None"!==S.value&&((P=new o.ZP({source:I.getSource(),type:S.value})).on("drawstart",(function(){M=!0})),P.on("drawend",(function(){M=!1,E.getGeometry().setCoordinates([]),C=null})),A.addInteraction(P),A.addInteraction(q))}S.onchange=function(){A.removeInteraction(P),A.removeInteraction(q),L()},L()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(82336)}]);
//# sourceMappingURL=tracing.js.map