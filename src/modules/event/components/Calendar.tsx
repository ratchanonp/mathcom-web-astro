import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday
} from "date-fns";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { cn } from "src/libs/utils";
import { selectedDay } from "src/modules/event/stores/eventStore";

const Calendar = () => {

    const today = startOfToday();
    const $selectedDay = useStore(selectedDay);
    const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    //FIXME: Replace with actual events
    const events: any[] = [];

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    function previousMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    function nextMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    return (
        <div className="shadow-lg border-gray-200 border-2 p-5">
            <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-yellow-500 text-xl font-kanit">
                    {format(firstDayCurrentMonth, "MMMM yyyy")}
                </h2>
                <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                    onClick={nextMonth}
                    type="button"
                    className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                    <div
                        key={day.toString()}
                        className={cn(
                            dayIdx === 0 && colStartClasses[getDay(day)],
                            "py-1.5"
                        )}
                    >
                        <button
                            type="button"
                            onClick={() => selectedDay.set(day)}
                            className={cn(
                                isEqual(day, $selectedDay) && "text-white",
                                !isEqual(day, $selectedDay) &&
                    isToday(day) &&
                    "text-yellow-500",
                                !isEqual(day, $selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-900",
                                !isEqual(day, $selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",
                                isEqual(day, $selectedDay) && isToday(day) && "bg-yellow-500",
                                isEqual(day, $selectedDay) &&
                    !isToday(day) &&
                    "bg-yellow-500",
                                !isEqual(day, $selectedDay) && "hover:bg-yellow-200",
                                (isEqual(day, $selectedDay) || isToday(day)) &&
                    "font-semibold",
                                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                            )}
                        >
                            <time dateTime={format(day, "yyyy-MM-dd")}>
                                {format(day, "d")}
                            </time>
                        </button>

                        <div className="w-1 h-1 mx-auto mt-1">
                            {events.some((event) =>
                                isSameDay(event.start, day)
                            ) && (
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

export default Calendar;