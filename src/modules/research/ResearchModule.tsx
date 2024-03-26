import type { IResearch } from "@/interfaces/research.interface";
import { ResearchAPI } from "@/libs/api/research";
import { useEffect, useState } from "react";
import ResearchBox from "./components/ResearchBox";

const ResearchModule = () => {
    const [research, setResearch] = useState<IResearch[]>([]);
    
    useEffect(() => {
        const fetchResearch = async () => {
            const researchAPI = new ResearchAPI();
            const researchData = await researchAPI.getResearch();

            setResearch(researchData);
        };

        fetchResearch();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-14">
            {research.map((item) => (
                <ResearchBox key={item.id} title={item.name} img="/research/applied.png" />
            ))}
        </div>
    );
};

export default ResearchModule;