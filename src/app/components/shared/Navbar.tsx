"use client";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "#courses" },
        { name: "Creators", href: "#creators" },
    ]
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-brand-blue backdrop-blur-md transition-colors duration-300">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[120px]">
                {/* <div
                    className="absolute inset-0 -z-10 opacity-20"
                    style={{
                        backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
                        backgroundSize: "120px 120px",
                    }}
                /> */}
                <div className="hero-grid-bg absolute inset-0 -z-10 opacity-20 pointer-events-none" />
                <div className="flex items-center justify-between h-[120px]">
                    {/* logo  */}
                    <div className="z-60">
                        <Link href="/">
                            <Image
                                className="rk:invert h-[37px] w-[171px]"
                                src="/logo.svg"
                                alt="Next.js logo"
                                width={100}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                    {/* desktop nav  */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {
                            navLinks.map((link) => (
                                <Link key={link.name} href={link.href}
                                    className='text-base font-normal   text-[#F5F5F6] ease-in-out  hover:font-medium focus:font-medium hover:-translate-y-[5px] focus:-translate-y-[5px] transition-all duration-500'>{link.name}</Link>
                            ))
                        }
                    </nav>

                    <div className="hidden lg:flex items-center gap-6 ">
                        <Link href="/login" className='text-base font-normal   text-[#F5F5F6] ease-in-out  hover:font-medium focus:font-medium hover:-translate-y-[5px] focus:-translate-y-[5px] transition-all duration-500'>Sign In</Link>
                        <Link href="/join-us" className='text-base font-normal   text-[#F5F5F6] ease-in-out  hover:font-medium focus:font-medium hover:-translate-y-[5px] focus:-translate-y-[5px] transition-all duration-500'>Join Us</Link>
                        <Link href="/cart" className='text-[#F5F5F6] hover:text-lime-300 transition-colors duration-200'><MdOutlineShoppingBag size={20} /></Link>
                    </div>
                    <div className="flex lg:hidden items-center gap-6">
                        <button type='button' onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} className="relative z-[60] rounded-lg p-2 text-[#F5F5F6] transition-colors hover:bg-white/10 lg:hidden">
                            {
                                isOpen ? (
                                    <X className='w-6 h-6' />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )
                            }
                        </button>
                    </div>
                </div>
                {/* Mobile Menu  */}

                <div className={`absolute left-0 top-full w-full  h-[calc(100vh-83px)] overflow-hidden border-t border-white/10 bg-brand-blue shadow-xl transition-all duration-500 ease-in-out lg:hidden ${isOpen ? "visible translate-y-0  opacity-100" : "invisible -translate-y-4 opacity-0 pointer-events-none"
                    }`}>
                    <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-10">
                        <nav className="flex flex-col">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} onClick={closeMenu}
                                    className=" group flex items-center
    rounded-md border-b border-white/10 px-3 py-4 text-base font-normal text-[#F5F5F6] transition-all duration-300 ease-out hover:bg-brand-lime hover:text-black hover:font-medium hover:translate-x-1 focus:bg-brand-lime focus:text-black focus:font-medium focus:translate-x-1 focus:outline-none">
                                    {link.name}</Link>
                            ))}
                        </nav>

                        {/* Mobile Action  */}
                        <div className="mt-5 flex flex-col gap-3">
                            {/* Sign In */}
                            <Link
                                href="/login"
                                onClick={closeMenu}
                                className=" rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 ease-out hover:border-brand-lime hover:bg-brand-lime hover:text-black  hover:-translate-y-0.5 focus:border-brand-lime focus:bg-brand-lime focus:text-black focus:outline-none">
                                Sign In
                            </Link>

                            {/* Join Us */}
                            <Link
                                href="/join-us"
                                onClick={closeMenu}
                                className="rounded-lg bg-brand-lime px-5 py-3 text-center text-sm font-semibold text-brand-blue hover:-translate-y-0.5 hover:bg-[#c5f000] hover:shadow-lg hover:shadow-black/10 focus:-translate-y-0.5 focus:bg-[#c5f000] focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-blue">
                                Join Us
                            </Link>

                            {/* Cart */}
                            <Link
                                href="/cart"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 transition-all duration-300 ease-out hover:border-brand-lime hover:bg-brand-lime hover:text-black  hover:-translate-y-0.5 focus:border-brand-lime focus:bg-brand-lime focus:text-black focus:outline-none">
                                <MdOutlineShoppingBag size={20} />
                                Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;