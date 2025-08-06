import { isMenuOpen } from "../../../store/menuStore";

import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import {
	DocumentTextIcon,
	HeartIcon,
	HomeIcon,
	UserGroupIcon
} from "@/common/components/icons";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";
import { useStore } from "@nanostores/react";
import MenuAccordion from "./MenuAccordion";
import MenuItem from "./MenuItem";

interface MenuProps {
	currentURL: URL;
}

const Menu = (props: MenuProps) => {
	const { currentURL } = props;
	const lang = getLangFromUrl(currentURL);
	const t = useTranslations(lang);
	const translatePath = useTranslatedPath(lang);
	const $isMenuOpen = useStore(isMenuOpen);

	return (
		<div
			className={`fixed right-0 h-screen w-screen bg-gray-900 font-kanit md:w-[350px] ${$isMenuOpen ? "translate-x-0" : "translate-x-full"
				} z-50 transition-transform duration-500 ease-in-out`}
		>
			<div className="mx-auto h-full max-w-7xl overflow-y-auto">
				<div className="flex items-center justify-between py-5 pl-5">
					<a href={translatePath("/")} className="flex items-center">
						<img src={MathComLogo.src} alt="CU Logo" className="mr-5 aspect-auto h-[65px] w-auto" />
						<div className="flex w-full justify-center font-kanit font-medium text-white">
							<span className="uppercase">
								<span className="font-light">{t("nav.department")}</span> <br /> {t("nav.mathematics")} {t("nav.and")}
								<br className="xs:block hidden lg:hidden" /> {t("nav.computer_science")}
							</span>
						</div>
					</a>
					<button className="bg-white p-4" onClick={() => isMenuOpen.set(!$isMenuOpen)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-10 w-10"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="mt-5 flex flex-col p-5 font-medium text-white">
					<h2 className="mb-5 font-kanit text-lg font-semibold uppercase">{t("menu.main_menu")}</h2>
					<ul className="divide-y">
						<MenuItem title={t("menu.home")} href={translatePath("")} Icon={HomeIcon} />
						<MenuAccordion currentURL={currentURL} />
						<MenuItem title={t("menu.people")} href={translatePath("/people")} Icon={UserGroupIcon} />
						<MenuItem title={t("menu.research")} href={translatePath("/research")} Icon={DocumentTextIcon} />
						<MenuItem title={t("menu.support_us")} href={translatePath("/support-us")} Icon={HeartIcon} />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
