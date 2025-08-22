'use client';

import Image from "next/image"
import { motion } from 'framer-motion';

const ServiceCard = ({ title, }) => {
    return (
        <div className="flex space-x-4">
            {/* Content Section */}
            <div className="flex-1">
                <h2>{title}</h2>
                <p>{}</p>
            </div>

            {/* Image Section */}
            <div className="flex-1">

            </div>
        </div>
    )
}

export default function services(){

    const services = [
        {
            id: "",
            title: "",
            desc: "",
            imageSrc: ""
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
                        <p className='text-center text-white text-xl md:text-2xl'></p>
                    </motion.div>
                </div>
            </div>

            <div className="h-screen w-full py-20 lg:py-32 px-6">
                <div className="container mx-auto max-w-7xl">

                </div>
            </div>
        </section>
    )
}