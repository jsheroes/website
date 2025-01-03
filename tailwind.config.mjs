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
      "neutral-separator": "#ebe7e7",
      primary: "#0b1b44",
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
        sm: "clamp(0.8rem, 0.2vw + 0.8rem, 0.9rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.2rem, 0.7vw + 1.3rem, 1.8rem)",
        xl: "clamp(2.4rem, 2.38vw + 1.85rem, 3.6rem)",
        huge: "clamp(8rem, 2.38vw + 6.85rem, 10rem)",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
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
      base: ["system-ui", ...defaultTheme.fontFamily.sans],
      display: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
