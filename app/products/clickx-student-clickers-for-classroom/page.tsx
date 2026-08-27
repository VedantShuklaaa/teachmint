import DeviceFeatures from "@/components/layout/products/clickXStudentClickersForClassroom/deviceFeatures";
import DeviceImages from "@/components/layout/products/clickXStudentClickersForClassroom/deviceImages";
import ClickXFAQ from "@/components/layout/products/clickXStudentClickersForClassroom/clickXFAQ";
import Hero from "@/components/layout/products/clickXStudentClickersForClassroom/hero";
import DeviceTestimonial from "@/components/layout/products/clickXStudentClickersForClassroom/testimonial";



export default function Page() {
	return (
		<div className="">
			<Hero />
			<DeviceImages />
			<DeviceFeatures />
			<DeviceTestimonial />
			<ClickXFAQ />
		</div>
	)
}