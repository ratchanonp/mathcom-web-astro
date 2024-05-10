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
