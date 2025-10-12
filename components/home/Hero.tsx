'use client'

import { FaDiscord, FaGithub, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Hero() {
  return (
    <div className="home-container mx-4">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <div
            className="inset-0 bg-cover bg-top w-44 h-44 rounded-full"
            style={{ backgroundImage: "url('/illustration1.jpeg')" }}
          ></div>
          <div className="flex items-center relative top-[-36px]">
            <span className="bg-white text-black text-lg font-semibold px-3 py-1 rounded-lg shadow-md">
              Software Engineer
            </span>
          </div>
        </div>
        <h1 className="text-6xl mb-4 max-w-3xl text-center font-sans font-normal">
          Building robust, scalable, and impactful software solutions
        </h1>
        <p className="text-lg font-sans font-light max-w-lg text-center">
          I help startups and businesses turn ideas into high-quality products using modern technologies and best engineering practices.
        </p>

        <div className="flex flex-row justify-center items-center gap-4 mt-4">
          <a
            href="/contact"
            className="inline-block py-2 bg-[#240541] text-white font-sans font-normal rounded-full shadow-md hover:bg-[#883BE9] focus:outline-hidden focus:ring-2 focus:ring-[#c399f7] focus:ring-opacity-50 ease-out duration-300"
          >
            <div className="flex items-center gap-1 px-6 justify-center">
              Hire Me
            </div>
          </a>
          <div className="flex gap-4 justify-center items-center font-sans font-normal">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500"
            >
              <IoLogoLinkedin className="text-2xl hover:text-[#bc86ff] ease-out duration-300" />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500"
            >
              <FaGithub className="text-2xl hover:text-[#bc86ff] ease-out duration-300" />
            </a>
            <a
              href="https://www.youtube.com/channel/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500"
            >
              <FaYoutube className="text-2xl hover:text-[#bc86ff] ease-out duration-300" />
            </a>
            <a
              href="https://t.me/your-telegram-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500"
            >
              <FaTelegram className="text-2xl hover:text-[#bc86ff] ease-out duration-300" />
            </a>
            <a
              href="https://discord.com/invite/your-discord-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500"
            >
              <FaDiscord className="text-2xl hover:text-[#bc86ff] ease-out duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
