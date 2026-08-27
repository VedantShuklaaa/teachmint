"use client";
import Support from "@/components/layout/landingPage/support";
import Analytics from "@/components/layout/products/classroomPlatform/analyticsOverview";
import Features from "@/components/layout/products/classroomPlatform/features";
import ClassroomPlatformHero from "@/components/layout/products/classroomPlatform/hero";
import MoreFeatures from "@/components/layout/products/classroomPlatform/moreFeatures";
import InstituteSolutions from "@/components/layout/products/digitalBoardForTeaching/instituteSolutions";


export default function Page() {
	return (
		<div>
			<ClassroomPlatformHero />
			<InstituteSolutions />
			<Features />
			<MoreFeatures />
			<Analytics />
			<Support />
		</div>
	)
}