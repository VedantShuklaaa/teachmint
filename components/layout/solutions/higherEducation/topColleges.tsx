"use client";
import ImageCarousel, { ImageCarouselItem } from "@/components/ui/cards/imageCarousel";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

const TOP_COLLEGES: ImageCarouselItem[] = [
	{
		src: "/solutions/higherEducation/college1.svg",
		alt: "Teachmint - Atlas Skilltech University",
		title: "Atlas Skilltech University",
	}, {
		src: "/solutions/higherEducation/college2.svg",
		alt: "Teachmint - Bansal College of Engineering",
		title: "Bansal College of Engineering",
	}, {
		src: "/solutions/higherEducation/college3.svg",
		alt: "Teachmint - RV College of Engineering",
		title: "RV College of Engineering",
	}, {
		src: "/solutions/higherEducation/college4.svg",
		alt: "Teachmint - Samanta Roy Institute of Science and Technology",
		title: "Samanta Roy Institute of Science and Technology",
	}
];

export default function TopColleges() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="flex flex-col gap-1 items-center">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-black font-[sora] max-w-5xl text-center">
					Trusted by Top Colleges
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-extralight text-center">
					Expand the potential of education for your teachers with impactful technology.
				</motion.p>
			</div>

			<ImageCarousel
				items={TOP_COLLEGES}
				maxVisible={5}
				imageFit="contain"
				textAlign="center"
				cardWidth={250}
				imageHeight={150}
				gap={10}
				className="!py-0"
			/>
		</div>
	)
}