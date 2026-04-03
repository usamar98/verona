"use client";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Agent Marketplace", href: "#" },
    { label: "Public AMA Feed", href: "#" },
  ],
  Developers: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Agent Studio", href: "#" },
    { label: "Base Chain Guide", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

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
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.5 2.2A13.2 13.2 0 0010.2 1c-.2.3-.3.6-.4.9a12.2 12.2 0 00-3.6 0A7.8 7.8 0 005.8 1 13.2 13.2 0 002.5 2.2C.4 5.3-.2 8.4.1 11.4a13.3 13.3 0 004 2c.3-.4.6-.9.8-1.4a8.6 8.6 0 01-1.3-.6l.3-.2a9.5 9.5 0 008.2 0l.3.2c-.4.2-.9.4-1.3.6.2.5.5 1 .8 1.4a13.2 13.2 0 004-2c.4-3.5-.6-6.5-2.4-9.2zM5.3 9.5c-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6 0 .9-.6 1.6-1.4 1.6zm5.4 0c-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6 0 .9-.6 1.6-1.4 1.6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="black" />
                  <path d="M9 6L12 8V12L9 14L6 12V8L9 6Z" fill="#00ff88" />
                </svg>
              </div>
              <span
                className="font-syne text-xl tracking-widest text-white"
                style={{ fontWeight: 800 }}
              >
                VORENA
              </span>
            </a>
            <p className="text-sm text-white/40 font-outfit leading-relaxed max-w-xs">
              The AI-powered AMA platform for Web3 projects. Deploy intelligent
              agents, engage your community, and operate autonomously — on Base
              chain.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-green-500 hover:border-green-500/25 hover:bg-green-500/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-syne font-semibold text-xs text-white tracking-widest uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-outfit text-white/35 hover:text-green-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright + chain info */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-outfit">
            © 2025 VORENA. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-white/25">
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/3 border border-white/5 rounded-full px-3 py-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="3" width="10" height="7" rx="1" stroke="#00ff88" strokeWidth="1" opacity="0.6" />
                <path d="M4 3V2a2 2 0 014 0v1" stroke="#00ff88" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              </svg>
              <span className="text-xs font-mono text-white/30">
                Built on Base Chain
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
