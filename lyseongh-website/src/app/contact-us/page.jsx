import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faClock, faEnvelope, faLocationDot, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";
import { RequestQuoteForm } from "@/components/features/contact-page/RequestQuoteForm";
import { ContactInfo } from "@/components/layout/footer";

export default function Contact(){
    return (
        <main className="relative">
            <div className="h-[300px] md:h-[500px] relative">
                <div className="top-section">
                    <div className="absolute bg-black/70 inset-0 z-10"/>
                    <Image src="/images/contact/contact-header.jpg" alt="" fill className="object-cover"/>
                    <h1 className="absolute top-1/2 translate-y-1/2 z-20 font-semibold text-3xl md:text-6xl text-center text-white flex justify-center w-full items-center">Contact Us</h1>
                </div>
            </div>

            <div className="h-screen relative">
                <div className="md:h-[800px] md:max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-sm absolute -top-5 inset-0 -translate-y-10 z-30 md:flex gap-4">
                    {/* Get In Touch */}
                    <div className="md:w-1/2">
                        <ContactInfo title="Get In Touch" className=""/>
                        <div className="flex gap-x-2 items-center">
                            <FontAwesomeIcon icon={faClock} className="p-2" />
                            <div>
                                <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
                                <p>Sun & Holidays: Closed</p>
                            </div>
                        </div>

                    </div>

                    {/* Request A Quote */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold md:text-center">Request A Quote</h3>
                        <div>
                            <RequestQuoteForm />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}