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
    this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
    this.canvas.addEventListener('mouseenter', () => this.onMouseEnter());

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

  onMouseEnter() {
    this.isMouseOver = true;
    this.assembleModel();
  }

  onMouseLeave() {
    this.isMouseOver = false;
  }

  onMouseMove(event) {
    if (!this.isMouseOver) return;

    const canvasRect = this.canvas.getBoundingClientRect();
    const canvasX = event.clientX - canvasRect.left;
    const canvasY = event.clientY - canvasRect.top;

    const normalizedX = (canvasX / this.canvas.clientWidth) * 2 - 1; // нормализуем координаты канваса
    const normalizedY = -(canvasY / this.canvas.clientHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, this.camera);
    raycaster.far = 100; // увеличиваем расстояние действия луча

    const intersects = raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      this.assembleModel();
    }
  }

  assembleModel() {
    this.parts.forEach(part => {
      if (part.userData.initialPosition) {
        const initialPosition = part.userData.initialPosition;
        part.position.lerp(initialPosition, 0.3); // увеличиваем скорость сборки
      }
    });
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
