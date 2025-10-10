'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image"
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Zap, Settings, Wrench, Monitor, Smartphone, Globe, Palette, Eye, Code, Search, FileText, ShoppingCart, Database, Star, ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, imageSrc, id }) => {
    // const [expandedService, setExpandedService] = useState(null);
    
    // const toggleService = (serviceIndex) => {
    //     setExpandedService(expandedService === serviceIndex ? null : serviceIndex);
    // };

    return (
        // <div className={`flex flex-col lg:flex-row gap-16 py-4 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        //     {/* Content Section */}
        //     <div className="flex-1">
        //         <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        //         <p className="text-lg mb-6">{description}</p>
                
        //         {/* Services List */}
        //         <div className="space-y-3">
        //             {services.map((service, serviceIndex) => (
        //                 <div key={serviceIndex} className="border-b border-gray-700">
        //                     <button
        //                         onClick={() => toggleService(serviceIndex)}
        //                         className="w-full flex justify-between items-center py-4 text-left hover:text-blue-400 transition-all duration-400 ease-in-out cursor-pointer"
        //                     >
        //                         <div className="flex items-center gap-3">
        //                             <service.icon className="w-5 h-5 text-blue-400" />
        //                             <span className="font-medium">{service.name}</span>
        //                         </div>
        //                         {expandedService === serviceIndex ? 
        //                             <ChevronDown className="w-5 h-5 " /> : 
        //                             <ChevronRight className="w-5 h-5 " />
        //                         }
        //                     </button>
        //                     {expandedService === serviceIndex && (
        //                         <div className="pb-4 pl-8">
        //                             <p className=" leading-relaxed">{service.description}</p>
        //                         </div>
        //                     )}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
            
        //     {/* Image Section */}
        //     <div className="flex-1 flex items-center">
        //         <div className="relative rounded-lg overflow-hidden">
        //             <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-blue-800/20 z-10"></div>
        //             <img 
        //                 src={imageSrc} 
        //                 alt={title}
        //                 className="w-full h-full object-cover"
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="relative max-w-xl w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                priority
            />
            <div className="absolute top-4 left-4 z-20  text-white font-extrabold text-4xl px-4 py-2">
                {id}
            </div>
            <div className="absolute bottom-0 z-20 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {description}
                </p>
            </div>
        </div>

    );
};

export default function services(){

    const services = [
        {
            id: 1,
            imageSrc: "/images/home/dstv-installation.png",
            title: "DSTV Installation & Maintenance",
            description:
            "Supply, installation, and maintenance of DSTV dishes, decoders, and accessories for homes and businesses.",
        },
        {
            id: 2,
            imageSrc: "/images/home/cctv-installation.png",
            title: "CCTV Surveillance Systems",
            description:
            "Professional installation of surveillance video systems, including Dahua and Hikvision NVRs, DVRs, XVRs, and analog/IP cameras.",
        },
        {
            id: 3,
            imageSrc: "/images/services/ip-camera-installation.jpeg",
            title: "IP & Wireless Cameras",
            description:
            "Secure your premises with advanced IP and wireless cameras, ensuring clear monitoring and reliable performance.",
        },
        {
            id: 4,
            imageSrc: "/images/products/access-control1.jpeg",
            title: "Access Control Systems",
            description:
            "Installation and maintenance of smart access control solutions for enhanced security in residential and commercial spaces.",
        },
        {
            id: 5,
            imageSrc: "/images/services/intercom-install.jpeg",
            title: "Intercom Systems",
            description:
            "Clear and reliable intercom systems for communication and security within buildings and gated premises.",
        },
        {
            id: 6,
            imageSrc: "/images/services/surveillance-products.jpeg",
            title: "Surveillance Products Supply",
            description:
            "Trusted supplier of surveillance HDDs, Dahua & Hikvision products, including NVRs, DVRs, XVRs, cameras, and accessories.",
        },
        {
            id: 7,
            imageSrc: "/images/home/electrical-wiring1.jpeg",
            title: "Electrical Wiring Consulting",
            description:
            "Expert consulting services in electrical wiring, ensuring safe, efficient, and compliant installations.",
        },
        {
            id: 8,
            imageSrc: "/images/services/training.jpeg",
            title: "Capacity Building & Training",
            description:
            "Bridging the knowledge gap by offering training and capacity building in DSTV, CCTV, access control, and related technologies.",
        },
        {
            id: 9,
            imageSrc: "/images/services/support.jpeg",
            title: "After-Sales Support & Maintenance",
            description:
            "Dedicated support and maintenance services to keep your security and communication systems running smoothly.",
        },
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

    return (
        <section>
            <div className="h-[400px] md:h-[600px] relative">
                <div className="top-section">
                    <div className="absolute bg-black/60 inset-0 z-10"/>
                    <Image src="/images/contact/field-engineer.jpg" alt="" fill className="object-cover"/>
                    
                    <motion.div 
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 space-y-6 mt-4'
                        variants={headingVariant}
                        initial={headingVariant.initial}
                        animate={headingVariant.visible}
                        viewport={{ once: true }}
                    >
                        <h1 className="font-bold text-white text-4xl md:text-7xl text-center items-center">Our Services</h1>
                        <p className='text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed'>We craft world-class electrical experiences that elevate your brand and drive results. From planning to installation, we bring your vision to life.</p>
                    </motion.div>
                </div>
            </div>

            <div className="w-full py-12 lg:py-14 px-2 mt-12">
                <div className="container mx-auto max-w-7xl lg:max-w-full">
                    <section className="py-6 lg:py-12 px-2">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard 
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    imageSrc={service.imageSrc}
                                    id={service.id}
                                    // services={service.services}
                                    // index={index}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className="px-6">
                <div 
                    className="mb-16 text-center rounded-lg bg-[url(/images/services/engineering-team.jpg)] bg-[#817d7d] bg-cover bg-center bg-blend-multiply bg-fixed w-full h-[500px]"
                    style={{ 
                    // backgroundImage: `url("/images/services/engineering-team.jpg")`,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // backgroundBlendMode: "multiply",
                    // backgroundColor: '#999999',
                    // width: "100%",
                    // height: '500px',
                    // backgroundAttachment: 'fixed'
                    }}>
                    <div className="p-14 lg:p-20 ">
                        <h3
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Need a custom solution?
                        </h3>
                        <p className="text-white text-md md:text-lg mb-8 max-w-2xl mx-auto">
                            Can't find what you're looking for? Our team can create tailored electrical solutions to meet your specific requirements.
                        </p>
                        <Link href="/contact-us">
                            <Button className="border-2 bg-white/10 rounded-none cursor-pointer hover:bg-white hover:text-black text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                            Contact Our Experts
                            </Button>
                        </Link>
                </div>
            </div>
            </div>
        </section>
    )
}