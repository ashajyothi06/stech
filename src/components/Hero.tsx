import React, { useMemo } from "react";
import { motion } from "framer-motion";
import heroVisual from "../assets/redimage1.png";

const dk = {
  bg: "hsl(0 10% 4%)",
  fg: "hsl(0 0% 96%)",
  mutedFg: "hsl(0 10% 65%)",
};

const ease = [0.22, 1, 0.36, 1] as const;

const css = `
@keyframes sk-pulse {
  0%,100%{opacity:.35;transform:scale(1)}
  50%{opacity:.65;transform:scale(1.05)}
}
.sk-pulse{animation:sk-pulse 4.8s ease-in-out infinite}
`;

const gradientText = {
  background:
    "linear-gradient(135deg, hsl(0 75% 78%) 0%, hsl(0 100% 60%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as const;

const gridOverlay = {
  backgroundImage:
    "linear-gradient(hsla(0,30%,100%,0.06) 1px, transparent 1px), linear-gradient(90deg, hsla(0,30%,100%,0.06) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
  maskImage:
    "radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,.55) 55%, rgba(0,0,0,0) 82%)",
} as const;

const Hero: React.FC = () => {
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 22 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay: 0.1 + i * 0.12, ease },
      }),
    }),
    []
  );

  return (
    <section
      className="relative w-full overflow-hidden min-h-[120svh]"
      style={{ color: dk.fg }}
    >
      <style>{css}</style>

      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 overflow-hidden">
  <img
    src={heroVisual}
    alt=""
    className="w-full h-auto min-h-full object-cover"
    style={{ objectPosition: "top center" }}
  />
</div>


        <div className="absolute inset-0" style={{ background: `${dk.bg}9c` }} />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${dk.bg}d9 0%, ${dk.bg}7a 55%, ${dk.bg} 100%)`,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={gridOverlay} />

      {/* ===== Content ===== */}
      {/* ===== Content ===== */}
<div className="relative min-h-[120svh] flex">
  {/* full width + right aligned + pushed down */}
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
    <div className="w-full flex justify-end pt-52 sm:pt-60 lg:pt-72 pb-10">
      {/* shove this to the extreme right */}
      <div className="max-w-4xl text-right ml-auto pr-0 sm:pr-2 lg:pr-0">
        <motion.h1
          custom={1}
          variants={variants}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.35rem] font-semibold leading-[1.06] tracking-tight drop-shadow-[0_18px_42px_rgba(0,0,0,.55)]"
        >
          Engineering the <span style={gradientText}>Future</span>
          <br />
          of Digital Business
        </motion.h1>

        <motion.p
          custom={2}
          variants={variants}
          initial="hidden"
          animate="show"
          className="mt-6 ml-auto max-w-2xl text-[15px] sm:text-lg leading-relaxed"
          style={{ color: dk.mutedFg }}
        >
          We partner with enterprises to design, build, and scale technology
          that drives real impact — from concept to deployment and beyond.
        </motion.p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
