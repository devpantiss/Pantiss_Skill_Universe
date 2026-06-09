import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    let isMounted = true;
    let isVisible = true;
    let isPageVisible = document.visibilityState === "visible";
    let animationFrame = 0;
    let model: THREE.Group | null = null;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 18, 36);

    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.5, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio <= 1.5,
      powerPreference: "high-performance",
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = false;
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(6, 10, 10);

    const backLight = new THREE.PointLight(0x55aaff, 0.8);
    backLight.position.set(-5, 3, -6);

    scene.add(ambientLight, keyLight, backLight);

    const platformGeometry = new THREE.CylinderGeometry(4.5, 4.5, 0.3, 32);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.65,
      roughness: 0.28,
      emissive: 0x0a0a0a,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -1.3;
    scene.add(platform);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2.1;
    controls.enablePan = false;

    const renderScene = () => {
      controls.update();
      renderer.render(scene, camera);
    };

    const shouldAnimate = () => isMounted && isVisible && isPageVisible;

    const animate = () => {
      if (!shouldAnimate()) return;
      renderScene();
      animationFrame = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!shouldAnimate() || animationFrame) return;
      animationFrame = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (!animationFrame) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const disposeModel = (object: THREE.Object3D) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => material.dispose());
        }
      });
    };

    const loader = new GLTFLoader();
    loader.load(
      "/truck_3d_model.glb",
      (gltf) => {
        if (!isMounted) {
          disposeModel(gltf.scene);
          return;
        }
        model = gltf.scene;

        model.scale.set(6, 6, 6);
        model.position.set(0, -0.1, 0);

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.frustumCulled = true;
          }
        });

        scene.add(model);
        renderScene();
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    const handleResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderScene();
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      if (isPageVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(mount);
    renderScene();
    startAnimation();

    return () => {
      isMounted = false;
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      controls.dispose();
      if (model) {
        scene.remove(model);
        disposeModel(model);
      }
      platformGeometry.dispose();
      platformMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-[420px] w-full overflow-hidden bg-black md:h-[560px]"
    />
  );
};

export default ThreeModelViewer;
