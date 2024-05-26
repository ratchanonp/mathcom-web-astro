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
            overview: { en: 6063, th: 6174 },
            current_students: { en: 6074, th: 6148 },
            prospective_students: { en: 6069, th: 6148 },
        },
        csit: {
            overview: { en: 6057, th: 6153 },
            current_students: { en: 6061, th: 6155 },
            prospective_students: { en: 6059, th: 6154 },
        },
    },
};

export const createSidebarItemsUndergraduate = (program: string, language?: string) => [
    {
        title: "Overview",
        href: language ? `${language}/undergraduate/${program}` : `/undergraduate/${program}`,
        subItems: [
            { title: "Overview", href: "#overview" },
            { title: "Academics", href: "#academics" },
            { title: "Oppotunities", href: "#opportunities" },
        ],
    },
    {
        title: "Current Students",
        href: language
            ? `${language}/undergraduate/${program}/current-students`
            : `/undergraduate/${program}/current-students`,
        subItems: [{ title: "Academics", href: "#academics" }],
    },
    {
        title: "Prospective Students",
        href: language
            ? `${language}/undergraduate/${program}/prospective-students`
            : `/undergraduate/${program}/prospective-students`,
        subItems: [
            { title: "Admission", href: "#admission" },
            {
                title: "Qualification",
                href: "#qualification",
            },
        ],
    },
    {
        title: "News",
        href: language ? `${language}/undergraduate/${program}/news` : `/undergraduate/${program}/news`,
    },
];

export const createSidebarItemsGraduate = (program: string, language?: string) => {
    return [
        {
            title: "Overview",
            href: language ? `/${language}/graduate/${program}` : `/graduate/${program}`,
            subItems: [
                { title: "Overview", href: "#overview" },
                { title: "Academics", href: "#academics" },
                { title: "Oppotunities", href: "#opportunities" },
                { title: "Rules and Regulations", href: "#rules-and-regulations" },
                { title: "Course Descriptions", href: "#course-descriptions" },
            ],
        },
        {
            title: "Current Students",
            href: language
                ? `/${language}/graduate/${program}/current-students`
                : `/graduate/${program}/current-students`,
            subItems: [
                { title: "Master Program", href: "#master-program" },
                { title: "Doctoral Program", href: "#doctoral-program" },
                { title: "Qualifying Exam", href: "#qualifying-exam" },
                { title: "Proposal Examination", href: "#proposal-examination" },
                { title: "Thesis/Dissertation Defense", href: "#thesis-dissertation-defense" },
            ],
        },
        {
            title: "Prospective Students",
            href: language
                ? `${language}/graduate/${program}/prospective-students`
                : `/graduate/${program}/prospective-students`,
            subItems: [
                { title: "Admission", href: "#admission" },
                {
                    title: "Qualification",
                    href: "#qualification",
                    subItems: [
                        { title: "Master Program", href: "#master-program" },
                        { title: "Doctoral Program", href: "#doctoral-program" },
                    ],
                },
                { title: "Scope and sample Exams", href: "#scope-and-sample-exams" },
            ],
        },
        {
            title: "News",
            href: language ? `${language}/graduate/${program}/news` : `/graduate/${program}/news`,
        },
    ];
};
