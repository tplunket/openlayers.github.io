"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5982],{6353:function(e,n,t){var o=t(9619),s=t(1055),r=t(787),a=t(7051),i=t(171),c=t(4711),l=t(824),u=t(677),p=t(1652),m=t(1733),w=t(2893);const g=new o.Z({geometry:new a.Z([0,0]),name:"Null Island",population:4e3,rainfall:500}),d=new u.ZP({image:new p.Z({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"data/icon.png"})});g.setStyle(d);const f=new c.Z({features:[g]}),v=new m.Z({source:f}),h=new w.Z({source:new i.Z({url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",crossOrigin:""})}),Z=new s.Z({layers:[h,v],target:document.getElementById("map"),view:new l.ZP({center:[0,0],zoom:3})}),x=document.getElementById("popup"),y=new r.Z({element:x,positioning:"bottom-center",stopEvent:!1});let P;function E(){P&&(P.dispose(),P=void 0)}Z.addOverlay(y),Z.on("click",(function(e){const n=Z.forEachFeatureAtPixel(e.pixel,(function(e){return e}));E(),n&&(y.setPosition(e.coordinate),P=new bootstrap.Popover(x,{placement:"top",html:!0,content:n.get("name")}),P.show())})),Z.on("pointermove",(function(e){const n=Z.getEventPixel(e.originalEvent),t=Z.hasFeatureAtPixel(n);Z.getTarget().style.cursor=t?"pointer":""})),Z.on("movestart",E)}},function(e){var n;n=6353,e(e.s=n)}]);
//# sourceMappingURL=icon.js.map