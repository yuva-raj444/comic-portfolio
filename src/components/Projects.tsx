import React, { useEffect, useState } from "react";
import { Github, BookOpen, CheckCircle, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../types";
import { projectsData } from "../data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [selectedProject]);

  // Map accents to stylish vintage comic tints
  const getAccentClasses = (color: string) => {
    switch (color) {
      case "crimson":
        return {
          border: "border-[#f04a23]",
          bg: "bg-[#fff1f2]",
          text: "text-[#be123c]",
          badge: "bg-[#f04a23] text-white",
          accentLine: "bg-[#f04a23]",
        };
      case "azure":
        return {
          border: "border-sky-500",
          bg: "bg-[#f0f9ff]",
          text: "text-[#0369a1]",
          badge: "bg-sky-500 text-white",
          accentLine: "bg-sky-500",
        };
      case "emerald":
        return {
          border: "border-emerald-500",
          bg: "bg-[#f0fdf4]",
          text: "text-[#15803d]",
          badge: "bg-emerald-500 text-white",
          accentLine: "bg-emerald-500",
        };
      case "beer":
      default:
        return {
          border: "border-amber-500",
          bg: "bg-[#fffbeb]",
          text: "text-[#a16207]",
          badge: "bg-amber-500 text-black",
          accentLine: "bg-amber-500",
        };
    }
  };

  return (
    <section
      id="projects"
  className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t-8 border-black shadow-[inset_0_10px_20px_rgba(0,0,0,0.9)]"
  
      //className="relative text-black pt-12 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/paperb.png')] md:bg-[url('/paperb.png')]"
    >
      {/* Dynamic graphic background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(240,74,35,0.06)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Comic Header Banner */}
        <div className="flex flex-col items-center text-center mb-16" id="projects-header-banner">
          <div className="bg-white text-black p-4 inline-block rotate-[-1deg] border-4 border-black shadow-[6px_6px_0_0_#f04a23]">
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase font-black m-0">
              ⚡ WIDE SELECTION OF BEST WORKS ⚡
            </h2>
          </div>
          <p className="mt-4 max-w-xl font-mono text-xs sm:text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">
            -- CHOOSE AN ISSUE COVER TO TRIGGER FULL MISSION BRIEFING REPORT --
          </p>
        </div>

        {/* Comic Poster Cover Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="projects-grid">
          {projectsData.map((project, index) => {
            const style = getAccentClasses(project.accentColor);
            
            return (
              <motion.div
                id={`project-frame-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white text-black border-4 border-black p-4 shadow-[6px_6px_0_0_rgba(255,255,255,1)] flex flex-col justify-between h-[450px] relative select-none hover:shadow-[12px_12px_0_0_#f04a23] hover:-translate-y-1 transition-all duration-200"
              >
                {/* Comic Framing Header */}
                <div className="flex items-center justify-between bg-black text-white px-2 py-1 text-[9px] font-mono font-bold uppercase rounded-sm border mb-3">
                  <span className="text-yellow-300">ISSUE CODENAME</span>
                  <span className="text-[#f04a23]">VOL. #{project.volumeNumber}</span>
                </div>

                {/* Cover Image/Illustration Overlay Area */}
                <div className="relative flex-1 bg-zinc-900 border-2 border-black overflow-hidden flex flex-col justify-end p-3">
                  {/* Image itself */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-75 grayscale sepia contrast-125 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient bottom mask */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

                  {/* Overlay halftone screen */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)] [background-size:4px_4px] pointer-events-none z-10" />

                  {/* Red/Yellow vintage pricing circle stamp */}
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black border-2 border-black rounded-full w-10 h-10 flex flex-col items-center justify-center font-impact text-[9px] tracking-tight leading-none rotate-[12deg] z-20">
                    <span>99¢</span>
                    <span className="font-sans text-[6px] font-bold uppercase text-zinc-700">APPROVED</span>
                  </div>

                  {/* Inside content card info */}
                  <div className="relative z-20 text-left text-white">
                    <h4 className="font-impact text-xl sm:text-2xl text-[#f04a23] tracking-widest uppercase m-0 leading-tight drop-shadow-[2px_2px_0px_#000]">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Short comic blurb footer */}
                <div className="mt-4 text-left">
                  <p className="font-sans text-xs font-bold leading-relaxed text-zinc-700 uppercase line-clamp-2 h-8">
                    {project.description}
                  </p>
                  
                  {/* Action Link trigger */}
                  <div className="mt-3 pt-2 border-t border-zinc-200 flex justify-between items-center text-black">
                    <span className="font-mono text-[9px] font-black uppercase text-zinc-500">
                      CLICK COVER FOR DOSSIER
                    </span>
                    <BookOpen className="w-4 h-4 text-[#f04a23] group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Immersive Project Dossier Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/85 z-[200] flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain"
              id="projects-lightbox-backdrop"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                id="projects-lightbox-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white text-black border-4 border-black w-full max-w-4xl p-5 sm:p-8 shadow-[12px_12px_0_0_#f04a23] relative z-[210] rounded rotate-0 sm:rotate-[0.5deg] my-6 sm:my-0 max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-3rem)] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button top edge */}
                <button
                  id="close-lightbox-btn"
                  onClick={() => setSelectedProject(null)}
                  className="cursor-pointer absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-[#f04a23] text-white hover:bg-black font-impact text-xs sm:text-sm py-2 px-3 border-3 border-black rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase z-[220]"
                  aria-label="Close project details"
                >
                  X CLOSE
                </button>

                {/* Lightbox layouts */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column comic box */}
                  <div className="md:col-span-5 flex flex-col justify-between self-stretch bg-zinc-900 border-3 border-black p-4 relative text-white rounded">
                    
                    {/* Halftone back */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(240,74,35,0.05)_1.5px,transparent_1.5px)] [background-size:6px_6px] pointer-events-none" />

                    <div className="relative z-10 w-full aspect-[4/5] overflow-hidden border-2 border-black rounded-sm">
                      <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover contrast-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="relative z-10 mt-4 text-center">
                      <span className="font-mono text-xs text-[#f04a23] font-bold">
                        VOL. #{selectedProject.volumeNumber} REPORT
                      </span>
                      <h4 className="font-impact text-2xl tracking-widest uppercase m-0 mt-1">
                        {selectedProject.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column details */}
                  <div className="md:col-span-7 space-y-6 text-left">
                    
                    {/* Retro headline tag */}
                    <div className="border-b-2 border-dashed border-zinc-300 pb-4">
                      <span className="bg-yellow-400 border-2 border-black font-mono text-[9px] font-black px-2.5 py-1 tracking-widest uppercase inline-block rotate-[-1deg]">
                        MISSION PARAMETERS
                      </span>
                      <h3 className="font-impact text-3xl sm:text-4xl text-black tracking-wider uppercase mt-3 leading-none">
                        THE EPIC DETAILS
                      </h3>
                    </div>

                    {/* Detailed textual backstories */}
                    <p className="font-sans text-sm text-zinc-700 leading-relaxed font-semibold">
                      {selectedProject.detailedDescription}
                    </p>

                    {/* Highly stylized technical outcome block */}
                    <div className="bg-[#fffbeb] border-3 border-black p-4 relative shadow-[4px_4px_0_0_#f04a23]">
                      <span className="absolute -top-3 left-4 bg-zinc-950 text-white font-mono text-[8px] font-bold px-2 py-0.5 uppercase border border-black">
                        PROVEN OUTCOME STATUS
                      </span>
                      <div className="flex gap-2 items-start mt-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="font-sans text-xs sm:text-sm text-black font-black uppercase tracking-wide">
                          {selectedProject.keyOutcome}
                        </p>
                      </div>
                    </div>

                    {/* Technical badges */}
                    <div>
                      <span className="font-mono text-[9px] text-[#f04a23] font-extrabold tracking-widest block uppercase mb-2">
                        SPECIAL TECHNICAL ARSENAL
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-100 font-mono text-xs text-zinc-800 px-3 py-1 border-2 border-black rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links row */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      {selectedProject.links.github && (
                        <a
                          id="lightbox-github-link"
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-zinc-950 hover:bg-[#f04a23] text-white py-3 px-4 border-2 border-black rounded font-impact tracking-wider text-sm flex items-center justify-center gap-2 uppercase transition-colors"
                        >
                          <Github className="w-4 h-4" /> VIEW SOURCE CODE
                        </a>
                      )}
                      
                      {selectedProject.links.demo && (
                        <a
                          id="lightbox-demo-link"
                          href={selectedProject.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-yellow-400 hover:bg-black hover:text-white text-black py-3 px-4 border-2 border-black rounded font-impact tracking-wider text-sm flex items-center justify-center gap-2 uppercase transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none"
                        >
                          LAUNCH INTERACTIVE DEMO <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
