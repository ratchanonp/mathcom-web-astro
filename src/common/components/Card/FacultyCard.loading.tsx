const FacultyCardLoading = () => {
    return (
        <div
            className="border border-gray-300 shadow-sm"
        >
                <div className="w-full aspect-square bg-gray-200 justify-center items-center flex animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                </div>
            <div className="p-2.5 font-kanit md:p-5">
                <h2 className="text-base font-medium md:text-2xl bg-gray-200 h-10 animate-pulse"></h2>
                <p className="text-xs text-gray-400 md:mt-2 md:text-base capitalize bg-gray-200 animate-pulse h-5 w-32"></p>
            </div>
        </div>
    );
};

export default FacultyCardLoading;
