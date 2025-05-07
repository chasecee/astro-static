// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-static-production.up.railway.app",

  integrations: [mdx(), sitemap(), showTailwindcssBreakpoint()],

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
