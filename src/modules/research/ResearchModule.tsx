import type { IResearchV2 } from "@/interfaces/research.interface";
import { ResearchAPIV2 } from "@/libs/api/research";
import { useEffect, useState } from "react";
import ResearchBox from "./components/ResearchBox";

const ResearchModule = () => {
	const [research, setResearch] = useState<IResearchV2[]>([]);

	useEffect(() => {
		const fetchResearch = async () => {
			const researchAPI = new ResearchAPIV2();
			const researchData = (await researchAPI.getResearch()) as IResearchV2[];

			setResearch(researchData);
		};

		fetchResearch();
	}, []);

	return (
		<div className="flex flex-wrap justify-center gap-x-4 gap-y-14">
			{research.map((item) => (
				<ResearchBox key={item.id} research={item} />
			))}
		</div>
	);
};

export default ResearchModule;
