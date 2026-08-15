import Hero from "@/components/layout/landingPage/hero";
import SoftAurora from "@/components/SoftAurora";
import { ImageMarquee } from "@/components/ui/marquee/imageMarquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="h-screen w-full">
        <div className="h-screen w-full absolute">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#ffffff"
            color2="#1da1f2"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>

        <div className="h-[40vh] w-[65vw] mx-auto flex flex-col justify-center py-2 gap-4 overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold max-w-5xl text-left mt-20">Trusted by Leading <br/> Educational Institutions</h1>
          <ImageMarquee />
        </div>
      </section>
    </main>
  );
}