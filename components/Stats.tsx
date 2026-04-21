"use client";

import { useRef, useState } from "react";

const stats = [
  { value: "500+", label: "AMAs Hosted" },
  { value: "50K+", label: "Questions Answered" },
  { value: "200+", label: "Web3 Projects" },
  { value: "98.7%", label: "Agent Uptime" },
  { value: "<2s", label: "Avg. Response" },
  { value: "$0 Gas", label: "For Participants" },
];

const logos = [
  "Pulse", "ZeroLayer", "AlphaDAO", "NexusFI",
  "BlockVault", "CryptoSphere", "DefiGrid", "MoonDAO",
  "Pulse", "ZeroLayer", "AlphaDAO", "NexusFI",
  "BlockVault", "CryptoSphere", "DefiGrid", "MoonDAO",
];

const valueProps = [
  { title: "Instant AMAs", desc: "Launch AI-powered sessions in seconds" },
  { title: "Always Active", desc: "Agents respond 24/7 without downtime" },
  { title: "<2s Response", desc: "Real-time interaction at scale" },
  { title: "Zero Coordination", desc: "No scheduling, no manual effort" },
  { title: "Protocol-Aware", desc: "Trained on your docs & logic" },
  { title: "Gasless Access", desc: "Seamless for participants" },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-black flex flex-col items-center justify-center py-8 px-4 hover:bg-green-500/5 transition-colors" style={{ background: "#0a0a0a" }}>
              <div className="font-syne font-extrabold text-2xl text-green-500 mb-1">{stat.value}</div>
              <div className="font-outfit text-xs text-white/40 text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Value Props Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-[#00ff88] tracking-widest">WHY VORENA</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueProps.map((prop, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#0c0c0c] border border-white/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#00ff88]/20 hover:shadow-lg hover:shadow-[#00ff88]/5">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: "var(--font-syne)" }}>{prop.title}</h4>
                    <p className="text-white/40 text-sm font-light">{prop.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div>
          <p className="text-center font-mono text-xs text-white/20 tracking-widest mb-8">TRUSTED BY LEADING WEB3 PROJECTS</p>
          <div className="overflow-hidden">
            <div className="marquee-inner">
              {logos.map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
                  <div className="w-5 h-5 rounded bg-green-500/20 border border-green-500/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 0.5L7 2.5V5.5L4 7.5L1 5.5V2.5L4 0.5Z" fill="#00ff88" /></svg>
                  </div>
                  <span className="font-syne font-semibold text-sm text-white whitespace-nowrap">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
