"use client";
import { motion } from "motion/react";
import Image from "next/image";

const CONTAINER_DURATION = 1;

export default function TeachmintDigitalBoard() {
	return (
		<div className="dynamic-border w-[70vw] mx-auto flex flex-col items-center py-20 gap-15 rounded-3xl relative overflow-hidden">
			<Image
				src="/texture/texture.jpg"
				alt="Texture"
				fill
				priority
				className="object-cover opacity-[0.06] pointer-events-none mix-blend-multiply"
			/>

			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
				style={{ background: "#3b82f6" }}
			/>

			{/* bottom-right orange glow */}
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30"
				style={{ background: "#f97316" }}
			/>


			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-5xl text-center">
				Teachmint X Digital Board for Teaching
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION + 0.7,
					ease: "easeOut",
				}}
				className="text-lg sm:text-xl text-zinc-700 max-w-4xl font-inter font-light text-center leading-[1.2]">
				Transform your classroom into an interactive and collaborative space with the Teachmint X Digital board. This digital board, designed exclusively for teaching, enhances student engagement and classroom participation. With features designed for any educational setting, including schools, colleges, or coaching centers, this digital board for classroom aims to create the best learning experiences for students. Developed with cutting-edge hardware and advanced software, this digital board for teaching is ideal for educational purposes.
			</motion.p>

		</div>
	)
}