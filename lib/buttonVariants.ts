import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				primary:
					"bg-[#1da1f2] text-background hover:bg-foreground/90 focus-visible:ring-foreground",
				secondary:
					"bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 focus-visible:ring-foreground/40",
				ghost:
					"bg-transparent text-foreground hover:bg-foreground/10 focus-visible:ring-foreground/30",
				destructive:
					"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
			},
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-10 px-4",
				lg: "h-12 px-6 text-base",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;