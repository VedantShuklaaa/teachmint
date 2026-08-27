"use client";

import { type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface InteractiveGridBackgroundProps {
	children?: ReactNode;
	className?: string;
	radius?: number;
	cellSize?: number;
}

export function InteractiveGridBackground({
	children,
	className,
	radius = 220,
	cellSize = 50,
}: InteractiveGridBackgroundProps) {
	const mouseX = useMotionValue(-9999);
	const mouseY = useMotionValue(-9999);
	const opacity = useMotionValue(0);

	const x = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.4 });
	const y = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.4 });
	const softOpacity = useSpring(opacity, { stiffness: 200, damping: 30 });

	const maskImage = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, black 0%, rgba(0,0,0,0.55) 45%, transparent 75%)`;

	const lineColorSoft = "color-mix(in oklab, var(--primary) 15%, transparent)";
	const lineColorStrong = "color-mix(in oklab, var(--primary) 100%, transparent)";

	const gridStyleSoft = {
		backgroundImage: `linear-gradient(to right, ${lineColorSoft} 1px, transparent 1px), linear-gradient(to bottom, ${lineColorSoft} 1px, transparent 1px)`,
		backgroundSize: `${cellSize}px ${cellSize}px`,
	};

	const gridStyleStrong = {
		backgroundImage: `linear-gradient(to right, ${lineColorStrong} 1px, transparent 1px), linear-gradient(to bottom, ${lineColorStrong} 1px, transparent 1px)`,
		backgroundSize: `${cellSize}px ${cellSize}px`,
	};

	return (
		<div
			onPointerMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				mouseX.set(e.clientX - rect.left);
				mouseY.set(e.clientY - rect.top);
				opacity.set(1);
			}}
			onPointerLeave={() => opacity.set(0)}
			className={cn("relative overflow-hidden bg-background", className)}
		>
			<div className="pointer-events-none absolute inset-0" style={gridStyleSoft} />

			<motion.div
				className="pointer-events-none absolute inset-0"
				style={{
					...gridStyleStrong,
					opacity: softOpacity,
					maskImage,
					WebkitMaskImage: maskImage,
				}}
			/>

			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse at center, transparent 40%, var(--background) 100%)",
				}}
			/>

			<div className="relative z-10">{children}</div>
		</div>
	);
}

export default InteractiveGridBackground;