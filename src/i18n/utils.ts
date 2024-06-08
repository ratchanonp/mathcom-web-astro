import { enUS, th } from "date-fns/locale";
import { defaultLang, showDefaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useDateFnsLocale(lang: keyof typeof ui) {
	switch (lang) {
		case "en":
			return enUS;
		case "th":
			return th;
		default:
			return enUS;
	}
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
	};
}
