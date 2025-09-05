import React from "react";
import { CUSINES } from "../constants";


const Expert = () => {
  return (
    <section id="expertise">
      <h2 className="text-white text-center my-8 tracking-tighter lg:text-4xl">
        Our expertise
      </h2>

      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 50 }}             // start invisible, pushed down
            whileInView={{ opacity: 1, y: 0 }}          // animate when in view
            viewport={{ once: true, amount: 0.2 }}      // only once, when 20% in view
            transition={{ duration: 0.8, delay: index * 0.2 }} // stagger items
            className="flex flex-col lg:flex-row items-center lg:items-start 
                       border-b-4 border-solid border-neutral-700/40 py-8 gap-6"
          >
            {/* (Optional number / icon space) */}
            <div className="flex-shrink-0 text-4xl lg:text-6xl font-bold text-rose-400 lg:pr-8 mb-4 lg:mb-0">
              {index + 1}
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="w-full h-64 lg:h-48 object-cover rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 lg:pl-8 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl uppercase tracking-tighter text-rose-400 mb-4">
                {cusine.title}
              </h3>
              <p className="text-base lg:text-lg leading-relaxed tracking-tight text-white">
                {cusine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expert;
