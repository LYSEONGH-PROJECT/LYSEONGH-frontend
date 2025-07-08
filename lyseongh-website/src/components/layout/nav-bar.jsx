'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
 } from "../ui/navigation-menu";
import { Phone, FacebookIcon, Instagram, LinkedinIcon,  } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { easeIn, motion } from "framer-motion";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn, faSquareFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const socials = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faSquareFacebook} />,
            href: '/',
            className: 'text-xl',
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faInstagram} />,
            href: '/',
            className: 'text-xl'
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faLinkedinIn} />,
            href: '/',
            className: 'text-xl'
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faWhatsapp} />,
            href: '/',
            className: 'text-xl'
        },
    ];

    return (
        <header className="w-full shadow-lg">

            <div className="flex justify-between items-center border-b p-4">

                {/* Logo */}
                <Link href="/">
                    <span className="font-bold text-2xl text-blue-800">LYSEON GH</span>
                </Link>


                {/* Desktop Menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex justify-center gap-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="">
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="">
                                    Services
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="">
                                    Products
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="">
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="">
                                    Contact Us
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                

                {/* Contacts */}
                <div className="md:flex hidden gap-x-4">
                    {/* Phone Number */}
                    <Link href="/" className="flex items-center gap-x-1">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="text-xs hidden">+233 543 794 580</span>
                    </Link>

                    {/* Socials */}
                    {socials.map((social) => {
                        return <motion.div
                        whileHover={{ scale: 1.2 }}
                        key={social.id}
                        >
                            <Link href={social.href} className={social.className}>
                                {social.icon}
                            </Link>
                        </motion.div>
                    })}
                </div>
            </div>

            
        </header>
    )
}
