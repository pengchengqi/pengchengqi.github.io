(function(){"use strict";var e={7166:function(e,t,n){var r=n(6369),i=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"container"}})])}],s=n(1114),a=n(4543),c=n(8281),h={data(){return{mesh:null,camera:null,scene:null,renderer:null,controls:null}},mounted(){this.init()},methods:{init(){this.createScene(),this.loadSTL(),this.createLight(),this.createCamera(),this.createRender(),this.createControls(),this.render()},createScene(){this.scene=new s.xsS;var e=new s.dpR,t=e.load("/bg.jpg");this.scene.background=t},loadSTL(){const e=new c.j;e.load("/test.stl",(e=>{const t=new s.YBo({color:16776960});this.mesh=new s.Kj0(e,t),this.mesh.rotation.x=-.5*Math.PI,this.mesh.scale.set(.005,.005,.005),e.center(),this.scene.add(this.mesh)}))},createLight(){const e=new s.Mig(16777215,.5);this.scene.add(e);const t=new s.Ox3(16777215,.5);t.position.set(0,0,600),this.scene.add(t)},createCamera(){const e=document.getElementById("container"),t=e.clientWidth,n=e.clientHeight,r=t/n;this.camera=new s.cPb(35,r,.1,1e3),this.camera.position.set(250,250,150),this.camera.lookAt(new s.Pa4(10,40,0)),this.scene.add(this.camera)},createRender(){const e=document.getElementById("container");this.renderer=new s.CP7({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=s.ntZ,this.renderer.setClearColor(16777215,1),e.appendChild(this.renderer.domElement)},render(){this.mesh&&(this.mesh.position.x-=.2),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)},createControls(){this.controls=new a.z(this.camera,this.renderer.domElement)}}},u=h,l=n(1001),d=(0,l.Z)(u,i,o,!1,null,null,null),f=d.exports;new r.ZP({render:e=>e(f)}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var h=i();void 0!==h&&(t=h)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,s=r[0],a=r[1],c=r[2],h=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var u=c(n)}for(t&&t(r);h<s.length;h++)o=s[h],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkvue_ruter"]=self["webpackChunkvue_ruter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7166)}));r=n.O(r)})();
//# sourceMappingURL=app.3453295f.js.map