"use client";
import Hero from "@/components/layout/landingPage/hero";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import { CloudShader } from "@/components/ui/cloud-shader";
import { motion } from "motion/react"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBySection />
      <section className="h-screen w-full flex flex-col">
        <div className="w-[65vw] mx-auto mt-[14vh] flex-1 flex flex-col gap-4 min-h-0">
          <h1 className="text-3xl leading-none shrink-0">
            Google EDLA Certified <br />
            for a True Google Experience.
          </h1>

          <div className="flex-1 w-full flex flex-col gap-2 min-h-0">
            <div className="flex-1 w-full flex gap-2 min-h-0">
              <div className="h-full w-[60%] rounded-xl bg-[#f5f2f0] overflow-hidden relative">
                <Image
                  src="/phone/TMScene1Light.svg"
                  alt="Teachmint mobile app screenshot"
                  height={800}
                  width={800}
                  className="mt-20 scale-120"
                />
              </div>
              <div className="h-full w-[40%] rounded-xl bg-[#f5f2f0] overflow-hidden">

              </div>
            </div>

            <div className="flex-1 w-full flex gap-2 min-h-0">
              <div className="h-full w-full rounded-xl bg-[#f5f2f0] overflow-hidden">

              </div>
              <div className="h-full w-full rounded-xl bg-[#f5f2f0] overflow-hidden">

              </div>
              <div className="h-full w-full rounded-xl bg-[#f5f2f0] overflow-hidden">

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}