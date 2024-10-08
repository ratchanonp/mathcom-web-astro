import { ClockIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
	event: Event;
}

const EventCard = (props: Props) => {
	const { event } = props;

	return (
		<div className="border-gray grid overflow-clip border-2 shadow-lg lg:grid-cols-2">
			<figure>
				<img
					className="h-full object-cover aspect-square"
					src={event.thumbnail ? event.thumbnail : "https://placehold.co/600x600?text=No+Image"}
					alt={event.title}
				/>
			</figure>
			<div className="flex flex-col w-full gap-2.5 p-6">
				<div className="flex gap-5">
					<p className="flex rounded-full bg-yellow-500 font-medium px-2 text-sm text-slate-800 items-center justify-center h-fit">
						<ClockIcon className="h-4 w-4 mr-1" />
						{format(event.event_start, "HH:mm")} - {format(event.event_end, "HH:mm")}
					</p>
				</div>
				<h2 className="text-xl font-medium font-kanit text-yellow-500">{event.title}</h2>
				<div className="flex flex-wrap gap-y-2.5 gap-x-5 justify-start">
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">Categories</p>
						{event.category && (
						<p className="flex items-center w-fit rounded-full bg-yellow-500 px-2.5">{event.category}</p>)}
					</div>
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">Speaker</p>
						<p>{event.speaker}</p>
					</div>
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">Location</p>
						<p className="">{event.location}</p>
					</div>
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">Register </p>
						<a href={event.register_link} className="text-yellow-500">
							{event.register_link}
						</a>
					</div>
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">More Information</p>
						<p
							className="line-clamp-2"
							dangerouslySetInnerHTML={{
								__html: event.more_information,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
