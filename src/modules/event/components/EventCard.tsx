import type { Event } from "@/interfaces/event.interface";
import { format } from "date-fns";

interface Props {
  event: Event;
}

const EventCard = (props: Props) => {
    const { event } = props;
    return (
        <div className="grid lg:grid-cols-2 gap-x-5 overflow-clip shadow-lg border-2 border-gray">
            <figure>
                <img className="h-full object-cover" src="/gordan.jpeg" alt={event.title} />
            </figure>
            <div className="grid gap-2.5 p-5 w-full">
                <div className="flex gap-5">
                    <p className=" bg-gray-100 text-slate-800 rounded-full px-2.5 inline-flex text-sm">{format(event.start, "hh:mm a")} - {format(event.end, "hh:mm a")}</p>
                </div>
                <h2 className="text-xl font-semibold text-yellow-500">{event.title}</h2>
                <div className="grid gap-2.5">
                    <div className="flex flex-col space-y-1 ">
                        <p className="text-gray-400 text-xs">Event Categories</p>
                        <p className="rounded-full w-fit px-2.5 bg-yellow-500">{event.eventCategory}</p>
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
                        <p className="text-gray-400 text-xs">Contact </p>
                        <a href={event.contact} className="text-yellow-500">{event.contact}</a>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-gray-400 text-xs">More Information</p>
                        <a href={event.moreInfo} className="text-yellow-500 break-all">{event.moreInfo}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
