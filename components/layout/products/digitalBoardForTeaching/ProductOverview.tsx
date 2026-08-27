"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { PenTool, Sparkles, Cpu, NotebookPen, type LucideIcon } from "lucide-react";
import { GlowEffect } from "@/components/ui/cards/glowCard";

interface FeatureItem {
	icon: LucideIcon;
	title: string;
	description: string;
	glowColor: string;
}

const FEATURES: FeatureItem[] = [
	{
		icon: PenTool,
		title: "Digital Whiteboard",
		description: "Teach & annotate with ease, designed for teachers, perfected for real classroom use.",
		glowColor: "#6366f1",
	},
	{
		icon: Sparkles,
		title: "EduAI",
		description: "AI-Powered Teaching Assistant, unlocking limitless content for all curriculum in multiple languages.",
		glowColor: "#f97316",
	},
	{
		icon: Cpu,
		title: "Next-Gen Hardware",
		description: "Smooth, reliable, with an advanced processor & AI-Powered NPU.",
		glowColor: "#22c55e",
	},
	{
		icon: NotebookPen,
		title: "Classroom App",
		description: "Seamlessly manage lessons, study material & student-teacher engagement.",
		glowColor: "#ec4899",
	},
];

const iconBoxVariants = {
	rest: { backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", scale: 1 },
	hover: { backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.25)", scale: 1.06 },
};

const iconVariants = {
	rest: { rotate: 0, scale: 1 },
	hover: { rotate: -8, scale: 1.12 },
};

const titleVariants = {
	rest: { x: 0 },
	hover: { x: 4 },
};

const glowVariants = {
	rest: { opacity: 0 },
	hover: { opacity: 0.7 },
};

export default function ProductOverview() {
	return (
		<div className="h-screen w-full flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl sm:text-5xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-4xl text-center">
					Everything Your Classroom Needs
				</h1>
				<p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter font-extralight text-center">
					Digital Whiteboard · EduAI · Next-Gen Hardware · Classroom App
				</p>
			</div>

			<div className="h-[60%] w-[70vw] flex items-center justify-center gap-4">
				<div className="h-[80%] w-full p-4 gap-4 rounded-xl flex overflow-hidden">
					<div className="relative h-full w-1/2">
						<Image
							src="/products/dbt/whiteboard-hero-M.webp"
							alt="Teachmint - Classroom image"
							fill
							sizes="(max-width: 768px) 90vw, 35vw"
							className="object-cover rounded-xl"
							priority
						/>
					</div>
					<div className="h-full w-1/2 flex flex-col gap-2">
						{FEATURES.map(({ icon: Icon, title, description, glowColor }, i) => {
							const iconOnRight = i % 2 === 1;
							const fromLeft = i % 2 === 0;

							return (
								<motion.div
									key={title}
									initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, amount: 0.4 }}
									transition={{
										duration: 0.7,
										delay: i * 0.12,
										ease: [0.22, 1, 0.36, 1],
									}}
									whileHover="hover"
									className={`h-full w-full rounded-lg flex items-center gap-4 px-3 -mx-3 cursor-default`}
								>
									<motion.div
										variants={iconBoxVariants}
										initial="rest"
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										className="relative shrink-0 h-25 w-25 rounded-lg border flex items-center justify-center overflow-hidden"
									>
										<motion.div variants={glowVariants} initial="rest" transition={{ duration: 0.35 }}>
											<GlowEffect color={glowColor} size={90} blur={30} opacity={1} />
										</motion.div>

										<motion.div
											variants={iconVariants}
											initial="rest"
											transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
											className="relative z-10"
										>
											<Icon className="h-10 w-10 text-[#ede5df]" strokeWidth={1.5} />
										</motion.div>
									</motion.div>

									<motion.div
										variants={titleVariants}
										initial="rest"
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										className="flex flex-col gap-1"
									>
										<h3 className="text-xl text-[#ede5df] font-[times] tracking-wide">{title}</h3>
										<p className="text-sm text-zinc-400 font-inter font-light leading-relaxed">
											{description}
										</p>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}