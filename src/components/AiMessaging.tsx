import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, BarChart3, ArrowRight } from "lucide-react";
import { CSSProperties } from "react";
import heroImg from "../assets/aimessaing.png";

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

/* ── Inline style tokens ── */
const lightSection: CSSProperties = { background: lt.bg, color: lt.fg };

const lightPill: CSSProperties = {
  background: lt.bg,
  border: `1px solid ${lt.border}`,
  boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.04)",
};

const floatAnimationCSS = `
@keyframes sk-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(0.5deg); }
  66% { transform: translateY(4px) rotate(-0.5deg); }
}
@keyframes sk-float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(6px) rotate(-0.5deg); }
  66% { transform: translateY(-10px) rotate(0.5deg); }
}
@keyframes sk-float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.sk-float { animation: sk-float 6s ease-in-out infinite; }
.sk-float-delayed { animation: sk-float-delayed 7s ease-in-out infinite; }
.sk-float-slow { animation: sk-float-slow 8s ease-in-out infinite; }
.sk-msg-btn-primary:hover { filter: brightness(1.1); box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.12); }
.sk-msg-btn-demo:hover { opacity: 0.8; }
.sk-msg-thread:hover { background: hsla(0, 90%, 55%, 0.1); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

const AiMessaging: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={lightSection}>
      <style>{floatAnimationCSS}</style>

      {/* ✅ Reduced gap + aligned properly */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col lg:flex-row items-stretch lg:items-center gap-10 lg:gap-12">

        {/* ================= LEFT COPY ================= */}
        <div className="w-full lg:w-1/2 lg:pl-16">

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5"
            style={{ color: lt.fg }}
          >
            The Only AI For
            <br className="hidden sm:block" />{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Responding
            </span>{" "}
            To Your Messages
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg mb-4 max-w-md leading-relaxed"
            style={{ color: lt.fgMuted }}
          >
            Let AI reply to your messages on autopilot while still sounding
            exactly like you. Trained on your tone, synced to your inboxes,
            and always online.
          </motion.p>

          <motion.p
            custom={2.5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs sm:text-sm mb-8 max-w-md"
            style={{ color: lt.fgSubtle }}
          >
            From DMs and emails to support chats, our engine responds in
            seconds, handles follow-ups, and escalates only what truly matters.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              className="px-7 py-3 rounded-full text-sm font-bold shadow-lg sk-msg-btn-primary transition-all duration-300 active:scale-95"
              style={{ background: lt.primary, color: lt.primaryFg }}
            >
              Start free trial
            </button>
            {/* <button
              className="px-7 py-3 rounded-full text-sm font-semibold sk-msg-btn-demo transition-all duration-300 inline-flex items-center gap-2 group"
              style={{ ...lightPill, color: lt.fg }}
            >
              Watch demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button> */}
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 flex lg:justify-end justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="w-full max-w-2xl"
          >
            {/* ✅ Sharp edges + clean border */}
            <div
              className="overflow-hidden rounded-none"
              style={{
                background: "#ffffff",
                border: `1px solid ${lt.border}`,
                boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src={heroImg}
                alt="AI Messaging"
                className="w-full max-h-[440px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiMessaging;
