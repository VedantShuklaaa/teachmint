"use client";
import { FunctionSquare, FileText, Newspaper, ClipboardCheck, ClipboardList, ShieldCheck, MonitorPlay, type LucideIcon } from "lucide-react";
import Carousel from "@/components/ui/cards/carousel";

interface AIFeature {
	icon: LucideIcon;
	title: string;
	description: string;
}

const AI_FEATURES: AIFeature[] = [
	{ icon: FunctionSquare, title: "Smart Math Solver", description: "Write equations on the whiteboard, and EduAI will instantly solve them." },
	{ icon: FileText, title: "Generate PPTs", description: "Create engaging AI-powered PPTs with a simple voice command or text input." },
	{ icon: Newspaper, title: "Create Lesson Plans", description: "Effortlessly create engaging Lesson Plans for Diverse Subjects and Classrooms." },
	{ icon: ClipboardCheck, title: "Generate Assessments", description: "Instantly generate tailored classroom assessments & in class quizzes." },
	{ icon: ClipboardList, title: "Generate Homework", description: "Seamlessly create and assign homework for your classroom with ease." },
	{ icon: ShieldCheck, title: "Safe Search", description: "Ensure age-appropriate, and academic focused results." },
	{ icon: MonitorPlay, title: "Summarize Lecture", description: "Generates page-wise and overall topic summaries of lessons." },
];

export default function FeatureSection() {
	return (
		<Carousel
			items={AI_FEATURES}
			renderItem={({ icon: Icon, title, description }) => (
				<div className="h-50 w-80 border border-black/10 rounded-xl bg-black/5 p-6 flex flex-col gap-4 relative">
					<span className="h-14 w-14 rounded-full flex items-center justify-center">
						<Icon className="h-7 w-7" strokeWidth={2} />
					</span>
					<div className="flex flex-col gap-1">
						<h3 className="text-xl font-[sora]">{title}</h3>
						<p className="text-sm text-zinc-800 font-inter font-light leading-[1.2]">{description}</p>
					</div>
				</div>
			)}
		/>
	);
}