"use client";

import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="6" r="3" fill="#00ff88" />
      </svg>
    ),
    title: "Connect Your Wallet",
    description:
      "Link your Web3 wallet in seconds. VORENA supports all major wallets on the Base chain — no lengthy KYC or complicated setup required.",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="4" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 3l2 2-2 2M19 5H15" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Create Your AI Agent",
    description:
      "Upload your project docs, define your agent's personality and tone, and configure moderation rules. Your agent learns everything about your project instantly.",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M5 12h10M5 17h12" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="17" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M16.5 17l1 1 2-2" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Launch & Share Your AMA",
    description:
      "Generate a unique session link, share it with your community, and go live. Your AI agent hosts the AMA, answers questions, and records everything in real time.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[32px] bg-[#0c0c0c] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff88]/10 h-full flex flex-col"
      style={{
        fontFamily: "var(--font-poppins), sans-serif",
      }}
    >
      {/* ── MOUSE TRACKING SPOTLIGHT ── */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 136, 0.15), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          border: "1px solid transparent",
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 136, 0.5), transparent 40%) border-box`,
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* ── CARD INNER WRAPPER ── */}
      <div className="relative z-0 h-full w-full p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle background abstract gradient */}
        <div className="absolute -top-[20%] -right-[20%] h-[150%] w-[100%] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.03)_0%,transparent_60%)] blur-2xl group-hover:bg-[radial-gradient(circle,rgba(0,255,136,0.08)_0%,transparent_60%)] transition-colors duration-700 pointer-events-none" />
        
        <div className="relative z-10 flex-col h-full flex justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-inner group-hover:scale-110 group-hover:bg-[#00ff88]/10 group-hover:border-[#00ff88]/20 transition-all duration-500 ease-out">
                {step.icon}
              </div>
              <span className="font-mono font-bold text-6xl text-white/[0.03] group-hover:text-[#00ff88]/10 transition-colors duration-500 select-none">
                {step.number}
              </span>
            </div>
            
            <h3 className="mb-4 text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {step.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-white/50 font-light">
              {step.description}
            </p>
          </div>
        </div>

        {/* Decorative Graphic Element based on index */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] group-hover:opacity-20 transition-opacity duration-700 flex justify-end items-end p-4">
          {index === 0 && (
             <svg width="150" height="150" viewBox="0 0 200 200" fill="none" className="translate-x-1/4 translate-y-1/4">
                <circle cx="100" cy="100" r="80" stroke="#00ff88" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="40" stroke="#00ff88" strokeWidth="1" />
             </svg>
          )}
          {index === 1 && (
             <svg width="150" height="150" viewBox="0 0 200 200" fill="none" className="translate-x-1/4 translate-y-1/4">
                <rect x="20" y="20" width="160" height="160" rx="20" stroke="#00ff88" strokeWidth="1" strokeDasharray="4 4" />
                <rect x="60" y="60" width="80" height="80" rx="10" stroke="#00ff88" strokeWidth="1" />
             </svg>
          )}
          {index === 2 && (
             <svg width="150" height="150" viewBox="0 0 200 200" fill="none" className="translate-x-1/4 translate-y-1/4">
                <polygon points="100,20 180,180 20,180" stroke="#00ff88" strokeWidth="1" strokeDasharray="4 4" />
                <polygon points="100,60 140,140 60,140" stroke="#00ff88" strokeWidth="1" />
             </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#00ff88]" style={{ fontFamily: "var(--font-mono), monospace" }}>
              HOW IT WORKS
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif", lineHeight: 1.1 }}
          >
            Up and running in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88]">3 steps.</span>
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            From wallet connect to live AMA — set up your intelligent agent in under 5 minutes. No complex configuration required.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,auto)]">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Watch video link */}
        <div className="flex justify-center mt-20 relative z-20">
          <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-[#00ff88]/30">
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="flex items-center gap-3" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              <div className="w-8 h-8 rounded-full bg-[#00ff88]/20 flex items-center justify-center group-hover:bg-[#00ff88]/40 transition-colors">
                 <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2.5l7 4.5-7 4.5V2.5Z" fill="#00ff88" />
                 </svg>
              </div>
              Watch a live demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
