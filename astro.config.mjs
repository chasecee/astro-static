// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",

  integrations: [mdx(), sitemap(), showTailwindcssBreakpoint(), swup()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--font-poppins",
      },
    ],
  },
});
