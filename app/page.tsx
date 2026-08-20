"use client";
import Hero from "@/components/layout/landingPage/hero";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import InteractiveGridBackground from "@/components/ui/background/interactiveGridBackground";
import { CloudShader } from "@/components/ui/cloud-shader";
import SpotlightText from "@/components/ui/text/spotlightTextRevealEffect";
import { motion } from "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBySection />
      {/*<section className="h-screen w-full flex flex-col">
        <div className="w-[65vw] mx-auto mt-[14vh] flex-1 flex flex-col gap-4 min-h-0">
          <h1 className="text-3xl leading-none shrink-0">
            Google EDLA Certified <br />
            for a True Google Experience.
          </h1>

          <div className="flex-1 w-full flex flex-col gap-2 min-h-0">
            <div className="flex-1 w-full flex gap-2 min-h-0">
              <div className="h-full w-[60%] rounded-xl bg-[#E8E5E3] overflow-hidden relative">
                <div className="absolute text-5xl font-bold tracking-tight leading-none text-white sm:text-8xl w-full flex items-center justify-center" style={{ lineHeight: 0.88 }}>
                  <SpotlightText
                    text="GOOGLE EDLA CERTIFIED FOR A TRUE GOOGLE EXPERIENCE"
                    className="text-5xl font-bold tracking-tight leading-none text-white sm:text-8xl"
                    radius={400}
                    gradient="linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)"
                    autoPlay
                    speed={160}
                  />
                </div>
              </div>
              <div className="h-full w-[40%] rounded-xl bg-[#f5f2f0] overflow-hidden border border-[#f5f2f0]">
                <InteractiveGridBackground className="flex min-h-screen items-center justify-center px-6 ">
                  <div className="text-center">
                    <h1 className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text py-4 text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
                      Backgrounds
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      Move your cursor — the grid darkens around it.
                    </p>
                  </div>
                </InteractiveGridBackground>
              </div>
            </div>

            <div className="flex-1 w-full flex gap-2 min-h-0">
              <DigitalBoardCard />
              <DigitalBoardCard2 />
              <div className="h-full w-full rounded-xl bg-[#f5f2f0] overflow-hidden">

              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </main >
  );
}

export function DigitalBoardCard() {
  return (
    <div className="h-full w-full rounded-xl bg-[#E8E5E3] overflow-hidden relative flex items-center justify-center">
      <div
        className="text-5xl font-bold tracking-tight leading-none text-white sm:text-[4.2rem] z-11"
        style={{ lineHeight: 0.85 }}
      >
        <p>Access your favorite apps on our Digital Board.</p>
      </div>

      <motion.div
        className="absolute z-10"
        initial={{ filter: "blur(0px)" }}
        whileInView={{ filter: "blur(12px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/elements/PlaystoreColoredMaterial.svg"
          alt="Teachmint mobile app screenshot"
          height={250}
          width={250}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}


export function DigitalBoardCard2() {
  return (
    <div className="h-full w-full rounded-xl bg-[#E8E5E3] overflow-hidden relative flex items-center justify-center">
      <div
        className="text-5xl font-bold tracking-tight leading-none text-white sm:text-[4.2rem] z-11"
        style={{ lineHeight: 0.85 }}
      >
        <p>Authentic, future-ready classroom experience.</p>
      </div>

      <motion.div
        className="absolute z-10"
        initial={{ filter: "blur(0px)" }}
        whileInView={{ filter: "blur(12px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/elements/androidLight.svg"
          alt="Teachmint mobile app screenshot"
          height={250}
          width={250}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}


export function DigitalBoardCard3() {
  return (
    <div className="h-full w-full rounded-xl bg-[#E8E5E3] overflow-hidden relative flex items-center justify-center">
      <div
        className="text-5xl font-bold tracking-tight leading-none text-white sm:text-[4.2rem] z-11"
        style={{ lineHeight: 0.85 }}
      >
        <p>Authentic, future-ready classroom experience.</p>
      </div>

      <motion.div
        className="absolute z-10"
        initial={{ filter: "blur(0px)" }}
        whileInView={{ filter: "blur(12px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/elements/androidLight.svg"
          alt="Teachmint mobile app screenshot"
          height={250}
          width={250}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}