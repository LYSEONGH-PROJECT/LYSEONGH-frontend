

'use client';

export function AboutUs() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-8">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 md:flex-row items-center gap-12">
          <div>
            <p className="text-md text-gray-700 mb-6">
              LYSEONGH offers professional consulting services in Electrical Wiring and Capacity Building, 
              bridging the knowledge gap in these service areas.
            </p>
            <p className="text-md text-gray-700">
              With years of experience, we provide safe and reliable installations for both residential 
              and commercial properties.
            </p>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden shadow-xl">
            {/* <Image
              src="/images/about/about-us.jpg"
              alt="About LYSEONGH"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}