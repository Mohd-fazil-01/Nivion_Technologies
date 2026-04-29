import React, { useEffect } from 'react'
import { initScrollEffect } from './utils/scrollEffect'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import WhyUs from './components/WhyUs'
import Animate from './components/Animate'
import Contact from './components/Contact'

const App = () => {

  useEffect(() => {
    const cleanup = initScrollEffect();

    return cleanup; 
  }, []);

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <WhyUs/>
      <Animate/>
      <Contact/>
    </>
  )
}

export default App;