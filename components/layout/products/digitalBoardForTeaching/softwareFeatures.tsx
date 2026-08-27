import { Button } from "@/components/ui/button/button";
import { CloudShader } from "@/components/ui/cloud-shader";
import { CalendarCheck, Cloud, Download, Radio, Save, Timer } from "lucide-react";
import Image from "next/image";





export default function SorftwareFeatures() {
	return (
		<div className="w-full flex flex-col py-20 gap-15">
			<div className="flex flex-col gap-2 w-[70%] mx-auto">
				<h1 className="text-4xl sm:text-5xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-left">Connected Classroom Software</h1>
			</div>

			<div className="flex flex-col w-[70%] mx-auto gap-2">
				<div className="flex h-100 w-full gap-2">
					<div className="h-full w-full border border-black/10 bg-black/5 rounded-xl  flex flex-col gap-1 relative backdrop-blur-sm overflow-hidden">
						<CloudShader className="absolute z-1"/>
						<div className="h-full w-full gap-4 px-8 py-2 flex flex-col items-center justify-center z-10">
							<span className="border rounded-xl border border-black/10 bg-black/5 p-2 backdrop-blur-sm"><Cloud className="shrink-0 text-black" size={100} /></span>
							<div className="w-full flex flex-col gap-1 justify-center items-center">
								<p className="text-lg sm:text-4xl max-w-2xl font-[sora] leading-none text-left">Cloud Storage</p>
								<p className="font-inter font-light leading-[1.2] text-center text-xl">Securely store and access classroom data anytime.</p>
							</div>
						</div>
					</div>

					<div className="h-full w-full border border-black/10 bg-black/5 rounded-xl p-2 flex flex-col relative backdrop-blur-sm">
						<div className="relative h-[70%] w-full rounded-xl overflow-hidden">
							<Image
								src="/products/dbt/attendance.webp"
								alt="Teachmint - Canvas"
								fill
								sizes="35vw"
								className="object-cover"
							/>
						</div>
						<div className="h-[30%] w-full gap-4 px-6 flex items-center">
							<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><CalendarCheck className="shrink-0 text-primary" size={28} /></span>
							<div className="w-full flex flex-col gap-1 justify-center">
								<p className="text-lg sm:text-2xl max-w-2xl font-[sora] leading-none text-left">Attendance</p>
								<p className="font-inter font-light leading-[1.2] text-left">Effortlessly track and manage student attendance.</p>
							</div>
						</div>
					</div>

					<div className="h-full w-full border border-black/10 bg-black/5 rounded-xl p-2 flex flex-col justify-end gap-1 relative backdrop-blur-sm">
						<div className="relative h-[70%] w-full rounded-xl overflow-hidden">
							<Image
								src="/products/dbt/performance.webp"
								alt="Teachmint - Canvas"
								fill
								sizes="35vw"
								className="object-cover"
							/>
						</div>
						<div className="h-[30%] w-full gap-4 px-6 flex items-center">
							<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Timer className="shrink-0 text-primary" size={28} /></span>
							<div className="w-full flex flex-col gap-1 justify-center">
								<p className="text-lg sm:text-2xl max-w-2xl font-[sora] leading-none text-left">Student Reports</p>
								<p className="font-inter font-light leading-[1.2] text-left">Generate detailed performance and progress reports.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex h-100 w-full gap-2">
					<div className="h-full w-[70%] border border-black/10 rounded-xl p-2 flex bg-black/5 backdrop-blur-sm">
						<div className="h-full w-[30%] flex">
							<div className="h-full w-full flex flex-col items-start justify-center gap-4 px-6">
								<div className="flex flex-col gap-2">
									<span className="border w-12 flex items-center justify-center rounded-xl border border-black/10 bg-black/5 p-2"><Radio className="shrink-0 text-primary" size={28} /></span>
									<p className="text-lg sm:text-2xl max-w-2xl font-[sora] leading-none text-left">Device-Level Tracking</p>
									<p className="text-lg sm:text-xl max-w-2xl font-[sora] leading-[1.1] font-light text-left">Monitor and manage devices in real time.</p>
								</div>
								<Button variant="primary" size="md" className="cursor-pointer bg-black text-[#eee4de]">
									Know more
								</Button>
							</div>
						</div>
						<div className="relative h-full w-[70%] rounded-xl overflow-hidden">
							<Image
								src="/products/dbt/tracking.webp"
								alt="Teachmint - Canvas"
								fill
								sizes="35vw"
								className="object-cover h-[70%]"
							/>
						</div>
					</div>
					<div className="h-full w-[30%] border border-black/10 rounded-xl p-2 flex flex-col bg-black/5 backdrop-blur-sm">
						{/* Top 60% */}
						<div className="relative h-[70%] w-full overflow-hidden rounded-lg">
							<Image
								src="/products/dbt/chats.webp"
								alt="Description"
								fill
								className="object-cover"
							/>
						</div>

						{/* Bottom 40% — text area */}
						<div className="h-[30%] w-full gap-4 px-6 flex items-center">
							<span className="border rounded-xl border border-black/10 bg-black/5 p-2"><Timer className="shrink-0 text-primary" size={28} /></span>
							<div className="w-full flex flex-col gap-1 justify-center">
								<p className="text-lg sm:text-2xl max-w-2xl font-[sora] leading-none text-left">Chats</p>
								<p className="font-inter font-light leading-[1.2] text-left">Enable seamless communication between teachers and students.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}