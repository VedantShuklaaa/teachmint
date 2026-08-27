"use client";
import FAQSection, { FAQItem } from "@/components/ui/sections/FAQSection";
import { useState } from "react";


export const FAQ_ITEMS: FAQItem[] = [
	{
		question: "What is Share X?",
		answer: "Share X is a wireless screen sharing application built for Teachmint X that allows teachers to share their screen from Windows, macOS, or Android devices directly to the classroom panel.",
	}, {
		question: "How many devices can connect simultaneously?",
		answer: "Share X supports up to 4 devices connected simultaneously, enabling multi-device collaboration in the classroom.",
	}, {
		question: "What is the latency of Share X?",
		answer: "Share X delivers ultra-low latency screen sharing at 120ms or less, ensuring a smooth and real-time teaching experience..",
	}, {
		question: "Does Share X require internet?",
		answer: "No, Share X works over your local WiFi network. Both the device and Teachmint X just need to be connected to the same network.",
	}, {
		question: "Which platforms does Share X support?",
		answer: "Share X is available for Windows 10 or later, macOS 12 Monterey or later, and Android devices.",
	}, {
		question: "How do I start sharing my screen?",
		answer: [
			"Download and install Share X on your device.",
			"Connect your device and Teachmint X to the same WiFi network.",
			"Open Share X and tap 'Share Screen' to connect to Teachmint X.",
			"Your screen will be mirrored on the classroom panel instantly.",
		],
	},
];


export default function ShareXFAQ() {
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