'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ imageSrc, buttonText, serviceTitle, description }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          width={400}
          height={250}
          alt={serviceTitle}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8 space-y-6">
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {serviceTitle}
          </h4>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {description || "Professional installation and maintenance services tailored to your specific needs. Our experienced technicians ensure quality workmanship and customer satisfaction."}
          </p>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group/btn"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

// Enhanced Services Component
export function Services() {
  const services = [
    {
      imageSrc: "/images/home/cctv-installation.png",
      serviceTitle: "CCTV Installation",
      description: "Complete security camera system installation and setup for residential and commercial properties with 24/7 monitoring capabilities."
    },
    {
      imageSrc: "/images/home/dstv-installation1.jpeg",
      serviceTitle: "DSTV Installation",
      description: "Professional satellite TV installation, decoder setup, and signal optimization for crystal-clear entertainment experience."
    },
    {
      imageSrc: "/images/home/electrical-wiring1.jpeg",
      serviceTitle: "Electrical Wiring",
      description: "Safe and code-compliant electrical wiring services for new constructions, renovations, and electrical system upgrades."
    }
  ];

  return (
    <section className="">
      <div className="container mx-auto max-w-7xl py-20 lg:py-24 px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive electrical and technical solutions delivered by our expert team of certified professionals.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              Browse All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              serviceTitle={service.serviceTitle}
              description={service.description}
              buttonText="Get Quote"
            />
          ))}
        </div>
      </div>

        {/* Bottom CTA */}
        <div 
          className="mb-16 text-center"
          style={{ 
            backgroundImage: `url("/images/services/engineering-team.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: "multiply",
            backgroundColor: '#999999',
            // height: '400px'
            }}>
          <div className="p-14 lg:p-20 ">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white text-md md:text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can create tailored electrical solutions to meet your specific requirements.
            </p>
            <Button className="border-2 bg-white/10 rounded-none cursor-pointer hover:bg-white hover:text-black text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Our Experts
            </Button>
          </div>
        </div>

    </section>
  );
}






// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// const ServiceCard = ({ imageSrc, buttonText, serviceTitle }) => {
//     return (
//         <div className="flex flex-col max-w-md shadow-2xl rounded-md">
//             <div className="aspect-video overflow-hidden">
//                 <Image
//                     src={imageSrc}
//                     width={400}
//                     height={100}
//                     alt=""
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//             <div className="px-4 py-8 flex flex-col gap-y-4">
//                 <h4 className="font-semibold">{serviceTitle}</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium eius molestias. Aperiam possimus eaque esse! Ex aliquam quisquam molestiae autem sunt, reiciendis, vitae culpa tenetur et sapiente libero reprehenderit?</p>
//                 <Button className="block">Learn More</Button>
//             </div>
//         </div>
//     )
// }

// export function Services(){
//     return (
//         <section className="bg-gray-50 py-20 px-6">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between">
//                     <div className="">
//                         <h2 className="text-blue-600 font-semibold text-lg">Our Services</h2>
//                         <h3 className="font-bold text-3xl">What We Offer</h3>
//                     </div>
//                     <div className="hidden md:flex">
//                         <Link className="p-4 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out" href="/services">
//                             Browse All Services
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="py-8 mt-4 flex flex-col md:flex-row justify-between gap-6">
//                 <ServiceCard imageSrc="/images/home/cctv-installation.png" serviceTitle="CCTV installation" />
//                 <ServiceCard imageSrc="/images/home/dstv-installation1.jpeg" serviceTitle="DSTV installation" />
//                 <ServiceCard imageSrc="/images/home/electrical-wiring1.jpeg" serviceTitle="Electrical Wiring" />
//             </div>
//         </section>
//     )
// }