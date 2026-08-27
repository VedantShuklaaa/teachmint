"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CosmicSingularityBackground from "@/components/lightswind/cosmic-singularity"
import { Button } from "@/components/ui/button/button";

const CONTAINER_DURATION = 1;
const EYEBROW_WORDS = ["ENGAGE.", "EDUCATE.", "INSPIRE."];
const EYEBROW_STAGGER = 0.15;
const EYEBROW_START_DELAY = 0.3;

const SQUARES_START_DELAY_MS = 1400;
const SQUARES_STAGGER_MS = 1400;
const MAX_VISIBLE_SQUARES = 3;
const SQUARE_TRANSITION_S = 1.1;

interface SquareConfig {
	size?: number;
	width?: number;
	height?: number;
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	depth: number;
	videoSrc: string;
}

const SQUARES: SquareConfig[] = [
	{ size: 200, top: "12%", left: "8%", depth: 0.15, videoSrc: "/hero/clip-1.mp4" },
	{ width: 180, height: 120, top: "22%", right: "14%", depth: 0.5, videoSrc: "/hero/clip-2.mp4" },
	{ size: 90, bottom: "16%", left: "12%", depth: 0.9, videoSrc: "/hero/clip-3.mp4" },
	{ size: 46, bottom: "10%", right: "10%", depth: 0.35, videoSrc: "/hero/clip-4.mp4" },
	{ width: 130, height: 90, top: "8%", right: "28%", depth: 0.7, videoSrc: "/hero/clip-5.mp4" },
	{ size: 300, bottom: "10%", left: "30%", depth: 0.2, videoSrc: "/hero/clip-6.mp4" },
];

function useRotatingVisibleIndices(total: number, maxVisible: number) {
	const [order] = useState(() => {
		return Array.from({ length: total }, (_, i) => i);
	});
	const [cursor, setCursor] = useState(0);
	const [visible, setVisible] = useState<number[]>([]);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const revealNext = (nextCursor: number) => {
			setVisible((prev) => {
				const next = [...prev, order[nextCursor % order.length]];
				return next.length > maxVisible ? next.slice(next.length - maxVisible) : next;
			});
			setCursor(nextCursor + 1);
		};

		const delay = cursor === 0 ? SQUARES_START_DELAY_MS : SQUARES_STAGGER_MS;
		timeoutId = setTimeout(() => revealNext(cursor), delay);

		return () => clearTimeout(timeoutId);
	}, [cursor]);

	return visible;
}

export default function Hero() {
	const visibleSquareIndices = useRotatingVisibleIndices(SQUARES.length, MAX_VISIBLE_SQUARES);

	return (
		<div className="h-screen w-full relative flex items-center justify-center">
			<div className="h-full w-full absolute pointer-event-none">
				<CosmicSingularityBackground />
				<div className="h-20 w-full absolute top-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
				<div className="h-20 w-full absolute bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
				<div className="h-full w-20 absolute right-0 bg-gradient-to-l from-black via-black/50 to-transparent" />
				<div className="h-full w-20 absolute left-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

				<AnimatePresence>
					{visibleSquareIndices.map((squareIndex) => {
						const sq = SQUARES[squareIndex];
						const maxOpacity = 0.7 + sq.depth * 0.3;
						const initialScale = 0.85 + sq.depth * 0.1;

						const w = sq.width ?? sq.size ?? 0;
						const h = sq.height ?? sq.size ?? 0;

						return (
							<motion.div
								key={squareIndex}
								initial={{ opacity: 0, scale: initialScale }}
								animate={{ opacity: maxOpacity, scale: 1 }}
								exit={{ opacity: 0, scale: initialScale }}
								transition={{
									duration: SQUARE_TRANSITION_S,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="absolute rounded-xl border border-white/10 bg-white overflow-hidden w-[var(--sq-w)] h-[var(--sq-h)] top-[var(--sq-top,auto)] bottom-[var(--sq-bottom,auto)] left-[var(--sq-left,auto)] right-[var(--sq-right,auto)] z-[var(--sq-z)]"
								style={
									{
										"--sq-w": `${w}px`,
										"--sq-h": `${h}px`,
										"--sq-top": sq.top,
										"--sq-bottom": sq.bottom,
										"--sq-left": sq.left,
										"--sq-right": sq.right,
										"--sq-z": Math.round(sq.depth * 10),
									} as React.CSSProperties
								}
							>
								<video
									src={sq.videoSrc}
									autoPlay
									loop
									muted
									playsInline
									className="h-full w-full object-cover"
								/>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>

			<div className="flex flex-col items-center justify-center gap-6">
				<div className="flex flex-col items-center gap-4 relative z-10">
					<div className="flex items-center gap-2 sm:gap-3">
						{EYEBROW_WORDS.map((word, i) => (
							<motion.span
								key={word}
								initial={{ opacity: 0, filter: "blur(6px)", letterSpacing: "0.05em" }}
								animate={{ opacity: 1, filter: "blur(0px)", letterSpacing: "0.15em" }}
								transition={{
									duration: 0.6,
									delay: EYEBROW_START_DELAY + i * EYEBROW_STAGGER,
									ease: "easeOut",
								}}
								className="text-sm sm:text-sm font-inter font-medium tracking-widest text-zinc-400 uppercase"
							>
								{word}
							</motion.span>
						))}
					</div>

					<motion.h1
						initial={{ y: 60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.8,
							delay: CONTAINER_DURATION,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="text-4xl sm:text-5xl md:text-6xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-4xl text-center">
						Most Powerful All-in-One Interactive Classroom Device
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
						Redefine classroom collaboration with our Classroom Device, a complete solution for immersive learning, built for the future.
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
					className="flex"
				>
					<Button variant="primary" size="lg" className="cursor-pointer">
						Book a Demo
					</Button>
				</motion.div>
			</div>
		</div>
	)
}