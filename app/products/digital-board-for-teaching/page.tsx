import EduAI from "@/components/layout/products/digitalBoardForTeaching/eduAi";
import Hero from "@/components/layout/products/digitalBoardForTeaching/hero";
import ProductOverview from "@/components/layout/products/digitalBoardForTeaching/ProductOverview";
import SorftwareFeatures from "@/components/layout/products/digitalBoardForTeaching/softwareFeatures";
import StylusDetails from "@/components/layout/products/digitalBoardForTeaching/stylusDetails";
import DigitalBoardFeatures from "@/components/layout/products/digitalBoardForTeaching/digitalBoardFeatures";
import WhiteboardFunction from "@/components/layout/products/digitalBoardForTeaching/whiteboardFunctions";
import HardwareFeatures from "@/components/layout/products/digitalBoardForTeaching/hardwareFeatures";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import Educators from "@/components/layout/landingPage/educators";
import DigitalBoardFAQ from "@/components/layout/products/digitalBoardForTeaching/digitalBoardFAQ";
import InstituteSolutions from "@/components/layout/products/digitalBoardForTeaching/instituteSolutions";
import ClassroomDevices from "@/components/layout/products/digitalBoardForTeaching/classroomDevices";
import EDLA from "@/components/layout/products/digitalBoardForTeaching/edla";
import SupportSection from "@/components/layout/products/digitalBoardForTeaching/supportSection";



export default function Page() {
	return (
		<div className="">
			<Hero />
			<ProductOverview />
			<DigitalBoardFeatures />
			<StylusDetails />
			<WhiteboardFunction />
			<EduAI />
			<SorftwareFeatures />
			<HardwareFeatures />
			<EDLA />
			<TrustedBySection />
			<ClassroomDevices />
			<SupportSection />
			<Educators />
			<InstituteSolutions />
			<DigitalBoardFAQ />
		</div>
	)
}