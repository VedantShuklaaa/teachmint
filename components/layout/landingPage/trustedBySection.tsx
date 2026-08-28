"use client";
import { motion } from "motion/react";
import { ImageMarquee } from "@/components/ui/marquee/imageMarquee";

const CONTAINER_DURATION = 1;

export default function TrustedBySection() {
	return (
		<div className="max-w-[70vw] mx-auto flex flex-col items-center overflow-hidden py-20 gap-15">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Trusted by Leading <br />
				<span className="text-zinc-800">Educational Institutions</span>
			</motion.h1>
			<ImageMarquee />
		</div>
	);
}