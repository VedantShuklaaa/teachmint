import Coaching from "@/components/layout/solutions/coachingInstitutes/coaching";
import Hero from "@/components/layout/solutions/coachingInstitutes/hero";
import IncreaseYourRevenue from "@/components/layout/solutions/coachingInstitutes/increaseYourRevenue";
import TopCoachingInstitutes from "@/components/layout/solutions/coachingInstitutes/topCoachingInstitutes";




export default function Page() {
	return (
		<div>
			<Hero />
			<TopCoachingInstitutes />
			<IncreaseYourRevenue />
			<Coaching />
		</div>
	)
}