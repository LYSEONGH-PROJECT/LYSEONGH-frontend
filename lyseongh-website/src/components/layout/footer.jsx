import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faLocationDot, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";

const pageLinks = [
    { id: 1, href: '/', name: 'Services' },
    { id: 2, href: '/', name: 'Products' },
    { id: 3, href: '/', name: 'About Us' },
    { id: 4, href: '/', name: 'Contact' },
];

const quickLinks = [
    { id: 1, href: '/', name: 'Privacy Policy' },
    { id: 2, href: '/', name: 'Terms & Conditions' },
    { id: 3, href: '/', name: 'FAQs' },
];

const services = [
    { id: 1, href: '/', name: 'CCTV installation' },
    { id: 2, href: '/', name: 'CCTV Maintenance' },
    { id: 3, href: '/', name: 'DSTV installation' },
    { id: 4, href: '/', name: 'Electrical Wiring' },
];



const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col">
        <div className="title flex flex-col">
            <h3 className="text-2xl font-semibold py-3">{title}</h3>
            <div  className="w-16 h-[2px] bg-white rounded-full my-2"/>
        </div>
        <ul className="space-y-6 py-3">
            {links.map((link) => (
                <li className="" key={link.id}>
                    <Link href={link.href} className="md:text-lg">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export const ContactInfo = ({ title, className }) => (
    <div className="flex flex-col">
        <div className="flex flex-col py-2">
            <h3 className="text-3xl font-semibold py-3 ">{title}</h3>
            <div  className="w-20 border-b-3 rounded-full "/>
        </div>
        <div className={className}>
            <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} className="p-2"/>
                <div>
                    <p>P.O.Box 6017, Accra - North</p>
                </div>
            </div>
            <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faPhone} className="p-2"/>
                <div>
                    <p>+233543794580</p>
                </div>
            </div>
            <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} className="p-2"/>
                <div>
                    <p>lyseongh@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
);

export function Footer(){
    return (
        <footer className="bg-[#090922] relative text-white">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
                <FooterColumn title="Page Links" links={pageLinks}/>
                <FooterColumn title="Services" links={services}/>
                <FooterColumn title="Quick Links" links={quickLinks}/>
                <ContactInfo title="Contacts" className="flex flex-col gap-3 text-white text-lg gap-y-4"/>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/20 py-6 px-2 flex justify-between text-center text-sm text-white">
                <p className="capitealize italic">Lyseon gh</p>
                <p>All rights reserved. Copyright 2025</p>
            </div>
        </footer>
    )
}