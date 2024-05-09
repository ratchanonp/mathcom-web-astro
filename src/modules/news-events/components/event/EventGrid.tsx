import type { Event } from "@/interfaces/event.interface";
import { EventAPI } from "@/libs/api/event";
import { useEffect, useState } from "react";
import EventComponent from "./Event";

const EventGrid = () => {
    
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const eventAPI = new EventAPI();
            const data = await eventAPI.getEvents();
            setEvents(data);
        })();
    }, []);

    return <>
        {events && events.map((event) => (
            <EventComponent event={event} key={event.id} />
        ))}
        </>
};

export default EventGrid;
