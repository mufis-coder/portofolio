"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Edcrypt Web App",
    description: "Web application to encrypt and decrypt your messages.",
    image: "/images/projects/01.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mufis-coder/edcrypt-web",
    previewUrl: "https://edcrypt.netlify.app/",
  },
  {
    id: 2,
    title: "Image Registration",
    description: "Image registration to find the best parameters of the target image.",
    image: "/images/projects/02.jpg",
    tag: ["All", "Algo"],
    gitUrl: "https://github.com/mufis-coder/image_regist",
    previewUrl: "https://pypi.org/project/image-regist/",
  },
  {
    id: 3,
    title: "Microservice Network",
    description: "Microservice implementation using Java Spring Boot.",
    image: "/images/projects/03.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mufis-coder/fp-bni-altera?tab=readme-ov-file",
    previewUrl: "https://github.com/mufis-coder/fp-bni-altera?tab=readme-ov-file",
  },
  {
    id: 4,
    title: "Flappy Bird AI",
    description: "Flappy Bird game where each birds is trained by AI to find the best birds.",
    image: "/images/projects/04.gif",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/mufis-coder/mandiri-datascience-flappybird-ai",
    previewUrl: "https://github.com/mufis-coder/mandiri-datascience-flappybird-ai",
  },
  {
    id: 5,
    title: "Photo Mosaic",
    description: "Algorithm for creating a mosaic of images that form an image.",
    image: "/images/projects/05.gif",
    tag: ["All", "Algo"],
    gitUrl: "https://github.com/mufis-coder/M-Project-Photo-Mosaic",
    previewUrl: "https://github.com/mufis-coder/M-Project-Photo-Mosaic",
  },
  {
    id: 6,
    title: "Flappy Bird Online",
    description: "Online flappy bird game that can be played by two person.",
    image: "/images/projects/06.jpg",
    tag: ["All", "Algo"],
    gitUrl: "https://github.com/mufis-coder/fp-progjar",
    previewUrl: "https://github.com/mufis-coder/fp-progjar",
  },
  {
    id: 7,
    title: "Fakenews Classifier",
    description: "Algorithm for classifying news into fake or true news.",
    image: "/images/projects/07.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/mufis-coder/lomba-satriadata_2020-fakenews-classifier",
    previewUrl: "https://github.com/mufis-coder/mandiri-fakenews-classifier-site",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Algo"
          isSelected={tag === "Algo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;