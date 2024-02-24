import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/common/components/ui/dialog";

import { researchFieldSelected } from "@/modules/directory/stores/facultyStore";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { DialogClose } from "@radix-ui/react-dialog";
import Filter from "../Filter";

export default function FilterDialog() {
    const handleClear = () => {
        researchFieldSelected.set([]);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="inline-flex items-center rounded border-[1px] border-gray-300 px-5 py-2.5 text-xl">
                    <AdjustmentsHorizontalIcon className="lg:mr-2 h-6 w-6 text-gray-900" />
                    <span className="hidden lg:block">Filters</span>
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader className="flex  justify-between border-b-[1px] border-b-gray-200 p-5">
                    <div className="h-6 w-6" />
                    <DialogTitle className="text-xl text-gray-800">Filter</DialogTitle>
                    <DialogClose asChild>
                        <button>
                            <XMarkIcon className="h-6 w-6 text-gray-800" />
                        </button>
                    </DialogClose>
                </DialogHeader>
                <Filter />
                <DialogFooter className="flex justify-between p-5 border-t-[1px] border-t-gray-200">
                    <button className=" py-2.5 text-lg" onClick={handleClear}>
            Clear all
                    </button>
                    <DialogClose asChild>
                        <button
                            className=" rounded-lg bg-gray-800 px-5 py-2.5 text-lg text-white"
                            type="submit"
                            form="filter"
                        >
              Apply Filters
                        </button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
