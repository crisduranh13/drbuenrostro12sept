import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        ink: "#14171B",
        muted: "#5B6470",
        line: "#E6E4DF",
        off: "#FAFAF9",
        accent: "#1F3B57",
        accent2: "#2C557C",
      },
    },
  },
  plugins: [],
};
export default config;
