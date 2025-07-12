'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';


const topSectionImages = [
    {id: 1, imgSrc: '/images/services/cctv1.jpg',},
    {id: 2, imgSrc: '/images/services/satellite-dish.jpg',},
    {id: 3, imgSrc: '/images/products/camera2.jpg',},
    {id: 4, imgSrc: '/images/products/ip-cameras.jpg',},
];

export default function Products(){
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section>
            <div className="">
                <div className="top-section">
                    <div className='relative'>
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className='h-[300px] md:h-[500px]'
                        >
                            {topSectionImages.map((image, index) => {
                                const isActive = index === activeIndex

                                return (
                                    <SwiperSlide
                                        key={image.id}
                                    >
                                        <div className="absolute bg-black/60 inset-0 z-10"/>
                                        <Image src={image.imgSrc} alt="" fill className="object-cover"/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <h1 className="absolute top-1/2 translate-y-1/2 z-20 font-semibold  text-3xl md:text-6xl text-center text-white flex justify-center w-full items-center">Our Products</h1>
                    </div>
                </div>
            </div>
            <div className="h-screen">

            </div>
        </section>
    )
}