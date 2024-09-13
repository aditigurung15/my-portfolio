import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Navbar from "../Navbar";
import Typed from "typed.js";
import { Link } from "react-router-dom";

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
    name: "",
    email: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };






  const [alertVisible, setAlertVisible] = useState(false);

  const [formData2, setFormData2] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler to update state when input values change
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit2 = (event) => {
    event.preventDefault();

    // Here, you can perform form submission actions
    // For example, send formData to a server or an API endpoint
    console.log('Form Submitted:', formData);

    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Optionally, you can show a success message or perform further actions

    // Show the custom alert
    setAlertVisible(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };





  return (
    <section className="home-container">
      <div className="navcontainer">
        <div className="navcon">
          <h3>Time to create...</h3>
          <ul>
            <li>
              <Link to="/" className="abc">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="abc">
                About
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
        </div>
      </div>

      <div className="homes">
        <div className="left-home">
          <h2>Namaste</h2>
          <h2>I'm Aditi!</h2>
          <h3 ref={typedref} className="typed-text"></h3>
          <p>
            A creative architect of user experiences, proficient in crafting
            responsive and visually appealing web interfaces using HTML, CSS,
            and JavaScript, including React. Specialized in transforming design
            concepts into interactive digital environments that enhance user
            engagement and functionality.
          </p>
          <button>Want to create magic? Let's talk!</button>
        </div>
        <div className="right-home">
          <img
            className="right-image"
            src="https://media.istockphoto.com/id/1388186992/vector/yellow-happy-face-vector-symbol-icon.jpg?s=612x612&w=0&k=20&c=GZBWkt0ZLxLHkxU58BhRqkk41xC0LySjXa0N65xMDlw="
            alt="Profile"
          />
        </div>
      </div>

      <section className="about-section">
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
              As a front-end developer, I blend design and technical skills to
              craft engaging user experiences. I translate concepts into
              responsive, interactive interfaces that users love to navigate. I
              specialize in HTML, CSS, and JavaScript, alongside libraries like
              React, enabling seamless design across devices.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Services</h2>
        <div className="services">
          <div className="service-item">
            <h3>Website Development</h3>
            <p>
              Custom websites and admin panels from scratch or using Figma to
              ReactJS, Figma to NextJS, and PSD to HTML.
            </p>
          </div>
          <div className="service-item">
            <h3>User Interface UI Design</h3>
            <p>
              Attractive, intuitive user interfaces that enhance user
              experience, with wireframing, prototyping, and UI mockup services.
            </p>
          </div>
          <div className="service-item">
            <h3>Website Consultancy & Technical Advice</h3>
            <p>
              Guidance on frontend technologies, best practices, and industry
              trends.
            </p>
          </div>
          <div className="service-item">
            <h3>Responsive Web Design & Optimization</h3>
            <p>
              Adapt or create responsive websites to function well across
              devices and screen sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h1 className="project-title">
          Review my <span className="highlight">Latest</span> projects
        </h1>
        <div className="projects">
          {/* Example of a project */}
          <div className="project-item">
            <p>Project 1: Weather App</p>
            <p>
              A weather app crafted using HTML, CSS, and JavaScript that shows
              weather details every 3 hours.
            </p>
            <a
              href="https://weather-example-nu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>



          <div className="project-item">
            <p>Project 2: SIGNATURE-CLEAR-DOWNLOAD</p>
            <p>
            The app has been crafted using HTML, CSS and JavaScript. Enabling the feature to create, clear, download and retrieve a signature.
            </p>
            <a
              href="https://signature-xi-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>




          <div className="project-item">
            <p>Project 3: CHUCK NORRIS JOKE GENERATOR </p>
            <p>
            The app has been crafted using HTML, CSS and JavaScript. The interface has a button that generates joke         upon clicking. 
            </p>
            <a
              href="https://jokes-api-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>





          <div className="project-item">
            <p>Project 4: SIMPLE SHOPPING CART </p>
            <p>
            The app has been crafted using React library. The app adds an item to the cart and removes it on the clicking the add and remove button. Two buttons '+' and '-' are also present to increase and decrease no. of products.
            </p>
            <a
              href="https://simple-shopping-cart-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>





          <div className="project-item">
            <p>Project 5: SIMPLE REGISTRATION PAGE </p>
            <p>
            | The app has been crafted using React library. The app performs arithmetic operations and calculates the result
            </p>
            <a
              href="https://registration-page-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>




          <div className="project-item">
            <p>Project 6: GALLARY IMAGES  </p>
            <p>
            When clicked on "+Add image" button a new window pops up to add new images to the gallery. Left and right arrow buttons to be used to scroll the images
            </p>
            <a
              href="https://assignment-seven-silk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Git access to the code</button>
            </a>
          </div>




        </div>
      </section>

<section className="contact-section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit2} className="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange2}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange2}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange2}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {/* Custom Alert */}
        {alertVisible && (
            <div className="custom-alert">
              <p>Your message has been sent!</p>
            </div>
          )}


      </div>
    </section>
    </section>
  );
};

export default Home;
