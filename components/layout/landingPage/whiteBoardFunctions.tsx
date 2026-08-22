"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";


export default function WhiteBoardFunctions() {
	return (
		<div className="w-full pt-[2%]">
			<div className="h-full w-full rounded-3xl bg-[#ede5df] flex flex-col items-center">
				<div className="h-[40vh] w-full flex flex-col items-center justify-center gap-4">
					<h1 className="text-black text-5xl max-w-2xl text-center leading-none font-[times]">
						The Most Powerful All-in-One <br /> Interactive Whiteboard
					</h1>
					<p className="text-black font-inter font-extralight text-lg leading-none text-center max-w-xl">
						Bring ideas to life with smarter writing, problem-solving, and <br /> voice-powered classroom tools.
					</p>
				</div>

				<StickyScrollReveal sections={FEATURE_BLOCKS} />
			</div>
		</div>
	)
}

interface FeatureBlock {
	id: string;
	title: string;
	description: string;
	image: string;
}

const FEATURE_BLOCKS: FeatureBlock[] = [
	{
		id: "block-1",
		title: "AI Image Search",
		description:
			"Select any image on the whiteboard and let EduAI instantly find relevant information around it. Explore concepts, identify objects, and discover useful context without leaving your lesson or switching between different applications.",
		image: "/TMLogo1.svg",
	}, {
		id: "block-2",
		title: "Smart Tools",
		description:
			"Give every lesson the tools it needs with built-in simulations, graphs, calculators, dictionaries, and periodic tables. Everything is available directly on the whiteboard, helping you explain complex concepts visually and keep students engaged throughout the lesson.",
		image: "/TMLogo2.svg",
	}, {
		id: "block-3",
		title: "Import Files",
		description:
			"Bring your existing teaching resources directly onto the interactive whiteboard. Import PDFs, images, videos, and other classroom material, then use them alongside your lessons to create a more dynamic and interactive learning experience.",
		image: "/TMLogo3.svg",
	}, {
		id: "block-4",
		title: "Voice AI",
		description:
			"Control your whiteboard and classroom experience naturally with your voice. Dictate notes, trigger actions, and interact with different features hands-free, allowing you to stay focused on teaching instead of constantly reaching for controls.",
		image: "/TMLogo3.svg",
	}, {
		id: "block-5",
		title: "Smart Writing & Shapes",
		description:
			"Turn handwritten notes, diagrams, and rough sketches into clean, polished content with intelligent writing and shape recognition. Customize your pen with different colors, thicknesses, and styles while creating professional-looking lessons naturally as you teach.",
		image: "/TMLogo3.svg",
	},
];


export type StickyScrollSection = {
	id: string;
	title: string;
	description: string;
	image: string;
	imageAlt?: string;
};

type StickyScrollRevealProps = {
	sections: StickyScrollSection[];
};

export function StickyScrollReveal({ sections }: StickyScrollRevealProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const sectionRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		if (sections.length === 0) return;

		const observers: IntersectionObserver[] = [];

		sectionRefs.current.forEach((el, index) => {
			if (!el) return;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveIndex(index);
						}
					});
				},
				{
					root: null,
					// Trigger when the section's center crosses the viewport center.
					rootMargin: "-40% 0px -40% 0px",
					threshold: 0,
				}
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [sections]);

	return (
		<div className="relative flex flex-col w-full">
			{/* Left: sticky image stage */}
			<div className="flex">
				<div className="sticky top-0 h-screen w-1/2 shrink-0 overflow-hidden flex items-center justify-center">
					{sections.map((section, index) => (
						<img
							key={section.id}
							src={section.image}
							alt={section.imageAlt ?? section.title}
							width={104}
							height={104}
							loading={index === 0 ? "eager" : "lazy"}
							className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
								}`}
						/>
					))}
				</div>

				{/* Right: scrolling explanation panel */}
				<div className="w-1/2 shrink-0 rounded-l-3xl bg-[#ddd2cb]">
					{sections.map((section, index) => (
						<section
							key={section.id}
							ref={(el) => {
								sectionRefs.current[index] = el;
							}}
							className="flex min-h-screen flex-col justify-center px-8 py-24 md:px-12 lg:px-16"
						>
							<h2 className="mt-4 text-3xl leading-none tracking-wider font-[times] text-black md:text-4xl lg:text-5xl">
								{section.title}
							</h2>
							<p className="mt-6 max-w-2xl text-base leading-[1.5] text-black/80 md:text-xl">
								{section.description}
							</p>
						</section>
					))}
				</div>
			</div>

			<div className="text-black h-[60vh] w-full flex">
				<div className="w-1/2 h-full flex flex-col gap-2 text-left items-start justify-start py-20 px-40">
					<h2 className="leading-none font-[times] max-w-xl w-fit text-4xl">
						Solutions for every learning need
					</h2>
					<p className="max-w-xl w-fit text-lg font-extralight leading-[1.1]">
						Empowering educators and learners with smarter solutions <br /> for every environment.
					</p>
				</div>
				<div className="w-1/2 h-full flex items-center justify-start">
					<div className="h-[50vh] w-180 rounded-3xl bg-background flex flex-col p-4 gap-4">
						{solutions.map((items, idx) => (
							<div className="h-40 w-full rounded-2xl bg-white flex items-center p-2" key={idx}>
								<div className="h-35 w-35 rounded-xl relative">
									<Image
										src={items.src}
										alt={items.title}
										fill
										className="object-cover rounded-xl"
									/>
								</div>

								<div className="flex flex-col h-35 w-100 justify-start gap-2 p-2">
									<h1 className="leading-none text-3xl font-light font-[times]">{items.title}</h1>
									<p className="leading-none font-extralight text-zinc-700 max-w-xl w-fit">{items.description}</p>
								</div>

								<Button
									variant="primary"
									size="md"
									className="cursor-pointer bg-primary transition-colors duration-300 group inline-flex items-center gap-2"
								>
									Know more
									<span className="relative inline-block h-4 w-4 overflow-hidden">
										<ChevronRight className="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-6" />
										<ChevronRight className="absolute inset-0 h-4 w-4 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
									</span>
								</Button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}




type Solution = {
	title: string;
	description: string;
	src: string;
};

const solutions: Solution[] = [
	{
		title: "K-12",
		description:
			"Online, hybrid, or in-person, Teachmint X is built for every learning environment.",
		src: "/solutions/solutions-1.webp"
	},
	{
		title: "Coaching",
		description:
			"Level up your teaching with our AI-powered classroom platform.",
		src: "/solutions/solutions-2.webp"
	},
	{
		title: "Higher Education",
		description:
			"Help lecturers and teachers deliver engaging, effective educational experiences.",
		src: "/solutions/solutions-3.webp"
	},
];