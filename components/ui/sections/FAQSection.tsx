"use client";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface FAQSection {
	heading: string;
	points: string[];
}

export interface FAQGroupedAnswer {
	intro?: string;
	sections: FAQSection[];
}

export interface FAQItem {
	question: string;
	answer: string | string[] | FAQGroupedAnswer;
}

function isGroupedAnswer(answer: FAQItem["answer"]): answer is FAQGroupedAnswer {
	return typeof answer === "object" && !Array.isArray(answer);
}

export default function FAQSection({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
	return (
		<div className="border-b border-white/10 py-4">
			<button
				onClick={onToggle}
				className="w-full flex items-center justify-between gap-6 text-left cursor-pointer"
			>
				<span className="text-xl sm:text-xl font-[sora]">{item.question}</span>
				<motion.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
					className="shrink-0"
				>
					<ChevronDown className="h-6 w-6" />
				</motion.span>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className="overflow-hidden"
					>
						{isGroupedAnswer(item.answer) ? (
							<div className="pt-4 flex flex-col gap-1">
								{item.answer.intro && (
									<p className="text-md text-black font-inter font-light leading-relaxed">
										{item.answer.intro}
									</p>
								)}
								{item.answer.sections.map((section, i) => (
									<div key={i} className="flex flex-col gap-2 pl-4">
										<p className="text-md text-zinc-900 font-inter font-normal leading-relaxed">
											{section.heading}
										</p>
										<ul className="flex flex-col pl-4 gap-1">
											{section.points.map((point, j) => (
												<li key={j} className="flex items-start gap-2 text-md text-zinc-800 font-inter font-light leading-[1.2]">
													<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-zinc-800 shrink-0" />
													<span>{point}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						) : Array.isArray(item.answer) ? (
							<ul className="pt-4 flex flex-col gap-2">
								{item.answer.map((point, i) => (
									<li key={i} className="flex items-start gap-2 text-md text-zinc-800 font-inter font-light leading-relaxed">
										<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-zinc-800 shrink-0" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						) : (
							<p className="pt-4 text-md text-zinc-800 font-inter font-light leading-relaxed">
								{item.answer}
							</p>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}