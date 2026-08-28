"use client";
import { IconGridItem, IconGridSupport } from "@/components/ui/cards/iconGrid";
import { ShieldCheck, RefreshCcw, MonitorCog, Mail, PhoneCall } from "lucide-react";

const SUPPORT_ITEMS: IconGridItem[] = [
	{ icon: ShieldCheck, title: "Three year", description: "On-Site Warranty" },
	{ icon: RefreshCcw, title: "15-Day Replacement for", description: "hardware issues" },
	{ icon: MonitorCog, title: "Expert onboarding", description: "and training" },
	{ icon: Mail, title: "30-min email response", description: "for support queries" },
	{ icon: PhoneCall, title: "85% issues fixed on call", description: "within 6 hours" },
	{ badgeText: "CSAT", title: "95%+ CSAT", description: "trusted customer satisfaction" },
];

export default function SupportSection() {
	return (
		<IconGridSupport
			heading="Ultimate Classroom Device for your classroom"
			imageSrc="/products/dbt/supportBg.webp"
			imageAlt="Teachmint - Support"
			items={SUPPORT_ITEMS}
		/>
	);
}