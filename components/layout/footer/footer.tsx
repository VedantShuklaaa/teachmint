"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
	TwitterIcon,
	MessageCircleIcon,
	FacebookIcon,
	LinkedinIcon,
} from "@animateicons/react/lucide";
import { useEffect, useRef } from "react";
import KnowMore from "../products/classroomPlatform/knowMore";
import { usePathname } from "next/navigation";

const COMPANY_LINKS = [
	{ label: "About Us", href: "/about" },
	{ label: "Events", href: "/events" },
	{ label: "Careers", href: "/careers" },
	{ label: "Privacy policy", href: "/privacy" },
];

const RESOURCE_LINKS = [
	{ label: "Technical Blog", href: "/blog/technical" },
	{ label: "Case Study", href: "/case-study" },
	{ label: "Product Policy", href: "/product-policy" },
	{ label: "Brochure", href: "/brochure" },
	{ label: "Warranty Policy", href: "/warranty-policy" },
	{ label: "Product Blog", href: "/blog/product" },
];

const OFFICES = [
	{
		city: "Bengaluru",
		lines: [
			"5th Floor, North Wing,",
			"SJR The Hub, Sarjapur Main Road,",
			"Bengaluru - 560103, Karnataka, India",
		],
	},
	{
		city: "Singapore",
		lines: [
			"1 North Bridge Road,",
			"#19-08 High Street Centre,",
			"Singapore - 179094",
		],
	},
	{
		city: "Manila",
		lines: [
			"11th Floor, Insular Life Building,",
			"6781 Ayala Avenue, Corner Paseo de",
			"Roxas, Makati, Metro Manila, Philippines",
		],
	},
	{
		city: "Dubai",
		lines: [
			"Teachmint Technologies DWC LLC,",
			"Office # 431, 4th Floor, Building A3,",
			"Dubai South",
		],
	},
];

type IconHandle = {
	startAnimation: () => void;
	stopAnimation: () => void;
};

const SOCIALS = [
	{ label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
	{ label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
	{ label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
	{ label: "Message", href: "https://wa.me/", icon: MessageCircleIcon },
];

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.1 },
	},
};

const fadeUp = {
	hidden: { y: 24, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const ICON_DURATION = 1; 
const LOOP_DELAY = 1000; 

function LoopingSocialIcon({
	Icon,
}: {
	Icon: React.ForwardRefExoticComponent<any>;
}) {
	const ref = useRef<IconHandle>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			ref.current?.startAnimation();
		}, ICON_DURATION * 1000 + LOOP_DELAY);

		return () => clearInterval(interval);
	}, []);

	return <Icon ref={ref} size={18} duration={ICON_DURATION} color="#ffffff" />;
}

function FooterLink({ label, href }: { label: string; href: string }) {
	return (
		<Link
			href={href}
			className="group relative inline-block w-fit text-sm text-white/60 transition-colors hover:text-white"
		>
			{label}
			<span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
		</Link>
	);
}

const CLASSROOM_PLATFORM_ROUTE = "/products/classroom-platform";

export default function Footer() {
	const pathname = usePathname();
	const showClassroomHero = pathname === CLASSROOM_PLATFORM_ROUTE;

	return (
		<footer className="relative w-full overflow-hidden border-t border-white/10 bg-black">
			{showClassroomHero && <KnowMore />}
			{/* subtle ambient glow */}
			<div
				className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 blur-3xl"
				style={{
					background:
						"radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)",
					opacity: 0.12,
				}}
			/>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="relative mx-auto grid w-[70vw] max-w-7xl grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4"
			>
				{/* Company */}
				<motion.div variants={fadeUp} className="flex flex-col gap-5">
					<h3 className="text-lg font-semibold text-white">Company</h3>
					{COMPANY_LINKS.map((link) => (
						<FooterLink key={link.href} {...link} />
					))}
				</motion.div>

				{/* Resources */}
				<motion.div variants={fadeUp} className="flex flex-col gap-5">
					<h3 className="text-lg font-semibold text-white">Resources</h3>
					{RESOURCE_LINKS.map((link) => (
						<FooterLink key={link.href} {...link} />
					))}
				</motion.div>

				{/* Contact — offices */}
				<motion.div
					variants={fadeUp}
					className="flex flex-col gap-8 sm:col-span-2 lg:col-span-2"
				>
					<h3 className="text-lg font-semibold text-white">Contact</h3>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						{OFFICES.map((office) => (
							<div key={office.city} className="flex flex-col gap-1">
								<p className="text-sm font-medium text-white">
									{office.city}
								</p>
								{office.lines.map((line) => (
									<p key={line} className="text-sm text-white/50">
										{line}
									</p>
								))}
							</div>
						))}
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						<div className="flex flex-col gap-1">
							<p className="text-sm font-medium text-white">E-mail</p>
							<Link
								href="mailto:support@teachmint.com"
								className="text-sm text-white/50 transition-colors hover:text-white"
							>
								support@teachmint.com
							</Link>
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-sm font-medium text-white">Phone</p>
							<Link
								href="tel:08035073710"
								className="text-sm text-white/50 underline underline-offset-2 transition-colors hover:text-white"
							>
								080-35073710
							</Link>
							<p className="text-sm text-white/40">(IST 8 AM - 8 PM Everyday)</p>
						</div>
					</div>
				</motion.div>
			</motion.div>

			{/* Bottom bar */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className="relative flex w-full items-center justify-between border-t border-white/10 px-6 py-6 sm:px-10"
			>
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/TMLogo3.svg"
						alt="Teachmint logo"
						height={180}
						width={180}
					/>
				</Link>

				<p className="hidden text-sm text-white/40 sm:block">
					© Copyright 2026, Teachmint Technologies Pvt. Ltd.
				</p>

				<div className="flex items-center gap-3">
					{SOCIALS.map(({ label, href, icon }) => (
						<Link
							key={label}
							href={href}
							aria-label={label}
							className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
						>
							<LoopingSocialIcon Icon={icon} />
						</Link>
					))}
				</div>
			</motion.div>
		</footer>
	);
}