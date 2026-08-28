"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ImageCarouselItem {
	src: string;
	alt: string;
	title: string;
	href?: string;
	hoverScale?: boolean,
	description?: string;
	textAlign?: "left" | "center" | "right";
	imageFit?: "cover" | "contain";
}

interface ImageCarouselProps {
	items: ImageCarouselItem[];
	cardWidth?: number;
	imageHeight?: number;
	gap?: number;
	maxVisible?: number;
	className?: string;
	cardClassName?: string;
	imageWrapperClassName?: string;
	imageClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	sizes?: string;
	textAlign?: "left" | "center" | "right";
	imageFit?: "cover" | "contain";
}

const TEXT_ALIGN_CLASS: Record<"left" | "center" | "right", string> = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
};

const IMAGE_FIT_CLASS: Record<"cover" | "contain", string> = {
	cover: "object-cover",
	contain: "object-contain",
};

export default function ImageCarousel({
	items,
	cardWidth = 320,
	imageHeight = 200,
	gap = 16,
	maxVisible = 4,
	className = "",
	cardClassName = "rounded-xl border border-black/10 overflow-hidden flex flex-col bg-white h-full",
	imageWrapperClassName = "relative w-full",
	imageClassName = "",
	titleClassName = "text-base font-[sora] text-black leading-none p-4 pb-0",
	descriptionClassName = "text-sm text-zinc-600 p-4 pt-2 leading-[1.2]",
	sizes = "(max-width: 768px) 90vw, 320px",
	textAlign = "left",
	imageFit = "cover",
}: ImageCarouselProps) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const showControls = items.length > maxVisible;

	const updateScrollState = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;

		setCanScrollLeft(el.scrollLeft > 4);
		setCanScrollRight(
			el.scrollLeft < el.scrollWidth - el.clientWidth - 4
		);
	}, []);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		updateScrollState();
		if (!showControls) return;

		el.addEventListener("scroll", updateScrollState);
		window.addEventListener("resize", updateScrollState);

		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, [showControls, updateScrollState]);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;

		const amount = cardWidth + gap;
		el.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`w-[70vw] mx-auto flex flex-col gap-8 py-20 ${className}`}
		>
			{/* Carousel */}
			<div
				ref={scrollRef}
				className={
					showControls
						? "flex items-stretch gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
						: "flex flex-wrap items-stretch justify-center gap-4"
				}
			>
				{items.map((item, index) => {
					const align = TEXT_ALIGN_CLASS[item.textAlign ?? textAlign];
					const fit = IMAGE_FIT_CLASS[item.imageFit ?? imageFit];
					const wrapperClassName = showControls ? "shrink-0 snap-start h-auto" : "h-auto";
					const hoverScaleClass = item.hoverScale ? "hover:dynamic-border hover:scale-105 transition-transform duration-300" : "";

					const cardContent = (
						<div className={`${cardClassName} ${hoverScaleClass}`}>
							{/* Image */}
							<div
								className={imageWrapperClassName}
								style={{
									height: imageHeight,
								}}
							>
								<Image
									src={item.src}
									alt={item.alt}
									fill
									sizes={sizes}
									className={`${fit} ${imageClassName}`}
								/>
							</div>

							{/* Content */}
							<p className={`${titleClassName} ${align}`}>{item.title}</p>

							<p className={`${descriptionClassName} flex-1 ${align}`}>
								{item.description}
							</p>
						</div>
					);

					return item.href ? (
						<Link
							key={index}
							href={item.href}
							className={wrapperClassName}
							style={{
								width: cardWidth,
							}}
						>
							{cardContent}
						</Link>
					) : (
						<div
							key={index}
							className={wrapperClassName}
							style={{
								width: cardWidth,
							}}
						>
							{cardContent}
						</div>
					);
				})}
			</div>

			{/* Controls */}
			{showControls && (
				<div className="flex justify-center gap-4">
					<button
						type="button"
						onClick={() => scroll("left")}
						disabled={!canScrollLeft}
						className="h-14 w-14 rounded-full flex items-center justify-center bg-black/5 border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-black/[0.06] hover:border-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
						aria-label="Scroll left"
					>
						<ChevronLeft
							className="h-6 w-6 text-black"
							strokeWidth={1.5}
						/>
					</button>

					<button
						type="button"
						onClick={() => scroll("right")}
						disabled={!canScrollRight}
						className="h-14 w-14 rounded-full flex items-center justify-center bg-black/5 border border-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-black/[0.06] hover:border-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
						aria-label="Scroll right"
					>
						<ChevronRight
							className="h-6 w-6 text-black"
							strokeWidth={1.5}
						/>
					</button>
				</div>
			)}
		</div>
	);
}