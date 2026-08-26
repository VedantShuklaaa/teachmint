import DeviceFeatures from "@/components/layout/products/clickXStudentClickersForClassroom/deviceFeatures";
import DeviceImages from "@/components/layout/products/clickXStudentClickersForClassroom/deviceImages";
import FAQ from "@/components/layout/products/clickXStudentClickersForClassroom/FAQ";
import Hero from "@/components/layout/products/clickXStudentClickersForClassroom/hero";
import DeviceTestimonial from "@/components/layout/products/clickXStudentClickersForClassroom/testimonial";



export default function Page() {
	return (
		<div className="">
			<Hero />
			<DeviceImages />
			<DeviceFeatures />
			<DeviceTestimonial />
			<FAQ />
		</div>
	)
}