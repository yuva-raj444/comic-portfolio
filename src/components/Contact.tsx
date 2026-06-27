import React, { useState } from "react";
import { Send, Scissors, Mail, MapPin, Milestone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "CONTRACT / FREELANCE",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    // Simulate high-fidelity dispatch pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "CONTRACT / FREELANCE", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 1500);
  };

  return (
    <section
      id="contact"
  // className="relative text-black pt-12 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/footer.png')] md:bg-[url('/footer.png')]"

  className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t-8 border-black shadow-[inset_0_10px_20px_rgba(0,0,0,0.9)]"

    >
      {/* Background Halftone dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(240,74,35,0.06)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Scissor / Cut along lines decoration */}
        <div className="absolute top-0 inset-x-4 border-t-3 border-dashed border-zinc-700 h-1 flex items-center justify-between select-none opacity-80 z-20 pointer-events-none">
          <span className="bg-zinc-950 text-zinc-500 font-mono text-[9px] px-2 block -mt-0.5 tracking-wider font-bold">
            -- CUT ALONG THE DOTTED LINES --
          </span>
          <Scissors className="w-5 h-5 text-zinc-500 rotate-[45deg] -mt-2.5 bg-zinc-950 px-0.5 shrink-0" />
        </div>

        {/* Vintage Coupon header layout */}
        <div className="flex flex-col items-center text-center mt-8 mb-16" id="contact-header">
          <div className="bg-[#f04a23] text-white p-4 inline-block rotate-[-1deg] border-4 border-black shadow-[5px_5px_0_0_#ffffff]">
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase font-black m-0">
              ⚡ MAIL-IN CODES COUPON ⚡
            </h2>
          </div>
          <p className="mt-4 max-w-xl font-mono text-xs sm:text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">
            -- SUBMIT MISSION CONTRACT DIRECTLY TO THE MAIN ENGINE --
          </p>
        </div>

        {/* Two Columns details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-panel-structure">
          
          {/* Column Left: Speech cartoon detail or address */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 select-none">
            
            {/* Speeches Balloon from developer */}
            <div className="bg-yellow-300 text-black p-5 sm:p-6 border-3 border-black rounded relative rotate-[-1.5deg] shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
              {/* Right tail of speech bubble */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-black hidden lg:block" />
              <div className="absolute top-1/2 -right-[11px] -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[11px] border-l-yellow-300 hidden lg:block" />
              
              {/* Bottom tail on mobile */}
              <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-black lg:hidden" />
              <div className="absolute -bottom-[11px] left-[11px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[11px] border-t-yellow-300 lg:hidden" />

              <span className="font-mono text-[9px] text-[#f04a23] font-black uppercase tracking-widest block mb-1">
                MESSAGE CARRIER LOGS
              </span>
              <p className="font-sans text-xs sm:text-sm font-semibold leading-relaxed m-0 text-zinc-800">
                "Drop your server parameters, client constraints, or technical contract details! My communication frequencies are open. Let's build something epic!"
              </p>
            </div>

            {/* Address specs box */}
            <div className="border-3 border-[#f04a23] p-5 bg-zinc-900 rounded space-y-4 text-left">
              <span className="font-mono text-[9px] bg-[#f04a23] text-white px-2 py-0.5 rounded uppercase font-bold tracking-widest">
                STATION COORDINATES
              </span>

              <div className="space-y-3.5 pt-2">
                <div className="flex gap-3 items-center">
                  <MapPin className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span className="font-mono text-xs text-zinc-300 uppercase tracking-widest">
                    LOCATION: CHENNAI, INDIA
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span className="font-mono text-xs text-zinc-300 select-all">
                    EMAIL: gyuvaraj444@gmail.com
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Milestone className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    DECODER COMPILER ACTIVE
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Column Right: Polaroid Paper Mail-in Coupon Form! */}
          <div className="lg:col-span-8 bg-white text-black border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_0_#f04a23] relative rounded rotate-[0.5deg]">
            
            <form onSubmit={handleSubmit} className="space-y-5" id="mail-in-coupon-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="text-left">
                  <label htmlFor="name-input" className="font-mono text-[10px] text-zinc-500 font-extrabold uppercase block tracking-wider mb-1">
                    INTEGRATION CODENAME (YOUR NAME) *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g. AGENT STARK..."
                    className="w-full bg-[#fffff8] border-2 border-black p-3 font-sans font-bold text-xs uppercase text-zinc-800 placeholder-zinc-400 rounded focus:bg-yellow-50 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="text-left">
                  <label htmlFor="email-input" className="font-mono text-[10px] text-zinc-500 font-extrabold uppercase block tracking-wider mb-1">
                    YOUR COORDINATES (EMAIL) *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E.g. STARK@MAIN FRAME..."
                    className="w-full bg-[#fffff8] border-2 border-black p-3 font-sans font-bold text-xs text-zinc-800 placeholder-zinc-400 rounded focus:bg-yellow-50 outline-none"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="text-left">
                <label htmlFor="subject-select" className="font-mono text-[10px] text-zinc-500 font-extrabold uppercase block tracking-wider mb-1">
                  CONTRACT CLASSIFICATION
                </label>
                <div className="relative">
                  <select
                    id="subject-select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#fffff8] border-2 border-black p-3 font-mono font-bold text-xs text-zinc-800 rounded outline-none appearance-none cursor-pointer"
                  >
                    <option value="CONTRACT / FREELANCE">CONTRACT / FREELANCE SPRINT</option>
                    <option value="FULL-TIME HIRE">FULL-TIME TEAM RECRUITMENT</option>
                    <option value="TECHNICAL ADVISORY">TECHNICAL ADVISORY REVIEW</option>
                    <option value="JUST SAYING POW!">JUST HELLO (SAY POW!)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none font-sans font-black text-xs text-[#f04a23]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="text-left">
                <label htmlFor="message-textbox" className="font-mono text-[10px] text-zinc-500 font-extrabold uppercase block tracking-wider mb-1">
                  MISSION CONTRACT SPECIFICATIONS (MESSAGE) *
                </label>
                <textarea
                  id="message-textbox"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="CLASSIFIED SPECIFICATIONS OR DETAILS..."
                  className="w-full bg-[#fffff8] border-2 border-black p-3 font-sans font-bold text-xs uppercase text-zinc-800 placeholder-zinc-400 rounded focus:bg-yellow-50 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="coupon-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f04a23] hover:bg-black text-white py-3.5 px-6 font-impact text-lg md:text-xl tracking-wider rounded border-3 border-black uppercase cursor-pointer flex items-center justify-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? "animate-ping" : ""}`} />
                  {isSubmitting ? "TRANSMITTING TELEMETRY..." : "SEND COUPON DISPATCH! (KAPOW!)"}
                </button>
              </div>

            </form>

            {/* Submit status modals */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  id="submit-success-banner"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="absolute inset-0 bg-white border-4 border-black p-6 flex flex-col items-center justify-center text-center z-30"
                >
                  <div className="bg-yellow-300 border-3 border-black p-5 rotate-[-2deg] shadow-[4px_4px_0_0_rgba(240,74,35,1)] max-w-sm mb-4">
                    <span className="font-impact text-4xl sm:text-5xl text-black block tracking-widest uppercase leading-none mb-2 select-none animate-bounce">
                      ★ TRANSMITTED! ★
                    </span>
                    <span className="font-mono text-xs font-black text-black block bg-white border border-black rounded px-2.5 py-1 uppercase mt-1">
                      COORDINATES CONVERGED!
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-700 font-bold max-w-md uppercase leading-relaxed">
                    KAPOW! Your coupon message dispatcher has fired successfully into our communication array logs. Throttlers reinserted. The developer hero will respond shortly!
                  </p>
                  <button
                    id="success-dismiss-btn"
                    onClick={() => setSubmitStatus("idle")}
                    className="cursor-pointer mt-6 bg-zinc-950 text-white font-impact tracking-wider px-6 py-2 border-2 border-black rounded hover:bg-[#f04a23] text-xs uppercase"
                  >
                    SEND ANOTHER COUPON
                  </button>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  id="submit-error-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 right-6 left-6 bg-red-100 border-2 border-red-600 p-3 rounded z-30 flex items-center justify-center gap-2 text-red-800 text-xs font-sans font-bold uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                >
                  <span>⚠️ CORE CALIBRATION ERRORS! FILL IN ALL REQUIRED FIELD COORDINATES ABOVE!</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
