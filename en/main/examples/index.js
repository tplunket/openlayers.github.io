!function(){"use strict";let e,n,t;function o(){t&&window.clearTimeout(t);const e=this.value;t=window.setTimeout((function(){s(e)}),500)}function s(t){const o=function(e){if(0===(e=e.trim()).length)return info.examples;const n=e.toLowerCase().split(/\W+/),t={},o=function(e,n){for(let o in e){let s=t[o];s||(s={},t[o]=s),s[n]=(s[n]||0)+e[o]}};n.forEach((function(e){const n=info.wordIndex[e];if(n)o(n,e);else{const n=new RegExp(e);for(let t in info.wordIndex)n.test(t)&&o(info.wordIndex[t],e)}}));const s=[];for(let e in t){const n=info.examples[e];n.score=0,n.words=0;for(let o in t[e])n.score+=t[e][o],n.words++;s.push(n)}return s.sort((function(e,n){return n.score-e.score||n.words-e.words})),s}(t);!function(t){n.innerHTML="",e.process({context:{examples:t},clone:!0,parent:n}),document.getElementById("count").innerHTML=" "+t.length+" "}(o)}window.addEventListener("load",(function(){e=new jugl.Template("template"),n=document.getElementById("examples");const t=function(){const e={},n=window.location.search.substring(1).replace(/\+/g,"%20").split("&");for(let t=0;t<n.length;++t){const o=n[t].split("=");2===o.length&&(e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))}return e}().q||"",i=document.getElementById("keywords");i.addEventListener("input",o),i.value=t,s(t)}))}();