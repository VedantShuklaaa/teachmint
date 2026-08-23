"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

interface TiltCardProps {
	className?: string;
	children?: React.ReactNode;
	tiltStrength?: number;
}

export function TiltCard({
	className = "",
	children,
	tiltStrength = 12,
}: TiltCardProps) {
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);

	const springX = useSpring(x, { stiffness: 200, damping: 20 });
	const springY = useSpring(y, { stiffness: 200, damping: 20 });

	const rotateX = useTransform(springY, [0, 1], [tiltStrength, -tiltStrength]);
	const rotateY = useTransform(springX, [0, 1], [-tiltStrength, tiltStrength]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	};

	const handleMouseLeave = () => {
		x.set(0.5);
		y.set(0.5);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}