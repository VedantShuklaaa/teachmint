'use client';
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PenLine, FunctionSquare, FolderInput, Slash, Box, BookOpen, type LucideIcon } from "lucide-react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

interface VisionXFeature {
	src: string;
	alt: string;
	icon: LucideIcon;
	title: string;
	description: string;
}

const VisionX_FEATURES: VisionXFeature[] = [
	{
		src: "/products/visionX/visionX-1.webp",
		alt: "Pen tool panel with solid pen, highlighter, and two-side pen options",
		icon: PenLine,
		title: "Live Classroom Feeds",
		description: "Monitor real-time classroom activity from every connected device and switch to fullscreen mode for a focused view anytime."
	},
	{
		src: "/products/visionX/visionX-2.webp",
		alt: "Optical character recognition solving a handwritten integral equation",
		icon: FunctionSquare,
		title: "Classroom Audio & Screen Share",
		description: "Admins can now see what's being taught on the digital board and listen to the ongoing classroom audio directly from the VisionX console."
	},
	{
		src: "/products/visionX/visionX-3.webp",
		alt: "File import panel with PDF, image, recording, and clipboard options",
		icon: FolderInput,
		title: "Broadcast Messaging, Alerts & Logs",
		description: "Send announcements to all or selected classrooms and track delivery, views, and acknowledgements in real time."
	},
	{
		src: "/products/visionX/visionX-4.webp",
		alt: "Template and background picker with grid, lines, and graph options",
		icon: Slash,
		title: "Privacy & Security.",
		description: "Operates on your local Wi-Fi/LAN with zero cloud dependency, allowing only authorised administrators to access VisionX securely."
	},
];

const BORDER_COLORS = [
	"#3b82f6", // blue
	"#22c55e", // green
	"#eab308", // yellow
	"#f97316", // orange
	"#ef4444", // red
	"#a855f7", // purple
];

const IDLE_BORDER = "rgba(0,0,0,0.1)";
const STEP_DURATION_MS = 1800;
const FADE_DURATION_S = 0.6;

export default function VisionXFeatures() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % VisionX_FEATURES.length);
		}, STEP_DURATION_MS);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="w-full flex flex-col items-center gap-15 py-20">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Teach, Annotate, Engage: The Ultimate Interactive Whiteboard Experience
			</motion.h1>

			<div className="w-[50vw] flex-1 grid grid-cols-2 grid-rows-2 gap-4">
				{VisionX_FEATURES.map((items, i) => {
					const isActive = i === activeIndex;

					return (
						<motion.div
							key={i}
							animate={{ borderColor: isActive ? BORDER_COLORS[i] : IDLE_BORDER }}
							transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
							className="h-100 w-full border rounded-xl flex flex-col overflow-hidden"
						>
							<div className="relative h-[70%] w-full border-b border-black/10">
								<Image src={items.src} alt={items.alt} fill sizes="(max-width: 768px) 90vw, 26vw" className="object-cover" />
							</div>
							<div className="h-[30%] w-full flex flex-col justify-center px-5">
								<p className="text-lg font-[sora] text-black leading-snug">{items.title}</p>
								<p className="font-inter text-zinc-700 leading-[1.2]">{items.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	)
}