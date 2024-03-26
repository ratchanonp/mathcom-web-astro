
import type { IResearch } from "@/interfaces/research.interface";
import { BASE_URL } from "./config";

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
}
