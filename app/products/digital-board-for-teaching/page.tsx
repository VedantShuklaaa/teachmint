import EduAI from "@/components/layout/products/digitalBoardForTeaching/eduAi";
import Hero from "@/components/layout/products/digitalBoardForTeaching/hero";
import ProductOverview from "@/components/layout/products/digitalBoardForTeaching/ProductOverview";
import StylusDetails from "@/components/layout/products/digitalBoardForTeaching/stylusDetails";
import WhiteboardFeatures from "@/components/layout/products/digitalBoardForTeaching/whiteboardFeatures";
import WhiteboardFunction from "@/components/layout/products/digitalBoardForTeaching/whiteboardFunctions";



export default function Page() {
	return (
		<div className="">
			<Hero />
			<ProductOverview />
			<WhiteboardFeatures />
			<StylusDetails />
			<WhiteboardFunction />
			<EduAI />
		</div>
	)
}