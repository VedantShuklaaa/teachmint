import Download from "@/components/layout/products/shareX/download";
import Hero from "@/components/layout/products/shareX/hero";
import ShareXFAQ from "@/components/layout/products/shareX/shareFAQ";
import ShareXFeatures from "@/components/layout/products/shareX/shareXFeatues";
import HowItWorks from "@/components/layout/products/shareX/working";


export default function Page() {
	return (
		<div className="">
			<Hero />
			<ShareXFeatures />
			<HowItWorks />
			<Download />
			<ShareXFAQ />
		</div>
	)
}