"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4008],{5640:function(e,n,t){var o=t(1038),c=t(4686),r=t(5528),a=t(4354),u=t(9847),s=t(5783),i=t(2010),l=t(1372);const h=new i.Z({source:new u.Z}),w=new s.Z({wrapX:!1}),d=new l.Z({source:w}),f=new c.Z({layers:[h,d],target:"map",view:new a.ZP({center:[-11e6,46e5],zoom:4})}),m=document.getElementById("type");let p;function Z(){let e=m.value;if("None"!==e){let n;"Square"===e?(e="Circle",n=(0,o.N_)(4)):"Box"===e?(e="Circle",n=(0,o.dO)()):"Star"===e&&(e="Circle",n=function(e,n){const t=e[0],o=e[e.length-1],c=t[0]-o[0],a=t[1]-o[1],u=Math.sqrt(c*c+a*a),s=Math.atan2(a,c),i=[];for(let e=0;e<12;++e){const n=s+2*e*Math.PI/12,o=e%2==0?1:.5,c=u*o*Math.cos(n),r=u*o*Math.sin(n);i.push([t[0]+c,t[1]+r])}return i.push(i[0].slice()),n?n.setCoordinates([i]):n=new r.ZP([i]),n}),p=new o.ZP({source:w,type:e,geometryFunction:n}),f.addInteraction(p)}}m.onchange=function(){f.removeInteraction(p),Z()},document.getElementById("undo").addEventListener("click",(function(){p.removeLastPoint()})),Z()}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(5640)}]);
//# sourceMappingURL=draw-shapes.js.map