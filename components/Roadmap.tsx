"use client";

import { useRef, useState } from "react";

const stages = [
  {
    number: "01",
    emoji: "⚡",
    title: "Communication Bootstrap",
    desc: "Establish real-time AI interaction as a primitive in Web3.",
    bullets: [
      "AI AMA sessions via bot → dApp",
      "Real-time question handling",
      "Voice + chat interaction layer",
      "Session-based communication model",
    ],
  },
  {
    number: "02",
    emoji: "🧠",
    title: "Agent Infrastructure",
    desc: "Transition from sessions to persistent intelligence.",
    bullets: [
      "Agent Creation Studio",
      "Protocol-trained agents (RAG)",
      "Personality + behavior configuration",
      "Persistent agent identity",
    ],
  },
  {
    number: "03",
    emoji: "🧩",
    title: "Agent Economy",
    desc: "Introduce ownership, distribution, and monetization of agents.",
    bullets: [
      "Agent Marketplace",
      "Pay-per-agent / subscription model",
      "Cross-project agent deployment",
      "Reputation-based ranking system",
    ],
  },
  {
    number: "04",
    emoji: "🌐",
    title: "Network Layer",
    desc: "Move from isolated agents to an interconnected system.",
    bullets: [
      "Agents interacting across projects",
      "Shared intelligence layer",
      "Cross-platform deployment",
      "Autonomous coordination between agents",
    ],
  },
  {
    number: "05",
    emoji: "🏗",
    title: "Protocol Standard",
    desc: "Establish Vorena as the default communication interface for Web3.",
    bullets: [
      "Communication SDK / API layer",
      "Native integration into dApps",
      "On-chain identity linkage",
      "Agent-as-a-service standard",
    ],
  },
];

function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[24px] bg-[#0c0c0c] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00ff88]/5"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,136,0.1), transparent 40%)` }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          border: "1px solid transparent",
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,136,0.35), transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-0 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{stage.emoji}</span>
            <span className="font-mono text-xs text-[#00ff88]/60 tracking-widest">STAGE {stage.number}</span>
          </div>
          <span className="font-mono font-bold text-5xl text-white/[0.03] group-hover:text-[#00ff88]/10 transition-colors duration-500 select-none">
            {stage.number}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
          {stage.title}
        </h3>
        <p className="text-sm text-white/40 mb-5 font-light">{stage.desc}</p>
        <ul className="space-y-2">
          {stage.bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-white/50">
              <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l4 4 6-6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#00ff88]" style={{ fontFamily: "var(--font-mono)" }}>
              SYSTEM EVOLUTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne)", lineHeight: 1.1 }}>
            System{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88]">Evolution</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Vorena is evolving from a single use-case into a foundational communication layer for Web3.
          </p>
        </div>

        {/* Timeline connector line for desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/30 via-[#00ff88]/10 to-transparent -translate-x-1/2 z-0" />
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.slice(0, 3).map((stage, i) => (
            <StageCard key={i} stage={stage} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {stages.slice(3).map((stage, i) => (
            <StageCard key={i + 3} stage={stage} index={i + 3} />
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00ff88]/5 border border-[#00ff88]/15">
            <span className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
              From interaction → infrastructure →{" "}
              <span className="text-[#00ff88] text-glow">standard.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
