import { useTranslations } from "@/i18n/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import DirectoryDisplay from "src/modules/directory/components/DirectoryDisplayTH";
import FilterDrawer from "./components/Drawer/FilterDrawerTH";
import SortByDrawer from "./components/Drawer/SortByDrawerTH";
import { searchKeyword } from "./stores/facultyStore";

const DirectoryModule = () => {
    const $searchKeyword = useStore(searchKeyword);

    const t = useTranslations("th");

    return (
        <>
            <header className="max-w-screen-xl mx-auto px-5 mt-10">
                <h1 className="uppercase text-2xl lg:text-4xl underline decoration-primary decoration-4 text-center py-10 font-kanit font-semibold">
                    {t("people.hero.title")}
                </h1>
                <form className="flex space-x-1">
                    <label
                        htmlFor="search"
                        className="relative flex-1 border-gray-300 border-[1px] rounded overflow-clip shadow-lg mr-1 md:max-w-xl md:mx-auto"
                    >
                        <MagnifyingGlassIcon className="w-6 h-6 absolute -translate-y-1/2 top-1/2 left-2.5 text-gray-900" />
                        <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder={t("people.search_by_name")}
                            className="pl-10 pr-2.5 py-2.5 w-full outline-none ring-0 font-sarabun"
                            value={$searchKeyword}
                            onChange={(e) => {
                                searchKeyword.set(e.target.value);
                            }}
                        />
                    </label>
                    <input type="submit" className="sr-only" />
                    <div className="md:hidden">
                        <SortByDrawer />
                        <FilterDrawer />
                    </div>
                </form>
            </header>
            <main className="pb-10 max-w-screen-xl mx-auto mt-2 font-kanit">
                <DirectoryDisplay />
            </main>
        </>
    );
};

export default DirectoryModule;
