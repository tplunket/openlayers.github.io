(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{285:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(2),i=t(5),s=t(24),o=t(26),l=t(10),d=t(4),m=t(64),c=t(170),u=new l.a({attributions:"NASA"}),p=["^",["/",["mod",["+",["time"],["interpolate",["linear"],["get","year"],1850,0,2015,12]],12],12],.5],v={variables:{minYear:1850,maxYear:2015},filter:["between",["get","year"],["var","minYear"],["var","maxYear"]],symbol:{symbolType:"circle",size:["*",["interpolate",["linear"],["get","mass"],0,8,2e5,26],["-",1.75,["*",p,.75]]],color:["interpolate",["linear"],p,0,"#ffe52c",1,"rgba(242,56,22,0.61)"],opacity:["-",1,["*",p,.75]]}},y=document.getElementById("min-year"),w=document.getElementById("max-year");function b(){v.variables.minYear=parseInt(y.value),g()}function f(){v.variables.maxYear=parseInt(w.value),g()}function g(){var e=document.getElementById("status");e.querySelector("span.min-year").textContent=y.value,e.querySelector("span.max-year").textContent=w.value}y.addEventListener("input",b),y.addEventListener("change",b),w.addEventListener("input",f),w.addEventListener("change",f),g();var x=new XMLHttpRequest;x.open("GET","data/csv/meteorite_landings.csv"),x.onload=function(){for(var e,a=x.responseText,t=[],n=a.indexOf("\n")+1;-1!=(e=a.indexOf("\n",n));){var r=a.substr(n,e-n).split(",");n=e+1;var i=Object(d.f)([parseFloat(r[4]),parseFloat(r[3])]);isNaN(i[0])||isNaN(i[1])||t.push(new s.a({mass:parseFloat(r[1])||0,year:parseInt(r[2])||0,geometry:new o.a(i)}))}u.addFeatures(t)},x.send();var E=new n.a({layers:[new i.a({source:new m.a({layer:"toner"})}),new c.a({style:v,source:u,disableHitDetection:!0})],target:document.getElementById("map"),view:new r.a({center:[0,0],zoom:2})});!function e(){E.render(),window.requestAnimationFrame(e)}()}},[[285,0]]]);
//# sourceMappingURL=filter-points-webgl.js.map