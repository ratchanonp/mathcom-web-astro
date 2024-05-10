import { startOfToday } from "date-fns";
import { atom } from "nanostores";

const today = startOfToday();
export const selectedDay = atom<Date>(today);
