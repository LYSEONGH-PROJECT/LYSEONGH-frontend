'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users, CheckCircle } from "lucide-react";

// Enhanced AboutUs Component
export function AboutUs() {
  const features = [
    { icon: Shield, text: "Safe & Reliable Installations" },
    { icon: Zap, text: "Professional Electrical Services" },
    { icon: Users, text: "Expert Capacity Building" },
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
        duration: 0.3,
        delay: 0.2,
        ease: "linear",
      }
    },
  };

  const headingVariant = {
    initial: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        durastion: 0.3,
        delay: 0.4,
        ease: "linear"
      }
    }
  };

  return (
    <section className="w-full py-20 lg:py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200"
                variants={subHeadingVariant}
                initial={subHeadingVariant.initial}
                whileInView={subHeadingVariant.animate}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                variants={headingVariant}
                initial={headingVariant.initial}
                whileInView={headingVariant.visible}
                viewport={{ once: true }}
              >
                Our <span className="text-blue-600">Story</span>
              </motion.h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">LYSEONGH</strong> offers professional consulting services in 
                <span className="text-blue-600 font-medium"> Electrical Wiring and Capacity Building</span>, 
                bridging the knowledge gap in these service areas.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With years of experience, we provide safe and reliable installations for both residential 
                and commercial properties. Our commitment to excellence and customer satisfaction drives 
                us to deliver innovative solutions that meet the highest industry standards.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                width={800}
                height={600}
                src="/images/about/landing-about-us.jpg"
                alt="LYSEONGH professional electrical services"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted by 500+ Clients</h4>
                    <p className="text-sm text-gray-600">Professional installations since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




// 'use client';

// import Image from "next/image";

// export function AboutUs() {
//   return (
//     <section className="w-full py-20 px-6 bg-white">
//         <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row justify-between gap-8">
//                 <div className="basis-1/2">
//                     <h2 className="text-lg font-semibold text-blue-600">
//                     About Us
//                     </h2>
//                     <h3 className="text-3xl font-bold mb-4">Our Story</h3>
//                     <p className="text-md md:text-lg text-gray-700 mb-1">
//                     LYSEONGH offers professional consulting services in Electrical Wiring and Capacity Building, 
//                     bridging the knowledge gap in these service areas.
//                     With years of experience, we provide safe and reliable installations for both residential 
//                     and commercial properties.
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quia molestias, aut mollitia facilis, illo quidem commodi ducimus repellat iusto sequi possimus. Facilis voluptatum cupiditate exercitationem cum. Omnis, eos accusamus?
//                     </p>
//                 </div>
//                 <div className="relative aspect-video overflow-hidden basis-1/2">
//                     <Image 
//                         width={800}
//                         height={400}
//                         src="/images/about/landing-about-us.jpg"
//                         alt=""
//                     />
//                 </div>
//             </div>
//         </div>
//     </section>
//   );
// }