"use client";
import { motion } from "motion/react";
import { Download, Wifi, Cast } from "lucide-react";

const CONTAINER_DURATION = 1;

const STEPS = [
	{
		icon: Download,
		title: "Install Share X",
		description: "Download and install Share X on your devices.",
	},
	{
		icon: Wifi,
		title: "Connect to WiFi",
		description: "Ensure your device and Teachmint X are connected to the same local network.",
	},
	{
		icon: Cast,
		title: "Start Sharing",
		description: 'Tap "Share Screen" and connect to Teachmint X to begin teaching instantly.',
	},
];

export default function HowItWorks() {
	return (
		<div className="dynamic-border h-[60vh] w-[70vw] flex flex-col items-center justify-center mx-auto my-20 gap-15 rounded-3xl">
			<div className="flex flex-col gap-1 items-center">
				<motion.h1
					initial={{ y: 60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
					Up and running in 3 steps
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.8,
						delay: CONTAINER_DURATION + 0.7,
						ease: "easeOut",
					}}
					className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-extralight text-center">
					No complicated setup. Start sharing your screen in the classroom within minutes.
				</motion.p>
			</div>

			<div className="flex h-80 w-[80%] gap-15">
				{STEPS.map(({ icon: Icon, title, description }, i) => (
					<div
						key={title}
						className="relative h-full w-full bg-black/5 border border-black/10 hover:dynamic-border duration-300 rounded-xl flex flex-col items-center justify-center gap-4 p-6 text-center"
					>
						<span className="h-20 w-20 rounded-full bg-black/5 flex items-center justify-center shrink-0">
							<Icon className="h-8 w-8 text-black" strokeWidth={2} />
						</span>
						<div className="flex flex-col gap-1">
							<h3 className="text-2xl font-[sora]">{title}</h3>
							<p className="text-sm text-zinc-700 font-inter font-light leading-[1.2] max-w-[220px]">
								{description}
							</p>
						</div>

						{i < STEPS.length - 1 && (
							<motion.div
								aria-hidden
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{
									duration: 0.6,
									delay: CONTAINER_DURATION + 1.4 + i * 0.6,
									ease: "easeInOut",
								}}
								style={{
									transformOrigin: "left",
									backgroundImage: "linear-gradient(to right, #3b82f6, #f97316)",
									maskImage:
										"repeating-linear-gradient(to right, black 0 6px, transparent 6px 12px)",
									WebkitMaskImage:
										"repeating-linear-gradient(to right, black 0 6px, transparent 6px 12px)",
								}}
								className="absolute top-1/2 -right-16 w-15 h-[2px]"
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}