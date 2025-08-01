import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "src/common/components/ui/dialog";

import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { DialogClose } from "@radix-ui/react-dialog";
import SortBy from "../SortBy";

export default function SortByDiaload() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="inline-flex items-center rounded border border-gray-300 px-5 py-2.5 text-xl">
					<BarsArrowDownIcon className="h-6 w-6 text-gray-900 lg:mr-2" />
					<span className="hidden lg:block">Sort by</span>
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-(--breakpoint-md)">
				<DialogHeader className="flex justify-between border-b border-b-gray-200 p-5">
					<div className="h-6 w-6" />
					<DialogTitle className="text-xl text-gray-800">Sort By</DialogTitle>
					<DialogClose asChild>
						<button>
							<XMarkIcon className="h-6 w-6 text-gray-800" />
						</button>
					</DialogClose>
				</DialogHeader>
				<SortBy />
				<DialogFooter className="flex justify-end border-t border-t-gray-200 p-5">
					<DialogClose asChild>
						<button className="rounded-lg bg-gray-800 px-5 py-2.5 text-lg text-white">Apply Sort</button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
