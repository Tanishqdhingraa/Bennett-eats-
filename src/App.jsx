import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expert from './components/Expert'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='overflow-y-hidden text-white antialiased'>
      <HeroSection/>
      <Navbar/>
    <Dishes/>
    <About/>
    <Mission/>
   <Expert/>
   <Reviews/>
   <Contact/>
   <Footer/>
    </main>
      
  )
}

export default App
