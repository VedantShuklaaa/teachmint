"use client";
import ImageCarousel, { ImageCarouselItem } from "@/components/ui/cards/imageCarousel";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

const COACHING_INSTITUTES: ImageCarouselItem[] = [
	{
		src: "/solutions/coachings/coaching1.svg",
		alt: "Teachmint - Career Point",
		title: "Career Point",
	}, {
		src: "/solutions/coachings/coaching2.svg",
		alt: "Teachmint - Super 30",
		title: "Super 30",
	}, {
		src: "/solutions/coachings/coaching3.svg",
		alt: "Teachmint - Result Wallah",
		title: "Result Wallah",
	}
];

export default function TopCoachingInstitutes() {
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
					Trusted by Top Coaching Institutes
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
				items={COACHING_INSTITUTES}
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