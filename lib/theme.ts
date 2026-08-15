export type AnimationVariant = "circle" | "polygon";
export type AnimationStart =
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right"
	| "center";

export const startCoords: Record<AnimationStart, { x: string; y: string }> = {
	"top-left": { x: "0%", y: "0%" },
	"top-right": { x: "100%", y: "0%" },
	"bottom-left": { x: "0%", y: "100%" },
	"bottom-right": { x: "100%", y: "100%" },
	center: { x: "50%", y: "50%" },
};