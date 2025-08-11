import React from "react";
import "./resume.css";
import resume from "../../assets/yashresumefinal.txt"; // Assuming you have a resume PDF file

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>

      <div className="resume-content">
        <h3>Yash Naresh Nanekar</h3>
        <p><strong>Phone:</strong> 8928530339</p>
        <p><strong>Email:</strong> yash.nanekar79@gmail.com / yash.nanekar.5125644@ves.ac.in</p>

        <h4>Objective</h4>
        <p>Enthusiastic second-year Computer Science student with programming knowledge. Seeking an internship to apply my skills in software development and gain hands-on industry experience.</p>

        <h4>Education</h4>
        <ul>
          <li>B.Sc. Computer Science (VES College) — CGPA: 9.00 (Sem 1), 9.02 (Sem 2), Expected Graduation: 2027</li>
          <li>HSC Science - Maharashtra Board — 65.67% (2024)</li>
          <li>SSC - Maharashtra Board — 82.20% (2022)</li>
        </ul>

        <h4>Technical Skills</h4>
        <ul>
          <li>Programming: Python, Java</li>
          <li>Web Development: HTML, CSS, JavaScript, React (learning)</li>
          <li>Databases: MySQL</li>
          <li>Frameworks: Django</li>
          <li>Soft Skills: Teamwork, Communication, Problem-Solving</li>
        </ul>

        <h4>Projects</h4>
        <ul>
          <li>Gym Management System (Python Tkinter + MySQL)</li>
          <li>Snake Game (Pygame, Team Project)</li>
          <li>WordPress Website for Electronic Items Shopping</li>
          <li>Employee Management System (Django)</li>
        </ul>

        <h4>Achievements</h4>
        <ul>
          <li>Participated in Software Development Competition</li>
          <li>Participated in other college events</li>
        </ul>

        <h4>Strengths</h4>
        <ul>
          <li>Teamwork</li>
          <li>Good communication skills</li>
          <li>Active learning and critical thinking</li>
        </ul>

        <h4>Interests</h4>
        <p>Outdoor sports and working out in the gym</p>

        <h4>Personal Details</h4>
        <p>Date of Birth: 09/07/2006 | Location: Chembur, Mumbai</p>
      </div>

      {/* Optional PDF Download */}
      <div className="resume-buttons">
        <button className="btn2"><a href={resume} download='YashNanekarResume'>Download</a></button>
      </div>
    </section>
  );
}

export default Resume;
