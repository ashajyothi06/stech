import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers, Code2, Rocket, Search } from "lucide-react";

import hero1 from "../assets/mr1.png";
import hero2 from "../assets/mr2.png";
import hero3 from "../assets/mr3.png";
import hero4 from "../assets/mr4.png";
import hero5 from "../assets/mr5.png";
import hero6 from "../assets/mr6.png";

/* Keep the same palette for consistency */
const dk = {
  bg: "hsl(0, 10%, 4%)",
  fg: "hsl(0, 0%, 96%)",
  mutedFg: "hsl(0, 10%, 65%)",
  muted: "hsl(0, 15%, 12%)",
  primary: "hsl(0, 90%, 55%)",
  primaryFg: "hsl(0, 0%, 100%)",
  border: "hsl(0, 20%, 15%)",
  glow: "hsl(0, 100%, 60%)",
  dark: "hsl(0, 15%, 4%)",
};

type Scale = "Small Service Clients" | "Large Service Clients";
type Category = "Frontend" | "Full Stack" | "Mobile" | "API" | "Dashboard" | "AI/ML";
type Status = "Live" | "In Progress" | "Upcoming";

type WorkItem = {
  id: string;
  title: string;
  scale: Scale;
  category: Category;
  status: Status;
  summary: string;
  tech: string[];
  deliverables: string[];
  clientType: string;
  year?: string;
  link?: string;
};

const worksData: WorkItem[] = [
  // ---- Small Service Clients ----
  {
    id: "sk-frontend-01",
    title: "Marketing Website + Lead Capture",
    scale: "Small Service Clients",
    category: "Frontend",
    status: "Live",
    summary: "High-conversion landing pages with animations, SEO, and fast load time.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    deliverables: ["Landing pages", "Lead form", "SEO basics", "Deployment"],
    clientType: "Startup / Local business",
    year: "2026",
  },
  {
    id: "sk-dashboard-01",
    title: "Admin Dashboard for Operations",
    scale: "Small Service Clients",
    category: "Dashboard",
    status: "In Progress",
    summary: "Role-based dashboard for daily operations, reports, and approvals.",
    tech: ["React", "Charting", "REST APIs"],
    deliverables: ["Auth UI", "Tables & filters", "Reports", "Export (CSV)"],
    clientType: "SME",
    year: "2026",
  },
  {
    id: "sk-fullstack-01",
    title: "Full Stack Service Portal",
    scale: "Small Service Clients",
    category: "Full Stack",
    status: "Upcoming",
    summary: "Client portal for service requests, tracking, and billing workflows.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    deliverables: ["Client portal", "Admin panel", "Database", "Deploy-ready build"],
    clientType: "SME / Services",
    year: "2026",
  },

  // ---- Large Service Clients ----
  {
    id: "lg-fullstack-01",
    title: "Enterprise Full Stack Platform",
    scale: "Large Service Clients",
    category: "Full Stack",
    status: "Upcoming",
    summary: "Scalable platform with modular services, RBAC, and audit trails.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    deliverables: ["Multi-module backend", "RBAC", "Audit logs", "CI/CD ready"],
    clientType: "Enterprise",
    year: "2026",
  },
  {
    id: "lg-api-01",
    title: "Secure API Suite + Integrations",
    scale: "Large Service Clients",
    category: "API",
    status: "In Progress",
    summary: "Integration-ready APIs with validation, logging, and documentation.",
    tech: ["Spring Boot", "OpenAPI", "JWT", "PostgreSQL"],
    deliverables: ["API suite", "Docs", "Monitoring hooks", "Security hardening"],
    clientType: "Enterprise",
    year: "2026",
  },
  {
    id: "lg-aiml-01",
    title: "AI/ML Feature Add-ons for Existing Product",
    scale: "Large Service Clients",
    category: "AI/ML",
    status: "Upcoming",
    summary: "AI-driven modules (recommendations/automation) integrated into product flows.",
    tech: ["Python", "FastAPI", "Vector Search", "React"],
    deliverables: ["AI service", "Integration endpoints", "UI components", "Testing"],
    clientType: "Enterprise / Product company",
    year: "2026",
  },
];

/* ------------------------------ HERO: ORBITAL CARDS ------------------------------ */

type HeroCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // put your images in /public/media/*.jpg
};

/**
 * You can replace these images with your own:
 * public/media/hero-1.jpg ... hero-6.jpg
 */
const heroCards: HeroCard[] = [
  { id: "hc-1", title: "High-conversion UI", subtitle: "Landing Pages", image: hero1 },
  { id: "hc-2", title: "Role-based Systems", subtitle: "Dashboards", image: hero2},
  { id: "hc-3", title: "Client Portals", subtitle: "Service Workflows", image: hero3 },
  { id: "hc-4", title: "Secure Integrations", subtitle: "APIs + Auth", image:hero4 },
  { id: "hc-5", title: "Enterprise Modules", subtitle: "Scale-ready", image: hero5 },
  { id: "hc-6", title: "AI Add-ons", subtitle: "Automation", image: hero6},
];

function OrbitalCardCarousel({
  items,
  radius = 280,
  size = 215,
  speedSec = 18,
}: {
  items: HeroCard[];
  radius?: number;
  size?: number;
  speedSec?: number;
}) {
  const count = Math.max(items.length, 3);
  const step = 360 / count;

  return (
    <div className="relative w-full">
      {/* Keyframes locally (no config needed) */}
      <style>{`
        @keyframes sk_spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

      <div
        className="relative mx-auto"
        style={{
          width: "min(680px, 100%)",
          height: 380,
          perspective: "1200px",
        }}
      >
        {/* soft shadow / base blur */}
        <div
          className="absolute left-1/2 top-[76%] -translate-x-1/2 w-[70%] h-16 rounded-full blur-2xl"
          style={{ background: "hsla(0, 100%, 60%, 0.18)" }}
        />

        {/* ring */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            animation: `sk_spin ${speedSec}s linear infinite`,
          }}
          // pause on hover
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
          }}
        >
          {items.map((card, i) => {
            const rot = i * step;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translate(-50%, -50%) rotateY(${rot}deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    width: size,
                    height: Math.round(size * 1.18),
                    background: "hsla(0, 15%, 12%, 0.75)",
                    border: `1px solid ${dk.border}`,
                    boxShadow: "0 25px 65px hsla(0, 15%, 4%, 0.60)",
                    transform: "translateZ(0px)",
                  }}
                >
                  {/* image */}
                  <div
                    className="relative h-full w-full"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* dark overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, hsla(0, 15%, 4%, 0.08) 0%, hsla(0, 15%, 4%, 0.85) 75%, hsla(0, 15%, 4%, 0.95) 100%)",
                      }}
                    />

                    {/* “video” UI pill */}
                    <div
                      className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        background: "hsla(0, 15%, 12%, 0.55)",
                        border: `1px solid ${dk.border}`,
                        color: dk.fg,
                      }}
                    >
                      ▶ Preview
                    </div>

                    {/* text */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[13px] font-semibold" style={{ color: dk.fg }}>
                        {card.title}
                      </p>
                      <p className="text-[12px] mt-1" style={{ color: dk.mutedFg }}>
                        {card.subtitle}
                      </p>

                      {/* faux scrub bar */}
                      <div className="mt-3 h-1.5 rounded-full" style={{ background: "hsla(0, 0%, 100%, 0.12)" }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: "46%", background: "hsla(0, 100%, 60%, 0.65)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* center highlight */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[34px] blur-3xl"
          style={{
            width: 240,
            height: 260,
            background: "hsla(0, 100%, 60%, 0.10)",
          }}
        />
      </div>
    </div>
  );
}

function HeroWithOrbitalCards() {
  return (
    <section
      className="rounded-3xl p-6 sm:p-8 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 15% 5%, hsla(0, 100%, 60%, 0.10) 0%, transparent 55%), " +
          "radial-gradient(900px 480px at 90% 20%, hsla(0, 100%, 60%, 0.08) 0%, transparent 60%), " +
          dk.bg,
        border: `1px solid ${dk.border}`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: text */}
        <div className="lg:col-span-5">
          <p className="text-[13px] font-semibold tracking-wide" style={{ color: dk.primary }}>
            SKLASSICS • OUR SERVICES
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl font-bold leading-tight" style={{ color: dk.fg }}>
            Tools built for <span style={{ color: dk.primary }}>scale</span>
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed max-w-xl" style={{ color: dk.mutedFg }}>
            We deliver high-conversion frontends, full stack systems, dashboards, APIs, and AI modules — with clean UI
            and production-ready architecture.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill tone="primary">React + Vite</Pill>
            <Pill>Framer Motion</Pill>
            <Pill>Spring Boot</Pill>
            <Pill>PostgreSQL</Pill>
            <Pill>Docker</Pill>
          </div>

          <a
            href="#works"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[14px] font-semibold"
            style={{
              background: dk.primary,
              color: dk.primaryFg,
              boxShadow: "0 14px 40px hsla(0, 100%, 60%, 0.18)",
            }}
          >
            Explore Works <Rocket className="h-4 w-4" />
          </a>

          <p className="mt-3 text-[12.5px]" style={{ color: dk.mutedFg }}>
            Tip: put images in <span style={{ color: dk.fg }}>public/media</span> as{" "}
            <span style={{ color: dk.fg }}>hero-1.jpg</span> ... <span style={{ color: dk.fg }}>hero-6.jpg</span>.
          </p>
        </div>

        {/* Right: rotating cards */}
        <div className="lg:col-span-7">
          <OrbitalCardCarousel items={heroCards} radius={280} size={215} speedSec={18} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ EXISTING UI ------------------------------ */

function Pill({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "primary";
}) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium"
      style={{
        background: tone === "primary" ? "hsla(0, 90%, 55%, 0.12)" : "hsla(0, 15%, 12%, 0.75)",
        border: `1px solid ${tone === "primary" ? "hsla(0, 90%, 55%, 0.25)" : dk.border}`,
        color: tone === "primary" ? dk.primary : dk.mutedFg,
      }}
    >
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, { label: string; icon: React.ReactNode; tone: "primary" | "muted" }> = {
    Live: { label: "Live", icon: <Sparkles className="h-3.5 w-3.5" />, tone: "primary" },
    "In Progress": { label: "In Progress", icon: <Rocket className="h-3.5 w-3.5" />, tone: "muted" },
    Upcoming: { label: "Upcoming", icon: <Layers className="h-3.5 w-3.5" />, tone: "muted" },
  };
  const cfg = map[status];
  return (
    <Pill tone={cfg.tone}>
      <span className="mr-1 inline-flex items-center">{cfg.icon}</span>
      {cfg.label}
    </Pill>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const icon =
    item.category === "Frontend" ? (
      <Code2 className="h-5 w-5" />
    ) : item.category === "Full Stack" ? (
      <Layers className="h-5 w-5" />
    ) : (
      <Sparkles className="h-5 w-5" />
    );

  return (
    <motion.div
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="rounded-2xl p-5 shadow-2xl"
      style={{
        background: "hsla(0, 15%, 12%, 0.65)",
        border: `1px solid ${dk.border}`,
        boxShadow: "0 18px 50px hsla(0, 15%, 4%, 0.55)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                background: "hsla(0, 90%, 55%, 0.10)",
                border: "1px solid hsla(0, 90%, 55%, 0.18)",
                color: dk.primary,
              }}
            >
              {icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-[15px] sm:text-[16px] font-semibold truncate" style={{ color: dk.fg }}>
                {item.title}
              </h3>
              <p className="text-[13px] truncate" style={{ color: dk.mutedFg }}>
                {item.clientType} {item.year ? `• ${item.year}` : ""}
              </p>
            </div>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed" style={{ color: dk.mutedFg }}>
            {item.summary}
          </p>
        </div>

        <div className="shrink-0">
          <StatusBadge status={item.status} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Pill tone="primary">{item.category}</Pill>
        <Pill>{item.scale}</Pill>
        {item.tech.slice(0, 4).map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
        {item.tech.length > 4 ? <Pill>+{item.tech.length - 4} more</Pill> : null}
      </div>

      <div className="mt-4">
        <p className="text-[12px] font-semibold" style={{ color: dk.fg }}>
          Deliverables
        </p>
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {item.deliverables.map((d) => (
            <li
              key={d}
              className="rounded-xl px-3 py-2 text-[12.5px]"
              style={{ background: "hsla(0, 10%, 4%, 0.55)", border: `1px solid ${dk.border}`, color: dk.mutedFg }}
            >
              {d}
            </li>
          ))}
        </ul>
      </div>

      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium"
          style={{ color: dk.primary }}
        >
          View <ExternalLink className="h-4 w-4" />
        </a>
      ) : null}
    </motion.div>
  );
}

const OurWorks: React.FC = () => {
  const [query, setQuery] = useState("");
  const [scale, setScale] = useState<Scale | "All">("All");
  const [category, setCategory] = useState<Category | "All">("All");
  const [status, setStatus] = useState<Status | "All">("All");

  const categories: (Category | "All")[] = ["All", "Frontend", "Full Stack", "Mobile", "API", "Dashboard", "AI/ML"];
  const scales: (Scale | "All")[] = ["All", "Small Service Clients", "Large Service Clients"];
  const statuses: (Status | "All")[] = ["All", "Live", "In Progress", "Upcoming"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return worksData.filter((w) => {
      const matchesQ =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.summary.toLowerCase().includes(q) ||
        w.tech.join(" ").toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q);

      const matchesScale = scale === "All" || w.scale === scale;
      const matchesCat = category === "All" || w.category === category;
      const matchesStatus = status === "All" || w.status === status;

      return matchesQ && matchesScale && matchesCat && matchesStatus;
    });
  }, [query, scale, category, status]);

  const small = filtered.filter((w) => w.scale === "Small Service Clients");
  const large = filtered.filter((w) => w.scale === "Large Service Clients");

  return (
    <div style={{ background: dk.dark, minHeight: "100vh" }}>
      {/* top spacing for fixed navbar */}
      <div className="h-[70px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* ✅ HERO SECTION ADDED (rest code kept same) */}
        <HeroWithOrbitalCards />

        {/* existing heading + filters */}
        <div id="works" className="mt-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <p className="text-[13px] font-semibold tracking-wide" style={{ color: dk.primary }}>
              OUR WORKS
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold" style={{ color: dk.fg }}>
              Projects we deliver as services for clients
            </h1>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed" style={{ color: dk.mutedFg }}>
              Explore small-scale and large-scale client work—frontend apps, full stack systems, dashboards, APIs, and
              upcoming builds.
            </p>

            {/* Filters */}
            <div
              className="mt-6 rounded-2xl p-4 sm:p-5"
              style={{ background: dk.bg, border: `1px solid ${dk.border}` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-5">
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2"
                    style={{ background: dk.muted, border: `1px solid ${dk.border}` }}
                  >
                    <Search className="h-4 w-4" style={{ color: dk.mutedFg }} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search works… (e.g., React, Full Stack, Dashboard)"
                      className="w-full bg-transparent outline-none text-[14px]"
                      style={{ color: dk.fg }}
                    />
                  </div>
                </div>

                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value as any)}
                    className="rounded-xl px-3 py-2 text-[14px] outline-none"
                    style={{ background: dk.muted, border: `1px solid ${dk.border}`, color: dk.fg }}
                  >
                    {scales.map((s) => (
                      <option key={s} value={s} style={{ color: "black" }}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="rounded-xl px-3 py-2 text-[14px] outline-none"
                    style={{ background: dk.muted, border: `1px solid ${dk.border}`, color: dk.fg }}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} style={{ color: "black" }}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="rounded-xl px-3 py-2 text-[14px] outline-none"
                    style={{ background: dk.muted, border: `1px solid ${dk.border}`, color: dk.fg }}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s} style={{ color: "black" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="mt-8 space-y-10">
            <section>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold" style={{ color: dk.fg }}>
                    Small Service Clients
                  </h2>
                  <p className="mt-1 text-[13px]" style={{ color: dk.mutedFg }}>
                    Quick turnaround builds: landing pages, dashboards, portals, MVPs.
                  </p>
                </div>
                <Pill>{small.length} items</Pill>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {small.map((item) => (
                  <WorkCard key={item.id} item={item} />
                ))}
                {small.length === 0 ? (
                  <div className="rounded-2xl p-6" style={{ background: dk.bg, border: `1px solid ${dk.border}` }}>
                    <p style={{ color: dk.mutedFg }}>No matching works found in Small Service Clients.</p>
                  </div>
                ) : null}
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold" style={{ color: dk.fg }}>
                    Large Service Clients
                  </h2>
                  <p className="mt-1 text-[13px]" style={{ color: dk.mutedFg }}>
                    Scalable systems: full stack platforms, secure APIs, enterprise modules.
                  </p>
                </div>
                <Pill>{large.length} items</Pill>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {large.map((item) => (
                  <WorkCard key={item.id} item={item} />
                ))}
                {large.length === 0 ? (
                  <div className="rounded-2xl p-6" style={{ background: dk.bg, border: `1px solid ${dk.border}` }}>
                    <p style={{ color: dk.mutedFg }}>No matching works found in Large Service Clients.</p>
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;