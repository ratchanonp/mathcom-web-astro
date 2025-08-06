import { Suspense, lazy } from "react";

// Lazy load the FacultyCard component
const FacultyCard = lazy(() => import("./FacultyCard"));

interface LazyFacultyCardProps {
	faculty: any; // Replace with proper type
}

export default function LazyFacultyCard(props: LazyFacultyCardProps) {
	return (
		<Suspense fallback={
			<div className="animate-pulse">
				<div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
				<div className="h-4 bg-gray-200 rounded mb-2"></div>
				<div className="h-3 bg-gray-200 rounded w-3/4"></div>
			</div>
		}>
			<FacultyCard {...props} />
		</Suspense>
	);
} 