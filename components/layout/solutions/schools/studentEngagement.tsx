import { Construction, FlaskConical, LucideIcon, Sparkle } from "lucide-react";
import Video from "../../landingPage/videoSection";



type EduAIFeature = {
	icon: LucideIcon;
	text: string;
};

export const STUDENT_ENGAGEMENT: EduAIFeature[] = [
	{
		icon: Construction,
		text: "Simplify complex concepts with smart tools for clearer visualization.",
	}, {
		icon: FlaskConical,
		text: "Active interactive learning with classroom & subject specific simulations.",
	}, {
		icon: Sparkle,
		text: "Generate AI-powered personalised learning resources with EduAI for your classroom.",
	},
];

export default function StudentEngagement() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[70%] mx-auto flex">
				<div className="w-1/2 flex flex-col gap-4">
					<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Enhance student engagement in your classroom</h1>
				</div>

				<div className="flex flex-col items-center text-left w-1/2 px-20 gap-2">
					{STUDENT_ENGAGEMENT.map((items, idx) => {
						const Icon = items.icon;
						return (
							<div className="flex items-center gap-3 w-full" key={idx}>
								<span className="h-10 w-10 shrink-0 border border-black/10 rounded-xl flex items-center justify-center">
									<Icon className="h-5 w-5" />
								</span>
								<p className="text-lg text-zinc-700 max-w-2xl font-inter leading-[1.1] font-light text-left">
									{items.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>


			<Video isImage src="/solutions/schools/card1.png" alt="Teachmint - Schools" />
		</div>
	)
}