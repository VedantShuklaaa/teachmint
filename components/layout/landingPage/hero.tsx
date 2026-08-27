"use client";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";
import Image from "next/image";
import Video from "./videoSection";

const CONTAINER_DURATION = 1;

export default function Hero() {
	return (
		<div className="w-full px-3 pt-3 sm:px-4 sm:pt-4">
			<div className="py-10 w-[80%] mx-auto rounded-[30px] border border-white/10 bg-white relative flex flex-col gap-10 overflow-hidden">
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
				<div className="flex flex-col items-center justify-center gap-2 relative z-10 pt-28 md:pt-30">
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
							Google EDLA Certified AI-Powered Connected Classroom
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
							Transform teaching and learning with our all-in-one Interactive Whiteboard, which leverages AI & Cloud.
						</motion.p>
					</div>
				</div>

				<motion.div
					initial={{ y: -60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.7,
						delay: CONTAINER_DURATION + 1.4,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="flex justify-center gap-2"
				>
					<Button variant="primary" size="lg" className="cursor-pointer text-black hover:bg-white">
						Get Started
					</Button>
					<Button variant="primary" size="lg" className="cursor-pointer bg-black text-[#eee4de]">
						Watch Demo
					</Button>
				</motion.div>

				<Video isVideo src="/hero/product-video-x2.webm" alt="Teachmint - Landing Page Hero Video" />
			</div>
		</div>
	)
}