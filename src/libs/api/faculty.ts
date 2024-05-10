import type { IFaculty, IFacultyV2 } from "@/interfaces/faculty.interface";
import type { IResearchMini, IResearchV2 } from "@/interfaces/research.interface";
import { BASE_URL, BASE_URL_V2 } from "./config";
import { ResearchAPIV2 } from "./research";

export class FacultyAPI {
    facultyEndpoint: URL;

    constructor() {
        this.facultyEndpoint = new URL("faculty/", BASE_URL);
    }

    async getFaculties(): Promise<IFaculty[] | undefined> {
        const params: { [key: string]: string } = {
            _embed: "",
            per_page: "100",
        };

        Object.keys(params).forEach((key) =>
            this.facultyEndpoint.searchParams.append(key, params[key]),
        );

        try {
            const res = await fetch(this.facultyEndpoint.toString());
            const data = await res.json();

            const faculties: IFaculty[] = data
                .map((data: any) => {
                    return {
                        id: data.id,
                        slug: data.slug,
                        title_rendered: data.acf.title.rendered,
                        first_name_eng: data.acf.first_name_eng,
                        last_name_eng: data.acf.last_name_eng,
                        first_name_thai: data.acf.first_name_thai,
                        last_name_thai: data.acf.last_name_thai,
                        title: data.acf.title,
                        order: data.acf.order,
                        staff_status: data.acf.staff_status,
                        position_other: data.acf.position_other,
                        picture: data.acf.picture,
                        office: data.acf.office,
                        phone: data.acf.phone,
                        fax: data.acf.fax,
                        email: data.acf.email,
                        email2: data.acf.email2,
                        website: data.acf.website,
                        educational_bg: data.acf.educational_bg,
                        year_bsdegree: data.acf.year_bsdegree,
                        name_bsdegree: data.acf.name_bsdegree,
                        major_bsdegree: data.acf.major_bsdegree,
                        university_bsdegree: data.acf.university_bsdegree,
                        year_msdegree: data.acf.year_msdegree,
                        name_msdegree: data.acf.name_msdegree,
                        major_msdegree: data.acf.major_msdegree,
                        university_msdegree: data.acf.university_msdegree,
                        year2_msdegree: data.acf.year2_msdegree,
                        name2_msdegree: data.acf.name2_msdegree,
                        major2_msdegree: data.acf.major2_msdegree,
                        university2_msdegree: data.acf.university2_msdegree,
                        year_phddegree: data.acf.year_phddegree,
                        name_phddegree: data.acf.name_phddegree,
                        major_phddegree: data.acf.major_phddegree,
                        university_phddegree: data.acf.university_phddegree,
                        faculty_research_relationship:
                            data.acf.faculty_research_relationship,
                        research_areas: data.acf.research_areas,
                        publications: data.acf.publications,
                        publication_external_link_name:
                            data.acf.publication_external_link_name,
                        publication_external_link_url:
                            data.acf.publication_external_link_url,
                        publication_external_link_name_2:
                            data.acf.publication_external_link_name_2,
                        publication_external_link_url_2:
                            data.acf.publication_external_link_url_2,
                        scopus_feed_script_url: data.acf.scopus_feed_script_url,
                        books: data.acf.books,
                        misc: data.acf.misc,
                        last_updated: data.acf.last_updated,
                    };
                })
                .sort((a: IFaculty, b: IFaculty) =>
                    a.first_name_eng.localeCompare(b.first_name_eng),
                );

            return faculties;
        } catch (error) {
            console.log(error);
        }
    }

    async getFaculty(slug: string): Promise<IFaculty | undefined> {
        const params: { [key: string]: string } = {
            slug: slug,
            _embed: "",
        };

        const fetchURL = new URL(this.facultyEndpoint.toString());
        Object.keys(params).forEach((key) =>
            fetchURL.searchParams.append(key, params[key])
        );

        try {
            const res = await fetch(fetchURL.toString());
            const data = await res.json();
    
            const first = data[0];
    
            let research: IResearchV2[] = [];
            if (first.acf.faculty_research_relationship) {
                const researchAPI = new ResearchAPIV2();
                research = await researchAPI.getResearch(false, first.acf.faculty_research_relationship) as IResearchMini[];
            }
    
    
            const faculty: IFaculty = {
                id: first.id,
                slug: first.slug,
                title_rendered: first.title.rendered,
                first_name_eng: first.acf.first_name_eng,
                last_name_eng: first.acf.last_name_eng,
                first_name_thai: first.acf.first_name_thai,
                last_name_thai: first.acf.last_name_thai,
                title: first.acf.title,
                order: first.acf.order,
                staff_status: first.acf.staff_status,
                position_other: first.acf.position_other,
                picture: first.acf.picture,
                office: first.acf.office,
                phone: first.acf.phone,
                fax: first.acf.fax,
                email: first.acf.email,
                email2: first.acf.email2,
                website: first.acf.website,
                educational_bg: first.acf.educational_bg,
                year_bsdegree: first.acf.year_bsdegree,
                name_bsdegree: first.acf.name_bsdegree,
                major_bsdegree: first.acf.major_bsdegree,
                university_bsdegree: first.acf.university_bsdegree,
                year_msdegree: first.acf.year_msdegree,
                name_msdegree: first.acf.name_msdegree,
                major_msdegree: first.acf.major_msdegree,
                university_msdegree: first.acf.university_msdegree,
                year2_msdegree: first.acf.year2_msdegree,
                name2_msdegree: first.acf.name2_msdegree,
                major2_msdegree: first.acf.major2_msdegree,
                university2_msdegree: first.acf.university2_msdegree,
                year_phddegree: first.acf.year_phddegree,
                name_phddegree: first.acf.name_phddegree,
                major_phddegree: first.acf.major_phddegree,
                university_phddegree: first.acf.university_phddegree,
                faculty_research_relationship:
                    first.acf.faculty_research_relationship,
                research_areas: first.acf.research_areas,
                publications: first.acf.publications,
                publication_external_link_name:
                    first.acf.publication_external_link_name,
                publication_external_link_url:
                    first.acf.publication_external_link_url,
                publication_external_link_name_2:
                    first.acf.publication_external_link_name_2,
                publication_external_link_url_2: first.acf,
                scopus_feed_script_url: first.acf.scopus_feed_script_url,
                books: first.acf.books,
                misc: first.acf.misc,
                last_updated: first.acf.last_updated,
                academic_rank: first.acf.academic_rank,
                staff_type: first.acf.staff_type,
                cv: first.acf.cv,
                biography: first.acf.biography,
                research: research,
            };

            return faculty;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllFacultySlugs(): Promise<string[]> {
        const params: { [key: string]: string } = {
            _embed: "",
            per_page: "100",
        };

        const fetURL = new URL(this.facultyEndpoint.toString());
        Object.keys(params).forEach((key) =>
            fetURL.searchParams.append(key, params[key]),
        );

        const res = await fetch(this.facultyEndpoint.toString());
        const data = await res.json();

        const slugs: string[] = data.map((data: any) => data.slug);

        return slugs;
    }
}

export class FacultyAPIV2 {
    facultyEndpoint: URL;

    constructor() {
        this.facultyEndpoint = new URL("directories/", BASE_URL_V2);
    }

    async getFaculties(ids?: number[]): Promise<IFacultyV2[] | undefined> {
        if (ids) {
            this.facultyEndpoint.searchParams.append("ids", ids.join(","));
        }

        try {
            const res = await fetch(this.facultyEndpoint.toString());
            const data = await res.json();

            const faculties: IFacultyV2[] = data.sort(
                (a: IFacultyV2, b: IFacultyV2) =>
                    a.title.localeCompare(b.title),
            );

            return faculties;
        } catch (error) {
            console.log(error);
        }
    }
}
