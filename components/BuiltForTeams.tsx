"use client";

import { useRef, useState } from "react";

const teams = [
  {
    emoji: "🚀",
    title: "For Founders",
    desc: "Eliminate the need for constant presence. Launch AMAs, communicate updates, and engage your community — without coordination overhead.",
    keyLine: "Stay visible without being online.",
  },
  {
    emoji: "📊",
    title: "For Community Managers",
    desc: "Keep conversations active and responsive at all times. Vorena ensures every question is answered and every user interaction is handled instantly.",
    keyLine: "No missed questions. No dead chats.",
  },
  {
    emoji: "🧠",
    title: "For Builders",
    desc: "Deploy agents trained on your protocol's logic and documentation. Let your product speak for itself through intelligent, always-available agents.",
    keyLine: "Turn your protocol into a living system.",
  },
];

function TeamCard({ team }: { team: typeof teams[0] }) {
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
      className="group relative overflow-hidden rounded-[32px] bg-[#0c0c0c] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00ff88]/10 h-full flex flex-col"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,136,0.12), transparent 40%)` }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          border: "1px solid transparent",
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,136,0.4), transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-0 h-full w-full p-8 md:p-10 flex flex-col justify-between overflow-hidden">
        <div className="absolute -bottom-[20%] -right-[20%] h-[150%] w-[100%] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_60%)] blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col h-full">
          <div className="text-4xl mb-6">{team.emoji}</div>
          <h3 className="mb-4 text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
            {team.title}
          </h3>
          <p className="text-[15px] leading-[1.7] text-white/50 font-light mb-6 flex-1">
            {team.desc}
          </p>
          <div className="pt-4 border-t border-white/5">
            <p className="text-sm font-medium text-[#00ff88] italic" style={{ fontFamily: "var(--font-poppins)" }}>
              {team.keyLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuiltForTeams() {
  return (
    <section id="teams" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#00ff88]" style={{ fontFamily: "var(--font-mono)" }}>
              BUILT FOR WEB3 TEAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne)", lineHeight: 1.1 }}>
            Built for teams that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88]">scale communication</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Vorena enables every role in a Web3 project to operate with consistent, autonomous interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <TeamCard key={i} team={team} />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl font-semibold text-white/60" style={{ fontFamily: "var(--font-syne)" }}>
            One system. Every interaction.{" "}
            <span className="text-[#00ff88] text-glow">Always active.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
