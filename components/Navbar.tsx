"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PurpleSplash } from "./Doodles";
import { TerminalModal } from "./TerminalModal";

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global shortcut listener for Ctrl+K, Cmd+K, or Backtick
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === "`" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 select-none">
      {/* Top Left Purple Splash Overlay */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 h-44 sm:h-52 pointer-events-none z-0 overflow-hidden">
        <PurpleSplash className="w-full h-full object-cover" />
      </div>

      <nav
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[#0a0d14]/70 border-b border-white/5 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-0.5 relative z-20 font-['Syne',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          <span>DIP KUNWAR</span>
          <span className="text-[#ccff00] text-3xl font-black group-hover:animate-ping inline-block">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className="relative py-1 text-sm font-semibold tracking-wide transition-colors group"
              >
                <span
                  className={
                    isActive
                      ? "text-white font-bold"
                      : "text-zinc-400 group-hover:text-white"
                  }
                >
                  {item.name}
                </span>

                {/* Active Underline Indicator in Neon Lime */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ccff00] rounded-full shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Terminal Command Palette Trigger Button */}
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="group px-3 sm:px-3.5 py-2 rounded-full bg-[#121622]/90 hover:bg-[#1a2133] border border-white/10 hover:border-[#ccff00]/60 text-zinc-300 hover:text-white flex items-center gap-2 text-xs font-mono transition-all shadow-md active:scale-95"
            title="Interactive Terminal (Ctrl+K or ~)"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#ccff00] group-hover:animate-pulse" />
            <span className="hidden sm:inline font-semibold">Terminal</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded text-zinc-400 group-hover:text-white border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Purple Circle Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 rounded-full bg-[#7c3aed] hover:bg-[#8b5cf6] text-white flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] z-50 bg-[#0a0d14]/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col justify-between animate-in slide-in-from-top duration-300">
          <div className="space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`block text-xl font-bold py-2 border-b border-white/5 ${
                  activeTab === item.name ? "text-[#ccff00]" : "text-zinc-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            {/* Mobile Terminal Launcher */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsTerminalOpen(true);
              }}
              className="w-full py-3 bg-[#121622] border border-white/10 hover:border-[#ccff00]/50 text-white font-mono rounded-2xl flex items-center justify-center gap-2 text-sm transition-all"
            >
              <TerminalIcon className="w-4 h-4 text-[#ccff00]" />
              <span>Launch Terminal (⌘K)</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#ccff00] text-black font-extrabold rounded-2xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Let&apos;s Connect
            </a>

            <div className="flex justify-center gap-6 pt-2 text-zinc-400">
              <a href="https://github.com/DipKunwar" target="_blank" rel="noreferrer" className="hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <span className="text-xs">Dip Kunwar • BSc.IT Portfolio</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom-Right Terminal Trigger Pill */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-full bg-[#121622]/90 hover:bg-[#1a2133] backdrop-blur-md border border-white/15 hover:border-[#ccff00] text-white flex items-center gap-2.5 text-xs font-mono shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all hover:scale-105 active:scale-95 group"
        title="Open Interactive Terminal (Ctrl+K or ~)"
        aria-label="Open Interactive Terminal"
      >
        <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
        <TerminalIcon className="w-4 h-4 text-[#ccff00]" />
        <span className="font-bold tracking-wide">Terminal</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-zinc-300 border border-white/10 font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Interactive Dev Terminal & Command Palette Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </header>
  );
};
