import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

const Services = () => {

  const [isopen, setIsopen] = useState(false)

  const togglemenu=()=>{
    setIsopen(!isopen)
  }

  return (
    <>
      <div className='navcontainer'>
<div className="navcon">
<h3>Time to create...</h3>
<ul>
  <li><Link to="/" className='abc'>Home</Link></li>
  <li><Link to="/about" className='abc'>About</Link></li>
  <li><Link to="/services" className='abc' style={{color:"#00FFFF"}}>(Services)</Link></li>
  <li><Link to="/projects" className='abc'>Projects</Link></li>
  <li><Link to="/contact" className='abc'>contact</Link></li>
</ul>
</div>




</div> 

<div className="container">

<div className="ham-menu" onClick={togglemenu}><GiHamburgerMenu />
</div>

<div >
  <ul className= {`nenu ${isopen? "open": ""}`}>
    <li>Home</li>
    <li>About</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Contact</li>

  </ul>
</div>
    </div>



      <div className="services">


      <h2 style={{color:"aqua"}}>Services</h2>


      <div>

        <div className="website-dev1">


     

        <div style={{padding:"20px"}}>
          <h3>Website Development</h3>



          <p>
            Can build custom websites and admin panels from scratch or using
            Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop
            responsive, visually appealing, and user-friendly interfaces.
          </p>
          </div>

     

          <div style={{padding:"40px"}}>
          <h3 >User interface UI Design</h3>
          <p>
            Create attractive and intuitive user interfaces that enhance the
            user experience (UX) and align with the client's brand identity.
            Offer wireframing, prototyping, and UI mockup services.
          </p>
        </div>
        </div>
        </div>

     


<div>
        
        <div className="website-dev2">
        <div style={{padding:"20px"}}>
          <h3>Website Consultancy & Technical Advice</h3>
          <p>
            Offer guidance and expertise to clients on frontend technologies,
            best practices, and industry trends. Help clients make informed
            decisions about their web development projects.
          </p>
        
</div>
        <div style={{padding:"35px"}}>
          <h3>Responsive Web Design & Optimization</h3>
          <p>
            Adapt existing websites or create new ones to be responsive and
            mobile-friendly, ensuring they function well across various devices
            and screen sizes.
          </p>
        </div>
        </div>
        </div>
     </div>
    </>
  );
};

export default Services;
