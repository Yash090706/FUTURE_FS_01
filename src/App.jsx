import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Resume from './components/portfolio/resume';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App(){
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  )
}
export default App;