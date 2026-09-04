"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  logo?: string;
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
      accentColor: "#ef4444",
      logo: "/projects/padhub-logo.png",
      renderArt: () => (
        <div className="relative w-full h-full bg-[#0c0f18] overflow-hidden flex items-center justify-center group/art">
          <Image
            src="/projects/padhub-cover.png"
            alt="PadHub F1 Telemetry"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover/art:scale-105 select-none"
          />
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
      logo: "/projects/streamverse-logo.png",
      renderArt: () => (
        <div className="relative w-full h-full bg-[#0a0e1a] overflow-hidden flex items-center justify-center group/art">
          <Image
            src="/projects/streamverse-cover.png"
            alt="StreamVerse Movies & Streaming"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover/art:scale-105 select-none"
          />
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
      demo: "https://pitchhub-omega.vercel.app",
      accentColor: "#22c55e",
      logo: "/projects/pitchhub-logo.png",
      renderArt: () => (
        <div className="relative w-full h-full bg-[#0a0e16] overflow-hidden flex items-center justify-center group/art">
          <Image
            src="/projects/pitchhub-cover.png"
            alt="PitchHub Football Streaming"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover/art:scale-105 select-none"
          />
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
      demo: "https://pitchhub-omega.vercel.app",
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
                <div className="flex items-center gap-2.5 min-w-0">
                  {project.logo && (
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center flex-shrink-0 group-hover:border-[#ccff00]/40 transition-colors">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-black tracking-wide text-white uppercase group-hover:text-[#ccff00] transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium font-['Plus_Jakarta_Sans',sans-serif] truncate">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-[#ccff00] group-hover:text-black group-hover:border-[#ccff00] transition-all flex-shrink-0 ml-2">
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

            {/* Modal Title & Category with Logo */}
            <div className="flex items-center gap-3.5 mb-4">
              {selectedProject.logo && (
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Image
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} logo`}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
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
