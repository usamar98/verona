"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar */}
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          borderRadius: "50px",
          width: "calc(100% - 48px)",
          maxWidth: "1200px",
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(5, 5, 5, 0.75)"
            : "rgba(5, 5, 5, 0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: scrolled
            ? "1px solid rgba(0, 255, 136, 0.18)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,136,0.05)"
            : "0 4px 24px rgba(0,0,0,0.3)",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
              }}
            >
              <img 
                src="/vorena logo trans.png" 
                alt="Vorena Logo" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-syne), var(--font-poppins), sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                letterSpacing: "0.15em",
                color: "#ffffff",
              }}
            >
              Vorena
            </span>
          </a>

          {/* Desktop Links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "32px" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#00ff88")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "12px" }}
          >
            <a
              href="#"
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 500,
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "50px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")
              }
            >
              Sign In
            </a>
            <a
              href="#pricing"
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                color: "#000",
                background: "#00ff88",
                textDecoration: "none",
                padding: "9px 22px",
                borderRadius: "50px",
                transition: "background 0.2s, transform 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#00e87a";
                (e.target as HTMLElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#00ff88";
                (e.target as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,0.7)",
              padding: "4px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown — appears below the pill */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: "92px",
            left: "24px",
            right: "24px",
            zIndex: 9998,
            borderRadius: "24px",
            background: "rgba(5, 5, 5, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 255, 136, 0.12)",
            padding: "20px 24px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "12px",
                fontSize: "14px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                color: "#000",
                background: "#00ff88",
                textDecoration: "none",
                padding: "12px 0",
                borderRadius: "50px",
                textAlign: "center",
                display: "block",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
