import type { IFacultyV2 } from "./faculty.interface";

export interface IResearch {
	id: number;
	name: string;
	slug: string;
}

export interface IResearchV2 {
	id: number;
	title: string;
	slug: string;
	thumbnail?: string;
	faculty?: IFacultyV2[];
}

export type IResearchMini = Pick<IResearchV2, "id" | "title" | "slug">;
