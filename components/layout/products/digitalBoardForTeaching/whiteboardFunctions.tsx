import ThreeDHoverGallery, { GalleryItem } from "@/components/lightswind/3d-hover-gallery";

const galleryItems: GalleryItem[] = [
	{
		url: "/products/DBT/recordandshare.webp",
		title: "Record & Share",
		category: "Collaboration",
		description: "Record lessons and share whiteboard sessions with ease.",
		glow: "rgba(59,130,246,0.35)",
	},
	{
		url: "/products/DBT/import.webp",
		title: "Import Files",
		category: "File Management",
		description: "Bring in PDFs, images and more to teach your way.",
		glow: "rgba(14,165,233,0.35)",
	},
	{
		url: "/products/DBT/autosync.webp",
		title: "Auto-Sync",
		category: "Cloud Sync",
		description: "Keep every lesson automatically saved and ready to access.",
		glow: "rgba(99,102,241,0.35)",
	},
	{
		url: "/products/DBT/splitscreen.webp",
		title: "Split Screen",
		category: "Multitasking",
		description: "Run multiple apps side by side without interrupting your lesson.",
		glow: "rgba(168,85,247,0.35)",
	},
	{
		url: "/products/DBT/liveclasses.webp",
		title: "Live Classes",
		category: "Virtual Classroom",
		description: "Teach live, engage students and keep every session recorded.",
		glow: "rgba(236,72,153,0.35)",
	},
];

export default function WhiteboardFunction() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col justify-center gap-10 py-10">
			<h1 className="text-4xl sm:text-5xl tracking-wider leading-none text-[#ede5df] font-[times] max-w-5xl">Teach, record, share & multitask with ease</h1>

			<ThreeDHoverGallery items={galleryItems} autoPlay/>
		</div>
	)
}