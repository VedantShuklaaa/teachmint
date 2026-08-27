"use client";
import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	cardWidth?: number;
	gap?: number;
	maxVisible?: number;
	className?: string;
}

export default function Carousel<T>({
	items,
	renderItem,
	cardWidth = 320,
	gap = 16,
	maxVisible = 4,
	className = "",
}: CarouselProps<T>) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const showControls = items.length > maxVisible;

	const updateScrollState = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
	}, []);

	useEffect(() => {
		if (!showControls) return;
		updateScrollState();
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", updateScrollState);
		window.addEventListener("resize", updateScrollState);
		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, [updateScrollState, showControls]);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const amount = cardWidth + gap;
		el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
	};

	return (
		<div className={`w-[70vw] mx-auto flex flex-col gap-8 py-20 ${className}`}>
			<div
				ref={scrollRef}
				className={
					showControls
						? "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
						: "flex flex-wrap justify-center gap-4"
				}
			>
				{items.map((item, i) => (
					<div key={i} className={showControls ? "shrink-0 snap-start" : ""}>
						{renderItem(item, i)}
					</div>
				))}
			</div>

			{showControls && (
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
			)}
		</div>
	);
}