import { AboutUs } from "@/components/features/home-page/about-us";
import BottomCta from "@/components/features/home-page/bottom-cta";
import Faqs from "@/components/features/home-page/faqs";
import { Hero } from "@/components/features/home-page/hero-section";
import OurFeatures from "@/components/features/home-page/our-features";
import { Services } from "@/components/features/home-page/our-services";
import Testimonials from "@/components/features/home-page/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <OurFeatures />
      <BottomCta />
      <Testimonials />
      <Faqs />
    </div>
  );
}
