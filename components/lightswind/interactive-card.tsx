"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSizes?: string;
  priority?: boolean;
  interactiveColor?: string;
  borderRadius?: string;
  rotationFactor?: number;
  transitionDuration?: number;
  transitionEasing?: string;
  tailwindBgClass?: string;
}

export function InteractiveCard({
  children,
  className,
  imageSrc,
  imageAlt = "",
  imageSizes = "320px",
  priority = false,
  interactiveColor = "#07eae6",
  borderRadius = "48px",
  rotationFactor = 0.4,
  transitionDuration = 0.3,
  transitionEasing = "easeInOut",
  tailwindBgClass = "bg-transparent backdrop-blur-md",
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [rotationFactor * 15, -rotationFactor * 15]);
  const rotateY = useTransform(x, [0, 1], [-rotationFactor * 15, rotationFactor * 15]);
  const xPercent = useTransform(x, (v) => `${v * 100}%`);
  const yPercent = useTransform(y, (v) => `${v * 100}%`);

  const interactiveBackground = useMotionTemplate`radial-gradient(circle at ${xPercent} ${yPercent}, ${interactiveColor} 0%, transparent 80%)`;

  const handlePointerMove = (e: React.PointerEvent) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = Math.min(1, Math.max(0, (e.clientX - bounds.left) / bounds.width));
    const py = Math.min(1, Math.max(0, (e.clientY - bounds.top) / bounds.height));
    x.set(px);
    y.set(py);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const cardTransition = `transform ${transitionDuration}s ${transitionEasing}`;
  const fadeTransition = `opacity ${transitionDuration}s ${transitionEasing}`;

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 1000, borderRadius }}
      className="relative w-[320px] aspect-[17/21] isolate"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transition: cardTransition,
        }}
        className="relative w-full h-full rounded-xl overflow-hidden border shadow-lg"
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={imageSizes}
            priority={priority}
            className="object-cover"
          />
        )}

        {/* interactive glow layer */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-xl z-0 pointer-events-none"
          style={{
            background: interactiveBackground,
            opacity: isHovered ? 0.6 : 0,
            transition: fadeTransition,
          }}
        />

        {/* content */}
        <div
          className={cn(
            "relative z-10 w-full h-full text-foreground",
            tailwindBgClass,
            className
          )}
          style={{ borderRadius }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}