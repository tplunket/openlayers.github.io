"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5115],{997:function(e,n,t){var i=t(4686),o=t(9847),s=t(3479),r=t(4354),a=t(4739),c=t(6291),u=t(2010),l=t(6923),p=t(5421),d=t(2810);a.Z.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),(0,p.z)(a.Z);const w=[0,0,7e5,13e5],g=new c.Z,m=(new i.Z({layers:[new u.Z({source:new o.Z}),g],target:"map",view:new r.ZP({center:(0,d.vs)((0,l.qg)(w),"EPSG:27700","EPSG:3857"),zoom:4})}),document.getElementById("interpolate"));function h(){const e=new s.Z({url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/British_National_Grid.svg/2000px-British_National_Grid.svg.png",crossOrigin:"",projection:"EPSG:27700",imageExtent:w,interpolate:m.checked});g.setSource(e)}h(),m.addEventListener("change",h)}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(997)}]);
//# sourceMappingURL=reprojection-image.js.map