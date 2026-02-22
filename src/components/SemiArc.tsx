import React from "react";
import { motion } from "framer-motion";

interface SemiArcProps {
  activeIdx: number;
  onHover: (idx: number) => void;
  colors: string[];
  size?: number;
}

const SemiArc: React.FC<SemiArcProps> = ({
  activeIdx,
  onHover,
  colors,
  size = 260,
}) => {
  const W = 20;
  const PAD = Math.ceil(W / 2) + 2;
  const SVG_SIZE = 2 * (size + PAD);
  const cx = size + PAD-220;
  const cy = size + PAD;

  // Right semi-circle arc path
  const arcPath = `M ${cx} ${cy - size} A ${size} ${size} 0 0 1 ${cx} ${cy + size}`;

  const GAP = 0.03;
  const segLen = (1 - GAP * 2) / 3;
  const greys = ["hsl(0 20% 25%)", "hsl(0 15% 20%)", "hsl(0 10% 18%)"];

  const pathLength = Math.PI * size; // half circumference

  return (
    <svg
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      {/* Background track */}
      <path
        d={arcPath}
        fill="none"
        stroke="hsl(0 15% 12%)"
        strokeWidth={W}
        strokeLinecap="round"
      />

      {/* 3 interactive segments */}
      {[0, 1, 2].map((i) => {
        const offset = i * (segLen + GAP);
        const isActive = activeIdx === i;
        return (
          <motion.path
            key={i}
            d={arcPath}
            fill="none"
            stroke={isActive ? colors[i] : greys[i]}
            strokeWidth={isActive ? W + 4 : W}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={`${segLen} ${1 - segLen}`}
            strokeDashoffset={-offset}
            onMouseEnter={() => onHover(i)}
            onClick={() => onHover(i)}
            className="cursor-pointer transition-colors duration-300"
            style={{ filter: isActive ? `drop-shadow(0 0 12px ${colors[i]}66)` : "none" }}
            initial={false}
            animate={{
              strokeWidth: isActive ? W + 6 : W,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </svg>
  );
};

export default SemiArc;
