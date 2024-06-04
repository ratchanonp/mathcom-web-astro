const EventCard = () => {
	return (
		<div className="border-gray group grid overflow-clip border-2 shadow-lg transition-all hover:scale-105">
			<div className="grid w-full gap-2.5">
				<div className="flex w-full flex-col gap-2.5 bg-gray-800 p-5 group-hover:bg-yellow-300 group-hover:text-slate-800"></div>
				<h2 className="w-full px-5 py-2.5 font-kanit text-slate-800"></h2>
				<div className="grid gap-2.5 p-5">
					<div className="flex flex-col space-y-1">
						<p className="w-fit rounded-full bg-yellow-300 px-2.5 text-sm"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
