import { Cpu, LucideIcon, Mic } from "lucide-react";
import Video from "../../landingPage/videoSection";



type EduAIFeature = {
	icon?: LucideIcon;
	text: string;
};

export const eduAIFeatures: EduAIFeature[] = [
	{
		icon: Mic,
		text: "High-quality audio and video with a built-in camera, microphone, and speakers.",
	}, {
		text: "4K HD display Digital Board coupled with blue light filter for perfect visual experience.",
	}, {
		icon: Cpu,
		text: "Best performance with Octa-Core processor, Android 16 OS & 128 GB internal memory.",
	},
];

export default function SeamlessFeatures() {
	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<div className="w-[70%] mx-auto flex">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Seamless performance with robust build quality</h1>
					</div>
				</div>

				<div className="flex flex-col items-center text-left gap-2">
					{eduAIFeatures.map((items, idx) => {
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


			<Video isImage src="/solutions/4K.png" alt="Teachmint - 4K Smart Board" />
		</div>
	)
}