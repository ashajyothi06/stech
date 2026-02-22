import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MonitorSmartphone, ShieldCheck, ArrowRight } from "lucide-react";
import { CSSProperties } from "react";

import talentImg from "../assets/three-talent.png";
import digitalImg from "../assets/three-digital.png";
import cyberImg from "../assets/three-cyber.png";

/* ── Explicit color palette (light) ── */
const lt = {
  bg: "hsl(0, 0%, 100%)",
  fg: "hsl(0, 15%, 10%)",
  fgMuted: "hsl(0, 10%, 40%)",
  primary: "hsl(0, 90%, 55%)",
};

const lightSection: CSSProperties = { background: lt.bg, color: lt.fg };

const textGradientBrandOnLight: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const items = [
  { key: "talent", title: "Talent", color: "hsl(0, 90%, 55%)", image: talentImg, icon: Users, copy: "The Spark That Builds Futures. We cultivate workforces that move with your ambition — fluid, skilled, and built to endure. Guided by AI-driven intelligence and human insight, every hire, every team, every strategy is engineered not just to fill roles, but to ignite outcomes." },
  { key: "digital", title: "Digital", color: "hsl(35, 82%, 52%)", image: digitalImg, icon: MonitorSmartphone, copy: "The Pulse of Intelligent Enterprises. We design digital ecosystems that breathe, learn, and accelerate. From cloud to data to automation, every layer is stitched with intelligence — making your enterprise faster, sharper, and always in motion." },
  { key: "cyber", title: "Cybersecurity", color: "hsl(210, 25%, 22%)", image: cyberImg, icon: ShieldCheck, copy: "The Shield That Powers Growth. We embed living intelligence into the fabric of your enterprise — predicting risks, dismantling threats, and guarding trust at scale. Security isn't silent defense, it's the engine of fearless innovation." },
];

const ThreeSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-0" style={lightSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="text-base sm:text-lg uppercase font-bold mb-3"style={{ color: lt.primary }}>What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4" style={{ color: lt.fg }}>
            Our <span style={textGradientBrandOnLight}>Core Pillars</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: lt.fgMuted }}>
            Three transformative domains that define how we build, protect, and scale enterprises.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === i;
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, ease }}
              className="relative group cursor-pointer overflow-hidden"
              style={{ minHeight: "520px" }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <motion.div className="absolute inset-0" animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.8, ease }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: `linear-gradient(180deg, ${item.color}00 0%, ${item.color}88 30%, ${item.color}dd 60%, ${item.color}f5 100%)` }} />
              <motion.div className="absolute inset-0" style={{ background: "hsla(0, 0%, 0%, 0.2)" }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4 }} />

              <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 lg:p-8 xl:p-10">
                <motion.div
                  className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "hsla(0, 0%, 100%, 0.12)", backdropFilter: "blur(12px)", border: "1px solid hsla(0, 0%, 100%, 0.15)" }}
                  animate={{ y: isHovered ? -4 : 0 }} transition={{ duration: 0.4, ease }}
                >
                  <Icon className="h-7 w-7" style={{ color: "white" }} />
                </motion.div>
                <motion.h3 className="font-display font-bold text-2xl sm:text-3xl mb-3" style={{ color: "white" }} animate={{ y: isHovered ? -4 : 0 }} transition={{ duration: 0.4, delay: 0.05, ease }}>
                  {item.title}
                </motion.h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isHovered ? "expanded" : "collapsed"}
                    className="text-sm sm:text-[15px] leading-relaxed mb-6"
                    style={{ color: "hsla(0, 0%, 100%, 0.8)" }}
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease }}
                  >
                    {isHovered ? item.copy : item.copy.split(".").slice(0, 1).join(".") + "."}
                  </motion.p>
                </AnimatePresence>
                <motion.div animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 4 }} transition={{ duration: 0.3, ease }}>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold group/btn" style={{ color: "white" }}>
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover/btn:w-full transition-all duration-300" style={{ background: item.color }} />
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ThreeSection;