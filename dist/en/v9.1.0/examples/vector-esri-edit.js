"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9025],{80972:function(e,t,s){var r=s(10572),n=s(41564),o=s(29810),a=s(87240),c=s(55238),i=s(9444),u=s(68266),l=s(74676),d=s(35947),p=s(23986),f=s(12185),g=s(10135),m=s(28487),v=s(27542);const y="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/",w=new r.A,A=new o.A({loader:function(e,t,s){const r=y+"2/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:r,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{const t=w.readFeatures(e,{featureProjection:s});t.length>0&&A.addFeatures(t)}}})},strategy:(0,v.Vs)((0,g.EN)({tileSize:512}))}),R=new p.A({source:A}),j=new f.A({source:new c.A({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),h=new i.Ay({source:A,type:"Polygon"}),S=new u.A;S.setActive(!1);const F=S.getFeatures(),I=new l.A({features:F});I.setActive(!1);const b=new n.A({interactions:(0,d.N)().extend([h,S,I]),layers:[j,R],target:document.getElementById("map"),view:new a.Ay({center:(0,m.Rb)([-110.875,37.345]),zoom:5})}),x=document.getElementById("type");x.onchange=function(){h.setActive("DRAW"===x.value),S.setActive("MODIFY"===x.value),I.setActive("MODIFY"===x.value)};const M={};F.on("add",(function(e){e.element.on("change",(function(e){M[e.target.get("objectid")]=!0}))})),F.on("remove",(function(e){const t=e.element,s=t.get("objectid");if(!0===M[s]){const e="["+w.writeFeature(t,{featureProjection:b.getView().getProjection()})+"]",r=y+"2/updateFeatures";$.post(r,{f:"json",features:e}).done((function(e){const t="string"==typeof e?JSON.parse(e):e;if(t.updateResults&&t.updateResults.length>0)if(!0!==t.updateResults[0].success){const e=t.updateResults[0].error;alert(e.description+" ("+e.code+")")}else delete M[s]}))}})),h.on("drawend",(function(e){const t=e.feature,s="["+w.writeFeature(t,{featureProjection:b.getView().getProjection()})+"]",r=y+"2/addFeatures";$.post(r,{f:"json",features:s}).done((function(e){const s="string"==typeof e?JSON.parse(e):e;if(s.addResults&&s.addResults.length>0)if(!0===s.addResults[0].success)t.set("objectid",s.addResults[0].objectId);else{const e=s.addResults[0].error;alert(e.description+" ("+e.code+")")}}))}))}},function(e){var t;t=80972,e(e.s=t)}]);
//# sourceMappingURL=vector-esri-edit.js.map