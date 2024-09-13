import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './Services.css'

const Services = () => {
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
            <li><Link to="/" className="abc">Home</Link></li>
            <li><Link to="/about" className="abc">About</Link></li>
            <li><Link to="/services" className="abc" style={{ color: "#00FFFF" }}>( Services )</Link></li>
            <li><Link to="/projects" className="abc">Projects</Link></li>
            <li><Link to="/contact" className="abc">Contact</Link></li>
          </ul>
          <div className="ham-menu" onClick={togglemenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      <div className="services-container">
        <h2 className="section-title">Services</h2>

        <div className="services-content">
          <div className="service-card">
            <h3>Website Development</h3>
            <p>
              Can build custom websites and admin panels from scratch or using
              Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop
              responsive, visually appealing, and user-friendly interfaces.
            </p>
          </div>

          <div className="service-card">
            <h3>User Interface (UI) Design</h3>
            <p>
              Create attractive and intuitive user interfaces that enhance the
              user experience (UX) and align with the client's brand identity.
              Offer wireframing, prototyping, and UI mockup services.
            </p>
          </div>

          <div className="service-card">
            <h3>Website Consultancy & Technical Advice</h3>
            <p>
              Offer guidance and expertise to clients on frontend technologies,
              best practices, and industry trends. Help clients make informed
              decisions about their web development projects.
            </p>
          </div>

          <div className="service-card">
            <h3>Responsive Web Design & Optimization</h3>
            <p>
              Adapt existing websites or create new ones to be responsive and
              mobile-friendly, ensuring they function well across various devices
              and screen sizes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
