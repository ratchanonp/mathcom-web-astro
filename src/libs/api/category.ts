import { BASE_INTERNAL_URL } from "./config";

type Params = { [key: string]: string };

export const getCategory = async (params?:Params) => {
	const categoryEndpoint = new URL("categories/", BASE_INTERNAL_URL);

	if (params) {
		Object.keys(params).forEach((key) => categoryEndpoint.searchParams.set(key, params[key]));
	}

	try {
		console.log("Fetching", categoryEndpoint.toString());
		const res = await fetch(categoryEndpoint.toString());
		const category = (await res.json());

		return category;
	} catch (error) {
		console.error(error);
	}

	return [];
}