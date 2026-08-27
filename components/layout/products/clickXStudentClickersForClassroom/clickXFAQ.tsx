"use client";
import { useState } from "react";
import FAQSection, { FAQItem } from "@/components/ui/sections/FAQSection";

const FAQ_ITEMS: FAQItem[] = [
	{ question: "What is Click X?", answer: "Click X is a student response system that helps every student interact with lessons in real time, ensuring full participation and instant performance insights." },
	{ question: "Does Click X need internet?", answer: "No, internet is not required. These clickers for classroom use connect seamlessly with the base station integrated with Teachmint X." },
	{ question: "How does Click X help teachers?", answer: "Teachers can launch quizzes, polls to get student-wise, real-time insights through the student response system, helping them track understanding and adjust teaching instantly." },
	{ question: "Can Click X be used for all types of lessons?", answer: "Yes. Click X works across subjects and formats live quizzes, concept checks, exit tickets, polls, revision sessions, and exam preparation using classroom clickers." },
	{ question: "Do teachers get instant reports?", answer: "Yes, all student responses are captured instantly and displayed on the Teachmint X panel for real-time performance tracking." },
	{ question: "Does Click X work with personal devices?", answer: "No. Click X is a dedicated student response clicker designed to keep classrooms focused and distraction-free, without relying on smartphones or tablets." },
	{ question: "How do students respond using Click X?", answer: "Students can answer questions with simple button clicks, making it quick and easy to participate during the lesson." },
	{ question: "Can teachers view individual student responses?", answer: "Yes, teachers can see student-wise responses in real time, helping them understand each student's performance and participation during the lesson." },
	{ question: "Does Click X help improve student engagement?", answer: "Yes, Click X encourages every student to participate, making lessons more interactive and engaging." },
	{ question: "Is Click X suitable for all subjects?", answer: "Yes, Click X can be used across different subjects to support interactive teaching and learning." },
	{
		question: "How to connect your Click X device to Teachmint X?",
		answer: [
			"Identify the USB-based hub connector provided in the Click X kit.",
			"Insert the hub connector into the panel USB port of the Teachmint X.",
			"Once connected, the hub will automatically power on.",
			"The Hub acts as the receiver for all Click X device responses from students.",
			"The Teachmint X application will now begin receiving inputs from all Click X devices used by students during Click X-based activities.",
			"All Click X devices in the kit are pre-paired with the hub, so no additional pairing or configuration is required.",
		],
	},
];



export default function ClickXFAQ() {
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