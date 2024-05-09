import { BASE_INTERNAL_URL_V2 } from "./config";

export class CourseAPI {
    constructor(
        private readonly courseEndpoint: URL = new URL("course", BASE_INTERNAL_URL_V2),
    ) {}

    async getCourse(slug: string, field: string): Promise<string> {
        this.courseEndpoint.searchParams.set("slug", slug);
        this.courseEndpoint.searchParams.set("field", field);

        console.log(this.courseEndpoint.toString());

        const res = await fetch(this.courseEndpoint.toString());

        return res.json();
    }
}

export enum CourseName {
    MathBSC = "mathematics-b-sc",
    CSBSC = "computer-science-b-sc",
    GRADMATH = "mathematics-m-sc-ph-d",
    CSIT = "computer-science-and-information-technology-m-sc-ph-d",
    AMCS = "applied-mathematics-and-computational-science-m-sc-ph-d",
}