// src/scripts/stars-background.js
import * as THREE from "three";

function init() {
  const canvasEl = document.getElementById("bg-canvas");
  if (!canvasEl) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020617, 0.035);

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 26);

  const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
  antialias: true,
  alpha: true,
});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Plano base oscuro (como "fondo" de escritorio)
  const baseGeom = new THREE.PlaneGeometry(80, 40);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x020617,
    metalness: 0.2,
    roughness: 0.9,
  });
  const base = new THREE.Mesh(baseGeom, baseMat);
  base.rotation.x = -Math.PI / 2;
  base.position.y = -8;
  scene.add(base);

  // Grupo de "paneles de código"
  const panelsGroup = new THREE.Group();

  const panelGeom = new THREE.BoxGeometry(8, 4.2, 0.3);
  const panelInnerGeom = new THREE.PlaneGeometry(7.2, 3.4);

  const panelCount = 10;
  for (let i = 0; i < panelCount; i++) {
    // Panel exterior (marco)
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      metalness: 0.7,
      roughness: 0.3,
    });
    const frame = new THREE.Mesh(panelGeom, frameMat);

    // "Código" interior (área luminosa)
    const codeMat = new THREE.MeshStandardMaterial({
      color: 0x022c22,
      emissive: 0x22c55e,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.9,
    });
    const codePlane = new THREE.Mesh(panelInnerGeom, codeMat);
    codePlane.position.z = 0.18;
    frame.add(codePlane);

    // Líneas horizontales simulando líneas de código
    const lineGeom = new THREE.PlaneGeometry(6.4, 0.06);
    for (let j = 0; j < 6; j++) {
      const lineMat = new THREE.MeshStandardMaterial({
        color: 0xbbf7d0,
        emissive: 0x4ade80,
        emissiveIntensity: 0.18,
        transparent: true,
        opacity: 0.85,
      });
      const line = new THREE.Mesh(lineGeom, lineMat);
      line.position.set(
        0,
        1.4 - j * 0.5,
        0.2 + Math.random() * 0.05
      );
      line.scale.x = 0.4 + Math.random() * 0.6;
      frame.add(line);
    }

    // Posición inicial de cada panel en el espacio
    frame.position.set(
      THREE.MathUtils.randFloatSpread(24),
      THREE.MathUtils.randFloat(0, 10),
      THREE.MathUtils.randFloat(-10, 10)
    );
    frame.rotation.y = THREE.MathUtils.degToRad(
      THREE.MathUtils.randFloat(-25, 25)
    );
    frame.rotation.x = THREE.MathUtils.degToRad(
      THREE.MathUtils.randFloat(-10, 5)
    );

    panelsGroup.add(frame);
  }

  scene.add(panelsGroup);

  // Pequeños "bits" flotando (como datos)
  const bitsGroup = new THREE.Group();
  const bitGeom = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  for (let i = 0; i < 80; i++) {
    const bitMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x16a34a,
      emissiveIntensity: 0.4,
    });
    const bit = new THREE.Mesh(bitGeom, bitMat);
    bit.position.set(
      THREE.MathUtils.randFloatSpread(40),
      THREE.MathUtils.randFloat(-2, 14),
      THREE.MathUtils.randFloat(-20, 5)
    );
    bitsGroup.add(bit);
  }
  scene.add(bitsGroup);

  // Luces suaves con tinte verdoso/azulado
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  const keyLight = new THREE.PointLight(0x22c55e, 2.2, 80);
  keyLight.position.set(15, 18, 20);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x0ea5e9, 1.3, 70);
  fillLight.position.set(-18, 12, 2);
  scene.add(fillLight);

  // Animación
  function animate() {
    requestAnimationFrame(animate);

    const t = Date.now() * 0.00025;

    // Rotación muy suave del grupo de paneles
    panelsGroup.rotation.y = Math.sin(t) * 0.25;

    // Movimiento vertical lento de los paneles (suben y bajan un poco)
    panelsGroup.children.forEach((panel, idx) => {
      panel.position.y += Math.sin(t + idx * 0.3) * 0.01;
    });

    // Pequeño movimiento de bits (como datos flotando)
    bitsGroup.children.forEach((bit) => {
      bit.position.y += 0.015;
      if (bit.position.y > 16) {
        bit.position.y = -3;
      }
    });

    camera.position.z = 26 + Math.sin(t * 0.8) * 1.2;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
