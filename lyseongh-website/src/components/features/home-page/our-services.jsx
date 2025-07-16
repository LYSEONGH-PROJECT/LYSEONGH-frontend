'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";




const ServiceCard = ({ imageSrc, buttonText, serviceTitle }) => {
    return (
        <div className="flex flex-col max-w-md shadow-2xl rounded-md">
            <div className="aspect-video overflow-hidden">
                <Image
                    src={imageSrc}
                    width={400}
                    height={100}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-4 py-8 flex flex-col gap-y-4">
                <h4 className="font-semibold">{serviceTitle}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium eius molestias. Aperiam possimus eaque esse! Ex aliquam quisquam molestiae autem sunt, reiciendis, vitae culpa tenetur et sapiente libero reprehenderit?</p>
                <Button className="block">Learn More</Button>
            </div>
        </div>
    )
}

export function Services(){
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h2 className="text-blue-600 font-semibold text-lg">Our Services</h2>
                        <h3 className="font-bold text-3xl">What We Offer</h3>
                    </div>
                    <div className="hidden md:flex">
                        <Link className="p-4 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out" href="/services">
                            Browse All Services
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-8 mt-4 flex flex-col md:flex-row justify-between gap-6">
                <ServiceCard imageSrc="/images/home/cctv-installation.png" serviceTitle="CCTV installation" />
                <ServiceCard imageSrc="/images/home/dstv-installation1.jpeg" serviceTitle="DSTV installation" />
                <ServiceCard imageSrc="/images/home/electrical-wiring1.jpeg" serviceTitle="Electrical Wiring" />
            </div>
        </section>
    )
}