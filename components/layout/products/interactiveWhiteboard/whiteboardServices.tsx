import Image from "next/image";
import { Download, Save, Timer, Radio } from "lucide-react";
import { Button } from "@/components/ui/button/button";


export default function WhiteboardServices() {
	return (
		<div className="w-full flex flex-col py-20 gap-15">
			<div className="flex flex-col gap-2 w-[70%] mx-auto">
				<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Infinite Canvas, <br /> Limitless Lessons</h1>
			</div>

			<div className="flex flex-col w-[70%] mx-auto gap-2">
				<div className="flex h-100 w-full gap-2">
					<div className="h-full w-[30%] border border-black/10 bg-black/5 rounded-xl p-4 flex items-end relative backdrop-blur-sm">
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

						<p className="text-lg sm:text-2xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">Unleash Limitless Creativity with Infinite Canvas Whiteboard.</p>
					</div>
					<div className="h-full w-[70%] border border-black/10 rounded-xl p-2 flex flex-col bg-black/5 backdrop-blur-sm">
						<div className="h-[40%] w-full flex">
							<div className="h-full w-1/2 flex items-center gap-4 px-6">
								<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Download className="shrink-0 text-primary" size={28} /></span>
								<p className="text-lg sm:text-xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">
									Instantly generate QR & share lessons via Email & WhatsApp.
								</p>
							</div>

							<div className="h-full w-1/2 flex items-center gap-4 px-6">
								<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Save className="shrink-0 text-primary" size={28} /></span>
								<p className="text-lg sm:text-xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">
									Screen Record, save & share whiteboard sessions.
								</p>
							</div>
						</div>
						<div className="relative h-[60%] w-full rounded-xl overflow-hidden">
							<Image
								src="/products/IWB/canvas-image.jpg"
								alt="Teachmint - Canvas"
								fill
								sizes="35vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="flex h-100 w-full gap-2">
					<div className="h-full w-[70%] border border-black/10 rounded-xl p-2 flex bg-black/5 backdrop-blur-sm">
						<div className="h-full w-[60%] flex">
							<div className="h-full w-full flex flex-col items-start justify-center gap-4 px-6">
								<div className="flex gap-4">
									<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Radio className="shrink-0 text-primary" size={28} /></span>
									<p className="text-lg sm:text-xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">
										Real time live class streaming to connect with students.
									</p>
								</div>
								<Button variant="primary" size="md" className="cursor-pointer bg-black text-[#eee4de]">
									Know more
								</Button>
							</div>
						</div>
						<div className="relative h-full w-[40%] rounded-xl overflow-hidden">
							<Image
								src="/products/IWB/services4.jpg"
								alt="Teachmint - Canvas"
								fill
								sizes="35vw"
								className="object-cover"
							/>
						</div>
					</div>
					<div className="h-full w-[30%] border border-black/10 rounded-xl p-2 flex flex-col bg-black/5 backdrop-blur-sm">
						{/* Top 60% */}
						<div className="relative h-[70%] w-full overflow-hidden rounded-lg">
							<Image
								src="/products/IWB/quiz.png"
								alt="Description"
								fill
								className="object-cover"
							/>
						</div>

						{/* Bottom 40% — text area */}
						<div className="h-[30%] w-full gap-4 px-6 flex items-center">
							<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Timer className="shrink-0 text-primary" size={28} /></span>
							<p className="text-lg sm:text-xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">
								Launch polls & timers to increase classroom participation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}