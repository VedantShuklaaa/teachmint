import { Cpu, LucideIcon, Mic } from "lucide-react";
import Video from "../../landingPage/videoSection";

type EduAIFeature = {
	icon?: LucideIcon;
	text: string;
};

export const REVENUE: EduAIFeature[] = [
	{
		icon: Mic,
		text: "Grow your reach with online, offline or hybrid classes.",
	}, {
		text: "Teach multiple subjects with subject specific tools.",
	}, {
		icon: Cpu,
		text: "Retain students by delivering the best learning experience.",
	},
];

export default function IncreaseYourRevenue() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[70%] mx-auto flex">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Increase your revenue with Teachmint X</h1>
					</div>
				</div>

				<div className="flex flex-col items-center text-left gap-2">
					{REVENUE.map((items, idx) => {
						const Icon = items.icon;
						return (
							<div className="flex items-center gap-3 w-full" key={idx}>
								<span className="h-10 w-10 shrink-0 border border-black/10 rounded-xl flex items-center justify-center">
									{Icon ? (
										<Icon className="h-5 w-5" />
									) : (
										<span className="text-xs font-bold text-black">4K</span>
									)}
								</span>
								<p className="text-lg text-zinc-700 max-w-2xl font-inter leading-[1.1] font-light text-left">
									{items.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>


			<Video isImage src="/solutions/coachings/card1.png" alt="Teachmint - Coaching Institutes" />
		</div>
	)
}