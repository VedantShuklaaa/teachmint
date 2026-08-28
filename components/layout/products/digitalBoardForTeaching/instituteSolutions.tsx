"use client";
import ImageCarousel, { type ImageCarouselItem } from "@/components/ui/cards/imageCarousel";

import { motion } from "motion/react";

const galleryItems: ImageCarouselItem[] = [
	{
		src: "/products/DBT/k-12.webp",
		alt: "Teachmint - K12",
		title: "K-12",
		description:
			"Online, hybrid, or in-person, X2 is for every possible learning environment.",
	},
	{
		src: "/products/DBT/coaching.webp",
		alt: "Teachmint - Coaching",
		title: "Coaching",
		description:
			"Level up your teaching with our AI-Powered Classroom Platform.",
	},
	{
		src: "/products/DBT/higher-edu.webp",
		alt: "Teachmint - Higher Education",
		title: "Higher Education",
		description:
			"Help lecturers and teachers to deliver educational excellence.",
	},
];

const CONTAINER_DURATION = 1;

export default function InstituteSolutions() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col py-20 gap-15">
			<div className="flex flex-col gap-4 items-center">
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
					Crafted to Empower Every Institute
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
					Transform classrooms with our classroom device anywhere online, hybrid, or in person.
				</motion.p>
			</div>

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