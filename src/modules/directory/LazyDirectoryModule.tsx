import { Suspense, lazy } from "react";

// Lazy load the DirectoryModule component
const DirectoryModule = lazy(() => import("./DirectoryModule"));

export default function LazyDirectoryModule() {
	return (
		<Suspense fallback={
			<div className="flex items-center justify-center p-8">
				<div className="text-gray-500">Loading directory...</div>
			</div>
		}>
			<DirectoryModule />
		</Suspense>
	);
} 