"use client";
import Image from "next/image";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

const CONTAINER_DURATION = 1;

export interface IconGridItem {
	icon?: LucideIcon;
	badgeText?: string;
	title: string;
	description: string;
}

export interface IconGridSupportProps {
	heading: string;
	imageSrc: string;
	imageAlt: string;
	isVideo?: boolean;
	items: IconGridItem[];
	imageOnRight?: boolean;
}

function IconGridMedia({ src, alt, isVideo }: { src: string; alt: string; isVideo?: boolean }) {
	const resolvedIsVideo = isVideo ?? /\.(webm|mp4|mov)$/i.test(src);

	return (
		<div className="h-full w-1/2 rounded-3xl relative overflow-hidden">
			{resolvedIsVideo ? (
				<video
					src={src}
					autoPlay
					muted
					loop
					playsInline
					className="h-full w-full object-cover scale-150"
				/>
			) : (
				<Image src={src} alt={alt} fill className="object-cover scale-150" />
			)}
		</div>
	);
}

function IconGrid({ items }: { items: IconGridItem[] }) {
	return (
		<div className="h-full w-1/2 rounded-3xl grid grid-cols-2 grid-rows-3 place-items-center gap-x-12 gap-y-10 p-8">
			{items.map((item, i) => (
				<div key={i} className="flex flex-col items-center gap-3 text-center">
					<span className="dynamic-border h-16 w-16 rounded-full bg-black/5 flex items-center justify-center shrink-0">
						{item.icon ? (
							<item.icon className="h-7 w-7 text-black" strokeWidth={2} />
						) : (
							<span className="text-black text-xs font-bold">{item.badgeText}</span>
						)}
					</span>
					<div className="flex flex-col gap-1">
						<p className="text-lg font-[sora] leading-none">{item.title}</p>
						<p className="text-lg font-[sora] leading-none">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export function IconGridSupport({
	heading,
	imageSrc,
	imageAlt,
	isVideo,
	items,
	imageOnRight = false,
}: IconGridSupportProps) {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center gap-15 rounded-3xl">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				{heading}
			</motion.h1>

			<div className="flex w-full items-center">
				{!imageOnRight && <IconGridMedia src={imageSrc} alt={imageAlt} isVideo={isVideo} />}
				<IconGrid items={items} />
				{imageOnRight && <IconGridMedia src={imageSrc} alt={imageAlt} isVideo={isVideo} />}
			</div>
		</div>
	);
}