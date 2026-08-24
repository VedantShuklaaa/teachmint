"use client";
import {
	cloneElement,
	isValidElement,
	useLayoutEffect,
	useRef,
	useState,
	type ReactElement,
	type Ref,
} from "react";

interface BorderWrapperProps {
	children: ReactElement<{ ref?: Ref<HTMLElement> }>;
	variant?: "solid" | "gradient";
	color?: string;
	gradient?: string;
	borderWidth?: number;
	className?: string;
}

export default function BorderWrapper({
	children,
	variant = "gradient",
	color = "var(--primary)",
	gradient = "linear-gradient(135deg, var(--primary), var(--accent))",
	borderWidth = 2,
	className = "",
}: BorderWrapperProps) {
	const childRef = useRef<HTMLElement | null>(null);
	const [radius, setRadius] = useState("0px");

	useLayoutEffect(() => {
		const el = childRef.current;
		if (!el) return;

		const syncRadius = () => setRadius(getComputedStyle(el).borderRadius);
		syncRadius();

		const ro = new ResizeObserver(syncRadius);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	if (!isValidElement(children)) return children;

	const mergedRef = (node: HTMLElement | null) => {
		childRef.current = node;
		const existingRef = (children as any).ref;
		if (typeof existingRef === "function") existingRef(node);
		else if (existingRef && typeof existingRef === "object") existingRef.current = node;
	};

	return (
		<div className={`relative inline-block ${className}`} style={{ borderRadius: radius }}>
			{cloneElement(children, { ref: mergedRef } as Partial<unknown>)}
			<div
				aria-hidden
				className="pointer-events-none absolute"
				style={{
					inset: -borderWidth,
					borderRadius: `calc(${radius} + ${borderWidth}px)`,
					padding: borderWidth,
					background: variant === "gradient" ? gradient : color,
					WebkitMask:
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
				}}
			/>
		</div>
	);
}