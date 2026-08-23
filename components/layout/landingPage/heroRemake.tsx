"use client";
import GradientBlinds from "@/components/ui/background/gradientBlinds";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

const CERTIFICATIONS = [
	{ src: "/certifications/edla.png", alt: "GOOGLE EDLA certification" },
	{ src: "/certifications/cloud.png", alt: "GOOGLE Cloud certification" },
	{ src: "/certifications/ce.png", alt: "CE certification" },
	{ src: "/certifications/fc.png", alt: "FC certification" },
	{ src: "/certifications/iso.png", alt: "ISO certification" },
];

const certContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15, delayChildren: CONTAINER_DURATION + 0.7 },
	},
};

const certItem = {
	hidden: { y: 40, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function Hero() {
	return (
		<section className="relative flex flex-col w-full min-h-[80vh] overflow-hidden">
			<GradientBlinds
				className="absolute inset-1 -z-10"
				gradientColors={['#FF9FFC', '#1ea1f2']}
				angle={20}
				noise={0.5}
				blindCount={16}
				blindMinWidth={60}
				spotlightRadius={0.5}
				spotlightSoftness={1}
				spotlightOpacity={1}
				mouseDampening={0.15}
				distortAmount={0}
				shineDirection="left"
				mixBlendMode="lighten"
			/>

			<div className="h-[80vh] w-full flex flex-col items-center justify-end text-center gap-15 px-[5%] relative">
				<div className="flex flex-col items-center gap-6 py-[5rem]">
					<div className="flex flex-col items-center">
						<motion.h1
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-none text-[#ede5df] font-[times] max-w-5xl"
						>
							<span className="bg-gradient-to-r from-[#ea4335] via-[#fbbc05] via-[#34a853] to-[#4285f4] bg-clip-text text-transparent">
								Google
							</span>{" "}
							EDLA Certified AI-Powered Connected Classroom Device
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION + 0.7,
								ease: "easeOut",
							}}
							className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter"
						>
							Transform teaching and learning with our all-in-one Interactive
							Whiteboard, which leverages AI &amp; Cloud.
						</motion.p>
					</div>

					<motion.div
						initial={{ y: -60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.7,
							delay: CONTAINER_DURATION + 1.4,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="flex gap-3"
					>
						<Button variant="secondary" size="lg" className="cursor-pointer backdrop-blur-sm">
							Get Started
						</Button>
						<Button variant="primary" size="lg" className="cursor-pointer">
							Watch Demo
						</Button>
					</motion.div>
				</div>

				<motion.div
					variants={certContainer}
					initial="hidden"
					animate="visible"
					className="flex gap-4"
				>
					{CERTIFICATIONS.map((cert) => (
						<motion.div
							key={cert.src}
							variants={certItem}
							className="h-20 w-20 relative shrink-0"
						>
							<Image
								src={cert.src}
								alt={cert.alt}
								fill
								className="object-contain bg-transparent"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}