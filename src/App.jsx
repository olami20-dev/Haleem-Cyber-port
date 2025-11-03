import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// import AOS from 'aos'
// import 'aos/dist/aos.css'


const App = () => {

  //  useEffect(() => {
  //   AOS.init({
  //     duration: 1200, 
  //     offset: 120,   
  //      easing: "ease-in-out", 
  //     once: true,     
  //   });
  // }, []);

 

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
