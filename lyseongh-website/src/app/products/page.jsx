import Image from "next/image"

export default function Products(){
    return (
        <div className="h-[300px] md:h-[400px] relative">
            <div className="absolute bg-black/60 inset-0 z-10"/>
            <Image src="/images/services/cctv1.jpg" alt="" fill className="object-cover"/>
            <h1 className="absolute top-1/2 -translate-y-1/2 z-50 font-semibold uppercase text-3xl md:text-5xl text-center text-white flex justify-center w-full items-center">Our Products</h1>
        </div>
    )
}