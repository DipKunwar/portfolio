"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Code2, MapPin, GraduationCap } from "lucide-react";

export const CharacterIllustration = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const speechQuotes = [
    "HELLO! WELCOME!",
    "LET'S BUILD SOMETHING DOPE!",
    "PRESS CTRL+K FOR TERMINAL!",
    "READY TO COLLABORATE!",
    "NEPAL ➔ THE WORLD 🚀",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleCharacterClick = () => {
    setClickCount((prev) => prev + 1);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ccff00", "#7c3aed", "#38bdf8", "#ec4899"],
    });
  };

  const currentQuote = speechQuotes[clickCount % speechQuotes.length];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-end select-none py-6 ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* 3D Tilt Wrapper */}
      <div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.02 : 1
          }, ${isHovered ? 1.02 : 1}, 1)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="relative w-full will-change-transform flex justify-end"
      >
        {/* Atmospheric Ambient Glow Pulsing in Background */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-[#7c3aed]/35 via-[#38bdf8]/20 to-[#ccff00]/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-3000 transform scale-95" />

        {/* Orbiting Glassmorphic Tech Badges */}
        {/* Badge 1: Top-Right Role */}
        <div
          style={{ transform: "translateZ(35px)" }}
          className="absolute -top-2 sm:-top-4 right-1 sm:right-3 z-20 px-3 py-1.5 rounded-full bg-[#121622]/90 backdrop-blur-md border border-white/15 hover:border-[#ccff00] text-xs font-mono text-zinc-200 flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-default"
        >
          <Code2 className="w-3.5 h-3.5 text-[#ccff00]" />
          <span className="font-bold">Full-Stack Dev</span>
        </div>

        {/* Badge 2: Mid-Left Education */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute top-1/4 -left-2 sm:-left-6 z-20 px-3.5 py-1.5 rounded-full bg-[#121622]/90 backdrop-blur-md border border-white/15 hover:border-[#38bdf8] text-xs font-mono text-zinc-200 flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-default"
        >
          <GraduationCap className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span className="font-bold">BSc.IT @ Sunderland</span>
        </div>

        {/* Badge 3: Bottom-Left Location */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-6 sm:bottom-10 -left-1 sm:-left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#121622]/90 backdrop-blur-md border border-white/15 hover:border-emerald-400 text-xs font-mono text-zinc-200 flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-default"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold">Nepal 🇳🇵</span>
        </div>

        {/* Badge 4: Bottom-Right Hireable */}
        <div
          style={{ transform: "translateZ(45px)" }}
          className="absolute bottom-2 sm:bottom-4 right-1 sm:right-3 z-20 px-3 py-1.5 rounded-full bg-[#121622]/90 backdrop-blur-md border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-2 shadow-xl cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-bold">Available for Work</span>
        </div>

        {/* Clickable Easter Egg Dynamic Speech Bubble */}
        <div
          onClick={handleCharacterClick}
          style={{ transform: "translateZ(55px)" }}
          className="absolute -top-2 sm:top-2 left-2 sm:left-4 z-30 cursor-pointer group"
          title="Click to cycle lines + launch confetti!"
        >
          <div className="relative bg-white text-black font-['Permanent_Marker',cursive] text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.6)] border-2 border-black transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 active:scale-95 transition-all duration-200">
            <span className="tracking-wide select-none">{currentQuote}</span>
            <div className="absolute -bottom-2.5 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-white border-r-[4px] border-r-transparent" />
          </div>
        </div>

        {/* Main Character Illustration with Click Event - strictly pinned to right edge */}
        <div
          onClick={handleCharacterClick}
          className="relative cursor-pointer group filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] w-full flex justify-end"
          title="Click me for confetti!"
        >
          <Image
            src="/dip-avatar-v4.png"
            alt="Dip Kunwar Hero Illustration"
            width={1024}
            height={1024}
            priority
            className="w-full max-h-[82vh] h-auto object-contain object-right select-none pointer-events-none transition-transform duration-300 group-hover:brightness-105"
          />
        </div>

        {/* Floating Sparkle Accents */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="absolute -bottom-2 left-1/3 text-[#ccff00] text-2xl font-bold animate-bounce pointer-events-none"
        >
          ✦
        </div>
        <div
          style={{ transform: "translateZ(20px)" }}
          className="absolute top-1/2 -right-4 text-[#38bdf8] text-xl font-bold animate-pulse pointer-events-none"
        >
          ✦
        </div>
      </div>
    </div>
  );
};
