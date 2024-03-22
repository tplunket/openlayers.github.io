"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5482],{29722:function(e,t,r){var o=r(41564),n=r(29810),i=r(87240),s=r(55238),a=r(6157),p=r(36018),m=r(77833),u=r(59286),l=r(69727),c=r(30470),g=r(37246),h=r(16235),w=r(44090),y=r(28487),d=r(40132),S=r(72961);const f=p.M+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",E={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};class R extends p.A{constructor(e){super(e=e||{}),this.surface_=void 0!==e.surface&&e.surface,this.curve_=void 0!==e.curve&&e.curve,this.multiCurve_=void 0===e.multiCurve||e.multiCurve,this.multiSurface_=void 0===e.multiSurface||e.multiSurface,this.schemaLocation=e.schemaLocation?e.schemaLocation:f,this.hasZ=void 0!==e.hasZ&&e.hasZ}readMultiCurve(e,t){const r=(0,g.eY)([],this.MULTICURVE_PARSERS,e,t,this);if(r){return new u.A(r)}}readFlatCurveRing(e,t){const r=(0,g.eY)([],this.MULTICURVE_PARSERS,e,t,this),o=[];for(let e=0,t=r.length;e<t;++e)(0,w.X$)(o,r[e].getFlatCoordinates());return o}readMultiSurface(e,t){const r=(0,g.eY)([],this.MULTISURFACE_PARSERS,e,t,this);if(r)return new l.A(r)}curveMemberParser(e,t){(0,g.UN)(this.CURVEMEMBER_PARSERS,e,t,this)}surfaceMemberParser(e,t){(0,g.UN)(this.SURFACEMEMBER_PARSERS,e,t,this)}readPatch(e,t){return(0,g.eY)([null],this.PATCHES_PARSERS,e,t,this)}readSegment(e,t){return(0,g.eY)([],this.SEGMENTS_PARSERS,e,t,this)}readPolygonPatch(e,t){return(0,g.eY)([null],this.FLAT_LINEAR_RINGS_PARSERS,e,t,this)}readLineStringSegment(e,t){return(0,g.eY)([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS,e,t,this)}interiorParser(e,t){const r=(0,g.eY)(void 0,this.RING_PARSERS,e,t,this);if(r){t[t.length-1].push(r)}}exteriorParser(e,t){const r=(0,g.eY)(void 0,this.RING_PARSERS,e,t,this);if(r){t[t.length-1][0]=r}}readSurface(e,t){const r=(0,g.eY)([null],this.SURFACE_PARSERS,e,t,this);if(r&&r[0]){const e=r[0],t=[e.length];let o,n;for(o=1,n=r.length;o<n;++o)(0,w.X$)(e,r[o]),t.push(e.length);return new c.Ay(e,"XYZ",t)}}readCurve(e,t){const r=(0,g.eY)([null],this.CURVE_PARSERS,e,t,this);if(r){return new m.A(r,"XYZ")}}readEnvelope(e,t){const r=(0,g.eY)([null],this.ENVELOPE_PARSERS,e,t,this);return(0,h.N)(r[1][0],r[1][1],r[2][0],r[2][1])}readFlatPos(e,t){let r=(0,g.mT)(e,!1);const o=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,n=[];let i;for(;i=o.exec(r);)n.push(parseFloat(i[1])),r=r.substr(i[0].length);if(""!==r)return;const s=t[0].srsName;let a="enu";if(s){a=(0,y.Jt)(s).getAxisOrientation()}if("neu"===a){let e,t;for(e=0,t=n.length;e<t;e+=3){const t=n[e],r=n[e+1];n[e]=r,n[e+1]=t}}const p=n.length;return 2==p&&n.push(0),0!==p?n:void 0}readFlatPosList(e,t){const r=(0,g.mT)(e,!1).replace(/^\s*|\s*$/g,""),o=t[0],n=o.srsName,i=o.srsDimension;let s="enu";if(n){s=(0,y.Jt)(n).getAxisOrientation()}const a=r.split(/\s+/);let p,m,u,l=2;e.getAttribute("srsDimension")?l=(0,d._X)(e.getAttribute("srsDimension")):e.getAttribute("dimension")?l=(0,d._X)(e.getAttribute("dimension")):e.parentNode.getAttribute("srsDimension")?l=(0,d._X)(e.parentNode.getAttribute("srsDimension")):i&&(l=(0,d._X)(i));const c=[];for(let e=0,t=a.length;e<t;e+=l)p=parseFloat(a[e]),m=parseFloat(a[e+1]),u=3===l?parseFloat(a[e+2]):0,"en"===s.substr(0,2)?c.push(p,m,u):c.push(m,p,u);return c}writePos_(e,t,r){const o=r[r.length-1],n=o.hasZ,i=n?"3":"2";e.setAttribute("srsDimension",i);const s=o.srsName;let a="enu";s&&(a=(0,y.Jt)(s).getAxisOrientation());const p=t.getCoordinates();let m;if(m="en"===a.substr(0,2)?p[0]+" "+p[1]:p[1]+" "+p[0],n){m+=" "+(p[2]||0)}(0,d.uB)(e,m)}getCoords_(e,t,r){let o="enu";t&&(o=(0,y.Jt)(t).getAxisOrientation());let n="en"===o.substr(0,2)?e[0]+" "+e[1]:e[1]+" "+e[0];if(r){n+=" "+(e[2]||0)}return n}writePosList_(e,t,r){const o=r[r.length-1],n=o.hasZ,i=n?"3":"2";e.setAttribute("srsDimension",i);const s=o.srsName,a=t.getCoordinates(),p=a.length,m=new Array(p);let u;for(let e=0;e<p;++e)u=a[e],m[e]=this.getCoords_(u,s,n);(0,d.uB)(e,m.join(" "))}writePoint(e,t,r){const o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);const n=(0,g.qq)(e.namespaceURI,"pos");e.appendChild(n),this.writePos_(n,t,r)}writeEnvelope(e,t,r){const o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);const n=[t[0]+" "+t[1],t[2]+" "+t[3]];(0,g.NQ)({node:e},this.ENVELOPE_SERIALIZERS,g.OL,n,r,["lowerCorner","upperCorner"],this)}writeLinearRing(e,t,r){const o=r[r.length-1].srsName;o&&e.setAttribute("srsName",o);const n=(0,g.qq)(e.namespaceURI,"posList");e.appendChild(n),this.writePosList_(n,t,r)}RING_NODE_FACTORY_(e,t,r){const o=t[t.length-1],n=o.node,i=o.exteriorWritten;return void 0===i&&(o.exteriorWritten=!0),(0,g.qq)(n.namespaceURI,void 0!==i?"interior":"exterior")}writeSurfaceOrPolygon(e,t,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName;if("PolygonPatch"!==e.nodeName&&i&&e.setAttribute("srsName",i),"Polygon"===e.nodeName||"PolygonPatch"===e.nodeName){const o=t.getLinearRings();(0,g.NQ)({node:e,hasZ:n,srsName:i},this.RING_SERIALIZERS,this.RING_NODE_FACTORY_,o,r,void 0,this)}else if("Surface"===e.nodeName){const o=(0,g.qq)(e.namespaceURI,"patches");e.appendChild(o),this.writeSurfacePatches_(o,t,r)}}writeCurveOrLineString(e,t,r){const o=r[r.length-1].srsName;if("LineStringSegment"!==e.nodeName&&o&&e.setAttribute("srsName",o),"LineString"===e.nodeName||"LineStringSegment"===e.nodeName){const o=(0,g.qq)(e.namespaceURI,"posList");e.appendChild(o),this.writePosList_(o,t,r)}else if("Curve"===e.nodeName){const o=(0,g.qq)(e.namespaceURI,"segments");e.appendChild(o),this.writeCurveSegments_(o,t,r)}}writeMultiSurfaceOrPolygon(e,t,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName,s=o.surface;i&&e.setAttribute("srsName",i);const a=t.getPolygons();(0,g.NQ)({node:e,hasZ:n,srsName:i,surface:s},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,a,r,void 0,this)}writeMultiPoint(e,t,r){const o=r[r.length-1],n=o.srsName,i=o.hasZ;n&&e.setAttribute("srsName",n);const s=t.getPoints();(0,g.NQ)({node:e,hasZ:i,srsName:n},this.POINTMEMBER_SERIALIZERS,(0,g.X1)("pointMember"),s,r,void 0,this)}writeMultiCurveOrLineString(e,t,r){const o=r[r.length-1],n=o.hasZ,i=o.srsName,s=o.curve;i&&e.setAttribute("srsName",i);const a=t.getLineStrings();(0,g.NQ)({node:e,hasZ:n,srsName:i,curve:s},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.MULTIGEOMETRY_MEMBER_NODE_FACTORY_,a,r,void 0,this)}writeRing(e,t,r){const o=(0,g.qq)(e.namespaceURI,"LinearRing");e.appendChild(o),this.writeLinearRing(o,t,r)}writeSurfaceOrPolygonMember(e,t,r){const o=this.GEOMETRY_NODE_FACTORY_(t,r);o&&(e.appendChild(o),this.writeSurfaceOrPolygon(o,t,r))}writePointMember(e,t,r){const o=(0,g.qq)(e.namespaceURI,"Point");e.appendChild(o),this.writePoint(o,t,r)}writeLineStringOrCurveMember(e,t,r){const o=this.GEOMETRY_NODE_FACTORY_(t,r);o&&(e.appendChild(o),this.writeCurveOrLineString(o,t,r))}writeSurfacePatches_(e,t,r){const o=(0,g.qq)(e.namespaceURI,"PolygonPatch");e.appendChild(o),this.writeSurfaceOrPolygon(o,t,r)}writeCurveSegments_(e,t,r){const o=(0,g.qq)(e.namespaceURI,"LineStringSegment");e.appendChild(o),this.writeCurveOrLineString(o,t,r)}writeGeometryElement(e,t,r){const o=r[r.length-1],n=Object.assign({},o);let i;n.node=e,i=Array.isArray(t)?(0,S.zU)(t,o):(0,S.hX)(t,!0,o),(0,g.NQ)(n,this.GEOMETRY_SERIALIZERS,this.GEOMETRY_NODE_FACTORY_,[i],r,void 0,this)}writeFeatureElement(e,t,r){const o=t.getId();o&&e.setAttribute("fid",o);const n=r[r.length-1],i=n.featureNS,s=t.getGeometryName();n.serializers||(n.serializers={},n.serializers[i]={});const a=[],p=[];if(t.hasProperties()){const e=t.getProperties();for(const t in e){const r=e[t];null!==r&&(a.push(t),p.push(r),t==s||"function"==typeof r.getSimplifiedGeometry?t in n.serializers[i]||(n.serializers[i][t]=(0,g.mm)(this.writeGeometryElement,this)):t in n.serializers[i]||(n.serializers[i][t]=(0,g.mm)(d.uB)))}}const m=Object.assign({},n);m.node=e,(0,g.NQ)(m,n.serializers,(0,g.X1)(void 0,i),p,r,a)}writeFeatureMembers_(e,t,r){const o=r[r.length-1],n=o.featureType,i=o.featureNS,s={};s[i]={},s[i][n]=(0,g.mm)(this.writeFeatureElement,this);const a=Object.assign({},o);a.node=e,(0,g.NQ)(a,s,(0,g.X1)(n,i),t,r)}MULTIGEOMETRY_MEMBER_NODE_FACTORY_(e,t,r){const o=t[t.length-1].node;return(0,g.qq)(this.namespace,E[o.nodeName])}GEOMETRY_NODE_FACTORY_(e,t,r){const o=t[t.length-1],n=o.multiSurface,i=o.surface,s=o.curve,a=o.multiCurve;return Array.isArray(e)?r="Envelope":"MultiPolygon"===(r=e.getType())&&!0===n?r="MultiSurface":"Polygon"===r&&!0===i?r="Surface":"LineString"===r&&!0===s?r="Curve":"MultiLineString"===r&&!0===a&&(r="MultiCurve"),(0,g.qq)(this.namespace,r)}writeGeometryNode(e,t){t=this.adaptOptions(t);const r=(0,g.qq)(this.namespace,"geom"),o={node:r,hasZ:this.hasZ,srsName:this.srsName,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_};return t&&Object.assign(o,t),this.writeGeometryElement(r,e,[o]),r}writeFeaturesNode(e,t){t=this.adaptOptions(t);const r=(0,g.qq)(this.namespace,"featureMembers");r.setAttributeNS(g.pF,"xsi:schemaLocation",this.schemaLocation);const o={srsName:this.srsName,hasZ:this.hasZ,curve:this.curve_,surface:this.surface_,multiSurface:this.multiSurface_,multiCurve:this.multiCurve_,featureNS:this.featureNS,featureType:this.featureType};return t&&Object.assign(o,t),this.writeFeatureMembers_(r,e,[o]),r}}R.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{pos:(0,g.Tb)(R.prototype.readFlatPos),posList:(0,g.Tb)(R.prototype.readFlatPosList),coordinates:(0,g.Tb)(a.A.prototype.readFlatCoordinates)}},R.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{interior:R.prototype.interiorParser,exterior:R.prototype.exteriorParser}},R.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:(0,g.Tb)(p.A.prototype.readPoint),MultiPoint:(0,g.Tb)(p.A.prototype.readMultiPoint),LineString:(0,g.Tb)(p.A.prototype.readLineString),MultiLineString:(0,g.Tb)(p.A.prototype.readMultiLineString),LinearRing:(0,g.Tb)(p.A.prototype.readLinearRing),Polygon:(0,g.Tb)(p.A.prototype.readPolygon),MultiPolygon:(0,g.Tb)(p.A.prototype.readMultiPolygon),Surface:(0,g.Tb)(R.prototype.readSurface),MultiSurface:(0,g.Tb)(R.prototype.readMultiSurface),Curve:(0,g.Tb)(R.prototype.readCurve),MultiCurve:(0,g.Tb)(R.prototype.readMultiCurve),Envelope:(0,g.Tb)(R.prototype.readEnvelope)}},R.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml":{curveMember:(0,g.VT)(R.prototype.curveMemberParser),curveMembers:(0,g.VT)(R.prototype.curveMemberParser)}},R.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml":{surfaceMember:(0,g.VT)(R.prototype.surfaceMemberParser),surfaceMembers:(0,g.VT)(R.prototype.surfaceMemberParser)}},R.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:(0,g.VT)(p.A.prototype.readLineString),Curve:(0,g.VT)(R.prototype.readCurve)}},R.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:(0,g.VT)(p.A.prototype.readPolygon),Surface:(0,g.VT)(R.prototype.readSurface)}},R.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml":{patches:(0,g.Tb)(R.prototype.readPatch)}},R.prototype.CURVE_PARSERS={"http://www.opengis.net/gml":{segments:(0,g.Tb)(R.prototype.readSegment)}},R.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml":{lowerCorner:(0,g.VT)(R.prototype.readFlatPosList),upperCorner:(0,g.VT)(R.prototype.readFlatPosList)}},R.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml":{PolygonPatch:(0,g.Tb)(R.prototype.readPolygonPatch)}},R.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml":{LineStringSegment:(0,g.Vh)(R.prototype.readLineStringSegment)}},p.A.prototype.RING_PARSERS={"http://www.opengis.net/gml":{LinearRing:(0,g.Tb)(p.A.prototype.readFlatLinearRing),Ring:(0,g.Tb)(R.prototype.readFlatCurveRing)}},R.prototype.writeFeatures,R.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{exterior:(0,g.mm)(R.prototype.writeRing),interior:(0,g.mm)(R.prototype.writeRing)}},R.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:(0,g.mm)(d.uB),upperCorner:(0,g.mm)(d.uB)}},R.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:(0,g.mm)(R.prototype.writeSurfaceOrPolygonMember),polygonMember:(0,g.mm)(R.prototype.writeSurfaceOrPolygonMember)}},R.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:(0,g.mm)(R.prototype.writePointMember)}},R.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:(0,g.mm)(R.prototype.writeLineStringOrCurveMember),curveMember:(0,g.mm)(R.prototype.writeLineStringOrCurveMember)}},R.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:(0,g.mm)(R.prototype.writeCurveOrLineString),MultiCurve:(0,g.mm)(R.prototype.writeMultiCurveOrLineString),Point:(0,g.mm)(R.prototype.writePoint),MultiPoint:(0,g.mm)(R.prototype.writeMultiPoint),LineString:(0,g.mm)(R.prototype.writeCurveOrLineString),MultiLineString:(0,g.mm)(R.prototype.writeMultiCurveOrLineString),LinearRing:(0,g.mm)(R.prototype.writeLinearRing),Polygon:(0,g.mm)(R.prototype.writeSurfaceOrPolygon),MultiPolygon:(0,g.mm)(R.prototype.writeMultiSurfaceOrPolygon),Surface:(0,g.mm)(R.prototype.writeSurfaceOrPolygon),MultiSurface:(0,g.mm)(R.prototype.writeMultiSurfaceOrPolygon),Envelope:(0,g.mm)(R.prototype.writeEnvelope)}};var P=R;class A extends P{constructor(e){super(e=e||{}),this.schemaLocation=e.schemaLocation?e.schemaLocation:this.namespace+" http://schemas.opengis.net/gml/3.2.1/gml.xsd"}writeGeometryElement(e,t,r){const o=r[r.length-1];r[r.length-1]=Object.assign({multiCurve:!0,multiSurface:!0},o),super.writeGeometryElement(e,t,r)}}A.prototype.namespace="http://www.opengis.net/gml/3.2",A.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml/3.2":{pos:(0,g.Tb)(P.prototype.readFlatPos),posList:(0,g.Tb)(P.prototype.readFlatPosList),coordinates:(0,g.Tb)(a.A.prototype.readFlatCoordinates)}},A.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml/3.2":{interior:P.prototype.interiorParser,exterior:P.prototype.exteriorParser}},A.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml/3.2":{Point:(0,g.Tb)(p.A.prototype.readPoint),MultiPoint:(0,g.Tb)(p.A.prototype.readMultiPoint),LineString:(0,g.Tb)(p.A.prototype.readLineString),MultiLineString:(0,g.Tb)(p.A.prototype.readMultiLineString),LinearRing:(0,g.Tb)(p.A.prototype.readLinearRing),Polygon:(0,g.Tb)(p.A.prototype.readPolygon),MultiPolygon:(0,g.Tb)(p.A.prototype.readMultiPolygon),Surface:(0,g.Tb)(A.prototype.readSurface),MultiSurface:(0,g.Tb)(P.prototype.readMultiSurface),Curve:(0,g.Tb)(A.prototype.readCurve),MultiCurve:(0,g.Tb)(P.prototype.readMultiCurve),Envelope:(0,g.Tb)(A.prototype.readEnvelope)}},A.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml/3.2":{curveMember:(0,g.VT)(P.prototype.curveMemberParser),curveMembers:(0,g.VT)(P.prototype.curveMemberParser)}},A.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml/3.2":{surfaceMember:(0,g.VT)(P.prototype.surfaceMemberParser),surfaceMembers:(0,g.VT)(P.prototype.surfaceMemberParser)}},A.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{LineString:(0,g.VT)(p.A.prototype.readLineString),Curve:(0,g.VT)(P.prototype.readCurve)}},A.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Polygon:(0,g.VT)(p.A.prototype.readPolygon),Surface:(0,g.VT)(P.prototype.readSurface)}},A.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml/3.2":{patches:(0,g.Tb)(P.prototype.readPatch)}},A.prototype.CURVE_PARSERS={"http://www.opengis.net/gml/3.2":{segments:(0,g.Tb)(P.prototype.readSegment)}},A.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml/3.2":{lowerCorner:(0,g.VT)(P.prototype.readFlatPosList),upperCorner:(0,g.VT)(P.prototype.readFlatPosList)}},A.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml/3.2":{PolygonPatch:(0,g.Tb)(P.prototype.readPolygonPatch)}},A.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml/3.2":{LineStringSegment:(0,g.Vh)(P.prototype.readLineStringSegment)}},A.prototype.MULTIPOINT_PARSERS={"http://www.opengis.net/gml/3.2":{pointMember:(0,g.VT)(p.A.prototype.pointMemberParser),pointMembers:(0,g.VT)(p.A.prototype.pointMemberParser)}},A.prototype.MULTILINESTRING_PARSERS={"http://www.opengis.net/gml/3.2":{lineStringMember:(0,g.VT)(p.A.prototype.lineStringMemberParser),lineStringMembers:(0,g.VT)(p.A.prototype.lineStringMemberParser)}},A.prototype.MULTIPOLYGON_PARSERS={"http://www.opengis.net/gml/3.2":{polygonMember:(0,g.VT)(p.A.prototype.polygonMemberParser),polygonMembers:(0,g.VT)(p.A.prototype.polygonMemberParser)}},A.prototype.POINTMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Point:(0,g.VT)(p.A.prototype.readFlatCoordinatesFromNode)}},A.prototype.LINESTRINGMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{LineString:(0,g.VT)(p.A.prototype.readLineString)}},A.prototype.POLYGONMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Polygon:(0,g.VT)(p.A.prototype.readPolygon)}},A.prototype.RING_PARSERS={"http://www.opengis.net/gml/3.2":{LinearRing:(0,g.Tb)(p.A.prototype.readFlatLinearRing),Ring:(0,g.Tb)(A.prototype.readFlatCurveRing)}},A.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml/3.2":{exterior:(0,g.mm)(P.prototype.writeRing),interior:(0,g.mm)(P.prototype.writeRing)}},A.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml/3.2":{lowerCorner:(0,g.mm)(d.uB),upperCorner:(0,g.mm)(d.uB)}},A.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{surfaceMember:(0,g.mm)(P.prototype.writeSurfaceOrPolygonMember),polygonMember:(0,g.mm)(P.prototype.writeSurfaceOrPolygonMember)}},A.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{pointMember:(0,g.mm)(P.prototype.writePointMember)}},A.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{lineStringMember:(0,g.mm)(P.prototype.writeLineStringOrCurveMember),curveMember:(0,g.mm)(P.prototype.writeLineStringOrCurveMember)}},A.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml/3.2":{Curve:(0,g.mm)(P.prototype.writeCurveOrLineString),MultiCurve:(0,g.mm)(P.prototype.writeMultiCurveOrLineString),Point:(0,g.mm)(A.prototype.writePoint),MultiPoint:(0,g.mm)(P.prototype.writeMultiPoint),LineString:(0,g.mm)(P.prototype.writeCurveOrLineString),MultiLineString:(0,g.mm)(P.prototype.writeMultiCurveOrLineString),LinearRing:(0,g.mm)(P.prototype.writeLinearRing),Polygon:(0,g.mm)(P.prototype.writeSurfaceOrPolygon),MultiPolygon:(0,g.mm)(P.prototype.writeMultiSurfaceOrPolygon),Surface:(0,g.mm)(P.prototype.writeSurfaceOrPolygon),MultiSurface:(0,g.mm)(P.prototype.writeMultiSurfaceOrPolygon),Envelope:(0,g.mm)(P.prototype.writeEnvelope)}};var N=A,T=r(86858);var b=class{constructor(e){this.tagName_=e}getTagName(){return this.tagName_}},M=r(42484);var v=class extends b{constructor(e,t){super(e),this.conditions=t,(0,M.v)(this.conditions.length>=2,"At least 2 conditions are required")}};var C=class extends v{constructor(e){super("And",Array.prototype.slice.call(arguments))}};var _=class extends b{constructor(e,t,r){if(super("BBOX"),this.geometryName=e,this.extent=t,4!==t.length)throw new Error("Expected an extent with four values ([minX, minY, maxX, maxY])");this.srsName=r}};var L=class extends b{constructor(e,t){super(e),this.propertyName=t}};var O=class extends L{constructor(e,t,r,o){super(e,t),this.expression=r,this.matchCase=o}};var I=class extends O{constructor(e,t,r){super("PropertyIsEqualTo",e,t,r)}};var F=class extends L{constructor(e,t,r,o,n,i){super("PropertyIsLike",e),this.pattern=t,this.wildCard=void 0!==r?r:"*",this.singleChar=void 0!==o?o:".",this.escapeChar=void 0!==n?n:"!",this.matchCase=i}};function x(e){const t=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(C,t))}const q={"http://www.opengis.net/gml":{boundedBy:(0,g.kW)(p.A.prototype.readExtentElement,"bounds")},"http://www.opengis.net/wfs/2.0":{member:(0,g.VT)(p.A.prototype.readFeaturesInternal)}},G={"http://www.opengis.net/wfs":{totalInserted:(0,g.kW)(d.yg),totalUpdated:(0,g.kW)(d.yg),totalDeleted:(0,g.kW)(d.yg)},"http://www.opengis.net/wfs/2.0":{totalInserted:(0,g.kW)(d.yg),totalUpdated:(0,g.kW)(d.yg),totalDeleted:(0,g.kW)(d.yg)}},V={"http://www.opengis.net/wfs":{TransactionSummary:(0,g.kW)(J,"transactionSummary"),InsertResults:(0,g.kW)(ee,"insertIds")},"http://www.opengis.net/wfs/2.0":{TransactionSummary:(0,g.kW)(J,"transactionSummary"),InsertResults:(0,g.kW)(ee,"insertIds")}},U={"http://www.opengis.net/wfs":{PropertyName:(0,g.mm)(d.uB)},"http://www.opengis.net/wfs/2.0":{PropertyName:(0,g.mm)(d.uB)}},B={"http://www.opengis.net/wfs":{Insert:(0,g.mm)(te),Update:(0,g.mm)(ie),Delete:(0,g.mm)(ne),Property:(0,g.mm)(se),Native:(0,g.mm)(ae)},"http://www.opengis.net/wfs/2.0":{Insert:(0,g.mm)(te),Update:(0,g.mm)(ie),Delete:(0,g.mm)(ne),Property:(0,g.mm)(se),Native:(0,g.mm)(ae)}},Y="feature",Z="http://www.w3.org/2000/xmlns/",D={"2.0.0":"http://www.opengis.net/ogc/1.1","1.1.0":"http://www.opengis.net/ogc","1.0.0":"http://www.opengis.net/ogc"},X={"2.0.0":"http://www.opengis.net/wfs/2.0","1.1.0":"http://www.opengis.net/wfs","1.0.0":"http://www.opengis.net/wfs"},j={"2.0.0":"http://www.opengis.net/fes/2.0","1.1.0":"http://www.opengis.net/fes","1.0.0":"http://www.opengis.net/fes"},k={"2.0.0":"http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd","1.1.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd","1.0.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"},W={"2.0.0":N,"1.1.0":P,"1.0.0":a.A};class Q extends T.A{constructor(e){super(),e=e||{},this.version_=e.version?e.version:"1.1.0",this.featureType_=e.featureType,this.featureNS_=e.featureNS,this.gmlFormat_=e.gmlFormat?e.gmlFormat:new W[this.version_],this.schemaLocation_=e.schemaLocation?e.schemaLocation:k[this.version_]}getFeatureType(){return this.featureType_}setFeatureType(e){this.featureType_=e}readFeaturesFromNode(e,t){const r={node:e};Object.assign(r,{featureType:this.featureType_,featureNS:this.featureNS_}),Object.assign(r,this.getReadOptions(e,t||{}));const o=[r];let n;n="2.0.0"===this.version_?q:this.gmlFormat_.FEATURE_COLLECTION_PARSERS;let i=(0,g.eY)([],n,e,o,this.gmlFormat_);return i||(i=[]),i}readTransactionResponse(e){if(e){if("string"==typeof e){const t=(0,g.qg)(e);return this.readTransactionResponseFromDocument(t)}return(0,g.wz)(e)?this.readTransactionResponseFromDocument(e):this.readTransactionResponseFromNode(e)}}readFeatureCollectionMetadata(e){if(e){if("string"==typeof e){const t=(0,g.qg)(e);return this.readFeatureCollectionMetadataFromDocument(t)}return(0,g.wz)(e)?this.readFeatureCollectionMetadataFromDocument(e):this.readFeatureCollectionMetadataFromNode(e)}}readFeatureCollectionMetadataFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readFeatureCollectionMetadataFromNode(t)}readFeatureCollectionMetadataFromNode(e){const t={},r=(0,d._X)(e.getAttribute("numberOfFeatures"));return t.numberOfFeatures=r,(0,g.eY)(t,q,e,[],this.gmlFormat_)}readTransactionResponseFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readTransactionResponseFromNode(t)}readTransactionResponseFromNode(e){return(0,g.eY)({},V,e,[])}writeGetFeature(e){const t=(0,g.qq)(X[this.version_],"GetFeature");t.setAttribute("service","WFS"),t.setAttribute("version",this.version_),e.handle&&t.setAttribute("handle",e.handle),e.outputFormat&&t.setAttribute("outputFormat",e.outputFormat),void 0!==e.maxFeatures&&t.setAttribute("maxFeatures",String(e.maxFeatures)),e.resultType&&t.setAttribute("resultType",e.resultType),void 0!==e.startIndex&&t.setAttribute("startIndex",String(e.startIndex)),void 0!==e.count&&t.setAttribute("count",String(e.count)),void 0!==e.viewParams&&t.setAttribute("viewParams",e.viewParams),t.setAttributeNS(g.pF,"xsi:schemaLocation",this.schemaLocation_);const r={node:t};if(Object.assign(r,{version:this.version_,srsName:e.srsName,featureNS:e.featureNS?e.featureNS:this.featureNS_,featurePrefix:e.featurePrefix,propertyNames:e.propertyNames?e.propertyNames:[]}),(0,M.v)(Array.isArray(e.featureTypes),"`options.featureTypes` must be an Array"),"string"==typeof e.featureTypes[0]){let o=e.filter;e.bbox&&((0,M.v)(e.geometryName,"`options.geometryName` must also be provided when `options.bbox` is set"),o=this.combineBboxAndFilter(e.geometryName,e.bbox,e.srsName,o)),Object.assign(r,{geometryName:e.geometryName,filter:o}),Te(t,e.featureTypes,[r])}else e.featureTypes.forEach((o=>{const n=this.combineBboxAndFilter(o.geometryName,o.bbox,e.srsName,e.filter);Object.assign(r,{geometryName:o.geometryName,filter:n}),Te(t,[o.name],[r])}));return t}combineBboxAndFilter(e,t,r,o){const n=function(e,t,r){return new _(e,t,r)}(e,t,r);return o?x(o,n):n}writeTransaction(e,t,r,o){const n=[],i=o.version?o.version:this.version_,s=(0,g.qq)(X[i],"Transaction");let a;s.setAttribute("service","WFS"),s.setAttribute("version",i),o&&(a=o.gmlOptions?o.gmlOptions:{},o.handle&&s.setAttribute("handle",o.handle)),s.setAttributeNS(g.pF,"xsi:schemaLocation",k[i]);const p=function(e,t,r,o){const n=o.featurePrefix?o.featurePrefix:Y;let i;"1.0.0"===r?i=2:"1.1.0"===r?i=3:"2.0.0"===r&&(i=3.2);const s=Object.assign({node:e},{version:r,featureNS:o.featureNS,featureType:o.featureType,featurePrefix:n,gmlVersion:i,hasZ:o.hasZ,srsName:o.srsName},t);return s}(s,a,i,o);return e&&z("Insert",e,n,p),t&&z("Update",t,n,p),r&&z("Delete",r,n,p),o.nativeElements&&z("Native",o.nativeElements,n,p),s}readProjectionFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readProjectionFromNode(t);return null}readProjectionFromNode(e){if(e.firstElementChild&&e.firstElementChild.firstElementChild)for(let t=(e=e.firstElementChild.firstElementChild).firstElementChild;t;t=t.nextElementSibling)if(0!==t.childNodes.length&&(1!==t.childNodes.length||3!==t.firstChild.nodeType)){const e=[{}];return this.gmlFormat_.readGeometryElement(t,e),(0,y.Jt)(e.pop().srsName)}return null}}function z(e,t,r,o){(0,g.NQ)(o,B,(0,g.X1)(e),t,r)}function J(e,t){return(0,g.eY)({},G,e,t)}const H={"http://www.opengis.net/ogc":{FeatureId:(0,g.VT)((function(e,t){return e.getAttribute("fid")}))},"http://www.opengis.net/ogc/1.1":{FeatureId:(0,g.VT)((function(e,t){return e.getAttribute("fid")}))}};function K(e,t){(0,g.UN)(H,e,t)}const $={"http://www.opengis.net/wfs":{Feature:K},"http://www.opengis.net/wfs/2.0":{Feature:K}};function ee(e,t){return(0,g.eY)([],$,e,t)}function te(e,t,r){const o=r[r.length-1],n=o.featureType,i=o.featureNS,s=o.gmlVersion,p=(0,g.qq)(i,n);e.appendChild(p),2===s?a.A.prototype.writeFeatureElement(p,t,r):3===s?P.prototype.writeFeatureElement(p,t,r):N.prototype.writeFeatureElement(p,t,r)}function re(e,t,r){const o=r[r.length-1].version,n=D[o],i=(0,g.qq)(n,"Filter"),s=(0,g.qq)(n,"FeatureId");i.appendChild(s),s.setAttribute("fid",t),e.appendChild(i)}function oe(e,t){const r=(e=e||Y)+":";return t.startsWith(r)?t:r+t}function ne(e,t,r){const o=r[r.length-1];(0,M.v)(void 0!==t.getId(),"Features must have an id set");const n=o.featureType,i=o.featurePrefix,s=o.featureNS,a=oe(i,n);e.setAttribute("typeName",a),e.setAttributeNS(Z,"xmlns:"+i,s);const p=t.getId();void 0!==p&&re(e,p,r)}function ie(e,t,r){const o=r[r.length-1];(0,M.v)(void 0!==t.getId(),"Features must have an id set");const n=o.version,i=o.featureType,s=o.featurePrefix,a=o.featureNS,p=oe(s,i),m=t.getGeometryName();e.setAttribute("typeName",p),e.setAttributeNS(Z,"xmlns:"+s,a);const u=t.getId();if(void 0!==u){const i=t.getKeys(),s=[];for(let e=0,r=i.length;e<r;e++){const r=t.get(i[e]);if(void 0!==r){let t=i[e];r&&"function"==typeof r.getSimplifiedGeometry&&(t=m),s.push({name:t,value:r})}}(0,g.NQ)({version:n,gmlVersion:o.gmlVersion,node:e,hasZ:o.hasZ,srsName:o.srsName},B,(0,g.X1)("Property"),s,r),re(e,u,r)}}function se(e,t,r){const o=r[r.length-1],n=o.version,i=X[n],s="2.0.0"===n?"ValueReference":"Name",p=(0,g.qq)(i,s),m=o.gmlVersion;if(e.appendChild(p),(0,d.uB)(p,t.name),void 0!==t.value&&null!==t.value){const o=(0,g.qq)(i,"Value");e.appendChild(o),t.value&&"function"==typeof t.value.getSimplifiedGeometry?2===m?a.A.prototype.writeGeometryElement(o,t.value,r):3===m?P.prototype.writeGeometryElement(o,t.value,r):N.prototype.writeGeometryElement(o,t.value,r):(0,d.uB)(o,t.value)}}function ae(e,t,r){t.vendorId&&e.setAttribute("vendorId",t.vendorId),void 0!==t.safeToIgnore&&e.setAttribute("safeToIgnore",String(t.safeToIgnore)),void 0!==t.value&&(0,d.uB)(e,t.value)}const pe={"http://www.opengis.net/wfs":{Query:(0,g.mm)(me)},"http://www.opengis.net/wfs/2.0":{Query:(0,g.mm)(me)},"http://www.opengis.net/ogc":{During:(0,g.mm)(he),And:(0,g.mm)(we),Or:(0,g.mm)(we),Not:(0,g.mm)(ye),BBOX:(0,g.mm)(le),Contains:(0,g.mm)(ce),Intersects:(0,g.mm)(ce),Within:(0,g.mm)(ce),DWithin:(0,g.mm)(ge),PropertyIsEqualTo:(0,g.mm)(de),PropertyIsNotEqualTo:(0,g.mm)(de),PropertyIsLessThan:(0,g.mm)(de),PropertyIsLessThanOrEqualTo:(0,g.mm)(de),PropertyIsGreaterThan:(0,g.mm)(de),PropertyIsGreaterThanOrEqualTo:(0,g.mm)(de),PropertyIsNull:(0,g.mm)(Se),PropertyIsBetween:(0,g.mm)(fe),PropertyIsLike:(0,g.mm)(Ee)},"http://www.opengis.net/fes/2.0":{During:(0,g.mm)(he),And:(0,g.mm)(we),Or:(0,g.mm)(we),Not:(0,g.mm)(ye),BBOX:(0,g.mm)(le),Contains:(0,g.mm)(ce),Disjoint:(0,g.mm)(ce),Intersects:(0,g.mm)(ce),ResourceId:(0,g.mm)((function(e,t,r){e.setAttribute("rid",t.rid)})),Within:(0,g.mm)(ce),DWithin:(0,g.mm)(ge),PropertyIsEqualTo:(0,g.mm)(de),PropertyIsNotEqualTo:(0,g.mm)(de),PropertyIsLessThan:(0,g.mm)(de),PropertyIsLessThanOrEqualTo:(0,g.mm)(de),PropertyIsGreaterThan:(0,g.mm)(de),PropertyIsGreaterThanOrEqualTo:(0,g.mm)(de),PropertyIsNull:(0,g.mm)(Se),PropertyIsBetween:(0,g.mm)(fe),PropertyIsLike:(0,g.mm)(Ee)}};function me(e,t,r){const o=r[r.length-1],n=o.version,i=o.featurePrefix,s=o.featureNS,a=o.propertyNames,p=o.srsName;let m,u;m=i?oe(i,t):t,u="2.0.0"===n?"typeNames":"typeName",e.setAttribute(u,m),p&&e.setAttribute("srsName",p),s&&e.setAttributeNS(Z,"xmlns:"+i,s);const l=Object.assign({},o);l.node=e,(0,g.NQ)(l,U,(0,g.X1)("PropertyName"),a,r);const c=o.filter;if(c){const t=(0,g.qq)(be(n),"Filter");e.appendChild(t),ue(t,c,r)}}function ue(e,t,r){const o=r[r.length-1],n={node:e};Object.assign(n,{context:o}),(0,g.NQ)(n,pe,(0,g.X1)(t.getTagName()),[t],r)}function le(e,t,r){const o=r[r.length-1],n=o.context.version;o.srsName=t.srsName;const i=W[n];Ae(n,e,t.geometryName),i.prototype.writeGeometryElement(e,t.extent,r)}function ce(e,t,r){const o=r[r.length-1],n=o.context.version;o.srsName=t.srsName;const i=W[n];Ae(n,e,t.geometryName),i.prototype.writeGeometryElement(e,t.geometry,r)}function ge(e,t,r){const o=r[r.length-1].context.version;ce(e,t,r);const n=(0,g.qq)(be(o),"Distance");(0,d.uB)(n,t.distance.toString()),"2.0.0"===o?n.setAttribute("uom",t.unit):n.setAttribute("units",t.unit),e.appendChild(n)}function he(e,t,r){const o=r[r.length-1].context.version;Re(j[o],"ValueReference",e,t.propertyName);const n=(0,g.qq)(p.M,"TimePeriod");e.appendChild(n);const i=(0,g.qq)(p.M,"begin");n.appendChild(i),Ne(i,t.begin);const s=(0,g.qq)(p.M,"end");n.appendChild(s),Ne(s,t.end)}function we(e,t,r){const o=r[r.length-1].context,n={node:e};Object.assign(n,{context:o});const i=t.conditions;for(let e=0,t=i.length;e<t;++e){const t=i[e];(0,g.NQ)(n,pe,(0,g.X1)(t.getTagName()),[t],r)}}function ye(e,t,r){const o=r[r.length-1].context,n={node:e};Object.assign(n,{context:o});const i=t.condition;(0,g.NQ)(n,pe,(0,g.X1)(i.getTagName()),[i],r)}function de(e,t,r){const o=r[r.length-1].context.version;void 0!==t.matchCase&&e.setAttribute("matchCase",t.matchCase.toString()),Ae(o,e,t.propertyName),Pe(o,e,""+t.expression)}function Se(e,t,r){Ae(r[r.length-1].context.version,e,t.propertyName)}function fe(e,t,r){const o=r[r.length-1].context.version,n=be(o);Ae(o,e,t.propertyName);const i=(0,g.qq)(n,"LowerBoundary");e.appendChild(i),Pe(o,i,""+t.lowerBoundary);const s=(0,g.qq)(n,"UpperBoundary");e.appendChild(s),Pe(o,s,""+t.upperBoundary)}function Ee(e,t,r){const o=r[r.length-1].context.version;e.setAttribute("wildCard",t.wildCard),e.setAttribute("singleChar",t.singleChar),e.setAttribute("escapeChar",t.escapeChar),void 0!==t.matchCase&&e.setAttribute("matchCase",t.matchCase.toString()),Ae(o,e,t.propertyName),Pe(o,e,""+t.pattern)}function Re(e,t,r,o){const n=(0,g.qq)(e,t);(0,d.uB)(n,o),r.appendChild(n)}function Pe(e,t,r){Re(be(e),"Literal",t,r)}function Ae(e,t,r){"2.0.0"===e?Re(j[e],"ValueReference",t,r):Re(D[e],"PropertyName",t,r)}function Ne(e,t){const r=(0,g.qq)(p.M,"TimeInstant");e.appendChild(r);const o=(0,g.qq)(p.M,"timePosition");r.appendChild(o),(0,d.uB)(o,t)}function Te(e,t,r){const o=r[r.length-1],n=Object.assign({},o);n.node=e,(0,g.NQ)(n,pe,(0,g.X1)("Query"),t,r)}function be(e){let t;return t="2.0.0"===e?j[e]:D[e],t}var Me=Q,ve=r(49208),Ce=r(88292),_e=r(44689),Le=r(23986),Oe=r(12185);const Ie=new n.A,Fe=new Le.A({source:Ie,style:new Ce.Ay({stroke:new _e.A({color:"rgba(0, 0, 255, 1.0)",width:2})})}),xe=new Oe.A({source:new s.A({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),qe=new o.A({layers:[xe,Fe],target:document.getElementById("map"),view:new i.Ay({center:[-8908887.277395891,5381918.072437216],maxZoom:19,zoom:12})}),Ge=(new Me).writeGetFeature({srsName:"EPSG:3857",featureNS:"http://openstreemap.org",featurePrefix:"osm",featureTypes:["water_areas"],outputFormat:"application/json",filter:x((Ve="name",Ue="Mississippi*",new F(Ve,Ue,Be,Ye,Ze,De)),function(e,t,r){return new I(e,t,r)}("waterway","riverbank"))});var Ve,Ue,Be,Ye,Ze,De;fetch("https://ahocevar.com/geoserver/wfs",{method:"POST",body:(new XMLSerializer).serializeToString(Ge)}).then((function(e){return e.json()})).then((function(e){const t=(new ve.A).readFeatures(e);Ie.addFeatures(t),qe.getView().fit(Ie.getExtent())}))}},function(e){var t;t=29722,e(e.s=t)}]);
//# sourceMappingURL=vector-wfs-getfeature.js.map