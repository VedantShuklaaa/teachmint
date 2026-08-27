"use client";
import { Button } from "@/components/ui/button/button";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

interface ClassroomDevice {
	src: string;
	alt: string;
	sizeLabel: string;
	price: string;
	buyUrl: string;
}

const CLASSROOM_DEVICES: ClassroomDevice[] = [
	{
		src: "/devices/teachmintX2-75.webp",
		alt: "Teachmint X2 75 inch classroom device",
		sizeLabel: "Classroom Device 75 Inch (1.89 m)",
		price: "1,80,000 INR",
		buyUrl: "/buy/x2-75",
	},
	{
		src: "/devices/teachmintX2-86.webp",
		alt: "Teachmint X2 86 inch classroom device",
		sizeLabel: "Classroom Device 86 Inch (2.17 m)",
		price: "2,10,000 INR",
		buyUrl: "/buy/x2-86",
	},
];

export default function ClassroomDevices() {
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
				Ultimate Classroom Device for your classroom
			</motion.h1>

			<div className="h-170 w-[80%] flex gap-10">
				{CLASSROOM_DEVICES.map((device, i) => (
					<div
						key={device.buyUrl}
						className={`${i === 1 ? "dynamic-border bg-black/5" : ""} h-full w-1/2 p-1 rounded-xl flex flex-col items-center overflow-hidden gap-5`}
					>
						<div className="relative h-[60%] w-full">
							<Image src={device.src} alt={device.alt} fill className="object-contain" />
						</div>

						<div className="flex flex-col items-center gap-1 pt-6">
							<p className="text-xl sm:text-2xl font-[sora] text-black text-center">{device.sizeLabel}</p>
							<p className="text-lg sm:text-xl font-[sora] text-zinc-700 text-center">
								Price - {device.price}
							</p>
						</div>

						<Button
							variant="primary"
							size="lg"
							className="bg-black"
						>
							Buy Now
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}