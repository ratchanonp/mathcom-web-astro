import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), sitemap()],
	vite: {
		envDir: "./",
		plugins: [tailwindcss()],
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