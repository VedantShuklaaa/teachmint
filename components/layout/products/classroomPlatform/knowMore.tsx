"use client";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";

export default function KnowMore() {
	return (
		<div className="h-[30vh] w-full flex flex-col">
			<div className="h-full w-[70vw] mx-auto gap-6 flex flex-col justify-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-none text-white font-[times] max-w-5xl">An unlimited <br /> canvas of technology</h1>
					<p className="text-lg sm:text-xl text-zinc-300 max-w-3xl font-inter leading-[1.2]">Teachmint X comes with the most advanced Digital Board for teaching, built for the modern day educators to make teaching immersive & learning interactive.</p>
				</div>

				<motion.div
					initial={{ y: -60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.7,
						delay: 1,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="flex gap-3"
				>
					<Button variant="primary" size="md" className="cursor-pointer bg-primary">
						Know more
					</Button>
				</motion.div>
			</div>
		</div>
	)
}