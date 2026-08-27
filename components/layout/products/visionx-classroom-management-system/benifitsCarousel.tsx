"use client";
import { Eye, MessageSquare, MessageSquareWarning, ShieldUser } from "lucide-react";
import Carousel from "@/components/ui/cards/carousel";
import { motion } from "motion/react";

const CONTAINER_DURATION = 1;

const ADMIN_FEATURES = [
	{
		icon: Eye,
		title: "Holistic Classroom Visibility",
		description:
			"Administrators can monitor classroom activity in real time, ensuring consistent teaching standards and a safe learning environment.",
	},
	{
		icon: MessageSquare,
		title: "Seamless Communication",
		description:
			"Deliver important announcements instantly to all or selected classrooms for faster, smoother coordination.",
	},
	{
		icon: MessageSquareWarning,
		title: "Track Every Announcement",
		description:
			"Logs every broadcast with delivery status and acknowledgements for clear, accountable communication.",
	},
	{
		icon: ShieldUser,
		title: "Privacy First",
		description:
			"Runs entirely on the local network, keeping classroom activity private and accessible only to authorized admins.",
	},
];

export default function VisionXBenifits() {
	return (
		<div className="flex flex-col items-center py-20 gap-15">
			<motion.h1
				initial={{ y: 60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: CONTAINER_DURATION,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="text-4xl tracking-tight leading-none text-black font-[sora] max-w-4xl text-center">
				Teach, Annotate, Engage: The Ultimate Interactive Whiteboard Experience
			</motion.h1>

			<Carousel
				items={ADMIN_FEATURES}
				maxVisible={ADMIN_FEATURES.length}
				className="!gap-0 !py-0"
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
		</div>
	);
}