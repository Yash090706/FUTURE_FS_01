import React from 'react';
import './intro.css';
import bg from '../../assets/yash5.jpg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Intro(){
    return (
        <section id="intro">
            <div className="intro-content">
                <span className="hello">👋 Hey there!</span>
                <span className="introtext">I'm <span className="introname">Yash </span><br></br>Web Developer | Programmer</span>
                <p className="intropara">I am Full Stack WebDeveloper pursuing Bachelor of Science degree In Computer Science.</p>
                
                <Link><button className="btn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth',duration:500,offset:-100});
                }}><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px', color:"black" }} />
Hire Me</button></Link>
                </div>
            <img src={bg} alt="bgimage" className="bg"></img>

        </section>

    );
}
export default Intro;
