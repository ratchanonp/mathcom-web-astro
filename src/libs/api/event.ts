import type { Event } from "@/interfaces/event.interface";
import { format } from "date-fns";
import { BASE_INTERNAL_URL, BASE_INTERNAL_URL_V2, BASE_URL_V2 } from "./config";



export const getEvents = async () => {

    const eventEndpoint = new URL("/event", BASE_INTERNAL_URL);
    const params: { [key: string]: string } = {
        _embed: "",
    };

    Object.keys(params).forEach((key) =>
        eventEndpoint.searchParams.append(key, params[key]),
    );

    const res = await fetch(eventEndpoint.toString());
    const events = await res.json();

    return events;
};

export class EventAPI {
    eventEndpoint: URL;
    eventDateEndpoint: URL;
    eventServerEndpoint: URL;

    constructor() {
        this.eventEndpoint = new URL("events", BASE_URL_V2);
        this.eventServerEndpoint = new URL("events", BASE_INTERNAL_URL_V2);
        this.eventDateEndpoint = new URL("event-dates", BASE_URL_V2);
    }

    async getEvents(date?: Date, limit?: number): Promise<Event[]> {
        const eventEndpoint = new URL(this.eventEndpoint.toString());

        if (date)
            eventEndpoint.searchParams.set(
                "date",
                format(date, "yyyy-MM-dd"),
            );
        if (limit)
            eventEndpoint.searchParams.set("limit", limit.toString());

        console.log("Fetching", eventEndpoint.toString());
        const res = await fetch(eventEndpoint.toString());

        return res.json();
    }

    async getEventsServer(date?: Date, limit?: number): Promise<Event[]> {
        const eventServerEndpoint = new URL(this.eventServerEndpoint.toString());
        if (date)
            eventServerEndpoint.searchParams.set(
                "date",
                format(date, "yyyy-MM-dd"),
            );
        if (limit)
            eventServerEndpoint.searchParams.set("limit", limit.toString());

        console.log("Fetching", eventServerEndpoint.toString());
        const res = await fetch(eventServerEndpoint.toString());

        return res.json();
    }

    async getEventDate(month: Date): Promise<string[]> {
        const eventDateEndpoint = new URL(this.eventDateEndpoint.toString());
        const monthString = format(month, "yyyy-MM");

        eventDateEndpoint.searchParams.set("month", monthString);

        console.log("Fetching", eventDateEndpoint.toString());
        const res = await fetch(eventDateEndpoint.toString());
        const eventDates = await res.json();
        return eventDates;
    }
    
}
