import { BASE_URL } from "./config";

export class MediaAPI {
	mediaEndpoint: URL;

	constructor() {
		this.mediaEndpoint = new URL("media/", BASE_URL);
	}

	async getMediaURL(id: number): Promise<string> {
		const fetchURL = new URL(`${id}`, this.mediaEndpoint);

		try {
			const res = await fetch(fetchURL.toString());
			const data = await res.json();

			const media: string = data.guid.rendered;

			return media;
		} catch (error) {
			console.error(error);
			return "";
		}
	}
}
