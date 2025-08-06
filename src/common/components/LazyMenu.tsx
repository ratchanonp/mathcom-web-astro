import { Suspense, lazy } from "react";

// Lazy load the Menu component
const Menu = lazy(() => import("./Menu/Menu"));

interface LazyMenuProps {
	currentURL: URL;
}

export default function LazyMenu(props: LazyMenuProps) {
	return (
		<Suspense fallback={
			<div className="fixed right-0 h-screen w-screen bg-gray-900 font-kanit md:w-[350px] translate-x-full z-50">
				<div className="flex items-center justify-center h-full">
					<div className="text-white">Loading menu...</div>
				</div>
			</div>
		}>
			<Menu {...props} />
		</Suspense>
	);
} 