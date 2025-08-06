// Critical translations that are loaded immediately
export const criticalTranslations = {
	en: {
		// Navigation
		"nav.department": "Department of ",
		"nav.mathematics": "Mathematics",
		"nav.and": " and ",
		"nav.computer_science": "Computer Science",

		// Menu
		"menu.main_menu": "Main Menu",
		"menu.home": "Home",
		"menu.about_us": "About Us",
		"menu.people": "People",
		"menu.research": "Research",

		// Home page
		"home.explore_our_department": "Explore our department",
		"home.undergraduate_programs": "Undergraduate Programs",
		"home.graduate_programs": "Graduate Programs",
		"home.people": "People",
		"home.research": "Research",
	},
	th: {
		// Navigation
		"nav.department": "ภาควิชา",
		"nav.mathematics": "คณิตศาสตร์",
		"nav.and": " และ ",
		"nav.computer_science": "วิทยาการคอมพิวเตอร์",

		// Menu
		"menu.main_menu": "เมนูหลัก",
		"menu.home": "หน้าแรก",
		"menu.about_us": "เกี่ยวกับเรา",
		"menu.people": "บุคลากร",
		"menu.research": "งานวิจัย",

		// Home page
		"home.explore_our_department": "สำรวจภาควิชา",
		"home.undergraduate_programs": "หลักสูตรปริญญาตรี",
		"home.graduate_programs": "หลักสูตรปริญญาโท",
		"home.people": "บุคลากร",
		"home.research": "งานวิจัย",
	}
};

// Function to get critical translations
export function getCriticalTranslation(lang: 'en' | 'th', key: string): string {
	const translations = criticalTranslations[lang] as Record<string, string>;
	const fallback = criticalTranslations.en as Record<string, string>;
	return translations[key] || fallback[key] || key;
} 