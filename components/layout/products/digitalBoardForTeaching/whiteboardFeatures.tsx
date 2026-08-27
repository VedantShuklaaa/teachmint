"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import CoolSlideGallery, { SlideGallerySlide } from "@/components/lightswind/cool-slide-gallery";
import GlowWrapper from "@/components/ui/background/glowWrapper";

const WHITEBOARD_FEATURE_SLIDES: SlideGallerySlide[] = [
	{
		src: "/products/dbt/wb-1.webp",
		alt: "Solid pen, highlighter, and two-side pen tool panel with multi-touch toggle",
		title: "Write with a magnetic, 2 sided pen.",
	},
	{
		src: "/products/dbt/wb-3.webp",
		alt: "Two freeform curved strokes drawn on the whiteboard canvas",
		title: "40 Point Multi-touch for collaboration.",
	},
	{
		src: "/products/dbt/DBT.webp",
		alt: "Theme and background picker with grid, lines, and subject templates",
		title: "Adjustable themes for various subjects.",
	},
	{
		src: "/products/dbt/wb-6-new.webp",
		alt: "Simulations, dictionary, calculator, graph, and periodic table smart tool icons",
		title: "Smart Tools for enhanced learning.",
	},
	{
		src: "/products/dbt/wb-5.webp",
		alt: "2D and 3D shape picker with show lengths and show angles toggles",
		title: "Create 2D/3D Shapes with measurements.",
	},
	{
		src: "/products/dbt/Asset 2.webp",
		alt: "Voice waveform next to an AI assistant head icon",
		title: "Control your whiteboard with voice commands.",
	},
];

const MAX_TILT = 20;

function WhiteboardFeatureCard({ slide, index }: { slide: SlideGallerySlide; index: number }) {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		gsap.to(card, {
			rotateX: -y * MAX_TILT,
			rotateY: x * MAX_TILT,
			transformPerspective: 800,
			duration: 0.35,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(cardRef.current, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.55,
			ease: "elastic.out(1, 0.6)",
		});
	};

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
			className="group relative h-full w-full rounded-xl border border-white/10 overflow-hidden flex flex-col p-2"
		>
			{/* Image — 80% height */}
			<div className="relative h-[80%] w-full">
				<Image
					src={slide.src}
					alt={slide.alt ?? slide.title}
					fill
					sizes="(max-width: 768px) 90vw, 30vw"
					className="object-cover transition-all rounded-xl duration-500 ease-out group-hover:scale-105 group-hover:blur-md group-hover:brightness-50"
				/>
			</div>

			{/* Title — remaining 20%, always present */}
			<div className="h-[20%] w-full flex items-center px-4 transition-opacity duration-300 group-hover:opacity-0">
				<h3 className="text-lg text-[#ede5df] font-[times] tracking-wide leading-tight">
					{slide.title}
				</h3>
			</div>

			{/* Hover overlay — title only, centered over blurred card */}
			<div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
				<h3 className="text-2xl text-[#ede5df] font-[times] tracking-wide text-center leading-snug">
					{slide.title}
				</h3>
			</div>
		</motion.div>
	);
}

export default function WhiteboardFeatures() {
	return (
		<div className="h-screen w-full flex flex-col gap-20 items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<GlowWrapper glowTop glowBottom glowSize="100%">
					<h1 className="text-4xl sm:text-5xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-5xl text-center">
						Whiteboard designed with years of teacher insights & real classroom experience
					</h1>
				</GlowWrapper>
			</div>

			<div className="h-[80%] w-[70%] grid grid-cols-3 divide-x divide-y divide-white/10 p-10 gap-4">
				{WHITEBOARD_FEATURE_SLIDES.map((slide, i) => (
					<WhiteboardFeatureCard key={slide.title} slide={slide} index={i} />
				))}
			</div>
		</div>
	);
}