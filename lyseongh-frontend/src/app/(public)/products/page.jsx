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

const ProductDetails = ({ product, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div 
                className="fixed inset-0 bg-black/80 bg-opacity-50 transition-opacity"
                onClick={onClose}
            />
            
            <div className='relative bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto transform transition-all duration-200 ease-out z-50'>
                <button
                    onClick={onClose}
                    className="absolute right-4 cursor-pointer top-4 p-1 text-white hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 shadow-xl z-10"
                >
                    <X size={20} />
                </button>

                <div className='h-64 relative'>
                    <Image 
                        className='w-full h-full object-cover'
                        src={product.productImage}
                        alt={product.productName}
                        fill
                    />
                </div>
                <div className='relative p-6'>
                    <div className='border-b pb-4 flex flex-col gap-y-2'>
                        <h3 className='text-2xl font-bold'>{product.productName}</h3>
                        <p className='text-xl font-semibold'>${product.price}</p>
                    </div>
                    <p className='mt-4 text-gray-600'>{product.description || 'No description available.'}</p>
                </div>
            </div>
        </div>
    )
}

const ProductCard = ({ product, onShowDetails }) => {
    const [showDetailsButton, setShowDetailsButton] = useState(false);

    return (
        <div 
            className='rounded-lg border-none w-full max-w-[400px] h-[400px] overflow-hidden relative bg-white shadow-md hover:shadow-lg transition-shadow'
            onMouseEnter={() => setShowDetailsButton(true)}
            onMouseLeave={() => setShowDetailsButton(false)}
            onClick={() => onShowDetails(product)}
        >
            {showDetailsButton && 
                <div 
                    className='bg-white w-10 h-10 rounded-full p-2 shadow-xl absolute right-2 top-2 cursor-pointer transition-all flex items-center justify-center hover:bg-gray-100 z-10'
                    onClick={() => onShowDetails(product)}
                >
                    <EyeIcon className='w-5 h-5'/>
                </div>
            }
            <div className='border-none h-[70%] relative'>
                <Image 
                    className='w-full h-full object-cover'
                    src={product.productImage}
                    alt={product.productName}
                    fill
                />
            </div>
            <div className='text-center px-4 flex flex-col space-y-2 gap-y-2 bg-gray-200 h-[30%] justify-center'>
                <p className='text-xl font-semibold'>{product.productName}</p>
                <span className='font-medium'>${product.price}</span>
            </div>
        </div>
    )
}

export default function Products(){
    const topSectionImages = [
        {id: 1, imgSrc: '/images/services/cctv1.jpg',},
        {id: 2, imgSrc: '/images/services/satellite-dish.jpg',},
        {id: 3, imgSrc: '/images/products/camera3.jpg',},
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

    const products = [
        {
            id: 1,
            productName: 'Dstv Dishes',
            category: 'dstv',
            productImage: '/images/products/dstv-dish1.jpg',
            description: 'High-quality DSTV satellite dishes for clear signal reception.',
            price: '250',
            inStock: true,
        },
        {
            id: 2,
            productName: 'CCTV Camera',
            category: 'CCTVs',
            productImage: '/images/products/camera3.jpg',
            description: 'Advanced CCTV cameras with night vision and motion detection.',
            price: '120',
            inStock: true,
        },
        {
            id: 3,
            productName: 'IP Camera',
            category: 'ip-cameras',
            productImage: '/images/products/ip-cameras.jpg',
            description: 'Modern IP cameras with remote access and high-resolution recording.',
            price: '180',
            inStock: true,
        },
        {
            id: 4,
            productName: 'Digital Camera',
            category: 'digital-cameras',
            productImage: '/images/products/camera3.jpg',
            description: 'Professional digital cameras with multiple lenses and features.',
            price: '300',
            inStock: true,
        },
        {
            id: 5,
            productName: 'Dstv Dishes Pro',
            category: 'dstv',
            productImage: '/images/products/dstv-dish1.jpg',
            description: 'Premium DSTV dishes with enhanced signal strength and durability.',
            price: '350',
            inStock: true,
        },
        {
            id: 6,
            productName: 'Advanced CCTV',
            category: 'CCTVs',
            productImage: '/images/products/camera3.jpg',
            description: 'Advanced CCTV systems with AI-powered detection and analytics.',
            price: '220',
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
                
                <div className="min-h-screen relative pt-24 pb-12 bg-gray-100">
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
                    <div className='max-w-7xl mx-auto mt-32 px-6'>
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