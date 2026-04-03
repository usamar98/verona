"use client";

const stats = [
  { value: "500+", label: "AMAs Hosted" },
  { value: "50K+", label: "Questions Answered" },
  { value: "200+", label: "Web3 Projects" },
  { value: "98.7%", label: "Agent Uptime" },
  { value: "<2s", label: "Avg. Response" },
  { value: "$0 Gas", label: "For Participants" },
];

const logos = [
  "AlphaDAO", "NexusFi", "BlockVault", "CryptoSphere",
  "DefiGrid", "MetaDAO", "ChainPulse", "ZeroLayer",
  "AlphaDAO", "NexusFi", "BlockVault", "CryptoSphere",
  "DefiGrid", "MetaDAO", "ChainPulse", "ZeroLayer",
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-black flex flex-col items-center justify-center py-8 px-4 hover:bg-green-500/5 transition-colors"
              style={{ background: "#0a0a0a" }}
            >
              <div className="font-syne font-extrabold text-2xl text-green-500 mb-1">
                {stat.value}
              </div>
              <div className="font-outfit text-xs text-white/40 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee: trusted by */}
        <div>
          <p className="text-center font-mono text-xs text-white/20 tracking-widest mb-8">
            TRUSTED BY LEADING WEB3 PROJECTS
          </p>
          <div className="overflow-hidden">
            <div className="marquee-inner">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity"
                >
                  <div className="w-5 h-5 rounded bg-green-500/20 border border-green-500/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M4 0.5L7 2.5V5.5L4 7.5L1 5.5V2.5L4 0.5Z" fill="#00ff88" />
                    </svg>
                  </div>
                  <span className="font-syne font-semibold text-sm text-white whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
