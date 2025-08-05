'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductCard = () => {

}

export default function Products(){
    const topSectionImages = [
        {id: 1, imgSrc: '/images/services/cctv1.jpg',},
        {id: 2, imgSrc: '/images/services/satellite-dish.jpg',},
        {id: 3, imgSrc: '/images/products/camera3.jpg',},
        {id: 4, imgSrc: '/images/products/ip-cameras.jpg',},
    ];

    const products = [
        {
            id: 1,
            name: '',
            category: '',
            image: '',
            description: '',
            inStock: true,
        },
    ];

    const categories = [
        {
            id: "all",
            name: "All Products",
            count: products.length
        },
        {
            id: "CCTVs",
            name: "CCTVs",
            count: products.filter((p) => p.category === "CCTVs").length
        },
        {
            id: "ip-cameras",
            name: "Ip Cameras",
            count: products.filter((p) => p.category === "ip-cameras").length
        },
        {
            id: "digital-cameras",
            name: "Digital Cameras",
            count: products.filter((p) => p.category === "digital-cameras").length
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section>
            <div className="relative">
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
                            className='h-[400px] md:h-[600px]'
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
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 space-y-6 animate-fade-in mt-4'>
                            <h1 className="font-bold text-white text-4xl md:text-7xl text-center items-center">Our Products</h1>
                            <p className='text-center text-white text-xl md:text-2xl'>Discover our wide range of electrical products and supplies for every need</p>
                        </div>
                    </div>
                </div>
                
                <div className="h-screen relative">
                    {/* Filter Pane */}
                    <div className='max-w-sm md:max-w-7xl w-full mx-auto p-6 absolute left-1/2 -translate-x-1/2 -translate-y-12 z-20 bg-white rounded-md shadow-xl'>
                        <h3 className='md:text-xl font-bold mb-4 text-blue-600'>Filters</h3>

                        {/*  */}
                        <div>
                            <label className='mb-6 text-gray-700 '>
                                Search
                            </label>
                            <div className='flex gap-x-4 w-full'>
                                <div className=''>
                                    <Select>
                                        <SelectTrigger className="w-[120px] md:w-[200px]">
                                            <SelectValue placeholder="All products"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.name} ({category.count})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='space-y-2 w-full'>
                                    <div className='border px-2 py-1 flex  items-center gap-x-4 rounded-md'>
                                        <Search className='text-gray-400' size={16}/>
                                        <input type="text" placeholder='Search products...' className='w-full border-none outline-none'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*  */}
                    
                </div>

            </div>










            
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
        </section>
    )
}