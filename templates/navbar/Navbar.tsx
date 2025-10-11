'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Navbar: React.FC = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white border-b-2 z-50'>
            <div className='w-full flex justify-between items-center px-24 py-4'>
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold hover:underline">
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
