"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { IconHandle } from "@animateicons/react";

interface ImageItem {
	kind: "image";
	title: string;
	href: string;
	image: string;
}

interface IconItem {
	kind: "icon";
	title: string;
	description: string;
	href: string;
	icon: React.ForwardRefExoticComponent<any>;
}

type NavItem = ImageItem | IconItem;

interface SubmenuConfig {
	image: string;
	title: string;
	description: string;
	columns: 1 | 2;
	items: NavItem[];
}

interface NavLink {
	label: string;
	href: string;
	submenu: SubmenuConfig | null;
}

const SUPPORT_LINKS = [
	{ label: "Help Center", href: "/help" },
	{ label: "Contact Us", href: "/contact" },
	{ label: "Warranty", href: "/warranty" },
];

const PARTNER_LINKS = [
	{ label: "Become a Partner", href: "/partner" },
	{ label: "Reseller Program", href: "/reseller" },
];

const NAV_LINKS: NavLink[] = [
	{
		label: "products",
		href: "/product",
		submenu: {
			image: "/nav/products-preview.png",
			title: "Explore Products",
			description: "Everything you need to run a smarter classroom.",
			columns: 2,
			items: [
				{ kind: "image", title: "Interactive Whiteboard", href: "/product/whiteboard", image: "/nav/whiteboard.png" },
				{ kind: "image", title: "AI Assessment", href: "/product/assessment", image: "/nav/assessment.png" },
				{ kind: "image", title: "Cloud LMS", href: "/product/lms", image: "/nav/lms.png" },
				{ kind: "image", title: "Attendance System", href: "/product/attendance", image: "/nav/attendance.png" },
				{ kind: "image", title: "Digital Content", href: "/product/content", image: "/nav/content.png" },
				{ kind: "image", title: "Analytics Suite", href: "/product/analytics", image: "/nav/analytics.png" },
			],
		},
	},
	{
		label: "devices",
		href: "/device",
		submenu: {
			image: "/nav/devices-preview.png",
			title: "Our Devices",
			description: "Hardware built for the classroom.",
			columns: 1,
			items: [
				{ kind: "image", title: "Teachmint X", href: "/device/x", image: "/nav/device-x.png" },
				{ kind: "image", title: "Teachmint Lite", href: "/device/lite", image: "/nav/device-lite.png" },
				{ kind: "image", title: "Teachmint Pro", href: "/device/pro", image: "/nav/device-pro.png" },
			],
		},
	},
	{
		label: "solutions",
		href: "/solution",
		submenu: {
			image: "/nav/solutions-preview.png",
			title: "Built For You",
			description: "Solutions tailored to every institution.",
			columns: 1,
			items: [
				{ kind: "image", title: "For Schools", href: "/solution/schools", image: "/nav/schools.png" },
				{ kind: "image", title: "For Institutes", href: "/solution/institutes", image: "/nav/institutes.png" },
				{ kind: "image", title: "For Universities", href: "/solution/universities", image: "/nav/universities.png" },
			],
		},
	},
	{ label: "blogs", href: "/blog", submenu: null },
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

function DropdownPanel({ submenu }: { submenu: SubmenuConfig }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -8, scale: 0.97 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -8, scale: 0.97 }}
			transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
			className="fixed left-1/2 top-[7vh] mt-3 w-max -translate-x-1/2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
		>
			<div className="grid grid-cols-[auto_1fr_auto_auto] items-stretch gap-6 p-4">
				<div className="flex h-80 w-80 shrink-0 flex-col overflow-hidden rounded-xl bg-white/5">
					<div className="relative h-[60%] w-full p-2">
						<div className="relative h-full w-full">
							<Image
								src={submenu.image}
								alt={submenu.title}
								fill
								sizes="360px"
								className="rounded-xl object-cover"
							/>
						</div>
					</div>
					<div className="flex h-[40%] flex-col justify-center px-3 py-2">
						<p className="truncate text-lg font-semibold text-white">
							{submenu.title}
						</p>
						<p className="line-clamp-2 text-sm text-white/60">
							{submenu.description}
						</p>
					</div>
				</div>

				{/* links grid */}
				<nav className="grid grid-cols-2 gap-x-8 gap-y-5 content-start rounded-xl p-2">
					{submenu.items.map((item) => (
						<NavItemCard key={item.href} item={item} />
					))}
				</nav>

				{/* divider */}
				<div className="w-px self-stretch bg-white/10" aria-hidden="true" />

				{/* support / partner columns */}
				<div className="flex gap-10 rounded-xl p-2">
					<div>
						<h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">
							Support
						</h3>
						<ul className="flex list-none flex-col gap-2.5">
							{SUPPORT_LINKS.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="whitespace-nowrap text-sm text-white/70 transition-colors hover:text-white"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">
							Partner
						</h3>
						<ul className="flex list-none flex-col gap-2.5">
							{PARTNER_LINKS.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="whitespace-nowrap text-sm text-white/70 transition-colors hover:text-white"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function IconNavItemLink({ item }: { item: IconItem }) {
	const iconRef = useRef<IconHandle>(null);

	useEffect(() => {
		iconRef.current?.startAnimation();
		const interval = setInterval(() => {
			iconRef.current?.startAnimation();
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const Icon = item.icon;

	return (
		<Link
			href={item.href}
			className="group flex items-center gap-3 rounded-lg p-2 duration-300 hover:bg-white/5"
		>
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/90 transition-colors group-hover:bg-primary">
				<Icon ref={iconRef} size={18} color="#ffffff" />
			</div>
			<div className="flex flex-col items-start">
				<p className="text-sm font-semibold text-white">{item.title}</p>
				<p className="text-xs text-white/60">{item.description}</p>
			</div>
		</Link>
	);
}

function NavItemCard({ item }: { item: NavItem }) {
	if (item.kind === "image") {
		return (
			<Link href={item.href} className="group">
				<div className="h-20 w-100 aspect-square rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300 flex">
					<div className="relative w-full h-[60%] p-2">
						<div className="relative w-full h-full">
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="240px"
								className="object-cover rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
							/>
						</div>
					</div>
					<div className="h-[40%] px-3 py-2 flex flex-col justify-center">
						<p className="text-xl font-semibold text-white line-clamp-2 break-words">
							{item.title}
						</p>
					</div>
				</div>
			</Link>
		);
	}

	return <IconNavItemLink item={item} />;
}

export default function Navbar2() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const activeLink = NAV_LINKS.find((l) => l.href === openMenu) ?? null;

	return (
		<motion.header
			variants={container}
			initial="hidden"
			animate="visible"
			className={`fixed top-0 left-0 z-50 w-full h-[7vh] transition-colors duration-300 ${scrolled ? "bg-background/50 backdrop-blur-sm" : "bg-transparent"
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
							const isOpen = openMenu === link.href;
							return (
								<motion.div
									key={link.href}
									variants={rollDown}
									className="group relative"
									onMouseEnter={() => link.submenu && setOpenMenu(link.href)}
									onMouseLeave={() => link.submenu && setOpenMenu(null)}
								>
									<Link
										href={link.href}
										className={`relative flex items-center gap-1 font-inter text-sm text-md font-extralight transition-colors ${isActive ? "text-[#eee4de]" : "text-white"
											}`}
									>
										{link.label}
										{link.submenu && (
											<ChevronDown
												className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
													}`}
											/>
										)}
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

			<AnimatePresence>
				{activeLink?.submenu && (
					<DropdownPanel submenu={activeLink.submenu} />
				)}
			</AnimatePresence>
		</motion.header>
	);
}