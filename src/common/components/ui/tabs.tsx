import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn("overflow inline-flex h-fit items-center justify-start bg-white text-muted-foreground", className)}
		{...props}
	/>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"data-[state=active]:text-900 inline-block items-center whitespace-nowrap border-b-2 border-transparent px-3 py-1.5 text-center text-base font-normal text-gray-500 ring-offset-background transition-all before:invisible before:block before:h-0 before:overflow-hidden before:font-medium before:content-[attr(data-tab-name)] focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-b-stone-900 data-[state=active]:bg-background data-[state=active]:font-medium data-[state=active]:text-stone-900 md:py-3.5 md:text-xl",
			className,
		)}
		{...props}
	/>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
