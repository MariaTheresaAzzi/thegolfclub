import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Ourclub = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:w-1/2'>
          <Image src="/golfguy1.png" width={720} height={700} alt='golf guy'
          className="w-full h-full top-0 left-0 object-cover"/>
        </div>
        <div className='greenbg text-white p-10 md:w-1/2 '>
        <h1 className='text-2xl'>Our Club history</h1>
        <br></br><p className='text-sm sm:text-lg'>"The Golf Club of Lebanon" (GCL) was established in 1923, according to the records of the Royal and Ancient Golf Club of St Andrews, known as the “Home of Golf”. It is the oldest and largest golf club in Lebanon, and the only one still standing today from the four golf clubs that were present.
         Located adjacent to the Mediterranean Sea, at a short distance from Rafic Hariri International Airport, the GCL is one of the largest green areas in Beirut and one of the most beautiful, uplifting and awe inspiring areas in Lebanon, having many trees, plant species and greenery in its grounds.</p>
        <br></br><Link href='/abouthistory'>Learn more <span aria-hidden="true">→</span></Link>
        </div>
    </div>
  )
}

export default Ourclub