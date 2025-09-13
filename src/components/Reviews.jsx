import React from 'react'
import { REVIEW } from '../constants'
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"


const Reviews = () => {
  return (
    <section className='container mx-auto mb-8 mt-12' id='review'>
      {/* Review Text */}
      <p className='mb-10 text-3xl font-light text-center tracking-tighter text-white lg:max-w-4xl lg:mt-40 lg:text-[3.5rem] mx-auto'>
  {REVIEW.content}
</p>


      {/* Reviewer Info */}
      <div className='flex items-center justify-center gap-6'>
        <img
          src={xaviour}
          width={80}
          height={80}
          alt={REVIEW.name}
          className='rounded-full border'
        />
        <div className='tracking-tighter'>
          <h6 className='text-lg font-semibold text-white'>{REVIEW.name}</h6>
          <p initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once : true}}
          transition={{ duration: 3 , delay:1 }} className='text-sm text-neutral-300'>{REVIEW.profession}</p>
        </div>
      </div>

      {/* Customer Images */}
      <div className='mt-14 flex flex-col items-center justify-center gap-4 md:flex-row'>
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt='customer'
            className='h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover'
          />
        ))}
      </div>
    </section>
  )
}

export default Reviews
