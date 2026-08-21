"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const NAV_LINKS = [
	{ label: "products", href: "/product" },
	{ label: "devices", href: "/device" },
	{ label: "solutions", href: "/solution" },
	{ label: "blogs", href: "/blog" },
];

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.15 },
	},
};

const rollDown = {
	hidden: { y: "-120%", opacity: 0 },
	visible: {
		y: "0%",
		opacity: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export default function Navbar2() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.header
			variants={container}
			initial="hidden"
			animate="visible"
			className={`fixed top-0 left-0 z-50 w-full h-[7vh] transition-colors duration-300 ${scrolled
				? "bg-background border-b border-white/10"
				: "bg-transparent border-b border-transparent"
				}`}
		>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
				{/* Left — logo + nav links grouped together */}
				<div className="flex items-center gap-10">
					<motion.div variants={rollDown}>
						<Link
							href="/"
							className="text-lg font-semibold shrink-0 justify-self-start flex items-center gap-2"
							aria-label="Teachmint home"
						>
							<Image
								src="/TMLogo3.svg"
								height={180}
								width={180}
								alt="Teachmint logo"
								priority
							/>
						</Link>
					</motion.div>

					<nav className="hidden md:flex items-center gap-8">
						{NAV_LINKS.map((link) => {
							const isActive = pathname === link.href;
							return (
								<motion.div key={link.href} variants={rollDown} className="group">
									<Link
										href={link.href}
										className={`relative flex items-center gap-1 font-inter text-sm text-md font-extralight transition-colors ${isActive ? "text-[#eee4de]" : "text-white"
											}`}
									>
										{link.label}
										<ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
										{isActive && (
											<motion.span
												layoutId="navbar-active-underline"
												className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary"
												transition={{ type: "spring", stiffness: 380, damping: 30 }}
											/>
										)}
									</Link>
								</motion.div>
							);
						})}
					</nav>
				</div>

				{/* Right — CTA buttons */}
				<div className="flex items-center gap-3">
					<motion.div variants={rollDown}>
						<Button variant="secondary" size="md" className="cursor-pointer">
							Sign up
						</Button>
					</motion.div>
					<motion.div variants={rollDown}>
						<Button variant="primary" size="md" className="cursor-pointer">
							Shop Now
						</Button>
					</motion.div>
				</div>
			</div>
		</motion.header>
	);
}