import React from "react";
import { Award, ShieldAlert, BadgeCheck, FileCheck } from "lucide-react";
import { certificationsData } from "../data";

export default function Certifications() {
  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "gold":
        return {
          iconColor: "text-amber-500 fill-amber-100",
          border: "border-amber-400 shadow-[4px_4px_0_0_rgba(245,158,11,1)]",
          pill: "bg-amber-100 text-amber-800 border-amber-300",
        };
      case "red":
        return {
          iconColor: "text-rose-600 fill-rose-100",
          border: "border-rose-500 shadow-[4px_4px_0_0_rgba(240,74,35,1)]",
          pill: "bg-rose-100 text-rose-800 border-rose-300",
        };
      case "silver":
        return {
          iconColor: "text-slate-400 fill-slate-50",
          border: "border-slate-400 shadow-[4px_4px_0_0_rgba(148,163,184,1)]",
          pill: "bg-slate-100 text-slate-800 border-slate-300",
        };
      case "bronze":
      default:
        return {
          iconColor: "text-orange-700 fill-amber-50",
          border: "border-orange-600 shadow-[4px_4px_0_0_rgba(194,65,12,1)]",
          pill: "bg-orange-50 text-orange-900 border-orange-200",
        };
    }
  };

  return (
    <section
      id="certifications"
      className="relative bg-white text-black py-20 overflow-hidden"
    >
      {/* Blueprint background grid for layout elegance */}
      <div className="absolute inset-0 bg-[#fbfbfb] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Title Heading */}
        <div className="flex flex-col items-center text-center mb-16" id="certs-header">
          <div className="bg-zinc-950 text-white p-4 inline-block rotate-[-1deg] border-4 border-black shadow-[4px_4px_0_0_rgba(240,74,35,1)]">
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase font-black m-0">
              🛡️ VERIFIED HEROIC LICENSES 🛡️
            </h2>
          </div>
          <p className="mt-4 max-w-xl font-mono text-xs sm:text-sm text-zinc-500 uppercase tracking-widest leading-relaxed">
            -- CLASS A CREDENTIALS RECORDED BY OUTSIDE COMPLIANCE BOARD --
          </p>
        </div>

        {/* Credentials Grid layout */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          id="certifications-deck"
        >
          {certificationsData.map((cert) => {
            const styles = getBadgeStyles(cert.badgeType);

            return (
              <div
                id={`cert-card-${cert.id}`}
                key={cert.id}
                className={`bg-white border-3 border-black p-5 rounded relative flex flex-col justify-between h-56 select-none transition-all duration-150 hover:-translate-y-1 ${styles.border}`}
              >
                {/* Stamp Seal Logo right top */}
                <div className="absolute top-4 right-4">
                  <BadgeCheck className={`w-10 h-10 ${styles.iconColor}`} />
                </div>

                {/* Cert Content details */}
                <div className="text-left mt-2">
                  <span className="font-mono text-[9px] text-[#f04a23] font-bold block uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  
                  <h4 className="font-impact text-xl tracking-wide uppercase text-black leading-tight mt-1 mb-2 pr-8">
                    {cert.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="font-mono text-[8px] font-black border border-zinc-200 bg-zinc-50 px-2 py-0.5 rounded uppercase block">
                      APPROVED DATE: {cert.date}
                    </span>
                  </div>
                </div>

                {/* Verification/Credential Link code bottom */}
                <div className="pt-4 border-t border-dashed border-zinc-200 flex items-center justify-between">
                  <div className="text-left">
                    <span className="font-mono text-[8px] text-zinc-400 font-bold block">
                      VERIFICATION ID:
                    </span>
                    <span className="font-mono text-[10px] text-zinc-700 font-extrabold tracking-wide uppercase">
                      {cert.credentialId}
                    </span>
                  </div>

                  <span className={`font-mono text-[9px] font-black tracking-widest px-2.1.5 py-0.5 rounded border uppercase ${styles.pill}`}>
                    {cert.badgeType}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vintage stamps info alert bubble */}
        <div className="mt-16 bg-yellow-50 border-3 border-black p-5 relative shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center max-w-2xl mx-auto rotate-[-0.5deg]" id="certs-info-banner">
          <span className="absolute -top-3 left-4 bg-black text-white font-mono text-[8px] px-2 py-0.5 font-bold uppercase border">
            COMPLIANCE NOTIFY
          </span>
          <div className="flex items-start gap-2 text-left pt-1">
            <span className="text-[#f04a23] font-impact text-lg leading-none shrink-0 mt-0.5">⚠️</span>
            <p className="font-sans text-xs text-zinc-800 font-bold leading-relaxed m-0">
              NOTICE: All credentials are registered and verified directly inside corresponding platforms. Contact the engineer's communication post (indicated below) to request live validation codes or official API certification links.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
