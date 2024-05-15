import type { Post } from "src/interfaces/reponse/post.interface";
import { BASE_INTERNAL_URL, BASE_INTERNAL_URL_V2 } from "./config";



type Params = { [key: string]: string };

export const getPosts = async (params?: Params): Promise<Post[]> => {
    
    const postEndpoint = new URL("posts/", BASE_INTERNAL_URL);

    if (params) {
        Object.keys(params).forEach((key) =>
            postEndpoint.searchParams.set(key, params[key]),
        );
    }

    try {
        console.log("Fetching", postEndpoint.toString());
        const res = await fetch(postEndpoint.toString());
        const posts = (await res.json()) as Post[];

        return posts;
    } catch (error) {
        console.error(error);
    }

    return [];
};

export const getPost = async (slug: string) => {

    const postEndpoint = new URL("posts/", BASE_INTERNAL_URL);
    const params: { [key: string]: string } = {
        slug,
        _embed: "",
    };

    Object.keys(params).forEach((key) =>
        postEndpoint.searchParams.set(key, params[key]),
    );

    try {
        console.log("Fetching", postEndpoint.toString());
        const res = await fetch(postEndpoint.toString());
        const post = await res.json();

        return post[0];
    } catch (error) {
        console.error(error);
    }
};

export const getNews = async (category: string, limit: number = 3) => {
    const postEndpoint = new URL("posts/", BASE_INTERNAL_URL);
    const params: { [key: string]: string } = {
        category: category,
        limit: limit.toString(),
    };

    const newsEndpoint = new URL("news/", BASE_INTERNAL_URL_V2);

    Object.keys(params).forEach((key) =>
        newsEndpoint.searchParams.set(key, params[key]),
    );

    try {
        console.log("Fetching", newsEndpoint.toString());
        const res = await fetch(newsEndpoint.toString());
        const news = await res.json();

        return news;
    } catch (error) {
        console.error(error);
    }
}