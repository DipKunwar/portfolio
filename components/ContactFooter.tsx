"use client";

import React, { useState } from "react";
import { Mail, MapPin, Globe, Check, Copy, Sparkles, MessageSquare } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { DopeLoop, BlueMonster } from "./Doodles";
import { QuickContactModal } from "./QuickContactModal";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const email = "kunwardipson89@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDopeClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ["#ccff00", "#8b5cf6", "#38bdf8", "#facc15", "#ec4899"],
    });
  };

  return (
    <footer id="contact" className="w-full pt-12 pb-16 relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-10 w-96 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left Title: LET'S MAKE SOMETHING DOPE! */}
          <div
            onClick={handleDopeClick}
            className="cursor-pointer group select-none relative"
            title="Click for celebration confetti!"
          >
            <div className="font-['Syne',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider text-white leading-tight uppercase">
              <span>LET&apos;S MAKE</span>
              <br />
              <div className="flex items-center gap-3 flex-wrap mt-1">
                <span>SOMETHING</span>
                {/* DOPE! with hand-drawn loop */}
                <div className="relative inline-block px-4 py-1">
                  <span className="text-[#ccff00] font-['Permanent_Marker',cursive] tracking-widest text-3xl sm:text-4xl lg:text-5xl group-hover:scale-105 inline-block transition-transform">
                    DOPE!
                  </span>
                  <div className="absolute inset-0 -top-1 -left-2 w-[120%] h-[120%] pointer-events-none">
                    <DopeLoop className="w-full h-full text-[#8b5cf6]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs font-mono text-zinc-400 group-hover:text-[#ccff00] transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click to trigger confetti!</span>
            </div>
          </div>

          {/* Right Contact Details & Mascot */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12 relative w-full lg:w-auto justify-between">
            {/* Contact info list */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300">
                  <Mail className="w-4 h-4 text-[#ccff00]" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#ccff00] transition-colors flex items-center gap-2 font-mono group"
                >
                  <span>{email}</span>
                  <span className="p-1 rounded bg-white/5 group-hover:bg-white/10 text-zinc-400 group-hover:text-white transition-colors">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* Send a Quick Message Button */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.4)] hover:scale-105 active:scale-95 transition-all mt-1 w-fit"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send a Quick Message</span>
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                </div>
                <span className="text-sm sm:text-base text-zinc-300 font-medium">
                  Nepal.
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/dijsujdo"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/DipKunwar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dip-kunwar-71b8b6433/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://dipkunwar.com.np"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#161c2a] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all hover:scale-110"
                  aria-label="Personal Portfolio"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Cute Blue Monster Mascot with Peace Sign */}
            <div className="relative w-28 sm:w-36 h-auto self-end sm:self-center -mb-6 sm:mb-0 transform hover:scale-105 transition-transform">
              <BlueMonster className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p>© 2026 Dip. Crafted with Next.js, Tailwind CSS & Three.js.</p>
          <p className="font-mono">printf(&quot;YOOO, Whats up??&quot;);</p>
        </div>
      </div>

      {/* Quick Contact Modal */}
      <QuickContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </footer>
  );
};
