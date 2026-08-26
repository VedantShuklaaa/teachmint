"use client";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

interface AIServiceFeature {
	src: string;
	alt: string;
	title: string;
	description?: string;
	bullets: string[];
}

const AI_SERVICE_FEATURES: AIServiceFeature[] = [
	{
		src: "/eduAi/feature1.webm",
		alt: "Teachmint - AI Lesson Planning",
		title: "Prepare Classroom Sessions with AI",
		bullets: [
			"Plan sessions & generate AI-crafted lessons.",
			"Instantly create & upload teaching materials.",
			"Summarize key lessons & videos through AI.",
		],
	},
	{
		src: "/eduAi/feature2.webm",
		alt: "Teachmint - AI Quiz Generation",
		title: "Make Classrooms Engaging & Interactive",
		bullets: [
			"Seamlessly generate quizzes & lesson plans.",
			"Safe, age-appropriate & acad-focused results.",
			"Instantly summarize videos & lessons.",
		],
	},
	{
		src: "/eduAi/feature3.webm",
		alt: "Teachmint - AI Post Class Summaries",
		title: "Extend Learning Beyond the Classroom",
		bullets: [
			"Create assessments & homework with ease.",
			"Create & share post-class reading materials.",
			"Generate AI-powered post-class summaries.",
		],
	},
];

function AIServiceCard({ feature, imageOnRight }: { feature: AIServiceFeature; imageOnRight: boolean }) {
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
					<video
						src={feature.src}
						autoPlay
						muted
						loop
						playsInline
						className="h-full w-full object-cover"
						aria-label={feature.alt}
					/>
				</div>
			)}

			<div className="h-full w-1/2 flex flex-col justify-center p-2 gap-10">
				<div className="flex flex-col gap-1">
					<p className="text-4xl tracking-tight leading-none font-[sora] max-w-3xl text-left">
						{feature.title}
					</p>
					{feature.description && (
						<p className="text-lg sm:text-xl text-zinc-700 max-w-2xl leading-[1.2] font-inter font-light text-left">
							{feature.description}
						</p>
					)}
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
					<video
						src={feature.src}
						autoPlay
						muted
						loop
						playsInline
						className="h-full w-full object-cover"
						aria-label={feature.alt}
					/>
				</div>
			)}
		</div>
	);
}

export default function AIServices() {
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
					Transform Your Teaching with EduAI
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
					From lesson planning to quizzes and summaries, EduAI gives teachers intelligent tools to create richer, more engaging learning experiences.
				</motion.p>
			</div>

			<div className="w-[70vw] mx-auto flex flex-col gap-10">
				{AI_SERVICE_FEATURES.map((feature, i) => (
					<AIServiceCard key={feature.title} feature={feature} imageOnRight={i % 2 === 1} />
				))}
			</div>
		</div>
	)
}