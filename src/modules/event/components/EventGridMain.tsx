import { QueryProviderHoc } from "@/common/HOC/QueryProviderHoc";
import { EventAPI } from "@/libs/api/event";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./EventCardMock";

const EventGrid = () => {
    const { data, isLoading, isPending, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const eventAPI = new EventAPI();
            const response = await eventAPI.getEvents(undefined, 3);
            return response;
        },
    });

    if (isPending || isLoading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-2.5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={"animate-spin col-span-5 mx-auto w-20 h-20"}
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
            </div>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className="flex justify-center mt-10 gap-2.5">
            {data.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default QueryProviderHoc(EventGrid);
