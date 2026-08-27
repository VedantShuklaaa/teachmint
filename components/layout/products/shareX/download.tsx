"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button/button";
import { Apple, Laptop, Monitor, Smartphone } from "lucide-react";

const CONTAINER_DURATION = 1;

type OS = "windows" | "macos" | "android" | "ios" | null;

type Platform = {
	id: Exclude<OS, null>;
	name: string;
	requirement: string;
	file: string;
	icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const platforms: Platform[] = [
	{
		id: "windows" as const,
		name: "Windows",
		requirement: "Windows 10\nor later",
		file: "Download .exe",
		icon: Monitor,
	},
	{
		id: "macos" as const,
		name: "macOS",
		requirement: "macOS 12 Monterey\nor later",
		file: "Download .dmg",
		icon: Laptop,
	},
	{
		id: "android" as const,
		name: "Android",
		requirement: "Android 9.0\nor later",
		file: "Download .apk",
		icon: Smartphone,
	},
	{
		id: "ios" as const,
		name: "iOS",
		requirement: "iOS 15\nor later",
		file: "Download .ipa",
		icon: Apple,
	},
];

function detectOS(): OS {
	if (typeof navigator === "undefined") return null;
	const ua = navigator.userAgent;

	if (/iPhone|iPad|iPod/.test(ua)) return "ios";
	if (/Android/.test(ua)) return "android";
	if (/Mac OS X/.test(ua) && !/iPhone|iPad|iPod/.test(ua)) return "macos";
	if (/Windows/.test(ua)) return "windows";
	return null;
}

export default function Download() {
	const [activeOS, setActiveOS] = useState<OS>(null);

	useEffect(() => {
		setActiveOS(detectOS());
	}, []);

	return (
		<div className="w-[70vw] mx-auto py-20 gap-15 flex flex-col items-center">
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
					Download Share X
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
					Install Share X on your device and connect to Teachmint X Panel to start sharing.
				</motion.p>
			</div>

			<div className="h-100 w-full flex gap-4">
				{platforms.map((platform) => {
					const isActive = activeOS === platform.id;
					const Icon = platform.icon;

					return (
						<div
							key={platform.id}
							className={`dynamic-border h-full w-full rounded-xl flex flex-col items-center justify-center gap-4 px-6 transition-colors ${isActive ? "ring-2 ring-blue-500" : ""
								}`}
						>
							<div className="w-20 h-20 rounded-full flex items-center justify-center bg-black/5">
								<Icon
									size={40}
									strokeWidth={1.8}
									className="text-black"
								/>
							</div>

							<div className="flex flex-col items-center gap-1">
								<h3 className="text-2xl font-[sora] text-black">
									{platform.name}
								</h3>

								<p className="text-md text-zinc-700 text-center whitespace-pre-line leading-[1.2] font-inter">
									{platform.requirement}
								</p>
							</div>

							<Button
								variant="secondary"
								size="lg"
								className="cursor-pointer font-[sora]"
							>
								{platform.file}
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}