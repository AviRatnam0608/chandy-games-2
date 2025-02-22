import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brutal:
          "bg-white border-2 border-black shadow-brutal hover:bg-gray-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all",
        brutal_red:
          "w-full bg-red-400 hover:bg-red-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_blue:
          "w-full bg-blue-400 hover:bg-blue-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_green:
          "w-full bg-green-400 hover:bg-green-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_yellow:
          "w-full bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_purple:
          "w-full bg-purple-400 hover:bg-purple-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_pink:
          "w-full bg-pink-400 hover:bg-pink-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_orange:
          "w-full bg-orange-400 hover:bg-orange-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_teal:
          "w-full bg-teal-400 hover:bg-teal-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_lime:
          "w-full bg-lime-400 hover:bg-lime-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_gray:
          "w-full bg-gray-300 hover:bg-gray-400 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
        brutal_dark_gray:
          "w-full bg-gray-500 hover:bg-gray-600 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
