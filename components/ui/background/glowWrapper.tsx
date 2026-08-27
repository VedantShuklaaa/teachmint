"use client";
import { type ReactNode } from "react";

interface GlowWrapperProps {
	children: ReactNode;
	glowFull?: boolean;
	glowTop?: boolean;
	glowBottom?: boolean;
	glowColor?: string;
	glowColorTop?: string;
	glowColorBottom?: string;
	glowSize?: string;
	glowOpacity?: number;
	className?: string;
}

export default function GlowWrapper({
	children,
	glowFull = false,
	glowTop = true,
	glowBottom = true,
	glowColor = "var(--primary)",
	glowColorTop = "var(--primary)",
	glowColorBottom = "var(--primary)",
	glowSize = "60%",
	glowOpacity = 0.35,
	className = "",
}: GlowWrapperProps) {
	return (
		<div className={`relative overflow-visible ${className}`}>
			{glowFull ? (
				<div
					className="pointer-events-none absolute -inset-16 blur-3xl"
					style={{
						background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent ${glowSize})`,
						opacity: glowOpacity,
					}}
				/>
			) : (
				<>
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
				</>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
}