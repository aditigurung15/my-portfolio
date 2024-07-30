import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      setBubbles((bubbles) => [
        ...bubbles,
        {
          id: id,
          left: Math.random() * 100,
          borderColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)`,
          size: Math.random() * 10 + 10,
        },
      ]);

      setTimeout(() => {
        setBubbles((bubbles) => bubbles.filter((bubble) => bubble.id !== id));
      }, 4000);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     {/* <Navbar /> */}

  
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/services" element={<Services />}></Route>

          </Routes>
        

          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="bubble"
              style={{
                left: `${bubble.left}%`,
                borderColor: bubble.borderColor,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
            />
          ))}
      

     
      
    </>
  );
}

//  <script src="https://kit.fontawesome.com/b6a2455e06.js" crossorigin="anonymous"></script> 
export default App;
