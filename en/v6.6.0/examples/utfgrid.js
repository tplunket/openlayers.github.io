(self.webpackChunk=self.webpackChunk||[]).push([[2910],{3236:function(t,i,s){"use strict";var n=s(1625),h=s(4682),e=s(9180),o=s(7842),r=s(2296),u=s(6894),c=s(7178),f=s(9280),a=s(4182),l=s(6666),v=s(4158),m=s(5189),p=s(1382),d=s(7599),w=s(4589),b=s(3880),g=s(5641),y=function(t){function i(i,s,n,h,e,o){t.call(this,i,s),this.t=n,this.i=h,this.o=e,this.u=null,this.l=null,this.v=null,this.m=o}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getImage=function(){return null},i.prototype.getData=function(t){if(!this.u||!this.l)return null;var i=(t[0]-this.i[0])/(this.i[2]-this.i[0]),s=(t[1]-this.i[1])/(this.i[3]-this.i[1]),n=this.u[Math.floor((1-s)*this.u.length)];if("string"!=typeof n)return null;var h=n.charCodeAt(Math.floor(i*n.length));h>=93&&h--,h>=35&&h--;var e=null;if((h-=32)in this.l){var o=this.l[h];e=this.v&&o in this.v?this.v[o]:o}return e},i.prototype.forDataAtCoordinate=function(t,i,s){this.state==a.Z.EMPTY&&!0===s?(this.state=a.Z.IDLE,(0,b.Vx)(this,r.Z.CHANGE,(function(s){i(this.getData(t))}),this),this.p()):!0===s?setTimeout(function(){i(this.getData(t))}.bind(this),0):i(this.getData(t))},i.prototype.getKey=function(){return this.t},i.prototype.g=function(){this.state=a.Z.ERROR,this.changed()},i.prototype.j=function(t){this.u=t.grid,this.l=t.keys,this.v=t.data,this.state=a.Z.LOADED,this.changed()},i.prototype.p=function(){if(this.state==a.Z.IDLE)if(this.state=a.Z.LOADING,this.m)(0,g.R)(this.t,this.j.bind(this),this.g.bind(this));else{var t=new XMLHttpRequest;t.addEventListener("load",this.J.bind(this)),t.addEventListener("error",this.N.bind(this)),t.open("GET",this.t),t.send()}},i.prototype.J=function(t){var i=t.target;if(!i.status||i.status>=200&&i.status<300){var s;try{s=JSON.parse(i.responseText)}catch(t){return void this.g()}this.j(s)}else this.g()},i.prototype.N=function(t){this.g()},i.prototype.load=function(){this.o?this.p():this.setState(a.Z.EMPTY)},i}(c.Z),j=function(t){function i(i){if(t.call(this,{projection:(0,w.U2)("EPSG:3857"),state:u.Z.LOADING,zDirection:i.zDirection}),this.o=void 0===i.preemptive||i.preemptive,this.k=m.vU,this.G=void 0,this.m=i.jsonp||!1,i.url)if(this.m)(0,g.R)(i.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{var s=new XMLHttpRequest;s.addEventListener("load",this.J.bind(this)),s.addEventListener("error",this.N.bind(this)),s.open("GET",i.url),s.send()}else i.tileJSON?this.handleTileJSONResponse(i.tileJSON):(0,v.h)(!1,51)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.J=function(t){var i=t.target;if(!i.status||i.status>=200&&i.status<300){var s;try{s=JSON.parse(i.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(s)}else this.handleTileJSONError()},i.prototype.N=function(t){this.handleTileJSONError()},i.prototype.getTemplate=function(){return this.G},i.prototype.forDataAtCoordinateAndResolution=function(t,i,s,n){if(this.tileGrid){var h=this.tileGrid.getZForResolution(i,this.zDirection),e=this.tileGrid.getTileCoordForCoordAndZ(t,h);this.getTile(e[0],e[1],e[2],1,this.getProjection()).forDataAtCoordinate(t,s,n)}else!0===n?setTimeout((function(){s(null)}),0):s(null)},i.prototype.handleTileJSONError=function(){this.setState(u.Z.ERROR)},i.prototype.handleTileJSONResponse=function(t){var i,s=(0,w.U2)("EPSG:4326"),n=this.getProjection();if(void 0!==t.bounds){var h=(0,w.WO)(s,n);i=(0,l.Ne)(t.bounds,h)}var e=(0,p.Tl)(n),o=t.minzoom||0,r=t.maxzoom||22,c=(0,p.dl)({extent:e,maxZoom:r,minZoom:o});this.tileGrid=c,this.G=t.template;var f=t.grids;if(f){if(this.k=(0,m.uR)(f,c),void 0!==t.attribution){var a=void 0!==i?i:e;this.setAttributions((function(i){return(0,l.kK)(a,i.extent)?[t.attribution]:null}))}this.setState(u.Z.READY)}else this.setState(u.Z.ERROR)},i.prototype.getTile=function(t,i,s,n,h){var e=(0,d.lg)(t,i,s);if(this.tileCache.containsKey(e))return this.tileCache.get(e);var o=[t,i,s],r=this.getTileCoordForTileUrlFunction(o,h),u=this.k(r,n,h),c=new y(o,void 0!==u?a.Z.IDLE:a.Z.EMPTY,void 0!==u?u:"",this.tileGrid.getTileCoordExtent(o),this.o,this.m);return this.tileCache.set(e,c),c},i.prototype.useTile=function(t,i,s){var n=(0,d.lg)(t,i,s);this.tileCache.containsKey(n)&&this.tileCache.get(n)},i}(f.Z),x=s(640),z="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0Znl4aWJ2MGQxOTJ6cW5waWkwZWZ4ayJ9.Vgh43s6uPiHP5q3uhhLtng",E=new o.Z({source:new e.Z({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+z})}),J=new j({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+z}),N=new o.Z({source:J}),k=new x.ZP({center:[0,0],zoom:1}),G=document.getElementById("map"),M=new n.Z({layers:[E,N],target:G,view:k}),L=document.getElementById("country-info"),O=document.getElementById("country-flag"),R=document.getElementById("country-name"),S=new h.Z({element:L,offset:[15,15],stopEvent:!1});M.addOverlay(S);var T=function(t){var i=k.getResolution();J.forDataAtCoordinateAndResolution(t,i,(function(i){G.style.cursor=i?"pointer":"",i&&(O.src="data:image/png;base64,"+i.flag_png,R.innerHTML=i.admin),S.setPosition(i?t:void 0)}))};M.on("pointermove",(function(t){if(!t.dragging){var i=M.getEventCoordinate(t.originalEvent);T(i)}})),M.on("click",(function(t){T(t.coordinate)}))}},function(t){"use strict";var i;i=3236,t(t.s=i)}]);
//# sourceMappingURL=utfgrid.js.map