import {
	AcademicCapIcon,
	BuildingLibraryIcon,
	InformationCircleIcon,
	NewspaperIcon
} from "@/common/components/icons";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown as LucideChevronDown } from "lucide-react";
import MenuItem from "./MenuItem";

interface MenuAccordionProps {
	currentURL: URL;
}

export default function MenuAccordion(props: MenuAccordionProps) {
	const { currentURL } = props;
	const lang = getLangFromUrl(currentURL);
	const t = useTranslations(lang);
	const translatePath = useTranslatedPath(lang);

	return (
		<>
			<Accordion type="single" collapsible>
				<AccordionItem value="about-us">
					<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
						<MenuItem title={t("menu.about_us")} href={translatePath("/about-us")} Icon={InformationCircleIcon} />
						<LucideChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
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

			<Accordion type="single" collapsible>
				<AccordionItem value="undergraduate">
					<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
						<MenuItem
							title={t("menu.undergraduate")}
							href={translatePath("/undergraduate")}
							Icon={AcademicCapIcon}
						/>
						<LucideChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
					</AccordionTrigger>
					<AccordionContent className="border-t border-white">
						<ul className="ml-5 divide-y">
							<MenuItem
								title={t("menu.undergraduate.mathematics")}
								href={translatePath("/undergraduate/mathematics")}
								Icon={AcademicCapIcon}
							/>
							<MenuItem
								title={t("menu.undergraduate.computer_science")}
								href={translatePath("/undergraduate/computer-science")}
								Icon={AcademicCapIcon}
							/>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="graduate">
					<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
						<MenuItem title={t("menu.graduate")} href={translatePath("/graduate")} Icon={AcademicCapIcon} />
						<LucideChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
					</AccordionTrigger>
					<AccordionContent className="border-t border-white">
						<ul className="ml-5 divide-y">
							<MenuItem
								title={t("menu.graduate.mathematics")}
								href={translatePath("/graduate/mathematics")}
								Icon={AcademicCapIcon}
							/>
							<MenuItem
								title={t("menu.graduate.amcs")}
								href={translatePath("/graduate/amcs")}
								Icon={AcademicCapIcon}
							/>
							<MenuItem
								title={t("menu.graduate.csit")}
								href={translatePath("/graduate/csit")}
								Icon={AcademicCapIcon}
							/>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="news-events">
					<AccordionTrigger className="group flex w-full items-center text-white hover:bg-white/10 [&[data-state=open]>svg.back-icon]:rotate-180">
						<MenuItem title={t("menu.news_events")} href={translatePath("/news-events")} Icon={NewspaperIcon} />
						<LucideChevronDown className="back-icon ml-auto h-4 w-4 shrink-0 text-white transition-transform duration-200" />
					</AccordionTrigger>
					<AccordionContent className="border-t border-white">
						<ul className="ml-5 divide-y">
							<MenuItem
								title={t("menu.news_events.stories_news")}
								href={translatePath("/news-events")}
								Icon={NewspaperIcon}
							/>
							<MenuItem
								title={t("menu.news_events.awards")}
								href={translatePath("/news-events/award")}
								Icon={NewspaperIcon}
							/>
							<MenuItem
								title={t("menu.news_events.events")}
								href={translatePath("/events")}
								Icon={NewspaperIcon}
							/>
							<MenuItem
								title={t("menu.news_events.apam")}
								href={translatePath("/news-events/apam")}
								Icon={NewspaperIcon}
							/>
							<MenuItem
								title={t("menu.news_events.seminar")}
								href={translatePath("/news-events/seminar")}
								Icon={NewspaperIcon}
							/>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
} 