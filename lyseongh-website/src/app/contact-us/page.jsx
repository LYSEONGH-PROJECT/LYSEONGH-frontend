'use client';


import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faClock, 
  faPhone, 
  faCheckCircle,
  faHeadset,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { RequestQuoteForm } from "@/components/features/contact-page/RequestQuoteForm";
import { ContactInfo } from "@/components/layout/footer";

export default function Contact(){
    return (
        <div className="relative pb-20 bg-gray-50">
            {/* Enhanced Hero Section */}
            <div className="h-[400px] md:h-[600px] relative overflow-hidden">
                <div className="absolute bg-gradient-to-r from-black/80 via-black/60 to-black/40 inset-0 z-10"/>
                <Image 
                    src="/images/contact/contact-header.jpg" 
                    alt="Contact us header image" 
                    fill 
                    className="object-cover transform hover:scale-105 transition-transform duration-[10s] ease-out"
                    priority
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
                    <div className="space-y-6 animate-fade-in">
                        <h1 className="font-bold text-4xl md:text-7xl text-white mb-4 leading-tight">
                            Contact <span className="text-blue-600">Us</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Get in touch with our expert team for professional electrical and security solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 relative">
                {/* Contact Card */}
                <div className="bg-white shadow-2xl rounded-2xl -mt-16 md:-mt-32 relative z-30 overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-0">
                        {/* Contact Info Section */}
                        <div className="lg:col-span-2 bg-blue-500 p-8 md:p-12 text-white relative overflow-hidden">

                            
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                                    <p className="text-blue-100 leading-relaxed">
                                        Ready to discuss your electrical or security needs? Our team is here to help with professional solutions.
                                    </p>
                                </div>
                                
                                {/* Enhanced Contact Info */}
                                <div className="space-y-6 mb-8">
                                    <ContactInfo className="space-y-6" />
                                </div>
                                
                                {/* Working Hours - Enhanced */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <FontAwesomeIcon icon={faClock} className="text-white" />
                                        </div>
                                        <span>Working Hours</span>
                                    </h3>
                                    <div className="space-y-4 text-blue-100">
                                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                            <span className="font-medium">Monday – Friday:</span> 
                                            <span className="text-white">8:00 AM – 4:15 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                            <span className="font-medium">Saturday:</span> 
                                            <span className="text-white">7:00 AM – 6:15 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Sunday:</span> 
                                            <span className="text-white">2:30 PM - 6:15 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote Form Section - Enhanced */}
                        <div className="lg:col-span-3 p-8 md:p-12 bg-gray-50/50">
                            <div className="max-w-2xl mx-auto">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Request A Quote</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Fill out the form below and our expert team will get back to you within 24 hours 
                                        with a detailed quote for your project.
                                    </p>
                                </div>
                                
                                {/* Benefits Cards */}
                                <RequestQuoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
        </div>
    )
}





// import Image from "next/image"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuilding, faClock, faEnvelope, faLocationDot, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";
// import { RequestQuoteForm } from "@/components/features/contact-page/RequestQuoteForm";
// import { ContactInfo } from "@/components/layout/footer";

// export default function Contact(){
//     return (
//         <div className="relative pb-20">
//             {/* Hero Section */}
//             <div className="h-[300px] md:h-[500px] relative">
//                 <div className="absolute bg-black/70 inset-0 z-10"/>
//                 <Image 
//                     src="/images/contact/contact-header.jpg" 
//                     alt="Contact us header image" 
//                     fill 
//                     className="object-cover"
//                     priority
//                 />
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
//                     <h1 className="font-bold text-4xl md:text-6xl text-white mb-4">Contact Us</h1>
//                     <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//                         Get in touch with our team for any inquiries or quotes
//                     </p>
//                 </div>
//             </div>

//             {/* Contact Content */}
//             <div className="container md:h-screen mx-auto px-4 md:px-6">
//                 <div className="bg-white shadow-xl rounded-lg -mt-12 md:-mt-24 relative z-30 overflow-hidden">
//                     <div className="grid md:grid-cols-3 gap-8 p-8">
//                         {/* Get In Touch */}
//                         <div className="bg-gray-50 p-6 rounded-lg">
//                             <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
                            
//                             <ContactInfo className="space-y-4" />
                            
//                             <div className="mt-8">
//                                 <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
//                                     <FontAwesomeIcon icon={faClock} className="" />
//                                     <span>Working Hours</span>
//                                 </h3>
//                                 <div className="space-y-2 text-gray-600">
//                                     <p className="flex justify-between">
//                                         <span className="font-medium">Mon – Fri:</span> 
//                                         <span>8:00 AM – 4:15 PM</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                         <span className="font-medium">Sat:</span> 
//                                         <span>7:00 AM – 6:15 PM</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                         <span className="font-medium">Sun:</span> 
//                                         <span>2:30 PM - 6:15 PM</span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Request A Quote */}
//                         <div className="md:col-span-2 md:p-6">
//                             <div className="md:max-w-2xl mx-auto">
//                                 <h2 className="text-2xl font-bold mb-2 text-gray-800">Request A Quote</h2>
//                                 <p className="text-gray-600 mb-8">
//                                     Fill out the form below and our team will get back to you within 24 hours.
//                                 </p>
//                                 <RequestQuoteForm />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }