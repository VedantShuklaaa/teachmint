import Educators from "@/components/layout/landingPage/educators";
import Hero from "@/components/layout/solutions/schools/hero";
import PremiumSchools from "@/components/layout/solutions/schools/premiumSchools";
import SchoolFeatures from "@/components/layout/solutions/schools/SchoolFeatures";
import StudentEngagement from "@/components/layout/solutions/schools/studentEngagement";




export default function Page() {
	return(
		<div>
			<Hero />
			<PremiumSchools />
			<StudentEngagement />
			<SchoolFeatures />
			<Educators />
		</div>
	)
}