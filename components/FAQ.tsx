"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What blockchain does Vorena operate on?",
    a: "Vorena is built natively on Base chain — Coinbase's L2 Ethereum network. This means low gas fees, fast transactions, and seamless integration with the broader Ethereum ecosystem. All payments and subscriptions are settled on-chain.",
  },
  {
    q: "How does the AI agent learn about my project?",
    a: "Vorena uses Retrieval-Augmented Generation (RAG). You upload your project documents — whitepapers, tokenomics, roadmaps, FAQs — and the AI agent indexes them instantly. During AMAs, it retrieves precise context from your documents to generate accurate, relevant answers.",
  },
  {
    q: "Can I control who asks questions during a session?",
    a: "Absolutely. Vorena offers full session moderation tools: whitelist specific wallet addresses, restrict questions to token holders, mute all participants, or open the floor freely. You have the same level of control you'd expect in a professional video conferencing tool — but Web3-native.",
  },
  {
    q: "What happens after an AMA session ends?",
    a: "Every session is automatically recorded and processed. You receive a full transcript, an AI-generated summary of key topics covered, and a shareable replay link. All data is stored securely and accessible from your dashboard.",
  },
  {
    q: "Is voice interaction available?",
    a: "Text-based interaction is available from day one with sub-2-second response times. Voice interaction (TTS + STT) is on our Phase 2 roadmap and will be rolled out to all existing subscribers at no extra cost.",
  },
  {
    q: "Can I list my agent in the marketplace?",
    a: "Yes. Once built and verified, you can list your AI agent in the Vorena marketplace for other projects to rent or hire. You set your own pricing and earn revenue directly to your wallet — all on-chain.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-green-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-4">
          <span className="font-mono text-xs text-green-500 tracking-widest">
            FAQ
          </span>
          <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white">
            Got questions?{" "}
            <span className="text-green-500">We&apos;ve got answers.</span>
          </h2>
          <p className="text-white/50 font-outfit">
            Everything you need to know before deploying your first AI agent.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${open === i ? "border-green-500/25 bg-green-500/5" : "border-white/5 bg-black-800 hover:border-white/10"}
              `}
              style={{ background: open === i ? "rgba(0,255,136,0.04)" : "#0d0d0d" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-syne font-semibold text-sm text-white pr-4">
                  {String(i + 1).padStart(2, "0")} — {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300
                    ${open === i ? "bg-green-500 rotate-45" : "bg-white/5 border border-white/10"}
                  `}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke={open === i ? "black" : "rgba(255,255,255,0.5)"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out
                  ${open === i ? "max-h-60 pb-6" : "max-h-0"}
                `}
              >
                <p className="px-6 text-sm text-white/50 font-outfit leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-white/40 font-outfit">
            Still have questions?{" "}
            <a
              href="mailto:hello@vorena.io"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              Contact our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
