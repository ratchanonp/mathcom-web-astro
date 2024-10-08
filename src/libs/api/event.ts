import type { Event } from "@/interfaces/event.interface";
import type { Post } from "@/interfaces/reponse/post.interface";
import { format } from "date-fns";
import { BASE_INTERNAL_URL, BASE_INTERNAL_URL_V2, BASE_URL_V2 } from "./config";

type Params = { [key: string]: string };

export const getEvents = async () => {
	const eventEndpoint = new URL("/event", BASE_INTERNAL_URL);
	const params: { [key: string]: string } = {
		_embed: "",
	};

	Object.keys(params).forEach((key) => eventEndpoint.searchParams.append(key, params[key]));

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

	async getEvents(start?: Date, end?: Date, limit?: number): Promise<Event[]> {
		const eventEndpoint = new URL(this.eventEndpoint.toString());

		if (start) eventEndpoint.searchParams.set("start", format(start, "yyyy-MM-dd"));
		if (end) eventEndpoint.searchParams.set("end", format(end, "yyyy-MM-dd"));
		if (limit) eventEndpoint.searchParams.set("limit", limit.toString());

		console.log("Fetching", eventEndpoint.toString());
		
		try {
			const res = await fetch(eventEndpoint.toString());
			return res.json();
		} catch (error) {
			console.error(error);
		}

		return [];
	}

	async getEventsServer(start?: Date, end?: Date, limit?: number, category?: string): Promise<Event[]> {
		const eventServerEndpoint = new URL(this.eventServerEndpoint.toString());
		
		if (start) eventServerEndpoint.searchParams.set("start", format(start, "yyyy-MM-dd"));
		if (end) eventServerEndpoint.searchParams.set("end", format(end, "yyyy-MM-dd"));
		if (limit) eventServerEndpoint.searchParams.set("limit", limit.toString());
		if (category) eventServerEndpoint.searchParams.set("category", category);

		console.log("Fetching", eventServerEndpoint.toString());

		try {
			const res = await fetch(eventServerEndpoint.toString());
			return res.json();
		} catch (error) {
			console.error(error);
		} 

		return [];

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

export const getEventsCategoriesWP = async (params?: Params) => {
	const eventsCategoriesEndpoint = new URL("events/categories/", BASE_INTERNAL_URL);

	if (params) {
		Object.keys(params).forEach((key) => eventsCategoriesEndpoint.searchParams.set(key, params[key]));
	}

	try {
		console.log("Fetching", eventsCategoriesEndpoint.toString());
		const res = await fetch(eventsCategoriesEndpoint.toString());
		const events = await res.json()

		return events;
	} catch (error) {
		console.error(error);
	}

	return [];
}

export const getEventsWP = async (params?: Params): Promise<Post[]> => {
	const postEndpoint = new URL("events/", BASE_INTERNAL_URL);

	if (params) {
		Object.keys(params).forEach((key) => postEndpoint.searchParams.set(key, params[key]));
	}

	try {
		console.log("Fetching", postEndpoint.toString());
		const res = await fetch(postEndpoint.toString());
		const events = (await res.json()) as Post[];

		return events;
	} catch (error) {
		console.error(error);
	}

	return [];
};