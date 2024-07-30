import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"

const Projects = () => {

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
  <li><Link to="/" className='abc'> Home</Link></li>
  <li><Link to="/about" className='abc'>About</Link></li>
  <li><Link to="/services" className='abc'>Services</Link></li>
  <li><Link to="/projects" className='abc'>(Projects)</Link></li>
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

    
    
<center>

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

  <a href="https://weather-example-nu.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="weather.png" alt="" width={300} height={200}/> */}
  </div>
  <div className="project1">
  
  <div className="project-info">
  <p>Project 2: Signature-Clear-Download</p>
  <p>The app has been crafted using HTML, CSS and Javascript.</p>
  <p>Enabling the feature to create, clear, download and retrieve a signature</p>

  <a href="https://signature-xi-one.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="signature.png" alt="" width={300} height={200}/> */}
  </div>


  <div className="project1">
  <div className="project-info">
  <p>Project 3: Chuck Norris Jokes Generator</p>
  <p>The app has been crafted using HTML, CSS and Javascript.</p>
  <p>The interface has a button that generates joke upon clicking.</p>

  <a href="https://jokes-api-zeta.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="joke.png" alt="" width={350} height={170}/> */}
  </div>


  <div className="project1">
  <div className="project-info">
  <p>Project 4: Simple Calculator</p>
  <p>The app has been crafted using React library.</p>
  <p>The app performs airthmetic operations and calculates the result.</p>

  <a href="https://simple-calculator-gules-three.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="calculator.png" alt="" width={300} height={200}/> */}
  </div>


  
  <div className="project1">
  <div className="project-info">
  <p>Project 5: Simple Shopping cart</p>
  <p>The app has been crafted using React library.</p>
  <p>The app adds an item to the cart and removes it on the clicking the add and remove button. Two buttons '+' and '-' are also present to increase and decrease no. of products.</p>

  <a href="https://simple-shopping-cart-omega.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="shopping.png" alt="" width={500} height={300}/> */}
  </div>



  <div className="project1">
  <div className="project-info">
  <p>Project 6: Simple Registration Page</p>
  <p>The app has been crafted using React library.</p>
  <p>The app performs airthmetic operations and calculates the result.</p>

  <a href="https://registration-page-kappa.vercel.app/"><button>Git access to the code</button></a>
  </div>
  {/* <img src="registration.png" alt="" width={300} height={200}/> */}
  </div>


  
</div>
      </div>
      </center>
        
        </>
          )
}

export default Projects