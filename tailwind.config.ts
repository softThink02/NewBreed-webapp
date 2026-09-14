import type { Config } from "tailwindcss";

/**
 * NEWBREED design tokens.
 *
 * Colour values live as RGB triplets in app/globals.css (CSS custom
 * properties) so the palette can evolve without touching components.
 * Warm ivory ground, deep charcoal ink, one understated clay accent.
 * No metallic gold.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--nb-bg) / <alpha-value>)",
        surface: "rgb(var(--nb-surface) / <alpha-value>)",
        ink: "rgb(var(--nb-ink) / <alpha-value>)",
        charcoal: "rgb(var(--nb-charcoal) / <alpha-value>)",
        muted: "rgb(var(--nb-muted) / <alpha-value>)",
        border: "rgb(var(--nb-border) / <alpha-value>)",
        accent: "rgb(var(--nb-accent) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial, responsive type scale. Display and headings use clamp()
        // so typography recomposes rather than merely shrinking.
        display: [
          "clamp(2.75rem, 1.5rem + 5.5vw, 6.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(2.25rem, 1.4rem + 3.2vw, 4rem)",
          { lineHeight: "1.08", letterSpacing: "-0.015em" },
        ],
        h2: [
          "clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        h3: [
          "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)",
          { lineHeight: "1.3" },
        ],
      },
      maxWidth: {
        site: "84rem",
        measure: "38rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
