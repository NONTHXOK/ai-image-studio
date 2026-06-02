import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          900: "#0f172a",
        },
        ink: {
          950: "#020203",
          900: "#080809",
          800: "#101012",
          700: "#1a1a1c",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 255, 255, 0.08)",
        "soft-ring": "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 60%)",
        "panel-grid":
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
