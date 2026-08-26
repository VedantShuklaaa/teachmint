'use client';
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

export default function DeviceImages() {
	return (
		<div className="w-[70vw] mx-auto py-20 gap-15 flex flex-col items-center">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Watch Click X in Action
			</motion.h1>

			<div className="w-full flex justify-center gap-5">
				<div className="h-160 w-[35%] rounded-xl border border-black/10 bg-black flex flex-col relative">
					<div
						aria-hidden
						className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
						style={{ background: "#3b82f6" }}
					/>

					<div className="h-1/2 w-full flex flex-col gap-5">
						<div className="h-[35%] w-full relative">
							<Image
								src="/products/clickX/clickxLogo.svg"
								alt="Teachmint - Click X Logo"
								fill
								className="object-cover"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<motion.h1
								initial={{ y: 60, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									duration: 0.8,
									delay: CONTAINER_DURATION,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="text-5xl tracking-tight leading-none text-primary font-[sora] max-w-4xl text-start">
								Bring AI to Every Student
							</motion.h1>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.8,
									delay: CONTAINER_DURATION + 0.7,
									ease: "easeOut",
								}}
								className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-inter leading-[1.2] font-light text-start">
								Deliver AI-powered learning to every student with the Click X student response system.
							</motion.p>
						</div>
					</div>

					<div className="h-1/2 w-full relative overflow-hidden">
						<Image
							src="/products/clickX/clickX1.webp"
							alt="Teachmint - Click X"
							fill
							className="overflow-hidden rounded-xl"
						/>
					</div>
				</div>
				<div className="h-160 w-[35%] rounded-xl bg-black/5 relative">
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

					<Image
						src="/products/clickX/clickX2.webp"
						alt="Teachmint - Click X"
						fill
						className="object-cover rounded-xl"
					/>
				</div>
			</div>
		</div>
	)
}