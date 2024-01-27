"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                        Hello, I&apos;m{" "}
                    </span>{" "}
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        "Fikri Sunandar",
                        1000,
                        "BackEnd Developer",
                        1000,
                        "ML/AI Enthusiast",
                        1000,
                        "Data Scientist",
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] textl-lg lg:text-xl">
                    Nurturing Skills in Backend Development, AI, ML, and Data Science.
                </p>
                <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                    Crafting Tomorrow&apos;s Tech with Passion and Progress.
                </p>
                <div>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-slate-200 text-white"
                        >
                        Hire Me
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/16Jrd1nS9NWrCMUrX4du4Zm13BwsWmetJ/view?usp=sharing"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 hover:bg-slate-800 text-white mt-3"
                        target="_blank"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                <div className="home__img w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/profile.png"
                    alt="hero image"
                    className="w-[220px] h-[220px] lg:w-[360px] lg:h-[360px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={1000}
                    height={1000}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
