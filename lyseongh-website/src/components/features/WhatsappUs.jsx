import Link from "next/link";
import Whatsapp from "../SVGs/Whatsapp";

export function WhatsappUs(){
    return (
        <Link href="https://wa.me/+233543794580" target="_blank">
            <div className="flex fixed items-center bottom-4 right-4 z-50 bg-gray-200 rounded-full p-1">
                <Whatsapp />
                <span className="hidden md:flex text-xs">Whatsapp Us</span>
            </div>
        </Link>
    )
}