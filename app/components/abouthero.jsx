'use client'
import React from 'react'

const Abouthero = (props) => {
  return (
    <div className='bg-[url("/allactvities.jpg")] h-[30vh] bg-cover bg-center bg-fixed flex items-center lg:h-[70vh] sm:h-[50vh]'>
        <div className='w-full h-[30vh] bg-neutral-950 absolute opacity-40 lg:h-[70vh] sm:h-[50vh]'></div>
        <div className='container mx-auto px-4 max-w-[450px] text-white relative'>
          <h1 className='text-center text-5xl'>{props.title}</h1>
        </div>
    </div>
  )
}

export default Abouthero