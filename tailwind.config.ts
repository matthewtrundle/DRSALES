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
        charcoal: {
          DEFAULT: "#3D3D3D",
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#3D3D3D",
          600: "#333333",
          700: "#2a2a2a",
          800: "#1f1f1f",
          900: "#141414",
        },
        gold: {
          DEFAULT: "#C9A96E",
          50: "#faf6ef",
          100: "#f5eddf",
          200: "#ebdbbf",
          300: "#dfc89f",
          400: "#d4b687",
          500: "#C9A96E",
          600: "#b8954f",
          700: "#9a7b3e",
          800: "#7c622f",
          900: "#5e4a22",
        },
        lavender: {
          DEFAULT: "#9B8EC1",
          50: "#f4f2f8",
          100: "#e9e5f1",
          200: "#d3cce3",
          300: "#bdb2d5",
          400: "#ac9ecb",
          500: "#9B8EC1",
          600: "#7e6eab",
          700: "#635590",
          800: "#4a3f6c",
          900: "#312a48",
        },
        cream: {
          DEFAULT: "#FAF8F5",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        body: "#4A4A4A",
        'warm-gray': "#8C8578",
        'warm-cream': '#F7F4EF',
        stone: "#F0EDE8",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.04)',
        'header': '0 1px 6px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
