import VisionXBenifits from "@/components/layout/products/visionx-classroom-management-system/benifitsCarousel";
import Hero from "@/components/layout/products/visionx-classroom-management-system/hero";
import SafetyFeatures from "@/components/layout/products/visionx-classroom-management-system/safetyFeatures";
import VisionXFAQ from "@/components/layout/products/visionx-classroom-management-system/visionXFAQ";
import VisionXFeatures from "@/components/layout/products/visionx-classroom-management-system/visionXFeatures";





export default function Page() {
	return (
		<div className="">
			<Hero />
			<VisionXFeatures />
			<VisionXBenifits />
			<SafetyFeatures />
			<VisionXFAQ />
		</div>
	)
}