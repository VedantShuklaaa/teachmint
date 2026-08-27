'use client';
import { motion } from "motion/react";
import Image from "next/image";


const CONTAINER_DURATION = 1;

interface SafetyFeatureItem {
	title: string;
	description: string;
}

interface SafetyFeature {
	src: string;
	alt: string;
	items: SafetyFeatureItem[];
}

function SafetyFeatureCard({ feature, imageOnRight }: { feature: SafetyFeature; imageOnRight: boolean }) {
	return (
		<div className="dynamic-border h-130 w-full rounded-2xl bg-black/5 flex overflow-hidden relative">
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

			{!imageOnRight && (
				<div className="h-full w-1/2 relative">
					<Image src={feature.src} alt={feature.alt} fill className="object-cover" />
				</div>
			)}

			<div className="h-full w-1/2 flex flex-col justify-center p-8 gap-0">
				{feature.items.map((item, i) => (
					<div key={item.title} className="flex flex-col">
						<div className="flex flex-col gap-2 py-6">
							<p className="text-3xl tracking-tight leading-none font-[sora] text-left">
								{item.title}
							</p>
							<p className="text-base sm:text-lg text-zinc-700 leading-[1.2] font-inter font-light text-left">
								{item.description}
							</p>
						</div>
						{i < feature.items.length - 1 && (
							<div
								className="h-px w-full"
								style={{
									background: "linear-gradient(to right, #6366f1, #ec4899)",
								}}
							/>
						)}
					</div>
				))}
			</div>

			{imageOnRight && (
				<div className="h-full w-1/2 relative">
					<Image src={feature.src} alt={feature.alt} fill className="object-cover" />
				</div>
			)}
		</div>
	);
}

const SAFETY_FEATURES: SafetyFeature[] = [
	{
		src: "/products/dbt/whiteboard-hero-M.webp",
		alt: "Local-only streaming",
		items: [
			{
				title: "Digital Whiteboard",
				description: "Teach & annotate with ease, designed for teachers, perfected for real classroom use.",
			}, {
				title: "EduAI",
				description: "AI-Powered Teaching Assistant, unlocking limitless content for all curriculum in multiple languages.",
			}, {
				title: "Next-Gen Hardware",
				description: "Smooth, reliable, with an advanced processor & AI-Powered NPU.",
			}, {
				title: "Classroom App",
				description: "Seamlessly manage lessons, study material & student-teacher engagement.",
			},
		],
	},
];

export default function ProductOverview() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="flex flex-col gap-2">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-3xl text-center">
					Next-Gen Interactive Classroom Device
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-800 max-w-2xl font-inter font-light leading-[1.2] text-center">
					More than a whiteboard - a complete smart teaching solution
				</motion.p>
			</div>

			{SAFETY_FEATURES.map((feature, i) => (
				<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={i % 2 !== 0} />
			))}
		</div>
	);
}

