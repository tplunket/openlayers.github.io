"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6653],{7036:function(e,n,t){var o=t(4654),i=t(1055),s=t(5117),c=t(2776),l=t(6565),r=t(2893),u=t(824),d=t(1840),g=t(6117),a=t(1625),h=t(5250);const f=new s.Z,w=new r.Z({source:new l.Z({tileGrid:f.getTileGrid(),projection:f.getProjection()}),visible:!1}),m=new o.Z({strokeStyle:new c.Z({color:"rgba(255,120,0,0.9)",width:2,lineDash:[.5,4]}),showLabels:!0,visible:!1,wrapX:!1}),E=new i.Z({layers:[new r.Z({source:f}),w,m],target:"map",view:new u.ZP({projection:"EPSG:3857",center:[0,0],zoom:1})}),p=document.getElementById("epsg-query"),v=document.getElementById("epsg-search"),Z=document.getElementById("epsg-result"),b=document.getElementById("render-edges"),k=document.getElementById("show-tiles"),y=document.getElementById("show-graticule");function P(e,n,t,o){if(null===e||null===n||null===t||null===o)return Z.innerHTML="Nothing usable found, using EPSG:3857...",void E.setView(new u.ZP({projection:"EPSG:3857",center:[0,0],zoom:1}));Z.innerHTML="("+e+") "+n;const i="EPSG:"+e;d.Z.defs(i,t),(0,h.z2)(d.Z);const s=(0,a.U2)(i),c=(0,a.Ck)("EPSG:4326",s);let l=[o[1],o[2],o[3],o[0]];s.setWorldExtent(l),o[1]>o[3]&&(l=[o[1],o[2],o[3]+360,o[0]]);const r=(0,g.Ne)(l,c,void 0,8);s.setExtent(r);const f=new u.ZP({projection:s});E.setView(f),f.fit(r)}function j(){f.setRenderReprojectionEdges(b.checked)}function G(){m.setVisible(y.checked)}function L(){w.setVisible(k.checked)}v.onclick=function(e){var n;n=p.value,Z.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+n).then((function(e){return e.json()})).then((function(e){const n=e.results;if(n&&n.length>0)for(let e=0,t=n.length;e<t;e++){const t=n[e];if(t){const e=t.code,n=t.name,o=t.wkt,i=t.bbox;if(e&&e.length>0&&o&&o.length>0&&i&&4==i.length)return void P(e,n,o,i)}}P(null,null,null,null)})),e.preventDefault()},y.addEventListener("change",G),b.addEventListener("change",j),k.addEventListener("change",L),j(),G(),L()}},function(e){var n;n=7036,e(e.s=n)}]);
//# sourceMappingURL=reprojection-by-code.js.map