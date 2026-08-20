import Orb from "@/components/Orb";
import { CustomerGrid } from "@/components/ui/grid/featuresGrid";
import { ImageMarquee } from "@/components/ui/marquee/imageMarquee";

export default function TrustedBySection() {
	return (
		<section className="h-screen w-full relative">
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<Orb
					hue={210}
					hoverIntensity={2}
					rotateOnHover
					forceHoverState={false}
					backgroundColor="#000000"
				/>
			</div>
			<div className="w-[65vw] mx-auto flex flex-col justify-start py-2 gap-4 overflow-hidden">
				<h1 className="text-xl leading-[1.1] max-w-4xl text-left">
					Trusted by Leading <br />
					<span className="text-zinc-600">Educational Institutions</span>
				</h1>
				<ImageMarquee />
			</div>
			<CustomerGrid />
		</section>
	);
}