"use client";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, MouseEvent } from "react";
import { usePageTransition } from "@/providers/transitionProvider";

type Props = LinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
		children: React.ReactNode;
	};

export default function TransitionLink({ href, children, onClick, ...rest }: Props) {
	const { navigateTo, isTransitioning } = usePageTransition();

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		onClick?.(e);
		if (e.defaultPrevented) return;

		// let modifier-clicks / new-tab clicks behave normally
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

		e.preventDefault();
		if (isTransitioning()) return;
		navigateTo(href.toString());
	};

	return (
		<Link href={href} {...rest} onClick={handleClick}>
			{children}
		</Link>
	);
}