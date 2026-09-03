"use client";

import React from "react";
import Image from "next/image";
import { StarDoodle, SpeechBubble } from "./Doodles";

export const CharacterIllustration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Speech bubble positioned above character */}
      <div className="absolute -top-10 sm:-top-14 left-2 sm:-left-6 z-20 animate-bounce duration-1000">
        <SpeechBubble />
      </div>

      {/* Floating Star doodle */}
      <div className="absolute -top-4 right-8 sm:right-12 z-20 animate-pulse">
        <StarDoodle className="w-9 h-9 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
      </div>

      {/* Little sparkle doodles */}
      <div className="absolute top-12 -right-2 text-white text-xl font-bold animate-ping opacity-75">
        ✦
      </div>
      <div className="absolute bottom-24 -left-4 text-purple-400 text-lg font-bold">
        ✦
      </div>

      {/* Main Character Illustration Container */}
      <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] transition-transform duration-300 hover:scale-[1.03]">
        {/* Soft atmospheric gradient glow behind character */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/30 via-[#38bdf8]/15 to-[#ccff00]/10 rounded-full blur-3xl transform scale-90 -z-10" />

        {/* Orange waving motion streaks beside hand */}
        <div className="absolute top-[28%] -left-3 sm:-left-6 pointer-events-none z-10">
          <svg viewBox="0 0 60 60" fill="none" className="w-12 sm:w-16 h-auto text-orange-400">
            <path d="M10 20 C2 35 2 45 15 55" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M22 15 C14 30 14 40 25 50" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Dip Kunwar Vector Illustration */}
        <Image
          src="/hero-character.png"
          alt="Dip Kunwar Illustration"
          width={1222}
          height={1000}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(124,58,237,0.35)] select-none pointer-events-none"
        />
      </div>
    </div>
  );
};
