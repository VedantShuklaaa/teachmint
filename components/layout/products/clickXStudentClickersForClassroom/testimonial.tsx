"use client";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpDown, User, Target, MessageSquare, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import Video from "../../landingPage/videoSection";

const CONTAINER_DURATION = 1;

type EduAIFeature = {
	icon: LucideIcon;
	text: string;
};

export const eduAIFeatures: EduAIFeature[] = [
	{
		icon: ArrowUpDown,
		text: "Two-Way Interactive Learning.",
	},
	{
		icon: User,
		text: "100% Focused Participation.",
	},
	{
		icon: Target,
		text: "From Distraction to Focused Engagement.",
	},
	{
		icon: MessageSquare,
		text: "AI Interaction for Every Student.",
	},
	{
		icon: Sparkle,
		text: "Built for Smart, AI-Powered Classrooms.",
	},
];


export default function DeviceTestimonial() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[70%] mx-auto flex">
				<div className="w-1/2 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Transforming Classroom Engagement with Click X Student Response System</h1>
						<p className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter leading-[1.1] font-light text-left">Bridge the gap between teaching and understanding with instant student responses and meaningful classroom interaction.</p>
					</div>
				</div>

				<div className="flex flex-col items-center text-left w-1/2 px-20 gap-2">
					{eduAIFeatures.map((items, idx) => {
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


			<Video isImage src="/products/clickX/testimonial.webp" alt="Teachmint - Click X testimonial" />
		</div>
	)
}