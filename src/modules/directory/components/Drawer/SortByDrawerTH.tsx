import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "src/common/components/ui/drawer";

import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SortBy from "../SortBy";

export default function FilterDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<button className="mr-1 rounded border border-gray-300 p-2.5 shadow-lg">
					<BarsArrowDownIcon className="h-6 w-6 text-gray-900" />
				</button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="w-full font-kanit">
					<DrawerHeader className="flex items-center justify-between border-b border-b-gray-200">
						<div className="h-6 w-6" />
						<DrawerTitle>
							<h1 className="text-xl text-gray-800">Sory By</h1>
						</DrawerTitle>
						<DrawerClose asChild>
							<button>
								<XMarkIcon className="h-6 w-6 text-gray-800" />
							</button>
						</DrawerClose>
					</DrawerHeader>
					<SortBy />
					<DrawerFooter className="justify-end border-t border-t-gray-200">
						<DrawerClose asChild>
							<button className="rounded-lg bg-gray-800 px-5 py-2.5 text-lg text-white" type="submit">
								Apply Sort
							</button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
