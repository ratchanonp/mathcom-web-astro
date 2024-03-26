import FacultyCard from "@/common/components/Card/FacultyCard";
import type { IFaculty } from "@/interfaces/faculty.interface";
import { facultyAPI } from "@/libs/api/faculty";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/common/components/ui/tabs";
import FilterDialog from "./Dialog/FilterDialog";
import SortByDialog from "./Dialog/SortByDialog";



export default function DirectoryDisplay() {
    const tabsList: string[] = ["All", "Faculty", "Emeritus", "Graduate Students", "Post-Docs & Researchers", "Staff"];

    // tabsList.unshift("All");

    // const $serchKeyword = useStore(searchKeyword);
    // const $sortBy = useStore(sortBy);
    // const $researchFields = useStore(researchFields);

    // const filterFaculties = (   
    //     tab: string, 
    //     searchKeyword: string, 
    //     researchFields: ResearchField[], 
    //     sortBy: string,
    // ) => {
    //     return faculties
    //         .filter((faculty) => {
    //             if (tab === "All") return true;
    //             return faculty.staffType === tab;
    //         })
    //         .filter((faculty) => {
    //             if (searchKeyword === "") return true;
    //             return faculty.nameEng.toLowerCase().includes(searchKeyword.toLocaleLowerCase());
    //         })
    //         .filter((faculty) => {
    //             if (researchFields.length === 0) return true;
    //             return researchFields.some((field) =>
    //                 faculty.researchFields.includes(field),
    //             );
    //         })
    //         .sort((a: Faculty, b: Faculty) => {
    //             if (sortBy === "firstname-asc") {
    //                 return a.nameEng.localeCompare(b.nameEng);
    //             }
    //             if (sortBy === "firstname-desc") {
    //                 return b.nameEng.localeCompare(a.nameEng);
    //             }

    //             return 0;
    //         });
    // };

    const [faculties, setFaculties] = useState<IFaculty[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchFaculties = async () => {
            const data = await facultyAPI.getFaculties();
            console.log(data);
            setFaculties(data);
            setLoading(false);
        };

        fetchFaculties();
    } , []);


    return (
        <Tabs defaultValue="All" className="md:mt-10">
            <div className="flex w-full items-center border-b-[1px] border-gray-200 md:justify-between md:pr-5">
                <TabsList className="no-scrollbar w-fits overflow-x-scroll px-5 md:space-x-5">
                    {tabsList.map((tab) => (
                        <TabsTrigger key={tab} value={tab} data-tab-name={tab}>
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="mb-2 hidden space-x-5 pl-2 md:flex">
                    <SortByDialog />
                    <FilterDialog />
                </div>
            </div>
            
            
            {tabsList.map((tab) => (
                <TabsContent key={tab} value={tab}>
                    <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4">
                        {/* {filterFaculties(tab, $serchKeyword, $researchFields, $sortBy).length === 0 ? 
                            (<p className="text-center text-gray-500 col-span-full h-[400px]">
                                    No results found
                            </p>) :
                            filterFaculties(tab, $serchKeyword, $researchFields, $sortBy)
                                .map((faculty) => (
                                    <FacultyCard key={faculty.id} faculty={faculty} />
                                ))
                        } */}
                        {faculties.map((faculty) => (
                            <FacultyCard key={faculty.id} faculty={faculty} />
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
