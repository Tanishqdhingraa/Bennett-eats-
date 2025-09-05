import React from 'react'
import about from "../assets/about.jpeg"
import { ABOUT } from '../constants'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className='bg-black container mx-auto mb-8' id='about'>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once : true}}
          transition={{ duration: 2 , delay:1 }}
           className=' text-white text-center my-8 tracking-tighter lg:text-4xl'>
        About us 
      </motion.h2>

      <div className='flex flex-wrap items-center'>
        {/* Image Section */}
        <div className='w-full p-4 lg:w-1/2 flex justify-center fade-up'>
          <img
            src={about}
            className='rounded-3xl lg:rotate-3 max-w-md w-full '
            alt="About us"
          />
        </div>

        {/* Text Section */}
        <div className='w-full px-4 lg:w-1/2 lg:text-left fade-up delay-200'>
          <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once : true}}
          transition={{ duration: 2 , delay:1 }}
          className='text-4xl text-white tracking-tighter lg:text-7xl'>
            {ABOUT.header}
          </motion.h2>
          <motion.div   initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once : true}}
          transition={{ duration: 2 , delay:1 }} className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3'></motion.div>
          <motion.p   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once : true}}
          transition={{ duration: 3 , delay:1 }}
          className='m-4 text-2xl text-white leading-relaxed tracking-tight lg:max-w-xl'>
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default About
