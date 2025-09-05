import React from 'react'

const DishCard = ({ project }) => {
  return (
    <div
      className='bg-white text-black  rounded-3xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl  mt-5 cursor-pointer'
    >
      <img
        src={project.image}
        alt={project.title}
        className='rounded-t-3xl w-full h-56 object-cover'
      />
      <div className='p-4'>
        <h3 className='mb-2 text-2xl font-bold tracking-tighter'>
          {project.title}
        </h3>
        <p className='text-sm text-gray-600'>
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default DishCard
