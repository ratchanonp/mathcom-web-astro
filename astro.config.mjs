import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react(), sitemap()],
    vite: {
        envDir: "./"
    },
    prefetch: true,
    site: "https://math.sc.chula.ac.th",
    output: "server",
    root: "./",
    srcDir: "./src",
    outDir: "./dist",
    publicDir: "./public",
    adapter: node({
      mode: "standalone",
    }),
});