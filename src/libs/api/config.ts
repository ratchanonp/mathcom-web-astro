export const BASE_URL = new URL(
    "/wordpress/wp-json/wp/v2/",
    import.meta.env.PUBLIC_API,
).toString();
export const BASE_URL_V2 = new URL(
    "/wordpress/wp-json/mathcom/v1/",
    import.meta.env.PUBLIC_API,
).toString();

export const BASE_INTERNAL_URL = new URL(
    "/wordpress/wp-json/wp/v2/",
    import.meta.env.PUBLIC_INTERNAL_API,
).toString();
export const BASE_INTERNAL_URL_V2 = new URL(
    "/wordpress/wp-json/mathcom/v1/",
    import.meta.env.PUBLIC_INTERNAL_API,
).toString();

console.log(BASE_URL, BASE_URL_V2, BASE_INTERNAL_URL, BASE_INTERNAL_URL_V2);
