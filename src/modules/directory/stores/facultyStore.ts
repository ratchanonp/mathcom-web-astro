import { atom } from "nanostores";
import { ResearchField } from "src/interfaces/faculty.interface";
import { SortBy } from "src/interfaces/sortBy.interface";

export const searchKeyword = atom<string>("");
export const researchFieldSelected = atom<string[]>([]);
export const researchFields = atom<ResearchField[]>([]);
export const sortBySelected = atom<SortBy>(SortBy.AcademicRank);
export const sortBy = atom<SortBy>(SortBy.AcademicRank);