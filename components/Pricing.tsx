"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 79,
    yearlyPrice: 63,
    currency: "USDT",
    description: "Perfect for early-stage projects",
    features: [
      "3 AMA sessions per month",
      "Up to 500 participants",
      "Agent configuration",
      "Session transcripts",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    monthlyPrice: 149,
    yearlyPrice: 119,
    currency: "USDT",
    description: "For active communities and scaling projects",
    features: [
      "Unlimited AMA sessions",
      "Up to 5,000 participants",
      "Advanced agent configuration",
      "RAG-based document training",
      "Session replay & analytics",
      "Moderation controls",
    ],
    cta: "Start Growing",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    currency: "USDT",
    description: "For large protocols and ecosystems",
    features: [
      "Everything in Growth",
      "Unlimited participants",
      "Custom agent branding",
      "Marketplace access",
      "SLA guarantee (99.9%)",
      "Dedicated support & integrations",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-5">
          <span className="font-mono text-xs text-green-500 tracking-widest">PRICING</span>
          <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white">
            Simple, transparent <span className="text-green-500">pricing</span>
          </h2>
          <p className="text-white/50 font-outfit max-w-md mx-auto">
            No hidden fees. No on-chain surprises. Pay for what your project needs.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={`text-sm font-outfit ${!yearly ? "text-white" : "text-white/40"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${yearly ? "bg-green-500" : "bg-white/10"}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${yearly ? "left-7" : "left-1"}`} />
            </button>
            <span className={`text-sm font-outfit flex items-center gap-2 ${yearly ? "text-white" : "text-white/40"}`}>
              Yearly
              <span className="bg-green-500/20 text-green-500 text-xs font-mono px-2 py-0.5 rounded-full">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300
                ${plan.highlight ? "border-green-500/40 glow-green" : "border-white/5 hover:border-green-500/15"} border`}
              style={{ background: plan.highlight ? "#0d1a10" : "#0d0d0d" }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-black font-mono font-bold text-xs px-3 py-1 rounded-full">{plan.badge}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-syne font-bold text-lg text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-white/40 font-outfit leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="font-syne font-extrabold text-4xl text-white">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/40 font-outfit text-sm mb-1">
                      {plan.currency}/month
                    </span>
                  </div>
                ) : (
                  <div className="font-syne font-extrabold text-3xl text-white">Custom</div>
                )}
                {yearly && plan.monthlyPrice && (
                  <div className="text-xs text-green-500 font-mono mt-1">
                    Billed annually — save {(plan.monthlyPrice - plan.yearlyPrice!) * 12} {plan.currency}/yr
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm font-outfit text-white/60">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l4 4 6-6" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center py-3 rounded-xl text-sm font-syne font-bold transition-all duration-200
                  ${plan.highlight ? "bg-green-500 text-black hover:bg-green-400" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 font-outfit mt-6">
          All plans include wallet-based auth, Base chain payments, and 24/7 agent operation.
        </p>
      </div>
    </section>
  );
}
