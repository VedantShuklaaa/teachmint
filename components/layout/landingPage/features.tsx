"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselCard {
	id: string;
	type: "video" | "card";
	videoSrc?: string;
	imageSrc?: string;
	title?: string;
	description?: string;
}

const CAROUSEL_ITEMS: CarouselCard[] = [
	//{ id: "video-1", type: "video", videoSrc: "/hero/eduAIVideo.webm" },
	{
		id: "card-1",
		type: "card",
		imageSrc: "/carousel/card-1.png",
		title: "Explanation",
		description: "Understand complex concepts with clear AI guidance.",
	},
	{
		id: "card-2",
		type: "card",
		imageSrc: "/carousel/card-2.png",
		title: "Images & Videos",
		description: "Find relevant visuals to enhance every lesson effectively.",
	},
	{
		id: "card-3",
		type: "card",
		imageSrc: "/carousel/card-3.png",
		title: "Summarize Lecture",
		description: "Turn lengthy lectures into concise key takeaways.",
	},
	{
		id: "card-4",
		type: "card",
		imageSrc: "/carousel/card-4.png",
		title: "Mathematics Solver",
		description: "Solve problems with clear step-by-step explanations.",
	},
	{
		id: "card-5",
		type: "card",
		imageSrc: "/carousel/card-5.png",
		title: "Quiz Creation",
		description: "Create engaging quizzes tailored to every lesson.",
	},
	{
		id: "card-6",
		type: "card",
		imageSrc: "/carousel/card-6.png",
		title: "Homework Generation",
		description: "Generate personalized homework assignments in seconds.",
	}, {
		id: "card-7",
		type: "card",
		imageSrc: "/carousel/card-6.png",
		title: "Speech to Text",
		description: "Convert classroom speech into accurate written notes.",
	}, {
		id: "card-8",
		type: "card",
		imageSrc: "/carousel/card-6.png",
		title: "Quick Class Recap",
		description: "Recap important concepts and key takeaways from every class.",
	},
];

const SCROLL_AMOUNT = 360;

export default function FeatureCarousel() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const updateScrollState = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(
			el.scrollLeft < el.scrollWidth - el.clientWidth - 4
		);
	};

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		window.addEventListener("resize", updateScrollState);
		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);

	const scroll = (direction: "left" | "right") => {
		scrollRef.current?.scrollBy({
			left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
			behavior: "smooth",
		});
	};

	return (
		<div className="w-full">
			<div className="w-[70vw] mx-auto">
				<h1 className="text-5xl font-[times] leading-none">
					Your intelligent, safe <br /> and smart teaching assistant
				</h1>
			</div>
			<div
				ref={scrollRef}
				className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-[4vw] pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-[2%]"
			>
				{/* leading spacer — replaces pl-[10vw] */}
				<div className="shrink-0 w-[10vw]" aria-hidden="true" />

				{CAROUSEL_ITEMS.map((item) =>
					item.type === "video" ? (
						<div
							key={item.id}
							className="snap-start shrink-0 w-[40vw] min-w-[380px] h-[460px] rounded-2xl overflow-hidden"
						>
							<video
								src={item.videoSrc}
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-full object-cover"
							/>
						</div>
					) : (
						<div
							key={item.id}
							className="snap-end shrink-0 w-[400px] h-[460px] rounded-2xl bg-white flex flex-col overflow-hidden"
						>
							<div className="relative h-[70%] w-full">
								<Image
									src={item.imageSrc!}
									alt={item.title ?? ""}
									fill
									className="object-cover"
								/>
							</div>
							<div className="h-[30%] flex flex-col justify-center px-5 gap-2">
								<h3 className="text-xl font-semibold text-black font-inter tracking-wide leading-none">
									{item.title}
								</h3>
								<p className="text-md text-zinc-700 font-inter leading-none">
									{item.description}
								</p>
							</div>
						</div>
					)
				)}

				{/* trailing spacer — replaces pr-6 */}
				<div className="shrink-0 w-6" aria-hidden="true" />
			</div>

			<div className="flex justify-center gap-4">
				<button
					onClick={() => scroll("left")}
					disabled={!canScrollLeft}
					className="h-14 w-14 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
					aria-label="Scroll left"
				>
					<ChevronLeft className="h-6 w-6 text-white/70" strokeWidth={1.5} />
				</button>

				<button
					onClick={() => scroll("right")}
					disabled={!canScrollRight}
					className="h-14 w-14 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
					aria-label="Scroll right"
				>
					<ChevronRight className="h-6 w-6 text-white/70" strokeWidth={1.5} />
				</button>
			</div>
		</div>
	);
}