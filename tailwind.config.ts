import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1c31",
          850: "#10243a",
          800: "#132d48"
        },
        gold: {
          500: "#c9a24a",
          600: "#b58e35",
          700: "#8b6a25"
        },
        pearl: "#f6f3ed",
        ink: "#152033"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(3, 13, 27, 0.22)",
        gold: "0 18px 45px rgba(201, 162, 74, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
