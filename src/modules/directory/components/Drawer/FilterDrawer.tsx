import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "src/common/components/ui/drawer";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { researchFieldSelected } from "src/modules/directory/stores/facultyStore";
import Filter from "../Filter";

export default function FilterDrawer() {
    const handleClear = () => {
        researchFieldSelected.set([]);
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="mr-1 rounded border-[1px] border-gray-300 p-2.5 shadow-lg">
                    <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-900" />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full font-kanit">
                    <DrawerHeader className="flex items-center justify-between border-b-[1px] border-b-gray-200">
                        <div className="h-6 w-6" />
                        <DrawerTitle>
                            <h1 className="text-xl text-gray-800">Filter</h1>
                        </DrawerTitle>
                        <DrawerClose asChild>
                            <button>
                                <XMarkIcon className="h-6 w-6 text-gray-800" />
                            </button>
                        </DrawerClose>
                    </DrawerHeader>
                    <Filter />
                    <DrawerFooter className="border-t-[1px] border-t-gray-200">
                        <button className=" py-2.5 text-lg" onClick={handleClear}>
              Clear all
                        </button>
                        <DrawerClose asChild>
                            <button
                                className=" rounded-lg bg-gray-800 px-5 py-2.5 text-lg text-white"
                                type="submit"
                            >
                Apply Filter
                            </button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
