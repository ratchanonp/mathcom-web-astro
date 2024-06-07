import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { isMenuOpen } from "../../../store/menuStore";

import MathComLogo from "@/assets/img/logo/MathComLogo.png";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";
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
			className={`fixed right-0 h-screen w-screen bg-gray-900 font-kanit md:w-[350px] ${
				$isMenuOpen ? "translate-x-0" : "translate-x-full"
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
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title={t("menu.about_us")} href={translatePath("/about-us")} Icon={InformationCircleIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem
											title={t("menu.administration")}
											href={translatePath("/administration")}
											Icon={BuildingLibraryIcon}
										/>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<MenuItem title={t("menu.people")} href={translatePath("/people")} Icon={UserGroupIcon} />

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem
										title={t("menu.undergraduate")}
										href={translatePath("/undergraduate")}
										Icon={AcademicCapIcon}
									/>
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem
											title={t("menu.undergraduate.mathematics")}
											href={translatePath("/undergraduate/mathematics")}
											Icon={CalculatorIcon}
										/>
										<MenuItem
											title={t("menu.undergraduate.computer_science")}
											href={translatePath("/undergraduate/computer-science")}
											Icon={ComputerDesktopIcon}
										/>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
									<MenuItem title={t("menu.graduate")} href={translatePath("/graduate")} Icon={AcademicCapIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<AccordionItem value="item-1">
										<ul className="ml-5 divide-y">
											<MenuItem
												title={t("menu.graduate.mathematics")}
												href={translatePath("/graduate/mathematics")}
												Icon={CalculatorIcon}
											/>
											<MenuItem
												title={t("menu.graduate.amcs")}
												href={translatePath("/graduate/amcs")}
												Icon={CalculatorIcon}
											/>
											<MenuItem
												title={t("menu.graduate.csit")}
												href={translatePath("/graduate/csit")}
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
									<MenuItem title={t("menu.news_events")} href={translatePath("/news-events")} Icon={NewspaperIcon} />
									<ChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
								</AccordionTrigger>
								<AccordionContent className="border-t border-white">
									<ul className="ml-5 divide-y">
										<MenuItem
											title={t("menu.news_events.stories_news")}
											href={translatePath("/news-events/stories-news")}
											Icon={NewspaperIcon}
										/>
										<MenuItem
											title={t("menu.news_events.awards")}
											href={translatePath("/news-events/award")}
											Icon={TrophyIcon}
										/>
										<MenuItem
											title={t("menu.news_events.events")}
											href={translatePath("/events")}
											Icon={CalendarDaysIcon}
										/>
										<MenuItem
											title={t("menu.news_events.apam")}
											href={translatePath("/news-events/apam")}
											Icon={CalculatorIcon}
										/>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<MenuItem title={t("menu.research")} href={translatePath("/research")} Icon={DocumentTextIcon} />
						<MenuItem title={t("menu.support_us")} href={translatePath("/support-us")} Icon={HeartIcon} />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
