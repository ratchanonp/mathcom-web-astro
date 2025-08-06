import { Suspense, lazy } from "react";

// Lazy load the EventModule component
const EventModule = lazy(() => import("./EventModule"));

interface LazyEventModuleProps {
	url: URL;
}

export default function LazyEventModule(props: LazyEventModuleProps) {
	return (
		<Suspense fallback={
			<div className="flex items-center justify-center p-8">
				<div className="text-gray-500">Loading events...</div>
			</div>
		}>
			<EventModule url={props.url} />
		</Suspense>
	);
} 