import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { isMenuOpen } from "../../../store/menuStore";

import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import {
	AcademicCapIcon,
	BuildingLibraryIcon,
	CalculatorIcon,
	CalendarDaysIcon,
	ComputerDesktopIcon,
	DocumentTextIcon,
	HeartIcon,
	HomeIcon,
	InformationCircleIcon,
	NewspaperIcon,
	TrophyIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import MenuItem from "./MenuItem";

const Menu = () => {
	const $isMenuOpen = useStore(isMenuOpen);

	return (
		<div
			className={`fixed right-0 h-screen w-screen bg-gray-900 font-kanit md:w-[350px] ${
				$isMenuOpen ? "translate-x-0" : "translate-x-full"
			} z-50 transition-transform duration-500 ease-in-out`}
		>
			<div className="mx-auto h-full max-w-7xl overflow-y-auto">
				<div className="flex items-center justify-between py-5 pl-5">
					<a href="/" className="flex items-center">
						<img src={MathComLogo.src} alt="CU Logo" className="mr-5 aspect-auto h-[65px] w-auto" />
						<div className="flex w-full justify-center font-kanit font-medium text-white">
							<span>
								<span className="font-light">DEPARTMENT OF</span> <br /> MATHEMATICS AND{" "}
								<br className="xs:block hidden lg:hidden" /> COMPUTER SCIENCE
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
					<h2 className="mb-5 font-kanit text-lg font-semibold uppercase">Main Menu</h2>
					<ul className="divide-y">
						<MenuItem title="Home" href="/" Icon={HomeIcon} />
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title="About Us" href="/about-us" Icon={InformationCircleIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem title="Administration" href="/administration" Icon={BuildingLibraryIcon} />
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<MenuItem title="People" href="/people" Icon={UserGroupIcon} />

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title="Undergraduate" href="/undergraduate" Icon={AcademicCapIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem title="Mathematics" href="/undergraduate/mathematics" Icon={CalculatorIcon} />
										<MenuItem
											title="Computer Science"
											href="/undergraduate/computer-science"
											Icon={ComputerDesktopIcon}
										/>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title="Graduate" href="/graduate" Icon={AcademicCapIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<AccordionItem value="item-1">
										<ul className="ml-5 divide-y">
											<MenuItem title="Mathematics" href="/graduate/mathematics" Icon={CalculatorIcon} />
											<MenuItem
												title="Applied Mathematics & Computational Science"
												href="/graduate/amcs"
												Icon={CalculatorIcon}
											/>
											<MenuItem
												title="Computer Science & Information Technology"
												href="/graduate/csit"
												Icon={ComputerDesktopIcon}
											/>
										</ul>
									</AccordionItem>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title="News & Events" href="/news-events" Icon={NewspaperIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem title="Stories & News" href="/news-events/stories-news" Icon={NewspaperIcon} />
										<MenuItem title="Awards" href="/news-events/award" Icon={TrophyIcon} />
										<MenuItem title="Events" href="/events" Icon={CalendarDaysIcon} />
										<MenuItem title="APAM" href="/news-events/apam" Icon={CalculatorIcon} />
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<MenuItem title="Research" href="/research" Icon={DocumentTextIcon} />
						<MenuItem title="Support Us" href="/support-us" Icon={HeartIcon} />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
