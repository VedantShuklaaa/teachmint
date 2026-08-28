"use client";
import { motion } from "motion/react";
import Video from "./videoSection";
import ImageCarousel, { ImageCarouselItem } from "@/components/ui/cards/imageCarousel";
import Image from "next/image";

const CONTAINER_DURATION = 1;

const WHITEBOARD_FEATURES: ImageCarouselItem[] = [
	{
		src: "/hero/whiteboard/processor.webp",
		alt: "Teachmint - Smartboard Octa-Core Processor",
		title: "Octa-Core Processor & NPU for AI tasks",
	},
	{
		src: "/hero/whiteboard/Camera.webp",
		alt: "Teachmint - Smartboard AI-Powered Camera",
		title: "AI-Powered 48MP 4K camera",
	},
	{
		src: "/hero/whiteboard/Ports.webp",
		alt: "Teachmint - Smartboard Multi Connectivity Ports",
		title: "Multi-Connectivity Ports",
	},
	{
		src: "/hero/whiteboard/Speaker.webp",
		alt: "Teachmint - Smartboard Front Facing Speakers",
		title: "Front Facing 2x20W speaker",
	},
	{
		src: "/hero/whiteboard/Mic.webp",
		alt: "Teachmint - Smartboard In-Built Omni Directional Mic",
		title: "In-built 8 Array Omni Directional Mic",
	},
	{
		src: "/hero/whiteboard/NFC.webp",
		alt: "Teachmint - Smartboard NFC Reader",
		title: "In-built NFC Card Reader",
	}, {
		src: "/hero/whiteboard/9H.webp",
		alt: "Teachmint - Smartboard 9H Hardness Filter",
		title: "9H hardness & Blue light filter",
	},
];

export default function HeroWhiteboardHardwareFeatures() {
	return (
		<div className="w-[80vw] mx-auto flex flex-col items-center py-20 gap-15 relative rounded-3xl overflow-hidden">
			<Image
				src="/texture/texture.jpg"
				alt="Texture"
				fill
				priority
				className="object-cover opacity-[0.06] pointer-events-none mix-blend-multiply"
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
				style={{ background: "#3b82f6" }}
			/>

			{/* bottom-right orange glow */}
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
				style={{ background: "#f97316" }}
			/>

			<div className="flex flex-col gap-15 w-full">
				<div className="flex flex-col items-center gap-4">
					<motion.h1
						initial={{ y: 60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.8,
							delay: CONTAINER_DURATION,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center mx-auto"
					>
						Connected Classroom App to transform teaching
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.8,
							delay: CONTAINER_DURATION + 0.7,
							ease: "easeOut",
						}}
						className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-center leading-[1.2]">
						Transform classroom engagement seamlessly at every stage of learning.
					</motion.p>
				</div>

				<Video isImage src="/hero/CCT-Mobile.webp" alt="Teachmint - Whiteboard" />
			</div>

			<div className="flex flex-col gap-15 w-full">
				<div className="flex flex-col items-center gap-4">
					<motion.h1
						initial={{ y: 60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.8,
							delay: CONTAINER_DURATION,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center mx-auto"
					>
						Powered by Next-Gen Hardware
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.8,
							delay: CONTAINER_DURATION + 0.7,
							ease: "easeOut",
						}}
						className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-center leading-[1.2]">
						Powerful performance, seamless interaction, and future-ready technology.
					</motion.p>
				</div>

				<ImageCarousel
					items={WHITEBOARD_FEATURES}
					maxVisible={4}
					cardWidth={320}
					imageHeight={200}
					gap={16}
					className="!py-0"
				/>
			</div>
		</div>
	)
}