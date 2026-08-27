"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	Monitor,
	Eye,
	SunDim,
	PenTool,
	ShieldCheck,
	Zap,
	Cpu,
	BrainCircuit,
	MemoryStick,
	Smartphone,
	MonitorCog,
	Clock,
	Volume2,
	Camera,
	Mic,
	Nfc,
	Hand,
	Wifi,
	Bluetooth,
	Cable,
	Usb,
	type LucideIcon,
} from "lucide-react";

const CONTAINER_DURATION = 1;
const ROTATE_INTERVAL = 3000;

interface HardwareItem {
	icon: LucideIcon;
	title: string;
	description: string;
}

interface HardwareSection {
	label: string;
	items: HardwareItem[];
}

const HARDWARE_SECTIONS: HardwareSection[] = [
	{
		label: "Display & Visuals",
		items: [
			{ icon: Monitor, title: "Size: 1.65 m/ 1.90 m/ 2.18 m", description: "Perfect visibility for mid-large rooms" },
			{ icon: Eye, title: "Display Resolution: True 4K UHD", description: "Crystal-clear visuals for all kinds of lessons" },
			{ icon: SunDim, title: "Blue light filter", description: "Reduces eye strain for comfortable viewing" },
			{ icon: PenTool, title: "Zero Bonding", description: "Pen-paper feel, precise touch" },
			{ icon: ShieldCheck, title: "3.2mm 9H hardness", description: "Scratch-proof, student-safe durable screen" },
			{ icon: Zap, title: "Response Time: ≤5ms", description: "Real-time writing with no lag" },
		],
	},
	{
		label: "Performance & Processing",
		items: [
			{ icon: Cpu, title: "Processor: Octa Core RK3576", description: "2X faster processor for a smooth experience" },
			{ icon: BrainCircuit, title: "NPU: Onboard AI (6.0 TOPS)", description: "Faster processing of AI tasks" },
			{ icon: MemoryStick, title: "RAM/ROM: 8 GB/128 GB", description: "Smooth usage, ample internal storage" },
			{ icon: Smartphone, title: "Android 16.0 EDLA", description: "Google EDLA certified" },
			{ icon: MonitorCog, title: "GPU: MaliG52 MC3", description: "Stunning visuals, seamless graphics & optimized energy efficiency" },
			{ icon: Clock, title: "Lifetime: 60,000+ hours", description: "Built to last for many years" },
		],
	},
	{
		label: "Audio & Video",
		items: [
			{ icon: Volume2, title: "Inbuilt Speakers: 40W", description: "Loud, clear audio in mid-large size classrooms" },
			{ icon: Camera, title: "Inbuilt Camera: 4K (48MP)", description: "AI based motion tracking, wide angle view" },
			{ icon: Mic, title: "8 Array Omni-Directional Mic", description: "Clear voice capture from every direction" },
		],
	},
	{
		label: "Connectivity & Interface",
		items: [
			{ icon: Nfc, title: "Inbuilt NFC Card Reader", description: "Secure login & app shortcuts" },
			{ icon: Hand, title: "40 point Multi touch", description: "Multi-user collaboration on screen" },
			{ icon: Wifi, title: "Dual Band WiFi", description: "Smooth access in any network" },
			{ icon: Bluetooth, title: "Bluetooth", description: "Wireless device connectivity made easy" },
			{ icon: Cable, title: "HDMI/VGA", description: "Seamless multimedia input/output support" },
			{ icon: Usb, title: "USB 2.0/3.0", description: "Faster file transfer" },
		],
	},
];

export default function HardwareFeatures() {
	const [activeIndex, setActiveIndex] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const startInterval = useCallback(() => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % HARDWARE_SECTIONS.length);
		}, ROTATE_INTERVAL);
	}, []);

	useEffect(() => {
		startInterval();
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [startInterval]);

	const handleTabClick = (index: number) => {
		setActiveIndex(index);
		startInterval(); // reset the 3s timer on manual click
	};

	const activeSection = HARDWARE_SECTIONS[activeIndex];

	return (
		<div className="h-[70vh] w-[70vw] mx-auto flex flex-col items-center py-20 gap-15 rounded-3xl">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Tech-Enabled Hardware
			</motion.h1>

			<div className="w-[80%] flex flex-col gap-10">
				{/* tabs */}
				<div className="flex items-center justify-center gap-10">
					{HARDWARE_SECTIONS.map((section, i) => (
						<button
							key={section.label}
							onClick={() => handleTabClick(i)}
							className={`relative pb-2 text-lg font-[sora] cursor-pointer transition-colors duration-300 ${i === activeIndex ? "text-black font-bold" : "text-zinc-500 font-normal"
								}`}
						>
							{section.label}
							{i === activeIndex && (
								<motion.div
									layoutId="hardware-tab-underline"
									className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-black"
									transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
								/>
							)}
						</button>
					))}
				</div>

				{/* content grid, max 3 cols x 2 rows */}
				<div className="py-10 px-10">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeSection.label}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-8 h-full"
						>
							{activeSection.items.map(({ icon: Icon, title, description }) => (
								<div key={title} className="flex flex-col items-center justify-center gap-3 text-center">
									<Icon className="h-10 w-10 text-black shrink-0" strokeWidth={1.5} />
									<div className="rounded-full border border-black/10 bg-black/5 px-6 py-3">
										<p className="text-base font-[sora] text-black whitespace-nowrap">{title}</p>
									</div>
									<p className="text-sm text-zinc-600 font-inter font-light leading-[1.2] max-w-[220px]">
										{description}
									</p>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}