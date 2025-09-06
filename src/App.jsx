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
import Credits from './components/Credits'


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
   <Credits/>
    </main>
      
  )
}

export default App
