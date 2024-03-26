import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { isMenuOpen } from "../../store/menuStore";

import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import {
    AcademicCapIcon,
    BuildingLibraryIcon,
    CalculatorIcon,
    CalendarDaysIcon,
    ChatBubbleBottomCenterIcon,
    ComputerDesktopIcon,
    HomeIcon,
    InformationCircleIcon,
    MagnifyingGlassIcon,
    NewspaperIcon,
    TrophyIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";

const Menu = () => {
    const $isMenuOpen = useStore(isMenuOpen);

    const MenuItem = ({
        title,
        href,
        icon,
    }: {
        title: string;
        href: string;
        icon: JSX.Element;
    }) => {
        return (
            <a
                href={href}
                className="group flex space-x-2 border-b-[1px] border-white py-2 hover:bg-black"
            >
                {icon}
                <p className="transition-transform ease-in-out group-hover:translate-x-5">
                    {title}
                </p>
            </a>
        );
    };

    return (
        <div
            className={`fixed h-screen w-screen md:w-[350px] bg-gray-900 font-kanit right-0 ${$isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-50 transition-transform duration-500 ease-in-out`}
        >
            <div className="mx-auto max-w-7xl h-full overflow-y-auto">
                <div className="flex items-center justify-between py-5 pl-5">
                    <a href="/" className="flex items-center">
                        <img
                            src={MathComLogo.src}
                            alt="CU Logo"
                            className="mr-5 aspect-auto h-[65px] w-auto"
                        />
                        <div className="flex w-full justify-center font-kanit font-medium text-white">
                            <span>
                                <span className="font-light">DEPARTMENT OF</span> <br />{" "}
                                MATHEMATICS AND <br className="hidden xs:block lg:hidden" />{" "}
                                COMPUTER SCIENCE
                            </span>
                        </div>
                    </a>
                    <button
                        className="bg-white p-4"
                        onClick={() => isMenuOpen.set(!$isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-10 w-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className={"mt-5 flex flex-col p-5 font-medium text-white"}>
                    <h2 className="mb-5 font-kanit text-lg font-semibold uppercase">
                        Main Menu
                    </h2>
                    <MenuItem
                        title="Home"
                        href="/"
                        icon={
                            <HomeIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                        }
                    />
                    <MenuItem
                        title="About Us"
                        href="/about-us"
                        icon={
                            <InformationCircleIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                        }
                    />
                    <MenuItem
                        title="Research"
                        href="/research"
                        icon={
                            <MagnifyingGlassIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                        }
                    />
                    <Accordion
                        type="single"
                        collapsible
                        className="border-b border-white"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center py-2 text-white [&[data-state=open]>svg.back-icon]:rotate-180 border-b border-white">
                                <AcademicCapIcon className="mr-2 h-6 w-6 transition-transform  ease-in-out group-hover:translate-x-5" />
                                <a href="/undergraduate" className="transition-transform  ease-in-out group-hover:translate-x-5">
                                    Undergraduate
                                </a>
                                <ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white  transition-transform duration-200" />
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <a
                                        href="/undergraduate/math/academics"
                                        className="group flex space-x-3 border-b-[1px] border-white py-2 ml-5 hover:bg-black"
                                    >
                                        <CalculatorIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            B.Sc. Mathematics
                                        </a>
                                    </a>
                                    <a
                                        href="/computer-science"
                                        className="group flex space-x-3 py-2 ml-5 hover:bg-black"
                                    >
                                        <ComputerDesktopIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            B.Sc. Computer Science
                                        </a>
                                    </a>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center py-2 text-white [&[data-state=open]>svg.back-icon]:rotate-180 border-b border-white">
                                <AcademicCapIcon className="mr-2 h-6 w-6 transition-transform  ease-in-out group-hover:translate-x-5" />
                                <a href="/graduate" className="transition-transform  ease-in-out group-hover:translate-x-5">
                                    Graduate
                                </a>
                                <ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white  transition-transform duration-200" />
                            </AccordionTrigger>
                            <AccordionContent>
                                <Accordion type="multiple" className="border-b border-white">
                                    <AccordionItem value="item-1 border-b">
                                        <ul>
                                            <a
                                                href="/graduate/math/academics"
                                                className="group flex space-x-3 border-b-[1px] border-white py-2 ml-5 hover:bg-black"
                                            >
                                                <CalculatorIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                                <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                                        Mathematics
                                                </a>
                                            </a>
                                            <a
                                                href="/graduate/amcs/academics"
                                                className="group flex space-x-3 py-2 ml-5 hover:bg-black border-b border-white"
                                            >
                                                <CalculatorIcon className="h-6 w-6 shrink-0 transition-transform ease-in-out group-hover:translate-x-5" />
                                                <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                                        Applied Mathematics & Computational Science
                                                </a>
                                            </a>
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="group flex w-full items-center py-2 text-white [&[data-state=open]>svg.back-icon]:rotate-180 pl-5">

                                            <ComputerDesktopIcon className="mr-2 h-6 w-6 shrink-0 transition-transform ease-in-out group-hover:translate-x-5" />
                                            <p className="transition-transform  ease-in-out group-hover:translate-x-5 text-left">
                                                Computer Science <br/>& Information Technology
                                            </p>
                                            <ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white  transition-transform duration-200" />
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                <a
                                                    href="/graduate/csit/master/academics"
                                                    className="group flex space-x-3 border-t-[1px] border-white py-2 ml-5 pl-5 hover:bg-black border-b"
                                                >
                                                    <ComputerDesktopIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                                    <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                                        Master
                                                    </a>
                                                </a>
                                                <a
                                                    href="/graduate/csit/phd/academics"
                                                    className="group flex space-x-3 py-2 ml-10 hover:bg-black"
                                                >
                                                    <ComputerDesktopIcon className="h-6 w-6 transition-transform shrink-0 ease-in-out group-hover:translate-x-5" />
                                                    <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                                        Doctoral
                                                    </a>
                                                </a>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type="single"
                        collapsible
                        className="border-b-[1px] border-white"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center py-2 text-white [&[data-state=open]>svg.back-icon]:rotate-180">
                                <UserGroupIcon className="mr-2 h-6 w-6 transition-transform  ease-in-out group-hover:translate-x-5" />
                                <p className="transition-transform  ease-in-out group-hover:translate-x-5">
                                    Our Department
                                </p>
                                <ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white  transition-transform duration-200" />
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <a
                                        href="/administration"
                                        className="group flex space-x-3 border-y-[1px] border-white py-2 pl-5 hover:bg-black"
                                    >
                                        <BuildingLibraryIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Administration
                                        </a>
                                    </a>
                                    <a
                                        href="/directory"
                                        className="group flex space-x-3 py-2 pl-5 hover:bg-black"
                                    >
                                        <BuildingLibraryIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Directory
                                        </a>
                                    </a>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type="single"
                        collapsible
                        className="border-b-[1px] border-white"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="group flex w-full items-center py-2 text-white [&[data-state=open]>svg.back-icon]:rotate-180">
                                <NewspaperIcon className="mr-2 h-6 w-6 transition-transform  ease-in-out group-hover:translate-x-5" />
                                <p className="transition-transform  ease-in-out group-hover:translate-x-5">
                                    News & Events
                                </p>
                                <ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white  transition-transform duration-200" />
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <a
                                        href="/administration"
                                        className="group flex space-x-3 border-y-[1px] border-white py-2 pl-5 hover:bg-black"
                                    >
                                        <NewspaperIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Stories & News
                                        </a>
                                    </a>
                                    <a
                                        href="/directory"
                                        className="group flex space-x-3 py-2 pl-5 hover:bg-black  border-b border-white"
                                    >
                                        <TrophyIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Awards
                                        </a>
                                    </a>
                                    <a
                                        href="/directory"
                                        className="group flex space-x-3 py-2 pl-5 hover:bg-black border-b border-white"
                                    >
                                        <CalendarDaysIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Events
                                        </a>
                                    </a>
                                    <a
                                        href="/directory"
                                        className="group flex space-x-3 py-2 pl-5 hover:bg-black border-b border-white"
                                    >
                                        <ChatBubbleBottomCenterIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            Seminars
                                        </a>
                                    </a>
                                    <a
                                        href="/directory"
                                        className="group flex space-x-3 py-2 pl-5 hover:bg-black"
                                    >
                                        <CalculatorIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
                                        <a className="transition-transform ease-in-out group-hover:translate-x-5">
                                            APAM
                                        </a>
                                    </a>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Menu;
