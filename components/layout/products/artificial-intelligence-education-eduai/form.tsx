"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button/button";

const CONTAINER_DURATION = 1;

const ROLES = ["Teacher", "Student", "School Admin", "principal", "School Owner", "Parent"];

export default function Form() {
	const [role, setRole] = useState("");

	return (
		<div className="w-[70vw] mx-auto py-20">
			<div className="rounded-3xl border border-black/10 bg-black/5 grid grid-cols-2 overflow-hidden">
				{/* left — heading */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="flex items-center p-16"
				>
					<h1 className="text-6xl font-bold leading-none font-[sora] tracking-tight">
						Are you using AI in classroom?
					</h1>
				</motion.div>

				{/* right — form */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col gap-6 p-16"
				>
					<div className="grid grid-cols-2 gap-6">
						<div className="flex flex-col gap-2">
							<label className="text-sm font-[sora]">Your Name</label>
							<input
								type="text"
								placeholder="Enter your name"
								className="h-14 rounded-lg bg-zinc-200 px-4 text-sm text-zinc-800 placeholder:text-zinc-500 font-inter outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-[sora]">Your School Name</label>
							<input
								type="text"
								placeholder="Enter your school name"
								className="h-14 rounded-lg bg-zinc-200 px-4 text-sm text-zinc-800 placeholder:text-zinc-500 font-inter outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-[sora]">Your phone number</label>
							<div className="h-14 rounded-lg bg-zinc-200 flex items-center px-4 gap-2 focus-within:ring-2 focus-within:ring-blue-500">
								<span className="text-sm text-zinc-700 font-inter shrink-0">🇮🇳 +91</span>
								<div className="h-6 w-px bg-zinc-400/50 shrink-0" />
								<input
									type="tel"
									placeholder="Mobile Number"
									className="flex-1 bg-transparent text-sm text-zinc-800 placeholder:text-zinc-500 font-inter outline-none"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-[sora]">Your role</label>
							<div className="relative">
								<select
									value={role}
									onChange={(e) => setRole(e.target.value)}
									className="h-14 w-full appearance-none rounded-lg bg-zinc-200 px-4 pr-10 text-sm font-inter outline-none focus:ring-2 focus:ring-blue-500 text-zinc-800"
								>
									<option value="" disabled hidden className="text-zinc-500">
										Select Role
									</option>
									{ROLES.map((r) => (
										<option key={r} value={r}>
											{r}
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<label className="text-sm font-[sora]">
							Share us how you use AI in your classroom?
						</label>
						<textarea
							placeholder="Type here"
							rows={5}
							className="resize-y rounded-lg bg-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-500 font-inter outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<Button variant="secondary" className="cursor-pointer">
						Submut
					</Button>
				</motion.div>
			</div>
		</div>
	);
}