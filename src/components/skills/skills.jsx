import React from "react";
import "./skills.css";
import frontend from "../../assets/frontend2.png";
// import backend from "../../assets/django2.png";
// import database from "../../assets/mysql.png";
// import python from "../../assets/python.png";
// import java from "../../assets/java.png";
// import database2 from "../../assets/database.png";
import backend3 from "../../assets/backend3.png";
import mongodb from "../../assets/mongodbimg.png";
import github from "../../assets/githubimg.jpg";
function Skills() {
  return (
    <section id="skills">
      <span className="skilltitle">💻 About Me</span>
      <span className="skillsdesc">
        I am a Second Year B.Sc. Computer Science student at Vivekanand
        Education Society, with strong knowledge and hands-on experience in
        React, Django,Java,Python, JavaScript, HTML, CSS and MySQL. I have a
        solid understanding of full stack web development.I'm continuously
        exploring new technologies to enhance my development skills and build
        impactful projects.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={frontend} alt="Frontend" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Frontend Languages</h2>
            <p>
              Having Knowlegde and hands on experience as well as working harder
              to become proficient in React,familiar with TailwindCSS and Bootstrap
              as well.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={backend3} alt="Backend" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Backend Language</h2>
            <p>
              Having Knowlegde and Hands On Experience as well as working harder
              to become proficient in NodejS and ExpressJS
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={mongodb} alt="Database" className="skillbarimg" />
          <div className="skillbartext">
            <h2>DataBase</h2>
            <p>
              Having Knowlegde and hands on experience on Non-SQL
              Database-MongoDB.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={github} alt="Github" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Tools</h2>
            <p>
              Github and Hosting on Netlify and Vercel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
