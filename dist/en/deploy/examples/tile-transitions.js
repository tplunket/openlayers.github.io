"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[741],{8077:function(e,t,n){var r=n(4686),i=n(2010),a=n(4354),o=n(1998);const s='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',c="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",p=new i.Z({source:new o.Z({url:c,tileSize:512,attributions:s})}),u=new i.Z({source:new o.Z({url:c,transition:0,tileSize:512,attributions:s}),visible:!1});new r.Z({layers:[p,u],target:"map",view:new a.ZP({center:[0,0],zoom:2,maxZoom:11})});document.getElementById("transition").addEventListener("change",(function(e){const t=e.target.checked;p.setVisible(t),u.setVisible(!t)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(8077)}]);
//# sourceMappingURL=tile-transitions.js.map