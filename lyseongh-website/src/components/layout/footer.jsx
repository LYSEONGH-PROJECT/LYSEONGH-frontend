import Link from "next/link";



const pageLinks = [
    { id: 1, href: '/', name: 'Services' },
    { id: 2, href: '/', name: 'Products' },
    { id: 3, href: '/', name: 'About Us' },
    { id: 4, href: '/', name: 'Contact' },
];

const quickLinks = [
    { id: 1, href: '/', name: 'Privacy Policy' },
    { id: 2, href: '/', name: 'Terms & Conditions' },
    { id: 3, href: '/', name: '' },
];

const services = [
    { id: 1, href: '/', name: 'CCTV installation' },
    { id: 1, href: '/', name: 'CCTV Maintenance' },
    { id: 2, href: '/', name: 'DSTV installation' },
    { id: 3, href: '/', name: 'Electrical Wiring' },
];


export function Footer(){
    return (
        <footer className="">
            <div className="">

            </div>
        </footer>
    )
}