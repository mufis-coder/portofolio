"use client";
import React, { useState, useTransition } from "react";
import Image from 'next/image'
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>SpringBoot</li>
          <li>PostgreSQL</li>
          <li>Python</li>
          <li>Flask</li>
          <li>Tensorflow</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Backend Developer Class Altera Academy</li>
          <li>Institut Teknologi Sepuluh Nopember</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Data Scientist with Python - DataCamp</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white texxt-base md:text-lg">
                      I&apos;m M Fikri Sunandar, a back-end web developer with experience in Java, 
                      Python, SpringBoot, Flask, Tensorflow, PostgreSQL, and Git. 
                      Additionally, I&apos;ve a keen interest in Data Science and Artificial Intelligence. 
                      I&apos;m open to exploring opportunities that align with my skills and goals.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                            >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                            >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                            >
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
