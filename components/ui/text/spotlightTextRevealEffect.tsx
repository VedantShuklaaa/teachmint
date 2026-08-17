"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

interface SpotlightTextProps {
	text: string;
	className?: string;
	radius?: number;
	gradient?: string;
	autoPlay?: boolean;
	speed?: number;
}

export function SpotlightText({
	text,
	className = "",
	radius = 180,
	gradient = "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)",
	autoPlay = false,
	speed = 160,
}: SpotlightTextProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	const mouseX = useMotionValue(-9999);
	const mouseY = useMotionValue(-9999);
	const opacity = useMotionValue(autoPlay ? 1 : 0);

	const posRef = useRef({ x: 0, y: 0 });
	const velRef = useRef({ x: 0, y: 0 });
	const hoveringRef = useRef(false);
	const rafRef = useRef<number | null>(null);
	const lastTimeRef = useRef<number | null>(null);
	const [ready, setReady] = useState(false);

	const maskImage = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, black 0%, black 60%, transparent 100%)`;

	useEffect(() => {
		if (!autoPlay || !containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();

		posRef.current = { x: rect.width / 2, y: rect.height / 2 };
		const angle = Math.random() * Math.PI * 2;
		velRef.current = { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed };

		mouseX.set(posRef.current.x);
		mouseY.set(posRef.current.y);
		setReady(true);
	}, [autoPlay, speed, mouseX, mouseY]);

	// The bounce loop
	useEffect(() => {
		if (!autoPlay || !ready) return;

		const step = (time: number) => {
			rafRef.current = requestAnimationFrame(step);

			if (hoveringRef.current) {
				lastTimeRef.current = time;
				return;
			}

			if (lastTimeRef.current === null) lastTimeRef.current = time;
			const dt = (time - lastTimeRef.current) / 1000;
			lastTimeRef.current = time;

			const container = containerRef.current;
			if (!container) return;
			const { width, height } = container.getBoundingClientRect();

			const pos = posRef.current;
			const vel = velRef.current;

			let nx = pos.x + vel.x * dt;
			let ny = pos.y + vel.y * dt;

			if (nx <= 0) {
				nx = 0;
				vel.x = Math.abs(vel.x);
			} else if (nx >= width) {
				nx = width;
				vel.x = -Math.abs(vel.x);
			}

			if (ny <= 0) {
				ny = 0;
				vel.y = Math.abs(vel.y);
			} else if (ny >= height) {
				ny = height;
				vel.y = -Math.abs(vel.y);
			}

			pos.x = nx;
			pos.y = ny;

			mouseX.set(nx);
			mouseY.set(ny);
		};

		rafRef.current = requestAnimationFrame(step);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
			lastTimeRef.current = null;
		};
	}, [autoPlay, ready, mouseX, mouseY]);

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		hoveringRef.current = true;
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		posRef.current = { x, y };
		mouseX.set(x);
		mouseY.set(y);
		opacity.set(1);
	};

	const handlePointerLeave = () => {
		hoveringRef.current = false;
		if (!autoPlay) opacity.set(0);
	};

	return (
		<div
			ref={containerRef}
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			className="relative w-full flex items-center justify-center"
		>
			<div className={className} style={{ lineHeight: 0.88 }}>
				<p>{text}</p>
			</div>

			<motion.div
				className={`absolute inset-0 flex items-center justify-center ${className}`}
				style={{
					lineHeight: 0.88,
					opacity,
					maskImage,
					WebkitMaskImage: maskImage,
				}}
			>
				<p
					style={{
						backgroundImage: gradient,
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent",
					}}
				>
					{text}
				</p>
			</motion.div>
		</div>
	);
}

export default SpotlightText;