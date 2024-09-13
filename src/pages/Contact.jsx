import React, { useState } from "react";
import navbar from "../Navbar";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

const ContactForm = () => {
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
  }




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
    <>
   
   <div className='navcontainer'>
<div className="navcon">
<h3>Time to create...</h3>
<ul>
  <li><Link to="/" className='abc'> Home </Link></li>
  <li><Link to="/about" className='abc'>About</Link></li>
  <li><Link to="/services" className='abc'>Services</Link></li>
  <li><Link to="/projects" className='abc'>Projects</Link></li>
  <li><Link to="/contact" className='abc' style={{color:"#00FFFF"}}>( Contact )</Link></li>
</ul>
</div>




</div> 

{/* <div className="container">

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
    </div> */}





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
    
</>
  )
};


{/* const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginTop: '10px',
    fontWeight: 'bold'
  },
  input: {
    marginTop: '5px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  textarea: {
    marginTop: '5px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
    resize: 'vertical'
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}; */}

export default ContactForm;


    
