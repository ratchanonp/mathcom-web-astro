/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFD700",
			},
			fontFamily: {
				kanit: ["Kanit", "sans-serif"],
				sarabun: ["Sarabun", "sans-serif"],
			},
		},
	},
	plugins: [],
	// Aggressive purging for production
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		],
		options: {
			safelist: [
				// Keep critical classes
				"bg-primary",
				"text-primary",
				"border-primary",
				"decoration-primary",
			],
		},
	},
}; 