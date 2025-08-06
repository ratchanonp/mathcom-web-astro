import { Suspense, lazy } from "react";

// Lazy load the ResearchModule component
const ResearchModule = lazy(() => import("./ResearchModule"));

interface LazyResearchModuleProps {
	url: URL;
}

export default function LazyResearchModule(props: LazyResearchModuleProps) {
	return (
		<Suspense fallback={
			<div className="flex items-center justify-center p-8">
				<div className="text-gray-500">Loading research...</div>
			</div>
		}>
			<ResearchModule {...props} />
		</Suspense>
	);
} 