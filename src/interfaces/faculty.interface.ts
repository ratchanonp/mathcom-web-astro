import type { IResearchV2 } from "./research.interface";

export interface IFaculty {
    id: number;
    slug: string;
    title_rendered: string;
    first_name_eng: string;
    last_name_eng: string;
    first_name_thai: string;
    last_name_thai: string;
    title: string;
    order: string;
    staff_status: string;
    position_other: string;
    picture: number;
    office: string;
    phone: string;
    fax: string;
    email: string;
    email2: string;
    website: string;
    educational_bg: string;
    year_bsdegree: string;
    name_bsdegree: string;
    major_bsdegree: string;
    university_bsdegree: string;
    year_msdegree: string;
    name_msdegree: string;
    major_msdegree: string;
    university_msdegree: string;
    year2_msdegree: string;
    name2_msdegree: string;
    major2_msdegree: string;
    university2_msdegree: string;
    year_phddegree: string;
    name_phddegree: string;
    major_phddegree: string;
    university_phddegree: string;
    faculty_research_relationship: number[] | null;
    research_areas: string;
    publications: string;
    publication_external_link_name: string;
    publication_external_link_url: string;
    publication_external_link_name_2: string;
    publication_external_link_url_2: string;
    scopus_feed_script_url: string;
    books: string;
    misc: string;
    last_updated: string;
    biography: string;
    academic_rank: string;
    staff_type: string;
    cv: string;
    research: IResearchV2[];
}

export interface IFacultyV2 {
    id: number;
    slug: string;
    title: string;
    first_name: string;
    last_name: string;
    first_name_thai: string;
    last_name_thai: string;
    picture: string | null;
    academic_rank: string | null;
    staff_type: string | null;
    research_areas: number[];
}
