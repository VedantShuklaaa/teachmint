import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const epicPro = localFont({
	src: [
		{
			path: "./GCEpicProDemo-SemiBold.woff2",
			style: "normal",
		},
	],
});

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});