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
		<div className="h-screen w-full py-10">
			<div className="dynamic-border h-full w-[70%] mx-auto border rounded-xl flex flex-col items-center py-4 bg-white/10">
				<div className="flex items-center">
					<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-[#ede5df] font-[sora] max-w-4xl text-center">
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

				<div className="grid grid-cols-3 gap-x-10 gap-y-8 px-10">
					{EDU_AI_FEATURES.map(({ icon: Icon, description }, i) => (
						<div key={i} className="flex items-center gap-4">
							<span className="shrink-0 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
								<Icon className="h-6 w-6 text-white" strokeWidth={2} />
							</span>
							<p className="text-sm text-[#ede5df] font-inter leading-snug max-w-[220px]">
								{description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}