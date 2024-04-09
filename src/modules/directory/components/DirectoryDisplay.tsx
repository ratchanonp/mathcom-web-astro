import FacultyCard from "@/common/components/Card/FacultyCard";
import type { IFacultyV2 } from "@/interfaces/faculty.interface";
import { FacultyAPIV2 } from "@/libs/api/faculty";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/common/components/ui/tabs";
import { researchFieldSelected, searchKeyword, sortBySelected } from "../stores/facultyStore";
import FilterDialog from "./Dialog/FilterDialog";
import SortByDialog from "./Dialog/SortByDialog";



export default function DirectoryDisplay() {
    const tabsList: string[] = ["All", "Faculty", "Emeritus", "Graduate Students", "Post-Docs & Researchers", "Staff"];

    const [faculties, setFaculties] = useState<IFacultyV2[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchFaculties = async () => {
            const facultyAPI = new FacultyAPIV2();
            const data = await facultyAPI.getFaculties();
            setFaculties(data || []);
            setLoading(false);
        };

        fetchFaculties();
    } , []);

    const $sortBy = useStore(sortBySelected);
    const $serchKeyword = useStore(searchKeyword);
    const $researchFields = useStore(researchFieldSelected);

    const filterFaculties = (tab: string, searchKeyword: string, researchFields: number[], sortBy: string) => {
        return faculties.filter((faculty) => {
            if (tab === "All" || tab.toLocaleLowerCase() === faculty.staff_type) {
                if (searchKeyword !== "" && !faculty.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
                    return false;
                }

                // Check research fields null
                if (researchFields.length === 0) {
                    return true;
                }

                if (researchFields.length > 0 && !researchFields.some((id) => faculty.research_areas.includes(id))) {
                    return false;
                }
                
                return true;
            }
            return false;
        }).sort((a, b) => {
            switch (sortBy) {
                case "firstname-asc":
                    return a.first_name.localeCompare(b.first_name);
                case "firstname-desc":
                    return b.first_name.localeCompare(a.first_name);
                case "lastname-asc":
                    return a.last_name.localeCompare(b.last_name);
                case "lastname-desc":
                    return b.last_name.localeCompare(a.last_name);
                default:
                    return a.first_name.localeCompare(b.first_name);
            }
        });
    }


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
                        {filterFaculties(tab, $serchKeyword, $researchFields, $sortBy).length === 0 ? 
                            (<p className="text-center text-gray-500 col-span-full h-[400px]">
                                    No results found
                            </p>) :
                            filterFaculties(tab, $serchKeyword, $researchFields, $sortBy)
                                .map((faculty) => (
                                    <FacultyCard key={faculty.id} faculty={faculty} />
                                ))
                        }
                        {loading && <p>Loading...</p>}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
