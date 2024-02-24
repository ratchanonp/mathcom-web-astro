import { BASE_URL } from "./config";

const eventEndpoint = new URL("/event", BASE_URL);

export const getEvents = async () => {
    const params: { [key: string]: string } = {
        _embed: "",
    };

    Object.keys(params).forEach((key) =>
        eventEndpoint.searchParams.append(key, params[key])
    );

    const res = await fetch(eventEndpoint.toString());
    const events = await res.json();

    return events;
};