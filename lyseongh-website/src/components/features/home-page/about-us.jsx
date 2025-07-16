

'use client';

import Image from "next/image";

export function AboutUs() {
  return (
    <section className="w-full py-20 px-6 bg-white">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="basis-1/2">
                    <h2 className="text-lg font-semibold text-blue-600">
                    About Us
                    </h2>
                    <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                    <p className="text-md md:text-lg text-gray-700 mb-1">
                    LYSEONGH offers professional consulting services in Electrical Wiring and Capacity Building, 
                    bridging the knowledge gap in these service areas.
                    With years of experience, we provide safe and reliable installations for both residential 
                    and commercial properties.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quia molestias, aut mollitia facilis, illo quidem commodi ducimus repellat iusto sequi possimus. Facilis voluptatum cupiditate exercitationem cum. Omnis, eos accusamus?
                    </p>
                </div>
                <div className="relative aspect-video overflow-hidden basis-1/2">
                    <Image 
                        width={800}
                        height={400}
                        src="/images/about/landing-about-us.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
  );
}