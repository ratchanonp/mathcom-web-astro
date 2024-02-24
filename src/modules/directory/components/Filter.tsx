import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { ResearchField } from "src/interfaces/faculty.interface";
import { researchFields } from "src/libs/const";
import { researchFieldSelected, researchFields as researchFieldsStore } from "src/modules/directory/stores/facultyStore";

const Filter = () => {
    const $researchFields = useStore(researchFieldsStore);
    const $researchFieldSelected = useStore(researchFieldSelected);

    useEffect(() => {
        researchFieldSelected.set($researchFields);
    }, [$researchFields]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target;
        if (checked) {
            researchFieldSelected.set([...$researchFieldSelected, name]);
        }
        else {
            researchFieldSelected.set($researchFieldSelected.filter((item) => item !== name));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Find enum value of research fields from text
        const researchFieldsEnum = $researchFieldSelected.map((item) => {
            const researchField = researchFields.find((field) =>
                field.subCategory?.find((sub) => sub.name === item)
            );
            return researchField?.subCategory?.find((sub) => sub.name === item)?.value;
        }) as ResearchField[];


        researchFieldsStore.set(researchFieldsEnum);
        console.log("Set research fields", researchFieldsEnum);
    };



    return (
        <div className=" mx-auto mt-5 max-h-96 max-w-screen-xl overflow-auto px-5 pb-5 no-scrollbar">
            <h1 className="inline-flex font-kanit text-2xl font-semibold text-gray-800">
                <DocumentTextIcon className="mr-2 h-6 w-6 " />
        Research Field{" "}
                <span className="hidden md:block">/ Areas of Expertise</span>
            </h1>
            <form id="filter" onSubmit={handleSubmit} className="mt-4 grid gap-5">
                {researchFields.map((item) => (
                    <section key={item.name}>
                        <h2 className="text-xl font-medium text-gray-800">{item.name}</h2>
                        <div className="mt-4 grid gap-x-10 gap-y-2.5 md:grid-cols-2">
                            {item.subCategory &&
                item.subCategory.map((item) => (
                    <div key={item.name} className="flex flex-row-reverse md:flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item.name}
                            className="aspect-square h-6 overflow-hidden rounded-xl border-[1px] border-gray-300 accent-gray-800"
                            checked={$researchFieldSelected.includes(item.name)}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor={item.name}
                            className="flex-1 font-light text-gray-400"
                        >
                            {item.name}
                        </label>
                    </div>
                ))}
                        </div>
                    </section>
                ))}
            </form>
        </div>
    );
};

export default Filter;
