/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import TornPaperDivider from "./components/TornPaperDivider";
import { Mail, ArrowUp, Star } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor element intercepts to change navbar highlights scroll-responsively
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "resume", "certifications", "contact"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // Optimizes detection as section fills middle screen
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    // Scroll top button activation detection
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleLearnMore = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      
      {/* Header element */}
      <Header activeSection={activeSection} />

      {/* Main body elements with structured adjacent paper tears */}
      <main>
        
        {/* SECTION 1: HOME */}
        <HomeHero onLearnMoreClick={handleLearnMore} />

        {/* Divider: Home (White) -> About (Black #0c0a09) */}
        <TornPaperDivider color="#000000" bgColor="#ffffff" />

        {/* SECTION 2: ABOUT */}
        <About />

        {/* Divider: About (Black #000000) -> Skills (White) */}
<TornPaperDivider image="/s1.png" />

        {/* SECTION 3: SKILLS */}
        <Skills />

        {/* Divider: Skills (White) -> Projects (Black) */}
<TornPaperDivider image="/s2.png" />

        {/* SECTION 4: PROJECTS */}
        <Projects />

        {/* Divider: Projects (Black) -> Resume (Orange #ea580c) */}
<TornPaperDivider image="/s3.png" />

        {/* SECTION 5: RESUME & PRICING PLANS */}
        <Resume />

        {/* Divider: Resume (Orange #ea580c) -> Certifications (White) */}
<TornPaperDivider image="/s4.png" />

        {/* SECTION 6: CERTIFICATIONS */}
        <Certifications />

        {/* Divider: Certifications (White) -> Contact (Black) */}
<TornPaperDivider image="/s2.png" />

        {/* SECTION 7: CONTACT MAIL-IN */}
        <Contact />

      </main>

      {/* Retro Stamp Vintage Footer */}
      <footer className="bg-black border-t-4 border-black py-16 px-4 text-center select-none relative">
        {/* Halftone back */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(240,74,35,0.06)_1.5px,transparent_1.5px)] [background-size:8px_8px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="bg-[#f04a23] rotate-[1.5deg] border-2 border-white px-5 py-2 inline-block">
            <span className="font-impact text-xl tracking-widest text-white uppercase font-black flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /> COMIC VERSE DEV • AD ISSUE 2026 ★
            </span>
          </div>

          <p className="max-w-md font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
            PRODUCED AND COMPILED BY A DIGITAL HERO UNDER STRICT CODE STANDARDS. NO BUGS WERE UNHARMED IN THE MAKING OF THIS SCRIPT. ALL RIGHTS RESERVED WORLDWIDE.
          </p>

          <span className="text-zinc-600 text-[9px] font-mono font-bold tracking-widest">
            ESTABLISHED IN SECURE CONTAINER • VIRTUAL VERSION 42.0.0
          </span>
        </div>
      </footer>

      {/* Floating Scroll Top Trigger badge */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 bg-yellow-400 text-black p-3.5 border-3 border-black rounded-lg shadow-[3px_3px_0_0_rgba(240,74,35,1)] z-[150] transition-all hover:-translate-y-0.5 active:translate-y-0"
          title="Return to title page"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
