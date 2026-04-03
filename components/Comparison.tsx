"use client";

const rows = [
  { label: "AI-powered AMA hosting", vorena: true, others: false },
  { label: "On-chain payments (Base)", vorena: true, others: false },
  { label: "Session recording & transcripts", vorena: true, others: "Partial" },
  { label: "Agent personality configuration", vorena: true, others: false },
  { label: "RAG document ingestion", vorena: true, others: false },
  { label: "Live session moderation controls", vorena: true, others: "Manual" },
  { label: "Public AMA discovery feed", vorena: true, others: false },
  { label: "Agent marketplace & reputation", vorena: true, others: false },
  { label: "Wallet-based authentication", vorena: true, others: false },
];

const CheckIcon = ({ ok }: { ok: boolean | string }) => {
  if (ok === true)
    return (
      <div className="w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  if (ok === false)
    return (
      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center mx-auto">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 2l6 6M8 2L2 8" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  return (
    <span className="text-xs font-mono text-white/30">{ok}</span>
  );
};

export default function Comparison() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-4">
          <span className="font-mono text-xs text-green-500 tracking-widest">
            WHY VORENA?
          </span>
          <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white">
            There&apos;s simply{" "}
            <span className="text-green-500">no comparison</span>
          </h2>
          <p className="text-white/50 font-outfit max-w-md mx-auto">
            Traditional AMA tools weren&apos;t built for Web3. VORENA was.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-white/5">
          {/* Header */}
          <div className="grid grid-cols-3 bg-black-700 border-b border-white/5"
            style={{ background: "#141414" }}>
            <div className="px-6 py-4 font-outfit text-sm text-white/40">Feature</div>
            <div className="px-6 py-4 text-center">
              <span className="inline-flex items-center gap-1.5 font-syne font-bold text-sm text-white">
                <span className="w-4 h-4 rounded bg-green-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M4 0.5L7 2.5V5.5L4 7.5L1 5.5V2.5L4 0.5Z" fill="black" />
                  </svg>
                </span>
                VORENA
              </span>
            </div>
            <div className="px-6 py-4 text-center font-outfit text-sm text-white/30">
              Other Tools
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-green-500/3 transition-colors
                ${i % 2 === 0 ? "" : ""}
              `}
              style={{ background: i % 2 === 0 ? "#0d0d0d" : "#0a0a0a" }}
            >
              <div className="px-6 py-4 font-outfit text-sm text-white/60">
                {row.label}
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <CheckIcon ok={row.vorena} />
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <CheckIcon ok={row.others} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-green-500 text-black font-syne font-bold text-sm px-7 py-3.5 rounded-md hover:bg-green-400 transition-all duration-200"
          >
            Start for Free
          </a>
        </div>
      </div>
    </section>
  );
}
