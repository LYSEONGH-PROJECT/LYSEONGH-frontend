import { AboutUs } from "@/components/features/home-page/about-us";
import { Hero } from "@/components/features/home-page/hero-section";
import { Services } from "@/components/features/home-page/our-services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
