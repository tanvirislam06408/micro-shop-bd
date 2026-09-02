import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbf8ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        lavender: {
          50: "#fdf8ff",
          100: "#f6eafe",
          200: "#edd7fd",
          300: "#e0b5fa",
          400: "#cd88f6",
          500: "#b55bf0",
          600: "#9b3ae1",
          700: "#832abf",
          800: "#6d259c",
          900: "#5a217f",
        },
      },
      boxShadow: {
        "purple-glow": "0 0 25px -5px rgba(147, 51, 234, 0.25)",
        "purple-glow-lg": "0 0 40px -10px rgba(147, 51, 234, 0.35)",
        "card-soft": "0 10px 30px -10px rgba(126, 34, 206, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
