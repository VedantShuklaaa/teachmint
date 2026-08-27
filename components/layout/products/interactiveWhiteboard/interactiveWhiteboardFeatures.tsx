'use client';
import { motion } from "motion/react";
import { PenLine, FunctionSquare, FolderInput, Slash, Box, BookOpen } from "lucide-react";
import GridCards, { GridCard } from "@/components/ui/cards/gridCards";

const CONTAINER_DURATION = 1;

const WHITEBOARD_FEATURES: GridCard[] = [
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

export default function InteractiveWhiteboardFeatures() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center gap-15 py-20">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center"
			>
				Teach, Annotate, Engage: The Ultimate Interactive Whiteboard Experience
			</motion.h1>

			<GridCards features={WHITEBOARD_FEATURES} borderColors={BORDER_COLORS} />
		</div>
	);
}