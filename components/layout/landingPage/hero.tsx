"use client";
import { useTheme } from "next-themes";
import DotField from "@/components/ui/background/dynamicDotsBackground";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	const { theme } = useTheme();

	return (
		<section className="relative h-[120vh] w-full overflow-hidden">
			{/* Background layer */}
			<div className="absolute inset-0 ">
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
			<div className="relative z-10 flex flex-col h-screen w-[65vw] mt-[20vh] mx-auto items-left justify-start gap-10 text-left">


				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl sm:text-5xl md:text-5xl font-bold font-inter max-w-5xl leading-none">
							Google EDLA Certified <br /> AI-Powered Connected Classroom Device
						</h1>
						<p className="text-zinc-600 max-w-2xl leading-[1.1]">
							Transform teaching and learning with our all-in-one Interactive
							Whiteboard, <br /> which leverages AI &amp; Cloud.
						</p>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex gap-3">
							<Button variant="secondary" size="lg" className="cursor-pointer backdrop-blur-sm">
								Get Started
							</Button>
							<Button variant="primary" size="lg" className="cursor-pointer">
								Watch Demo
							</Button>
						</div>

						<div>
							<Link
								href="/product"
								className="group inline-flex items-center gap-1 font-extralight text-zinc-600 hover:text-white duration-300"
							>
								Products
								<ArrowRight
									className="h-4 w-4 -rotate-45 transition-transform duration-300 ease-out group-hover:rotate-0"
								/>
							</Link>
						</div>
					</div>

				</div>

				<div className="w-full mx-auto rounded-xl overflow-hidden">
					<video
						className="w-full h-full rounded-xl"
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