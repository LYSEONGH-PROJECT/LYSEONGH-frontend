import Image from "next/image"

export default function services(){
    return (
        <section>
            <div className="h-[300px] md:h-[500px] relative">
                <div className="top-section">
                    <div className="absolute bg-black/60 inset-0 z-10"/>
                    <Image src="/images/contact/field-engineer.jpg" alt="" fill className="object-cover"/>
                    <h1 className="absolute top-1/2 translate-y-1/2 z-20 font-semibold text-3xl md:text-6xl text-center text-white flex justify-center w-full items-center">Our Services</h1>
                </div>
            </div>
            <div className="h-screen">

            </div>
        </section>
    )
}