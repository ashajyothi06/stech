import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, MessageSquare } from "lucide-react";
import { CSSProperties } from "react";
import projectBg from "../assets/projectCTA.png";

/* ── Explicit color palette (dark) ── */
const dk = {
  bg: "hsl(0, 10%, 4%)",
  fg: "hsl(0, 0%, 96%)",
  mutedFg: "hsl(0, 10%, 65%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  glow: "hsl(0, 100%, 60%)",
  dark: "hsl(0, 15%, 4%)",
  pink: "hsl(0, 75%, 78%)",
};

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

const textGradientBrand: CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(0, 75%, 78%) 0%, hsl(0, 100%, 60%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const glowButtonCSS = `
.sk-btn-glow {
  box-shadow: 0 0 60px -12px hsla(0, 100%, 60%, 0.4),
              0 0 120px -30px hsla(0, 90%, 55%, 0.2);
}
.sk-btn-glow:hover {
  box-shadow: 0 0 80px -8px hsla(0, 100%, 60%, 0.5),
              0 0 160px -20px hsla(0, 90%, 55%, 0.3);
  filter: brightness(1.1);
}
.sk-cta-glass:hover { background: hsla(0, 0%, 100%, 0.1); }
.sk-cta-stat:hover { background: hsla(0, 0%, 100%, 0.1); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ProjectCta: React.FC = () => {
  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Global Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: dk.bg }}>
      <style>{glowButtonCSS}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={projectBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${dk.dark}f0 0%, ${dk.dark}cc 40%, ${dk.dark}99 100%)`,
          }}
        />
      </div>

      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-25"
        style={{ background: dk.glow }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-3/5">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-5"
            >
              <span style={{ color: dk.primary }}>
                Have a Project
              </span>
              <br />
              <span style={textGradientBrand}>in Mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: dk.mutedFg }}
            >
              From initial concept to production deployment — we bring your
              vision to life with engineering excellence and creative precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                className="sk-btn-glow px-8 py-4 rounded-full text-sm font-bold shadow-lg transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
                style={{ background: dk.primary, color: dk.primaryFg }}
              >
                Start a Conversation
                <MessageSquare className="h-4 w-4 transition-transform group-hover:scale-110" />
              </button>

              <button
                className="px-8 py-4 rounded-full text-sm font-semibold sk-cta-glass transition-all duration-300 inline-flex items-center gap-2 group"
                style={{ ...glassCard, color: dk.fg }}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, idx) => {
                const highlight =
                  stat.value === "98%" || stat.value === "24/7";

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + idx * 0.1,
                      ease,
                    }}
                    className="rounded-2xl p-5 text-center sk-cta-stat transition-colors duration-300"
                    style={glassCardStrong}
                  >
                    <p
                      className="text-2xl sm:text-3xl font-display font-bold mb-1"
                      style={
                        highlight ? textGradientBrand : { color: dk.fg }
                      }
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[11px] sm:text-xs"
                      style={{ color: dk.mutedFg }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCta;
