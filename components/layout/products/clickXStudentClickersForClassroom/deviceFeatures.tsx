'use client';
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

interface ClickXFeature {
	src: string;
	alt: string;
	title: string;
	description: string;
	bullets: string[];
}

const CLICK_X_FEATURES: ClickXFeature[] = [
	{
		src: "/products/clickX/ai-1.webp",
		alt: "Teachmint - Click X Image 1",
		title: "AI Intelligence Brought to the Desk",
		description: "Bring the panel's AI intelligence to every desk with Click X Student response system",
		bullets: [
			"AI-powered assistance at every desk",
			"Instant access to intelligent teaching tools",
			"Bring whiteboard intelligence to students",
			"Make every response more meaningful",
		],
	},
	{
		src: "/products/clickX/ai-2.webp",
		alt: "Teachmint - Click X Active AI Learning",
		title: "Active AI Learning",
		description: "Put the lesson in the student's hand through real-time AI interaction and educational games.",
		bullets: [
			"Real-time interaction between students and lessons",
			"AI-powered activities for active participation",
			"Turn lessons into interactive experiences",
			"Keep students engaged throughout the class",
		],
	},
	{
		src: "/products/clickX/ai-3.webp",
		alt: "Teachmint - Click X 100% Focused Participation",
		title: "100% Focused Participation",
		description: "Clickers for classroom interaction that keep students focused and participating.",
		bullets: [
			"Give every student a voice",
			"Capture responses from the entire classroom",
			"Encourage active participation in every lesson",
			"Keep students focused and involved",
		],
	},
	{
		src: "/products/clickX/ai-4.webp",
		alt: "Teachmint - Click X Assess Concept-Level Learning",
		title: "Assess Concept-Level Learning",
		description: "Capture an immediate pulse of the classroom & gain clarity on each student's concept-level understanding.",
		bullets: [
			"Get instant feedback from every student",
			"Identify gaps in concept understanding",
			"Measure learning as it happens",
			"Turn responses into actionable insights",
		],
	},
];

function ClickXFeatureCard({ feature, imageOnRight }: { feature: ClickXFeature; imageOnRight: boolean }) {
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

			<div className="h-full w-1/2 flex flex-col justify-center p-2 gap-10">
				<div className="flex flex-col gap-1">
					<p className="text-4xl tracking-tight leading-none font-[sora] max-w-3xl text-left">
						{feature.title}
					</p>
					<p className="text-lg sm:text-xl text-zinc-700 max-w-2xl leading-[1.2] font-inter font-light text-left">
						{feature.description}
					</p>
				</div>

				<div className="flex flex-col gap-4 leading-[1.1] font-extralight font-inter text-lg">
					{feature.bullets.map((bullet) => (
						<div key={bullet} className="flex items-start gap-2">
							<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
							<p>{bullet}</p>
						</div>
					))}
				</div>
			</div>

			{imageOnRight && (
				<div className="h-full w-1/2 relative">
					<Image src={feature.src} alt={feature.alt} fill className="object-cover" />
				</div>
			)}
		</div>
	);
}


export default function DeviceFeatures() {
	return (
		<div className="w-[70vw] mx-auto py-20 flex flex-col gap-15">
			<div className="flex flex-col items-center gap-6">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-5xl tracking-tight leading-none text-black font-[sora] max-w-3xl text-center">
					Click X - Classroom Clickers for active learning
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-700 max-w-2xl leading-[1.2] font-inter font-light text-center">
					Bring AI-powered interaction to every desk, making participation measurable and learning more engaging.
				</motion.p>
			</div>

			<div className="w-[70vw] mx-auto flex flex-col gap-10">
				{CLICK_X_FEATURES.map((feature, i) => (
					<ClickXFeatureCard key={feature.title} feature={feature} imageOnRight={i % 2 === 1} />
				))}
			</div>
		</div>
	)
}