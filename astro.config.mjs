import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import remarkEvent from "./src/plugins/remark-event.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://jsheroes.io",
  markdown: {
    remarkPlugins: [remarkEvent],
  },
  integrations: [mdx(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/tags": "/blog",
  },
});
