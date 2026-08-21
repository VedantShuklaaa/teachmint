"use client";
import Hero from "@/components/layout/landingPage/hero";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import Orb from "@/components/Orb";
import InteractiveGridBackground from "@/components/ui/background/interactiveGridBackground";
import { CloudShader } from "@/components/ui/cloud-shader";
import SpotlightText from "@/components/ui/text/spotlightTextRevealEffect";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const CONTAINER_DURATION = 1;

const CERTIFICATIONS = [
  { src: "/certifications/edla.png", alt: "GOOGLE EDLA certification" },
  { src: "/certifications/cloud.png", alt: "GOOGLE Cloud certification" },
  { src: "/certifications/ce.png", alt: "CE certification" },
  { src: "/certifications/fc.png", alt: "FC certification" },
  { src: "/certifications/iso.png", alt: "ISO certification" },
];

export default function Home() {
  return (
    <main className="bg-background relative h-screen w-full overflow-hidden">
      <Image
        src="/bg-final.png"
        alt="BACKGROUND IMAGE"
        height={1080}
        width={1720}
        className="absolute -top-15 left-1/2 -translate-x-1/2 object-cover"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: CONTAINER_DURATION, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-between text-center px-6"
      >
        <div />
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: CONTAINER_DURATION,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-none text-white font-[times] max-w-5xl"
          >
            <span className="bg-gradient-to-r from-[#ea4335] via-[#fbbc05] via-[#34a853] to-[#4285f4] bg-clip-text text-transparent">
              Google
            </span>{" "}
            EDLA Certified AI-Powered Connected Classroom Device
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: CONTAINER_DURATION + 0.7,
              ease: "easeOut",
            }}
            className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl font-inter"
          >
            Transform teaching and learning with our all-in-one Interactive
            Whiteboard, which leverages AI &amp; Cloud.
          </motion.p>
        </div>

        <div className="flex gap-4 mt-8">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.src}
              className="h-20 w-20 relative shrink-0"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain bg-transparent"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}