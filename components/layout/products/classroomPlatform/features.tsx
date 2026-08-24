import Image from "next/image";


export default function Features() {
	return (
		<div className="h-screen w-full flex flex-col items-center justify-center gap-4 p-4">
			<div className="h-[40%] w-[70%] flex mx-auto gap-4">
				<div className="h-full w-[40%] border border-white/10 rounded-xl overflow-hidden">

				</div>
				<div className="h-full w-[60%] border border-white/10 rounded-xl"></div>
			</div>

			<div className="h-[40%] w-[70%] flex mx-auto gap-4">
				<div className="h-full w-full border border-white/10 rounded-xl"></div>
				<div className="h-full w-full border border-white/10 rounded-xl"></div>
				<div className="h-full w-full border border-white/10 rounded-xl"></div>
			</div>
		</div>
	)
}