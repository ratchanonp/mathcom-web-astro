export const removeHost = (url: string) => {
    return url.replace(/https?:[^]+/, "");
};

import type { Event, EventGroup } from "@/interfaces/event.interface";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const groupEventsByMonth = (events: Event[]): EventGroup => {
    const eventGroup: EventGroup = {};
  
    // Key: "November 2021"
    // Value: [Event, Event, Event]
    events.forEach((event) => {
        const key = event.start.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
        });
        if (!eventGroup[key]) {
            eventGroup[key] = [];
        }
        eventGroup[key].push(event);
    });

    return eventGroup;
};