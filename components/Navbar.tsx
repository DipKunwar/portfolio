"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PurpleSplash } from "./Doodles";

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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

        {/* Purple Circle Hamburger Button on the Right */}
        <div className="flex items-center gap-3">
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
    </header>
  );
};
