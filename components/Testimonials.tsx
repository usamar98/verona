"use client";

const testimonials = [
  {
    quote:
      "Vorena transformed how we communicate with our holders. Our AI agent handled 400+ questions in a single AMA with zero downtime. Absolutely game-changing.",
    name: "Alex Mercer",
    role: "Co-Founder, AlphaDAO",
    initials: "AM",
  },
  {
    quote:
      "We used to dread AMAs — coordinating schedules, missing questions, incomplete answers. Now our agent does it all autonomously. Our community engagement is up 300%.",
    name: "Priya Nair",
    role: "Head of Community, NexusFi",
    initials: "PN",
  },
  {
    quote:
      "The RAG system is incredibly accurate. We uploaded our full whitepaper and tokenomics doc, and the agent answered technical questions better than most of our team could.",
    name: "Jordan Blake",
    role: "CTO, BlockVault Protocol",
    initials: "JB",
  },
  {
    quote:
      "On-chain payments were a dealbreaker for us with other platforms. Vorena solved that natively on Base. Clean, transparent, and trustless.",
    name: "Sofia Eriksson",
    role: "Founder, MetaDAO",
    initials: "SE",
  },
  {
    quote:
      "The session moderation controls are exactly what we needed. Being able to whitelist specific wallet addresses for questions is a feature no other platform offers.",
    name: "Raj Patel",
    role: "Operations Lead, DefiGrid",
    initials: "RP",
  },
  {
    quote:
      "Post-AMA transcripts and AI summaries save us hours of work. Everything's automatically documented and shareable. Our community loves the replay feature.",
    name: "Marcus Chen",
    role: "Marketing Director, ZeroLayer",
    initials: "MC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <span className="font-mono text-xs text-green-500 tracking-widest">
            TESTIMONIALS
          </span>
          <h2 className="font-syne font-extrabold text-4xl lg:text-5xl text-white">
            Web3 teams love{" "}
            <span className="text-green-500">Vorena</span>
          </h2>
          <p className="text-white/50 font-outfit max-w-md mx-auto">
            Trusted by project founders, community managers, and builders
            across the ecosystem.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-black-800 border border-white/5 rounded-2xl p-6 hover:border-green-500/15 transition-all duration-300 group"
              style={{ background: "#0d0d0d" }}
            >
              {/* Quote mark */}
              <div className="text-5xl font-syne text-green-500/15 leading-none mb-3 group-hover:text-green-500/25 transition-colors">
                &ldquo;
              </div>
              <p className="text-sm text-white/60 font-outfit leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-bold text-xs text-green-500">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-syne font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/35 font-outfit">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured quote */}
        <div
          className="mt-8 rounded-2xl border border-green-500/15 p-8 lg:p-12 relative overflow-hidden"
          style={{ background: "#0a0a0a" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="text-6xl font-syne text-green-500/20">&ldquo;</div>
            <blockquote className="font-syne font-semibold text-xl lg:text-2xl text-white leading-relaxed">
              With Vorena, our last AMA had zero unanswered questions for the
              first time ever. The agent kept the session structured, engaging,
              and on-brand throughout.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <span className="font-syne font-bold text-sm text-green-500">CK</span>
              </div>
              <div className="text-left">
                <div className="font-syne font-semibold text-white text-sm">
                  Chris Kim
                </div>
                <div className="text-xs text-white/40 font-outfit">
                  CEO, ChainPulse Labs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
