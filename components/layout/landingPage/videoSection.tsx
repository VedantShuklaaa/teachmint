"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface VideoProps {
	src: string;
	alt?: string;
	className?: string;
	isImage?: boolean;
	isVideo?: boolean;
	priority?: boolean;
}

const GLOW_GRADIENT =
	"conic-gradient(from 315deg, #22c55e, #eab308, #f97316, #ef4444, #3b82f6, #22c55e)";

export default function Video({
	src,
	alt = "",
	className,
	isImage = false,
	isVideo = true,
	priority = false,
}: VideoProps) {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2 }}
			className={`relative w-[55vw] h-[55vh] mx-auto py-2 ${className ?? ""}`}
		>
			{/* static blurred glow ring, sits behind the media */}
			<div
				aria-hidden
				className="absolute -inset-[1%] rounded-2xl blur-2xl opacity-80"
				style={{ background: GLOW_GRADIENT }}
			/>

			<div className="relative h-full w-full rounded-2xl overflow-hidden">
				{isVideo && !isImage && (
					<video
						src={src}
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-full object-cover rounded-2xl"
					/>
				)}
				{isImage && (
					<Image
						src={src}
						alt={alt}
						fill
						sizes="60vw"
						priority={priority}
						className="object-cover rounded-2xl"
					/>
				)}
			</div>
		</motion.div>
	);
}