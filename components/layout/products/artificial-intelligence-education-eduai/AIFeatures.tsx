"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { FunctionSquare, FileText, Newspaper, ClipboardCheck, ClipboardList, ShieldCheck, MonitorPlay } from "lucide-react";

interface AIFeature {
	icon: LucideIcon;
	title: string;
	description: string;
}

const AI_FEATURES: AIFeature[] = [
	{
		icon: FunctionSquare,
		title: "Smart Math Solver",
		description: "Write equations on the whiteboard, and EduAI will instantly solve them.",
	},
	{
		icon: FileText,
		title: "Generate PPTs",
		description: "Create engaging AI-powered PPTs with a simple voice command or text input.",
	},
	{
		icon: Newspaper,
		title: "Create Lesson Plans",
		description: "Effortlessly create engaging Lesson Plans for Diverse Subjects and Classrooms.",
	},
	{
		icon: ClipboardCheck,
		title: "Generate Assessments",
		description: "Instantly generate tailored classroom assessments & in class quizzes.",
	},
	{
		icon: ClipboardList,
		title: "Generate Homework",
		description: "Seamlessly create and assign homework for your classroom with ease.",
	},
	{
		icon: ShieldCheck,
		title: "Safe Search",
		description: "Ensure age-appropriate, and academic focused results.",
	},
	{
		icon: MonitorPlay,
		title: "Summarize Lecture",
		description: "Generates page-wise and overall topic summaries of lessons.",
	},
];

const CARD_WIDTH = 320; // matches w-80
const GAP = 16; // matches gap-4

export default function FeatureCarousel() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const updateScrollState = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
	}, []);

	useEffect(() => {
		updateScrollState();
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", updateScrollState);
		window.addEventListener("resize", updateScrollState);
		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, [updateScrollState]);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const amount = CARD_WIDTH + GAP;
		el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
	};

	return (
		<div className="w-[70vw] mx-auto flex flex-col gap-8 py-20">
			<div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
				{AI_FEATURES.map(({ icon: Icon, title, description }, i) => (
					<div
						key={i}
						className="h-50 w-80 shrink-0 snap-start border border-black/10 rounded-xl bg-black/5 p-6 flex flex-col gap-4 relative"
					>
						<span className="h-14 w-14 rounded-full flex items-center justify-center">
							<Icon className="h-7 w-7" strokeWidth={2} />
						</span>
						<div className="flex flex-col gap-1">
							<h3 className="text-xl font-[sora]">{title}</h3>
							<p className="text-sm text-zinc-800 font-inter font-light leading-[1.2]">{description}</p>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center gap-4">
				<button
					onClick={() => scroll("left")}
					disabled={!canScrollLeft}
					className="h-14 w-14 rounded-full flex items-center justify-center bg-black/5 border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-black/[0.06] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
					aria-label="Scroll left"
				>
					<ChevronLeft className="h-6 w-6 text-black" strokeWidth={1.5} />
				</button>

				<button
					onClick={() => scroll("right")}
					disabled={!canScrollRight}
					className="h-14 w-14 rounded-full flex items-center justify-center bg-black/5 border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-black/[0.06] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
					aria-label="Scroll right"
				>
					<ChevronRight className="h-6 w-6 text-black" strokeWidth={1.5} />
				</button>
			</div>
		</div>
	);
}