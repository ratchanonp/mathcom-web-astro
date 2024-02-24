/* eslint-disable no-mixed-spaces-and-tabs */
import type { SortBy as SortByInterface } from "@/interfaces/sortBy.interface";
import { sortBy } from "@/libs/const";
import { sortBySelected, sortBy as sortByStore } from "@/modules/directory/stores/facultyStore";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

const SortBy = () => {
    const $sortBy = useStore(sortByStore);
    const $sortBySelected = useStore(sortBySelected);

    useEffect(() => { sortBySelected.set($sortBy); }, [$sortBy]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        sortByStore.set($sortBySelected);
    };

    return (
        <div className="grid gap-5 p-5">
            {sortBy.map((item) => (
                <div key={item.name}>
                    <h2 className="text-xl font-medium text-gray-800">{item.name}</h2>
                    <form
                        onSubmit={handleSubmit}
                        id="sortBy"
                        className="grid gap-2.5 mt-2.5"
                    >
                        {item.subCategory &&
                    item.subCategory.map((item) => (
                        <fieldset key={item.name} className="flex items-center gap-5">
                            <label
                                htmlFor={item.name}
                                className="flex-1 font-light text-gray-400"
                            >
                                {item.name}
                            </label>
                            <input
                                type="radio"
                                name="sortBy"
                                value={item.value as SortByInterface}
                                id={item.name}
                                className="w-5 h-5 rounded-full border-[1px] border-gray-300 accent-gray-800"
                                checked={$sortBySelected == item.value}
                                onChange={() => {
                                    sortBySelected.set(item.value as SortByInterface);
                                }}
                            />
                        </fieldset>
                    ))}
                    </form>
                </div>
            ))}
        </div>
    );
};

export default SortBy;
