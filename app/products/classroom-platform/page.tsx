"use client";
import Support from "@/components/layout/landingPage/support";
import Analytics from "@/components/layout/products/classroomPlatform/analyticsOverview";
import Features from "@/components/layout/products/classroomPlatform/features";
import ClassroomPlatformHero from "@/components/layout/products/classroomPlatform/hero";
import Stats from "@/components/layout/products/classroomPlatform/stats";


export default function Page() {
	return (
		<div>
			<ClassroomPlatformHero />
			<Stats />
			<Features />
			<Analytics />
			<Support />
		</div>
	)
}