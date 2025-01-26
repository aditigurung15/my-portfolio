import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import './Project.css';

const Projects = () => {
  const [isopen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div className='navcontainer'>
        <div className="navcon">
          <h3>Time to create...</h3>
          <ul className={`menu ${isopen ? "open" : ""}`}>
            <li><Link to="/" className='abc'>Home</Link></li>
            <li><Link to="/about" className='abc'>About</Link></li>
            <li><Link to="/services" className='abc'>Services</Link></li>
            <li><Link to="/projects" className='abc' style={{ color: "#00FFFF" }}>( Projects )</Link></li>
            <li><Link to="/contact" className='abc'>Contact</Link></li>
          </ul>
          <div className="ham-menu" onClick={togglemenu}><GiHamburgerMenu /></div>
        </div>
      </div>

      <div className="project-container">
        <div className="latest">
          <h1>Review my <span style={{ color: "aqua" }}>Latest</span> projects</h1>
        </div>

        <div className="projects">
          {[{
            title: "Project 1: Weather App",
            description: "A react weather app that fetches real-time weather data.",
            link: "https://weather-example-nu.vercel.app/",
            buttons: ["React", " fetchAPI", " React.component"]  // Text button with "React"
          },
          {
            title: "Project 2: Signature-Clear-Download",
            description: "An app to create, clear, download, and retrieve signatures using HTML, CSS, and JavaScript.",
            link: "https://signature-xi-one.vercel.app/",
            buttons: ["HTML", "CSS", "JavaScript"]  // Text buttons with tech names
          },
        
          {
            title: "Project 5: Simple Shopping Cart",
            description: "A shopping cart built with React, supporting add/remove items and quantity control.",
            link: "https://simple-shopping-cart-omega.vercel.app/",
            buttons: ["React", "Hooks", "Javascript"] // Text button with "React"
          }].map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-info">
                <p>{project.title}</p>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button>Git access to the website</button>
                </a>
                <div className="project-buttons">
                  {/* Display technology text boxes */}
                  {project.buttons.map((text, idx) => (
                    <span key={idx} className="tech-box">{text}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
