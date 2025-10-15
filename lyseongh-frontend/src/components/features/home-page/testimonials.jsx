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
        <div className="p-4 md:py-8 md:px-16 flex flex-col gap-y-4 border max-w-2xl">
            <div className="">
                {/* <Quote fill="blue" size={24} stroke="none"/> */}
                {/* <FontAwesomeIcon icon={faQuoteRight} color="blue" size="20" /> */}
                <svg width="40px" height="40px" viewBox="0 0 48 48" fill="blue" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z" fill="#077ce9"></path> <path fillRule="evenodd" clipRule="evenodd" d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z" fill="#077ce9"></path> </g></svg>
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
                <div className="">
                    <p className="text-lg tracking-wider">{text}</p>
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
    { id: 4, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Kwaku Danso"},
    { id: 5, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Naa Atswei"},
    { id: 6, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dolore quia veniam ipsum totam, at, earum quis molestiae nulla incidunt quo necessitatibus optio tempore. Laudantium ab voluptates impedit tenetur!", customer: "Kwadwo Asam"},
  ];

  return (
    <div className="w-full h-screen pt-4 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-full md:max-w-4/5">
            <div className="flex-1 space-y-6">
                <div className="flex flex-col items-center justify-center">
                    <motion.span 
                    className="font-bold text-blue-700 uppercase tracking-wider"
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

                <div className="mt-4 md:mt-24">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                        }}
                        loop={true}
                        pagination={{ clickable: true, }}
                        className="mx-auto"
                    >
                        {testimonials.map((testimonial) => {
                            return (
                                <SwiperSlide key={testimonial.id} className="py-12 mx-auto">
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
