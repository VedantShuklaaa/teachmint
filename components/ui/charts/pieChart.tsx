"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const UPDATE_INTERVAL_MS = 1800;
const TWEEN_MS = 800;
const RADIUS = 90;
const CENTER = 100;
const DONUT_HOLE_RADIUS = 60;
const VARIANCE_RATIO = 0.15;

function polar(cx: number, cy: number, r: number, angle: number) {
	const a = ((angle - 90) * Math.PI) / 180;
	return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function arcPath(start: number, end: number) {
	const [x1, y1] = polar(CENTER, CENTER, RADIUS, start);
	const [x2, y2] = polar(CENTER, CENTER, RADIUS, end);
	const large = end - start > 180 ? 1 : 0;
	return `M ${CENTER} ${CENTER} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${large} 1 ${x2} ${y2} Z`;
}

function jitterSplit(total: number, base: number): [number, number] {
	const variance = total * VARIANCE_RATIO;
	const min = Math.max(0, base - variance);
	const max = Math.min(total, base + variance);
	const first = min + Math.random() * (max - min);
	return [first, total - first];
}

function easeInOutCubic(t: number) {
	return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface PieMetricCardProps {
	title: string;
	unitLabel: string;
	total: number;
	labels: [string, string];
	baseValues: [number, number];
	colors: [string, string];
	showCenterLabel?: boolean;
}


export default function PieMetricCard({
	title,
	unitLabel,
	total,
	labels,
	baseValues,
	colors,
	showCenterLabel = false,
}: PieMetricCardProps) {
	const [targetValues, setTargetValues] = useState<[number, number]>(baseValues);
	const [displayValues, setDisplayValues] = useState<[number, number]>(baseValues);

	const baseRef = useRef(baseValues);
	baseRef.current = baseValues;

	const animRef = useRef<number | null>(null);

	useEffect(() => {
		const id = setInterval(() => {
			setTargetValues(jitterSplit(total, baseRef.current[0]));
		}, UPDATE_INTERVAL_MS);
		return () => clearInterval(id);
	}, [total]);

	useEffect(() => {
		if (animRef.current !== null) cancelAnimationFrame(animRef.current);

		const from = displayValuesRef.current;
		const to = targetValues;
		const start = performance.now();

		function step(now: number) {
			const elapsed = now - start;
			const t = Math.min(1, elapsed / TWEEN_MS);
			const eased = easeInOutCubic(t);

			const next: [number, number] = [
				from[0] + (to[0] - from[0]) * eased,
				from[1] + (to[1] - from[1]) * eased,
			];
			setDisplayValues(next);

			if (t < 1) {
				animRef.current = requestAnimationFrame(step);
			} else {
				animRef.current = null;
			}
		}

		animRef.current = requestAnimationFrame(step);
		return () => {
			if (animRef.current !== null) cancelAnimationFrame(animRef.current);
		};
	}, [targetValues]);

	const displayValuesRef = useRef(displayValues);
	displayValuesRef.current = displayValues;

	const arcs = useMemo(() => {
		let angle = 0;
		return displayValues.map((value, i) => {
			const start = angle;
			const end = angle + (value / total) * 360;
			angle = end;
			return { d: arcPath(start, end), color: colors[i], label: labels[i], value };
		});
	}, [displayValues, total, colors, labels]);

	return (
		<section className="w-full max-w-[28vw] rounded-xl bg-card p-6">
			<header className="mb-6 flex items-start justify-between gap-4">
				<span className="rounded-md border border-white/10 px-3 py-1 text-xs font-extralight text-black bg-[#ede5df]">
					{title}
				</span>
			</header>

			<div className="flex flex-col items-center gap-6">
				<svg viewBox="0 0 200 200" className="h-56 w-56 shrink-0">
					{arcs.map((arc) => (
						<path key={arc.label} d={arc.d} fill={arc.color} stroke="var(--color-card)" strokeWidth="1" />
					))}
					<circle
						cx={CENTER}
						cy={CENTER}
						r={RADIUS}
						fill="none"
						stroke="rgba(255,255,255,0.1)"
						strokeWidth="1"
					/>

					{showCenterLabel && (
						<>
							<circle cx={CENTER} cy={CENTER} r={DONUT_HOLE_RADIUS} fill="#0000008d" strokeWidth="1" />
							<text
								x={CENTER}
								y={CENTER}
								textAnchor="middle"
								dominantBaseline="middle"
								className="fill-white flex flex-col"
								style={{ fontSize: "10px", fontWeight: 500, }}
							>
								<tspan x={CENTER} dy="-0.3em" fontSize="14" fill="var(--color-card-foreground)">
									{total.toLocaleString()}
								</tspan>
								<tspan x={CENTER} dy="1.4em" fontSize="9" fill="var(--color-muted-foreground)">
									{unitLabel}
								</tspan>
							</text>
						</>
					)}
				</svg>

				<ul className="w-full space-y-2">
					{arcs.map((arc) => (
						<li key={arc.label} className="flex items-center gap-2 text-xs ">
							<span className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: arc.color }} />
							<span className="text-card-foreground">{arc.label}</span>
							<span className="ml-auto tabular-nums text-muted-foreground">
								{Math.round(arc.value).toLocaleString()} ({((arc.value / total) * 100).toFixed(0)}%)
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}