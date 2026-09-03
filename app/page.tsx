import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShowreelCard } from "@/components/ShowreelCard";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-white selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Hero Section with 3D Canvas */}
        <Hero />

        {/* Showreel Card Section */}
        <section id="showreel" className="w-full pt-4 pb-8">
          <ShowreelCard />
        </section>

        {/* Featured Projects Grid */}
        <FeaturedProjects />

        {/* Skills Section with App Badges */}
        <SkillsSection />

        {/* About Me Section with Comic Character Frame */}
        <AboutSection />
      </main>

      {/* Footer / Contact Banner */}
      <ContactFooter />
    </div>
  );
}
