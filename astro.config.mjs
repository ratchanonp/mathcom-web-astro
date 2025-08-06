import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			// Enable React Fast Refresh for better development experience
			include: ["**/*.{jsx,tsx}"],
		}),
		sitemap({
			// Optimize sitemap generation
			filter: (page) => {
				// Exclude admin or private pages from sitemap
				return !page.includes('/admin') && !page.includes('/private');
			},
		}),
	],
	vite: {
		envDir: "./",
		plugins: [tailwindcss()],
		// Performance optimizations
		build: {
			// Optimize chunk size
			rollupOptions: {
				output: {
					manualChunks: {
						// Separate vendor chunks for better caching
						vendor: ['react', 'react-dom'],
						ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-accordion'],
						utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
						// Separate translations to reduce main bundle
						translations: ['date-fns/locale'],
						// Separate icons to reduce main bundle
						icons: ['@heroicons/react/24/outline', '@heroicons/react/24/solid', 'lucide-react'],
						// Separate fonts to reduce main bundle
						fonts: ['@fontsource/kanit', '@fontsource-variable/work-sans'],
						// Separate drawer components
						drawer: ['vaul', 'src/common/components/ui/drawer'],
						// Separate directory components
						directory: ['src/modules/directory'],
						// Separate event components
						events: ['src/modules/event'],
						// Separate research components
						research: ['src/modules/research'],
						// Separate UI components
						// Separate card components
						cards: ['src/common/components/Card'],
						// Separate post components
						posts: ['src/common/components/Post'],
					},
				},
			},
			// Optimize CSS
			cssCodeSplit: true,
			// Reduce bundle size
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true, // Remove console.log in production
					drop_debugger: true,
					// More aggressive optimization
					pure_funcs: ['console.log', 'console.info', 'console.debug'],
					passes: 2,
				},
				mangle: {
					toplevel: true,
				},
			},
		},
		// Optimize development server
		server: {
			hmr: {
				overlay: false, // Disable HMR overlay for better performance
			},
		},
		// Optimize dependencies
		optimizeDeps: {
			include: [
				'react',
				'react-dom',
				'@radix-ui/react-dialog',
				'@radix-ui/react-dropdown-menu',
				'clsx',
				'class-variance-authority',
				'tailwind-merge',
				'date-fns/locale',
				'@heroicons/react/24/outline',
				'@heroicons/react/24/solid',
				'lucide-react',
			],
			// Exclude large dependencies from main bundle
			exclude: ['@fontsource/kanit', '@fontsource-variable/work-sans'],
		},
		// Tree shaking optimization
		define: {
			'process.env.NODE_ENV': '"production"',
		},
	},
	// Performance optimizations
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	site: "https://math.sc.chula.ac.th",
	output: "server",
	root: "./",
	srcDir: "./src",
	outDir: "./dist",
	publicDir: "./public",
	// Optimize image handling
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
		// Enable image optimization
		remotePatterns: [{ protocol: "https" }],
	},
	// Optimize server adapter
	adapter: node({
		mode: "standalone",
	}),
	// Development optimizations
	devToolbar: {
		enabled: true,
	},
});