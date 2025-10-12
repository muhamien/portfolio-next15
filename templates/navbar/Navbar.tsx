'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Ubah threshold sesuai kebutuhan (misalnya 100px)
            setIsScrolled(scrollTop > 100);
        };

        // Tambahkan event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed font-sans flex justify-center items-center top-0 w-full ${!isScrolled ? 'bg-white' : 'bg-transparent'} z-50`}>
            <div className={`container flex items-center px-4 py-3 transition-all duration-300 ease-in-out  w-full ${!isScrolled ? 'justify-between' : 'w-max justify-center items-center mt-4 rounded-full gap-16 bg-transparent px-1 shadow-md backdrop-blur-xs'}`}>
                <div className="flex items-center">
                    <Link href="/" className={`text-xl font-normal hover:underline filter ${isScrolled ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 transition-all duration-300`}>
                        <Image src="https://media.graphcms.com/Mc2nannQkypYuVwjz1SA" width={50} height={50} alt="Logo" />
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline backdrop-invert">
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
