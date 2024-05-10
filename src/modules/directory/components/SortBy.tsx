/* eslint-disable no-mixed-spaces-and-tabs */
import { useStore } from "@nanostores/react";
import { sortBy } from "src/libs/const";
import {
    sortBySelected,
    sortBySelected as sortByStore,
} from "src/modules/directory/stores/facultyStore";

const SortBy = () => {
    const $sortBy = useStore(sortByStore);

    return (
        <div className="grid gap-5 p-5">
            {sortBy.map((item) => (
                <div key={item.title}>
                    <h2 className="text-xl font-medium text-gray-800">
                        {item.title}
                    </h2>
                    <div id="sortBy" className="grid gap-2.5 mt-2.5">
                        {item.options.map((option) => (
                            <fieldset
                                key={option.name}
                                className="flex items-center gap-5"
                            >
                                <label
                                    htmlFor={option.name}
                                    className="flex-1 font-light text-gray-400"
                                >
                                    {option.name}
                                </label>
                                <input
                                    type="radio"
                                    name="sortBy"
                                    value={option.value}
                                    id={option.name}
                                    className="w-5 h-5 rounded-full border-[1px] border-gray-300 accent-gray-800"
                                    checked={$sortBy == option.value}
                                    onChange={() => {
                                        sortBySelected.set(option.value);
                                    }}
                                />
                            </fieldset>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SortBy;
