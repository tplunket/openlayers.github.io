"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7474],{32541:function(e,t,n){var a=n(51541),i=n(15264),r=n(41564),o=n(40878),s=n(96256),c=n(29810),l=n(87240),p=n(32483),u=n(28487);const g=new r.A({layers:[new s.A({source:new i.A({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB"})})],target:document.getElementById("map"),view:new l.Ay({center:[0,4e6],zoom:2})}),h={variables:{filterShape:"all"},filter:["any",["==",["var","filterShape"],"all"],["==",["var","filterShape"],["get","shape"]]],"icon-src":"data/ufo_shapes.png","icon-width":128,"icon-height":64,"icon-color":["interpolate",["linear"],["get","year"],1950,[255,160,110],2013,[180,255,200]],"icon-offset":["match",["get","shape"],"light",[0,0],"sphere",[32,0],"circle",[32,0],"disc",[64,0],"oval",[64,0],"triangle",[96,0],"fireball",[0,32],[96,32]],"icon-size":[32,32],"icon-scale":.5},d=document.getElementById("shape-filter");d.addEventListener("input",(function(){h.variables.filterShape=d.value,g.render()}));const f=new XMLHttpRequest;f.open("GET","data/csv/ufo_sighting_data.csv"),f.addEventListener("load",(function(){const e=f.responseText,t={},n=[];let i,r=e.indexOf("\n")+1;for(;-1!==(i=e.indexOf("\n",r));){const s=e.substring(r,i).split(",");r=i+1;const c=[parseFloat(s[5]),parseFloat(s[4])],l=s[2];t[l]=(t[l]||0)+1,n.push(new a.A({datetime:s[0],year:parseInt(/[0-9]{4}/.exec(s[0])[0],10),shape:l,duration:s[3],geometry:new o.A((0,u.Rb)(c))}))}t.all=n.length,g.addLayer(new p.A({source:new c.A({features:n,attributions:"National UFO Reporting Center"}),style:h})),function(e){Object.keys(e).sort((function(t,n){return e[n]-e[t]})).forEach((function(t){const n=document.createElement("option"),a=e[t];n.text=`${t} (${a} sighting${1===a?"":"s"})`,n.value=t,d.appendChild(n)}))}(t)})),f.send();const m=document.getElementById("info");g.on("pointermove",(function(e){if(g.getView().getInteracting()||g.getView().getAnimating())return;const t=g.forEachFeatureAtPixel(e.pixel,(function(e){return`On ${e.get("datetime")}, lasted ${e.get("duration")} seconds and had a "${e.get("shape")}" shape.`}));m.innerText=t||""}))}},function(e){var t;t=32541,e(e.s=t)}]);
//# sourceMappingURL=icon-sprite-webgl.js.map