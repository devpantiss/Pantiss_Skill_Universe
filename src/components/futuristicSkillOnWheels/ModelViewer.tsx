import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    // === Scene setup ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 15, 40);

    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // === Lights ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(6, 10, 10);
    keyLight.castShadow = true;

    const backLight = new THREE.PointLight(0x55aaff, 1.0);
    backLight.position.set(-5, 3, -6);

    const fillLight = new THREE.PointLight(0xff9900, 0.7);
    fillLight.position.set(6, 2, -4);

    scene.add(ambientLight, keyLight, backLight, fillLight);

    // === Platform (slightly smaller, reflective) ===
    const platformGeometry = new THREE.CylinderGeometry(4.5, 4.5, 0.3, 64);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x0a0a0a,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -1.3;
    platform.receiveShadow = true;
    scene.add(platform);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement) as any;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2.1;

    // === Load GLB model ===
    const loader = new GLTFLoader();
    loader.load(
      "/truck_3d_model.glb",
      (gltf) => {
        const model = gltf.scene;

        // 🚛 Bigger model for proper proportion to the platform
        model.scale.set(6, 6, 6);
        model.position.set(0, -0.1, 0); // perfectly above platform

        model.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);
      },
      (progress) => {
        console.log(`Loading model... ${(progress.loaded / progress.total * 100).toFixed(1)}%`);
      },
      (error) => console.error("Error loading model:", error)
    );

    // === Animation ===
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // === Handle resize ===
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800"
    />
  );
};

export default ThreeModelViewer;