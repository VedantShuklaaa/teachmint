import { Construction, FlaskConical, LucideIcon, Sparkle } from "lucide-react";
import Video from "../../landingPage/videoSection";


type EduAIFeature = {
	icon: LucideIcon;
	text: string;
};

export const ENGAGING_LECTURES: EduAIFeature[] = [
	{
		icon: Construction,
		text: "Conduct hybrid lectures with our Digital Board for remote and in-person learners.",
	}, {
		icon: FlaskConical,
		text: "Create engaging PPTs using AI with simple voice commands or text input.",
	}, {
		icon: Sparkle,
		text: "Generate class summary with AI to help students review concepts easily.",
	},
];

export default function EngagingLectures() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[70%] mx-auto flex">
				<div className="w-1/2 flex flex-col gap-4">
					<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Deliver highly engaging lectures</h1>
				</div>

				<div className="flex flex-col items-center text-left w-1/2 px-20 gap-2">
					{ENGAGING_LECTURES.map((items, idx) => {
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


			<Video isImage src="/solutions/higherEducation/card1.png" alt="Teachmint - Engaging Lectures" />
		</div>
	)
}