"use client";

import React, { useState } from "react";
import { ArrowRight, X, GraduationCap, Trophy, Terminal, Award, FileText } from "lucide-react";
import { AboutCharacter } from "./AboutCharacter";
import { TiltCard } from "./TiltCard";
import { WavySquiggle } from "./Doodles";

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="w-full py-8 sm:py-12">
      <TiltCard intensity={8} className="w-full">
        <div className="relative bg-[#121622] border border-[#1e243a] rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          {/* Subtle purple background ambient glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Comic Poster (5 cols) */}
            <div className="md:col-span-5 w-full">
              <AboutCharacter className="w-full" />
            </div>

            {/* Right Story & Bio (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-5 relative">
              {/* Purple squiggles in the upper right */}
              <div className="absolute top-0 right-0 hidden sm:block">
                <WavySquiggle className="w-24 text-[#8b5cf6]" />
              </div>

              {/* Section Heading */}
              <div>
                <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-white uppercase">
                  ABOUT ME
                </h2>
                <div className="w-12 h-1 bg-[#ccff00] rounded-full mt-2" />
              </div>

              {/* Bio Paragraph */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                I&apos;m <span className="text-white font-bold">Dip Kunwar</span>, a Full-Stack Developer who loves turning ideas into playful, impactful digital products. I enjoy building software that solves real problems, performs smoothly, and leaves a lasting impression.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                When I&apos;m not writing TypeScript or optimizing Three.js shaders, you will find me participating, experimenting with creative coding, or sketching UI/UX design.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-[#1a2133] rounded-full text-xs font-semibold text-zinc-300 border border-white/5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ccff00]" />
                  BSc.IT Student
                </span>
                <span className="px-3 py-1 bg-[#1a2133] rounded-full text-xs font-semibold text-zinc-300 border border-white/5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                  ISMT College (Sunderland Uni)
                </span>
                <span className="px-3 py-1 bg-[#1a2133] rounded-full text-xs font-semibold text-zinc-300 border border-white/5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-[#facc15]" />
                  Full-Stack & 3D Web
                </span>
              </div>

              {/* Know More CTA Link */}
              <div className="pt-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 text-[#ccff00] font-bold text-sm sm:text-base hover:text-[#e0ff4f] transition-colors"
                >
                  <span>Know More About Me</span>
                  <span className="w-7 h-7 rounded-full border border-[#ccff00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Extended Bio / Resume Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#121622] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-extrabold text-white font-['Syne',sans-serif] uppercase mb-4">
              Dip Kunwar • Background & Journey
            </h3>

            <div className="space-y-6 text-sm text-zinc-300">
              <div className="p-4 bg-[#181e2e] rounded-2xl border border-white/5">
                <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-base">
                  <GraduationCap className="w-4 h-4 text-[#ccff00]" />
                  Education
                </h4>
                <p className="font-semibold text-white">BSc.IT (Bachelor of Science in Information Technology)</p>
                <p className="text-xs text-zinc-400">ISMT College • University of Sunderland</p>
                <p className="text-xs text-zinc-300 mt-2">
                  Specializing in software engineering, modern web technologies, algorithms, and interactive systems.
                </p>
              </div>

              <div className="p-4 bg-[#181e2e] rounded-2xl border border-white/5">
                <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-base">
                  <Award className="w-4 h-4 text-[#38bdf8]" />
                  Focus & Creative Coding
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-300">
                  <li>Building production web applications like PADHUB F1, StreamVerse, and PITCHHUB</li>
                  <li>Exploring Three.js WebGL shaders and creative interactive coding</li>
                  <li>UI/UX design prototyping and modern responsive interfaces</li>
                </ul>
              </div>

              <div className="p-4 bg-[#181e2e] rounded-2xl border border-white/5">
                <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-base">
                  <FileText className="w-4 h-4 text-[#facc15]" />
                  Philosophy
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  &ldquo;With Great Power Comes Great Responsibility&rdquo; — Uncle Ben (Spider-Man).
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                  My goal is to build interfaces that feel alive, responsive, and memorable.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-[#ccff00] text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
