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

  const imageVariant = {
    initial: {
      x: 20,
      opacity: 0.5
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.7,
        delay: 0.5
      }
    }
  }

  return (
    <div className="w-full py-20 lg:py-32 px-2 bg-white">
        <div className="container mx-auto max-w-full md:max-w-4/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1/2 space-y-6">
                <div className="">
                  <motion.span 
                  className="inline-flex items-center font-bold text-blue-700 uppercase tracking-wider"
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
                    <div key={index} className="py-6 px-4 rounded-lg bg-white shadow-sm cursor-pointer group hover:bg-blue-500 hover:shadow-xl transition-all duration-200 ease-linear">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-blue-600 group-hover:stroke-white" />
                      </div>
                      <span className="text-md md:text-lg font-medium group-hover:text-white">{feature.head}</span>
                      <p className="text-md pt-2 group-hover:text-white">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] bg-white">
                <motion.div 
                className="absolute bottom-0 left-0 translate-x-2/3 translate-y-1/3 w-[60%] h-[80%] overflow-hidden border-[10px] border-white z-20"
                variants={imageVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >
                  <div className="absolute bg-black/20 inset-0 z-10 "/>
                  <Image
                    width={400}
                    height={400}
                    src="/images/home/electrical-wiring.jpg"
                    alt="LYSEONGH professional electrical services"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="absolute top-0 left-0 w-[60%] h-[80%] overflow-hidden border-[10px] border-white z-10">
                  <div className="absolute bg-black/10 inset-0 z-10 "/>
                  <Image 
                    width={600}
                    height={400}
                    src="/images/home/best-electrician.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
