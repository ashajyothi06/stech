import React from "react";
import { motion } from "framer-motion";

import { CSSProperties } from "react";
import { ArrowRight, Clock, Sparkles, Layout, BrainCircuit, Code2 } from "lucide-react";

import blog1 from "../assets/blog1.png";
import blog22 from "../assets/blog22.png";



/* ── Explicit color palette (light) ── */
const lt = {
  bg: "hsl(0, 0%, 100%)",
  fg: "hsl(0, 15%, 10%)",
  fgMuted: "hsl(0, 10%, 40%)",
  fgSubtle: "hsl(0, 8%, 55%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  cardBorder: "hsl(0, 10%, 92%)",
  accentBg: "hsl(0, 85%, 97%)",
  accentBorder: "hsl(0, 70%, 85%)",
};

const lightSection: CSSProperties = { background: lt.bg, color: lt.fg };
const lightCardElevated: CSSProperties = { background: lt.bg, border: `1px solid ${lt.cardBorder}`, boxShadow: "0 20px 60px hsla(0, 0%, 0%, 0.08), 0 1px 3px hsla(0, 0%, 0%, 0.04)" };
const lightAccentPill: CSSProperties = { background: lt.accentBg, border: `1px solid ${lt.accentBorder}` };
const textGradientBrandOnLight: CSSProperties = { background: "linear-gradient(135deg, hsl(0, 90%, 50%) 0%, hsl(0, 80%, 40%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };

const scopedCSS = `
.sk-blog-card:hover { box-shadow: 0 20px 40px hsla(0, 0%, 0%, 0.12); transform: translateY(-4px); }
.sk-blog-card:hover .sk-blog-title { color: ${lt.primary}; }
.sk-blog-card:hover .sk-blog-img { transform: scale(1.05); }
.sk-blog-read:hover { gap: 8px; }
.sk-blog-btn:hover { filter: brightness(1.1); box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.12); }
.sk-blog-tag:hover { box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.06); }
`;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease } }) };

const blogData = [
  {
    id: 1,
    title: "A Comprehensive Guide to Mobile Wireframing: Everything You Need to Know",
    description:
      "Mobile wireframing is a critical part of the app design process, laying the groundwork for creating a seamless user experience.",
    image: blog1, // ✅ local image
    category: "Design",
    date: "Jan 12, 2025",
    readTime: "11 min read",
  },
  {
    id: 2,
    title: "What is Exploratory Data Analysis?",
    description:
      "Exploratory Data Analysis (EDA) is like exploring a new place. As you walk around & try to understand patterns, EDA helps you uncover insights hidden in data.",
    image: blog22, // ✅ local image
    category: "Data Science",
    date: "Jan 6, 2025",
    readTime: "7 min read",
  },
];

const categoryTags = [
  { label: "Product & UX", Icon: Layout },
  { label: "Data & AI", Icon: BrainCircuit },
  { label: "Engineering", Icon: Code2 },
];


const OurBlog: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={lightSection}>
      <style>{scopedCSS}</style>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-0 pb-20 sm:pb-28 lg:pb-32">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-14 sm:mb-16">
          {/* <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide mb-5" style={{ ...lightAccentPill, color: lt.primary }}>
            <Sparkles className="h-3 w-3" />
            Sklassics · Insights
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3" style={{ color: lt.fg }}>
            Sklassics Tech{" "}<span style={textGradientBrandOnLight}>Blog</span>
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto mb-6" style={{ color: lt.fgMuted }}>
            Insights on AI, software engineering, and digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categoryTags.map((tag) => (
              <span
  key={tag.label}
  className="rounded-full px-3 py-1.5 text-[11px] font-medium cursor-pointer sk-blog-tag transition-shadow inline-flex items-center gap-1.5"
  style={{ ...lightAccentPill, color: lt.primary }}
>
  <tag.Icon className="h-3.5 w-3.5" />
  {tag.label}
</span>

            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {blogData.map((blog, i) => (
            <motion.article key={blog.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="sk-blog-card flex flex-col overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer" style={lightCardElevated}>
              <div className="overflow-hidden">
                <img src={blog.image} alt={blog.title} className="sk-blog-img h-56 w-full object-cover transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ ...lightAccentPill, color: lt.primary }}>{blog.category}</span>
                  <span className="flex items-center gap-1 text-[11px]" style={{ color: lt.fgSubtle }}>
                    <Clock className="h-3 w-3" />{blog.readTime}
                  </span>
                </div>
                <h3 className="sk-blog-title text-base sm:text-lg font-display font-bold leading-snug mb-2 transition-colors" style={{ color: lt.fg }}>{blog.title}</h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: lt.fgMuted }}>{blog.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-[11px]" style={{ color: lt.fgSubtle }}>{blog.date}</span>
                  <span className="sk-blog-read inline-flex items-center gap-1 text-[12px] font-semibold transition-all" style={{ color: lt.primary }}>
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }} className="text-center mt-12">
          <button className="px-7 py-3 rounded-full text-sm font-bold shadow-lg sk-blog-btn transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
            style={{ background: lt.primary, color: lt.primaryFg }}>
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurBlog;