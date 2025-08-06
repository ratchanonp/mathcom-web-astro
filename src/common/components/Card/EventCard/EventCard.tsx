import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { format, isSameDay } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
	event: Event;
}

const EventCard = (props: Props) => {
	const { event } = props;
	const { event_start, event_end } = event;

	let formattedTimeStart = format(event_start, "h:mm");
	let formattedTimeEnd = format(event_end, "h:mm");

	const formattedDateStart = format(event_start, "MMMM d, yyyy");
	const formattedDateEnd = format(event_end, "MMMM d, yyyy");

	const isEventSameDay = isSameDay(event_start, event_end);

	const formattedDate = isEventSameDay ? formattedDateStart : `${formattedDateStart} - ${formattedDateEnd}`;
	const formattedTime = isEventSameDay
		? `${formattedTimeStart} - ${formattedTimeEnd}`
		: `${formattedTimeStart} - ${formattedDateEnd}`;

	return (
		<div className="flex flex-col border-b-2 border-gray-200 py-3">
			<div className="flex">
				<time className="inline-flex items-center text-base font-semibold text-gray-800 md:text-xl">
					<CalendarIcon className="mr-2 h-5 w-5" /> {formattedDate}
				</time>
				<time className="inline-flex items-center text-base font-semibold text-gray-800 md:text-xl">
					<ClockIcon className="ml-4 mr-2 h-5 w-5" /> {formattedTime}
				</time>
			</div>

			<div className="mt-2 flex flex-col md:flex-row md:space-x-5">
				<figure className="flex w-full shrink-0 space-x-5 md:w-56 lg:w-80">
					<img src="/gordan.jpeg" alt="Gordon" className="object-cover" />
				</figure>

				<div>
					<h3 className="mt-2 font-kanit text-xl font-medium text-yellow-600 md:text-2xl">{event.title}</h3>

					<div className="mt-2 grid gap-x-5 gap-y-2.5">
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">Event Categories:</p>
							<p className="font-light">{event.category[0]}</p>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">Speaker:</p>
							<p className="font-light">{event.speaker}</p>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">Start:</p>
							<p className="font-light">{formattedDateStart}</p>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">End:</p>
							<p className="font-light">{formattedDateEnd}</p>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">Location:</p>
							<p className="font-light">{event.location}</p>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">Contact:</p>
							<a className="font-light text-yellow-600">{event.register_link}</a>
						</div>
						<div className="grid md:grid-cols-[150px_1fr]">
							<p className="font-semibold">More Information:</p>
							<p
								dangerouslySetInnerHTML={{
									__html: event.more_information,
								}}
								className="font-light"
							></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
