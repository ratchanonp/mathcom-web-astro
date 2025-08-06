import { lazy } from "react";

// Lazy load React components that need client-side hydration
export const LazyMenu = lazy(() => import("./Menu/Menu"));
export const LazyResearchModule = lazy(() => import("../../modules/research/ResearchModule"));
export const LazyEventModule = lazy(() => import("../../modules/event/EventModule"));
export const LazyDirectoryModule = lazy(() => import("../../modules/directory/DirectoryModule"));

// Loading components with skeleton screens
export function MenuSkeleton() {
	return (
		<div className="fixed right-0 h-screen w-screen bg-gray-900 font-kanit md:w-[350px] translate-x-full z-50">
			<div className="flex items-center justify-center h-full">
				<div className="text-white">Loading menu...</div>
			</div>
		</div>
	);
}

export function ResearchSkeleton() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="text-gray-500">Loading research...</div>
		</div>
	);
}

export function EventSkeleton() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="text-gray-500">Loading events...</div>
		</div>
	);
}

export function DirectorySkeleton() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="text-gray-500">Loading directory...</div>
		</div>
	);
} 