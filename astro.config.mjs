import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    compress({
      CSS: false,
      HTML: false,
      JavaScript: true,
      SVG: true,
      Image: false,
    }),
  ],
  redirects: {
    "/tags": "/blog",
  },
});
