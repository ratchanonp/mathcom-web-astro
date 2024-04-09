import { format } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
  event: Event;
}

const EventCard = (props: Props) => {
    const { event } = props;
    return (
        <div className="grid overflow-clip shadow-lg border-2 border-gray hover:scale-105 transition-all group w-1/2 md:w-1/3 lg:w-1/5">
            <div className="grid gap-2.5 w-full">
                <div className="flex flex-col gap-2.5 bg-gray-800 group-hover:bg-yellow-300 group-hover:text-slate-800 w-full p-5 h-24">
                    <p className="  text-white group-hover:text-slate-800 inline-flex text-md font-semibold w-fit text-xl font-kanit">{format(event.event_start, "dd MMM yyyy")}</p>
                    <p className="  text-white group-hover:text-slate-800 inline-flex text-sm w-fit font-kanit">{format(event.event_start, "hh:mm")} - {format(event.event_end, "hh:mm a")}</p>
                </div>
                <h2 className="px-5 py-2.5 w-full text-slate-800 font-kanit ">{event.title}</h2>
                <div className="grid gap-2.5 p-5">
                    <div className="flex flex-col space-y-1 ">
                        <p className="rounded-full w-fit px-2.5 bg-yellow-300 text-sm">{event.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
