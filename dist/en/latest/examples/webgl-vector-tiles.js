"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4430],{8441:function(e,t,r){var s=r(4050),a=r(1055),i=r(4613),n=r(2065),o=r(824),l=r(2486),h=r(841),c=r(3214),p=r(4669);class m extends h.Z{constructor(e,t){super(e),this.batch_=new c.Z,this.styleRenderers_=t,this.buffers=[],this.setTile(e.tile)}uploadTile(){this.batch_.clear();const e=this.tile.getSourceTiles(),t=e.reduce(((e,t)=>e.concat(t.getFeatures())),[]);this.batch_.addFeatures(t);const r=e[0].extent[0],s=e[0].extent[1],a=(0,p.Iu)((0,p.Ue)(),-r,-s),i=this.styleRenderers_.map(((e,t)=>e.generateBuffers(this.batch_,a).then((e=>{this.buffers[t]=e}))));Promise.all(i).then((()=>{this.setReady()}))}}var d=m,u=r(9346),f=r(3044),_=r(4704),b=r(6117);class y extends f.ZP{constructor(e,t){super(e,t),this.styles_=[],this.styleRenderers_=[],this.currentFrameStateTransform_=(0,p.Ue)(),this.tmpTransform_=(0,p.Ue)(),this.tmpMat4_=(0,_.U)(),this.applyOptions_(t)}reset(e){super.reset(e),this.applyOptions_(e),this.helper&&this.createRenderers_()}applyOptions_(e){this.styles_=Array.isArray(e.style)?e.style:[e.style]}createRenderers_(){this.styleRenderers_=this.styles_.map((e=>new u.Z(e,this.helper)))}afterHelperCreated(){this.createRenderers_()}createTileRepresentation(e){const t=new d(e,this.styleRenderers_),r=()=>{t.ready&&(this.getLayer().changed(),t.removeEventListener(l.Z.CHANGE,r))};return t.addEventListener(l.Z.CHANGE,r),t}beforeTilesRender(e,t){super.beforeTilesRender(e,!0),this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_)}applyUniforms_(e,t,r){(0,p.lk)(this.tmpTransform_,this.currentFrameStateTransform_),(0,p.Jp)(this.tmpTransform_,r),this.helper.setUniformMatrixValue(f.XE.PROJECTION_MATRIX,(0,_.u)(this.tmpMat4_,this.tmpTransform_)),(0,p.nb)(this.tmpTransform_,this.currentFrameStateTransform_),this.helper.setUniformMatrixValue(f.XE.SCREEN_TO_WORLD_MATRIX,(0,_.u)(this.tmpMat4_,this.tmpTransform_)),this.helper.setUniformFloatValue(f.XE.GLOBAL_ALPHA,e),this.helper.setUniformFloatVec4(f.XE.RENDER_EXTENT,t)}renderTile(e,t,r,s,a,i,n,o,l,h,c){const p=(0,b.Ed)(o,s,o);for(let t=0,s=this.styleRenderers_.length;t<s;t++){const s=this.styleRenderers_[t],a=e.buffers[t];a&&s.render(a,r,(()=>{this.applyUniforms_(c,p,a.invertVerticesTransform)}))}}renderDeclutter(e){}disposeInternal(){super.disposeInternal()}}var g=y,T=r(677),S=r(5002),k=r(2776),x=r(1652),R=r(1976),w=r(1439),Z=r(569);const v=(0,Z.Zh)({"fill-color":["get","fillColor"],"stroke-color":["get","strokeColor"],"stroke-width":["get","strokeWidth"],symbol:{symbolType:"circle",size:8,color:"#777"}});class E extends i.Z{createRenderer(){return new g(this,{style:{fill:{fragment:v.builder.getFillFragmentShader(),vertex:v.builder.getFillVertexShader()},stroke:{fragment:v.builder.getStrokeFragmentShader(),vertex:v.builder.getStrokeVertexShader()},symbol:{fragment:v.builder.getSymbolFragmentShader(),vertex:v.builder.getSymbolVertexShader()},attributes:{fillColor:{size:2,callback:e=>{const t=this.getStyle()(e,1)[0],r=(0,w._2)(t?.getFill()?.getColor()||"#eee");return(0,Z.zO)(r)}},strokeColor:{size:2,callback:e=>{const t=this.getStyle()(e,1)[0],r=(0,w._2)(t?.getStroke()?.getColor()||"#eee");return(0,Z.zO)(r)}},strokeWidth:{size:1,callback:e=>{const t=this.getStyle()(e,1)[0];return t?.getStroke()?.getWidth()||0}}}}})}}new a.Z({layers:[new E({source:new n.Z({attributions:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',format:new s.Z,url:"https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ"}),style:createMapboxStreetsV6Style(T.ZP,S.Z,k.Z,x.Z,R.Z)})],target:"map",view:new o.ZP({center:[0,0],zoom:2})})}},function(e){var t;t=8441,e(e.s=t)}]);
//# sourceMappingURL=webgl-vector-tiles.js.map