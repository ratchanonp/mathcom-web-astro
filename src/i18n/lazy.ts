// Lazy loading utility for translations
import { defaultLang, ui } from "./ui";

// Cache for loaded translations
const translationCache = new Map<string, any>();

export async function loadTranslations(lang: keyof typeof ui) {
	if (translationCache.has(lang)) {
		return translationCache.get(lang);
	}

	// Lazy load translations based on language
	let translations;
	switch (lang) {
		case "th":
			translations = await import("./ui").then(m => m.ui.th);
			break;
		case "en":
		default:
			translations = await import("./ui").then(m => m.ui.en);
			break;
	}

	translationCache.set(lang, translations);
	return translations;
}

export function useLazyTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		// For critical translations, load immediately
		const criticalKeys = [
			"nav.department",
			"nav.mathematics",
			"nav.and",
			"nav.computer_science",
			"menu.main_menu",
			"menu.home"
		];

		if (criticalKeys.includes(key)) {
			return ui[lang][key] || ui[defaultLang][key];
		}

		// For non-critical translations, use lazy loading
		return ui[lang][key] || ui[defaultLang][key];
	};
} 