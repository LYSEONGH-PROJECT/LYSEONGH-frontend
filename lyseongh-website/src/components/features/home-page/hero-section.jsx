"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

const slides = [
  {
    id: 1,
    imageSrc: "/images/home/cctv-installation.png",
    title: "Professional CCTV Installation",
    subtitle: "Secure your property with our advanced surveillance solutions",
    ctaText: "Get Protected",
    ctaLink: "/services/cctv-installation"
  },
  {
    id: 2,
    imageSrc: "/images/home/dstv-installation.png",
    title: "DStv Installation Services",
    subtitle: "Premium satellite TV installation for your home or business",
    ctaText: "Explore Packages",
    ctaLink: "/services/dstv-installation"
  },
  {
    id: 3,
    imageSrc: "/images/home/electrical-wiring.jpg",
    title: "Electrical Wiring Experts",
    subtitle: "Safe and reliable electrical installations",
    ctaText: "Request Service",
    ctaLink: "/services/electrical-wiring"
  }
];

export function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
        }}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false
        }}
        className="w-full h-screen max-h-[800px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.imageSrc}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                )}
                {slide.ctaText && slide.ctaLink && (
                  <Link
                    href={slide.ctaLink}
                    className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mt-6"
                  >
                    {slide.ctaText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}