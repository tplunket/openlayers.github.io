"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9195],{5509:function(e,t,n){var o=n(9619),c=n(5925),r=n(1055),a=n(824),l=n(5117),s=n(4711),i=n(677),u=n(2776),h=n(2893),g=n(1733);const w=new h.Z({source:new l.Z}),f=new i.ZP({stroke:new u.Z({color:"black",width:1})}),k=new o.Z(new c.Z([[-4e6,0],[4e6,0]])),d=new g.Z({source:new s.Z({features:[k]}),style:f}),Z=new r.Z({layers:[w,d],target:"map",view:new a.ZP({center:[0,0],zoom:2})});let m;const p=document.getElementById("status");Z.on("singleclick",(function(e){let t=!1;Z.forEachFeatureAtPixel(e.pixel,(function(){t=!0}),{hitTolerance:m}),t?(f.getStroke().setColor("green"),p.innerHTML="A feature got hit!"):(f.getStroke().setColor("black"),p.innerHTML="No feature got hit."),k.changed()}));const b=document.getElementById("hitTolerance"),y=document.getElementById("circle"),C=function(){m=parseInt(b.value,10);const e=2*m+2;y.width=e,y.height=e;const t=y.getContext("2d");t.clearRect(0,0,e,e),t.beginPath(),t.arc(m+1,m+1,m+.5,0,2*Math.PI),t.fill(),t.stroke()};b.onchange=C,C()}},function(e){var t;t=5509,e(e.s=t)}]);
//# sourceMappingURL=hit-tolerance.js.map