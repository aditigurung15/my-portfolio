import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../Navbar";
import { GiHamburgerMenu } from "react-icons/gi"



const About = () => {
  const [isopen, setIsopen] = useState(false)

  const togglemenu=()=>{
    setIsopen(!isopen)
  }

  
const frontend = () =>{
const frontendSkill=(
  <div>
  <h3>HTML</h3>
    <input type="range" name="" id="" min={80} max={100} />
  </div>
)
  
}

  return (
    <>
<div className='navcontainer'>
<div className="navcon">
<h3>Time to create...</h3>
<ul>
  <li><Link to="/" className='abc'>Home</Link></li>
  <li><Link to="/about" className='abc'>(About)</Link></li>
  <li><Link to="/services" className='abc'>Services</Link></li>
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



      <div className="about">

      <div className="about-image">
          <img src="https://i.vimeocdn.com/video/1033883228-628925d1f334b7159c8f7105cc8b418d6c62e9d26841783a60c033657857a8b9-d_640?f=webp" alt="" />
        </div>

<div className="about-me">
      <h1>About Me</h1>
        <p>
          As a front-end developer, I am at the creative forefront of web
          development, blending design and technical skills to craft engaging
          user experiences. Meticulously translate concepts into responsive,
          interactive interfaces that users love to navigate. Your toolkit
          includes HTML, CSS, and JavaScript, alongside library like React, 
          enabling to bring designs to life seamlessly across
          devices. The role is pivotal in shaping how users perceive and
          interact with websites and applications, making usability and
          aesthetic appeal your guiding principles. Whether optimizing
          performance, ensuring accessibility, or embracing emerging
          technologies, I thrive at the intersection of design and
          functionality, elevating digital experiences with every line of code
          written.
        </p>
</div>
       
      </div>
      

   
  




  </>
  );
};

export default About;
