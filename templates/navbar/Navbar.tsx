'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Ensure consistent rendering before mount
    const navClassName = `fixed font-sans flex justify-center items-center top-0 w-full ${!isScrolled && isMounted ? 'bg-white' : 'bg-transparent'} z-50`;
    const containerClassName = `container flex items-center px-4 py-3 transition-all duration-300 ease-in-out w-full ${!isScrolled || !isMounted ? 'justify-between' : 'w-max justify-center items-center mt-4 rounded-full gap-16 bg-transparent px-1 shadow-md backdrop-blur-xs'}`;
    const logoClassName = `text-xl font-normal hover:underline filter ${isScrolled && isMounted ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 transition-all duration-300`;

    return (
        <nav className={navClassName}>
            <div className={containerClassName}>
                <div className="flex items-center">
                    <Link href="/" className={logoClassName}>
                        <Image src="https://media.graphcms.com/Mc2nannQkypYuVwjz1SA" width={50} height={50} alt="Logo" />
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/projecs" className="hover:underline">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <a href="/contact" className="flex items-center px-1 py-1 bg-gray-200 rounded-full text-black text-xs hover:bg-gray-300">
                        <span className="ml-2">Contact</span>
                        <div className='ml-2 bg-black rounded-full p-1'>
                            <FiChevronRight className=" text-white text-lg" />
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
