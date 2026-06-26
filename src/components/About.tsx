import React, { useState } from "react";
import { User, Shield, Terminal, Zap, ShieldAlert, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { characterStats } from "../data";

export default function About() {
  const [level, setLevel] = useState(characterStats.level);
  const [exp, setExp] = useState(8000);
  const [showLevelUpAlert, setShowLevelUpAlert] = useState("");
  const [soundEffects, setSoundEffects] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  const statDetails = characterStats.stats;

  const handleStatClick = (statName: string, e: React.MouseEvent<HTMLButtonElement>) => {
    // Spawn floating comic sound effect word at cursor click coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const comicWords = ["POW!", "ZAP!", "SLAM!", "BOOM!", "UPGRADED!", "PING!", "MAXED!"];
    const randomWord = comicWords[Math.floor(Math.random() * comicWords.length)];

    const id = Date.now();
    setSoundEffects((prev) => [...prev, { id, text: randomWord, x, y }]);
    setTimeout(() => {
      setSoundEffects((prev) => prev.filter((item) => item.id !== id));
    }, 1000);

    // Pop up state explanation
    setShowLevelUpAlert(`UPGRADING ${statName}... BUT COMPILING CONTINUES!`);
    setTimeout(() => setShowLevelUpAlert(""), 4000);
  };

  const trainLevel = () => {
    if (exp >= 10000) return;
    setExp((prev) => Math.min(prev + 500, 10000));
    if (exp + 500 >= 10000) {
      setLevel((prev) => prev + 1);
      setShowLevelUpAlert("LEVEL UP! NEW HERO SUPERPOWERS UNLOCKED!");
      setTimeout(() => setShowLevelUpAlert(""), 4000);
    } else {
      setShowLevelUpAlert("+500 EXP! KEEP LEARNING AND BUILDING!");
      setTimeout(() => setShowLevelUpAlert(""), 3000);
    }
  };

  return (
    <section
      id="about"
      className="relative bg-zinc-950 text-white py-20 overflow-hidden border-t-8 border-black shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]"
    >
      {/* Halftone / Comic Dot Overlay for background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(240,74,35,0.08)_1.5px,transparent_1.5px)] [background-size:10px_10px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading with Comic banner style */}
        <div className="flex flex-col items-center mb-16 text-center" id="about-heading">
          <div className="bg-black border-3 border-white p-4 inline-block rotate-[1deg] shadow-[4px_4px_0_0_#f04a23]">
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase text-white font-extrabold m-0">
              ⚡ HERO GENESIS & STATS ⚡
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-mono text-xs sm:text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">
            -- CLASSIFIED PROFILE CODE • READ ENTIRE SHEET CAREFULLY --
          </p>
        </div>

        {/* 2-Column Grid: Character Card Polaroid and Interactive Stat Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-content">
          
          {/* Column Left: Polaroid Pic & Character Bio */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Taped Polaroid Picture */}
            <div className="relative w-full max-w-[340px] bg-white text-black p-4 pb-12 border-4 border-black rotate-[-3deg] shadow-[10px_10px_0_0_rgba(240,74,35,1)] transition-transform hover:rotate-0 hover:scale-103 duration-300">
              
              {/* Retro Black Tape on Corner 1 */}
              <div className="absolute -top-4 -left-6 w-20 h-8 bg-zinc-900/90 border border-zinc-800 rotate-[-35deg] opacity-90 shadow-sm z-20 select-none flex items-center justify-center font-mono text-[7px] text-zinc-400">
                // SECURE_ID
              </div>

              {/* Retro Black Tape on Corner 2 */}
              <div className="absolute -top-3 -right-6 w-16 h-7 bg-zinc-900/95 border border-zinc-800 rotate-[40deg] opacity-90 shadow-sm z-20 select-none" />

              {/* Polaroid Image Area */}
              <div className="relative aspect-square w-full bg-[#111] overflow-hidden border-2 border-black flex items-center justify-center">
                <img
                  src="/mine.png"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover grayscale brightness-125 sepia hover:grayscale-0 hover:sepia-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual scanner overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:4px_4px] pointer-events-none" />
              </div>

              {/* Bottom handwriting caption */}
              <div className="mt-5 text-center px-2">
                <h4 className="font-impact text-2xl tracking-widest uppercase text-[#f04a23]">
                  {characterStats.characterName}
                </h4>
                <p className="font-mono text-[10px] uppercase font-black text-zinc-500 mt-1 leading-none tracking-widest">
                  {characterStats.class}
                </p>
              </div>
            </div>

            {/* Narrative Character Bio bubble */}
            <div className="mt-12 w-full border-3 border-dashed border-[#f04a23] p-5 bg-zinc-900 rounded relative">
              <span className="absolute -top-3 left-4 bg-[#f04a23] text-white text-[10px] px-2.5 py-0.5 font-mono font-bold uppercase rounded">
                GENESIS DOSSIER
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed pt-2">
                I am a Computer Science Engineering student passionate about software development and artificial intelligence. I build real-world applications using Python, Flask, and AI tools like Gemini and Vertex AI, focusing on solving practical problems through intelligent systems. With a solid foundation in data structures, algorithms, and system design, I continuously improve my technical and problem-solving skills.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-zinc-800 text-zinc-300 font-mono text-[10px] px-2.5 py-1 rounded border border-zinc-700">
                  ALIGNMENT: {characterStats.alignment}
                </span>
                <span className="bg-zinc-800 text-zinc-300 font-mono text-[10px] px-2.5 py-1 rounded border border-zinc-700">
                  GOAL: IMPACTFUL SCALABLE SOLUTIONS
                </span>
              </div>
            </div>
          </div>

          {/* Column Right: Interactive Leveling Stat Sheet */}
          <div className="lg:col-span-7 bg-zinc-900 border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#ffffff] relative rotate-[1deg]">
            
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-dashed border-zinc-700 pb-5 mb-6 gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#f04a23] font-bold tracking-widest uppercase block">
                  CHARACTER SPECS
                </span>
                <h3 className="font-impact text-3xl tracking-widest uppercase text-white m-0">
                  LEVEL {level} SPELLCASTER
                </h3>
              </div>

              {/* Interactive Training / EXP Button */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="font-mono text-[9px] text-zinc-400 block font-bold">
                    EXP TRACKER
                  </span>
                  <span className="font-mono text-xs font-bold text-yellow-400 block">
                    {exp} / 10000 EXP
                  </span>
                </div>
                <button
                  id="about-train-btn"
                  onClick={trainLevel}
                  className="cursor-pointer bg-yellow-400 hover:bg-[#f04a23] hover:text-white text-black font-impact text-sm py-2 px-4 rounded border-2 border-black tracking-widest uppercase transition-colors"
                >
                  ⚡ STUDY CODEX (+EXP)
                </button>
              </div>
            </div>

            {/* Custom Interactive Notification overlay */}
            <AnimatePresence>
              {showLevelUpAlert && (
                <motion.div
                  id="level-up-toast"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-26 left-6 right-6 bg-[#f04a23] text-white border-2 border-black p-3 rounded z-30 font-sans font-bold text-xs uppercase tracking-wider text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center gap-2"
                >
                  <Award className="w-5 h-5 text-yellow-300 animate-bounce" />
                  {showLevelUpAlert}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core Stats Progress Bars */}
            <div className="space-y-6">
              {statDetails.map((stat) => (
                <div key={stat.name} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans font-black text-sm tracking-widest text-zinc-300 uppercase flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-[#f04a23]" />
                      {stat.name}
                    </span>
                    <span className="font-impact text-lg text-yellow-400 italic tracking-wider">
                      {stat.rating} ({stat.score}%)
                    </span>
                  </div>

                  {/* Progressive Meter box */}
                  <div className="relative h-6 bg-black border-2 border-zinc-700 p-0.5 rounded overflow-hidden flex items-stretch">
                    <div
                      className={`h-full transition-all duration-500 rounded-sm relative ${stat.color}`}
                      style={{ width: `${stat.score}%` }}
                    >
                      {/* Internal shiny highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />
                    </div>
                    {/* Halftone look */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:4px_4px] pointer-events-none" />

                    {/* Quick interactive tap trigger overlay */}
                    <button
                      id={`stat-tap-${stat.name.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={(e) => handleStatClick(stat.name, e)}
                      className="absolute inset-0 w-full text-left cursor-help z-10 opacity-0"
                      title="Tap to verify stat"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* floating sound-effects portal */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded">
              {soundEffects.map((item) => (
                <span
                  key={item.id}
                  className="absolute bg-yellow-300 text-black font-impact text-xl px-2.5 py-1.5 border-2 border-black rotate-[-12deg] z-40 select-none shadow-[2px_2px_0_0_#f04a23] animate-bounce"
                  style={{ left: item.x, top: item.y }}
                >
                  {item.text}
                </span>
              ))}
            </div>

            <div className="mt-8 text-right">
              <span className="font-mono text-[9px] text-zinc-500 uppercase font-black">
                * Note: Stat metrics verified via production feedback loops.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
