import { format } from "date-fns";

interface Props {
    title: string;
    date: Date;
    thunbnail: string;
}
const NewsCard = (props: Props) => {
    const { title, date, thunbnail } = props;

    return (
        <article className="grid grid-cols-3 border border-gray-200 shadow-md">
            <div className="col-span-1">
                <img
                    src={thunbnail}
                    alt={title}
                    className=" w-96 h-auto aspect-square object-cover"
                />
            </div>
            <div className="col-span-2 p-5 flex flex-col h-full justify-between">
                <h3 className="text-xl font-kanit text-slate-800">
                    {title}
                </h3>
                <p className="mt-3 text-light text-slate-300">
                    {format(date, "MMM dd, yyyy")}
                </p>
            </div>
        </article>
    );
};

export default NewsCard;
