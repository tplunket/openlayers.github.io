"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2969],{96467:function(e,n,t){var o=t(39352),a=t(33156),r=t(54893),s=t(92535),i=t(84775),c=t(96802),m=t(29123),u=t(12008),h=t(38960),w=t(96090),p=t(86395),l=t(57356),v=t(62896),f=t(633),g=new p.Z({source:new i.Z({url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",crossOrigin:""})}),M=new o.Z({geometry:new s.Z((0,v.mi)([0,-10])),name:"Fish.1"}),d=new o.Z({geometry:new s.Z((0,v.mi)([0,-10])),name:"Fish.1 Island"}),x=new o.Z({geometry:new s.Z((0,v.mi)([-30,10])),name:"Fish.2 Island"}),y=new u.ZP({image:new h.Z({anchor:[.5,.9],src:"data/fish.png",crossOrigin:"",scale:[0,0],rotation:Math.PI/4}),text:new w.Z({text:"FISH\nTEXT",scale:[0,0],rotation:Math.PI/4,textAlign:"center",textBaseline:"top"})}),F=0,I=45;M.setStyle((function(){var e=3*Math.sin(F*Math.PI/180),n=4*Math.sin(I*Math.PI/180);return y.getImage().setScale([e,n]),y.getText().setScale([e,n]),y})),g.on("postrender",(function(e){var n=(0,f.u3)(e),t=3*Math.cos(F*Math.PI/180),o=4*Math.cos(I*Math.PI/180);y.getImage().setScale([t,o]),y.getText().setScale([t,o]),n.drawFeature(x,y)}));var b=new c.Z({features:[M,d,x]}),j=new l.Z({source:b}),E=new a.Z({layers:[g,j],target:document.getElementById("map"),view:new m.ZP({center:(0,v.mi)([-15,0]),zoom:3})});setInterval((function(){F=(F+4)%360,I=(I+5)%360,b.changed()}),1e3);var O=document.getElementById("popup"),T=new r.Z({element:O,positioning:"bottom-center",stopEvent:!1});E.addOverlay(T),E.on("click",(function(e){var n=E.forEachFeatureAtPixel(e.pixel,(function(e){return e}));$(O).popover("dispose"),n&&(T.setPosition(e.coordinate),$(O).popover({placement:"top",html:!0,animation:!1,content:n.get("name")}),$(O).popover("show"))})),E.on("pointermove",(function(e){var n=E.getEventPixel(e.originalEvent),t=E.hasFeatureAtPixel(n);E.getTarget().style.cursor=t?"pointer":""})),E.on("movestart",(function(){$(O).popover("dispose")}))}},function(e){var n;n=96467,e(e.s=n)}]);
//# sourceMappingURL=icon-scale.js.map