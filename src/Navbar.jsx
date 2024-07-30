import React, { useState } from 'react'
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Link } from 'react-router-dom'



const navbar = () => {

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
  <li><Link to="/" className='abc'> ( Home )</Link></li>
  <li><Link to="/about" className='abc'>About</Link></li>
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

{/* <BrowserRouter>
    
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/services' element={<Services/>}></Route>
      <Route exact path='/projects' element={<Projects/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    
    </Routes>
    
    </BrowserRouter> */}

{/* <Link to="/" className='abc'> Home</Link>
<Link to="/about" className='abc'>About us</Link>
<Link to="/contact" className='abc'>contact</Link>
<Link to="/projects" className='abc'>contact</Link>
<Link to="/services" className='abc'>contact</Link> */}



</>
  )
}

export default navbar