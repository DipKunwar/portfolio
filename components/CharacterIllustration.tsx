"use client";

import React from "react";
import Image from "next/image";
import { StarDoodle, SpeechBubble } from "./Doodles";

export const CharacterIllustration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Glow behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#7c3aed]/25 via-[#38bdf8]/15 to-[#ccff00]/15 rounded-[2.5rem] blur-2xl pointer-events-none -z-10" />

      {/* Floating Speech Bubble - positioned clearly above without covering face */}
      <div className="absolute -top-12 sm:-top-16 left-0 sm:-left-8 z-30 transform -rotate-3 hover:rotate-0 transition-transform">
        <SpeechBubble />
      </div>

      {/* Floating Star doodle */}
      <div className="absolute -top-6 -right-2 sm:-right-4 z-30 animate-pulse">
        <StarDoodle className="w-10 h-10 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-1/4 -right-5 text-white text-2xl font-bold animate-ping opacity-60 pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-20 -left-6 text-[#ccff00] text-xl font-bold pointer-events-none">
        ✦
      </div>

      {/* Hero Showcase Card Frame */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] bg-gradient-to-b from-[#131826]/90 via-[#0e121d]/95 to-[#080a10] border border-white/15 hover:border-[#ccff00]/50 rounded-[2.5rem] p-5 pt-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 group">
        {/* Subtle grid background pattern inside card */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Ambient radial color accents inside card */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#7c3aed]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Card Header Strip */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] font-mono text-zinc-400 ml-1.5 font-bold tracking-wider">
              DIP.DEV
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
            BSc.IT
          </span>
        </div>

        {/* Character Image Container */}
        <div className="relative aspect-[1.15/1] w-full flex items-end justify-center overflow-hidden rounded-2xl">
          {/* Orange motion streaks beside waving hand */}
          <div className="absolute top-[25%] left-1 pointer-events-none z-20">
            <svg viewBox="0 0 60 60" fill="none" className="w-10 sm:w-12 h-auto text-orange-400">
              <path d="M10 20 C2 35 2 45 15 55" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
              <path d="M22 15 C14 30 14 40 25 50" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <Image
            src="/hero-character.png"
            alt="Dip Kunwar Illustration"
            width={1345}
            height={1100}
            priority
            className="w-[110%] h-auto max-w-none object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom Status Pill */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">
              Available for Projects
            </span>
          </div>
          <span className="text-zinc-400 text-[11px] font-medium">Nepal 🇳🇵</span>
        </div>
      </div>
    </div>
  );
};
