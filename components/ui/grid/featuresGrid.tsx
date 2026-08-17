"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CustomerGrid() {
	return (
		<div className="h-[60vh] w-[65vw] mx-auto flex flex-col mt-[14vh] gap-4">
			<h1 className="text-3xl leading-none max-w-4xl text-left">
				Your{" "}
				<span className="bg-linear-to-br from-blue-400 to-blue-800 text-transparent bg-clip-text">
					intelligent, safe
				</span>{" "}
				and <br />
				<span className="bg-linear-to-br from-blue-400 to-blue-800 text-transparent bg-clip-text">
					smart
				</span>{" "}
				teaching assistant
			</h1>
			<div className="h-[60%] w-full bg-[#f5f2f0] rounded-xl p-[2px]">
				<div className="grid h-full gap-[0.5px] lg:grid-cols-[2fr_1fr]">
					<LogoGrid />
					<FeaturedVideoCard />
				</div>
			</div>
		</div>
	);
}

interface Logo {
	name: string;
	cls: string;
}

const logos: Logo[] = [
	{ name: "Explanation", cls: "font-black tracking-wide text-2xl" },
	{ name: "Images/Videos", cls: "font-black tracking-wide text-2xl" },
	{ name: "Summerize Lecture", cls: "font-black tracking-wide text-2xl" },
	{ name: "Mathematics Solver", cls: "font-black tracking-wide text-2xl" },
	{ name: "Quiz Creation", cls: "font-black tracking-wide text-2xl" },
	{ name: "Homework Generation", cls: "font-black tracking-wide text-2xl" },
	{ name: "Speech to text", cls: "font-black tracking-wide text-2xl" },
	{ name: "Quick class recap", cls: "font-black tracking-wide text-2xl" },
];

const withArrow = new Set([1, 3, 5, 6]);

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 14, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: EASE },
	},
};

export function LogoGrid() {
	return (
		<motion.div
			variants={gridVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="grid grid-cols-2 grid-rows-2 gap-[0.5px] md:grid-cols-4 h-full"
		>
			{logos.map((logo, i) => (
				<motion.div
					key={logo.name}
					variants={cardVariants}
					whileHover={{ y: -3 }}
					transition={{ duration: 0.25, ease: EASE }}
					className="group relative flex items-center justify-center rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
				>
					{withArrow.has(i) && (
						<motion.span
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 1 }}
							className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-accent"
						>
							<ArrowRight className="size-3.5" />
						</motion.span>
					)}
					<span className={`px-4 text-center text-sm text-zinc-600 transition-colors duration-300 group-hover:text-foreground leading-none ${logo.cls}`}>
						{logo.name}
					</span>
				</motion.div>
			))}
		</motion.div>
	);
}

export function FeaturedVideoCard() {
	return (
		<motion.article
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			whileHover="hover"
			className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-primary shadow-sm h-full"
		>
			<motion.video
				autoPlay
				muted
				loop
				playsInline
				controls={false}
				preload="metadata"
				poster="/case-neon-poster.webp"
				className="absolute inset-0 h-full w-full object-cover"
				variants={{
					hover: { scale: 1.04 },
				}}
				initial={{ scale: 1.08 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
			>
				<source src="/hero/eduAIVideo.webm" type="video/webm" />
				<source src="/case-neon.mp4" type="video/mp4" />
			</motion.video>

			<motion.div
				className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
			/>

			<motion.span
				className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
				variants={{
					hover: { x: 3 },
				}}
			>
				<ArrowRight className="size-4" />
			</motion.span>
		</motion.article>
	);
}