"use client";
import Grainient from "@/components/ui/background/gradientBackground";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

export default function Login() {
	return (
		<div className="h-screen w-full p-15">
			<div className="h-full w-full rounded-[40px] p-5 flex border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.20)]">
				<div
					className="dynamic-border relative h-full w-[40%] rounded-4xl overflow-hidden"
				>
					<div className="absolute left-10 top-10 z-10">
						<Image 
						src="/teachmint-icon 2.svg"
						alt="Teachmint Logo"
						height={50}
						width={50}
						className=""
						/>
					</div>
					<div className="absolute h-full w-full z-9 blur-sm">
						<Grainient
							color1="#f7cff5"
							color2="#653fff"
							color3="#1da1f2"
							timeSpeed={1.7}
							colorBalance={0}
							warpStrength={0.8}
							warpFrequency={5}
							warpSpeed={2.6}
							warpAmplitude={50}
							blendAngle={90}
							blendSoftness={0.05}
							rotationAmount={500}
							noiseScale={2}
							grainAmount={0.2}
							grainScale={2}
							grainAnimated={false}
							contrast={1.5}
							gamma={1}
							saturation={1}
							centerX={0}
							centerY={0}
							zoom={0.9}
						/>
					</div>

					<div className="relative z-10 h-full w-full p-10 flex items-end">
						<motion.h1
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: CONTAINER_DURATION,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-4xl sm:text-5xl tracking-tight leading-none text-white font-bold font-[sora] max-w-4xl text-left mx-auto"
						>
							Where a Better Way of Teaching Begins.
						</motion.h1>
					</div>
				</div>
				<div className="h-full w-[60%] flex flex-col">


				</div>
			</div>
		</div>
	);
}