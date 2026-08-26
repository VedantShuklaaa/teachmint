import { CastIcon } from "@/components/ui/icons/cast";
import { EyeIcon } from "@/components/ui/icons/eye";
import { ClipboardCheckIcon } from "@/components/ui/icons/clipboard";
import { PenToolIcon } from "@/components/ui/icons/pen";
import { BookTextIcon } from "@/components/ui/icons/book";
import { GalleryThumbnailsIcon } from "@/components/ui/icons/tv";
import { SparklesIcon } from "@/components/ui/icons/sparkles";
import { GraduationCapIcon } from "@/components/ui/icons/graduationCap";
import { UserIcon } from "@/components/ui/icons/user";

export interface IconItemBase {
	href: string;
	title: string;
	description?: string;
}

export interface IconItem extends IconItemBase {
	kind: "icon";
	icon: React.ElementType;
}

export interface ImageItem extends IconItemBase {
	kind: "image";
	image: string;
}

export type NavItem = IconItem | ImageItem;

const productItems: NavItem[] = [
	{ kind: "icon", href: "/products/digital-board-for-teaching", title: "Digital Board for Teaching", description: "AI-Powered Digital Board for Educators.", icon: GalleryThumbnailsIcon },
	{ kind: "icon", href: "/products/eduai", title: "EduAI", description: "AI-Powered smart and intelligent personal teaching assistant.", icon: SparklesIcon },
	{ kind: "icon", href: "/products/interactive-whiteboard", title: "Interactive Whiteboard", description: "Elevate Teaching & Learning with Teachmint X Interactive Whiteboard.", icon: PenToolIcon },
	{ kind: "icon", href: "/products/visionx", title: "VisionX", description: "Real-time Classroom Monitoring System", icon: EyeIcon },
	{ kind: "icon", href: "/products/clickx-student-clickers-for-classroom", title: "Click X", description: "Bring AI to Every Student", icon: ClipboardCheckIcon },
	{ kind: "icon", href: "/products/sharex", title: "ShareX", description: "Screen Sharing for Classrooms", icon: CastIcon },
];

const deviceItems: NavItem[] = [
	{ kind: "image", href: "/devices/x2-75", title: 'Teachmint X2 75" (1.90 m) Digital Board for Teaching', image: "/devices/teachmintX2-75.webp" },
	{ kind: "image", href: "/devices/x2-86", title: 'Teachmint X2 86" (2.18 m) Digital Board for Teaching', image: "/devices/teachmintX2-86.webp" },
];

const solutionItems: NavItem[] = [
	{ kind: "icon", href: "/solutions/schools", title: "Schools", description: "Online, hybrid, or in-person, X is for every possible learning environment.", icon: BookTextIcon },
	{ kind: "icon", href: "/solutions/higher-education", title: "Higher Education", description: "Help lecturers and teaching professionals to deliver educational excellence.", icon: GraduationCapIcon },
	{ kind: "icon", href: "/solutions/coaching", title: "Coaching", description: "Level up your teaching with our Classroom Platform.", icon: UserIcon },
];

export const categoryItems: Record<string, NavItem[]> = {
	products: productItems,
	devices: deviceItems,
	solutions: solutionItems,
};