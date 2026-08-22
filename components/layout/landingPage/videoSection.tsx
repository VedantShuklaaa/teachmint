"use client";
import { motion } from "motion/react";

export default function Video() {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2 }}
			className="w-[70vw] h-screen mx-auto rounded-2xl overflow-hidden py-[6%]"
		>
			<video
				src="/hero/product-video-x2.webm"
				autoPlay
				muted
				loop
				playsInline
				className="w-full h-full object-cover rounded-2xl"
			/>
		</motion.div>
	);
}