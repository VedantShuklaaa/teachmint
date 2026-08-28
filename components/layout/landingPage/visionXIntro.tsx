"use client";
import { motion } from "motion/react";
import { SafetyFeature, SafetyFeatureCard } from "../products/visionx-classroom-management-system/safetyFeatures";

const CONTAINER_DURATION = 1;

const VISIONX_FEATURES: SafetyFeature[] = [
	{
		src: "/hero/visionx-cover.webp",
		alt: "Teachmint - Vision X",
		items: [
			{
				description: "Real-Time Classroom Visibility",
			}, {
				description: "Live Audio & Screen Access",
			}, {
				description: "Broadcast Messaging, Alerts & Logs",
			}, {
				description: "Built for Privacy & Security",
			},
		],
	},
]


export default function VisionXIntro() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="flex flex-col gap-4 items-center">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center mx-auto"
				>
					Vision X <br />Classroom Monitoring System
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-center leading-[1.2]">
					Get real-time visibility across classrooms and stay connected all from a single secure dashboard.
				</motion.p>
			</div>

			{VISIONX_FEATURES.map((feature, i) => (
				<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={true} />
			))}
		</div>
	)
}