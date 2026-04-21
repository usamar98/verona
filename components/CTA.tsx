"use client";

export default function CTA() {
  return (
    <section className="py-12 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 lg:px-16 lg:py-20"
          style={{ background: "#080f0a" }}
        >
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-green-500/20" />

          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-green-500/5 blur-3xl pointer-events-none" />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-green-500 tracking-widest">
                READY TO DEPLOY YOUR AGENT?
              </span>
            </div>

            <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Your community deserves{" "}
              <span className="text-green-500 text-glow">better AMAs</span>
            </h2>

            <p className="text-white/50 font-outfit text-lg leading-relaxed">
              Join 200+ Web3 projects that have transformed their community
              communication with Vorena. Connect your wallet and launch in
              under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-green-500 text-black font-syne font-bold text-sm px-8 py-4 rounded-xl hover:bg-green-400 transition-all duration-200 glow-green-sm w-full sm:w-auto justify-center"
              >
                Launch Your First Agent
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-outfit text-sm border border-white/10 hover:border-green-500/30 px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
              >
                View Live Demo
              </a>
            </div>

            <p className="text-xs text-white/25 font-mono">
              No credit card required · Connect wallet to start · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
