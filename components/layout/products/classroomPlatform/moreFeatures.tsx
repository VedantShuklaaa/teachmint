"use client";
import { SafetyFeature, SafetyFeatureCard } from "../visionx-classroom-management-system/safetyFeatures";


const MORE_FEATURES: SafetyFeature[] = [
	{
		src: "/products/classroomPlatform/heroVideo2.webm",
		alt: "Pre-plan your lessons to maximize instructional efficiency",
		isVideo: true,
		items: [
			{
				title: "Pre-plan your lessons to maximize instructional efficiency",
			}, {
				description: "Plan lessons across diverse teaching resources",
			}, {
				description: "Cloud access to store teaching materials.",
			}, {
				description: "Create custom assessments & homework.",
			}, {
				description: "Effortlessly schedule live classes.",
			},
		],
	
	}, {
		src: "/products/classroomPlatform/heroVideo3.webm",
		alt: "Make the classroom more engaging & effective",
		isVideo: true,
		items: [
			{
				title: "Make the classroom more engaging & effective",
			}, {
				description: "EduAI: AI-Powered teaching assistant.",
			}, {
				description: "Edit, publish & share classroom teachings.",
			}, {
				description: "Inbuilt smart classroom tools for teachers",
			}, {
				description: "Digital Attendance, Live class & much more.",
			},
		],
	}, {
		src: "/products/classroomPlatform/heroVideo4.webm",
		alt: "Learning that goes beyond the classroom",
		isVideo: true,
		items: [
			{
				title: "Learning that goes beyond the classroom",
			}, {
				description: "Assign and analyze tests and homework.",
			}, {
				description: "Effortless Task Management & student reports.",
			}, {
				description: "Connect and communicate via Chat or Notices.",
			}, {
				description: "Seamless sharing of class notes & recording.",
			},
		],
	},
];

export default function MoreFeatures() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			{MORE_FEATURES.map((feature, i) => (
				<SafetyFeatureCard key={feature.alt} feature={feature}  imageOnRight={i % 2 !== 0} />
			))}
		</div>
	);
}