"use client";

import { useRef, useState } from "react";

const logos = [
  "Instant AMAs", "Always Active", "<2s Response", "Zero Coordination", "Protocol-Aware", "Gasless Access",
  "Instant AMAs", "Always Active", "<2s Response", "Zero Coordination", "Protocol-Aware", "Gasless Access",
];

const valueProps = [
  {
    index: "01",
    category: "DEPLOYMENT",
    title: "Instant AMAs",
    desc: "Launch AI-powered AMA sessions in seconds — no setup calls, no engineering lift, no delay.",
    stat: "< 60s",
    statLabel: "Time to Live",
    highlight: "No infrastructure needed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    index: "02",
    category: "AVAILABILITY",
    title: "Always Active",
    desc: "Your AI agent is live around the clock — answering holders, fielding questions, and representing your project every hour.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    highlight: "Zero maintenance required",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "03",
    category: "PERFORMANCE",
    title: "<2s Response",
    desc: "Sub-second AI answers keep your community engaged at scale — no lag, no wait, no dropped questions.",
    stat: "< 2s",
    statLabel: "Avg. Latency",
    highlight: "Real-time at any scale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M15 8l4 4-4 4" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    index: "04",
    category: "WORKFLOW",
    title: "Zero Coordination",
    desc: "No scheduling emails, no moderator headaches. Vorena agents run the entire session autonomously from start to finish.",
    stat: "0",
    statLabel: "Manual Steps",
    highlight: "Fully autonomous execution",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#00ff88" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#00ff88" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#00ff88" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#00ff88" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    index: "05",
    category: "INTELLIGENCE",
    title: "Protocol-Aware",
    desc: "Feed your whitepaper, tokenomics, and docs — the agent learns your protocol deeply and answers with expert-level precision.",
    stat: "RAG",
    statLabel: "Powered Engine",
    highlight: "Trained on your own knowledge",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a7 7 0 017 7c0 3.5-2.5 6-4 7.5L12 22l-3-5.5C7.5 15 5 12.5 5 9a7 7 0 017-7z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="9" r="2" stroke="#00ff88" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    index: "06",
    category: "ACCESSIBILITY",
    title: "Gasless Access",
    desc: "Participants never pay gas. Vorena abstracts all chain complexity so your community engages freely and instantly.",
    stat: "$0",
    statLabel: "Gas for Users",
    highlight: "Frictionless UX for holders",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ValueCard({ prop, i }: { prop: typeof valueProps[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff88]/25 hover:shadow-xl hover:shadow-[#00ff88]/5"
      style={{ minHeight: "260px" }}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(0,255,136,0.07), transparent 60%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #00ff88 50%, transparent 100%)",
          opacity: hovered ? 0.6 : 0,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-mono tracking-[0.2em] px-2 py-0.5 rounded-full border"
              style={{
                color: "#00ff88",
                borderColor: "rgba(0,255,136,0.2)",
                background: "rgba(0,255,136,0.06)",
              }}
            >
              {prop.category}
            </span>
          </div>
          <span
            className="font-mono text-[11px] tabular-nums"
            style={{ color: "rgba(255,255,255,0.12)" }}
          >
            {prop.index}
          </span>
        </div>

        {/* Icon */}
        <div
          className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(0,255,136,0.06)",
            borderColor: "rgba(0,255,136,0.15)",
          }}
        >
          {prop.icon}
        </div>

        {/* Title & desc */}
        <h4
          className="text-white font-semibold text-lg mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          {prop.title}
        </h4>
        <p className="text-white/40 text-sm leading-relaxed font-light flex-1">
          {prop.desc}
        </p>

        {/* Bottom stat row */}
        <div
          className="mt-5 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col">
            <span
              className="font-mono font-bold text-lg leading-none"
              style={{ color: "#00ff88" }}
            >
              {prop.stat}
            </span>
            <span className="text-[10px] text-white/30 mt-0.5 tracking-wide">
              {prop.statLabel}
            </span>
          </div>
          <span
            className="text-[11px] px-3 py-1 rounded-full"
            style={{
              color: "rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {prop.highlight}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Value Props Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-3">
            <span className="font-mono text-xs text-[#00ff88] tracking-widest">WHY VORENA</span>
            <p className="text-white/20 text-sm max-w-xs mx-auto font-light">
              Six reasons builders choose Vorena over everything else.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueProps.map((prop, i) => (
              <ValueCard key={i} prop={prop} i={i} />
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div>
          <p className="text-center font-mono text-xs text-white/20 tracking-widest mb-8">TRUSTED BY LEADING WEB3 PROJECTS</p>
          <div className="overflow-hidden">
            <div className="marquee-inner">
              {logos.map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
                  <div className="w-5 h-5 rounded bg-green-500/20 border border-green-500/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 0.5L7 2.5V5.5L4 7.5L1 5.5V2.5L4 0.5Z" fill="#00ff88" /></svg>
                  </div>
                  <span className="font-syne font-semibold text-sm text-white whitespace-nowrap">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
