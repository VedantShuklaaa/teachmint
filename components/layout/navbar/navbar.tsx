"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button/button";
import { ThemeToggleButton } from "../theme/theme-toggle";
import { IconHandle } from "@animateicons/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/buttonVariants";
import { navLinks } from "@/constants/navbar/navlinks";
import { categoryImage, categoryInfo } from "@/constants/navbar/categoryInfo";
import { categoryItems, type NavItem, type IconItem } from "@/constants/navbar/navItems";
import { supportLinks, partnerLinks } from "@/constants/navbar/footerLinks";
import { deviceHeroImages, CAROUSEL_INTERVAL_MS } from "@/constants/navbar/deviceHeroImages";
import { CLOSED_WIDTH, OPEN_WIDTH, WIDTH_DURATION, PANEL_SHOW_DELAY_MS, ICON_ANIMATION_INTERVAL_MS } from "@/constants/navbar/config";
import { ChevronDown } from "lucide-react";
import TransitionLink from "@/components/ui/links/transitionLink";

export interface NavbarProps {
	trigger?: "onClick" | "onHover";
}

export function Navbar({ trigger = "onClick" }: NavbarProps) {
	const [activeKey, setActiveKey] = useState<string | null>(null);
	const [showPanel, setShowPanel] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	const isOpen = activeKey !== null;
	const isHoverMode = trigger === "onHover";
	const activeItems = activeKey ? categoryItems[activeKey] : null;

	useEffect(() => {
		if (!isOpen) {
			setShowPanel(false);
			return;
		}
		const t = setTimeout(() => setShowPanel(true), PANEL_SHOW_DELAY_MS);
		return () => clearTimeout(t);
	}, [isOpen]);

	useEffect(() => {
		if (isHoverMode) return;
		function handleClick(e: MouseEvent) {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setActiveKey(null);
			}
		}
		if (isOpen) document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [isOpen, isHoverMode]);

	useEffect(() => {
		function handleKey(e: KeyboardEvent) {
			if (e.key === "Escape") setActiveKey(null);
		}
		if (isOpen) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [isOpen]);

	function handleLinkClick(key: string) {
		if (isHoverMode) return;
		if (activeKey === key) return;
		setActiveKey(key);
	}

	function handleLinkHover(key: string) {
		if (!isHoverMode) return;
		setActiveKey(key);
	}

	function handleNavMouseLeave() {
		if (!isHoverMode) return;
		setActiveKey(null);
	}

	return (
		<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
			<motion.nav
				ref={navRef}
				aria-label="Main navigation"
				onMouseLeave={handleNavMouseLeave}
				initial={{ y: -80, width: CLOSED_WIDTH }}
				animate={{ width: isOpen ? OPEN_WIDTH : CLOSED_WIDTH, y: 0, opacity: 1 }}
				transition={{
					width: { duration: WIDTH_DURATION, ease: [0.22, 1, 0.36, 1] },
					y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
				}}
				style={{ maxWidth: "calc(100vw - 2rem)", willChange: "width, transform" }}
				className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
			>
				<div className="grid grid-cols-3 items-center px-6 py-3">
					<TransitionLink
						href="/"
						className="text-lg font-semibold shrink-0 justify-self-start flex items-center gap-2"
						onClick={() => setActiveKey(null)}
						aria-label="Teachmint home"
					>
						<Image
							src="/TMLogo2.svg"
							height={180}
							width={180}
							alt="Teachmint logo"
							priority
						/>
					</TransitionLink>

					<div className="hidden sm:flex items-center justify-center gap-5">
						{navLinks.map((link) => {
							const hasSubmenu = !!categoryItems[link.key];
							const isActive = activeKey === link.key;
							return (
								<TransitionLink
									key={link.key}
									href={link.href}
									aria-expanded={hasSubmenu ? isActive : undefined}
									aria-haspopup={hasSubmenu ? "true" : undefined}
									aria-current={isActive ? "true" : undefined}
									onClick={(e) => {
										if (hasSubmenu) {
											e.preventDefault();
											handleLinkClick(link.key);
										} else {
											setActiveKey(null);
										}
									}}
									onMouseEnter={() => handleLinkHover(link.key)}
									className={`group relative flex items-center gap-1 font-[sora] text-sm text-md cursor-pointer font-extralight transition-colors ${isActive ? "text-zinc-400" : "text-black"}`}
								>
									{link.label}
									{hasSubmenu && (
										<ChevronDown
											className={`h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-180" : "group-hover:rotate-180"
												}`}
										/>
									)}
								</TransitionLink>
							);
						})}
					</div>

					<div className="flex items-center justify-end gap-3">
						<Button variant="secondary" size="md" className="cursor-pointer">
							Sign up
						</Button>
						<Button variant="primary" size="md" className="cursor-pointer bg-black">
							Shop Now
						</Button>
					</div>
				</div>

				<AnimatePresence initial={false}>
					{isOpen && showPanel && activeKey && (
						<motion.div
							key="panel-wrapper"
							layout
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{
								height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
								opacity: { duration: 0.2 },
							}}
							className="overflow-hidden"
							role="region"
							aria-label={`${activeKey} menu`}
						>
							<div className="mx-6 border-t border-black/10 dark:border-white/10" />

							<div className="px-6 pb-6 pt-5">
								<AnimatePresence mode="popLayout" initial={false}>
									{activeItems && (
										<motion.div
											key={activeKey}
											initial={{ opacity: 0, x: 8 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -8 }}
											transition={{ duration: 0.2, ease: "easeOut" }}
											className="grid grid-cols-[auto_1fr_auto_auto] gap-6 items-stretch"
										>
											{activeKey === "devices" ? (
												<DeviceHeroCarousel />
											) : (
												<TransitionLink href={categoryInfo[activeKey].href} className="w-100 h-100 rounded-xl overflow-hidden bg-black/10 shrink-0 flex flex-col cursor-pointer">
													<div className="relative w-full h-[60%] p-2">
														<div className="relative w-full h-full">
															<Image
																src={categoryImage[activeKey]}
																alt={categoryInfo[activeKey].title}
																fill
																sizes="320px"
																className="object-cover rounded-xl"
																priority={false}
															/>
														</div>
													</div>
													<div className="h-[40%] px-4 py-3 flex flex-col justify-center">
														<p className="text-xl font-[sora] text-foreground truncate">
															{categoryInfo[activeKey].title}
														</p>
														<p className="text-lg text-foreground/60 line-clamp-2 break-words leading-none">
															{categoryInfo[activeKey].description}
														</p>
													</div>
												</TransitionLink>
											)}

											<nav
												aria-label={`${activeKey} links`}
												className={cn(
													"grid grid-cols-2 gap-x-8 gap-y-5 content-start rounded-xl",
													activeKey === "devices" ? "p-0" : "p-2"
												)}
											>
												{activeItems.map((item) => (
													<NavItemCard key={item.href} item={item} />
												))}
											</nav>

											<div
												className="w-px bg-black/10 dark:bg-white/10 self-stretch"
												aria-hidden="true"
											/>

											<nav
												aria-label="Support and partner links"
												className="flex gap-10 rounded-xl p-2 relative"
											>
												<div>
													<h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/40 mb-3">
														Support
													</h3>
													<ul className="flex flex-col gap-2.5 list-none">
														{supportLinks.map((item) => (
															<li key={item.href}>
																<TransitionLink
																	href={item.href}
																	className="text-sm text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap font-[sora]"
																>
																	{item.label}
																</TransitionLink>
															</li>
														))}
													</ul>
												</div>
												<div>
													<h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/40 mb-3">
														Partner
													</h3>
													<ul className="flex flex-col gap-2.5 list-none">
														{partnerLinks.map((item) => (
															<li key={item.href}>
																<TransitionLink
																	href={item.href}
																	className="text-sm text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap font-[sora]"
																>
																	{item.label}
																</TransitionLink>
															</li>
														))}
													</ul>
												</div>

												<ThemeToggleButton />
											</nav>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</header>
	);
}

function NavItemCard({ item }: { item: NavItem }) {
	if (item.kind === "image") {
		return (
			<TransitionLink href={item.href} className="group">
				<div className="h-100 w-full aspect-square rounded-xl overflow-hidden bg-black/10 backdrop-blur-xl transition-colors duration-300 flex flex-col">
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
						<p className="text-xl font-[sora] text-foreground line-clamp-2 break-words">
							{item.title}
						</p>
					</div>
				</div>
			</TransitionLink>
		);
	}

	return <IconNavItemCard item={item} />;
}

function IconNavItemCard({ item }: { item: IconItem }) {
	const iconRef = useRef<IconHandle>(null);

	useEffect(() => {
		iconRef.current?.startAnimation();

		const interval = setInterval(() => {
			iconRef.current?.startAnimation();
		}, ICON_ANIMATION_INTERVAL_MS);

		return () => clearInterval(interval);
	}, []);

	const Icon = item.icon;

	return (
		<TransitionLink
			href={item.href}
			className="flex items-center gap-3 group bg-black/10 hover:bg-black/15 rounded-lg duration-300 p-2"
			aria-label={item.description ? `${item.title} — ${item.description}` : item.title}
		>
			<div className="flex items-center justify-center w-14 h-14 shrink-0 rounded-lg bg-[#eee4de] transition-colors">
				<Icon
					aria-hidden="true"
					className="w-5 h-5 text-black"
					size={20}
					ref={iconRef}
					onMouseEnter={() => iconRef.current?.startAnimation()}
					onMouseLeave={() => iconRef.current?.stopAnimation()}
				/>
			</div>
			<div className="flex flex-col h-full items-start">
				<p className="text-sm font-[sora] text-foreground">{item.title}</p>
				<p className="text-xs text-foreground/60 font-inter">{item.description}</p>
			</div>
		</TransitionLink>
	);
}

function DeviceHeroCarousel() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;

		const t = setInterval(() => {
			setIndex((prev) => (prev + 1) % deviceHeroImages.length);
		}, CAROUSEL_INTERVAL_MS);

		return () => clearInterval(t);
	}, [paused]);

	return (
		<div
			className="w-100 h-100 rounded-xl overflow-hidden bg-foreground/5 shrink-0 flex flex-col cursor-pointer"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className="relative w-full h-[60%] p-2 overflow-hidden">
				<div className="relative w-full h-full overflow-hidden rounded-xl">
					<AnimatePresence initial={false} mode="popLayout">
						<motion.div
							key={index}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
							className="absolute inset-0"
						>
							<Image
								src={deviceHeroImages[index].src}
								alt={deviceHeroImages[index].alt}
								fill
								sizes="320px"
								className="object-cover rounded-xl"
								priority={false}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			<div className="h-[40%] px-4 py-3 flex items-center justify-center">
				<Link
					href="/devices"
					className={buttonVariants({ variant: "primary", size: "lg", className: "bg-black" })}
				>
					Explore all devices
				</Link>
			</div>
		</div>
	);
}