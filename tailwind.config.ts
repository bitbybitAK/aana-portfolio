import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF7",
        forest: {
          DEFAULT: "#2D4A3E",
          light: "#4A6B5E",
        },
        rose: {
          DEFAULT: "#B5797E",
          deep: "#8A4A4F",
        },
        ink: {
          DEFAULT: "#1D2A44",
          primary: "#1A1A1A",
          muted: "#444441",
          subtle: "#888780",
        },
        mustard: {
          DEFAULT: "#B8821F",
          deep: "#6B4810",
        },
        border: "#E5E3DD",
        shelf: "#4A3008",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
