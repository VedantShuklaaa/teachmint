"use client";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Download, Sparkles, FileText, ClipboardCheck, Pen } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import Video from "../../landingPage/videoSection";


const CONTAINER_DURATION = 1;

type StylusDetails = {
	icon: LucideIcon;
	text: string;
};

export const STYLUS_DETAILS: StylusDetails[] = [
	{
		icon: Pen,
		text: "Lag-free writing, just like pen on paper",
	},
];


export default function StylusDetails() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[55%] mx-auto flex">
				<div className="w-1/2 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">The Fastest, Smoothest Touch Experience</h1>
						<p className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter leading-[1.1] font-light text-left">With zero gap between the glass and board, plus a ≤5 millisecond response time, every stroke feels natural, precise, and effortless.</p>
					</div>

					<motion.div
						initial={{ y: -60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.7,
							delay: CONTAINER_DURATION + 1.4,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="flex"
					>
						<Button variant="primary" size="md" className="cursor-pointer bg-black text-[#eee4de]">
							Know More
						</Button>
					</motion.div>
				</div>

				<div className="flex flex-col items-center text-left w-1/2 px-20 gap-2">
					{STYLUS_DETAILS.map((items, idx) => {
						const Icon = items.icon;
						return (
							<div className="flex items-center gap-3 w-full" key={idx}>
								<span className="h-10 w-10 shrink-0 border border-black/10 rounded-xl flex items-center justify-center">
									<Icon className="h-5 w-5" />
								</span>
								<p className="text-lg text-zinc-700 max-w-2xl font-inter leading-[1.1] font-light text-left">
									{items.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>


			<Video isImage src="/products/DBT/stylus.webp" alt="Teachmint - Stylus Image" />
		</div>
	)
}