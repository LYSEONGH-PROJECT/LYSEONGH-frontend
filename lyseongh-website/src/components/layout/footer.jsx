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
        <h3 className="text-2xl font-semibold py-3">{title}</h3>
        <ul className="space-y-4 py-3">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-21 md:-top-42 inset-0 md:-translate-y-1/2 left-0" viewBox="0 0 1440 320"><path fill="#090922" fillOpacity="1" d="M0,256L80,266.7C160,277,320,299,480,304C640,309,800,299,960,277.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="flex flex-col md:flex-row justify-around px-6 py-12 gap-y-4">
                <div className="max-w-xs">
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
                            <motion.div whileHover={{ scale: 1.2 }} key={social.id} className="text-xl p-2 hover:text-blue-500 transition-colors duration-200">
                                <Link href={social.href} target="_blank" className={social.className}>
                                    {social.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-8 md:mx-12 border-t border-white/20 p-10 flex justify-between text-center text-sm text-white">
                <p className="capitealize italic">Lyseon gh</p>
                <p>Copyright &copy; 2025</p>
            </div>
        </footer>
    )
}