import { ResearchField } from "@/interfaces/faculty.interface";
import { SortBy } from "@/interfaces/sortBy.interface";
import { atom } from "nanostores";

export const searchKeyword = atom<string>("");
export const researchFieldSelected = atom<string[]>([]);
export const researchFields = atom<ResearchField[]>([]);
export const sortBySelected = atom<SortBy>(SortBy.AcademicRank);
export const sortBy = atom<SortBy>(SortBy.AcademicRank);