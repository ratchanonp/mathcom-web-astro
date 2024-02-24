import { format } from "date-fns";
import type { Event } from "src/interfaces/event.interface";

interface Props {
  event: Event;
}

const EventCard = (props: Props) => {
    const { event } = props;
    return (
        <div className="grid overflow-clip shadow-lg border-2 border-gray hover:scale-105 transition-all group">
            <div className="grid gap-2.5 w-full">
                <div className="flex flex-col gap-2.5 bg-gray-800 group-hover:bg-yellow-300 group-hover:text-slate-800 w-full p-5">
                    <p className="  text-white group-hover:text-slate-800 inline-flex text-md font-semibold w-fit text-xl font-kanit">{format(event.start, "dd MMM yyyy")}</p>
                    <p className="  text-white group-hover:text-slate-800 inline-flex text-sm w-fit font-kanit">{format(event.start, "hh:mm")} - {format(event.end, "hh:mm a")}</p>
                </div>
                <h2 className="px-5 py-2.5 w-full text-slate-800 font-kanit ">{event.title}</h2>
                <div className="grid gap-2.5 p-5">
                    <div className="flex flex-col space-y-1 ">
                        <p className="rounded-full w-fit px-2.5 bg-yellow-300 text-sm">{event.eventCategory}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
