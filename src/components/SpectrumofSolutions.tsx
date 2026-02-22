import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, UserCheck, FolderKanban } from "lucide-react";
import { CSSProperties } from "react";
import SemiArc from "./SemiArc";

import heroTalent from "../assets/spectrum-talent.png";
import heroTeam from "../assets/spectrum-team.png";
import heroProject from "../assets/spectrum-project.png";

/* ── Explicit color palette (dark) ── */
const dk = {
  bg: "hsl(0, 10%, 4%)",
  fg: "hsl(0, 0%, 96%)",
  mutedFg: "hsl(0, 10%, 65%)",
  muted: "hsl(0, 15%, 12%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  border: "hsl(0, 20%, 15%)",
  glow: "hsl(0, 100%, 60%)",
};

/* ── Inline style tokens ── */
const glassCard: CSSProperties = {
  background: "hsla(0, 30%, 100%, 0.06)",
  border: "1px solid hsla(0, 30%, 100%, 0.12)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)" as any,
};

const glassCardStrong: CSSProperties = {
  background: "hsla(0, 30%, 100%, 0.1)",
  border: "1px solid hsla(0, 30%, 100%, 0.2)",
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(40px)" as any,
};

const cardElevated: CSSProperties = {
  boxShadow: "0 24px 60px -12px hsla(0, 15%, 4%, 0.85), 0 0 1px hsla(0, 30%, 100%, 0.2)",
};

const cardElevatedGlow: CSSProperties = {
  boxShadow: "0 24px 60px -12px hsla(0, 15%, 4%, 0.85), 0 0 40px -15px hsla(0, 100%, 60%, 0.15), 0 0 1px hsla(0, 30%, 100%, 0.2)",
};

const textGradientBrand: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 75%, 78%) 0%, hsl(0, 100%, 60%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const gridPattern: CSSProperties = {
  backgroundImage:
    "linear-gradient(hsla(0, 30%, 100%, 0.06) 1px, transparent 1px), linear-gradient(90deg, hsla(0, 30%, 100%, 0.06) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

const scopedCSS = `
.sk-spec-pill-active { background: hsla(0, 90%, 55%, 0.15); color: ${dk.primary}; border-color: hsla(0, 90%, 55%, 0.4); }
.sk-spec-pill:hover { color: ${dk.fg}; border-color: ${dk.border}; }
.sk-spec-cta:hover { filter: brightness(1.25); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SpectrumOfSolutions: React.FC = () => {
  const items = useMemo(
    () => [
      { key: "talent", title: "Talent Solutions", icon: UserCheck, blurb: "Save time finding the right resource for your team while we connect you with the best talent in the marketplace.", cta: "Learn More", color: "hsl(0 85% 50%)", topImg: heroTeam, botImg: heroTalent },
      { key: "team", title: "Team Solutions", icon: Users, blurb: "Take charge of your most valued initiatives while we provide a dedicated team offering technical expertise and services.", cta: "Learn More", color: "hsl(0 80% 55%)", topImg: heroProject, botImg: heroTeam },
      { key: "project", title: "Project Solutions", icon: FolderKanban, blurb: "Transform your business while we help you connect strategy to execution to tackle your most challenging initiatives.", cta: "Learn More", color: "hsl(0 75% 48%)", topImg: heroTalent, botImg: heroProject },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(1);
  const active = items[activeIdx];
  const colors = items.map((i) => i.color);

  const labels = [
    { key: "talent", label: "Talent Solutions", angle: -55 },
    { key: "team", label: "Team Solutions", angle: 0 },
    { key: "project", label: "Project Solutions", angle: 55 },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32" style={{ background: dk.bg, color: dk.fg }}>
      <style>{scopedCSS}</style>
      <div className="absolute inset-0 opacity-30" style={gridPattern} />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full"
        style={{ background: `radial-gradient(circle, hsla(0, 100%, 60%, 0.1) 0%, transparent 70%)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium mb-3" style={{ color: dk.primary }}>Our Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Spectrum of{" "}
            <span style={textGradientBrand}>Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: dk.mutedFg }}>
            End-to-end technology services designed to accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
              
              <div className="absolute inset-0 -translate-x-6 sm:-translate-x-8">
  <SemiArc activeIdx={activeIdx} onHover={setActiveIdx} colors={colors} size={160} />
</div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none pr-8 -translate-x-40">

                <p className="text-[10px] uppercase tracking-[0.15em] font-medium mb-1" style={{ color: dk.mutedFg }}>Spectrum of</p>
                <p className="text-lg sm:text-xl font-display font-bold leading-tight">Solutions</p>
              </div>
              {labels.map((l, i) => {
                const isActive = activeIdx === i;
               const positions = [
  { top: "8%", right: "15%", textAlign: "left" as const },
  { top: "45%", right: "2%", textAlign: "left" as const },
  { bottom: "8%", right: "15%", textAlign: "left" as const },
];

                return (
                  <button
                    key={l.key}
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className="absolute text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap"
                    style={{
                      ...positions[i],
                      color: isActive ? dk.primary : dk.mutedFg,
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    {l.label}
                    {isActive && <span style={{ color: dk.primary }}> »</span>}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="hidden lg:grid grid-rows-[auto_1fr_auto] gap-4">
            <AnimatePresence mode="wait">
              <motion.div key={`top-${activeIdx}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, ease }}
                className="rounded-2xl overflow-hidden" style={{ ...cardElevated, border: `1px solid hsla(0, 20%, 15%, 0.5)` }}>
                <img src={active.topImg} alt={active.title} className="w-full h-[180px] object-cover" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div key={`card-${activeIdx}`} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.4, ease }}
                className="rounded-2xl p-6 sm:p-8" style={{ ...glassCardStrong, ...cardElevatedGlow, border: `1px solid hsla(0, 20%, 15%, 0.5)` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${active.color}22` }}>
                    <active.icon className="h-5 w-5" style={{ color: active.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl">{active.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: dk.mutedFg }}>{active.blurb}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold sk-spec-cta transition-all group" style={{ color: dk.primary }}>
                  {active.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div key={`bot-${activeIdx}`} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.4, ease }}
                className="rounded-2xl overflow-hidden" style={{ ...cardElevated, border: `1px solid hsla(0, 20%, 15%, 0.5)` }}>
                <img src={active.botImg} alt={active.title} className="w-full h-[180px] object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:hidden mt-10">
          <AnimatePresence mode="wait">
            <motion.div key={`mobile-${activeIdx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease }}
              className="rounded-2xl p-5" style={{ ...glassCardStrong, ...cardElevatedGlow, border: `1px solid hsla(0, 20%, 15%, 0.5)` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${active.color}22` }}>
                  <active.icon className="h-5 w-5" style={{ color: active.color }} />
                </div>
                <h3 className="font-display font-bold text-lg">{active.title}</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: dk.mutedFg }}>{active.blurb}</p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold sk-spec-cta transition-all group mb-5" style={{ color: dk.primary }}>
                {active.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid hsla(0, 20%, 15%, 0.3)` }}>
                  <img src={active.topImg} alt="" className="w-full h-32 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid hsla(0, 20%, 15%, 0.3)` }}>
                  <img src={active.botImg} alt="" className="w-full h-32 object-cover" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-10 gap-3">
          {items.map((item, i) => (
            <button
              key={item.key}
              onClick={() => setActiveIdx(i)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeIdx === i ? "sk-spec-pill-active shadow-lg" : "sk-spec-pill"}`}
              style={
                activeIdx === i
                  ? { boxShadow: `0 0 20px ${item.color}33`, border: `1px solid hsla(0, 90%, 55%, 0.4)` }
                  : { ...glassCard, color: dk.mutedFg }
              }
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpectrumOfSolutions;