"use client";
import { useEffect, useState } from "react";
import PieMetricCard from "./pieChart";

function attendence() {
	return (
		<PieMetricCard
			title="Attendence"
			unitLabel="Total Days"
			total={61}
			labels={["Present", "Absent"]}
			baseValues={[42, 19]}
			colors={["#ede5df", "#0000004d"]}
		/>
	);
}

function testAttendence() {
	return (
		<PieMetricCard
			title="Tests Attended"
			unitLabel="Total Days"
			total={61}
			labels={["Attended", "Not Attended"]}
			baseValues={[42, 19]}
			colors={["#ede5df", "#0000004d"]}
		/>
	);
}

const DISPLAY_MS = 6000;
const FADE_MS = 500;

const VARIANTS = [attendence, testAttendence];

export function RotatingAttendenceCharts() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let displayTimer: ReturnType<typeof setTimeout>;
		let fadeTimer: ReturnType<typeof setTimeout>;

		function cycle() {
			displayTimer = setTimeout(() => {
				setVisible(false);
				fadeTimer = setTimeout(() => {
					setIndex((i) => (i + 1) % VARIANTS.length);
					setVisible(true);
					cycle();
				}, FADE_MS);
			}, DISPLAY_MS);
		}

		cycle();
		return () => {
			clearTimeout(displayTimer);
			clearTimeout(fadeTimer);
		};
	}, []);

	const Current = VARIANTS[index];

	return (
		<div
			className="transition-opacity ease-in-out"
			style={{ transitionDuration: `${FADE_MS}ms`, opacity: visible ? 1 : 0 }}
		>
			<Current />
		</div>
	);
}


function TeacherLicenseUsageChart() {
	return (
		<PieMetricCard
			title="Teachers Licence Usage"
			unitLabel="LICENCE"
			total={1000}
			labels={["Teacher Licences Used", "Teacher Licences available"]}
			baseValues={[250, 750]}
			colors={["#ede5df", "#0000004d"]}
			showCenterLabel
		/>
	);
}

function TeachersUsingIfpChart() {
	return (
		<PieMetricCard
			title="Teachers Using IFP"
			unitLabel="Teachers"
			total={1200}
			labels={["Teachers using IFP", "Teachers not using IFP"]}
			baseValues={[300, 900]}
			colors={["#ede5df", "#0000004d"]}
			showCenterLabel
		/>
	);
}

const VARIANTS_2 = [TeacherLicenseUsageChart, TeachersUsingIfpChart];

export function RotatingHollowChart() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let displayTimer: ReturnType<typeof setTimeout>;
		let fadeTimer: ReturnType<typeof setTimeout>;

		function cycle() {
			displayTimer = setTimeout(() => {
				setVisible(false);
				fadeTimer = setTimeout(() => {
					setIndex((i) => (i + 1) % VARIANTS.length);
					setVisible(true);
					cycle();
				}, FADE_MS);
			}, DISPLAY_MS);
		}

		cycle();
		return () => {
			clearTimeout(displayTimer);
			clearTimeout(fadeTimer);
		};
	}, []);

	const Current = VARIANTS_2[index];

	return (
		<div
			className="transition-opacity ease-in-out"
			style={{ transitionDuration: `${FADE_MS}ms`, opacity: visible ? 1 : 0 }}
		>
			<Current />
		</div>
	);
}