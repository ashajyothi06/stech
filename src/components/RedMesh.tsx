import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { CSSProperties } from "react";
import meshBg from "../assets/redmesh2.png";

/* ── Explicit color palette (dark) ── */
const dk = {
  bg: "hsl(0, 10%, 4%)",
  fg: "hsl(0, 0%, 96%)",
  mutedFg: "hsl(0, 10%, 65%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  glow: "hsl(0, 100%, 60%)",
  dark: "hsl(0, 15%, 4%)",
};

const glassCard: CSSProperties = {
  background: "hsla(0, 30%, 100%, 0.06)",
  border: "1px solid hsla(0, 30%, 100%, 0.12)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)" as any,
};

const textGradientBrand: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 75%, 78%) 0%, hsl(0, 100%, 60%) 100%)",
  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
};

const glowButtonCSS = `
.sk-btn-glow { box-shadow: 0 0 60px -12px hsla(0, 100%, 60%, 0.4), 0 0 120px -30px hsla(0, 90%, 55%, 0.2); }
.sk-btn-glow:hover { box-shadow: 0 0 80px -8px hsla(0, 100%, 60%, 0.5), 0 0 160px -20px hsla(0, 90%, 55%, 0.3); filter: brightness(1.1); }
.sk-mesh-glass:hover { background: hsla(0, 0%, 100%, 0.1); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease } }),
};

const bullets = [
  { icon: BrainCircuit, text: "End-to-end AI pipelines from experimentation to production." },
  { icon: Activity, text: "Computer vision, NLP, and generative AI tailored to your domain." },
  { icon: ShieldCheck, text: "Security-first architecture for regulated environments." },
];

const RedMesh: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: dk.bg }}>
      <style>{glowButtonCSS}</style>

      <div className="absolute inset-0">
        <img src={meshBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${dk.dark}eb 0%, ${dk.dark}bf 50%, ${dk.dark}e0 100%)` }} />
      </div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-30" style={{ background: dk.glow }} />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-20" style={{ background: dk.primary }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">

        <div className="max-w-3xl">
          {/* <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={glassCard}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: dk.primary }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: dk.primary }} />
            </span>
            <span className="text-[11px] sm:text-xs font-medium tracking-wide" style={{ color: `hsla(0, 0%, 96%, 0.7)` }}>AI Mesh Intelligence · Sklassics</span>
          </motion.div> */}

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-6" style={{ color: dk.fg }}>
            Where human structure<br />meets{" "}<span style={textGradientBrand}>machine precision.</span>
          </motion.h2>

          {/* <motion.div custom={1.5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-16" style={{ background: `linear-gradient(to right, ${dk.primary}, transparent)` }} />
            <Sparkles className="h-4 w-4" style={{ color: dk.primary }} />
          </motion.div> */}

          <motion.p custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-10" style={{ color: dk.mutedFg }}>
            The mesh you see is how we treat intelligence — layered, precise, and deeply connected. We align models, data, and infrastructure so your systems react in real time, not in reports.
          </motion.p>

          <motion.div custom={2.5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 mb-10">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="mt-0.5 h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: "hsla(0, 90%, 55%, 0.15)", border: "1px solid hsla(0, 90%, 55%, 0.25)" }}>
                  <item.icon className="h-4 w-4" style={{ color: dk.primary }} />
                </div>
                <p className="text-sm sm:text-[15px] leading-relaxed pt-1" style={{ color: `hsla(0, 0%, 96%, 0.8)` }}>{item.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 mb-12">
            <button className="sk-btn-glow px-7 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
              style={{ background: dk.primary, color: dk.primaryFg }}>
              Talk to our AI team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-7 py-3.5 rounded-full text-sm font-semibold sk-mesh-glass transition-all duration-300 inline-flex items-center gap-2 group"
              style={{ ...glassCard, color: dk.fg }}>
              Explore AI use cases
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* <motion.div custom={3.5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: dk.primary }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: dk.primary }} />
              </div>
              <span className="text-sm" style={{ color: `hsla(0, 0%, 96%, 0.7)` }}>
                <span className="font-bold" style={{ color: dk.fg }}>24+</span> live AI deployments
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: dk.primary, animationDelay: "0.5s" }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: dk.primary }} />
              </div>
              <span className="text-sm" style={{ color: `hsla(0, 0%, 96%, 0.7)` }}>
                <span className="font-bold" style={{ color: dk.fg }}>Realtime</span> decision mesh
              </span>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default RedMesh;