/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECTS", id: "projects" },
    { label: "RESUME", id: "resume" },
    { label: "CERTIFICATIONS", id: "certifications" },
    { label: "CONTACT", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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

  return (
    <header className="sticky top-0 z-[100] w-full bg-black text-white border-b-3 border-black shadow-[0_4px_0_0_#f04a23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div 
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-2 group select-none"
          id="nav-logo"
        >
          <div className="bg-[#f04a23] px-3 py-1.5 border-2 border-white skew-x-[-6deg] shadow-[2px_2px_0_0_#ffffff] transition-all group-hover:skew-x-[0deg]">
            <span className="font-impact text-xl sm:text-2xl tracking-wider text-white font-extrabold flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:animate-spin" />
              YUVARAJ G
            </span>
          </div>
        </div>

        {/* Desktop Web Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-1 text-xs xl:text-sm font-sans font-bold tracking-widest transition-all hover:text-[#f04a23] cursor-pointer ${
                activeSection === item.id
                  ? "text-[#f04a23] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[3px] before:bg-[#f04a23]"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA "HIRE ME!" Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="header-hire-btn"
            onClick={() => scrollToSection("contact")}
            className="relative overflow-hidden cursor-pointer group bg-yellow-400 text-black px-5 py-2 font-impact text-lg tracking-wider border-2 border-black rounded transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(240,74,35,1)] active:translate-y-0 active:shadow-none"
          >
            <span className="relative z-10 flex items-center gap-1">
              HIRE ME! <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#f04a23] -translate-x-full group-hover:translate-x-0 transition-transform duration-200 z-0 opacity-10" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="header-hire-btn-mob"
            onClick={() => scrollToSection("contact")}
            className="sm:hidden bg-yellow-400 text-black px-3 py-1.5 font-impact text-sm tracking-wider border-2 border-black rounded"
          >
            HIRE ME
          </button>
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#f04a23] transition-colors p-1 border-2 border-dashed border-gray-600 rounded"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Slide-down / Speech-bubble style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-zinc-950 border-t-2 border-zinc-800"
          >
            <div className="px-4 py-6 space-y-3 flex flex-col items-stretch max-w-sm mx-auto">
              <span className="font-sans text-[10px] text-zinc-500 font-extrabold tracking-widest text-center uppercase">
                --- HERO SELECTOR ---
              </span>
              {navItems.map((item, idx) => (
                <motion.button
                  id={`nav-link-mobile-${item.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-3.5 text-center rounded border-2 font-impact text-lg tracking-widest relative cursor-pointer ${
                    activeSection === item.id
                      ? "bg-[#f04a23] text-white border-black shadow-[3px_3px_0_0_#ffffff]"
                      : "bg-black text-gray-300 border-zinc-800 hover:border-[#f04a23] hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-300">★</span>
                  )}
                </motion.button>
              ))}

              <div className="pt-4 text-center">
                <span className="font-sans text-[9px] text-zinc-500">
                  ESTD. © 2026 COMIC VERSE DEV
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
