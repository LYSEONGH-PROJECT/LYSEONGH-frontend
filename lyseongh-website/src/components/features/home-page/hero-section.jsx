"use client"

import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import Image from "next/image";

export function Hero(){
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            className="h-screen"
        >
            <SwiperSlide>
                <Image src="/images/home/cctv-installation.png" width={1000} height={100} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/home/dstv-installation.png" width={1000} height={100} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/home/electrical-wiring.jpg" width={1000} height={100} alt=""/>
            </SwiperSlide>
        </Swiper>
    )
}