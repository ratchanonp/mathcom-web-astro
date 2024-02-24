import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/common/components/ui/tabs";
import { ResearchField, StaffType, type Faculty } from "@/interfaces/faculty.interface";
import { faculties } from "@/mock/faculties";
import FilterDialog from "./Dialog/FilterDialog";
import SortByDialog from "./Dialog/SortByDialog";

import { researchFields, searchKeyword, sortBy } from "@/modules/directory/stores/facultyStore";
import { useStore } from "@nanostores/react";
import FacultyCard from "../../../common/components/Card/FacultyCard";

import { SortBy } from "@/interfaces/sortBy.interface";

export default function DirectoryDisplay() {
    const tabsList: string[] = (
    Object.keys(StaffType) as Array<keyof typeof StaffType>
    ).map((key) => StaffType[key]);

    tabsList.unshift("All");

    const $serchKeyword = useStore(searchKeyword);
    const $sortBy = useStore(sortBy);
    const $researchFields = useStore(researchFields);

    const filterFaculties = (   
        tab: string, 
        searchKeyword: string, 
        researchFields: ResearchField[], 
        sortBy: SortBy
    ) => {
        return faculties
            .filter((faculty) => {
                if (tab === "All") return true;
                return faculty.staffType === tab;
            })
            .filter((faculty) => {
                if (searchKeyword === "") return true;
                return faculty.nameEng.toLowerCase().includes(searchKeyword.toLocaleLowerCase());
            })
            .filter((faculty) => {
                if (researchFields.length === 0) return true;
                return researchFields.some((field) =>
                    faculty.researchFields.includes(field),
                );
            })
            .sort((a: Faculty, b: Faculty) => {
                if (sortBy === SortBy.A_Z) {
                    return a.nameEng.localeCompare(b.nameEng);
                }
                if (sortBy === SortBy.Z_A) {
                    return b.nameEng.localeCompare(a.nameEng);
                }
                if (sortBy === SortBy.AcademicRank) {
                    return a.academicRank.priority - b.academicRank.priority;
                }

                return 0;
            });
    };


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
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
