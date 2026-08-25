"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SlideGallerySlide {
  src: string;
  alt?: string;
  title: string;
  description?: string;
}

export interface SlideGalleryProps {
  slides: SlideGallerySlide[];
  className?: string;
}

const CARD_WIDTH = 380;
const CARD_HEIGHT = 440;
const RADIUS = 16;
const TILT = 14;
const SIDE_TILT = 6;
const GAP = 8;
const DIM_OPACITY = 0.55;
const MAX_VISIBLE = 2;
const DEPTH = 230;
const SCALE_STEP = 0.15;
const PERSPECTIVE = 1500;
const DRAG_THRESHOLD = 45;
const ANIMATION_DURATION = 0.6;
const AUTOPLAY_DELAY_MS = 2000;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function SlideGallery({ slides, className }: SlideGalleryProps) {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const lockRef = useRef(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, Math.max(50, ANIMATION_DURATION * 1000));
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const goTo = useCallback(
    (i: number) => {
      if (lockRef.current || i === active) return;
      lock();
      setActive(i);
    },
    [active, lock]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  useEffect(() => {
    if (n < 2) return;
    const id = window.setInterval(() => step(1), AUTOPLAY_DELAY_MS);
    return () => window.clearInterval(id);
  }, [n, step]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (lockRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > DRAG_THRESHOLD) step(delta > 0 ? -1 : 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > DRAG_THRESHOLD) step(delta > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const transition = { type: "tween" as const, duration: ANIMATION_DURATION, ease: EASE };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full select-none overflow-hidden",
        className
      )}
      style={{
        minHeight: CARD_HEIGHT + 80,
        perspective: `${PERSPECTIVE}px`,
        touchAction: "none",
        cursor: "grab",
      }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Slide gallery"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          position: "relative",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          transformStyle: "preserve-3d",
          pointerEvents: "none",
        }}
      >
        {slides.map((slide, i) => {
          let rel = i - active;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;

          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sc = Math.max(0.3, 1 - ax * SCALE_STEP);
          const tx = rel * (GAP * 30);
          const tz = -ax * DEPTH;
          const ry = -rel * TILT;
          const rz = rel * SIDE_TILT;

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                borderRadius: RADIUS,
                overflow: "hidden",
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                pointerEvents: visible ? "auto" : "none",
                willChange: "transform, opacity",
                cursor: visible && !isActive ? "pointer" : "default",
              }}
              animate={{
                x: `calc(-50% + ${tx}px)`,
                y: "-50%",
                translateZ: tz,
                rotateY: ry,
                rotateZ: rz,
                scale: sc,
                opacity: visible ? 1 : 0,
              }}
              transition={transition}
              onClick={() => {
                if (!isDragging.current && !isActive && visible) goTo(i);
              }}
              aria-label={slide.title}
              aria-hidden={!visible}
            >
              <img
                src={slide.src}
                alt={slide.alt ?? slide.title}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                loading="lazy"
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 65%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px" }}>
                <p
                  className="text-white font-semibold font-[times] leading-wider"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 26px)",
                    letterSpacing: "-0.02em",
                    lineHeight: "1.15",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                </p>
                <p
                  className="text-white/75 font-medium mt-1"
                  style={{
                    fontSize: "clamp(11px, 1.2vw, 14px)",
                    letterSpacing: "0.01em",
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.description}
                </p>
              </div>

              <motion.div
                style={{ position: "absolute", inset: 0, background: "#000000", pointerEvents: "none" }}
                animate={{ opacity: isActive ? 0 : DIM_OPACITY }}
                transition={transition}
              />
            </motion.div>
          );
        })}
      </div>

      <div
        className="flex items-center gap-3 mt-6 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md"
        style={{ pointerEvents: "all" }}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <motion.button
          aria-label="Previous slide"
          onClick={(e) => { e.stopPropagation(); step(-1); }}
          className="p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              className="rounded-full bg-foreground/60 dark:bg-foreground/50 cursor-pointer hover:bg-foreground transition-colors"
              animate={{ width: active === i ? 24 : 6, height: 6, opacity: active === i ? 1 : 0.4 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.45 }}
              style={{ minWidth: 6 }}
            />
          ))}
        </div>

        <motion.button
          aria-label="Next slide"
          onClick={(e) => { e.stopPropagation(); step(1); }}
          className="p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}