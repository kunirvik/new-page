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

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let sceneManagers = [];

class SceneManager {
  constructor(canvasId, modelPath) {
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

    this.camera = new THREE.PerspectiveCamera(50, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 600);
    this.camera.position.set(15, 5, 17);
    console.log('Камера успешно инициализирована');

    this.scene = new THREE.Scene();
    console.log('Сцена успешно инициализирована');

    this.addLights();
    this.loadModel(modelPath);

    this.isMouseOver = false;
    this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
    this.canvas.addEventListener('mouseleave', () => this.isMouseOver = false);
    this.canvas.addEventListener('mouseenter', () => this.isMouseOver = true);

    window.addEventListener('resize', () => this.onWindowResize(), false);

    // Добавление текущего экземпляра в массив
    sceneManagers.push(this);
  }

  addLights() {
    console.log('Добавляем освещение');
    const skyColor = 0x4779F4;
    const groundColor = 0x9E9E9E;
    const intensity = 1;
    const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    this.scene.add(hemisphereLight);

    const color = 0x2DEF83;
    const directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(0, 10, 0);
    directionalLight.target.position.set(-5, 0, 0);
    this.scene.add(directionalLight);
    this.scene.add(directionalLight.target);
    console.log('Освещение добавлено');
  }

  loadModel(modelPath) {
    console.log(`Пытаемся загрузить модель из ${modelPath}`);
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(modelPath, (gltf) => {
      console.log('Объект успешно загружен');

      this.modelGroup = new THREE.Group();
      this.scene.add(this.modelGroup);

      this.model = gltf.scene;
      this.modelGroup.add(this.model);

      // Предполагаем, что модель состоит из нескольких частей
      this.parts = [];
      this.model.traverse((child) => {
        if (child.isMesh) {
          this.parts.push(child);
          // Сохраняем начальную позицию
          child.userData.initialPosition = child.position.clone();
          // Разбрасываем по оси Z
          child.position.z += Math.random() * 20 - 10;
          child.userData.scatteredPosition = child.position.clone();
        }
      });

      console.log('Добавляем объект в сцену');
    }, undefined, (error) => {
      console.error(`Произошла ошибка при загрузке ${modelPath}`, error);
    });
  }

  onMouseMove(event) {
    const canvasRect = this.canvas.getBoundingClientRect();
    const canvasX = event.clientX - canvasRect.left;
    const canvasY = event.clientY - canvasRect.top;

    const normalizedX = (canvasX / this.canvas.clientWidth) * 2 - 1; // нормализуем координаты канваса
    const normalizedY = -(canvasY / this.canvas.clientHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, this.camera);
    raycaster.far = 50; // увеличиваем расстояние действия луча

    const intersects = raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object.userData.initialPosition) {
        const initialPosition = object.userData.initialPosition;
        object.position.lerp(initialPosition, 0.3); // увеличиваем скорость сборки
      }
    }
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

  updatePartsPositions(scrollPercentage) {
    if (!this.parts) return;

    this.parts.forEach((part) => {
      const initialPosition = part.userData.initialPosition;
      // Анимируем части от начальной позиции к позиции (0,0,0)
      part.position.lerpVectors(initialPosition, new THREE.Vector3(0, 0, 0), scrollPercentage);
    });
  }

  render() {
    this.onWindowResize();
    this.renderer.render(this.scene, this.camera);
  }
}

function animate() {
  sceneManagers.forEach(manager => manager.render());
  requestAnimationFrame(animate);
}

function main() {
  console.log('Запуск main функции');
  new SceneManager('#c1', '/mini.glb');

  animate();

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / docHeight;

    sceneManagers.forEach(manager => manager.updatePartsPositions(scrollPercentage));
  });
}

main();
