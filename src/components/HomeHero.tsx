import React from "react";
import { Sparkles, Terminal, ShieldAlert, MonitorPlay } from "lucide-react";
import { motion } from "motion/react";

interface HomeHeroProps {
  onLearnMoreClick: (id: string) => void;
}

export default function HomeHero({ onLearnMoreClick }: HomeHeroProps) {
  // Static layout representing custom fictional comic books that reflect developer expertise
  const heroComics = [
    {
      id: "hc1",
      title: "DIAGNOSE ME",
      vol: "Vol. #01",
      badge: "HOT RELEASE",
      desc: "AI-POWERED HEALTH DIAGNOSIS WITH SMART SUGGESTIONS",
      tech: "NEXT.JS • API • GEMINI",
      bgColor: "bg-gradient-to-br from-rose-500 to-[#f04a23]",
      textColor: "text-amber-100",
      imageSeed: "pixels",
      tilt: "-6deg",
      hoverTilt: "-2deg",
    },
    {
      id: "hc2",
      title: "AI LEGAL ASSISTANT",
      vol: "Vol. #02",
      badge: "SECRET FILE",
      desc: "MULTILINGUAL RAG LEGAL SUPPORT WITH PDF DRAFTS",
      tech: "FASTAPI • PYTHON • RAG",
      bgColor: "bg-gradient-to-br from-[#1e1b4b] to-[#4338ca]",
      textColor: "text-indigo-100",
      imageSeed: "gateway",
      tilt: "3deg",
      hoverTilt: "0deg",
    },
    {
      id: "hc3",
      title: "INTRUX",
      vol: "Vol. #04",
      badge: "ENTERPRISE",
      desc: "REAL-TIME INTRUSION DETECTION USING COMPUTER VISION",
      tech: "OPENCV • MEDIAPIPE • PYTHON",
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-800",
      textColor: "text-emerald-50",
      imageSeed: "cloudtitan",
      tilt: "-2deg",
      hoverTilt: "1deg",
    },
  ];

  return (

    <section
  id="home"
  className="relative text-black pt-12 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bgmob.jpg')] md:bg-[url('/bg.jpg')]"
>


      {/* Hero Outer Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Dynamic Sub-header sticker */}
        <div className="flex justify-start mb-6" id="hero-stamp">
          <div className="bg-black text-yellow-300 text-[10px] md:text-xs font-sans font-extrabold tracking-widest px-4 py-1.5 rounded-sm uppercase inline-flex items-center gap-1.5 border-2 border-black rotate-[-2deg] shadow-[3px_3px_0_0_#f04a23]">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            VINTAGE ISSUE NO. 2026 EDITION
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Huge Condensed Headings Left */}
          <div className="lg:col-span-8 flex flex-col pt-2" id="hero-headings">
            <h1 className="font-impact text-5xl sm:text-7xl md:text-9xl tracking-tight leading-[0.9] md:leading-[0.85] text-[#f04a23] uppercase font-black select-none drop-shadow-[5px_5px_0px_#000000]">
              SOFTWARE
              <br />
              <span className="text-black drop-shadow-[5px_5px_0px_#f04a23]">ENGINEER</span>
              <br />
              BUILDING THE FUTURE
            </h1>
          </div>

          {/* Description Block Right */}
          <div className="lg:col-span-4 lg:pt-10" id="hero-desc">
            <div className="border-3 border-black p-5 sm:p-6 bg-[#fffbeb] relative shadow-[6px_6px_0px_2px_#000000] rotate-[-1deg]">
              {/* Retro Pushpin/tape element at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-100 border border-yellow-200 opacity-60 skew-x-12 select-none" />
              
              <p className="font-sans text-xs md:text-sm text-gray-800 leading-relaxed font-semibold">
                Passionate about creating elegant solutions to complex problems. Specialized in React, TypeScript, Python, Flask, and modern AI-powered web technologies.
              </p>
              
              <div className="mt-5 flex gap-3">
                <button
                  id="hero-see-projects"
                  onClick={() => onLearnMoreClick("projects")}
                  className="cursor-pointer flex-1 bg-black text-white hover:bg-[#f04a23] font-impact text-sm md:text-base py-2.5 px-4 tracking-widest border-2 border-black text-center uppercase transition-all"
                >
                  SEE MY WORK
                </button>
                <button
                  id="hero-character-sheet"
                  onClick={() => onLearnMoreClick("about")}
                  className="cursor-pointer flex-1 bg-white hover:bg-zinc-100 text-black font-sans font-bold text-xs py-2.5 px-4 border-2 border-black text-center uppercase tracking-wider transition-all"
                >
                  STATS SHEET
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Offset Stacked Comic Covers Section (Row of Projects as high-fidelity comic books) */}
        <div className="mt-20 lg:mt-24" id="hero-stacked-comics">
          <div className="text-center md:text-left mb-8">
            <h3
  className="
    inline-block
    bg-[#f04a23]
    px-5
    py-1
    font-impact
    text-white
    text-3xl
    sm:text-5xl
    uppercase
    tracking-tight
    shadow-[10px_10px_0px_#000]
  "
>
  ★ HOT FEATURED ISSUES ★
</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-sm sm:max-w-none mx-auto">
            {heroComics.map((comic) => (
              <motion.div
                id={`hero-comic-${comic.id}`}
                key={comic.id}
                whileHover={{
                  scale: 1.05,
                  rotate: "0deg",
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                style={{ rotate: comic.tilt }}
                className="relative cursor-pointer bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#000000] flex flex-col h-[400px] select-none justify-between transition-shadow hover:shadow-[12px_12px_0_0_#f04a23]"
                onClick={() => onLearnMoreClick("projects")}
              >
                {/* Comic Cover Header Banner */}
                <div className="flex justify-between items-center bg-black text-white text-[10px] font-sans font-black px-2.5 py-1 uppercase rounded-sm border border-black mb-2">
                  <span className="text-yellow-400">{comic.badge}</span>
                  <span className="text-[#f04a23]">{comic.vol}</span>
                </div>

                {/* Primary Panel Illustration Area */}
                <div className={`relative flex-1 ${comic.bgColor} border-2 border-black overflow-hidden flex items-center justify-center p-4`}>
                  
                  {/* Comic Halftone Dot Effect Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:6px_6px] pointer-events-none" />

                  {/* Dynamic Visual representation */}
                  <div className="relative text-center z-10 flex flex-col items-center">
                    {comic.id === "hc1" && <MonitorPlay className="w-16 h-16 text-yellow-300 drop-shadow-[3px_3px_0px_#000]" />}
                    {comic.id === "hc2" && <Terminal className="w-16 h-16 text-indigo-200 drop-shadow-[3px_3px_0px_#000]" />}
                    {comic.id === "hc3" && <ShieldAlert className="w-16 h-16 text-emerald-200 drop-shadow-[3px_3px_0px_#000]" />}
                    
                    <h4 className="font-impact text-2xl md:text-3xl text-white tracking-widest uppercase mt-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.85)] leading-none text-center">
                      {comic.title}
                    </h4>
                  </div>

                  {/* Corner Code Pricing Sticker */}
                  <div className="absolute top-2 right-2 bg-yellow-400 border-2 border-black rotate-[15deg] px-1.5 py-0.5 text-center font-impact text-[9px] text-black">
                    $0.42 <br /> <span className="text-[7px] font-sans font-bold uppercase">APPROVED</span>
                  </div>
                </div>

                {/* Comic Description/Issue Footer */}
                <div className="mt-3 text-left">
                  <span className="font-mono text-[9px] font-black text-gray-500 tracking-wider">
                    {comic.tech}
                  </span>
                  <p className="font-sans text-xs font-bold leading-tight uppercase text-black line-clamp-2 mt-1">
                    {comic.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
