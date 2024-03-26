import { atom } from "nanostores";

export const searchKeyword = atom<string>("");
export const researchFieldSelected = atom<string[]>([]);
export const researchFields = atom<number[]>([]);
export const sortBySelected = atom<string>("");
export const sortBy = atom<string>("");