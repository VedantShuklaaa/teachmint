import Image from "next/image";

export interface Feature {
	src: string;
	alt: string;
	title: string;
	description?: string;
	bullets: string[];
}


export default function FeatureCard({ feature, imageOnRight }: { feature: Feature; imageOnRight: boolean }) {
	return (
		<div className="dynamic-border h-130 w-full rounded-2xl bg-black/5 flex overflow-hidden relative">
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

			{!imageOnRight && (
				<div className="h-full w-1/2 relative">
					<Image src={feature.src} alt={feature.alt} fill className="object-cover" />
				</div>
			)}

			<div className="h-full w-1/2 flex flex-col justify-center p-2 gap-10">
				<div className="flex flex-col gap-1">
					<p className="text-4xl tracking-tight leading-none font-[sora] max-w-3xl text-left">
						{feature.title}
					</p>
					<p className="text-lg sm:text-xl text-zinc-700 max-w-2xl leading-[1.2] font-inter font-light text-left">
						{feature.description}
					</p>
				</div>

				<div className="flex flex-col gap-4 leading-[1.1] font-extralight font-inter text-lg">
					{feature.bullets.map((bullet) => (
						<div key={bullet} className="flex items-start gap-2">
							<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
							<p>{bullet}</p>
						</div>
					))}
				</div>
			</div>

			{imageOnRight && (
				<div className="h-full w-1/2 relative">
					<Image src={feature.src} alt={feature.alt} fill className="object-cover" />
				</div>
			)}
		</div>
	);
}
