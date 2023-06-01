
        export function create() {
          const source = "const e=\"GENERATE_POLYGON_BUFFERS\",t=\"GENERATE_POINT_BUFFERS\",n=\"GENERATE_LINE_STRING_BUFFERS\",r={1:\"The view center is not defined\",2:\"The view resolution is not defined\",3:\"The view rotation is not defined\",4:\"`image` and `src` cannot be provided at the same time\",5:\"`imgSize` must be set when `image` is provided\",7:\"`format` must be set when `url` is set\",8:\"Unknown `serverType` configured\",9:\"`url` must be configured or set using `#setUrl()`\",10:\"The default `geometryFunction` can only handle `Point` geometries\",11:\"`options.featureTypes` must be an Array\",12:\"`options.geometryName` must also be provided when `options.bbox` is set\",13:\"Invalid corner\",14:\"Invalid color\",15:\"Tried to get a value for a key that does not exist in the cache\",16:\"Tried to set a value for a key that is used already\",17:\"`resolutions` must be sorted in descending order\",18:\"Either `origin` or `origins` must be configured, never both\",19:\"Number of `tileSizes` and `resolutions` must be equal\",20:\"Number of `origins` and `resolutions` must be equal\",22:\"Either `tileSize` or `tileSizes` must be configured, never both\",24:\"Invalid extent or geometry provided as `geometry`\",25:\"Cannot fit empty extent provided as `geometry`\",26:\"Features must have an id set\",27:\"Features must have an id set\",28:'`renderMode` must be `\"hybrid\"` or `\"vector\"`',30:\"The passed `feature` was already added to the source\",31:\"Tried to enqueue an `element` that was already added to the queue\",32:\"Transformation matrix cannot be inverted\",33:\"Invalid units\",34:\"Invalid geometry layout\",36:\"Unknown SRS type\",37:\"Unknown geometry type found\",38:\"`styleMapValue` has an unknown type\",39:\"Unknown geometry type\",40:\"Expected `feature` to have a geometry\",41:\"Expected an `ol/style/Style` or an array of `ol/style/Style.js`\",42:\"Question unknown, the answer is 42\",43:\"Expected `layers` to be an array or a `Collection`\",47:\"Expected `controls` to be an array or an `ol/Collection`\",48:\"Expected `interactions` to be an array or an `ol/Collection`\",49:\"Expected `overlays` to be an array or an `ol/Collection`\",50:\"`options.featureTypes` should be an Array\",51:\"Either `url` or `tileJSON` options must be provided\",52:\"Unknown `serverType` configured\",53:\"Unknown `tierSizeCalculation` configured\",55:\"The {-y} placeholder requires a tile grid with extent\",56:\"mapBrowserEvent must originate from a pointer event\",57:\"At least 2 conditions are required\",59:\"Invalid command found in the PBF\",60:\"Missing or invalid `size`\",61:\"Cannot determine IIIF Image API version from provided image information JSON\",62:\"A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`\",64:\"Layer opacity must be a number\",66:\"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`\",67:\"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both\",68:\"A VectorTile source can only be rendered if it has a projection compatible with the view projection\",69:\"`width` or `height` cannot be provided together with `scale`\"};class o extends Error{constructor(e){const t=r[e];super(t),this.code=e,this.name=\"AssertionError\",this.message=t}}var i=o;function a(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function s(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new i(t)}(0!==n,32);const o=t[0],a=t[1],s=t[2],u=t[3],f=t[4],x=t[5];return e[0]=u/n,e[1]=-a/n,e[2]=-s/n,e[3]=o/n,e[4]=(s*x-u*f)/n,e[5]=-(o*x-a*f)/n,e}function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,\"default\")?e.default:e}new Array(6);var f={exports:{}};function x(e,t,n){n=n||2;var r,o,i,a,s,u,f,x=t&&t.length,h=x?t[0]*n:e.length,v=l(e,0,h,n,!0),d=[];if(!v||v.next===v.prev)return d;if(x&&(v=function(e,t,n,r){var o,i,a,s=[];for(o=0,i=t.length;o<i;o++)(a=l(e,t[o]*r,o<i-1?t[o+1]*r:e.length,r,!1))===a.next&&(a.steiner=!0),s.push(A(a));for(s.sort(b),o=0;o<s.length;o++)n=g(s[o],n);return n}(e,t,v,n)),e.length>80*n){r=i=e[0],o=a=e[1];for(var y=n;y<h;y+=n)(s=e[y])<r&&(r=s),(u=e[y+1])<o&&(o=u),s>i&&(i=s),u>a&&(a=u);f=0!==(f=Math.max(i-r,a-o))?32767/f:0}return c(v,d,n,r,o,f,0),d}function l(e,t,n,r,o){var i,a;if(o===P(e,t,n,r)>0)for(i=t;i<n;i+=r)a=k(i,e[i],e[i+1],a);else for(i=n-r;i>=t;i-=r)a=k(i,e[i],e[i+1],a);return a&&F(a,a.next)&&(R(a),a=a.next),a}function h(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!F(r,r.next)&&0!==Z(r.prev,r,r.next))r=r.next;else{if(R(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function c(e,t,n,r,o,i,a){if(e){!a&&i&&function(e,t,n,r){var o=e;do{0===o.z&&(o.z=w(o.x,o.y,t,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,n,r,o,i,a,s,u,f=1;do{for(n=e,e=null,i=null,a=0;n;){for(a++,r=n,s=0,t=0;t<f&&(s++,r=r.nextZ);t++);for(u=f;s>0||u>0&&r;)0!==s&&(0===u||!r||n.z<=r.z)?(o=n,n=n.nextZ,s--):(o=r,r=r.nextZ,u--),i?i.nextZ=o:e=o,o.prevZ=i,i=o;n=r}i.nextZ=null,f*=2}while(a>1)}(o)}(e,r,o,i);for(var s,u,f=e;e.prev!==e.next;)if(s=e.prev,u=e.next,i?d(e,r,o,i):v(e))t.push(s.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),R(e),e=u.next,f=u.next;else if((e=u)===f){a?1===a?c(e=y(h(e),t,n),t,n,r,o,i,2):2===a&&p(e,t,n,r,o,i):c(h(e),t,n,r,o,i,1);break}}}function v(e){var t=e.prev,n=e,r=e.next;if(Z(t,n,r)>=0)return!1;for(var o=t.x,i=n.x,a=r.x,s=t.y,u=n.y,f=r.y,x=o<i?o<a?o:a:i<a?i:a,l=s<u?s<f?s:f:u<f?u:f,h=o>i?o>a?o:a:i>a?i:a,c=s>u?s>f?s:f:u>f?u:f,v=r.next;v!==t;){if(v.x>=x&&v.x<=h&&v.y>=l&&v.y<=c&&E(o,s,i,u,a,f,v.x,v.y)&&Z(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function d(e,t,n,r){var o=e.prev,i=e,a=e.next;if(Z(o,i,a)>=0)return!1;for(var s=o.x,u=i.x,f=a.x,x=o.y,l=i.y,h=a.y,c=s<u?s<f?s:f:u<f?u:f,v=x<l?x<h?x:h:l<h?l:h,d=s>u?s>f?s:f:u>f?u:f,y=x>l?x>h?x:h:l>h?l:h,p=w(c,v,t,n,r),b=w(d,y,t,n,r),g=e.prevZ,m=e.nextZ;g&&g.z>=p&&m&&m.z<=b;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&E(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,m.x>=c&&m.x<=d&&m.y>=v&&m.y<=y&&m!==o&&m!==a&&E(s,x,u,l,f,h,m.x,m.y)&&Z(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;g&&g.z>=p;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&E(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;m&&m.z<=b;){if(m.x>=c&&m.x<=d&&m.y>=v&&m.y<=y&&m!==o&&m!==a&&E(s,x,u,l,f,h,m.x,m.y)&&Z(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function y(e,t,n){var r=e;do{var o=r.prev,i=r.next.next;!F(o,i)&&T(o,r,r.next,i)&&z(o,i)&&z(i,o)&&(t.push(o.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),R(r),R(r.next),r=e=i),r=r.next}while(r!==e);return h(r)}function p(e,t,n,r,o,i){var a=e;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&M(a,s)){var u=U(a,s);return a=h(a,a.next),u=h(u,u.next),c(a,t,n,r,o,i,0),void c(u,t,n,r,o,i,0)}s=s.next}a=a.next}while(a!==e)}function b(e,t){return e.x-t.x}function g(e,t){var n=function(e,t){var n,r=t,o=e.x,i=e.y,a=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var s=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=o&&s>a&&(a=s,n=r.x<r.next.x?r:r.next,s===o))return n}r=r.next}while(r!==t);if(!n)return null;var u,f=n,x=n.x,l=n.y,h=1/0;r=n;do{o>=r.x&&r.x>=x&&o!==r.x&&E(i<l?o:a,i,x,l,i<l?a:o,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(o-r.x),z(r,e)&&(u<h||u===h&&(r.x>n.x||r.x===n.x&&m(n,r)))&&(n=r,h=u)),r=r.next}while(r!==f);return n}(e,t);if(!n)return t;var r=U(n,e);return h(r,r.next),h(n,n.next)}function m(e,t){return Z(e.prev,e,t.prev)<0&&Z(t.next,e,e.next)<0}function w(e,t,n,r,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function A(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function E(e,t,n,r,o,i,a,s){return(o-a)*(t-s)>=(e-a)*(i-s)&&(e-a)*(r-s)>=(n-a)*(t-s)&&(n-a)*(i-s)>=(o-a)*(r-s)}function M(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&T(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(z(e,t)&&z(t,e)&&function(e,t){var n=e,r=!1,o=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&o<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(Z(e.prev,e,t.prev)||Z(e,t.prev,t))||F(e,t)&&Z(e.prev,e,e.next)>0&&Z(t.prev,t,t.next)>0)}function Z(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function F(e,t){return e.x===t.x&&e.y===t.y}function T(e,t,n,r){var o=S(Z(e,t,n)),i=S(Z(e,t,r)),a=S(Z(n,r,e)),s=S(Z(n,r,t));return o!==i&&a!==s||(!(0!==o||!I(e,n,t))||(!(0!==i||!I(e,r,t))||(!(0!==a||!I(n,e,r))||!(0!==s||!I(n,t,r)))))}function I(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function S(e){return e>0?1:e<0?-1:0}function z(e,t){return Z(e.prev,e,e.next)<0?Z(e,t,e.next)>=0&&Z(e,e.prev,t)>=0:Z(e,t,e.prev)<0||Z(e,e.next,t)<0}function U(e,t){var n=new B(e.i,e.x,e.y),r=new B(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=o,o.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function k(e,t,n,r){var o=new B(e,t,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function R(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function B(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(e,t,n,r){for(var o=0,i=t,a=n-r;i<n;i+=r)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}f.exports=x,f.exports.default=x,x.deviation=function(e,t,n,r){var o=t&&t.length,i=o?t[0]*n:e.length,a=Math.abs(P(e,0,i,n));if(o)for(var s=0,u=t.length;s<u;s++){var f=t[s]*n,x=s<u-1?t[s+1]*n:e.length;a-=Math.abs(P(e,f,x,n))}var l=0;for(s=0;s<r.length;s+=3){var h=r[s]*n,c=r[s+1]*n,v=r[s+2]*n;l+=Math.abs((e[h]-e[v])*(e[c+1]-e[h+1])-(e[h]-e[c])*(e[v+1]-e[h+1]))}return 0===a&&0===l?0:Math.abs((l-a)/a)},x.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,o=0;o<e.length;o++){for(var i=0;i<e[o].length;i++)for(var a=0;a<t;a++)n.vertices.push(e[o][i][a]);o>0&&(r+=e[o-1].length,n.holes.push(r))}return n};var N=u(f.exports);const _=[],O={vertexPosition:0,indexPosition:0};function q(e,t,n,r,o){e[t+0]=n,e[t+1]=r,e[t+2]=o}function L(e,t,n,r,o,i){const a=3+o,s=e[t+0],u=e[t+1],f=_;f.length=o;for(let n=0;n<f.length;n++)f[n]=e[t+2+n];let x=i?i.vertexPosition:0,l=i?i.indexPosition:0;const h=x/a;return q(n,x,s,u,0),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,1),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,2),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,3),f.length&&n.set(f,x+3),x+=a,r[l++]=h,r[l++]=h+1,r[l++]=h+3,r[l++]=h+1,r[l++]=h+2,r[l++]=h+3,O.vertexPosition=x,O.indexPosition=l,O}function C(e,t,n,r,o,i,s,u,f,x){const l=5+u.length,h=i.length/l,c=[e[t+0],e[t+1]],v=[e[n],e[n+1]],d=a(x,[...c]),y=a(x,[...v]);function p(e,t,n){const r=1e4;return Math.round(1500*t)+Math.round(1500*n)*r+e*r*r}function b(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),o=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-o[1],o[0]],a=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),s=[(n[0]-e[0])/a,(n[1]-e[1])/a],u=0===r||0===a?0:Math.acos((f=s[0]*o[0]+s[1]*o[1],x=-1,l=1,Math.min(Math.max(f,x),l)));var f,x,l;return s[0]*i[0]+s[1]*i[1]>0?u:2*Math.PI-u}const g=null!==o;let m=0,w=0;if(null!==r){m=b(d,y,a(x,[...[e[r],e[r+1]]]))}if(g){w=b(y,d,a(x,[...[e[o],e[o+1]]]))}i.push(c[0],c[1],v[0],v[1],p(0,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(1,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(2,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(3,m,w)),i.push(...u),s.push(h,h+1,h+2,h+1,h+3,h+2)}function G(e,t,n,r,o){const i=2+o;let a=t;const s=e.slice(a,a+o);a+=o;const u=e[a++];let f=0;const x=new Array(u-1);for(let t=0;t<u;t++)f+=e[a++],t<u-1&&(x[t]=f);const l=e.slice(a,a+2*f),h=N(l,x,2);for(let e=0;e<h.length;e++)r.push(h[e]+n.length/i);for(let e=0;e<l.length;e+=2)n.push(l[e],l[e+1],...s);return a+2*f}const j=self;j.onmessage=r=>{const o=r.data;switch(o.type){case t:{const e=3,t=2,n=o.customAttributesSize,r=t+n,i=new Float32Array(o.renderInstructions),a=i.length/r,s=4*a*(n+e),u=new Uint32Array(6*a),f=new Float32Array(s);let x;for(let e=0;e<i.length;e+=r)x=L(i,e,f,u,n,x);const l=Object.assign({vertexBuffer:f.buffer,indexBuffer:u.buffer,renderInstructions:i.buffer},o);j.postMessage(l,[f.buffer,u.buffer,i.buffer]);break}case n:{const e=[],t=[],n=o.customAttributesSize,r=2,i=new Float32Array(o.renderInstructions);let a=0;const u=o.renderInstructionsTransform,f=[1,0,0,1,0,0];let x,l;for(s(f,u);a<i.length;){l=Array.from(i.slice(a,a+n)),a+=n,x=i[a++];for(let n=0;n<x-1;n++)C(i,a+n*r,a+(n+1)*r,n>0?a+(n-1)*r:null,n<x-2?a+(n+2)*r:null,e,t,l,0,f);a+=x*r}const h=Uint32Array.from(t),c=Float32Array.from(e),v=Object.assign({vertexBuffer:c.buffer,indexBuffer:h.buffer,renderInstructions:i.buffer},o);j.postMessage(v,[c.buffer,h.buffer,i.buffer]);break}case e:{const e=[],t=[],n=o.customAttributesSize,r=new Float32Array(o.renderInstructions);let i=0;for(;i<r.length;)i=G(r,i,e,t,n);const a=Uint32Array.from(t),s=Float32Array.from(e),u=Object.assign({vertexBuffer:s.buffer,indexBuffer:a.buffer,renderInstructions:r.buffer},o);j.postMessage(u,[s.buffer,a.buffer,r.buffer]);break}}};";
          return new Worker(typeof Blob === 'undefined'
            ? 'data:application/javascript;base64,' + Buffer.from(source, 'binary').toString('base64')
            : URL.createObjectURL(new Blob([source], {type: 'application/javascript'})));
        }
      
