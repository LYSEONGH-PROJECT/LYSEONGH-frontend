'use client';

import { useEffect, useState } from "react";
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
    faX 
} from "@fortawesome/free-solid-svg-icons";
import { 
    faInstagram, 
    faLinkedinIn, 
    faFacebookF, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneIcon, MapPin, Mail } from "lucide-react";

const mobileNavLinks = [
    { id: 1, href: '/', name: 'Home' },
    { id: 2, href: '/services', name: 'Services' },
    { id: 3, href: '/products', name: 'Products' },
    { id: 5, href: '/contact-us', name: 'Contact Us' },
];

const socialLinks = [
    { id: 1, icon: <FontAwesomeIcon icon={faFacebookF} />, href: '/' },
    { id: 2, icon: <FontAwesomeIcon icon={faInstagram} />, href: '/' },
    { id: 3, icon: <FontAwesomeIcon icon={faLinkedinIn} />, href: '/' },
    { id: 4, icon: <FontAwesomeIcon icon={faYoutube} />, href: '/' },
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

const CompanyInfo = ({ scrolled }) => (
    <div className={`hidden md:flex justify-between py-4 px-6 border-b transition-colors duration-500 ${scrolled ? 'opacity-0 max-h-0 hidden' : 'bg-transparent opacity-100 max-h-100'}`}>
        <div className="flex justify-between gap-x-5">
            <div className="flex items-center gap-x-3 text-gray-300">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                <Mail className="w-5 h-5"/>
                <Link href="mailto:lyseongh@gmail.com">lyseongh@gmail.com</Link>
            </div>
            <div className="flex items-center gap-x-2 text-gray-300">
                {/* <FontAwesomeIcon icon={faLocationDot}/> */}
                <MapPin className="w-5 h-5"/>
                <span>HM8R+722, Top Base Rd, Gbawe, Ghana</span>
            </div>
        </div>
        <div className="flex gap-x-3">
            {socialLinks.map((social) => (
                <motion.div whileHover={{ scale: 1.2 }} key={social.id}>
                    <Link href={social.href} className="text-md text-gray-300">
                        {social.icon}
                    </Link>
                </motion.div>
            ))}
        </div>
    </div>
);

const DesktopNav = ({ scrolled }) => (
    <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex justify-center gap-x-4">
            {mobileNavLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild className="bg-none hover:bg-none focus:bg-none focus:text-blue-500 p-2">
                        <Link href={link.href} className={`hover:text-blue-500 -tracking-wider duration-500 ease-in-out transition-colors focus:underline font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
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
                    <div className="flex flex-col space-y-6 p-6 mt-14">
                        {mobileNavLinks.map((link) => (
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
                        {socialLinks.map((social) => (
                            <motion.div whileHover={{ scale: 1.3 }} key={social.id} className="text-2xl p-2">
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <CompanyInfo scrolled={scrolled} />
            
            <div className="flex items-center justify-between px-4 py-6">
                <Link href="/">
                    <span className={`font-bold text-lg md:text-2xl transition-colors duration-300 ${scrolled ? 'text-blue-800' : 'text-white'}`}>LYSEON GH</span>
                </Link>

                <DesktopNav scrolled={scrolled}/>

                <Button
                    onClick={toggleMobileMenu}
                    variant="ghost"
                    className={`text-lg md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faX : faBars} />
                </Button>

                <Link href="tel:+233543794580" className={`hidden md:flex items-center gap-x-2 hover:text-blue-600 transition-colors duration-300 ${scrolled ? 'text-gray-800 ' : 'text-white'}`}>
                    {/* <FontAwesomeIcon icon={faPhone} /> */}
                    <PhoneIcon className="w-5 h-5 ${}" fill={`${scrolled ? "black " : "white"}`}/>
                    <span className="text-xl font-semibold">+233 543 794 580</span>
                </Link>
            </div>
            
            <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </header>
    );
}