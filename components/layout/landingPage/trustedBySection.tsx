import Orb from "@/components/Orb";
import { CustomerGrid } from "@/components/ui/grid/featuresGrid";
import { ImageMarquee } from "@/components/ui/marquee/imageMarquee";

export default function TrustedBySection() {
	return (
		<section className="w-full relative">
			<div className="max-w-[70vw] mx-auto flex flex-col justify-start py-2 gap-4 overflow-hidden pt-[6%]">
				<h1 className="text-2xl leading-[1.1] max-w-4xl text-left text-[#ede5df] font-inter">
					Trusted by Leading <br />
					<span className="text-zinc-400">Educational Institutions</span>
				</h1>
				<ImageMarquee />
			</div>
			{/*<CustomerGrid />*/}
		</section>
	);
}