import Educators from "@/components/layout/landingPage/educators";
import FeatureCarousel from "@/components/layout/landingPage/features";
import Hero from "@/components/layout/landingPage/hero";
import Support from "@/components/layout/landingPage/support";
import TrustedBySection from "@/components/layout/landingPage/trustedBySection";
import WhiteBoardFunctions from "@/components/layout/landingPage/whiteBoardFunctions";
import InstituteSolutions from "@/components/layout/products/digitalBoardForTeaching/instituteSolutions";


export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBySection />
      <FeatureCarousel />
      <WhiteBoardFunctions />

      <InstituteSolutions />
      <Educators />
      <Support />
    </div>
  )
}