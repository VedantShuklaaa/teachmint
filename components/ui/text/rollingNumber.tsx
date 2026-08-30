"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface RollingNumberProps {
	value: string;
	duration?: number;
	className?: string;
}

function RollingNumber({ value, duration = 2, className }: RollingNumberProps) {
	const ref = useRef<HTMLHeadingElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
	const [display, setDisplay] = useState<string>(value);
	
	const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
	const prefix = match?.[1] ?? "";
	const target = match ? parseFloat(match[2]) : null;
	const suffix = match?.[3] ?? "";
	const isDecimal = match ? match[2].includes(".") : false;

	useEffect(() => {
		if (!isInView || target === null) return;

		setDisplay(`${prefix}0${suffix}`);

		const controls = animate(0, target, {
			duration,
			ease: [0.16, 1, 0.3, 1],
			onUpdate: (latest) => {
				setDisplay(`${prefix}${isDecimal ? latest.toFixed(1) : Math.round(latest)}${suffix}`);
			},
		});

		return () => controls.stop();
	}, [isInView, target, duration, isDecimal, prefix, suffix]);

	return (
		<h3 ref={ref} className={className}>
			{display}
		</h3>
	);
}

export default RollingNumber;