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
			<header className="mx-auto mt-10 max-w-(--breakpoint-xl) px-5">
				<h1 className="py-10 text-center font-kanit text-2xl font-semibold uppercase underline decoration-primary decoration-4 lg:text-4xl">
					{t("people.hero.title")}
				</h1>
				<form className="flex space-x-1">
					<label
						htmlFor="search"
						className="relative mr-1 flex-1 overflow-clip rounded border border-gray-300 shadow-lg md:mx-auto md:max-w-xl"
					>
						<MagnifyingGlassIcon className="absolute left-2.5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-900" />
						<input
							type="search"
							id="search"
							name="search"
							placeholder={t("people.search_by_name")}
							className="w-full py-2.5 pl-10 pr-2.5 font-sarabun outline-none ring-0"
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
			<main className="mx-auto mt-2 max-w-(--breakpoint-xl) pb-10 font-kanit">
				<DirectoryDisplay />
			</main>
		</>
	);
};

export default DirectoryModule;
