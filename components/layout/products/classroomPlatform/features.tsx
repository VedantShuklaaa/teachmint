import FeatureCard, { Feature } from "@/components/ui/cards/featureCards";


const CLICK_X_FEATURES: Feature[] = [
	{
		src: "/products/classroomPlatform/eduai1.png",
		alt: "Teachmint - Classroom Platform Image 1",
		title: "EduAI: Your intelligent and smart teaching assistant",
		bullets: [
			"Create teaching resources via voice and text.",
			"In-class support to enhance engagement.",
			"Ensure age-appropriate & safe search results.",
		],
	}, {
		src: "/products/classroomPlatform/teachpad.png",
		alt: "Teachmint - Classroom Platform Image 1",
		title: "All-in-one Interactive Whiteboard",
		bullets: [
			"Subject specific whiteboard.",
			"Cloud-synchronized whiteboard.",
			"Record, save & share whiteboard lessons.",
			"Custom template for specific subjects.",
		],
	},
]

export default function Features() {
	return (
		<div className="w-full flex flex-col items-center py-20 gap-15">
			<div className="w-[70vw] mx-auto flex flex-col gap-10">
				{CLICK_X_FEATURES.map((feature, i) => (
					<FeatureCard key={feature.title} feature={feature} imageOnRight={i % 2 === 1} />
				))}
			</div>
		</div>
	)
}