import type { Event } from "@/interfaces/event.interface";
import { format } from "date-fns";
import { BASE_URL, BASE_URL_V2 } from "./config";

const eventEndpoint = new URL("/event", BASE_URL);

export const getEvents = async () => {
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

    constructor() {
        this.eventEndpoint = new URL("events", BASE_URL_V2);
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

    async getEventDate(month: Date): Promise<string[]> {
        const monthString = format(month, "yyyy-MM");

        this.eventDateEndpoint.searchParams.set("month", monthString);

        const res = await fetch(this.eventDateEndpoint.toString());
        const eventDates = await res.json();
        return eventDates;
    }
}
