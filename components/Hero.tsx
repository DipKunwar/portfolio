"use client";

import React, { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { CrownDoodle, ArrowHandDrawn, ArrowDownCurved, SmileyDoodle, LightningDoodle } from "./Doodles";
import { CharacterIllustration } from "./CharacterIllustration";
import { ThreeHeroCanvas } from "./ThreeHeroCanvas";
import { ShowreelModal } from "./ShowreelCard";

export const Hero: React.FC = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-32 pb-12 overflow-hidden select-none"
    >
      {/* 3D Interactive Three.js WebGL Canvas Background */}
      <ThreeHeroCanvas />

      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:pr-0 2xl:pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6 lg:pl-4 xl:pl-8 2xl:pl-12">
            {/* Handwritten "Hey, I'm" + Curved Arrow Doodle */}
            <div className="relative flex items-center gap-3 pl-2">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl text-zinc-200 font-bold tracking-wide transform -rotate-3">
                Hey, I&apos;m
              </span>
              <div className="w-12 h-10 transform -rotate-12 translate-y-1">
                <ArrowHandDrawn className="w-full h-full text-white" />
              </div>
            </div>

            {/* Giant Typographic Title: DIP KUNWAR + Crown Doodle */}
            <div className="relative w-full">
              {/* Crown doodle positioned on top of the 'P' in DIP */}
              <div className="absolute -top-7 sm:-top-9 left-[18%] sm:left-[20%] z-20 transform rotate-6">
                <CrownDoodle className="w-10 sm:w-12 h-auto text-[#ccff00] drop-shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
              </div>

              <h1 className="font-['Permanent_Marker',cursive] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.95] text-white tracking-wider uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                DIP KUNWAR
              </h1>
            </div>

            {/* Role Subtitle */}
            <div className="flex items-center flex-wrap gap-2 text-zinc-300 text-sm sm:text-base font-semibold tracking-wide pl-1">
              <span>Full-Stack Developer</span>
              <span className="text-[#ccff00] font-black">•</span>
              <span>BSc.IT (Sunderland Uni)</span>
              <span className="text-[#ccff00] font-black">•</span>
              <span>3D & Creative Coder</span>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 relative">
              {/* Primary Lime Button */}
              <button
                onClick={() => setShowreelOpen(true)}
                className="group px-6 sm:px-7 py-3 rounded-full bg-[#ccff00] hover:bg-[#d9ff33] text-black font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_25px_rgba(204,255,0,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-black ml-0.5 text-black" />
                </span>
                <span>Watch Showreel</span>
              </button>

              {/* Secondary Dark Button */}
              <a
                href="#projects"
                className="group px-6 sm:px-7 py-3 rounded-full bg-[#121622] hover:bg-[#1a2133] border border-white/20 hover:border-[#ccff00]/60 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Doodles near buttons: smiley face */}
              <div className="hidden sm:block ml-2 transform hover:rotate-12 transition-transform">
                <SmileyDoodle className="w-9 h-9 text-[#ccff00]" />
              </div>
            </div>

            {/* Left curved arrow and lightning bolt doodles */}
            <div className="flex items-center gap-6 pt-2 pl-2">
              <div className="w-9 h-11 transform rotate-6">
                <ArrowDownCurved className="w-full h-full text-white/80" />
              </div>
              <div className="w-7 h-9 animate-pulse">
                <LightningDoodle className="w-full h-full text-[#ccff00]" />
              </div>
            </div>
          </div>

          {/* Right Hero Illustration touching the right edge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 lg:translate-x-4 xl:translate-x-8 2xl:translate-x-12">
            <CharacterIllustration className="w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[740px]" />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#showreel"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121622]/80 backdrop-blur-md border border-white/10 hover:border-[#ccff00]/40 text-xs font-semibold text-zinc-400 hover:text-white transition-all shadow-md"
          >
            {/* Animated mouse scroll icon */}
            <div className="w-4 h-6 rounded-full border-2 border-zinc-400 group-hover:border-[#ccff00] flex justify-center pt-1 transition-colors">
              <div className="w-1 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#ccff00] animate-bounce" />
            </div>
            <span>Scroll Down</span>
          </a>
        </div>
      </div>

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </section>
  );
};
