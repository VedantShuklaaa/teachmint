"use client";
import FAQSection, { FAQItem } from "@/components/ui/sections/FAQSection";
import { useState } from "react";


export const FAQ_ITEMS: FAQItem[] = [
	{
		question: "How do I add more Teachmint X devices?",
		answer: {
			intro: "You can link devices in two ways:",
			sections: [
				{
					heading: "From the Teachmint X device:",
					points: [
						"Open the Teachmint app and select the Link your Device option.",
						"Enter the room details and Institute ID.",
						"Once linked, the device will appear on both the VisionX console and the Teachmint Admin Portal.",
					],
				},
				{
					heading: "From the Teachmint Admin Portal:",
					points: [
						"Log in at accounts.teachmint.com with your admin credentials.",
						"Go to Device Management / Manage Devices.",
						"Select Link Teachmint X device and follow the steps to add your device.",
					],
				},
			],
		},
	}, {
		question: "How do I install VisionX?",
		answer: [
			"Download & install VisionX console in (Windows/Mac/Android).",
			"Sign in with your existing Teachmint admin credentials.",
			"Ensure X2 devices are on the same Wi-Fi as admin.",
		],
	}, {
		question: "Does VisionX support all X2 versions?",
		answer: "VisionX is supported only on Teachmint X2 models running version v1.0.9 and above.",
	}, {
		question: "Why can't I log in to VisionX?",
		answer: "Ensure you are using the same email ID or phone number of admin/owner profile that you use to access the Teachmint Admin Portal.",
	}, {
		question: "Can VisionX connect with devices from other brands?",
		answer: "No. VisionX is exclusively designed for Teachmint X devices and does not support third-party hardware.",
	}, {
		question: "How secure is VisionX?",
		answer: "VisionX operates entirely on your local network. No video streams are uploaded to the cloud. Only institute administrators and authorized leadership on the same local network can access the feeds.",
	}, {
		question: "Can VisionX be accessed from outside the institution's network?",
		answer: "No, VisionX can only be accessed on the same local network as your Teachmint X devices.",
	}, {
		question: "Will Admin's be able to view the screens of all classroom panels?",
		answer: "Yes. Admins can now view the live screens of all connected classroom panels directly through the VisionX console for complete real-time visibility.",
	}, {
		question: "Can administrators record classroom panel activity using VisionX?",
		answer: "Recording functionality is not available yet.",
	}, {
		question: "Can administrators send voice message to all classrooms using VisionX?",
		answer: "Not yet. This feature is coming soon.",
	},
];


export default function VisionXFAQ() {
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