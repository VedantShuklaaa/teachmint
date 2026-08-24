import type { ComponentType } from "react";
import LiveActivityChart from "@/components/ui/charts/barGraph";
import { RotatingAttendenceCharts, RotatingHollowChart } from "@/components/ui/charts/pieChartRotation";
import { GlowCard } from "@/components/ui/cards/glowCard";

type Corner = "tl" | "tr" | "bl" | "br";

interface AnalyticsCard {
	Chart: ComponentType;
	glowProps: {
		color?: string;
		gradient?: string;
		size: number;
		blur: number;
		opacity: number;
		corners?: Corner[];
		plusSize?: number;
		inset?: number;
		plusColor?: string;
	};
	title: string;
	description: string;
}

const ALL_CORNERS: Corner[] = ["tl", "tr", "bl", "br"];

const CARDS: AnalyticsCard[] = [
	{
		Chart: LiveActivityChart,
		glowProps: {
			color: "#6366f1",
			size: 420,
			blur: 100,
			opacity: 0.4,
			corners: ALL_CORNERS,
			plusSize: 20,
			inset: -9,
		},
		title: "Monitor Every Device",
		description:
			"Track device usage, activity, and performance across your entire learning environment from one centralized view.",
	},
	{
		Chart: RotatingHollowChart,
		glowProps: {
			gradient: "radial-gradient(circle, #f97316 0%, #ec4899 40%, transparent 70%)",
			size: 420,
			blur: 100,
			opacity: 0.4,
			corners: ALL_CORNERS,
			plusSize: 20,
			inset: -9,
		},
		title: "Understand Teacher Performance",
		description:
			"Monitor teacher activity, classroom engagement, and platform usage across subjects to identify trends and improve teaching outcomes.",
	},
	{
		Chart: RotatingAttendenceCharts,
		glowProps: {
			color: "#22c55e",
			size: 420,
			blur: 100,
			opacity: 0.4,
			corners: ALL_CORNERS,
			plusSize: 20,
			inset: -9,
		},
		title: "Measure Classroom Engagement",
		description:
			"Track student performance, attendance, homework, and classroom activity to understand engagement and support better learning outcomes.",
	},
];

export default function Analytics() {
	return (
		<div className="h-[90vh] w-full flex flex-col items-center justify-between">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-4xl text-center">
					Ensuring visibility across stakeholders
				</h1>
				<p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter font-extralight text-center">
					Track devices, teachers, and classrooms from one place to understand performance and identify opportunities for improvement.
				</p>
			</div>

			<div className="h-[70%] w-[70vw] flex items-center justify-center gap-4">
				{CARDS.map(({ Chart, glowProps, title, description }) => (
					<GlowCard
						key={title}
						className="h-full w-full border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm flex flex-col"
						{...glowProps}
					>
						<Chart />
						<div className="flex flex-col gap-1.5 p-5 pt-4 border-t border-white/10">
							<h3 className="text-2xl font-[times] text-[#ede5df] tracking-wide">{title}</h3>
							<p className="text-md text-zinc-400 font-inter font-light leading-[1.2]">{description}</p>
						</div>
					</GlowCard>
				))}
			</div>
		</div>
	);
}