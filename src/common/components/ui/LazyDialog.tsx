import { lazy } from "react";

// Lazy load dialog components
export const Dialog = lazy(() => import("./dialog").then(m => ({ default: m.Dialog })));
export const DialogTrigger = lazy(() => import("./dialog").then(m => ({ default: m.DialogTrigger })));
export const DialogContent = lazy(() => import("./dialog").then(m => ({ default: m.DialogContent })));
export const DialogHeader = lazy(() => import("./dialog").then(m => ({ default: m.DialogHeader })));
export const DialogFooter = lazy(() => import("./dialog").then(m => ({ default: m.DialogFooter })));
export const DialogTitle = lazy(() => import("./dialog").then(m => ({ default: m.DialogTitle })));
export const DialogDescription = lazy(() => import("./dialog").then(m => ({ default: m.DialogDescription })));

// Lazy load accordion components
export const Accordion = lazy(() => import("./accordion").then(m => ({ default: m.Accordion })));
export const AccordionItem = lazy(() => import("./accordion").then(m => ({ default: m.AccordionItem })));
export const AccordionTrigger = lazy(() => import("./accordion").then(m => ({ default: m.AccordionTrigger })));
export const AccordionContent = lazy(() => import("./accordion").then(m => ({ default: m.AccordionContent })));

// Lazy load tabs components
export const Tabs = lazy(() => import("./tabs").then(m => ({ default: m.Tabs })));
export const TabsList = lazy(() => import("./tabs").then(m => ({ default: m.TabsList })));
export const TabsTrigger = lazy(() => import("./tabs").then(m => ({ default: m.TabsTrigger })));
export const TabsContent = lazy(() => import("./tabs").then(m => ({ default: m.TabsContent }))); 