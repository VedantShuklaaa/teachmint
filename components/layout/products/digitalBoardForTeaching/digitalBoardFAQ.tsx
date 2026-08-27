"use client";
import FAQSection, { FAQItem } from "@/components/ui/sections/FAQSection";
import { useState } from "react";


export const FAQ_ITEMS: FAQItem[] = [
	{
		question: "How does Teachmint X Classroom device work?",
		answer: "Teachmint X Classroom device is an AI-powered Whiteboard with touchscreen capabilities, enabling seamless teaching, collaboration, and presentations. It features a True 4K UHD display, Infrared (IR) Multi-Touch, and AI-driven EduAI assistant, allowing users to write, draw, and interact with content in real-time. With Google EDLA Certification, it supports Google Play apps, cloud storage, and wireless screen sharing. The AI-enhanced whiteboard provides lesson plans, quizzes, and math solutions, making it ideal for schools, colleges, and coaching institutes. Connectivity options like Wi-Fi, NFC login, and Bluetooth ensure a smart, connected experience.",
	}, {
		question: "How to use Teachmint X in classrooms?",
		answer: "To use Teachmint X in classrooms, power it on and access the AI-powered Teachmint Whiteboard for writing, drawing, and lesson planning. Use the stylus or touch gestures for annotations, while the OCR tool converts handwriting into digital text. Teachers can mirror screens wirelessly, import PPTs, PDFs, or videos, and use EduAI to generate quizzes, assessments, and study materials. With Google EDLA certification, access Google Play apps, and cloud storage. Teachmint X enhances engagement, hybrid learning, and collaborative teaching, making lessons more efficient and immersive.",
	}, {
		question: "What are the benefits of an interactive classroom device for education?",
		answer: "The Teachmint X Interactive classroom device for education enhances teaching efficiency, student engagement, and learning outcomes by creating an engaging and dynamic classroom. It reduces teacher workload, streamlines lesson delivery, and improves student participation through seamless digital collaboration. Educational institutions benefit from higher retention rates, better hybrid learning experiences, and cost savings by replacing outdated teaching tools. With faster lesson execution and real-time content access, schools can provide a more engaging and future-ready learning environment. The intuitive interface and AI-powered board support ensure maximum impact with minimal effort, making it an ideal long-term investment for modern education.",
	}, {
		question: "What is the warranty of Teachmint X Classoom device?",
		answer: "Teachmint X classroom device come with a three-year on-site warranty, ensuring hassle-free support and service at your location.",
	}, {
		question: "What is the ideal Teachmint X size for classrooms?",
		answer: 'While choosing the Teachmint X for classrooms, it is important to consider the dimensions of the room. For standard classrooms with a length of around 25 feet, a 75" (1.90 m) board offers excellent visibility. In larger classrooms, an 86" (2.18 m) board ensures clear visibility for all students. For smaller classrooms, a 65" (1.65 m) board maximizes space while delivering a great viewing experience.',
	}, {
		question: "Which devices are compatible with Teachmint X for connectivity?",
		answer: "Our AI-powered classroom device allows wireless screen mirroring, enabling easy connection with smartphones, tablets, and laptops. They are compatible with Windows, Android, and iOS platforms.",
	}, {
		question: "Do Teachmint X classroom device support multi-user interaction?",
		answer: "Yes, Our Teachmint X classroom device supports multi-touch, allowing several users to write or draw simultaneously.",
	},
];


export default function DigitalBoardFAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className="w-[70vw] mx-auto py-20 flex flex-col items-center gap-15">
			<h1 className="text-4xl sm:text-5xl tracking-tight leading-none font-[sora] max-w-4xl text-center mx-auto">
				FAQ
			</h1>

			<div className="flex flex-col max-w-[55vw] w-full">
				{FAQ_ITEMS.map((item, i) => (
					<FAQSection
						key={item.question}
						item={item}
						isOpen={openIndex === i}
						onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
					/>
				))}
			</div>
		</div>
	);
}