import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#33ffaa",
          500: "#00ff88",
          600: "#00cc6a",
          700: "#009e52",
          900: "#001a0d",
          950: "#000d07",
        },
        black: {
          DEFAULT: "#000000",
          900: "#050505",
          800: "#0d0d0d",
          700: "#141414",
          600: "#1c1c1c",
          500: "#242424",
          400: "#2e2e2e",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
        "scroll-left": "scrollLeft 30s linear infinite",
        "grid-flow": "gridFlow 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,255,136,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,255,136,0.6)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gridFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
