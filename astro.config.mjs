import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkEvent from "./src/plugins/remark-event.ts";

/** Dev-only routes, so they never reach the production build or the sitemap. */
const devRoutes = {
  name: "dev-routes",
  hooks: {
    "astro:config:setup": ({ command, injectRoute }) => {
      if (command === "dev") {
        injectRoute({
          pattern: "/styleguide",
          entrypoint: "./src/dev/styleguide.astro",
        });
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://jsheroes.io",
  markdown: {
    // Sätteri (Astro's default Rust markdown processor) doesn't run remark
    // plugins, so opt back into the unified/remark pipeline just for ours.
    processor: unified({
      remarkPlugins: [remarkEvent],
    }),
  },
  integrations: [mdx(), sitemap(), devRoutes],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/tags": "/blog",
  },
});
