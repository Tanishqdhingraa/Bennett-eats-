import React from 'react'
import{DISHES} from "../constants"
import DishCard from './DishCard'
const Dishes = () => {
  return (
    <section className='border-[80] border-black container mx-auto py-16 bg-black' id='dishes' >
        <h1 className='text-white text-center my-8 tracking-tighter lg:text-4xl'>
  Our Dishes
</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 place-items-center'>
  {DISHES.map((project, index) => (
    <DishCard key={index} project={project} />
  ))}
</div>

    </section>
  )
}

export default Dishes
