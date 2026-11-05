import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          "black-elevated": "#070C0E",
          "black-surface": "#0C1518",
          teal: "#183036",
          "teal-dark": "#0E1D21",
          "teal-deep": "#081215",
          "teal-light": "#24434B",
          "teal-muted": "#3A5C65",
          gold: "#CB8D44",
          "gold-light": "#E2A65F",
          "gold-dark": "#9F6C2E",
          "gold-glow": "rgba(203, 141, 68, 0.2)",
          white: "#FFFFFF",
          cream: "#F7F6F3",
          gray: "#8E9DA1",
          "gray-light": "#C3CDD0",
          "gray-dark": "#1B282C",
        },
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Copperplate", "Cinzel", "Trajan Pro", "Georgia", "serif"],
        typewriter: ["'American Typewriter'", "Courier New", "Courier", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.4rem, 2.5vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
        "editorial-quote": ["clamp(1.25rem, 2.2vw, 1.85rem)", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "film-grain": "radial-gradient(rgba(203, 141, 68, 0.04) 1px, transparent 0)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "cinematic": "cubic-bezier(0.16, 1, 0.3, 1)",
        "cinematic-slow": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

