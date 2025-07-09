'use client';

import { useState } from "react";
import Link from "next/link";
import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
    faBars, 
    faEnvelope, 
    faLocationDot, 
    faPhone, 
    faX 
} from "@fortawesome/free-solid-svg-icons";
import { 
    faInstagram, 
    faLinkedinIn, 
    faWhatsapp, 
    faFacebookF, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MOBILE_NAV_LINKS = [
    { id: 1, href: '/', name: 'Home' },
    { id: 2, href: '/services', name: 'Services' },
    { id: 3, href: '/products', name: 'Products' },
    { id: 4, href: '/about', name: 'About' },
    { id: 5, href: '/contact-us', name: 'Contact Us' },
];

const SOCIAL_LINKS = [
    { id: 1, icon: <FontAwesomeIcon icon={faFacebookF} />, href: '/', className: 'text-lg' },
    { id: 2, icon: <FontAwesomeIcon icon={faInstagram} />, href: '/', className: 'text-lg' },
    { id: 3, icon: <FontAwesomeIcon icon={faLinkedinIn} />, href: '/', className: 'text-lg' },
    { id: 4, icon: <FontAwesomeIcon icon={faYoutube} />, href: '/', className: 'text-lg' },
];

const menuVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            ease: "easeOut",
            duration: 0.3,
        }
    },
    closed: {
        x: '-100%',
        opacity: 0,
        transition: {
            ease: "easeIn",
            duration: 0.2,
        }
    }
};

const itemVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
        x: '-120%',
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

const CompanyInfo = () => (
    <div className="hidden md:flex justify-between py-1 px-6 border-b">
        <div className="flex justify-between gap-x-5">
            <div className="flex items-center gap-x-3 text-gray-700">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href="mailto:lyseongh@gmail.com">lyseongh@gmail.com</Link>
            </div>
            <div className="flex items-center gap-x-2 text-gray-700">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>P.O.Box 6017, Accra - North</span>
            </div>
        </div>
        <div className="flex gap-x-3">
            {SOCIAL_LINKS.map((social) => (
                <motion.div whileHover={{ scale: 1.2 }} key={social.id}>
                    <Link href={social.href} className={social.className}>
                        {social.icon}
                    </Link>
                </motion.div>
            ))}
        </div>
    </div>
);

const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex justify-center gap-x-4">
            {MOBILE_NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild>
                        <Link href={link.href} className="hover:text-blue-600 transition-colors font-semibold">
                            {link.name}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    </NavigationMenu>
);

const MobileMenu = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-10 md:hidden"
                    onClick={onClose}
                />
                
                <motion.div 
                    className="h-screen w-3/4 fixed inset-y-0 left-0 overflow-y-auto top-0 bg-white z-20 md:hidden shadow-xl"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <div className="flex flex-col space-y-6 p-6">
                        {MOBILE_NAV_LINKS.map((link) => (
                            <motion.div variants={itemVariants} key={link.id}>
                                <Link 
                                    href={link.href} 
                                    className="text-xl font-semibold hover:text-blue-600 transition-colors"
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="p-6 flex gap-x-4 border-t mt-4">
                        {SOCIAL_LINKS.map((social) => (
                            <motion.div whileHover={{ scale: 1.2 }} key={social.id}>
                                <Link href={social.href} className={social.className}>
                                    {social.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
);

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="w-full sticky top-0 bg-white z-10 shadow-sm">
            <CompanyInfo />
            
            <div className="flex items-center justify-between p-4">
                <Link href="/">
                    <span className="font-bold text-lg md:text-2xl text-blue-800">LYSEON GH</span>
                </Link>

                <DesktopNav />

                <Button
                    onClick={toggleMobileMenu}
                    variant="ghost"
                    className="text-lg md:hidden"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faX : faBars} />
                </Button>

                <Link href="tel:+233543794580" className="hidden md:flex items-center gap-x-2 hover:text-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-xl font-semibold hover:text-blue-600">+233 543 794 580</span>
                </Link>
            </div>
            
            <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </header>
    );
}