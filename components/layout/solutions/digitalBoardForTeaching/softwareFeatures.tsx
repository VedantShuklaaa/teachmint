"use client";
import { motion } from "motion/react";
import { SafetyFeature, SafetyFeatureCard } from "../../products/visionx-classroom-management-system/safetyFeatures";

const CONTAINER_DURATION = 1;

const SOFTWARE_FEATURES: SafetyFeature[] = [
	{
		src: "/solutions/features/smart-board-for-classroom.png",
		alt: "Teachmint - Smart Board for Classroom",
		items: [
			{
				titleSize: "text-2xl",
				title: "Access YouTube, Wikipedia & Google Search.",
			}, {
				titleSize: "text-2xl",
				title: "Manage classroom attendance & student reports digitally.",
			}, {
				titleSize: "text-2xl",
				title: "Record, conduct & share live class sessions.",
			},
		],
	}, {
		src: "/solutions/features/digital-smart-board-for-teaching.png",
		alt: "Teachmint - Digital Smart Board for Teaching",
		items: [
			{
				titleSize: "text-2xl",
				title: "Create, assign & analyze custom Homework & Assessments.",
			}, {
				titleSize: "text-2xl",
				title: "Prepare, edit & share classroom sessions with whiteboard recordings.",
			}, {
				titleSize: "text-2xl",
				title: "Manage visibility across various stakeholders.",
			},
		],
	}
];


const SOFTWARE_FEATURES_2: SafetyFeature[] = [
	{
		src: "/solutions/features/tmx-smart-board-for-teaching.webp",
		alt: "Teachmint - Smart Board for Teaching",
		items: [
			{
				title: "Generate AI-Powered Teaching resources via voice or text through EduAI.",
			}, {
				title: "Import PPTs, PDFs with built in digital board annotation capabilities.",
			}, {
				title: "Access and present multiple android apps through Split screen.",
			},
		],
	}, {
		src: "/solutions/features/digital-board-for-teaching-for-schools.png",
		alt: "Teachmint - Digital Board for Teaching for Schools",
		items: [
			{
				title: "Record, Save & share Whiteboard sessions through cloud, WhatsApp or email.",
			}, {
				title: "Generate & edit Text, 2D & 3D images with adjustable pen features.",
			}, {
				title: "Enhance Student collaboration with digital tools & multi-touch support.",
			},
		],
	}
];

export default function SoftwareFeatures() {
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
					Immersive learning with best software features
				</motion.h1>

				{SOFTWARE_FEATURES.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={i % 2 !== 0} />
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
					Simplify Learning with Teachmint X Smart Board
				</motion.h1>

				{SOFTWARE_FEATURES_2.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={i % 2 !== 0} />
				))}
			</div>
		</div>
	)
}