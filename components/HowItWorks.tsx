"use client";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="12" rx="2" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="5" r="3" fill="#00ff88" />
      </svg>
    ),
    title: "Connect Your Wallet",
    description:
      "Link your Web3 wallet in seconds. VORENA supports all major wallets on the Base chain — no lengthy KYC or complicated setup required.",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M3 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 2l2 2-2 2M18 4H14" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Create Your AI Agent",
    description:
      "Upload your project docs, define your agent's personality and tone, and configure moderation rules. Your agent learns everything about your project instantly.",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 10h10M4 14h12" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="14" r="4" fill="none" stroke="#00ff88" strokeWidth="1.5" />
        <path d="M15.5 14l1 1 2-2" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Launch & Share Your AMA",
    description:
      "Generate a unique session link, share it with your community, and go live. Your AI agent hosts the AMA, answers questions, and records everything in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs text-green-500 tracking-widest">
            HOW IT WORKS
          </span>
          <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white">
            Up and running in{" "}
            <span className="text-green-500">3 steps</span>
          </h2>
          <p className="text-white/50 font-outfit max-w-xl mx-auto">
            From wallet connect to live AMA — set up your intelligent agent
            in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px border-t border-dashed border-green-500/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-black-800 border border-white/5 rounded-2xl p-7 hover:border-green-500/20 transition-all duration-300 group"
              style={{ background: "#0d0d0d" }}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/15 transition-colors">
                  {step.icon}
                </div>
                <span className="font-mono font-bold text-4xl text-white/5 group-hover:text-green-500/10 transition-colors select-none">
                  {step.number}
                </span>
              </div>

              <h3 className="font-syne font-bold text-lg text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 font-outfit leading-relaxed">
                {step.description}
              </p>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Watch video link */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-sm font-outfit text-white/40 hover:text-green-500 transition-colors group">
            <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-green-500/30 flex items-center justify-center transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 2.5l7 4.5-7 4.5V2.5Z" fill="currentColor" />
              </svg>
            </div>
            Watch a live demo
          </button>
        </div>
      </div>
    </section>
  );
}
