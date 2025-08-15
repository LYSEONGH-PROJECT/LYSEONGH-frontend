import Image from "next/image"

export default function services(){
    return (
        <section>
            <div className="h-[400px] md:h-[600px] relative">
                <div className="top-section">
                    <div className="absolute bg-black/60 inset-0 z-10"/>
                    <Image src="/images/contact/field-engineer.jpg" alt="" fill className="object-cover"/>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 space-y-6 mt-4">
                        <h1 className="font-bold text-white text-4xl md:text-7xl text-center items-center">Our Services</h1>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="h-screen">

            </div>
        </section>
    )
}