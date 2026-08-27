'use client';
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface GridCard {
	src: string;
	alt: string;
	icon: LucideIcon;
	title: string;
}

interface GridCardsProps {
	features: GridCard[];
	borderColors: string[];
	idleBorder?: string;
	stepDurationMs?: number;
	fadeDurationS?: number;
	autoPlay?: boolean;
	gridClassName?: string;
	cardClassName?: string;
	imageWrapperClassName?: string;
	sizes?: string;
	iconClassName?: string;
	titleClassName?: string;
}

export default function GridCards({
	features,
	borderColors,
	idleBorder = "rgba(0,0,0,0.1)",
	stepDurationMs = 1800,
	fadeDurationS = 0.6,
	autoPlay = true,
	gridClassName = "w-[70vw] flex-1 grid grid-cols-3 grid-rows-2 gap-4",
	cardClassName = "h-100 w-full border rounded-xl flex flex-col overflow-hidden",
	imageWrapperClassName = "relative h-[70%] w-full border-b border-black/10",
	sizes = "(max-width: 768px) 90vw, 26vw",
	iconClassName = "h-6 w-6 shrink-0 text-black",
	titleClassName = "text-lg font-[sora] text-black leading-snug",
}: GridCardsProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (!autoPlay || features.length === 0) return;
		const id = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % features.length);
		}, stepDurationMs);
		return () => clearInterval(id);
	}, [autoPlay, features.length, stepDurationMs]);

	return (
		<div className={gridClassName}>
			{features.map(({ src, alt, icon: Icon, title }, i) => {
				const isActive = i === activeIndex;

				return (
					<motion.div
						key={i}
						animate={{ borderColor: isActive ? borderColors[i % borderColors.length] : idleBorder }}
						transition={{ duration: fadeDurationS, ease: "easeInOut" }}
						className={cardClassName}
					>
						<div className={imageWrapperClassName}>
							<Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
						</div>
						<div className="h-[30%] w-full flex items-center gap-3 px-5">
							<Icon className={iconClassName} strokeWidth={2} />
							<p className={titleClassName}>{title}</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}