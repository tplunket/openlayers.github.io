/*! For license information please see 54.ol.js.LICENSE.txt */
(self.webpackChunkol=self.webpackChunkol||[]).push([[54],{943:function(e,r){var n,a,t,i,f,o,u,s,l,c,w,h,v;a={defaultNoDataValue:-34027999387901484e22,decode:function(e,r){var n=(r=r||{}).encodedMaskData||null===r.encodedMaskData,u=o(e,r.inputOffset||0,n),s=null!==r.noDataValue?r.noDataValue:a.defaultNoDataValue,l=t(u,r.pixelType||Float32Array,r.encodedMaskData,s,r.returnMask),c={width:u.width,height:u.height,pixelData:l.resultPixels,minValue:l.minValue,maxValue:u.pixels.maxValue,noDataValue:s};return l.resultMask&&(c.maskData=l.resultMask),r.returnEncodedMask&&u.mask&&(c.encodedMaskData=u.mask.bitset?u.mask.bitset:null),r.returnFileInfo&&(c.fileInfo=i(u),r.computeUsedBitDepths&&(c.fileInfo.bitDepths=f(u))),c}},t=function(e,r,n,a,t){var i,f,o,s=0,l=e.pixels.numBlocksX,c=e.pixels.numBlocksY,w=Math.floor(e.width/l),h=Math.floor(e.height/c),v=2*e.maxZError,y=Number.MAX_VALUE;n=n||(e.mask?e.mask.bitset:null),f=new r(e.width*e.height),t&&n&&(o=new Uint8Array(e.width*e.height));for(var d,b,k=new Float32Array(w*h),m=0;m<=c;m++){var A=m!==c?h:e.height%c;if(0!==A)for(var p=0;p<=l;p++){var U=p!==l?w:e.width%l;if(0!==U){var M,x,V,g,D=m*e.width*h+p*w,B=e.width-U,S=e.pixels.blocks[s];if(S.encoding<2?(0===S.encoding?M=S.rawData:(u(S.stuffedData,S.bitsPerPixel,S.numValidPixels,S.offset,v,k,e.pixels.maxValue),M=k),x=0):V=2===S.encoding?0:S.offset,n)for(b=0;b<A;b++){for(7&D&&(g=n[D>>3],g<<=7&D),d=0;d<U;d++)7&D||(g=n[D>>3]),128&g?(o&&(o[D]=1),y=y>(i=S.encoding<2?M[x++]:V)?i:y,f[D++]=i):(o&&(o[D]=0),f[D++]=a),g<<=1;D+=B}else if(S.encoding<2)for(b=0;b<A;b++){for(d=0;d<U;d++)y=y>(i=M[x++])?i:y,f[D++]=i;D+=B}else for(y=y>V?V:y,b=0;b<A;b++){for(d=0;d<U;d++)f[D++]=V;D+=B}if(1===S.encoding&&x!==S.numValidPixels)throw"Block and Mask do not match";s++}}}return{resultPixels:f,resultMask:o,minValue:y}},i=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},f=function(e){for(var r=e.pixels.numBlocksX*e.pixels.numBlocksY,n={},a=0;a<r;a++){var t=e.pixels.blocks[a];0===t.encoding?n.float32=!0:1===t.encoding?n[t.bitsPerPixel]=!0:n[0]=!0}return Object.keys(n)},o=function(e,r,n){var a={},t=new Uint8Array(e,r,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,t),"CntZImage"!==a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;r+=10;var i=new DataView(e,r,24);if(a.fileVersion=i.getInt32(0,!0),a.imageType=i.getInt32(4,!0),a.height=i.getUint32(8,!0),a.width=i.getUint32(12,!0),a.maxZError=i.getFloat64(16,!0),r+=24,!n)if(i=new DataView(e,r,16),a.mask={},a.mask.numBlocksY=i.getUint32(0,!0),a.mask.numBlocksX=i.getUint32(4,!0),a.mask.numBytes=i.getUint32(8,!0),a.mask.maxValue=i.getFloat32(12,!0),r+=16,a.mask.numBytes>0){var f=new Uint8Array(Math.ceil(a.width*a.height/8)),o=(i=new DataView(e,r,a.mask.numBytes)).getInt16(0,!0),u=2,s=0;do{if(o>0)for(;o--;)f[s++]=i.getUint8(u++);else{var l=i.getUint8(u++);for(o=-o;o--;)f[s++]=l}o=i.getInt16(u,!0),u+=2}while(u<a.mask.numBytes);if(-32768!==o||s<f.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=f,r+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(a.mask.bitset=new Uint8Array(Math.ceil(a.width*a.height/8)));i=new DataView(e,r,16),a.pixels={},a.pixels.numBlocksY=i.getUint32(0,!0),a.pixels.numBlocksX=i.getUint32(4,!0),a.pixels.numBytes=i.getUint32(8,!0),a.pixels.maxValue=i.getFloat32(12,!0),r+=16;var c=a.pixels.numBlocksX,w=a.pixels.numBlocksY,h=c+(a.width%c>0?1:0),v=w+(a.height%w>0?1:0);a.pixels.blocks=new Array(h*v);for(var y=0,d=0;d<v;d++)for(var b=0;b<h;b++){var k=0,m=e.byteLength-r;i=new DataView(e,r,Math.min(10,m));var A={};a.pixels.blocks[y++]=A;var p=i.getUint8(0);if(k++,A.encoding=63&p,A.encoding>3)throw"Invalid block encoding ("+A.encoding+")";if(2!==A.encoding){if(0!==p&&2!==p){if(p>>=6,A.offsetType=p,2===p)A.offset=i.getInt8(1),k++;else if(1===p)A.offset=i.getInt16(1,!0),k+=2;else{if(0!==p)throw"Invalid block offset type";A.offset=i.getFloat32(1,!0),k+=4}if(1===A.encoding)if(p=i.getUint8(k),k++,A.bitsPerPixel=63&p,p>>=6,A.numValidPixelsType=p,2===p)A.numValidPixels=i.getUint8(k),k++;else if(1===p)A.numValidPixels=i.getUint16(k,!0),k+=2;else{if(0!==p)throw"Invalid valid pixel count type";A.numValidPixels=i.getUint32(k,!0),k+=4}}var U;if(r+=k,3!==A.encoding)if(0===A.encoding){var M=(a.pixels.numBytes-1)/4;if(M!==Math.floor(M))throw"uncompressed block has invalid length";U=new ArrayBuffer(4*M),new Uint8Array(U).set(new Uint8Array(e,r,4*M));var x=new Float32Array(U);A.rawData=x,r+=4*M}else if(1===A.encoding){var V=Math.ceil(A.numValidPixels*A.bitsPerPixel/8),g=Math.ceil(V/4);U=new ArrayBuffer(4*g),new Uint8Array(U).set(new Uint8Array(e,r,V)),A.stuffedData=new Uint32Array(U),r+=V}}else r++}return a.eofOffset=r,a},u=function(e,r,n,a,t,i,f){var o,u,s,l=(1<<r)-1,c=0,w=0,h=Math.ceil((f-a)/t),v=4*e.length-Math.ceil(r*n/8);for(e[e.length-1]<<=8*v,o=0;o<n;o++){if(0===w&&(s=e[c++],w=32),w>=r)u=s>>>w-r&l,w-=r;else{var y=r-w;u=(s&l)<<y&l,u+=(s=e[c++])>>>(w=32-y)}i[o]=u<h?a+u*t:f}return i},c=a,w=function(){"use strict";var e=function(e,r,n,a,t,i,f,o){var u,s,l,c,w,h=(1<<n)-1,v=0,y=0,d=4*e.length-Math.ceil(n*a/8);if(e[e.length-1]<<=8*d,t)for(u=0;u<a;u++)0===y&&(l=e[v++],y=32),y>=n?(s=l>>>y-n&h,y-=n):(s=(l&h)<<(c=n-y)&h,s+=(l=e[v++])>>>(y=32-c)),r[u]=t[s];else for(w=Math.ceil((o-i)/f),u=0;u<a;u++)0===y&&(l=e[v++],y=32),y>=n?(s=l>>>y-n&h,y-=n):(s=(l&h)<<(c=n-y)&h,s+=(l=e[v++])>>>(y=32-c)),r[u]=s<w?i+s*f:o},r=function(e,r,n,a,t,i){var f,o=(1<<r)-1,u=0,s=0,l=0,c=0,w=0,h=[],v=4*e.length-Math.ceil(r*n/8);e[e.length-1]<<=8*v;var y=Math.ceil((i-a)/t);for(s=0;s<n;s++)0===c&&(f=e[u++],c=32),c>=r?(w=f>>>c-r&o,c-=r):(w=(f&o)<<(l=r-c)&o,w+=(f=e[u++])>>>(c=32-l)),h[s]=w<y?a+w*t:i;return h.unshift(a),h},n=function(e,r,n,a,t,i,f,o){var u,s,l,c,w=(1<<n)-1,h=0,v=0,y=0;if(t)for(u=0;u<a;u++)0===v&&(l=e[h++],v=32,y=0),v>=n?(s=l>>>y&w,v-=n,y+=n):(s=l>>>y&w,v=32-(c=n-v),s|=((l=e[h++])&(1<<c)-1)<<n-c,y=c),r[u]=t[s];else{var d=Math.ceil((o-i)/f);for(u=0;u<a;u++)0===v&&(l=e[h++],v=32,y=0),v>=n?(s=l>>>y&w,v-=n,y+=n):(s=l>>>y&w,v=32-(c=n-v),s|=((l=e[h++])&(1<<c)-1)<<n-c,y=c),r[u]=s<d?i+s*f:o}return r},a=function(e,r,n,a,t,i){var f,o=(1<<r)-1,u=0,s=0,l=0,c=0,w=0,h=0,v=[],y=Math.ceil((i-a)/t);for(s=0;s<n;s++)0===c&&(f=e[u++],c=32,h=0),c>=r?(w=f>>>h&o,c-=r,h+=r):(w=f>>>h&o,c=32-(l=r-c),w|=((f=e[u++])&(1<<l)-1)<<r-l,h=l),v[s]=w<y?a+w*t:i;return v.unshift(a),v},t=function(e,r,n,a){var t,i,f,o,u=(1<<n)-1,s=0,l=0,c=4*e.length-Math.ceil(n*a/8);for(e[e.length-1]<<=8*c,t=0;t<a;t++)0===l&&(f=e[s++],l=32),l>=n?(i=f>>>l-n&u,l-=n):(i=(f&u)<<(o=n-l)&u,i+=(f=e[s++])>>>(l=32-o)),r[t]=i;return r},i=function(e,r,n,a){var t,i,f,o,u=(1<<n)-1,s=0,l=0,c=0;for(t=0;t<a;t++)0===l&&(f=e[s++],l=32,c=0),l>=n?(i=f>>>c&u,l-=n,c+=n):(i=f>>>c&u,l=32-(o=n-l),i|=((f=e[s++])&(1<<o)-1)<<n-o,c=o),r[t]=i;return r},f={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var r=65535,n=65535,a=e.length,t=Math.floor(a/2),i=0;t;){var f=t>=359?359:t;t-=f;do{r+=e[i++]<<8,n+=r+=e[i++]}while(--f);r=(65535&r)+(r>>>16),n=(65535&n)+(n>>>16)}return 1&a&&(n+=r+=e[i]<<8),((n=(65535&n)+(n>>>16))<<16|(r=(65535&r)+(r>>>16)))>>>0},readHeaderInfo:function(e,r){var n=r.ptr,a=new Uint8Array(e,n,6),t={};if(t.fileIdentifierString=String.fromCharCode.apply(null,a),0!==t.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+t.fileIdentifierString;n+=6;var i,f=new DataView(e,n,8),o=f.getInt32(0,!0);if(t.fileVersion=o,n+=4,o>=3&&(t.checksum=f.getUint32(4,!0),n+=4),f=new DataView(e,n,12),t.height=f.getUint32(0,!0),t.width=f.getUint32(4,!0),n+=8,o>=4?(t.numDims=f.getUint32(8,!0),n+=4):t.numDims=1,f=new DataView(e,n,40),t.numValidPixel=f.getUint32(0,!0),t.microBlockSize=f.getInt32(4,!0),t.blobSize=f.getInt32(8,!0),t.imageType=f.getInt32(12,!0),t.maxZError=f.getFloat64(16,!0),t.zMin=f.getFloat64(24,!0),t.zMax=f.getFloat64(32,!0),n+=40,r.headerInfo=t,r.ptr=n,o>=3&&(i=o>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,n-i,t.blobSize-14))!==t.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,r){var n=r.headerInfo,a=this.getDataTypeArray(n.imageType),t=n.numDims*this.getDataTypeSize(n.imageType),i=this.readSubArray(e,r.ptr,a,t),f=this.readSubArray(e,r.ptr+t,a,t);r.ptr+=2*t;var o,u=!0;for(o=0;o<n.numDims;o++)if(i[o]!==f[o]){u=!1;break}return n.minValues=i,n.maxValues=f,u},readSubArray:function(e,r,n,a){var t;if(n===Uint8Array)t=new Uint8Array(e,r,a);else{var i=new ArrayBuffer(a);new Uint8Array(i).set(new Uint8Array(e,r,a)),t=new n(i)}return t},readMask:function(e,r){var n,a,t=r.ptr,i=r.headerInfo,f=i.width*i.height,o=i.numValidPixel,u=new DataView(e,t,4),s={};if(s.numBytes=u.getUint32(0,!0),t+=4,(0===o||f===o)&&0!==s.numBytes)throw"invalid mask";if(0===o)n=new Uint8Array(Math.ceil(f/8)),s.bitset=n,a=new Uint8Array(f),r.pixels.resultMask=a,t+=s.numBytes;else if(s.numBytes>0){n=new Uint8Array(Math.ceil(f/8));var l=(u=new DataView(e,t,s.numBytes)).getInt16(0,!0),c=2,w=0,h=0;do{if(l>0)for(;l--;)n[w++]=u.getUint8(c++);else for(h=u.getUint8(c++),l=-l;l--;)n[w++]=h;l=u.getInt16(c,!0),c+=2}while(c<s.numBytes);if(-32768!==l||w<n.length)throw"Unexpected end of mask RLE encoding";a=new Uint8Array(f);var v=0,y=0;for(y=0;y<f;y++)7&y?(v=n[y>>3],v<<=7&y):v=n[y>>3],128&v&&(a[y]=1);r.pixels.resultMask=a,s.bitset=n,t+=s.numBytes}return r.ptr=t,r.mask=s,!0},readDataOneSweep:function(e,r,n,a){var t,i=r.ptr,o=r.headerInfo,u=o.numDims,s=o.width*o.height,l=o.imageType,c=o.numValidPixel*f.getDataTypeSize(l)*u,w=r.pixels.resultMask;if(n===Uint8Array)t=new Uint8Array(e,i,c);else{var h=new ArrayBuffer(c);new Uint8Array(h).set(new Uint8Array(e,i,c)),t=new n(h)}if(t.length===s*u)r.pixels.resultPixels=a?f.swapDimensionOrder(t,s,u,n,!0):t;else{r.pixels.resultPixels=new n(s*u);var v=0,y=0,d=0,b=0;if(u>1){if(a){for(y=0;y<s;y++)if(w[y])for(b=y,d=0;d<u;d++,b+=s)r.pixels.resultPixels[b]=t[v++]}else for(y=0;y<s;y++)if(w[y])for(b=y*u,d=0;d<u;d++)r.pixels.resultPixels[b+d]=t[v++]}else for(y=0;y<s;y++)w[y]&&(r.pixels.resultPixels[y]=t[v++])}return i+=c,r.ptr=i,!0},readHuffmanTree:function(e,r){var n=this.HUFFMAN_LUT_BITS_MAX,a=new DataView(e,r.ptr,16);if(r.ptr+=16,a.getInt32(0,!0)<2)throw"unsupported Huffman version";var t=a.getInt32(4,!0),i=a.getInt32(8,!0),u=a.getInt32(12,!0);if(i>=u)return!1;var s=new Uint32Array(u-i);f.decodeBits(e,r,s);var l,c,w,h,v=[];for(l=i;l<u;l++)v[c=l-(l<t?0:t)]={first:s[l-i],second:null};var y=e.byteLength-r.ptr,d=Math.ceil(y/4),b=new ArrayBuffer(4*d);new Uint8Array(b).set(new Uint8Array(e,r.ptr,y));var k,m=new Uint32Array(b),A=0,p=0;for(k=m[0],l=i;l<u;l++)(h=v[c=l-(l<t?0:t)].first)>0&&(v[c].second=k<<A>>>32-h,32-A>=h?32===(A+=h)&&(A=0,k=m[++p]):(A+=h-32,k=m[++p],v[c].second|=k>>>32-A));var U=0,M=0,x=new o;for(l=0;l<v.length;l++)void 0!==v[l]&&(U=Math.max(U,v[l].first));M=U>=n?n:U;var V,g,D,B,S,I=[];for(l=i;l<u;l++)if((h=v[c=l-(l<t?0:t)].first)>0)if(V=[h,c],h<=M)for(g=v[c].second<<M-h,D=1<<M-h,w=0;w<D;w++)I[g|w]=V;else for(g=v[c].second,S=x,B=h-1;B>=0;B--)g>>>B&1?(S.right||(S.right=new o),S=S.right):(S.left||(S.left=new o),S=S.left),0!==B||S.val||(S.val=V[1]);return{decodeLut:I,numBitsLUTQick:M,numBitsLUT:U,tree:x,stuffedData:m,srcPtr:p,bitPos:A}},readHuffman:function(e,r,n,a){var t,i,o,u,s,l,c,w,h,v=r.headerInfo.numDims,y=r.headerInfo.height,d=r.headerInfo.width,b=d*y,k=this.readHuffmanTree(e,r),m=k.decodeLut,A=k.tree,p=k.stuffedData,U=k.srcPtr,M=k.bitPos,x=k.numBitsLUTQick,V=k.numBitsLUT,g=0===r.headerInfo.imageType?128:0,D=r.pixels.resultMask,B=0;M>0&&(U++,M=0);var S,I=p[U],T=1===r.encodeMode,O=new n(b*v),F=O;if(v<2||T){for(S=0;S<v;S++)if(v>1&&(F=new n(O.buffer,b*S,b),B=0),r.headerInfo.numValidPixel===d*y)for(w=0,l=0;l<y;l++)for(c=0;c<d;c++,w++){if(i=0,s=u=I<<M>>>32-x,32-M<x&&(s=u|=p[U+1]>>>64-M-x),m[s])i=m[s][1],M+=m[s][0];else for(s=u=I<<M>>>32-V,32-M<V&&(s=u|=p[U+1]>>>64-M-V),t=A,h=0;h<V;h++)if(!(t=u>>>V-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,I=p[++U]),o=i-g,T?(o+=c>0?B:l>0?F[w-d]:B,o&=255,F[w]=o,B=o):F[w]=o}else for(w=0,l=0;l<y;l++)for(c=0;c<d;c++,w++)if(D[w]){if(i=0,s=u=I<<M>>>32-x,32-M<x&&(s=u|=p[U+1]>>>64-M-x),m[s])i=m[s][1],M+=m[s][0];else for(s=u=I<<M>>>32-V,32-M<V&&(s=u|=p[U+1]>>>64-M-V),t=A,h=0;h<V;h++)if(!(t=u>>>V-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,I=p[++U]),o=i-g,T?(c>0&&D[w-1]?o+=B:l>0&&D[w-d]?o+=F[w-d]:o+=B,o&=255,F[w]=o,B=o):F[w]=o}}else for(w=0,l=0;l<y;l++)for(c=0;c<d;c++)if(w=l*d+c,!D||D[w])for(S=0;S<v;S++,w+=b){if(i=0,s=u=I<<M>>>32-x,32-M<x&&(s=u|=p[U+1]>>>64-M-x),m[s])i=m[s][1],M+=m[s][0];else for(s=u=I<<M>>>32-V,32-M<V&&(s=u|=p[U+1]>>>64-M-V),t=A,h=0;h<V;h++)if(!(t=u>>>V-h-1&1?t.right:t.left).left&&!t.right){i=t.val,M=M+h+1;break}M>=32&&(M-=32,I=p[++U]),o=i-g,F[w]=o}r.ptr=r.ptr+4*(U+1)+(M>0?4:0),r.pixels.resultPixels=O,v>1&&!a&&(r.pixels.resultPixels=f.swapDimensionOrder(O,b,v,n))},decodeBits:function(f,o,u,s,l){var c=o.headerInfo,w=c.fileVersion,h=0,v=f.byteLength-o.ptr>=5?5:f.byteLength-o.ptr,y=new DataView(f,o.ptr,v),d=y.getUint8(0);h++;var b=d>>6,k=0===b?4:3-b,m=(32&d)>0,A=31&d,p=0;if(1===k)p=y.getUint8(h),h++;else if(2===k)p=y.getUint16(h,!0),h+=2;else{if(4!==k)throw"Invalid valid pixel count type";p=y.getUint32(h,!0),h+=4}var U,M,x,V,g,D,B,S,I,T=2*c.maxZError,O=c.numDims>1?c.maxValues[l]:c.zMax;if(m){for(o.counter.lut++,S=y.getUint8(h),h++,V=Math.ceil((S-1)*A/8),g=Math.ceil(V/4),M=new ArrayBuffer(4*g),x=new Uint8Array(M),o.ptr+=h,x.set(new Uint8Array(f,o.ptr,V)),B=new Uint32Array(M),o.ptr+=V,I=0;S-1>>>I;)I++;V=Math.ceil(p*I/8),g=Math.ceil(V/4),M=new ArrayBuffer(4*g),(x=new Uint8Array(M)).set(new Uint8Array(f,o.ptr,V)),U=new Uint32Array(M),o.ptr+=V,D=w>=3?a(B,A,S-1,s,T,O):r(B,A,S-1,s,T,O),w>=3?n(U,u,I,p,D):e(U,u,I,p,D)}else o.counter.bitstuffer++,I=A,o.ptr+=h,I>0&&(V=Math.ceil(p*I/8),g=Math.ceil(V/4),M=new ArrayBuffer(4*g),(x=new Uint8Array(M)).set(new Uint8Array(f,o.ptr,V)),U=new Uint32Array(M),o.ptr+=V,w>=3?null==s?i(U,u,I,p):n(U,u,I,p,!1,s,T,O):null==s?t(U,u,I,p):e(U,u,I,p,!1,s,T,O))},readTiles:function(e,r,n,a){var t=r.headerInfo,i=t.width,o=t.height,u=i*o,s=t.microBlockSize,l=t.imageType,c=f.getDataTypeSize(l),w=Math.ceil(i/s),h=Math.ceil(o/s);r.pixels.numBlocksY=h,r.pixels.numBlocksX=w,r.pixels.ptr=0;var v,y,d,b,k,m,A,p,U,M,x=0,V=0,g=0,D=0,B=0,S=0,I=0,T=0,O=0,F=0,j=0,E=0,P=0,C=0,L=0,R=new n(s*s),H=o%s||s,X=i%s||s,Z=t.numDims,z=r.pixels.resultMask,N=r.pixels.resultPixels,Y=t.fileVersion>=5?14:15,_=t.zMax;for(g=0;g<h;g++)for(B=g!==h-1?s:H,D=0;D<w;D++)for(F=g*i*s+D*s,j=i-(S=D!==w-1?s:X),p=0;p<Z;p++){if(Z>1?(M=N,F=g*i*s+D*s,N=new n(r.pixels.resultPixels.buffer,u*p*c,u),_=t.maxValues[p]):M=null,I=e.byteLength-r.ptr,y={},L=0,T=(v=new DataView(e,r.ptr,Math.min(10,I))).getUint8(0),L++,U=t.fileVersion>=5?4&T:0,O=T>>6&255,(T>>2&Y)!=(D*s>>3&Y))throw"integrity issue";if(U&&0===p)throw"integrity issue";if((k=3&T)>3)throw r.ptr+=L,"Invalid block encoding ("+k+")";if(2!==k)if(0===k){if(U)throw"integrity issue";if(r.counter.uncompressed++,r.ptr+=L,E=(E=B*S*c)<(P=e.byteLength-r.ptr)?E:P,d=new ArrayBuffer(E%c==0?E:E+c-E%c),new Uint8Array(d).set(new Uint8Array(e,r.ptr,E)),b=new n(d),C=0,z)for(x=0;x<B;x++){for(V=0;V<S;V++)z[F]&&(N[F]=b[C++]),F++;F+=j}else for(x=0;x<B;x++){for(V=0;V<S;V++)N[F++]=b[C++];F+=j}r.ptr+=C*c}else if(m=f.getDataTypeUsed(U&&l<6?4:l,O),A=f.getOnePixel(y,L,m,v),L+=f.getDataTypeSize(m),3===k)if(r.ptr+=L,r.counter.constantoffset++,z)for(x=0;x<B;x++){for(V=0;V<S;V++)z[F]&&(N[F]=U?Math.min(_,M[F]+A):A),F++;F+=j}else for(x=0;x<B;x++){for(V=0;V<S;V++)N[F]=U?Math.min(_,M[F]+A):A,F++;F+=j}else if(r.ptr+=L,f.decodeBits(e,r,R,A,p),L=0,U)if(z)for(x=0;x<B;x++){for(V=0;V<S;V++)z[F]&&(N[F]=R[L++]+M[F]),F++;F+=j}else for(x=0;x<B;x++){for(V=0;V<S;V++)N[F]=R[L++]+M[F],F++;F+=j}else if(z)for(x=0;x<B;x++){for(V=0;V<S;V++)z[F]&&(N[F]=R[L++]),F++;F+=j}else for(x=0;x<B;x++){for(V=0;V<S;V++)N[F++]=R[L++];F+=j}else{if(U)if(z)for(x=0;x<B;x++)for(V=0;V<S;V++)z[F]&&(N[F]=M[F]),F++;else for(x=0;x<B;x++)for(V=0;V<S;V++)N[F]=M[F],F++;r.counter.constant++,r.ptr+=L}}Z>1&&!a&&(r.pixels.resultPixels=f.swapDimensionOrder(r.pixels.resultPixels,u,Z,n))},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:f.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e,r){var n=e.headerInfo.zMax,a=e.headerInfo.zMin,t=e.headerInfo.maxValues,i=e.headerInfo.numDims,f=e.headerInfo.height*e.headerInfo.width,o=0,u=0,s=0,l=e.pixels.resultMask,c=e.pixels.resultPixels;if(l)if(i>1){if(r)for(o=0;o<i;o++)for(s=o*f,n=t[o],u=0;u<f;u++)l[u]&&(c[s+u]=n);else for(u=0;u<f;u++)if(l[u])for(s=u*i,o=0;o<i;o++)c[s+i]=t[o]}else for(u=0;u<f;u++)l[u]&&(c[u]=n);else if(i>1&&a!==n)if(r)for(o=0;o<i;o++)for(s=o*f,n=t[o],u=0;u<f;u++)c[s+u]=n;else for(u=0;u<f;u++)for(s=u*i,o=0;o<i;o++)c[s+o]=t[o];else for(u=0;u<f*i;u++)c[u]=n},getDataTypeArray:function(e){var r;switch(e){case 0:r=Int8Array;break;case 1:r=Uint8Array;break;case 2:r=Int16Array;break;case 3:r=Uint16Array;break;case 4:r=Int32Array;break;case 5:r=Uint32Array;break;case 6:r=Float32Array;break;case 7:r=Float64Array;break;default:r=Float32Array}return r},getPixelType:function(e){var r;switch(e){case 0:r="S8";break;case 1:r="U8";break;case 2:r="S16";break;case 3:r="U16";break;case 4:r="S32";break;case 5:r="U32";break;case 6:r="F32";break;case 7:r="F64";break;default:r="F32"}return r},isValidPixelValue:function(e,r){if(null==r)return!1;var n;switch(e){case 0:n=r>=-128&&r<=127;break;case 1:n=r>=0&&r<=255;break;case 2:n=r>=-32768&&r<=32767;break;case 3:n=r>=0&&r<=65536;break;case 4:n=r>=-2147483648&&r<=2147483647;break;case 5:n=r>=0&&r<=4294967296;break;case 6:n=r>=-34027999387901484e22&&r<=34027999387901484e22;break;case 7:n=r>=-17976931348623157e292&&r<=17976931348623157e292;break;default:n=!1}return n},getDataTypeSize:function(e){var r=0;switch(e){case 0:case 1:r=1;break;case 2:case 3:r=2;break;case 4:case 5:case 6:r=4;break;case 7:r=8;break;default:r=e}return r},getDataTypeUsed:function(e,r){var n=e;switch(e){case 2:case 4:n=e-r;break;case 3:case 5:n=e-2*r;break;case 6:n=0===r?e:1===r?2:1;break;case 7:n=0===r?e:e-2*r+1;break;default:n=e}return n},getOnePixel:function(e,r,n,a){var t=0;switch(n){case 0:t=a.getInt8(r);break;case 1:t=a.getUint8(r);break;case 2:t=a.getInt16(r,!0);break;case 3:t=a.getUint16(r,!0);break;case 4:t=a.getInt32(r,!0);break;case 5:t=a.getUInt32(r,!0);break;case 6:t=a.getFloat32(r,!0);break;case 7:t=a.getFloat64(r,!0);break;default:throw"the decoder does not understand this pixel type"}return t},swapDimensionOrder:function(e,r,n,a,t){var i=0,f=0,o=0,u=0,s=e;if(n>1)if(s=new a(r*n),t)for(i=0;i<r;i++)for(u=i,o=0;o<n;o++,u+=r)s[u]=e[f++];else for(i=0;i<r;i++)for(u=i,o=0;o<n;o++,u+=r)s[f++]=e[u];return s}},o=function(e,r,n){this.val=e,this.left=r,this.right=n};return{decode:function(e,r){var n=(r=r||{}).noDataValue,a=0,t={};if(t.ptr=r.inputOffset||0,t.pixels={},f.readHeaderInfo(e,t)){var i=t.headerInfo,o=i.fileVersion,u=f.getDataTypeArray(i.imageType);if(o>5)throw"unsupported lerc version 2."+o;f.readMask(e,t),i.numValidPixel===i.width*i.height||t.pixels.resultMask||(t.pixels.resultMask=r.maskData);var s=i.width*i.height;t.pixels.resultPixels=new u(s*i.numDims),t.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var l,c=!r.returnPixelInterleavedDims;if(0!==i.numValidPixel)if(i.zMax===i.zMin)f.constructConstantSurface(t,c);else if(o>=4&&f.checkMinMaxRanges(e,t))f.constructConstantSurface(t,c);else{var w=new DataView(e,t.ptr,2),h=w.getUint8(0);if(t.ptr++,h)f.readDataOneSweep(e,t,u,c);else if(o>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var v=w.getUint8(1);if(t.ptr++,t.encodeMode=v,v>2||o<4&&v>1)throw"Invalid Huffman flag "+v;v?f.readHuffman(e,t,u,c):f.readTiles(e,t,u,c)}else f.readTiles(e,t,u,c)}t.eofOffset=t.ptr,r.inputOffset?(l=t.headerInfo.blobSize+r.inputOffset-t.ptr,Math.abs(l)>=1&&(t.eofOffset=r.inputOffset+t.headerInfo.blobSize)):(l=t.headerInfo.blobSize-t.ptr,Math.abs(l)>=1&&(t.eofOffset=t.headerInfo.blobSize));var y={width:i.width,height:i.height,pixelData:t.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:t.pixels.resultMask};if(t.pixels.resultMask&&f.isValidPixelValue(i.imageType,n)){var d=t.pixels.resultMask;for(a=0;a<s;a++)d[a]||(y.pixelData[a]=n);y.noDataValue=n}return t.noDataValue=n,r.returnFileInfo&&(y.fileInfo=f.formatFileInfo(t)),y}},getBandCount:function(e){for(var r=0,n=0,a={ptr:0,pixels:{}};n<e.byteLength-58;)f.readHeaderInfo(e,a),n+=a.headerInfo.blobSize,r++,a.ptr=n;return r}}}(),s=new ArrayBuffer(4),l=new Uint8Array(s),new Uint32Array(s)[0]=1,h=1===l[0],v={decode:function(e,r){if(!h)throw"Big endian system is not supported.";var n,a,t=(r=r||{}).inputOffset||0,i=new Uint8Array(e,t,10),f=String.fromCharCode.apply(null,i);if("CntZImage"===f.trim())n=c,a=1;else{if("Lerc2"!==f.substring(0,5))throw"Unexpected file identifier string: "+f;n=w,a=2}for(var o,u,s,l,v,y,d=0,b=e.byteLength-10,k=[],m={width:0,height:0,pixels:[],pixelType:r.pixelType,mask:null,statistics:[]},A=0;t<b;){var p=n.decode(e,{inputOffset:t,encodedMaskData:o,maskData:s,returnMask:0===d,returnEncodedMask:0===d,returnFileInfo:!0,returnPixelInterleavedDims:r.returnPixelInterleavedDims,pixelType:r.pixelType||null,noDataValue:r.noDataValue||null});t=p.fileInfo.eofOffset,s=p.maskData,0===d&&(o=p.encodedMaskData,m.width=p.width,m.height=p.height,m.dimCount=p.dimCount||1,m.pixelType=p.pixelType||p.fileInfo.pixelType,m.mask=s),a>1&&(s&&k.push(s),p.fileInfo.mask&&p.fileInfo.mask.numBytes>0&&A++),d++,m.pixels.push(p.pixelData),m.statistics.push({minValue:p.minValue,maxValue:p.maxValue,noDataValue:p.noDataValue,dimStats:p.dimStats})}if(a>1&&A>1){for(y=m.width*m.height,m.bandMasks=k,(s=new Uint8Array(y)).set(k[0]),l=1;l<k.length;l++)for(u=k[l],v=0;v<y;v++)s[v]=s[v]&u[v];m.maskData=s}return m}},void 0===(n=function(){return v}.apply(r,[]))||(e.exports=n)},54:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var a=n(535),t=n(943),i=n(165),f=n(150);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,r){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function l(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=w(e);if(r){var t=w(this).constructor;n=Reflect.construct(a,arguments,t)}else n=a.apply(this,arguments);return c(this,n)}}function c(e,r){if(r&&("object"===o(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&s(e,r)}(c,e);var r,n,i,o=l(c);function c(e){var r;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,c),(r=o.call(this)).planarConfiguration=void 0!==e.PlanarConfiguration?e.PlanarConfiguration:1,r.samplesPerPixel=void 0!==e.SamplesPerPixel?e.SamplesPerPixel:1,r.addCompression=e.LercParameters[f.L5.AddCompression],r}return r=c,(n=[{key:"decodeBlock",value:function(e){switch(this.addCompression){case f.Qb.None:break;case f.Qb.Deflate:e=(0,a.rr)(new Uint8Array(e)).buffer;break;default:throw new Error("Unsupported LERC additional compression method identifier: ".concat(this.addCompression))}return t.decode(e,{returnPixelInterleavedDims:1===this.planarConfiguration}).pixels[0].buffer}}])&&u(r.prototype,n),i&&u(r,i),Object.defineProperty(r,"prototype",{writable:!1}),c}(i.Z)}}]);
//# sourceMappingURL=54.ol.js.map