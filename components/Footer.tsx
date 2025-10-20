'use client'

import { FaDiscord, FaGithub, FaTelegram, FaYoutube, FaHeart } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#240541] text-white mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-serif">Muhammad Amien</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Software Engineer passionate about building robust, scalable, and impactful solutions. 
              Turning ideas into high-quality products with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MdEmail className="text-xl" />
              <a 
                href="mailto:muhamien.business@gmail.com" 
                className="hover:text-[#bc86ff] transition-colors duration-300"
              >
                muhamien.business@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
              >
                <IoLogoLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.youtube.com/channel/your-youtube-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
              >
                <FaYoutube className="text-xl" />
                <span>YouTube</span>
              </a>
              <a
                href="https://t.me/your-telegram-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
              >
                <FaTelegram className="text-xl" />
                <span>Telegram</span>
              </a>
              <a
                href="https://discord.com/invite/your-discord-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#bc86ff] transition-colors duration-300"
              >
                <FaDiscord className="text-xl" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {currentYear} Muhammad Amien. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

