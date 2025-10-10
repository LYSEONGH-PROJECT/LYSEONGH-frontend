'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, LucideQuote, User  } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ text, customer }) => {
    return (
        <div className="p-4 md:p-8 flex flex-col gap-y-4 border max-w-2xl">
            <div className="">
                {/* <Quote fill="blue" size={30} stroke="none"/> */}
                <FontAwesomeIcon icon={faQuoteRight} color="blue" size="30" />
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
                <div className="text-gray-800">
                    <p>{text}</p>
                </div>
                <div className="flex items-center gap-x-4 mt-2">
                    <div className="w-15 h-15 bg-gray-100 rounded-full p-1 flex items-center justify-center">
                        <User />
                    </div>
                    <span className="font-semibold text-lg">{customer}</span>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {

    const subHeadingVariant = {
        initial: {
        y: 50,
        opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
            }
        },
    };

  const headingVariant = {
    initial: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const testimonials = [
    { id: 1, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Akwasi Boadi"},
    { id: 2, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Adwoa Mansah"},
    { id: 3, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Kwame Dzokoto"},
    { id: 4, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Kwaku Sasabro"},
    { id: 5, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Naa Atswei"},
    { id: 6, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Kwadwo Asam"},
  ];

  return (
    <div className="w-full py-20 lg:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-full md:max-w-4/5">
            <div className="flex-1 space-y-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <motion.span 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200"
                    variants={subHeadingVariant}
                    initial={subHeadingVariant.initial}
                    whileInView={subHeadingVariant.animate}
                    viewport={{ once: true }}
                    >
                    Testimonials
                    </motion.span>
                    <motion.h2 
                    className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center"
                    variants={headingVariant}
                    initial={headingVariant.initial}
                    whileInView={headingVariant.visible}
                    viewport={{ once: true }}
                    >
                    Testimonials that reflect our <span className="text-blue-600"> <br /> consistent efforts</span>
                    </motion.h2>
                </div>
            </div>

            <div className="">
                <div className="mt-8">
                    <p className="text-lg text-gray-500 text-center">The feedback from our clients speaks volumes about the quality of our services. Read how we’ve helped them with reliable solutions.</p>
                </div>

                <div className="mt-6">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                    >
                        {testimonials.map((testimonial) => {
                            return (
                                <SwiperSlide key={testimonial.id}>
                                    <TestimonialCard text={testimonial.text} customer={testimonial.customer}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials
