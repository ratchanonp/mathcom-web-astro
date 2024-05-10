import type { IResearchV2 } from "@/interfaces/research.interface";

interface Props {
    research: IResearchV2;
}

const ResearchBox = (props: Props) => {
    const { research } = props;
    const { title, thumbnail, slug } = research;

    const parser = new DOMParser();
    const titleRender = parser.parseFromString(title, "text/html").body
        .textContent;

    return (
        <article className="border-2 border-slate-800 bg-slate-900 text-white p-5 relative flex flex-col justify-between min-h-60 w-full sm:w-[calc(50%_-_16px)] md:w-[calc(33.33%_-_32px)] lg:w-[calc(25%_-_48px)]">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full border-2 p-5 bg-white border-slate-800">
                <img src={thumbnail} alt="" className="w-10 h-10" />
            </div>
            <h2 className="text-center font-kanit text-xl mt-10 font-medium pb-2.5">
                {titleRender}
            </h2>
            <a
                href={`/research/${slug}`}
                className="text-center rounded bg-yellow-400 py-2.5 px-5 text-slate-800 font-kanit"
            >
                Explore
            </a>
        </article>
    );
};

export default ResearchBox;
