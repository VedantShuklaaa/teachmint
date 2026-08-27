"use client";
import { PenLine, Hand, Palette, Sparkles, Shapes, Mic } from "lucide-react";
import GlowWrapper from "@/components/ui/background/glowWrapper";
import GridCards, { GridCard } from "@/components/ui/cards/gridCards";

const WHITEBOARD_FEATURE_SLIDES: GridCard[] = [
	{
		src: "/products/dbt/wb-1.webp",
		alt: "Solid pen, highlighter, and two-side pen tool panel with multi-touch toggle",
		icon: PenLine,
		title: "Write with a magnetic, 2 sided pen.",
	},
	{
		src: "/products/dbt/wb-3.webp",
		alt: "Two freeform curved strokes drawn on the whiteboard canvas",
		icon: Hand,
		title: "40 Point Multi-touch for collaboration.",
	},
	{
		src: "/products/dbt/DBT.webp",
		alt: "Theme and background picker with grid, lines, and subject templates",
		icon: Palette,
		title: "Adjustable themes for various subjects.",
	},
	{
		src: "/products/dbt/wb-6-new.webp",
		alt: "Simulations, dictionary, calculator, graph, and periodic table smart tool icons",
		icon: Sparkles,
		title: "Smart Tools for enhanced learning.",
	},
	{
		src: "/products/dbt/wb-5.webp",
		alt: "2D and 3D shape picker with show lengths and show angles toggles",
		icon: Shapes,
		title: "Create 2D/3D Shapes with measurements.",
	},
	{
		src: "/products/dbt/Asset 2.webp",
		alt: "Voice waveform next to an AI assistant head icon",
		icon: Mic,
		title: "Control your whiteboard with voice commands.",
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

export default function DigitalBoardFeatures() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col py-20 gap-15 items-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<GlowWrapper glowTop glowBottom glowSize="100%">
					<h1 className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
						Whiteboard designed with years of teacher insights & real classroom experience
					</h1>
				</GlowWrapper>
			</div>

			<GridCards features={WHITEBOARD_FEATURE_SLIDES} borderColors={BORDER_COLORS} />
		</div>
	);
}