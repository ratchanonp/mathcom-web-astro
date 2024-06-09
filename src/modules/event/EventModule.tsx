import { getLangFromUrl, useDateFnsLocale, useTranslations } from "@/i18n/utils";
import type { Event } from "@/interfaces/event.interface";
import { EventAPI } from "@/libs/api/event";
import { useStore } from "@nanostores/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import EventCard from "./components/EventCard";
import { selectedDay } from "./stores/eventStore";

interface Props {
	url: URL;
}

const EventModule = (props: Props) => {
	const { url } = props;

	const lang = getLangFromUrl(url);
	const t = useTranslations(lang);
	const dt = useDateFnsLocale(lang);
	const $selectedDay = useStore(selectedDay);

	const [events, setEvents] = useState<Event[]>([]);

	useEffect(() => {
		(async () => {
			const eventAPI = new EventAPI();
			const eventsRes = await eventAPI.getEvents($selectedDay);
			setEvents(eventsRes);
		})();
	}, [$selectedDay]);

	return (
		<>
			<header>
				<h1 className="py-10 text-center font-kanit text-2xl font-semibold uppercase underline decoration-primary decoration-4 lg:text-4xl">
					{t("events.event-calendar")}
				</h1>
			</header>

			<main className="mx-auto grid max-w-screen-xl justify-items-center px-5 pb-20 lg:flex lg:grid-cols-2 lg:space-x-10">
				<aside className="w-full max-w-96">
					<Calendar lang={lang} />
				</aside>
				<section className="flex-1 space-y-5">
					<h2 className="mt-10 font-kanit text-xl font-semibold text-gray-700 md:text-2xl lg:mt-0">
						{t("events.event-for")}{" "}
						<span className="text-yellow-500">{format($selectedDay, "MMMM dd, yyyy", { locale: dt })}</span>{" "}
					</h2>
					<div className="grid gap-5">
						{events.length > 0 ? (
							events.map((event) => <EventCard key={event.id} event={event} />)
						) : (
							<p className="font-kanit text-gray-500">{t("events.no-events-today")}</p>
						)}
					</div>
				</section>
			</main>
		</>
	);
};

export default EventModule;
