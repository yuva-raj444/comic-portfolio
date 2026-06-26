import React, { useState } from "react";
import { Sparkles, Terminal, Layers, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkillItem } from "../types";
import { skillsData } from "../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "devops" | "design">("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { label: "ALL", value: "all" },
    { label: "PROGRAMMING LANGUAGES", value: "frontend" },
    { label: "WEB TECHNOLOGIES", value: "backend" },
    { label: "TOOLS & TECHNOLOGIES", value: "devops" },
    { label: "CORE CONCEPTS", value: "design" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative bg-white text-black py-20 overflow-hidden"
    >
      {/* Blueprint grid background for a tech feel */}
      <div className="absolute inset-0 bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

      {/* Decorative large comic bubble background text */}
      <div className="absolute -right-24 top-1/4 select-none pointer-events-none opacity-5 rotate-12 hidden lg:block">
        <span className="font-impact text-[200px] text-[#f04a23]">ZAP!</span>
      </div>
      <div className="absolute -left-20 bottom-10 select-none pointer-events-none opacity-5 -rotate-12 hidden lg:block">
        <span className="font-impact text-[180px] text-yellow-400">POW!</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" id="skills-title-row">
          <div>
            <div className="bg-yellow-400 border-3 border-black px-4 py-1.5 inline-block rotate-[-1deg] mb-3 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              <span className="font-impact text-sm tracking-widest uppercase font-black text-black">
                ★ TECHNICAL WEAPONRY ★
              </span>
            </div>
            <h2 className="font-impact text-5xl sm:text-6xl text-black tracking-tight uppercase leading-[0.95] m-0">
              WIDE SELECTION <br />
              <span className="text-[#f04a23]">OF MASTERED SKILLS</span>
            </h2>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex flex-wrap gap-2 max-w-xl md:justify-end" id="skills-filters">
            {categories.map((cat) => (
              <button
                id={`filter-btn-${cat.value}`}
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`cursor-pointer px-3 py-2 font-mono text-[10px] sm:text-xs font-black tracking-wider border-2 border-black rounded transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#f04a23] text-white shadow-[3px_3px_0_0_#000000] -translate-y-0.5"
                    : "bg-white text-zinc-800 hover:bg-zinc-50 hover:shadow-[1px_1px_0_0_#000000]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Stickers & Badges Grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          id="skills-stickers-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.id;

              return (
                <motion.div
                  id={`skill-card-${skill.id}`}
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.22, delay: index * 0.02 }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative p-5 border-3 border-black bg-white rounded shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col justify-between h-40 select-none overflow-hidden cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#f04a23]`}
                >
                  {/* Floating Comic Sound Effect Overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        id={`skill-effect-${skill.id}`}
                        initial={{ scale: 0, rotate: -20, y: 15 }}
                        animate={{ scale: 1.1, rotate: -10, y: 0 }}
                        exit={{ scale: 0, rotate: -20 }}
                        className="absolute top-2 right-2 bg-yellow-300 text-black font-impact text-xs px-2.5 py-1.5 border-2 border-black rotate-[-12deg] z-20 shadow-[2px_2px_0_0_rgba(240,74,35,1)]"
                      >
                        {skill.soundEffect}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icon & Category Indicator */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {skill.category === "frontend" && <Globe className="w-4 h-4 text-sky-600" />}
                      {skill.category === "backend" && <Terminal className="w-4 h-4 text-emerald-600" />}
                      {skill.category === "devops" && <Layers className="w-4 h-4 text-indigo-600" />}
                      {skill.category === "design" && <Sparkles className="w-4 h-4 text-pink-600" />}
                      
                      <span className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Skill Title */}
                  <div className="my-2 text-left">
                    <h4 className="font-impact text-xl sm:text-2xl text-black leading-snug tracking-wider uppercase">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Rating Meter */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[9px] font-black uppercase text-zinc-500">POWER RANGE</span>
                      <span className="font-sans font-black text-[11px] text-zinc-700">{skill.level}%</span>
                    </div>
                    {/* Retro segments container */}
                    <div className="h-3 bg-zinc-100 border-2 border-black rounded-sm overflow-hidden flex items-stretch">
                      {/* Active power bars */}
                      <div
                        className="bg-[#f04a23]"
                        style={{ width: `${skill.level}%` }}
                      />
                      {/* Halftone looks */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:3px_3px] pointer-events-none" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Graphic Footer Box styled as a comic note block */}
        <div className="mt-16 bg-[#faf5ff] border-3 border-black p-5 relative shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center max-w-2xl mx-auto rotate-[0.5deg]" id="skills-info-footer">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white font-mono text-[9px] px-3 py-1 font-black uppercase border-2 border-black">
            TECHNOLOGIES & TOOLS I WORK WITH
          </span>
          <p className="font-sans text-xs sm:text-sm text-zinc-800 font-semibold leading-relaxed m-0 pt-1">
            Python, Java, C Programming, JavaScript, HTML5, CSS3, OpenCV, MediaPipe, NumPy, Pandas, Matplotlib, Scikit-learn, Git, GitHub, VS Code, PyCharm, Jupyter, Linux, Flask, SQLite, MySQL, REST APIs, JSON, problem solving, debugging, optimization, and system design.
          </p>
        </div>
      </div>
    </section>
  );
}
