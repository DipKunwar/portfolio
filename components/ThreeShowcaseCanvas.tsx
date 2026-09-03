"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ThreeShowcaseCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xccff00, 3, 10);
    mainLight.position.set(2, 3, 3);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0x8b5cf6, 4, 10);
    rimLight.position.set(-3, -2, 2);
    scene.add(rimLight);

    const pivotGroup = new THREE.Group();
    scene.add(pivotGroup);

    // 3D Stylized Laptop / Retro Monitor
    // 1. Monitor Base / Desk
    const baseGeo = new THREE.BoxGeometry(2.4, 0.1, 1.6);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x181824,
      metalness: 0.8,
      roughness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.7;
    pivotGroup.add(baseMesh);

    // Keyboard glow plate
    const kbGeo = new THREE.BoxGeometry(2.0, 0.04, 0.9);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x3b0764,
      roughness: 0.4,
    });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.position.set(0, -0.63, 0.2);
    pivotGroup.add(kbMesh);

    // Trackpad
    const padGeo = new THREE.BoxGeometry(0.7, 0.02, 0.4);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x2e384d,
      roughness: 0.1,
    });
    const padMesh = new THREE.Mesh(padGeo, padMat);
    padMesh.position.set(0, -0.63, -0.45);
    pivotGroup.add(padMesh);

    // 2. Monitor Screen Frame (tilted back slightly)
    const screenFrameGeo = new THREE.BoxGeometry(2.4, 1.6, 0.1);
    const screenFrameMat = new THREE.MeshStandardMaterial({
      color: 0x0f131d,
      metalness: 0.7,
      roughness: 0.3,
    });
    const screenFrame = new THREE.Mesh(screenFrameGeo, screenFrameMat);
    screenFrame.position.set(0, 0.15, -0.75);
    screenFrame.rotation.x = 0.12;
    pivotGroup.add(screenFrame);

    // 3. Glowing Code Screen Texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 340;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Dark IDE background
      ctx.fillStyle = "#0c0e17";
      ctx.fillRect(0, 0, 512, 340);

      // Window header bar
      ctx.fillStyle = "#1e2438";
      ctx.fillRect(0, 0, 512, 40);
      // Window control dots
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(25, 20, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#eab308";
      ctx.beginPath();
      ctx.arc(45, 20, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(65, 20, 6, 0, Math.PI * 2);
      ctx.fill();

      // Simulated Code lines
      const lines = [
        { text: "const developer = {", color: "#ccff00" },
        { text: '  name: "Dip Kunwar",', color: "#38bdf8" },
        { text: '  role: "Full-Stack Dev",', color: "#8b5cf6" },
        { text: '  focus: ["Next.js", "Three.js"],', color: "#f59e0b" },
        { text: "  solve: () => createAwesome(),", color: "#ec4899" },
        { text: "};", color: "#ccff00" },
        { text: "render3DWorld(developer);", color: "#38bdf8" },
      ];

      ctx.font = "bold 20px monospace";
      lines.forEach((line, idx) => {
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, 25, 80 + idx * 34);
      });
    }

    const screenTexture = new THREE.CanvasTexture(canvas);
    const screenGeo = new THREE.PlaneGeometry(2.2, 1.4);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.16, -0.69);
    screenMesh.rotation.x = 0.12;
    pivotGroup.add(screenMesh);

    // 4. Orbiting 3D Neon Ring
    const orbitGeo = new THREE.TorusGeometry(1.9, 0.03, 16, 100);
    const orbitMat = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      emissive: 0x88cc00,
      roughness: 0.1,
    });
    const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
    orbitMesh.rotation.x = Math.PI / 2.8;
    pivotGroup.add(orbitMesh);

    // 5. Orbiting Floating Tech Gems
    const gemGeo = new THREE.OctahedronGeometry(0.2, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      roughness: 0.2,
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    pivotGroup.add(gemMesh);

    // Drag-to-rotate interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      pivotGroup.rotation.y += deltaX * 0.008;
      pivotGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        setIsInteracting(true);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;

        pivotGroup.rotation.y += deltaX * 0.008;
        pivotGroup.rotation.x += deltaY * 0.008;

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      setIsInteracting(false);
    };

    domElement.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    // Resize
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
      const time = clock.getElapsedTime();

      // Auto rotation when not dragging
      if (!isDragging) {
        pivotGroup.rotation.y += 0.006;
      }

      // Orbiting gem
      gemMesh.position.x = Math.cos(time * 1.5) * 1.9;
      gemMesh.position.z = Math.sin(time * 1.5) * 1.9;
      gemMesh.position.y = Math.sin(time * 3) * 0.3;
      gemMesh.rotation.y = time * 2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div ref={containerRef} className="w-full h-full absolute inset-0" />
      {/* 3D Drag hint badge */}
      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/80 border border-white/10 pointer-events-none flex items-center gap-1.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping inline-block" />
        {isInteracting ? "Rotating in 3D" : "Click & Drag to rotate in 3D"}
      </div>
    </div>
  );
};
