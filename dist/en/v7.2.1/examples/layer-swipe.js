"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7792],{2295:function(e,t,n){var o=n(1055),r=n(5117),a=n(2893),i=n(824),c=n(4469),p=n(1027);const s=new a.Z({source:new r.Z}),l=new a.Z({source:new c.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),u=new o.Z({layers:[s,l],target:"map",view:new i.ZP({center:[0,0],zoom:2})}),w=document.getElementById("swipe");l.on("prerender",(function(e){const t=e.context,n=u.getSize(),o=n[0]*(w.value/100),r=(0,p.CR)(e,[o,0]),a=(0,p.CR)(e,[n[0],0]),i=(0,p.CR)(e,[o,n[1]]),c=(0,p.CR)(e,n);t.save(),t.beginPath(),t.moveTo(r[0],r[1]),t.lineTo(i[0],i[1]),t.lineTo(c[0],c[1]),t.lineTo(a[0],a[1]),t.closePath(),t.clip()})),l.on("postrender",(function(e){e.context.restore()})),w.addEventListener("input",(function(){u.render()}))}},function(e){var t;t=2295,e(e.s=t)}]);
//# sourceMappingURL=layer-swipe.js.map