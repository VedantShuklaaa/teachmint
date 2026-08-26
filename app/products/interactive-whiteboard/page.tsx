import Educators from "@/components/layout/landingPage/educators";
import Support from "@/components/layout/landingPage/support";
import EduAI from "@/components/layout/products/interactiveWhiteboard/eduAi";
import Hero from "@/components/layout/products/interactiveWhiteboard/hero";
import WhiteboardFeatures from "@/components/layout/products/interactiveWhiteboard/whiteboardFeatures";
import WhiteboardServices from "@/components/layout/products/interactiveWhiteboard/whiteboardServices";

export default function Page() {
	return(
		<div>
			<Hero />
			<WhiteboardFeatures />
			<EduAI />
			<WhiteboardServices />
			<Educators />
			<Support />
		</div>
	)
}