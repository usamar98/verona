"use client";

const productLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Agent Marketplace", href: "#" },
  { label: "Public AMA Feed", href: "#" },
];

const socials = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M12.6 1.5h2.3L9.9 6.8 15.7 14h-4.2l-3.6-4.7L3.5 14H1.2l5.3-6L1 1.5h4.3L8.8 5.9 12.6 1.5zM11.8 12.7h1.3L5.3 2.8H3.9l7.9 9.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0a8 8 0 100 16A8 8 0 008 0zM3.9 8.2l7.3-2.8c.3-.1.6.1.5.5l-1.2 5.8c-.1.4-.4.5-.7.3L7.7 10l-.9.9c-.1.1-.2.2-.4.2l.2-2 4.4-4c.2-.2 0-.3-.3-.1L5.2 9.3l-2-.6c-.4-.1-.4-.4.2-.6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      {/* Soft top glow */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-32 bg-green-500/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top: Brand statement + Product nav */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-7 space-y-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-md bg-green-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="black" />
                  <path d="M9 6L12 8V12L9 14L6 12V8L9 6Z" fill="#00ff88" />
                </svg>
              </div>
              <span
                className="font-syne text-2xl tracking-widest text-white"
                style={{ fontWeight: 800 }}
              >
                Vorena
              </span>
            </a>

            <h3 className="font-syne text-3xl md:text-4xl text-white leading-tight max-w-xl tracking-tight">
              The AI-powered AMA platform for Web3.
              <span className="block text-white/40">
                Built autonomous, on Base.
              </span>
            </h3>

            <p className="text-sm text-white/45 font-outfit leading-relaxed max-w-md">
              Deploy intelligent agents, engage your community, and operate
              autonomously — all from one elegant control surface.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product nav */}
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/5">
            <h4 className="font-syne font-semibold text-xs text-white/60 tracking-[0.2em] uppercase mb-6">
              Product
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-outfit text-white/55 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright + chain info */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-outfit">
            © 2025 Vorena. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-white/30">
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="3" width="10" height="7" rx="1" stroke="#00ff88" strokeWidth="1" opacity="0.6" />
                <path d="M4 3V2a2 2 0 014 0v1" stroke="#00ff88" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              </svg>
              <span className="text-xs font-mono text-white/35">
                Built on Base Chain
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
