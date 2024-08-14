"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const popoverVariants = cva("", {
    variants: {
        direction: {
            left: "bg-foreground inset-y-0 ml-[-2.3rem] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm fixed p-6 mt-3 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
            top: "z-50 min-w-[8rem] overflow-hidden rounded-md border border-muted bg-foreground p-1 text-background shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        },
    },
    defaultVariants: {
        direction: "left",
    },
});

interface PopoverContentProps
    extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
        VariantProps<typeof popoverVariants> {}

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    PopoverContentProps
>(({ direction = "left", className, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            className={cn(popoverVariants({ direction }), className)}
            {...props}
        />
    </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
