"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8262],{3425:function(e,t,o){var n=o(1118),r=o(4686),i=o(1372),l=o(5783),y=o(4354),c=o(7138),u=o(720),a=o(9039),s=o(7975),w=o(2110),g=o(4498),Z=o(6211);const P=function(){const e={},t=new c.Z({radius:5,fill:null,stroke:new u.Z({color:"orange",width:2})});return e.Point=new a.ZP({image:t}),e.Polygon=new a.ZP({stroke:new u.Z({color:"blue",width:3}),fill:new s.Z({color:"rgba(0, 0, 255, 0.1)"})}),e.MultiLineString=new a.ZP({stroke:new u.Z({color:"green",width:3})}),e.MultiPolygon=new a.ZP({stroke:new u.Z({color:"yellow",width:1}),fill:new s.Z({color:"rgba(255, 255, 0, 0.1)"})}),e.default=new a.ZP({stroke:new u.Z({color:"red",width:3}),fill:new s.Z({color:"rgba(255, 0, 0, 0.1)"}),image:t}),function(t){return e[t.getGeometry().getType()]||e.default}}(),d=new l.Z({features:(new n.Z).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-35e5],[3e6,-5e6],[1e6,-5e6]]]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-65e5],[3e6,-5e6],[1e6,-5e6]]]}]}}]})}),p=new i.Z({source:d,style:P}),f=function(){const e={};return e.Polygon=[new a.ZP({fill:new s.Z({color:[255,255,255,.5]})}),new a.ZP({stroke:new u.Z({color:[255,255,255,1],width:5})}),new a.ZP({stroke:new u.Z({color:[0,153,255,1],width:3})})],e.MultiPolygon=e.Polygon,e.LineString=[new a.ZP({stroke:new u.Z({color:[255,255,255,1],width:5})}),new a.ZP({stroke:new u.Z({color:[0,153,255,1],width:3})})],e.MultiLineString=e.LineString,e.Point=[new a.ZP({image:new c.Z({radius:7,fill:new s.Z({color:[0,153,255,1]}),stroke:new u.Z({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],e.MultiPoint=e.Point,e.GeometryCollection=e.Polygon.concat(e.Point),function(t){return e[t.getGeometry().getType()]}}(),m=new w.Z({style:f}),k=new g.Z({features:m.getFeatures(),style:f,insertVertexCondition:function(){return!m.getFeatures().getArray().every((function(e){return/Polygon/.test(e.getGeometry().getType())}))}});new r.Z({interactions:(0,Z.c)().extend([m,k]),layers:[p],target:"map",view:new y.ZP({center:[0,1e6],zoom:2,multiWorld:!0})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3425)}]);
//# sourceMappingURL=modify-test.js.map