'use client';
import FeatureCard, { Feature } from "@/components/ui/cards/featureCards";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;


const CLICK_X_FEATURES: Feature[] = [
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
					<FeatureCard key={feature.title} feature={feature} imageOnRight={i % 2 === 1} />
				))}
			</div>
		</div>
	)
}