"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
            <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    Hello, I'm{" "}
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
            <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                Backend Developer | ML/AI | Python | Java | Springboot
            </p>
            <div>
                <button className="bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                    Hire Me
                </button>
                <button className="m-4 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-1 py-1  text-white rounded-full">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>
                </button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="bg-[#35c8d3] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
                <Image
                    src="/images/profile.png"
                    alt="profile image"
                    className="w-[220px] h-[220px] lg:w-[360px] lg:h-[360px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
