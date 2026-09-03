"use client";

import React from "react";
import Image from "next/image";

export const CharacterIllustration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Soft atmospheric gradient glow behind character */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#7c3aed]/35 via-[#38bdf8]/20 to-[#ccff00]/15 rounded-full blur-3xl pointer-events-none -z-10 transform scale-95" />

      {/* Main Character Illustration Container */}
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] transition-transform duration-300 hover:scale-[1.03] filter drop-shadow-[0_20px_45px_rgba(124,58,237,0.3)]">
        <Image
          src="/hero-character.png"
          alt="Dip Kunwar Hero Illustration"
          width={1024}
          height={1024}
          priority
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
};
