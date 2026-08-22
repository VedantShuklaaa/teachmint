import Educators from "@/components/layout/landingPage/educators";
import FeatureCarousel from "@/components/layout/landingPage/features";
import Hero from "@/components/layout/landingPage/heroRemake";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import Video from "@/components/layout/landingPage/videoSection";
import WhiteBoardFunctions from "@/components/layout/landingPage/whiteBoardFunctions";


export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <FeatureCarousel />
      <WhiteBoardFunctions />
      <TrustedBySection />
      <Educators />
    </div>
  )
}