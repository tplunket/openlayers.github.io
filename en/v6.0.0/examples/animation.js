(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{241:function(t,n,e){"use strict";e.r(n);var o=e(3),a=e(2),i=e(59),r=e(5),c=e(4),u=e(9),f=Object(c.f)([-.12755,51.507222]),m=Object(c.f)([37.6178,55.7517]),s=Object(c.f)([28.9744,41.0128]),d=Object(c.f)([12.5,41.9]),g=Object(c.f)([7.4458,46.95]),l=new a.a({center:s,zoom:6});new o.a({target:"map",layers:[new r.a({preload:4,source:new u.b})],view:l});function h(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375}function b(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}function w(t,n){document.getElementById(t).addEventListener("click",n)}function p(t,n){var e=l.getZoom(),o=2,a=!1;function i(t){--o,a||0!==o&&t||(a=!0,n(t))}l.animate({center:t,duration:2e3},i),l.animate({zoom:e-1,duration:1e3},{zoom:e,duration:1e3},i)}w("rotate-left",function(){l.animate({rotation:l.getRotation()+Math.PI/2})}),w("rotate-right",function(){l.animate({rotation:l.getRotation()-Math.PI/2})}),w("rotate-around-rome",function(){var t=l.getRotation();l.animate({rotation:t+Math.PI,anchor:d,easing:i.a},{rotation:t+2*Math.PI,anchor:d,easing:i.b})}),w("pan-to-london",function(){l.animate({center:f,duration:2e3})}),w("elastic-to-moscow",function(){l.animate({center:m,duration:2e3,easing:b})}),w("bounce-to-istanbul",function(){l.animate({center:s,duration:2e3,easing:h})}),w("spin-to-rome",function(){var t=l.getCenter();l.animate({center:[t[0]+(d[0]-t[0])/2,t[1]+(d[1]-t[1])/2],rotation:Math.PI,easing:i.a},{center:d,rotation:2*Math.PI,easing:i.b})}),w("fly-to-bern",function(){p(g,function(){})}),w("tour",function(){var t=[f,g,d,m,s],n=-1;!function e(o){o?++n<t.length?setTimeout(function(){p(t[n],e)},0===n?0:750):alert("Tour complete"):alert("Tour cancelled")}(!0)})}},[[241,0]]]);
//# sourceMappingURL=animation.js.map