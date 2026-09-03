"use client";

import React, { useMemo } from "react";
import {
  Star,
  ExternalLink,
  Code2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export const GitHubStatsCard: React.FC = () => {
  // Simulated GitHub Contribution Grid (20 weeks x 7 days)
  const weeks = 20;
  const days = 7;
  const contributionGrid = useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const weekCol: number[] = [];
      for (let d = 0; d < days; d++) {
        const isWeekend = d === 0 || d === 6;
        const seed = (w * 7 + d * 3) % 11;
        let level = 0;
        if (seed > 7) level = 3;
        else if (seed > 4) level = 2;
        else if (seed > 1 && !isWeekend) level = 1;
        else if (w > 14) level = (w % 3) + 1;
        weekCol.push(level);
      }
      grid.push(weekCol);
    }
    return grid;
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] border-[#006d32]/40";
      case 2:
        return "bg-[#006d32] border-[#26a641]/50";
      case 3:
        return "bg-[#26a641] border-[#39d353]/60";
      case 4:
        return "bg-[#39d353] border-[#ccff00] shadow-[0_0_6px_rgba(204,255,0,0.8)]";
      default:
        return "bg-[#161b22] border-white/5";
    }
  };

  return (
    <section className="w-full py-8 select-none">
      <div className="relative bg-[#0d1117] border border-[#30363d] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* Glow effect behind */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase">
                  GITHUB ACTIVITY & OPEN SOURCE
                </h3>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                github.com/DipKunwar • Building digital products & creative experiments
              </p>
            </div>
          </div>

          <a
            href="https://github.com/DipKunwar"
            target="_blank"
            rel="noreferrer"
            className="group px-4 py-2 rounded-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-white text-xs font-mono font-bold flex items-center gap-2 transition-all hover:border-[#ccff00]/60 active:scale-95"
          >
            <span>Follow @DipKunwar</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#ccff00] transition-colors" />
          </a>
        </div>

        {/* Top Profile Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 mb-6">
          {/* User Bio Card */}
          <div className="lg:col-span-4 p-5 bg-[#161b22] border border-[#30363d] rounded-2xl flex flex-col justify-between">
            <div className="flex items-start gap-3.5">
              <div className="w-14 h-14 rounded-full border-2 border-[#ccff00] shadow-md overflow-hidden bg-zinc-800 flex items-center justify-center">
                <GithubIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-white text-base truncate">Dip Kunwar</h4>
                <p className="text-xs text-zinc-400 font-mono">@DipKunwar</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available for Full-Stack Roles</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5 text-center">
              <div>
                <span className="block font-mono text-base font-bold text-white">4+</span>
                <span className="block text-[10px] text-zinc-400 font-mono">Projects</span>
              </div>
              <div>
                <span className="block font-mono text-base font-bold text-[#ccff00]">BSc.IT</span>
                <span className="block text-[10px] text-zinc-400 font-mono">ISMT/Sunderland</span>
              </div>
              <div>
                <span className="block font-mono text-base font-bold text-[#38bdf8]">Nepal</span>
                <span className="block text-[10px] text-zinc-400 font-mono">Location</span>
              </div>
            </div>
          </div>

          {/* Featured Repository Showcase */}
          <div className="lg:col-span-8 p-5 bg-[#161b22] border border-[#30363d] rounded-2xl flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#ccff00]" />
                <a
                  href="https://github.com/DipKunwar/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
                >
                  <span>DipKunwar / portfolio</span>
                  <span className="px-2 py-0.5 text-[10px] font-sans font-semibold rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    Public
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]" />
                  TypeScript
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  1
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-4">
              Full-Stack Developer portfolio crafted with Next.js 16, Tailwind CSS v4, and Three.js WebGL 3D interactive canvases, terminal palette, and comic doodles.
            </p>

            {/* Language Breakdown Bar */}
            <div className="space-y-2">
              <div className="w-full h-2 rounded-full overflow-hidden bg-white/10 flex">
                <div style={{ width: "68%" }} className="h-full bg-[#3178c6]" title="TypeScript: 68%" />
                <div style={{ width: "18%" }} className="h-full bg-[#38bdf8]" title="Next.js & React: 18%" />
                <div style={{ width: "9%" }} className="h-full bg-[#ccff00]" title="Tailwind CSS: 9%" />
                <div style={{ width: "5%" }} className="h-full bg-[#8b5cf6]" title="Three.js / GLSL: 5%" />
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#3178c6]" /> TypeScript 68%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]" /> React / Next.js 18%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00]" /> Tailwind CSS 9%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" /> WebGL / Three.js 5%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Graph Section */}
        <div className="p-5 bg-[#161b22] border border-[#30363d] rounded-2xl relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-mono font-bold text-white">
                Yearly Coding Frequency & Git Commits
              </span>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              Regular commits & continuous product shipping
            </span>
          </div>

          {/* Grid View */}
          <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
            <div className="flex gap-1.5 min-w-[500px]">
              {contributionGrid.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-1.5">
                  {col.map((lvl, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`w-3.5 h-3.5 rounded-sm border transition-transform hover:scale-125 hover:z-20 cursor-pointer ${getLevelColor(
                        lvl
                      )}`}
                      title={`Activity level: ${lvl}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400">
            <span>Learn more about Dip&apos;s code contributions on GitHub</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-[#161b22] border border-white/5" />
              <div className="w-3 h-3 rounded-sm bg-[#0e4429] border border-[#006d32]/40" />
              <div className="w-3 h-3 rounded-sm bg-[#006d32] border border-[#26a641]/50" />
              <div className="w-3 h-3 rounded-sm bg-[#26a641] border border-[#39d353]/60" />
              <div className="w-3 h-3 rounded-sm bg-[#39d353] border border-[#ccff00]" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
