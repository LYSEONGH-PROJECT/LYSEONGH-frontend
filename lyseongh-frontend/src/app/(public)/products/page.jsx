'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { EyeIcon, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

const ProductDetails = ({ product, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div 
                className="fixed inset-0 bg-black/80 bg-opacity-50 transition-opacity"
                onClick={onClose}
            />
            
            <div className='relative bg-white rounded-lg shadow-xl w-full max-w-5xl h-[600px] p-6 transition-all duration-200 ease-out z-50'>
                <button
                    onClick={onClose}
                    className="absolute right-4 cursor-pointer top-4 p-1 bg-gray-200 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 shadow-xl z-10"
                >
                    <X size={20} />
                </button>

                <div className='flex md:flex-row flex-col gap-x-1'>
                    <div className='flex-1/2'>
                        <Image 
                            className='flex items-center justify-center w-full h-full object-contain'
                            src={product.productImage}
                            alt={product.productName}
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='relative p-6'>
                        <div className='pb-4 flex flex-col gap-y-3 text-blue-900 text-2xl md:text-3xl'>
                            <h3 className=' font-bold'>{product.productName}</h3>
                            <p className='font-semibold'>${product.price}</p>
                        </div>
                        <Separator />
                        <p className='mt-4 text-gray-600'>{product.description || 'No description available.'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductCard = ({ product, onShowDetails }) => {
    const [showDetailsButton, setShowDetailsButton] = useState(false);

    return (
        <div 
            className='rounded-lg border-none h-[500px] w-full max-w-xl relative bg-transparent shadow-md hover:shadow-lg transition-shadow p-2'
            onMouseEnter={() => setShowDetailsButton(true)}
            onMouseLeave={() => setShowDetailsButton(false)}
            onClick={() => onShowDetails(product)}
        >
            {showDetailsButton && 
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div 
                            className='bg-white w-10 h-10 rounded-full p-2 shadow-xl absolute right-2 top-2 cursor-pointer transition-all delay-75 ease-linear duration-150 flex items-center justify-center hover:bg-gray-100 z-10'
                            onClick={() => onShowDetails(product)}
                        >
                            <EyeIcon className='w-5 h-5'/>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Show Details</p>
                    </TooltipContent>
                </Tooltip>
            }
            <div className='border-none h-[80%] relative'>
                <Image 
                    className='w-full h-full object-contain'
                    src={product.productImage}
                    alt={product.productName}
                    fill
                    sizes=''
                />
            </div>
            <div className='text-center px-4 py-2 font-bold space-y-1 bg-transparent'>
                <p className='text-blue-500 text-2xl'>{product.productName}</p>
                <span className='text-lg'>${product.price}.00</span>
            </div>
        </div>
    )
}

export default function Products(){
    const topSectionImages = [
        {id: 1, imgSrc: '/images/services/cctv1.jpg',},
        {id: 2, imgSrc: '/images/services/satellite-dish.jpg',},
        {id: 3, imgSrc: '/images/products/access-control.jpeg',},
        {id: 4, imgSrc: '/images/products/ip-cameras.jpg',},
    ];

    const headingVariant = {
        initial: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    const productsVariant = {
        
    }

    const products = [
        {
            id: 1,
            productName: 'Dstv Dish plus Decoder',
            category: 'dstv',
            productImage: '/images/products/dstv-decoder-plus-dish.jpeg',
            description: 'High-quality DSTV satellite dishes for clear signal reception.',
            price: 250,
            inStock: true,
        },
        {
            id: 2,
            productName: 'HIKVISION CCTV Camera',
            category: 'CCTVs',
            productImage: '/images/products/hikvision-cctv-camera.jpeg',
            description: 'Advanced CCTV cameras with night vision and motion detection.',
            price: 120,
            inStock: true,
        },
        {
            id: 3,
            productName: 'HIKVISION DVR',
            category: 'ip-cameras',
            productImage: '/images/products/hikvision-dvr.jpeg',
            description: 'Modern IP cameras with remote access and high-resolution recording.',
            price: 180,
            inStock: true,
        },
        {
            id: 4,
            productName: 'HIKVISION NVR',
            category: 'digital-cameras',
            productImage: '/images/products/hikvision-nvr.jpeg',
            description: 'Professional digital cameras with multiple lenses and features.',
            price: 300,
            inStock: true,
        },
        {
            id: 5,
            productName: 'Dahua CCTV Camera',
            category: 'dstv',
            productImage: '/images/products/dahua-cctv-camera1.jpeg',
            description: 'Premium DSTV dishes with enhanced signal strength and durability.',
            price: 350,
            inStock: true,
        },
        {
            id: 6,
            productName: 'Dahua IP Camera',
            category: 'dstv',
            productImage: '/images/products/dahua-ip-camera.jpeg',
            description: 'Premium DSTV dishes with enhanced signal strength and durability.',
            price: 350,
            inStock: true,
        },
        {
            id: 7,
            productName: 'Dahua NVR',
            category: 'CCTVs',
            productImage: '/images/products/dahua-nvr.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 220,
            inStock: true,
        },
        {
            id: 8,
            productName: 'Dahua XVR',
            category: 'Cables',
            productImage: '/images/products/dahua-xvr.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 45,
            inStock: true,
        },
        {
            id: 9,
            productName: 'Wireless Camera',
            category: 'CCTVs',
            productImage: '/images/products/wireless-camera.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 80,
            inStock: true,
        },
        {
            id: 10,
            productName: 'Surveillance Hard Disk Drive',
            category: 'CCTVs',
            productImage: '/images/products/surveillance-hdd.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 80,
            inStock: true,
        },
        {
            id: 11,
            productName: 'Coaxical Cable',
            category: 'Cables',
            productImage: '/images/products/coaxical-cable.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 80,
            inStock: true,
        },
        {
            id: 12,
            productName: 'Ethernet Cable',
            category: 'Cables',
            productImage: '/images/products/ethernet-cable.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 80,
            inStock: true,
        },
        {
            id: 13,
            productName: 'RJ-45 Connectors',
            category: 'Cables',
            productImage: '/images/products/rj-45-connectors.jpeg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: 80,
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
            id: "dstv",
            name: "DSTV Dishes",
            count: products.filter((p) => p.category === "dstv").length
        },
        {
            id: "CCTVs",
            name: "CCTVs",
            count: products.filter((p) => p.category === "CCTVs").length
        },
        {
            id: "ip-cameras",
            name: "IP Cameras",
            count: products.filter((p) => p.category === "ip-cameras").length
        },
        {
            id: "digital-cameras",
            name: "Digital Cameras",
            count: products.filter((p) => p.category === "digital-cameras").length
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
        setIsDetailsOpen(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
        setSelectedProduct(null);
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        if (categoryId === "all") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === categoryId));
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        
        if (value === "") {
            if (selectedCategory === "all") {
                setFilteredProducts(products);
            } else {
                setFilteredProducts(products.filter(product => product.category === selectedCategory));
            }
        } else {
            const filtered = products.filter(product => 
                product.productName.toLowerCase().includes(value.toLowerCase()) &&
                (selectedCategory === "all" || product.category === selectedCategory)
            );
            setFilteredProducts(filtered);
        }
    };

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
                                return (
                                    <SwiperSlide key={image.id}>
                                        <div className="absolute bg-black/60 inset-0 z-10"/>
                                        <Image 
                                            src={image.imgSrc} 
                                            alt="" 
                                            fill 
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <motion.div 
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 space-y-6 mt-4'
                            variants={headingVariant}
                            initial="initial"
                            animate="visible"
                            viewport={{ once: true }}
                        >
                            <h1 className="font-bold text-white text-4xl md:text-7xl text-center items-center">Our Products</h1>
                            <p className='text-center text-white text-xl md:text-2xl'>Discover our wide range of electrical products and supplies for every need</p>
                        </motion.div>
                    </div>
                </div>
                
                <div className="min-h-screen relative pt-24 pb-12 ">
                    {/* Filter Pane */}
                    <div className='max-w-sm md:max-w-7xl w-full mx-auto p-6 absolute left-1/2 -translate-x-1/2 -top-12 z-20 bg-white rounded-md shadow-xl'>
                        <h3 className='md:text-xl font-bold mb-4 text-blue-600'>Filters</h3>

                        <div className="space-y-4">
                            <label className='text-gray-700'>
                                Search
                            </label>
                            <div className='flex flex-col md:flex-row gap-4 w-full'>
                                <div className='w-full md:w-auto'>
                                    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                                        <SelectTrigger className="w-full md:w-[200px]">
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
                                    <div className='border px-3 py-2 flex items-center gap-x-2 rounded-md'>
                                        <Search className='text-gray-400' size={16}/>
                                        <input 
                                            type="text" 
                                            placeholder='Search products...' 
                                            className='w-full border-none outline-none'
                                            value={searchValue}
                                            onChange={handleSearchChange}
                                        />
                                        {searchValue && (
                                            <X 
                                                className='text-gray-400 cursor-pointer' 
                                                size={16}
                                                onClick={() => {
                                                    setSearchValue("");
                                                    if (selectedCategory === "all") {
                                                        setFilteredProducts(products);
                                                    } else {
                                                        setFilteredProducts(products.filter(product => product.category === selectedCategory));
                                                    }
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className='mt-32 px-4 max-w-full md:max-w-9/10 mx-auto'>
                        {filteredProducts.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-4'>
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onShowDetails={handleShowDetails}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className='text-center py-12'>
                                <p className='text-xl text-gray-500'>No products found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {selectedProduct && (
                <ProductDetails 
                    product={selectedProduct} 
                    isOpen={isDetailsOpen} 
                    onClose={handleCloseDetails}
                />
            )}
        </section>
    )
}