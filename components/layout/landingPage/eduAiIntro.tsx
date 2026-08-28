"use client";
import { IconGridItem, IconGridSupport } from "@/components/ui/cards/iconGrid";
import { AlignLeft, Video, NotebookPen, Sigma, Mic, MonitorPlay } from "lucide-react";

const EDUAI_ITEMS: IconGridItem[] = [
	{ icon: AlignLeft, title: "Explanation", description: "Clear concept breakdowns" },
	{ icon: Video, title: "Images/Videos", description: "Visual teaching resources" },
	{ icon: NotebookPen, title: "Summarize Lecture", description: "Instant lecture recaps" },
	{ icon: Sigma, title: "Mathematics Solver", description: "Step-by-step solutions" },
	{ badgeText: "Qz", title: "Quiz Creation", description: "Auto-generated quizzes" },
	{ badgeText: "Hw", title: "Homework Generation", description: "Custom assignments" },
];

export default function EduAiIntro() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15">
			<IconGridSupport
				heading="Your intelligent, safe and smart teaching assistant"
				imageSrc="/hero/eduAiVideo.webm"
				imageAlt="Teachmint - EduAI teaching assistant demo"
				isVideo
				items={EDUAI_ITEMS}
			/>
		</div>
	);
}