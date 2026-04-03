"use client";

import { useEffect, useRef, useState } from "react";

// V-shape line configuration: 3 lines on each side
const vLines = [
  // Left side (negative angles) — bottom to top-left
  { angle: -32, delay: 0, length: "38vh", opacity: 0.5, pulseSpeed: 3 },
  { angle: -22, delay: 150, length: "44vh", opacity: 0.7, pulseSpeed: 3.4 },
  { angle: -12, delay: 300, length: "50vh", opacity: 0.9, pulseSpeed: 3.8 },
  // Right side (positive angles) — bottom to top-right
  { angle: 12, delay: 300, length: "50vh", opacity: 0.9, pulseSpeed: 3.8 },
  { angle: 22, delay: 150, length: "44vh", opacity: 0.7, pulseSpeed: 3.4 },
  { angle: 32, delay: 0, length: "38vh", opacity: 0.5, pulseSpeed: 3 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(0,255,136,0.05)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* ── V-SHAPE ANIMATION ── */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", height: "100%", position: "relative", animation: "vContainerFloat 8s ease-in-out infinite" }}>
        {/* V-shape origin glow */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 50%)",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)",
            filter: "blur(30px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        />

        {/* 6 V-shape lines */}
        {vLines.map((line, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              marginLeft: "-1px",
              width: "2px",
              height: line.length,
              transformOrigin: "bottom center",
              transform: `rotate(${line.angle}deg) scaleY(${mounted ? 1 : 0})`,
              opacity: mounted ? 1 : 0,
              transition: `transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${line.delay}ms, opacity 0.6s ease ${line.delay}ms`,
            }}
          >
            {/* Line body with gradient */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1px",
                background: `linear-gradient(to top, #00ff88 0%, rgba(0,255,136,${line.opacity}) 40%, transparent 100%)`,
                position: "relative",
                overflow: "hidden",
                animation: mounted ? `vLinePulse ${line.pulseSpeed}s ease-in-out ${1.5 + line.delay / 1000}s infinite` : "none",
              }}
            >
              {/* Shimmer effect traveling up the line */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                  backgroundSize: "100% 200%",
                  animation: mounted ? `vLineShimmer ${2 + i * 0.3}s linear ${2 + line.delay / 1000}s infinite` : "none",
                }}
              />
            </div>

            {/* Glow trail along each line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "12px",
                height: "100%",
                background: `linear-gradient(to top, rgba(0,255,136,0.4) 0%, rgba(0,255,136,0.1) 50%, transparent 100%)`,
                filter: "blur(6px)",
                borderRadius: "6px",
              }}
            />
          </div>
        ))}

        {/* Inner V glow lines for depth */}
        {[
          { angle: -17, length: "34vh" },
          { angle: 17, length: "34vh" },
        ].map((line, i) => (
          <div
            key={`inner-${i}`}
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              marginLeft: "-0.5px",
              width: "1px",
              height: line.length,
              transformOrigin: "bottom center",
              transform: `rotate(${line.angle}deg) scaleY(${mounted ? 1 : 0})`,
              opacity: mounted ? 0.2 : 0,
              transition: `transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 500ms, opacity 1s ease 500ms`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, #00ff88 0%, transparent 80%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "24px",
                height: "100%",
                background: "linear-gradient(to top, rgba(0,255,136,0.12) 0%, transparent 60%)",
                filter: "blur(10px)",
              }}
            />
          </div>
        ))}
        </div>
      </div>

      {/* ── HERO TEXT — perfectly centered ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
          zIndex: 10,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,255,136,0.1)",
            border: "1px solid rgba(0,255,136,0.2)",
            borderRadius: "50px",
            padding: "6px 16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#00ff88",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "11px",
              color: "#00ff88",
              letterSpacing: "0.12em",
            }}
          >
            WEB3 AI PLATFORM — LIVE ON BASE CHAIN
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-poppins), var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 8vw, 76px)",
            lineHeight: 1.05,
            color: "#ffffff",
            margin: "0 0 20px 0",
            letterSpacing: "-0.02em",
          }}
        >
          The AI Agent for Web3{" "}
          <span className="text-glow" style={{ color: "#00ff88" }}>
            Communities
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "clamp(14px, 4vw, 18px)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 0 32px 0",
            fontWeight: 400,
          }}
        >
          Deploy intelligent AI agents that host AMAs, engage your holders,
          and autonomously represent your project — 24/7, on-chain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full px-4 sm:px-0">
          <a
            href="#pricing"
            className="glow-green-sm"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#00ff88",
              color: "#000",
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "13px 28px",
              borderRadius: "50px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#00e87a";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#00ff88";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Launch Your Agent
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              padding: "13px 24px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor" />
            </svg>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
