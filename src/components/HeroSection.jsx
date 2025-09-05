import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import video from "../assets/hero.mp4";
// import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Background video */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1  
        initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
       alt="restaura" className="w-full p-4 text-[200px]" >Bennett Eats </motion.h1>
        <p className="p-2 text-5xl  tracking-tighter text-white">New Delhi</p>
      </div>
    </section>
  );
};

export default HeroSection; 
