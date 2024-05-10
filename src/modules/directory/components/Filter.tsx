import type { IResearchMini } from "@/interfaces/research.interface";
import { ResearchAPIV2 } from "@/libs/api/research";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { researchFieldSelected } from "../stores/facultyStore";

const Filter = () => {
    const [research, setResearch] = useState<IResearchMini[]>([]);

    const $filter = useStore(researchFieldSelected);

    useEffect(() => {
        const fetchResearch = async () => {
            const researchAPI = new ResearchAPIV2();
            const res = await researchAPI.getResearch();
            setResearch(res);
        };

        fetchResearch();
    }, []);

    const encodeStr = new DOMParser();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            researchFieldSelected.set([...$filter, parseInt(e.target.value)]);
        } else {
            researchFieldSelected.set(
                $filter.filter((id) => id !== parseInt(e.target.value)),
            );
        }
    };

    return (
        <div className=" mx-auto mt-5 max-h-96 max-w-screen-xl overflow-auto px-5 pb-5 no-scrollbar">
            <h1 className="inline-flex font-kanit text-2xl font-semibold text-gray-800">
                <DocumentTextIcon className="mr-2 h-6 w-6 " />
                Research Field{" "}
                <span className="hidden md:block">/ Areas of Expertise</span>
            </h1>
            <form id="filter" className="mt-4 grid md:grid-cols-2 gap-5">
                {research.map(({ id, title }) => (
                    <div
                        key={id}
                        className="flex flex-row-reverse md:flex-row items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            id={id.toString()}
                            value={id}
                            className="aspect-square h-6 overflow-hidden rounded-xl border-[1px] border-gray-300 accent-gray-800"
                            onChange={handleOnChange}
                            checked={$filter.includes(id)}
                        />
                        <label
                            htmlFor={id.toString()}
                            className="flex-1 font-light text-gray-400"
                        >
                            {
                                encodeStr.parseFromString(title, "text/html")
                                    .body.textContent
                            }
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default Filter;
