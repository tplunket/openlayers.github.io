"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1036],{33442:function(e,n,t){var o=t(39352),r=t(33156),i=t(92535),a=t(29123),c=t(12008),w=t(38960),u=t(96802),f=t(3596),m=t(57356),s=t(86395),g=new o.Z({geometry:new i.Z([0,0])}),l=new u.Z({features:[g]}),v=new m.Z({source:l}),p=new s.Z({source:new f.Z({layer:"toner"})}),y=new r.Z({layers:[p,v],target:document.getElementById("map"),view:new a.ZP({center:[0,0],zoom:2})});gifler("data/globe.gif").frames(document.createElement("canvas"),(function(e,n){g.getStyle()||g.setStyle(new c.ZP({image:new w.Z({img:e.canvas,imgSize:[n.width,n.height],opacity:.8})})),e.clearRect(0,0,n.width,n.height),e.drawImage(n.buffer,n.x,n.y),y.render()}),!0),y.on("pointermove",(function(e){var n=y.getEventPixel(e.originalEvent),t=y.hasFeatureAtPixel(n);y.getTarget().style.cursor=t?"pointer":""}))}},function(e){var n;n=33442,e(e.s=n)}]);
//# sourceMappingURL=animated-gif.js.map