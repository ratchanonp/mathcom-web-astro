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
        if (date)
            this.eventEndpoint.searchParams.set(
                "date",
                format(date, "yyyy-MM-dd"),
            );
        if (limit)
            this.eventEndpoint.searchParams.set("limit", limit.toString());

        const res = await fetch(this.eventEndpoint.toString());

        return res.json();
    }

    async getEventsServer(date?: Date, limit?: number): Promise<Event[]> {
        if (date)
            this.eventServerEndpoint.searchParams.set(
                "date",
                format(date, "yyyy-MM-dd"),
            );
        if (limit)
            this.eventServerEndpoint.searchParams.set("limit", limit.toString());

        const res = await fetch(this.eventServerEndpoint.toString());

        return res.json();
    }

    async getEventDate(month: Date): Promise<string[]> {
        const monthString = format(month, "yyyy-MM");

        this.eventDateEndpoint.searchParams.set("month", monthString);

        const res = await fetch(this.eventDateEndpoint.toString());
        const eventDates = await res.json();
        return eventDates;
    }
    
}
