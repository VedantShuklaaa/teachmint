"use client";
import DotField from "@/components/ui/background/dynamicDotsBackground";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;


export default function ClickXIntro() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="flex gap-10">
				<div className={`h-170 w-120 p-4 rounded-xl flex flex-col items-center overflow-hidden relative gap-10`}>
					<motion.div
						className="absolute inset-0 rounded-xl border-2 border-black/10 pointer-events-none z-30"
						initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
						animate={{
							clipPath: [
								"inset(0% 0% 100% 0%)",
								"inset(0% 0% 0% 0%)",
								"inset(100% 0% 0% 0%)",
							],
						}}
						transition={{
							duration: 1.6,
							delay: CONTAINER_DURATION,
							times: [0, 0.5, 1],
							ease: ["easeInOut", "easeInOut"],
						}}
					/>

					<div className="flex flex-col gap-4 z-20">
						<motion.h1
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left mx-auto"
						>
							Click X - Student Response System
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION + 0.7,
								ease: "easeOut",
							}}
							className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-left leading-[1.2]">
							Turn every student into an active participant with AI-powered student response system.
						</motion.p>
					</div>

					<div className="flex flex-col gap-4 w-full z-20">
						<div className="text-lg text-zinc-700 max-w-2xl font-inter font-light text-left leading-[1.2] flex flex-col gap-3 items-start w-full">
							<p>100% student participation</p>
							<p>Instant understanding insights</p>
							<p>Real-time interaction at every desk</p>
						</div>

						<motion.div
							initial={{ y: -60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.7,
								delay: CONTAINER_DURATION + 1.4,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="flex w-full"
						>
							<Button variant="primary" size="lg" className="cursor-pointer bg-black text-[#eee4de]">
								Know More
							</Button>
						</motion.div>
					</div>

					<div className="h-1/2 w-full relative">
						<DotField
							dotOpacity={1}
							dotColor="black"
							sparkle
							fadeSize={30}
						/>
					</div>
				</div>

				<div className={`dynamic-border bg-black/5 h-170 w-120 rounded-xl flex flex-col items-center overflow-hidden p-[1] gap-5`}>
					<div className="h-full w-full relative">
						<Image
							src="/products/clickX/clickX2.webp"
							alt="Teachmint - Click X"
							fill
							className="object-cover rounded-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}