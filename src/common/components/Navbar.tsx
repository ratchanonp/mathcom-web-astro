import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../store/menuStore";

export default function Navbar() {
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
                            src="/MathCULogo.png"
                            alt="CU Logo"
                            className="aspect-auto h-[60px] md:h-[80px] w-auto border-r-[1px] border-r-gray-500 pr-2.5"
                        />
                        <div className="flex h-full flex-col justify-center font-kanit pl-2.5">
                            <span className="text-xs md:text-xl font-light text-gray-500">DEPARTMENT OF </span>
                            <span className="text-sm md:text-2xl font-semibold text-gray-700">
                MATHEMATICS AND <br className="md:hidden" /> COMPUTER SCIENCE
                            </span>
                        </div>
                    </a>

                    <div className="flex items-center space-x-5 font-black">
                        <button
                            className="h-10 w-10"
                            onClick={() => isMenuOpen.set(!$isMenuOpen)}
                        >
                            {$isMenuOpen ? (
                                <XMarkIcon className="h-10 w-10" />
                            ) : (
                                <Bars3Icon className="h-10 w-10" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
