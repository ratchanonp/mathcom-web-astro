import { atom } from "nanostores";

export const searchKeyword = atom<string>("");
export const researchFieldSelected = atom<number[]>([]);
export const sortBySelected = atom<string>("firstname-asc");