import { format } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
    event: Event;
}

const EventCard = (props: Props) => {
    const { event } = props;

    return (
        <div className="grid lg:grid-cols-2 gap-x-5 overflow-clip shadow-lg border-2 border-gray">
            <figure>
                <img
                    className="h-full object-cover"
                    src={
                        event.thumbnail
                            ? event.thumbnail
                            : "https://placehold.co/600x600?text=No+Image"
                    }
                    alt={event.title}
                />
            </figure>
            <div className="grid gap-2.5 p-5 w-full">
                <div className="flex gap-5">
                    <p className=" bg-gray-100 text-slate-800 rounded-full px-2.5 inline-flex text-sm">
                        {format(event.event_start, "hh:mm a")} -{" "}
                        {format(event.event_end, "hh:mm a")}
                    </p>
                </div>
                <h2 className="text-xl font-semibold text-yellow-500">
                    {event.title}
                </h2>
                <div className="grid gap-2.5">
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-gray-400 text-xs">
                            Event Categories
                        </p>
                        <p className="rounded-full w-fit px-2.5 bg-yellow-500">
                            {event.category}
                        </p>
                    </div>
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-gray-400 text-xs">Speaker</p>
                        <p>{event.speaker}</p>
                    </div>
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-gray-400 text-xs">Location</p>
                        <p className="">{event.location}</p>
                    </div>
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-gray-400 text-xs">Register </p>
                        <a
                            href={event.register_link}
                            className="text-yellow-500"
                        >
                            {event.register_link}
                        </a>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-gray-400 text-xs">
                            More Information
                        </p>
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
