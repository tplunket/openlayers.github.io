(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{308:function(e,n,i){"use strict";i.r(n);var o=i(3),s=i(9),a=i(64),t=i(2),c=i(5),r=i(222),p=i(4),l="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0Znl4aWJ2MGQxOTJ6cW5waWkwZWZ4ayJ9.Vgh43s6uPiHP5q3uhhLtng";function u(e,n){var i=$(e+" input.visible");i.on("change",(function(){n.setVisible(this.checked)})),i.prop("checked",n.getVisible());var o=$(e+" input.opacity");o.on("input change",(function(){n.setOpacity(parseFloat(this.value))})),o.val(String(n.getOpacity()))}new o.a({layers:[new c.a({source:new s.b}),new r.a({layers:[new c.a({source:new a.a({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?secure&access_token="+l,crossOrigin:"anonymous"})}),new c.a({source:new a.a({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token="+l,crossOrigin:"anonymous"})})]})],target:"map",view:new t.a({center:Object(p.g)([37.4057,8.81566]),zoom:4})}).getLayers().forEach((function(e,n){u("#layer"+n,e),e instanceof r.a&&e.getLayers().forEach((function(e,i){u("#layer"+n+i,e)}))})),$("#layertree li > span").click((function(){$(this).siblings("fieldset").toggle()})).siblings("fieldset").hide()}},[[308,0]]]);
//# sourceMappingURL=layer-group.js.map