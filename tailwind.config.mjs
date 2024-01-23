/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "neutral-dark": "#202022",
      "neutral-light": "#ffffff",
      primary: "#0b1b44",
      "accent-pink": "#ff6078",
      "accent-orange": "#ffcc67",
      "accent-green": "#65d3bb",
    },
    fontSize: {
      sm: "clamp(0.8rem, 0.2vw + 0.8rem, 0.9rem)",
      base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      lg: "clamp(1.2rem, 0.7vw + 1.3rem, 1.8rem)",
      xl: "clamp(2.4rem, 2.38vw + 1.85rem, 3.6rem)",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      transitionDuration: {
        move: "100ms",
        fade: "125ms",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents, theme }) {
      addComponents({
        ".divider": {
          "border-color": theme("colors.neutral-dark"),
          "border-top-width": "1px",
          width: "100%",
          margin: "0 auto",
        },
      });
    },
  ],
};
