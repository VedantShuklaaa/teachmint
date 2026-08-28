'use client';
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PenLine, FunctionSquare, FolderInput, type LucideIcon } from "lucide-react";
import Image from "next/image";


interface VisionXFeature {
	src: string;
	alt: string;
	icon: LucideIcon;
	title: string;
	description: string;
}

const VisionX_FEATURES: VisionXFeature[] = [
	{
		src: "/solutions/card1.png",
		alt: "Teachmint - Digital Board for Teaching",
		icon: PenLine,
		title: "Digital Board for Teaching",
		description: "Transform your classroom with the best-in-class software.",
	},
	{
		src: "/solutions/card2.png",
		alt: "Teachmint - Whiteboard for Teaching",
		icon: FunctionSquare,
		title: "Whiteboard for Teaching",
		description: "Enhance classroom participation with the cutting-edge digital whiteboard."
	},
	{
		src: "/solutions/card3.png",
		alt: "Teachmint - Digital Board for Classroom",
		icon: FolderInput,
		title: "Digital Board for Classroom",
		description: "Revolutionize classrooms with the next-gen Hardware."
	}
]


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

export default function ThreeCards() {

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % VisionX_FEATURES.length);
		}, STEP_DURATION_MS);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<div className="w-full flex-1 grid grid-cols-3 grid-rows-1 gap-4">
				{VisionX_FEATURES.map((items, i) => {
					const isActive = i === activeIndex;

					return (
						<motion.div
							key={i}
							animate={{ borderColor: isActive ? BORDER_COLORS[i] : IDLE_BORDER }}
							transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
							className="h-100 w-full border rounded-xl flex flex-col overflow-hidden"
						>
							<div className="relative h-[70%] w-full border-b rounded-b-xl border-black/10">
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