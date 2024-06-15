import"./assets/modulepreload-polyfill-3cfb730f.js";import{W as x,P as g,c as v,H as y,D as M,G as w,d as L,B as C,V as R,M as G,R as E,e as r}from"./assets/vendor-d0c5ec0a.js";class z{constructor(){this._menu=document.querySelector(".js-menu"),this._menu&&(this._menuContents=this._menu.querySelector(".js-menu-contents"),this._menuToggleButton=this._menu.querySelector(".js-menu-toggle"),this._menuTitle=this._menu.querySelector(".js-menu-title"),this._expanded=!0,this._animate=!1,this._collapsed=null,this.expand=this.expand.bind(this),this.collapse=this.collapse.bind(this),this.toggle=this.toggle.bind(this),this._initialize())}_initialize(){document.addEventListener("DOMContentLoaded",()=>{this._calculateScales(),this._createEaseAnimations(),this._addEventListeners(),this.collapse(),this.activate()})}activate(){this._menu.classList.add("menu--active"),this._animate=!0}collapse(){if(!this._expanded)return;this._expanded=!1;const{x:e,y:t}=this._collapsed,n=1/e,s=1/t;this._menu.style.transform=`scale(${e}, ${t})`,this._menuContents.style.transform=`scale(${n}, ${s})`,this._animate&&this._applyAnimation({expand:!1})}expand(){this._expanded||(this._expanded=!0,this._menu.style.transform="scale(1, 1)",this._menuContents.style.transform="scale(1, 1)",this._animate&&this._applyAnimation({expand:!0}))}toggle(){this._expanded?this.collapse():this.expand()}_addEventListeners(){this._menuToggleButton.addEventListener("click",this.toggle)}_applyAnimation({expand:e}){this._menu.classList.remove("menu--expanded","menu--collapsed"),this._menuContents.classList.remove("menu__contents--expanded","menu__contents--collapsed"),window.getComputedStyle(this._menu).transform,e?(this._menu.classList.add("menu--expanded"),this._menuContents.classList.add("menu__contents--expanded")):(this._menu.classList.add("menu--collapsed"),this._menuContents.classList.add("menu__contents--collapsed"))}_calculateScales(){const e=this._menuTitle.getBoundingClientRect(),t=this._menu.getBoundingClientRect();this._collapsed={x:e.width/t.width,y:e.height/t.height}}_createEaseAnimations(){let e=document.querySelector(".menu-ease");if(e)return e;e=document.createElement("style"),e.classList.add("menu-ease");const t=[],n=[],s=[],i=[];for(let o=0;o<=100;o++){const a=this._ease(o/100);this._append({i:o,step:a,startX:this._collapsed.x,startY:this._collapsed.y,endX:1,endY:1,outerAnimation:t,innerAnimation:n}),this._append({i:o,step:a,startX:1,startY:1,endX:this._collapsed.x,endY:this._collapsed.y,outerAnimation:s,innerAnimation:i})}return e.textContent=`
      @keyframes menuExpandAnimation {
        ${t.join("")}
      }

      @keyframes menuExpandContentsAnimation {
        ${n.join("")}
      }

      @keyframes menuCollapseAnimation {
        ${s.join("")}
      }

      @keyframes menuCollapseContentsAnimation {
        ${i.join("")}
      }`,document.head.appendChild(e),e}_append({i:e,step:t,startX:n,startY:s,endX:i,endY:o,outerAnimation:a,innerAnimation:h}){const d=n+(i-n)*t,u=s+(o-s)*t,f=1/d,_=1/u;a.push(`
      ${e}% {
        transform: scale(${d}, ${u});
      }`),h.push(`
      ${e}% {
        transform: scale(${f}, ${_});
      }`)}_clamp(e,t,n){return Math.max(t,Math.min(n,e))}_ease(e,t=4){return e=this._clamp(e,0,1),1-Math.pow(1-e,t)}}new z;let m=[];class c{constructor(e,t,n,s,i){if(console.log(`Инициализация SceneManager для canvasId: ${e} и modelPath: ${t}`),this.canvas=document.querySelector(e),!this.canvas){console.error(`Canvas с ID ${e} не найден`);return}this.renderer=new x({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),console.log("Renderer успешно инициализирован"),this.camera=new g(n.fov||50,this.canvas.clientWidth/this.canvas.clientHeight,n.near||.1,n.far||600),this.camera.position.set(n.position.x||10,n.position.y||10,n.position.z||40),console.log("Камера успешно инициализирована"),this.scene=new v,console.log("Сцена успешно инициализирована"),this.addLights(),this.loadModel(t,s,i),this.isMouseOver=!1,this.continueRotationUntil=0,this.rotationDuration=1e3,this.canvas.addEventListener("mousemove",o=>this.onMouseMove(o)),this.canvas.addEventListener("mouseleave",()=>this.onMouseLeave()),this.canvas.addEventListener("mouseenter",()=>this.onMouseEnter()),window.addEventListener("resize",()=>this.onWindowResize(),!1),m.push(this)}addLights(){console.log("Добавляем освещение");const e=4684276,t=10395294,n=5,s=new y(e,t,n);this.scene.add(s);const i=16711680,o=new M(i,n);o.position.set(0,10,0),o.target.position.set(-5,0,0),this.scene.add(o),this.scene.add(o.target),console.log("Освещение добавлено")}loadModel(e,t,n){console.log(`Пытаемся загрузить модель из ${e}`),new w().load(e,i=>{console.log("Объект успешно загружен"),this.modelGroup=new L,this.scene.add(this.modelGroup),this.model=i.scene;const a=new C().setFromObject(this.model).getCenter(new R);this.model.position.sub(a),this.modelGroup.add(this.model),this.modelGroup.position.set(t.x||a.x,t.y||a.y,t.z||a.z),console.log("Добавляем объект в сцену"),n&&this.applyMaterialSettings(this.model,n),this.initialRotation=this.modelGroup.rotation.clone()},void 0,i=>{console.error(`Произошла ошибка при загрузке ${e}`,i)})}applyMaterialSettings(e,t){e.traverse(n=>{n.isMesh&&(n.material=new G({color:t.color||16777215,metalness:t.metalness||0,roughness:t.roughness||0,transmission:t.transmission||1,opacity:t.opacity||.5,transparent:!0,thickness:t.thickness||.1,envMap:t.envMap||null,ior:t.ior||1.5}))})}onMouseMove(e){const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top,i=n/this.canvas.clientWidth*2-1,o=-(s/this.canvas.clientHeight)*2+1,a=new E;if(a.setFromCamera({x:i,y:o},this.camera),this.modelGroup){const h=a.intersectObject(this.modelGroup,!0);this.isMouseOver=h.length>0,this.isMouseOver&&(this.continueRotationUntil=Date.now()+this.rotationDuration)}}onMouseLeave(){this.isMouseOver=!1}onMouseEnter(){this.isMouseOver=!0}onWindowResize(){const e=this.renderer.domElement,t=e.clientWidth,n=e.clientHeight;(e.width!==t||e.height!==n)&&(this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix())}render(){this.canvas.id==="c4"?this.specialRenderForC4(.05):this.defaultRender(.05),this.onWindowResize(),this.renderer.render(this.scene,this.camera)}defaultRender(e){if(this.isMouseOver&&this.modelGroup)this.modelGroup.rotation.y+=-.01;else if(this.modelGroup)if(Date.now()<this.continueRotationUntil)this.modelGroup.rotation.y+=-.01;else{const t=this.modelGroup.rotation.y%(2*Math.PI),n=this.initialRotation.y%(2*Math.PI),s=t-n;Math.abs(s)>Math.PI?s>0?this.modelGroup.rotation.y=r.lerp(t,n+2*Math.PI,e):this.modelGroup.rotation.y=r.lerp(t,n-2*Math.PI,e):this.modelGroup.rotation.y=r.lerp(t,n,e)}}specialRenderForC4(e){const t=r.degToRad(20),n=.01;if(this.isMouseOver&&this.modelGroup){const s=Date.now()*n;this.modelGroup.rotation.x=t*Math.sin(s)}else if(this.modelGroup)if(Date.now()<this.continueRotationUntil){const s=Date.now()*n;this.modelGroup.rotation.x=t*Math.sin(s)}else{const s=this.modelGroup.rotation.x%(2*Math.PI),i=this.initialRotation.x%(2*Math.PI),o=s-i;Math.abs(o)>Math.PI?o>0?this.modelGroup.rotation.x=r.lerp(s,i+2*Math.PI,e):this.modelGroup.rotation.x=r.lerp(s,i-2*Math.PI,e):this.modelGroup.rotation.x=r.lerp(s,i,e)}}}function p(){m.forEach(l=>l.render()),requestAnimationFrame(p)}function b(){console.log("Запуск main функции"),new c("#c1","models/mini.glb",{fov:0,near:.1,far:500,position:{x:0,y:5,z:20}},{x:10,y:0,z:0}),new c("#c2","models/box.glb",{fov:45,near:.1,far:400,position:{x:0,y:0,z:50}},{x:10,y:0,z:0}),new c("#c3","/models/bowl.glb",{fov:45,near:.1,far:400,position:{x:0,y:0,z:50}},{x:10,y:0,z:0}),new c("#c4","models/logo.glb",{fov:50,near:.1,far:0,position:{x:250,y:0,z:400}},{x:0,y:0,z:0},{color:16777215,metalness:1,roughness:1,transmission:1,opacity:.5,thickness:.1,ior:1.5}),p()}b();document.addEventListener("DOMContentLoaded",()=>{const l=[{elementId:"typewriter",text:"Это пример текста, который будет печататься как на печатной машинке. Привет, мир! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem commodi, natus iste dolorum sequi consequuntur quis, ut, facere est obcaecati ex quia ratione ab voluptatem dolor quasi animi quae."},{elementId:"typewriter2",text:"Это второй текст для демонстрации печатной машинки. Он тоже будет печататься по одному символу за раз."},{elementId:"typewriter3",text:"Это второй текст для демонстрации печатной машинки. Он тоже будет печататься по одному символу за раз."}],e=10;l.forEach(({elementId:t,text:n})=>{let s=0;function i(){s<n.length&&(document.getElementById(t).innerHTML+=n.charAt(s),s++,setTimeout(i,e))}i()})});
//# sourceMappingURL=commonHelpers2.js.map
