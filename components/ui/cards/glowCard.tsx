"use client";
import { cn } from "@/lib/utils";

type Corner = "tl" | "tr" | "bl" | "br";

interface GlowEffectProps {
	color?: string;
	gradient?: string;
	size?: number;
	blur?: number;
	opacity?: number;
	className?: string;
}

interface CornerPlusProps {
	corners?: Corner[];
	plusSize?: number;
	inset?: number;
	/** stroke thickness */
	strokeWidth?: number;
	plusColor?: string;
}

const CORNER_POSITION: Record<Corner, string> = {
	tl: "top-0 left-0",
	tr: "top-0 right-0",
	bl: "bottom-0 left-0",
	br: "bottom-0 right-0",
};

function CornerPlus({
	corners = [],
	plusSize = 12,
	inset = 12,
	strokeWidth = 1.5,
	plusColor = "rgba(255,255,255,0.25)",
}: CornerPlusProps) {
	return (
		<>
			{corners.map((corner) => (
				<div
					key={corner}
					aria-hidden
					className={cn("pointer-events-none absolute z-20", CORNER_POSITION[corner])}
					style={{
						width: plusSize,
						height: plusSize,
						margin: inset,
					}}
				>
					<div
						className="absolute top-1/2 left-0 -translate-y-1/2"
						style={{ width: "100%", height: strokeWidth, backgroundColor: plusColor }}
					/>
					<div
						className="absolute left-1/2 top-0 -translate-x-1/2"
						style={{ height: "100%", width: strokeWidth, backgroundColor: plusColor }}
					/>
				</div>
			))}
		</>
	);
}

export function GlowEffect({
	color = "#6366f1",
	gradient,
	size = 400,
	blur = 120,
	opacity = 0.5,
	className,
}: GlowEffectProps) {
	const background = gradient ?? `radial-gradient(circle, ${color} 0%, transparent 70%)`;

	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
				className
			)}
			style={{
				width: size,
				height: size,
				background,
				filter: `blur(${blur}px)`,
				opacity,
			}}
		/>
	);
}

interface GlowCardProps extends GlowEffectProps, CornerPlusProps {
	children: React.ReactNode;
	className?: string;
}

export function GlowCard({
	children,
	className,
	corners,
	plusSize,
	inset,
	strokeWidth,
	plusColor,
	...glowProps
}: GlowCardProps) {
	return (
		<div className={cn("relative overflow-hidden", className)}>
			<GlowEffect {...glowProps} />
			<CornerPlus
				corners={corners}
				plusSize={plusSize}
				inset={inset}
				strokeWidth={strokeWidth}
				plusColor={plusColor}
			/>
			<div className="relative z-10 h-full w-full">{children}</div>
		</div>
	);
}