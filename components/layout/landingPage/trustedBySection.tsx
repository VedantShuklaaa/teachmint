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
					backgroundColor="#ffffff"
				/>
			</div>
			<div className="h-[40vh] w-[65vw] mx-auto flex flex-col justify-center py-2 mt-[14vh] gap-4 overflow-hidden">
				<h1 className="text-3xl leading-none max-w-4xl text-left">
					Trusted by Leading <br />
					<span className="text-zinc-500">Educational Institutions</span>
				</h1>
				<ImageMarquee />
			</div>
			<CustomerGrid />
		</section>
	);
}