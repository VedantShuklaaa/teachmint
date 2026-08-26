"use client";
import Video from "@/components/layout/landingPage/videoSection";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import Image from "next/image";


const CONTAINER_DURATION = 1;

const clickXFeatures = [
	{ label: "100% Student Participation", color: "text-emerald-500" },
	{ label: "Interactive AI at Every Desk", color: "text-amber-500" },
	{ label: "Instant Clarity on Student Understanding", color: "text-pink-500" },
] as const;

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
				<div className="w-full flex flex-col items-center justify-center gap-2 relative z-10 pt-28 md:pt-30">
					<div className="w-full flex flex-col gap-1 items-center">
						<motion.h1
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
							Turn lessons into dialogues with classroom clickers.
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
							Turn every classroom into an interactive experience where every student gets a voice.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								delay: CONTAINER_DURATION + 1,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="mt-6 flex w-full max-w-5xl flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
						>
							{clickXFeatures.map((feature) => (
								<div
									key={feature.label}
									className="flex items-center justify-center gap-2 text-center text-sm sm:text-base text-zinc-700 font-inter"
								>
									<Check className={`h-4 w-4 shrink-0 ${feature.color}`} />
									{feature.label}
								</div>
							))}
						</motion.div>
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
					className="flex justify-center"
				>
					<Button variant="primary" size="lg" className="cursor-pointer bg-black text-[#eee4de]">
						Get Started
					</Button>
				</motion.div>

				<Video isVideo src="/products/clickX/hero.webm" alt="Teachmint - Click X Hero Video" />
			</div>
		</div>
	)
}