
import type { IResearch, IResearchMini, IResearchV2 } from "@/interfaces/research.interface";
import { BASE_URL, BASE_URL_V2 } from "./config";
import { FacultyAPIV2 } from "./faculty";

export class ResearchAPI {

    researchEndpoint: URL;

    constructor() {
        this.researchEndpoint = new URL("research/", BASE_URL);
    }

    async getResearch(): Promise<IResearch[]> {
        const params: { [key: string]: string } = {
            _embed: "",
        };

        Object.keys(params).forEach((key) =>
            this.researchEndpoint.searchParams.append(key, params[key])
        );

        const res = await fetch(this.researchEndpoint.toString());
        const data = await res.json();

        const research: IResearch[] = data
            .map((item: any) => ({
                id: item.id,
                name: item.title.rendered,
                slug: item.slug,
            }))
            .sort((a: IResearch, b: IResearch) => a.name.localeCompare(b.name));

        return research;
    }

    async getResearchBySlug(slug: string): Promise<IResearchV2> {
        const res = await fetch(`${this.researchEndpoint.toString()}?slug=${slug}`);
        const data = await res.json();

        const research: IResearch = {
            id: data[0].id,
            name: data[0].title.rendered,
            slug: data[0].slug,
        };

        const faculty_research_relationship = data[0].acf.faculty_research_relationship;

        const facultyAPI = new FacultyAPIV2();
        const faculty = await facultyAPI.getFaculties(faculty_research_relationship);

        const researchV2: IResearchV2 = {
            id: research.id,
            title: research.name,
            slug: research.slug,
            thumbnail: data[0].acf.thumbnail,
            faculty: faculty,
        };

        return researchV2;
    }
}

export class ResearchAPIV2 {
    researchEndpoint: URL;

    constructor() {
        this.researchEndpoint = new URL("research/", BASE_URL_V2);
    }

    async getResearch(is_mini?: boolean, ids?: number[]): Promise<IResearchV2[]> {
        if (is_mini) this.researchEndpoint.searchParams.append("is_mini", "true");
        if (ids && ids?.length > 0) this.researchEndpoint.searchParams.set("ids", ids.join(","));

        const res = await fetch(this.researchEndpoint.toString());
        const data = await res.json();

        if (is_mini) {
            const research: IResearchMini[] = data.sort((a: IResearchMini, b: IResearchMini) => a.title.localeCompare(b.title));
            return research;
        }

        const research: IResearchV2[] = data.sort((a: IResearchV2, b: IResearchV2) => a.title.localeCompare(b.title));
        return research;
    }
}
