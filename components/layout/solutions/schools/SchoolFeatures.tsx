"use client";
import { motion } from "motion/react";
import { SafetyFeature, SafetyFeatureCard } from "../../products/visionx-classroom-management-system/safetyFeatures";

const CONTAINER_DURATION = 1;

const SCHOOL_FEATURES: SafetyFeature[] = [
	{
		src: "/solutions/schools/card2.png",
		alt: "Teachmint - Multi User Collaboration & Communication",
		items: [
			{
				titleSize: "text-2xl",
				title: "Active student collaboration with multi touch & split screen capabilities.",
			}, {
				titleSize: "text-2xl",
				title: "Create, assign & analyze homework or assessments via phone, laptop or board.",
			}, {
				titleSize: "text-2xl",
				title: "Simplify communication with stakeholders through digital student reports.",
			},
		],
	}
];

const SCHOOL_FEATURES_2: SafetyFeature[] = [
	{
		src: "/solutions/schools/card3.png",
		alt: "Teachmint - Efficient Lesson management & delivery",
		items: [
			{
				titleSize: "text-2xl",
				title: "Prepare, assign & manage lessons through a single platform.",
			}, {
				titleSize: "text-2xl",
				title: "Centralise, access & share subject specific learning materials with Google cloud.",
			}, {
				titleSize: "text-2xl",
				title: "Conduct, prepare & manage multiple learning modes through a single app.",
			},
		],
	}
];



export default function SchoolFeatures() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="flex flex-col items-center gap-15 w-full">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
					Multi-User Collaboration & Communication
				</motion.h1>

				{SCHOOL_FEATURES.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={false} />
				))}
			</div>

			<div className="flex flex-col items-center gap-15 w-full">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
					Efficient lesson management & delivery
				</motion.h1>

				{SCHOOL_FEATURES_2.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={true} />
				))}
			</div>
		</div>
	)
}