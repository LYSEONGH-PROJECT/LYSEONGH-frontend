'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Cog, GalleryVertical, GridIcon, Layers, SaveOff, Settings, Shield, SquareStackIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const OurFeatures = () => {

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

  const features = [
    {
      id: 1,
      icon: <GridIcon color="blue"/>,
      title: "24/7 Services",
      desc: "We're here for you any time, day or night, to resolve urgent issues.",
    },
    {
      id: 2,
      icon: <Shield color="blue"/>,
      title: "Safety First Approach",
      desc: "Your safety is our top priority. We follow strict industry standards.",
    },
    {
      id: 3,
      icon: <Settings color="blue"/>,
      title: "Customizable Solutions",
      desc: "We provide tailored electrical services designed.",
    },
    {
      id: 4,
      icon: <Layers color="blue"/>,
      title: "Adavnced Technology",
      desc: "We're here for you any time, day or night, to resolve urgent issues.",
    },
  ]

  return (
    <div className="w-full py-20 lg:py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto max-w-full md:max-w-4/5">
              <div className="flex-1 space-y-6">
                <div className="flex flex-col items-center justify-center">
                  <motion.span 
                  className="font-bold text-blue-700 uppercase tracking-wider"
                  variants={subHeadingVariant}
                  initial={subHeadingVariant.initial}
                  whileInView={subHeadingVariant.animate}
                  viewport={{ once: true }}
                  >
                  Our Features
                  </motion.span>
                  <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center"
                  variants={headingVariant}
                  initial={headingVariant.initial}
                  whileInView={headingVariant.visible}
                  viewport={{ once: true }}
                  >
                  Features that define our quality <span className="text-blue-600"> <br /> and reliability</span>
                  </motion.h2>
                </div>
              </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 mt-12 divide-y-reverse md:divide-x">
                  {features.map((feature) => (
                    <div className="flex" key={feature.id}>
                      <div className="flex flex-col items-center justify-center space-y-4 p-4">
                        <div className="p-2 rounded-full w-15 h-15 flex items-center justify-center bg-blue-100">{feature.icon}</div>
                        <h4 className="text-xl font-semibold">{feature.title}</h4>
                        <p className="text-center">{feature.desc}</p>
                      </div>
                      {/* <Separator orientation="vertical" className="md:block hidden"/> */}
                    </div>
                  ))}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        </div>
    </div>
  )
}

export default OurFeatures
