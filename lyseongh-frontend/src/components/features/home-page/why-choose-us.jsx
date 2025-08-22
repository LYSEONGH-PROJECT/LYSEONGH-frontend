'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

const WhyChooseUs = () => {

    const features = [
        { icon: Shield, head: "Safe & Reliable Installations", text: "We follow strict safety standards to protect your property and loved ones." },
        { icon: Zap, head: "Professional Electrical Services", text: "We use top-grade materials and proven techniques for long-lasting solutions." },
        { icon: Users, head: "Expert Capacity Building", text: "Certified and highly trained electricians with years of hands-on experience." },
        { icon: Users, head: "Expert Capacity Building", text: "Certified and highly trained electricians with years of hands-on experience." },
    ];

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

  return (
    <div className="w-full py-20 lg:py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                        <motion.span 
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200"
                        variants={subHeadingVariant}
                        initial={subHeadingVariant.initial}
                        whileInView={subHeadingVariant.animate}
                        viewport={{ once: true }}
                        >
                        Our Commitment
                        </motion.span>
                        <motion.h2 
                        className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                        variants={headingVariant}
                        initial={headingVariant.initial}
                        whileInView={headingVariant.visible}
                        viewport={{ once: true }}
                        >
                        Why Choose <span className="text-blue-600">Us</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                        {features.map((feature, index) => (
                        <div key={index} className="py-6 px-4 rounded-lg bg-white shadow-sm cursor-pointer hover:bg-blue-700 hover:text-white hover:shadow-xl transition-all duration-300 linear delay-75">
                            <div className="flex items-center space-x-3 ">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <feature.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium ">{feature.head}</span>
                            </div>
                            <p className="text-sm pt-2">{feature.text}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                        width={800}
                        height={600}
                        src="/images/about/landing-about-us.jpg"
                        alt="LYSEONGH professional electrical services"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
