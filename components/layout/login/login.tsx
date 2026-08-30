"use client";
import { useState } from "react";
import Grainient from "@/components/ui/background/gradientBackground";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Mail, Phone, ChevronDown } from "lucide-react";
import TransitionLink from "@/components/ui/links/transitionLink";

const CONTAINER_DURATION = 1;

export default function Login() {
	const [mode, setMode] = useState<"phone" | "email">("phone");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [acceptedTerms, setAcceptedTerms] = useState(true);

	const isValid =
		mode === "phone" ? phone.length === 10 : /^\S+@\S+\.\S+$/.test(email);

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
				<div className="h-full w-[60%] flex flex-col py-30 px-60">
					<div className="h-full w-full flex flex-col justify-center relative px-5">
						<div className="absolute left-5 top-5 z-10">
							<Image
								src="/teachmint-icon 2.svg"
								alt="Teachmint Logo"
								height={40}
								width={40}
								className=""
							/>
						</div>

						<div className="flex flex-col gap-2 z-20">
							<motion.h1
								initial={{ y: 60, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									duration: 0.8,
									delay: CONTAINER_DURATION,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-xl text-left"
							>
								Welcome back
							</motion.h1>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.8,
									delay: CONTAINER_DURATION + 0.7,
									ease: "easeOut",
								}}
								className="text-lg sm:text-xl text-zinc-700 max-w-2xl font-inter font-light text-left leading-[1.1]">
								Sign in to continue teaching, learning, and managing everything in one place.
							</motion.p>

							<motion.div
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									duration: 0.8,
									delay: CONTAINER_DURATION + 1.1,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="flex flex-col gap-5 mt-8 w-full items-center mx-auto"
							>
								<div className="flex flex-col gap-2 w-full">
									<label className="text-sm font-medium text-zinc-700">
										{mode === "phone" ? "What's your mobile number?" : "What's your email?"}
									</label>

									<AnimatePresence mode="wait" initial={false}>
										{mode === "phone" ? (
											<motion.div
												key="phone"
												initial={{ opacity: 0, y: 6 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -6 }}
												transition={{ duration: 0.25, ease: "easeOut" }}
												className="flex items-center gap-3 w-full rounded-xl border border-blue-400 bg-blue-50/60 px-4 py-3 focus-within:ring-2 focus-within:ring-blue-300"
											>
												<button
													type="button"
													className="flex items-center gap-1 text-base font-medium text-zinc-800 shrink-0"
												>
													<span className="text-lg leading-none">🇮🇳</span>
													+91
													<ChevronDown className="w-4 h-4 text-zinc-500" />
												</button>
												<div className="w-px h-5 bg-zinc-300" />
												<input
													type="tel"
													inputMode="numeric"
													maxLength={10}
													value={phone}
													onChange={(e) =>
														setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
													}
													placeholder="Enter mobile number"
													className="flex-1 bg-transparent outline-none text-base placeholder:text-zinc-400"
												/>
											</motion.div>
										) : (
											<motion.div
												key="email"
												initial={{ opacity: 0, y: 6 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -6 }}
												transition={{ duration: 0.25, ease: "easeOut" }}
												className="rounded-xl border border-blue-400 bg-blue-50/60 px-4 py-3 focus-within:ring-2 focus-within:ring-blue-300"
											>
												<input
													type="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													placeholder="Enter email address"
													className="w-full bg-transparent outline-none text-base placeholder:text-zinc-400"
												/>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<button
									type="button"
									disabled={!isValid || !acceptedTerms}
									className="w-full rounded-xl py-3 font-medium text-base transition-colors disabled:bg-zinc-200 disabled:text-zinc-400 bg-blue-600 text-white enabled:hover:bg-blue-700"
								>
									Get OTP
								</button>

								<div className="flex items-center gap-4">
									<div className="h-px flex-1 bg-zinc-200" />
									<span className="text-xs text-zinc-500 whitespace-nowrap">
										or continue with
									</span>
									<div className="h-px flex-1 bg-zinc-200" />
								</div>

								<div className="flex items-center gap-3">
									<button
										type="button"
										onClick={() => setMode(mode === "phone" ? "email" : "phone")}
										className="h-14 w-14 rounded-xl border border-zinc-200 flex items-center cursor-pointer justify-center hover:bg-zinc-50 transition-colors"
										aria-label={mode === "phone" ? "Continue with email" : "Continue with phone"}
									>
										{mode === "phone" ? (
											<Mail className="w-5 h-5 text-zinc-700" />
										) : (
											<Phone className="w-5 h-5 text-zinc-700" />
										)}
									</button>
									<button
										type="button"
										className="h-14 w-14 rounded-xl border border-zinc-200 flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors"
										aria-label="Continue with Google"
									>
										<svg className="w-5 h-5" viewBox="0 0 24 24">
											<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
											<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
											<path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
											<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
										</svg>
									</button>
								</div>

								<label className="flex items-center gap-2 text-sm text-zinc-600">
									<input
										type="checkbox"
										checked={acceptedTerms}
										onChange={(e) => setAcceptedTerms(e.target.checked)}
										className="h-4 w-4 rounded accent-blue-600"
									/>
									I accept the{" "}
									<TransitionLink href="/terms" className="text-blue-600 font-medium underline cursor-pointer">
										T&C
									</TransitionLink>{" "}
									&{" "}
									<TransitionLink href="/privacy" className="text-blue-600 font-medium underline cursor-pointer">
										Privacy Policy
									</TransitionLink>
								</label>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}