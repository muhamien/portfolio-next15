'use client'

import { FaDiscord, FaGithub, FaTelegram, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";
import { motion, useAnimate } from "motion/react"
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useEffect } from "react";


export default function Home() {
  const [ball1, animeteBall1] = useAnimate();
  const [ball2, animeteBall2] = useAnimate();
  const [ball3, animeteBall3] = useAnimate();
  
  async function inAnimation() {
    const animations = [
      { animate: animeteBall1, ref: ball1 },
      { animate: animeteBall2, ref: ball2 },
      { animate: animeteBall3, ref: ball3 }
    ];

    const shuffledAnimations = animations.sort(() => Math.random() - 0.5);

    shuffledAnimations.forEach(({ animate, ref }, index) => {
      setTimeout(async () => {
        await animate(ref.current, { opacity: 1, scale: 1, y: 0 });
        await animate(
          ref.current,
          { y: -10 },
          {
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            duration: 1
          }
        );
      }, index * 800);
    });

    setTimeout(() => {
      outAnimation();
    }, 5000);
  }

  async function outAnimation() {
    const animations = [
      { animete: animeteBall1, ref: ball1 },
      { animete: animeteBall2, ref: ball2 },
      { animete: animeteBall3, ref: ball3 }
    ];

    const shuffledAnimations = animations.sort(() => Math.random() - 0.5);

    shuffledAnimations.forEach(({ animete, ref }, index) => {
      setTimeout(async () => {
        await animete(ref.current, { opacity: 0, scale: 0, y: 0 });
      }, index * 1000);
    });

    setTimeout(() => {
      inAnimation();
    }, 3000);
  }

  useEffect(() => {
    inAnimation();
  }, []);

  return (
    <div className="min-h-screen gap-16 w-screen font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 items-start sm:items-start h-full">
        <div className="flex">
          {/* Left content */}
          <div className="w-full">
            <div className="flex flex-col h-screen">
              <div className="pl-24 p-4 h-full justify-center flex flex-col gap-6">
                <h2 className="text-6xl font-bold font-serif">Hi, I am<br/> Muhammad Amien</h2>
                <p className="text-sm w-1/2">I am a passionate software engineer with a focus on developing innovative solutions and enhancing user experiences.</p>
                <div className="flex gap-2">
                  <a href="/contact" className="mt-4 inline-block py-2 bg-[#240541] text-white font-normal rounded-full shadow-md hover:bg-[#883BE9] focus:outline-none focus:ring-2 focus:ring-[#c399f7] focus:ring-opacity-50 ease-out duration-300">
                    <div className="flex items-center gap-1 px-6 justify-center">
                      Hire Me
                      <HiOutlinePaperAirplane className="rotate-45 pb-1 text-lg" />
                    </div>
                  </a>
                  <a href="/portfolio" className="mt-4 inline-block px-6 py-2 bg-transparent text-black font-normal rounded-full hover:text-[#883BE9] ease-out duration-300">
                    <div className="flex items-center gap-1">
                      Projects
                      <FiArrowUpRight />
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-[#240541] pl-24 p-4 h-auto flex flex-col gap-8">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <IoLogoLinkedin className="text-2xl hover:text-[#bc86ff] ease-out duration-300"/>
                  </a>
                  <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <FaGithub className="text-2xl hover:text-[#bc86ff] ease-out duration-300"/>
                  </a>
                  <a href="https://www.youtube.com/channel/your-youtube-channel" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <FaYoutube className="text-2xl hover:text-[#bc86ff] ease-out duration-300"/>
                  </a>
                  <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <FaTelegram className="text-2xl hover:text-[#bc86ff] ease-out duration-300"/>
                  </a>
                  <a href="https://discord.com/invite/your-discord-invite" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <FaDiscord className="text-2xl hover:text-[#bc86ff] ease-out duration-300"/>
                  </a>
                </div>
                {/* <div className="flex gap-8">
                  <div className="flex flex-col">
                    <div className="text-white text-md font-bold">Projects Statistics <br/>in 2025</div>
                    <div className="">
                      <a href="/learn-more" className="mt-4 inline-block py-2 px-4 bg-[#240541] text-white font-normal rounded-full shadow-md hover:bg-[#883BE9] focus:outline-none focus:ring-2 focus:ring-[#c399f7] focus:ring-opacity-50 ease-out duration-300">
                        <div className="flex items-center gap-1 justify-center">
                          Learn More
                          <FiArrowUpRight />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white">hello</div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Illustration */}
          <div className="bg-gray-100 p-4 w-4/6 h-screen">
            <div className="flex justify-between items-center h-5/6">
              <div>
                <motion.div
                  ref={ball1}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className="w-14 h-14 bg-[#cc2a2a] rounded-full flex justify-center items-center"
                ><span className="text-white font-bold">1</span></motion.div>
              </div>
              <div className="flex flex-col justify-between gap-60">
                <motion.div
                  ref={ball2}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className="w-14 h-14 bg-[#cc2a2a] rounded-full flex justify-center items-center"
                ><span className="text-white font-bold">2</span></motion.div>
                <motion.div
                  ref={ball3}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className="w-14 h-14 bg-[#cc2a2a] rounded-full flex justify-center items-center"
                ><span className="text-white font-bold">3</span></motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
