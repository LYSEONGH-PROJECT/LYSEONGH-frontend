import Link from "next/link";
import Whatsapp from "../SVGs/Whatsapp";

export function WhatsappUs(){
    return (
        <Link href="https://wa.me/+233543794580" target="_blank">
            <div className="flex fixed bottom-2 right-2 z-50 bg-gray-200 rounded-full p-1">
                <Whatsapp />
                <span className="hidden md:flex">Whatsapp Us</span>
            </div>
        </Link>
    )
}