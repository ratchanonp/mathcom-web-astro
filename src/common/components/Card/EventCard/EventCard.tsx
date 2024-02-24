import type { Event } from "@/interfaces/event.interface";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";

interface Props {
  event: Event;
}

const EventCard = (props: Props) => {
    const { event } = props;
    const { start, end } = event;

    const localeDateFormater = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const timeFormater = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    const formatFull = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    let formattedTimeStart = timeFormater.format(start);
    formattedTimeStart = formattedTimeStart.replace(/ AM| PM/, ""); // remove AM/PM from start time

    const formattedTimeEnd = timeFormater.format(end);

    const formattedDateStart = localeDateFormater.format(start);
    const formattedDateEnd = localeDateFormater.format(end);

    const formattedFullStart = formatFull.format(start);
    const formattedFullEnd = formatFull.format(end);

    const isSameDay = formattedDateStart === formattedDateEnd;

    const formattedDate = isSameDay
        ? formattedDateStart
        : `${formattedDateStart} - ${formattedDateEnd}`;
    const formattedTime = isSameDay
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
                            <p className="font-light">{event.eventCategory}</p>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">Speaker:</p>
                            <p className="font-light">{event.speaker}</p>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">Start:</p>
                            <p className="font-light">{formattedFullStart}</p>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">End:</p>
                            <p className="font-light">{formattedFullEnd}</p>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">Location:</p>
                            <p className="font-light">{event.location}</p>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">Contact:</p>
                            <a className="font-light text-yellow-600">{event.contact}</a>
                        </div>
                        <div className="grid md:grid-cols-[150px_1fr]">
                            <p className="font-semibold">More Information:</p>
                            <a className="font-light text-yellow-600">{event.moreInfo}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
