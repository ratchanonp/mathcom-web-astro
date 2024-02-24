import { BASE_URL } from "./config";

const facultyEndpoint = new URL("/faculty", BASE_URL);

export const getFaculties = async () => {
    const params: { [key: string]: string } = {
        _embed: "",
    };

    Object.keys(params).forEach((key) =>
        facultyEndpoint.searchParams.append(key, params[key])
    );

    const result = await fetch(facultyEndpoint.toString());
    const faculties = await result.json();
  
    return faculties;
};

export const getFaculty = async (slug: string) => {
    const params: { [key: string]: string } = {
        slug,
        _embed: "",
    };
    
    Object.keys(params).forEach((key) =>
        facultyEndpoint.searchParams.append(key, params[key])
    );
    
    const result = await fetch(facultyEndpoint.toString());
    const faculty = await result.json();
    
    return faculty[0];
};