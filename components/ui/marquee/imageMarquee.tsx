"use client";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

interface MarqueeItem {
	src: string;
	alt: string;
	title: string;
}

const marqueeItems: MarqueeItem[] = [
	{ src: "/marquee/AtlasSkilltechUniMumbai.svg", alt: "Teachmint Partners - Atlas SkillTech University Mumbai", title: "Atlas SkillTech University Mumbai", },
	{ src: "/marquee/BansalCollegeBhopal.svg", alt: "Teachmint Partners - Bansal College Bhopal", title: "Bansal College Bhopal", },
	{ src: "/marquee/BhashyamGroupAP&Telangana.svg", alt: "Teachmint Partners - Bhashyam Group AP & Telangana", title: "Bhashyam Group AP & Telangana", },
	{ src: "/marquee/CMSLucknow.svg", alt: "Teachmint Partners - City Montessori School Lucknow", title: "City Montessori School Lucknow", },
	{ src: "/marquee/donBoscoSiliguri.svg", alt: "Teachmint Partners - Don Bosco School Siliguri", title: "Don Bosco School Siliguri", },
	{ src: "/marquee/DPSMegacityKolkata.svg", alt: "Teachmint Partners - Delhi Public School Megacity Kolkata", title: "Delhi Public School Megacity Kolkata", },
	{ src: "/marquee/DPSPune.svg", alt: "Teachmint Partners - Delhi Public School Pune", title: "Delhi Public School Pune", },
	{ src: "/marquee/GDGoenkaWorldSchool.svg", alt: "Teachmint Partners - GD Goenka World School", title: "GD Goenka World School", },
	{ src: "/marquee/iitDelhi.svg", alt: "Teachmint Partners - Indian Institute of Technology Delhi", title: "Indian Institute of Technology Delhi", },
	{ src: "/marquee/iitDhanbad.svg", alt: "Teachmint Partners - Indian Institute of Technology Dhanbad", title: "Indian Institute of Technology Dhanbad", },
	{ src: "/marquee/iitMadras.svg", alt: "Teachmint Partners - Indian Institute of Technology Madras", title: "Indian Institute of Technology Madras", },
	{ src: "/marquee/LPUJalandhar.svg", alt: "Teachmint Partners - Lovely Professional University Jalandhar", title: "Lovely Professional University Jalandhar", },
	{ src: "/marquee/RVCollegeOfEngineeringBanglore.svg", alt: "Teachmint Partners - RV College of Engineering Bangalore", title: "RV College of Engineering Bangalore", },
	{ src: "/marquee/VITVellore.svg", alt: "Teachmint Partners - VIT Vellore", title: "VIT Vellore", },
];

const PIXELS_PER_SECOND = 80;

export function ImageMarquee() {
	const trackRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const [paused, setPaused] = useState(false);
	const halfWidthRef = useRef(0);

	useAnimationFrame((_, delta) => {
		if (paused) return;

		if (trackRef.current) {
			halfWidthRef.current = trackRef.current.scrollWidth / 2;
		}

		let next = x.get() - (PIXELS_PER_SECOND * delta) / 1000;

		if (halfWidthRef.current > 0 && Math.abs(next) >= halfWidthRef.current) {
			next += halfWidthRef.current;
		}

		x.set(next);
	});

	return (
		<div
			className="w-[65vw] mx-auto overflow-hidden relative px-6"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent" />
			<div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-background to-transparent" />

			<motion.div ref={trackRef} className="flex items-start gap-6 w-max" style={{ x }}>
				{[...marqueeItems, ...marqueeItems].map((item, i) => (
					<div key={i} className="flex flex-col items-center gap-1 shrink-0 w-42 cursor-pointer">
						<div className="w-30 h-30 relative rounded-xl border border-black/10 bg-white overflow-hidden p-3">
							<Image
								src={item.src}
								alt={item.alt}
								fill
								sizes="128px"
								className="object-cover"
							/>
						</div>
						<p className="text-md font-medium text-foreground text-center leading-snug">
							{item.title}
						</p>
					</div>
				))}
			</motion.div>
		</div>
	);
}