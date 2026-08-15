export interface HeroImage {
	src: string;
	alt: string;
}

export const deviceHeroImages: HeroImage[] = [
	{ src: "/devices/teachmintX2-65.png", alt: 'Teachmint X2 65" interactive digital board' },
	{ src: "/devices/teachmintX2-75-withoutCamera.png", alt: 'Teachmint X2 75" interactive digital board without camera' },
	{ src: "/devices/teachmintX2-75.webp", alt: 'Teachmint X2 75" interactive digital board' },
	{ src: "/devices/teachmintX2-86.webp", alt: 'Teachmint X2 86" interactive digital board' },
];

export const CAROUSEL_INTERVAL_MS = 2500;