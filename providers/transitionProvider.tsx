"use client";

import {
	createContext,
	useCallback,
	useContext,
	useLayoutEffect,
	useRef,
	ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const TRANSITION_DURATION = 0.5;
const TRANSITION_STAGGER = 0.05;
const TRANSITION_EASE = "power3.inOut";

type TransitionContextValue = {
	navigateTo: (href: string) => void;
	isTransitioning: () => boolean;
};

const TransitionContext = createContext<TransitionContextValue>({
	navigateTo: () => { },
	isTransitioning: () => false,
});

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
	children,
	columns = 6,
}: {
	children: ReactNode;
	columns?: number;
}) {
	const router = useRouter();
	const pathname = usePathname();
	const colRefs = useRef<(HTMLDivElement | null)[]>([]);
	const transitioning = useRef(false);
	const pendingReveal = useRef(false); // true only when a cover just fired and a reveal is owed

	const revealCols = useCallback(() => {
		const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];
		if (!cols.length) return;

		// wait two frames so the new route has actually painted before uncovering it
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				gsap.to(cols, {
					y: "-100%",
					duration: TRANSITION_DURATION,
					ease: TRANSITION_EASE,
					stagger: TRANSITION_STAGGER,
					onComplete: () => {
						transitioning.current = false;
						document.body.style.overflow = "";
					},
				});
			});
		});
	}, []);

	useLayoutEffect(() => {
		if (!pendingReveal.current) return;
		pendingReveal.current = false;
		revealCols();
	}, [pathname, revealCols]);

	const navigateTo = useCallback(
		(href: string) => {
			if (transitioning.current || pathname === href) return;

			transitioning.current = true;
			pendingReveal.current = true;
			document.body.style.overflow = "hidden";

			const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];
			gsap.set(cols, { y: "100%" });
			gsap.to(cols, {
				y: "0%",
				duration: TRANSITION_DURATION,
				ease: TRANSITION_EASE,
				stagger: TRANSITION_STAGGER,
				onComplete: () => router.push(href),
			});
		},
		[router, pathname]
	);

	return (
		<TransitionContext.Provider
			value={{ navigateTo, isTransitioning: () => transitioning.current }}
		>
			{children}
			<div className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen">
				{Array.from({ length: columns }).map((_, idx) => (
					<div
						key={idx}
						ref={(el) => {
							colRefs.current[idx] = el;
						}}
						className="h-full w-full bg-black"
						style={{ transform: "translateY(100%)" }}
					/>
				))}
			</div>
		</TransitionContext.Provider>
	);
}