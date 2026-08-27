import Image from "next/image";
import { Languages, ShieldCheck, BookOpen, ClipboardCheck, MessageSquareText, MonitorPlay, type LucideIcon } from "lucide-react";

interface EduAIFeature {
	icon: LucideIcon;
	description: string;
}

const EDU_AI_FEATURES: EduAIFeature[] = [
	{
		icon: Languages,
		description: "Generate AI-based teaching resources instantly in multiple languages.",
	},
	{
		icon: ShieldCheck,
		description: "Get safe, age-appropriate, & academic-focused results for all curriculum.",
	},
	{
		icon: BookOpen,
		description: "Detects the class & delivers subject & class specific content.",
	},
	{
		icon: ClipboardCheck,
		description: "Effortlessly generate quizzes, homework and class recap with AI.",
	},
	{
		icon: MessageSquareText,
		description: "Generates page-wise and overall summaries for quick learning & revision.",
	},
	{
		icon: MonitorPlay,
		description: "Create dynamic AI-powered PPTs with voice or text.",
	},
];

export default function EduAI() {
	return (
		<div className="dynamic-border w-[70vw] mx-auto flex flex-col items-center gap-15 py-20 rounded-3xl bg-black/5">
			<div className="flex flex-col gap-2">
				<div className="flex items-center">
					<h1 className="text-4xl sm:text-5xl tracking-tight leading-none font-[sora] max-w-4xl text-center">
						<span className="text-primary">EduAI:</span> Your intelligent and smart teaching assistant
					</h1>
				</div>

				<div className="relative h-[60vh] w-[50vw]">
					<Image
						src="/eduAi/eduai.webp"
						alt="Teachmint - EduAi"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-x-10 gap-y-8 px-10">
				{EDU_AI_FEATURES.map(({ icon: Icon, description }, i) => (
					<div key={i} className="flex items-center gap-4">
						<span className="shrink-0 h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
							<Icon className="h-6 w-6 text-black" strokeWidth={2} />
						</span>
						<p className="text-sm font-inter leading-[1.2]">
							{description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}