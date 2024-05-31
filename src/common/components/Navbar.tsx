import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import { languages } from "@/i18n/ui";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
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
    const $isMenuOpen = useStore(isMenuOpen);

    return (
        <>
            <nav
                className={`
        fixed z-40 w-full overflow-hidden bg-white shadow transition-all duration-500 
        ${$isMenuOpen && " -translate-x-full md:-translate-x-[350px]"}
        `}
            >
                <div className="container mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5">
                    <a href="/" className="flex items-center">
                        <img
                            src={MathComLogo.src}
                            alt="CU Logo"
                            className="aspect-auto h-[60px] w-[53px] md:h-[80px] md:w-[67px] border-r-[1px] border-r-gray-500 pr-2.5"
                        />
                        <div className="flex h-full flex-col justify-center font-kanit pl-2.5">
                            <span className="text-xs md:text-xl font-light text-gray-500 uppercase">
                                {t("nav.department")}
                            </span>
                            <span className="text-sm md:text-2xl font-semibold text-gray-700 uppercase">
                                {t("nav.mathematics")}
                                {t("nav.and")}
                                <br className="md:hidden" />
                                {t("nav.computer_science")}
                            </span>
                        </div>
                    </a>
                    <div className="flex items-center space-x-5">
                        <div className="bg-gray-100 p-1 rounded-full font-kanit font-medium">
                            {Object.entries(languages).map(([language, _]) => (
                                <a
                                    href={`/${language}/`}
                                    className={`px-3 py-0.5 rounded-full  text-slate-800 hover:text-yellow-500 uppercase ${
                                        lang === language && "text-yellow-500 bg-white"
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
