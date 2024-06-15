// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// function main() {
//   const canvas = document.querySelector('#c');
//   const renderer = new THREE.WebGLRenderer({canvas});

//   const fov = 50;
//   const aspect = 2;  //холст по умолчанию
//   const near = 0.1;
//   const far = 600;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(50, 50, 100);

//   const controls = new OrbitControls(camera, canvas);
//   controls.target.set(0, 0, 0);
//   controls.update();  


//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color('black');


//   {
//     const skyColor = 0x4779F4;  // светло-синий
//     const groundColor = 0x9E9E9E;  // коричневато-оранжевый
//     const intensity = 1;
//     const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
//     scene.add(light);
//   }

//   {
//     const color = 0x2DEF83;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(0, 10, 0);
//     light.target.position.set(-5, 0, 0);
//     scene.add(light);
//     scene.add(light.target);
//   }
 

//   let ourObj;
  
//   const toRadians = (degrees) => degrees * (Math.PI / 180);
//   {
//     const gltfLoader = new GLTFLoader();
//     const gltfPath = '/bowl.glb'; // Убедитесь, что путь правильный
//     console.log(`Пытаемся загрузить ${gltfPath}`);
//     gltfLoader.load(gltfPath, (gltf) => {
//       console.log('Объект успешно загружен');
//       ourObj = gltf.scene;
//       scene.add(ourObj);
//       ourObj.rotation.y = toRadians(10);
//       ourObj.scale.set(0.5, 0.5, 0.5);

//     }, undefined, (error) => {
//       console.error(`Произошла ошибка при загрузке ${gltfPath}`, error);
//     });


//   }


//   {
//     const gltfLoader = new GLTFLoader();
//     const gltfPath2 = '/mini.glb'; // Убедитесь, что путь правильный
//     console.log(`Пытаемся загрузить ${gltfPath2}`);
//     gltfLoader.load(gltfPath2, (gltf) => {
//       console.log('Второй объект успешно загружен');
//       const secondObj = gltf.scene;
//       scene.add(secondObj);
//       secondObj.position.set(30, 30, 0); // Устанавливаем позицию второго объекта
//     }, undefined, (error) => {
//       console.error(`Произошла ошибка при загрузке ${gltfPath2}`, error);
//     });
//   }
  
//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render() {

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
 
//     renderer.render(scene, camera);

    
//     requestAnimationFrame(render);


//     renderer.render(scene, camera);
//   }

//   requestAnimationFrame(render);
// }

// main();
"use strict";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


class Menu {
  constructor() {
    this._menu = document.querySelector('.js-menu');
    if (!this._menu) return;

    this._menuContents = this._menu.querySelector('.js-menu-contents');
    this._menuToggleButton = this._menu.querySelector('.js-menu-toggle');
    this._menuTitle = this._menu.querySelector('.js-menu-title');

    this._expanded = true;
    this._animate = false;
    this._collapsed = null;

    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    this.toggle = this.toggle.bind(this);

    this._initialize();
  }

  _initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      this._calculateScales();
      this._createEaseAnimations();
      this._addEventListeners();

      this.collapse();
      this.activate();
    });
  }

  activate() {
    this._menu.classList.add('menu--active');
    this._animate = true;
  }

  collapse() {
    if (!this._expanded) {
      return;
    }
    this._expanded = false;

    const { x, y } = this._collapsed;
    const invX = 1 / x;
    const invY = 1 / y;

    this._menu.style.transform = `scale(${x}, ${y})`;
    this._menuContents.style.transform = `scale(${invX}, ${invY})`;

    if (!this._animate) {
      return;
    }

    this._applyAnimation({ expand: false });
  }

  expand() {
    if (this._expanded) {
      return;
    }
    this._expanded = true;

    this._menu.style.transform = `scale(1, 1)`;
    this._menuContents.style.transform = `scale(1, 1)`;

    if (!this._animate) {
      return;
    }

    this._applyAnimation({ expand: true });
  }

  toggle() {
    if (this._expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  _addEventListeners() {
    this._menuToggleButton.addEventListener('click', this.toggle);
  }

  _applyAnimation({ expand }) {
    this._menu.classList.remove('menu--expanded', 'menu--collapsed');
    this._menuContents.classList.remove('menu__contents--expanded', 'menu__contents--collapsed');

    // Force a recalc styles here so the classes take hold.
    window.getComputedStyle(this._menu).transform;

    if (expand) {
      this._menu.classList.add('menu--expanded');
      this._menuContents.classList.add('menu__contents--expanded');
    } else {
      this._menu.classList.add('menu--collapsed');
      this._menuContents.classList.add('menu__contents--collapsed');
    }
  }

  _calculateScales() {
    const collapsed = this._menuTitle.getBoundingClientRect();
    const expanded = this._menu.getBoundingClientRect();

    this._collapsed = {
      x: collapsed.width / expanded.width,
      y: collapsed.height / expanded.height
    };
  }

  _createEaseAnimations() {
    let menuEase = document.querySelector('.menu-ease');
    if (menuEase) {
      return menuEase;
    }

    menuEase = document.createElement('style');
    menuEase.classList.add('menu-ease');

    const menuExpandAnimation = [];
    const menuExpandContentsAnimation = [];
    const menuCollapseAnimation = [];
    const menuCollapseContentsAnimation = [];
    for (let i = 0; i <= 100; i++) {
      const step = this._ease(i / 100);

      this._append({
        i,
        step,
        startX: this._collapsed.x,
        startY: this._collapsed.y,
        endX: 1,
        endY: 1,
        outerAnimation: menuExpandAnimation,
        innerAnimation: menuExpandContentsAnimation
      });

      this._append({
        i,
        step,
        startX: 1,
        startY: 1,
        endX: this._collapsed.x,
        endY: this._collapsed.y,
        outerAnimation: menuCollapseAnimation,
        innerAnimation: menuCollapseContentsAnimation
      });
    }

    menuEase.textContent = `
      @keyframes menuExpandAnimation {
        ${menuExpandAnimation.join('')}
      }

      @keyframes menuExpandContentsAnimation {
        ${menuExpandContentsAnimation.join('')}
      }

      @keyframes menuCollapseAnimation {
        ${menuCollapseAnimation.join('')}
      }

      @keyframes menuCollapseContentsAnimation {
        ${menuCollapseContentsAnimation.join('')}
      }`;

    document.head.appendChild(menuEase);
    return menuEase;
  }

  _append({
    i,
    step,
    startX,
    startY,
    endX,
    endY,
    outerAnimation,
    innerAnimation
  }) {
    const xScale = startX + (endX - startX) * step;
    const yScale = startY + (endY - startY) * step;

    const invScaleX = 1 / xScale;
    const invScaleY = 1 / yScale;

    outerAnimation.push(`
      ${i}% {
        transform: scale(${xScale}, ${yScale});
      }`);

    innerAnimation.push(`
      ${i}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`);
  }

  _clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  _ease(v, pow = 4) {
    v = this._clamp(v, 0, 1);

    return 1 - Math.pow(1 - v, pow);
  }
}

new Menu();




let sceneManagers = [];

class SceneManager {
  constructor(canvasId, modelPath, cameraSettings, modelPosition, materialSettings) {
    console.log(`Инициализация SceneManager для canvasId: ${canvasId} и modelPath: ${modelPath}`);
    this.canvas = document.querySelector(canvasId);
    if (!this.canvas) {
      console.error(`Canvas с ID ${canvasId} не найден`);
      return;
    }
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    console.log('Renderer успешно инициализирован');

    this.camera = new THREE.PerspectiveCamera(
      cameraSettings.fov || 50,
      this.canvas.clientWidth / this.canvas.clientHeight,
      cameraSettings.near || 0.1,
      cameraSettings.far || 600
    );
    this.camera.position.set(
      cameraSettings.position.x || 10,
      cameraSettings.position.y || 10,
      cameraSettings.position.z || 40
    );
    console.log('Камера успешно инициализирована');

    this.scene = new THREE.Scene();
    console.log('Сцена успешно инициализирована');

    this.addLights();
    this.loadModel(modelPath, modelPosition, materialSettings);

    this.isMouseOver = false;
    this.continueRotationUntil = 0;
    this.rotationDuration = 1000; // Продолжительность вращения после ухода курсора (1 секунда)

    this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
    this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
    this.canvas.addEventListener('mouseenter', () => this.onMouseEnter());

    window.addEventListener('resize', () => this.onWindowResize(), false);

    sceneManagers.push(this);
  }

  addLights() {
    console.log('Добавляем освещение');
    const skyColor = 0x4779F4;
    const groundColor = 0x9E9E9E;
    const intensity = 5;
    const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    this.scene.add(hemisphereLight);

    const color = 0xFF0000;
    const directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(0, 10, 0);
    directionalLight.target.position.set(-5, 0, 0);
    this.scene.add(directionalLight);
    this.scene.add(directionalLight.target);
    console.log('Освещение добавлено');
  }

  loadModel(modelPath, modelPosition, materialSettings) {
    console.log(`Пытаемся загрузить модель из ${modelPath}`);
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(modelPath, (gltf) => {
      console.log('Объект успешно загружен');

      this.modelGroup = new THREE.Group();
      this.scene.add(this.modelGroup);

      this.model = gltf.scene;

      const boundingBox = new THREE.Box3().setFromObject(this.model);
      const center = boundingBox.getCenter(new THREE.Vector3());
      this.model.position.sub(center);

      this.modelGroup.add(this.model);

      this.modelGroup.position.set(
        modelPosition.x || center.x,
        modelPosition.y || center.y,
        modelPosition.z || center.z
      );

      console.log('Добавляем объект в сцену');

      if (materialSettings) {
        this.applyMaterialSettings(this.model, materialSettings);
      }

      this.initialRotation = this.modelGroup.rotation.clone();

    }, undefined, (error) => {
      console.error(`Произошла ошибка при загрузке ${modelPath}`, error);
    });
  }

  applyMaterialSettings(model, settings) {
    model.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: settings.color || 0xffffff,
          metalness: settings.metalness || 0,
          roughness: settings.roughness || 0,
          transmission: settings.transmission || 1,
          opacity: settings.opacity || 0.5,
          transparent: true,
          thickness: settings.thickness || 0.1,
          envMap: settings.envMap || null,
          ior: settings.ior || 1.5,
        });
      }
    });
  }

  onMouseMove(event) {
    const canvasRect = this.canvas.getBoundingClientRect();
    const canvasX = event.clientX - canvasRect.left;
    const canvasY = event.clientY - canvasRect.top;

    const normalizedX = (canvasX / this.canvas.clientWidth) * 2 - 1;
    const normalizedY = -(canvasY / this.canvas.clientHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, this.camera);

    if (this.modelGroup) {
      const intersects = raycaster.intersectObject(this.modelGroup, true);
      this.isMouseOver = intersects.length > 0;

      if (this.isMouseOver) {
        this.continueRotationUntil = Date.now() + this.rotationDuration;
      }
    }
  }

  onMouseLeave() {
    this.isMouseOver = false;
  }

  onMouseEnter() {
    this.isMouseOver = true;
  }

  onWindowResize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  render() {
    const delta = 0.05; // скорость интерполяции

    if (this.canvas.id === 'c4') {
      this.specialRenderForC4(delta);
    } else {
      this.defaultRender(delta);
    }

    this.onWindowResize();
    this.renderer.render(this.scene, this.camera);
  }

  defaultRender(delta) {
    if (this.isMouseOver && this.modelGroup) {
      this.modelGroup.rotation.y += -0.01;
    } else if (this.modelGroup) {
      if (Date.now() < this.continueRotationUntil) {
        this.modelGroup.rotation.y += -0.01;
      } else {
        const currentRotationY = this.modelGroup.rotation.y % (2 * Math.PI);
        const initialRotationY = this.initialRotation.y % (2 * Math.PI);
        const difference = currentRotationY - initialRotationY;

        if (Math.abs(difference) > Math.PI) {
          if (difference > 0) {
            this.modelGroup.rotation.y = THREE.MathUtils.lerp(currentRotationY, initialRotationY + 2 * Math.PI, delta);
          } else {
            this.modelGroup.rotation.y = THREE.MathUtils.lerp(currentRotationY, initialRotationY - 2 * Math.PI, delta);
          }
        } else {
          this.modelGroup.rotation.y = THREE.MathUtils.lerp(currentRotationY, initialRotationY, delta);
        }
      }
    }
  }

  specialRenderForC4(delta) {
    const maxRotation = THREE.MathUtils.degToRad(20); // 20 градусов в радианах
    const speed = 0.01; // Скорость вращения

    if (this.isMouseOver && this.modelGroup) {
      const time = Date.now() * speed; // Используем время для вычисления угла
      this.modelGroup.rotation.x = maxRotation * Math.sin(time); // Вращаем между -20 и 20 градусами
    } else if (this.modelGroup) {
      if (Date.now() < this.continueRotationUntil) {
        const time = Date.now() * speed; // Используем время для вычисления угла
        this.modelGroup.rotation.x = maxRotation * Math.sin(time); // Вращаем между -20 и 20 градусами
      } else {
        const currentRotationX = this.modelGroup.rotation.x % (2 * Math.PI);
        const initialRotationX = this.initialRotation.x % (2 * Math.PI);
        const difference = currentRotationX - initialRotationX;

        if (Math.abs(difference) > Math.PI) {
          if (difference > 0) {
            this.modelGroup.rotation.x = THREE.MathUtils.lerp(currentRotationX, initialRotationX + 2 * Math.PI, delta);
          } else {
            this.modelGroup.rotation.x = THREE.MathUtils.lerp(currentRotationX, initialRotationX - 2 * Math.PI, delta);
          }
        } else {
          this.modelGroup.rotation.x = THREE.MathUtils.lerp(currentRotationX, initialRotationX, delta);
        }
      }
    }
  }
}

function animate() {
  sceneManagers.forEach(manager => manager.render());
  requestAnimationFrame(animate);
}

function main() {
  console.log('Запуск main функции');
  new SceneManager(
    '#c1',
    'new-page/mini.glb',
    {
      fov: 0,
      near: 0.1,
      far: 500,
      position: { x: 0, y: 5, z: 20 }
    },
    { x: 10, y: 0, z: 0 },
  );
  new SceneManager(
    '#c2',
    'new-page/box.glb',
    {
      fov: 45,
      near: 0.1,
      far: 400,
      position: { x: 0, y: 0, z: 50 }
    },
    { x: 10, y: 0, z: 0 },
  );
  new SceneManager(
    '#c3',
    'new-page/bowl.glb',
    {
      fov: 45,
      near: 0.1,
      far: 400,
      position: { x: 0, y: 0, z: 50 }
    },
    { x: 10, y: 0, z: 0 },
  );
  new SceneManager(
    '#c4',
    'new-page/logo.glb',
    {
      fov: 50,
      near: 0.1,
      far: 0,
      position: { x: 250, y: 0, z:400 }
    },
    { x: 0, y: 0, z:  0 },
    {
      color: 0xffffff,
      metalness: 1,
      roughness: 1,
      transmission: 1,
      opacity: 0.5,
      thickness: 0.1,
      ior: 1.5
    }
  );
  animate();
}

main();




document.addEventListener('DOMContentLoaded', () => {
  const texts = [
      {
          elementId: "typewriter",
          text: "Это пример текста, который будет печататься как на печатной машинке. Привет, мир! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem commodi, natus iste dolorum sequi consequuntur quis, ut, facere est obcaecati ex quia ratione ab voluptatem dolor quasi animi quae."
      },
      {
          elementId: "typewriter2",
          text: "Это второй текст для демонстрации печатной машинки. Он тоже будет печататься по одному символу за раз."
      },
      {
        elementId: "typewriter3",
        text: "Это второй текст для демонстрации печатной машинки. Он тоже будет печататься по одному символу за раз."
    }

  ];
  const speed = 10; // Скорость печати в миллисекундах

  texts.forEach(({ elementId, text }) => {
      let i = 0;

      function typeWriter() {
          if (i < text.length) {
              document.getElementById(elementId).innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
          }
      }

      typeWriter();
  });
});
