import React from 'react';
import './skills.css';
import frontend from '../../assets/frontend2.png';
import backend from '../../assets/django2.png';
import database from '../../assets/mysql.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
function Skills(){
    return(
        <section id="skills">
            <span className="skilltitle">💻 About Me</span>
            <span className="skillsdesc">I am a Second Year B.Sc. Computer Science student at Vivekanand Education Society, with strong knowledge and hands-on experience in React, Django,Java,Python, JavaScript, HTML, CSS and MySQL.
                I have a solid understanding of full stack web development.I'm continuously exploring new technologies to enhance my development skills and build impactful projects.
                </span>
                <div className="skillbars">
                    <div className="skillbar">
                        <img src={frontend} alt="Frontend" className="skillbarimg" />
                        <div className="skillbartext">
                            <h2>Frontend Languages</h2>
                            <p>Having Knowlegde and hands on experience in React,HTML,CSS,JS.</p>
                        </div>
                        </div>
                        <div className="skillbar">
                        <img src={backend} alt="Backend" className="skillbarimg" />
                       <div className="skillbartext">
                       <h2>Backend Language</h2>
                       <p>Backend includes Django a framework of Python.</p>
                       </div>
                       </div>
                         <div className="skillbar">
                       <img src={database}alt="Database" className="skillbarimg" />
                        <div className="skillbartext">
                       <h2>DataBase</h2>
                        <p>Proficient in MySQL for designing, managing, and querying relational databases.</p>
                       </div>

                       </div>
                         <div className="skillbar">
<img src={java}alt="Java" className="skillbarimg" />
 <div className="skillbartext">
<h2>Java</h2>
 <p>I have a good understanding of Object-Oriented Programming (OOP) concepts in Java.</p>
</div>
</div>
                       

                       </div>

        </section>
    );

}
export default Skills;
