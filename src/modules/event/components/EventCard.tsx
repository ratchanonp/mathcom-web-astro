import { format } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
	event: Event;
}

const EventCard = (props: Props) => {
	const { event } = props;

	return (
		<div className="border-gray grid gap-x-5 overflow-clip border-2 shadow-lg lg:grid-cols-2">
			<figure>
				<img
					className="h-full object-cover"
					src={event.thumbnail ? event.thumbnail : "https://placehold.co/600x600?text=No+Image"}
					alt={event.title}
				/>
			</figure>
			<div className="grid w-full gap-2.5 p-5">
				<div className="flex gap-5">
					<p className="inline-flex rounded-full bg-gray-100 px-2.5 text-sm text-slate-800">
						{format(event.event_start, "hh:mm a")} - {format(event.event_end, "hh:mm a")}
					</p>
				</div>
				<h2 className="text-xl font-semibold text-yellow-500">{event.title}</h2>
				<div className="grid gap-2.5">
					<div className="flex flex-col space-y-1">
						<p className="text-xs text-gray-400">Event Categories</p>
						<p className="w-fit rounded-full bg-yellow-500 px-2.5">{event.category}</p>
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
