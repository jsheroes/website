import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      nesting: true,
    }),
    icon(),
  ],
  redirects: {
    "/tags": "/blog",
  },
});
