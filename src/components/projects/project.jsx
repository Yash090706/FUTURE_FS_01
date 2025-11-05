import React from "react";
import "./project.css";
import django2 from "../../assets/GMS.png";
import sgame from "../../assets/snakegame.png"; // Assuming you have an image for the snake game
 // Assuming you have an image for the project
 import ecommerce from "../../assets/ecommerce.png";
import portfolio from "../../assets/portfolio.png";
import userenquiry from "../../assets/UserEnquiry.png";
import Image from "../../assets/image.png"; // React REdux

const projects = [
  {
    title: " Mini Ecommerce Website",
    description: "The Mini E-commerce Cart is a full-stack web application.",
    image: ecommerce,
    skills: ["Django","React","SQLite","Bootstrap"],
    link: "https://github.com/Yash090706/FUTURE_FS_02",

  },
  {
  title: " Portfolio Website",
  description: "My first personal portfolio website to showcase my skills and projects.",
  image: portfolio,
  skills: ["React","HTML","CSS"],
  link: "https://yashnnportfolio.netlify.app/",
},
  {
    title:"User Enquiry Project",
     description: "MERN Stack Small User Enquiry Project.",
 image: userenquiry,
 skills: ["React","Node.js","Express","MongoDB"],
 link: "https://github.com/Yash090706/UserEnquiryMERNProject",
  },
   {
   title:"To Do List Project",
    description: " To-Do List Project using React Redux-Toolkit.",
image: userenquiry,
skills: ["React","Redux-Toolkit","CSS"],
link: "https://github.com/Yash090706/ToDoListProjectReact-Redux",
 },
  {
    title: "Gym Management System",
    description: "To manage the members ,trainers ,staff and delivery status,inventory and renewal alerts placing equipments orders,graphical tracking of everday new membership also otp verification incase if password is forgotten.",
    image: django2,
    skills: ["Python","MySQL"],
    link: "#"
  },
  {
  title: "Snake Game",
  description: "A Snake Game built by Pygame library of Python.",
  image: sgame,
  skills: ["Python"],
  link: "#",
},
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Skills : {project.skills.join(", ")}</p>
            <a href={project.link} className="project-btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
