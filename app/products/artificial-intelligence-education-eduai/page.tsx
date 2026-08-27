import Educators from "@/components/layout/landingPage/educators";
import Support from "@/components/layout/landingPage/support";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import FeatureCarousel from "@/components/layout/products/artificial-intelligence-education-eduai/AIFeatures";
import AIServices from "@/components/layout/products/artificial-intelligence-education-eduai/AIServices";
import Form from "@/components/layout/products/artificial-intelligence-education-eduai/form";
import Hero from "@/components/layout/products/artificial-intelligence-education-eduai/hero";




export default function Page() {
	return (
		<div className="">
			<Hero />
			<FeatureCarousel />
			<TrustedBySection />
			<AIServices />
			<Educators />
			<Form />
			<Support />
		</div>
	)
}