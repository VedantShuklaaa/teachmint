"use client";
import { type ReactNode } from "react";

interface GlowWrapperProps {
	children: ReactNode;
	glowTop?: boolean;
	glowBottom?: boolean;
	glowColorTop?: string;
	glowColorBottom?: string;
	glowSize?: string;
	glowOpacity?: number;
	className?: string;
}

export default function GlowWrapper({
	children,
	glowTop = true,
	glowBottom = true,
	glowColorTop = "var(--primary)",
	glowColorBottom = "var(--primary)",
	glowSize = "60%",
	glowOpacity = 0.35,
	className = "",
}: GlowWrapperProps) {
	return (
		<div className={`relative overflow-visible ${className}`}>
			{glowTop && (
				<div
					className="pointer-events-none absolute -inset-x-8 -top-16 h-1/2 blur-3xl"
					style={{
						background: `radial-gradient(ellipse at top, ${glowColorTop} 0%, transparent ${glowSize})`,
						opacity: glowOpacity,
					}}
				/>
			)}
			{glowBottom && (
				<div
					className="pointer-events-none absolute -inset-x-8 -bottom-16 h-1/2 blur-3xl"
					style={{
						background: `radial-gradient(ellipse at bottom, ${glowColorBottom} 0%, transparent ${glowSize})`,
						opacity: glowOpacity,
					}}
				/>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
}