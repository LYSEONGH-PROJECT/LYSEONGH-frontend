import { AboutUs } from "@/components/features/home-page/about-us";
import BottomCta from "@/components/features/home-page/bottom-cta";
import { Hero } from "@/components/features/home-page/hero-section";
import OurFeatures from "@/components/features/home-page/our-features";
import { Services } from "@/components/features/home-page/our-services";
import Testimonials from "@/components/features/home-page/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <AboutUs />
      <Services />
      <OurFeatures />
      <Testimonials />
      <BottomCta />
    </div>
  );
}
