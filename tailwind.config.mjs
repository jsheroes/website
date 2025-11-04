/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "border-accent-pink",
    "border-accent-orange",
    "border-accent-green",
  ],
  theme: {
    colors: {
      "neutral-dark": "#202022",
      "neutral-light": "#ffffff",
      "neutral-separator": "#cccccc",
      "brand-darknavy": "#0b1b44",
      "brand-purple": "#442c75",

      "accent-pink": "#ff6078",
      "accent-orange": "#ffcc67",
      "accent-green": "#65d3bb",
      "black-pearl": "#001c2b",
      "dodger-blue": "#0098ff",
    },
    extend: {
      transitionDuration: {
        move: "100ms",
        fade: "125ms",
        slide: "200ms",
      },
      fontSize: {
        sm: "max(0.85rem, 15px)",
        base: "max(1rem, 16px)",
        md: "1.2rem",
        lg: "1.7rem",
        xl: "2.1rem",
        huge: "7rem",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              "margin-top": 0,
              "margin-bottom": 0,
            },
            a: false,
          },
        },
      },
      animation: {
        "bear-float": "float 30s infinite alternate linear",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateX(0, 0) scale(1) rotate(0)" },
          "100%": {
            transform: "translate(120px, -30px) scale(0.8) rotate(45deg)",
          },
        },
      },
    },
    fontFamily: {
      base: ["Sora", ...defaultTheme.fontFamily.sans],
      display: ["Sora", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
