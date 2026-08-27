"use client";
import { MonitorSmartphone, Wifi, Eye, MonitorCog } from "lucide-react";
import Carousel from "@/components/ui/cards/carousel";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

const SHAREX_FEATURES = [
	{
		icon: MonitorSmartphone,
		title: "Multi-Device Support",
		description: "Connect up to 4 devices simultaneously for collaborative classroom activities.",
	},
	{
		icon: Wifi,
		title: "Ultra-Low Latency",
		description: "Deliver smooth, real-time screen sharing for interactive lessons without lag.",
	},
	{
		icon: Eye,
		title: "Secure Encryption",
		description: "Keep classroom sessions secure with enterprise-grade encryption.",
	},
	{
		icon: MonitorCog,
		title: "Host Control Dashboard",
		description: "Teachers can manage connected devices and control screen sharing effortlessly.",
	},
];

export default function ShareXFeatures() {
	return (
		<div className="flex flex-col py-20 gap-15">
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
					Built for classrooms
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
					Designed to make teaching smoother and more interactive with seamless screen sharing.
				</motion.p>
			</div>

			<Carousel
				items={SHAREX_FEATURES}
				maxVisible={SHAREX_FEATURES.length}
				className="!gap-0 !py-0"
				renderItem={({ icon: Icon, title, description }) => (
					<div className="h-50 w-80 border border-black/10 rounded-xl bg-black/5 p-6 flex flex-col gap-4 relative">
						<span className="h-14 w-14 rounded-full flex items-center justify-center">
							<Icon className="h-7 w-7" strokeWidth={2} />
						</span>
						<div className="flex flex-col gap-1">
							<h3 className="text-xl font-[sora]">{title}</h3>
							<p className="text-sm text-zinc-800 font-inter font-light leading-[1.2]">{description}</p>
						</div>
					</div>
				)}
			/>
		</div>
	);
}