"use client";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  url: string;
  title: string;
  category: string;
  description: string;
  glow?: string;
}

export interface ThreeDHoverGalleryProps {
  images?: string[];
  items?: GalleryItem[];
  itemHeight?: string | number;
  gap?: number;
  perspective?: number;
  hoverScale?: number;
  transitionDuration?: number;
  enableKeyboardNavigation?: boolean;
  enableHover?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  onImageClick?: (index: number, item: GalleryItem) => void;
  onImageHover?: (index: number, item: GalleryItem) => void;
}

const DEFAULT_ITEMS: GalleryItem[] = [
  {
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Neo Tokyo",
    category: "Cyberpunk",
    description: "Immersive neon skylines and futuristic streets glowing in the rain.",
    glow: "rgba(236,72,153,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Ethereal Flow",
    category: "Abstract Art",
    description: "Sleek flowing shapes with high-contrast pastel fluid textures.",
    glow: "rgba(6,182,212,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Quantum Nexus",
    category: "Sci-Fi",
    description: "Interstellar data nodes mapping out the universe's connections.",
    glow: "rgba(139,92,246,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Surreal Oasis",
    category: "Digital Art",
    description: "Floating islands and dreamlike columns rising from serene oceans.",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Apex Horizon",
    category: "Automotive",
    description: "Aerodynamic lines of a futuristic hypercar glowing in carbon fibers.",
    glow: "rgba(239,68,68,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Carbon Monolith",
    category: "Architecture",
    description: "Minimalist brutalist angles playing with architectural shadows.",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=compress&cs=tinysrgb&w=800&q=80",
    title: "Cosmic Cradle",
    category: "Astronomy",
    description: "Deep violet stellar nurseries dust clouds lightyears across.",
    glow: "rgba(168,85,247,0.35)",
  },
];

function CardOverlayContent({ item }: { item: GalleryItem }) {
  return (
    <div className="flex flex-col items-start w-full">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="text-[9px] font-black tracking-widest uppercase text-primary"
      >
        {item.category}
      </motion.span>

      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-base md:text-lg lg:text-5xl font-[times] leading-wider tracking-tight text-zinc-50"
      >
        {item.title}
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.7, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="text-[11px] md:text-xl font-medium leading-relaxed tracking-wide text-zinc-300 mb-3 max-w-[280px] sm:max-w-xl"
      >
        {item.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -5 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center gap-1 text-[9px] font-bold tracking-widest uppercase text-zinc-100 hover:text-primarylw-2 group/btn"
      >
        <span>Explore</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-1" />
      </motion.div>
    </div>
  );
}

const ThreeDHoverGallery: React.FC<ThreeDHoverGalleryProps> = ({
  images,
  items,
  itemHeight = 500,
  gap = 10,
  perspective = 1000,
  hoverScale = 1.05,
  transitionDuration = 0.5,
  enableKeyboardNavigation = true,
  enableHover = true,
  autoPlay = false,
  autoPlayDelay = 2000,
  className,
  style,
  onImageClick,
  onImageHover,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const isPausedByHover = useRef(false);

  const galleryItems = useMemo<GalleryItem[]>(() => {
    if (items?.length) return items;
    if (images?.length) {
      return images.map((url, i) => {
        const fallback = DEFAULT_ITEMS[i % DEFAULT_ITEMS.length];
        return { url, title: fallback.title, category: fallback.category, description: fallback.description, glow: fallback.glow };
      });
    }
    return DEFAULT_ITEMS;
  }, [images, items]);

  useEffect(() => {
    if (!autoPlay || galleryItems.length === 0) return;

    const id = setInterval(() => {
      if (isPausedByHover.current) return;
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryItems.length));
    }, autoPlayDelay);

    return () => clearInterval(id);
  }, [autoPlay, autoPlayDelay, galleryItems.length]);

  const handleImageClick = useCallback(
    (index: number, item: GalleryItem) => {
      setActiveIndex((prev) => (prev === index ? null : index));
      onImageClick?.(index, item);
    },
    [onImageClick]
  );

  const handleImageHover = useCallback(
    (index: number, item: GalleryItem) => {
      if (!enableHover) return;
      isPausedByHover.current = true;
      setActiveIndex(index);
      onImageHover?.(index, item);
    },
    [enableHover, onImageHover]
  );

  const handleImageLeave = useCallback(() => {
    if (!enableHover) return;
    isPausedByHover.current = false;
    if (!autoPlay) setActiveIndex(null);
  }, [enableHover, autoPlay]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (!enableKeyboardNavigation) return;
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleImageClick(index, galleryItems[index]);
        break;
      case "ArrowLeft": {
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : galleryItems.length - 1;
        (containerRef.current?.children[prevIndex] as HTMLElement)?.focus();
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        const nextIndex = index < galleryItems.length - 1 ? index + 1 : 0;
        (containerRef.current?.children[nextIndex] as HTMLElement)?.focus();
        break;
      }
      case "Escape":
        setActiveIndex(null);
        break;
    }
  };

  return (
    <div
      className={cn("w-full flex items-center justify-center overflow-hidden py-4", className)}
      style={style}
      onMouseLeave={handleImageLeave}
    >
      <div
        ref={containerRef}
        className="flex justify-center items-center w-full"
        style={{ perspective: `${perspective}px`, transformStyle: "preserve-3d", gap: `${gap}px` }}
      >
        {galleryItems.map((item, index) => {
          const isActive = activeIndex === index;
          const isFocused = focusedIndex === index;

          return (
            <motion.div
              key={index}
              role="button"
              tabIndex={enableKeyboardNavigation ? 0 : -1}
              onClick={() => handleImageClick(index, item)}
              onMouseEnter={() => handleImageHover(index, item)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-label={item.title}
              aria-pressed={isActive}
              layout
              animate={{
                rotateY: activeIndex === null ? 0 : index < activeIndex ? 24 : index > activeIndex ? -24 : 0,
              }}
              transition={{
                layout: { type: "spring", stiffness: 100, damping: 17 },
                rotateY: { type: "spring", stiffness: 90, damping: 15 },
              }}
              style={{
                height: typeof itemHeight === "number" ? `${itemHeight}px` : itemHeight,
                zIndex: isActive ? 20 : 10,
                flex: isActive ? 5.8 : 1,
                minWidth: isActive ? "280px" : "60px",
                transformStyle: "preserve-3d",
              }}
              className={cn(
                "relative cursor-pointer select-none overflow-hidden rounded-2xl border transition-all duration-300 bg-zinc-100 dark:bg-zinc-900 shadow-sm",
                isActive
                  ? "border-zinc-300/80 dark:border-zinc-700/60"
                  : activeIndex === null
                    ? "border-zinc-200/50 dark:border-zinc-800/40 hover:border-zinc-300 dark:hover:border-zinc-700/60"
                    : "border-zinc-200/30 dark:border-zinc-800/20",
                isFocused && "ring-2 ring-primarylw ring-offset-2 dark:ring-offset-zinc-950 scale-[1.01] border-primarylw/50"
              )}
            >
              {isActive && item.glow && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl transition-all duration-500 z-10"
                  style={{ boxShadow: `inset 0 0 20px ${item.glow}, 0 0 15px ${item.glow}` }}
                />
              )}

              <motion.div
                animate={{ scale: isActive ? hoverScale : 1 }}
                transition={{ duration: transitionDuration, ease: [0.1, 0.7, 0, 1] }}
                className="absolute inset-0 w-full h-full"
                style={{ backgroundImage: `url(${item.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />

              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t transition-opacity duration-300 z-[2]",
                  isActive ? "from-black/90 via-black/40 to-black/10 opacity-100" : "from-black/60 via-transparent to-transparent opacity-40"
                )}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-5 z-[4] text-white overflow-hidden">
                <AnimatePresence>{isActive && <CardOverlayContent item={item} />}</AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeDHoverGallery;