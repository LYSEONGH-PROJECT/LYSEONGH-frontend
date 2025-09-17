'use client';

// import { Cardo } from 'next/font/google';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// const cardo = Cardo({ subsets: ["latin"], weight: '700' })

const slides = [
  {
    id: 1,
    imageSrc: '/images/home/cctv-installation1.jpg.webp',
    title: 'Professional CCTV Installation',
    subtitle: 'Secure your property with our advanced surveillance solutions',
    ctaText: 'Get Protected',
    ctaLink: '/services/cctv-installation',
  },
  {
    id: 2,
    imageSrc: '/images/home/dstv-installation.png',
    title: 'DStv Installation Services',
    subtitle: 'Premium satellite TV installation for your home or business',
    ctaText: 'Explore Packages',
    ctaLink: '/services/dstv-installation',
  },
  {
    id: 3,
    imageSrc: '/images/home/electrical-wiring.jpg',
    title: 'Electrical Wiring Experts',
    subtitle: 'Safe and reliable electrical installations',
    ctaText: 'Request Service',
    ctaLink: '/services/electrical-wiring',
  },
];

const textVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,  
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4 
    } 
  },
  exit: { 
    opacity: 0, 
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const imageZoom = {
  initial: { scale: 1.1, opacity: 0.8 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    scale: 1.1, 
    opacity: 0.8,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative">
      <div className='relative w-full h-screen  overflow-hidden'>
        <AnimatePresence mode='popLayout' custom={direction}>
          <motion.div
            key={currentSlide.id}
            className="absolute inset-0 z-0 overflow-hidden"
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imageZoom}
          >
            <Image
              src={currentSlide.imageSrc}
              alt={currentSlide.title}
              fill
              className="object-cover"
              priority={activeIndex === 0}
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <AnimatePresence mode='popLayout' custom={direction}>
            <motion.div
              key={currentSlide.id + '-text'}
              className="max-w-4xl px-4"
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {currentSlide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {currentSlide.subtitle}
              </p>
              <Link
                href={currentSlide.ctaLink}
                className="inline-block px-12 py-4 bg-white/10 hover:bg-white hover:text-black text-white border-2 border-white font-semibold uppercase transition-all duration-300 mt-2"
                aria-label={currentSlide.ctaText}
              >
                {currentSlide.ctaText}
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




// const titleVariant = {
//   hidden: { y: '-20%', opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const subtitleVariant = {
//   hidden: { y: '20%', opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const ctaVariant = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };


{/* <Swiper
  modules={[Pagination, Autoplay, EffectFade]}
  effect='fade'
  fadeEffect={{ crossFade: true }}
  pagination={{
    clickable: true,
    bulletClass: 'swiper-pagination-bullet bg-white/70',
    bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
  }}
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 8000,
    disableOnInteraction: false,
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="w-full h-screen max-h-[800px]"
>
  {slides.map((slide, index) => {
    const isActive = index === activeIndex;

    return (
      <SwiperSlide key={slide.id} className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div
          key={slide.id}
          variants={imageZoom}
          initial="initial"
          animate={ isActive ? "animate" : "initial" }
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
          className='absolute inset-0 w-full'
        >
          <Image
            src={slide.imageSrc}
            alt={slide.title}
            fill
            className="object-cover"
            priority={slide.id === 1}
          />
        </motion.div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-white text-center md:mt-10">
          <div className="max-w-6xl space-y-6">
            <motion.div
                variants={titleVariant}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
            >
                <h1 className={`text-4xl md:text-5xl font-bold drop-shadow-lg tracking-wide`}>
                {slide.title}
                </h1>
            </motion.div>

            {slide.subtitle && (
              <motion.div
                  variants={subtitleVariant}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </motion.div>
            )}

            {slide.ctaText && slide.ctaLink && (
              <motion.div
                variants={ctaVariant}
                initial="hidden"
                animate={isActive ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              >
                <Link
                  href={slide.ctaLink}
                  className="inline-block px-10 py-4 bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-semibold uppercase transition-all duration-200 mt-6"
                >
                  {slide.ctaText}
                </Link>
              </motion.div>
            )}
        </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper> */}
