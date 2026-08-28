"use client";
import { motion } from "motion/react";
import { SafetyFeature, SafetyFeatureCard } from "../../products/visionx-classroom-management-system/safetyFeatures";

const CONTAINER_DURATION = 1;

const COACHING: SafetyFeature[] = [
	{
		src: "/solutions/coachings/card2.png",
		alt: "Teachmint - Efficient Communication and Collaboration",
		items: [
			{
				titleSize: "text-2xl",
				title: "Actively engage & provide real time support & feedback to distance learning students through live class sessions.",
			}, {
				titleSize: "text-2xl",
				title: "Reduce classroom hassles & enable seamless classroom presentations with a massive internal memory & a ground breaking processor.",
			}, {
				titleSize: "text-2xl",
				title: "Enhanced student engagement with multi touch & split screen capabilities.",
			},
		],
	}
];


const COACHING_2: SafetyFeature[] = [
	{
		src: "/solutions/coachings/card3.png",
		alt: "Teachmint - Robust Resource Management",
		items: [
			{
				titleSize: "text-2xl",
				title: "Enhance visualisation with smart tools for making concepts more concrete & understandable.",
			}, {
				titleSize: "text-2xl",
				title: "Record, edit & share classroom whiteboard sessions for post class learning.",
			}, {
				titleSize: "text-2xl",
				title: "Prepare, assign & manage lessons through 100+ Android Apps accessible with Teachmint X.",
			},
		],
	}
];

export default function Coaching() {
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

				{COACHING.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={true} />
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

				{COACHING_2.map((feature, i) => (
					<SafetyFeatureCard key={feature.alt} feature={feature} imageOnRight={false} />
				))}
			</div>
		</div>
	)
}