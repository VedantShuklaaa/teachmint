import EducationFeatures from "@/components/layout/solutions/higherEducation/educationFeatures";
import EngagingLectures from "@/components/layout/solutions/higherEducation/engagingLectures";
import Hero from "@/components/layout/solutions/higherEducation/hero";
import TopColleges from "@/components/layout/solutions/higherEducation/topColleges";




export default function Page() {
	return (
		<div>
			<Hero />
			<TopColleges />
			<EngagingLectures />
			<EducationFeatures />
		</div>
	)
}