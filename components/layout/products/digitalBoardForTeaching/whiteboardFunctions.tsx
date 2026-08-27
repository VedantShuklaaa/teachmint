"use client";

import ImageCarousel, {
	type ImageCarouselItem,
} from "@/components/ui/cards/imageCarousel";

import { motion } from "motion/react";

const galleryItems: ImageCarouselItem[] = [
	{
		src: "/products/DBT/recordandshare.webp",
		alt: "Teachmint - Record and Share",
		title: "Record & Share",
		description:
			"Record lessons and share whiteboard sessions with ease.",
	},
	{
		src: "/products/DBT/import.webp",
		alt: "Teachmint - Import",
		title: "Import Files",
		description:
			"Bring in PDFs, images and more to teach your way.",
	},
	{
		src: "/products/DBT/autosync.webp",
		alt: "Teachmint - Autosync",
		title: "Auto-Sync",
		description:
			"Keep every lesson automatically saved and ready to access.",
	},
	{
		src: "/products/DBT/splitscreen.webp",
		alt: "Teachmint - Split Screen",
		title: "Split Screen",
		description:
			"Run multiple apps side by side without interrupting your lesson.",
	},
	{
		src: "/products/DBT/liveclasses.webp",
		alt: "Teachmint - Live Classes",
		title: "Live Classes",
		description:
			"Teach live, engage students and keep every session recorded.",
	},
];

const CONTAINER_DURATION = 1;

export default function WhiteboardFunction() {
	return (
		<div className="flex flex-col py-20 gap-15">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center mx-auto"
			>
				Teach, record, share & multitask with ease
			</motion.h1>

			<ImageCarousel
				items={galleryItems}
				maxVisible={4}
				cardWidth={320}
				imageHeight={200}
				gap={16}
				className="!py-0"
			/>
		</div>
	);
}