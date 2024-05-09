import type { Event } from "@/interfaces/event.interface";
import { format, formatISO } from "date-fns";

interface Props {
    event: Event
}

const EventComponent = (props: Props) => {
    const { event} = props;

  return (
    <article className="grid justify-items-center p-5 hover:bg-gray-200">
        <header>
            <time className="grid justify-items-center" dateTime={formatISO(event.event_start)}>
                <span className="text-yellow-500 text-3xl font-bold uppercase">{format(event.event_start, "MMM dd")}</span>
                <span className="text-yellow-500">{format(event.event_start, "hh:mm aa")}</span>
            </time>
            <h3 className="text-xl text-slate-500 mt-2.5">{event.title}</h3>
        </header>
        {/* <p className="mt-3 text-center text-light text-slate-400" __dangerouslySetInnerHTML={{ __html: event.more_information }}></p> */}
    </article>
  )
}

export default EventComponent