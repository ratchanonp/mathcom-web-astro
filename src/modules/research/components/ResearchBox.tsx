import { getLangFromUrl, useTranslatedPath, useTranslations } from "@/i18n/utils";
import type { IResearchV2 } from "@/interfaces/research.interface";

interface Props {
	research: IResearchV2;
	url: URL;
}

const ResearchBox = (props: Props) => {
	const { research, url } = props;

	const lang = getLangFromUrl(url);
	const t = useTranslations(lang);
	const translatePath = useTranslatedPath(lang);

	const { title, thumbnail, slug } = research;

	const parser = new DOMParser();
	const titleRender = parser.parseFromString(title, "text/html").body.textContent;

	return (
		<article className="relative flex min-h-60 w-full flex-col justify-between border-2 border-slate-800 bg-slate-900 p-5 text-white sm:w-[calc(50%_-_16px)] md:w-[calc(33.33%_-_32px)] lg:w-[calc(25%_-_48px)]">
			<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-800 bg-white p-5">
				<img src={thumbnail} alt="" className="h-10 w-10" />
			</div>
			<h2 className="mt-10 pb-2.5 text-center font-kanit text-xl font-medium">{titleRender}</h2>
			<a
				href={translatePath(`/research/${slug}`)}
				className="rounded border-2 border-white bg-yellow-400 px-5 py-2.5 text-center font-kanit text-slate-800 transition-transform hover:-translate-y-1"
			>
				{t("research.explore")}
			</a>
		</article>
	);
};

export default ResearchBox;
