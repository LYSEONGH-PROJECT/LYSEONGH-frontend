'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faLocationDot, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";
import { 
    faInstagram, 
    faLinkedinIn, 
    faFacebookF, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

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
    { id: 5, href: '/', name: 'LAN Network Installation' },
];

const socialLinks = [
    { id: 1, icon: <FontAwesomeIcon icon={faFacebookF} />, href: '/' },
    { id: 2, icon: <FontAwesomeIcon icon={faInstagram} />, href: '/' },
    { id: 3, icon: <FontAwesomeIcon icon={faLinkedinIn} />, href: '/' },
    { id: 4, icon: <FontAwesomeIcon icon={faYoutube} />, href: '/' },
];

const FooterColumn = ({ title, links }) => (
    <div className="flex flex-col">
        <div className="title flex flex-col">
            <h3 className="text-2xl font-semibold py-3">{title}</h3>
        </div>
        <ul className="space-y-6 py-3">
            {links.map((link) => (
                <li className="" key={link.id}>
                    <Link href={link.href} className="md:text-lg text-center">
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
            <h3 className="text-2xl font-semibold py-3 ">{title}</h3>
        </div>
        <div className={className}>
            <div className="flex gap-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="p-1 flex items-start"/>
                <div>
                    <p>P.O.Box 6017, Accra - North</p>
                    <p>HM8R+722, Top Base Rd, Gbawe, Ghana</p>
                </div>
            </div>
            <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faPhone} className="p-1"/>
                <div>
                    <p>+233543794580</p>
                </div>
            </div>
            <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} className="p-1"/>
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
            
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-12">
                <div className="">
                    <h4 className="font-bold text-xl text-white py-3">LYSEONGH</h4>
                    <p className="text-gray-300 text-md/10 pt-6">LYSEONGH offers  consulting services in Electrical Wiring and Capacity Building <br /> (Bridging the knowledge gap in the above service areas). <br />
                    Shalom,Peace</p>
                </div>
                {/* <FooterColumn title="Page Links" links={pageLinks}/> */}
                <FooterColumn title="Services" links={services}/>
                <FooterColumn title="Quick Links" links={quickLinks}/>
                <div>
                    <ContactInfo title="Contacts" className="flex flex-col gap-3 text-white text-lg gap-y-4"/>
                    <div className="py-2 flex gap-x-4 mt-4">
                        {socialLinks.map((social) => (
                            <motion.div whileHover={{ scale: 1.3 }} key={social.id} className="text-xl p-2">
                                <Link href={social.href} className={social.className}>
                                    {social.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto border-t border-white/20 py-6 px-2 flex justify-between text-center text-sm text-white">
                <p className="capitealize italic">Lyseon gh</p>
                <p>All rights reserved. Copyright 2025</p>
            </div>
        </footer>
    )
}