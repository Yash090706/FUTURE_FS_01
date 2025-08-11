import React from "react";
import "./project.css";
import django2 from "../../assets/GMS.png";
import sgame from "../../assets/snakegame.png"; // Assuming you have an image for the snake game
 // Assuming you have an image for the project

const projects = [
  {
    title: "Snake Game",
    description: "A Snake Game built by Pygame library of Python.",
    image: sgame,
    skills: ["Python"],
    link: "#",

  },
  {
    title: "Gym Management System",
    description: "To manage the members ,trainers ,staff and delivery status,inventory and renewal alerts placing equipments orders,graphical tracking of everday new membership also otp verification incase if password is forgotten.",
    image: django2,
    skills: ["Python","MySQL"],
    link: "#"
  } 
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
