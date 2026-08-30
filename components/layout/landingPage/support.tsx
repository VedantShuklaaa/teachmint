"use client";
import { Truck, Headphones, ShieldCheck, type LucideIcon } from "lucide-react";

interface SupportFeature {
	icon: LucideIcon;
	iconBg: string;
	iconColor: string;
	title: string;
	description: string;
}

const SUPPORT_FEATURES: SupportFeature[] = [
	{
		icon: Truck,
		iconBg: "bg-black/5",
		iconColor: "text-black",
		title: "Pan India delivery & service",
		description: "Seamless start, complimentary expert guidance.",
	},
	{
		icon: Headphones,
		iconBg: "bg-black/5",
		iconColor: "text-black",
		title: "365 days customer support",
		description: "Uninterrupted support, every single day.",
	},
	{
		icon: ShieldCheck,
		iconBg: "bg-black/5",
		iconColor: "text-black",
		title: "Three year on-site warranty",
		description: "Ensuring peace of mind with every purchase.",
	},
];

export default function Support() {
	return (
		<div className="w-full flex flex-col py-20 gap-15">
			<div className="w-[70vw] flex flex-col items-center justify-center gap-4 mx-auto">
				<h1 className="text-5xl max-w-4xl text-center leading-none tracking-tight font-[sora]">Support That Goes Beyond the Board</h1>
				<p className="font-inter font-light text-lg leading-none text-center max-w-xl">From installation to everyday assistance, get dependable support whenever you need it.</p>
			</div>

			<div className="w-[60vw] flex items-center justify-center gap-10 [perspective:1200px] mx-auto">
				{SUPPORT_FEATURES.map((feature) => (
					<div
						key={feature.title}
						className="dynamic-border relative aspect-[4/5] w-[33%] bg-black/[0.06] backdrop-blur-xl backdrop-saturate-150 rounded-xl transition-transform duration-300 overflow-hidden flex flex-col items-center justify-center gap-6 px-8"
					>
						<div
							aria-hidden
							className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
							style={{ background: "#3b82f6" }}
						/>

						{/* bottom-right orange glow */}
						<div
							aria-hidden
							className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
							style={{ background: "#f97316" }}
						/>

						<span className={`relative h-30 w-30 rounded-full flex items-center justify-center shrink-0 ${feature.iconBg}`}>
							<feature.icon className={`h-15 w-15 ${feature.iconColor}`} strokeWidth={1.75} />
						</span>

						<div className="relative flex flex-col items-center gap-3 text-center">
							<p className="text-2xl font-[sora] leading-tight ">
								{feature.title}
							</p>
							<p className="text-base font-inter font-light leading-[1.2]">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}