"use client";
import { Lock, Zap, Smartphone } from "lucide-react";
import Carousel from "@/components/ui/cards/carousel";

const SPECS = [
	{ title: "20 million+", description: "users served" },
	{ title: "10+", description: "countries" },
	{ title: "17", description: "language supported" },
];

export default function Reach() {
	return (
		<div className="flex flex-col py-20">
			<Carousel
				items={SPECS}
				maxVisible={SPECS.length}
				className="!gap-0 !py-0"
				renderItem={({ title, description }) => (
					<div className="h-50 w-80 border border-black/10 rounded-xl bg-black/5 p-6 flex flex-col items-center justify-center gap-2 relative">
						<h3 className="text-3xl font-[sora]">{title}</h3>
						<p className="text-lg text-zinc-800 font-inter font-light leading-[1.2]">{description}</p>
					</div>
				)}
			/>
		</div>
	);
}