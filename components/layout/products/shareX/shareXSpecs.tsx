"use client";
import { Lock, Zap, Smartphone } from "lucide-react";
import Carousel from "@/components/ui/cards/carousel";

const SPECS = [
	{ icon: Lock, title: "Data", description: "Secure encryption" },
	{ icon: Zap, title: "≤120ms", description: "Latency on LAN" },
	{ icon: Smartphone, title: "4 Devices", description: "Simultaneous sharing" },
];

export default function ShareXSpecs() {
	return (
		<div className="flex flex-col py-20">
			<Carousel
				items={SPECS}
				maxVisible={SPECS.length}
				className="!gap-0 !py-0"
				renderItem={({ icon: Icon, title, description }) => (
					<div className="h-50 w-80 border border-black/10 rounded-xl bg-black/5 p-6 flex flex-col gap-4 relative">
						<span className="h-14 w-14 rounded-full flex items-center justify-center">
							<Icon className="h-7 w-7" strokeWidth={2} />
						</span>
						<div className="flex flex-col gap-1">
							<h3 className="text-3xl font-[sora]">{title}</h3>
							<p className="text-sm text-zinc-800 font-inter font-light leading-[1.2]">{description}</p>
						</div>
					</div>
				)}
			/>
		</div>
	);
}