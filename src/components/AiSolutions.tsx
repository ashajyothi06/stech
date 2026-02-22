import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Eye, Cloud, BrainCircuit, Layers, Workflow } from "lucide-react";
import { CSSProperties } from "react";
import aiVisual from "../assets/ai-solutions.png";

/* ── Explicit color palette (light) ── */
const lt = {
  bg: "hsl(0, 0%, 100%)",
  fg: "hsl(0, 15%, 10%)",
  fgMuted: "hsl(0, 10%, 40%)",
  fgSubtle: "hsl(0, 8%, 55%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  border: "hsl(0, 10%, 90%)",
  cardBorder: "hsl(0, 10%, 92%)",
  accentBg: "hsl(0, 85%, 97%)",
  accentBorder: "hsl(0, 70%, 85%)",
};

const lightSection: CSSProperties = { background: lt.bg, color: lt.fg };

// ✅ sharper edges + slightly cleaner shadow + no rounding
const lightCardElevated: CSSProperties = {
  background: lt.bg,
  border: `1px solid ${lt.cardBorder}`,
  boxShadow: "0 18px 50px hsla(0, 0%, 0%, 0.10), 0 1px 2px hsla(0, 0%, 0%, 0.05)",
};

const lightAccentPill: CSSProperties = { background: lt.accentBg, border: `1px solid ${lt.accentBorder}` };
const lightPill: CSSProperties = { background: lt.bg, border: `1px solid ${lt.border}`, boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.04)" };
const textGradientBrandOnLight: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const scopedCSS = `
.sk-ai-btn:hover { filter: brightness(1.1); box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.12); }
.sk-ai-pill:hover { border-color: hsla(0, 90%, 55%, 0.4); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease } }),
};

const capabilities = [
  { icon: Cpu, label: "End-to-end AI implementation — from concept to production systems." },
  { icon: Eye, label: "Domain-tailored Machine Learning, Computer Vision & NLP solutions." },
  { icon: Cloud, label: "Cloud-native engineering built for performance, security, and scale." },
];

const techTags = [
  { icon: BrainCircuit, text: "Deep Learning" },
  { icon: Layers, text: "MLOps" },
  { icon: Workflow, text: "AutoML" },
];

const AiSolutions: React.FC = () => {
  return (
    <section
  className="relative overflow-hidden"
  style={{ ...lightSection, fontFamily: "'Roboto', sans-serif" }}
>

      <style>{scopedCSS}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-sm sm:text-base uppercase  font-bold mb-3"
 style={{ color: lt.primary }}>
  Our Expertise
</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-3" style={{ color: lt.fg }}>
            Intelligent, Scalable <span style={textGradientBrandOnLight}>Software Solutions</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: lt.fgMuted }}>
            Powered by AI-First Engineering
          </p>
        </motion.div>

        {/* ✅ Align image with left content: make items-stretch, and center image vertically within its column */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-14">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-[15px] leading-relaxed mb-8"
              style={{ color: lt.fgMuted }}
            >
              At Sklassics, we build future-ready platforms designed to scale with your business. Our AI-driven engineering approach helps
              organizations automate workflows, maximize efficiency, and unlock deeper intelligence from their data.
            </motion.p>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div
                    className="mt-0.5 h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: lt.accentBg, border: `1px solid ${lt.accentBorder}` }}
                  >
                    <item.icon className="h-4 w-4" style={{ color: lt.primary }} />
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed pt-1.5" style={{ color: lt.fg }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={1.5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techTags.map((tag) => (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium"
                  style={{ ...lightAccentPill, color: lt.primary }}
                >
                  <tag.icon className="h-3 w-3" />
                  {tag.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                className="px-7 py-3 rounded-full text-sm font-bold shadow-lg sk-ai-btn transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
                style={{ background: lt.primary, color: lt.primaryFg }}
              >
                Schedule a strategy call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="px-7 py-3 rounded-full text-sm font-semibold sk-ai-pill transition-all duration-300"
                style={{ ...lightPill, color: lt.fg }}
              >
                View technology stack
              </button>
            </motion.div>
          </div>

          {/* ✅ Bigger image + sharp edges + aligned with left column */}
          <motion.div
            className="w-full lg:w-1/2 flex lg:items-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.97, x: 24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            {/* Increased width: allow it to grow wider on large screens */}
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              <div className="relative overflow-hidden rounded-none" style={lightCardElevated}>
               <img
  src={aiVisual}
  alt="Sklassics AI analytics dashboard"
  className="w-full max-h-[420px] object-contain"
  loading="lazy"
/>

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, hsla(0, 90%, 55%, 0.06) 0%, transparent 60%)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
