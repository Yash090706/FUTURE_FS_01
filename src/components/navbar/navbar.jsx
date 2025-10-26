import React ,{useState}from 'react';
import './navbar.css';
import yashlogo from '../../assets/yashlogo.jpg';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import menu from '../../assets/menu.png'; // Assuming you have a menu icon image
// import { faGithub } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Navbar(){
    const [showmenu,setshowmenu] = useState(false);
    return(
        <nav className="navbar">
            {/* <img src={yashlogo} alt="Logo" className="logoimg"></img> */}
            <div className="logoimg">
                <h1>Portfolio Website</h1>
            </div>
            <div className="desktopmenu">
                <Link></Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuitem">Home</Link>
                <Link activeClass='active' to='resume-section' spy={true} smooth={true} offset={-50} duration={500} className="menuitem">Portfolio</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menuitem">About</Link>
                <Link activeClass='active' to='projects-section' spy={true} smooth={true} offset={-50} duration={500} className="menuitem">Projects</Link>


            </div>
            <button className="desktopmenubtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth',duration:500,offset:-100});
            }}>
                <img src=" " alt="" className="desktopmenuimg"></img>
                <FontAwesomeIcon icon={faPaperPlane} className="desktopmenuicon" />&nbsp;&nbsp;Contact Us

            </button>
            <div className="socialicons">
            <a href="https://github.com/Yash090706" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="githubicon" />
                </a>
            <a href="https://www.linkedin.com/in/yash-nanekar-b7b69a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className="linkedinicon" />
</a></div>
            <img src={menu} alt="Menu" className="menuicon" onClick={()=>setshowmenu(!showmenu)}></img>

            <div className="mobilemenu" style={{display:showmenu? 'flex' : 'none'}}>
    <Link></Link>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="mobileitem" onClick={()=>setshowmenu(false)}>Home</Link>
    <Link activeClass='active' to='resume-section' spy={true} smooth={true} offset={-50} duration={500} className="mobileitem" onClick={()=>setshowmenu(false)}>Portfolio</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="mobileitem" onClick={()=>setshowmenu(false)}>About</Link>
    <Link activeClass='active' to='projects-section' spy={true} smooth={true} offset={0} duration={500} className="mobileitem" onClick={()=>setshowmenu(false)}>Projects</Link>
    <Link activeClass='active' to='contactpagetitle' spy={true} smooth={true} offset={0} duration={500} className="mobileitem" onClick={()=>setshowmenu(false)}>Contact</Link>
</div>



        </nav>
    );

}
export default Navbar;
