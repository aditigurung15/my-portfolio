import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import './Project.css'

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
          {[
            {
              title: "Project 1: Weather App",
              description: "The app has been crafted using HTML, CSS and Javascript. It sets the details of weather for every 3 hours.",
              link: "https://weather-example-nu.vercel.app/",
            },
            {
              title: "Project 2: Signature-Clear-Download",
              description: "The app has been crafted using HTML, CSS and Javascript. Enabling the feature to create, clear, download and retrieve a signature.",
              link: "https://signature-xi-one.vercel.app/",
            },
            {
              title: "Project 3: Chuck Norris Jokes Generator",
              description: "The app has been crafted using HTML, CSS and Javascript. The interface has a button that generates a joke upon clicking.",
              link: "https://jokes-api-zeta.vercel.app/",
            },
            {
              title: "Project 4: Simple Calculator",
              description: "The app has been crafted using React library. The app performs arithmetic operations and calculates the result.",
              link: "https://simple-calculator-gules-three.vercel.app/",
            },
            {
              title: "Project 5: Simple Shopping Cart",
              description: "The app has been crafted using React library. The app adds an item to the cart and removes it by clicking the add and remove button. Two buttons '+' and '-' are also present to increase and decrease the number of products.",
              link: "https://simple-shopping-cart-omega.vercel.app/",
            },
            {
              title: "Project 6: Simple Registration Page",
              description: "The app has been crafted using React library. The app performs arithmetic operations and calculates the result.",
              link: "https://registration-page-kappa.vercel.app/",
            },
          ].map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-info">
                <p>{project.title}</p>
                <p>{project.description}</p>
                <a href={project.link}><button>Git access to the code</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
