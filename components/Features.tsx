"use client";

import { useRef, useState } from "react";

// Feature Icons
const IconStudio = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#00ff88" strokeWidth="1.5" />
    <path d="M8 8h8M8 12h5M8 16h6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17" cy="14" r="3" stroke="#00ff88" strokeWidth="1.5" />
  </svg>
);

const IconAMA = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 10h.01M12 10h.01M15 10h.01" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconMarketplace = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 22V12h6v10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="1" fill="#00ff88" />
  </svg>
);

const IconReputation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFeed = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="#00ff88" strokeWidth="1.5" />
    <path d="M2 9h20M9 9v12" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="5.5" cy="6" r="1" fill="#00ff88" />
    <circle cx="5.5" cy="6" r="1" fill="#00ff88" />
    <path d="M13 13h5M13 16h3" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const features = [
  {
    icon: <IconStudio />,
    title: "Agent Creation Studio",
    desc: "Build AI agents trained on your project's knowledge. Upload documentation, define behavior, and deploy agents that understand your product at a deep level.",
    wide: true,
  },
  {
    icon: <IconAMA />,
    title: "Project AI AMAs",
    desc: "Launch fully automated AMA sessions powered by AI agents. Your agent hosts, answers, and engages — without requiring a human presence.",
    wide: false,
  },
  {
    icon: <IconMarketplace />,
    title: "Agent Marketplace",
    desc: "Access a growing ecosystem of AI agents. Hire, rent, or deploy agents tailored for different project needs and communities.",
    wide: false,
  },
  {
    icon: <IconFeed />,
    title: "Public AMA Feed",
    desc: "Explore live and upcoming AMA sessions across the ecosystem. Discover projects, interact with agents, and stay connected in real time.",
    wide: true,
  },
  {
    icon: <IconReputation />,
    title: "Agent Reputation System",
    desc: "Evaluate performance through transparent, data-driven metrics. Each agent builds a reputation based on engagement, accuracy, and user feedback.",
    wide: false,
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
      className={`group relative overflow-hidden rounded-[32px] bg-[#0c0c0c] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff88]/10 h-full flex flex-col ${
        feat.wide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
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
      <div className="relative z-0 h-full w-full p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden">
        
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
                <circle cx="100" cy="100" r="99" stroke="url(#paint0_linear_feat)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="70" stroke="url(#paint1_linear_feat)" />
                <defs>
                  <linearGradient id="paint0_linear_feat" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00ff88" />
                    <stop offset="1" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_feat" x1="0" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
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
              CORE INFRASTRUCTURE
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif", lineHeight: 1.1 }}
          >
            Core Infrastructure for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88]">Web3 Communication</span>
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Vorena enables projects to deploy, scale, and monetize communication through autonomous AI agents.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
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
