import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
    label: string;
    href: string;
}

const footerNavColumns: { id: number; links: FooterLink[] }[] = [
    {
        id: 1,
        links: [
            { label: "Featured Courses", href: "/courses" },
            { label: "Featured Categories", href: "/categories" },
            { label: "Business", href: "/business" },
            { label: "IT", href: "/it" },
            { label: "Design", href: "/design" },
        ],
    },
    {
        id: 2,
        links: [
            { label: "Development", href: "/development" },
            { label: "Marketing", href: "/marketing" },
            { label: "Photography", href: "/photography" },
            { label: "Finance", href: "/finance" },
            { label: "Sport", href: "/sport" },
        ],
    },
    {
        id: 3,
        links: [
            { label: "Become a Creator", href: "/become-creator" },
            { label: "Affiliate Program", href: "/affiliate" },
            { label: "Contact", href: "/contact" },
            { label: "Help", href: "/help" },
            { label: "About", href: "/about" },
        ],
    },
];

const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
];

const Footer = () => {
    return (
        <footer className="w-full  bg-white text-brand-dark pb-8 md:pb-12   border-t border-[#CED0D3]">
            <div className="w-full xl:max-w-[1200px] mx-auto pt-10 md:pt-[71px] px-5 md:px-10 xl:px-0">

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 xl:gap-[92px] pb-12 lg:pb-[130px]">

                    {/* Left Column */}
                    <div className="w-full xl:max-w-[528px] flex flex-col ">
                        <Link href="/" className="mb-2 md:mb-4">
                            <Image
                                src="/footer-logo.svg"
                                alt="ByteSpace"
                                width={171}
                                height={37}
                                className="h-9 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-sm leading-[160%] font-normal text-brand-dark">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form className=" mt-5 md:mt-10 lg:mt-[45px] mb-6 flex flex-col sm:flex-row items-center gap-6 w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full xl:w-[376px] lg:w-[300px] h-[52px] px-5 py-3 rounded-full border border-[#CED0D3] text-base text-brand-dark placeholder:text-brand-dark focus:outline-none focus:border-brand-lime"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto h-[46px] px-7 bg-brand-lime hover:bg-[#c2f000] text-brand-dark font-medium text-sm rounded-full transition-all cursor-pointer shrink-0"
                            >
                                Search
                            </button>
                        </form>

                        <p className=" w-full xl:max-w-[504px] text-xs leading-[160%] text-brand-dark  font-normal">
                            By subscribing, you agree to our{" "}
                            <Link href="/privacy-policy" className=" hover:text-brand-blue/70">
                                Privacy Policy 
                            </Link>{" "}
                             and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Right Column*/}
                    <div className="mt-0 lg:mt-12 w-full flex justify-end  flex-wrap sm:flex-nowrap gap-8  lg:gap-5 xl:gap-10  ">
                        {footerNavColumns.map((col) => (
                            <div key={col.id} className="flex flex-col gap-4 w-full xl:w-[167px]">
                                {col.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-sm leading-[160%] text-brand-dark  hover:text-brand-blue transition-colors transition-all ease-in-out duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full h-[1px] bg-[#CED0D3] mb-6" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] leading-[160%] text-brand-dark">
                    <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        {legalLinks.map((item, index) => (
                            <Link key={index} href={item.href} className="text-brand-dark hover:text-brand-blue transition-colors transition-all ease-in-out duration-300">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;