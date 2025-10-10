'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BottomCta = () => {

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
    <div className="relative mb-4 h-[600px] text-center bg-[url(/images/services/engineering-team.jpg)] bg-[#b4b4b4] bg-cover bg-center bg-blend-multiply bg-fixed">
      <div className="p-14 lg:p-20 absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2">
        <motion.h3
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        variants={subHeadingVariant}
        initial={subHeadingVariant.initial}
        animate={subHeadingVariant.animate}
        viewport={{ once: true }}
        >
          Schedule an appointment
        </motion.h3>
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
)
}

export default BottomCta
