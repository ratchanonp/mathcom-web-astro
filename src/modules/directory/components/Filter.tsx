import type { IResearch } from "@/interfaces/research.interface";
import { ResearchAPI } from "@/libs/api/research";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Filter = () => {
    
    const [research, setResearch] = useState<IResearch[]>([]);

    useEffect(() => {
        const fetchResearch = async () => {
            const researchAPI = new ResearchAPI();
            const res = await researchAPI.getResearch();
            setResearch(res);
        };

        fetchResearch();
    }, []);

    return (
        <div className=" mx-auto mt-5 max-h-96 max-w-screen-xl overflow-auto px-5 pb-5 no-scrollbar">
            <h1 className="inline-flex font-kanit text-2xl font-semibold text-gray-800">
                <DocumentTextIcon className="mr-2 h-6 w-6 " />
        Research Field{" "}
                <span className="hidden md:block">/ Areas of Expertise</span>
            </h1>
            <form id="filter"  className="mt-4 grid md:grid-cols-2 gap-5">
                {research.map((item) => (
                    <div key={item.name} className="flex flex-row-reverse md:flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item.name}
                            className="aspect-square h-6 overflow-hidden rounded-xl border-[1px] border-gray-300 accent-gray-800"
                        />
                        <label
                            htmlFor={item.name}
                            className="flex-1 font-light text-gray-400"
                            dangerouslySetInnerHTML={{ __html: item.name }}
                        >
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default Filter;
