"use client";
import Orb from "@/components/Orb";
import { Button } from "@/components/ui/button/button";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const FLOATING_VIDEOS = [
	{
		src: "/products/heroVideo1.webm",
		className: "h-100 w-130 right-20 top-30",
		depth: 30,
		floatDuration: 6,
		floatDelay: 0,
	},
	{
		src: "/products/heroVideo2.webm",
		className: "h-100 w-100 left-20 top-50",
		depth: 50,
		floatDuration: 7,
		floatDelay: 0.4,
	},
	{
		src: "/products/heroVideo3.webm",
		className: "h-80 w-80 left-120 bottom-20",
		depth: 20,
		floatDuration: 5.5,
		floatDelay: 0.8,
	},
	{
		src: "/products/heroVideo4.webm",
		className: "h-60 w-60 right-100 bottom-40",
		depth: 60,
		floatDuration: 6.5,
		floatDelay: 1.2,
	},
];

function FloatingCard({
	src,
	className,
	depth,
	floatDuration,
	floatDelay,
	mouseX,
	mouseY,
}: {
	src: string;
	className: string;
	depth: number;
	floatDuration: number;
	floatDelay: number;
	mouseX: ReturnType<typeof useMotionValue<number>>;
	mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
	const parallaxX = useTransform(mouseX, [-1, 1], [-depth, depth]);
	const parallaxY = useTransform(mouseY, [-1, 1], [-depth, depth]);
	const springX = useSpring(parallaxX, { stiffness: 30, damping: 25, mass: 0.8 });
	const springY = useSpring(parallaxY, { stiffness: 30, damping: 25, mass: 0.8 });

	return (
		<motion.div
			style={{ x: springX, y: springY }}
			initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
			animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
			transition={{
				duration: 2,
				delay: CONTAINER_DURATION + 1.4,
				ease: [0.16, 1, 0.3, 1],
			}}
			className={`absolute ${className}`}
		>
			<motion.div
				animate={{ y: [0, -18, 0] }}
				transition={{
					duration: floatDuration,
					delay: floatDelay,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-sm"
			>
				<video
					src={src}
					autoPlay
					muted
					loop
					playsInline
					className="h-full w-full object-cover"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />
			</motion.div>
		</motion.div>
	);
}

const CONTAINER_DURATION = 1;

export default function ClassroomPlatformHero() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		mouseX.set(x * 2);
		mouseY.set(y * 2);
	};

	return (
		<div
			ref={containerRef}
			onPointerMove={handlePointerMove}
			className="h-screen w-full flex flex-col items-center justify-center gap-6 relative overflow-hidden"
			style={{ perspective: 1200 }}
		>
			<div className="absolute h-full w-full">
				<Orb
					hoverIntensity={2}
					rotateOnHover
					hue={0}
					forceHoverState={false}
					backgroundColor="#000000"
				/>
			</div>
			<div className="flex flex-col items-center gap-4 relative z-10">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl sm:text-5xl md:text-6xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-4xl text-center">
					AI-Powered Connected Classroom Technology
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter font-extralight text-center">
					Transforming classroom engagement seamlessly <br /> at every stage of learning.
				</motion.p>
			</div>

			<motion.div
				initial={{ y: -60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.7,
					delay: CONTAINER_DURATION + 1.4,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				<Button variant="primary" size="lg" className="cursor-pointer relative z-10">
					Get Started
				</Button>
			</motion.div>

			{FLOATING_VIDEOS.map((card) => (
				<FloatingCard key={card.src} mouseX={mouseX} mouseY={mouseY} {...card} />
			))}
		</div>
	);
}