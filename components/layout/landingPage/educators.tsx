"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface Review {
	id: string;
	name: string;
	position: string;
	quote: string;
	avatar: string;
}

const REVIEWS: Review[] = [
	{
		id: "review-1",
		name: "Chinnari Mrudula P",
		position: "Asst. Professor, Aditya University, Andhra Pradesh",
		quote:
			"Earlier, I spent hours writing code on the board before I could even begin explaining concepts. With Teachmint X and EduAI, code is generated instantly with just a touch. Classes are now more interactive, students understand concepts faster, and my workload has reduced significantly.",
		avatar: "/reviews/EducatorImage1.webp",
	},
	{
		id: "review-2",
		name: "Fr. Stanley Varghese",
		position: "Rector, St. Joseph's School North Point, Darjeeling",
		quote:
			"Smart boards have evolved over generations, and Teachmint X feels like the most advanced step yet. By combining EduAI, cloud-enabled learning, and interactive teaching, it creates a true shift in pedagogy, making classrooms more engaging, curious, and future-ready.",
		avatar: "/reviews/EducatorImage2.webp",
	},
	{
		id: "review-3",
		name: "Dr. MD Shoaibuddin Madni",
		position: "Asst Professor, Navodaya institute of technology, Raichur",
		quote:
			"In fields like dentistry and nursing, visual clarity is critical. Teachmint X acts like a digital copilot for educators. With EduAI, we can instantly generate quizzes, images, and topic-based explanations, making complex concepts much easier for students to understand.",
		avatar: "/reviews/EducatorImage3.webp",
	},
	{
		id: "review-4",
		name: "Naina P. C.",
		position: "Principal, Sanskaar CBSE English Medium School, Hubli",
		quote:
			"What stands out about Teachmint X is trust. Teachers feel confident because the content is curriculum-ready and reliable. Earlier, they had to verify information from multiple sources. Now, Teachmint X saves that effort and gives teachers more time to focus on meaningful teaching.",
		avatar: "/reviews/EducatorImage4.webp",
	},
	{
		id: "review-5",
		name: "Hironmay Debnath",
		position: "Teacher, Auxilium Convent School, West Bengal",
		quote:
			"Teachmint X has helped me save more than 50% of my preparation time. Earlier, creating homework, quizzes, and lesson content took hours. Now, I can instantly search questions, generate solutions, and focus more on explaining concepts instead of writing everything manually.",
		avatar: "/reviews/EducatorImage5.webp",
	},
	{
		id: "review-6",
		name: "Dr. Prasanth Rao",
		position: "Dean, Sahyadri College of Engineering and Management, Karnataka",
		quote:
			"Storage limitations were always a challenge with traditional panels. With Teachmint X, cloud storage changes everything. Classes can be recorded, stored, and accessed anytime by students. Combined with EduAI and smart teaching tools, it delivers a truly integrated classroom experience.",
		avatar: "/reviews/EducatorImage6.webp",
	},
];

export default function Educators() {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = REVIEWS[activeIndex];

	return (
		<div className="w-full flex flex-col items-center justify-center gap-20 py-30">
			<div className="flex flex-col gap-2">
				<h1 className="text-5xl text-center leading-none font-[times]">
					Chosen by <br /> Educators Worldwide
				</h1>
				<p className="font-inter font-extralight text-lg leading-none text-center">
					See why educators everywhere choose Teachmint X to transform <br />{" "}
					their everyday teaching experience.
				</p>
			</div>

			<div className="h-[60vh] w-[70vw] bg-[#ede5df] rounded-3xl flex flex-col">
				<div className="h-[85%] w-full flex">
					<div className="h-full w-1/2 flex items-center justify-center p-6">
						<div className="relative h-[90%] w-[73%] rounded-xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={active.id}
									initial={{ opacity: 0, scale: 1.04 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.98 }}
									transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
									className="absolute inset-0"
								>
									<Image
										src={active.avatar}
										alt={active.name}
										fill
										sizes="280px"
										className="object-cover"
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>

					<div className="h-full w-1/2 flex flex-col items-start justify-center gap-6 pr-10">
						<AnimatePresence mode="wait">
							<motion.div
								key={active.id}
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -16 }}
								transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
								className="flex flex-col gap-6"
							>
								<p className="text-2xl font-[times] leading-snug text-black">
									&ldquo;{active.quote}&rdquo;
								</p>
								<span className="flex flex-col gap-0.5">
									<p className="text-lg text-black">
										{active.name}
									</p>
									<p className="text-sm font-inter font-extralight text-black/60">
										{active.position}
									</p>
								</span>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				<div className="h-[15%] w-full rounded-b-3xl grid grid-cols-6 divide-x divide-black/15">
					{REVIEWS.map((review, index) => {
						const isActive = index === activeIndex;
						return (
							<button
								key={review.id}
								onClick={() => setActiveIndex(index)}
								className={`h-full w-full flex items-center justify-center border-t transition-colors ${isActive
									? "border-t-transparent bg-black/5"
									: "border-t-black/15 hover:bg-black/[0.03]"
									} ${index === 0 ? "rounded-bl-3xl" : ""} ${index === REVIEWS.length - 1 ? "rounded-br-3xl" : ""
									}`}
							>
								<span
									className={`text-sm font-inter transition-opacity ${isActive
										? "opacity-100 font-medium text-black"
										: "opacity-50 text-black"
										}`}
								>
									{review.name}
								</span>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}