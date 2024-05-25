const NewsCardLoading = () => {
    return (
        <article className="grid grid-cols-3 border border-gray-200 shadow-md animate-pulse">
            <div className="col-span-1">
                <div className="w-50 bg-slate-200 aspect-square" />
            </div>
            <div className="col-span-2 p-5 flex flex-col h-full justify-between">
                <div className="grid gap-y-2">
                    <div className="h-8  w-full bg-slate-200" />
                    <div className="h-8  w-1/2 bg-slate-200" />
                </div>
                <div className="h-5  w-32 bg-slate-200" />
            </div>
        </article>
    );
};

export default NewsCardLoading;
