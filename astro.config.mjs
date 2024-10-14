import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react(), sitemap()],
    vite: {
        envDir: "./"
    },
    prefetch: true,
    site: "http://localhost",
    output: "server",
    root: "./",
    srcDir: "./src",
    outDir: "./dist",
    publicDir: "./public",
    adapter: node({
        mode: "standalone"
    }),
    image: {
        service: squooshImageService(),
    },
});