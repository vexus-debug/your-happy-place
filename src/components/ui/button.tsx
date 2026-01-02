import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-deep text-primary-foreground shadow-[0_2px_12px_hsl(var(--primary)/0.3)] hover:shadow-[0_4px_20px_hsl(var(--primary)/0.5)] hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:scale-105 shadow-sm hover:shadow-md",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:shadow-md hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "bg-gradient-to-r from-accent-light to-accent-green text-accent-foreground shadow-[0_4px_16px_hsl(var(--accent-green)/0.3)] hover:shadow-[0_8px_24px_hsl(var(--accent-green)/0.5),0_0_30px_hsl(var(--accent-green)/0.2)] hover:scale-105",
        premium: "bg-gradient-to-br from-primary via-primary-deep to-accent-green text-primary-foreground shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 relative overflow-hidden",
        gold: "bg-gradient-to-r from-accent-light via-accent-green to-accent-dark text-accent-foreground shadow-[0_4px_16px_hsl(var(--accent-green)/0.4)] hover:shadow-[0_8px_28px_hsl(var(--accent-green)/0.6),0_0_40px_hsl(var(--accent-green)/0.3)] hover:scale-105",
        "outline-gold": "border-2 border-accent-green bg-transparent text-accent-green hover:bg-accent-green hover:text-accent-foreground hover:scale-105 shadow-sm hover:shadow-[0_4px_20px_hsl(var(--accent-green)/0.4)]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-full px-4",
        lg: "h-13 rounded-full px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
