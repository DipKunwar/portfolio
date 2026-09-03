"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { TiltCard } from "./TiltCard";
import { WavySquiggle } from "./Doodles";

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  accentColor: string;
  renderArt: () => React.ReactNode;
}

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "f1-hub",
      title: "PADHUB F1",
      category: "Formula 1 Hub & Telemetry",
      desc: "An all-in-one Formula 1 platform providing real-time grand prix telemetry, race schedules, driver performance statistics, and live constructors rankings.",
      tech: ["Next.js", "Tailwind CSS", "F1 Live API", "TypeScript"],
      github: "https://github.com/DipKunwar",
      demo: "https://padhub3.vercel.app/",
      accentColor: "#facc15",
      renderArt: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-[#facc15] via-[#fbbf24] to-[#ea580c] overflow-hidden flex items-center justify-center">
          {/* F1 Speed Streaks & Track Lines */}
          <svg viewBox="0 0 300 200" fill="none" className="absolute inset-0 w-full h-full opacity-50">
            <line x1="0" y1="30" x2="300" y2="15" stroke="white" strokeWidth="5" />
            <line x1="0" y1="70" x2="300" y2="55" stroke="white" strokeWidth="7" />
            <line x1="0" y1="130" x2="300" y2="145" stroke="white" strokeWidth="6" />
            <line x1="0" y1="170" x2="300" y2="185" stroke="white" strokeWidth="4" />
            {/* Checkered flag corner */}
            <g transform="translate(240, 10) scale(0.6)">
              <rect x="0" y="0" width="16" height="16" fill="#18181b" />
              <rect x="16" y="0" width="16" height="16" fill="white" />
              <rect x="32" y="0" width="16" height="16" fill="#18181b" />
              <rect x="0" y="16" width="16" height="16" fill="white" />
              <rect x="16" y="16" width="16" height="16" fill="#18181b" />
              <rect x="32" y="16" width="16" height="16" fill="white" />
            </g>
          </svg>
          {/* F1 Race Car Silhouette Vector */}
          <svg viewBox="0 0 160 80" fill="none" className="w-32 sm:w-36 h-auto relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {/* Rear Wing */}
            <rect x="15" y="18" width="8" height="28" fill="#18181b" rx="2" />
            <rect x="10" y="14" width="22" height="6" fill="#dc2626" rx="1" />
            {/* Body Aerodynamics */}
            <path d="M22 36 L65 34 L110 38 L145 46 L148 52 L35 52 Z" fill="#18181b" />
            <path d="M50 34 L75 22 L90 28 L95 36 Z" fill="#dc2626" />
            {/* Cockpit & Halo */}
            <ellipse cx="78" cy="27" rx="6" ry="4" fill="#38bdf8" />
            <path d="M72 26 C75 20 85 20 88 26" stroke="#f4f4f5" strokeWidth="2.5" fill="none" />
            {/* Wheels */}
            <ellipse cx="42" cy="52" rx="14" ry="12" fill="#09090b" stroke="#3f3f46" strokeWidth="3" />
            <ellipse cx="126" cy="52" rx="14" ry="12" fill="#09090b" stroke="#3f3f46" strokeWidth="3" />
            <circle cx="42" cy="52" r="4" fill="#dc2626" />
            <circle cx="126" cy="52" r="4" fill="#dc2626" />
            {/* Front Wing */}
            <rect x="138" y="48" width="18" height="6" fill="#dc2626" rx="2" />
          </svg>
        </div>
      ),
    },
    {
      id: "streamverse",
      title: "STREAMVERSE",
      category: "Movies & Shows Streaming",
      desc: "A modern video streaming and entertainment hub offering HD movie discovery, real-time show trailers, trending releases, and custom watchlists.",
      tech: ["React", "Next.js", "TMDB API", "Video.js"],
      github: "https://github.com/DipKunwar",
      demo: "https://streamverse-coral.vercel.app/",
      accentColor: "#fb923c",
      renderArt: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#c2410c] overflow-hidden flex items-center justify-center">
          {/* Cinema film roll strip */}
          <div className="absolute top-2 inset-x-0 h-4 bg-black/40 flex justify-between px-2 items-center">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-sm bg-white/40" />
            ))}
          </div>
          <div className="absolute bottom-2 inset-x-0 h-4 bg-black/40 flex justify-between px-2 items-center">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-sm bg-white/40" />
            ))}
          </div>
          {/* TV Head & Cinema Screen Mascot */}
          <div className="relative z-10 flex flex-col items-center drop-shadow-lg">
            <div className="w-22 h-18 sm:w-24 sm:h-20 rounded-2xl bg-[#181824] border-4 border-[#fed7aa] shadow-xl flex items-center justify-center relative">
              {/* Antennas */}
              <div className="absolute -top-4 w-1 h-4 bg-[#fed7aa] transform -rotate-12 left-6" />
              <div className="absolute -top-4 w-1 h-4 bg-[#fed7aa] transform rotate-12 right-6" />
              {/* Play symbol on cinema screen */}
              <div className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-black ml-0.5">▶</span>
              </div>
            </div>
            {/* Popcorn box / base */}
            <div className="w-16 h-8 bg-[#b91c1c] rounded-b-lg border-2 border-white/20 mt-1 flex items-center justify-center">
              <span className="text-white text-[9px] font-black font-mono">STREAM</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "football-streaming",
      title: "PITCHHUB",
      category: "Live Football Streaming",
      desc: "A dedicated live football match streaming and tracker portal featuring live score updates, match fixtures, interactive lineup tactics, and high-definition streams.",
      tech: ["Next.js", "WebSockets", "Live Sports API", "Tailwind"],
      github: "https://github.com/DipKunwar",
      demo: "https://pitchhub.vercel.app",
      accentColor: "#22c55e",
      renderArt: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-[#15803d] via-[#16a34a] to-[#0f172a] overflow-hidden flex items-center justify-center">
          {/* Football Field Pitch Lines */}
          <svg viewBox="0 0 200 140" fill="none" className="absolute inset-0 w-full h-full opacity-60">
            {/* Field boundary */}
            <rect x="15" y="15" width="170" height="110" stroke="white" strokeWidth="2.5" />
            {/* Half line */}
            <line x1="100" y1="15" x2="100" y2="125" stroke="white" strokeWidth="2" />
            {/* Center circle */}
            <circle cx="100" cy="70" r="22" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="70" r="2" fill="white" />
            {/* Penalty boxes */}
            <rect x="15" y="42" width="28" height="56" stroke="white" strokeWidth="2" />
            <rect x="157" y="42" width="28" height="56" stroke="white" strokeWidth="2" />
          </svg>
          {/* Dynamic Soccer Ball & Kick Vector */}
          <div className="relative z-10 flex flex-col items-center">
            <svg viewBox="0 0 80 80" fill="none" className="w-18 sm:w-20 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              {/* Ball */}
              <circle cx="40" cy="40" r="28" fill="white" stroke="#18181b" strokeWidth="4" />
              {/* Classic football pentagon patches */}
              <polygon points="40,24 49,31 46,41 34,41 31,31" fill="#18181b" />
              <polygon points="40,12 34,16 46,16" fill="#18181b" />
              <polygon points="56,33 63,33 60,42" fill="#18181b" />
              <polygon points="24,33 17,33 20,42" fill="#18181b" />
              <polygon points="34,58 40,64 46,58 43,50 37,50" fill="#18181b" />
            </svg>
            <span className="mt-1 px-2.5 py-0.5 bg-black/60 rounded-full text-[10px] font-extrabold text-[#ccff00] font-mono border border-white/10">
              LIVE MATCH
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "groovy-tunes",
      title: "GROOVY TUNES",
      category: "WebGL Music Visualizer",
      desc: "A responsive, reactive 3D WebGL audio visualizer synchronized to Web Audio frequency bands with custom frequency shaders.",
      tech: ["Three.js", "React", "Web Audio API", "GLSL"],
      github: "https://github.com/DipKunwar",
      demo: "https://pitchhub.vercel.app",
      accentColor: "#bef264",
      renderArt: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-[#065f46] via-[#047857] to-[#0f172a] overflow-hidden flex items-center justify-center">
          {/* Floating musical note doodles */}
          <span className="absolute top-3 left-4 text-[#bef264] text-lg font-bold animate-bounce">♪</span>
          <span className="absolute top-2 right-5 text-[#bef264] text-xl font-bold animate-pulse">♫</span>

          {/* Cute green audio monster mascot with headphones */}
          <div className="relative z-10 flex flex-col items-center">
            <svg viewBox="0 0 120 120" fill="none" className="w-24 sm:w-28 h-auto">
              {/* Headphones arch */}
              <path d="M22 60 C22 25 98 25 98 60" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
              {/* Ear cushions */}
              <rect x="15" y="48" width="14" height="24" rx="6" fill="#0284c7" />
              <rect x="91" y="48" width="14" height="24" rx="6" fill="#0284c7" />
              {/* Chubby Green Monster Body */}
              <ellipse cx="60" cy="72" rx="38" ry="32" fill="#bef264" />
              {/* Monster Ears */}
              <path d="M35 48 L42 56" stroke="#bef264" strokeWidth="6" strokeLinecap="round" />
              <path d="M85 48 L78 56" stroke="#bef264" strokeWidth="6" strokeLinecap="round" />
              {/* Eyes */}
              <circle cx="48" cy="68" r="4" fill="#064e3b" />
              <circle cx="72" cy="68" r="4" fill="#064e3b" />
              {/* Happy Smile */}
              <path d="M52 78 C56 83 64 83 68 78" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="w-full py-6 sm:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-white uppercase">
            FEATURED PROJECTS
          </h2>
          <WavySquiggle className="w-16 sm:w-20 text-[#8b5cf6] hidden xs:block" />
        </div>

        <a
          href="https://github.com/DipKunwar?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-[#ccff00] font-bold text-sm hover:underline transition-colors"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <TiltCard
            key={project.id}
            intensity={12}
            className="cursor-pointer group h-full"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-[#121622] border border-[#1e243a] rounded-3xl p-4 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#ccff00]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Artwork Banner */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 border border-white/5">
                {project.renderArt()}
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                    Explore Project
                  </span>
                </div>
              </div>

              {/* Info Row */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-black tracking-wide text-white uppercase group-hover:text-[#ccff00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium font-['Plus_Jakarta_Sans',sans-serif]">
                    {project.category}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-[#ccff00] group-hover:text-black group-hover:border-[#ccff00] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#121622] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              {selectedProject.renderArt()}
            </div>

            {/* Modal Title & Category */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-bold text-[#ccff00] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif] tracking-wider uppercase">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              {selectedProject.desc}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1a2133] text-zinc-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#ccff00] text-black font-extrabold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#1e2438] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#28314c] transition-colors border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
