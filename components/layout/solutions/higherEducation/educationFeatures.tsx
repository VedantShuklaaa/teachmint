"use client";
import { motion } from "motion/react";
import { SafetyFeature, SafetyFeatureCard } from "../../products/visionx-classroom-management-system/safetyFeatures";

const CONTAINER_DURATION = 1;

const EDUCATION_FEATURES: SafetyFeature[] = [
	{
		src: "/solutions/higherEducation/card2.png",
		alt: "Teachmint - Efficient Communication and Collaboration",
		items: [
			{
				titleSize: "text-2xl",
				title: "Communicate with students directly via our app for real-time support and feedback.",
			}, {
				titleSize: "text-2xl",
				title: "Assign projects and assignments as specific tasks via our app.",
			}, {
				titleSize: "text-2xl",
				title: "Host seminars and guest lectures with our live class feature and high quality camera.",
			},
		],
	}
];

const EDUCATION_FEATURES_2: SafetyFeature[] = [
	{
		src: "/solutions/higherEducation/card3.png",
		alt: "Teachmint - Robust Resource Management",
		items: [
			{
				titleSize: "text-2xl",
				title: "Centralize course materials for easy access throughout the semester.",
			}, {
				titleSize: "text-2xl",
				title: "Simplify complex concepts with AI-enhanced whiteboard tools.",
			}, {
				titleSize: "text-2xl",
				title: "Securely store and instantly share lectures with students.",
			},
		],
	}
];



export default function EducationFeatures() {
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
					Efficient Communication and Collaboration
				</motion.h1>

				{EDUCATION_FEATURES.map((feature, i) => (
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
					Robust Resource Management
				</motion.h1>

				{EDUCATION_FEATURES_2.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={i % 2 !== 0} />
				))}
			</div>
		</div>
	)
}