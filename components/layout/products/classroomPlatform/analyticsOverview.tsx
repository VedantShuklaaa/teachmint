import ImageCarousel, { type ImageCarouselItem } from "@/components/ui/cards/imageCarousel";

const CARDS: ImageCarouselItem[] = [
	{
		src: "/products/classroomPlatform/classroomLevel.png",
		alt: "Teachmint - Classroom Platform",
		title: "Monitor Every Device",
		description: "Track device usage, activity, and performance across your entire learning environment from one centralized view, giving administrators real-time visibility and actionable insights.",
	},
	{
		src: "/products/classroomPlatform/teacherLevel2.png",
		alt: "Teachmint - K12",
		title: "Understand Teacher Performance",
		description: "Monitor teacher activity, classroom engagement, and platform usage across subjects to identify trends and improve teaching outcomes.",
	},
	{
		src: "/products/classroomPlatform/deviceLevel.png",
		alt: "Teachmint - K12",
		title: "Measure Classroom Engagement",
		description: "Track student performance, attendance, homework, and classroom activity to understand engagement and support better learning outcomes.",
	},
];

export default function Analytics() {
	return (
		<div className="w-full flex flex-col items-center py-20 gap-15">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl sm:text-5xl tracking-wider leading-none font-[sora] max-w-4xl text-center">
					Ensuring visibility across stakeholders
				</h1>
				<p className="text-lg sm:text-xl text-zinc-800 max-w-2xl font-inter font-light text-center leading-[1.2]">
					Track devices, teachers, and classrooms from one place to understand performance and identify opportunities for improvement.
				</p>
			</div>

			<ImageCarousel
				items={CARDS}
				maxVisible={4}
				cardWidth={320}
				imageHeight={200}
				gap={16}
				className="!py-0"
			/>
		</div>
	);
}