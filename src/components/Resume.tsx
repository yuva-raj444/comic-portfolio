/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FileDown, GraduationCap, Briefcase } from "lucide-react";
import { experienceData } from "../data";

export default function Resume() {
  const triggerDownloadResume = () => {
    alert("Resume download action is ready. Add your actual resume URL/file to wire this button.");
  };

  return (
    <section
      id="resume"
      className="relative bg-orange-600 text-white py-24 overflow-hidden"
    >
      {/* Halftone Dot texture for solid orange backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:10px_10px] pointer-events-none" />

      {/* Retro comic speech outline text */}
      <div className="absolute left-10 top-10 select-none pointer-events-none opacity-5 -skew-y-3 font-impact text-[140px] text-white">
        BOOM!
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="text-center mb-16" id="resume-plans-header">
          <div className="bg-black text-white p-4 inline-block rotate-[1deg] border-4 border-black shadow-[5px_5px_0_0_#ffffff]">
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase font-black m-0">
              ⚡ EDUCATION & EXPERIENCE ⚡
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto font-mono text-xs sm:text-sm text-yellow-300 uppercase tracking-widest leading-relaxed">
            -- ACADEMIC JOURNEY, INTERNSHIP, AND REAL-WORLD AI PROJECT EXPERIENCE --
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16" id="resume-plans-grid">
          <div className="bg-white text-black border-4 border-black p-6 rounded shadow-[8px_8px_0_0_#000000]">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#f04a23]" />
              <h3 className="font-impact text-3xl tracking-wider uppercase m-0">Education</h3>
            </div>
            <p className="font-impact text-xl uppercase text-black m-0">B.E Computer Science Engineering</p>
            <p className="font-mono text-xs text-zinc-700 uppercase mt-1">2023 - 2027</p>
            <p className="font-sans text-sm text-zinc-800 font-semibold mt-4">
              Vel Tech Rangarajan Dr. Sakunthala Engineering College
            </p>
            <ul className="mt-4 space-y-2 text-left">
              <li className="font-sans text-xs font-bold uppercase text-zinc-800">CGPA: 8.0</li>
              <li className="font-sans text-xs font-bold uppercase text-zinc-800">Focused on AI, DSA, and System Design</li>
              <li className="font-sans text-xs font-bold uppercase text-zinc-800">Built multiple real-world projects</li>
            </ul>
          </div>

          <div className="bg-zinc-950 text-white border-4 border-black p-6 rounded shadow-[8px_8px_0_0_#ffffff]">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-yellow-300" />
              <h3 className="font-impact text-3xl tracking-wider uppercase m-0">Resume</h3>
            </div>
            <p className="font-sans text-sm text-zinc-200 font-semibold leading-relaxed">
              Download my resume to explore my skills, projects, and experience in AI, software development, and real-world problem solving.
            </p>
            <button
              id="download-resume-pdf-btn"
              onClick={triggerDownloadResume}
              className="cursor-pointer mt-6 bg-yellow-400 hover:bg-white text-black px-5 py-3 border-3 border-black text-sm font-impact tracking-widest uppercase flex items-center gap-2 rounded shadow-[3px_3px_0_0_#000]"
            >
              <FileDown className="w-4 h-4" /> DOWNLOAD RESUME
            </button>
          </div>
        </div>

        <div className="mt-20 border-t-4 border-dashed border-white/60 pt-20" id="resume-timeline-block">

          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 select-none">
            <div className="text-center sm:text-left">
              <h3 className="font-impact text-3xl sm:text-4xl text-white tracking-widest uppercase m-0">
                ★ EXPERIENCE TIMELINE ★
              </h3>
              <p className="font-mono text-xs text-yellow-300 uppercase tracking-widest mt-1">
                Python internship, AI projects, and continuous engineering growth
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="experience-panel-deck">
            {experienceData.map((job, idx) => (
              <div
                id={`job-milestone-${job.id}`}
                key={job.id}
                className="bg-zinc-950 text-white border-4 border-black p-6 rounded relative shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col justify-between rotate-[-0.5deg]"
              >
                {/* Panel indicator */}
                <span className="absolute -top-3.5 left-6 bg-black border border-zinc-700 text-yellow-400 font-mono text-[9px] font-black px-2.5 py-1 uppercase rounded-sm">
                  PANEL #{idx + 1} • {job.period}
                </span>

                <div>
                  {/* Job Head */}
                  <div className="border-b border-zinc-800 pb-4 mb-4 mt-2">
                    <span className="font-mono text-[9px] text-[#f04a23] font-bold block uppercase tracking-wider">
                      {job.company}
                    </span>
                    <h4 className="font-impact text-xl tracking-wider text-white uppercase leading-snug m-0">
                      {job.role}
                    </h4>
                  </div>

                  {/* Bullet points listed inside a lined panel */}
                  <ul className="space-y-3.5 text-left mb-6">
                    {job.description.map((bullet) => (
                      <li key={bullet} className="text-zinc-300 font-sans text-xs leading-relaxed font-semibold uppercase">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-300 text-black p-3.5 border-3 border-black rounded relative mt-4">
                  <div className="absolute -top-3 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-black" />
                  <div className="absolute -top-[7px] left-[7px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[7px] border-b-yellow-300" />
                  
                  <span className="font-mono text-[8px] text-[#f04a23] block font-black uppercase mb-1">
                    HEROIC QUOTE IN BATTLE:
                  </span>
                  <p className="font-impact text-[13px] tracking-wide uppercase italic leading-tight text-black">
                    "{job.heroQuote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
