import { CSSProperties } from "react";

/* ── Glass morphism ── */
export const glassCard: CSSProperties = {
  background: "hsla(0, 30%, 100%, 0.06)",
  border: "1px solid hsla(0, 30%, 100%, 0.12)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)" as any,
};

export const glassCardStrong: CSSProperties = {
  background: "hsla(0, 30%, 100%, 0.1)",
  border: "1px solid hsla(0, 30%, 100%, 0.2)",
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(40px)" as any,
};

/* ── Light section tokens ── */
export const lightSection: CSSProperties = {
  background: "hsl(0, 0%, 100%)",
  color: "hsl(0, 15%, 10%)",
};

export const lightCard: CSSProperties = {
  background: "hsl(0, 0%, 100%)",
  border: "1px solid hsl(0, 10%, 92%)",
  boxShadow: "0 4px 24px hsla(0, 0%, 0%, 0.06)",
};

export const lightCardElevated: CSSProperties = {
  background: "hsl(0, 0%, 100%)",
  border: "1px solid hsl(0, 10%, 92%)",
  boxShadow: "0 20px 60px hsla(0, 0%, 0%, 0.08), 0 1px 3px hsla(0, 0%, 0%, 0.04)",
};

export const lightPill: CSSProperties = {
  background: "hsl(0, 0%, 100%)",
  border: "1px solid hsl(0, 10%, 90%)",
  boxShadow: "0 2px 8px hsla(0, 0%, 0%, 0.04)",
};

export const lightAccentPill: CSSProperties = {
  background: "hsl(0, 85%, 97%)",
  border: "1px solid hsl(0, 70%, 85%)",
};

/* ── Text gradients ── */
export const textGradientBrand: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 75%, 78%) 0%, hsl(0, 100%, 60%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const textGradientBrandOnLight: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const textGradientSoft: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 35%, 90%) 0%, hsl(0, 75%, 78%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ── Glow effects ── */
export const glowRed: CSSProperties = {
  boxShadow: "0 0 60px -12px hsla(0, 100%, 60%, 0.4), 0 0 120px -30px hsla(0, 90%, 55%, 0.2)",
};

export const glowRedIntense: CSSProperties = {
  boxShadow: "0 0 80px -8px hsla(0, 100%, 60%, 0.5), 0 0 160px -20px hsla(0, 90%, 55%, 0.3)",
};

/* ── Card elevations ── */
export const cardElevated: CSSProperties = {
  boxShadow: "0 24px 60px -12px hsla(0, 15%, 4%, 0.85), 0 0 1px hsla(0, 30%, 100%, 0.2)",
};

export const cardElevatedGlow: CSSProperties = {
  boxShadow: "0 24px 60px -12px hsla(0, 15%, 4%, 0.85), 0 0 40px -15px hsla(0, 100%, 60%, 0.15), 0 0 1px hsla(0, 30%, 100%, 0.2)",
};

/* ── Grid pattern ── */
export const gridPattern: CSSProperties = {
  backgroundImage:
    "linear-gradient(hsla(0, 30%, 100%, 0.06) 1px, transparent 1px), linear-gradient(90deg, hsla(0, 30%, 100%, 0.06) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

/* ── Stat card gradients ── */
export const statCardDark: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 15%, 6%) 0%, hsl(0, 30%, 10%) 100%)",
};

export const statCardRed: CSSProperties = {
  background: "linear-gradient(135deg, hsl(0, 75%, 20%) 0%, hsl(0, 90%, 55%) 100%)",
};

/* ── Phone shadow ── */
export const phoneShadow: CSSProperties = {
  boxShadow:
    "0 32px 80px -12px hsla(0, 15%, 4%, 0.9), 0 0 60px -20px hsla(0, 100%, 60%, 0.3), inset 0 1px 0 hsla(0, 30%, 100%, 0.15)",
};

/* ── Hero gradient ── */
export const heroGradient: CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(0, 90%, 55%) 0%, hsl(0, 65%, 14%) 50%, hsl(0, 10%, 4%) 100%)",
};

/* ── Keyframe CSS strings for component-level <style> tags ── */
export const floatAnimationCSS = `
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
@keyframes sk-pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}
.sk-float { animation: sk-float 6s ease-in-out infinite; }
.sk-float-delayed { animation: sk-float-delayed 7s ease-in-out infinite; }
.sk-float-slow { animation: sk-float-slow 8s ease-in-out infinite; }
.sk-pulse-glow { animation: sk-pulse-glow 4s ease-in-out infinite; }
`;

export const glowButtonCSS = `
.sk-btn-glow {
  box-shadow: 0 0 60px -12px hsla(0, 100%, 60%, 0.4), 0 0 120px -30px hsla(0, 90%, 55%, 0.2);
}
.sk-btn-glow:hover {
  box-shadow: 0 0 80px -8px hsla(0, 100%, 60%, 0.5), 0 0 160px -20px hsla(0, 90%, 55%, 0.3);
}
`;

export const inputGlowCSS = `
.sk-input-glow:focus-within {
  box-shadow: 0 0 0 1px hsla(0, 100%, 60%, 0.5), 0 0 20px -8px hsla(0, 100%, 60%, 0.3);
}
`;
