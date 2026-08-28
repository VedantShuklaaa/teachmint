"use client";
import ImageCarousel, { type ImageCarouselItem } from "@/components/ui/cards/imageCarousel";

import { motion } from "motion/react";

const WHITEBOARD_FEATURES: ImageCarouselItem[] = [
	{
		src: "/hero/writingAndShapes.webp",
		alt: "Teachmint - Smart Writing and Shapes",
		title: "Smart Writing & Shapes",
		description: "Turn handwritten text and shapes into perfect ones with adjustable pens and smart writing features.",
	},
	{
		src: "/hero/mathsAndPhysics.webp",
		alt: "Teachmint - Maths and Physics Solver",
		title: "Math and Physics Solver",
		description: "Write equations or word problems on the whiteboard, and EduAI instantly solves them with clear explanations.",
	},
	{
		src: "/hero/voiceAi.webp",
		alt: "Teachmint - Voice AI",
		title: "Voice AI",
		description: "Dictate notes and control classroom actions hands-free using simple voice commands directly on the whiteboard.",
	},
	{
		src: "/hero/aiSearch.webp",
		alt: "Teachmint - AI Image Search",
		title: "AI Image Search",
		description: "Select any image on the whiteboard and use Edu Search to instantly find relevant information.",
	},
	{
		src: "/hero/smartTools.webp",
		alt: "Teachmint - Smart Tools",
		title: "Smart Tools",
		description: "Access simulations, graphs, calculator, dictionary, and periodic table tools, all conveniently in one place.",
	},
	{
		src: "/hero/fileImport.webp",
		alt: "Teachmint - Import Files",
		title: "Import Files",
		description: "Import videos, images, and PDFs directly to the whiteboard for seamless classroom teaching and presentations.",
	},
];

const CONTAINER_DURATION = 1;

export default function HeroWhiteboardFeatures() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
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
				The Most Powerful All-in-One Interactive Whiteboard
			</motion.h1>

			<ImageCarousel
				items={WHITEBOARD_FEATURES}
				maxVisible={4}
				cardWidth={320}
				imageHeight={200}
				gap={16}
				className="!py-0"
			/>
		</div>
	);
}