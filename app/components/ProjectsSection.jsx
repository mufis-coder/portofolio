"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Edcrypt Web App",
    description: "Web application to encrypt and decrypt your messages",
    image: "/images/projects/01.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mufis-coder/edcrypt-web",
    previewUrl: "https://edcrypt.netlify.app/",
  },
  {
    id: 2,
    title: "Image Registration",
    description: "Image registration to find the best parameters of the target image",
    image: "/images/projects/02.jpg",
    tag: ["All", "Algo"],
    gitUrl: "https://github.com/mufis-coder/image_regist",
    previewUrl: "https://pypi.org/project/image-regist/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="my-8 md:my-12">
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;