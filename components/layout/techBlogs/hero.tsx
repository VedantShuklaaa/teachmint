"use client";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

const fadeUp = {
	initial: { y: 60, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function TechBlogsHero() {
	return (
		<div className="w-full flex flex-col py-15 gap-15">
			<div className="flex flex-col gap-1 items-center pt-28 md:pt-30">
				<motion.h1
					{...fadeUp}
					transition={{ duration: 0.8, delay: CONTAINER_DURATION, ease }}
					className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-black font-[sora] max-w-5xl text-center"
				>
					Technology, Unpacked
				</motion.h1>
				<motion.p
					{...fadeIn}
					transition={{ duration: 0.8, delay: CONTAINER_DURATION + 0.7, ease: "easeOut" }}
					className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-extralight text-center"
				>
					Deep dives, practical insights, and fresh perspectives on the technology powering modern education.
				</motion.p>
			</div>

			<motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.9, delay: CONTAINER_DURATION + 1.1, ease }}
				whileHover={{ y: -4 }}
				className="h-100 w-[70%] rounded-xl mx-auto flex transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
			>
				<div className="h-full w-[50%] flex flex-col gap-4 p-10">
					<motion.span
						{...fadeUp}
						transition={{ duration: 0.7, delay: CONTAINER_DURATION + 1.4, ease }}
						className="flex flex-col gap-1"
					>
						<p className="text-xs text-zinc-700">DEVOPS · ENGINEERING</p>
						<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-5xl text-left">
							When Infrastructure Meets the Classroom.
						</h1>
					</motion.span>

					<motion.p
						{...fadeIn}
						transition={{ duration: 0.8, delay: CONTAINER_DURATION + 1.7, ease: "easeOut" }}
						className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-left leading-[1.2]"
					>
						When most people picture modern infrastructure, they think of data centers, cloud dashboards, and elaborate deployment pipelines servers humming somewhere far away, quietly handling millions of requests.
					</motion.p>
				</div>

				<div className="dynamic-border h-full w-[50%] rounded-xl overflow-hidden p-[0.5]">
					<motion.div
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: CONTAINER_DURATION + 1.4, ease }}
						className="h-full w-full relative rounded-xl overflow-hidden"
					>
						<Image
							src="/blogs/blog-1.jpg"
							alt="Teachmint - Technical Blog 1"
							fill
							sizes="(max-width: 768px) 100vw, 35vw"
							className="object-cover transition-transform duration-700 hover:scale-105"
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}