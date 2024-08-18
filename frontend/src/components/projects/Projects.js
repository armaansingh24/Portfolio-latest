import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const projectsData = [
  {
    title: "Service Management System",
    des: "Developed a service management system for an elevator company, including features for handling service requests, spare parts tracking, managing engineers' schedules, customer feedback, and detailed task history.",
    src: projectOne,
    show: false
  },
  {
    title: "Shopping Cart",
    des: "Designed a responsive shopping cart interface using React/Redux and Tailwind CSS, featuring easy-to-use cart management and clear product and total amount display.",
    src: projectTwo,
    show: true,
    projectLive: "https://as-shopping.netlify.app/",
    projectGithub: "https://github.com/armaansingh24/Shopping-Cart"
  },
  {
    title: "MappOptimist",
    des: "Developed a fully responsive static website using React with smooth scroll motion, integrated Nodemailer for seamless email communication, collaborated with the client for a visually appealing design, and implemented dynamic content rendering based on carousel selections.",
    src: projectThree,
    show: false
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            show={project.show}
            projectLive={project.projectLive}
            projectGithub={project.projectGithub}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
