"use client";

import React, { useState } from "react";
import { CyanStreaks, PurpleLoops } from "./Doodles";
import { TiltCard } from "./TiltCard";

interface SkillItem {
  name: string;
  category: string;
  symbol: string;
  shape: "squircle" | "hex" | "cube";
  bgGrad: string;
  borderColor: string;
  textColor: string;
  glowColor: string;
}

export const SkillsSection: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<"code" | "creative">("code");

  const codingSkills: SkillItem[] = [
    {
      name: "Next.js",
      category: "Full-Stack Web",
      symbol: "▲",
      shape: "squircle",
      bgGrad: "from-[#000000] to-[#18181b]",
      borderColor: "border-white/30",
      textColor: "text-white",
      glowColor: "rgba(255,255,255,0.4)",
    },
    {
      name: "TypeScript",
      category: "Typed Systems",
      symbol: "TS",
      shape: "squircle",
      bgGrad: "from-[#1e3a8a] to-[#172554]",
      borderColor: "border-[#38bdf8]/40",
      textColor: "text-[#38bdf8]",
      glowColor: "rgba(56,189,248,0.45)",
    },
    {
      name: "Python",
      category: "DSA & AI",
      symbol: "Py",
      shape: "squircle",
      bgGrad: "from-[#854d0e] to-[#713f12]",
      borderColor: "border-[#facc15]/40",
      textColor: "text-[#fde047]",
      glowColor: "rgba(250,204,21,0.45)",
    },
    {
      name: "Node.js",
      category: "Backend Engine",
      symbol: "JS",
      shape: "squircle",
      bgGrad: "from-[#064e3b] to-[#022c22]",
      borderColor: "border-[#4ade80]/40",
      textColor: "text-[#4ade80]",
      glowColor: "rgba(74,222,128,0.45)",
    },
    {
      name: "Three.js",
      category: "Interactive 3D",
      symbol: "3D",
      shape: "cube",
      bgGrad: "from-[#c2410c] to-[#7c2d12]",
      borderColor: "border-[#fb923c]/40",
      textColor: "text-[#fb923c]",
      glowColor: "rgba(251,146,60,0.45)",
    },
    {
      name: "PostgreSQL",
      category: "Database & SQL",
      symbol: "Pg",
      shape: "squircle",
      bgGrad: "from-[#3b0764] to-[#2e1065]",
      borderColor: "border-[#a855f7]/40",
      textColor: "text-[#c084fc]",
      glowColor: "rgba(168,85,247,0.45)",
    },
  ];

  const creativeSkills: SkillItem[] = [
    {
      name: "Figma",
      category: "UI/UX Design",
      symbol: "Fg",
      shape: "squircle",
      bgGrad: "from-[#082f49] to-[#0c4a6e]",
      borderColor: "border-[#06b6d4]/40",
      textColor: "text-[#22d3ee]",
      glowColor: "rgba(34,211,238,0.45)",
    },
    {
      name: "Photoshop",
      category: "Adobe PS",
      symbol: "Ps",
      shape: "squircle",
      bgGrad: "from-[#0c4a6e] to-[#082f49]",
      borderColor: "border-[#38bdf8]/40",
      textColor: "text-[#38bdf8]",
      glowColor: "rgba(56,189,248,0.45)",
    },
    {
      name: "Adobe Animate",
      category: "Vector Motion",
      symbol: "An",
      shape: "squircle",
      bgGrad: "from-[#7f1d1d] to-[#450a0a]",
      borderColor: "border-[#f87171]/40",
      textColor: "text-[#fca5a5]",
      glowColor: "rgba(248,113,113,0.45)",
    },
    {
      name: "Tailwind CSS",
      category: "Modern Styling",
      symbol: "TW",
      shape: "squircle",
      bgGrad: "from-[#0f766e] to-[#115e59]",
      borderColor: "border-[#2dd4bf]/40",
      textColor: "text-[#2dd4bf]",
      glowColor: "rgba(45,212,191,0.45)",
    },
    {
      name: "Toon Boom",
      category: "Harmony 2D",
      symbol: "H",
      shape: "hex",
      bgGrad: "from-[#2e1065] to-[#3b0764]",
      borderColor: "border-[#a855f7]/40",
      textColor: "text-[#c084fc]",
      glowColor: "rgba(168,85,247,0.45)",
    },
    {
      name: "Premiere Pro",
      category: "Video Editing",
      symbol: "Pr",
      shape: "squircle",
      bgGrad: "from-[#581c87] to-[#3b0764]",
      borderColor: "border-[#c084fc]/40",
      textColor: "text-[#e9d5ff]",
      glowColor: "rgba(192,132,252,0.45)",
    },
  ];

  const currentSkills = activeTrack === "code" ? codingSkills : creativeSkills;

  return (
    <section id="skills" className="w-full py-8 sm:py-12 relative select-none">
      {/* Cyan streaks on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
        <CyanStreaks className="w-10 h-14 opacity-80" />
      </div>

      {/* Purple loops on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
        <PurpleLoops className="w-20 sm:w-28 h-auto opacity-80" />
      </div>

      {/* Title & Underline */}
      <div className="flex flex-col items-center sm:items-start mb-8">
        <div className="relative inline-block">
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-white uppercase">
            SKILLS
          </h2>
          {/* Purple hand-drawn underline */}
          <svg
            viewBox="0 0 100 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-2.5 mt-1"
          >
            <path
              d="M2 7 C25 2 65 2 98 7"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Track Toggle */}
        <div className="flex items-center gap-2 mt-4 bg-[#121622] p-1 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTrack("code")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTrack === "code"
                ? "bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.5)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Programming & CS
          </button>
          <button
            onClick={() => setActiveTrack("creative")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTrack === "creative"
                ? "bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.5)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            3D & Creative Tools
          </button>
        </div>
      </div>

      {/* Skills Badges Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-4 max-w-5xl mx-auto">
        {currentSkills.map((skill) => (
          <TiltCard
            key={skill.name}
            intensity={16}
            className="group flex flex-col items-center text-center cursor-default"
          >
            {/* App Icon Container */}
            <div
              className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${skill.bgGrad} border ${skill.borderColor} flex items-center justify-center relative shadow-lg transition-all duration-300 group-hover:scale-110`}
              style={{
                boxShadow: `0 8px 25px -4px ${skill.glowColor}`,
              }}
            >
              {/* Subtle inner reflection */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl pointer-events-none" />

              {/* App Monogram / Symbol */}
              <span
                className={`font-mono text-xl sm:text-2xl font-black ${skill.textColor} tracking-tighter drop-shadow-md`}
              >
                {skill.symbol}
              </span>
            </div>

            {/* Label below badge */}
            <div className="mt-3">
              <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#ccff00] transition-colors">
                {skill.name}
              </span>
              <span className="block text-[11px] text-zinc-400 font-medium">
                {skill.category}
              </span>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
