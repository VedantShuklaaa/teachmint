import Educators from "@/components/layout/landingPage/educators";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import InstituteSolutions from "@/components/layout/products/digitalBoardForTeaching/instituteSolutions";
import Hero from "@/components/layout/solutions/digitalBoardForTeaching/hero";
import SeamlessFeatures from "@/components/layout/solutions/digitalBoardForTeaching/seamlessFeatures";
import SoftwareFeatures from "@/components/layout/solutions/digitalBoardForTeaching/softwareFeatures";
import TeachmintDigitalBoard from "@/components/layout/solutions/digitalBoardForTeaching/teachmintDigitalBoard";
import ThreeCards from "@/components/layout/solutions/digitalBoardForTeaching/threeCards";





export default function Page() {
	return (
		<div>
			<Hero />
			<TrustedBySection />
			<TeachmintDigitalBoard />
			<ThreeCards />
			<SeamlessFeatures />
			<SoftwareFeatures />
			<InstituteSolutions />
			<Educators />
		</div>
	)
}