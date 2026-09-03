"use client";

import React, { useState } from "react";
import { X, Play, Box, Film } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { ThreeShowcaseCanvas } from "./ThreeShowcaseCanvas";

export const ShowreelModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#121622] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f131d]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ccff00]" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              Dip Kunwar • Developer & 3D Interactive Showreel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Player Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {/* Simulated High-Res Interactive Canvas or Reel */}
          <div className="w-full h-full relative">
            <ThreeShowcaseCanvas />
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#0f131d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-lg text-white">Full-Stack & 3D Web Creative Showcase</h4>
            <p className="text-sm text-zinc-400">
              Interactive WebGL shaders, Next.js architecture, real-time algorithms, and creative UI engineering.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#ccff00] text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
          >
            Close Reel
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShowreelCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "3d">("video");

  return (
    <>
      <TiltCard intensity={8} className="w-full">
        <div className="relative bg-[#121622] border border-[#1e243a] rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
              {/* Star Icon + SHOWREEL Header */}
              <div className="flex items-center gap-3">
                <span className="text-[#a855f7] text-2xl font-bold">☆</span>
                <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase">
                  SHOWREEL
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md font-['Plus_Jakarta_Sans',sans-serif]">
                A quick glimpse of my work, interactive 3D experiments, and my love for bringing code and ideas to life.
              </p>

              {/* Tab Switcher: Cinematic vs Live 3D */}
              <div className="flex items-center gap-2 p-1 bg-[#0b0e17] rounded-full border border-white/5 w-fit">
                <button
                  onClick={() => setActiveTab("video")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeTab === "video"
                      ? "bg-[#ccff00] text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  Cinematic
                </button>
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeTab === "3d"
                      ? "bg-[#ccff00] text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  Live 3D Scene
                </button>
              </div>

              {/* Watch Now Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2.5 text-[#ccff00] font-bold text-sm sm:text-base hover:text-[#d9ff38] transition-colors w-fit pt-2"
              >
                <span>Watch Now</span>
                <span className="w-7 h-7 rounded-full border border-[#ccff00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </button>
            </div>

            {/* Right Video / 3D Canvas Preview (7 cols) */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setModalOpen(true)}
                className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#090b12] shadow-inner"
              >
                {activeTab === "3d" ? (
                  <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
                    <ThreeShowcaseCanvas />
                  </div>
                ) : (
                  <>
                    {/* Atmospheric Synthwave Skyline Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a] via-[#1a0f30] to-[#2e1065] flex items-center justify-center">
                      {/* Big Pink Glowing Sun */}
                      <div className="absolute top-8 right-24 sm:right-32 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-t from-[#f43f5e] to-[#ec4899] blur-[2px] opacity-90 shadow-[0_0_50px_rgba(244,63,94,0.6)]" />

                      {/* City silhouette */}
                      <svg
                        viewBox="0 0 600 280"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-x-0 bottom-0 w-full h-full object-cover"
                      >
                        {/* Distant skyline */}
                        <path
                          d="M0 240 L40 240 L40 180 L70 180 L70 240 L120 240 L120 150 L150 150 L150 240 L210 240 L210 120 L240 120 L240 240 L300 240 L300 160 L330 160 L330 240 L400 240 L400 130 L430 130 L430 240 L500 240 L500 190 L530 190 L530 240 L600 240 L600 280 L0 280 Z"
                          fill="#170d30"
                          opacity="0.8"
                        />
                        {/* Neon reflections on water */}
                        <rect x="0" y="240" width="600" height="40" fill="#0b0717" />
                        <line x1="100" y1="250" x2="250" y2="250" stroke="#f43f5e" strokeWidth="2" opacity="0.6" />
                        <line x1="280" y1="260" x2="480" y2="260" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
                      </svg>

                      {/* Character silhouette with backpack */}
                      <div className="absolute bottom-2 left-1/3 transform -translate-x-1/2 z-10">
                        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 sm:w-24 h-auto">
                          {/* Backpack */}
                          <ellipse cx="40" cy="70" rx="18" ry="24" fill="#0f0724" />
                          {/* Boy body */}
                          <path d="M42 45 C30 65 30 100 35 120 L70 120 C75 100 75 65 65 45 Z" fill="#090414" />
                          {/* Head with anime hair */}
                          <circle cx="53" cy="30" r="14" fill="#090414" />
                          {/* Hair spikes */}
                          <path d="M40 30 C35 18 45 10 52 14 C58 8 68 12 70 20 C76 22 75 32 68 36" fill="#090414" />
                        </svg>
                      </div>

                      {/* Glowing Centered Play Button */}
                      <div className="relative z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ccff00] text-black flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.75)] group-hover:scale-115 group-hover:shadow-[0_0_45px_rgba(204,255,0,0.9)] transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-black ml-1 text-black" />
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-mono text-white/80 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        PREVIEW REEL
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      <ShowreelModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
