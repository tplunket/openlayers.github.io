(self.webpackChunk=self.webpackChunk||[]).push([[6440],{53020:function(e,t){function n(e,t){var n=[],r=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(t)).join(".")+"]"}),function(a,i){if(n.length>0){var o=n.indexOf(this);~o?n.splice(o+1):n.push(this),~o?r.splice(o,1/0,a):r.push(a),~n.indexOf(i)&&(i=t.call(this,a,i))}else n.push(i);return null==e?i:e.call(this,a,i)}}(e.exports=function(e,t,r,a){return JSON.stringify(e,n(t,a),r)}).getSerialize=n},95248:function(e,t,n){"use strict";var r=n(2320),a=n(41376),i=n(82937),o=n(54354);var s,c,u,l,d,f,p=n(53020),g=n(45486),h=n(19329),m=n(19352),w=new function(){return new Worker(n.p+"offscreen-canvas.worker.worker.js")};function v(){if(d){var e=f.viewState,t=d.viewState,n=e.center,r=e.resolution,a=e.rotation,i=t.center,o=t.resolution,s=t.rotation,u=(0,h.Ue)();a||(0,h.qC)(u,(i[0]-n[0])/r,(n[1]-i[1])/r,o/r,o/r,a-s,0,0),c.style.transform=(0,h.BB)(u)}}var y=new a.Z({layers:[new r.Z({render:function(e){return s||((s=document.createElement("div")).style.position="absolute",s.style.width="100%",s.style.height="100%",(c=document.createElement("div")).style.position="absolute",c.style.width="100%",c.style.height="100%",s.appendChild(c),(u=document.createElement("canvas")).style.position="absolute",u.style.left="0",u.style.transformOrigin="top left",c.appendChild(u)),f=e,v(),l?e.animate=!0:(l=!0,w.postMessage({action:"render",frameState:JSON.parse(p(e))})),s},source:new i.Z({attributions:['<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>','<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>']})})],target:"map",view:new o.ZP({resolutions:(0,m.dl)({tileSize:512}).getResolutions(),center:[0,0],zoom:2})});y.addControl(new g.Z),y.on("pointermove",(function(e){if(!e.dragging){var t=y.getEventPixel(e.originalEvent);w.postMessage({action:"requestFeatures",pixel:t})}})),w.addEventListener("message",(function(e){if("loadImage"===e.data.action){var t=new Image;t.crossOrigin="anonymous",t.addEventListener("load",(function(){createImageBitmap(t,0,0,t.width,t.height).then((function(t){w.postMessage({action:"imageLoaded",image:t,src:e.data.src},[t])}))})),t.src=e.data.src}else"getFeatures"===e.data.action?function(e){if(0==e.length)return b.innerText="",void(b.style.opacity=0);var t=e.map((function(e){return Object.keys(e).filter((function(e){return!e.includes(":")})).reduce((function(t,n){return t[n]=e[n],t}),{})}));b.innerText=JSON.stringify(t,null,2),b.style.opacity=1}(e.data.features):"requestRender"===e.data.action?y.render():u&&"rendered"===e.data.action&&(requestAnimationFrame((function(){var t=e.data.imageData;u.width=t.width,u.height=t.height,u.getContext("2d").drawImage(t,0,0),u.style.transform=e.data.transform,d=e.data.frameState,v()})),l=!1)}));var b=document.getElementById("info")}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(95248)}]);
//# sourceMappingURL=offscreen-canvas.js.map