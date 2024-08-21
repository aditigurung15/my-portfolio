import React, { useEffect, useRef, useState } from "react";
import "../App.css";

import Navbar from "../Navbar";
import Typed from "typed.js";



const Home = () => {
  const typedref = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Front end developer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedref.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Here you can implement the form submission logic, e.g., sending data to a server
    };



      const [isopen, setIsopen] = useState(false)
    
      const togglemenu=()=>{
        setIsopen(!isopen)
      };
  
  return (
    <>
<Navbar />





      <div className="homes">
        <div className="left-home">
          <h2>Namaste</h2>
          <h2>I'm Aditi!</h2>
          <h3 ref={typedref} style={{fontFamily:"sans-serif", color:"aqua"}}></h3>
          <p>
            A creative architect of user experiences, proficient in crafting
            responsive and visually appealing web interfaces using HTML, CSS,
            and JavaScript, including React. Specialized in transforming design concepts into
            interactive digital environments that enhance user engagement and
            functionality.
          </p>
        <button>Want to create magic? Let's talk!</button>
        </div>
        <div className="right-home">
        
          <img
            className="right-image"
            src="https://media.istockphoto.com/id/1388186992/vector/yellow-happy-face-vector-symbol-icon.jpg?s=612x612&w=0&k=20&c=GZBWkt0ZLxLHkxU58BhRqkk41xC0LySjXa0N65xMDlw="
            alt=""
          />


        </div>
      </div>


      <section className="About-me">

<div className="about">

<div className="about-image">
    <img src="https://i.vimeocdn.com/video/1033883228-628925d1f334b7159c8f7105cc8b418d6c62e9d26841783a60c033657857a8b9-d_640?f=webp" alt="" />
  </div>
  
<div className="about-me">
<h1>About Me</h1>
  <p>
    As a front-end developer, I am at the creative forefront of web
    development, blending design and technical skills to craft engaging
    user experiences. You meticulously translate concepts into responsive,
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


</section>


<section className="service">
<center>
<div className="services">
      <div>

        <div className="website-dev1">

        <div>
          <h3>Website Development</h3>
          <p>
            Can build custom websites and admin panels from scratch or using
            Figma to ReactJs. Develop responsive, visually appealing, and user-friendly interfaces.
          </p>
          </div>

     

          <div>
          <h3>User interface UI Design</h3>
          <p>
            Create attractive and intuitive user interfaces that enhance the
            user experience (UX) and align with the client's brand identity.
            Offer wireframing, prototyping, and UI mockup services.
          </p>
        </div>
        </div>
        </div>

        <h2>Services</h2>


<div>
        
        <div className="website-dev2">
        <div>
          <h3>Website Consultancy & Technical Advice</h3>
          <p>
            Offer guidance and expertise to clients on frontend technologies,
            best practices, and industry trends. Help clients make informed
            decisions about their web development projects.
          </p>
        
</div>
        <div>
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
     </center>
</section>


<center>
<section className="project">

<div className="project-container">
      <div className="latest">
      <h1>Review my <span style={{color:"aqua"}}>Latest</span> projects</h1>
</div>

<div className="projects">
  <div className="project1">
  <div className="project-info">
  <p>Project 1: Weather App</p>
  <p>The app has been crafted using HTML, CSS and Javascript.
  It sets the details of weather for every 3 hours.</p>

  <a href="https://weather-example-nu.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="weather.png" alt="" width={300} height={200}/> */}
  </div>
  <div className="project1">
  
  <div className="project-info">
  <p>Project 2: Signature-Clear-Download</p>
  <p>The app has been crafted using HTML, CSS and Javascript.</p>
  <p>Enabling the feature to create, clear, download and retrieve a signature</p>

  <a href="https://signature-xi-one.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="signature.png" alt="" width={300} height={200}/> */}
  </div>


  <div className="project1">
  <div className="project-info">
  <p>Project 3: Chuck Norris Jokes Generator</p>
  <p>The app has been crafted using HTML, CSS and Javascript.</p>
  <p>The interface has a button that generates joke upon clicking.</p>

  <a href="https://jokes-api-zeta.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="joke.png" alt="" width={350} height={170}/> */}
  </div>


  <div className="project1">
  <div className="project-info">
  <p>Project 4: Simple Calculator</p>
  <p>The app has been crafted using React library.</p>
  <p>The app performs airthmetic operations and calculates the result.</p>

  <a href="https://simple-calculator-gules-three.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="calculator.png" alt="" width={300} height={200}/> */}
  </div>


  
  <div className="project1">
  <div className="project-info">
  <p>Project 5: Simple Shopping cart</p>
  <p>The app has been crafted using React library.</p>
  <p>The app adds an item to the cart and removes it on the clicking the add and remove button. Two buttons '+' and '-' are also present to increase and decrease no. of products.</p>

  <a href="https://simple-shopping-cart-omega.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="shopping.png" alt="" width={500} height={300}/> */}
  </div>



  <div className="project1">
  <div className="project-info">
  <p>Project 6: Simple Registration Page</p>
  <p>The app has been crafted using React library.</p>
  <p>The app will help to register a user and login tp the page. User can log out by clicking on the logout button.</p>

  <a href="https://registration-page-kappa.vercel.app/" target="_blank"><button>Git access to the code</button></a>
  </div>
  {/* <img src="registration.png" alt="" width={300} height={200}/> */}
  </div>


  
</div>
      </div>
</section>
</center>



<section className="contact">
<div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
</section>


</>
  );
};

export default Home;
