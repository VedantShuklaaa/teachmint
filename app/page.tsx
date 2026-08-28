import ClickXIntro from "@/components/layout/landingPage/clickXIntro";
import EduAiIntro from "@/components/layout/landingPage/eduAiIntro";
import Educators from "@/components/layout/landingPage/educators";
import Hero from "@/components/layout/landingPage/hero";
import HeroWhiteboardFeatures from "@/components/layout/landingPage/heroWhiteboardFeatures";
import HeroWhiteboardHardwareFeatures from "@/components/layout/landingPage/heroWhiteboardHardwareFeatures";
import Support from "@/components/layout/landingPage/support";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import VisionXIntro from "@/components/layout/landingPage/visionXIntro";
import InstituteSolutions from "@/components/layout/products/digitalBoardForTeaching/instituteSolutions";


export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBySection />
      <EduAiIntro />
      <HeroWhiteboardFeatures />
      <VisionXIntro />
      <HeroWhiteboardHardwareFeatures />
      <ClickXIntro />
      <InstituteSolutions />
      <Educators />
      <Support />
    </div>
  )
}