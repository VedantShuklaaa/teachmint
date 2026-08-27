"use client";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

interface GoogleFeature {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description?: string;
}

const GOOGLE_FEATURES: GoogleFeature[] = [
	{
		imageSrc: "/products/dbt/edla/google.svg",
		imageAlt: "EDLA Certified",
		title: "Google EDLA",
		description: "CERTIFIED",
	},
	{
		imageSrc: "/products/dbt/edla/playstore.svg",
		imageAlt: "Google Play logo",
		title: "Google Play",
		description: "Access your favorite apps directly on the X2 Board",
	},
	{
		imageSrc: "/products/dbt/edla/android.svg",
		imageAlt: "Android logo",
		title: "Google Android 16",
		description: "Latest & authentic experience",
	},
	{
		imageSrc: "/products/dbt/edla/google-apps.svg",
		imageAlt: "Google Docs Editor suite icons",
		title: "Google Docs Editor",
		description: "Open files directly from your X2 board using any Google Docs Editor",
	},
	{
		imageSrc: "/products/dbt/edla/google-essentials.svg",
		imageAlt: "System apps icons",
		title: "System Apps",
		description: "Pre-installed on X2 series",
	},
	{
		imageSrc: "/products/dbt/edla/play-protect.svg",
		imageAlt: "Google Play Protect shield",
		title: "Google Play Protect",
		description: "Experience Enhanced Security",
	},
];

export default function EDLA() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Google EDLA Certified
			</motion.h1>

			<div className="w-full grid grid-cols-3 grid-rows-2 gap-10 p-2">
				{GOOGLE_FEATURES.map((feature, i) => (
					<div key={i} className="h-40 w-full rounded-xl border border-black/10 bg-black/5 flex flex-col items-center justify-center gap-2 p-4">
						<div className="relative h-20 w-20">
							<Image src={feature.imageSrc} alt={feature.imageAlt} fill className="object-contain" />
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-[sora] text-xl text-center leading-none">{feature.title}</p>
							{feature.description && <p className="text-md font-inter text-center leading-none">{feature.description}</p>}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}