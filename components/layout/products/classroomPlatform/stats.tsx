import BorderWrapper from "@/components/ui/cards/borderEffect";




export default function Stats() {
	return (
		<div className="h-[20vh] w-full">
			<div className="h-full w-[70vw] mx-auto flex items-center justify-between p-4 gap-4">
				<div className="h-full w-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1">
					<p className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-wider leading-none text-white font-[times]">20 million+</p>
					<p className="text-lg sm:text-lg text-zinc-300 max-w-2xl font-inter font-extralight leading-none">users served</p>
				</div>

				<div className="h-full w-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1">
					<p className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-wider leading-none text-white font-[times]">10+</p>
					<p className="text-lg sm:text-lg text-zinc-300 max-w-2xl font-inter font-extralight leading-none">countries</p>
				</div>

				<div className="h-full w-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1">
					<p className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-wider leading-none text-white font-[times]">17</p>
					<p className="text-lg sm:text-lg text-zinc-300 max-w-2xl font-inter font-extralight leading-none">language supported</p>
				</div>
			</div>
		</div>
	)
}