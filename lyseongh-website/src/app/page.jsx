import { Hero } from "@/components/features/home-page/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="h-screen">
        <h2></h2>
      </div>
    </div>
  );
}
