import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rps-works.github.io/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://rps-works.github.io/sitemap-index.xml",
        "https://rps-works.github.io/sitemap-0.xml",
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
  vite: {
    assetsInclude: "**/*.riv",
  },
});
