import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CSSProperties } from "react";
import whyImage from "../assets/complex.png";

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
};

const lightSection: CSSProperties = {
  background: lt.bg,
  color: lt.fg,
};

const lightCardElevated: CSSProperties = {
  background: lt.bg,
  border: `1px solid ${lt.cardBorder}`,
  boxShadow:
    "0 20px 60px hsla(0, 0%, 0%, 0.08), 0 1px 3px hsla(0, 0%, 0%, 0.04)",
};

const lightPill: CSSProperties = {
  background: lt.bg,
  border: `1px solid ${lt.border}`,
  boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.04)",
};

const textGradientBrandOnLight: CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const scopedCSS = `
.sk-why-btn:hover {
  filter: brightness(1.1);
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.12);
}
.sk-why-pill:hover {
  border-color: hsla(0, 90%, 55%, 0.4);
}
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

const bullets = [
  "Full-stack development with enterprise-grade standards.",
  "AI-powered automation & data-driven product design.",
  "Transparent communication with predictable delivery cycles.",
];

const WhySklassics: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={lightSection}>
      <style>{scopedCSS}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28 lg:py-32">
        {/* 🔑 No horizontal gap on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch gap-y-14 lg:gap-y-0 lg:gap-x-0">
          
          {/* LEFT CONTENT — 40% */}
          <div className="w-full lg:basis-[40%] flex flex-col justify-center pr-0 lg:pr-14">
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-snug mb-4"
              style={{ color: lt.fg }}
            >
              We transform{" "}
              <span style={textGradientBrandOnLight}>complex ideas</span>{" "}
              into scalable digital products.
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5 max-w-lg"
              style={{ color: lt.fgMuted }}
            >
              Sklassics blends product engineering, AI automation, and cloud-native
              development to help businesses accelerate innovation with reliability
              and speed.
            </motion.p>

            <motion.ul
              custom={2.5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {bullets.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-[15px]"
                  style={{ color: lt.fg }}
                >
                  <span
                    className="mt-[7px] h-2 w-2 shrink-0"
                    style={{ background: lt.primary }}
                  />
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <button
                className="px-7 py-3 rounded-full text-sm font-bold shadow-lg sk-why-btn transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
                style={{ background: lt.primary, color: lt.primaryFg }}
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                className="px-7 py-3 rounded-full text-sm font-semibold sk-why-pill transition-all duration-300"
                style={{ ...lightPill, color: lt.fg }}
              >
                Explore case studies
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE — FULL, NO MISSING SPACE */}
          <div className="w-full lg:basis-[60%] flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="relative w-full h-full"
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={lightCardElevated}
              >
                <img
                  src={whyImage}
                  alt="Why Sklassics — team collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, hsla(0, 90%, 55%, 0.08) 0%, transparent 60%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySklassics;
