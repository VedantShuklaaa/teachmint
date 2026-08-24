"use client";
import { useEffect, useState } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const MAX = 6;
const MIN = 1;
const Y_TICKS = [6, 4, 2, 0];
const UPDATE_INTERVAL_MS = 1800;
const TRANSITION_MS = 1700;

type View = "devices" | "teachers";

function randomSeries() {
	return MONTHS.map(() => MIN + Math.random() * (MAX - MIN));
}

export default function LiveActivityChart() {
	const [view, setView] = useState<View>("devices");
	const [data, setData] = useState<Record<View, number[]>>({
		devices: randomSeries(),
		teachers: randomSeries(),
	});

	useEffect(() => {
		const id = setInterval(() => {
			setData({ devices: randomSeries(), teachers: randomSeries() });
		}, UPDATE_INTERVAL_MS);
		return () => clearInterval(id);
	}, []);

	const series = data[view];
	const total = series.reduce((a, b) => a + b, 0);

	return (
		<section className="w-full max-w-[28vw] rounded-xl px-6 py-9">
			<header className="mb-6 flex items-start justify-between gap-4">
				<div>
					<h1 className="text-sm font-medium text-card-foreground">Monthly activity</h1>
					<p className="mt-1 text-xs text-muted-foreground">
						Total {total.toFixed(1)} units · live
					</p>
				</div>
				<div className="inline-flex rounded-md border border-white/10 p-0.5">
					{(["devices", "teachers"] as View[]).map((v) => (
						<button
							key={v}
							onClick={() => setView(v)}
							className={`rounded-[5px] px-3 py-1 text-xs cursor-pointer font-extralight capitalize transition-colors ${view === v
								? "bg-[#eee4de] text-black"
								: "text-muted-foreground hover:text-foreground"
								}`}
						>
							{v}
						</button>
					))}
				</div>
			</header>

			<div className="flex gap-3">
				<div className="flex h-56 flex-col justify-between py-0 text-[10px] text-muted-foreground">
					{Y_TICKS.map((t) => (
						<span key={t}>{t}</span>
					))}
				</div>

				<div className="flex-1">
					<div className="flex h-56 items-end border-b border-white/10">
						{series.map((value, i) => (
							<div key={MONTHS[i]} className="flex h-full flex-1 items-end">
								<div
									className="w-full border border-white/20 bg-black/30 transition-[height] ease-in-out"
									style={{
										height: `${(value / MAX) * 100}%`,
										transitionDuration: `${TRANSITION_MS}ms`,
									}}
								/>
							</div>
						))}
					</div>
					<div className="flex">
						{MONTHS.map((m) => (
							<span key={m} className="flex-1 pt-2 text-center text-[10px] text-muted-foreground">
								{m}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}