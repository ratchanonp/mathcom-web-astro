import type { Event } from "@/interfaces/event.interface";
import { EventAPI } from "@/libs/api/event";
import { useStore } from "@nanostores/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import EventCard from "./components/EventCard";
import { selectedDay } from "./stores/eventStore";

const EventModule = () => {
    const $selectedDay = useStore(selectedDay);

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        (async () => {
            const eventAPI = new EventAPI();
            const eventsRes = await eventAPI.getEvents($selectedDay);
            setEvents(eventsRes);
        })();
    }, [$selectedDay]);

    return (
        <>
            <header>
                <h1 className="uppercase text-2xl lg:text-4xl underline decoration-primary decoration-4 text-center py-10 font-kanit font-semibold">
                    Event Calendar
                </h1>
            </header>

            <main className="max-w-screen-xl mx-auto px-5 lg:flex lg:space-x-10 pb-20 grid lg:grid-cols-2 justify-items-center">
                <aside className="w-full max-w-96">
                    <Calendar />
                </aside>
                <section className="space-y-5 flex-1">
                    <h2 className=" text-xl md:text-2xl font-kanit text-gray-700 font-semibold mt-10 lg:mt-0">
                        Event for{" "}
                        <span className="text-yellow-500">
                            {format($selectedDay, "MMMM dd, yyyy")}
                        </span>{" "}
                    </h2>
                    <div className="grid gap-5">
                        {events.length > 0 ? (
                            events.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))
                        ) : (
                            <p className="text-gray-500 font-kanit">
                                No events for this day.
                            </p>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default EventModule;
