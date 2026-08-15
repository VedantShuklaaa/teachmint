"use client";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { startCoords, type AnimationVariant, type AnimationStart } from "@/lib/theme";

interface UseThemeToggleOptions {
	variant?: AnimationVariant;
	start?: AnimationStart;
	blur?: boolean;
	gifUrl?: string;
	duration?: number;
}

export function useThemeToggle({
	variant = "circle",
	start = "top-left",
	blur = true,
	gifUrl,
	duration = 300,
}: UseThemeToggleOptions = {}) {
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	const toggleTheme = useCallback(() => {
		const next = isDark ? "light" : "dark";

		if (!document.startViewTransition) {
			setTheme(next);
			return;
		}

		const { x, y } = startCoords[start];
		const root = document.documentElement;

		root.style.setProperty("--vt-x", x);
		root.style.setProperty("--vt-y", y);
		root.style.setProperty("--vt-duration", `${duration}ms`);
		root.style.setProperty("--vt-blur", blur ? "8px" : "0px");
		root.setAttribute("data-vt-variant", variant);
		if (gifUrl) root.style.setProperty("--vt-gif", `url(${gifUrl})`);

		document.startViewTransition(() => {
			setTheme(next);
		});
	}, [isDark, setTheme, start, variant, blur, gifUrl, duration]);

	return { isDark, toggleTheme };
}