"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purplePointLight = new THREE.PointLight(0x8b5cf6, 4, 20);
    purplePointLight.position.set(4, 3, 4);
    scene.add(purplePointLight);

    const limePointLight = new THREE.PointLight(0xccff00, 3.5, 20);
    limePointLight.position.set(-4, -2, 3);
    scene.add(limePointLight);

    // Group for objects to rotate on mouse move
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Neon Lime Wireframe Dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      wireframe: true,
      emissive: 0x557700,
      roughness: 0.2,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodecaMesh.position.set(3.6, 1.8, -1);
    sceneGroup.add(dodecaMesh);

    // 2. Glossy Electric Violet Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.2,
      metalness: 0.5,
      emissive: 0x3b0764,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-3.8, 1.5, -0.5);
    sceneGroup.add(icoMesh);

    // 3. Cyan Glowing Torus
    const torusGeo = new THREE.TorusGeometry(0.8, 0.18, 16, 40);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
      metalness: 0.6,
      emissive: 0x0369a1,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-2.5, -2.2, 0.5);
    torusMesh.rotation.x = 1.2;
    sceneGroup.add(torusMesh);

    // 4. Amber Floating Octahedron Gem
    const octaGeo = new THREE.OctahedronGeometry(0.65, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      wireframe: true,
      roughness: 0.1,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(3.2, -2.0, 0.5);
    sceneGroup.add(octaMesh);

    // 5. Floating 3D Star Particle Field
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const limeColor = new THREE.Color(0xccff00);
    const violetColor = new THREE.Color(0x8b5cf6);
    const cyanColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const chosenColor = i % 3 === 0 ? limeColor : i % 3 === 1 ? violetColor : cyanColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    sceneGroup.add(particleSystem);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      sceneGroup.rotation.y = targetX * 1.5;
      sceneGroup.rotation.x = targetY * 1.5;

      // Floating animations
      dodecaMesh.rotation.x = elapsedTime * 0.35;
      dodecaMesh.rotation.y = elapsedTime * 0.45;
      dodecaMesh.position.y = 1.8 + Math.sin(elapsedTime * 1.2) * 0.2;

      icoMesh.rotation.x = -elapsedTime * 0.4;
      icoMesh.rotation.z = elapsedTime * 0.3;
      icoMesh.position.y = 1.5 + Math.cos(elapsedTime * 1.4) * 0.18;

      torusMesh.rotation.x = 1.2 + Math.sin(elapsedTime * 0.8) * 0.3;
      torusMesh.rotation.y = elapsedTime * 0.5;
      torusMesh.position.y = -2.2 + Math.sin(elapsedTime + 1) * 0.2;

      octaMesh.rotation.y = elapsedTime * 0.6;
      octaMesh.rotation.z = elapsedTime * 0.4;
      octaMesh.position.y = -2.0 + Math.cos(elapsedTime * 1.3) * 0.2;

      // Subtle particle float
      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
