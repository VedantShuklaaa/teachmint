'use client';
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PenLine, FunctionSquare, FolderInput, Slash, Box, BookOpen, type LucideIcon } from "lucide-react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

interface WhiteboardFeature {
	src: string;
	alt: string;
	icon: LucideIcon;
	title: string;
}

const WHITEBOARD_FEATURES: WhiteboardFeature[] = [
	{
		src: "/products/IWB/write.png",
		alt: "Pen tool panel with solid pen, highlighter, and two-side pen options",
		icon: PenLine,
		title: "Write and annotate with adjustable pen features.",
	},
	{
		src: "/products/IWB/equations.webp",
		alt: "Optical character recognition solving a handwritten integral equation",
		icon: FunctionSquare,
		title: "Write equations and EduAI solves them for you.",
	},
	{
		src: "/products/IWB/import.webp",
		alt: "File import panel with PDF, image, recording, and clipboard options",
		icon: FolderInput,
		title: "Import videos, images & pdf to Whiteboard.",
	},
	{
		src: "/products/IWB/customise.webp",
		alt: "Template and background picker with grid, lines, and graph options",
		icon: Slash,
		title: "Customizable background themes & colours.",
	},
	{
		src: "/products/IWB/generate.webp",
		alt: "2D and 3D shape picker with show lengths and show angles toggles",
		icon: Box,
		title: "Instantly Generate 2D & 3D Shapes for efficient teaching.",
	},
	{
		src: "/products/IWB/books.webp",
		alt: "Curriculum book library organized by class from Class I to Class XII",
		icon: BookOpen,
		title: "Instant access to curriculum books on the Whiteboard.",
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

export default function WhiteboardFeatures() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % WHITEBOARD_FEATURES.length);
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

			<div className="w-[70vw] flex-1 grid grid-cols-3 grid-rows-2 gap-4">
				{WHITEBOARD_FEATURES.map(({ src, alt, icon: Icon, title }, i) => {
					const isActive = i === activeIndex;

					return (
						<motion.div
							key={i}
							animate={{ borderColor: isActive ? BORDER_COLORS[i] : IDLE_BORDER }}
							transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
							className="h-100 w-full border rounded-xl flex flex-col overflow-hidden"
						>
							<div className="relative h-[70%] w-full border-b border-black/10">
								<Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 26vw" className="object-cover" />
							</div>
							<div className="h-[30%] w-full flex items-center gap-3 px-5">
								<Icon className="h-6 w-6 shrink-0 text-black" strokeWidth={2} />
								<p className="text-lg font-[sora] text-black leading-snug">{title}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	)
}