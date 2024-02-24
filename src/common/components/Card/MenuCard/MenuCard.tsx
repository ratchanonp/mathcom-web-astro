import { forwardRef } from "react";
import { cn } from "src/libs/utils";

export interface MenuCardProps {
  title: string;
  href: string;
  imagePath: string;
  className?: string;
}

const MenuCard = forwardRef<HTMLAnchorElement, MenuCardProps>(
    ({ title, imagePath, className, href }) => {
        return (
            <a
                href={href}
                className={cn(
                    "bg-white p-5 flex justify-between items-center h-full shadow-lg border-2 border-gray space-x-5 hover:scale-105 transition-all",
                    className,
                )}
            >
                <div className="w-14">
                    <img
                        className="object-fit aspect-square"
                        src={imagePath}
                        alt={title}
                    />
                </div>
        
                <h2 className="text-gray-700 uppercase font-kanit text-left font-semibold md:text-lg lg:text-xl leading-6 w-full">
                    {title}
                </h2>
            </a>
        );
    },
);

export default MenuCard;
