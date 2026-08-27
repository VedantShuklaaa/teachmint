"use client";
import Image from "next/image";
import { ShieldCheck, RefreshCcw, MonitorCog, Mail, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

interface SupportItem {
	icon?: typeof ShieldCheck;
	badgeText?: string;
	title: string;
	description: string;
}

const SUPPORT_ITEMS: SupportItem[] = [
	{ icon: ShieldCheck, title: "Three year", description: "On-Site Warranty" },
	{ icon: RefreshCcw, title: "15-Day Replacement for", description: "hardware issues" },
	{ icon: MonitorCog, title: "Expert onboarding", description: "and training" },
	{ icon: Mail, title: "30-min email response", description: "for support queries" },
	{ icon: PhoneCall, title: "85% issues fixed on call", description: "within 6 hours" },
	{ badgeText: "CSAT", title: "95%+ CSAT", description: "trusted customer satisfaction" },
];


export default function SupportSection() {
	return (
		<div className="h-[50vh] w-[70vw] mx-auto flex flex-col items-center my-20 gap-15 rounded-3xl">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Ultimate Classroom Device for your classroom
			</motion.h1>

			<div className="flex w-full">
				<div className="h-full w-1/2 rounded-3xl relative overflow-hidden">
					<Image
						src="/products/dbt/supportBg.webp"
						alt="Teachmint - Support"
						fill
						className="object-cover scale-150"
					/>
				</div>
				<div className="h-full w-1/2 rounded-3xl grid grid-cols-2 grid-rows-3 place-items-center gap-x-12 gap-y-10 p-8">
					{SUPPORT_ITEMS.map((item, i) => (
						<div key={i} className="flex flex-col items-center gap-3 text-center">
							<span className="dynamic-border h-16 w-16 rounded-full bg-black/5 flex items-center justify-center shrink-0">
								{item.icon ? (
									<item.icon className="h-7 w-7 text-black" strokeWidth={2} />
								) : (
									<span className="text-black text-xs font-bold">{item.badgeText}</span>
								)}
							</span>
							<div className="flex flex-col gap-1">
								<p className="text-lg font-[sora] leading-none">{item.title}</p>
								<p className="text-lg font-[sora] leading-none">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}