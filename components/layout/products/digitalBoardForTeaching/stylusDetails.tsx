"use client";
import { Pen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15, delayChildren: 0.1 },
	},
};

const fadeUp = {
	hidden: { y: 24, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function StylusDetails() {
	return (
		<div className="h-[70vh] w-full">
			<div className="h-full w-[70vw] mx-auto flex">
				<div className="h-full w-1/2 flex items-center p-2">
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						className="relative h-1/2 w-full rounded-xl overflow-hidden flex flex-col gap-4"
					>
						<div className="flex flex-col gap-2">
							<motion.h1
								variants={fadeUp}
								className="text-4xl sm:text-5xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-4xl"
							>
								The Fastest, Smoothest Touch Experience
							</motion.h1>
							<motion.div variants={fadeUp} className="flex items-center gap-2">
								<span className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center">
									<Pen className="h-4 w-4" />
								</span>
								<p className="text-md text-zinc-300 max-w-2xl font-inter font-extralight">
									Lag-free writing, just like pen on paper.
								</p>
							</motion.div>
						</div>

						<motion.p
							variants={fadeUp}
							className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter font-light"
						>
							With zero gap between the glass and board, plus a ≤5 millisecond response time, every stroke feels natural, precise, and effortless.
						</motion.p>
					</motion.div>
				</div>
				<div className="h-full w-1/2 flex items-center p-2">
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="relative h-1/2 w-full rounded-xl overflow-hidden"
					>
						<Image
							src="/products/DBT/stylus.webp"
							alt="Teachmint - Stylus"
							fill
							className="object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}