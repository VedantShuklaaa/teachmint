"use client";
import { useTheme } from "next-themes";
import DotField from "@/components/ui/background/dynamicDotsBackground";
import { Button } from "@/components/ui/button/button";

export default function Hero() {
	const { theme } = useTheme();

	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background layer */}
			<div className="absolute inset-0">
				<DotField
					theme={theme === "dark" ? "dark" : "light"}
					dotOpacity={0.65}
					glowRadius={150}
					glowBlur={30}
					fadeEdges
					fadeSize={30}
				/>
			</div>

			{/* Foreground content */}
			<div className="relative z-10 flex flex-col h-screen w-[65vw] mt-[14vh] mx-auto items-left justify-start gap-10 text-left">


				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl sm:text-5xl md:text-5xl font-bold max-w-5xl leading-none">
							<span className="text-primary">Google EDLA Certified</span> AI-Powered Connected Classroom Device
						</h1>
						<p className="text-lg text-slate-600 max-w-2xl leading-none">
							Transform teaching and learning with our all-in-one Interactive
							Whiteboard, <br /> which leverages AI &amp; Cloud.
						</p>
					</div>

					<div className="flex items-center justify-start gap-3">
						<Button variant="secondary" size="lg" className="cursor-pointer backdrop-blur-sm">
							Get Started
						</Button>
						<Button variant="primary" size="lg" className="cursor-pointer">
							Watch Demo
						</Button>
					</div>

				</div>

				<div className="w-full mx-auto rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
					<video
						className="w-full h-full"
						autoPlay
						muted
						loop
						playsInline
						controls={false}
						preload="metadata"
						poster="/hero-video-poster.webp"
					>
						<source src="/hero/product-video-x2.webm" type="video/webm" />
						<source src="/hero-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
}