"use client";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-Time Q&A Engine",
    desc: "Sub-2-second AI responses powered by RAG technology — your agent always has the right answer, instantly.",
    wide: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M6 7h8M6 11h5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Session Recording & Transcripts",
    desc: "Every AMA is automatically recorded. Full transcripts, AI summaries, and replay links generated post-session.",
    wide: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4l12 12M4 16L16 4" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="7" stroke="#00ff88" strokeWidth="1.5" />
      </svg>
    ),
    title: "Advanced Session Controls",
    desc: "Mute all, allow specific wallets, whitelist addresses, manage the floor — full moderation power like Zoom, built for Web3.",
    wide: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10h4M10 3v4" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="3" cy="10" r="1.5" fill="#00ff88" />
      </svg>
    ),
    title: "Customizable Agent Personality",
    desc: "Define tone, personality type (Professional / Hype / Technical), and communication style. Your agent speaks your brand.",
    wide: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="6" width="14" height="10" rx="2" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M7 6V4a3 3 0 016 0v2" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="11" r="1.5" fill="#00ff88" />
      </svg>
    ),
    title: "On-Chain Payments via Base",
    desc: "Pay-per-session and subscription plans settled on Base chain. Transparent, trustless, and instantly verifiable.",
    wide: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 6l8 6 8-6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#00ff88" strokeWidth="1.5" />
      </svg>
    ),
    title: "RAG Document Upload",
    desc: "Feed your agent whitepapers, roadmaps, FAQs, and tokenomics docs. It becomes an expert on your project in seconds.",
    wide: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs text-green-500 tracking-widest">
              FEATURES
            </span>
            <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Built for Web3 communication,{" "}
              <span className="text-green-500">redefined</span>
            </h2>
          </div>
          <p className="text-white/50 font-outfit text-sm max-w-sm lg:text-right leading-relaxed">
            Everything your project needs to run flawless AI-powered AMAs — no engineers required.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`relative bg-black-800 border border-white/5 rounded-2xl p-6 hover:border-green-500/20 transition-all duration-300 group overflow-hidden
                ${feat.wide ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
              style={{ background: "#0d0d0d" }}
            >
              {/* Hover glow */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(0,255,136,0.06) 0%, transparent 60%)" }} />

              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/15 transition-colors">
                {feat.icon}
              </div>
              <h3 className="font-syne font-semibold text-base text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-white/45 font-outfit leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-outfit font-medium text-green-500 hover:text-green-400 transition-colors"
          >
            Explore all features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
