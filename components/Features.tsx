"use client";

import { useRef, useState, ReactNode } from "react";

// Feature Icons definitions
const IconBrain = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00ff88" strokeWidth="1.5" />
    <path d="M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 2V8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 16V22" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconPulse = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#00ff88" strokeWidth="1.5" />
    <path d="M3 12h4l2 -3 4 8 2 -5h6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6v6.22c0 5.43 3.82 10.45 9 11.78 5.18-1.33 9-6.35 9-11.78V6l-9-4z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBlock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12l10 5 10-5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="#00ff88" strokeWidth="1.5" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#00ff88" strokeWidth="1.5" />
  </svg>
);

const features = [
  {
    icon: <IconBrain />,
    title: "On-Chain Intelligence",
    desc: "Your agent autonomously reads live smart contracts, reads your whitepaper, and instantly answers any community questions.",
    wide: true,
  },
  {
    icon: <IconPulse />,
    title: "Sub-2s Responses",
    desc: "Lightning fast responses via advanced RAG architecture tailored for Discord and Telegram.",
    wide: false,
  },
  {
    icon: <IconShield />,
    title: "Sybil & FUD Defense",
    desc: "Built-in moderation AI tracks user intent, bans malicious actors, and handles coordinated FUD campaigns automatically.",
    wide: false,
  },
  {
    icon: <IconSettings />,
    title: "Brand Personality",
    desc: "Is your community professional or degen? Give your agent specific instructions strictly modeling your brand's unique tone of voice.",
    wide: false,
  },
  {
    icon: <IconBlock />,
    title: "Automated Bounties",
    desc: "Setup rules to instantly tip users on Base chain for good questions or engagement during AMA sessions.",
    wide: true,
  },
];

// Interactive feature card with mouse-tracking gradient glow
function FeatureCard({
  feat,
}: {
  feat: typeof features[0];
}) {
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
      className={`group relative overflow-hidden rounded-[32px] bg-[#0c0c0c] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff88]/10 ${
        feat.wide ? "lg:col-span-2" : "col-span-1"
      }`}
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
        <div className="absolute -bottom-[20%] -right-[20%] h-[150%] w-[100%] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_60%)] blur-2xl group-hover:bg-[radial-gradient(circle,rgba(0,255,136,0.08)_0%,transparent_60%)] transition-colors duration-700" />
        
        <div className="relative z-10">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-inner group-hover:scale-110 group-hover:bg-[#00ff88]/10 group-hover:border-[#00ff88]/20 transition-all duration-500 ease-out">
            {feat.icon}
          </div>
          
          <h3 className="mb-3 text-2xl font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {feat.title}
          </h3>
          <p className="text-[16px] leading-[1.6] text-white/50 font-light max-w-sm">
            {feat.desc}
          </p>
        </div>

        {/* Decorative Graphic Element for wide cards */}
        {feat.wide && (
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="translate-x-1/4 translate-y-1/4">
                <circle cx="100" cy="100" r="99" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="70" stroke="url(#paint1_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00ff88" />
                    <stop offset="1" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="0" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="transparent" />
                    <stop offset="1" stopColor="#00ff88" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#00ff88]" style={{ fontFamily: "var(--font-mono), monospace" }}>
              ENTERPRISE GRADE
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif", lineHeight: 1.1 }}
          >
            Capabilities that feel <br className="hidden md:block" />
            like <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88]">magic.</span>
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Everything you need to run flawless, autonomous communities at scale. Zero engineers required to set up.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {features.map((feat, i) => (
            <FeatureCard key={i} feat={feat} />
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-32 relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/10 bg-black shadow-[0_0_15px_rgba(0,255,136,0.5)] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#00ff88]" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
