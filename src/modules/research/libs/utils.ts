import { researchFields } from "@/libs/const";

// Write a function remove & and extra space before and after & and replace space with -
export const processLink = (link: string) => {
    return link.replace(/&/g, "").trim().replace(/\s+/g, "-").toLowerCase();
};

export const processResearchPath = (): string[] => {
    return researchFields.flatMap(field => 
        field.subCategory ? field.subCategory.map(subField => processLink(subField.name)) : []
    );
};