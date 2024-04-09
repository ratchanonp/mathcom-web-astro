const EventCard = () => {
    return (
        <div className="grid overflow-clip shadow-lg border-2 border-gray hover:scale-105 transition-all group">
            <div className="grid gap-2.5 w-full">
                <div className="flex flex-col gap-2.5 bg-gray-800 group-hover:bg-yellow-300 group-hover:text-slate-800 w-full p-5">
                    
                    
                </div>
                <h2 className="px-5 py-2.5 w-full text-slate-800 font-kanit "></h2>
                <div className="grid gap-2.5 p-5">
                    <div className="flex flex-col space-y-1 ">
                        <p className="rounded-full w-fit px-2.5 bg-yellow-300 text-sm"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
