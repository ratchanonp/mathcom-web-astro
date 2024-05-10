export const removeHost = (url: string) => {
    return url.replace(/https?:[^]+/, "");
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
