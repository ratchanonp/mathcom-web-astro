import { useTranslations } from "@/i18n/utils";
import type { ISortBy } from "@/interfaces/sortBy.interface";

export const sortBy: ISortBy[] = [
	{
		title: "Firstname",
		options: [
			{ name: "Firstname A-Z", value: "firstname-asc" },
			{ name: "Firstname Z-A", value: "firstname-desc" },
		],
	},
	{
		title: "Lastname",
		options: [
			{ name: "Lastname A-Z", value: "lastname-asc" },
			{ name: "Lastname Z-A", value: "lastname-desc" },
		],
	},
];

export const sortByTH: ISortBy[] = [
	{
		title: "ชื่อ",
		options: [
			{ name: "ชื่อ ก-ฮ", value: "firstname-asc" },
			{ name: "ชื่อ ฮ-ก", value: "firstname-desc" },
		],
	},
	{
		title: "นามสกุล",
		options: [
			{ name: "นามสกุล ก-ฮ", value: "lastname-asc" },
			{ name: "นามสกุล ฮ-ก", value: "lastname-desc" },
		],
	},
];

export const programPageID = {
	undergradudate: {
		mathematics: {
			overview: { en: 6169, th: 6172 },
			current_students: { en: 6170, th: 6173 },
			prospective_students: { en: 6171, th: 6174 },
		},
		computer_science: {
			overview: { en: 6185, th: 6188 },
			current_students: { en: 6186, th: 6189 },
			prospective_students: { en: 6187, th: 6190 },
		},
	},
	graduate: {
		mathematics: {
			overview: { en: 6065, th: 6132 },
			current_students: { en: 6072, th: 6163 },
			prospective_students: { en: 6067, th: 6140 },
		},
		amcs: {
			overview: { en: 6063, th: 6147 },
			current_students: { en: 6074, th: 6148 },
			prospective_students: { en: 6069, th: 6149 },
		},
		csit: {
			overview: { en: 6057, th: 6153 },
			current_students: { en: 6061, th: 6155 },
			prospective_students: { en: 6059, th: 6154 },
		},
	},
};

export const createSidebarItemsUndergraduate = (program: string, language: "en" | "th") => {
	const t = useTranslations(language);

	return [
		{
			title: t("sidebar.overview"),
			href: language !== "en" ? `/${language}/undergraduate/${program}` : `/undergraduate/${program}`,
			subItems: [
				{ title: t("sidebar.overview"), href: "#overview" },
				{ title: t("sidebar.academics"), href: "#academics" },
				{ title: t("sidebar.opportunities"), href: "#opportunities" },
			],
		},
		{
			title: t("sidebar.current_students"),
			href:
				language !== "en"
					? `/${language}/undergraduate/${program}/current-students`
					: `/undergraduate/${program}/current-students`,
			subItems: [{ title: t("sidebar.academics"), href: "#academics" }],
		},
		{
			title: t("sidebar.prospective_students"),
			href:
				language !== "en"
					? `/${language}/undergraduate/${program}/prospective-students`
					: `/undergraduate/${program}/prospective-students`,
			subItems: [
				{ title: t("sidebar.admission"), href: "#admission" },
				{
					title: t("sidebar.qualification"),
					href: "#qualification",
				},
			],
		},
		{
			title: t("sidebar.news"),
			href: language !== "en" ? `/${language}/undergraduate/${program}/news` : `/undergraduate/${program}/news`,
		},
	];
};

export const createSidebarItemsGraduate = (program: string, language: "en" | "th") => {
	const t = useTranslations(language);

	return [
		{
			title: t("sidebar.overview"),
			href: language !== "en" ? `/${language}/graduate/${program}` : `/graduate/${program}`,
			subItems: [
				{ title: t("sidebar.overview"), href: "#overview" },
				{ title: t("sidebar.academics"), href: "#academics" },
				{ title: t("sidebar.opportunities"), href: "#opportunities" },
				{ title: t("sidebar.rules_and_regulations"), href: "#rules-and-regulations" },
				{ title: t("sidebar.course_descriptions"), href: "#course-descriptions" },
			],
		},
		{
			title: t("sidebar.current_students"),
			href:
				language !== "en"
					? `/${language}/graduate/${program}/current-students`
					: `/graduate/${program}/current-students`,
			subItems: [
				{ title: t("sidebar.master_program"), href: "#master-program" },
				{ title: t("sidebar.doctoral_program"), href: "#doctoral-program" },
				{ title: t("sidebar.qualifying_exam"), href: "#qualifying-exam" },
				{ title: t("sidebar.proposal_examination"), href: "#proposal-examination" },
				{ title: t("sidebar.thesis-and-dissertation_defense"), href: "#thesis-dissertation-defense" },
			],
		},
		{
			title: t("sidebar.prospective_students"),
			href:
				language !== "en"
					? `/${language}/graduate/${program}/prospective-students`
					: `/graduate/${program}/prospective-students`,
			subItems: [
				{ title: t("sidebar.admission"), href: "#admission" },
				{
					title: t("sidebar.qualification"),
					href: "#qualification",
					subItems: [
						{ title: t("sidebar.master_program"), href: "#master-program" },
						{ title: t("sidebar.doctoral_program"), href: "#doctoral-program" },
					],
				},
				{ title: t("sidebar.scopes_and_sample_exams"), href: "#scope-and-sample-exams" },
			],
		},
		{
			title: t("sidebar.news"),
			href: language !== "en" ? `/${language}/graduate/${program}/news` : `/graduate/${program}/news`,
		},
	];
};
