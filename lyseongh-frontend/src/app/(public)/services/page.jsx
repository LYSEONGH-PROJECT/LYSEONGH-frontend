'use client';

import { useState } from "react";

import Image from "next/image"
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Zap, Settings, Wrench, Monitor, Smartphone, Globe, Palette, Eye, Code, Search, FileText, ShoppingCart, Database, Star, ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, imageSrc, services, index }) => {
    const [expandedService, setExpandedService] = useState(null);
    
    const toggleService = (serviceIndex) => {
        setExpandedService(expandedService === serviceIndex ? null : serviceIndex);
    };

    return (
        <div className={`flex flex-col lg:flex-row gap-16 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content Section */}
            <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-6">{description}</p>
                
                {/* Services List */}
                <div className="space-y-3">
                    {services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border-b border-gray-700">
                            <button
                                onClick={() => toggleService(serviceIndex)}
                                className="w-full flex justify-between items-center py-4 text-left hover:text-blue-400 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <service.icon className="w-5 h-5 text-blue-400" />
                                    <span className="font-medium">{service.name}</span>
                                </div>
                                {expandedService === serviceIndex ? 
                                    <ChevronDown className="w-5 h-5 " /> : 
                                    <ChevronRight className="w-5 h-5 " />
                                }
                            </button>
                            {expandedService === serviceIndex && (
                                <div className="pb-4 pl-8">
                                    <p className=" leading-relaxed">{service.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Image Section */}
            <div className="flex-1">
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                    <img 
                        src={imageSrc} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default function services(){

    const services = [
        {
            id: "electrical-design",
            title: "Electrical System Design",
            description: "We craft world-class electrical experiences that elevate your brand and drive results. From planning to installation, we bring your vision to life.",
            imageSrc: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            services: [
                {
                    name: "Wiring & Prototyping",
                    icon: Zap,
                    description: "Professional electrical wiring solutions with comprehensive prototyping to ensure optimal performance and safety standards."
                },
                {
                    name: "Electrical Panel Design",
                    icon: Settings,
                    description: "Custom electrical panel configurations designed for maximum efficiency, safety, and ease of maintenance."
                },
                {
                    name: "Power Distribution Systems",
                    icon: Wrench,
                    description: "Advanced power distribution planning and implementation for residential, commercial, and industrial applications."
                },
                {
                    name: "Smart Home & Automation",
                    icon: Monitor,
                    description: "Cutting-edge home automation systems that integrate lighting, security, climate control, and entertainment systems."
                }
            ]
        },
        {
            id: "installation-maintenance",
            title: "Installation & Maintenance",
            description: "Transform your business with powerful electrical solutions and strategic consulting services. We help you build a strong electrical infrastructure.",
            imageSrc: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            services: [
                {
                    name: "Electrical Installation",
                    icon: Zap,
                    description: "Complete electrical installation services for new construction, renovations, and system upgrades with certified technicians."
                },
                {
                    name: "Preventive Maintenance",
                    icon: Settings,
                    description: "Regular maintenance programs to prevent electrical failures, ensure safety compliance, and extend system lifespan."
                },
                {
                    name: "Emergency Repairs",
                    icon: Wrench,
                    description: "24/7 emergency electrical repair services to minimize downtime and restore power quickly and safely."
                },
                {
                    name: "System Upgrades",
                    icon: Monitor,
                    description: "Modernization of outdated electrical systems to meet current codes, improve efficiency, and enhance safety."
                }
            ]
        },
        {
            id: "industrial-commercial",
            title: "Industrial & Commercial Solutions",
            description: "Professional electrical engineering and development services that deliver exceptional performance and reliability for your business operations.",
            imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            services: [
                {
                    name: "Industrial Electrical Systems",
                    icon: Settings,
                    description: "Heavy-duty electrical solutions for manufacturing facilities, warehouses, and industrial complexes."
                },
                {
                    name: "Motor Control & Automation",
                    icon: Monitor,
                    description: "Advanced motor control systems and industrial automation solutions to optimize productivity and efficiency."
                },
                {
                    name: "Power Quality Analysis",
                    icon: Search,
                    description: "Comprehensive power quality assessments and solutions to ensure stable, clean power for sensitive equipment."
                },
                {
                    name: "Energy Management Systems",
                    icon: Database,
                    description: "Smart energy management solutions to monitor, analyze, and optimize electrical consumption across your facility."
                }
            ]
        }
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

            <div className="w-full py-20 lg:py-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    <section className="py-10 lg:py-32 px-6">
                        <div className="container mx-auto max-w-7xl my-4 p-4">
                            {services.map((service, index) => (
                                <ServiceCard 
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    imageSrc={service.imageSrc}
                                    services={service.services}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}