import { BASE_URL } from "./config";

async function fetchWordPressPage(pageId: number): Promise<any> {
    const page_api = new URL(`pages/${pageId}`, BASE_URL).toString();

    try {
        const response = await fetch(page_api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching WordPress page: ", error);
        return null;
    }
}

export { fetchWordPressPage };
