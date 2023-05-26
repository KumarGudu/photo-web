import { HeroSection } from "@/components/hero";
import { Feature } from "@/components/feature";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";
import { Testimonial } from "@/components/testimonial";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Stats />
      <Team />
      <Pricing />
      <Testimonial />
    </>
  )
}
