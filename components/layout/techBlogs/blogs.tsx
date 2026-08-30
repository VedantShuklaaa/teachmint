import Image from "next/image";

const blogs = [
	{
		tag: "DEVOPS · ENGINEERING",
		title: "When Infrastructure Meets the Classroom.",
		description: "When most people picture modern infrastructure, they think of data centers, cloud dashboards, and elaborate deployment pipelines servers humming somewhere far away, quietly handling millions of requests.",
		image: "/blogs/blog-1.jpg",
	},
	{
		tag: "PRODUCT & DESIGN",
		title: "Designing EduAI that actually works in Indian classrooms.",
		description: "A teacher with 45 students, three learning levels, two languages, and one period to cover a dense syllabus isn't an anomaly, it's the system. Here's how we're building EduAI to meet it where it lives.",
		image: "/blogs/blog-2.png",
	},
	{
		tag: "HOW WE BUILD",
		title: "GYD AI: Engineering an AI Study Companion That Stays in Sync with the Classroom",
		description: "Classroom teaching works well at scale. A single teacher can reach thirty or forty students simultaneously. What doesn't scale is what happens after the class ends.",
		image: "/blogs/blog-3.svg",
	},
	{
		tag: "QUALITY ASSURANCE · ENGINEERING",
		title: "When Quality Meets the Classroom",
		description: "TMost people think of quality as a final check before something ships. In a live classroom, it has to be something you never notice at all.",
		image: "/blogs/blog-4.webp",
	},
];

export default function TechBlogs() {
	return (
		<div className="w-[70vw] mx-auto flex flex-col items-center py-20 gap-15 border-t border-black/10">
			<div className="w-full grid grid-cols-3 gap-8">
				{blogs.map((blog) => (
					<div key={blog.title} className="h-125 w-full flex flex-col rounded-xl overflow-hidden cursor-pointer border bg-black/5 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
						<div className="h-[60%] w-full relative rounded-b-xl overflow-hidden">
							<Image
								src={blog.image}
								alt={blog.title}
								fill
								sizes="(max-width: 768px) 100vw, 23vw"
								className="object-cover transition-transform duration-700 hover:scale-105"
							/>
						</div>
						<div className="h-[40%] w-full flex flex-col gap-2 p-5">
							<p className="text-xs text-zinc-700">{blog.tag}</p>
							<h2 className="text-xl tracking-wide leading-none text-black font-[sora]">
								{blog.title}
							</h2>
							<p className="text-sm text-zinc-700 font-inter font-light leading-[1.2]">
								{blog.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}