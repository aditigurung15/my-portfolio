import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './About.css'

const About = () => {
  const [isopen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div className="navcontainer">
        <div className="navcon">
          <h3>Time to create...</h3>
          <ul className={`menu ${isopen ? "open" : ""}`}>
            <li>
              <Link to="/" className="abc">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="abc" style={{ color: "#00FFFF" }}>
                ( About )
              </Link>
            </li>
            <li>
              <Link to="/services" className="abc">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="abc">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="abc">
                Contact
              </Link>
            </li>
          </ul>
          <div className="ham-menu" onClick={togglemenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about">
          <div className="about-image">
            <img
              src="https://i.vimeocdn.com/video/1033883228-628925d1f334b7159c8f7105cc8b418d6c62e9d26841783a60c033657857a8b9-d_640?f=webp"
              alt="About Me"
            />
          </div>

          <div className="about-me">
            <h1>About Me</h1>
            <p>
              As a front-end developer, I am at the creative forefront of web
              development, blending design and technical skills to craft engaging
              user experiences. Meticulously translate concepts into responsive,
              interactive interfaces that users love to navigate. Your toolkit
              includes HTML, CSS, and JavaScript, alongside libraries like React,
              enabling designs to life seamlessly across devices. The role is pivotal in shaping how users perceive and interact with websites and applications, making usability and aesthetic appeal guiding principles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
