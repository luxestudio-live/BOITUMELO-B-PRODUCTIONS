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
        bg: "#FFFFFF",
        "bg-soft": "#F6F2EA",
        ink: "#0B1320",
        "ink-deep": "#070D16",
        "ink-soft": "#4A5568",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#8A6A2F",
          light: "#E8DCC3",
        },
        line: "#E6E1D6",
        "white-on-dark": "#FFFFFF",
        "text-on-dark": "#D4DCE8",
        brand: {
          black: "#0B1320",
          "black-elevated": "#F6F2EA",
          "black-surface": "#F6F2EA",
          teal: "#0B1320",
          "teal-dark": "#070D16",
          "teal-deep": "#070D16",
          "teal-light": "#4A5568",
          "teal-muted": "#4A5568",
          gold: "#B08D57",
          "gold-light": "#E8DCC3",
          "gold-dark": "#8A6A2F",
          "gold-deep": "#8A6A2F",
          "gold-glow": "rgba(176, 141, 87, 0.15)",
          white: "#FFFFFF",
          cream: "#F6F2EA",
          gray: "#4A5568",
          "gray-light": "#D4DCE8",
          "gray-dark": "#0B1320",
          line: "#E6E1D6",
          "bg-soft": "#F6F2EA",
          ink: "#0B1320",
          "ink-soft": "#4A5568",
        },
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(11, 19, 32, 0.07)",
        editorial: "0 10px 30px rgba(11, 19, 32, 0.07)",
      },
      borderRadius: {
        sm: "2px",
        btn: "2px",
      },
      transitionDuration: {
        250: "250ms",
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Cinzel", "Copperplate", "Trajan Pro", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
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

