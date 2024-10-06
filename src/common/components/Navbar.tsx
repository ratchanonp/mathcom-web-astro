import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import { languages } from "@/i18n/ui";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../store/menuStore";

interface NavbarProps {
	currentURL: URL;
}

export default function Navbar(props: NavbarProps) {
	const { currentURL } = props;
	const lang = getLangFromUrl(currentURL);
	const t = useTranslations(lang);
	const translatePath = useTranslatedPath(lang);

	const $isMenuOpen = useStore(isMenuOpen);

	return (
		<>
			<nav
				className={`fixed z-40 w-full overflow-hidden bg-white shadow transition-all duration-500 ${$isMenuOpen && "-translate-x-full md:-translate-x-[350px]"} `}
			>
				<div className="container mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5">
					<a href={translatePath("/")} className="flex items-center">
						<img
							src={MathComLogo.src}
							alt="CU Logo"
							className="aspect-auto h-[60px] w-[53px] border-r-[1px] border-r-gray-500 pr-2.5 md:h-[80px] md:w-[67px]"
						/>
						<div className="flex h-full flex-col justify-center pl-2.5 font-kanit">
							<span className="text-xs font-light uppercase text-gray-500 md:text-xl">{t("nav.department")}</span>
							<span className="text-sm font-semibold uppercase text-gray-700 md:text-2xl">
								{t("nav.mathematics")}
								{t("nav.and")}
								<br className="md:hidden" />
								{t("nav.computer_science")}
							</span>
						</div>
					</a>
					<div className="flex items-center space-x-5">
						<div className="rounded-full bg-gray-100 p-1 font-kanit font-medium">
							{Object.entries(languages).map(([language, _]) => (
								<a
									key={language}
									href={`/${language}/`}
									className={`rounded-full px-3 py-0.5 uppercase text-slate-800 hover:text-yellow-500 ${
										lang === language && "bg-white text-yellow-500"
									}`}
								>
									{language}
								</a>
							))}
						</div>
						<button className="h-10 w-10" onClick={() => isMenuOpen.set(!$isMenuOpen)}>
							{$isMenuOpen ? <XMarkIcon className="h-10 w-10" /> : <Bars3Icon className="h-10 w-10" />}
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
