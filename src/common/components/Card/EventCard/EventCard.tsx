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

    const formattedDate = isEventSameDay
        ? formattedDateStart
        : `${formattedDateStart} - ${formattedDateEnd}`;
    const formattedTime = isEventSameDay
        ? `${formattedTimeStart} - ${formattedTimeEnd}`
        : `${formattedTimeStart} - ${formattedDateEnd}`;

    return (
        <div className=" border-b-2 border-gray-200 py-3 flex flex-col">
            <div className="flex">
                <time className="inline-flex items-center font-semibold text-base md:text-xl text-gray-800">
                    <CalendarIcon className="w-5 h-5 mr-2" /> {formattedDate}
                </time>
                <time className="inline-flex items-center font-semibold text-base md:text-xl text-gray-800">
                    <ClockIcon className="w-5 h-5 ml-4 mr-2" /> {formattedTime}
                </time>
            </div>

            <div className="flex md:space-x-5 mt-2 flex-col md:flex-row">
                <figure className="flex space-x-5 w-full md:w-56 lg:w-80 flex-shrink-0">
                    <img
                        src="/gordan.jpeg"
                        alt="Gordon"
                        className="object-cover"
                    />
                </figure>

                <div>
                    <h3 className=" text-yellow-600 text-xl md:text-2xl mt-2 font-medium font-kanit">
                        {event.title}
                    </h3>

                    <div className="gap-x-5 gap-y-2.5 mt-2 grid">
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
                            <a className="font-light text-yellow-600">
                                {event.register_link}
                            </a>
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
