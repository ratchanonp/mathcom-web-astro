import { Suspense, lazy } from "react";

interface LazyDrawerProps {
	children: React.ReactNode;
}

export default function LazyDrawer(props: LazyDrawerProps) {
	return (
		<Suspense fallback={
			<div className="fixed inset-0 z-50 bg-black/50">
				<div className="flex items-center justify-center h-full">
					<div className="bg-white p-4 rounded-lg">Loading...</div>
				</div>
			</div>
		}>
			{props.children}
		</Suspense>
	);
}

// Export individual drawer components for lazy loading
export const DrawerRoot = lazy(() => import("./ui/drawer").then(m => ({ default: m.Drawer })));
export const DrawerTrigger = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerTrigger })));
export const DrawerContent = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerContent })));
export const DrawerHeader = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerHeader })));
export const DrawerFooter = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerFooter })));
export const DrawerTitle = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerTitle })));
export const DrawerClose = lazy(() => import("./ui/drawer").then(m => ({ default: m.DrawerClose }))); 